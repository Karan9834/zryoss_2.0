import React, { useMemo, useState } from "react";
import {
  ArrowRight,
  CheckCircle2,
  Shield,
  FileText,
  Database,
  Presentation,
  Handshake,
  CalendarDays,
  Settings,
  Flag,
  AlertTriangle,
  Users,
  SearchCheck,
  Layers,
  BriefcaseBusiness,
  Building2,
  GraduationCap,
  HeartPulse,
  Paintbrush,
  Workflow,
  ChevronDown,
  ChevronUp,
  ClipboardCheck,
  Target,
  Network,
} from "lucide-react";

export default function Onboarding() {
  const [openStep, setOpenStep] = useState("step-1");

  // ✅ 7 real onboarding steps (NO CONTENT LOSS)
  const steps = useMemo(
    () => [
      {
        id: "step-1",
        number: "1️⃣",
        title: "Client Entry & Opportunity Registration",
        icon: <Database className="w-5 h-5" />,
        points: [
          "Client details are captured centrally",
          "Opportunity is logged in the system",
          "Engagement type is identified (IPP / BPP / Direct)",
          "Initial requirements are recorded",
        ],
        highlight: "This creates one source of truth from day one.",
      },
      {
        id: "step-2",
        number: "2️⃣",
        title: "Requirement Discovery & Documentation",
        icon: <FileText className="w-5 h-5" />,
        intro: "Zryoss conducts structured discovery to understand:",
        points: [
          "Business objectives",
          "Functional and operational needs",
          "Success criteria",
          "Constraints and priorities",
        ],
        highlight:
          "Requirements are documented, reviewed, and approved before moving forward.",
      },
      {
        id: "step-3",
        number: "3️⃣",
        title: "Scope Validation & Feasibility Review",
        icon: <Shield className="w-5 h-5" />,
        intro: "Before any commitment:",
        points: [
          "Scope is validated against execution capability",
          "Dependencies and risks are identified",
          "Timelines are assessed realistically",
          "Execution approach is finalized",
          "Unrealistic expectations are corrected early.",
        ],
      },
      {
        id: "step-4",
        number: "4️⃣",
        title: "Solution Alignment & Demo Confirmation",
        icon: <Presentation className="w-5 h-5" />,
        points: [
          "Relevant solution demos are conducted",
          "Client expectations are aligned with deliverables",
          "Technical and operational clarity is ensured",
        ],
        highlight:
          "This step ensures the client knows exactly what will be delivered.",
      },
      {
        id: "step-5",
        number: "5️⃣",
        title: "Commercial & Timeline Finalization",
        icon: <Handshake className="w-5 h-5" />,
        points: [
          "Commercial terms are confirmed",
          "Deliverables and milestones are finalized",
          "Timelines and dependencies are locked",
          "No ambiguity remains after this stage.",
        ],
      },
      {
        id: "step-6",
        number: "6️⃣",
        title: "Execution Readiness & Account Setup",
        icon: <Settings className="w-5 h-5" />,
        intro: "Zryoss prepares the execution environment:",
        points: [
          "Account Manager is assigned",
          "Execution brand and vendors are aligned",
          "Communication channels are defined",
          "Reporting and escalation paths are set",
        ],
        highlight: "The system is now execution-ready.",
      },
      {
        id: "step-7",
        number: "7️⃣",
        title: "Onboarding Sign-off & Kickoff",
        icon: <Flag className="w-5 h-5" />,
        points: [
          "Onboarding checklist is completed",
          "Scope, timelines, and responsibilities are confirmed",
          "Formal kickoff is conducted",
        ],
        highlight: "Only after sign-off does execution officially begin.",
      },
    ],
    []
  );

  // ✅ Updated to 6 risks (left list + right cards)
  const risks = [
    "Requirements are unclear",
    "Expectations are misaligned",
    "Scope is not validated",
    "Timelines are assumed",
    "Ownership is undefined",
    "Communication breakdown",
  ];

  const onboardingEnsures = [
    "Clear understanding of client goals",
    "Proper scope definition",
    "Execution feasibility validation",
    "Alignment across all stakeholders",
    "Smooth transition into execution",
  ];

  // ✅ Benefits were 5 (odd) -> now 6 (even) by adding extra useful card (no content removed)
  const benefits = [
    {
      title: "Prevents scope creep",
      icon: <Layers className="w-6 h-6" />,
      desc: "Scope remains controlled and protected from unplanned expansion.",
    },
    {
      title: "Aligns expectations early",
      icon: <SearchCheck className="w-6 h-6" />,
      desc: "Stakeholders start aligned with shared definitions and clarity.",
    },
    {
      title: "Reduces execution risk",
      icon: <Shield className="w-6 h-6" />,
      desc: "Execution begins only after validation and feasibility checks.",
    },
    {
      title: "Improves delivery accuracy",
      icon: <CheckCircle2 className="w-6 h-6" />,
      desc: "Clear requirements and milestones ensure consistent delivery.",
    },
    {
      title: "Builds long-term trust",
      icon: <Handshake className="w-6 h-6" />,
      desc: "Predictable onboarding creates confidence and trust over time.",
    },
    {
      title: "Defined ownership",
      icon: <Target className="w-6 h-6" />,
      desc: "Responsibilities stay clear with defined ownership and approvals.",
    },
  ];

  // ✅ Verticals are 7 -> made 8 (even) with extra ecosystem card
  const verticals = [
    { title: "IT & Software", icon: <Workflow className="w-6 h-6" /> },
    { title: "Digital Marketing", icon: <BriefcaseBusiness className="w-6 h-6" /> },
    { title: "HR & Recruitment", icon: <Users className="w-6 h-6" /> },
    { title: "Education & EdTech", icon: <GraduationCap className="w-6 h-6" /> },
    { title: "Healthcare Technology", icon: <HeartPulse className="w-6 h-6" /> },
    { title: "Interior & Infrastructure", icon: <Paintbrush className="w-6 h-6" /> },
    { title: "Business & Professional Services", icon: <Building2 className="w-6 h-6" /> },
    { title: "Ecosystem Operations", icon: <Network className="w-6 h-6" /> },
  ];

  const handleScrollToFramework = () => {
    const el = document.getElementById("framework");
    if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  return (
    <div className="min-h-screen bg-[#121212] text-white">
      {/* HERO */}
      <section
        className="relative overflow-hidden"
        style={{
          backgroundImage:
            "url(https://images.unsplash.com/photo-1552664730-d307ca884978?q=80&w=1920&auto=format&fit=crop)",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        {/* overlays */}
        <div className="absolute inset-0 bg-[#0b0b0b]/75" />
        <div className="absolute inset-0 bg-gradient-to-b from-[#121212]/20 via-[#121212]/70 to-[#121212]" />

        {/* orange glow */}
        <div className="absolute -top-32 left-1/2 -translate-x-1/2 w-[900px] h-[900px] rounded-full bg-[#FF6A00]/10 blur-3xl" />
        <div className="absolute -bottom-44 right-0 w-[550px] h-[550px] rounded-full bg-[#FF6A00]/10 blur-3xl" />

        <div className="relative max-w-7xl mx-auto px-6 py-28">
          <div className="text-center max-w-3xl mx-auto">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10 text-sm text-gray-200">
              <span className="w-2 h-2 rounded-full bg-[#FF6A00]" />
              Zryoss · Client Onboarding Process
            </div>

            <h1 className="mt-6 text-4xl sm:text-5xl font-extrabold leading-tight">
              Structured Onboarding. Clear Expectations.{" "}
              <span className="text-[#FF6A00]">Confident Execution.</span>
            </h1>

            <p className="mt-6 text-gray-200 leading-relaxed text-lg">
              At Zryoss, client onboarding is not a formality. It is a controlled
              operational process designed to ensure clarity, alignment, and execution
              readiness before any work begins.
              <br />
              <span className="text-white font-semibold">
                Zryoss believes that strong delivery starts with structured onboarding.
              </span>
            </p>

            <div className="mt-10 flex flex-col sm:flex-row gap-4 justify-center">
              <button
                onClick={handleScrollToFramework}
                className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl bg-[#FF6A00] text-white font-semibold hover:brightness-110 transition"
              >
                Explore Framework <ArrowRight className="w-5 h-5" />
              </button>
              <a
                href="#detailed-steps"
                className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl border border-white/15 bg-white/5 hover:bg-white/10 transition font-semibold"
              >
                View Steps
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* WHY CLIENT ONBOARDING MATTERS */}
      <section className="max-w-7xl mx-auto px-6 py-20">
        <div className="grid lg:grid-cols-2 gap-10 items-start">
          <div>
            <h2 className="text-3xl font-bold">
              Why Client Onboarding <span className="text-[#FF6A00]">Matters</span>
            </h2>
            <p className="mt-4 text-gray-300">
              Most delivery failures begin at onboarding because:
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
              Zryoss prevents these risks by treating onboarding as a{" "}
              <span className="text-white font-semibold">core operational phase</span>, not an
              administrative step.
            </p>
          </div>

          {/* ✅ Now it will render 6 cards (2x3) */}
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
                  Controlled onboarding reduces this risk before delivery starts.
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* WHAT IT MEANS */}
      <section className="bg-[#1E1E1E] border-y border-white/10">
        <div className="max-w-7xl mx-auto px-6 py-20">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold">
                What Client Onboarding Means at{" "}
                <span className="text-[#FF6A00]">Zryoss</span>
              </h2>

              <p className="mt-4 text-gray-300">
                Client onboarding at Zryoss ensures:
              </p>

              <ul className="mt-6 space-y-3">
                {onboardingEnsures.map((p) => (
                  <li
                    key={p}
                    className="flex items-start gap-3 p-4 rounded-xl bg-black/20 border border-white/10"
                  >
                    <CheckCircle2 className="w-5 h-5 text-[#FF6A00] mt-0.5" />
                    <span className="text-gray-200">{p}</span>
                  </li>
                ))}
              </ul>

              <div className="mt-8 p-5 rounded-2xl bg-[#FF6A00]/10 border border-[#FF6A00]/25">
                <p className="text-white font-semibold">
                  No execution starts without onboarding completion.
                </p>
              </div>
            </div>

            <div className="relative">
              <div className="absolute inset-0 rounded-3xl bg-[#FF6A00]/10 blur-2xl" />
              <div className="relative overflow-hidden rounded-3xl border border-white/10 bg-[#121212]">
                <img
                  alt="Workflow illustration"
                  className="w-full h-[380px] object-cover opacity-90"
                  src="https://images.unsplash.com/photo-1553877522-43269d4ea984?q=80&w=1600&auto=format&fit=crop"
                />
                <div className="p-6">
                  <p className="text-sm text-gray-300">
                    Visual alignment before execution — clarity across goals, scope, and delivery.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FRAMEWORK 8 CARDS (EVEN) */}
      <section id="framework" className="max-w-7xl mx-auto px-6 py-20">
        <h2 className="text-3xl font-bold text-center">
          Zryoss Client Onboarding <span className="text-[#FF6A00]">Framework</span>
        </h2>
        <p className="mt-4 text-gray-300 text-center max-w-3xl mx-auto">
          The onboarding process follows a seven-step structured framework:
        </p>

        <div className="mt-12 grid md:grid-cols-2 lg:grid-cols-4 gap-4">
          {[
            { title: "Client Entry & Opportunity Registration", icon: <Database className="w-5 h-5" /> },
            { title: "Requirement Discovery & Documentation", icon: <FileText className="w-5 h-5" /> },
            { title: "Scope Validation & Feasibility Review", icon: <Shield className="w-5 h-5" /> },
            { title: "Solution Alignment & Demo Confirmation", icon: <Presentation className="w-5 h-5" /> },
            { title: "Commercial & Timeline Finalization", icon: <CalendarDays className="w-5 h-5" /> },
            { title: "Execution Readiness & Account Setup", icon: <Settings className="w-5 h-5" /> },
            { title: "Onboarding Sign-off & Kickoff", icon: <Flag className="w-5 h-5" /> },

            {
              title: "Quality Gate Control",
              icon: <ClipboardCheck className="w-5 h-5" />,
              extra: true,
            },
          ].map((s, idx) => (
            <div
              key={s.title}
              className={`p-5 rounded-2xl border transition ${
                s.extra
                  ? "bg-[#FF6A00]/10 border-[#FF6A00]/30"
                  : "bg-[#1E1E1E] border-white/10 hover:border-[#FF6A00]/40"
              }`}
            >
              <div className="flex items-center justify-between">
                <div
                  className={`w-10 h-10 rounded-xl flex items-center justify-center ${
                    s.extra
                      ? "bg-[#FF6A00]/20 border border-[#FF6A00]/30 text-[#FF6A00]"
                      : "bg-[#FF6A00]/15 border border-[#FF6A00]/30 text-[#FF6A00]"
                  }`}
                >
                  {s.icon}
                </div>

                <span className="text-sm text-gray-400">
                  {s.extra ? "Quality Gate" : `Step ${Math.min(idx + 1, 7)}`}
                </span>
              </div>

              <h3 className="mt-4 font-bold">{s.title}</h3>

              <p className="mt-2 text-gray-400 text-sm">
                {s.extra
                  ? "No execution begins until onboarding approvals are complete."
                  : "Defined ownership, approvals and structured readiness control."}
              </p>

              <div className="mt-4 h-[3px] w-14 bg-[#FF6A00] rounded-full" />
            </div>
          ))}
        </div>

        <p className="mt-10 text-center text-gray-300">
          Each step has defined ownership and approval.
        </p>
      </section>

      {/* DETAILED STEPS */}
      <section id="detailed-steps" className="bg-[#1E1E1E] border-y border-white/10">
        <div className="max-w-7xl mx-auto px-6 py-20">
          <h2 className="text-3xl font-bold text-center">
            Detailed Onboarding Steps (1–7)
          </h2>
          <p className="mt-4 text-gray-300 text-center max-w-3xl mx-auto">
            Each onboarding step is structured to ensure clarity, alignment, and execution readiness.
          </p>

          <div className="mt-12 space-y-4">
            {steps.map((s) => {
              const isOpen = openStep === s.id;
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
                    onClick={() => setOpenStep(isOpen ? "" : s.id)}
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

      {/* ROLE OF ACCOUNT MANAGEMENT */}
      <section className="max-w-7xl mx-auto px-6 py-20">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-3xl font-bold">
              Role of Account Management During{" "}
              <span className="text-[#FF6A00]">Onboarding</span>
            </h2>

            <p className="mt-4 text-gray-300">The Account Manager:</p>

            <ul className="mt-6 space-y-3">
              {[
                "Coordinates all onboarding steps",
                "Acts as the single point of contact",
                "Ensures documentation and approvals",
                "Prepares the client for execution",
              ].map((p) => (
                <li
                  key={p}
                  className="flex items-start gap-3 p-4 rounded-xl bg-[#1E1E1E] border border-white/10"
                >
                  <CheckCircle2 className="w-5 h-5 text-[#FF6A00] mt-0.5" />
                  <span className="text-gray-200">{p}</span>
                </li>
              ))}
            </ul>

            <div className="mt-8 p-5 rounded-2xl bg-[#FF6A00]/10 border border-[#FF6A00]/25">
              <p className="text-white font-semibold">
                Clients are never passed between teams.
              </p>
            </div>
          </div>

          <div className="relative">
            <div className="absolute inset-0 rounded-3xl bg-[#FF6A00]/10 blur-2xl" />
            <div className="relative overflow-hidden rounded-3xl border border-white/10 bg-[#121212]">
              <img
                alt="Account manager illustration"
                className="w-full h-[380px] object-cover opacity-90"
                src="https://images.unsplash.com/photo-1521737604893-d14cc237f11d?q=80&w=1600&auto=format&fit=crop"
              />
              <div className="p-6">
                <p className="text-sm text-gray-300">
                  A single point of control ensures accountability and smooth transition into execution.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* BENEFITS */}
      <section className="bg-[#1E1E1E] border-y border-white/10">
        <div className="max-w-7xl mx-auto px-6 py-20">
          <h2 className="text-3xl font-bold text-center">
            How Onboarding Protects Delivery{" "}
            <span className="text-[#FF6A00]">Quality</span>
          </h2>

          <p className="mt-4 text-gray-300 text-center">
            This onboarding framework:
          </p>

          <div className="mt-12 grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {benefits.map((b) => (
              <div
                key={b.title}
                className="p-6 rounded-2xl bg-black/15 border border-white/10 hover:border-[#FF6A00]/40 transition"
              >
                <div className="w-12 h-12 rounded-2xl bg-[#FF6A00]/15 border border-[#FF6A00]/30 text-[#FF6A00] flex items-center justify-center">
                  {b.icon}
                </div>
                <h3 className="mt-4 font-bold text-lg">{b.title}</h3>
                <p className="mt-2 text-gray-400 text-sm leading-relaxed">
                  {b.desc}
                </p>
              </div>
            ))}
          </div>

          <p className="mt-10 text-center font-semibold text-white">
            Good onboarding = predictable delivery.
          </p>
        </div>
      </section>

      {/* VERTICALS */}
      <section className="max-w-7xl mx-auto px-6 py-20">
        <h2 className="text-3xl font-bold text-center">
          Onboarding Across <span className="text-[#FF6A00]">All Verticals</span>
        </h2>

        <p className="mt-4 text-gray-300 text-center max-w-3xl mx-auto">
          The same onboarding discipline applies across:
        </p>

        <div className="mt-12 grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {verticals.map((v) => (
            <div
              key={v.title}
              className="p-6 rounded-2xl bg-[#1E1E1E] border border-white/10 hover:border-[#FF6A00]/40 transition"
            >
              <div className="w-12 h-12 rounded-2xl bg-[#FF6A00]/15 border border-[#FF6A00]/30 text-[#FF6A00] flex items-center justify-center">
                {v.icon}
              </div>
              <h3 className="mt-4 font-semibold">{v.title}</h3>
              <p className="mt-2 text-gray-400 text-sm">
                Consistent onboarding discipline maintained across the ecosystem.
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* TRANSPARENCY */}
      <section className="bg-[#1E1E1E] border-y border-white/10">
        <div className="max-w-7xl mx-auto px-6 py-20">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold">
                Transparency &{" "}
                <span className="text-[#FF6A00]">Documentation</span>
              </h2>

              <p className="mt-4 text-gray-300">Zryoss ensures:</p>

              <ul className="mt-6 space-y-3">
                {[
                  "All decisions are documented",
                  "Scope and timelines are visible",
                  "Approvals are recorded",
                  "Changes follow a defined process",
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
                  Nothing depends on verbal assumptions.
                </p>
              </div>
            </div>

            <div className="relative">
              <div className="absolute inset-0 rounded-3xl bg-[#FF6A00]/10 blur-2xl" />
              <div className="relative overflow-hidden rounded-3xl border border-white/10 bg-[#121212]">
                <img
                  alt="Documentation illustration"
                  className="w-full h-[380px] object-cover opacity-90"
                  src="https://images.unsplash.com/photo-1450101499163-c8848c66ca85?q=80&w=1600&auto=format&fit=crop"
                />
                <div className="p-6">
                  <p className="text-sm text-gray-300">
                    Nothing is assumed — approvals, scope, and changes are documented and controlled.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* WHO BENEFITS */}
      <section className="max-w-7xl mx-auto px-6 py-20">
        <h2 className="text-3xl font-bold text-center">
          Who Benefits From This{" "}
          <span className="text-[#FF6A00]">Onboarding Model</span>
        </h2>

        <div className="mt-12 grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {[
            { title: "Clients", text: "clarity and confidence" },
            { title: "IPP & BPP", text: "reduced delivery risk" },
            { title: "Execution teams", text: "clear direction" },
            { title: "Leadership", text: "predictable outcomes" },
          ].map((x) => (
            <div
              key={x.title}
              className="p-6 rounded-2xl bg-[#1E1E1E] border border-white/10 hover:border-[#FF6A00]/40 transition"
            >
              <h3 className="font-bold text-lg text-white">
                {x.title} <span className="text-[#FF6A00]">→</span>
              </h3>
              <p className="mt-2 text-gray-300">{x.text}</p>
            </div>
          ))}
        </div>

        <p className="mt-10 text-center font-semibold text-white">
          Everyone starts aligned.
        </p>
      </section>

      {/* QUALITY GATE */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-[#121212] via-[#1E1E1E] to-[#121212]" />
        <div className="absolute left-1/2 -translate-x-1/2 top-0 w-[800px] h-[800px] rounded-full bg-[#FF6A00]/10 blur-3xl" />

        <div className="relative max-w-5xl mx-auto px-6 py-20 text-center">
          <h2 className="text-3xl sm:text-4xl font-extrabold">
            Onboarding Is the First{" "}
            <span className="text-[#FF6A00]">Quality Gate</span>
          </h2>

          <p className="mt-6 text-gray-300 text-lg">
            At Zryoss:
            <br />
            <span className="text-white font-bold">
              Quality does not start at delivery
            </span>
            <br />
            <span className="text-white font-bold">
              It starts at onboarding
            </span>
          </p>

          <p className="mt-4 text-gray-400">
            This is why onboarding is treated as a quality gate, not paperwork.
          </p>
        </div>
      </section>

      {/* FINAL CTA */}
      <section className="relative overflow-hidden bg-[#1E1E1E] border-t border-white/10">
        <div className="absolute inset-0 bg-gradient-to-b from-[#1E1E1E] via-black/30 to-[#121212]" />
        <div className="absolute -top-24 left-0 w-[500px] h-[500px] rounded-full bg-[#FF6A00]/10 blur-3xl" />
        <div className="absolute -bottom-40 right-0 w-[600px] h-[600px] rounded-full bg-[#FF6A00]/10 blur-3xl" />

        <div className="relative max-w-5xl mx-auto px-6 py-20 text-center">
          <h2 className="text-3xl sm:text-4xl font-extrabold">
            Final Thought
          </h2>

          <p className="mt-6 text-gray-200 text-lg font-semibold">
            Execution problems are expensive.
            <br />
            <span className="text-[#FF6A00]">Onboarding discipline is not.</span>
          </p>

          <p className="mt-6 text-gray-300">
            Zryoss ensures that every client starts right.
          </p>

          <p className="mt-3 text-white font-bold">
            You bring the client.
            <br />
            Zryoss prepares the system.
          </p>

          <div className="mt-10 flex justify-center">
            <button className="inline-flex items-center gap-2 px-8 py-4 rounded-2xl bg-[#FF6A00] text-white font-bold hover:brightness-110 transition">
              Start Your Onboarding Journey <ArrowRight className="w-5 h-5" />
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}
