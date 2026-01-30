import React, { useState, useEffect, useRef } from 'react';
import {
    Users,
    Briefcase,
    ShieldCheck,
    CheckCircle2,
    XCircle,
    TrendingUp,
    Store,
    Target,
    Layout,
    ArrowRight,
    Lock,
    Scale,
    AlertTriangle,
    Network,
    Gavel
} from 'lucide-react';
import FadeUp from "../../../components/animations/FadeUp";

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

export default function CreationManagement() {
    return (
        <div className="min-h-screen bg-[#050505] text-white font-sans selection:bg-orange-600/30">
            {/* Background Glows */}
            <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-orange-500/10 blur-[150px] rounded-full -translate-y-1/2 translate-x-1/2 pointer-events-none" />
            <div className="absolute middle-0 left-0 w-[500px] h-[500px] bg-orange-500/5 blur-[130px] rounded-full translate-y-1/2 -translate-x-1/2 pointer-events-none" />

            {/* Hero Section */}
            <section className="relative pt-40 pb-24 overflow-hidden border-b border-white/5">
                <div className="max-w-7xl mx-auto px-6 relative z-10">
                    <div className="grid lg:grid-cols-2 gap-12 items-center">
                        {/* Left Column: Content */}
                        <div>
                            <FadeUp>
                                <div className="inline-flex items-center gap-2 text-orange-500 text-xs uppercase tracking-[0.45em] mb-6 font-bold">
                                    <span className="w-2 h-2 rounded-full bg-orange-500 animate-pulse" />
                                    Structured Business Expansion
                                </div>
                                <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold leading-[1.15] tracking-tight mb-5 text-white">
                                    BPP → IPP <br />
                                    <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-orange-600">
                                        Creation & Management
                                    </span>
                                </h1>
                                <p className="text-xl text-gray-400 leading-relaxed font-light mb-8">
                                    Structured Enablement, Not Recruitment.
                                </p>

                                <div className="flex flex-wrap gap-4">
                                    {[
                                        "No Downlines",
                                        "No Recruitment Hype",
                                        "Strict System Governance"
                                    ].map((item, i) => (
                                        <div key={i} className="px-6 py-3 bg-white/5 border border-white/10 rounded-full backdrop-blur-sm text-neutral-300 flex items-center gap-2">
                                            <ShieldCheck size={16} className="text-orange-500" />
                                            {item}
                                        </div>
                                    ))}
                                </div>
                            </FadeUp>
                        </div>

                        {/* Right Column: Image */}
                        <div className="relative hidden lg:block">
                            <FadeUp delay={0.2}>
                                <div className="absolute inset-0 bg-gradient-to-r from-orange-500/20 to-yellow-600/20 blur-3xl rounded-3xl transform rotate-3" />
                                <img
                                    src="/BPP Creation.png"
                                    alt="BPP → IPP Creation & Management"
                                    className="relative rounded-3xl shadow-2xl border border-white/10 transform hover:scale-[1.02] transition-transform duration-500 object-cover w-full h-auto aspect-[4/3]"
                                />
                            </FadeUp>
                        </div>
                    </div>
                </div>
            </section>

            {/* Why Can BPP Enable? */}
            <section className="py-24 px-6 relative z-10 bg-neutral-900/30 border-y border-white/5">
                <div className="max-w-7xl mx-auto">
                    <div className="grid lg:grid-cols-2 gap-16 items-center">
                        <AnimatedSection>
                            <h2 className="text-3xl md:text-5xl font-bold mb-8 leading-tight">
                                Why BPPs Can <br />
                                <span className="text-orange-500">Enable IPPs</span>
                            </h2>
                            <p className="text-neutral-400 text-lg mb-8 leading-relaxed">
                                At scale, no single entity can cover every market, location, or niche. The IPP model allows wider market penetration, localized brand ownership, and distributed opportunity generation.
                            </p>
                            <div className="p-6 bg-orange-500/10 border-l-4 border-orange-500 rounded-r-lg">
                                <p className="text-lg text-white font-medium">
                                    BPPs act as business enablers, not controllers.
                                </p>
                            </div>
                        </AnimatedSection>

                        <AnimatedSection delay={200}>
                            <div className="space-y-4">
                                {[
                                    { text: "Wider market penetration", icon: Target },
                                    { text: "Localized brand ownership", icon: Store },
                                    { text: "Distributed opportunity generation", icon: Network },
                                    { text: "Structured business expansion", icon: Layout }
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

            {/* What IPP Creation Means */}
            <section className="py-24 px-6 relative z-10">
                <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 text-center md:text-left">
                    <AnimatedSection>
                        <h3 className="text-2xl font-bold text-white mb-6">What It Is NOT</h3>
                        <div className="bg-gradient-to-br from-red-900/10 to-transparent border border-red-500/10 p-8 rounded-3xl h-full">
                            <ul className="space-y-4">
                                {[
                                    "Selling positions",
                                    "Recruiting salespeople",
                                    "Building hierarchies for income"
                                ].map((item, i) => (
                                    <li key={i} className="flex items-center gap-3 text-neutral-300">
                                        <XCircle className="text-red-500" size={20} />
                                        {item}
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </AnimatedSection>

                    <AnimatedSection delay={200}>
                        <h3 className="text-2xl font-bold text-white mb-6">What It IS</h3>
                        <div className="bg-gradient-to-br from-green-900/10 to-transparent border border-green-500/10 p-8 rounded-3xl h-full">
                            <ul className="space-y-4">
                                {[
                                    "Enabling a new independent brand owner",
                                    "Providing access to a working OS",
                                    "Supporting through structured execution"
                                ].map((item, i) => (
                                    <li key={i} className="flex items-center gap-3 text-neutral-300">
                                        <CheckCircle2 className="text-green-500" size={20} />
                                        {item}
                                    </li>
                                ))}
                            </ul>
                            <div className="mt-6 pt-6 border-t border-white/10 text-green-400 text-sm font-medium">
                                Each IPP is a separate business entity.
                            </div>
                        </div>
                    </AnimatedSection>
                </div>
            </section>

            {/* Roles: Do vs Don't */}
            <section className="py-24 px-6 bg-[#0a0a0a] border-y border-white/5">
                <div className="max-w-7xl mx-auto">
                    <AnimatedSection className="mb-16 text-center">
                        <h2 className="text-3xl md:text-5xl font-bold mb-4">Role of the BPP</h2>
                        <p className="text-neutral-400">Mentorship and Leadership, not Operational Control.</p>
                    </AnimatedSection>

                    <div className="grid md:grid-cols-2 gap-8">
                        <AnimatedSection>
                            <div className="p-8 bg-white/5 rounded-2xl border border-white/5 h-full">
                                <h3 className="text-xl font-bold text-blue-400 mb-6 flex items-center gap-2"><CheckCircle2 /> A BPP May</h3>
                                <ul className="space-y-3 text-neutral-300">
                                    <li>• Identify potential IPP candidates</li>
                                    <li>• Guide them on business suitability</li>
                                    <li>• Help them choose verticals</li>
                                    <li>• Support early market positioning</li>
                                </ul>
                            </div>
                        </AnimatedSection>

                        <AnimatedSection delay={100}>
                            <div className="p-8 bg-white/5 rounded-2xl border border-white/5 h-full">
                                <h3 className="text-xl font-bold text-orange-500 mb-6 flex items-center gap-2"><XCircle /> A BPP Does NOT</h3>
                                <ul className="space-y-3 text-neutral-300">
                                    <li>• Control IPP brands</li>
                                    <li>• Own IPP clients</li>
                                    <li>• Manage IPP operations</li>
                                    <li>• Override platform decisions</li>
                                </ul>
                                <p className="mt-4 text-xs text-orange-500/80 italic">Execution authority always remains with Zryoss.</p>
                            </div>
                        </AnimatedSection>
                    </div>
                </div>
            </section>

            {/* Step-by-Step Creation */}
            <section className="py-24 px-6 relative z-10">
                <div className="max-w-5xl mx-auto">
                    <AnimatedSection className="text-center mb-16">
                        <h2 className="text-3xl md:text-5xl font-bold mb-4">IPP Creation Process</h2>
                        <p className="text-neutral-400">IPP Onboarding is never automatic.</p>
                    </AnimatedSection>

                    <div className="relative border-l border-white/10 ml-6 md:ml-12 pl-8 md:pl-12 space-y-12">
                        {[
                            { title: "BPP identifies a potential IPP", desc: "Initial scouting and fitment check." },
                            { title: "IPP applies independently to Zryoss", desc: "Formal application process through system." },
                            { title: "Eligibility and fit are evaluated", desc: "Zryoss verifies capabilities and intent." },
                            { title: "IPP onboarding is approved by platform", desc: "Official approval to proceed." },
                            { title: "Brand creation and setup initiated", desc: "Digital assets and structure built." },
                            { title: "Integrated into Operating System", desc: "Access to tools, dashboards, and support." },
                            { title: "Execution & Support Activated", desc: "Ready for market action." }
                        ].map((step, i) => (
                            <AnimatedSection key={i} delay={i * 50}>
                                <div className="relative">
                                    <span className="absolute -left-[54px] md:-left-[69px] top-1 w-10 h-10 rounded-full bg-[#111] border border-orange-500 text-orange-500 flex items-center justify-center text-sm font-bold">
                                        {i + 1}
                                    </span>
                                    <h3 className="text-xl font-bold text-white mb-2">{step.title}</h3>
                                    <p className="text-neutral-400 text-sm">{step.desc}</p>
                                </div>
                            </AnimatedSection>
                        ))}
                    </div>
                </div>
            </section>

            {/* Brand Ownership & Independence */}
            <section className="py-24 px-6 bg-[#080808] border-y border-white/5">
                <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12">
                    <AnimatedSection>
                        <h3 className="text-3xl font-bold text-white mb-6">Brand Ownership</h3>
                        <div className="bg-[#111] p-8 rounded-2xl border border-white/5">
                            <p className="text-neutral-400 mb-6">Every IPP enabled under a BPP:</p>
                            <ul className="space-y-4 mb-6">
                                <li className="flex gap-3 text-neutral-300"><Store className="text-blue-500" size={20} /> Owns their own brand</li>
                                <li className="flex gap-3 text-neutral-300"><Briefcase className="text-blue-500" size={20} /> Operates under own identity</li>
                                <li className="flex gap-3 text-neutral-300"><Users className="text-blue-500" size={20} /> Builds own client base</li>
                            </ul>
                        </div>
                    </AnimatedSection>

                    <AnimatedSection delay={200}>
                        <h3 className="text-3xl font-bold text-white mb-6">Non-Interference</h3>
                        <div className="bg-[#111] p-8 rounded-2xl border border-white/5">
                            <p className="text-neutral-400 mb-6">BPP does NOT own:</p>
                            <div className="flex flex-wrap gap-2">
                                <span className="px-3 py-1 bg-red-900/20 text-red-400 rounded-full text-sm">IPP Brands</span>
                                <span className="px-3 py-1 bg-red-900/20 text-red-400 rounded-full text-sm">IPP Revenue</span>
                                <span className="px-3 py-1 bg-red-900/20 text-red-400 rounded-full text-sm">Client Relationships</span>
                            </div>
                            <p className="mt-6 text-sm text-neutral-500">This prevents dependency and conflict.</p>
                        </div>
                    </AnimatedSection>
                </div>
            </section>

            {/* Operational & Demo Control */}
            <section className="py-24 px-6 relative z-10">
                <div className="max-w-7xl mx-auto">
                    <AnimatedSection className="text-center mb-16">
                        <h2 className="text-3xl md:text-5xl font-bold mb-4">Operational & Demo Control</h2>
                        <span className="bg-orange-900/20 text-orange-500 px-4 py-1 rounded-full text-xs font-bold uppercase tracking-widest border border-orange-900/30">Non-Negotiable</span>
                    </AnimatedSection>

                    <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                        {[
                            { title: "Operations", desc: "Managed by Zryoss", icon: Layout },
                            { title: "Demos", desc: "Delivered by Execution Brands", icon: Store },
                            { title: "Scope & Price", desc: "Platform Validated", icon: CheckCircle2 },
                            { title: "Account Mgmt", desc: "Centralized Layer", icon: Users },
                        ].map((item, i) => (
                            <AnimatedSection key={i} delay={i * 100}>
                                <div className="p-6 bg-gradient-to-b from-white/5 to-transparent border border-white/10 rounded-2xl text-center hover:border-orange-500/30 transition-colors">
                                    <item.icon className="mx-auto text-orange-500 mb-4" size={32} />
                                    <h3 className="text-lg font-bold text-white mb-2">{item.title}</h3>
                                    <p className="text-neutral-400 text-sm">{item.desc}</p>
                                </div>
                            </AnimatedSection>
                        ))}
                    </div>
                </div>
            </section>

            {/* Management vs Enablement */}
            <section className="py-24 px-6 bg-[#0a0a0a] border-y border-white/5">
                <div className="max-w-5xl mx-auto">
                    <AnimatedSection className="mb-12 text-center">
                        <h2 className="text-3xl font-bold mb-4">Management = Enablement</h2>
                        <p className="text-neutral-400">"Management" means business enablement, not command control.</p>
                    </AnimatedSection>

                    <div className="grid md:grid-cols-2 gap-8">
                        <div className="space-y-6">
                            <h3 className="text-xl font-bold text-white border-l-4 border-green-500 pl-4">A BPP May</h3>
                            <ul className="space-y-4">
                                {["Guide IPPs on growth strategy", "Share market insights", "Support business discipline"].map((t, i) => (
                                    <li key={i} className="flex items-center gap-3 text-neutral-400 bg-white/5 p-3 rounded-lg"><CheckCircle2 size={16} className="text-green-500" /> {t}</li>
                                ))}
                            </ul>
                        </div>
                        <div className="space-y-6">
                            <h3 className="text-xl font-bold text-white border-l-4 border-red-500 pl-4">A BPP Does Not</h3>
                            <ul className="space-y-4">
                                {["Assign tasks", "Manage delivery", "Enforce execution timelines"].map((t, i) => (
                                    <li key={i} className="flex items-center gap-3 text-neutral-400 bg-white/5 p-3 rounded-lg"><XCircle size={16} className="text-red-500" /> {t}</li>
                                ))}
                            </ul>
                        </div>
                    </div>
                </div>
            </section>

            {/* Compliance & Limits */}
            <section className="py-24 px-6 relative z-10">
                <div className="max-w-7xl mx-auto grid lg:grid-cols-3 gap-8">
                    <AnimatedSection>
                        <div className="p-8 border border-white/10 rounded-2xl bg-[#0f0f0f] h-full">
                            <Scale className="text-amber-500 mb-4" size={32} />
                            <h3 className="text-xl font-bold text-white mb-4">Depth & Scale Limits</h3>
                            <p className="text-neutral-400 text-sm mb-4">Strictly limited depth to ensure compliance and stability.</p>
                            <div className="flex flex-wrap gap-2">
                                <span className="text-xs bg-red-900/10 text-red-500 px-2 py-1 rounded">No MLM</span>
                                <span className="text-xs bg-red-900/10 text-red-500 px-2 py-1 rounded">No Chains</span>
                            </div>
                        </div>
                    </AnimatedSection>

                    <AnimatedSection delay={100}>
                        <div className="p-8 border border-white/10 rounded-2xl bg-[#0f0f0f] h-full">
                            <TrendingUp className="text-green-500 mb-4" size={32} />
                            <h3 className="text-xl font-bold text-white mb-4">Revenue Logic</h3>
                            <p className="text-neutral-400 text-sm mb-4">Benefit is linked to actual business execution and transparently defined.</p>
                            <div className="text-xs bg-green-900/10 text-green-500 px-3 py-1 rounded inline-block">Performance Based</div>
                        </div>
                    </AnimatedSection>

                    <AnimatedSection delay={200}>
                        <div className="p-8 border border-white/10 rounded-2xl bg-[#0f0f0f] h-full">
                            <ShieldCheck className="text-blue-500 mb-4" size={32} />
                            <h3 className="text-xl font-bold text-white mb-4">Why Controls Exist</h3>
                            <p className="text-neutral-400 text-sm mb-4">Uncontrolled enablement leads to quality breakdown. Zryoss prioritizes sustainability.</p>
                            <div className="text-xs bg-blue-900/10 text-blue-500 px-3 py-1 rounded inline-block">Long-term Trust</div>
                        </div>
                    </AnimatedSection>
                </div>
            </section>

            {/* When it works best */}
            <section className="py-24 px-6 bg-[#080808] border-t border-white/5">
                <div className="max-w-4xl mx-auto text-center">
                    <AnimatedSection>
                        <h2 className="text-3xl font-bold mb-8">When IPP Enablement Works Best</h2>
                        <div className="grid sm:grid-cols-2 gap-4 text-left">
                            <div className="p-4 rounded-lg bg-white/5 text-neutral-300 border border-white/5">✅ BPP is functionally stable</div>
                            <div className="p-4 rounded-lg bg-white/5 text-neutral-300 border border-white/5">✅ Market demand is clear</div>
                            <div className="p-4 rounded-lg bg-white/5 text-neutral-300 border border-white/5">✅ Leadership intent is genuine</div>
                            <div className="p-4 rounded-lg bg-white/5 text-neutral-300 border border-white/5">✅ System rules are respected</div>
                        </div>
                        <p className="mt-8 text-neutral-500 italic">IPP creation is a responsibility, not a shortcut.</p>
                    </AnimatedSection>
                </div>
            </section>

            {/* Final CTA */}
            <section className="py-32 px-6 text-center">
                <div className="max-w-4xl mx-auto">
                    <AnimatedSection>
                        <h2 className="text-4xl md:text-6xl font-bold mb-8">
                            Enable Businesses. <br />
                            <span className="text-neutral-500">Don't Build Hierarchies.</span>
                        </h2>
                        <p className="text-xl text-neutral-400 mb-12">
                            Multiply opportunity. Maintain quality. Protect the system.
                        </p>

                        <div className="inline-block p-1 rounded-full bg-gradient-to-r from-orange-500 to-amber-500 p-1">
                            <div className="px-12 py-6 bg-black rounded-full">
                                <h3 className="text-2xl font-bold text-white">
                                    One System. Many Owners. Controlled Scale.
                                </h3>
                            </div>
                        </div>
                    </AnimatedSection>
                </div>
            </section>
        </div>
    );
}
