import React, { useEffect } from "react";
import {
    HeartPulse,
    Activity,
    ShieldCheck,
    Stethoscope,
    ClipboardList,
    Building2,
    AlertTriangle,
    ArrowRight,
    CheckCircle2,
    TrendingUp,
    Settings,
    Database,
    Lock,
    Server,
    Users,
    Pill,
    MonitorSmartphone,
    Workflow
} from "lucide-react";
import { Link } from "react-router-dom";

const Healthcare = () => {
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
                    <div className="absolute bottom-[10%] left-[-10%] w-[400px] h-[400px] bg-red-600/5 rounded-full blur-[100px]" />
                </div>

                <div className="max-w-7xl mx-auto px-6 relative z-10">
                    <div className="max-w-4xl">
                        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-orange-500/30 bg-orange-500/10 text-orange-400 text-sm font-medium mb-6">
                            <HeartPulse size={14} />
                            Powered by Medikryoss & Verified Partners
                        </div>
                        <h1 className="text-5xl md:text-7xl font-bold tracking-tight leading-tight mb-8">
                            Healthcare & <br />
                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-500 to-red-500">
                                Medical Technology
                            </span>  Solutions
                        </h1>
                        <h2 className="text-2xl text-white/80 font-medium mb-6">
                            Reliable Healthcare Technology Built for Real-World Operations
                        </h2>
                        <p className="text-xl text-gray-400 leading-relaxed max-w-2xl mb-10">
                            The Healthcare & Medical Technology Solutions offered by Zryoss are designed to help healthcare organizations digitize, streamline, and scale clinical and operational workflows—without managing fragmented vendors, risky deployments, or non-compliant systems.
                        </p>

                        <div className="p-6 border border-white/10 bg-white/5 rounded-2xl backdrop-blur-sm inline-block max-w-3xl">
                            <p className="text-lg text-gray-200">
                                Execution is delivered through <span className="text-white font-bold">Medikryoss</span>, a specialized healthcare technology brand within the Zryoss ecosystem.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* The Challenge Section */}
            <section className="py-24 bg-[#0a0a0a]">
                <div className="max-w-7xl mx-auto px-6">
                    <div className="flex flex-col md:flex-row gap-16">
                        <div className="md:w-1/3">
                            <h2 className="text-3xl font-bold mb-6">The Real Challenge in <br /> Healthcare Technology</h2>
                            <p className="text-gray-400 text-lg mb-8">
                                Healthcare organizations commonly face disconnected systems and high-risk deployments.
                            </p>
                            <div className="h-1 w-20 bg-gradient-to-r from-orange-500 to-red-500 rounded-full"></div>
                        </div>

                        <div className="md:w-2/3 grid grid-cols-1 sm:grid-cols-2 gap-4">
                            {[
                                "Disconnected clinical and administrative systems",
                                "High-risk deployments with poor support",
                                "Software that doesn’t match on-ground workflows",
                                "Compliance and data security concerns",
                                "Lack of long-term maintenance and upgrades"
                            ].map((problem, idx) => (
                                <div key={idx} className="p-5 rounded-2xl bg-[#0f0f0f] border border-red-500/10 flex items-start gap-4 hover:bg-[#121212] transition-colors">
                                    <AlertTriangle className="text-red-500 shrink-0 mt-1" size={20} />
                                    <span className="text-gray-300">{problem}</span>
                                </div>
                            ))}

                            <div className="p-5 rounded-2xl bg-gradient-to-br from-gray-900 to-black border border-white/10 flex items-center justify-center text-center col-span-1 sm:col-span-2">
                                <p className="text-white italic">
                                    "Zryoss addresses these challenges by delivering system-governed, healthcare-ready technology—built for reliability, compliance, and continuity."
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
                        <h2 className="text-3xl md:text-5xl font-bold mb-6">What Makes Zryoss <br /> Healthcare Solutions Different</h2>
                        <p className="text-xl text-gray-400">
                            Zryoss does not deliver generic software adapted for healthcare.<br />
                            It provides <span className="text-white font-semibold">purpose-built medical technology systems</span>.
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                        {[
                            {
                                icon: <Workflow size={24} />,
                                title: "Clinical Workflows",
                                desc: "Clinical workflows drive system design, not the other way around."
                            },
                            {
                                icon: <ShieldCheck size={24} />,
                                title: "Prioritized Compliance",
                                desc: "Compliance and data integrity are prioritized at every step."
                            },
                            {
                                icon: <Settings size={24} />,
                                title: "Centralized Management",
                                desc: "Execution is centrally managed to ensure accountability."
                            },
                            {
                                icon: <TrendingUp size={24} />,
                                title: "Stable Scalability",
                                desc: "Scalability does not compromise operational stability."
                            }
                        ].map((item, i) => (
                            <div key={i} className="p-8 rounded-3xl border border-white/10 bg-[#0a0a0a] hover:border-orange-500/30 transition-all group">
                                <div className="w-12 h-12 rounded-full bg-orange-500/10 flex items-center justify-center text-orange-500 mb-6 group-hover:scale-110 transition-transform">
                                    {item.icon}
                                </div>
                                <h3 className="text-xl font-bold mb-3">{item.title}</h3>
                                <p className="text-gray-400">{item.desc}</p>
                            </div>
                        ))}
                    </div>

                    <div className="mt-12 text-center">
                        <div className="inline-block p-4 rounded-xl border border-orange-500/20 bg-gradient-to-br from-orange-900/10 to-transparent">
                            <p className="text-white text-lg font-medium">Healthcare technology becomes operational infrastructure, not a risk factor.</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Core Offerings */}
            <section className="py-20 bg-[#080808]">
                <div className="max-w-7xl mx-auto px-6">
                    <h2 className="text-3xl md:text-4xl font-bold mb-12">Core Healthcare & Medical Technology Offerings</h2>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">

                        {/* Hospital Management Systems */}
                        <div className="group p-8 rounded-3xl bg-[#0e0e0e] border border-white/5 hover:border-orange-500/30 transition-colors">
                            <Building2 className="text-orange-500 mb-6" size={40} />
                            <h3 className="text-2xl font-bold mb-4">Hospital Management Systems (HMS)</h3>
                            <ul className="space-y-3 text-gray-400">
                                <li className="flex items-start gap-2"><span className="text-orange-500 mt-1">•</span> Patient registration & lifecycle management</li>
                                <li className="flex items-start gap-2"><span className="text-orange-500 mt-1">•</span> OPD / IPD workflows</li>
                                <li className="flex items-start gap-2"><span className="text-orange-500 mt-1">•</span> Billing and insurance coordination</li>
                                <li className="flex items-start gap-2"><span className="text-orange-500 mt-1">•</span> Clinical and administrative dashboards</li>
                            </ul>
                        </div>

                        {/* Clinic Solutions */}
                        <div className="group p-8 rounded-3xl bg-[#0e0e0e] border border-white/5 hover:border-orange-500/30 transition-colors">
                            <Stethoscope className="text-orange-500 mb-6" size={40} />
                            <h3 className="text-2xl font-bold mb-4">Clinic & Practice Management</h3>
                            <ul className="space-y-3 text-gray-400">
                                <li className="flex items-start gap-2"><span className="text-orange-500 mt-1">•</span> Appointment and patient management</li>
                                <li className="flex items-start gap-2"><span className="text-orange-500 mt-1">•</span> Doctor and staff workflows</li>
                                <li className="flex items-start gap-2"><span className="text-orange-500 mt-1">•</span> Billing and reporting systems</li>
                                <li className="flex items-start gap-2"><span className="text-orange-500 mt-1">•</span> Multi-clinic coordination</li>
                            </ul>
                        </div>

                        {/* Clinical Applications */}
                        <div className="group p-8 rounded-3xl bg-[#0e0e0e] border border-white/5 hover:border-orange-500/30 transition-colors">
                            <MonitorSmartphone className="text-orange-500 mb-6" size={40} />
                            <h3 className="text-2xl font-bold mb-4">Clinical & Medical Applications</h3>
                            <ul className="space-y-3 text-gray-400">
                                <li className="flex items-start gap-2"><span className="text-orange-500 mt-1">•</span> Doctor and patient-facing applications</li>
                                <li className="flex items-start gap-2"><span className="text-orange-500 mt-1">•</span> Clinical data capture and monitoring tools</li>
                                <li className="flex items-start gap-2"><span className="text-orange-500 mt-1">•</span> Secure access and role-based systems</li>
                            </ul>
                        </div>

                        {/* Pharma ERP */}
                        <div className="group p-8 rounded-3xl bg-[#0e0e0e] border border-white/5 hover:border-orange-500/30 transition-colors">
                            <Pill className="text-orange-500 mb-6" size={40} />
                            <h3 className="text-2xl font-bold mb-4">Pharma ERP & Distribution</h3>
                            <ul className="space-y-3 text-gray-400">
                                <li className="flex items-start gap-2"><span className="text-orange-500 mt-1">•</span> Inventory and batch management</li>
                                <li className="flex items-start gap-2"><span className="text-orange-500 mt-1">•</span> Compliance-aligned reporting</li>
                                <li className="flex items-start gap-2"><span className="text-orange-500 mt-1">•</span> Distributor and channel workflows</li>
                            </ul>
                        </div>

                        {/* SaaS Products */}
                        <div className="group p-8 rounded-3xl bg-[#0e0e0e] border border-white/5 hover:border-orange-500/30 transition-colors">
                            <Server className="text-orange-500 mb-6" size={40} />
                            <h3 className="text-2xl font-bold mb-4">Ready-Made Healthcare SaaS</h3>
                            <ul className="space-y-3 text-gray-400">
                                <li className="flex items-start gap-2"><span className="text-orange-500 mt-1">•</span> Pre-built healthcare platforms</li>
                                <li className="flex items-start gap-2"><span className="text-orange-500 mt-1">•</span> Faster deployment with customization options</li>
                                <li className="flex items-start gap-2"><span className="text-orange-500 mt-1">•</span> Subscription-based usage models</li>
                            </ul>
                        </div>

                        {/* Custom Development */}
                        <div className="group p-8 rounded-3xl bg-[#0e0e0e] border border-white/5 hover:border-orange-500/30 transition-colors">
                            <Activity className="text-orange-500 mb-6" size={40} />
                            <h3 className="text-2xl font-bold mb-4">Custom Medical Software</h3>
                            <ul className="space-y-3 text-gray-400">
                                <li className="flex items-start gap-2"><span className="text-orange-500 mt-1">•</span> Institution-specific workflows</li>
                                <li className="flex items-start gap-2"><span className="text-orange-500 mt-1">•</span> Integration with existing systems</li>
                                <li className="flex items-start gap-2"><span className="text-orange-500 mt-1">•</span> Scalable architecture for growth</li>
                            </ul>
                        </div>

                    </div>
                </div>
            </section>

            {/* Delivery Process */}
            <section className="py-24 relative overflow-hidden">
                <div className="max-w-7xl mx-auto px-6">
                    <h2 className="text-3xl md:text-4xl font-bold text-center mb-16">
                        How Zryoss Delivers <br /><span className="text-orange-500">Healthcare Solutions</span>
                    </h2>

                    <div className="relative">
                        {/* Connecting Line (Desktop) */}
                        <div className="hidden md:block absolute top-12 left-0 w-full h-0.5 bg-gradient-to-r from-transparent via-orange-500/30 to-transparent" />

                        <div className="grid grid-cols-1 md:grid-cols-4 lg:grid-cols-7 gap-4 relative z-10">
                            {[
                                "Requirement Validation",
                                "Compliance Assessment",
                                "Workflow Alignment",
                                "Execution Routing",
                                "Customization & Testing",
                                "Deployment & Training",
                                "Ongoing Maintenance"
                            ].map((step, i) => (
                                <div key={i} className="flex flex-col items-center text-center group">
                                    <div className="w-20 h-20 rounded-full bg-[#111] border border-white/10 group-hover:border-orange-500 flex items-center justify-center font-bold text-2xl mb-6 z-10 shadow-lg transition-colors overflow-hidden relative">
                                        <span className="text-white group-hover:text-orange-500 transition-colors z-10">{i + 1}</span>
                                        <div className="absolute inset-0 bg-orange-500/10 opacity-0 group-hover:opacity-100 transition-opacity" />
                                    </div>
                                    <h3 className="text-sm font-bold text-white mb-2 px-2">{step}</h3>
                                </div>
                            ))}
                        </div>
                    </div>

                    <div className="mt-16 text-center">
                        <p className="text-lg text-gray-400">All delivery is managed through the Zryoss platform.</p>
                    </div>
                </div>
            </section>

            {/* Compliance & Governance */}
            <section className="py-20 bg-[#0a0a0a]">
                <div className="max-w-7xl mx-auto px-6">
                    <div className="flex flex-col lg:flex-row items-center gap-16">
                        <div className="lg:w-1/2">
                            <h2 className="text-3xl md:text-4xl font-bold mb-6">Compliance, Security <br /> & <span className="text-orange-500">Governance</span></h2>
                            <p className="text-xl text-gray-400 mb-8">Healthcare technology is delivered with responsibility and accountability.</p>

                            <div className="space-y-6">
                                {[
                                    "Secure data handling practices",
                                    "Role-based access controls",
                                    "Audit-ready system structures",
                                    "Defined support and escalation paths"
                                ].map((item, i) => (
                                    <div key={i} className="flex items-center gap-4 p-4 rounded-xl bg-[#111] border border-white/5">
                                        <Lock className="text-orange-500 shrink-0" />
                                        <span className="text-gray-200">{item}</span>
                                    </div>
                                ))}
                            </div>
                        </div>

                        <div className="lg:w-1/2 grid grid-cols-1 gap-4">
                            <div className="p-8 rounded-3xl bg-[#0f0f0f] border border-white/5">
                                <h3 className="text-xl font-bold mb-6 text-white text-center">Solutions for Different Segments</h3>
                                <div className="space-y-6">
                                    <div className="border-l-2 border-orange-500 pl-4">
                                        <h4 className="font-bold text-white">Hospitals</h4>
                                        <p className="text-sm text-gray-400">End-to-end HMS, multi-department coordination, scalable clinical operations.</p>
                                    </div>
                                    <div className="border-l-2 border-orange-500 pl-4">
                                        <h4 className="font-bold text-white">Clinics & Diagnostic Centers</h4>
                                        <p className="text-sm text-gray-400">Appointment flow, patient optimization, billing, and reporting.</p>
                                    </div>
                                    <div className="border-l-2 border-orange-500 pl-4">
                                        <h4 className="font-bold text-white">Pharma & Healthcare Businesses</h4>
                                        <p className="text-sm text-gray-400">ERP operating platforms, compliance-aligned digital workflows.</p>
                                    </div>
                                    <div className="border-l-2 border-orange-500 pl-4">
                                        <h4 className="font-bold text-white">HealthTech Startups</h4>
                                        <p className="text-sm text-gray-400">SaaS platform development, MVP to scale-ready systems.</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Adoption & Scale */}
            <section className="py-24">
                <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-12">
                    <div>
                        <h3 className="text-2xl font-bold mb-6 text-orange-500">Adoption, Training & Support</h3>
                        <p className="text-gray-300 mb-6 font-medium text-lg">Healthcare systems are supported continuously, not abandoned after launch.</p>
                        <ul className="space-y-3">
                            {[
                                "Structured onboarding and training",
                                "Workflow adoption support",
                                "Ongoing system maintenance",
                                "Upgrade and enhancement planning"
                            ].map((item, i) => (
                                <li key={i} className="flex items-center gap-3 text-gray-400">
                                    <CheckCircle2 size={16} className="text-orange-500" />
                                    {item}
                                </li>
                            ))}
                        </ul>
                    </div>

                    <div>
                        <h3 className="text-2xl font-bold mb-6 text-orange-500">Scalable Technology Without Risk</h3>
                        <p className="text-gray-300 mb-6 font-medium text-lg">You don’t rebuild healthcare systems repeatedly. You grow on a reliable platform.</p>
                        <ul className="space-y-3">
                            {[
                                "As organizations grow, patient volume scales smoothly",
                                "New modules are activated as needed",
                                "Performance and security remain stable"
                            ].map((item, i) => (
                                <li key={i} className="flex items-center gap-3 text-gray-400">
                                    <TrendingUp size={16} className="text-orange-500" />
                                    {item}
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>
            </section>

            {/* Philosophy Section */}
            <section className="py-20 bg-[#0a0a0a] text-center">
                <div className="max-w-4xl mx-auto px-6">
                    <h2 className="text-3xl font-bold mb-6">More Than Software. <span className="text-orange-500">A Clinical Operating System.</span></h2>
                    <div className="grid md:grid-cols-4 gap-6 mt-12 text-left">
                        {[
                            { title: "Improve Efficiency", desc: "Streamline clinical & admin tasks" },
                            { title: "Reduce Risk", desc: "Minimize operational & data risks" },
                            { title: "Support Compliance", desc: "Adhere to regulatory needs" },
                            { title: "Enable Growth", desc: "Support long-term delivery" }
                        ].map((item, i) => (
                            <div key={i} className="p-6 bg-[#111] border border-white/5 rounded-2xl">
                                <h3 className="font-bold text-white mb-2">{item.title}</h3>
                                <p className="text-sm text-gray-400">{item.desc}</p>
                            </div>
                        ))}
                    </div>
                    <p className="text-xl text-gray-400 mt-12 font-medium italic">
                        "Because healthcare demands precision, reliability, and trust."
                    </p>
                </div>
            </section>

            {/* Bottom CTA */}
            <section className="py-20 relative text-center">
                <div className="max-w-4xl mx-auto px-6">
                    <div className="p-10 rounded-3xl bg-gradient-to-r from-zinc-900 via-zinc-900 to-black border border-white/10 inline-block text-left w-full shadow-2xl">
                        <div className="flex flex-col md:flex-row justify-between items-center gap-8">
                            <div>
                                <h3 className="text-3xl font-bold text-white mb-2">One Healthcare Partner.</h3>
                                <h3 className="text-3xl font-bold text-orange-500 mb-2">One Operating System.</h3>
                                <p className="text-gray-400 mt-4">You focus on patient outcomes. Zryoss powers the healthcare system.</p>
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

export default Healthcare;
