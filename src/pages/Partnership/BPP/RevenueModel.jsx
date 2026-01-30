import React, { useState, useEffect, useRef } from 'react';
import {
    TrendingUp,
    ShieldCheck,
    Briefcase,
    Layers,
    Users,
    CheckCircle2,
    XCircle,
    BarChart3,
    Target,
    Zap,
    Scale,
    PieChart,
    Lock,
    Coins,
    Globe
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

export default function RevenueScaleModel() {
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
                                    Execution-Backed Revenue
                                </div>
                                <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold leading-[1.15] tracking-tight mb-5 text-white">
                                    BPP Scale & <br />
                                    <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-orange-600">
                                        Revenue Model
                                    </span>
                                </h1>
                                <p className="text-xl text-gray-400 leading-relaxed font-light mb-8">
                                    Scale Through Real Businesses, Earn Through Real Execution.
                                </p>

                                <div className="flex flex-wrap gap-4">
                                    {[
                                        "BPP Leads Expansion",
                                        "Revenue from Execution",
                                        "Sustainable Growth"
                                    ].map((item, i) => (
                                        <div key={i} className="px-6 py-3 bg-white/5 border border-white/10 rounded-full backdrop-blur-sm text-neutral-300 flex items-center gap-2">
                                            <TrendingUp size={16} className="text-orange-500" />
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
                                    src="/BPP Revenue & Scale Model.jpg"
                                    alt="BPP Scale & Revenue Model"
                                    className="relative rounded-3xl shadow-2xl border border-white/10 transform hover:scale-[1.02] transition-transform duration-500 object-cover w-full h-auto aspect-[4/3]"
                                />
                            </FadeUp>
                        </div>
                    </div>
                </div>
            </section>

            {/* Core Principle */}
            <section className="py-24 px-6 relative z-10 bg-neutral-900/30 border-y border-white/5">
                <div className="max-w-7xl mx-auto">
                    <div className="grid lg:grid-cols-2 gap-16 items-center">
                        <AnimatedSection>
                            <h2 className="text-3xl md:text-5xl font-bold mb-8 leading-tight">
                                Core Principle of the <br />
                                <span className="text-orange-500">Revenue Model</span>
                            </h2>
                            <p className="text-neutral-400 text-lg mb-8 leading-relaxed">
                                Zryoss follows one non-negotiable rule: Revenue can only be generated when real services are sold and delivered. Scale is earned, not promised.
                            </p>
                            <div className="p-6 bg-orange-500/10 border-l-4 border-orange-500 rounded-r-lg">
                                <p className="text-lg text-white font-medium">
                                    Revenue only from real services sold & delivered.
                                </p>
                            </div>
                        </AnimatedSection>

                        <AnimatedSection delay={200}>
                            <div className="space-y-4">
                                {[
                                    { text: "No joining incentives", icon: XCircle },
                                    { text: "No income for hierarchy", icon: XCircle },
                                    { text: "No payouts without execution", icon: XCircle },
                                    { text: "Scale requires execution", icon: CheckCircle2 }
                                ].map((item, i) => (
                                    <div key={i} className="flex items-center gap-4 p-4 bg-white/5 border border-white/5 rounded-xl hover:bg-white/10 transition-colors">
                                        <div className={`w-10 h-10 rounded-full bg-white/5 flex items-center justify-center shrink-0 ${item.icon === XCircle ? 'text-red-500' : 'text-green-500'}`}>
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

            {/* Three Tracks of Scale */}
            <section className="py-24 px-6 relative z-10">
                <div className="max-w-7xl mx-auto">
                    <AnimatedSection className="text-center mb-16">
                        <h2 className="text-3xl md:text-5xl font-bold mb-4">How a BPP Scales</h2>
                        <p className="text-neutral-400">Three parallel tracks for massive growth.</p>
                    </AnimatedSection>

                    <div className="grid lg:grid-cols-3 gap-8">
                        {/* Track 1 */}
                        <AnimatedSection delay={0}>
                            <div className="bg-[#0f0f0f] border border-white/10 p-8 rounded-3xl h-full hover:border-orange-500/30 transition-all group">
                                <div className="w-14 h-14 bg-white/5 rounded-2xl flex items-center justify-center text-orange-500 mb-6 group-hover:scale-110 transition-transform">
                                    <Layers size={32} />
                                </div>
                                <h3 className="text-2xl font-bold text-white mb-2">Track 1</h3>
                                <h4 className="text-xl font-medium text-orange-500 mb-6">Multi-Vertical Expansion</h4>
                                <p className="text-neutral-400 mb-6 text-sm">Operate across approved verticals like Tech, Marketing, HR, and more.</p>
                                <div className="p-4 bg-white/5 rounded-xl border border-white/5">
                                    <h5 className="text-xs font-bold text-white uppercase mb-2">Revenue Impact</h5>
                                    <p className="text-xs text-neutral-400">More verticals = more addressable markets. Cross-vertical execution increases deal value.</p>
                                </div>
                            </div>
                        </AnimatedSection>

                        {/* Track 2 */}
                        <AnimatedSection delay={100}>
                            <div className="bg-[#0f0f0f] border border-white/10 p-8 rounded-3xl h-full hover:border-orange-500/30 transition-all group">
                                <div className="w-14 h-14 bg-white/5 rounded-2xl flex items-center justify-center text-orange-500 mb-6 group-hover:scale-110 transition-transform">
                                    <Users size={32} />
                                </div>
                                <h3 className="text-2xl font-bold text-white mb-2">Track 2</h3>
                                <h4 className="text-xl font-medium text-orange-500 mb-6">IPP Enablement</h4>
                                <p className="text-neutral-400 mb-6 text-sm">Enable multiple IPPs, each with their own brand and client base.</p>
                                <div className="p-4 bg-white/5 rounded-xl border border-white/5">
                                    <h5 className="text-xs font-bold text-white uppercase mb-2">Revenue Impact</h5>
                                    <p className="text-xs text-neutral-400">Benefits only when IPPs generate real business. Adds volume, not hierarchy income.</p>
                                </div>
                            </div>
                        </AnimatedSection>

                        {/* Track 3 */}
                        <AnimatedSection delay={200}>
                            <div className="bg-[#0f0f0f] border border-white/10 p-8 rounded-3xl h-full hover:border-orange-500/30 transition-all group">
                                <div className="w-14 h-14 bg-white/5 rounded-2xl flex items-center justify-center text-orange-500 mb-6 group-hover:scale-110 transition-transform">
                                    <Globe size={32} />
                                </div>
                                <h3 className="text-2xl font-bold text-white mb-2">Track 3</h3>
                                <h4 className="text-xl font-medium text-orange-500 mb-6">Direct Client Volume</h4>
                                <p className="text-neutral-400 mb-6 text-sm">Acquire enterprise clients and drive large-ticket engagements.</p>
                                <div className="p-4 bg-white/5 rounded-xl border border-white/5">
                                    <h5 className="text-xs font-bold text-white uppercase mb-2">Revenue Impact</h5>
                                    <p className="text-xs text-neutral-400">Margins on executed services and long-term recurring contracts.</p>
                                </div>
                            </div>
                        </AnimatedSection>
                    </div>
                </div>
            </section>

            {/* Revenue Sources vs Non-Revenue */}
            <section className="py-24 px-6 bg-[#0a0a0a] border-y border-white/5">
                <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12">
                    <AnimatedSection>
                        <h3 className="text-2xl font-bold text-white mb-6 flex items-center gap-3">
                            <CheckCircle2 className="text-green-500" /> Revenue Sources
                        </h3>
                        <div className="bg-[#111] p-8 rounded-2xl border border-green-500/10 h-full">
                            <ul className="space-y-4">
                                {["Margins on executed services", "Share from multi-vertical engagements", "Defined benefit from IPP business", "Long-term recurring contracts"].map((item, i) => (
                                    <li key={i} className="flex items-center gap-3 text-neutral-300">
                                        <div className="w-1.5 h-1.5 rounded-full bg-green-500" />
                                        {item}
                                    </li>
                                ))}
                            </ul>
                            <div className="mt-8 pt-6 border-t border-white/5">
                                <p className="text-green-500 text-sm font-bold">Transparent. System-Calculated. Linked to Delivery.</p>
                            </div>
                        </div>
                    </AnimatedSection>

                    <AnimatedSection delay={200}>
                        <h3 className="text-2xl font-bold text-white mb-6 flex items-center gap-3">
                            <XCircle className="text-red-500" /> No Revenue From
                        </h3>
                        <div className="bg-[#111] p-8 rounded-2xl border border-red-500/10 h-full">
                            <ul className="space-y-4">
                                {["Onboarding IPPs", "Creating layers or hierarchy", "Inactive partners", "Promises or projections", "Team size alone"].map((item, i) => (
                                    <li key={i} className="flex items-center gap-3 text-neutral-300">
                                        <div className="w-1.5 h-1.5 rounded-full bg-red-500" />
                                        {item}
                                    </li>
                                ))}
                            </ul>
                            <div className="mt-8 pt-6 border-t border-white/5">
                                <p className="text-red-500 text-sm font-bold">No Execution = No Revenue.</p>
                            </div>
                        </div>
                    </AnimatedSection>
                </div>
            </section>

            {/* Integrity & Protection */}
            <section className="py-24 px-6 relative z-10">
                <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-16 items-center">
                    <AnimatedSection>
                        <h2 className="text-3xl md:text-5xl font-bold mb-8">Protects Revenue Integrity</h2>
                        <div className="space-y-6">
                            {[
                                { t: "Validating all scopes centrally", d: "Ensures what is sold can be delivered." },
                                { t: "Tracking execution & delivery", d: "Real-time monitoring of progress." },
                                { t: "Linking payouts to completed work", d: "Earnings released upon milestones." },
                                { t: "Enforcing governance", d: "Strict compliance and reporting." }
                            ].map((item, i) => (
                                <div key={i} className="flex gap-4">
                                    <ShieldCheck className="text-orange-500 shrink-0 mt-1" size={24} />
                                    <div>
                                        <h4 className="text-white font-bold">{item.t}</h4>
                                        <p className="text-neutral-400 text-sm">{item.d}</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </AnimatedSection>

                    <AnimatedSection delay={200}>
                        <div className="bg-gradient-to-br from-white/5 to-transparent p-8 rounded-3xl border border-white/10 text-center">
                            <Scale size={48} className="text-amber-500 mx-auto mb-6" />
                            <h3 className="text-2xl font-bold text-white mb-4">Scale Without Breaking</h3>
                            <p className="text-neutral-400 mb-8">
                                As a BPP grows, execution scales via brands, vendor networks expand, and systems remain unchanged. Growth strengthens the ecosystem, it does not destabilize it.
                            </p>
                            <div className="inline-block px-6 py-2 bg-amber-500/10 text-amber-500 rounded-full text-sm font-bold border border-amber-500/20">
                                Sustainable Growth
                            </div>
                        </div>
                    </AnimatedSection>
                </div>
            </section>

            {/* Why Sustainable & Who For */}
            <section className="py-24 px-6 bg-[#080808] border-y border-white/5">
                <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12">
                    <AnimatedSection>
                        <h3 className="text-2xl font-bold text-white mb-6">Why It's Sustainable</h3>
                        <div className="bg-[#111] p-8 rounded-2xl h-full border border-white/5">
                            <ul className="space-y-3 mb-6">
                                <li className="flex gap-2 text-neutral-300"><CheckCircle2 className="text-blue-500" size={18} /> Rewards execution, not hype</li>
                                <li className="flex gap-2 text-neutral-300"><CheckCircle2 className="text-blue-500" size={18} /> Encourages long-term relationships</li>
                                <li className="flex gap-2 text-neutral-300"><CheckCircle2 className="text-blue-500" size={18} /> Avoids legal & compliance risks</li>
                                <li className="flex gap-2 text-neutral-300"><CheckCircle2 className="text-blue-500" size={18} /> Builds real business equity</li>
                            </ul>
                            <p className="text-sm text-neutral-500 italic">BPPs build business value, not short-term income.</p>
                        </div>
                    </AnimatedSection>

                    <AnimatedSection delay={200}>
                        <h3 className="text-2xl font-bold text-white mb-6">Who This Is For</h3>
                        <div className="bg-[#111] p-8 rounded-2xl h-full border border-white/5">
                            <div className="grid grid-cols-2 gap-x-4 gap-y-8">
                                <div>
                                    <h4 className="text-green-500 font-bold mb-2 flex items-center gap-2 text-sm uppercase"><CheckCircle2 size={16} /> Ideal For</h4>
                                    <ul className="text-sm text-neutral-400 space-y-1">
                                        <li>Think long-term</li>
                                        <li>Want scalable revenue</li>
                                        <li>Value systems</li>
                                    </ul>
                                </div>
                                <div>
                                    <h4 className="text-red-500 font-bold mb-2 flex items-center gap-2 text-sm uppercase"><XCircle size={16} /> Not For</h4>
                                    <ul className="text-sm text-neutral-400 space-y-1">
                                        <li>Quick-income seekers</li>
                                        <li>Recruitment focus</li>
                                        <li>Passive-only expectations</li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </AnimatedSection>
                </div>
            </section>

            {/* Final CTA */}
            <section className="py-32 px-6 text-center">
                <div className="max-w-4xl mx-auto">
                    <AnimatedSection>
                        <h2 className="text-4xl md:text-6xl font-bold mb-8">
                            One System. Real Scale. <br />
                            <span className="text-orange-500">Real Revenue.</span>
                        </h2>
                        <p className="text-xl text-neutral-400 mb-12">
                            Zryoss does not manufacture income. It enables business ecosystems that earn through delivery.
                        </p>

                        <div className="inline-block p-1 rounded-full bg-gradient-to-r from-orange-500 to-amber-500 p-1">
                            <div className="px-12 py-6 bg-black rounded-full">
                                <h3 className="text-2xl font-bold text-white">
                                    Scale With Discipline. Earn With Integrity.
                                </h3>
                            </div>
                        </div>
                    </AnimatedSection>
                </div>
            </section>
        </div>
    );
}
