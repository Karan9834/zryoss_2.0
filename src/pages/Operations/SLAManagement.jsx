import React, { useMemo, useState } from "react";
import {
  ArrowRight,
  AlertTriangle,
  CheckCircle2,
  Shield,
  FileText,
  ClipboardCheck,
  Settings,
  MessageSquare,
  Clock,
  Gauge,
  FileCheck2,
  ShieldCheck,
  Users,
  Crown,
  Handshake,
  BarChart3,
  PieChart,
  TrendingUp,
  RefreshCcw,
  ChevronDown,
  ChevronUp,
  Database,
  Flag,
  Workflow,
} from "lucide-react";

export default function SLAManagement() {
  const [openLayer, setOpenLayer] = useState("qa-1");

  const scrollToSlaFramework = () => {
    const el = document.getElementById("sla-framework");
    if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  const vendorFailRisks = [
    "Vendors work in silos",
    "No single coordination owner exists",
    "Dependencies are unmanaged",
    "Communication is scattered",
    "Accountability is unclear",
  ];

  const qualityBreakRisks = [
    "Standards are undefined or informal",
    "Vendors interpret scope differently",
    "Reviews happen only at the end",
    "Accountability is unclear",
    "Speed is prioritized over correctness",
  ];

  const qaMeans = [
    "Scope accuracy and alignment",
    "Execution consistency",
    "Deliverable completeness",
    "Compliance with agreed standards",
    "Client expectation matching",
  ];

  const qaLayers = [
    {
      id: "layer-1",
      title: "Pre-Execution Quality Validation",
      icon: <FileText className="w-5 h-5" />,
    },
    {
      id: "layer-2",
      title: "In-Execution Quality Control",
      icon: <Settings className="w-5 h-5" />,
    },
    {
      id: "layer-3",
      title: "Pre-Delivery Quality Verification",
      icon: <ClipboardCheck className="w-5 h-5" />,
    },
    {
      id: "layer-4",
      title: "Post-Delivery Quality Review",
      icon: <RefreshCcw className="w-5 h-5" />,
    },
  ];

  const detailedLayers = useMemo(
    () => [
      {
        id: "qa-1",
        number: "1️⃣",
        title: "Pre-Execution Quality Validation",
        icon: <FileText className="w-5 h-5" />,
        intro: "Before any execution begins:",
        points: [
          "Requirements are reviewed for clarity",
          "Scope is validated against feasibility",
          "Deliverables are clearly defined",
          "Quality benchmarks are set",
        ],
        highlight: "This ensures execution starts with zero ambiguity.",
      },
      {
        id: "qa-2",
        number: "2️⃣",
        title: "In-Execution Quality Control",
        icon: <Settings className="w-5 h-5" />,
        intro: "During execution:",
        points: [
          "Milestone-based quality checks are enforced",
          "Partial deliverables are reviewed",
          "Deviations are flagged early",
          "Corrections are applied immediately",
        ],
        highlight:
          "Quality is controlled while work is in progress, not after it is completed.",
      },
      {
        id: "qa-3",
        number: "3️⃣",
        title: "Pre-Delivery Quality Verification",
        icon: <ClipboardCheck className="w-5 h-5" />,
        intro: "Before final delivery:",
        points: [
          "Deliverables are reviewed against scope",
          "Functional and non-functional checks are performed",
          "Documentation and handover readiness is verified",
          "Quality approval is recorded",
        ],
        highlight: "No delivery moves forward without quality sign-off.",
      },
      {
        id: "qa-4",
        number: "4️⃣",
        title: "Post-Delivery Quality Review",
        icon: <RefreshCcw className="w-5 h-5" />,
        intro: "After delivery:",
        points: [
          "Client feedback is reviewed",
          "Delivery outcomes are evaluated",
          "Improvement opportunities are identified",
          "Learnings are documented",
        ],
        highlight:
          "This ensures continuous quality improvement across the ecosystem.",
      },
    ],
    []
  );

  const ownershipRoles = [
    "Execution teams ensure adherence",
    "Account Managers oversee quality alignment",
    "Operations team enforces standards",
    "Platform governance retains final authority",
  ];

  const benchmarks = [
    { title: "Timelines and milestones", icon: <Clock className="w-6 h-6" /> },
    { title: "Functional completeness", icon: <ClipboardCheck className="w-6 h-6" /> },
    { title: "Performance and reliability", icon: <Gauge className="w-6 h-6" /> },
    { title: "Communication and reporting", icon: <MessageSquare className="w-6 h-6" /> },
    { title: "Compliance and documentation", icon: <FileCheck2 className="w-6 h-6" /> },
  ];

  const vendorQualityEnforcement = [
    "Quality standards are part of SLAs",
    "Deliverables are reviewed centrally",
    "Rework is enforced if standards are missed",
    "Repeated issues lead to corrective action or replacement",
  ];

<<<<<<< HEAD
                    <div className="mt-10 flex flex-col sm:flex-row gap-4 justify-center">
                        <button className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-xl bg-[#FF6A00] text-white font-bold hover:bg-[#FF6A00]/90 transition shadow-[0_0_20px_rgba(255,106,0,0.3)]">
                            View SLA Standards <ArrowRight className="w-5 h-5" />
                        </button>
                    </div>
                </div>
            </section>
=======
  const metrics = [
    { title: "Delivery accuracy", icon: <BarChart3 className="w-6 h-6" /> },
    { title: "Rework frequency", icon: <RefreshCcw className="w-6 h-6" /> },
    { title: "Timeline adherence", icon: <Clock className="w-6 h-6" /> },
    { title: "Client satisfaction indicators", icon: <Handshake className="w-6 h-6" /> },
    { title: "Issue resolution effectiveness", icon: <TrendingUp className="w-6 h-6" /> },
  ];
>>>>>>> ed11d59dc3576dac588ad0207c2f917481892cd9

  const escalationFlow = [
    "They are logged centrally",
    "Root cause is identified",
    "Corrective action is enforced",
    "Preventive measures are applied",
  ];

  const scalePoints = [
    "Quality standards remain unchanged",
    "Additional QA capacity is activated",
    "Automation and checklists are applied",
    "Governance remains centralized",
  ];

  const beneficiaries = [
    { title: "Clients", text: "consistent, reliable outcomes", icon: <Handshake className="w-6 h-6" /> },
    { title: "IPP & BPP", text: "protected brand credibility", icon: <Shield className="w-6 h-6" /> },
    { title: "Vendors", text: "clear expectations and fairness", icon: <Users className="w-6 h-6" /> },
    { title: "Leadership", text: "confidence in execution", icon: <Crown className="w-6 h-6" /> },
  ];

  return (
    <div className="min-h-screen bg-[#121212] text-white">
      {/* ================= HERO (Vendor & SLA) ================= */}
      <section
        className="relative overflow-hidden min-h-screen flex items-center"
        style={{
          backgroundImage:
            "url(https://images.unsplash.com/photo-1558494949-ef010cbdcc31?q=80&w=1920&auto=format&fit=crop)",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        {/* overlays */}
        <div className="absolute inset-0 bg-[#0b0b0b]/80" />
        <div className="absolute inset-0 bg-gradient-to-b from-[#121212]/10 via-[#121212]/70 to-[#121212]" />

<<<<<<< HEAD
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
                        <button className="px-8 py-4 bg-[#FF6A00] text-white font-bold rounded-xl hover:bg-[#FF6A00]/90 transition shadow-lg shadow-[#FF6A00]/20">
                            Partner With Zryoss
                        </button>
                        <button className="px-8 py-4 bg-transparent border border-white/20 text-white font-semibold rounded-xl hover:bg-white/5 transition">
                            Explore Operations Model
                        </button>
                    </div>
                </div>
            </section>
=======
        {/* glow */}
        <div className="absolute -top-52 left-1/2 -translate-x-1/2 w-[980px] h-[980px] rounded-full bg-[#FF6A00]/10 blur-3xl" />
        <div className="absolute -bottom-44 right-0 w-[640px] h-[640px] rounded-full bg-[#FF6A00]/10 blur-3xl" />
>>>>>>> ed11d59dc3576dac588ad0207c2f917481892cd9

        {/* SLA watermark */}
        <div className="absolute inset-0 opacity-[0.06] pointer-events-none">
          <svg viewBox="0 0 1200 600" className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
            <g fill="none" stroke="#FF6A00" strokeWidth="2">
              <rect x="500" y="160" width="200" height="280" rx="18" />
              <line x1="530" y1="220" x2="670" y2="220" />
              <line x1="530" y1="260" x2="670" y2="260" />
              <line x1="530" y1="300" x2="670" y2="300" />
              <circle cx="600" cy="395" r="30" />
              <path d="M590 395 l10 10 l18 -20" />
            </g>
          </svg>
        </div>

        <div className="relative max-w-7xl mx-auto px-6 py-28 w-full">
          <div className="text-center max-w-3xl mx-auto">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10 text-sm text-gray-200">
              <span className="w-2 h-2 rounded-full bg-[#FF6A00]" />
              Zryoss · Vendor Control Framework
            </div>

            <h1 className="mt-6 text-4xl sm:text-5xl font-extrabold leading-tight">
              Vendor & SLA Management
            </h1>

            <h2 className="mt-4 text-2xl sm:text-3xl font-extrabold text-[#FF6A00]">
              Controlled Vendors. Enforced SLAs. Predictable Outcomes.
            </h2>

            <p className="mt-6 text-gray-200 leading-relaxed text-lg">
              At Zryoss, vendors are not independent operators. They function within a platform-governed execution
              framework where scope, timelines, quality, and accountability are strictly enforced through Service Level
              Agreements (SLAs).
              <br />
              <span className="text-white font-semibold">
                Zryoss does not outsource responsibility. It owns delivery outcomes.
              </span>
            </p>

            <div className="mt-10 flex flex-col sm:flex-row gap-4 justify-center">
              <button
                onClick={scrollToSlaFramework}
                className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl bg-[#FF6A00] text-white font-semibold hover:brightness-110 transition"
              >
                Explore SLA Framework <ArrowRight className="w-5 h-5" />
              </button>

              <a
                href="#qa-intro"
                className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl border border-white/15 bg-white/5 hover:bg-white/10 transition font-semibold"
              >
                Learn More
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* ================= WHY VENDOR MANAGEMENT FAILS ================= */}
      <section id="sla-framework" className="max-w-7xl mx-auto px-6 py-20">
        <div className="grid lg:grid-cols-2 gap-10 items-start">
          <div>
            <h2 className="text-3xl font-bold">
              Why Vendor Management Fails{" "}
              <span className="text-[#FF6A00]">in Most Businesses</span>
            </h2>

            <p className="mt-4 text-gray-300">
              Vendor coordination usually fails because:
            </p>

            <ul className="mt-6 space-y-3">
              {vendorFailRisks.map((r) => (
                <li key={r} className="flex items-start gap-3 p-4 rounded-xl bg-[#1E1E1E] border border-white/10">
                  <AlertTriangle className="w-5 h-5 text-[#FF6A00] mt-0.5" />
                  <span className="text-gray-200">{r}</span>
                </li>
              ))}
            </ul>

            <div className="mt-8 p-5 rounded-2xl bg-[#FF6A00]/10 border border-[#FF6A00]/25">
              <p className="text-white font-semibold">
                This leads to delays, rework, and client dissatisfaction.
                <br />
                Zryoss eliminates these failures by centralizing vendor coordination under one operational authority.
              </p>
            </div>
          </div>

          <div className="relative">
            <div className="absolute inset-0 rounded-3xl bg-[#FF6A00]/10 blur-2xl" />
            <div className="relative overflow-hidden rounded-3xl border border-white/10 bg-[#121212]">
              <img
                alt="Vendor silos illustration"
                className="w-full h-[420px] object-cover opacity-90"
                src="https://images.unsplash.com/photo-1523961131990-5ea7c61b2107?q=80&w=1600&auto=format&fit=crop"
              />
              <div className="p-6">
                <p className="text-sm text-gray-300">
                  Fragmented vendors without governance create delivery risk and hidden failures.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ================= QA FRAMEWORK INTRO ================= */}
      <section
        id="qa-intro"
        className="relative overflow-hidden bg-[#1E1E1E] border-y border-white/10"
      >
        {/* grid accent */}
        <div className="absolute inset-0 opacity-[0.08] pointer-events-none">
          <svg viewBox="0 0 1200 600" className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
            <defs>
              <pattern id="grid" width="60" height="60" patternUnits="userSpaceOnUse">
                <path d="M 60 0 L 0 0 0 60" fill="none" stroke="#FF6A00" strokeWidth="1" />
              </pattern>
            </defs>
            <rect width="1200" height="600" fill="url(#grid)" />
          </svg>
        </div>

        {/* watermark */}
        <div className="absolute inset-0 opacity-[0.06] pointer-events-none">
          <svg viewBox="0 0 1200 600" className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
            <g fill="none" stroke="#FF6A00" strokeWidth="2">
              <path d="M600 150 l140 60 v120c0 120-140 180-140 180s-140-60-140-180V210z" />
              <path d="M555 320 l35 35 l70-85" />
              <rect x="280" y="170" width="200" height="260" rx="18" />
              <line x1="310" y1="230" x2="450" y2="230" />
              <line x1="310" y1="275" x2="450" y2="275" />
              <line x1="310" y1="320" x2="450" y2="320" />
            </g>
          </svg>
        </div>

        <div className="relative max-w-7xl mx-auto px-6 py-20 text-center">
          <h1 className="text-3xl sm:text-4xl font-extrabold">
            Quality Assurance Framework
          </h1>

          <h2 className="mt-4 text-2xl sm:text-3xl font-extrabold text-[#FF6A00]">
            Quality Is Not a Check. It Is a System.
          </h2>

          <p className="mt-6 text-gray-200 text-lg leading-relaxed max-w-4xl mx-auto">
            At Zryoss, quality assurance is not treated as a final inspection or post-delivery activity.
            It is a multi-layered, system-embedded framework that governs execution before, during, and after delivery.
            <br />
            <span className="text-white font-semibold">
              Zryoss does not fix quality issues later. It prevents them early.
            </span>
          </p>
        </div>
      </section>

      {/* ================= WHY QUALITY BREAKS ================= */}
      <section className="max-w-7xl mx-auto px-6 py-20">
        <div className="grid lg:grid-cols-2 gap-10 items-start">
          <div>
            <h2 className="text-3xl font-bold">
              Why Quality Breaks{" "}
              <span className="text-[#FF6A00]">in Most Businesses</span>
            </h2>

            <p className="mt-4 text-gray-300">
              Quality fails at scale because:
            </p>

            <ul className="mt-6 space-y-3">
              {qualityBreakRisks.map((r) => (
                <li key={r} className="flex items-start gap-3 p-4 rounded-xl bg-[#1E1E1E] border border-white/10">
                  <AlertTriangle className="w-5 h-5 text-[#FF6A00] mt-0.5" />
                  <span className="text-gray-200">{r}</span>
                </li>
              ))}
            </ul>

            <div className="mt-8 p-5 rounded-2xl bg-[#FF6A00]/10 border border-[#FF6A00]/25">
              <p className="text-white font-semibold">
                Zryoss eliminates these risks by embedding quality controls into the execution lifecycle.
              </p>
            </div>
          </div>

          <div className="relative">
            <div className="absolute inset-0 rounded-3xl bg-[#FF6A00]/10 blur-2xl" />
            <div className="relative overflow-hidden rounded-3xl border border-white/10 bg-[#121212]">
              <img
                alt="Broken workflow illustration"
                className="w-full h-[420px] object-cover opacity-90"
                src="https://images.unsplash.com/photo-1552664730-d307ca884978?q=80&w=1600&auto=format&fit=crop"
              />
              <div className="p-6">
                <p className="text-sm text-gray-300">
                  When standards are undefined, quality becomes reactive — and breaks at scale.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ================= QA MEANS ================= */}
      <section className="bg-[#1E1E1E] border-y border-white/10">
        <div className="max-w-7xl mx-auto px-6 py-20 text-center">
          <h2 className="text-3xl font-bold">
            What Quality Assurance Means at{" "}
            <span className="text-[#FF6A00]">Zryoss</span>
          </h2>

          <p className="mt-4 text-gray-300">Quality Assurance at Zryoss covers:</p>

          <div className="mt-10 max-w-4xl mx-auto grid sm:grid-cols-2 gap-4">
            {qaMeans.map((p) => (
              <div key={p} className="flex items-start gap-3 p-5 rounded-2xl bg-black/20 border border-white/10">
                <CheckCircle2 className="w-5 h-5 text-[#FF6A00] mt-0.5" />
                <p className="text-gray-200">{p}</p>
              </div>
            ))}
          </div>

          <div className="mt-10 p-6 rounded-2xl bg-[#FF6A00]/10 border border-[#FF6A00]/25 max-w-4xl mx-auto">
            <p className="text-white font-semibold">
              Quality is measured, documented, and enforced.
            </p>
          </div>
        </div>
      </section>

      {/* ================= QA MODEL 4 LAYERS ================= */}
      <section className="max-w-7xl mx-auto px-6 py-20">
        <h2 className="text-3xl font-bold text-center">
          The Zryoss <span className="text-[#FF6A00]">Quality Assurance Model</span>
        </h2>

        <p className="mt-4 text-gray-300 text-center max-w-3xl mx-auto">
          Zryoss follows a four-layer QA framework. Each layer has defined checks and ownership.
        </p>

        <div className="mt-12 grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {qaLayers.map((x, i) => (
            <div
              key={x.id}
              className="p-6 rounded-2xl bg-[#1E1E1E] border border-white/10 hover:border-[#FF6A00]/40 transition"
            >
              <div className="flex items-center justify-between">
                <div className="w-10 h-10 rounded-xl bg-[#FF6A00]/15 border border-[#FF6A00]/30 text-[#FF6A00] flex items-center justify-center">
                  {x.icon}
                </div>
                <span className="text-sm text-gray-400">Layer {i + 1}</span>
              </div>
              <h3 className="mt-4 font-bold">{x.title}</h3>
              <div className="mt-4 h-[3px] w-14 bg-[#FF6A00] rounded-full" />
            </div>
          ))}
        </div>
      </section>

      {/* ================= DETAILED QA LAYERS ================= */}
      <section className="bg-[#1E1E1E] border-y border-white/10">
        <div className="max-w-7xl mx-auto px-6 py-20">
          <h2 className="text-3xl font-bold text-center">Detailed QA Layers (1–4)</h2>

          <div className="mt-12 space-y-4 max-w-4xl mx-auto">
            {detailedLayers.map((s) => {
              const isOpen = openLayer === s.id;
              return (
                <div
                  key={s.id}
                  className={`rounded-2xl border transition ${
                    isOpen
                      ? "border-[#FF6A00]/50 bg-black/25"
                      : "border-white/10 bg-black/10 hover:border-[#FF6A00]/30"
                  }`}
                >
                  <button
                    onClick={() => setOpenLayer(isOpen ? "" : s.id)}
                    className="w-full flex items-center justify-between gap-4 p-5 text-left"
                  >
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 rounded-xl bg-[#FF6A00]/15 border border-[#FF6A00]/30 text-[#FF6A00] flex items-center justify-center">
                        {s.icon}
                      </div>
                      <div>
                        <p className="text-gray-400 text-sm">{s.number}</p>
                        <h3 className="font-bold">{s.title}</h3>
                      </div>
                    </div>

                    <div className="text-[#FF6A00]">
                      {isOpen ? <ChevronUp /> : <ChevronDown />}
                    </div>
                  </button>

                  {isOpen && (
                    <div className="px-5 pb-6">
                      {s.intro && <p className="text-gray-300 mb-4">{s.intro}</p>}
                      <ul className="space-y-3">
                        {s.points.map((p) => (
                          <li key={p} className="flex items-start gap-3">
                            <CheckCircle2 className="w-5 h-5 text-[#FF6A00] mt-0.5" />
                            <span className="text-gray-200">{p}</span>
                          </li>
                        ))}
                      </ul>

                      {s.highlight && (
                        <div className="mt-6 p-4 rounded-xl bg-[#FF6A00]/10 border border-[#FF6A00]/25">
                          <p className="font-semibold text-white">{s.highlight}</p>
                        </div>
                      )}
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ================= QUALITY OWNERSHIP ================= */}
      <section className="max-w-7xl mx-auto px-6 py-20">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-3xl font-bold">
              Quality Ownership &{" "}
              <span className="text-[#FF6A00]">Accountability</span>
            </h2>

            <p className="mt-4 text-gray-300">
              Quality at Zryoss has clear ownership:
            </p>

            <ul className="mt-6 space-y-3">
              {ownershipRoles.map((p) => (
                <li key={p} className="flex items-start gap-3 p-4 rounded-xl bg-[#1E1E1E] border border-white/10">
                  <CheckCircle2 className="w-5 h-5 text-[#FF6A00] mt-0.5" />
                  <span className="text-gray-200">{p}</span>
                </li>
              ))}
            </ul>

            <div className="mt-8 p-5 rounded-2xl bg-[#FF6A00]/10 border border-[#FF6A00]/25">
              <p className="text-white font-semibold">
                Quality is never left to individual discretion.
              </p>
            </div>
          </div>

          <div className="relative">
            <div className="absolute inset-0 rounded-3xl bg-[#FF6A00]/10 blur-2xl" />
            <div className="relative overflow-hidden rounded-3xl border border-white/10 bg-[#121212]">
              <img
                alt="Hierarchy governance illustration"
                className="w-full h-[420px] object-cover opacity-90"
                src="https://images.unsplash.com/photo-1542744173-8e7e53415bb0?q=80&w=1600&auto=format&fit=crop"
              />
              <div className="p-6">
                <p className="text-sm text-gray-300">
                  Governance ensures quality is owned, controlled, and enforced at every layer.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ================= BENCHMARKS ================= */}
      <section className="bg-[#1E1E1E] border-y border-white/10">
        <div className="max-w-7xl mx-auto px-6 py-20">
          <h2 className="text-3xl font-bold text-center">
            Standardized <span className="text-[#FF6A00]">Quality Benchmarks</span>
          </h2>

          <p className="mt-4 text-gray-300 text-center">
            Zryoss maintains standardized benchmarks for:
          </p>

          <div className="mt-12 grid sm:grid-cols-2 lg:grid-cols-5 gap-4">
            {benchmarks.map((b) => (
              <div
                key={b.title}
                className="p-6 rounded-2xl bg-black/15 border border-white/10 hover:border-[#FF6A00]/40 transition text-center"
              >
                <div className="mx-auto w-12 h-12 rounded-2xl bg-[#FF6A00]/15 border border-[#FF6A00]/30 text-[#FF6A00] flex items-center justify-center">
                  {b.icon}
                </div>
                <p className="mt-4 font-semibold text-gray-200">{b.title}</p>
              </div>
            ))}
          </div>

          <p className="mt-10 text-center font-semibold text-white">
            Benchmarks are consistent across all domains.
          </p>
        </div>
      </section>

      {/* ================= VENDOR QUALITY ENFORCEMENT ================= */}
      <section className="max-w-7xl mx-auto px-6 py-20">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-3xl font-bold">
              Vendor Quality <span className="text-[#FF6A00]">Enforcement</span>
            </h2>

            <p className="mt-4 text-gray-300">For vendors:</p>

            <ul className="mt-6 space-y-3">
              {vendorQualityEnforcement.map((p) => (
                <li key={p} className="flex items-start gap-3 p-4 rounded-xl bg-[#1E1E1E] border border-white/10">
                  <CheckCircle2 className="w-5 h-5 text-[#FF6A00] mt-0.5" />
                  <span className="text-gray-200">{p}</span>
                </li>
              ))}
            </ul>

            <div className="mt-8 p-6 rounded-2xl bg-[#FF6A00]/10 border border-[#FF6A00]/25">
              <p className="text-white font-semibold">
                Vendors execute work.
                <br />
                <span className="text-white font-bold">Zryoss enforces quality.</span>
              </p>
            </div>
          </div>

          <div className="relative">
            <div className="absolute inset-0 rounded-3xl bg-[#FF6A00]/10 blur-2xl" />
            <div className="relative overflow-hidden rounded-3xl border border-white/10 bg-[#121212]">
              <img
                alt="SLA contract enforcement"
                className="w-full h-[420px] object-cover opacity-90"
                src="https://images.unsplash.com/photo-1450101499163-c8848c66ca85?q=80&w=1600&auto=format&fit=crop"
              />
              <div className="p-6">
                <p className="text-sm text-gray-300">
                  SLA-based enforcement ensures predictable delivery quality across vendors.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ================= QUALITY METRICS ================= */}
      <section className="bg-[#1E1E1E] border-y border-white/10">
        <div className="max-w-7xl mx-auto px-6 py-20">
          <h2 className="text-3xl font-bold text-center">
            Quality Metrics & <span className="text-[#FF6A00]">Monitoring</span>
          </h2>

          <p className="mt-4 text-gray-300 text-center">
            Zryoss tracks quality through:
          </p>

          <div className="mt-12 grid sm:grid-cols-2 lg:grid-cols-5 gap-4">
            {metrics.map((m) => (
              <div
                key={m.title}
                className="p-6 rounded-2xl bg-black/15 border border-white/10 hover:border-[#FF6A00]/40 transition text-center"
              >
                <div className="mx-auto w-12 h-12 rounded-2xl bg-[#FF6A00]/15 border border-[#FF6A00]/30 text-[#FF6A00] flex items-center justify-center">
                  {m.icon}
                </div>
                <p className="mt-4 font-semibold text-gray-200">{m.title}</p>
              </div>
            ))}
          </div>

          <p className="mt-10 text-center font-semibold text-white">
            Quality decisions are data-driven, not opinion-based.
          </p>
        </div>
      </section>

      {/* ================= ISSUE HANDLING ================= */}
      <section className="max-w-7xl mx-auto px-6 py-20">
        <h2 className="text-3xl font-bold text-center">
          Issue Handling & <span className="text-[#FF6A00]">Quality Escalation</span>
        </h2>

        <p className="mt-4 text-gray-300 text-center">
          If quality issues arise:
        </p>

        <div className="mt-10 max-w-4xl mx-auto space-y-4">
          {escalationFlow.map((s, i) => (
            <div
              key={s}
              className="flex items-start gap-4 p-5 rounded-2xl bg-[#1E1E1E] border border-white/10"
            >
              <div className="w-10 h-10 rounded-xl bg-[#FF6A00]/15 border border-[#FF6A00]/30 flex items-center justify-center text-[#FF6A00] font-extrabold">
                {i + 1}
              </div>
              <div>
                <p className="font-semibold">{s}</p>
                <p className="text-sm text-gray-400 mt-1">
                  Escalation ensures resolution, not repetition.
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ================= SCALE ================= */}
      <section className="bg-[#1E1E1E] border-y border-white/10">
        <div className="max-w-7xl mx-auto px-6 py-20">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold">
                How Quality Scales{" "}
                <span className="text-[#FF6A00]">With Growth</span>
              </h2>

              <p className="mt-4 text-gray-300">As volume increases:</p>

              <ul className="mt-6 space-y-3">
                {scalePoints.map((p) => (
                  <li key={p} className="flex items-start gap-3 p-4 rounded-xl bg-black/15 border border-white/10">
                    <CheckCircle2 className="w-5 h-5 text-[#FF6A00] mt-0.5" />
                    <span className="text-gray-200">{p}</span>
                  </li>
                ))}
              </ul>

              <div className="mt-8 p-6 rounded-2xl bg-[#FF6A00]/10 border border-[#FF6A00]/25">
                <p className="text-white font-semibold">
                  Scale does not dilute quality— <span className="font-bold">it strengthens it.</span>
                </p>
              </div>
            </div>

            <div className="relative">
              <div className="absolute inset-0 rounded-3xl bg-[#FF6A00]/10 blur-2xl" />
              <div className="relative overflow-hidden rounded-3xl border border-white/10 bg-[#121212]">
                <img
                  alt="Growth and control"
                  className="w-full h-[420px] object-cover opacity-90"
                  src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=1600&auto=format&fit=crop"
                />
                <div className="p-6">
                  <p className="text-sm text-gray-300">
                    As systems grow, governance expands — visibility + control remain unchanged.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ================= WHO BENEFITS ================= */}
      <section className="max-w-7xl mx-auto px-6 py-20">
        <h2 className="text-3xl font-bold text-center">
          Who Benefits From This{" "}
          <span className="text-[#FF6A00]">QA Framework</span>
        </h2>

        <div className="mt-12 grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {beneficiaries.map((x) => (
            <div
              key={x.title}
              className="p-6 rounded-2xl bg-[#1E1E1E] border border-white/10 hover:border-[#FF6A00]/40 transition"
            >
              <div className="w-12 h-12 rounded-2xl bg-[#FF6A00]/15 border border-[#FF6A00]/30 text-[#FF6A00] flex items-center justify-center">
                {x.icon}
              </div>
              <h3 className="mt-4 font-bold text-lg">{x.title}</h3>
              <p className="mt-2 text-gray-400 text-sm">{x.text}</p>
            </div>
          ))}
        </div>

        <p className="mt-10 text-center font-semibold text-white">
          Quality protects the ecosystem for everyone.
        </p>
      </section>

      {/* ================= QUALITY ASSET ================= */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-[#121212] via-[#1E1E1E] to-[#121212]" />
        <div className="absolute left-1/2 -translate-x-1/2 top-0 w-[850px] h-[850px] rounded-full bg-[#FF6A00]/10 blur-3xl" />

        <div className="relative max-w-5xl mx-auto px-6 py-20 text-center">
          <h2 className="text-3xl sm:text-4xl font-extrabold">
            Quality Is a <span className="text-[#FF6A00]">Business Asset</span>
          </h2>

          <p className="mt-6 text-gray-300 text-lg">
            At Zryoss:
            <br />
            <span className="text-white font-bold">Quality builds trust</span>
            <br />
            <span className="text-white font-bold">Trust enables scale</span>
            <br />
            <span className="text-white font-bold">Scale sustains growth</span>
          </p>

          <p className="mt-4 text-gray-400">
            This is why quality assurance is treated as a core operating function, not a support activity.
          </p>
        </div>
      </section>

      {/* ================= FINAL CTA ================= */}
      <section className="relative overflow-hidden bg-[#1E1E1E] border-t border-white/10">
        <div className="absolute inset-0 bg-gradient-to-b from-[#1E1E1E] via-black/30 to-[#121212]" />
        <div className="absolute -top-24 left-0 w-[520px] h-[520px] rounded-full bg-[#FF6A00]/10 blur-3xl" />
        <div className="absolute -bottom-40 right-0 w-[650px] h-[650px] rounded-full bg-[#FF6A00]/10 blur-3xl" />

        <div className="relative max-w-5xl mx-auto px-6 py-20 text-center">
          <h2 className="text-3xl sm:text-4xl font-extrabold">
            Final Thought
          </h2>

          <p className="mt-6 text-gray-200 text-lg font-semibold">
            You cannot inspect quality into a system.
            <br />
            <span className="text-[#FF6A00]">You must build it into the system.</span>
          </p>

          <p className="mt-6 text-gray-300">
            Zryoss does exactly that.
          </p>

          <p className="mt-3 text-white font-bold">
            You promise value.
            <br />
            Zryoss ensures quality delivery.
          </p>

          <div className="mt-10 flex justify-center">
            <button className="inline-flex items-center gap-2 px-8 py-4 rounded-2xl bg-[#FF6A00] text-white font-bold hover:brightness-110 transition">
              Start Quality-Driven Execution <ArrowRight className="w-5 h-5" />
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}
