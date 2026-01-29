import React from 'react';
import { motion } from 'framer-motion';
import {
    GraduationCap,
    Target,
    BarChart3,
    RefreshCw,
    ShieldCheck,
    Cpu,
    Megaphone,
    Users,
    BookOpen,
    Stethoscope,
    Building2,
    Scale,
    CheckCircle2,
    XCircle,
    ArrowRight
} from 'lucide-react';
import FadeUp from '../../components/animations/FadeUp';
import HeroContact from '../Home/HeroContact';

const trainingLayers = [
    {
        icon: <ShieldCheck className="w-8 h-8" />,
        title: "Platform & System Training",
        subtitle: "Foundation for All Partners",
        items: [
            "How Zryoss works end-to-end",
            "IPP & BPP roles and boundaries",
            "Sales vs execution responsibility",
            "Demo handling process",
            "Account management & revenue flow"
        ],
        purpose: "Ensure everyone understands the system before selling."
    },
    {
        icon: <Cpu className="w-8 h-8" />,
        title: "Vertical-Wise Product Training",
        subtitle: "Deep Dive into Services",
        items: [
            "IT & Software (Kryoss Softech)",
            "Digital Marketing (Adkryoss)",
            "HR & Recruitment (Clink HR)",
            "Education & Admission (Edulinkers)",
            "Healthcare MedTech (Medikryoss)",
            "Interior & Infra (Kryoss Interiors)",
            "Professional Services (Vyombiz)"
        ],
        purpose: "Learn 'Main is product ko kisko aur kaise sell kar sakta hoon.'"
    },
    {
        icon: <Target className="w-8 h-8" />,
        title: "Sales & Opportunity Training",
        subtitle: "Sell Without Over-Promising",
        items: [
            "Identifying real clients",
            "Lead qualification & questions",
            "What NOT to promise",
            "Requesting demo support",
            "Closing with system backup"
        ],
        purpose: "Convert opportunities with confidence and accuracy."
    },
    {
        icon: <RefreshCw className="w-8 h-8" />,
        title: "Updates & Certifications",
        subtitle: "Continuous Enablement",
        items: [
            "New product & university launches",
            "Price & offering updates",
            "Policy & process changes",
            "Knowledge refresh sessions",
            "Internal certifications"
        ],
        purpose: "Stay updated, aligned, and market-ready."
    }
];

const verticals = [
    {
        title: "IT & Software",
        brand: "Kryoss Softech",
        icon: <Cpu />,
        color: "blue",
        desc: "SaaS solutions, custom software, ERP/CRM, and high-end IT services.",
        points: ["What the product does", "Ideal client profiles", "Business benefits", "Indicative revenue"]
    },
    {
        title: "Digital Marketing",
        brand: "Adkryoss",
        icon: <Megaphone />,
        color: "orange",
        desc: "SEO, performance marketing, and branding services for startups to enterprises.",
        points: ["Lead gen packages", "Branding offerings", "Retainer vs Project models", "Upsell strategies"]
    },
    {
        title: "HR & Recruitment",
        brand: "Clink HR",
        icon: <Users />,
        color: "green",
        desc: "IT & Non-IT staffing, corporate hiring, and executive search services.",
        points: ["How to approach companies", "Hiring pain points", "Fee structures", "Delivery workflows"]
    },
    {
        title: "Education & Admission",
        brand: "Clink Admission / Edulinkers",
        icon: <GraduationCap />,
        color: "purple",
        desc: "Domestic and international university admissions and EdTech consulting.",
        points: ["University tie-ups", "Eligibility basics", "Admission process flow", "Student counselling tips"]
    },
    {
        title: "Healthcare",
        brand: "Medikryoss",
        icon: <Stethoscope />,
        color: "red",
        desc: "Hospital software, Pharma ERP, and specialized medical SaaS products.",
        points: ["Clinics & Labs approach", "Product benefits", "Compliance awareness", "Sales guidance"]
    },
    {
        title: "Interior & Infrastructure",
        brand: "Kryoss Interiors",
        icon: <Building2 />,
        color: "yellow",
        desc: "Commercial and residential interior design and execution services.",
        points: ["Qualification questions", "Project estimation logic", "Backend execution scope", "Client handling"]
    },
    {
        title: "Professional Services",
        brand: "Vyombiz",
        icon: <Scale />,
        color: "cyan",
        desc: "Company registration, legal compliance, and CA/CS professional services.",
        points: ["Ideal customer segments", "Typical service needs", "Recurring opportunities", "Market positioning"]
    }
];

export default function TrainingHub() {
    return (
        <div className="bg-[#050505] text-white min-h-screen">
            {/* Hero Section */}
            <section className="relative overflow-hidden min-h-screen flex items-center pt-20 pb-16">
                {/* Background Effects */}
                <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
                    <div className="absolute top-[-10%] right-[-5%] w-[600px] h-[600px] bg-orange-600/10 rounded-full blur-[120px]" />
                    <div className="absolute bottom-[10%] left-[-10%] w-[400px] h-[400px] bg-purple-600/5 rounded-full blur-[100px]" />
                </div>

                <div className="max-w-7xl mx-auto px-6 relative z-10 w-full">
                    <div className="grid lg:grid-cols-2 gap-12 items-center">
                        {/* Left Column: Content */}
                        <div>
                            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10 text-sm text-gray-200 mb-6">
                                <span className="w-2 h-2 rounded-full bg-[#FF6A00]" />
                                Knowledge Powers Execution
                            </div>

                            <h1 className="text-4xl sm:text-5xl font-extrabold leading-tight mb-6">
                                Training & <span className="text-orange-500 italic">Enablement</span> Hub
                            </h1>

                            <p className="text-gray-200 leading-relaxed text-lg mb-10">
                                Practical training for <span className="text-white font-medium italic">real</span> business execution.
                                Move beyond theory into market-ready readiness.
                            </p>
                        </div>

                        {/* Right Column: Image */}
                        <div className="relative hidden lg:block">
                            <div className="absolute inset-0 bg-orange-500/20 blur-[100px] rounded-full" />
                            <img
                                src="/Resources_pages_images/Training & Enablement Hub.png"
                                alt="Training & Enablement Hub"
                                className="relative rounded-3xl shadow-2xl border border-white/10 transform hover:scale-[1.02] transition-transform duration-500 object-cover w-full h-auto aspect-[4/3]"
                            />
                        </div>
                    </div>
                </div>
            </section>

            {/* Critical Gap Section */}
            <section className="py-32 relative">
                <div className="max-w-7xl mx-auto px-6">
                    <div className="grid lg:grid-cols-2 gap-20 items-center">
                        <FadeUp>
                            <h2 className="text-4xl md:text-5xl font-bold mb-8 leading-tight">
                                Why Training Is <span className="text-orange-500">Critical</span> in the Zryoss System
                            </h2>
                            <p className="text-xl text-gray-400 font-light mb-12">
                                Most partners fail in sales not because they lack effort or confidence, but because they lack the <span className="text-white font-medium">Product Logic</span>.
                            </p>

                            <div className="space-y-6">
                                {[
                                    "Not knowing exactly what to sell",
                                    "Misunderstanding new offerings",
                                    "Inability to explain business value",
                                    "Confusion over positioning & earning potential"
                                ].map((item, i) => (
                                    <div key={i} className="flex items-center gap-4 p-4 rounded-2xl bg-white/5 border border-white/10">
                                        <XCircle className="w-6 h-6 text-red-500 shrink-0" />
                                        <span className="text-gray-300 tracking-wide">{item}</span>
                                    </div>
                                ))}
                            </div>
                        </FadeUp>

                        <FadeUp delay={0.2}>
                            <div className="p-10 rounded-[40px] bg-gradient-to-br from-orange-500 to-orange-700 h-full flex flex-col justify-center shadow-2xl shadow-orange-500/20">
                                <h3 className="text-3xl font-bold mb-6 text-white leading-tight">
                                    Our training model removes this gap completely.
                                </h3>
                                <p className="text-white/80 text-lg mb-8 font-light leading-relaxed">
                                    We provide product + market + execution training that ensures you are
                                    always updated, confident, and market-ready.
                                </p>
                                <div className="p-6 bg-black/20 backdrop-blur-sm rounded-3xl border border-white/10">
                                    <p className="text-white italic text-xl font-medium">
                                        "Learn. Align. Sell Confidently."
                                    </p>
                                </div>
                            </div>
                        </FadeUp>
                    </div>
                </div>
            </section>

            {/* How It Works Section */}
            <section className="py-32 bg-white/[0.02]">
                <div className="max-w-7xl mx-auto px-6">
                    <FadeUp className="text-center mb-24">
                        <h2 className="text-4xl md:text-6xl font-black mb-6">Four Layers of <span className="text-orange-500">Excellence</span></h2>
                        <p className="text-gray-400 text-xl max-w-2xl mx-auto font-light">
                            Our training structure ensures total platform mastery and vertical specialization.
                        </p>
                    </FadeUp>

                    <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
                        {trainingLayers.map((layer, i) => (
                            <FadeUp key={i} delay={i * 0.1}>
                                <div className="group h-full p-8 rounded-[32px] bg-white/[0.03] border border-white/10 hover:border-orange-500/50 transition-all duration-500 flex flex-col">
                                    <div className="w-16 h-16 rounded-2xl bg-orange-500/10 flex items-center justify-center text-orange-500 mb-8 group-hover:scale-110 transition-transform">
                                        {layer.icon}
                                    </div>
                                    <div className="text-orange-500/60 text-[10px] uppercase tracking-widest font-black mb-2">Layer 0{i + 1}</div>
                                    <h3 className="text-2xl font-bold mb-2 group-hover:text-orange-500 transition-colors">{layer.title}</h3>
                                    <p className="text-sm text-gray-500 mb-6 font-medium italic">{layer.subtitle}</p>

                                    <ul className="space-y-4 mb-8 flex-grow">
                                        {layer.items.map((item, idx) => (
                                            <li key={idx} className="flex items-start gap-3 text-sm text-gray-400 leading-snug">
                                                <div className="w-1 h-1 rounded-full bg-orange-500 mt-1.5 shrink-0" />
                                                {item}
                                            </li>
                                        ))}
                                    </ul>

                                    <div className="pt-6 border-t border-white/5 mt-auto">
                                        <div className="text-[11px] uppercase tracking-widest text-orange-400 font-bold mb-1">Purpose</div>
                                        <p className="text-xs text-gray-400 leading-relaxed font-light">{layer.purpose}</p>
                                    </div>
                                </div>
                            </FadeUp>
                        ))}
                    </div>
                </div>
            </section>

            {/* Vertical Wise Training Details */}
            <section className="py-32 relative overflow-hidden">
                <div className="absolute top-1/2 left-0 -translate-y-1/2 w-[500px] h-[500px] bg-orange-500/10 blur-[150px] -z-10" />

                <div className="max-w-7xl mx-auto px-6">
                    <FadeUp className="mb-20">
                        <h2 className="text-4xl md:text-5xl font-bold mb-8">Vertical-Wise <span className="text-orange-500">Product Mastery</span></h2>
                        <div className="w-24 h-1 bg-orange-500 mb-8 rounded-full" />
                        <p className="text-xl text-gray-400 font-light max-w-3xl">
                            We don't just teach you what a product is — we teach you <span className="text-white font-medium">how to position it</span> for maximum conversion.
                        </p>
                    </FadeUp>

                    <div className="grid lg:grid-cols-2 gap-10">
                        {verticals.map((vert, i) => (
                            <FadeUp key={i} delay={i * 0.05}>
                                <div className="group relative p-10 rounded-[35px] bg-[#0A0A0A] border border-white/10 hover:border-orange-500/30 transition-all duration-300 overflow-hidden">
                                    <div className="flex flex-col md:flex-row gap-8 relative z-10">
                                        <div className="w-16 h-16 rounded-2xl bg-white/5 flex items-center justify-center text-orange-500 group-hover:bg-orange-500 group-hover:text-white transition-all duration-500 shrink-0">
                                            {React.cloneElement(vert.icon, { className: "w-8 h-8" })}
                                        </div>
                                        <div>
                                            <div className="flex items-center gap-3 mb-2">
                                                <h3 className="text-2xl font-bold text-white">{vert.title}</h3>
                                                <span className="text-[10px] uppercase tracking-widest bg-orange-500/10 text-orange-500 px-2 py-0.5 rounded border border-orange-500/20">{vert.brand}</span>
                                            </div>
                                            <p className="text-gray-400 mb-8 font-light text-sm md:text-base leading-relaxed">
                                                {vert.desc}
                                            </p>

                                            <div className="grid md:grid-cols-2 gap-4">
                                                {vert.points.map((point, idx) => (
                                                    <div key={idx} className="flex items-center gap-3 text-xs text-gray-300">
                                                        <CheckCircle2 className="w-4 h-4 text-orange-500 shrink-0" />
                                                        {point}
                                                    </div>
                                                ))}
                                            </div>
                                        </div>
                                    </div>
                                    {/* Subtle hover pattern */}
                                    <div className="absolute top-0 right-0 p-8 opacity-0 group-hover:opacity-10 transition-opacity">
                                        {React.cloneElement(vert.icon, { className: "w-32 h-32" })}
                                    </div>
                                </div>
                            </FadeUp>
                        ))}
                    </div>
                </div>
            </section>

            {/* What Training IS vs IS NOT */}
            <section className="py-32">
                <div className="max-w-7xl mx-auto px-6">
                    <div className="grid lg:grid-cols-2 gap-px bg-white/10 rounded-[40px] overflow-hidden border border-white/10">
                        <div className="bg-[#0A0A0A] p-16">
                            <FadeUp>
                                <div className="flex items-center gap-4 mb-10">
                                    <div className="w-12 h-12 rounded-full bg-red-500/10 flex items-center justify-center text-red-500">
                                        <XCircle className="w-6 h-6" />
                                    </div>
                                    <h2 className="text-3xl font-bold">What Training is <span className="text-red-500/80">NOT</span></h2>
                                </div>
                                <div className="space-y-6">
                                    {[
                                        "Generic motivational sessions",
                                        "Theoretical business 'gyaan'",
                                        "Unrealistic income promises & hype"
                                    ].map((item, i) => (
                                        <div key={i} className="flex items-center gap-6 text-xl font-light text-gray-500">
                                            <span className="text-red-500/40">❌</span> {item}
                                        </div>
                                    ))}
                                </div>
                            </FadeUp>
                        </div>
                        <div className="bg-[#050505] p-16">
                            <FadeUp delay={0.2}>
                                <div className="flex items-center gap-4 mb-10">
                                    <div className="w-12 h-12 rounded-full bg-green-500/10 flex items-center justify-center text-green-500">
                                        <CheckCircle2 className="w-6 h-6" />
                                    </div>
                                    <h2 className="text-3xl font-bold">What Training <span className="text-green-500/80">IS</span></h2>
                                </div>
                                <div className="space-y-6">
                                    {[
                                        "Complete product transparency",
                                        "Deep market understanding",
                                        "Total operational alignment"
                                    ].map((item, i) => (
                                        <div key={i} className="flex items-center gap-6 text-xl font-medium text-white">
                                            <span className="text-green-500">✔</span> {item}
                                        </div>
                                    ))}
                                </div>
                            </FadeUp>
                        </div>
                    </div>
                </div>
            </section>

            {/* Final CTA / Summary */}
            <section className="py-32 border-t border-white/5">
                <div className="max-w-5xl mx-auto px-6 text-center">
                    <FadeUp>
                        <h2 className="text-4xl md:text-6xl font-bold mb-8">Ready to <span className="text-orange-500 italic">Scale?</span></h2>
                        <p className="text-xl text-gray-400 font-light mb-12 max-w-2xl mx-auto leading-relaxed">
                            Knowledge builds confidence. Confidence builds businesses.
                            Start your alignment today and sell with Zryoss authority.
                        </p>
                        <div className="flex flex-wrap justify-center gap-6">
                            <button className="px-10 py-5 bg-orange-500 text-white font-bold rounded-2xl hover:bg-orange-600 transition-all shadow-xl shadow-orange-500/20 hover:scale-105">
                                Explore Training Documents
                            </button>
                            <button className="px-10 py-5 bg-white/5 border border-white/10 text-white font-bold rounded-2xl hover:bg-white/10 transition-all">
                                Request Live Webinar
                            </button>
                        </div>
                    </FadeUp>
                </div>
            </section>

            {/* HeroContact Section */}
            <HeroContact />
        </div>
    );
}
