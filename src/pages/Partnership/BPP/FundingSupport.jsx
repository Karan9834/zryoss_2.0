import React, { useState, useEffect, useRef } from 'react';
import { useNavigate } from "react-router-dom";
import {
    ArrowRight,
    CheckCircle2,
    FileText,
    TrendingUp,
    Shield,
    AlertCircle,
    Building2,
    Briefcase,
    Target,
    Wallet,
    Landmark,
    Users2,
    ClipboardCheck,
    Sparkles,
    Info,
    ChevronRight,
    Award,
    FileCheck,
    Zap,
    UserPlus,
    FileSearch,
    Map,
    Send,
    Activity,
    Network,
    TrendingDown
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

export default function BPPFundingSupport() {
    const navigate = useNavigate();

    const supportFeatures = [
        {
            icon: Network,
            title: "IPP Funding Enablement",
            description: "We help every IPP under you register and apply for eligible government schemes like MUDRA, PMEGP, MSME, and Startup India."
        },
        {
            icon: Target,
            title: "Centralized Coordination System",
            description: "Applications are routed through your BPP structure and monitored under our compliance framework."
        },
        {
            icon: FileText,
            title: "Documentation & Application Support",
            description: "We assist with project reports, business plans, and required paperwork via authorized consultants."
        },
        {
            icon: ClipboardCheck,
            title: "Post-Approval Support",
            description: "Guidance for disbursement, compliance, and utilization tracking."
        }
    ];

    const schemes = [
        {
            icon: Wallet,
            title: "MUDRA Loans",
            subtitle: "Shishu / Kishor / Tarun",
            description: "Working capital for micro and small enterprises"
        },
        {
            icon: Award,
            title: "PMEGP",
            subtitle: "Prime Minister Employment Generation Programme",
            description: "Subsidy-based bank loans for service startups"
        },
        {
            icon: Building2,
            title: "MSME / Udyam Registration",
            subtitle: "Unified Registration System",
            description: "Priority lending, subsidies, and policy support"
        },
        {
            icon: Zap,
            title: "Startup India (DPIIT)",
            subtitle: "Innovation Recognition",
            description: "Tax benefits, innovation recognition, and funding visibility"
        },
        {
            icon: Users2,
            title: "Stand-Up India",
            subtitle: "Inclusive Entrepreneurship",
            description: "Inclusive finance for women, SC, and ST entrepreneurs"
        }
    ];

    const processSteps = [
        {
            number: "01",
            icon: UserPlus,
            title: "BPP joins our ecosystem",
            description: "Become part of the funding-ready network"
        },
        {
            number: "02",
            icon: FileSearch,
            title: "IPPs get registration & guidance",
            description: "Complete funding enablement for all IPPs"
        },
        {
            number: "03",
            icon: Map,
            title: "Documentation & scheme mapping",
            description: "Via our authorized partners"
        },
        {
            number: "04",
            icon: Send,
            title: "Bank / consultant coordination",
            description: "Application submission and tracking"
        },
        {
            number: "05",
            icon: Activity,
            title: "Funding updates & compliance",
            description: "Complete tracking and monitoring"
        }
    ];

    const benefits = [
        "Build a stronger and more sustainable IPP network",
        "Increase trust, credibility & retention among your IPPs",
        "Become a leader of financially independent partners",
        "Unlock recurring income through compliant, scalable operations"
    ];

    return (
        <div className="min-h-screen bg-[#050505] text-white font-sans selection:bg-orange-600/30">
            {/* Background Glows */}
            <div className="fixed top-0 right-0 w-[600px] h-[600px] bg-orange-500/10 blur-[150px] rounded-full -translate-y-1/2 translate-x-1/2 pointer-events-none" />
            <div className="fixed bottom-0 left-0 w-[500px] h-[500px] bg-orange-500/5 blur-[130px] rounded-full translate-y-1/2 -translate-x-1/2 pointer-events-none" />

            {/* HERO SECTION */}
            <section className="relative min-h-screen flex items-center overflow-hidden border-b border-white/5">
                <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-[#050505]/80" />

                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 py-20 w-full">
                    <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
                        {/* Left Column */}
                        <div className="flex flex-col justify-center">
                            <FadeUp>
                                {/* Badge */}
                                <div className="inline-flex items-center gap-2 text-orange-500 text-xs uppercase tracking-[0.45em] mb-6 font-bold">
                                    <span className="w-2 h-2 rounded-full bg-orange-500 animate-pulse" />
                                    Funding Support for BPPs
                                </div>

                                {/* Headline */}
                                <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold leading-[1.15] tracking-tight mb-5 text-white">
                                    Funding Enablement Support <br />
                                    <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-orange-600">
                                        for BPPs
                                    </span>
                                </h1>

                                {/* Subtitle */}
                                <p className="text-xl text-gray-400 leading-relaxed font-light mb-8">
                                    Empowering every BPP to build a financially strong network of IPPs with access to India's official startup and MSME funding schemes.
                                </p>

                                {/* Tagline Quote Box */}
                                <div className="p-6 border border-white/10 bg-white/5 rounded-[24px] backdrop-blur-sm inline-block w-full shadow-2xl relative overflow-hidden group mb-8">
                                    <div className="absolute inset-0 bg-gradient-to-r from-orange-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
                                    <p className="text-lg text-gray-300 relative z-10 leading-relaxed italic">
                                        "We make your ecosystem funding-ready — <strong className="text-white">you lead, we enable.</strong>"
                                    </p>
                                </div>

                                {/* CTA Button */}
                                <div>
                                    <button
                                        onClick={() => navigate("/apply")}
                                        className="group px-8 py-4 bg-orange-600 hover:bg-orange-500 text-white rounded-full font-bold text-base transition-all hover:scale-[1.02] shadow-lg shadow-orange-500/30 inline-flex items-center gap-2"
                                    >
                                        Enable Funding for Your Network
                                        <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                                    </button>
                                </div>
                            </FadeUp>
                        </div>

                        {/* Right Column - Hero Image */}
                        <div className="relative flex items-center justify-center lg:justify-end">
                            <FadeUp delay={0.2}>
                                {/* Glow effect */}
                                <div className="absolute inset-0 bg-gradient-to-tr from-orange-500/30 to-transparent blur-3xl rounded-3xl" />

                                {/* Image Container */}
                                <div className="relative rounded-3xl overflow-hidden border border-white/10 shadow-2xl shadow-orange-500/20 w-full max-w-2xl">
                                    <img
                                        src="/partnership/bpp_funding_hero.jpg"
                                        alt="BPP leadership team managing funding-ready IPP network"
                                        className="w-full h-full object-cover aspect-[4/3] hover:scale-105 transition-transform duration-700"
                                    />
                                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />

                                    {/* Floating Badge on Image */}
                                    <div className="absolute bottom-6 left-6 right-6 p-4 bg-black/60 backdrop-blur-xl border border-white/10 rounded-xl">
                                        <div className="flex items-center gap-3">
                                            <div className="w-10 h-10 rounded-full bg-green-500/20 flex items-center justify-center">
                                                <Network className="text-green-400 w-5 h-5" />
                                            </div>
                                            <div>
                                                <div className="text-xs text-neutral-400 uppercase tracking-wider">BPP Leadership</div>
                                                <div className="text-white font-bold">Build Funding-Ready Ecosystem</div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </FadeUp>
                        </div>
                    </div>
                </div>
            </section>

            {/* SECTION 1 - About This Program */}
            <section className="relative py-20 md:py-28">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="max-w-4xl mx-auto text-center mb-12">
                        <AnimatedSection>
                            <h2 className="text-3xl md:text-5xl font-bold mb-6">
                                Financial Empowerment for <br className="hidden sm:block" />
                                <span className="text-orange-500">Your IPP Network</span>
                            </h2>
                            <p className="text-xl text-gray-400 leading-relaxed max-w-3xl mx-auto">
                                As a BPP, you manage multiple business domains and multiple IPPs under your leadership. We ensure your entire ecosystem — including your IPPs — is financially empowered and compliant, so growth never stops due to lack of funding.
                            </p>
                        </AnimatedSection>
                    </div>

                    <AnimatedSection delay={200}>
                        <div className="max-w-3xl mx-auto p-8 rounded-3xl bg-gradient-to-br from-orange-500/10 via-orange-500/5 to-transparent border border-orange-500/20 backdrop-blur-sm">
                            <div className="flex items-start gap-4">
                                <div className="w-12 h-12 rounded-xl bg-orange-500/20 border border-orange-500/30 flex items-center justify-center flex-shrink-0">
                                    <Briefcase className="text-orange-400 w-6 h-6" />
                                </div>
                                <div>
                                    <h3 className="text-lg font-bold text-white mb-2">Our Funding Enablement Program</h3>
                                    <p className="text-base text-gray-300 leading-relaxed">
                                        Helps you and your IPPs access government-backed funding schemes designed to support entrepreneurship and service-based businesses.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </AnimatedSection>
                </div>
            </section>

            {/* SECTION 2 - What ZRYOSS Provides */}
            <section className="relative py-20 md:py-28 bg-gradient-to-b from-transparent to-neutral-950/30">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="max-w-4xl mx-auto text-center mb-12">
                        <AnimatedSection>
                            <h2 className="text-3xl md:text-5xl font-bold mb-4">
                                Funding Support Framework
                            </h2>
                            <p className="text-xl text-gray-400 max-w-2xl mx-auto">
                                Comprehensive support system for BPPs and their IPP networks
                            </p>
                        </AnimatedSection>
                    </div>

                    {/* Features Grid */}
                    <div className="grid md:grid-cols-2 gap-6 mb-12">
                        {supportFeatures.map((feature, index) => (
                            <AnimatedSection key={index} delay={index * 100}>
                                <div className="group p-8 rounded-2xl bg-white/[0.02] border border-white/10 hover:border-orange-500/30 hover:bg-white/[0.04] transition-all duration-300">
                                    <div className="w-12 h-12 rounded-xl bg-orange-500/10 border border-orange-500/20 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                                        <feature.icon className="text-orange-400 w-6 h-6" />
                                    </div>
                                    <h3 className="text-xl font-bold text-white mb-3">{feature.title}</h3>
                                    <p className="text-gray-400 leading-relaxed">{feature.description}</p>
                                </div>
                            </AnimatedSection>
                        ))}
                    </div>

                    {/* Important Note */}
                    <AnimatedSection delay={400}>
                        <div className="max-w-4xl mx-auto p-6 rounded-2xl bg-orange-500/5 border border-orange-500/20">
                            <p className="text-center text-gray-300 leading-relaxed">
                                <strong className="text-orange-400">We handle facilitation;</strong> funding approval lies with the respective authority.
                            </p>
                        </div>
                    </AnimatedSection>
                </div>
            </section>

            {/* SECTION 3 - Major Schemes Covered */}
            <section className="relative py-20 md:py-28">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-16">
                        <AnimatedSection>
                            <h2 className="text-3xl md:text-5xl font-bold mb-4">
                                Government Programs <br className="hidden sm:block" />
                                <span className="text-orange-500">We Enable</span>
                            </h2>
                            <p className="text-xl text-gray-400 max-w-2xl mx-auto">
                                Access India's official startup and MSME funding schemes
                            </p>
                        </AnimatedSection>
                    </div>

                    {/* Schemes Grid */}
                    <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-6 mb-8">
                        {schemes.map((scheme, index) => (
                            <AnimatedSection key={index} delay={index * 100}>
                                <div className="group p-6 rounded-2xl bg-white/[0.02] border border-orange-500/20 hover:border-orange-500/40 hover:bg-white/[0.04] transition-all duration-300 h-full flex flex-col">
                                    <div className="w-12 h-12 rounded-xl bg-orange-500/10 border border-orange-500/20 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                                        <scheme.icon className="text-orange-400 w-6 h-6" />
                                    </div>
                                    <h3 className="text-lg font-bold text-white mb-2">{scheme.title}</h3>
                                    <p className="text-sm text-orange-400 mb-3">{scheme.subtitle}</p>
                                    <p className="text-sm text-gray-400 leading-relaxed">{scheme.description}</p>
                                </div>
                            </AnimatedSection>
                        ))}
                    </div>
                </div>
            </section>

            {/* SECTION 4 - Step-by-Step Process */}
            <section className="relative py-24 md:py-32 bg-gradient-to-b from-[#050505] via-[#0a0703] to-[#050505] overflow-hidden">
                {/* Center Radial Glow (behind step 03) */}
                <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-orange-500/10 blur-[180px] rounded-full" />

                {/* Right Edge Accent Glow */}
                <div className="absolute top-1/3 right-0 w-96 h-96 bg-orange-500/5 blur-[150px] rounded-full" />

                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                    {/* Section Header */}
                    <div className="text-center mb-20">
                        <AnimatedSection>
                            <span className="inline-block px-4 py-2 rounded-full bg-orange-500/10 border border-orange-500/20 text-orange-400 text-sm font-semibold mb-4">
                                Simple Process
                            </span>
                            <h2 className="text-3xl md:text-5xl font-bold mb-4">
                                Step-by-Step Enablement Process
                            </h2>
                            <p className="text-xs uppercase tracking-[0.25em] text-gray-500">
                                HOW WE ENABLE BPP FUNDING ACCESS
                            </p>
                        </AnimatedSection>
                    </div>

                    {/* Clean Timeline - Single Baseline */}
                    <div className="relative max-w-6xl mx-auto mb-16">
                        {/* Refined Horizontal Progress Line (Touches Bottom of Icon Circles) */}
                        <div className="hidden lg:block absolute top-16 left-0 right-0 h-[2px] overflow-hidden">
                            {/* Main gradient line */}
                            <div className="absolute inset-0 bg-gradient-to-r from-orange-500/30 via-orange-400 to-orange-500/30">
                                {/* Subtle glow effect */}
                                <div className="absolute inset-0 blur-sm bg-gradient-to-r from-orange-500/20 via-orange-400/40 to-orange-500/20" />
                            </div>
                        </div>

                        {/* Step Cards Grid - All Aligned on Same Baseline */}
                        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-5">
                            {processSteps.map((step, index) => (
                                <AnimatedSection key={index} delay={index * 100}>
                                    <div className="relative flex flex-col items-center text-center group">
                                        {/* Icon Circle with Small Number Badge */}
                                        <div className="relative z-20 w-16 h-16 rounded-full bg-gradient-to-br from-orange-500/20 to-orange-600/5 border-2 border-orange-500/40 flex items-center justify-center group-hover:scale-110 transition-all duration-300 shadow-lg shadow-orange-500/30">
                                            <step.icon className="text-orange-400 w-8 h-8" />
                                            {/* Small Step Number - Bottom Right */}
                                            <span className="absolute -bottom-1 -right-1 w-5 h-5 rounded-full bg-orange-600 border-2 border-[#0a0703] flex items-center justify-center text-[10px] font-bold text-white">
                                                {step.number}
                                            </span>
                                        </div>

                                        {/* Vertical Spacing: Icon to Card */}
                                        <div className="h-10" />

                                        {/* Step Card - Same Width & Height */}
                                        <div className="relative w-full min-h-[140px] p-6 rounded-2xl bg-white/[0.03] backdrop-blur-sm border border-orange-500/15 shadow-xl shadow-black/50 group-hover:bg-white/[0.05] group-hover:border-orange-500/30 group-hover:shadow-orange-500/20 transition-all duration-300">
                                            {/* Soft Glow Shadow Underneath */}
                                            <div className="absolute -bottom-4 left-1/2 transform -translate-x-1/2 w-3/4 h-8 bg-orange-500/20 blur-2xl rounded-full opacity-0 group-hover:opacity-100 transition-opacity" />

                                            {/* Card Content */}
                                            <div className="relative z-10">
                                                {/* Title - Larger & Bold */}
                                                <h3 className="text-lg font-bold text-white mb-3 leading-tight">
                                                    {step.title}
                                                </h3>

                                                {/* Description - Smaller & Muted */}
                                                <p className="text-xs text-gray-500 leading-relaxed">
                                                    {step.description}
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                </AnimatedSection>
                            ))}
                        </div>
                    </div>

                    {/* Flow Diagram - Connected Capsules (Centered Under Cards) */}
                    <AnimatedSection delay={600}>
                        <div className="max-w-5xl mx-auto mb-10">
                            <div className="flex items-center justify-center gap-0 flex-wrap">
                                {/* ZRYOSS Capsule */}
                                <div className="group px-6 py-3 rounded-full bg-white/[0.03] backdrop-blur-sm border border-orange-500/20 hover:bg-white/[0.06] hover:border-orange-500/40 hover:-translate-y-1 transition-all duration-300 shadow-lg">
                                    <span className="text-sm font-bold text-white">ZRYOSS</span>
                                </div>

                                {/* Arrow Connector */}
                                <div className="flex items-center px-3">
                                    <div className="w-10 h-[2px] bg-gradient-to-r from-orange-500 to-orange-400" />
                                    <ChevronRight className="text-orange-500 w-4 h-4 -ml-1" />
                                </div>

                                {/* BPP Capsule */}
                                <div className="group px-6 py-3 rounded-full bg-white/[0.03] backdrop-blur-sm border border-orange-500/20 hover:bg-white/[0.06] hover:border-orange-500/40 hover:-translate-y-1 transition-all duration-300 shadow-lg">
                                    <span className="text-sm font-bold text-white">BPP</span>
                                </div>

                                {/* Arrow Connector */}
                                <div className="flex items-center px-3">
                                    <div className="w-10 h-[2px] bg-gradient-to-r from-orange-500 to-orange-400" />
                                    <ChevronRight className="text-orange-500 w-4 h-4 -ml-1" />
                                </div>

                                {/* IPPs Capsule */}
                                <div className="group px-6 py-3 rounded-full bg-white/[0.03] backdrop-blur-sm border border-orange-500/20 hover:bg-white/[0.06] hover:border-orange-500/40 hover:-translate-y-1 transition-all duration-300 shadow-lg">
                                    <span className="text-sm font-bold text-white">IPPs</span>
                                </div>

                                {/* Arrow Connector */}
                                <div className="flex items-center px-3">
                                    <div className="w-10 h-[2px] bg-gradient-to-r from-orange-500 to-orange-400" />
                                    <ChevronRight className="text-orange-500 w-4 h-4 -ml-1" />
                                </div>

                                {/* Govt Schemes Capsule */}
                                <div className="group px-6 py-3 rounded-full bg-white/[0.03] backdrop-blur-sm border border-orange-500/20 hover:bg-white/[0.06] hover:border-orange-500/40 hover:-translate-y-1 transition-all duration-300 shadow-lg">
                                    <span className="text-sm font-bold text-white">Govt Schemes</span>
                                </div>
                            </div>
                        </div>
                    </AnimatedSection>

                    {/* Insight Note */}
                    <AnimatedSection delay={700}>
                        <div className="text-center max-w-2xl mx-auto p-5 rounded-2xl bg-orange-500/5 border border-orange-500/20">
                            <p className="text-gray-300 font-medium">
                                💡 Every BPP's IPP network stays fully funding-ready.
                            </p>
                        </div>
                    </AnimatedSection>
                </div>
            </section>

            {/* SECTION 5 - Benefits for BPPs */}
            <section className="relative py-20 md:py-28 bg-gradient-to-b from-neutral-950/30 to-[#050505]">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-16">
                        <AnimatedSection>
                            <span className="inline-block px-4 py-2 rounded-full bg-orange-500/10 border border-orange-500/20 text-orange-400 text-sm font-semibold mb-4">
                                BPP Benefits
                            </span>
                            <h2 className="text-3xl md:text-5xl font-bold">
                                Benefits for BPPs
                            </h2>
                        </AnimatedSection>
                    </div>

                    <div className="grid lg:grid-cols-2 gap-12 items-center max-w-6xl mx-auto">
                        {/* Left - Benefits List */}
                        <AnimatedSection>
                            <div className="space-y-5">
                                {benefits.map((benefit, index) => (
                                    <div key={index} className="flex items-start gap-4 p-5 rounded-xl bg-white/[0.02] border border-white/10 hover:border-orange-500/30 hover:bg-white/[0.04] transition-all">
                                        <div className="w-6 h-6 rounded-full bg-green-500/20 border border-green-500/40 flex items-center justify-center flex-shrink-0 mt-1">
                                            <CheckCircle2 className="text-green-400 w-4 h-4" />
                                        </div>
                                        <p className="text-lg text-gray-300 leading-relaxed">{benefit}</p>
                                    </div>
                                ))}
                            </div>
                        </AnimatedSection>

                        {/* Right - Illustration */}
                        <AnimatedSection delay={200}>
                            <div className="relative">
                                <div className="absolute inset-0 bg-gradient-to-tr from-orange-500/20 to-transparent blur-3xl rounded-3xl" />
                                <img
                                    src="https://images.unsplash.com/photo-1600880292203-757bb62b4baf?auto=format&fit=crop&q=80&w=1200"
                                    alt="BPP benefits illustration"
                                    className="relative rounded-3xl shadow-2xl border border-white/10 object-cover w-full h-auto aspect-[4/3]"
                                />
                            </div>
                        </AnimatedSection>
                    </div>
                </div>
            </section>

            {/* SECTION 6 - Legal Disclaimer */}
            <section className="relative py-16">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <AnimatedSection>
                        <div className="max-w-5xl mx-auto p-8 rounded-3xl bg-neutral-900/50 border border-orange-500/20">
                            <div className="flex items-start gap-4">
                                <div className="w-10 h-10 rounded-full bg-orange-500/20 flex items-center justify-center flex-shrink-0">
                                    <AlertCircle className="text-orange-400 w-6 h-6" />
                                </div>
                                <div>
                                    <h3 className="text-xl font-bold text-white mb-3">Legal Disclaimer</h3>
                                    <div className="text-gray-400 leading-relaxed space-y-2">
                                        <p>• We provide facilitation and guidance only.</p>
                                        <p>• All funding approvals, disbursements, and scheme-related decisions are made by respective government & banking authorities.</p>
                                        <p>• We do not guarantee funding or subsidy approvals.</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </AnimatedSection>
                </div>
            </section>

            {/* SECTION 7 - Final CTA */}
            <section className="relative py-20 md:py-28 overflow-hidden">
                {/* Background gradient glow */}
                <div className="absolute inset-0 bg-gradient-to-b from-transparent via-orange-500/5 to-transparent" />

                <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
                    <AnimatedSection>
                        <h2 className="text-3xl md:text-5xl font-bold mb-8 leading-tight">
                            Empower Your Network. <br className="hidden sm:block" />
                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-400 via-orange-500 to-orange-600">
                                Lead the Funding-Ready Ecosystem.
                            </span>
                        </h2>

                        <p className="text-xl text-gray-400 mb-12 max-w-3xl mx-auto leading-relaxed">
                            Join us as a BPP and help your IPPs access India's official government startup and MSME funding programs through structured, compliant guidance.
                        </p>

                        <div className="flex flex-col sm:flex-row gap-4 justify-center">
                            <button
                                onClick={() => navigate("/apply")}
                                className="group px-8 py-4 bg-orange-600 hover:bg-orange-500 text-white rounded-full font-bold text-lg transition-all hover:scale-[1.02] shadow-lg shadow-orange-500/30 inline-flex items-center justify-center gap-2"
                            >
                                Enable Funding for Your Network
                                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                            </button>
                            <button
                                onClick={() => navigate("/partnership/bpp")}
                                className="px-8 py-4 bg-transparent border-2 border-white/20 hover:border-orange-500/50 hover:bg-white/5 text-white rounded-full font-bold text-lg transition-all inline-flex items-center justify-center gap-2"
                            >
                                Become a BPP
                                <ChevronRight className="w-5 h-5" />
                            </button>
                        </div>
                    </AnimatedSection>
                </div>
            </section>
        </div>
    );
}
