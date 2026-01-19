import FadeUp from "../../components/animations/FadeUp";
import {
    Users,
    ShieldCheck,
    Target,
    BarChart3,
    Zap,
    ArrowRight,
    Handshake,
    Compass,
    TrendingUp,
    ClipboardList,
    Activity,
    AlertTriangle,
    Clock,
    ArrowUpRight,
    Smile
} from "lucide-react";

const dashboardImage = "/images/ecosystem/account-success-dashboard.png";
const heroBgImage = "/images/ecosystem/account-bg.png";
const sentimentImage = "/images/ecosystem/account-sentiment.png";

export default function AccountManagement() {
    const pillars = [
        {
            title: "Success Ownership",
            desc: "Partners own the client relationship, while Zryoss specialized brands own the delivery success.",
            icon: <Target className="text-orange-500" size={32} />
        },
        {
            title: "Governance Protocol",
            desc: "Every account is governed by standard operating procedures to ensure zero delivery variance.",
            icon: <ShieldCheck className="text-orange-500" size={32} />
        },
        {
            title: "Reporting Clarity",
            desc: "Centralized real-time reporting provided to partners to maintain absolute transparency.",
            icon: <BarChart3 className="text-orange-500" size={32} />
        }
    ];

    return (
        <div className="bg-[#050505] text-white selection:bg-orange-500/30 min-h-screen">
            {/* HERO */}
            <section className="relative pt-32 pb-24 overflow-hidden">
                <div className="absolute inset-0">
                    <img src={heroBgImage} alt="Account Background" className="w-full h-full object-cover opacity-20" />
                    <div className="absolute inset-0 bg-gradient-to-b from-[#050505] via-[#050505]/90 to-[#050505]" />
                </div>
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_0%_0%,rgba(249,115,22,0.1),transparent_50%)] pointer-events-none" />

                <div className="max-w-7xl mx-auto px-6 relative z-10">
                    <FadeUp>
                        <div className="flex flex-col md:flex-row items-center gap-12">
                            <div className="md:w-3/5">
                                <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-orange-500/30 bg-orange-500/10 backdrop-blur-sm mb-6">
                                    <Users size={14} className="text-orange-500" />
                                    <span className="text-[10px] uppercase tracking-[0.2em] text-orange-400 font-bold">
                                        Client Success
                                    </span>
                                </div>

                                <h1 className="text-5xl md:text-7xl font-bold leading-tight mb-8">
                                    Unified <br />
                                    <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-orange-600">
                                        Account Excellence.
                                    </span>
                                </h1>

                                <p className="text-gray-400 text-lg md:text-xl max-w-2xl font-light leading-relaxed mb-10">
                                    The Zryoss model decouples relationship management from execution, ensuring both are handled by specialists for maximum impact.
                                </p>
                            </div>

                            <div className="md:w-2/5 relative">
                                <div className="rounded-2xl overflow-hidden border border-white/10 shadow-2xl relative transform md:rotate-2 hover:rotate-0 transition-transform duration-500">
                                    <img src={dashboardImage} alt="Success Dashboard" className="w-full h-auto object-cover opacity-90" />
                                    <div className="absolute inset-0 bg-gradient-to-t from-[#050505] via-transparent to-transparent" />
                                </div>
                            </div>
                        </div>
                    </FadeUp>
                </div>
            </section>

            {/* PILLARS GRID */}
            <section className="py-24 relative z-10">
                <div className="max-w-7xl mx-auto px-6">
                    <div className="grid md:grid-cols-3 gap-8">
                        {pillars.map((pillar, i) => (
                            <FadeUp key={i} delay={i * 0.1}>
                                <div className="p-10 rounded-[2.5rem] bg-white/5 border border-white/10 hover:border-orange-500/30 transition-all duration-500 group relative overflow-hidden">
                                    <div className="mb-8">{pillar.icon}</div>
                                    <h3 className="text-2xl font-bold mb-4">{pillar.title}</h3>
                                    <p className="text-gray-400 font-light leading-relaxed">{pillar.desc}</p>
                                </div>
                            </FadeUp>
                        ))}
                    </div>
                </div>
            </section>

            {/* ACCOUNT LIFECYCLE */}
            <section className="py-24 bg-[#0a0a0a]">
                <div className="max-w-7xl mx-auto px-6">
                    <FadeUp>
                        <div className="text-center mb-16">
                            <h2 className="text-3xl md:text-4xl font-bold mb-6">The Growth Lifecycle</h2>
                            <p className="text-gray-400">Standardized progression from onboarding to strategic advocacy.</p>
                        </div>
                        <div className="grid md:grid-cols-4 gap-6">
                            {[
                                { step: "01", title: "Onboarding", desc: "System setup, team training, and initial KPI calibration.", icon: <Clock /> },
                                { step: "02", title: "Stabilization", desc: "First 90 days of execution. Focusing on error-free delivery.", icon: <Activity /> },
                                { step: "03", title: "Growth", desc: "Identifying upsell opportunities and expanding service scope.", icon: <ArrowUpRight /> },
                                { step: "04", title: "Advocacy", desc: "Client becomes a strategic partner and case study.", icon: <Smile /> }
                            ].map((stage, i) => (
                                <div key={i} className="relative group">
                                    <div className="p-8 rounded-2xl bg-white/5 border border-white/10 hover:bg-white/10 transition-colors h-full">
                                        <div className="text-4xl font-black text-white/5 mb-4 group-hover:text-orange-500/20 transition-colors">{stage.step}</div>
                                        <h3 className="text-xl font-bold mb-2 flex items-center gap-2">
                                            {stage.title}
                                        </h3>
                                        <p className="text-gray-400 text-sm leading-relaxed">{stage.desc}</p>
                                    </div>
                                    {i < 3 && <div className="hidden md:block absolute top-1/2 -right-3 -translate-y-1/2 text-white/20 z-10">
                                        <ArrowRight size={24} />
                                    </div>}
                                </div>
                            ))}
                        </div>
                    </FadeUp>
                </div>
            </section>

            {/* RELATIONSHIP MODEL */}
            <section className="py-32 bg-white/[0.02]">
                <div className="max-w-7xl mx-auto px-6">
                    <FadeUp>
                        <div className="text-center mb-20">
                            <h2 className="text-4xl font-bold mb-6">The Success Loop</h2>
                            <p className="text-gray-400 max-w-2xl mx-auto font-light">How partners and Zryoss brands collaborate to deliver results.</p>
                        </div>

                        <div className="grid md:grid-cols-2 gap-12">
                            <div className="p-10 rounded-3xl bg-neutral-900/50 border border-white/5">
                                <h3 className="text-xl font-bold mb-6 flex items-center gap-3">
                                    <Zap className="text-orange-500" size={20} />
                                    Partner Responsibility
                                </h3>
                                <ul className="space-y-4">
                                    {[
                                        "Strategic Client Relationship",
                                        "Domain-Level Success Strategy",
                                        "Market Expansion & Upselling",
                                        "Payment Collection & Governance"
                                    ].map((item, i) => (
                                        <li key={i} className="flex items-center gap-3 text-gray-400 text-sm font-light">
                                            <div className="w-1.5 h-1.5 rounded-full bg-orange-500" />
                                            {item}
                                        </li>
                                    ))}
                                </ul>
                            </div>

                            <div className="p-10 rounded-3xl bg-neutral-900/50 border border-white/5">
                                <h3 className="text-xl font-bold mb-6 flex items-center gap-3">
                                    <ShieldCheck className="text-orange-500" size={20} />
                                    Zryoss Branch Responsibility
                                </h3>
                                <ul className="space-y-4">
                                    {[
                                        "Core Service Execution & Quality",
                                        "Vendor Management & Coordination",
                                        "Technical Reporting & SLA Compliance",
                                        "Operational Scalability"
                                    ].map((item, i) => (
                                        <li key={i} className="flex items-center gap-3 text-gray-400 text-sm font-light">
                                            <div className="w-1.5 h-1.5 rounded-full bg-orange-500" />
                                            {item}
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </div>
                    </FadeUp>
                </div>
            </section>

            {/* SUCCESS METRICS DASHBOARD */}
            <section className="py-24 bg-[#0a0a0a]">
                <div className="max-w-7xl mx-auto px-6">
                    <FadeUp>
                        <div className="grid lg:grid-cols-2 gap-16 items-center">
                            <div>
                                <h2 className="text-4xl font-bold mb-6">Real-Time Impact Monitoring</h2>
                                <p className="text-gray-400 text-lg font-light leading-relaxed mb-6">
                                    Account management isn't just about calls; it's about data. We provide granular visibility into every dollar spent and every outcome achieved.
                                </p>
                                <div className="space-y-4">
                                    {["Live Burn Rate & ROI Tracking", "Project Milestone Visuals", "Quality Scorecards", "NPS & Satisfaction Trends"].map((item, i) => (
                                        <div key={i} className="flex items-center gap-3">
                                            <div className="w-8 h-1 bg-orange-500/20 rounded-full">
                                                <div className="w-1/2 h-full bg-orange-500 rounded-full" />
                                            </div>
                                            <span className="text-sm font-bold text-gray-300">{item}</span>
                                        </div>
                                    ))}
                                </div>
                            </div>
                            <div className="relative">
                                <div className="aspect-square rounded-3xl overflow-hidden border border-white/10 group relative">
                                    <img src={dashboardImage} alt="Success Dashboard" className="w-full h-full object-cover opacity-80 group-hover:opacity-100 transition-all duration-700" />
                                    <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent" />
                                    <div className="absolute bottom-6 left-6">
                                        <div className="flex items-center gap-3 bg-black/80 backdrop-blur-md px-4 py-2 rounded-lg border border-white/10">
                                            <div className="w-2 h-2 bg-orange-500 rounded-full animate-pulse" />
                                            <span className="text-xs font-mono text-orange-500">LIVE DATA FEED</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </FadeUp>
                </div>
            </section>

            {/* CLIENT SENTIMENT ENGINE */}
            <section className="py-24 bg-white/[0.02]">
                <div className="max-w-7xl mx-auto px-6">
                    <FadeUp>
                        <div className="grid md:grid-cols-2 gap-16 items-center">
                            <div className="order-2 md:order-1">
                                <div className="rounded-3xl bg-black border border-white/10 relative overflow-hidden group h-full min-h-[400px]">
                                    <img src={sentimentImage} alt="Sentiment Analysis AI" className="w-full h-full object-cover opacity-80 group-hover:opacity-100 transition-opacity duration-700" />
                                    <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent" />
                                    <div className="absolute bottom-6 left-6 right-6">
                                        <div className="p-4 bg-black/60 backdrop-blur-md rounded-xl border border-white/10 flex items-center justify-between">
                                            <div>
                                                <div className="text-xs text-gray-400 uppercase tracking-widest mb-1">Current Mood</div>
                                                <div className="text-lg font-bold text-green-500">Positive (94%)</div>
                                            </div>
                                            <Activity className="text-orange-500 animate-pulse" />
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="order-1 md:order-2">
                                <h2 className="text-3xl font-bold mb-6">The Client Sentiment Engine</h2>
                                <p className="text-gray-400 text-lg font-light leading-relaxed mb-8">
                                    We don't wait for complaints. Our engine analyzes communication patterns and operational data to predict client happiness scores in real-time.
                                </p>
                                <ul className="space-y-3">
                                    <li className="flex items-center gap-3 text-gray-400"><Zap size={16} className="text-orange-500" /> Proactive Churn Prevention</li>
                                    <li className="flex items-center gap-3 text-gray-400"><Zap size={16} className="text-orange-500" /> Automated Happiness Alerts</li>
                                </ul>
                            </div>
                        </div>
                    </FadeUp>
                </div>
            </section>

            {/* QBR FRAMEWORK */}
            <section className="py-24 bg-gradient-to-b from-[#0a0a0a] to-[#050505] border-t border-white/5">
                <div className="max-w-7xl mx-auto px-6">
                    <FadeUp>
                        <div className="text-center mb-16">
                            <h2 className="text-3xl md:text-4xl font-bold mb-6">The Governance of Growth</h2>
                            <p className="text-gray-400">Our Account Health Framework ensures we are always aligned with your strategic goals.</p>
                        </div>

                        <div className="relative border-l border-white/10 ml-6 md:ml-1/2 space-y-12">
                            {[
                                { title: "Month 1: Calibration", desc: "Setting the baseline. We validate all KPIs and operational workflows.", icon: <ClipboardList size={20} className="text-blue-500" /> },
                                { title: "Quarter 1: Optimization", desc: "First QBR. We identify inefficiencies and deploy automation fixes.", icon: <TrendingUp size={20} className="text-orange-500" /> },
                                { title: "Year 1: Scale Strategy", desc: "Strategic Review. We map out the expansion plan for the next fiscal year.", icon: <Compass size={20} className="text-purple-500" /> }
                            ].map((step, i) => (
                                <div key={i} className={`relative pl-12 md:pl-0 ${i % 2 === 0 ? 'md:pr-12 md:text-right md:origin-right' : 'md:pl-12 md:origin-left'}`}>
                                    <div className="absolute left-[-13px] md:left-1/2 top-0 w-6 h-6 rounded-full bg-black border border-white/20 flex items-center justify-center md:-translate-x-1/2 z-10">
                                        <div className="w-2 h-2 bg-orange-500 rounded-full" />
                                    </div>
                                    <div className={`md:w-1/2 ${i % 2 === 0 ? 'md:mr-auto md:pr-12' : 'md:ml-auto md:pl-0'}`}>
                                        <div className="p-6 rounded-2xl bg-white/5 border border-white/10 hover:border-orange-500/30 transition-colors">
                                            <div className={`flex items-center gap-3 mb-3 ${i % 2 === 0 ? 'md:flex-row-reverse' : ''}`}>
                                                {step.icon}
                                                <h3 className="font-bold text-lg">{step.title}</h3>
                                            </div>
                                            <p className="text-gray-400 text-sm">{step.desc}</p>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </FadeUp>
                </div>
            </section>

            {/* ESCALATION MATRIX */}
            <section className="py-24 bg-[#0a0a0a]">
                <div className="max-w-4xl mx-auto px-6">
                    <FadeUp>
                        <h2 className="text-3xl font-bold mb-12 text-center">Structured Escalation Matrix</h2>
                        <div className="space-y-4">
                            {[
                                { level: "Level 1", role: "Account Manager", time: "Issues resolved < 4 hours", color: "border-gray-700" },
                                { level: "Level 2", role: "Brand Head", time: "Issues resolved < 24 hours", color: "border-orange-500/50" },
                                { level: "Level 3", role: "Zryoss Core Team", time: "Critical failures < 48 hours", color: "border-red-500" }
                            ].map((esc, i) => (
                                <div key={i} className={`p-6 rounded-2xl bg-white/5 border ${esc.color} flex flex-col md:flex-row items-center justify-between gap-4 hover:bg-white/10 transition-colors`}>
                                    <div className="flex items-center gap-4">
                                        <div className="w-10 h-10 rounded-full bg-black border border-white/10 flex items-center justify-center font-bold text-white/50">{i + 1}</div>
                                        <div>
                                            <h3 className="font-bold text-lg">{esc.role}</h3>
                                            <p className="text-xs text-gray-500 uppercase tracking-widest">{esc.level} Support</p>
                                        </div>
                                    </div>
                                    <div className="flex items-center gap-2 text-sm text-gray-300 bg-black/50 px-4 py-2 rounded-lg">
                                        <AlertTriangle size={14} className={i === 2 ? "text-red-500" : "text-orange-500"} />
                                        {esc.time}
                                    </div>
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
                        <h2 className="text-3xl md:text-5xl font-bold mb-8">Manage at Scale.</h2>
                        <p className="text-gray-400 text-lg mb-12 font-light">
                            Focus on the relationship, while the Zryoss engine handles the complexity of delivery and governance.
                        </p>
                        <button className="px-10 py-5 bg-orange-500 hover:bg-orange-600 text-white rounded-2xl font-bold transition-all hover:scale-105 shadow-xl shadow-orange-500/20">
                            Explore Integration
                        </button>
                    </FadeUp>
                </div>
            </section>
        </div>
    );
}
