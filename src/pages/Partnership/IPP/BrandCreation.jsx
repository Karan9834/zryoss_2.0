import React, { useState, useEffect, useRef } from 'react';
import {
    ArrowRight,
    CheckCircle2,
    Target,
    Layout,
    Globe,
    FileText,
    Share2,
    ShieldCheck,
    Zap,
    TrendingUp,
    Layers,
    Box,
    Fingerprint
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

export default function BrandCreation() {
    const creationSteps = [
        {
            num: "01",
            title: "Brand Direction & Positioning",
            icon: Target,
            desc: "We define your business vertical, target audience, and service offerings to ensure your brand is clear, focused, and scalable.",
            points: [
                "Business vertical and domain focus",
                "Target audience & market positioning",
                "Service offerings and scope",
                "Brand tone and direction"
            ]
        },
        {
            num: "02",
            title: "Brand Identity Creation",
            icon: Fingerprint,
            desc: "Building a visual identity that aligns with your chosen vertical and market expectations for long-term scalability.",
            points: [
                "Brand name (if required)",
                "Logo and visual identity",
                "Brand guidelines and consistency",
                "Aligned with market expectations"
            ]
        },
        {
            num: "03",
            title: "Website & Digital Presence",
            icon: Globe,
            desc: "Creating an execution-ready professional website under your brand name, not just an informational page.",
            points: [
                "Professional website under IPP’s brand",
                "Domain and hosting setup",
                "Clear service pages and positioning",
                "Contact and inquiry setup"
            ]
        },
        {
            num: "04",
            title: "Company Profile & Sales Collateral",
            icon: FileText,
            desc: "Equipping you with professional materials to enable immediate business conversations and proposals.",
            points: [
                "Company profile / pitch deck",
                "Service brochures or presentations",
                "Proposal and pricing structure support",
                "Professional presentation from day one"
            ]
        },
        {
            num: "05",
            title: "Social Media & Digital Setup",
            icon: Share2,
            desc: "Establishing market visibility and credibility through structured official social media channels.",
            points: [
                "Official social media pages",
                "Initial branding and positioning",
                "Content structure and posting plan",
                "Market visibility and credibility"
            ]
        }
    ];

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
                                    IPP Journey Phase 1
                                </div>
                                <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold leading-[1.15] tracking-tight mb-5 text-white">
                                    Brand Creation <br />
                                    <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-orange-600">
                                        For IPP
                                    </span>
                                </h1>
                                <p className="text-xl text-gray-400 leading-relaxed font-light mb-8">
                                    From Individual to a Fully Launched Business Brand. We build and launch your brand so you can start business immediately—without trial and error.
                                </p>

                                <div className="p-8 border border-white/10 bg-white/5 rounded-[24px] backdrop-blur-sm inline-block w-full shadow-2xl relative overflow-hidden group">
                                    <div className="absolute inset-0 bg-gradient-to-r from-orange-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
                                    <p className="text-lg text-gray-300 relative z-10 leading-relaxed italic">
                                        "You own the brand. <strong className="text-white">Zryoss builds the foundation.</strong>"
                                    </p>
                                </div>
                            </FadeUp>
                        </div>

                        {/* Right Column: Image */}
                        <div className="relative hidden lg:block">
                            <FadeUp delay={0.2}>
                                <div className="absolute inset-0 bg-gradient-to-r from-orange-500/20 to-yellow-600/20 blur-3xl rounded-3xl transform rotate-3" />
                                <img
                                    src="/Brand Creation.jpg"
                                    alt="Brand Creation For IPP"
                                    className="relative rounded-3xl shadow-2xl border border-white/10 transform hover:scale-[1.02] transition-transform duration-500 object-cover w-full h-auto aspect-[4/3]"
                                />
                            </FadeUp>
                        </div>
                    </div>
                </div>
            </section>

            {/* Why Central Section */}
            <section className="py-24 px-6 relative z-10 bg-neutral-900/30 border-y border-white/5">
                <div className="max-w-7xl mx-auto">
                    <div className="grid lg:grid-cols-2 gap-16 items-center">
                        <AnimatedSection>
                            <h2 className="text-3xl md:text-5xl font-bold mb-8 leading-tight">
                                Why Brand Creation Is <br />
                                <span className="text-orange-500">Central to IPP</span>
                            </h2>
                            <p className="text-neutral-400 text-lg mb-8 leading-relaxed">
                                Most new businesses fail because branding is inconsistent, digital presence looks unprofessional, messaging is unclear, and operations are not aligned with positioning.
                            </p>
                            <p className="text-white text-xl font-medium border-l-4 border-orange-500 pl-6 py-2 bg-white/5 rounded-r-lg">
                                Zryoss solves this by treating brand creation as a system process, not a creative exercise alone.
                            </p>
                        </AnimatedSection>

                        <AnimatedSection delay={200}>
                            <div className="bg-black/40 border border-white/10 rounded-3xl p-8 hover:border-orange-500/30 transition-colors">
                                <h3 className="text-2xl font-bold mb-6">What It Means for an IPP</h3>
                                <div className="space-y-4">
                                    {[
                                        "Identity & Visuals",
                                        "Digital Presence",
                                        "Business Positioning",
                                        "Sales Readiness",
                                        "Operational Alignment"
                                    ].map((item, i) => (
                                        <div key={i} className="flex items-center gap-4 p-3 rounded-xl bg-white/5">
                                            <CheckCircle2 className="text-orange-500" size={20} />
                                            <span className="text-lg text-neutral-200">{item}</span>
                                        </div>
                                    ))}
                                </div>
                                <div className="mt-8 pt-6 border-t border-white/10 text-center">
                                    <p className="text-neutral-400">This ensures your brand is <span className="text-white font-bold">market-ready from day one.</span></p>
                                </div>
                            </div>
                        </AnimatedSection>
                    </div>
                </div>
            </section>

            {/* Step by Step Process */}
            <section className="py-24 px-6 relative z-10">
                <div className="max-w-7xl mx-auto">
                    <AnimatedSection className="mb-20 text-center">
                        <h2 className="text-4xl md:text-5xl font-bold mb-4">Step-by-Step Creation Process</h2>
                        <p className="text-neutral-400">A structured journey to launching your agency brand.</p>
                    </AnimatedSection>

                    <div className="space-y-8">
                        {creationSteps.map((step, i) => (
                            <AnimatedSection key={i} delay={i * 100}>
                                <div className="grid md:grid-cols-12 gap-8 bg-neutral-900/50 border border-white/5 p-8 rounded-3xl hover:bg-neutral-900 hover:border-orange-500/30 transition-all group">
                                    {/* Number & Icon */}
                                    <div className="md:col-span-3 flex flex-col justify-center items-center md:items-start border-b md:border-b-0 md:border-r border-white/5 pb-6 md:pb-0 md:pr-6">
                                        <div className="text-4xl font-bold text-neutral-800 mb-4 group-hover:text-orange-500/20 transition-colors">{step.num}</div>
                                        <div className="w-16 h-16 bg-orange-600/10 rounded-2xl flex items-center justify-center text-orange-500 mb-4 group-hover:scale-110 transition-transform">
                                            <step.icon size={32} />
                                        </div>
                                        <h3 className="text-xl font-bold text-white text-center md:text-left">{step.title}</h3>
                                    </div>

                                    {/* Content */}
                                    <div className="md:col-span-9 flex flex-col justify-center">
                                        <p className="text-neutral-400 text-lg mb-6 max-w-3xl">{step.desc}</p>
                                        <div className="grid sm:grid-cols-2 gap-3">
                                            {step.points.map((point, idx) => (
                                                <div key={idx} className="flex items-center gap-2 text-neutral-300">
                                                    <div className="w-1.5 h-1.5 rounded-full bg-orange-500" />
                                                    <span>{point}</span>
                                                </div>
                                            ))}
                                        </div>
                                    </div>
                                </div>
                            </AnimatedSection>
                        ))}
                    </div>
                </div>
            </section>

            {/* Ownership & Clarification */}
            <section className="py-24 px-6 bg-[#0a0a0a]">
                <div className="max-w-7xl mx-auto">
                    <div className="bg-gradient-to-br from-neutral-900 to-black border border-white/10 rounded-[2.5rem] p-10 md:p-16 relative overflow-hidden">
                        {/* Decorative */}
                        <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-orange-600/5 rounded-full blur-[100px] -translate-y-1/2 translate-x-1/2" />

                        <div className="relative z-10 grid lg:grid-cols-2 gap-12">
                            <div>
                                <h2 className="text-3xl md:text-4xl font-bold mb-6">Brand Ownership & Control</h2>
                                <p className="text-neutral-400 text-lg mb-8">
                                    Important clarifications about your relationship with Zryoss.
                                </p>
                                <div className="space-y-6">
                                    {[
                                        "The brand is fully owned by the IPP",
                                        "The brand operates under the IPP’s chosen name",
                                        "Clients belong to the IPP",
                                        "Zryoss does not claim brand ownership"
                                    ].map((item, i) => (
                                        <div key={i} className="flex items-center gap-4">
                                            <ShieldCheck className="text-white shrink-0" size={24} />
                                            <span className="text-lg text-neutral-200">{item}</span>
                                        </div>
                                    ))}
                                </div>
                                <div className="mt-8 p-4 bg-orange-500/10 border border-orange-500/20 rounded-xl text-orange-400 text-sm">
                                    Zryoss only provides the operating and execution backbone.
                                </div>
                            </div>

                            <div className="bg-white/5 rounded-2xl p-8 border border-white/5">
                                <h3 className="text-2xl font-bold mb-6 flex items-center gap-3">
                                    <Zap className="text-yellow-500" size={24} />
                                    Zryoss Ecosystem Integration
                                </h3>
                                <p className="text-neutral-400 mb-8">
                                    Once the brand is created, it becomes operationally live, not just visible.
                                </p>
                                <div className="space-y-4">
                                    {[
                                        "Connected to the Zryoss platform",
                                        "Execution routing enabled",
                                        "Sales enablement & demo support activated",
                                        "Account management assigned"
                                    ].map((item, i) => (
                                        <div key={i} className="flex items-center gap-3 text-neutral-300">
                                            <ArrowRight size={16} className="text-orange-500" />
                                            {item}
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Why This Works & Timeline */}
            <section className="py-24 px-6 relative z-10">
                <div className="max-w-7xl mx-auto">
                    <div className="grid md:grid-cols-2 gap-12">
                        <AnimatedSection>
                            <div className="h-full flex flex-col justify-center">
                                <h2 className="text-3xl md:text-5xl font-bold mb-6">Timeline & Readiness</h2>
                                <div className="flex gap-4 mb-8">
                                    {["Fast", "Structured", "Predictable"].map((tag, i) => (
                                        <span key={i} className="px-4 py-2 rounded-full bg-white/5 border border-white/10 text-white font-medium">
                                            {tag}
                                        </span>
                                    ))}
                                </div>
                                <h3 className="text-2xl font-light text-neutral-300 leading-relaxed border-l-4 border-white pl-6">
                                    The goal is not perfection—<br />
                                    <span className="font-bold text-white">the goal is business readiness.</span>
                                </h3>
                            </div>
                        </AnimatedSection>

                        <AnimatedSection delay={200}>
                            <div className="bg-neutral-900 rounded-3xl p-8 border border-white/5 hover:border-orange-500/30 transition-colors">
                                <h3 className="text-2xl font-bold mb-6">Why This Model Works</h3>
                                <ul className="space-y-4">
                                    {[
                                        "Eliminates early-stage confusion",
                                        "Ensures professional market entry",
                                        "Aligns brand with execution capability",
                                        "Saves time, cost, and effort",
                                        "Reduces startup risk"
                                    ].map((item, i) => (
                                        <li key={i} className="flex items-start gap-4">
                                            <Box className="text-orange-500 shrink-0 mt-1" size={20} />
                                            <span className="text-neutral-300 text-lg">{item}</span>
                                        </li>
                                    ))}
                                </ul>
                                <div className="mt-8 text-center text-white font-medium px-4 py-3 bg-white/5 rounded-xl">
                                    You don’t experiment. You start with a system.
                                </div>
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
                            From Identity to Execution—<br />
                            <span className="text-orange-500">One Flow.</span>
                        </h2>
                        <p className="text-xl text-neutral-400 mb-12">
                            Brand creation is not a separate activity in Zryoss. It is the first step of execution.
                            Your brand is created to Sell confidently, Deliver reliably, and Scale predictably.
                        </p>

                        <div className="inline-block p-1 rounded-full bg-gradient-to-r from-orange-500 to-amber-500 p-1">
                            <div className="px-12 py-6 bg-black rounded-full">
                                <h3 className="text-2xl md:text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-white to-neutral-400">
                                    Your Brand Is the Front. <br className="md:hidden" /> Zryoss Is the Engine.
                                </h3>
                            </div>
                        </div>

                        <div className="mt-12 text-neutral-500">
                            IPP brand creation ensures you don’t just look like a business—you operate like one.
                        </div>
                    </AnimatedSection>
                </div>
            </section>
        </div>
    );
}
