import React, { useState, useEffect, useRef } from 'react';
import {
    UserCheck,
    Layers,
    MessageSquare,
    AlertCircle,
    BarChart3,
    ShieldCheck,
    CheckCircle2,
    XCircle,
    Users,
    TrendingUp,
    Briefcase,
    Layout,
    Network
} from 'lucide-react';

/* --- Hooks & Utility Components --- */

const useScrollVisibility = (threshold = 0.1) => {
    const [isVisible, setIsVisible] = useState(false);
    const ref = useRef(null);

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setIsVisible(true);
                }
            },
            { threshold }
        );
        if (ref.current) observer.observe(ref.current);
        return () => observer.disconnect();
    }, [threshold]);

    return [ref, isVisible];
};

const AnimatedSection = ({ children, delay = 0, className = "" }) => {
    const [ref, isVisible] = useScrollVisibility(0.1);

    return (
        <div
            ref={ref}
            className={`transform transition-all duration-1000 ease-out ${className}`}
            style={{
                opacity: isVisible ? 1 : 0,
                transform: isVisible ? 'translateY(0)' : 'translateY(40px)',
                transitionDelay: `${delay}ms`
            }}
        >
            {children}
        </div>
    );
};

export default function DedicatedAccountManager() {
    return (
        <div className="min-h-screen bg-[#050505] text-white font-sans selection:bg-orange-600/30">
            {/* Background Ambience */}
            <div className="fixed inset-0 pointer-events-none z-0">
                <div className="absolute top-[-20%] right-[-10%] w-[800px] h-[800px] bg-orange-600/5 rounded-full blur-[120px]" />
                <div className="absolute bottom-[-10%] left-[-10%] w-[600px] h-[600px] bg-cyan-600/5 rounded-full blur-[100px]" />
            </div>

            {/* Hero Section */}
            <section className="relative min-h-[85vh] flex items-center justify-center px-6 overflow-hidden pt-20">
                <div className="max-w-7xl mx-auto relative z-10 w-full text-center">
                    <AnimatedSection>
                        <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/5 backdrop-blur-sm border border-white/10 rounded-full mb-8 hover:bg-white/10 transition-colors cursor-default">
                            <span className="w-2 h-2 rounded-full bg-orange-500 animate-pulse" />
                            <span className="text-xs font-semibold tracking-wide uppercase text-neutral-300">Strategic Coordination Layer</span>
                        </div>

                        <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold mb-8 leading-[0.95] tracking-tight">
                            BPP Dedicated <br />
                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-500 to-amber-500">
                                Account Manager
                            </span>
                        </h1>

                        <p className="text-xl md:text-2xl text-neutral-400 mb-10 leading-relaxed max-w-3xl mx-auto font-light">
                            One Strategic Point of Control for Large-Scale Operations.
                        </p>

                        <div className="flex flex-wrap justify-center gap-4">
                            {[
                                "Single Point of Control",
                                "Strategic Coordination",
                                "Chaos-Free Scale"
                            ].map((item, i) => (
                                <div key={i} className="px-6 py-3 bg-white/5 border border-white/10 rounded-full backdrop-blur-sm text-neutral-300 flex items-center gap-2">
                                    <UserCheck size={16} className="text-orange-500" />
                                    {item}
                                </div>
                            ))}
                        </div>
                    </AnimatedSection>
                </div>
            </section>

            {/* Why Needed */}
            <section className="py-24 px-6 relative z-10 bg-neutral-900/30 border-y border-white/5">
                <div className="max-w-7xl mx-auto">
                    <div className="grid lg:grid-cols-2 gap-16 items-center">
                        <AnimatedSection>
                            <h2 className="text-3xl md:text-5xl font-bold mb-8 leading-tight">
                                Why BPPs <span className="text-orange-500">Need a DAM</span>
                            </h2>
                            <p className="text-neutral-400 text-lg mb-8 leading-relaxed">
                                BPPs operate at a multi-vertical, multi-IPP, and high-volume level. Without a dedicated layer, this leads to fragmented communication and loss of control.
                            </p>
                            <div className="p-6 bg-orange-500/10 border-l-4 border-orange-500 rounded-r-lg">
                                <p className="text-lg text-white font-medium">
                                    Zryoss assigns one accountable owner for the entire BPP engagement.
                                </p>
                            </div>
                        </AnimatedSection>

                        <AnimatedSection delay={200}>
                            <div className="space-y-4">
                                {[
                                    { text: "Fragmented communication", icon: MessageSquare },
                                    { text: "Conflicting updates", icon: AlertCircle },
                                    { text: "Execution delays", icon: XCircle },
                                    { text: "Loss of control", icon: Layers }
                                ].map((item, i) => (
                                    <div key={i} className="flex items-center gap-4 p-4 bg-white/5 border border-white/5 rounded-xl hover:bg-white/10 transition-colors">
                                        <div className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center text-orange-500 shrink-0">
                                            <item.icon size={20} />
                                        </div>
                                        <span className="text-neutral-300 font-medium">{item.text}</span>
                                    </div>
                                ))}
                            </div>
                        </AnimatedSection>
                    </div>
                </div>
            </section>

            {/* What DAM Does */}
            <section className="py-24 px-6 relative z-10">
                <div className="max-w-5xl mx-auto text-center">
                    <AnimatedSection>
                        <h2 className="text-3xl md:text-5xl font-bold mb-12">What a Dedicated Account Manager Does</h2>
                        <div className="grid md:grid-cols-2 gap-6 text-left">
                            <div className="p-8 bg-gradient-to-br from-[#111] to-black border border-white/10 rounded-3xl h-full">
                                <h3 className="text-xl font-bold text-white mb-6 flex items-center gap-2"><CheckCircle2 className="text-green-500" /> Responsible For</h3>
                                <ul className="space-y-4">
                                    {[
                                        "Central coordination across all verticals",
                                        "Alignment between BPP strategy and execution",
                                        "Oversight of IPP-led business activity",
                                        "Execution tracking and prioritization",
                                        "Structured escalation and resolution",
                                        "Performance visibility and reporting"
                                    ].map((item, i) => (
                                        <li key={i} className="flex items-start gap-3 text-neutral-400">
                                            <div className="w-1.5 h-1.5 rounded-full bg-green-500 mt-2 shrink-0" />
                                            {item}
                                        </li>
                                    ))}
                                </ul>
                            </div>
                            <div className="p-8 bg-gradient-to-br from-[#111] to-black border border-white/10 rounded-3xl h-full">
                                <h3 className="text-xl font-bold text-white mb-6 flex items-center gap-2"><XCircle className="text-red-500" /> Does NOT Do</h3>
                                <p className="text-neutral-400 mb-6 font-medium">The DAM does not sell and does not execute—they govern and coordinate.</p>
                                <ul className="space-y-4">
                                    {[
                                        "Replace the BPP’s leadership role",
                                        "Interfere in client relationships",
                                        "Commit scope or pricing independently",
                                        "Bypass platform governance"
                                    ].map((item, i) => (
                                        <li key={i} className="flex items-start gap-3 text-neutral-400">
                                            <div className="w-1.5 h-1.5 rounded-full bg-red-500 mt-2 shrink-0" />
                                            {item}
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </div>
                    </AnimatedSection>
                </div>
            </section>

            {/* Scope of Account Management */}
            <section className="py-24 px-6 bg-[#0a0a0a] border-y border-white/5">
                <div className="max-w-7xl mx-auto">
                    <AnimatedSection className="mb-16 text-center">
                        <h2 className="text-3xl md:text-5xl font-bold mb-4">Scope of Dedicated Account Management</h2>
                        <p className="text-neutral-400">Five pillars of support for total control.</p>
                    </AnimatedSection>

                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {[
                            {
                                num: "01",
                                title: "Single Point of Communication",
                                icon: UserCheck,
                                desc: "The primary backend contact for BPP, coordinating all execution brands and managing internal alignment.",
                                note: "BPP never needs to chase multiple teams."
                            },
                            {
                                num: "02",
                                title: "Multi-Vertical Coordination",
                                icon: Layers,
                                desc: "Aligns execution timelines across brands, prevents delivery conflicts, and ensures uniform quality standards.",
                                note: "Each vertical executes independently—coordination remains centralized."
                            },
                            {
                                num: "03",
                                title: "IPP Oversight & Alignment",
                                icon: Users,
                                desc: "Ensures IPP activity aligns with platform rules. Centralizes execution and demo authority to protect integrity.",
                                note: "Protects both BPP leadership and ecosystem integrity."
                            },
                            {
                                num: "04",
                                title: "Escalation & Risk Management",
                                icon: AlertCircle,
                                desc: "Owns escalation, enforces resolution timelines, and addresses root causes systemically.",
                                note: "Problems are resolved, not passed around."
                            },
                            {
                                num: "05",
                                title: "Reporting & Strategic Visibility",
                                icon: BarChart3,
                                desc: "Provides consolidated performance reports, execution health indicators, and scale readiness insights.",
                                note: "Decisions are made on data, not assumptions."
                            }
                        ].map((item, i) => (
                            <AnimatedSection key={i} delay={i * 100}>
                                <div className="bg-white/5 border border-white/5 p-8 rounded-2xl h-full hover:bg-white/10 transition-colors flex flex-col">
                                    <div className="flex justify-between items-start mb-6">
                                        <div className="w-12 h-12 bg-white/5 rounded-xl flex items-center justify-center text-orange-500">
                                            <item.icon size={24} />
                                        </div>
                                        <span className="text-4xl font-bold text-white/5">{item.num}</span>
                                    </div>
                                    <h3 className="text-xl font-bold text-white mb-3">{item.title}</h3>
                                    <p className="text-neutral-400 mb-6 flex-grow text-sm">{item.desc}</p>
                                    <div className="pt-4 border-t border-white/5 text-xs text-orange-400/80 font-medium italic">
                                        {item.note}
                                    </div>
                                </div>
                            </AnimatedSection>
                        ))}
                    </div>
                </div>
            </section>

            {/* Scaling and Authority */}
            <section className="py-24 px-6 relative z-10">
                <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12">
                    <AnimatedSection>
                        <h3 className="text-2xl font-bold text-white mb-6">How Account Management Scales</h3>
                        <div className="bg-[#111] p-8 rounded-2xl border border-white/5 h-full">
                            <ul className="space-y-6">
                                {[
                                    { t: "Account capacity scales internally", d: "More resources added as BPP grows." },
                                    { t: "Additional coordination resources", d: "For complex multi-vertical ops." },
                                    { t: "Systems remain unchanged", d: "Standardized processes handling volume." }
                                ].map((item, i) => (
                                    <li key={i} className="flex gap-4">
                                        <TrendingUp className="text-blue-500 shrink-0 mt-1" size={20} />
                                        <div>
                                            <h4 className="text-white font-bold text-sm">{item.t}</h4>
                                            <p className="text-neutral-400 text-xs">{item.d}</p>
                                        </div>
                                    </li>
                                ))}
                            </ul>
                            <p className="mt-8 text-sm text-neutral-500 italic border-t border-white/10 pt-4">Scale increases without increasing friction.</p>
                        </div>
                    </AnimatedSection>

                    <AnimatedSection delay={200}>
                        <h3 className="text-2xl font-bold text-white mb-6">Authority & Governance</h3>
                        <div className="bg-[#111] p-8 rounded-2xl border border-white/5 h-full">
                            <ul className="space-y-6">
                                {[
                                    { t: "All execution flows through DAM", d: "Single funnel for operations." },
                                    { t: "No bypassing account layer", d: "Execution brands stay aligned." },
                                    { t: "Governance intact at every level", d: "Compliance is non-negotiable." }
                                ].map((item, i) => (
                                    <li key={i} className="flex gap-4">
                                        <ShieldCheck className="text-orange-500 shrink-0 mt-1" size={20} />
                                        <div>
                                            <h4 className="text-white font-bold text-sm">{item.t}</h4>
                                            <p className="text-neutral-400 text-xs">{item.d}</p>
                                        </div>
                                    </li>
                                ))}
                            </ul>
                            <p className="mt-8 text-sm text-neutral-500 italic border-t border-white/10 pt-4">Governance remains intact at every level.</p>
                        </div>
                    </AnimatedSection>
                </div>
            </section>

            {/* Why It Works & CTA */}
            <section className="py-24 px-6 bg-[#080808] border-t border-white/5">
                <div className="max-w-4xl mx-auto text-center">
                    <AnimatedSection>
                        <h2 className="text-3xl font-bold mb-8">Why This Model Works at Scale</h2>
                        <div className="flex flex-wrap justify-center gap-3 mb-12">
                            {["Preserves Strategic Control", "Reduces Operational Noise", "Prevents Conflicts", "Strengthens Confidence", "Enables Sustainability"].map((tag, i) => (
                                <span key={i} className="px-4 py-2 bg-white/5 rounded-full text-sm text-neutral-300 border border-white/10 hover:border-orange-500/50 transition-colors">
                                    {tag}
                                </span>
                            ))}
                        </div>
                        <p className="text-neutral-500 mb-16 italic">Large-scale operations need clear ownership, not more people.</p>

                        <h2 className="text-4xl md:text-6xl font-bold mb-8">
                            Leadership in Front. <br />
                            <span className="text-orange-500">Control Behind.</span>
                        </h2>
                        <p className="text-xl text-neutral-400 mb-12">
                            Zryoss does not leave scale to chance. It assigns ownership.
                        </p>

                        <div className="inline-block p-1 rounded-full bg-gradient-to-r from-orange-500 to-amber-500 p-1">
                            <div className="px-12 py-6 bg-black rounded-full">
                                <h3 className="text-2xl font-bold text-white">
                                    You lead growth. Zryoss manages coordination.
                                </h3>
                            </div>
                        </div>
                    </AnimatedSection>
                </div>
            </section>
        </div>
    );
}
