import React, { useState, useEffect, useRef } from 'react';
import {
    ShieldCheck,
    Layers,
    Target,
    Briefcase,
    DollarSign,
    Users,
    XCircle,
    CheckCircle2,
    Zap,
    TrendingUp,
    Layout,
    Globe,
    FileText,
    Share2,
    Box,
    ArrowRight
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

export default function BusinessModel() {
    return (
        <div className="min-h-screen bg-[#050505] text-white font-sans selection:bg-orange-600/30">
            {/* Background Ambience */}
            <div className="fixed inset-0 pointer-events-none z-0">
                <div className="absolute top-[-20%] right-[-10%] w-[800px] h-[800px] bg-orange-600/5 rounded-full blur-[120px]" />
                <div className="absolute bottom-[-10%] left-[-10%] w-[600px] h-[600px] bg-blue-600/5 rounded-full blur-[100px]" />
            </div>

            {/* Hero Section */}
            <section className="relative min-h-[80vh] flex items-center justify-center px-6 overflow-hidden pt-20">
                <div className="max-w-7xl mx-auto relative z-10 w-full text-center">
                    <AnimatedSection>
                        <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/5 backdrop-blur-sm border border-white/10 rounded-full mb-8 hover:bg-white/10 transition-colors cursor-default">
                            <span className="w-2 h-2 rounded-full bg-orange-500 animate-pulse" />
                            <span className="text-xs font-semibold tracking-wide uppercase text-neutral-300">New Business Operating Standard</span>
                        </div>

                        <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold mb-8 leading-[0.95] tracking-tight">
                            IPP Business <br />
                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-500 to-amber-500">
                                Model & Charges
                            </span>
                        </h1>

                        <p className="text-xl md:text-2xl text-neutral-400 mb-10 leading-relaxed max-w-3xl mx-auto font-light">
                            A Transparent Business Operating Partnership Model. <br />
                            <span className="text-white">Not a sales scheme. Not a franchise. Not an investment.</span>
                        </p>

                        <div className="p-6 bg-white/5 border border-white/10 rounded-2xl max-w-2xl mx-auto backdrop-blur-sm">
                            <p className="text-neutral-300 text-lg">
                                IPP allows individuals to build and run their own brand while using Zryoss as the backend operating engine for execution, delivery, and support.
                            </p>
                        </div>
                    </AnimatedSection>
                </div>
            </section>

            {/* How It Works - 3 Layers */}
            <section className="py-24 px-6 relative z-10 bg-neutral-900/30 border-y border-white/5">
                <div className="max-w-7xl mx-auto">
                    <AnimatedSection className="mb-16 text-center">
                        <h2 className="text-3xl md:text-5xl font-bold mb-6">How the IPP Business Model Works</h2>
                        <p className="text-neutral-400 text-xl">Built on three clear layers for clarity, control, and scalability.</p>
                    </AnimatedSection>

                    <div className="grid lg:grid-cols-3 gap-8">
                        {[
                            {
                                title: "Brand Ownership (IPP)",
                                icon: ShieldCheck,
                                color: "text-orange-500",
                                points: [
                                    "IPP owns and operates their own brand",
                                    "IPP controls market positioning & clients",
                                    "IPP focuses on opportunity & growth"
                                ]
                            },
                            {
                                title: "Operating System (Zryoss)",
                                icon: Layout,
                                color: "text-blue-500",
                                points: [
                                    "Zryoss provides platform, systems & governance",
                                    "Zryoss manages operations, execution & delivery",
                                    "Zryoss ensures quality & reporting"
                                ]
                            },
                            {
                                title: "Execution (Ecosystem)",
                                icon: Layers,
                                color: "text-green-500",
                                points: [
                                    "Domain-specific execution brands deliver services",
                                    "Vendors operate under execution brands",
                                    "IPP is never involved in execution management"
                                ]
                            }
                        ].map((layer, i) => (
                            <AnimatedSection key={i} delay={i * 150}>
                                <div className="h-full bg-black/40 border border-white/10 p-8 rounded-3xl hover:border-white/20 transition-all group">
                                    <div className={`w-14 h-14 ${layer.color} bg-white/5 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform`}>
                                        <layer.icon size={28} />
                                    </div>
                                    <h3 className="text-2xl font-bold mb-6 text-white">{layer.title}</h3>
                                    <ul className="space-y-4">
                                        {layer.points.map((point, idx) => (
                                            <li key={idx} className="flex items-start gap-3 text-neutral-400">
                                                <div className={`w-1.5 h-1.5 rounded-full mt-2.5 ${layer.color.replace('text', 'bg')}`} />
                                                <span>{point}</span>
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            </AnimatedSection>
                        ))}
                    </div>
                </div>
            </section>

            {/* Charges Section */}
            <section className="py-24 px-6 relative z-10">
                <div className="max-w-7xl mx-auto">
                    <div className="grid lg:grid-cols-2 gap-16 items-center">
                        <AnimatedSection>
                            <h2 className="text-4xl md:text-5xl font-bold mb-6">What the Charges Cover</h2>
                            <p className="text-xl text-neutral-400 mb-8 leading-relaxed">
                                IPP onboarding involves a one-time platform onboarding charge. There are no hidden charges in the onboarding stage.
                            </p>

                            <div className="inline-block p-1 rounded-3xl bg-gradient-to-r from-orange-500 to-amber-500 mb-8">
                                <div className="bg-black rounded-[20px] px-8 py-6">
                                    <div className="text-sm text-orange-400 uppercase tracking-wider font-bold mb-2">One-Time Fee</div>
                                    <div className="text-5xl font-bold text-white">₹50,000</div>
                                    <div className="text-neutral-500 mt-2">Business Setup, Brand Creation & Support</div>
                                </div>
                            </div>
                        </AnimatedSection>

                        <div className="space-y-6">
                            {[
                                {
                                    title: "Brand & Business Setup",
                                    icon: Target,
                                    items: ["Brand identity & Logo", "Website under IPP brand", "Company profile & pitch deck", "Social media setup"]
                                },
                                {
                                    title: "Platform & System Access",
                                    icon: Layout,
                                    items: ["Access to Zryoss platform", "Execution routing", "Sales enablement", "Proposal frameworks"]
                                },
                                {
                                    title: "Operations & Execution",
                                    icon: Zap,
                                    items: ["End-to-end execution by Zryoss", "Vendor management", "Quality control", "Account management"]
                                },
                                {
                                    title: "Initial Growth Support",
                                    icon: TrendingUp,
                                    items: ["Structured initial support", "Content & digital activity", "Operational handholding"]
                                }
                            ].map((feature, i) => (
                                <AnimatedSection key={i} delay={i * 100}>
                                    <div className="bg-white/5 border border-white/5 rounded-2xl p-6 hover:bg-white/10 transition-colors">
                                        <div className="flex items-center gap-4 mb-4">
                                            <feature.icon className="text-orange-500" size={24} />
                                            <h3 className="text-xl font-bold text-white">{feature.title}</h3>
                                        </div>
                                        <div className="grid sm:grid-cols-2 gap-2 pl-10">
                                            {feature.items.map((item, idx) => (
                                                <div key={idx} className="flex items-center gap-2 text-sm text-neutral-400">
                                                    <div className="w-1 h-1 bg-white/30 rounded-full" />
                                                    {item}
                                                </div>
                                            ))}
                                        </div>
                                    </div>
                                </AnimatedSection>
                            ))}
                        </div>
                    </div>
                </div>
            </section>

            {/* Six Month Support */}
            <section className="py-20 px-6 bg-[#0a0a0a] border-y border-white/5">
                <div className="max-w-4xl mx-auto text-center">
                    <AnimatedSection>
                        <div className="w-20 h-20 bg-orange-600/10 rounded-full flex items-center justify-center text-orange-500 mx-auto mb-6">
                            <CheckCircle2 size={40} />
                        </div>
                        <h2 className="text-3xl md:text-4xl font-bold mb-6">Six-Month Structured Support</h2>
                        <p className="text-neutral-400 text-lg mb-10 max-w-2xl mx-auto">
                            The onboarding fee includes structured support for up to six months. This period is designed to move the IPP from setup to steady operations.
                        </p>
                        <div className="grid sm:grid-cols-2 md:grid-cols-4 gap-4">
                            {["Brand Stabilized", "Operations Streamlined", "Execution Optimized", "System Ready"].map((item, i) => (
                                <div key={i} className="px-4 py-3 bg-white/5 border border-white/10 rounded-lg text-white font-medium">
                                    {item}
                                </div>
                            ))}
                        </div>
                    </AnimatedSection>
                </div>
            </section>

            {/* Revenue & Disclaimer */}
            <section className="py-24 px-6 relative z-10">
                <div className="max-w-7xl mx-auto">
                    <div className="grid md:grid-cols-2 gap-12">
                        {/* Revenue */}
                        <AnimatedSection>
                            <div className="bg-neutral-900/50 p-8 rounded-3xl border border-white/10 h-full">
                                <div className="flex items-center gap-3 mb-6">
                                    <DollarSign className="text-green-500" size={32} />
                                    <h3 className="text-2xl font-bold text-white">Revenue & Earnings Logic</h3>
                                </div>
                                <ul className="space-y-4 mb-8">
                                    {[
                                        "Earnings based on real business activity",
                                        "Revenue from clients acquired by IPP",
                                        "Earnings depend on services sold & delivered",
                                        "No fixed income promises",
                                        "No guaranteed returns"
                                    ].map((item, i) => (
                                        <li key={i} className="flex items-start gap-3 text-neutral-300">
                                            <ArrowRight size={18} className="text-green-500 mt-1 shrink-0" />
                                            {item}
                                        </li>
                                    ))}
                                </ul>
                                <div className="p-4 bg-green-900/10 border border-green-500/20 rounded-xl text-green-400 text-sm">
                                    Zryoss does not pay commissions for joining. Earnings come from actual business execution.
                                </div>
                            </div>
                        </AnimatedSection>

                        {/* What IPP is NOT */}
                        <AnimatedSection delay={200}>
                            <div className="bg-red-900/10 p-8 rounded-3xl border border-red-500/20 h-full">
                                <div className="flex items-center gap-3 mb-6">
                                    <XCircle className="text-red-500" size={32} />
                                    <h3 className="text-2xl font-bold text-white">What IPP Is NOT</h3>
                                </div>
                                <ul className="space-y-4 mb-8">
                                    {[
                                        "Not MLM",
                                        "Not a referral income scheme",
                                        "Not a franchise",
                                        "Not an investment or deposit plan",
                                        "Not a job or salary-based role"
                                    ].map((item, i) => (
                                        <li key={i} className="flex items-center gap-3 text-neutral-300">
                                            <span className="text-red-500 font-bold">✕</span>
                                            {item}
                                        </li>
                                    ))}
                                </ul>
                                <div className="p-4 bg-red-900/20 border border-red-500/30 rounded-xl text-red-300 text-sm">
                                    It is a business operating partnership based on execution and delivery.
                                </div>
                            </div>
                        </AnimatedSection>
                    </div>
                </div>
            </section>

            {/* Team Building & Cost Value */}
            <section className="py-24 px-6 bg-[#080808]">
                <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-16">
                    <AnimatedSection>
                        <h3 className="text-2xl font-bold mb-6 flex items-center gap-3">
                            <Users className="text-blue-500" size={28} />
                            Team Building & Scale
                        </h3>
                        <p className="text-neutral-400 mb-6 leading-relaxed">
                            IPP may expand by hiring their own team or working with other IPPs under defined limits. However:
                        </p>
                        <div className="space-y-3">
                            {["Depth and structure are controlled", "Execution remains centralized", "No unlimited hierarchy"].map((item, i) => (
                                <div key={i} className="flex items-center gap-3 text-neutral-300 p-3 bg-white/5 rounded-lg">
                                    <div className="w-1.5 h-1.5 bg-blue-500 rounded-full" />
                                    {item}
                                </div>
                            ))}
                        </div>
                        <p className="mt-6 text-sm text-neutral-500 italic">This ensures the model remains operational—not promotional.</p>
                    </AnimatedSection>

                    <AnimatedSection delay={200}>
                        <h3 className="text-2xl font-bold mb-6 flex items-center gap-3">
                            <Box className="text-amber-500" size={28} />
                            Cost vs Value Perspective
                        </h3>
                        <p className="text-neutral-400 mb-6">
                            IPP starts with a ready operating system. Instead of spending on trial-and-error vendors, hiring teams, and tool subscriptions.
                        </p>
                        <div className="grid grid-cols-2 gap-4">
                            <div className="p-4 bg-white/5 border border-white/5 rounded-xl">
                                <div className="text-neutral-500 text-sm mb-1">Traditional Way</div>
                                <div className="text-red-400 font-medium">High Risk & Cost</div>
                            </div>
                            <div className="p-4 bg-white/5 border border-amber-500/30 rounded-xl relative overflow-hidden">
                                <div className="absolute inset-0 bg-amber-500/5" />
                                <div className="relative z-10">
                                    <div className="text-neutral-400 text-sm mb-1">IPP Model</div>
                                    <div className="text-amber-400 font-medium">Predictable & Lean</div>
                                </div>
                            </div>
                        </div>
                    </AnimatedSection>
                </div>
            </section>

            {/* Who Should Consider */}
            <section className="py-24 px-6 relative z-10">
                <div className="max-w-5xl mx-auto">
                    <h2 className="text-3xl md:text-5xl font-bold text-center mb-16">Who Should Consider IPP?</h2>

                    <div className="grid md:grid-cols-2 gap-12">
                        <AnimatedSection className="bg-green-900/5 border border-green-500/10 p-8 rounded-3xl">
                            <h3 className="text-xl font-bold text-green-500 mb-6 uppercase tracking-wide">Suitable If You</h3>
                            <div className="space-y-4">
                                {["Want to build a long-term business", "Are comfortable generating clients", "Prefer systems over chaos", "Value execution support over shortcuts"].map((item, i) => (
                                    <div key={i} className="flex items-center gap-3 text-neutral-300">
                                        <CheckCircle2 size={20} className="text-green-500" />
                                        {item}
                                    </div>
                                ))}
                            </div>
                        </AnimatedSection>

                        <AnimatedSection delay={200} className="bg-red-900/5 border border-red-500/10 p-8 rounded-3xl">
                            <h3 className="text-xl font-bold text-red-500 mb-6 uppercase tracking-wide">Not Suitable If You</h3>
                            <div className="space-y-4">
                                {["Expect guaranteed income", "Want passive returns without effort", "Looking for quick money models"].map((item, i) => (
                                    <div key={i} className="flex items-center gap-3 text-neutral-300">
                                        <XCircle size={20} className="text-red-500" />
                                        {item}
                                    </div>
                                ))}
                            </div>
                        </AnimatedSection>
                    </div>
                </div>
            </section>

            {/* Final Call to Action */}
            <section className="py-32 px-6 bg-[#080808] border-t border-white/5 text-center">
                <div className="max-w-4xl mx-auto">
                    <AnimatedSection>
                        <h2 className="text-4xl md:text-6xl font-bold mb-8">
                            One Fee. One System. <br />
                            <span className="text-orange-500">Real Business.</span>
                        </h2>
                        <p className="text-xl text-neutral-400 mb-12">
                            You invest in a system, a brand foundation, and an operating engine. Your growth depends on how you build the business.
                        </p>

                        <div className="inline-block p-1 rounded-full bg-gradient-to-r from-orange-500 to-amber-500 p-1">
                            <div className="px-12 py-6 bg-black rounded-full">
                                <h3 className="text-2xl md:text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-white to-neutral-400">
                                    Ownership with Structure. <br className="md:hidden" /> Not Shortcuts.
                                </h3>
                            </div>
                        </div>
                    </AnimatedSection>
                </div>
            </section>
        </div>
    );
}
