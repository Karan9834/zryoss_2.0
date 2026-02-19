import React, { useState, useEffect, useRef } from 'react';
import {
    Network,
    ShieldAlert,
    GitMerge,
    DollarSign,
    Users,
    UserPlus,
    XCircle,
    CheckCircle2,
    Lock,
    TrendingUp,
    Briefcase,
    Globe,
    AlertTriangle,
    ShieldCheck
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

export default function SubPartnerModel() {
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
                                    Controlled Expansion
                                </div>
                                <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold leading-[1.15] tracking-tight mb-5 text-white">
                                    IPP Sub-Partner <br />
                                    <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-orange-600">
                                        Model
                                    </span>
                                </h1>
                                <p className="text-xl text-gray-400 leading-relaxed font-light mb-8">
                                    Controlled Expansion Without Turning Into a Hierarchy.
                                </p>

                                <div className="p-8 border border-white/10 bg-white/5 rounded-[24px] backdrop-blur-sm inline-block w-full shadow-2xl relative overflow-hidden group">
                                    <div className="absolute inset-0 bg-gradient-to-r from-orange-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
                                    <p className="text-lg text-gray-300 relative z-10 leading-relaxed italic">
                                        "Designed for business scale, not recruitment-based income. <strong className="text-white">Expand reach while keeping execution, governance, and control centralized.</strong>"
                                    </p>
                                </div>
                            </FadeUp>
                        </div>

                        {/* Right Column: Image */}
                        <div className="relative hidden lg:block">
                            <FadeUp delay={0.2}>
                                <div className="absolute inset-0 bg-gradient-to-r from-orange-500/20 to-yellow-600/20 blur-3xl rounded-3xl transform rotate-3" />
                                <img
                                    src="/IPP Sub Partner Model.jpg"
                                    alt="IPP Sub-Partner Model"
                                    className="relative rounded-3xl shadow-2xl border border-white/10 transform hover:scale-[1.02] transition-transform duration-500 object-cover w-full h-auto aspect-[4/3]"
                                />
                            </FadeUp>
                        </div>
                    </div>
                </div>
            </section>

            {/* Why Exists */}
            <section className="py-24 px-6 relative z-10 bg-neutral-900/30 border-y border-white/5">
                <div className="max-w-7xl mx-auto">
                    <div className="grid lg:grid-cols-2 gap-16 items-center">
                        <AnimatedSection>
                            <h2 className="text-3xl md:text-5xl font-bold mb-8 leading-tight">
                                Why a Sub-Partner <br />
                                <span className="text-orange-500">Model Exists</span>
                            </h2>
                            <p className="text-neutral-400 text-lg mb-8 leading-relaxed">
                                As IPPs grow, they face challenges like limited personal bandwidth and missed opportunities. This model allows expansion without creating operational chaos.
                            </p>
                            <div className="p-6 bg-orange-500/10 border-l-4 border-orange-500 rounded-r-lg">
                                <p className="text-lg text-white font-medium">
                                    Zryoss enables expansion while protecting system integrity.
                                </p>
                            </div>
                        </AnimatedSection>

                        <AnimatedSection delay={200}>
                            <div className="space-y-4">
                                <div className="p-6 bg-white/5 border border-white/5 rounded-2xl flex items-center gap-4">
                                    <div className="w-12 h-12 bg-red-500/10 text-red-500 rounded-full flex items-center justify-center shrink-0">
                                        <Clock size={24} />
                                    </div>
                                    <div>
                                        <h3 className="font-bold text-white mb-1">Limited Bandwidth</h3>
                                        <p className="text-neutral-400 text-sm">One person cannot capture every opportunity.</p>
                                    </div>
                                </div>
                                <div className="p-6 bg-white/5 border border-white/5 rounded-2xl flex items-center gap-4">
                                    <div className="w-12 h-12 bg-amber-500/10 text-amber-500 rounded-full flex items-center justify-center shrink-0">
                                        <Globe size={24} />
                                    </div>
                                    <div>
                                        <h3 className="font-bold text-white mb-1">Missed Opportunities</h3>
                                        <p className="text-neutral-400 text-sm">Potential deals lost outside immediate reach.</p>
                                    </div>
                                </div>
                            </div>
                        </AnimatedSection>
                    </div>
                </div>
            </section>

            {/* What Is Sub-Partner */}
            <section className="py-24 px-6 relative z-10">
                <div className="max-w-7xl mx-auto">
                    <AnimatedSection className="mb-16 text-center">
                        <h2 className="text-3xl md:text-5xl font-bold mb-6">What Is an IPP Sub-Partner?</h2>
                        <div className="flex flex-wrap justify-center gap-4 mb-8">
                            {["Not Employees", "Not Agents", "Not Downline Recruits"].map((tag, i) => (
                                <span key={i} className="px-4 py-2 rounded-full bg-white/5 border border-white/10 text-neutral-300 text-sm">
                                    {tag}
                                </span>
                            ))}
                        </div>
                    </AnimatedSection>

                    <div className="grid md:grid-cols-3 gap-8">
                        {[
                            {
                                icon: Briefcase,
                                title: "Own Brand",
                                desc: "An independent IPP operating under their own brand."
                            },
                            {
                                icon: ShieldCheck,
                                title: "Controlled Scale",
                                desc: "Onboarded within a controlled structure."
                            },
                            {
                                icon: Settings,
                                title: "Same OS",
                                desc: "Using the same Zryoss operating system."
                            }
                        ].map((item, i) => (
                            <AnimatedSection key={i} delay={i * 100}>
                                <div className="p-8 bg-gradient-to-b from-[#111] to-black border border-white/10 rounded-3xl h-full hover:border-orange-500/30 transition-all text-center">
                                    <div className="w-16 h-16 mx-auto mb-6 bg-white/5 rounded-2xl flex items-center justify-center text-orange-500">
                                        <item.icon size={32} />
                                    </div>
                                    <h3 className="text-xl font-bold text-white mb-3">{item.title}</h3>
                                    <p className="text-neutral-400">{item.desc}</p>
                                </div>
                            </AnimatedSection>
                        ))}
                    </div>
                    <AnimatedSection className="mt-12 text-center">
                        <div className="inline-block p-4 bg-white/5 border border-white/10 rounded-xl text-neutral-300">
                            Each sub-partner runs a <strong>real business</strong>, not a referral position.
                        </div>
                    </AnimatedSection>
                </div>
            </section>

            {/* Structure & Strict Limits */}
            <section className="py-24 px-6 bg-[#0a0a0a] border-t border-white/5">
                <div className="max-w-5xl mx-auto">
                    <div className="grid md:grid-cols-2 gap-12 items-center">
                        <AnimatedSection>
                            <h2 className="text-3xl md:text-5xl font-bold mb-6">Depth & Structure <br />(Strictly Limited)</h2>
                            <p className="text-neutral-400 mb-8">
                                To remain MLM-safe and execution-focused, the structure is strictly controlled.
                            </p>
                            <ul className="space-y-4">
                                {[
                                    "Maximum depth allowed: 3 Levels only",
                                    "No unlimited hierarchy",
                                    "No cascading recruitment chains",
                                    "No further sub-partnering beyond Level 3"
                                ].map((item, i) => (
                                    <li key={i} className="flex items-center gap-3 text-white font-medium">
                                        <Lock className="text-red-500" size={20} />
                                        {item}
                                    </li>
                                ))}
                            </ul>
                        </AnimatedSection>

                        <AnimatedSection delay={200}>
                            <div className="bg-white/5 border border-white/10 p-8 rounded-3xl flex flex-col items-center justify-center text-center">
                                <div className="flex flex-col gap-4 w-full max-w-xs">
                                    <div className="p-4 bg-orange-500 rounded-xl text-black font-bold shadow-[0_0_20px_rgba(249,115,22,0.3)]">Level 1: Primary IPP</div>
                                    <div className="h-4 w-px bg-white/20 mx-auto" />
                                    <div className="p-4 bg-orange-500/20 rounded-xl text-orange-200 border border-orange-500/30">Level 2: Sub-Partner</div>
                                    <div className="h-4 w-px bg-white/20 mx-auto" />
                                    <div className="p-4 bg-orange-500/5 rounded-xl text-neutral-400 border border-white/5">Level 3: Sub-Partner</div>
                                </div>
                                <div className="mt-8 pt-6 border-t border-white/10 w-full">
                                    <div className="text-xs uppercase tracking-widest text-red-500 font-bold mb-1">Stop</div>
                                    <div className="text-neutral-500 text-sm">No expansion beyond this point</div>
                                </div>
                            </div>
                        </AnimatedSection>
                    </div>
                </div>
            </section>

            {/* How It Works Flow */}
            <section className="py-24 px-6 relative z-10">
                <div className="max-w-7xl mx-auto">
                    <AnimatedSection className="mb-16 text-center">
                        <h2 className="text-3xl md:text-5xl font-bold mb-4">How It Works</h2>
                        <p className="text-neutral-400">A simplified onboarding and operational flow.</p>
                    </AnimatedSection>

                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {[
                            { step: 1, text: "Existing IPP identifies potential sub-partner" },
                            { step: 2, text: "Sub-partner applies independently" },
                            { step: 3, text: "Zryoss evaluates eligibility and fit" },
                            { step: 4, text: "Sub-partner onboarded as separate IPP" },
                            { step: 5, text: "Brand creation & system access provided" },
                            { step: 6, text: "Execution & demos managed by Zryoss" }
                        ].map((item, i) => (
                            <AnimatedSection key={i} delay={i * 50}>
                                <div className="p-6 bg-white/5 border border-white/10 rounded-2xl flex items-start gap-4 h-full hover:bg-white/10 transition-colors">
                                    <div className="w-8 h-8 rounded-full bg-orange-500 text-black font-bold flex items-center justify-center shrink-0">
                                        {item.step}
                                    </div>
                                    <p className="text-neutral-300 pt-1">{item.text}</p>
                                </div>
                            </AnimatedSection>
                        ))}
                    </div>

                    <AnimatedSection className="mt-8 text-center">
                        <div className="text-neutral-500 text-sm italic">
                            The referring IPP does not control execution or operations of sub-partners.
                        </div>
                    </AnimatedSection>
                </div>
            </section>

            {/* Primary IPP Role */}
            <section className="py-24 px-6 bg-[#080808]">
                <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-12">
                    <AnimatedSection>
                        <h3 className="text-xl font-bold text-green-500 uppercase tracking-wider mb-6">Primary IPP Does</h3>
                        <div className="bg-green-900/10 border border-green-500/20 p-8 rounded-3xl h-full">
                            <ul className="space-y-4">
                                {[
                                    "Mentor at a business level",
                                    "Share market insights",
                                    "Support early positioning"
                                ].map((item, i) => (
                                    <li key={i} className="flex items-center gap-3 text-neutral-300">
                                        <CheckCircle2 className="text-green-500" size={20} />
                                        {item}
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </AnimatedSection>

                    <AnimatedSection delay={200}>
                        <h3 className="text-xl font-bold text-red-500 uppercase tracking-wider mb-6">Primary IPP Does Not</h3>
                        <div className="bg-red-900/10 border border-red-500/20 p-8 rounded-3xl h-full">
                            <ul className="space-y-4">
                                {[
                                    "Manage operations",
                                    "Deliver services",
                                    "Control demos",
                                    "Override platform decisions"
                                ].map((item, i) => (
                                    <li key={i} className="flex items-center gap-3 text-neutral-300">
                                        <XCircle className="text-red-500" size={20} />
                                        {item}
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </AnimatedSection>
                </div>
            </section>

            {/* Revenue & What It's NOT */}
            <section className="py-24 px-6 relative z-10">
                <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-16">
                    <AnimatedSection>
                        <h2 className="text-3xl font-bold mb-6 flex items-center gap-3">
                            <DollarSign className="text-amber-500" />
                            Revenue & Benefits
                        </h2>
                        <div className="space-y-6">
                            <p className="text-neutral-400">Any benefit from sub-partners is based on actual business generated, tied to real service delivery, and transparent.</p>
                            <div className="space-y-3">
                                {[
                                    "No income for just onboarding",
                                    "No reward for inactive partners",
                                    "No promise of passive income without work"
                                ].map((item, i) => (
                                    <div key={i} className="flex items-center gap-3 text-neutral-300 p-3 bg-white/5 rounded-lg">
                                        <XCircle className="text-red-500" size={18} />
                                        {item}
                                    </div>
                                ))}
                            </div>
                            <div className="text-amber-500 font-medium pl-2 border-l-2 border-amber-500">Value flows only from real execution.</div>
                        </div>
                    </AnimatedSection>

                    <AnimatedSection delay={200}>
                        <h2 className="text-3xl font-bold mb-6 flex items-center gap-3">
                            <ShieldAlert className="text-red-500" />
                            What This Model Is NOT
                        </h2>
                        <div className="grid grid-cols-2 gap-4">
                            {[
                                "Not MLM",
                                "Not Referral Scheme",
                                "Not Chain Earning",
                                "Not Pyramid",
                                "Not Recruitment Driven"
                            ].map((item, i) => (
                                <div key={i} className="p-4 bg-red-900/10 border border-red-500/20 rounded-xl text-red-200 text-sm font-medium flex items-center gap-2">
                                    <XCircle size={16} />
                                    {item}
                                </div>
                            ))}
                        </div>
                        <p className="mt-6 text-neutral-500">It is a controlled business expansion model.</p>
                    </AnimatedSection>
                </div>
            </section>

            {/* Why Strict Control & Who for */}
            <section className="py-24 px-6 bg-[#080808] border-t border-white/5">
                <div className="max-w-6xl mx-auto">
                    <div className="grid md:grid-cols-2 gap-16">
                        <AnimatedSection>
                            <h3 className="text-2xl font-bold mb-6">Why Zryoss Controls This Strictly</h3>
                            <p className="text-neutral-400 mb-6">
                                Uncontrolled hierarchies damage credibility, break execution at scale, and increase compliance risk.
                            </p>
                            <div className="bg-white/5 p-6 rounded-2xl border border-white/5">
                                <div className="text-sm text-neutral-500 uppercase mb-4 font-bold">Zryoss Prioritizes</div>
                                <div className="flex flex-wrap gap-3">
                                    {["Sustainability", "System Discipline", "Execution Quality"].map((item, i) => (
                                        <span key={i} className="px-3 py-1 bg-white/10 rounded-lg text-white text-sm">{item}</span>
                                    ))}
                                </div>
                            </div>
                        </AnimatedSection>

                        <AnimatedSection delay={100}>
                            <h3 className="text-2xl font-bold mb-6">Who Should Use This</h3>
                            <div className="space-y-4">
                                <div className="flex gap-4">
                                    <div className="w-10 h-10 rounded-full bg-green-500/10 text-green-500 flex items-center justify-center shrink-0">
                                        <CheckCircle2 size={20} />
                                    </div>
                                    <div>
                                        <div className="text-white font-medium mb-1">Stable & Experienced</div>
                                        <div className="text-neutral-500 text-sm">Have stable client flow & understand system deeply.</div>
                                    </div>
                                </div>
                                <div className="flex gap-4">
                                    <div className="w-10 h-10 rounded-full bg-red-500/10 text-red-500 flex items-center justify-center shrink-0">
                                        <XCircle size={20} />
                                    </div>
                                    <div>
                                        <div className="text-white font-medium mb-1">Not for Quick Money</div>
                                        <div className="text-neutral-500 text-sm">Not for recruitment-focused growth or passive-only expectations.</div>
                                    </div>
                                </div>
                            </div>
                        </AnimatedSection>
                    </div>
                </div>
            </section>

            {/* Final CTA */}
            <section className="py-32 px-6 text-center">
                <div className="max-w-4xl mx-auto">
                    <AnimatedSection>
                        <h2 className="text-4xl md:text-6xl font-bold mb-8">
                            Scale With Structure. <br />
                            <span className="text-orange-500">Grow Without Chaos.</span>
                        </h2>
                        <p className="text-xl text-neutral-400 mb-12 max-w-2xl mx-auto">
                            The IPP Sub-Partner Model exists to support responsible expansion, not uncontrolled growth.
                        </p>

                        <div className="inline-block p-1 rounded-full bg-gradient-to-r from-orange-500 to-amber-500 p-1">
                            <div className="px-12 py-6 bg-black rounded-full">
                                <h3 className="text-2xl md:text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-white to-neutral-400">
                                    IPP Grows the Business. <br className="md:hidden" /> The System Protects It.
                                </h3>
                            </div>
                        </div>
                    </AnimatedSection>
                </div>
            </section>
        </div>
    );
}

// Icons needed
import { Settings, Clock } from 'lucide-react';
