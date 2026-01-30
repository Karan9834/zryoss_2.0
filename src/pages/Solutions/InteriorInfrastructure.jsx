import React, { useEffect } from "react";
import {
    Briefcase,
    ShieldCheck,
    Users,
    FileText,
    Scale,
    Layers,
    TrendingUp,
    CheckCircle2,
    ArrowRight,
    Calculator,
    Building2,
    AlertTriangle,
    Clock,
    Workflow,
    HardHat,
    Layout,
    Hammer,
    Zap
} from "lucide-react";
import { Link } from "react-router-dom";
import FadeUp from "../../components/animations/FadeUp";

const InteriorInfrastructure = () => {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <div className="min-h-screen bg-[#050505] text-white selection:bg-orange-500/30 font-sans">

            {/* Hero Section */}
            <section className="relative pt-32 pb-20 overflow-hidden">
                {/* Background Image */}
                <div className="absolute top-0 left-0 w-full h-full z-0">
                    <img
                        src="/interior_infrastructure_hero_background.png"
                        alt="Interior & Infrastructure"
                        className="w-full h-full object-cover opacity-20"
                    />
                    <div className="absolute inset-0 bg-gradient-to-b from-[#050505] via-transparent to-[#050505]" />
                </div>

                {/* Background Effects */}
                <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none z-1">
                    <div className="absolute top-[-10%] right-[-5%] w-[600px] h-[600px] bg-orange-600/10 rounded-full blur-[120px]" />
                    <div className="absolute bottom-[10%] left-[-10%] w-[400px] h-[400px] bg-red-600/5 rounded-full blur-[100px]" />
                </div>

                <div className="max-w-7xl mx-auto px-6 relative z-10">
                    <div className="grid lg:grid-cols-2 gap-12 items-center">
                        {/* Left Column: Content */}
                        <div>
                            <FadeUp>
                                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-orange-500/30 bg-orange-500/10 text-orange-400 text-sm font-medium mb-6">
                                    <Building2 size={14} />
                                    Delivered Through Kryoss Interiors
                                </div>
                                <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white leading-[1.15] tracking-tight mb-5">
                                    Interior & <br />
                                    <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-500 to-red-500">
                                        Infrastructure Solutions
                                    </span>
                                </h1>
                                <h2 className="text-2xl text-white/80 font-medium mb-6">
                                    End-to-End Interior Execution With System-Level Control
                                </h2>
                                <p className="text-xl text-gray-400 leading-relaxed mb-10">
                                    The Interior & Infrastructure Solutions offered by Zryoss are designed to help businesses plan, execute, and deliver interior and infrastructure projects—without contractor chaos, timeline overruns, or quality uncertainty.
                                </p>

                                <div className="p-6 border border-white/10 bg-white/5 rounded-2xl backdrop-blur-sm inline-block w-full">
                                    <p className="text-lg text-gray-200">
                                        Execution is delivered through <span className="text-white font-bold">Kryoss Interiors</span> and its verified vendor network, governed centrally by the Zryoss platform.
                                    </p>
                                </div>
                            </FadeUp>
                        </div>

                        {/* Right Column: Image */}
                        <div className="relative mt-10 lg:mt-0">
                            <FadeUp delay={0.2}>
                                <div className="absolute inset-0 bg-gradient-to-r from-orange-500/20 to-red-500/20 blur-3xl rounded-3xl transform rotate-3" />
                                <img
                                    src="/solution-hero-images/Interior.jpg"
                                    alt="Interior & Infrastructure Solutions"
                                    className="relative rounded-3xl shadow-2xl border border-white/10 transform hover:scale-[1.02] transition-transform duration-500 object-cover w-full h-auto aspect-[4/3]"
                                />
                            </FadeUp>
                        </div>
                    </div>
                </div>
            </section>

            {/* The Problem Section */}
            <section className="py-24 bg-[#0a0a0a]">
                <div className="max-w-7xl mx-auto px-6">
                    <div className="flex flex-col md:flex-row gap-16">
                        <div className="md:w-1/3">
                            <FadeUp>
                                <h2 className="text-3xl font-bold mb-6">The Problem With Traditional <br /> Interior Projects</h2>
                                <p className="text-gray-400 text-lg mb-8">
                                    Most interior and infrastructure projects fail due to fragmented execution and lack of centralized control.
                                </p>
                                <div className="h-1 w-20 bg-gradient-to-r from-orange-500 to-red-500 rounded-full"></div>
                            </FadeUp>
                        </div>

                        <div className="md:w-2/3 grid grid-cols-1 sm:grid-cols-2 gap-4">
                            {[
                                "Multiple contractors with no coordination",
                                "Missed timelines and cost overruns",
                                "Quality mismatch between promise and delivery",
                                "Poor communication during execution",
                                "No single point of accountability"
                            ].map((problem, idx) => (
                                <FadeUp key={idx} delay={idx * 0.1}>
                                    <div className="p-5 rounded-2xl bg-[#0f0f0f] border border-red-500/10 flex items-start gap-4 hover:bg-[#121212] transition-colors h-full">
                                        <AlertTriangle className="text-red-500 shrink-0 mt-1" size={20} />
                                        <span className="text-gray-300">{problem}</span>
                                    </div>
                                </FadeUp>
                            ))}

                            <FadeUp delay={0.6} className="col-span-1 sm:col-span-2">
                                <div className="p-5 rounded-2xl bg-gradient-to-br from-gray-900 to-black border border-white/10 flex items-center justify-center text-center">
                                    <p className="text-white italic">
                                        "Zryoss solves this by treating interiors as a managed execution system, not a contractor-led activity."
                                    </p>
                                </div>
                            </FadeUp>
                        </div>
                    </div>
                </div>
            </section>

            {/* Differentiation Section */}
            <section className="py-24 bg-[#050505] relative">
                <div className="max-w-7xl mx-auto px-6">
                    <FadeUp>
                        <div className="text-center mb-16">
                            <h2 className="text-3xl md:text-5xl font-bold mb-6">What Makes Zryoss <br /> Interior Solutions Different</h2>
                            <p className="text-xl text-gray-400">
                                Zryoss does not act as a broker or middleman.<br />
                                It provides <span className="text-white font-semibold">platform-governed execution</span>.
                            </p>
                        </div>
                    </FadeUp>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                        {[
                            { title: "Scope Validation", desc: "Scope and timelines are validated centrally before execution begins." },
                            { title: "Strict Standards", desc: "Vendors operate under strict standards and defined SOPs." },
                            { title: "Quality Checkpoints", desc: "Mandatory quality checkpoints are enforced at every stage." },
                            { title: "Account Management", desc: "Dedicated account management ensures seamless coordination." }
                        ].map((item, i) => (
                            <FadeUp key={i} delay={i * 0.1}>
                                <div className="p-8 rounded-3xl border border-white/10 bg-[#0a0a0a] hover:border-orange-500/30 transition-all group h-full">
                                    <div className="w-12 h-12 rounded-full bg-orange-500/10 flex items-center justify-center text-orange-500 mb-6 group-hover:scale-110 transition-transform">
                                        <CheckCircle2 size={24} />
                                    </div>
                                    <h3 className="text-xl font-bold mb-3">{item.title}</h3>
                                    <p className="text-gray-400">{item.desc}</p>
                                </div>
                            </FadeUp>
                        ))}
                    </div>

                    <FadeUp delay={0.5}>
                        <div className="mt-12 text-center">
                            <p className="text-lg text-gray-300 font-medium">Clients get predictable delivery, not site-level uncertainty.</p>
                        </div>
                    </FadeUp>
                </div>
            </section>

            {/* Core Offerings */}
            <section className="py-20 bg-[#080808]">
                <div className="max-w-7xl mx-auto px-6">
                    <FadeUp>
                        <h2 className="text-3xl md:text-4xl font-bold mb-12">Core Interior & Infrastructure Offerings</h2>
                    </FadeUp>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {/* Commercial & Office Interiors */}
                        <FadeUp delay={0.1}>
                            <div className="group p-8 rounded-3xl bg-[#0e0e0e] border border-white/5 hover:border-orange-500/30 transition-colors h-full">
                                <Building2 className="text-orange-500 mb-6" size={40} />
                                <h3 className="text-2xl font-bold mb-4">Commercial & Office Interiors</h3>
                                <ul className="space-y-3 text-gray-400">
                                    <li className="flex items-start gap-2"><span className="text-orange-500 mt-1">•</span> Corporate office interiors</li>
                                    <li className="flex items-start gap-2"><span className="text-orange-500 mt-1">•</span> Workspace planning and execution</li>
                                    <li className="flex items-start gap-2"><span className="text-orange-500 mt-1">•</span> Modular furniture coordination</li>
                                    <li className="flex items-start gap-2"><span className="text-orange-500 mt-1">•</span> IT and electrical integration</li>
                                </ul>
                            </div>
                        </FadeUp>

                        {/* Retail & Business Spaces */}
                        <FadeUp delay={0.2}>
                            <div className="group p-8 rounded-3xl bg-[#0e0e0e] border border-white/5 hover:border-orange-500/30 transition-colors h-full">
                                <Layout className="text-orange-500 mb-6" size={40} />
                                <h3 className="text-2xl font-bold mb-4">Retail & Business Spaces</h3>
                                <ul className="space-y-3 text-gray-400">
                                    <li className="flex items-start gap-2"><span className="text-orange-500 mt-1">•</span> Showrooms and retail interiors</li>
                                    <li className="flex items-start gap-2"><span className="text-orange-500 mt-1">•</span> Brand-aligned space execution</li>
                                    <li className="flex items-start gap-2"><span className="text-orange-500 mt-1">•</span> Fit-outs and turnkey delivery</li>
                                </ul>
                            </div>
                        </FadeUp>

                        {/* Infrastructure & Civil Coordination */}
                        <FadeUp delay={0.3}>
                            <div className="group p-8 rounded-3xl bg-[#0e0e0e] border border-white/5 hover:border-orange-500/30 transition-colors h-full">
                                <HardHat className="text-orange-500 mb-6" size={40} />
                                <h3 className="text-2xl font-bold mb-4">Infrastructure & Civil Coordination</h3>
                                <ul className="space-y-3 text-gray-400">
                                    <li className="flex items-start gap-2"><span className="text-orange-500 mt-1">•</span> Interior civil work coordination</li>
                                    <li className="flex items-start gap-2"><span className="text-orange-500 mt-1">•</span> Electrical, networking, and utilities</li>
                                    <li className="flex items-start gap-2"><span className="text-orange-500 mt-1">•</span> Compliance-aligned execution</li>
                                </ul>
                            </div>
                        </FadeUp>

                        {/* Turnkey Interior Projects */}
                        <FadeUp delay={0.4}>
                            <div className="group p-8 rounded-3xl bg-[#0e0e0e] border border-white/5 hover:border-orange-500/30 transition-colors h-full">
                                <CheckCircle2 className="text-orange-500 mb-6" size={40} />
                                <h3 className="text-2xl font-bold mb-4">Turnkey Interior Projects</h3>
                                <ul className="space-y-3 text-gray-400">
                                    <li className="flex items-start gap-2"><span className="text-orange-500 mt-1">•</span> End-to-end project execution</li>
                                    <li className="flex items-start gap-2"><span className="text-orange-500 mt-1">•</span> Vendor and material coordination</li>
                                    <li className="flex items-start gap-2"><span className="text-orange-500 mt-1">•</span> Timeline and quality ownership</li>
                                </ul>
                            </div>
                        </FadeUp>

                        {/* Renovation & Upgrade Projects */}
                        <FadeUp delay={0.5} className="md:col-span-2 lg:col-span-2">
                            <div className="group p-8 rounded-3xl bg-[#0e0e0e] border border-white/5 hover:border-orange-500/30 transition-colors h-full">
                                <Hammer className="text-orange-500 mb-6" size={40} />
                                <h3 className="text-2xl font-bold mb-4">Renovation & Upgrade Projects</h3>
                                <div className="grid md:grid-cols-2 gap-6">
                                    <ul className="space-y-3 text-gray-400">
                                        <li className="flex items-start gap-2"><span className="text-orange-500 mt-1">•</span> Workspace renovation</li>
                                        <li className="flex items-start gap-2"><span className="text-orange-500 mt-1">•</span> Expansion and redesign</li>
                                    </ul>
                                    <ul className="space-y-3 text-gray-400">
                                        <li className="flex items-start gap-2"><span className="text-orange-500 mt-1">•</span> Operational upgrades</li>
                                    </ul>
                                </div>
                            </div>
                        </FadeUp>
                    </div>
                </div>
            </section>

            {/* Delivery Process */}
            <section className="py-24 relative overflow-hidden">
                <div className="max-w-7xl mx-auto px-6">
                    <FadeUp>
                        <h2 className="text-3xl md:text-4xl font-bold text-center mb-16">
                            How Zryoss Delivers <br /><span className="text-orange-500">Interior Solutions</span>
                        </h2>
                    </FadeUp>

                    <div className="relative">
                        {/* Connecting Line (Desktop) */}
                        <div className="hidden md:block absolute top-12 left-0 w-full h-0.5 bg-gradient-to-r from-transparent via-orange-500/30 to-transparent" />

                        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-7 gap-4 relative z-10">
                            {[
                                "Requirement Validation",
                                "Scope & Budget Alignment",
                                "Design & Plan Finalization",
                                "Routing to Kryoss Interiors",
                                "Vendor Assignment",
                                "Quality Checkpoints",
                                "Delivery & Handover"
                            ].map((step, i) => (
                                <FadeUp key={i} delay={i * 0.1}>
                                    <div className="flex flex-col items-center text-center group h-full">
                                        <div className="w-20 h-20 rounded-full bg-[#111] border border-white/10 group-hover:border-orange-500 flex items-center justify-center font-bold text-2xl mb-6 z-10 shadow-lg transition-colors overflow-hidden relative mx-auto">
                                            <span className="text-white group-hover:text-orange-500 transition-colors z-10">{i + 1}</span>
                                            <div className="absolute inset-0 bg-orange-500/10 opacity-0 group-hover:opacity-100 transition-opacity" />
                                        </div>
                                        <h3 className="text-sm font-bold text-white mb-2 max-w-[120px]">{step}</h3>
                                    </div>
                                </FadeUp>
                            ))}
                        </div>
                    </div>

                    <FadeUp delay={0.8}>
                        <div className="mt-16 text-center">
                            <p className="text-lg text-gray-400">Clients interact with one system, not multiple contractors.</p>
                        </div>
                    </FadeUp>
                </div>
            </section>

            {/* Management & Accountability */}
            <section className="py-20 bg-[#0a0a0a]">
                <div className="max-w-7xl mx-auto px-6">
                    <div className="flex flex-col lg:flex-row items-center gap-16">
                        <div className="lg:w-1/2">
                            <FadeUp>
                                <h2 className="text-3xl md:text-4xl font-bold mb-6">Centralized <span className="text-orange-500">Vendor & Quality Management</span></h2>
                                <p className="text-xl text-gray-400 mb-8">
                                    If issues arise, escalation is system-managed, not site-dependent.
                                </p>
                            </FadeUp>

                            <div className="space-y-6">
                                {[
                                    "Verified vendors only",
                                    "Defined execution standards",
                                    "Timeline enforcement",
                                    "Material and workmanship quality checks"
                                ].map((item, i) => (
                                    <FadeUp key={i} delay={i * 0.1}>
                                        <div className="flex items-center gap-4 p-4 rounded-xl bg-[#111] border border-white/5">
                                            <ShieldCheck className="text-orange-500 shrink-0" />
                                            <span className="text-gray-200">{item}</span>
                                        </div>
                                    </FadeUp>
                                ))}
                            </div>
                        </div>

                        <div className="lg:w-1/2 grid grid-cols-1 gap-4">
                            <FadeUp delay={0.3}>
                                <div className="p-8 rounded-3xl bg-[#0f0f0f] border border-white/5">
                                    <h3 className="text-xl font-bold mb-6 text-white text-center">Solutions for Different Business Needs</h3>
                                    <div className="space-y-6">
                                        <div className="border-l-2 border-orange-500 pl-4">
                                            <h4 className="font-bold text-white">Startups & SMEs</h4>
                                            <p className="text-sm text-gray-400">Cost-efficient office interiors, fast execution for business launch.</p>
                                        </div>
                                        <div className="border-l-2 border-orange-500 pl-4">
                                            <h4 className="font-bold text-white">Growing Businesses</h4>
                                            <p className="text-sm text-gray-400">Workspace expansion, multi-location coordination.</p>
                                        </div>
                                        <div className="border-l-2 border-orange-500 pl-4">
                                            <h4 className="font-bold text-white">Enterprises</h4>
                                            <p className="text-sm text-gray-400">Large-scale commercial interiors, standardized execution across locations.</p>
                                        </div>
                                    </div>
                                </div>
                            </FadeUp>
                        </div>
                    </div>
                </div>
            </section>

            {/* Client Experience & Scale */}
            <section className="py-24">
                <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-12">
                    <FadeUp>
                        <div>
                            <h3 className="text-2xl font-bold mb-6 text-orange-500">Client Experience</h3>
                            <p className="text-gray-300 mb-6 font-medium text-lg">Interior execution becomes structured and predictable.</p>
                            <ul className="space-y-3">
                                {["Single coordination point", "Clear project timelines", "Reduced execution risk", "Transparent progress updates", "Professional handover"].map((item, i) => (
                                    <li key={i} className="flex items-center gap-3 text-gray-400">
                                        <CheckCircle2 size={16} className="text-orange-500" />
                                        {item}
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </FadeUp>

                    <FadeUp delay={0.2}>
                        <div>
                            <h3 className="text-2xl font-bold mb-6 text-orange-500">Scalable Execution Without Contractor Dependency</h3>
                            <p className="text-gray-300 mb-6 font-medium text-lg">You don’t rebuild execution teams. You reuse a proven system.</p>
                            <ul className="space-y-3">
                                {["Vendor capacity scales through the ecosystem", "Execution standards remain fixed", "Coordination remains centralized"].map((item, i) => (
                                    <li key={i} className="flex items-center gap-3 text-gray-400">
                                        <TrendingUp size={16} className="text-orange-500" />
                                        {item}
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </FadeUp>
                </div>
            </section>

            {/* Bottom Section */}
            <section className="py-20 relative text-center">
                <div className="max-w-4xl mx-auto px-6">
                    <FadeUp>
                        <h2 className="text-3xl font-bold mb-6">More Than Interiors. <span className="text-orange-500">Operational Readiness.</span></h2>
                        <p className="text-xl text-gray-400 mb-12">
                            Zryoss Interior & Infrastructure Solutions are built to support business operations, ensure quality and compliance, reduce project risk, and enable faster business readiness. Because physical spaces should enable work, not delay it.
                        </p>
                    </FadeUp>

                    <FadeUp delay={0.2}>
                        <div className="p-10 rounded-3xl bg-gradient-to-r from-zinc-900 via-zinc-900 to-black border border-white/10 inline-block text-left w-full shadow-2xl">
                            <div className="flex flex-col md:flex-row justify-between items-center gap-8">
                                <div>
                                    <h3 className="text-3xl font-bold text-white mb-2">One Execution Partner.</h3>
                                    <h3 className="text-3xl font-bold text-orange-500 mb-2">One Operating System.</h3>
                                    <p className="text-gray-400 mt-4">You focus on business operations. Zryoss manages the build.</p>
                                </div>
                                <Link to="/contact" className="whitespace-nowrap px-8 py-4 bg-orange-600 hover:bg-orange-500 text-white rounded-full font-bold text-lg transition shadow-[0_0_25px_rgba(234,88,12,0.4)] flex items-center gap-2">
                                    Get Started <ArrowRight size={20} />
                                </Link>
                            </div>
                        </div>
                    </FadeUp>
                </div>
            </section>

        </div>
    );
};

export default InteriorInfrastructure;
