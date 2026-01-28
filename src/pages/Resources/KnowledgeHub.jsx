import React from 'react';
import { motion } from 'framer-motion';
import {
    Database,
    Workflow,
    BookOpen,
    Layers,
    ClipboardCheck,
    MessagesSquare,
    FileText,
    ArrowRight,
    CheckCircle2,
    Target,
    Zap,
    Scale,
    Library
} from 'lucide-react';
import FadeUp from '../../components/animations/FadeUp';
import HeroContact from '../Home/HeroContact';

const items = [
    {
        icon: <Database className="w-6 h-6" />,
        title: "1. Business Operating System Insights",
        desc: "Understand the core philosophy: why systems matter more than effort and how centralized governance enables massive scale.",
        points: ["Centralized execution models", "System-first thinking", "Governance for scale"]
    },
    {
        icon: <Workflow className="w-6 h-6" />,
        title: "2. How Zryoss Works (Deep Dives)",
        desc: "Detailed technical breakdowns of our end-to-end execution flow, from onboarding to quality assurance.",
        points: ["Delivery management", "Vendor coordination", "Reporting frameworks"]
    },
    {
        icon: <BookOpen className="w-6 h-6" />,
        title: "3. IPP & BPP Learning Resources",
        desc: "Structured guides to help partners operate correctly within our brand creation and leadership models.",
        points: ["IPP business model", "BPP scale logic", "Operational boundaries"]
    },
    {
        icon: <Layers className="w-6 h-6" />,
        title: "4. Industry & Vertical Knowledge",
        desc: "Domain-specific insights related to IT, Marketing, HR, Education, and Healthcare delivery protocols.",
        points: ["Vertical execution domains", "Real-world delivery logic", "Infrastructure workflows"]
    },
    {
        icon: <ClipboardCheck className="w-6 h-6" />,
        title: "5. Process Explainers & Frameworks",
        desc: "Simple breakdowns of why our processes exist and how they protect outcomes for every stakeholder.",
        points: ["SLA governance", "Quality checkpoints", "Escalation handling"]
    },
    {
        icon: <Library className="w-6 h-6" />,
        title: "6. Case-Based Learning",
        desc: "Scenario-based explanations of coordination, delay management, and quality issue prevention.",
        points: ["Operational logic", "Scenario playbooks", "Outcome protection"]
    },
    {
        icon: <FileText className="w-6 h-6" />,
        title: "7. FAQs & Reference Material",
        desc: "The definitive source for partner FAQs, Best-Practice docs, and platform usage guidance.",
        points: ["Partner support", "Operational FAQs", "System documentation"]
    }
];

export default function KnowledgeHub() {
    return (
        <div className="bg-[#050505] text-white min-h-screen">
            {/* Hero Section */}
            <section className="relative h-[95vh] flex items-center justify-center overflow-hidden">
                <div className="absolute inset-0">
                    <img
                        src="https://images.unsplash.com/photo-1507842217343-583bb7270b66?q=80&w=2070&auto=format&fit=crop"
                        alt="Library"
                        className="w-full h-full object-cover opacity-30 brightness-[0.6] scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-b from-[#050505]/95 via-[#050505]/40 to-[#050505]" />
                </div>

                <div className="relative z-10 max-w-5xl mx-auto px-6 text-center">
                    <FadeUp>
                        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-400 text-xs font-bold uppercase tracking-[0.2em] mb-8">
                            <Library className="w-4 h-4" />
                            The Execution Library
                        </div>
                        <h1 className="text-5xl md:text-7xl lg:text-8xl font-black mb-8 leading-[1.1] tracking-tight">
                            Zryoss <span className="text-orange-500">Knowledge</span> Hub
                        </h1>
                        <p className="text-xl md:text-2xl text-gray-400 font-light max-w-3xl mx-auto leading-relaxed">
                            Learn how real businesses are built with <span className="text-white font-medium">systems</span>.
                            Clarity, discipline, and execution excellence.
                        </p>
                    </FadeUp>
                </div>

                <div className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-bounce">
                    <div className="w-6 h-10 rounded-full border-2 border-white/20 flex justify-center p-2">
                        <div className="w-1 h-2 bg-orange-500 rounded-full" />
                    </div>
                </div>
            </section>

            {/* Why Exist Section */}
            <section className="py-32 relative">
                <div className="max-w-7xl mx-auto px-6">
                    <div className="grid lg:grid-cols-2 gap-20">
                        <FadeUp>
                            <h2 className="text-4xl font-bold mb-10 leading-tight">
                                Why we built this <span className="text-orange-500 underline underline-offset-8 decoration-white/10">curated space</span>
                            </h2>
                            <div className="space-y-8">
                                <p className="text-xl text-gray-400 font-light">
                                    Most business content online focuses on ideas without execution or growth hacks without systems.
                                </p>
                                <div className="p-8 rounded-3xl bg-white/5 border border-white/10">
                                    <h3 className="text-orange-500 font-bold mb-4 uppercase tracking-widest text-sm">The Zryoss Mission</h3>
                                    <p className="text-gray-300 text-lg font-light leading-relaxed">
                                        "To explain how businesses actually operate, break down execution frameworks, and share real operational insights."
                                    </p>
                                </div>
                            </div>
                        </FadeUp>

                        <FadeUp delay={0.2}>
                            <div className="grid grid-cols-1 gap-6">
                                {[
                                    { title: "Execution Over Ideas", desc: "Clarity on how the engine actually runs." },
                                    { title: "System-First Thinking", desc: "Moving away from personality-dependent models." },
                                    { title: "Operational Insights", desc: "Real discipline, not motivational noise." }
                                ].map((item, i) => (
                                    <div key={i} className="flex gap-6 p-6 rounded-2xl hover:bg-white/5 transition-colors border border-transparent hover:border-white/5">
                                        <div className="w-12 h-12 rounded-xl bg-orange-500/10 flex items-center justify-center text-orange-500 shrink-0">
                                            <Zap className="w-6 h-6" />
                                        </div>
                                        <div>
                                            <h4 className="text-xl font-bold mb-2">{item.title}</h4>
                                            <p className="text-gray-400 text-sm">{item.desc}</p>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </FadeUp>
                    </div>
                </div>
            </section>

            {/* Main Content Grid */}
            <section className="py-32 bg-white/[0.02]">
                <div className="max-w-7xl mx-auto px-6">
                    <FadeUp className="mb-24">
                        <h2 className="text-4xl md:text-5xl font-bold mb-6">Hub Exploration</h2>
                        <div className="w-24 h-1 bg-gradient-to-r from-orange-500 to-transparent mb-10 rounded-full" />
                    </FadeUp>

                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {items.map((item, i) => (
                            <FadeUp key={i} delay={i * 0.05}>
                                <div className="group h-full p-8 rounded-[32px] bg-[#0A0A0A] border border-white/10 hover:border-orange-500/50 transition-all duration-500 relative overflow-hidden">
                                    <div className="relative z-10">
                                        <div className="w-14 h-14 rounded-2xl bg-white/5 flex items-center justify-center text-orange-500 mb-8 group-hover:bg-orange-500 group-hover:text-white transition-all">
                                            {item.icon}
                                        </div>
                                        <h3 className="text-2xl font-bold mb-6 group-hover:text-orange-500 transition-colors uppercase tracking-tight">{item.title}</h3>
                                        <p className="text-gray-400 text-sm leading-relaxed mb-8 font-light">
                                            {item.desc}
                                        </p>
                                        <div className="space-y-3">
                                            {item.points.map((p, idx) => (
                                                <div key={idx} className="flex items-center gap-3 text-xs text-gray-500 font-medium">
                                                    <div className="w-1.5 h-1.5 rounded-full bg-orange-500/40" />
                                                    {p}
                                                </div>
                                            ))}
                                        </div>
                                    </div>
                                    {/* Deco Icon */}
                                    <div className="absolute -bottom-8 -right-8 opacity-[0.02] group-hover:opacity-[0.08] transition-opacity">
                                        {React.cloneElement(item.icon, { className: "w-48 h-48 rotate-12" })}
                                    </div>
                                </div>
                            </FadeUp>
                        ))}
                    </div>
                </div>
            </section>

            {/* Personas / Audience */}
            <section className="py-32">
                <div className="max-w-7xl mx-auto px-6">
                    <div className="flex flex-col lg:flex-row gap-20 p-16 rounded-[40px] bg-gradient-to-br from-white/5 to-transparent border border-white/10">
                        <div className="lg:w-1/3">
                            <FadeUp>
                                <h2 className="text-3xl font-bold mb-6">Built for Clarity</h2>
                                <p className="text-gray-400 font-light leading-relaxed">
                                    Individuals, partners, and businesses looking to understand before they decide.
                                </p>
                            </FadeUp>
                        </div>
                        <div className="lg:w-2/3 grid sm:grid-cols-2 gap-8">
                            {[
                                "IPP & BPP Partners",
                                "Corporate Clients",
                                "Investors",
                                "Ecosystem Teams",
                                "Business Owners",
                                "Scale Aspirants"
                            ].map((persona, i) => (
                                <FadeUp key={i} delay={i * 0.05} className="flex items-center gap-4">
                                    <div className="w-2 h-2 rounded-full bg-orange-500" />
                                    <span className="text-xl font-light text-white/80">{persona}</span>
                                </FadeUp>
                            ))}
                        </div>
                    </div>
                </div>
            </section>

            {/* Differentiation Section */}
            <section className="py-32 bg-[#0A0A0A]">
                <div className="max-w-7xl mx-auto px-6">
                    <div className="text-center mb-24">
                        <FadeUp>
                            <h2 className="text-4xl font-bold mb-6 italic">How This Hub Is <span className="text-orange-500 not-italic">Different</span></h2>
                            <p className="text-gray-400 text-lg font-light">Moving past generic business blogs into structural reality.</p>
                        </FadeUp>
                    </div>

                    <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-px bg-white/10 border border-white/10 rounded-[30px] overflow-hidden">
                        {[
                            { label: "System-Centric", desc: "No personality dependency." },
                            { label: "Execution Focused", desc: "Zero motivational fluff." },
                            { label: "Governance First", desc: "Rules that enable scale." },
                            { label: "Long-Term Prep", desc: "No short-cut strategies." }
                        ].map((item, i) => (
                            <div key={i} className="bg-[#050505] p-10 flex flex-col items-center text-center">
                                <CheckCircle2 className="w-8 h-8 text-orange-500 mb-6" />
                                <h4 className="text-xl font-bold mb-3">{item.label}</h4>
                                <p className="text-sm text-gray-500 font-light">{item.desc}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Quote / Living Knowledge */}
            <section className="py-32 relative">
                <div className="max-w-4xl mx-auto px-6 text-center">
                    <FadeUp>
                        <div className="mb-10 text-orange-500/40">
                            <BookOpen className="w-20 h-20 mx-auto" />
                        </div>
                        <h2 className="text-3xl md:text-4xl font-light mb-12 italic leading-relaxed text-gray-300">
                            "Confusion creates <span className="text-red-500 not-italic font-bold">risk</span>. <br />
                            Clarity creates <span className="text-green-500 not-italic font-bold">confidence</span>."
                        </h2>
                        <p className="text-gray-500 text-lg font-light leading-relaxed max-w-2xl mx-auto">
                            The Hub evolves as Zryoss grows. New processes, learnings, and frameworks are added constantly to ensure you always lead with knowledge.
                        </p>
                    </FadeUp>
                </div>
            </section>

            {/* Final CTA */}
            <section className="pb-32">
                <div className="max-w-7xl mx-auto px-6">
                    <div className="relative p-16 rounded-[50px] bg-gradient-to-r from-orange-500 to-orange-700 overflow-hidden shadow-2xl shadow-orange-500/20 group">
                        <div className="relative z-10 flex flex-col md:flex-row items-center justify-between gap-10">
                            <div className="text-left">
                                <h2 className="text-4xl font-black mb-4 tracking-tight">Learn the System. <br />Then Build With It.</h2>
                                <p className="text-white/80 font-light text-lg">Knowledge is the first layer of execution.</p>
                            </div>
                            <button className="px-12 py-5 bg-black text-white font-bold rounded-2xl flex items-center gap-3 hover:scale-105 active:scale-95 transition-all">
                                Explore All Resources
                                <ArrowRight className="w-5 h-5" />
                            </button>
                        </div>
                        {/* Circle blobs */}
                        <div className="absolute -top-20 -right-20 w-80 h-80 bg-white/10 rounded-full blur-3xl group-hover:scale-150 transition-transform duration-1000" />
                    </div>
                </div>
            </section>

            {/* HeroContact Section */}
            <HeroContact />
        </div>
    );
}
