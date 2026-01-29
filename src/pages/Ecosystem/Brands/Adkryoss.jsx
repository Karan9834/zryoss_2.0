import React, { useEffect } from "react";
import {
    Zap,
    BarChart3,
    Globe,
    ShieldCheck,
    Workflow,
    Network,
    Clock,
    ArrowRight,
    Target,
    Layers,
    Scale,
    Megaphone,
    Search,
    PenTool,
    TrendingUp,
    Monitor
} from "lucide-react";

const Adkryoss = () => {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <div className="min-h-screen bg-[#050505] text-white selection:bg-orange-500/30 font-sans">

            {/* Hero Section */}
            {/* Hero Section */}
            <section className="relative pt-32 pb-20 overflow-hidden">
                {/* Background Effects */}
                <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
                    <div className="absolute top-[-10%] right-[-5%] w-[600px] h-[600px] bg-orange-600/10 rounded-full blur-[120px]" />
                    <div className="absolute bottom-[10%] left-[-10%] w-[400px] h-[400px] bg-blue-600/5 rounded-full blur-[100px]" />
                    <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=2426&auto=format&fit=crop')] bg-cover bg-center opacity-10 mix-blend-overlay"></div>
                </div>

                <div className="max-w-7xl mx-auto px-6 relative z-10">
                    <div className="flex flex-col lg:flex-row items-center gap-16">
                        <div className="lg:w-1/2">
                            {/* Badge - typography changed */}
                            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-orange-500/30 bg-orange-500/10 backdrop-blur-sm mb-6">
                                <Megaphone size={14} className="text-orange-500" />
                                <span className="text-xs uppercase tracking-[0.45em] text-orange-500 font-bold">
                                    Digital Marketing & Growth Execution Brand
                                </span>
                            </div>

                            {/* H1 - typography changed */}
                            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold leading-[1.15] tracking-tight mb-5 text-white">
                                Ad<span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-500 to-orange-300">kryoss</span>
                            </h1>

                            {/* H2 - typography changed */}
                            <h2 className="text-xl md:text-2xl font-semibold text-white/90 mb-6">
                                Digital Marketing & Growth Execution Brand of the Zryoss Ecosystem
                            </h2>

                            {/* Paragraph - typography changed */}
                            <p className="text-xl text-gray-400 leading-relaxed font-light mb-10">
                                Adkryoss is the dedicated execution engine responsible for executing all digital marketing, branding, and online growth services brought into the ecosystem by IPPs and BPPs.
                            </p>

                            <div className="p-6 border border-white/10 bg-white/5 rounded-2xl backdrop-blur-sm inline-block w-full max-w-lg">
                                <div className="flex items-center gap-4">
                                    <div className="h-10 w-1 bg-orange-500 rounded-full"></div>
                                    <p className="text-lg text-gray-200 italic">
                                        "Whenever an IPP or BPP operates in the digital marketing or growth vertical, <span className="text-white font-bold">execution is centrally managed by Adkryoss</span>."
                                    </p>
                                </div>
                            </div>
                        </div>

                        <div className="lg:w-1/2 relative">
                            <div className="relative rounded-3xl overflow-hidden border border-white/10 shadow-2xl group">
                                <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent z-10"></div>
                                <img
                                    src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=2070&auto=format&fit=crop"
                                    alt="Digital Marketing Execution"
                                    className="w-full h-auto object-cover transform group-hover:scale-105 transition-transform duration-700 opacity-90"
                                />

                                <div className="absolute bottom-8 left-8 right-8 z-20">
                                    <div className="flex items-center justify-between">
                                        <div className="flex gap-2">
                                            <span className="w-2 h-2 rounded-full bg-orange-500 animate-pulse"></span>
                                            <span className="text-xs font-mono text-orange-500">CAMPAIGNS ACTIVE</span>
                                        </div>
                                        <TrendingUp className="text-white/50" />
                                    </div>
                                </div>
                            </div>

                            {/* Floating Elements */}
                            <div className="absolute -top-10 -right-10 w-32 h-32 bg-orange-500/20 rounded-full blur-3xl animate-pulse"></div>
                            <div className="absolute -bottom-10 -left-10 w-32 h-32 bg-blue-500/20 rounded-full blur-3xl animate-pulse delay-1000"></div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Role Section */}
            <section className="py-24 bg-[#0a0a0a]">
                <div className="max-w-7xl mx-auto px-6">
                    <div className="flex flex-col md:flex-row gap-16 items-center">
                        <div className="md:w-1/2">
                            <h2 className="text-3xl md:text-4xl font-bold mb-6">Role of Adkryoss <br /> in the Ecosystem</h2>
                            <p className="text-lg text-gray-400 mb-8 leading-relaxed">
                                Adkryoss functions as the dedicated digital growth engine of the ecosystem. Its role is to ensure structured, measurable, and consistent brand communication.
                            </p>

                            <div className="grid grid-cols-1 gap-4">
                                {[
                                    "Digital marketing execution is structured",
                                    "Brand communication remains consistent",
                                    "Campaign performance is measurable",
                                    "IPPs and BPPs never manage agencies directly"
                                ].map((item, i) => (
                                    <div key={i} className="flex items-center gap-3 p-3 bg-white/5 rounded-xl border border-white/5">
                                        <Zap className="text-orange-500 w-5 h-5 shrink-0" />
                                        <span className="text-gray-200 text-sm font-medium">{item}</span>
                                    </div>
                                ))}
                            </div>

                            <p className="mt-8 text-sm text-gray-500 flex items-center gap-2">
                                <Workflow size={16} className="text-white" />
                                ZRYOSS governs the system. Adkryoss executes digital growth.
                            </p>
                        </div>
                        <div className="md:w-1/2">
                            <div className="p-8 bg-[#0f0f0f] rounded-3xl border border-white/5 h-full flex flex-col justify-center relative overflow-hidden">
                                <Target className="text-orange-900/20 absolute -right-10 -bottom-10 w-64 h-64" />
                                <h3 className="text-2xl font-bold text-white mb-6 z-10">What Adkryoss Executes</h3>
                                <ul className="space-y-4 z-10">
                                    {[
                                        "Digital marketing strategy & planning",
                                        "Social media management & content execution",
                                        "Performance marketing (ads & campaigns)",
                                        "SEO, content marketing, and blog execution",
                                        "Brand visibility and online positioning",
                                        "Campaign tracking and optimization"
                                    ].map((item, i) => (
                                        <li key={i} className="flex items-start gap-3">
                                            <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-orange-500 shrink-0"></span>
                                            <span className="text-gray-300">{item}</span>
                                        </li>
                                    ))}
                                </ul>
                                <p className="mt-8 text-xs text-gray-500 z-10 border-t border-white/5 pt-4">All services follow ZRYOSS-defined operating standards.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Routing Process */}
            <section className="py-24 bg-[#050505]">
                <div className="max-w-7xl mx-auto px-6">
                    <h2 className="text-3xl font-bold text-center mb-16">How Work Reaches Adkryoss</h2>

                    <div className="relative">
                        {/* Line */}
                        <div className="hidden md:block absolute top-[50%] left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-orange-500/50 to-transparent -translate-y-1/2 z-0"></div>

                        <div className="grid grid-cols-1 md:grid-cols-7 gap-4 relative z-10">
                            {[
                                { step: "1", title: "Client", desc: "IPP/BPP closes client" },
                                { step: "2", title: "Validation", desc: "ZRYOSS checks scope" },
                                { step: "3", title: "Routing", desc: "Routed to Adkryoss" },
                                { step: "4", title: "Planning", desc: "Campaign planning" },
                                { step: "5", title: "Execution", desc: "Vendorsassigned" },
                                { step: "6", title: "Monitoring", desc: "Performance tracking" },
                                { step: "7", title: "Reporting", desc: "Results shared" }
                            ].map((item, i) => (
                                <div key={i} className="flex flex-col items-center text-center group">
                                    <div className="w-14 h-14 rounded-full bg-[#111] border border-white/20 flex items-center justify-center text-lg font-bold text-white mb-4 shadow-lg relative overflow-hidden transition-all group-hover:border-orange-500 group-hover:scale-110">
                                        <span className="relative z-10">{item.step}</span>
                                        <div className="absolute inset-0 bg-orange-500/20 opacity-0 group-hover:opacity-100 transition-opacity"></div>
                                    </div>
                                    <h3 className="text-xs font-bold text-white mb-1">{item.title}</h3>
                                    <p className="text-[10px] text-gray-500 max-w-[100px]">{item.desc}</p>
                                </div>
                            ))}
                        </div>
                    </div>

                    <div className="mt-12 text-center">
                        <p className="text-gray-400 text-sm">IPP or BPP never coordinates agencies or freelancers directly.</p>
                    </div>
                </div>
            </section>

            {/* Vendor & Accountability */}
            <section className="py-24 bg-[#080808]">
                <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-16">

                    {/* Vendor Management */}
                    <div>
                        <h3 className="text-2xl font-bold mb-6 flex items-center gap-3">
                            <Network className="text-orange-500" />
                            Vendor & Agency Management
                        </h3>
                        <div className="bg-[#0a0a0a] p-8 rounded-3xl border border-white/10 mb-8 h-full">
                            <p className="text-gray-400 mb-6">Adkryoss manages digital marketing vendors, content creators, designers, performance marketing specialists, and SEO partners.</p>
                            <div className="space-y-4">
                                <div className="flex items-center gap-4 p-4 bg-[#111] rounded-xl border border-white/5">
                                    <div className="bg-orange-500/10 p-2 rounded-lg text-orange-500"><ShieldCheck size={20} /></div>
                                    <div>
                                        <h4 className="font-bold text-white text-sm">Under Supervision</h4>
                                        <p className="text-xs text-gray-500">All vendors operate under Adkryoss.</p>
                                    </div>
                                </div>
                                <div className="flex items-center gap-4 p-4 bg-[#111] rounded-xl border border-white/5">
                                    <div className="bg-orange-500/10 p-2 rounded-lg text-orange-500"><Target size={20} /></div>
                                    <div>
                                        <h4 className="font-bold text-white text-sm">Defined SLAs & KPIs</h4>
                                        <p className="text-xs text-gray-500">Strict performance benchmarks.</p>
                                    </div>
                                </div>
                                <div className="flex items-center gap-4 p-4 bg-[#111] rounded-xl border border-white/5">
                                    <div className="bg-orange-500/10 p-2 rounded-lg text-orange-500"><Layers size={20} /></div>
                                    <div>
                                        <h4 className="font-bold text-white text-sm">System Integrated</h4>
                                        <p className="text-xs text-gray-500">Through ZRYOSS Operating System.</p>
                                    </div>
                                </div>
                            </div>
                            <p className="mt-6 text-sm text-orange-400 font-medium">Ensures brand safety, quality, and accountability.</p>
                        </div>
                    </div>

                    {/* Performance & Accountability */}
                    <div>
                        <h3 className="text-2xl font-bold mb-6 flex items-center gap-3">
                            <Scale className="text-orange-500" />
                            Performance Tracking & Accountability
                        </h3>
                        <div className="bg-[#0a0a0a] p-8 rounded-3xl border border-white/10 h-full">
                            <div className="grid grid-cols-1 gap-6">
                                {[
                                    { title: "Clear Objectives", desc: "Defined campaign goals." },
                                    { title: "Metrics & Reporting", desc: "Data-driven insights." },
                                    { title: "Continuous Optimization", desc: "Iterative improvements." },
                                    { title: "Brand Compliance", desc: "Quality assurance." }
                                ].map((item, i) => (
                                    <div key={i} className="flex justify-between items-center border-b border-white/5 pb-4 last:border-0 last:pb-0">
                                        <h4 className="font-bold text-gray-200">{item.title}</h4>
                                        <span className="text-sm text-gray-500">{item.desc}</span>
                                    </div>
                                ))}
                            </div>
                            <div className="mt-8 p-4 bg-orange-900/10 border border-orange-500/20 rounded-xl text-center">
                                <p className="text-orange-400 text-sm font-medium">Execution is data-driven, not assumption-driven.</p>
                            </div>
                        </div>
                    </div>

                </div>
            </section>

            {/* Relationship & Scalability */}
            <section className="py-24 bg-[#0a0a0a]">
                <div className="max-w-7xl mx-auto px-6">
                    <div className="grid md:grid-cols-2 gap-12">
                        {/* Relationship */}
                        <div className="border-l-4 border-white pl-8">
                            <h3 className="text-2xl font-bold mb-6 text-white">Relationship with IPP & BPP</h3>
                            <div className="space-y-6">
                                <div className="group hover:bg-white/5 p-4 rounded-xl transition-colors">
                                    <h4 className="text-white font-bold text-sm uppercase tracking-wide mb-1">IPP / BPP</h4>
                                    <p className="text-gray-400">Focuses on clients and business growth.</p>
                                </div>
                                <div className="group hover:bg-white/5 p-4 rounded-xl transition-colors">
                                    <h4 className="text-orange-400 font-bold text-sm uppercase tracking-wide mb-1">Adkryoss</h4>
                                    <p className="text-gray-400">Manages digital execution.</p>
                                </div>
                                <div className="group hover:bg-white/5 p-4 rounded-xl transition-colors">
                                    <h4 className="text-white/60 font-bold text-sm uppercase tracking-wide mb-1">ZRYOSS</h4>
                                    <p className="text-gray-400">Handles coordination, governance, and reporting.</p>
                                </div>
                            </div>
                        </div>

                        {/* Scalability */}
                        <div className="border-l-4 border-orange-500 pl-8">
                            <h3 className="text-2xl font-bold mb-6 text-white">Scalability Across Industries</h3>
                            <p className="text-gray-400 mb-6">Adkryoss is designed to support:</p>
                            <ul className="space-y-3 mb-6 block">
                                {["Multiple brands simultaneously", "Different industries and niches", "Long-term marketing engagements", "High-volume campaign execution"].map((item, i) => (
                                    <li key={i} className="flex gap-2 text-gray-300"><Clock size={18} className="text-orange-500" /> {item}</li>
                                ))}
                            </ul>
                        </div>
                    </div>
                </div>
            </section>

            {/* Why Separate Brand */}
            <section className="py-24 bg-[#050505] relative overflow-hidden">
                <div className="max-w-4xl mx-auto px-6 text-center relative z-10">
                    <h2 className="text-3xl font-bold mb-8">Why Adkryoss Exists as a Separate Brand</h2>

                    <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-12">
                        <div className="p-4 bg-white/5 rounded-xl border border-white/5"><h4 className="font-bold text-white text-sm">Constant Execution</h4></div>
                        <div className="p-4 bg-white/5 rounded-xl border border-white/5"><h4 className="font-bold text-white text-sm">Performance Monitoring</h4></div>
                        <div className="p-4 bg-white/5 rounded-xl border border-white/5"><h4 className="font-bold text-white text-sm">Creative + Analytical</h4></div>
                        <div className="p-4 bg-white/5 rounded-xl border border-white/5"><h4 className="font-bold text-white text-sm">Rapid Optimization</h4></div>
                    </div>

                    <div className="p-8 rounded-3xl bg-gradient-to-r from-gray-900 to-black border border-white/10 shadow-2xl">
                        <h3 className="text-2xl font-bold text-white mb-4">One Ecosystem. One Growth Engine.</h3>
                        <div className="flex flex-col md:flex-row justify-center gap-8 mt-8 text-left md:text-center">
                            <div>
                                <span className="block text-gray-500 text-xs uppercase tracking-widest mb-1">Partners</span>
                                <span className="text-xl font-bold text-white">Bring Opportunities</span>
                            </div>
                            <div>
                                <span className="block text-gray-500 text-xs uppercase tracking-widest mb-1">ZRYOSS</span>
                                <span className="text-xl font-bold text-white/50">Runs the System</span>
                            </div>
                            <div>
                                <span className="block text-gray-500 text-xs uppercase tracking-widest mb-1">Adkryoss</span>
                                <span className="text-xl font-bold text-orange-500">Drives Execution</span>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-orange-600/5 rounded-full blur-[120px] pointer-events-none"></div>
            </section>

        </div>
    );
};

export default Adkryoss;
