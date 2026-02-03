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
    Activity
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

export default function FundingSupport() {
    const navigate = useNavigate();

    const supportFeatures = [
        {
            icon: Building2,
            title: "Business Registration Guidance",
            description: "Complete assistance for MSME/Udyam registration and Startup India (DPIIT) registration for innovative businesses.",
        },
        {
            icon: Target,
            title: "Scheme Identification",
            description: "Personalized assessment to find eligible government funding programs tailored to your business profile.",
        },
        {
            icon: FileText,
            title: "Documentation Assistance",
            description: "Expert help preparing business plans, project reports, and all required documents for applications.",
        },
        {
            icon: ClipboardCheck,
            title: "Application Support",
            description: "Step-by-step coordination with banks and authorized consultants throughout the entire process.",
        },
        {
            icon: Shield,
            title: "Post-Approval Compliance",
            description: "Ongoing support for reporting and documentation requirements after funding sanction approval.",
        },
        {
            icon: FileCheck,
            title: "Monitoring & Tracking",
            description: "Regular updates and progress tracking from application to disbursement with full transparency.",
        },
    ];

    const schemes = [
        {
            icon: Wallet,
            title: "MUDRA Loan",
            subtitle: "Shishu / Kishor / Tarun",
            description: "For startups and service-based entrepreneurs — loans up to ₹10 Lakhs",
        },
        {
            icon: Building2,
            title: "PMEGP",
            subtitle: "Prime Minister Employment Generation Programme",
            description: "Subsidy-linked loan for new service ventures with government support",
        },
        {
            icon: Award,
            title: "Startup India",
            subtitle: "Government Recognition",
            description: "Tax exemptions, brand recognition, and easier funding access",
        },
        {
            icon: Landmark,
            title: "MSME Schemes",
            subtitle: "Small Business Support",
            description: "Priority sector lending, subsidies, and comprehensive support programs",
        },
        {
            icon: Users2,
            title: "Stand-Up India",
            subtitle: "Inclusive Entrepreneurship",
            description: "For women and SC/ST entrepreneurs — loans ₹10 Lakhs to ₹1 Crore",
        },
    ];

    const processSteps = [
        {
            number: "01",
            icon: UserPlus,
            title: "IPP joins our ecosystem",
            description: "Register and become part of the ecosystem"
        },
        {
            number: "02",
            icon: FileSearch,
            title: "Eligibility & documentation check",
            description: "Complete profile assessment"
        },
        {
            number: "03",
            icon: Map,
            title: "Scheme selection & registration",
            description: "Identify best-fit programs"
        },
        {
            number: "04",
            icon: Send,
            title: "Application submission",
            description: "Submit with verified consultants"
        },
        {
            number: "05",
            icon: Activity,
            title: "Monitoring & compliance",
            description: "Track progress to disbursement"
        }
    ];

    const benefits = [
        "Access to real government funding opportunities",
        "Stronger, registered business identity",
        "Easier financial credibility & growth readiness",
        "Builds trust with clients and banks"
    ];

    return (
        <div className="min-h-screen bg-[#050505] text-white font-sans selection:bg-orange-600/30 overflow-hidden">
            {/* Background Effects */}
            <div className="fixed inset-0 pointer-events-none">
                <div className="absolute top-0 right-0 w-[50rem] h-[50rem] bg-orange-500/10 blur-[180px] rounded-full -translate-y-1/2 translate-x-1/2" />
                <div className="absolute bottom-0 left-0 w-[40rem] h-[40rem] bg-orange-500/5 blur-[150px] rounded-full translate-y-1/2 -translate-x-1/2" />
            </div>

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
                                    Funding Support for IPPs
                                </div>

                                {/* Headline */}
                                <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold leading-[1.15] tracking-tight mb-5 text-white">
                                    Government Funding & <br />
                                    <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-orange-600">
                                        Startup Enablement
                                    </span> for IPPs
                                </h1>

                                {/* Subtitle */}
                                <p className="text-base text-gray-400 leading-relaxed">
                                    Helping every IPP become funding-ready through structured support, registration assistance, and access to Indian government schemes.
                                </p>

                                {/* Tagline Quote Box */}
                                <div className="p-6 border border-white/10 bg-white/5 rounded-[24px] backdrop-blur-sm inline-block w-full shadow-2xl relative overflow-hidden group mb-8">
                                    <div className="absolute inset-0 bg-gradient-to-r from-orange-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
                                    <p className="text-lg text-gray-300 relative z-10 leading-relaxed italic">
                                        "We don't promise funding — <strong className="text-white">we make you eligible for it.</strong>"
                                    </p>
                                </div>

                                {/* CTA Button */}
                                <div>
                                    <button
                                        onClick={() => navigate("/apply")}
                                        className="group px-8 py-4 bg-orange-600 hover:bg-orange-500 text-white rounded-full font-bold text-base transition-all hover:scale-[1.02] shadow-lg shadow-orange-500/30 inline-flex items-center gap-2"
                                    >
                                        Apply for Funding Support
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
                                        src="/partnership/ipp_funding_hero.jpg"
                                        alt="Startup founders discussing funding and growth strategy"
                                        className="w-full h-full object-cover aspect-[4/3] hover:scale-105 transition-transform duration-700"
                                    />
                                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />

                                    {/* Floating Badge on Image */}
                                    <div className="absolute bottom-6 left-6 right-6 p-4 bg-black/60 backdrop-blur-xl border border-white/10 rounded-xl">
                                        <div className="flex items-center gap-3">
                                            <div className="w-10 h-10 rounded-full bg-green-500/20 flex items-center justify-center">
                                                <TrendingUp className="text-green-400 w-5 h-5" />
                                            </div>
                                            <div>
                                                <div className="text-xs text-neutral-400 uppercase tracking-wider">Funding Success</div>
                                                <div className="text-white font-bold">Make Your Business Eligible</div>
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
            <section className="relative py-20 md:py-28 bg-gradient-to-b from-[#050505] to-neutral-950/30">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="max-w-4xl mx-auto text-center mb-12">
                        <AnimatedSection>
                            <h2 className="text-3xl md:text-5xl font-bold mb-6">
                                Empowering IPPs through <br className="hidden sm:block" />
                                <span className="text-orange-500">Financial Enablement</span>
                            </h2>
                            <p className="text-xl text-gray-400 leading-relaxed max-w-3xl mx-auto">
                                Starting a business often needs capital — and we ensure our partners don't face this challenge alone. Our Funding Enablement Program helps every IPP access official Indian government schemes designed for startups and MSMEs.
                            </p>
                        </AnimatedSection>
                    </div>

                    <AnimatedSection delay={200}>
                        <div className="grid lg:grid-cols-2 gap-8 items-center max-w-6xl mx-auto">
                            {/* Highlighted Info Card */}
                            <div className="p-8 lg:p-10 rounded-3xl bg-gradient-to-br from-orange-950/30 via-neutral-900/60 to-transparent border border-orange-500/20 backdrop-blur-sm shadow-2xl">
                                <div className="flex items-start gap-6">
                                    <div className="w-16 h-16 rounded-2xl bg-orange-500/20 border border-orange-500/30 flex items-center justify-center flex-shrink-0">
                                        <Briefcase className="text-orange-400 w-8 h-8" />
                                    </div>
                                    <div>
                                        <h3 className="text-2xl font-bold mb-3 text-white">Focus on Growth</h3>
                                        <p className="text-lg text-gray-300 leading-relaxed">
                                            💼 You focus on business — we prepare your foundation for funding success.
                                        </p>
                                    </div>
                                </div>
                            </div>

                            {/* Optional Illustration */}
                            <div className="hidden lg:block">
                                <img
                                    src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=800"
                                    alt="Business growth illustration"
                                    className="w-full h-64 object-cover rounded-2xl border border-white/5"
                                />
                            </div>
                        </div>
                    </AnimatedSection>
                </div>
            </section>

            {/* SECTION 2 - What ZRYOSS Provides */}
            <section className="relative py-20 md:py-28">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-16">
                        <AnimatedSection>
                            <span className="inline-block px-4 py-2 rounded-full bg-orange-500/10 border border-orange-500/20 text-orange-400 text-sm font-semibold mb-4">
                                Comprehensive Support
                            </span>
                            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4">
                                What We Provide
                            </h2>
                            <p className="text-lg text-gray-400 max-w-2xl mx-auto">
                                End-to-end assistance at every step of your funding journey
                            </p>
                        </AnimatedSection>
                    </div>

                    {/* 2x3 Grid of Feature Cards */}
                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8 mb-12">
                        {supportFeatures.map((feature, index) => (
                            <AnimatedSection key={index} delay={index * 100}>
                                <div className="group h-full p-8 rounded-2xl bg-white/[0.02] border border-white/5 hover:bg-white/[0.05] hover:border-orange-500/30 transition-all duration-300">
                                    <div className="w-14 h-14 rounded-xl bg-orange-500/10 border border-orange-500/20 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                                        <feature.icon className="text-orange-400 w-7 h-7" />
                                    </div>
                                    <h3 className="text-xl font-bold text-white mb-3 group-hover:text-orange-400 transition-colors">
                                        {feature.title}
                                    </h3>
                                    <p className="text-base text-gray-400 leading-relaxed">
                                        {feature.description}
                                    </p>
                                </div>
                            </AnimatedSection>
                        ))}
                    </div>

                    {/* Highlighted Strip */}
                    <AnimatedSection delay={600}>
                        <div className="max-w-5xl mx-auto p-6 rounded-2xl bg-gradient-to-r from-orange-500/10 via-orange-500/5 to-transparent border border-orange-500/20 text-center">
                            <p className="text-center text-gray-300 leading-relaxed">
                                All facilitation is handled under official frameworks — <strong className="text-white">we act as a trusted business enabler</strong>
                            </p>
                        </div>
                    </AnimatedSection>
                </div>
            </section>

            {/* SECTION 3 - Major Schemes Covered */}
            <section className="relative py-20 md:py-28 bg-gradient-to-b from-neutral-950/30 to-[#050505]">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-16">
                        <AnimatedSection>
                            <span className="inline-block px-4 py-2 rounded-full bg-orange-500/10 border border-orange-500/20 text-orange-400 text-sm font-semibold mb-4">
                                Funding Opportunities
                            </span>
                            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4">
                                Major Schemes Covered
                            </h2>
                            <p className="text-lg text-gray-400 max-w-2xl mx-auto">
                                Access to India's leading startup and MSME funding programs
                            </p>
                        </AnimatedSection>
                    </div>

                    {/* 5 Scheme Cards */}
                    <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-6">
                        {schemes.map((scheme, index) => (
                            <AnimatedSection key={index} delay={index * 100}>
                                <div className="group p-6 rounded-2xl bg-white/[0.02] border border-white/5 hover:bg-white/[0.05] hover:border-orange-500/30 transition-all duration-300 h-full flex flex-col">
                                    {/* Scheme Icon */}
                                    <div className="w-14 h-14 rounded-xl bg-orange-500/10 border border-orange-500/20 flex items-center justify-center mb-5 group-hover:scale-110 transition-transform">
                                        <scheme.icon className="text-orange-400 w-7 h-7" />
                                    </div>

                                    {/* Scheme Name */}
                                    <h3 className="text-lg font-bold text-white mb-2 group-hover:text-orange-400 transition-colors">
                                        {scheme.title}
                                    </h3>

                                    {/* Subtitle */}
                                    {scheme.subtitle && (
                                        <p className="text-xs text-orange-400/70 font-medium mb-3">
                                            {scheme.subtitle}
                                        </p>
                                    )}

                                    {/* Description */}
                                    <p className="text-sm text-gray-400 leading-relaxed flex-grow">
                                        {scheme.description}
                                    </p>
                                </div>
                            </AnimatedSection>
                        ))}
                    </div>

                    {/* Eligibility Note */}
                    <AnimatedSection delay={600}>
                        <div className="mt-10 text-center">
                            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-white/5 border border-white/10 text-sm text-gray-400">
                                <AlertCircle className="w-4 h-4 text-orange-400" />
                                <span>Eligibility depends on IPP's business profile and entity type</span>
                            </div>
                        </div>
                    </AnimatedSection>
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
                                Step-by-Step Process
                            </h2>
                            <p className="text-xs uppercase tracking-[0.25em] text-gray-500">
                                HOW WE ENABLE FUNDING ACCESS
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

                                {/* IPP Capsule */}
                                <div className="group px-6 py-3 rounded-full bg-white/[0.03] backdrop-blur-sm border border-orange-500/20 hover:bg-white/[0.06] hover:border-orange-500/40 hover:-translate-y-1 transition-all duration-300 shadow-lg">
                                    <span className="text-sm font-bold text-white">IPP</span>
                                </div>

                                {/* Arrow Connector */}
                                <div className="flex items-center px-3">
                                    <div className="w-10 h-[2px] bg-gradient-to-r from-orange-500 to-orange-400" />
                                    <ChevronRight className="text-orange-500 w-4 h-4 -ml-1" />
                                </div>

                                {/* Bank Capsule */}
                                <div className="group px-6 py-3 rounded-full bg-white/[0.03] backdrop-blur-sm border border-orange-500/20 hover:bg-white/[0.06] hover:border-orange-500/40 hover:-translate-y-1 transition-all duration-300 shadow-lg">
                                    <span className="text-sm font-bold text-white">Bank</span>
                                </div>

                                {/* Arrow Connector */}
                                <div className="flex items-center px-3">
                                    <div className="w-10 h-[2px] bg-gradient-to-r from-orange-500 to-orange-400" />
                                    <ChevronRight className="text-orange-500 w-4 h-4 -ml-1" />
                                </div>

                                {/* Govt Scheme Capsule */}
                                <div className="group px-6 py-3 rounded-full bg-white/[0.03] backdrop-blur-sm border border-orange-500/20 hover:bg-white/[0.06] hover:border-orange-500/40 hover:-translate-y-1 transition-all duration-300 shadow-lg">
                                    <span className="text-sm font-bold text-white">Govt Scheme</span>
                                </div>
                            </div>
                        </div>
                    </AnimatedSection>

                    {/* CTA - Directly Below Flow Diagram */}
                    <AnimatedSection delay={700}>
                        <div className="text-center">
                            <button
                                onClick={() => navigate("/apply")}
                                className="group inline-flex items-center gap-2 px-7 py-3.5 rounded-full border-2 border-orange-500/30 bg-transparent hover:bg-orange-500/10 hover:border-orange-500/50 text-orange-400 font-semibold text-sm transition-all duration-300"
                            >
                                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                                Start your funding journey
                            </button>
                        </div>
                    </AnimatedSection>
                </div>
            </section>

            {/* SECTION 5 - Benefits for IPPs */}
            <section className="relative py-20 md:py-28 bg-gradient-to-b from-neutral-950/30 to-[#050505]">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-16">
                        <AnimatedSection>
                            <span className="inline-block px-4 py-2 rounded-full bg-orange-500/10 border border-orange-500/20 text-orange-400 text-sm font-semibold mb-4">
                                IPP Benefits
                            </span>
                            <h2 className="text-3xl md:text-5xl font-bold">
                                Benefits for IPPs
                            </h2>
                        </AnimatedSection>
                    </div>

                    <div className="grid lg:grid-cols-2 gap-12 items-center max-w-6xl mx-auto">
                        {/* Left - Benefits List */}
                        <AnimatedSection>
                            <div className="space-y-5">
                                {benefits.map((benefit, index) => (
                                    <div key={index} className="flex items-start gap-4 p-5 rounded-xl bg-white/[0.02] border border-white/5 hover:bg-white/[0.05] hover:border-orange-500/30 transition-all">
                                        <div className="w-10 h-10 rounded-full bg-orange-500/20 border border-orange-500/30 flex items-center justify-center flex-shrink-0">
                                            <CheckCircle2 className="text-orange-400 w-5 h-5" />
                                        </div>
                                        <p className="text-lg text-white font-medium pt-1.5">
                                            {benefit}
                                        </p>
                                    </div>
                                ))}
                            </div>
                        </AnimatedSection>

                        {/* Right - Illustration */}
                        <AnimatedSection delay={200}>
                            <div className="relative rounded-2xl overflow-hidden border border-white/10 shadow-xl">
                                <img
                                    src="https://images.unsplash.com/photo-1559136555-9303baea8ebd?auto=format&fit=crop&q=80&w=800"
                                    alt="Business growth and success"
                                    className="w-full h-80 object-cover"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                            </div>
                        </AnimatedSection>
                    </div>
                </div>
            </section>

            {/* SECTION 6 - Disclaimer */}
            <section className="relative py-20 md:py-24">
                <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
                    <AnimatedSection>
                        <div className="p-8 lg:p-12 rounded-3xl bg-gradient-to-br from-red-950/20 via-neutral-900/60 to-transparent border border-red-500/30 backdrop-blur-sm">
                            <div className="flex items-start gap-5 mb-6">
                                <div className="w-12 h-12 rounded-xl bg-red-500/20 border border-red-500/30 flex items-center justify-center flex-shrink-0">
                                    <Info className="text-red-400 w-6 h-6" />
                                </div>
                                <h3 className="text-2xl sm:text-3xl font-bold text-white">Important Disclaimer</h3>
                            </div>
                            <div>
                                <p className="text-gray-400 leading-relaxed mb-3">
                                    We act as a <strong className="text-white">facilitator for funding and startup enablement</strong>.
                                </p>
                                <p className="text-gray-400 leading-relaxed mb-3">
                                    Funding approval is decided by government authorities and banks.
                                </p>
                                <p className="text-orange-400 font-medium">
                                    ⚠️ We do not guarantee funding approvals.
                                </p>
                            </div>
                        </div>
                    </AnimatedSection>
                </div>
            </section>

            {/* SECTION 7 - Final CTA */}
            <section className="relative py-24 md:py-32 overflow-hidden">
                {/* Background Gradient */}
                <div className="absolute inset-0 bg-gradient-to-t from-orange-950/20 via-transparent to-transparent" />
                <div className="absolute inset-0 bg-gradient-to-b from-transparent to-[#050505]" />

                <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
                    <AnimatedSection>
                        <h2 className="text-3xl md:text-5xl font-bold mb-8 leading-tight">
                            Ready to Make Your Business <br className="hidden sm:block" />
                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-400 via-orange-500 to-orange-600">
                                Funding-Ready?
                            </span>
                        </h2>

                        <p className="text-xl text-gray-400 mb-12 max-w-3xl mx-auto leading-relaxed">
                            Join us as an IPP and unlock access to India's best government startup funding programs with complete guidance and documentation support.
                        </p>

                        {/* Large CTA Buttons */}
                        <div className="flex flex-col sm:flex-row gap-5 justify-center">
                            <button
                                onClick={() => navigate("/apply")}
                                className="group px-10 py-5 bg-orange-600 hover:bg-orange-500 text-white rounded-full font-bold text-xl transition-all hover:scale-[1.03] shadow-2xl shadow-orange-500/30 flex items-center justify-center gap-3"
                            >
                                Apply for Funding Support
                                <ArrowRight className="w-6 h-6 group-hover:translate-x-1 transition-transform" />
                            </button>

                            <button
                                onClick={() => navigate("/partnership/ipp")}
                                className="px-10 py-5 bg-transparent border-2 border-white/20 hover:border-orange-500/50 hover:bg-white/5 text-white rounded-full font-bold text-xl transition-all flex items-center justify-center gap-3"
                            >
                                Become an IPP
                                <ChevronRight className="w-6 h-6" />
                            </button>
                        </div>
                    </AnimatedSection>
                </div>
            </section>
        </div>
    );
}
