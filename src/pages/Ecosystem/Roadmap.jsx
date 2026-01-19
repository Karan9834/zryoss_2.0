import FadeUp from "../../components/animations/FadeUp";
import {
    Milestone,
    Flag,
    Compass,
    Rocket,
    Globe,
    Zap,
    ArrowRight,
    Sparkles,
    FlaskConical,
    Atom,
    Microscope,
    Bot
} from "lucide-react";

const roadmapImage = "/images/ecosystem/roadmap-timeline.png";
const techImage = "/images/ecosystem/tech-enablers.png";
const heroBgImage = "/images/ecosystem/roadmap-bg.png";
const labImage = "/images/ecosystem/roadmap-lab.png";

export default function Roadmap() {
    const milestones = [
        {
            phase: "Phase 1: Foundation (Current)",
            title: "Protocol Standardization",
            desc: "Standardizing core operational protocols across all execution brands to ensure absolute consistency.",
            status: "Active",
            icon: <Compass className="text-orange-500" size={24} />,
            color: "bg-orange-500"
        },
        {
            phase: "Phase 2: Expansion (Q2 2026)",
            title: "Global Specialist Integration",
            desc: "Scaling the Vendor Layer by integrating verified global specialists in niche domains.",
            status: "Upcoming",
            icon: <Milestone className="text-orange-400" size={24} />,
            color: "bg-orange-600/40"
        },
        {
            phase: "Phase 3: Intelligence (Q4 2026)",
            title: "AI-Driven Governance",
            desc: "Deploying automated AI monitoring for protocol compliance and real-time SLA verification.",
            status: "Planned",
            icon: <Rocket className="text-orange-400" size={24} />,
            color: "bg-orange-700/20"
        },
        {
            phase: "Phase 4: Maturity (2027+)",
            title: "Global Commerce Network",
            desc: "Creating a fully autonomous ecosystem capable of managing multi-billion dollar commerce cycles.",
            status: "Vision",
            icon: <Globe className="text-orange-400" size={24} />,
            color: "bg-orange-900/10"
        }
    ];

    return (
        <div className="bg-[#050505] text-white selection:bg-orange-500/30 min-h-screen">
            {/* HERO */}
            <section className="relative pt-32 pb-20 overflow-hidden">
                <div className="absolute inset-0">
                    <img src={heroBgImage} alt="Roadmap Background" className="w-full h-full object-cover opacity-20" />
                    <div className="absolute inset-0 bg-gradient-to-b from-[#050505] via-[#050505]/90 to-[#050505]" />
                </div>
                <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full bg-[radial-gradient(circle_at_center,rgba(249,115,22,0.05),transparent_70%)] pointer-events-none" />

                <div className="max-w-7xl mx-auto px-6 relative z-10 text-center">
                    <FadeUp>
                        <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-orange-500/30 bg-orange-500/10 backdrop-blur-sm mb-6">
                            <Milestone size={14} className="text-orange-500" />
                            <span className="text-[10px] uppercase tracking-[0.2em] text-orange-400 font-bold">
                                Strategic Path
                            </span>
                        </div>

                        <h1 className="text-5xl md:text-7xl font-bold leading-tight mb-8">
                            The Ecosystem <br />
                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-orange-600">
                                Scale Roadmap.
                            </span>
                        </h1>

                        <p className="text-gray-400 text-lg md:text-xl max-w-2xl mx-auto font-light leading-relaxed mb-12">
                            Our strategic progression from a centralized engine to a global autonomous commerce ecosystem.
                        </p>

                        <div className="rounded-3xl overflow-hidden border border-white/10 relative h-[400px] group">
                            <img src={roadmapImage} alt="Future Roadmap" className="w-full h-full object-cover opacity-80 group-hover:opacity-100 transition-opacity duration-700" />
                            <div className="absolute inset-x-0 bottom-0 top-1/2 bg-gradient-to-t from-[#050505] to-transparent pointer-events-none" />
                            <div className="absolute bottom-10 left-0 right-0">
                                <p className="text-center font-mono text-xs text-orange-500 uppercase tracking-widest animate-pulse">Navigating the Future</p>
                            </div>
                        </div>
                    </FadeUp>
                </div>
            </section>

            {/* TIMELINE */}
            <section className="py-24 relative z-10">
                <div className="max-w-5xl mx-auto px-6">
                    <div className="relative">
                        {/* Center Line */}
                        <div className="absolute left-0 md:left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-orange-500 via-orange-500/20 to-transparent md:-translate-x-1/2" />

                        <div className="space-y-16">
                            {milestones.map((m, i) => (
                                <FadeUp key={i} delay={i * 0.1}>
                                    <div className={`relative flex flex-col md:flex-row gap-8 md:gap-0 ${i % 2 === 0 ? '' : 'md:flex-row-reverse'}`}>
                                        {/* Content */}
                                        <div className="md:w-1/2 flex flex-col justify-center">
                                            <div className={`p-8 rounded-3xl bg-white/5 border border-white/10 hover:border-orange-500/30 transition-all duration-500 group relative
                        ${i % 2 === 0 ? 'md:mr-12' : 'md:ml-12'}
                      `}>
                                                <div className="absolute -top-3 -left-3 bg-orange-500 text-black text-[10px] font-black px-2 py-1 rounded-md uppercase tracking-widest">{m.status}</div>
                                                <span className="text-orange-500 text-xs font-bold uppercase tracking-widest block mb-2">{m.phase}</span>
                                                <h3 className="text-2xl font-bold mb-4">{m.title}</h3>
                                                <p className="text-gray-400 font-light text-sm leading-relaxed">{m.desc}</p>
                                            </div>
                                        </div>

                                        {/* Dot */}
                                        <div className="absolute left-0 md:left-1/2 top-10 w-8 h-8 rounded-full bg-black border-2 border-orange-500 flex items-center justify-center -translate-x-1/2 z-20 shadow-[0_0_15px_rgba(249,115,22,0.5)]">
                                            <div className="w-2 h-2 rounded-full bg-orange-500 animate-pulse" />
                                        </div>

                                        {/* Spacer */}
                                        <div className="md:w-1/2 hidden md:block" />
                                    </div>
                                </FadeUp>
                            ))}
                        </div>
                    </div>
                </div>
            </section>

            {/* TECH PILLARS */}
            <section className="py-24 bg-white/[0.02]">
                <div className="max-w-7xl mx-auto px-6">
                    <FadeUp>
                        <div className="grid lg:grid-cols-2 gap-16 items-center mb-16">
                            <div>
                                <h2 className="text-4xl font-bold mb-6">Tech Enablers</h2>
                                <p className="text-gray-400 text-lg font-light">
                                    The infrastructure powering our scale uses advanced distributed systems and predictive modeling.
                                </p>
                            </div>
                            <div className="h-[200px] rounded-2xl overflow-hidden border border-white/10 relative">
                                <img src={techImage} alt="Tech Enablers" className="w-full h-full object-cover opacity-60" />
                                <div className="absolute inset-0 bg-gradient-to-r from-black/80 to-transparent" />
                            </div>
                        </div>

                        <div className="grid md:grid-cols-3 gap-6">
                            {[
                                { title: "Smart Contracts", desc: "Automated SLA enforcement via blockchain-inspired ledgers." },
                                { title: "Predictive Resource Allocation", desc: "AI models forecasting demand to pre-allocate vendor capacity." },
                                { title: "Unified Identity", desc: "Single-sign-on (SSO) across 50+ tools and platforms." }
                            ].map((tech, i) => (
                                <div key={i} className="p-8 rounded-2xl bg-black border border-white/10">
                                    <div className="w-2 h-12 bg-gradient-to-b from-orange-500 to-transparent mb-6" />
                                    <h3 className="text-xl font-bold mb-3">{tech.title}</h3>
                                    <p className="text-gray-400 text-sm">{tech.desc}</p>
                                </div>
                            ))}
                        </div>
                    </FadeUp>
                </div>
            </section>



            {/* R&D LABS (VISION NOTE) */}
            <section className="py-24 bg-[#0a0a0a]">
                <div className="max-w-7xl mx-auto px-6">
                    <FadeUp>
                        <div className="flex flex-col md:flex-row gap-16 items-center">
                            <div className="md:w-1/2">
                                <div className="rounded-3xl overflow-hidden border border-white/10 h-[400px] relative group">
                                    <img src={labImage} alt="Future R&D Lab" className="w-full h-full object-cover opacity-80 group-hover:opacity-100 transition-all duration-700" />
                                    <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent" />
                                    <div className="absolute top-6 right-6">
                                        <div className="px-4 py-1 rounded-full bg-orange-500/20 border border-orange-500/50 text-orange-500 text-xs font-mono font-bold uppercase animate-pulse">
                                            Lab Access: Restricted
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="md:w-1/2">
                                <span className="text-orange-500 font-mono text-xs uppercase tracking-widest mb-4 block">Zryoss Labs // Year 3</span>
                                <h2 className="text-3xl font-bold mb-6">Inventing the Post-Platform Era</h2>
                                <p className="text-gray-400 text-lg mb-8 leading-relaxed">
                                    We aren't just building software; we are building autonomous business agents. Our R&D division is already prototyping Level 4 Autonomous Commerce models.
                                </p>
                                <div className="grid grid-cols-2 gap-6">
                                    {[
                                        { icon: <Microscope className="text-blue-500" />, label: "Agentic Economics" },
                                        { icon: <Bot className="text-purple-500" />, label: "Self-Healing Logistics" },
                                        { icon: <Atom className="text-green-500" />, label: "Quantum Security" },
                                        { icon: <FlaskConical className="text-orange-500" />, label: "Emotion Synthesis" }
                                    ].map((item, i) => (
                                        <div key={i} className="flex items-center gap-3 p-3 rounded-xl bg-white/5 border border-white/5 hover:border-orange-500/30 transition-colors">
                                            {item.icon}
                                            <span className="font-bold text-sm text-gray-300">{item.label}</span>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </FadeUp>
                </div>
            </section>

            {/* VISION NOTE */}
            <section className="py-32">
                <div className="max-w-3xl mx-auto px-6 text-center">
                    <FadeUp>
                        <div className="inline-flex items-center gap-2 mb-8">
                            <Sparkles className="text-orange-500" size={24} />
                        </div>
                        <h2 className="text-3xl md:text-5xl font-bold mb-8">Building the Future of Distributed Commerce.</h2>
                        <p className="text-gray-400 text-lg font-light italic">
                            "Our roadmap is not just about growth; it's about shifting how business execution is managed on a global scale."
                        </p>
                    </FadeUp>
                </div>
            </section>
        </div >
    );
}
