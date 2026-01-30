import FadeUp from "../../../components/animations/FadeUp";
import { useNavigate } from "react-router-dom";
import React, { useEffect } from "react";
import {
    Hammer,
    Ruler,
    HardHat,
    Building2,
    Workflow,
    Network,
    Briefcase,
    Stamp,
    ArrowRight,
    Users,
    Key,
    DraftingCompass,
    PaintBucket,
    Truck,
    ClipboardCheck,
    Sparkles
} from "lucide-react";

const KryossInteriors = () => {
    const navigate = useNavigate();

    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <div className="min-h-screen bg-[#050505] text-white selection:bg-orange-500/30 font-sans">

            {/* Hero Section */}
            <section className="relative bg-[#050505] min-h-screen flex items-center py-20 md:py-32 overflow-hidden border-b border-white/5">
                {/* Background Elements - Matching Overview/TechHeroSection */}
                <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
                    <div className="absolute -top-[20%] right-[10%] w-[50%] h-[50%] bg-orange-500/10 rounded-full blur-[140px]" />
                    <div className="absolute bottom-[0%] -left-[10%] w-[40%] h-[60%] bg-blue-500/10 rounded-full blur-[140px]" />
                </div>

                <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
                        {/* Left Content - Using FadeUp component */}
                        <FadeUp>
                            {/* Badge */}
                            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-orange-500/30 bg-orange-500/10 backdrop-blur-sm mb-6">
                                <Sparkles size={14} className="text-orange-500" />
                                <span className="text-xs uppercase tracking-[0.45em] text-orange-500 font-bold">
                                    Interior & Real Estate Execution
                                </span>
                            </div>

                            {/* H1 */}
                            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold leading-[1.15] tracking-tight mb-6">
                                Kryoss<span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-orange-600"> Interiors</span>
                            </h1>

                            {/* Paragraph */}
                            <p className="text-xl text-gray-400 leading-relaxed font-light mb-10">
                                Kryoss Interiors is the dedicated execution engine responsible for executing all interior, workspace, commercial, and real-estate–linked service requirements brought into the Zryoss Ecosystem.
                            </p>

                            {/* CTA */}
                            <div className="flex flex-wrap gap-4 mb-6">
                                <button
                                    onClick={() => navigate('/apply')}
                                    className="rounded-xl bg-gradient-to-r from-orange-500 to-orange-600 px-6 py-3 font-semibold text-white shadow-lg shadow-orange-500/30 hover:bg-orange-600 hover:shadow-orange-500/60 transition"
                                >
                                    Partner with Zryoss
                                </button>
                                {/* <button className="rounded-xl border border-white/10 px-6 py-3 font-semibold text-white hover:border-orange-500/50 hover:text-orange-400 transition inline-flex items-center gap-2">
                                    View Solutions <ArrowRight size={18} />
                                </button> */}
                            </div>

                            {/* Small text */}
                            <p className="mt-6 text-xs text-white/40 tracking-wide font-light">
                                Projects Delivered: 300+ • Sq Ft Managed: 1M+
                            </p>
                        </FadeUp>

                        {/* Right Visual - Using FadeUp component */}
                        <FadeUp delay={0.2}>
                            <div className="relative">
                                <div className="absolute inset-0 rounded-3xl bg-orange-500/10 blur-2xl -z-10" />
                                <div className="rounded-3xl border border-white/10 bg-white/5 p-2">
                                    <img
                                        src="/softech interior.jpg"
                                        alt="Kryoss Interiors Execution"
                                        className="w-full h-[260px] md:h-[420px] object-cover rounded-2xl transform hover:scale-105 transition-transform duration-700"
                                    />
                                </div>
                            </div>
                        </FadeUp>
                    </div>
                </div>
            </section>

            {/* Role Section */}
            <section className="py-24 bg-[#0a0a0a]">
                <div className="max-w-7xl mx-auto px-6">
                    <div className="flex flex-col md:flex-row gap-16 items-center">
                        <div className="md:w-1/2">
                            <h2 className="text-3xl md:text-4xl font-bold mb-6">Role of Kryoss Interiors <br /> in the Ecosystem</h2>
                            <p className="text-lg text-gray-400 mb-8 leading-relaxed">
                                Kryoss Interiors functions as the domain-specific execution engine for interior and infrastructure-related services. Its role is to ensure all projects are professionally planned and executed.
                            </p>

                            <div className="grid grid-cols-1 gap-4">
                                {[
                                    "Interior projects are professionally planned",
                                    "Execution is vendor-controlled and timeline-driven",
                                    "Quality, material, and design standards are maintained",
                                    "IPPs and BPPs never manage contractors directly"
                                ].map((item, i) => (
                                    <div key={i} className="flex items-center gap-3 p-3 bg-white/5 rounded-xl border border-white/5">
                                        <Stamp className="text-orange-500 w-5 h-5 shrink-0" />
                                        <span className="text-gray-200 text-sm font-medium">{item}</span>
                                    </div>
                                ))}
                            </div>

                            <p className="mt-8 text-sm text-gray-500 flex items-center gap-2">
                                <Workflow size={16} className="text-white" />
                                ZRYOSS governs the system. Kryoss Interiors executes physical delivery.
                            </p>
                        </div>
                        <div className="md:w-1/2 w-full">
                            <div className="p-8 bg-[#0f0f0f] rounded-3xl border border-white/5 h-full flex flex-col justify-center relative overflow-hidden">
                                <Ruler className="text-orange-900/20 absolute -right-10 -bottom-10 w-64 h-64" />
                                <h3 className="text-2xl font-bold text-white mb-6 z-10">What Kryoss Interiors Executes</h3>
                                <div className="space-y-6 z-10">
                                    <div>
                                        <h4 className="text-orange-400 font-bold mb-3 text-sm uppercase tracking-wider">Interior Design & Fit-outs</h4>
                                        <ul className="space-y-2">
                                            {[
                                                "Residential interior design & execution",
                                                "Commercial and office interiors",
                                                "Workspace planning and fit-outs",
                                                "Turnkey interior solutions"
                                            ].map((item, i) => (
                                                <li key={i} className="flex items-start gap-2 text-sm text-gray-300">
                                                    <span className="mt-1.5 w-1 h-1 rounded-full bg-orange-500 shrink-0"></span>
                                                    {item}
                                                </li>
                                            ))}
                                        </ul>
                                    </div>
                                    <div>
                                        <h4 className="text-blue-400 font-bold mb-3 text-sm uppercase tracking-wider">Real Estate Support</h4>
                                        <ul className="space-y-2">
                                            {[
                                                "Retail, clinic, and showroom interiors",
                                                "Real estate support services (execution-linked)",
                                                "Infrastructure maintenance"
                                            ].map((item, i) => (
                                                <li key={i} className="flex items-start gap-2 text-sm text-gray-300">
                                                    <span className="mt-1.5 w-1 h-1 rounded-full bg-blue-500 shrink-0"></span>
                                                    {item}
                                                </li>
                                            ))}
                                        </ul>
                                    </div>
                                </div>
                                <p className="mt-8 text-xs text-gray-500 z-10 border-t border-white/5 pt-4">All work follows ZRYOSS operating standards and delivery controls.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Routing Process */}
            <section className="py-24 bg-[#050505] w-full">
                <div className="max-w-7xl mx-auto px-6 w-full">
                    <h2 className="text-3xl font-bold text-center mb-16">How Work Reaches Kryoss Interiors</h2>

                    <div className="relative w-full">
                        {/* Line */}
                        <div className="hidden md:block absolute top-[50%] left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-orange-500/50 to-transparent -translate-y-1/2 z-0"></div>

                        <div className="grid grid-cols-1 md:grid-cols-7 gap-4 relative z-10 w-full">
                            {[
                                { step: "1", title: "Acquisition", desc: "IPP/BPP gets client" },
                                { step: "2", title: "Validation", desc: "ZRYOSS checks scope" },
                                { step: "3", title: "Routing", desc: "Routed to Kryoss" },
                                { step: "4", title: "Structuring", desc: "Design & Planning" },
                                { step: "5", title: "Assignment", desc: "Vendors Assigned" },
                                { step: "6", title: "Monitoring", desc: "Quality & Cost" },
                                { step: "7", title: "Delivery", desc: "Handover Complete" }
                            ].map((item, i) => (
                                <div key={i} className="flex flex-col items-center text-center group">
                                    <div className="w-14 h-14 rounded-full bg-[#111] border border-white/20 flex items-center justify-center text-lg font-bold text-white mb-4 shadow-lg relative overflow-hidden transition-all group-hover:border-orange-500 group-hover:scale-110">
                                        <span className="relative z-10">{item.step}</span>
                                        <div className="absolute inset-0 bg-orange-500/20 opacity-0 group-hover:opacity-100 transition-opacity"></div>
                                    </div>
                                    <h3 className="text-xs font-bold text-white mb-1">{item.title}</h3>
                                    <p className="text-xs text-gray-500 max-w-[100px]">{item.desc}</p>
                                </div>
                            ))}
                        </div>
                    </div>

                    <div className="mt-12 text-center">
                        <p className="text-gray-400 text-sm">IPP or BPP never directly manages contractors or vendors.</p>
                    </div>
                </div>
            </section>

            {/* Vendor & Contractor Management */}
            <section className="py-24 bg-[#080808]">
                <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-16">

                    {/* Vendor Management */}
                    <div>
                        <h3 className="text-2xl font-bold mb-6 flex items-center gap-3">
                            <Truck className="text-orange-500" />
                            Vendor & Contractor Management
                        </h3>
                        <div className="bg-[#0a0a0a] p-8 rounded-3xl border border-white/10 mb-8 h-full">
                            <p className="text-gray-400 mb-6">Kryoss Interiors manages specific execution through specialized partners.</p>
                            <div className="space-y-4">
                                <div className="flex items-center gap-4 p-4 bg-[#111] rounded-xl border border-white/5">
                                    <div className="bg-orange-500/10 p-2 rounded-lg text-orange-500"><Hammer size={20} /></div>
                                    <div>
                                        <h4 className="font-bold text-white text-sm">Interior Contractors</h4>
                                        <p className="text-xs text-gray-500">Supervised onsite execution teams.</p>
                                    </div>
                                </div>
                                <div className="flex items-center gap-4 p-4 bg-[#111] rounded-xl border border-white/5">
                                    <div className="bg-orange-500/10 p-2 rounded-lg text-orange-500"><PaintBucket size={20} /></div>
                                    <div>
                                        <h4 className="font-bold text-white text-sm">Material Suppliers</h4>
                                        <p className="text-xs text-gray-500">Quality controlled sourcing.</p>
                                    </div>
                                </div>
                                <div className="flex items-center gap-4 p-4 bg-[#111] rounded-xl border border-white/5">
                                    <div className="bg-orange-500/10 p-2 rounded-lg text-orange-500"><DraftingCompass size={20} /></div>
                                    <div>
                                        <h4 className="font-bold text-white text-sm">Designers & Site Teams</h4>
                                        <p className="text-xs text-gray-500">Professional planning & oversight.</p>
                                    </div>
                                </div>
                            </div>
                            <p className="mt-6 text-sm text-orange-400 font-medium">All vendors operate through the ZRYOSS Operating System with defined SLAs.</p>
                        </div>
                    </div>

                    {/* Quality & Cost Control */}
                    <div>
                        <h3 className="text-2xl font-bold mb-6 flex items-center gap-3">
                            <ClipboardCheck className="text-orange-500" />
                            Quality, Cost & Timeline Control
                        </h3>
                        <div className="bg-[#0a0a0a] p-8 rounded-3xl border border-white/10 h-full">
                            <div className="grid grid-cols-1 gap-6">
                                {[
                                    { title: "Design Approval", desc: "Structured processes before execution." },
                                    { title: "Quality Checks", desc: "Material and workmanship verification." },
                                    { title: "Budget Tracking", desc: "Cost control and transparency." },
                                    { title: "Milestone Monitoring", desc: "Timeline adherence tracking." }
                                ].map((item, i) => (
                                    <div key={i} className="flex justify-between items-center border-b border-white/5 pb-4 last:border-0 last:pb-0">
                                        <h4 className="font-bold text-gray-200">{item.title}</h4>
                                        <span className="text-sm text-gray-500">{item.desc}</span>
                                    </div>
                                ))}
                            </div>
                            <div className="mt-8 p-4 bg-orange-900/10 border border-orange-500/20 rounded-xl text-center">
                                <p className="text-orange-400 text-sm font-medium">Physical execution is managed with the same discipline as digital services.</p>
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
                                    <p className="text-gray-400">Owns the client relationship and brings the opportunity.</p>
                                </div>
                                <div className="group hover:bg-white/5 p-4 rounded-xl transition-colors">
                                    <h4 className="text-orange-400 font-bold text-sm uppercase tracking-wide mb-1">Kryoss Interiors</h4>
                                    <p className="text-gray-400">Manages design, vendors, and physical execution.</p>
                                </div>
                                <div className="group hover:bg-white/5 p-4 rounded-xl transition-colors">
                                    <h4 className="text-white/60 font-bold text-sm uppercase tracking-wide mb-1">ZRYOSS</h4>
                                    <p className="text-gray-400">Handles coordination, governance, and reporting.</p>
                                </div>
                            </div>
                        </div>

                        {/* Scalability */}
                        <div className="border-l-4 border-orange-500 pl-8">
                            <h3 className="text-2xl font-bold mb-6 text-white">Scalability Across Projects</h3>
                            <p className="text-gray-400 mb-6">Kryoss Interiors is designed to support:</p>
                            <ul className="space-y-3 mb-6 block">
                                {["Multiple projects simultaneously", "Different property types and scales", "Long-term infrastructure engagements", "Expansion across locations"].map((item, i) => (
                                    <li key={i} className="flex gap-2 text-gray-300"><Building2 size={18} className="text-orange-500" /> {item}</li>
                                ))}
                            </ul>
                            <p className="text-sm text-gray-500 italic">As ecosystem demand grows, execution scales without compromising standards.</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Why Separate Brand */}
            <section className="py-24 bg-[#050505] relative overflow-hidden">
                <div className="max-w-4xl mx-auto px-6 text-center relative z-10">
                    <h2 className="text-3xl font-bold mb-8">Why Kryoss Interiors Exists as a Separate Brand</h2>

                    <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-12">
                        <div className="p-4 bg-white/5 rounded-xl border border-white/5"><h4 className="font-bold text-white text-sm">Strong Coordination</h4></div>
                        <div className="p-4 bg-white/5 rounded-xl border border-white/5"><h4 className="font-bold text-white text-sm">Vendor Control</h4></div>
                        <div className="p-4 bg-white/5 rounded-xl border border-white/5"><h4 className="font-bold text-white text-sm">Budget Discipline</h4></div>
                        <div className="p-4 bg-white/5 rounded-xl border border-white/5"><h4 className="font-bold text-white text-sm">Timeline Accountability</h4></div>
                    </div>

                    <div className="p-8 rounded-3xl bg-gradient-to-r from-gray-900 to-black border border-white/10 shadow-2xl">
                        <h3 className="text-2xl font-bold text-white mb-4">One Ecosystem. One Standard.</h3>
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
                                <span className="block text-gray-500 text-xs uppercase tracking-widest mb-1">Kryoss Interiors</span>
                                <span className="text-xl font-bold text-orange-500">Delivers Execution</span>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-orange-600/5 rounded-full blur-[120px] pointer-events-none"></div>
            </section>

        </div>
    );
};

export default KryossInteriors;
