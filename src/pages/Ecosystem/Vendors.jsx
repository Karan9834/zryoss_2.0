import FadeUp from "../../components/animations/FadeUp";

import {
    Network as NetworkIcon,
    Users as UsersIcon,
    ShieldCheck as ShieldIcon,
    Globe as GlobeIcon,
    Cpu as CpuIcon,
    Building2 as BuildingIcon,
    CheckCircle2 as CheckIcon,
    ArrowRight as ArrowIcon,
    TrendingUp as GrowthIcon,
    Zap as SpeedIcon,
    Award as QualityIcon,
    Layout,
    CreditCard,
    MessageSquare,
    HelpCircle,
    ChevronDown,
    MapPin
} from "lucide-react";

const vendorHubImage = "/images/ecosystem/vendor-network-hub.png";
const heroBgImage = "/images/ecosystem/vendor-bg.png";
const vendorAppImage = "/images/ecosystem/vendor-app.png";

export default function Vendors() {
    const categories = [
        {
            name: "Technology & Software",
            count: "150+ Specialists",
            icon: <CpuIcon className="text-orange-500" size={28} />,
            services: ["Custom Development", "Cloud Infrastructure", "System Integration"]
        },
        {
            name: "HR & Talent",
            count: "80+ Partners",
            icon: <UsersIcon className="text-orange-500" size={28} />,
            services: ["Recruitment", "Payroll Management", "L&D Services"]
        },
        {
            name: "Marketing & Growth",
            count: "60+ Agencies",
            icon: <GlobeIcon className="text-orange-500" size={28} />,
            services: ["Performance Ads", "Brand Strategy", "Content Production"]
        },
        {
            name: "Business Consult",
            count: "40+ Firms",
            icon: <BuildingIcon className="text-orange-500" size={28} />,
            services: ["Legal Support", "Compliance", "Financial Audits"]
        }
    ];

    return (
        <div className="bg-[#050505] text-white selection:bg-orange-500/30 min-h-screen">
            {/* HERO */}
            <section className="relative pt-32 pb-24 overflow-hidden">
                <div className="absolute inset-0">
                    <img src={heroBgImage} alt="Network Background" className="w-full h-full object-cover opacity-20" />
                    <div className="absolute inset-0 bg-gradient-to-b from-[#050505] via-[#050505]/90 to-[#050505]" />
                </div>
                <div className="absolute top-0 left-0 w-full h-[600px] bg-orange-600/5 blur-[120px] rounded-full -translate-y-1/2 pointer-events-none" />

                <div className="max-w-7xl mx-auto px-6 relative z-10">
                    <FadeUp>
                        <div className="flex flex-col md:flex-row items-center gap-12">
                            <div className="md:w-3/5">
                                <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-orange-500/30 bg-orange-500/10 backdrop-blur-sm mb-6">
                                    <NetworkIcon size={14} className="text-orange-500" />
                                    <span className="text-[10px] uppercase tracking-[0.2em] text-orange-400 font-bold">
                                        Global Network
                                    </span>
                                </div>

                                <h1 className="text-5xl md:text-7xl font-bold leading-tight mb-8">
                                    Partner & <br />
                                    <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-orange-600">
                                        Vendor Network.
                                    </span>
                                </h1>

                                <p className="text-gray-400 text-lg md:text-xl max-w-2xl font-light leading-relaxed mb-10">
                                    A vetted ecosystem of specialists and service providers, unified under the Zryoss Operating System to deliver excellence at scale.
                                </p>
                            </div>

                            <div className="md:w-2/5 relative flex justify-center">
                                <div className="relative z-10 transform md:rotate-6 transition-transform hover:rotate-0 duration-500">
                                    <div className="absolute inset-0 bg-orange-500/20 blur-3xl rounded-full" />
                                    <img src={vendorAppImage} alt="Vendor App" className="relative w-[280px] rounded-[2.5rem] border-8 border-neutral-900 shadow-2xl" />
                                </div>
                            </div>
                        </div>
                    </FadeUp>
                </div>
            </section>

            {/* CATEGORIES GRID */}
            <section className="py-24 relative z-10">
                <div className="max-w-7xl mx-auto px-6">
                    <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                        {categories.map((cat, i) => (
                            <FadeUp key={i} delay={i * 0.1}>
                                <div className="h-full p-8 rounded-3xl bg-white/5 border border-white/10 hover:border-orange-500/30 transition-all duration-500 group">
                                    <div className="w-14 h-14 rounded-2xl bg-orange-500/10 border border-orange-500/20 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                                        {cat.icon}
                                    </div>
                                    <h3 className="text-xl font-bold mb-2">{cat.name}</h3>
                                    <p className="text-orange-500 text-xs font-bold mb-6 tracking-wide uppercase">{cat.count}</p>

                                    <ul className="space-y-3">
                                        {cat.services.map((s, j) => (
                                            <li key={j} className="flex items-center gap-2 text-xs text-gray-500">
                                                <CheckIcon size={12} className="text-orange-500/50" />
                                                {s}
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            </FadeUp>
                        ))}
                    </div>
                </div>
            </section>

            {/* BENEFITS SECTION */}
            <section className="py-24 bg-[#0a0a0a]">
                <div className="max-w-7xl mx-auto px-6">
                    <FadeUp>
                        <div className="text-center mb-16">
                            <h2 className="text-4xl font-bold mb-6">Why Top Vendors Choose Zryoss</h2>
                            <p className="text-gray-400 max-w-2xl mx-auto font-light">
                                We handle the sales, client management, and billing. You handle the execution.
                            </p>
                        </div>
                    </FadeUp>

                    <div className="grid md:grid-cols-3 gap-8">
                        {[
                            {
                                title: "Zero Customer Acquisition Cost",
                                desc: "Stop spending on ads and sales teams. We bring the projects to you.",
                                icon: <GrowthIcon size={32} className="text-orange-500" />
                            },
                            {
                                title: "Guaranteed Payments",
                                desc: "No chasing invoices. Zryoss guarantees payments on delivered milestones.",
                                icon: <SpeedIcon size={32} className="text-orange-500" />
                            },
                            {
                                title: "Elite Reputation",
                                desc: "Join a network of top-tier providers. The Zryoss badge signifies quality.",
                                icon: <QualityIcon size={32} className="text-orange-500" />
                            }
                        ].map((item, i) => (
                            <FadeUp key={i} delay={i * 0.1}>
                                <div className="p-8 rounded-2xl bg-white/5 border border-white/10 hover:bg-white/10 transition-colors text-center">
                                    <div className="bg-orange-500/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6">
                                        {item.icon}
                                    </div>
                                    <h3 className="text-xl font-bold mb-4">{item.title}</h3>
                                    <p className="text-gray-400 text-sm leading-relaxed">{item.desc}</p>
                                </div>
                            </FadeUp>
                        ))}
                    </div>
                </div>
            </section>

            {/* VETTING PROCESS */}
            <section className="py-32 bg-white/[0.02] relative overflow-hidden">
                <div className="max-w-7xl mx-auto px-6 relative z-10">
                    <FadeUp>
                        <div className="grid lg:grid-cols-2 gap-16 items-center">
                            <div>
                                <h2 className="text-4xl font-bold mb-8">Strict Vetting. <br /> Guaranteed Standards.</h2>
                                <p className="text-gray-400 text-lg font-light leading-relaxed mb-10">
                                    We don't just list vendors. We integrate partners. Every provider in the Zryoss network goes through a multi-stage vetting process to ensure they can deliver to our standards.
                                </p>

                                <div className="space-y-6">
                                    {[
                                        "Technical & Domain Proficiency Audit",
                                        "SLA & Compliance Reliability Check",
                                        "System Integration Compatibility",
                                        "Quality Benchmark Monitoring"
                                    ].map((item, i) => (
                                        <div key={i} className="flex items-center gap-4">
                                            <div className="w-6 h-6 rounded-full bg-orange-500/20 border border-orange-500/40 flex items-center justify-center text-orange-500 text-xs font-bold">
                                                {i + 1}
                                            </div>
                                            <span className="text-gray-300 font-light">{item}</span>
                                        </div>
                                    ))}
                                </div>
                            </div>

                            <div className="relative">
                                <div className="p-1 rounded-[2.5rem] bg-gradient-to-br from-orange-500/20 to-transparent border border-white/10 group">
                                    <div className="bg-[#0a0a0a] rounded-[2.4rem] p-0 aspect-square flex flex-col justify-center items-center text-center overflow-hidden relative">
                                        <img src={vendorHubImage} alt="Vendor Hub" className="w-full h-full object-cover opacity-80 group-hover:opacity-100 transition-opacity duration-500 scale-110" />
                                        <div className="absolute inset-x-0 bottom-0 p-8 bg-gradient-to-t from-black to-transparent">
                                            <h3 className="text-2xl font-bold mb-2 text-white">Verified Integration</h3>
                                            <p className="text-gray-500 text-sm">Every vendor is a verified spoke in the Zryoss hub.</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </FadeUp>
                </div>
            </section>

            {/* VENDOR TECH SUITE */}
            <section className="py-24 relative overflow-hidden">
                <div className="absolute top-0 right-0 w-1/3 h-full bg-orange-600/5 blur-[100px] pointer-events-none" />
                <div className="max-w-7xl mx-auto px-6 relative z-10">
                    <FadeUp>
                        <div className="flex flex-col md:flex-row items-center gap-16">
                            <div className="md:w-1/2">
                                <h2 className="text-3xl md:text-4xl font-bold mb-6">The Vendor Tech Suite</h2>
                                <p className="text-gray-400 text-lg mb-8 leading-relaxed">
                                    Every vendor in the network operates on the Zryoss Vendor App. This ensures real-time job tracking, earnings transparency, and quality control.
                                </p>
                                <div className="space-y-6">
                                    {[
                                        { icon: <CreditCard className="text-orange-500" />, title: "Instant Payouts", desc: "Earnings released upon job verification." },
                                        { icon: <MessageSquare className="text-blue-500" />, title: "Direct Comms", desc: "Chat directly with Zryoss project managers." },
                                        { icon: <MapPin className="text-green-500" />, title: "Geo-Fenced Jobs", desc: "Receive tasks only within service radius." }
                                    ].map((item, i) => (
                                        <div key={i} className="flex gap-4 p-4 rounded-xl bg-white/5 border border-white/5 hover:border-orange-500/30 transition-colors">
                                            <div className="shrink-0">{item.icon}</div>
                                            <div>
                                                <h4 className="font-bold text-white">{item.title}</h4>
                                                <p className="text-xs text-gray-500">{item.desc}</p>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </div>
                            <div className="md:w-1/2 flex justify-center">
                                <div className="relative w-[300px] h-[600px] bg-[#050505] rounded-[3rem] border-8 border-neutral-900 shadow-2xl relative overflow-hidden group">
                                    <img src={vendorAppImage} alt="Vendor App Interface" className="w-full h-full object-cover opacity-90 group-hover:opacity-100 transition-opacity" />
                                    <div className="absolute inset-x-0 top-0 h-24 bg-gradient-to-b from-black/80 to-transparent pointer-events-none" />
                                </div>
                            </div>
                        </div>
                    </FadeUp>
                </div>
            </section>

            {/* GLOBAL DISTRIBUTION */}
            <section className="py-24 bg-white/[0.02] border-y border-white/5">
                <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-16 items-center">
                    <FadeUp>
                        <h2 className="text-3xl md:text-4xl font-bold mb-6">Work From Anywhere. <br /><span className="text-orange-500">Deliver to the World.</span></h2>
                        <p className="text-gray-400 text-lg mb-8 leading-relaxed">
                            Our projects come from global enterprises in the US, Europe, and Asia. As a Zryoss vendor, you export your services without leaving your desk.
                        </p>
                        <div className="flex items-center gap-4 text-orange-400 font-bold uppercase tracking-widest text-sm">
                            <MapPin size={18} />
                            <span>Active in 15+ Countries</span>
                        </div>
                    </FadeUp>
                    <FadeUp delay={0.2}>
                        {/* Abstract map representation */}
                        <div className="aspect-video rounded-2xl bg-[#111] border border-white/10 relative overflow-hidden flex items-center justify-center">
                            <div className="absolute inset-0 opacity-20 bg-[radial-gradient(circle_at_center,#f97316_2px,transparent_2px)] [background-size:40px_40px]" />
                            <GlobeIcon size={120} className="text-orange-500/20 animate-pulse" />
                        </div>
                    </FadeUp>
                </div>
            </section>


            <section className="py-24 bg-[#080808]">
                <div className="max-w-7xl mx-auto px-6">
                    <FadeUp>
                        <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">Partnership Tiers</h2>
                        <div className="grid md:grid-cols-3 gap-8">
                            {[
                                { level: "Verified", desc: "For new specialists passing initial vetting.", features: ["Access to Marketplace", "Standard Payment Terms"] },
                                { level: "Preferred", desc: "For vendors with 95%+ SLA compliance.", features: ["Priority Project Allocation", "Faster Payouts", "Co-Branding Rights"] },
                                { level: "Strategic", desc: "Exclusive partners deeply integrated into Zryoss.", features: ["Equity Options", "Joint Venture Opportunities", "Dedicated Growth Manager"] }
                            ].map((tier, i) => (
                                <div key={i} className={`p-8 rounded-2xl border ${i === 1 ? 'bg-orange-900/10 border-orange-500' : 'bg-white/5 border-white/10'} relative overflow-hidden`}>
                                    {i === 1 && <div className="absolute top-0 right-0 bg-orange-500 text-black text-xs font-bold px-3 py-1 uppercase tracking-widest">Most Popular</div>}
                                    <h3 className="text-2xl font-bold mb-2">{tier.level}</h3>
                                    <p className="text-gray-400 text-sm mb-6 h-10">{tier.desc}</p>
                                    <ul className="space-y-3">
                                        {tier.features.map((f, j) => (
                                            <li key={j} className="flex items-center gap-2 text-xs text-gray-300">
                                                <div className="w-1.5 h-1.5 bg-orange-500 rounded-full" />
                                                {f}
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            ))}
                        </div>
                    </FadeUp>
                </div>
            </section>



            {/* VENDOR FAQ */}
            <section className="py-24 relative overflow-hidden">
                <div className="max-w-4xl mx-auto px-6 lg:px-8">
                    <FadeUp>
                        <h2 className="text-3xl font-bold mb-12 text-center">Vendor Basics</h2>
                        <div className="space-y-4">
                            {[
                                { q: "Is there a fee to join the network?", a: "No. Zryoss takes a percentage of the contract value only when you get paid." },
                                { q: "Do I have to find my own clients?", a: "No. Zryoss Brands (like ClinkHR or Kryoss Softech) acquire the clients. You focus on execution." },
                                { q: "How fast are payments processed?", a: "Payments are released within 7 days of milestone approval by the Zryoss Quality Team." }
                            ].map((faq, i) => (
                                <div key={i} className="p-6 rounded-2xl bg-white/5 border border-white/10 hover:border-orange-500/30 transition-colors">
                                    <h4 className="flex items-center justify-between font-bold text-lg mb-2 cursor-pointer">
                                        {faq.q}
                                        <ChevronDown size={18} className="text-gray-500" />
                                    </h4>
                                    <p className="text-gray-400 text-sm font-light mt-2">{faq.a}</p>
                                </div>
                            ))}
                        </div>
                    </FadeUp>
                </div>
            </section>

            {/* CALL TO ACTION */}
            <section className="py-32">
                <div className="max-w-4xl mx-auto px-6 text-center">
                    <FadeUp>
                        <h2 className="text-3xl md:text-5xl font-bold mb-8 leading-tight">Apply to Join the Network.</h2>
                        <p className="text-gray-400 text-lg mb-12 font-light max-w-2xl mx-auto">
                            Are you a specialized service provider? Plug into the Zryoss engine and scale your business with professional execution and governance.
                        </p>
                        <button className="px-10 py-5 bg-orange-500 hover:bg-orange-600 text-white rounded-2xl font-bold transition-all hover:scale-105 shadow-xl shadow-orange-500/20 flex items-center gap-2 mx-auto">
                            Partner Application <ArrowIcon size={20} />
                        </button>
                    </FadeUp>
                </div>
            </section>
        </div >
    );
}
