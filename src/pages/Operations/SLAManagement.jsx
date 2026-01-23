import React, { useMemo } from "react";
import {
    ShieldCheck,
    CheckCircle2,
    AlertTriangle,
    Clock,
    Zap,
    BarChart3,
    Users,
    Building2,
    ArrowRight,
    FileText,
    TrendingUp,
    Scale,
    Gavel
} from "lucide-react";

export default function SLAManagement() {

    // Using content from prompt + existing file structure
    const metrics = [
        { label: "SLA Adherence", value: "99.8%", icon: <ShieldCheck className="w-5 h-5" /> },
        { label: "Active Vendors", value: "450+", icon: <Building2 className="w-5 h-5" /> },
        { label: "Avg Response", value: "< 2hrs", icon: <Clock className="w-5 h-5" /> },
        { label: "Partner Satisfaction", value: "4.8/5", icon: <Users className="w-5 h-5" /> },
    ];

    const slaCategories = [
        {
            title: "Delivery SLAs",
            desc: "Timelines, milestones, and final output quality.",
            icon: <Zap className="w-6 h-6" />,
            items: ["On-time delivery rate > 98%", "Critical bug fix < 4 hours", "Zero scope creep without approval"],
        },
        {
            title: "Availability SLAs",
            desc: "System uptime, support responsiveness, and reachability.",
            icon: <Clock className="w-6 h-6" />,
            items: ["99.9% uptime for core platforms", "24/7 support availability", "1 hour initial response time"],
        },
        {
            title: "Quality SLAs",
            desc: "Code standards, design fidelity, and user acceptance.",
            icon: <CheckCircle2 className="w-6 h-6" />,
            items: ["< 2% rework rate", "100% adherence to style guides", "Security compliance audit pass"],
        },
    ];

    const enforcementSteps = [
        { title: "Automated Tracking", icon: <BarChart3 className="w-5 h-5" />, desc: "Real-time performance monitoring against benchmarks." },
        { title: "Breach Alerts", icon: <AlertTriangle className="w-5 h-5" />, desc: "Instant notifications for any metric deviation." },
        { title: "Quarterly Audits", icon: <FileText className="w-5 h-5" />, desc: "Deep-dive reviews of vendor performance." },
        { title: "Transparent Scorecards", icon: <Scale className="w-5 h-5" />, desc: "Visible performance ratings for all vendors." },
    ];

    return (
        <div className="min-h-screen bg-[#121212] text-white selection:bg-[#FF6A00]/30 selection:text-white">

            {/* 1. HERO SECTION */}
            <section
                className="relative overflow-hidden min-h-[85vh] flex items-center"
                style={{
                    backgroundImage:
                        "url(https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?q=80&w=2070&auto=format&fit=crop)",
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                }}
            >
                {/* Overlays */}
                <div className="absolute inset-0 bg-[#0b0b0b]/80" />
                <div className="absolute inset-0 bg-gradient-to-b from-[#121212]/30 via-[#121212]/80 to-[#121212]" />

                {/* Glow Effects */}
                <div className="absolute -top-52 left-1/2 -translate-x-1/2 w-[980px] h-[980px] rounded-full bg-[#FF6A00]/10 blur-[120px]" />
                <div className="absolute bottom-[-10%] right-[-10%] w-[500px] h-[500px] rounded-full bg-blue-500/5 blur-[100px]" />

                <div className="relative max-w-7xl mx-auto px-6 w-full py-20 text-center">
                    <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10 text-sm text-gray-200 mb-8">
                        <span className="w-2 h-2 rounded-full bg-[#FF6A00]" />
                        Operations · SLA Management
                    </div>

                    <h1 className="text-4xl sm:text-5xl md:text-7xl font-extrabold leading-tight tracking-tight mb-6">
                        Controlled Vendors. <br />
                        <span className="text-[#FF6A00]">Enforced SLAs.</span> <br />
                        Predictable Outcomes.
                    </h1>

                    <p className="mt-6 text-gray-200 leading-relaxed text-lg sm:text-xl max-w-3xl mx-auto font-light">
                        At Zryoss, vendors are not independent operators. They function within a <span className="text-white font-semibold">platform-governed execution framework</span> where scope, timelines, quality, and accountability are strictly enforced.
                    </p>

                    <div className="mt-10 flex flex-col sm:flex-row gap-4 justify-center">
                        <button className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-xl bg-[#FF6A00] text-black font-bold hover:bg-[#FF6A00]/90 transition shadow-[0_0_20px_rgba(255,106,0,0.3)]">
                            View SLA Standards <ArrowRight className="w-5 h-5" />
                        </button>
                    </div>
                </div>
            </section>

            {/* 2. WHY TRADITIONAL MODELS FAIL (Reconstructed based on common SLA issues) */}
            <section className="max-w-7xl mx-auto px-6 py-20">
                <div className="grid lg:grid-cols-2 gap-12 items-center">
                    <div>
                        <h2 className="text-3xl font-bold mb-6">
                            Why Vendor Management Fails in <span className="text-[#FF6A00]">Most Businesses</span>
                        </h2>
                        <p className="text-gray-300 mb-8 text-lg">
                            Traditional vendor models break because responsibility is outsourced, benchmarks are vague, and enforcement is reactive.
                        </p>

                        <ul className="space-y-4">
                            {[
                                "Ambiguous scope definitions",
                                "Zero realtime performance tracking",
                                "No penalties for missed deadlines",
                                "Quality is checked only at the end"
                            ].map((item, i) => (
                                <li key={i} className="flex items-start gap-4 p-4 rounded-xl bg-[#1E1E1E] border border-white/10">
                                    <AlertTriangle className="w-5 h-5 text-[#FF6A00] shrink-0 mt-1" />
                                    <span className="text-gray-200">{item}</span>
                                </li>
                            ))}
                        </ul>

                        <div className="mt-8 p-5 rounded-2xl bg-[#FF6A00]/10 border border-[#FF6A00]/25">
                            <p className="text-white font-semibold">
                                Zryoss does not outsource responsibility. It owns delivery outcomes.
                            </p>
                        </div>
                    </div>

                    <div className="relative">
                        <div className="absolute inset-0 bg-[#FF6A00]/20 blur-[60px] rounded-full" />
                        <div className="relative rounded-3xl border border-white/10 bg-[#121212] p-8 overflow-hidden">
                            {/* Abstract Visualization of SLA Enforcement */}
                            <div className="space-y-6">
                                <div className="flex items-center justify-between border-b border-white/10 pb-4">
                                    <div>
                                        <p className="text-sm text-gray-400">Vendor Performance</p>
                                        <p className="text-xl font-bold text-white">Live Monitoring</p>
                                    </div>
                                    <div className="px-3 py-1 rounded-full bg-green-500/20 text-green-400 text-xs font-mono border border-green-500/30">
                                        SYSTEM ACTIVE
                                    </div>
                                </div>

                                {metrics.map((m, i) => (
                                    <div key={i} className="flex items-center justify-between p-3 rounded-lg bg-white/5">
                                        <div className="flex items-center gap-3">
                                            <div className="text-[#FF6A00]">{m.icon}</div>
                                            <span className="text-sm text-gray-300">{m.label}</span>
                                        </div>
                                        <span className="font-mono font-bold text-white">{m.value}</span>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* 3. METRICS GRID */}
            <section className="bg-[#1E1E1E] border-y border-white/10">
                <div className="max-w-7xl mx-auto px-6 py-20">
                    <h2 className="text-3xl font-bold text-center mb-12">
                        Live SLA <span className="text-[#FF6A00]">Performance</span>
                    </h2>
                    <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
                        {metrics.map((m, idx) => (
                            <div key={idx} className="bg-[#121212] border border-white/10 rounded-2xl p-6 hover:border-[#FF6A00]/40 transition-all group relative overflow-hidden">
                                <div className="absolute top-0 right-0 w-24 h-24 bg-[#FF6A00]/10 rounded-bl-full -mr-4 -mt-4 transition-transform group-hover:scale-110" />

                                <div className="flex justify-between items-start mb-4">
                                    <div className="p-3 bg-[#FF6A00]/10 rounded-xl text-[#FF6A00] border border-[#FF6A00]/20">
                                        {m.icon}
                                    </div>
                                </div>
                                <h3 className="text-4xl font-bold mb-2 text-white">{m.value}</h3>
                                <p className="text-sm text-gray-400 font-medium uppercase tracking-wider">{m.label}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* 4. SLA CATEGORIES (Accordion/Cards Style from VendorCoordination) */}
            <section className="max-w-7xl mx-auto px-6 py-20">
                <div className="text-center max-w-3xl mx-auto mb-16">
                    <h2 className="text-3xl font-bold mb-4">
                        Key Service Level <span className="text-[#FF6A00]">Agreements</span>
                    </h2>
                    <p className="text-gray-300">
                        We don't rely on "best effort". We rely on defined, contractual standards.
                    </p>
                </div>

                <div className="grid md:grid-cols-3 gap-6">
                    {slaCategories.map((cat, idx) => (
                        <div key={idx} className="p-8 rounded-3xl bg-[#1E1E1E] border border-white/10 hover:border-[#FF6A00]/30 transition group">
                            <div className="w-14 h-14 rounded-2xl bg-[#FF6A00]/10 border border-[#FF6A00]/20 flex items-center justify-center text-[#FF6A00] mb-6 group-hover:scale-110 transition-transform">
                                {cat.icon}
                            </div>
                            <h3 className="text-xl font-bold text-white mb-3">{cat.title}</h3>
                            <p className="text-gray-400 text-sm mb-6 leading-relaxed">{cat.desc}</p>

                            <ul className="space-y-3">
                                {cat.items.map((item, i) => (
                                    <li key={i} className="flex items-start gap-3">
                                        <CheckCircle2 className="w-5 h-5 text-[#FF6A00] shrink-0 mt-0.5" />
                                        <span className="text-sm text-gray-300">{item}</span>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    ))}
                </div>
            </section>

            {/* 5. ENFORCEMENT MECHANISM */}
            <section className="max-w-7xl mx-auto px-6 py-20 border-t border-white/10">
                <div className="grid lg:grid-cols-2 gap-16 items-center">
                    <div>
                        <h2 className="text-3xl font-bold mb-6">
                            How Zryoss Enforces <span className="text-[#FF6A00]">Compliance</span>
                        </h2>
                        <div className="space-y-6">
                            {enforcementSteps.map((step, i) => (
                                <div key={i} className="flex gap-5">
                                    <div className="w-12 h-12 rounded-xl bg-[#1E1E1E] border border-white/10 flex items-center justify-center text-[#FF6A00] shrink-0">
                                        {step.icon}
                                    </div>
                                    <div>
                                        <h4 className="text-lg font-bold text-white">{step.title}</h4>
                                        <p className="text-gray-400 text-sm mt-1">{step.desc}</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>

                    <div className="relative p-10 rounded-3xl bg-[#1E1E1E] border border-white/10 text-center">
                        <div className="absolute top-0 right-0 w-32 h-32 bg-[#FF6A00]/10 blur-[50px]" />
                        <Gavel className="w-16 h-16 text-[#FF6A00] mx-auto mb-6" />
                        <h3 className="text-2xl font-bold text-white mb-4">Zero Compromise Policy</h3>
                        <p className="text-gray-300 mb-8 leading-relaxed">
                            SLA breaches triggers immediate intervention. Repeated failures activate automated vendor substitution protocols to protect client delivery.
                        </p>
                        <button className="px-6 py-3 rounded-xl bg-white/5 border border-white/10 text-white font-semibold hover:bg-white/10 transition">
                            Read Enforcement Policy
                        </button>
                    </div>
                </div>
            </section>

            {/* 6. FINAL CTA */}
            <section className="bg-[#151515] border-t border-white/10">
                <div className="max-w-7xl mx-auto px-6 py-24 text-center">
                    <h2 className="text-3xl md:text-5xl font-bold mb-6">
                        Standardization Scales. <span className="text-[#FF6A00]">Chaos Doesn't.</span>
                    </h2>
                    <p className="text-xl text-gray-400 max-w-2xl mx-auto mb-10">
                        Join an ecosystem where performance is not just promised—it's contractually engineered.
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                        <button className="px-8 py-4 bg-[#FF6A00] text-black font-bold rounded-xl hover:bg-[#FF6A00]/90 transition shadow-lg shadow-[#FF6A00]/20">
                            Partner With Zryoss
                        </button>
                        <button className="px-8 py-4 bg-transparent border border-white/20 text-white font-semibold rounded-xl hover:bg-white/5 transition">
                            Explore Operations Model
                        </button>
                    </div>
                </div>
            </section>

        </div>
    );
}
