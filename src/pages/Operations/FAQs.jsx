import React, { useState } from "react";
import {
    HelpCircle,
    Plus,
    Minus,
    Search,
    MessageCircle,
    ShieldCheck,
    ArrowRight,
    ChevronDown
} from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

export default function FAQs() {
    const [openIndex, setOpenIndex] = useState(0);
    const [searchQuery, setSearchQuery] = useState("");

    const faqs = [
        {
            question: "Who manages execution and delivery at Zryoss?",
            answer: "All execution and delivery are centrally managed by Zryoss through its operations framework. IPP or BPP do not manage teams, coordinate vendors, or handle delivery execution. Zryoss owns execution discipline and delivery outcomes.",
        },
        {
            question: "Do IPP or BPP need to manage vendors?",
            answer: "No. Vendor management, coordination, and SLA enforcement are fully handled by Zryoss. Partners focus on Business development, Client relationships, and Growth strategy. Zryoss manages Vendors, Timelines, Quality, and Escalations.",
        },
        {
            question: "How is delivery quality ensured?",
            answer: "Quality is enforced through a multi-layer Quality Assurance Framework, including: Pre-execution validation, In-execution quality checks, Pre-delivery verification, and Post-delivery review. No delivery is released without quality approval.",
        },
        {
            question: "What happens if a vendor delays or underperforms?",
            answer: "If a vendor issue occurs: The issue is logged centrally, SLA terms are enforced, Corrective action is applied, and Alternate execution paths are activated if required. Zryoss ensures delivery continuity, regardless of vendor issues.",
        },
        {
            question: "Who is the point of contact for IPP, BPP, or clients?",
            answer: "Each engagement is assigned a Dedicated Account Manager. The Account Manager coordinates execution, provides updates, handles escalations, and ensures delivery alignment. You never need to chase multiple teams.",
        },
        {
            question: "How are timelines committed and tracked?",
            answer: "Timelines are defined after scope validation, locked before execution begins, tracked through centralized reporting, and actively monitored for risks. Unrealistic commitments are not approved.",
        },
        {
            question: "How is reporting shared?",
            answer: "Zryoss provides structured reporting on execution progress, delivery timelines, quality performance, and account health. Reports are transparent, data-driven, and relevant to the stakeholder.",
        },
        {
            question: "What happens if requirements change mid-execution?",
            answer: "Any change request is reviewed for feasibility, impacts scope, cost, and timelines, requires formal approval, and is executed only after alignment. No changes are implemented informally.",
        },
        {
            question: "How are escalations handled?",
            answer: "Escalations follow a defined escalation framework: 1. Issue is logged, 2. Ownership is assigned, 3. Resolution timeline is set, 4. Leadership intervention is triggered if needed. Escalations are system-managed, not personal.",
        },
        {
            question: "Does Zryoss support multiple verticals simultaneously?",
            answer: "Yes. Zryoss is designed to operate across multiple business verticals simultaneously while maintaining centralized control, consistent quality, and execution visibility. Only execution expertise changes—the operating system remains the same.",
        },
        {
            question: "What level of operational visibility do partners get?",
            answer: "IPP and BPP receive visibility into execution status, delivery progress, issues and resolutions, and account performance. Visibility is provided without operational burden.",
        },
        {
            question: "How does Zryoss ensure continuity if people change?",
            answer: "Zryoss operations are process-driven, documented, and system-governed. Execution does not depend on individuals. The system ensures continuity and stability.",
        },
        {
            question: "Is Zryoss suitable for long-term operations?",
            answer: "Yes. Zryoss operations are designed for long-term partnerships, scalable execution, and multi-year business growth. It is not built for short-term or ad-hoc execution.",
        },
        {
            question: "How does operations protect brand reputation?",
            answer: "By ensuring controlled execution, quality enforcement, professional delivery, and predictable timelines. Operations exist to protect partner and client brands.",
        },
        {
            question: "What makes Zryoss operations different from traditional service models?",
            answer: "Traditional models rely on People, Vendors, and Ad-hoc coordination. Zryoss relies on Systems, Governance, and Centralized execution. That is the core difference.",
        },
    ];

    const filteredFaqs = faqs.filter(f =>
        f.question.toLowerCase().includes(searchQuery.toLowerCase()) ||
        f.answer.toLowerCase().includes(searchQuery.toLowerCase())
    );

    return (
        <div className="min-h-screen bg-[#121212] text-white selection:bg-[#FF6A00]/30 selection:text-white">

            {/* 
        =============================================
        HERO SECTION (Matches Vendor Coordination)
        =============================================
      */}
            <section
                className="relative overflow-hidden min-h-[60vh] flex items-center"
                style={{
                    backgroundImage:
                        "url(https://images.unsplash.com/photo-1639322537228-f710d846310a?q=80&w=2232&auto=format&fit=crop)",
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                }}
            >
                {/* Overlays */}
                <div className="absolute inset-0 bg-[#0b0b0b]/90" />
                <div className="absolute inset-0 bg-gradient-to-b from-[#121212]/30 via-[#121212]/80 to-[#121212]" />

                {/* Glow Effects */}
                <div className="absolute -top-52 left-1/2 -translate-x-1/2 w-[980px] h-[980px] rounded-full bg-[#FF6A00]/10 blur-[120px]" />
                <div className="absolute top-[20%] right-[-10%] w-[500px] h-[500px] rounded-full bg-blue-500/5 blur-[100px]" />

                {/* Brand Pattern Overlay */}
                <div className="absolute inset-0 opacity-[0.06] pointer-events-none">
                    <svg
                        viewBox="0 0 1200 600"
                        className="w-full h-full"
                        xmlns="http://www.w3.org/2000/svg"
                    >
                        <g fill="none" stroke="#FF6A00" strokeWidth="1">
                            <path d="M0 0 L1200 600" opacity="0.5" />
                            <path d="M1200 0 L0 600" opacity="0.5" />
                            <circle cx="600" cy="300" r="150" opacity="0.3" />
                            <circle cx="600" cy="300" r="250" opacity="0.2" />
                        </g>
                    </svg>
                </div>

                <div className="relative max-w-7xl mx-auto px-6 w-full py-20 text-center">
                    <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10 text-sm text-gray-200">
                        <span className="w-2 h-2 rounded-full bg-[#FF6A00]" />
                        Operations · Help & Clarity
                    </div>

                    <h1 className="mt-8 text-4xl sm:text-5xl md:text-6xl font-extrabold leading-tight tracking-tight">
                        Operations <span className="text-[#FF6A00]">FAQ</span>s
                    </h1>

                    <p className="mt-6 text-gray-200 leading-relaxed text-lg sm:text-xl max-w-2xl mx-auto text-gray-300">
                        Clear answers about how Zryoss operations work. execution designed to remove confusion, reduce risk, and ensure predictable outcomes.
                    </p>

                    {/* Search Bar */}
                    <div className="mt-10 max-w-xl mx-auto relative group">
                        <div className="absolute inset-0 bg-[#FF6A00]/20 blur-xl opacity-0 group-hover:opacity-100 transition duration-500 rounded-full" />
                        <div className="relative flex items-center bg-[#1E1E1E] border border-white/10 rounded-full px-6 py-4 shadow-2xl focus-within:border-[#FF6A00]/50 transition-colors">
                            <Search className="w-5 h-5 text-gray-400 mr-4" />
                            <input
                                type="text"
                                placeholder="Search questions about operations..."
                                className="bg-transparent border-none outline-none text-white w-full placeholder:text-gray-500"
                                value={searchQuery}
                                onChange={(e) => setSearchQuery(e.target.value)}
                            />
                        </div>
                    </div>
                </div>
            </section>

            {/* 
        =============================================
        FAQ CONTENT SECTION
        =============================================
      */}
            <section className="relative max-w-5xl mx-auto px-6 py-20 z-10">

                <div className="grid gap-4">
                    {filteredFaqs.map((faq, index) => {
                        const isOpen = openIndex === index;
                        return (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 10 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: index * 0.05 }}
                                className={`group rounded-2xl border transition-all duration-300 ${isOpen
                                    ? "bg-[#1E1E1E] border-[#FF6A00]/30 shadow-[0_0_30px_rgba(255,106,0,0.05)]"
                                    : "bg-[#121212] border-white/10 hover:border-[#FF6A00]/20 hover:bg-[#151515]"
                                    }`}
                            >
                                <button
                                    onClick={() => setOpenIndex(isOpen ? -1 : index)}
                                    className="w-full text-left px-6 py-5 flex items-start justify-between gap-4"
                                >
                                    <div className="flex gap-4">
                                        <span className={`text-sm font-mono mt-1 ${isOpen ? "text-[#FF6A00]" : "text-gray-500"}`}>
                                            {String(index + 1).padStart(2, '0')}
                                        </span>
                                        <h3 className={`text-lg font-semibold transition-colors ${isOpen ? "text-white" : "text-gray-300 group-hover:text-white"}`}>
                                            {faq.question}
                                        </h3>
                                    </div>
                                    <div className={`shrink-0 mt-1 transition-transform duration-300 ${isOpen ? "rotate-180" : ""}`}>
                                        <ChevronDown className={`w-5 h-5 ${isOpen ? "text-[#FF6A00]" : "text-gray-500"}`} />
                                    </div>
                                </button>

                                <AnimatePresence>
                                    {isOpen && (
                                        <motion.div
                                            initial={{ height: 0, opacity: 0 }}
                                            animate={{ height: "auto", opacity: 1 }}
                                            exit={{ height: 0, opacity: 0 }}
                                            className="overflow-hidden"
                                        >
                                            <div className="px-6 pb-6 pt-0 pl-16">
                                                <div className="h-px w-full bg-white/5 mb-4" />
                                                <p className="text-gray-300 leading-relaxed text-[16px]">
                                                    {faq.answer}
                                                </p>
                                            </div>
                                        </motion.div>
                                    )}
                                </AnimatePresence>
                            </motion.div>
                        );
                    })}
                </div>

                {filteredFaqs.length === 0 && (
                    <div className="text-center py-20">
                        <div className="inline-flex justify-center items-center w-16 h-16 rounded-full bg-white/5 mb-4">
                            <Search className="w-6 h-6 text-gray-500" />
                        </div>
                        <p className="text-gray-400">No questions found matching "{searchQuery}"</p>
                        <button onClick={() => setSearchQuery("")} className="mt-4 text-[#FF6A00] hover:underline">
                            Clear search
                        </button>
                    </div>
                )}

            </section>

            {/* 
        =============================================
        FINAL NOTE SECTION
        =============================================
      */}
            <section className="border-t border-white/10 bg-[#151515]">
                <div className="relative max-w-7xl mx-auto px-6 py-24 overflow-hidden">
                    {/* Background Grid */}
                    <div className="absolute inset-0 opacity-[0.04]">
                        <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
                            <defs>
                                <pattern id="smallGrid" width="20" height="20" patternUnits="userSpaceOnUse">
                                    <path d="M 20 0 L 0 0 0 20" fill="none" stroke="white" strokeWidth="0.5" />
                                </pattern>
                            </defs>
                            <rect width="100%" height="100%" fill="url(#smallGrid)" />
                        </svg>
                    </div>

                    <div className="relative z-10 grid lg:grid-cols-2 gap-12 items-center">
                        <div>
                            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-[#FF6A00]/10 border border-[#FF6A00]/20 text-xs font-semibold text-[#FF6A00] uppercase tracking-wider mb-6">
                                Final Note
                            </div>
                            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
                                Operations are the <br />
                                <span className="text-[#FF6A00]">Foundation of the Ecosystem.</span>
                            </h2>
                            <p className="text-gray-400 text-lg leading-relaxed mb-8">
                                Operations are not background activities at Zryoss. You focus on business growth. Zryoss ensures execution clarity, quality, and control.
                            </p>
                            <div className="flex flex-col sm:flex-row gap-4">
                                <button className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-xl bg-[#FF6A00] text-black font-bold hover:bg-[#FF6A00]/90 transition shadow-[0_0_20px_rgba(255,106,0,0.3)]">
                                    Partner with Zryoss <ArrowRight className="w-5 h-5" />
                                </button>
                                <button className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-xl border border-white/10 bg-white/5 hover:bg-white/10 transition font-semibold text-white">
                                    Explore Models
                                </button>
                            </div>
                        </div>

                        <div className="relative">
                            <div className="absolute inset-0 bg-[#FF6A00]/20 blur-[80px] rounded-full" />
                            <div className="relative rounded-3xl border border-white/10 bg-[#1E1E1E]/80 backdrop-blur-xl p-8 md:p-10">
                                <div className="flex items-start gap-4 mb-6">
                                    <div className="p-3 rounded-xl bg-orange-500/20 text-[#FF6A00]">
                                        <ShieldCheck className="w-8 h-8" />
                                    </div>
                                    <div>
                                        <h3 className="text-xl font-bold text-white">Execution Guarantee</h3>
                                        <p className="text-sm text-gray-400 mt-1">System-governed reliability</p>
                                    </div>
                                </div>

                                <div className="space-y-4">
                                    {[
                                        "Zero ambiguity in delivery",
                                        "Centralized conflict resolution",
                                        "Automated milestone tracking",
                                        "End-to-end audit trails"
                                    ].map((item, i) => (
                                        <div key={i} className="flex items-center gap-3 p-3 rounded-lg bg-white/5 border border-white/5">
                                            <div className="w-1.5 h-1.5 rounded-full bg-[#FF6A00]" />
                                            <span className="text-gray-300 font-medium">{item}</span>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

        </div>
    );
}
