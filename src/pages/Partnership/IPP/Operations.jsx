import React, { useState, useEffect, useRef } from 'react';
import {
    Settings,
    Truck,
    ShieldCheck,
    BarChart,
    Users,
    FileText,
    Zap,
    TrendingUp,
    AlertTriangle,
    CheckCircle2,
    XCircle,
    Layers,
    Clock,
    Activity
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

export default function OperationManaged() {
    return (
        <div className="min-h-screen bg-[#050505] text-white font-sans selection:bg-orange-600/30">
            {/* Background Ambience */}
            <div className="fixed inset-0 pointer-events-none z-0">
                <div className="absolute top-[-20%] right-[-10%] w-[800px] h-[800px] bg-orange-600/5 rounded-full blur-[120px]" />
                <div className="absolute bottom-[-10%] left-[-10%] w-[600px] h-[600px] bg-purple-600/5 rounded-full blur-[100px]" />
            </div>

            {/* Hero Section */}
            <section className="relative min-h-[85vh] flex items-center justify-center px-6 overflow-hidden pt-20">
                <div className="max-w-7xl mx-auto relative z-10 w-full text-center">
                    <AnimatedSection>
                        <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/5 backdrop-blur-sm border border-white/10 rounded-full mb-8 hover:bg-white/10 transition-colors cursor-default">
                            <span className="w-2 h-2 rounded-full bg-orange-500 animate-pulse" />
                            <span className="text-xs font-semibold tracking-wide uppercase text-neutral-300">End-to-End Management</span>
                        </div>

                        <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold mb-8 leading-[0.95] tracking-tight">
                            IPP Operations <br />
                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-500 to-amber-500">
                                Managed by Zryoss
                            </span>
                        </h1>

                        <p className="text-xl md:text-2xl text-neutral-400 mb-10 leading-relaxed max-w-3xl mx-auto font-light">
                            One Backend. One Operating System. Zero Operational Chaos.
                        </p>

                        <div className="inline-block bg-white/5 border border-white/10 rounded-2xl p-8 backdrop-blur-sm">
                            <h3 className="text-2xl font-bold text-white mb-2">The Zryoss Promise</h3>
                            <p className="text-neutral-300 text-lg">
                                IPP does not run operations manually. <br />
                                IPP runs a business on top of a managed operating system.
                            </p>
                        </div>
                    </AnimatedSection>
                </div>
            </section>

            {/* Why Managed */}
            <section className="py-24 px-6 relative z-10 bg-neutral-900/30 border-y border-white/5">
                <div className="max-w-7xl mx-auto">
                    <div className="grid lg:grid-cols-2 gap-16 items-center">
                        <AnimatedSection>
                            <h2 className="text-3xl md:text-5xl font-bold mb-8 leading-tight">
                                Why Zryoss Manages <br />
                                <span className="text-orange-500">IPP Operations</span>
                            </h2>
                            <p className="text-neutral-400 text-lg mb-8 leading-relaxed">
                                Most new businesses fail after initial sales because execution becomes unmanageable, vendors are hard to control, and founders get stuck in daily operations.
                            </p>
                            <div className="p-6 bg-orange-500/10 border-l-4 border-orange-500 rounded-r-lg">
                                <p className="text-lg text-white font-medium">
                                    Zryoss eliminates these risks by centralizing all operational responsibility under one system.
                                </p>
                            </div>
                        </AnimatedSection>

                        <AnimatedSection delay={200}>
                            <div className="grid sm:grid-cols-2 gap-4">
                                {[
                                    "Execution becomes unmanageable",
                                    "Vendors hard to control",
                                    "Quality drops with volume",
                                    "Founder stuck in ops"
                                ].map((item, i) => (
                                    <div key={i} className="flex flex-col gap-3 p-6 bg-white/5 border border-white/5 rounded-2xl hover:bg-white/10 transition-colors">
                                        <AlertTriangle className="text-orange-500" size={24} />
                                        <span className="text-neutral-300 font-medium">{item}</span>
                                    </div>
                                ))}
                            </div>
                        </AnimatedSection>
                    </div>
                </div>
            </section>

            {/* What This Means */}
            <section className="py-24 px-6 relative z-10">
                <div className="max-w-7xl mx-auto text-center">
                    <AnimatedSection>
                        <h2 className="text-3xl md:text-5xl font-bold mb-12">What “Operations Managed” Means</h2>
                        <div className="grid md:grid-cols-4 gap-6">
                            {[
                                { text: "No delivery team handling", icon: Users },
                                { text: "No vendor management", icon: Truck },
                                { text: "No workflow control", icon: Layers },
                                { text: "No internal coordination", icon: Activity }
                            ].map((item, i) => (
                                <div key={i} className="p-8 bg-white/5 border border-white/10 rounded-3xl group hover:border-orange-500/30 transition-all">
                                    <div className="w-16 h-16 mx-auto mb-6 rounded-full bg-white/5 flex items-center justify-center text-orange-500 group-hover:scale-110 transition-transform">
                                        <item.icon size={32} />
                                    </div>
                                    <h3 className="text-lg font-bold text-white mb-2">{item.text}</h3>
                                    <div className="w-8 h-1 bg-white/10 mx-auto rounded-full" />
                                </div>
                            ))}
                        </div>
                        <div className="mt-12 text-xl font-medium text-white p-4 bg-white/5 inline-block rounded-xl">
                            All backend activity is handled by the platform.
                        </div>
                    </AnimatedSection>
                </div>
            </section>

            {/* Operational Scope - 7 Points */}
            <section className="py-24 px-6 bg-[#0a0a0a] border-t border-white/5">
                <div className="max-w-6xl mx-auto">
                    <AnimatedSection className="mb-16 text-center">
                        <h2 className="text-4xl md:text-6xl font-bold mb-4">Operational Scope</h2>
                        <p className="text-neutral-400">Seven core areas managed entirely by Zryoss.</p>
                    </AnimatedSection>

                    <div className="space-y-6">
                        {[
                            {
                                num: "01",
                                title: "Execution Routing & Allocation",
                                icon: Layers,
                                desc: "Every order is validated, scoped, and routed to the correct execution brand based on domain and capacity.",
                                highlight: "No work moves without system approval."
                            },
                            {
                                num: "02",
                                title: "Delivery & Vendor Management",
                                icon: Truck,
                                desc: "Execution brands manage delivery teams and vendors. SLAs, timelines, and outputs are controlled centrally.",
                                highlight: "IPP never interacts directly with vendors."
                            },
                            {
                                num: "03",
                                title: "Sales Enablement & Support",
                                icon: Zap,
                                desc: "Demo scheduling, technical clarifications, and solution walkthroughs are handled by experts.",
                                highlight: "IPP sells confidently without technical dependency."
                            },
                            {
                                num: "04",
                                title: "Client Onboarding",
                                icon: FileText,
                                desc: "Structured onboarding processes, requirement documentation, and execution kickoff planning.",
                                highlight: "Everything follows defined workflows."
                            },
                            {
                                num: "05",
                                title: "Quality Control & Assurance",
                                icon: ShieldCheck,
                                desc: "Multi-stage quality reviews, delivery checkpoints, and output validation.",
                                highlight: "Quality is system-enforced, not person-dependent."
                            },
                            {
                                num: "06",
                                title: "Account Management",
                                icon: Users,
                                desc: "Dedicated account ownership, progress tracking, and issue escalation/resolution.",
                                highlight: "IPP has one coordination point, not many."
                            },
                            {
                                num: "07",
                                title: "Reporting & Tracking",
                                icon: BarChart,
                                desc: "Delivery timelines, execution status, partner performance, and satisfaction indicators.",
                                highlight: "Data replaces guesswork."
                            }
                        ].map((item, i) => (
                            <AnimatedSection key={i} delay={i * 50}>
                                <div className="grid md:grid-cols-12 gap-6 bg-gradient-to-r from-[#0f0f0f] to-transparent border border-white/5 p-6 rounded-2xl hover:border-orange-500/20 transition-all items-center">
                                    <div className="md:col-span-1 text-2xl font-bold text-white/10">
                                        {item.num}
                                    </div>
                                    <div className="md:col-span-1 hidden md:flex items-center justify-center">
                                        <div className="w-12 h-12 rounded-xl bg-white/5 flex items-center justify-center text-orange-500">
                                            <item.icon size={24} />
                                        </div>
                                    </div>
                                    <div className="md:col-span-10 flex flex-col md:flex-row md:items-center justify-between gap-6">
                                        <div className="flex-1">
                                            <div className="flex items-center gap-3 md:hidden mb-3">
                                                <div className="p-2 bg-white/5 rounded-lg text-orange-500"><item.icon size={20} /></div>
                                                <h3 className="text-xl font-bold text-white">{item.title}</h3>
                                            </div>
                                            <h3 className="text-xl font-bold text-white mb-2 hidden md:block">{item.title}</h3>
                                            <p className="text-neutral-400 text-sm leading-relaxed">{item.desc}</p>
                                        </div>
                                        <div className="md:w-64 shrink-0 px-4 py-3 bg-white/5 rounded-lg border border-white/5 text-xs text-orange-200 font-medium">
                                            {item.highlight}
                                        </div>
                                    </div>
                                </div>
                            </AnimatedSection>
                        ))}
                    </div>
                </div>
            </section>

            {/* Ownership & Protection */}
            <section className="py-24 px-6 relative z-10">
                <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-12">
                    <AnimatedSection>
                        <h2 className="text-3xl font-bold mb-6">What IPP Still Owns</h2>
                        <div className="bg-gradient-to-br from-green-900/10 to-transparent border border-green-500/10 p-8 rounded-3xl h-full">
                            <p className="text-neutral-400 mb-6">
                                Operations support does not remove ownership—it removes operational burden.
                            </p>
                            <div className="space-y-4">
                                {["Brand identity", "Client relationships", "Business positioning", "Market growth"].map((item, i) => (
                                    <div key={i} className="flex items-center gap-3 text-white font-medium">
                                        <CheckCircle2 className="text-green-500" size={20} />
                                        {item}
                                    </div>
                                ))}
                            </div>
                        </div>
                    </AnimatedSection>

                    <AnimatedSection delay={200}>
                        <h2 className="text-3xl font-bold mb-6">How This Protects You</h2>
                        <div className="bg-gradient-to-br from-blue-900/10 to-transparent border border-blue-500/10 p-8 rounded-3xl h-full">
                            <p className="text-neutral-400 mb-6">
                                IPP is protected from early-stage and scale-stage failures significantly.
                            </p>
                            <div className="space-y-4">
                                {["Execution risk is centralized", "Vendor risk is absorbed", "Quality remains consistent", "Growth doesn't break ops"].map((item, i) => (
                                    <div key={i} className="flex items-center gap-3 text-white font-medium">
                                        <ShieldCheck className="text-blue-500" size={20} />
                                        {item}
                                    </div>
                                ))}
                            </div>
                        </div>
                    </AnimatedSection>
                </div>
            </section>

            {/* Scaling & Boundaries */}
            <section className="py-24 px-6 bg-[#080808] border-y border-white/5">
                <div className="max-w-7xl mx-auto">
                    <div className="grid md:grid-cols-2 gap-16">
                        <AnimatedSection>
                            <h3 className="text-2xl font-bold mb-6 flex items-center gap-3">
                                <TrendingUp className="text-amber-500" />
                                Scaling as You Grow
                            </h3>
                            <p className="text-neutral-400 mb-8">
                                As IPP volume increases, Zryoss scales execution capacity and activates more vendors. Processes remain unchanged.
                            </p>
                            <div className="text-xl text-white font-medium pl-6 border-l-4 border-amber-500">
                                IPP growth strengthens the ecosystem—it does not overload it.
                            </div>
                        </AnimatedSection>

                        <AnimatedSection delay={200}>
                            <h3 className="text-2xl font-bold mb-6 flex items-center gap-3">
                                <AlertTriangle className="text-red-500" />
                                Non-Negotiable Boundaries
                            </h3>
                            <div className="space-y-3">
                                {[
                                    "Cannot bypass the platform",
                                    "Cannot assign work directly",
                                    "Cannot promise execution outside scope",
                                    "Cannot manage vendors independently"
                                ].map((item, i) => (
                                    <div key={i} className="flex items-center gap-4 p-3 bg-red-900/10 rounded-lg text-red-200 text-sm">
                                        <XCircle size={16} />
                                        {item}
                                    </div>
                                ))}
                            </div>
                            <p className="mt-4 text-xs text-neutral-500">These boundaries protect everyone involved.</p>
                        </AnimatedSection>
                    </div>
                </div>
            </section>

            {/* Final CTA */}
            <section className="py-32 px-6 text-center">
                <div className="max-w-4xl mx-auto">
                    <AnimatedSection>
                        <h2 className="text-4xl md:text-6xl font-bold mb-8">
                            One Brand in Front. <br />
                            <span className="text-orange-500">One System Behind.</span>
                        </h2>
                        <div className="p-8 bg-gradient-to-r from-orange-500/10 to-amber-500/10 border border-orange-500/20 rounded-3xl backdrop-blur-sm">
                            <h3 className="text-2xl font-bold text-white mb-2">IPP success is not about doing everything.</h3>
                            <p className="text-neutral-300 text-lg">It’s about doing the right things, while the system handles the rest.</p>
                            <div className="mt-8 pt-8 border-t border-white/10 flex justify-center gap-8 md:gap-16 font-bold text-xl md:text-2xl text-white">
                                <div>Zryoss manages operations.</div>
                                <div>IPP builds the business.</div>
                            </div>
                        </div>
                    </AnimatedSection>
                </div>
            </section>
        </div>
    );
}
