import React, { useState, useEffect, useRef } from 'react';
import {
    Layers,
    Briefcase,
    TrendingUp,
    CheckCircle2,
    XCircle,
    ShieldCheck,
    Users,
    Globe,
    Cpu,
    BookOpen,
    Stethoscope,
    Armchair,
    FileText,
    Settings,
    Layout,
    ArrowRight
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

export default function MultiVerticalBusinessModel() {
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
                                    Zryoss Partnership Model
                                </div>
                                <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold leading-[1.15] tracking-tight mb-5 text-white">
                                    Multi-Vertical <br />
                                    <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-orange-600">
                                        Business Model
                                    </span>
                                </h1>
                                <p className="text-xl text-gray-400 leading-relaxed font-light mb-8">
                                    Build and Operate Multiple Business Verticals on One System.
                                </p>

                                <div className="p-8 border border-white/10 bg-white/5 rounded-[24px] backdrop-blur-sm inline-block w-full shadow-2xl relative overflow-hidden group">
                                    <div className="absolute inset-0 bg-gradient-to-r from-orange-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
                                    <p className="text-lg text-gray-300 relative z-10 leading-relaxed italic">
                                        "One BPP. Multiple Verticals. <strong className="text-white">One Centralized Operating System.</strong>"
                                    </p>
                                </div>
                            </FadeUp>
                        </div>

                        {/* Right Column: Image */}
                        <div className="relative hidden lg:block">
                            <FadeUp delay={0.2}>
                                <div className="absolute inset-0 bg-gradient-to-r from-orange-500/20 to-yellow-600/20 blur-3xl rounded-3xl transform rotate-3" />
                                <img
                                    src="/Multi-Vertical Business Model (3 Verticals).png"
                                    alt="Multi-Vertical Business Model"
                                    className="relative rounded-3xl shadow-2xl border border-white/10 transform hover:scale-[1.02] transition-transform duration-500 object-cover w-full h-auto aspect-[4/3]"
                                />
                            </FadeUp>
                        </div>
                    </div>
                </div>
            </section>

            {/* What "Multi-Vertical" Means */}
            <section className="py-24 px-6 relative z-10 bg-neutral-900/30 border-y border-white/5">
                <div className="max-w-7xl mx-auto">
                    <div className="grid lg:grid-cols-2 gap-16 items-center">
                        <AnimatedSection>
                            <h2 className="text-3xl md:text-5xl font-bold mb-8 leading-tight">
                                What <span className="text-orange-500">"Multi-Vertical"</span> Means
                            </h2>
                            <p className="text-neutral-400 text-lg mb-8 leading-relaxed">
                                The Multi-Vertical Business Model under Zryoss allows an Independent Business Partner (BPP) to operate multiple business categories simultaneously—without building separate teams, systems, or execution infrastructure for each vertical.
                            </p>
                            <div className="p-6 bg-orange-500/10 border-l-4 border-orange-500 rounded-r-lg">
                                <p className="text-lg text-white font-medium">
                                    Each vertical functions as a business unit, not a separate chaos zone.
                                </p>
                            </div>
                        </AnimatedSection>

                        <AnimatedSection delay={200}>
                            <div className="space-y-4">
                                {[
                                    { text: "Operating multiple service categories", icon: Layers },
                                    { text: "Using one backend operating system", icon: Settings },
                                    { text: "Routing execution through domain-specific brands", icon: ArrowRight },
                                    { text: "Maintaining centralized control and quality", icon: ShieldCheck }
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

            {/* Why Zryoss Enables */}
            <section className="py-24 px-6 relative z-10">
                <div className="max-w-5xl mx-auto text-center">
                    <AnimatedSection>
                        <h2 className="text-3xl md:text-5xl font-bold mb-12">Why Zryoss Enables This</h2>
                        <p className="text-neutral-400 text-lg mb-12 max-w-3xl mx-auto">
                            At scale, businesses face three problems: separate teams, fragmented execution, and operational overload. Zryoss solves this by allowing BPPs to expand horizontally (across verticals) instead of vertically (through hierarchy).
                        </p>
                        <div className="grid md:grid-cols-3 gap-6">
                            {[
                                { title: "Separate Teams", desc: "For each service", icon: Users },
                                { title: "Fragmented Quality", desc: "Reviewing execution quality", icon: Layout },
                                { title: "Operational Overload", desc: "Managing multiple teams", icon: Layers }
                            ].map((item, i) => (
                                <div key={i} className="p-8 bg-gradient-to-br from-[#111] to-black border border-white/10 rounded-3xl text-left hover:border-orange-500/30 transition-all">
                                    <div className="mb-6"><item.icon size={32} className="text-orange-500" /></div>
                                    <h3 className="text-xl font-bold text-white mb-2">{item.title}</h3>
                                    <p className="text-neutral-500">{item.desc}</p>
                                </div>
                            ))}
                        </div>
                    </AnimatedSection>
                </div>
            </section>

            {/* How It Works - Steps */}
            <section className="py-24 px-6 bg-[#0a0a0a] border-t border-white/5">
                <div className="max-w-7xl mx-auto">
                    <AnimatedSection className="mb-16 text-center">
                        <h2 className="text-4xl md:text-5xl font-bold mb-4">How it Works</h2>
                        <p className="text-neutral-400">Four steps to multi-vertical dominance.</p>
                    </AnimatedSection>

                    <div className="grid md:grid-cols-2 gap-8">
                        {/* Step 1 */}
                        <AnimatedSection>
                            <div className="bg-white/5 p-8 rounded-2xl h-full border border-white/5 hover:border-orange-500/20 transition-all">
                                <span className="text-orange-500 font-bold text-sm uppercase tracking-wider mb-2 block">Step 1</span>
                                <h3 className="text-2xl font-bold text-white mb-6">Vertical Selection</h3>
                                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-6">
                                    {[
                                        { name: "Tech & Software", icon: Cpu },
                                        { name: "Digital Marketing", icon: Globe },
                                        { name: "HR & Recruitment", icon: Users },
                                        { name: "Education & Admissions", icon: BookOpen },
                                        { name: "Healthcare & Medical", icon: Stethoscope },
                                        { name: "Interiors & Infra", icon: Armchair },
                                        { name: "Business Services", icon: Briefcase }
                                    ].map((v, i) => (
                                        <div key={i} className="flex items-center gap-2 text-neutral-400 text-sm">
                                            <v.icon size={14} className="text-orange-500/80" />
                                            {v.name}
                                        </div>
                                    ))}
                                </div>
                                <p className="text-neutral-500 text-sm italic">Verticals are activated only after alignment and readiness.</p>
                            </div>
                        </AnimatedSection>

                        {/* Step 2 */}
                        <AnimatedSection delay={100}>
                            <div className="bg-white/5 p-8 rounded-2xl h-full border border-white/5 hover:border-orange-500/20 transition-all">
                                <span className="text-orange-500 font-bold text-sm uppercase tracking-wider mb-2 block">Step 2</span>
                                <h3 className="text-2xl font-bold text-white mb-6">Platform Enablement</h3>
                                <ul className="space-y-3 mb-6">
                                    {[
                                        "Sales enablement is activated",
                                        "Demo support is mapped",
                                        "Execution routing is defined",
                                        "Account coordination is aligned"
                                    ].map((item, i) => (
                                        <li key={i} className="flex items-center gap-3 text-neutral-300">
                                            <div className="w-1.5 h-1.5 rounded-full bg-orange-500" />
                                            {item}
                                        </li>
                                    ))}
                                </ul>
                                <p className="text-neutral-500 text-sm italic">The system treats each vertical as a controlled execution lane.</p>
                            </div>
                        </AnimatedSection>

                        {/* Step 3 */}
                        <AnimatedSection delay={200}>
                            <div className="bg-white/5 p-8 rounded-2xl h-full border border-white/5 hover:border-orange-500/20 transition-all">
                                <span className="text-orange-500 font-bold text-sm uppercase tracking-wider mb-2 block">Step 3</span>
                                <h3 className="text-2xl font-bold text-white mb-6">Client Acquisition</h3>
                                <div className="grid grid-cols-2 gap-6">
                                    <div>
                                        <h4 className="text-white font-bold mb-2 text-sm">The BPP</h4>
                                        <ul className="space-y-2 text-sm text-neutral-400">
                                            <li>• Builds market presence</li>
                                            <li>• Acquires clients</li>
                                            <li>• Strategic leadership</li>
                                        </ul>
                                    </div>
                                    <div>
                                        <h4 className="text-white font-bold mb-2 text-sm">Zryoss</h4>
                                        <ul className="space-y-2 text-sm text-neutral-400">
                                            <li>• Handles demos</li>
                                            <li>• Execution & Delivery</li>
                                            <li>• Coordination</li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </AnimatedSection>

                        {/* Step 4 */}
                        <AnimatedSection delay={300}>
                            <div className="bg-white/5 p-8 rounded-2xl h-full border border-white/5 hover:border-orange-500/20 transition-all">
                                <span className="text-orange-500 font-bold text-sm uppercase tracking-wider mb-2 block">Step 4</span>
                                <h3 className="text-2xl font-bold text-white mb-6">Domain-Based Execution</h3>
                                <p className="text-neutral-400 mb-4">Each vertical is executed by the relevant brand:</p>
                                <div className="grid grid-cols-1 gap-2 text-sm">
                                    {[
                                        { l: "Tech", r: "Kryoss Softech" },
                                        { l: "Digital", r: "Adkryoss" },
                                        { l: "HR", r: "Clink HR" },
                                        { l: "Healthcare", r: "Medikryoss" },
                                        { l: "Interiors", r: "Kryoss Interiors" }
                                    ].map((pair, i) => (
                                        <div key={i} className="flex justify-between border-b border-white/5 pb-1 last:border-0 last:pb-0">
                                            <span className="text-neutral-500">{pair.l}</span>
                                            <span className="text-white font-medium">{pair.r}</span>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </AnimatedSection>
                    </div>
                </div>
            </section>

            {/* Centralized Control & IPPs */}
            <section className="py-24 px-6 relative z-10">
                <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-12">
                    <AnimatedSection>
                        <h3 className="text-3xl font-bold text-white mb-6">Centralized Control</h3>
                        <div className="bg-gradient-to-br from-[#111] to-black border border-white/10 p-8 rounded-3xl h-full">
                            <ul className="space-y-4">
                                {[
                                    "Execution remains centralized",
                                    "Quality standards remain uniform",
                                    "Account management remains single-point",
                                    "Reporting is consolidated"
                                ].map((item, i) => (
                                    <li key={i} className="flex items-center gap-3 text-neutral-300">
                                        <ShieldCheck className="text-orange-500" size={20} />
                                        {item}
                                    </li>
                                ))}
                            </ul>
                            <div className="mt-6 pt-6 border-t border-white/10 text-orange-400 text-sm font-medium">
                                BPP does not manage vertical teams separately.
                            </div>
                        </div>
                    </AnimatedSection>

                    <AnimatedSection delay={200}>
                        <h3 className="text-3xl font-bold text-white mb-6">Role of IPPs</h3>
                        <div className="bg-gradient-to-br from-[#111] to-black border border-white/10 p-8 rounded-3xl h-full">
                            <p className="text-neutral-400 mb-6">A BPP may enable multiple IPPs under different verticals to operate under their own brands, while Zryoss handles execution.</p>
                            <div className="flex items-center gap-4 text-white font-bold p-4 bg-white/5 rounded-xl border border-white/5">
                                <Users className="text-blue-500" />
                                Distributed Growth + Centralized Control
                            </div>
                        </div>
                    </AnimatedSection>
                </div>
            </section>

            {/* Revenue Logic & Safety */}
            <section className="py-24 px-6 bg-[#080808] border-y border-white/5">
                <div className="max-w-7xl mx-auto">
                    <div className="grid md:grid-cols-2 gap-16">
                        <AnimatedSection>
                            <h3 className="text-2xl font-bold mb-6 flex items-center gap-3">
                                <FileText className="text-amber-500" />
                                Revenue Logic
                            </h3>
                            <div className="space-y-4 mb-8">
                                <div className="flex gap-3 items-start">
                                    <CheckCircle2 className="text-green-500 shrink-0 mt-1" size={18} />
                                    <span className="text-neutral-300">Revenue from actual clients & services delivered</span>
                                </div>
                                <div className="flex gap-3 items-start">
                                    <XCircle className="text-red-500 shrink-0 mt-1" size={18} />
                                    <span className="text-neutral-300">No income from just adding verticals or structure</span>
                                </div>
                            </div>
                            <p className="text-neutral-500 text-sm">Scale comes from real business activity, not configuration.</p>
                        </AnimatedSection>

                        <AnimatedSection delay={200}>
                            <h3 className="text-2xl font-bold mb-6 flex items-center gap-3">
                                <ShieldCheck className="text-green-500" />
                                Safe & Scalable
                            </h3>
                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                                {["Prevents Execution Overload", "Avoids Vendor Duplication", "Maintains Quality Consistency", "Faster Market Expansion"].map((item, i) => (
                                    <div key={i} className="p-3 bg-white/5 rounded-lg text-sm text-neutral-300">
                                        {item}
                                    </div>
                                ))}
                            </div>
                            <p className="mt-6 text-neutral-500 text-sm">
                                Multi-vertical growth happens inside the system, not outside it.
                            </p>
                        </AnimatedSection>
                    </div>
                </div>
            </section>

            {/* Who Should Use */}
            <section className="py-24 px-6 relative z-10">
                <div className="max-w-4xl mx-auto text-center">
                    <AnimatedSection>
                        <h2 className="text-3xl md:text-5xl font-bold mb-12">Who Should Use This Model</h2>
                        <div className="grid md:grid-cols-2 gap-8 text-left">
                            <div className="bg-green-900/10 border border-green-500/20 p-8 rounded-2xl">
                                <h3 className="text-green-500 font-bold mb-4 flex items-center gap-2"><CheckCircle2 size={20} /> Ideal For</h3>
                                <ul className="space-y-2 text-neutral-300">
                                    <li>• Leaders with capability</li>
                                    <li>• Seek broader market reach</li>
                                    <li>• Think in systems, not silos</li>
                                    <li>• Prefer control over chaos</li>
                                </ul>
                            </div>
                            <div className="bg-red-900/10 border border-red-500/20 p-8 rounded-2xl">
                                <h3 className="text-red-500 font-bold mb-4 flex items-center gap-2"><XCircle size={20} /> Not For</h3>
                                <ul className="space-y-2 text-neutral-300">
                                    <li>• Solo operators without scale intent</li>
                                    <li>• Short-term income seekers</li>
                                    <li>• Recruitment-driven growth</li>
                                </ul>
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
                            One Business Partner. <br />
                            Many Verticals. <br />
                            <span className="text-orange-500">One System.</span>
                        </h2>
                        <p className="text-xl text-neutral-400 mb-12">
                            Expand without fragmentation. Operate without stress.
                        </p>

                        <div className="inline-block p-1 rounded-full bg-gradient-to-r from-orange-500 to-amber-500 p-1">
                            <div className="px-12 py-6 bg-black rounded-full">
                                <h3 className="text-2xl md:text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-white to-neutral-400">
                                    You manage one system with multiple outputs.
                                </h3>
                            </div>
                        </div>
                    </AnimatedSection>
                </div>
            </section>
        </div>
    );
}
