import React, { useEffect } from "react";
import {
    Code2,
    Cpu,
    Globe,
    Smartphone,
    Server,
    Database,
    Cloud,
    Layers,
    CheckCircle2,
    ArrowRight,
    ShieldCheck,
    Zap,
    Layout,
    GitBranch,
    Terminal,
    Settings,
    Users,
    Clock,
    TrendingUp,
    Building2,
    Scale,
    FileText,
    Calculator,
    Briefcase
} from "lucide-react";
import { Link } from "react-router-dom";

const ITSoftware = () => {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <div className="min-h-screen bg-[#050505] text-white selection:bg-orange-500/30 font-sans">

            {/* Hero Section */}
            <section className="relative pt-32 pb-20 overflow-hidden">
                {/* Background Effects */}
                <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
                    <div className="absolute top-[-10%] right-[-5%] w-[600px] h-[600px] bg-orange-600/10 rounded-full blur-[120px]" />
                    <div className="absolute bottom-[10%] left-[-10%] w-[400px] h-[400px] bg-blue-600/5 rounded-full blur-[100px]" />
                </div>

                <div className="max-w-7xl mx-auto px-6 relative z-10">
                    <div className="grid lg:grid-cols-2 gap-12 items-center">
                        {/* Left Column: Content */}
                        <div>
                            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-orange-500/30 bg-orange-500/10 text-orange-400 text-sm font-medium mb-6">
                                <Code2 size={14} />
                                Delivered Through Kryoss Softech & Verified Partners
                            </div>
                            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white leading-[1.15] tracking-tight mb-5">
                                IT & Software <br />
                                <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-500 to-white">
                                    Solutions
                                </span>
                            </h1>
                            <h2 className="text-2xl text-white/80 font-medium mb-6">
                                Scalable Technology Solutions Powered by a Central Operating System
                            </h2>
                            <p className="text-xl text-gray-400 leading-relaxed mb-10">
                                The IT & Software Solutions offered by Zryoss are designed to help businesses build, modernize, and scale technology systems—without managing developers, vendors, or delivery risk.
                            </p>

                            <div className="p-6 border border-white/10 bg-white/5 rounded-2xl backdrop-blur-sm inline-block w-full">
                                <p className="text-lg text-gray-200">
                                    Execution is delivered through <span className="text-white font-bold">Kryoss Softech</span>, along with its verified technology partners, governed centrally by the Zryoss platform.
                                </p>
                            </div>
                        </div>

                        {/* Right Column: Image */}
                        <div className="relative hidden lg:block">
                            <div className="absolute inset-0 bg-gradient-to-r from-orange-500/20 to-blue-600/20 blur-3xl rounded-3xl transform rotate-3" />
                            <img
                                src="/solution-hero-images/IT_Software.jpg"
                                alt="IT & Software Solutions"
                                className="relative rounded-3xl shadow-2xl border border-white/10 transform hover:scale-[1.02] transition-transform duration-500 object-cover w-full h-auto aspect-[4/3]"
                            />
                        </div>
                    </div>
                </div>
            </section>

            {/* The Problem Section */}
            <section className="py-24 bg-[#0a0a0a]">
                <div className="max-w-7xl mx-auto px-6">
                    <div className="flex flex-col md:flex-row gap-16">
                        <div className="md:w-1/3">
                            <h2 className="text-3xl font-bold mb-6">The Problem With Traditional <br /> IT Execution</h2>
                            <p className="text-gray-400 text-lg mb-8">
                                Most businesses struggle with technology because typical outsourcing lacks accountability and structure.
                            </p>
                            <div className="h-1 w-20 bg-gradient-to-r from-orange-500 to-white rounded-full"></div>
                        </div>

                        <div className="md:w-2/3 grid grid-cols-1 sm:grid-cols-2 gap-4">
                            {[
                                "Projects run over time and budget",
                                "Vendors overpromise and underdeliver",
                                "Founders become project managers",
                                "Quality varies with every team",
                                "Scaling breaks existing systems"
                            ].map((problem, idx) => (
                                <div key={idx} className="p-5 rounded-2xl bg-[#0f0f0f] border border-red-500/10 flex items-start gap-4 hover:bg-[#121212] transition-colors">
                                    <div className="p-2 bg-red-500/10 rounded-lg">
                                        <Zap className="text-red-500 shrink-0" size={20} />
                                    </div>
                                    <span className="text-gray-300 pt-1">{problem}</span>
                                </div>
                            ))}

                            <div className="p-5 rounded-2xl bg-gradient-to-br from-gray-900 to-black border border-white/10 flex items-center justify-center text-center col-span-1 sm:col-span-2">
                                <p className="text-white italic">
                                    "Zryoss solves this by systematizing IT execution, not just outsourcing development."
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Differentiation Section */}
            <section className="py-24 bg-[#050505] relative">
                <div className="max-w-7xl mx-auto px-6">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl md:text-5xl font-bold mb-6">What Makes Zryoss <br /> IT Solutions Different</h2>
                        <p className="text-xl text-gray-400">
                            Zryoss does not operate like a typical software agency.<br />
                            Instead, it provides:
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        {[
                            { title: "Platform-governed execution", icon: <Settings size={24} /> },
                            { title: "Centralized requirement validation", icon: <CheckCircle2 size={24} /> },
                            { title: "Domain-aligned delivery teams", icon: <Users size={24} /> },
                            { title: "Quality and timeline enforcement", icon: <Clock size={24} /> },
                            { title: "Account-managed coordination", icon: <Users size={24} /> }
                        ].map((item, i) => (
                            <div key={i} className={`p-8 rounded-3xl border border-white/10 bg-[#0a0a0a] hover:border-orange-500/30 transition-all group ${i >= 3 ? 'md:col-span-1.5' : ''}`}>
                                <div className="w-12 h-12 rounded-full bg-orange-500/10 flex items-center justify-center text-orange-500 mb-6 group-hover:scale-110 transition-transform">
                                    {item.icon}
                                </div>
                                <h3 className="text-xl font-bold mb-3">{item.title}</h3>
                            </div>
                        ))}

                        <div className="p-8 rounded-3xl border border-orange-500/20 bg-gradient-to-br from-orange-900/10 to-transparent flex flex-col justify-center items-center text-center">
                            <h3 className="text-xl font-bold text-orange-500 mb-2">The Outcome</h3>
                            <p className="text-white text-lg font-medium">Clients get predictable outcomes, not experimental builds.</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Core Offerings */}
            <section className="py-20 bg-[#080808]">
                <div className="max-w-7xl mx-auto px-6">
                    <h2 className="text-3xl md:text-4xl font-bold mb-12">Core IT & Software Offerings</h2>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">

                        {/* Custom Software Development */}
                        <div className="group p-8 rounded-3xl bg-[#0e0e0e] border border-white/5 hover:border-orange-500/30 transition-colors">
                            <Code2 className="text-orange-500 mb-6" size={40} />
                            <h3 className="text-2xl font-bold mb-4">Custom Software Development</h3>
                            <ul className="space-y-3 text-gray-400">
                                <li className="flex items-start gap-2"><span className="text-orange-500 mt-1">•</span> Web applications</li>
                                <li className="flex items-start gap-2"><span className="text-orange-500 mt-1">•</span> Mobile applications (Android / iOS)</li>
                                <li className="flex items-start gap-2"><span className="text-orange-500 mt-1">•</span> Enterprise systems</li>
                                <li className="flex items-start gap-2"><span className="text-orange-500 mt-1">•</span> Internal business tools</li>
                            </ul>
                        </div>

                        {/* SaaS & Platform Development */}
                        <div className="group p-8 rounded-3xl bg-[#0e0e0e] border border-white/5 hover:border-orange-500/30 transition-colors">
                            <Cloud className="text-orange-500 mb-6" size={40} />
                            <h3 className="text-2xl font-bold mb-4">SaaS & Platform Development</h3>
                            <ul className="space-y-3 text-gray-400">
                                <li className="flex items-start gap-2"><span className="text-orange-500 mt-1">•</span> SaaS product development</li>
                                <li className="flex items-start gap-2"><span className="text-orange-500 mt-1">•</span> Multi-tenant architectures</li>
                                <li className="flex items-start gap-2"><span className="text-orange-500 mt-1">•</span> Subscription and billing systems</li>
                                <li className="flex items-start gap-2"><span className="text-orange-500 mt-1">•</span> Scalable cloud-based platforms</li>
                            </ul>
                        </div>

                        {/* Enterprise Application Development */}
                        <div className="group p-8 rounded-3xl bg-[#0e0e0e] border border-white/5 hover:border-orange-500/30 transition-colors">
                            <Building2 className="text-orange-500 mb-6" size={40} />
                            <h3 className="text-2xl font-bold mb-4">Enterprise Application Development</h3>
                            <ul className="space-y-3 text-gray-400">
                                <li className="flex items-start gap-2"><span className="text-orange-500 mt-1">•</span> CRM, ERP, and internal dashboards</li>
                                <li className="flex items-start gap-2"><span className="text-orange-500 mt-1">•</span> Workflow automation systems</li>
                                <li className="flex items-start gap-2"><span className="text-orange-500 mt-1">•</span> Data-driven business platforms</li>
                            </ul>
                        </div>

                        {/* System Integration & Automation */}
                        <div className="group p-8 rounded-3xl bg-[#0e0e0e] border border-white/5 hover:border-orange-500/30 transition-colors">
                            <GitBranch className="text-orange-500 mb-6" size={40} />
                            <h3 className="text-2xl font-bold mb-4">System Integration & Automation</h3>
                            <ul className="space-y-3 text-gray-400">
                                <li className="flex items-start gap-2"><span className="text-orange-500 mt-1">•</span> API integrations</li>
                                <li className="flex items-start gap-2"><span className="text-orange-500 mt-1">•</span> Third-party system connections</li>
                                <li className="flex items-start gap-2"><span className="text-orange-500 mt-1">•</span> Process automation</li>
                                <li className="flex items-start gap-2"><span className="text-orange-500 mt-1">•</span> Legacy system modernization</li>
                            </ul>
                        </div>

                        {/* Cloud & Infrastructure Support */}
                        <div className="group p-8 rounded-3xl bg-[#0e0e0e] border border-white/5 hover:border-orange-500/30 transition-colors md:col-span-2 lg:col-span-2">
                            <Server className="text-orange-500 mb-6" size={40} />
                            <h3 className="text-2xl font-bold mb-4">Cloud & Infrastructure Support</h3>
                            <div className="grid md:grid-cols-2 gap-6">
                                <ul className="space-y-3 text-gray-400">
                                    <li className="flex items-start gap-2"><span className="text-orange-500 mt-1">•</span> Cloud deployment support</li>
                                    <li className="flex items-start gap-2"><span className="text-orange-500 mt-1">•</span> Infrastructure planning</li>
                                </ul>
                                <ul className="space-y-3 text-gray-400">
                                    <li className="flex items-start gap-2"><span className="text-orange-500 mt-1">•</span> Performance and scalability alignment</li>
                                </ul>
                            </div>
                        </div>

                    </div>
                </div>
            </section>

            {/* Delivery Process */}
            <section className="py-24 relative overflow-hidden">
                <div className="max-w-7xl mx-auto px-6">
                    <h2 className="text-3xl md:text-4xl font-bold text-center mb-16">
                        How Zryoss Delivers <br /><span className="text-orange-500">IT & Software Solutions</span>
                    </h2>

                    <div className="relative">
                        {/* Connecting Line (Desktop) */}
                        <div className="hidden md:block absolute top-12 left-0 w-full h-0.5 bg-gradient-to-r from-transparent via-orange-500/30 to-transparent" />

                        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-7 gap-4 relative z-10">
                            {[
                                "Business and technical requirements are validated",
                                "Scope, timelines, and feasibility are aligned",
                                "Demo or solution walkthrough is conducted",
                                "Execution is routed to Kryoss Softech",
                                "Development and delivery are managed centrally",
                                "Quality checks and milestones are enforced",
                                "Deployment and handover are completed"
                            ].map((step, i) => (
                                <div key={i} className="flex flex-col items-center text-center group">
                                    <div className="w-20 h-20 rounded-full bg-[#111] border border-white/10 group-hover:border-orange-500 flex items-center justify-center font-bold text-2xl mb-6 z-10 shadow-lg transition-colors overflow-hidden relative">
                                        <span className="text-white group-hover:text-orange-500 transition-colors z-10">{i + 1}</span>
                                        <div className="absolute inset-0 bg-orange-500/10 opacity-0 group-hover:opacity-100 transition-opacity" />
                                    </div>
                                    <h3 className="text-sm font-medium text-gray-300 mb-2 max-w-[150px]">{step}</h3>
                                </div>
                            ))}
                        </div>
                    </div>

                    <div className="mt-16 text-center">
                        <p className="text-lg text-gray-400">Clients interact with one system, not multiple developers.</p>
                    </div>
                </div>
            </section>

            {/* Quality, Security & Governance */}
            <section className="py-20 bg-[#0a0a0a]">
                <div className="max-w-7xl mx-auto px-6">
                    <div className="flex flex-col lg:flex-row items-center gap-16">
                        <div className="lg:w-1/2">
                            <h2 className="text-3xl md:text-4xl font-bold mb-6">Quality, <span className="text-orange-500">Security & Governance</span></h2>
                            <p className="text-xl text-gray-400 mb-8">Zryoss enforces:</p>

                            <div className="space-y-6">
                                {[
                                    "Code quality standards",
                                    "Structured development workflows",
                                    "Security and access controls",
                                    "Documentation and handover protocols"
                                ].map((item, i) => (
                                    <div key={i} className="flex items-center gap-4 p-4 rounded-xl bg-[#111] border border-white/5">
                                        <ShieldCheck className="text-orange-500 shrink-0" />
                                        <span className="text-gray-200">{item}</span>
                                    </div>
                                ))}
                            </div>
                            <p className="text-lg text-gray-400 mt-8">This ensures solutions are stable, secure, and maintainable.</p>
                        </div>

                        <div className="lg:w-1/2 grid grid-cols-1 gap-4">
                            <div className="p-8 rounded-3xl bg-[#0f0f0f] border border-white/5">
                                <h3 className="text-xl font-bold mb-6 text-white text-center">Solutions for Different Business Stages</h3>
                                <div className="space-y-6">
                                    <div className="border-l-2 border-orange-500 pl-4">
                                        <h4 className="font-bold text-white">Startups</h4>
                                        <p className="text-sm text-gray-400">MVP and prototype development, Product-market fit support, Cost-efficient builds.</p>
                                    </div>
                                    <div className="border-l-2 border-orange-500 pl-4">
                                        <h4 className="font-bold text-white">Growing Businesses</h4>
                                        <p className="text-sm text-gray-400">Platform scaling, Feature expansion, Automation and optimization.</p>
                                    </div>
                                    <div className="border-l-2 border-orange-500 pl-4">
                                        <h4 className="font-bold text-white">Enterprises</h4>
                                        <p className="text-sm text-gray-400">Complex system development, Integration-heavy projects, SLA-driven execution.</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Client Experience & Scale */}
            <section className="py-24">
                <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-12">
                    <div>
                        <h3 className="text-2xl font-bold mb-6 text-orange-500">Client Experience</h3>
                        <p className="text-gray-300 mb-6 font-medium text-lg">Clients benefit from:</p>
                        <ul className="space-y-3">
                            {["Clear timelines and milestones", "Dedicated coordination", "Transparent progress updates", "Reduced delivery risk", "Long-term support readiness"].map((item, i) => (
                                <li key={i} className="flex items-center gap-3 text-gray-400">
                                    <CheckCircle2 size={16} className="text-orange-500" />
                                    {item}
                                </li>
                            ))}
                        </ul>
                        <p className="text-gray-300 mt-6 italic">Technology becomes a growth enabler, not a bottleneck.</p>
                    </div>

                    <div>
                        <h3 className="text-2xl font-bold mb-6 text-orange-500">Scalable Technology Without Chaos</h3>
                        <p className="text-gray-300 mb-6 font-medium text-lg">As business needs evolve:</p>
                        <ul className="space-y-3">
                            {["Execution capacity scales through the ecosystem", "Architecture supports growth", "Quality benchmarks remain fixed"].map((item, i) => (
                                <li key={i} className="flex items-center gap-3 text-gray-400">
                                    <TrendingUp size={16} className="text-orange-500" />
                                    {item}
                                </li>
                            ))}
                        </ul>
                        <p className="text-gray-300 mt-6 italic">You don’t rebuild systems every year. You build once and scale responsibly.</p>
                    </div>
                </div>
            </section>

            {/* Bottom Section */}
            <section className="py-20 relative text-center">
                <div className="max-w-4xl mx-auto px-6">
                    <h2 className="text-3xl font-bold mb-6">More Than Code. <span className="text-orange-500">A Technology Backbone.</span></h2>
                    <p className="text-xl text-gray-400 mb-12">
                        Zryoss IT & Software Solutions are built to Support real business operations, Enable long-term scalability, Reduce technical debt, and Protect delivery accountability.
                        <br /><br />
                        Because software should support the business, not slow it down.
                    </p>

                    <div className="p-10 rounded-3xl bg-gradient-to-r from-zinc-900 via-zinc-900 to-black border border-white/10 inline-block text-left w-full shadow-2xl">
                        <div className="flex flex-col md:flex-row justify-between items-center gap-8">
                            <div>
                                <h3 className="text-3xl font-bold text-white mb-2">One Technology Partner.</h3>
                                <h3 className="text-3xl font-bold text-orange-500 mb-2">One Operating System.</h3>
                                <div className="text-gray-400 mt-4">
                                    <p>With Zryoss:</p>
                                    <ul className="list-disc list-inside mt-2">
                                        <li>Development is structured</li>
                                        <li>Execution is governed</li>
                                        <li>Outcomes are predictable</li>
                                    </ul>
                                    <p className="mt-4 font-semibold text-white">You define the vision. Zryoss delivers the technology engine.</p>
                                </div>
                            </div>
                            <Link to="/contact" className="whitespace-nowrap px-8 py-4 bg-orange-600 hover:bg-orange-500 text-white rounded-full font-bold text-lg transition shadow-[0_0_25px_rgba(234,88,12,0.4)] flex items-center gap-2">
                                Get Started <ArrowRight size={20} />
                            </Link>
                        </div>
                    </div>
                </div>
            </section>

        </div>
    );
};

export default ITSoftware;
