import React, { useState, useEffect, useRef } from 'react';
import {
    UserCheck,
    Layers,
    AlertCircle,
    Shield,
    Briefcase,
    Clock,
    TrendingUp,
    CheckCircle2,
    XCircle,
    ShieldCheck,
    Users,
    MessageSquare,
    Zap
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

export default function AccountManagement() {
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
                            <span className="text-xs font-semibold tracking-wide uppercase text-neutral-300">Single Collaboration Layer</span>
                        </div>

                        <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold mb-8 leading-[0.95] tracking-tight">
                            IPP Account <br />
                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-500 to-amber-500">
                                Management
                            </span>
                        </h1>

                        <p className="text-xl md:text-2xl text-neutral-400 mb-10 leading-relaxed max-w-3xl mx-auto font-light">
                            One Dedicated Account Layer Between You and the Entire System.
                        </p>

                        <div className="flex flex-wrap justify-center gap-4">
                            {[
                                "IPP does not manage the backend",
                                "IPP does not chase execution",
                                "IPP operates through a dedicated structure"
                            ].map((item, i) => (
                                <div key={i} className="px-6 py-3 bg-white/5 border border-white/10 rounded-full backdrop-blur-sm text-neutral-300 flex items-center gap-2">
                                    <CheckCircle2 size={16} className="text-orange-500" />
                                    {item}
                                </div>
                            ))}
                        </div>
                    </AnimatedSection>
                </div>
            </section>

            {/* Why Exists */}
            <section className="py-24 px-6 relative z-10 bg-neutral-900/30 border-y border-white/5">
                <div className="max-w-7xl mx-auto">
                    <div className="grid lg:grid-cols-2 gap-16 items-center">
                        <AnimatedSection>
                            <h2 className="text-3xl md:text-5xl font-bold mb-8 leading-tight">
                                Why IPP Account <br />
                                <span className="text-orange-500">Management Exists</span>
                            </h2>
                            <p className="text-neutral-400 text-lg mb-8 leading-relaxed">
                                As IPPs grow, the biggest challenge is not sales—it is coordination. Zryoss eliminates this by assigning centralized account ownership.
                            </p>
                            <div className="p-6 bg-orange-500/10 border-l-4 border-orange-500 rounded-r-lg">
                                <p className="text-lg text-white font-medium">
                                    We solve the "Chaos of Coordination" so you can focus on growth.
                                </p>
                            </div>
                        </AnimatedSection>

                        <AnimatedSection delay={200}>
                            <div className="space-y-4">
                                {[
                                    { text: "Multiple teams giving mixed updates", icon: Users },
                                    { text: "Execution brands working in silos", icon: Layers },
                                    { text: "IPP stuck doing follow-ups", icon: Clock },
                                    { text: "Escalations handled informally", icon: AlertCircle }
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

            {/* What This Means */}
            <section className="py-24 px-6 relative z-10">
                <div className="max-w-5xl mx-auto text-center">
                    <AnimatedSection>
                        <h2 className="text-3xl md:text-5xl font-bold mb-12">What It Means</h2>
                        <div className="grid md:grid-cols-2 gap-6">
                            <div className="p-8 bg-gradient-to-br from-[#111] to-black border border-white/10 rounded-3xl text-left hover:border-orange-500/30 transition-all">
                                <div className="mb-6"><UserCheck size={32} className="text-orange-500" /></div>
                                <h3 className="text-xl font-bold text-white mb-4">Single Point of Contact</h3>
                                <p className="text-neutral-400">One primary account owner for the IPP. Communicate with one point, not many.</p>
                            </div>
                            <div className="p-8 bg-gradient-to-br from-[#111] to-black border border-white/10 rounded-3xl text-left hover:border-blue-500/30 transition-all">
                                <div className="mb-6"><Zap size={32} className="text-blue-500" /></div>
                                <h3 className="text-xl font-bold text-white mb-4">Systematic Coordination</h3>
                                <p className="text-neutral-400">All execution flows through this layer. Internal coordination is handled by the system.</p>
                            </div>
                        </div>
                    </AnimatedSection>
                </div>
            </section>

            {/* Scope - 5 Points */}
            <section className="py-24 px-6 bg-[#0a0a0a] border-t border-white/5">
                <div className="max-w-7xl mx-auto">
                    <AnimatedSection className="mb-16 text-center">
                        <h2 className="text-4xl md:text-5xl font-bold mb-4">Scope of Account Management</h2>
                        <p className="text-neutral-400">Five pillars of support for every IPP.</p>
                    </AnimatedSection>

                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {[
                            {
                                num: "01",
                                title: "Single Point of Coordination",
                                icon: UserCheck,
                                desc: "Acts as primary backend contact, ensuring alignment across operations.",
                                note: "IPP never contacts execution teams or vendors directly."
                            },
                            {
                                num: "02",
                                title: "Execution Tracking",
                                icon: ListChecks, // Will import below, using Layers for now if not available
                                desc: "Tracks active engagements, monitors timelines, and shares structured updates.",
                                note: "IPP always knows what is in progress and completed."
                            },
                            {
                                num: "03",
                                title: "Issue Escalation",
                                icon: AlertCircle,
                                desc: "IPP raises concerns to one person. Timelines are enforced, outcomes documented.",
                                note: "IPP is shielded from internal complexity."
                            },
                            {
                                num: "04",
                                title: "Quality Oversight",
                                icon: ShieldCheck,
                                desc: "Ensures execution follows scope and quality benchmarks are met before delivery.",
                                note: "Protects credibility and client trust."
                            },
                            {
                                num: "05",
                                title: "Business Alignment",
                                icon: Briefcase,
                                desc: "Supports scope clarification, change management, and client expectation alignment.",
                                note: "IPP supported in business conversations."
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
                                    <p className="text-neutral-400 mb-6 flex-grow">{item.desc}</p>
                                    <div className="pt-4 border-t border-white/5 text-xs text-orange-400/80 font-medium">
                                        {item.note}
                                    </div>
                                </div>
                            </AnimatedSection>
                        ))}
                    </div>
                </div>
            </section>

            {/* Ownership & Boundaries */}
            <section className="py-24 px-6 relative z-10">
                <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12">
                    <AnimatedSection>
                        <h3 className="text-2xl font-bold text-white mb-6">What IPP Still Owns</h3>
                        <div className="bg-gradient-to-br from-green-900/10 to-transparent border border-green-500/10 p-8 rounded-3xl h-full">
                            <ul className="space-y-4">
                                {["Client relationships", "Brand positioning", "Business growth decisions", "Market expansion strategy"].map((item, i) => (
                                    <li key={i} className="flex items-center gap-3 text-neutral-300">
                                        <CheckCircle2 className="text-green-500" size={20} />
                                        {item}
                                    </li>
                                ))}
                            </ul>
                            <div className="mt-6 pt-6 border-t border-white/10 text-green-400 text-sm font-medium">
                                Account management supports ownership—it does not replace it.
                            </div>
                        </div>
                    </AnimatedSection>

                    <AnimatedSection delay={200}>
                        <h3 className="text-2xl font-bold text-white mb-6">What We Do NOT Do</h3>
                        <div className="bg-gradient-to-br from-red-900/10 to-transparent border border-red-500/10 p-8 rounded-3xl h-full">
                            <ul className="space-y-4">
                                {["Take over client relationships", "Sell on behalf of IPP", "Make commitments without validation", "Bypass IPP authority"].map((item, i) => (
                                    <li key={i} className="flex items-center gap-3 text-neutral-300">
                                        <XCircle className="text-red-500" size={20} />
                                        {item}
                                    </li>
                                ))}
                            </ul>
                            <div className="mt-6 pt-6 border-t border-white/10 text-red-400 text-sm font-medium">
                                Operates as a support layer, not a replacement.
                            </div>
                        </div>
                    </AnimatedSection>
                </div>
            </section>

            {/* Scaling & Why it Works */}
            <section className="py-24 px-6 bg-[#080808] border-y border-white/5">
                <div className="max-w-7xl mx-auto">
                    <div className="grid md:grid-cols-2 gap-16 items-center">
                        <AnimatedSection>
                            <h3 className="text-2xl font-bold mb-6 flex items-center gap-3">
                                <TrendingUp className="text-amber-500" />
                                Scaling With Growth
                            </h3>
                            <div className="space-y-6 text-neutral-400">
                                <p>As IPP business volume grows, account capacity scales internally and additional coordination support is added.</p>
                                <div className="p-4 bg-amber-900/10 border-l-2 border-amber-500 text-white">
                                    IPP growth never overloads the system.
                                </div>
                            </div>
                        </AnimatedSection>

                        <AnimatedSection delay={200}>
                            <h3 className="text-2xl font-bold mb-6">Why This Model Works</h3>
                            <div className="grid grid-cols-2 gap-4">
                                {["Reduces Stress", "Consistent Delivery", "Client Confidence", "Sustainable Scale"].map((item, i) => (
                                    <div key={i} className="p-3 bg-white/5 rounded-lg text-center text-sm font-medium text-neutral-300 hover:text-white transition-colors">
                                        {item}
                                    </div>
                                ))}
                            </div>
                            <p className="mt-6 text-neutral-500 text-sm text-center">
                                IPP can focus on building the business, not managing operations.
                            </p>
                        </AnimatedSection>
                    </div>
                </div>
            </section>

            {/* Final CTA */}
            <section className="py-32 px-6 text-center">
                <div className="max-w-4xl mx-auto">
                    <AnimatedSection>
                        <h2 className="text-4xl md:text-6xl font-bold mb-8">
                            One IPP. One Owner. <br />
                            <span className="text-orange-500">One System.</span>
                        </h2>
                        <p className="text-xl text-neutral-400 mb-12">
                            Account management is the glue that keeps everything aligned.
                        </p>

                        <div className="inline-block p-1 rounded-full bg-gradient-to-r from-orange-500 to-amber-500 p-1">
                            <div className="px-12 py-6 bg-black rounded-full">
                                <h3 className="text-2xl md:text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-white to-neutral-400">
                                    Your Brand in Front. <br className="md:hidden" /> A System Behind You.
                                </h3>
                            </div>
                        </div>
                    </AnimatedSection>
                </div>
            </section>
        </div>
    );
}

// Additional icons
import { ListChecks } from 'lucide-react';
