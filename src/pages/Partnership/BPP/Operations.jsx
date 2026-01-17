import React, { useState, useEffect, useRef } from 'react';
import {
    Activity,
    Shield,
    Users,
    Zap,
    TrendingUp,
    CheckCircle2,
    XCircle,
    ShieldCheck,
    Lock,
    Eye,
    Monitor,
    FileCheck,
    Mic2,
    Server,
    AlertOctagon,
    ArrowRightCircle,
    PlayCircle
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

export default function OperationAndDemo() {
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
                            <span className="text-xs font-semibold tracking-wide uppercase text-neutral-300">Operational Integrity</span>
                        </div>

                        <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold mb-8 leading-[0.95] tracking-tight">
                            BPP Operations & <br />
                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-500 to-amber-500">
                                Demo Authority
                            </span>
                        </h1>

                        <p className="text-xl md:text-2xl text-neutral-400 mb-10 leading-relaxed max-w-3xl mx-auto font-light">
                            Scale With Authority. Operate With Control.
                        </p>

                        <div className="flex flex-wrap justify-center gap-4">
                            {[
                                "BPP leads expansion",
                                "Zryoss governs execution",
                                "Clear Boundaries"
                            ].map((item, i) => (
                                <div key={i} className="px-6 py-3 bg-white/5 border border-white/10 rounded-full backdrop-blur-sm text-neutral-300 flex items-center gap-2">
                                    <ShieldCheck size={16} className="text-orange-500" />
                                    {item}
                                </div>
                            ))}
                        </div>
                    </AnimatedSection>
                </div>
            </section>

            {/* Why Centralized? */}
            <section className="py-24 px-6 relative z-10 bg-neutral-900/30 border-y border-white/5">
                <div className="max-w-7xl mx-auto">
                    <div className="grid lg:grid-cols-2 gap-16 items-center">
                        <AnimatedSection>
                            <h2 className="text-3xl md:text-5xl font-bold mb-8 leading-tight">
                                Why Operations & Demo Authority <br />
                                <span className="text-orange-500">Are Centralized</span>
                            </h2>
                            <p className="text-neutral-400 text-lg mb-8 leading-relaxed">
                                At multi-vertical scale, the biggest risks are over-promising, uncontrolled execution, and conflicting communication. Zryoss prevents this by centralizing operations and demo authority—even at the BPP level.
                            </p>
                        </AnimatedSection>

                        <AnimatedSection delay={200}>
                            <div className="space-y-4">
                                {[
                                    { text: "Over-promising during demos", icon: Mic2 },
                                    { text: "Uncontrolled execution commitments", icon: Activity },
                                    { text: "Inconsistent delivery quality", icon: AlertOctagon },
                                    { text: "Conflicting communication", icon: Users }
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

            {/* Operations Authority: Who Controls What */}
            <section className="py-24 px-6 relative z-10">
                <div className="max-w-7xl mx-auto">
                    <AnimatedSection className="text-center mb-16">
                        <h2 className="text-3xl md:text-5xl font-bold mb-4">Operations Authority</h2>
                        <p className="text-neutral-400">Clear division of control for maximum efficiency.</p>
                    </AnimatedSection>

                    <div className="grid md:grid-cols-2 gap-8">
                        {/* Zryoss Controls */}
                        <AnimatedSection>
                            <div className="bg-[#0f0f0f] border border-orange-500/20 p-8 rounded-3xl h-full hover:bg-[#151515] transition-colors relative overflow-hidden group">
                                <div className="absolute top-0 right-0 p-4 opacity-5 group-hover:opacity-10 transition-opacity">
                                    <Shield size={120} />
                                </div>
                                <h3 className="text-2xl font-bold text-white mb-6 flex items-center gap-3">
                                    <ShieldCheck className="text-orange-500" />
                                    What Zryoss Controls
                                </h3>
                                <div className="mb-6">
                                    <span className="text-xs font-bold text-orange-500 uppercase tracking-widest border border-orange-500/30 px-3 py-1 rounded-full">Non-Negotiable</span>
                                </div>
                                <ul className="space-y-4 relative z-10">
                                    {[
                                        "Execution routing and allocation",
                                        "Delivery timelines and scope validation",
                                        "Vendor and team management",
                                        "Quality control and approvals",
                                        "Escalation and resolution handling"
                                    ].map((item, i) => (
                                        <li key={i} className="flex items-start gap-3 text-neutral-300">
                                            <div className="w-1.5 h-1.5 rounded-full bg-orange-500 mt-2 shrink-0" />
                                            {item}
                                        </li>
                                    ))}
                                </ul>
                                <p className="mt-8 text-sm text-neutral-500 italic border-t border-white/5 pt-4">
                                    Ensures system integrity across all BPP-led verticals.
                                </p>
                            </div>
                        </AnimatedSection>

                        {/* BPP Controls */}
                        <AnimatedSection delay={200}>
                            <div className="bg-[#0f0f0f] border border-blue-500/20 p-8 rounded-3xl h-full hover:bg-[#151515] transition-colors relative overflow-hidden group">
                                <div className="absolute top-0 right-0 p-4 opacity-5 group-hover:opacity-10 transition-opacity">
                                    <TrendingUp size={120} />
                                </div>
                                <h3 className="text-2xl font-bold text-white mb-6 flex items-center gap-3">
                                    <Users className="text-blue-500" />
                                    What BPP Controls
                                </h3>
                                <div className="mb-6">
                                    <span className="text-xs font-bold text-blue-500 uppercase tracking-widest border border-blue-500/30 px-3 py-1 rounded-full">Strategic Authority</span>
                                </div>
                                <ul className="space-y-4 relative z-10">
                                    {[
                                        "Business vision and expansion strategy",
                                        "Vertical selection and prioritization",
                                        "Market positioning and growth planning",
                                        "Leadership and IPP enablement"
                                    ].map((item, i) => (
                                        <li key={i} className="flex items-start gap-3 text-neutral-300">
                                            <div className="w-1.5 h-1.5 rounded-full bg-blue-500 mt-2 shrink-0" />
                                            {item}
                                        </li>
                                    ))}
                                </ul>
                                <p className="mt-8 text-sm text-neutral-500 italic border-t border-white/5 pt-4">
                                    BPP leads business direction, not execution mechanics.
                                </p>
                            </div>
                        </AnimatedSection>
                    </div>
                </div>
            </section>

            {/* Demo Authority Section */}
            <section className="py-24 px-6 bg-[#0a0a0a] border-y border-white/5">
                <div className="max-w-7xl mx-auto">
                    <AnimatedSection className="mb-16 text-center">
                        <h2 className="text-3xl md:text-5xl font-bold mb-4">Demo Authority: Clear & Centralized</h2>
                        <p className="text-neutral-400">Who delivers demos and why it matters.</p>
                    </AnimatedSection>

                    <div className="grid lg:grid-cols-3 gap-8">
                        {/* Who Delivers */}
                        <AnimatedSection>
                            <div className="bg-white/5 p-6 rounded-2xl h-full border border-white/5">
                                <Monitor className="text-orange-500 mb-4" size={32} />
                                <h3 className="text-xl font-bold text-white mb-4">Who Delivers Demos</h3>
                                <p className="text-neutral-400 text-sm mb-4">All official demos are:</p>
                                <ul className="space-y-2 text-sm text-neutral-300 mb-6">
                                    <li className="flex gap-2"><CheckCircle2 size={16} className="text-green-500" /> Planned by Zryoss</li>
                                    <li className="flex gap-2"><CheckCircle2 size={16} className="text-green-500" /> Delivered by execution brand</li>
                                    <li className="flex gap-2"><CheckCircle2 size={16} className="text-green-500" /> Aligned with capability</li>
                                </ul>
                                <div className="text-xs text-orange-400 bg-orange-500/10 p-2 rounded">
                                    No demo is delivered outside system approval.
                                </div>
                            </div>
                        </AnimatedSection>

                        {/* BPP Role */}
                        <AnimatedSection delay={100}>
                            <div className="bg-white/5 p-6 rounded-2xl h-full border border-white/5">
                                <Users className="text-blue-500 mb-4" size={32} />
                                <h3 className="text-xl font-bold text-white mb-4">BPP's Role in Demos</h3>
                                <div className="space-y-4">
                                    <div>
                                        <p className="text-green-400 text-xs font-bold mb-1 uppercase">BPP May:</p>
                                        <p className="text-neutral-300 text-sm">Participate at business level, introduce solutions, support relationships.</p>
                                    </div>
                                    <div>
                                        <p className="text-red-400 text-xs font-bold mb-1 uppercase">BPP Does Not:</p>
                                        <p className="text-neutral-300 text-sm">Deliver technical demos, commit timelines, or promise unvalidated features.</p>
                                    </div>
                                </div>
                            </div>
                        </AnimatedSection>

                        {/* Why Centralized */}
                        <AnimatedSection delay={200}>
                            <div className="bg-white/5 p-6 rounded-2xl h-full border border-white/5">
                                <Lock className="text-amber-500 mb-4" size={32} />
                                <h3 className="text-xl font-bold text-white mb-4">Why It's Centralized</h3>
                                <p className="text-neutral-400 text-sm mb-4">Over-commitment damages delivery. Centralization ensures:</p>
                                <div className="grid grid-cols-2 gap-2 text-sm text-neutral-300">
                                    <div className="bg-black/20 p-2 rounded text-center">Accuracy</div>
                                    <div className="bg-black/20 p-2 rounded text-center">Professionalism</div>
                                    <div className="bg-black/20 p-2 rounded text-center">Repeatability</div>
                                    <div className="bg-black/20 p-2 rounded text-center">Compliance</div>
                                </div>
                            </div>
                        </AnimatedSection>
                    </div>
                </div>
            </section>

            {/* Operations & Demo Flow */}
            <section className="py-24 px-6 relative z-10">
                <div className="max-w-5xl mx-auto">
                    <AnimatedSection className="text-center mb-16">
                        <h2 className="text-3xl md:text-5xl font-bold mb-4">Operations & Demo Flow</h2>
                        <p className="text-neutral-400">End-to-End Execution Process. No step is bypassed.</p>
                    </AnimatedSection>

                    <div className="space-y-4">
                        {[
                            { step: "01", title: "BPP acquires a client or IPP opportunity" },
                            { step: "02", title: "Zryoss validates scope and requirements" },
                            { step: "03", title: "Demo plan is prepared centrally" },
                            { step: "04", title: "Demo is delivered by execution brand" },
                            { step: "05", title: "Scope, pricing, and timelines are finalized" },
                            { step: "06", title: "Execution is routed and managed" },
                            { step: "07", title: "Account management coordinates updates" }
                        ].map((item, i) => (
                            <AnimatedSection key={i} delay={i * 50}>
                                <div className="flex items-center gap-6 p-4 bg-gradient-to-r from-white/5 to-transparent border-l-4 border-orange-500 rounded-r-lg hover:bg-white/10 transition-colors">
                                    <span className="text-2xl font-bold text-orange-500/80 font-mono">{item.step}</span>
                                    <span className="text-lg text-white font-medium">{item.title}</span>
                                </div>
                            </AnimatedSection>
                        ))}
                    </div>
                </div>
            </section>

            {/* IPP Clarity & Prevention */}
            <section className="py-24 px-6 bg-[#080808] border-y border-white/5">
                <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12">
                    <AnimatedSection>
                        <h3 className="text-2xl font-bold text-white mb-6">IPPs Under a BPP</h3>
                        <div className="bg-[#111] p-8 rounded-2xl border border-white/5 h-full">
                            <p className="text-neutral-400 mb-6">Even for IPPs operating under a BPP:</p>
                            <ul className="space-y-3 mb-6">
                                <li className="flex gap-3 text-neutral-300"><ArrowRightCircle className="text-orange-500" size={20} /> Execution is managed by Zryoss</li>
                                <li className="flex gap-3 text-neutral-300"><ArrowRightCircle className="text-orange-500" size={20} /> Demos are platform-controlled</li>
                                <li className="flex gap-3 text-neutral-300"><ArrowRightCircle className="text-orange-500" size={20} /> BPP does not override authority</li>
                            </ul>
                            <p className="text-sm text-neutral-500 border-t border-white/10 pt-4">Ensures uniform experience across the ecosystem.</p>
                        </div>
                    </AnimatedSection>

                    <AnimatedSection delay={200}>
                        <h3 className="text-2xl font-bold text-white mb-6">What We Prevent</h3>
                        <div className="bg-[#111] p-8 rounded-2xl border border-white/5 h-full">
                            <div className="flex flex-wrap gap-3 mb-6">
                                {["MLM-style pitch inflation", "Misaligned commitments", "Vendor chaos", "Delivery disputes", "Reputation damage"].map((tag, i) => (
                                    <span key={i} className="px-3 py-1 bg-red-500/10 text-red-400 text-xs rounded-full border border-red-500/20">
                                        {tag}
                                    </span>
                                ))}
                            </div>
                            <p className="text-lg text-white font-medium">Scale happens with discipline.</p>
                        </div>
                    </AnimatedSection>
                </div>
            </section>

            {/* Why it Works & Final CTA */}
            <section className="py-24 px-6">
                <div className="max-w-4xl mx-auto text-center">
                    <AnimatedSection>
                        <h2 className="text-3xl font-bold mb-8">Why This Model Works at Scale</h2>
                        <div className="grid sm:grid-cols-2 gap-4 mb-16 text-left">
                            <div className="p-4 bg-white/5 rounded-xl border border-white/10">
                                <h4 className="font-bold text-white mb-2">For BPPs</h4>
                                <p className="text-neutral-400 text-sm">Grow faster because they don't carry execution risk.</p>
                            </div>
                            <div className="p-4 bg-white/5 rounded-xl border border-white/10">
                                <h4 className="font-bold text-white mb-2">For Clients</h4>
                                <p className="text-neutral-400 text-sm">Quality is maintained across verticals.</p>
                            </div>
                        </div>

                        <div className="py-12 border-t border-white/10">
                            <h2 className="text-4xl md:text-6xl font-bold mb-8">
                                Authority Without Chaos.
                            </h2>
                            <p className="text-xl text-neutral-400 mb-12">
                                You lead the market. Zryoss governs execution.
                            </p>

                            <div className="inline-block p-1 rounded-full bg-gradient-to-r from-orange-500 to-amber-500 p-1">
                                <div className="px-12 py-6 bg-black rounded-full">
                                    <h3 className="text-2xl font-bold text-white">
                                        One Leader. One System. One Standard.
                                    </h3>
                                </div>
                            </div>
                        </div>
                    </AnimatedSection>
                </div>
            </section>
        </div>
    );
}
