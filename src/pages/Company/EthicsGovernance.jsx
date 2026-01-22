import React from "react";
import { motion } from "framer-motion";
import {
    ShieldCheck,
    Scale,
    FileText,
    Users,
    Eye,
    Lock,
    RefreshCw,
    CheckCircle2,
    Building2,
    AlertTriangle,
    Gavel,
    BookOpen,
} from "lucide-react";

/**
 * FadeUp Animation Component
 */
const FadeUp = ({ children, delay = 0 }) => (
    <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, delay }}
    >
        {children}
    </motion.div>
);

export default function EthicsGovernance() {
    return (
        <main className="bg-[#050505] text-white overflow-hidden font-sans">
            {/* ================= HERO SECTION ================= */}
            <section className="relative h-[80vh] min-h-[600px] flex items-center justify-center border-b border-white/5 pt-20">
                <div className="absolute inset-0 z-0">
                    <img
                        src="https://images.unsplash.com/photo-1550751827-4bd374c3f58b?q=80&w=2070&auto=format&fit=crop"
                        alt="Ethics and Governance Background"
                        className="w-full h-full object-cover opacity-20"
                    />
                    <div className="absolute inset-0 bg-gradient-to-b from-[#050505] via-[#050505]/70 to-[#050505]" />
                    <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(255,138,0,0.08),transparent_70%)]" />
                </div>

                <div className="relative z-10 max-w-5xl mx-auto px-6 text-center">
                    <FadeUp>
                        <span className="inline-block px-4 py-1.5 mb-6 rounded-full border border-orange-500/30 bg-orange-500/10 text-orange-400 text-sm font-medium tracking-wide">
                            Ethics & Governance
                        </span>
                        <h1 className="text-5xl md:text-7xl font-bold tracking-tight mb-8">
                            Responsible Systems. <br className="hidden md:block" />
                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-orange-600">
                                Transparent Operations.
                            </span>
                        </h1>
                        <p className="text-lg md:text-2xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
                            Trusted Growth. At Zryoss, ethics and governance are core operating
                            principles embedded into how the platform is designed, managed, and
                            scaled.
                        </p>
                    </FadeUp>
                </div>
            </section>

            {/* ================= GOVERNANCE PHILOSOPHY ================= */}
            <section className="py-24 relative">
                <div className="max-w-7xl mx-auto px-6">
                    <FadeUp>
                        <div className="text-center mb-16">
                            <h2 className="text-4xl md:text-5xl font-bold mb-6">
                                Governance Philosophy
                            </h2>
                            <p className="text-gray-400 max-w-2xl mx-auto">
                                Zryoss follows a system-governed model where growth never
                                compromises integrity.
                            </p>
                        </div>
                    </FadeUp>

                    <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                        {[
                            {
                                icon: FileText,
                                title: "Process-Driven",
                                desc: "Decisions are based on established processes, not ad-hoc choices.",
                            },
                            {
                                icon: Gavel,
                                title: "Defined Authority",
                                desc: "Execution follows clear lines of authority and responsibility.",
                            },
                            {
                                icon: Users,
                                title: "Accountability",
                                desc: "Every action has an assigned owner, ensuring clear accountability.",
                            },
                            {
                                icon: Eye,
                                title: "Continuous Oversight",
                                desc: "Oversight is proactive and continuous, not just reactive.",
                            },
                        ].map((item, i) => (
                            <FadeUp key={i} delay={i * 0.1}>
                                <div className="p-8 h-full rounded-2xl bg-[#0E0F12] border border-white/10 hover:border-orange-500/30 transition-all hover:-translate-y-1 group">
                                    <div className="w-12 h-12 rounded-full bg-orange-500/10 flex items-center justify-center mb-6 group-hover:bg-orange-500/20 transition-colors">
                                        <item.icon className="w-6 h-6 text-orange-500" />
                                    </div>
                                    <h3 className="text-xl font-bold mb-4">{item.title}</h3>
                                    <p className="text-gray-400 text-sm leading-relaxed">
                                        {item.desc}
                                    </p>
                                </div>
                            </FadeUp>
                        ))}
                    </div>
                </div>
            </section>

            {/* ================= PLATFORM GOVERNANCE STRUCTURE ================= */}
            <section className="py-24 bg-[#0A0A0A] border-y border-white/5">
                <div className="max-w-7xl mx-auto px-6">
                    <FadeUp>
                        <h2 className="text-4xl md:text-5xl font-bold mb-16 text-center">
                            Platform Governance Structure
                        </h2>
                    </FadeUp>

                    <div className="grid md:grid-cols-2 gap-12">
                        <FadeUp>
                            <div className="p-10 rounded-3xl bg-black border border-white/10 relative overflow-hidden h-full">
                                <div className="absolute top-0 right-0 w-32 h-32 bg-orange-500/5 rounded-full blur-3xl" />
                                <h3 className="text-2xl font-bold text-white mb-4">
                                    Kryoss Softech Private Limited
                                </h3>
                                <p className="text-gray-400 mb-6">
                                    Provides technology leadership, platform governance, and
                                    operational oversight.
                                </p>
                                <div className="flex flex-wrap gap-2">
                                    {["Tech Leadership", "Platform Governance", "Ops Oversight"].map(
                                        (tag, i) => (
                                            <span
                                                key={i}
                                                className="px-3 py-1 rounded-full bg-white/5 border border-white/10 text-xs text-gray-300"
                                            >
                                                {tag}
                                            </span>
                                        )
                                    )}
                                </div>
                            </div>
                        </FadeUp>

                        <FadeUp delay={0.2}>
                            <div className="p-10 rounded-3xl bg-black border border-white/10 relative overflow-hidden h-full">
                                <div className="absolute top-0 right-0 w-32 h-32 bg-blue-500/5 rounded-full blur-3xl" />
                                <h3 className="text-2xl font-bold text-white mb-4">
                                    Clink Consultancy Services Private Limited
                                </h3>
                                <p className="text-gray-400 mb-6">
                                    Supports governance across recruitment, consulting, and service
                                    delivery functions.
                                </p>
                                <div className="flex flex-wrap gap-2">
                                    {["Recruitment", "Consulting", "Service Delivery"].map(
                                        (tag, i) => (
                                            <span
                                                key={i}
                                                className="px-3 py-1 rounded-full bg-white/5 border border-white/10 text-xs text-gray-300"
                                            >
                                                {tag}
                                            </span>
                                        )
                                    )}
                                </div>
                            </div>
                        </FadeUp>
                    </div>

                    <FadeUp delay={0.4}>
                        <p className="text-center text-gray-400 mt-12 italic">
                            "This structure ensures legal clarity, operational accountability,
                            and execution discipline."
                        </p>
                    </FadeUp>
                </div>
            </section>

            {/* ================= ETHICAL BUSINESS CONDUCT & TRANSPARENCY ================= */}
            <section className="py-24">
                <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-16">
                    {/* Ethical Business Conduct */}
                    <FadeUp>
                        <h3 className="text-3xl font-bold mb-8 flex items-center gap-3">
                            <Scale className="w-8 h-8 text-orange-500" />
                            Ethical Business Conduct
                        </h3>
                        <div className="space-y-6">
                            {[
                                "Honest representation of capabilities",
                                "Clear communication of scope and limitations",
                                "Ethical partner and client relationships",
                                "Fair treatment of vendors and service partners",
                            ].map((item, i) => (
                                <div
                                    key={i}
                                    className="flex items-start gap-4 p-4 rounded-xl bg-[#0E0F12] border border-white/5 hover:border-orange-500/30 transition-colors"
                                >
                                    <CheckCircle2 className="w-5 h-5 text-orange-500 shrink-0 mt-0.5" />
                                    <p className="text-gray-300">{item}</p>
                                </div>
                            ))}
                        </div>
                        <p className="mt-8 text-red-400 text-sm flex items-center gap-2">
                            <AlertTriangle size={16} />
                            No tolerance for misleading commitments or unethical practices.
                        </p>
                    </FadeUp>

                    {/* Transparency in Operations */}
                    <FadeUp delay={0.2}>
                        <h3 className="text-3xl font-bold mb-8 flex items-center gap-3">
                            <Eye className="w-8 h-8 text-orange-500" />
                            Transparency in Operations
                        </h3>
                        <div className="space-y-6">
                            {[
                                "Documented scopes and approvals",
                                "Structured onboarding and delivery processes",
                                "Clear reporting and performance tracking",
                                "Defined escalation and resolution paths",
                            ].map((item, i) => (
                                <div
                                    key={i}
                                    className="flex items-start gap-4 p-4 rounded-xl bg-[#0E0F12] border border-white/5 hover:border-orange-500/30 transition-colors"
                                >
                                    <CheckCircle2 className="w-5 h-5 text-orange-500 shrink-0 mt-0.5" />
                                    <p className="text-gray-300">{item}</p>
                                </div>
                            ))}
                        </div>
                        <p className="mt-8 text-gray-400 text-sm">
                            All stakeholders operate with visibility and clarity.
                        </p>
                    </FadeUp>
                </div>
            </section>

            {/* ================= PARTNER & VENDOR GOVERNANCE ================= */}
            <section className="py-24 bg-[#0A0A0A] border-y border-white/5">
                <div className="max-w-7xl mx-auto px-6">
                    <div className="grid md:grid-cols-2 gap-12">
                        {/* Partner Ethics */}
                        <FadeUp>
                            <div className="h-full">
                                <h3 className="text-2xl font-bold mb-6 text-white">
                                    Partner Ethics & Responsibility
                                </h3>
                                <p className="text-gray-400 mb-8">
                                    IPP and BPP partners are expected to:
                                </p>
                                <div className="grid gap-4">
                                    {[
                                        "Represent offerings accurately",
                                        "Avoid over-promising or miscommunication",
                                        "Follow platform-defined processes",
                                        "Maintain ethical client interactions",
                                    ].map((item, i) => (
                                        <div
                                            key={i}
                                            className="p-4 bg-black border border-white/10 rounded-lg flex items-center gap-3"
                                        >
                                            <div className="w-2 h-2 rounded-full bg-orange-500" />
                                            <span className="text-gray-300">{item}</span>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </FadeUp>

                        {/* Vendor Governance */}
                        <FadeUp delay={0.2}>
                            <div className="h-full">
                                <h3 className="text-2xl font-bold mb-6 text-white">
                                    Vendor Governance & Fair Practices
                                </h3>
                                <p className="text-gray-400 mb-8">
                                    Zryoss ensures that:
                                </p>
                                <div className="grid gap-4">
                                    {[
                                        "Vendors are selected based on capability",
                                        "SLAs define expectations clearly",
                                        "Quality and timelines are enforced fairly",
                                        "Payments and engagements follow terms",
                                    ].map((item, i) => (
                                        <div
                                            key={i}
                                            className="p-4 bg-black border border-white/10 rounded-lg flex items-center gap-3"
                                        >
                                            <div className="w-2 h-2 rounded-full bg-orange-500" />
                                            <span className="text-gray-300">{item}</span>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </FadeUp>
                    </div>
                </div>
            </section>

            {/* ================= COMPLIANCE & CONFLICT RESOLUTION ================= */}
            <section className="py-24">
                <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-3 gap-8">
                    {/* Compliance */}
                    <FadeUp>
                        <div className="p-8 rounded-2xl bg-[#0E0F12] border border-white/10 h-full">
                            <ShieldCheck className="w-10 h-10 text-orange-500 mb-6" />
                            <h3 className="text-xl font-bold mb-4">Compliance-Aware</h3>
                            <ul className="space-y-4 mb-6">
                                {[
                                    "Applicable business regulations",
                                    "Data protection principles",
                                    "Contractual obligations",
                                ].map((item, i) => (
                                    <li key={i} className="flex items-start gap-3 text-gray-400 text-sm">
                                        <span className="text-orange-500 mt-1">•</span>
                                        {item}
                                    </li>
                                ))}
                            </ul>
                            <p className="text-xs text-gray-500">
                                Maintains compliance discipline through operating entities.
                            </p>
                        </div>
                    </FadeUp>

                    {/* Conflict Resolution */}
                    <FadeUp delay={0.1}>
                        <div className="p-8 rounded-2xl bg-[#0E0F12] border border-white/10 h-full">
                            <Gavel className="w-10 h-10 text-orange-500 mb-6" />
                            <h3 className="text-xl font-bold mb-4">Conflict Resolution</h3>
                            <ul className="space-y-4 mb-6">
                                {[
                                    "Issues logged formally",
                                    "Evidence-based decisions",
                                    "Defined escalation levels",
                                    "Fairness & continuity prioritized",
                                ].map((item, i) => (
                                    <li key={i} className="flex items-start gap-3 text-gray-400 text-sm">
                                        <span className="text-orange-500 mt-1">•</span>
                                        {item}
                                    </li>
                                ))}
                            </ul>
                            <p className="text-xs text-gray-500">
                                Conflicts are resolved through systems, not influence.
                            </p>
                        </div>
                    </FadeUp>

                    {/* Data Integrity */}
                    <FadeUp delay={0.2}>
                        <div className="p-8 rounded-2xl bg-[#0E0F12] border border-white/10 h-full">
                            <Lock className="w-10 h-10 text-orange-500 mb-6" />
                            <h3 className="text-xl font-bold mb-4">Data Integrity</h3>
                            <ul className="space-y-4 mb-6">
                                {[
                                    "Client confidentiality respected",
                                    "Partner data privacy",
                                    "Secure handling of information",
                                ].map((item, i) => (
                                    <li key={i} className="flex items-start gap-3 text-gray-400 text-sm">
                                        <span className="text-orange-500 mt-1">•</span>
                                        {item}
                                    </li>
                                ))}
                            </ul>
                            <p className="text-xs text-gray-500">
                                Access to data is role-based and purpose-driven.
                            </p>
                        </div>
                    </FadeUp>
                </div>
            </section>

            {/* ================= CONTINUOUS REVIEW ================= */}
            <section className="py-24 bg-[#0A0A0A] border-y border-white/5">
                <div className="max-w-4xl mx-auto px-6 text-center">
                    <FadeUp>
                        <RefreshCw className="w-16 h-16 text-orange-500 mx-auto mb-8 animate-spin-slow" />
                        <h2 className="text-3xl md:text-4xl font-bold mb-8">
                            Continuous Governance Review
                        </h2>
                        <div className="grid md:grid-cols-3 gap-8 mb-12">
                            {[
                                "Processes reviewed periodically",
                                "Controls strengthened with scale",
                                "Learnings incorporated into system",
                            ].map((item, i) => (
                                <div key={i} className="p-6 bg-black rounded-xl border border-white/5">
                                    <p className="text-gray-300 font-medium">{item}</p>
                                </div>
                            ))}
                        </div>
                        <p className="text-gray-400">
                            This ensures the platform remains reliable as it grows.
                        </p>
                    </FadeUp>
                </div>
            </section>

            {/* ================= WHAT ETHICS PROTECT & COMMITMENT ================= */}
            <section className="py-24">
                <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-16">
                    <FadeUp>
                        <h3 className="text-2xl font-bold mb-8">What This Framework Protects</h3>
                        <div className="grid grid-cols-2 gap-4">
                            {[
                                "Client Trust",
                                "Partner Reputation",
                                "Platform Credibility",
                                "Long-term Health",
                            ].map((item, i) => (
                                <div
                                    key={i}
                                    className="p-6 rounded-xl bg-[#0E0F12] border border-white/10 text-center hover:bg-[#15171B] transition-colors"
                                >
                                    <p className="text-orange-400 font-semibold">{item}</p>
                                </div>
                            ))}
                        </div>
                        <p className="mt-8 text-gray-400 italic">
                            "Ethics are not restrictive. They are enablers of sustainable
                            growth."
                        </p>
                    </FadeUp>

                    <FadeUp delay={0.2}>
                        <div className="p-8 rounded-3xl bg-gradient-to-br from-orange-500/10 to-transparent border border-orange-500/20 h-full flex flex-col justify-center">
                            <h3 className="text-2xl font-bold mb-6 text-white">
                                Our Commitment
                            </h3>
                            <ul className="space-y-4 mb-8">
                                {[
                                    "Acting responsibly",
                                    "Operating transparently",
                                    "Governing execution fairly",
                                    "Protecting the ecosystem",
                                ].map((item, i) => (
                                    <li key={i} className="flex items-center gap-3">
                                        <CheckCircle2 className="w-5 h-5 text-orange-500" />
                                        <span className="text-gray-200">{item}</span>
                                    </li>
                                ))}
                            </ul>
                            <p className="text-sm text-gray-400">
                                Every decision is made with the long-term interest of the platform
                                and its partners in mind.
                            </p>
                        </div>
                    </FadeUp>
                </div>
            </section>

            {/* ================= FINAL THOUGHT ================= */}
            <section className="py-24 text-center relative overflow-hidden">
                <div className="absolute inset-0 bg-[#050505]" />
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(255,138,0,0.05),transparent_60%)]" />

                <div className="relative z-10 max-w-3xl mx-auto px-6">
                    <FadeUp>
                        <h2 className="text-3xl md:text-5xl font-bold mb-8 leading-tight">
                            Growth without ethics creates risk. <br />
                            <span className="text-gray-500">Scale without governance creates failure.</span>
                        </h2>
                        <p className="text-xl text-gray-300 mb-12">
                            Zryoss is built to grow responsibly, transparently, and sustainably.
                        </p>
                        <div className="inline-block px-8 py-4 border border-orange-500/30 rounded-full bg-orange-500/5">
                            <p className="text-orange-400 font-semibold tracking-wider uppercase text-sm">
                                Your Brand. Our Engine. Built on Trust.
                            </p>
                        </div>
                    </FadeUp>
                </div>
            </section>
        </main>
    );
}
