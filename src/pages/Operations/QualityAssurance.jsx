import React, { useMemo, useState } from "react";
import {
  ArrowRight,
  AlertTriangle,
  CheckCircle2,
  ShieldCheck,
  Shield,
  FileText,
  Settings,
  PackageCheck,
  MessageSquareText,
  LineChart,
  BarChart3,
  PieChart,
  TrendingUp,
  ClipboardCheck,
  Gauge,
  Clock3,
  MessagesSquare,
  FileCheck2,
  Users,
  Crown,
  Boxes,
  Workflow,
  ChevronDown,
  ChevronUp,
  Search,
  RotateCcw,
  Waypoints,
  Layers,
  BadgeCheck,
} from "lucide-react";

export default function QualityAssurance() {
  const [openLayer, setOpenLayer] = useState("layer-1");

  const risks = useMemo(
    () => [
      "Standards are undefined or informal",
      "Vendors interpret scope differently",
      "Reviews happen only at the end",
      "Accountability is unclear",
      "Speed is prioritized over correctness",
      "Quality becomes reactive instead of preventive",
    ],
    []
  );

  const qaMeans = useMemo(
    () => [
      "Scope accuracy and alignment",
      "Execution consistency",
      "Deliverable completeness",
      "Compliance with agreed standards",
      "Client expectation matching",
    ],
    []
  );

  const layers = useMemo(
    () => [
      {
        id: "layer-1",
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
        artTitle: "Document + magnifying glass",
        artIcon: <Search className="w-5 h-5" />,
      },
      {
        id: "layer-2",
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
        artTitle: "Gear + progress bar",
        artIcon: <Workflow className="w-5 h-5" />,
      },
      {
        id: "layer-3",
        number: "3️⃣",
        title: "Pre-Delivery Quality Verification",
        icon: <PackageCheck className="w-5 h-5" />,
        intro: "Before final delivery:",
        points: [
          "Deliverables are reviewed against scope",
          "Functional and non-functional checks are performed",
          "Documentation and handover readiness is verified",
          "Quality approval is recorded",
        ],
        highlight: "No delivery moves forward without quality sign-off.",
        artTitle: "Checklist + approval stamp",
        artIcon: <BadgeCheck className="w-5 h-5" />,
      },
      {
        id: "layer-4",
        number: "4️⃣",
        title: "Post-Delivery Quality Review",
        icon: <RotateCcw className="w-5 h-5" />,
        intro: "After delivery:",
        points: [
          "Client feedback is reviewed",
          "Delivery outcomes are evaluated",
          "Improvement opportunities are identified",
          "Learnings are documented",
        ],
        highlight: "This ensures continuous quality improvement across the ecosystem.",
        artTitle: "Feedback bubble + chart",
        artIcon: <LineChart className="w-5 h-5" />,
      },
    ],
    []
  );

  const ownership = useMemo(
    () => [
      "Execution teams ensure adherence",
      "Account Managers oversee quality alignment",
      "Operations team enforces standards",
      "Platform governance retains final authority",
      "Quality is never left to individual discretion.",
    ],
    []
  );

  const benchmarks = useMemo(
    () => [
      {
        title: "Timelines and milestones",
        icon: <Clock3 className="w-6 h-6" />,
      },
      {
        title: "Functional completeness",
        icon: <ClipboardCheck className="w-6 h-6" />,
      },
      {
        title: "Performance and reliability",
        icon: <Gauge className="w-6 h-6" />,
      },
      {
        title: "Communication and reporting",
        icon: <MessagesSquare className="w-6 h-6" />,
      },
      {
        title: "Compliance and documentation",
        icon: <FileCheck2 className="w-6 h-6" />,
      },
    ],
    []
  );

  const metrics = useMemo(
    () => [
      { title: "Delivery accuracy", icon: <BarChart3 className="w-5 h-5" />, value: "98%" },
      { title: "Rework frequency", icon: <RotateCcw className="w-5 h-5" />, value: "Low" },
      { title: "Timeline adherence", icon: <Clock3 className="w-5 h-5" />, value: "On-track" },
      { title: "Client satisfaction", icon: <PieChart className="w-5 h-5" />, value: "High" },
      { title: "Resolution effectiveness", icon: <TrendingUp className="w-5 h-5" />, value: "Strong" },
      { title: "Compliance score", icon: <ShieldCheck className="w-5 h-5" />, value: "Verified" },
    ],
    []
  );

  const handleScrollToModel = () => {
    const el = document.getElementById("qa-model");
    if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  return (
    <div className="min-h-screen bg-[#121212] text-white">
      {/* 1. HERO */}
      <section
        className="relative overflow-hidden"
        style={{
          backgroundImage:
            "url(https://images.unsplash.com/photo-1558346490-a72e53ae2d4f?q=80&w=1920&auto=format&fit=crop)",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        {/* overlays */}
        <div className="absolute inset-0 bg-[#0b0b0b]/80" />
        <div className="absolute inset-0 bg-gradient-to-b from-[#121212]/10 via-[#121212]/60 to-[#121212]" />

        {/* abstract grid/circuit glow */}
        <div className="absolute -top-32 left-1/2 -translate-x-1/2 w-[900px] h-[900px] rounded-full bg-[#FF6A00]/10 blur-3xl" />
        <div className="absolute -bottom-44 right-0 w-[550px] h-[550px] rounded-full bg-[#FF6A00]/10 blur-3xl" />

        {/* watermark */}
        <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
          <div className="w-[520px] h-[520px] rounded-full border border-[#FF6A00]/10 bg-[#FF6A00]/5 blur-[0px] flex items-center justify-center">
            <ShieldCheck className="w-48 h-48 text-[#FF6A00]/10" />
          </div>
        </div>

        <div className="relative max-w-7xl mx-auto px-6 py-28">
          <div className="text-center max-w-3xl mx-auto">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10 text-sm text-gray-200">
              <span className="w-2 h-2 rounded-full bg-[#FF6A00]" />
              Zryoss · Quality Assurance Framework
            </div>

            <h1 className="mt-7 text-4xl sm:text-5xl font-extrabold leading-tight">
              Quality Assurance Framework
            </h1>
            <h2 className="mt-4 text-2xl sm:text-3xl font-bold text-gray-100">
              Quality Is Not a Check. It Is a{" "}
              <span className="text-[#FF6A00]">System.</span>
            </h2>

            <p className="mt-6 text-gray-200 leading-relaxed text-lg">
              At Zryoss, quality assurance is not treated as a final inspection or
              post-delivery activity. It is a multi-layered, system-embedded framework
              that governs execution before, during, and after delivery.
              <br />
              <span className="text-white font-semibold">
                Zryoss does not fix quality issues later. It prevents them early.
              </span>
            </p>

            <div className="mt-10 flex flex-col sm:flex-row gap-4 justify-center">
              <button
                onClick={handleScrollToModel}
                className="inline-flex items-center justify-center gap-2 px-7 py-3 rounded-xl bg-[#FF6A00] text-white font-semibold hover:brightness-110 transition"
              >
                Explore QA Model <ArrowRight className="w-5 h-5" />
              </button>
              <a
                href="#learn-more"
                className="inline-flex items-center justify-center gap-2 px-7 py-3 rounded-xl border border-white/15 bg-white/5 hover:bg-white/10 transition font-semibold"
              >
                Learn More
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* 2. WHY QUALITY BREAKS */}
      <section id="learn-more" className="max-w-7xl mx-auto px-6 py-20">
        <div className="grid lg:grid-cols-2 gap-10 items-start">
          <div>
            <h2 className="text-3xl font-bold">
              Why Quality Breaks in{" "}
              <span className="text-[#FF6A00]">Most Businesses</span>
            </h2>

            <p className="mt-4 text-gray-300">
              Quality fails at scale because:
            </p>

            <ul className="mt-6 space-y-3">
              {risks.map((r) => (
                <li
                  key={r}
                  className="flex items-start gap-3 p-4 rounded-xl bg-[#1E1E1E] border border-white/10"
                >
                  <AlertTriangle className="w-5 h-5 text-[#FF6A00] mt-0.5" />
                  <span className="text-gray-200">{r}</span>
                </li>
              ))}
            </ul>

            <p className="mt-6 text-gray-300">
              Zryoss eliminates these risks by embedding quality controls into the{" "}
              <span className="text-white font-semibold">execution lifecycle</span>.
            </p>
          </div>

          {/* broken workflow infographic cards */}
          <div className="grid sm:grid-cols-2 gap-4">
            {risks.map((r) => (
              <div
                key={r}
                className="p-5 rounded-2xl bg-[#1A1A1A] border border-white/10 hover:border-[#FF6A00]/40 transition"
              >
                <div className="w-10 h-10 rounded-xl bg-[#FF6A00]/15 border border-[#FF6A00]/30 flex items-center justify-center text-[#FF6A00]">
                  <AlertTriangle className="w-5 h-5" />
                </div>
                <p className="mt-4 font-semibold">{r}</p>
                <p className="mt-2 text-gray-400 text-sm">
                  Broken workflows multiply these risks at scale.
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 3. WHAT QA MEANS */}
      <section className="relative bg-[#1E1E1E] border-y border-white/10 overflow-hidden">
        {/* faint grid */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_1px_1px,rgba(255,106,0,0.10)_1px,transparent_0)] [background-size:32px_32px] opacity-30" />
        <div className="relative max-w-7xl mx-auto px-6 py-20">
          <div className="text-center max-w-4xl mx-auto">
            <h2 className="text-3xl sm:text-4xl font-bold">
              What Quality Assurance Means at{" "}
              <span className="text-[#FF6A00]">Zryoss</span>
            </h2>

            <p className="mt-4 text-gray-300">
              Quality Assurance at Zryoss covers:
            </p>

            <div className="mt-10 grid sm:grid-cols-2 gap-4 text-left">
              {qaMeans.map((x) => (
                <div
                  key={x}
                  className="flex items-start gap-3 p-5 rounded-2xl bg-black/15 border border-white/10"
                >
                  <CheckCircle2 className="w-5 h-5 text-[#FF6A00] mt-0.5" />
                  <div>
                    <p className="font-semibold">{x}</p>
                    <p className="text-sm text-gray-400 mt-1">
                      Quality is measured, documented, and enforced.
                    </p>
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-10 inline-flex items-center gap-2 px-6 py-3 rounded-2xl bg-[#FF6A00]/10 border border-[#FF6A00]/25">
              <ShieldCheck className="w-5 h-5 text-[#FF6A00]" />
              <p className="text-white font-semibold">
                Quality is measured, documented, and enforced.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 4. QA MODEL (4 layers) */}
      <section id="qa-model" className="max-w-7xl mx-auto px-6 py-20">
        <h2 className="text-3xl font-bold text-center">
          The Zryoss Quality Assurance{" "}
          <span className="text-[#FF6A00]">Model</span>
        </h2>

        <p className="mt-4 text-gray-300 text-center max-w-3xl mx-auto">
          Zryoss follows a four-layer QA framework. Each layer has defined checks and ownership.
        </p>

        <div className="mt-12 grid md:grid-cols-2 lg:grid-cols-4 gap-4">
          {layers.map((l, idx) => (
            <button
              key={l.id}
              onClick={() => {
                const el = document.getElementById("qa-details");
                if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
                setOpenLayer(l.id);
              }}
              className={`text-left p-5 rounded-2xl border transition ${openLayer === l.id
                  ? "bg-[#FF6A00]/10 border-[#FF6A00]/40"
                  : "bg-[#1E1E1E] border-white/10 hover:border-[#FF6A00]/30"
                }`}
            >
              <div className="flex items-center justify-between">
                <div className="w-10 h-10 rounded-xl bg-[#FF6A00]/15 border border-[#FF6A00]/30 text-[#FF6A00] flex items-center justify-center">
                  {l.icon}
                </div>
                <span className="text-sm text-gray-400">Layer {idx + 1}</span>
              </div>
              <h3 className="mt-4 font-bold">{l.title}</h3>
              <div className="mt-4 h-[3px] w-14 bg-[#FF6A00] rounded-full" />
            </button>
          ))}
        </div>
      </section>

      {/* 5. DETAILED LAYERS (accordion) */}
      <section id="qa-details" className="bg-[#1E1E1E] border-y border-white/10">
        <div className="max-w-7xl mx-auto px-6 py-20">
          <h2 className="text-3xl font-bold text-center">
            Detailed Layer Sections (1–4)
          </h2>
          <p className="mt-4 text-gray-300 text-center max-w-3xl mx-auto">
            Each QA layer expands with defined controls designed to prevent quality failures early.
          </p>

          <div className="mt-12 space-y-4">
            {layers.map((l) => {
              const isOpen = openLayer === l.id;
              return (
                <div
                  key={l.id}
                  className={`rounded-2xl border transition ${isOpen
                      ? "border-[#FF6A00]/50 bg-black/25"
                      : "border-white/10 bg-black/10 hover:border-[#FF6A00]/30"
                    }`}
                >
                  <button
                    onClick={() => setOpenLayer(isOpen ? "" : l.id)}
                    className="w-full flex items-center justify-between gap-4 p-5 text-left"
                  >
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 rounded-xl bg-[#FF6A00]/15 border border-[#FF6A00]/30 text-[#FF6A00] flex items-center justify-center">
                        {l.icon}
                      </div>
                      <div>
                        <p className="text-gray-400 text-sm">{l.number}</p>
                        <h3 className="font-bold">{l.title}</h3>
                      </div>
                    </div>

                    <div className="text-[#FF6A00]">
                      {isOpen ? <ChevronUp /> : <ChevronDown />}
                    </div>
                  </button>

                  {isOpen && (
                    <div className="px-5 pb-6">
                      {l.intro && <p className="text-gray-300 mb-4">{l.intro}</p>}

                      <div className="grid lg:grid-cols-[1.2fr_0.8fr] gap-8 items-start">
                        <ul className="space-y-3">
                          {l.points.map((p) => (
                            <li key={p} className="flex items-start gap-3">
                              <CheckCircle2 className="w-5 h-5 text-[#FF6A00] mt-0.5" />
                              <span className="text-gray-200">{p}</span>
                            </li>
                          ))}
                        </ul>

                        {/* layer illustration card */}
                        <div className="rounded-2xl bg-[#121212] border border-white/10 p-5">
                          <div className="flex items-center gap-3">
                            <div className="w-10 h-10 rounded-xl bg-[#FF6A00]/15 border border-[#FF6A00]/30 text-[#FF6A00] flex items-center justify-center">
                              {l.artIcon}
                            </div>
                            <p className="font-semibold">{l.artTitle}</p>
                          </div>
                          <p className="mt-3 text-sm text-gray-400">
                            Visual control to ensure this layer is measurable and enforceable.
                          </p>
                          <div className="mt-4 h-2 w-full bg-white/10 rounded-full overflow-hidden">
                            <div className="h-full w-[75%] bg-[#FF6A00]" />
                          </div>
                        </div>
                      </div>

                      {l.highlight && (
                        <div className="mt-6 p-4 rounded-xl bg-[#FF6A00]/10 border border-[#FF6A00]/25">
                          <p className="font-semibold text-white">{l.highlight}</p>
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

      {/* 6. OWNERSHIP */}
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
              {ownership.map((p) => (
                <li
                  key={p}
                  className="flex items-start gap-3 p-4 rounded-xl bg-[#1E1E1E] border border-white/10"
                >
                  <CheckCircle2 className="w-5 h-5 text-[#FF6A00] mt-0.5" />
                  <span className="text-gray-200">{p}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="relative">
            <div className="absolute inset-0 rounded-3xl bg-[#FF6A00]/10 blur-2xl" />
            <div className="relative overflow-hidden rounded-3xl border border-white/10 bg-[#121212]">
              <img
                alt="Quality hierarchy illustration"
                className="w-full h-[380px] object-cover opacity-90"
                src="https://images.unsplash.com/photo-1521737604893-d14cc237f11d?q=80&w=1600&auto=format&fit=crop"
              />
              <div className="p-6">
                <p className="text-sm text-gray-300">
                  Governance retains final authority — quality is never left to individual discretion.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 7. BENCHMARKS */}
      <section className="bg-[#1E1E1E] border-y border-white/10">
        <div className="max-w-7xl mx-auto px-6 py-20">
          <h2 className="text-3xl font-bold text-center">
            Standardized Quality{" "}
            <span className="text-[#FF6A00]">Benchmarks</span>
          </h2>

          <p className="mt-4 text-gray-300 text-center max-w-3xl mx-auto">
            Zryoss maintains standardized benchmarks for:
          </p>

          <div className="mt-12 grid sm:grid-cols-2 lg:grid-cols-5 gap-4">
            {benchmarks.map((b) => (
              <div
                key={b.title}
                className="p-6 rounded-2xl bg-black/15 border border-white/10 hover:border-[#FF6A00]/40 transition"
              >
                <div className="w-12 h-12 rounded-2xl bg-[#FF6A00]/15 border border-[#FF6A00]/30 text-[#FF6A00] flex items-center justify-center">
                  {b.icon}
                </div>
                <h3 className="mt-4 font-bold">{b.title}</h3>
                <p className="mt-2 text-gray-400 text-sm">
                  Benchmarks are consistent across all domains.
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 8. VENDOR QUALITY ENFORCEMENT */}
      <section className="max-w-7xl mx-auto px-6 py-20">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-3xl font-bold">
              Vendor Quality{" "}
              <span className="text-[#FF6A00]">Enforcement</span>
            </h2>

            <p className="mt-4 text-gray-300">For vendors:</p>

            <ul className="mt-6 space-y-3">
              {[
                "Quality standards are part of SLAs",
                "Deliverables are reviewed centrally",
                "Rework is enforced if standards are missed",
                "Repeated issues lead to corrective action or replacement",
              ].map((p) => (
                <li
                  key={p}
                  className="flex items-start gap-3 p-4 rounded-xl bg-[#1E1E1E] border border-white/10"
                >
                  <AlertTriangle className="w-5 h-5 text-[#FF6A00] mt-0.5" />
                  <span className="text-gray-200">{p}</span>
                </li>
              ))}
            </ul>

            <div className="mt-8 p-5 rounded-2xl bg-[#FF6A00]/10 border border-[#FF6A00]/25">
              <p className="text-white font-semibold">
                Vendors execute work. Zryoss enforces quality.
              </p>
            </div>
          </div>

          <div className="relative">
            <div className="absolute inset-0 rounded-3xl bg-[#FF6A00]/10 blur-2xl" />
            <div className="relative overflow-hidden rounded-3xl border border-white/10 bg-[#121212]">
              <img
                alt="SLA contract illustration"
                className="w-full h-[380px] object-cover opacity-90"
                src="https://images.unsplash.com/photo-1450101499163-c8848c66ca85?q=80&w=1600&auto=format&fit=crop"
              />
              <div className="p-6">
                <p className="text-sm text-gray-300">
                  SLA-driven enforcement ensures compliance, rework control, and fairness.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 9. QUALITY METRICS */}
      <section className="bg-[#1E1E1E] border-y border-white/10">
        <div className="max-w-7xl mx-auto px-6 py-20">
          <h2 className="text-3xl font-bold text-center">
            Quality Metrics &{" "}
            <span className="text-[#FF6A00]">Monitoring</span>
          </h2>

          <p className="mt-4 text-gray-300 text-center max-w-3xl mx-auto">
            Zryoss tracks quality through delivery accuracy, rework frequency, timeline adherence,
            client satisfaction indicators, and issue resolution effectiveness.
          </p>

          <div className="mt-12 grid md:grid-cols-3 gap-4">
            {metrics.map((m) => (
              <div
                key={m.title}
                className="p-6 rounded-2xl bg-black/15 border border-white/10 hover:border-[#FF6A00]/40 transition"
              >
                <div className="flex items-center justify-between">
                  <div className="w-11 h-11 rounded-2xl bg-[#FF6A00]/15 border border-[#FF6A00]/30 text-[#FF6A00] flex items-center justify-center">
                    {m.icon}
                  </div>
                  <span className="text-sm font-bold text-[#FF6A00]">{m.value}</span>
                </div>

                <h3 className="mt-4 font-bold">{m.title}</h3>
                <p className="mt-2 text-gray-400 text-sm">
                  Quality decisions are data-driven, not opinion-based.
                </p>
              </div>
            ))}
          </div>

          {/* dashboard illustration */}
          <div className="mt-10 rounded-3xl border border-white/10 bg-[#121212] overflow-hidden">
            <div className="p-6 flex items-center justify-between">
              <p className="font-semibold">Quality Dashboard View</p>
              <div className="flex items-center gap-2 text-[#FF6A00]">
                <LineChart className="w-5 h-5" />
                <span className="text-sm font-semibold">Monitoring Active</span>
              </div>
            </div>
            <div className="h-[220px] bg-gradient-to-r from-black/30 via-[#FF6A00]/10 to-black/30 relative">
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_1px_1px,rgba(255,106,0,0.12)_1px,transparent_0)] [background-size:22px_22px] opacity-40" />
              <div className="absolute bottom-6 left-6 right-6 grid grid-cols-5 gap-2">
                {[12, 16, 10, 18, 14].map((v, i) => (
                  <div
                    key={i}
                    className="rounded-xl bg-white/5 border border-white/10 p-3"
                  >
                    <div className="h-2 w-full bg-white/10 rounded-full overflow-hidden">
                      <div className="h-full bg-[#FF6A00]" style={{ width: `${v * 5}%` }} />
                    </div>
                    <p className="mt-2 text-xs text-gray-400">Metric {i + 1}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 10. ISSUE HANDLING */}
      <section className="max-w-7xl mx-auto px-6 py-20">
        <h2 className="text-3xl font-bold text-center">
          Issue Handling &{" "}
          <span className="text-[#FF6A00]">Quality Escalation</span>
        </h2>

        <p className="mt-4 text-gray-300 text-center max-w-3xl mx-auto">
          If quality issues arise:
        </p>

        <div className="mt-12 grid lg:grid-cols-4 gap-4">
          {[
            { title: "Log centrally", icon: <FileText className="w-6 h-6" /> },
            { title: "Identify root cause", icon: <Search className="w-6 h-6" /> },
            { title: "Corrective action", icon: <Shield className="w-6 h-6" /> },
            { title: "Preventive measures", icon: <Waypoints className="w-6 h-6" /> },
          ].map((s, idx) => (
            <div
              key={s.title}
              className="relative p-6 rounded-2xl bg-[#1E1E1E] border border-white/10 hover:border-[#FF6A00]/40 transition"
            >
              <div className="w-12 h-12 rounded-2xl bg-[#FF6A00]/15 border border-[#FF6A00]/30 text-[#FF6A00] flex items-center justify-center">
                {s.icon}
              </div>
              <h3 className="mt-4 font-bold">{s.title}</h3>
              <p className="mt-2 text-gray-400 text-sm">
                Escalation ensures resolution, not repetition.
              </p>

              {idx !== 3 && (
                <div className="hidden lg:block absolute top-1/2 -right-3 -translate-y-1/2 text-[#FF6A00]">
                  <ArrowRight className="w-6 h-6" />
                </div>
              )}
            </div>
          ))}
        </div>

        <div className="mt-10 text-center text-gray-300">
          <span className="text-white font-semibold">
            Root cause → Corrective → Preventive
          </span>{" "}
          = systemic quality control.
        </div>
      </section>

      {/* 11. SCALE WITH GROWTH */}
      <section className="bg-[#1E1E1E] border-y border-white/10">
        <div className="max-w-7xl mx-auto px-6 py-20">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold">
                How Quality Scales{" "}
                <span className="text-[#FF6A00]">With Growth</span>
              </h2>

              <p className="mt-6 text-gray-300">
                As volume increases:
              </p>

              <ul className="mt-6 space-y-3">
                {[
                  "Quality standards remain unchanged",
                  "Additional QA capacity is activated",
                  "Automation and checklists are applied",
                  "Governance remains centralized",
                ].map((p) => (
                  <li
                    key={p}
                    className="flex items-start gap-3 p-4 rounded-xl bg-black/15 border border-white/10"
                  >
                    <CheckCircle2 className="w-5 h-5 text-[#FF6A00] mt-0.5" />
                    <span className="text-gray-200">{p}</span>
                  </li>
                ))}
              </ul>

              <div className="mt-8 p-5 rounded-2xl bg-[#FF6A00]/10 border border-[#FF6A00]/25">
                <p className="text-white font-semibold">
                  Scale does not dilute quality — it strengthens it.
                </p>
              </div>
            </div>

            <div className="relative">
              <div className="absolute inset-0 rounded-3xl bg-[#FF6A00]/10 blur-2xl" />
              <div className="relative overflow-hidden rounded-3xl border border-white/10 bg-[#121212]">
                <img
                  alt="Scaling QA illustration"
                  className="w-full h-[380px] object-cover opacity-90"
                  src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=1600&auto=format&fit=crop"
                />
                <div className="p-6">
                  <p className="text-sm text-gray-300">
                    Automation + benchmarks + governance = scalable quality.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 12. WHO BENEFITS */}
      <section className="max-w-7xl mx-auto px-6 py-20">
        <h2 className="text-3xl font-bold text-center">
          Who Benefits From QA{" "}
          <span className="text-[#FF6A00]">Framework</span>
        </h2>

        <div className="mt-12 grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {[
            { title: "Clients", text: "consistent, reliable outcomes", icon: <Users className="w-6 h-6" /> },
            { title: "IPP & BPP", text: "protected brand credibility", icon: <Shield className="w-6 h-6" /> },
            { title: "Vendors", text: "clear expectations and fairness", icon: <Boxes className="w-6 h-6" /> },
            { title: "Leadership", text: "confidence in execution", icon: <Crown className="w-6 h-6" /> },
          ].map((x) => (
            <div
              key={x.title}
              className="p-6 rounded-2xl bg-[#1E1E1E] border border-white/10 hover:border-[#FF6A00]/40 transition"
            >
              <div className="w-12 h-12 rounded-2xl bg-[#FF6A00]/15 border border-[#FF6A00]/30 text-[#FF6A00] flex items-center justify-center">
                {x.icon}
              </div>
              <h3 className="mt-4 font-bold">{x.title}</h3>
              <p className="mt-2 text-gray-300">{x.text}</p>
            </div>
          ))}
        </div>

        <p className="mt-10 text-center font-semibold text-white">
          Quality protects the ecosystem for everyone.
        </p>
      </section>

      {/* 13. QUALITY ASSET */}
      <section className="relative overflow-hidden bg-[#1E1E1E] border-y border-white/10">
        <div className="absolute -top-28 left-0 w-[520px] h-[520px] rounded-full bg-[#FF6A00]/10 blur-3xl" />
        <div className="absolute -bottom-40 right-0 w-[620px] h-[620px] rounded-full bg-[#FF6A00]/10 blur-3xl" />

        <div className="relative max-w-5xl mx-auto px-6 py-20 text-center">
          <h2 className="text-3xl sm:text-4xl font-extrabold">
            Quality Is a{" "}
            <span className="text-[#FF6A00]">Business Asset</span>
          </h2>

          <p className="mt-8 text-gray-200 text-lg font-semibold">
            At Zryoss:
          </p>

          <div className="mt-8 grid sm:grid-cols-3 gap-4">
            {[
              { title: "Quality builds trust", icon: <ShieldCheck className="w-6 h-6" /> },
              { title: "Trust enables scale", icon: <Layers className="w-6 h-6" /> },
              { title: "Scale sustains growth", icon: <TrendingUp className="w-6 h-6" /> },
            ].map((x) => (
              <div
                key={x.title}
                className="p-6 rounded-2xl bg-black/15 border border-white/10 hover:border-[#FF6A00]/40 transition"
              >
                <div className="w-12 h-12 rounded-2xl bg-[#FF6A00]/15 border border-[#FF6A00]/30 text-[#FF6A00] flex items-center justify-center mx-auto">
                  {x.icon}
                </div>
                <p className="mt-4 font-bold">{x.title}</p>
              </div>
            ))}
          </div>

          <p className="mt-10 text-gray-300">
            This is why quality assurance is treated as a core operating function, not a support activity.
          </p>
        </div>
      </section>

      {/* 14. FINAL CTA */}
      <section className="relative overflow-hidden bg-[#121212]">
        {/* background grid */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_1px_1px,rgba(255,106,0,0.10)_1px,transparent_0)] [background-size:30px_30px] opacity-30" />
        <div className="absolute left-1/2 -translate-x-1/2 top-0 w-[900px] h-[900px] rounded-full bg-[#FF6A00]/10 blur-3xl" />

        {/* watermark */}
        <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
          <ShieldCheck className="w-56 h-56 text-[#FF6A00]/10" />
        </div>

        <div className="relative max-w-5xl mx-auto px-6 py-20 text-center">
          <h2 className="text-3xl sm:text-4xl font-extrabold">
            Final Thought
          </h2>

          <p className="mt-8 text-gray-200 text-xl font-semibold">
            “You cannot inspect quality into a system.
            <br />
            You must build it into the system.”
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
            <button className="inline-flex items-center gap-2 px-9 py-4 rounded-2xl bg-[#FF6A00] text-white font-bold hover:brightness-110 transition">
              Start Your Quality Journey <ArrowRight className="w-5 h-5" />
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}
