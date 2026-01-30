import React, { useMemo, useState } from "react";
import { useNavigate } from "react-router-dom";
import FadeUp from "../../components/animations/FadeUp";
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
  const navigate = useNavigate();
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

  const metrics = [
    { title: "Delivery accuracy", icon: <BarChart3 className="w-6 h-6" /> },
    { title: "Rework frequency", icon: <RefreshCcw className="w-6 h-6" /> },
    { title: "Timeline adherence", icon: <Clock className="w-6 h-6" /> },
    { title: "Client satisfaction indicators", icon: <Handshake className="w-6 h-6" /> },
    { title: "Issue resolution effectiveness", icon: <TrendingUp className="w-6 h-6" /> },
  ];

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
      {/* ================= HERO (Vendor & SLA) ================= */}
      <section className="relative overflow-hidden min-h-screen flex items-center pt-20 pb-16">
        {/* Background Effects */}
        <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
          <div className="absolute top-[-10%] right-[-5%] w-[600px] h-[600px] bg-orange-600/10 rounded-full blur-[120px]" />
          <div className="absolute bottom-[10%] left-[-10%] w-[400px] h-[400px] bg-purple-600/5 rounded-full blur-[100px]" />
        </div>

        <div className="max-w-7xl mx-auto px-6 relative z-10 w-full">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left Column: Content */}
            <FadeUp>
              <div>
                <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10 text-sm text-gray-200 mb-6">
                  <span className="w-2 h-2 rounded-full bg-[#FF6A00]" />
                  Zryoss · Vendor Control Framework
                </div>

                <h1 className="text-4xl sm:text-5xl font-extrabold leading-tight mb-4">
                  Vendor & SLA Management
                </h1>

                <h2 className="text-2xl sm:text-3xl font-extrabold text-[#FF6A00] mb-6">
                  Controlled Vendors. Enforced SLAs. Predictable Outcomes.
                </h2>

                <p className="text-gray-200 leading-relaxed text-lg mb-8">
                  At Zryoss, vendors are not independent operators. They function within a platform-governed execution
                  framework where scope, timelines, quality, and accountability are strictly enforced through Service Level
                  Agreements (SLAs).
                </p>

                <p className="text-white font-semibold mb-10">
                  Zryoss does not outsource responsibility. It owns delivery outcomes.
                </p>

                <div className="flex flex-col sm:flex-row gap-4">
                  <button
                    onClick={scrollToSlaFramework}
                    className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl bg-[#FF6A00] text-white font-semibold hover:brightness-110 transition shadow-[0_0_28px_rgba(249,115,22,0.25)]"
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
            </FadeUp>

            {/* Right Column: Image */}
            <FadeUp delay={0.2}>
              <div className="relative mt-10 lg:mt-0">
                <div className="absolute inset-0 bg-orange-500/20 blur-[100px] rounded-full" />
                <img
                  src="/operations-hero-images/Vendor_SLA.png"
                  alt="Vendor & SLA Management"
                  className="relative rounded-3xl shadow-2xl border border-white/10 transform hover:scale-[1.02] transition-transform duration-500 object-cover w-full h-auto aspect-[4/3]"
                />
              </div>
            </FadeUp>
          </div>
        </div>
      </section>

      {/* ================= WHY VENDOR MANAGEMENT FAILS ================= */}
      <section id="sla-framework" className="max-w-7xl mx-auto px-6 py-20">
        <div className="grid lg:grid-cols-2 gap-10 items-start">
          <FadeUp>
            <div>
              <h2 className="text-3xl font-bold">
                Why Vendor Management Fails{" "}
                <span className="text-[#FF6A00]">in Most Businesses</span>
              </h2>

              <p className="mt-4 text-gray-300">
                Vendor coordination usually fails because:
              </p>

              <ul className="mt-6 space-y-3">
                {vendorFailRisks.map((r, i) => (
                  <FadeUp key={r} delay={i * 0.05}>
                    <li className="flex items-start gap-3 p-4 rounded-xl bg-[#1E1E1E] border border-white/10">
                      <AlertTriangle className="w-5 h-5 text-[#FF6A00] mt-0.5" />
                      <span className="text-gray-200">{r}</span>
                    </li>
                  </FadeUp>
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
          </FadeUp>

          <FadeUp delay={0.2}>
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
          </FadeUp>
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
          <FadeUp>
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
          </FadeUp>
        </div>
      </section>

      {/* ================= WHY QUALITY BREAKS ================= */}
      <section className="max-w-7xl mx-auto px-6 py-20">
        <div className="grid lg:grid-cols-2 gap-10 items-start">
          <FadeUp>
            <div>
              <h2 className="text-3xl font-bold">
                Why Quality Breaks{" "}
                <span className="text-[#FF6A00]">in Most Businesses</span>
              </h2>

              <p className="mt-4 text-gray-300">
                Quality fails at scale because:
              </p>

              <ul className="mt-6 space-y-3">
                {qualityBreakRisks.map((r, i) => (
                  <FadeUp key={r} delay={i * 0.05}>
                    <li className="flex items-start gap-3 p-4 rounded-xl bg-[#1E1E1E] border border-white/10">
                      <AlertTriangle className="w-5 h-5 text-[#FF6A00] mt-0.5" />
                      <span className="text-gray-200">{r}</span>
                    </li>
                  </FadeUp>
                ))}
              </ul>

              <div className="mt-8 p-5 rounded-2xl bg-[#FF6A00]/10 border border-[#FF6A00]/25">
                <p className="text-white font-semibold">
                  Zryoss eliminates these risks by embedding quality controls into the execution lifecycle.
                </p>
              </div>
            </div>
          </FadeUp>

          <FadeUp delay={0.2}>
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
          </FadeUp>
        </div>
      </section>

      {/* ================= QA MEANS ================= */}
      <section className="bg-[#1E1E1E] border-y border-white/10">
        <div className="relative max-w-7xl mx-auto px-6 py-20 text-center">
          <FadeUp>
            <h2 className="text-3xl font-bold">
              What Quality Assurance Means at{" "}
              <span className="text-[#FF6A00]">Zryoss</span>
            </h2>

            <p className="mt-4 text-gray-300">Quality Assurance at Zryoss covers:</p>
          </FadeUp>

          <div className="mt-10 max-w-4xl mx-auto grid sm:grid-cols-2 gap-4">
            {qaMeans.map((p, i) => (
              <FadeUp key={p} delay={i * 0.05}>
                <div className="flex items-start gap-3 p-5 rounded-2xl bg-black/20 border border-white/10 h-full">
                  <CheckCircle2 className="w-5 h-5 text-[#FF6A00] mt-0.5" />
                  <p className="text-gray-200 text-left">{p}</p>
                </div>
              </FadeUp>
            ))}
          </div>

          <FadeUp delay={0.3}>
            <div className="mt-10 p-6 rounded-2xl bg-[#FF6A00]/10 border border-[#FF6A00]/25 max-w-4xl mx-auto text-center">
              <p className="text-white font-semibold">
                Quality is measured, documented, and enforced.
              </p>
            </div>
          </FadeUp>
        </div>
      </section>

      {/* ================= QA MODEL 4 LAYERS ================= */}
      <section className="max-w-7xl mx-auto px-6 py-20">
        <FadeUp>
          <h2 className="text-3xl font-bold text-center">
            The Zryoss <span className="text-[#FF6A00]">Quality Assurance Model</span>
          </h2>

          <p className="mt-4 text-gray-300 text-center max-w-3xl mx-auto">
            Zryoss follows a four-layer QA framework. Each layer has defined checks and ownership.
          </p>
        </FadeUp>

        <div className="mt-12 grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {qaLayers.map((x, i) => (
            <FadeUp key={x.id} delay={i * 0.05}>
              <div
                className="p-6 rounded-2xl bg-[#1E1E1E] border border-white/10 hover:border-[#FF6A00]/40 transition h-full"
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
            </FadeUp>
          ))}
        </div>
      </section>

      {/* ================= DETAILED QA LAYERS ================= */}
      <section className="bg-[#1E1E1E] border-y border-white/10">
        <div className="max-w-7xl mx-auto px-6 py-20">
          <FadeUp>
            <h2 className="text-3xl font-bold text-center">Detailed QA Layers (1–4)</h2>
          </FadeUp>

          <div className="mt-12 space-y-4 max-w-4xl mx-auto">
            {detailedLayers.map((s) => {
              const isOpen = openLayer === s.id;
              return (
                <div
                  key={s.id}
                  className={`rounded-2xl border transition ${isOpen
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
          <FadeUp>
            <div>
              <h2 className="text-3xl font-bold">
                Quality Ownership &{" "}
                <span className="text-[#FF6A00]">Accountability</span>
              </h2>

              <p className="mt-4 text-gray-300">
                Quality at Zryoss has clear ownership:
              </p>

              <ul className="mt-6 space-y-3">
                {ownershipRoles.map((p, i) => (
                  <FadeUp key={p} delay={i * 0.05}>
                    <li className="flex items-start gap-3 p-4 rounded-xl bg-[#1E1E1E] border border-white/10">
                      <CheckCircle2 className="w-5 h-5 text-[#FF6A00] mt-0.5" />
                      <span className="text-gray-200">{p}</span>
                    </li>
                  </FadeUp>
                ))}
              </ul>

              <div className="mt-8 p-5 rounded-2xl bg-[#FF6A00]/10 border border-[#FF6A00]/25">
                <p className="text-white font-semibold">
                  Quality is never left to individual discretion.
                </p>
              </div>
            </div>
          </FadeUp>

          <FadeUp delay={0.2}>
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
          </FadeUp>
        </div>
      </section>

      {/* ================= BENCHMARKS ================= */}
      <section className="bg-[#1E1E1E] border-y border-white/10">
        <div className="max-w-7xl mx-auto px-6 py-20">
          <FadeUp>
            <h2 className="text-3xl font-bold text-center">
              Standardized <span className="text-[#FF6A00]">Quality Benchmarks</span>
            </h2>

            <p className="mt-4 text-gray-300 text-center">
              Zryoss maintains standardized benchmarks for:
            </p>
          </FadeUp>

          <div className="mt-12 grid sm:grid-cols-2 lg:grid-cols-5 gap-4">
            {benchmarks.map((b, i) => (
              <FadeUp key={b.title} delay={i * 0.05}>
                <div
                  className="p-6 rounded-2xl bg-black/15 border border-white/10 hover:border-[#FF6A00]/40 transition text-center h-full"
                >
                  <div className="mx-auto w-12 h-12 rounded-2xl bg-[#FF6A00]/15 border border-[#FF6A00]/30 text-[#FF6A00] flex items-center justify-center">
                    {b.icon}
                  </div>
                  <p className="mt-4 font-semibold text-gray-200">{b.title}</p>
                </div>
              </FadeUp>
            ))}
          </div>

          <FadeUp delay={0.3}>
            <p className="mt-10 text-center font-semibold text-white">
              Benchmarks are consistent across all domains.
            </p>
          </FadeUp>
        </div>
      </section>

      {/* ================= VENDOR QUALITY ENFORCEMENT ================= */}
      <section className="max-w-7xl mx-auto px-6 py-20">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <FadeUp>
            <div>
              <h2 className="text-3xl font-bold">
                Vendor Quality <span className="text-[#FF6A00]">Enforcement</span>
              </h2>

              <p className="mt-4 text-gray-300">For vendors:</p>

              <ul className="mt-6 space-y-3">
                {vendorQualityEnforcement.map((p, i) => (
                  <FadeUp key={p} delay={i * 0.05}>
                    <li className="flex items-start gap-3 p-4 rounded-xl bg-[#1E1E1E] border border-white/10">
                      <CheckCircle2 className="w-5 h-5 text-[#FF6A00] mt-0.5" />
                      <span className="text-gray-200">{p}</span>
                    </li>
                  </FadeUp>
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
          </FadeUp>

          <FadeUp delay={0.2}>
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
          </FadeUp>
        </div>
      </section>

      {/* ================= QUALITY METRICS ================= */}
      <section className="bg-[#1E1E1E] border-y border-white/10">
        <div className="max-w-7xl mx-auto px-6 py-20">
          <FadeUp>
            <h2 className="text-3xl font-bold text-center">
              Quality Metrics & <span className="text-[#FF6A00]">Monitoring</span>
            </h2>

            <p className="mt-4 text-gray-300 text-center">
              Zryoss tracks quality through:
            </p>
          </FadeUp>

          <div className="mt-12 grid sm:grid-cols-2 lg:grid-cols-5 gap-4">
            {metrics.map((m, i) => (
              <FadeUp key={m.title} delay={i * 0.05}>
                <div
                  className="p-6 rounded-2xl bg-black/15 border border-white/10 hover:border-[#FF6A00]/40 transition text-center h-full"
                >
                  <div className="mx-auto w-12 h-12 rounded-2xl bg-[#FF6A00]/15 border border-[#FF6A00]/30 text-[#FF6A00] flex items-center justify-center">
                    {m.icon}
                  </div>
                  <p className="mt-4 font-semibold text-gray-200">{m.title}</p>
                </div>
              </FadeUp>
            ))}
          </div>

          <FadeUp delay={0.3}>
            <p className="mt-10 text-center font-semibold text-white">
              Quality decisions are data-driven, not opinion-based.
            </p>
          </FadeUp>
        </div>
      </section>

      {/* ================= ISSUE HANDLING ================= */}
      <section className="max-w-7xl mx-auto px-6 py-20">
        <FadeUp>
          <h2 className="text-3xl font-bold text-center">
            Issue Handling & <span className="text-[#FF6A00]">Quality Escalation</span>
          </h2>

          <p className="mt-4 text-gray-300 text-center">
            If quality issues arise:
          </p>
        </FadeUp>

        <div className="mt-10 max-w-4xl mx-auto space-y-4">
          {escalationFlow.map((s, i) => (
            <FadeUp key={s} delay={i * 0.05}>
              <div
                className="flex items-start gap-4 p-5 rounded-2xl bg-[#1E1E1E] border border-white/10 h-full"
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
            </FadeUp>
          ))}
        </div>
      </section>

      {/* ================= SCALE ================= */}
      <section className="bg-[#1E1E1E] border-y border-white/10">
        <div className="max-w-7xl mx-auto px-6 py-20">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <FadeUp>
              <div>
                <h2 className="text-3xl font-bold">
                  How Quality Scales{" "}
                  <span className="text-[#FF6A00]">With Growth</span>
                </h2>

                <p className="mt-4 text-gray-300">As volume increases:</p>

                <ul className="mt-6 space-y-3">
                  {scalePoints.map((p, i) => (
                    <FadeUp key={p} delay={i * 0.05}>
                      <li className="flex items-start gap-3 p-4 rounded-xl bg-black/15 border border-white/10">
                        <CheckCircle2 className="w-5 h-5 text-[#FF6A00] mt-0.5" />
                        <span className="text-gray-200">{p}</span>
                      </li>
                    </FadeUp>
                  ))}
                </ul>

                <div className="mt-8 p-6 rounded-2xl bg-[#FF6A00]/10 border border-[#FF6A00]/25">
                  <p className="text-white font-semibold">
                    Scale does not dilute quality— <span className="font-bold">it strengthens it.</span>
                  </p>
                </div>
              </div>
            </FadeUp>

            <FadeUp delay={0.2}>
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
            </FadeUp>
          </div>
        </div>
      </section>

      {/* ================= WHO BENEFITS ================= */}
      <section className="max-w-7xl mx-auto px-6 py-20">
        <FadeUp>
          <h2 className="text-3xl font-bold text-center">
            Who Benefits From This{" "}
            <span className="text-[#FF6A00]">QA Framework</span>
          </h2>
        </FadeUp>

        <div className="mt-12 grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {beneficiaries.map((x, i) => (
            <FadeUp key={x.title} delay={i * 0.05}>
              <div
                className="p-6 rounded-2xl bg-[#1E1E1E] border border-white/10 hover:border-[#FF6A00]/40 transition h-full"
              >
                <div className="w-12 h-12 rounded-2xl bg-[#FF6A00]/15 border border-[#FF6A00]/30 text-[#FF6A00] flex items-center justify-center">
                  {x.icon}
                </div>
                <h3 className="mt-4 font-bold text-lg">{x.title}</h3>
                <p className="mt-2 text-gray-400 text-sm">{x.text}</p>
              </div>
            </FadeUp>
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
          <FadeUp>
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
          </FadeUp>
        </div>
      </section>

      {/* ================= FINAL CTA ================= */}
      <section className="relative overflow-hidden bg-[#1E1E1E] border-t border-white/10">
        <div className="absolute inset-0 bg-gradient-to-b from-[#1E1E1E] via-black/30 to-[#121212]" />
        <div className="absolute -top-24 left-0 w-[520px] h-[520px] rounded-full bg-[#FF6A00]/10 blur-3xl" />
        <div className="absolute -bottom-40 right-0 w-[650px] h-[650px] rounded-full bg-[#FF6A00]/10 blur-3xl" />

        <div className="relative max-w-5xl mx-auto px-6 py-20 text-center">
          <FadeUp>
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

            <FadeUp>
              <div className="mt-10 flex justify-center">
                <button
                  onClick={() => navigate("/contact")}
                  className="inline-flex items-center gap-2 px-8 py-4 rounded-2xl bg-[#FF6A00] text-white font-bold hover:brightness-110 transition">
                  Start Quality-Driven Execution <ArrowRight className="w-5 h-5" />
                </button>
              </div>
            </FadeUp>
          </FadeUp>
        </div>
      </section>
    </div>
  );
}
