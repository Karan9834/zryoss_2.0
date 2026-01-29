import React, { useMemo, useState } from "react";
import {
  ArrowRight,
  AlertTriangle,
  CheckCircle2,
  Workflow,
  Shield,
  ShieldCheck,
  FileText,
  CalendarDays,
  Users,
  Handshake,
  Flag,
  Eye,
  RefreshCcw,
  MessageSquare,
  Network,
  Settings,
  ChevronDown,
  ChevronUp,
  Database,
  History,
  Crown,
  Link2Off,
  TrendingUp,
  XCircle,
  Layers,
} from "lucide-react";

export default function AccountManagement() {
  const [openLife, setOpenLife] = useState("life-1");

  const scrollToSupportModel = () => {
    const el = document.getElementById("support-model");
    if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  const risks = [
    "No single point of responsibility exists",
    "Clients and partners chase multiple teams",
    "Communication is scattered",
    "Issues escalate too late",
    "Ownership becomes unclear",
  ];

  const whatItMeans = [
    "Single point of coordination",
    "Execution alignment across teams and vendors",
    "Communication and updates",
    "Issue tracking and escalation",
    "Delivery oversight",
    "Long-term continuity",
  ];

  const dedicatedModel = [
    "One assigned Account Manager",
    "Defined communication channels",
    "Clear responsibility boundaries",
    "Structured update cycles",
  ];

  const roleCards = [
    {
      title: "Understanding engagement scope",
      icon: <FileText className="w-6 h-6" />,
      desc: "Understanding the full scope of engagement",
    },
    {
      title: "Execution coordination",
      icon: <Workflow className="w-6 h-6" />,
      desc: "Coordinating execution across brands and vendors",
    },
    {
      title: "Milestones & timelines",
      icon: <CalendarDays className="w-6 h-6" />,
      desc: "Tracking milestones and timelines",
    },
    {
      title: "Quality control",
      icon: <ShieldCheck className="w-6 h-6" />,
      desc: "Ensuring quality standards are met",
    },
    {
      title: "Escalations & resolution",
      icon: <AlertTriangle className="w-6 h-6" />,
      desc: "Managing escalations and issue resolution",
    },
    {
      title: "Client operational contact",
      icon: <Handshake className="w-6 h-6" />,
      desc: "Acting as the client’s operational point of contact",
    },
  ];

  const lifecycle = useMemo(
    () => [
      {
        id: "life-1",
        number: "1️⃣",
        title: "During Onboarding",
        icon: <CheckCircle2 className="w-5 h-5" />,
        points: [
          "Coordinates onboarding steps",
          "Ensures scope clarity and approvals",
          "Prepares execution readiness",
          "Aligns all stakeholders",
        ],
      },
      {
        id: "life-2",
        number: "2️⃣",
        title: "During Execution",
        icon: <Workflow className="w-5 h-5" />,
        points: [
          "Monitors progress and milestones",
          "Shares structured updates",
          "Flags risks and delays early",
          "Ensures quality checkpoints",
        ],
      },
      {
        id: "life-3",
        number: "3️⃣",
        title: "During Delivery & Closure",
        icon: <Flag className="w-5 h-5" />,
        points: [
          "Oversees final delivery",
          "Ensures sign-offs and documentation",
          "Captures feedback",
          "Supports transition or expansion",
        ],
      },
    ],
    []
  );

  const supportModel = [
    {
      title: "Operational Support",
      icon: <Settings className="w-7 h-7" />,
      desc: "execution and delivery coordination",
    },
    {
      title: "Quality Support",
      icon: <Shield className="w-7 h-7" />,
      desc: "resolution of delivery or output issues",
    },
    {
      title: "Escalation Support",
      icon: <ArrowRight className="w-7 h-7" />,
      desc: "system-level issue handling",
    },
  ];

  const commsFramework = [
    "Scheduled updates (status, progress, risks)",
    "Centralized communication records",
    "Clear response timelines",
    "No dependency on informal follow-ups",
  ];

  const escalationSteps = [
    "Issue is logged centrally",
    "Impact is assessed",
    "Ownership is assigned",
    "Resolution timeline is defined",
    "Escalation is triggered if required",
  ];

  const visibilityCards = [
    { title: "Execution status", icon: <Layers className="w-6 h-6" /> },
    { title: "Delivery timelines", icon: <CalendarDays className="w-6 h-6" /> },
    { title: "Quality adherence", icon: <ShieldCheck className="w-6 h-6" /> },
    { title: "Pending actions", icon: <CheckCircle2 className="w-6 h-6" /> },
    { title: "Risks and resolutions", icon: <AlertTriangle className="w-6 h-6" /> },
  ];

  const ippProtections = [
    "No execution chasing",
    "No vendor coordination",
    "No communication overload",
    "No delivery confusion",
  ];

  const whoBenefits = [
    { title: "Clients", text: "clear communication and delivery confidence", icon: <Handshake className="w-6 h-6" /> },
    { title: "IPP & BPP", text: "operational peace of mind", icon: <Shield className="w-6 h-6" /> },
    { title: "Execution teams", text: "clarity and alignment", icon: <Workflow className="w-6 h-6" /> },
    { title: "Leadership", text: "visibility and control", icon: <Crown className="w-6 h-6" /> },
  ];

  return (
    <div className="min-h-screen bg-[#121212] text-white">
      {/* ====================== HERO SECTION ====================== */}
      {/* ================= HERO ================= */}
      <section className="relative overflow-hidden min-h-screen flex items-center pt-20 pb-16">
        {/* Background Effects */}
        <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
          <div className="absolute top-[-10%] right-[-5%] w-[600px] h-[600px] bg-orange-600/10 rounded-full blur-[120px]" />
          <div className="absolute bottom-[10%] left-[-10%] w-[400px] h-[400px] bg-purple-600/5 rounded-full blur-[100px]" />
        </div>

        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left Column: Content */}
            <div>
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10 text-sm text-gray-200 mb-6">
                <span className="w-2 h-2 rounded-full bg-[#FF6A00]" />
                Zryoss · Operations Control Layer
              </div>

              <h1 className="text-4xl sm:text-5xl font-extrabold leading-tight mb-4">
                Account Management & Support
              </h1>

              <h2 className="text-2xl sm:text-3xl font-extrabold text-[#FF6A00] mb-6">
                One Account. One Owner. <br /> Continuous Support.
              </h2>

              <p className="text-gray-200 leading-relaxed text-lg mb-8">
                At Zryoss, account management is not a support function. It is a core operational control layer that ensures
                execution alignment, communication clarity, and delivery accountability across every engagement.
              </p>

              <p className="text-white font-semibold mb-10">
                Zryoss believes that strong execution requires clear ownership.
              </p>

              <div className="flex flex-col sm:flex-row gap-4">
                <button
                  onClick={scrollToSupportModel}
                  className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-xl bg-[#FF6A00] text-white font-semibold hover:brightness-110 transition shadow-[0_0_28px_rgba(249,115,22,0.25)]"
                >
                  Explore Support Model <ArrowRight className="w-5 h-5" />
                </button>

                <a
                  href="#learn"
                  className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-xl border border-white/15 bg-white/5 hover:bg-white/10 transition font-semibold"
                >
                  Learn More
                </a>
              </div>
            </div>

            {/* Right Column: Image */}
            <div className="relative hidden lg:block">
              <div className="absolute inset-0 bg-orange-500/20 blur-[100px] rounded-full" />
              <img
                src="/operations-hero-images/Account_Management.jpeg"
                alt="Account Management"
                className="relative rounded-3xl shadow-2xl border border-white/10 transform hover:scale-[1.02] transition-transform duration-500 object-cover w-full h-auto aspect-[4/3]"
              />
            </div>
          </div>
        </div>
      </section>

      {/* ====================== WHY ACCOUNT MANAGEMENT MATTERS ====================== */}
      <section id="learn" className="max-w-7xl mx-auto px-6 py-20">
        <div className="grid lg:grid-cols-2 gap-10 items-start">
          {/* LEFT */}
          <div>
            <h2 className="text-3xl font-bold">
              Why Account Management <span className="text-[#FF6A00]">Matters</span>
            </h2>

            <p className="mt-4 text-gray-300">
              Most execution failures happen because:
            </p>

            <ul className="mt-6 space-y-3">
              {risks.map((r) => (
                <li key={r} className="flex items-start gap-3 p-4 rounded-xl bg-[#1E1E1E] border border-white/10">
                  <AlertTriangle className="w-5 h-5 text-[#FF6A00] mt-0.5" />
                  <span className="text-gray-200">{r}</span>
                </li>
              ))}
            </ul>

            <p className="mt-6 text-gray-300">
              Zryoss eliminates these risks by assigning{" "}
              <span className="text-white font-semibold">dedicated account ownership</span> from day one.
            </p>
          </div>

          {/* RIGHT */}
          <div className="relative">
            <div className="absolute inset-0 rounded-3xl bg-[#FF6A00]/10 blur-2xl" />
            <div className="relative overflow-hidden rounded-3xl border border-white/10 bg-[#121212]">
              <img
                alt="Fragmented communication"
                className="w-full h-[420px] object-cover opacity-90"
                src="https://images.unsplash.com/photo-1521737604893-d14cc237f11d?q=80&w=1600&auto=format&fit=crop"
              />
              <div className="p-6">
                <p className="text-sm text-gray-300">
                  Fragmented communication creates delays, missed accountability, and operational confusion.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ====================== WHAT IT MEANS ====================== */}
      <section className="bg-[#1E1E1E] border-y border-white/10">
        <div className="max-w-7xl mx-auto px-6 py-20 text-center">
          <h2 className="text-3xl font-bold">
            What Account Management Means at{" "}
            <span className="text-[#FF6A00]">Zryoss</span>
          </h2>

          <p className="mt-4 text-gray-300">
            Account Management & Support at Zryoss includes:
          </p>

          <div className="mt-10 max-w-4xl mx-auto grid sm:grid-cols-2 gap-4">
            {whatItMeans.map((p) => (
              <div key={p} className="flex items-start gap-3 p-5 rounded-2xl bg-black/20 border border-white/10">
                <CheckCircle2 className="w-5 h-5 text-[#FF6A00] mt-0.5" />
                <p className="text-gray-200">{p}</p>
              </div>
            ))}
          </div>

          <div className="mt-10 p-6 rounded-2xl bg-[#FF6A00]/10 border border-[#FF6A00]/25 max-w-4xl mx-auto">
            <p className="text-white font-semibold">
              The Account Manager represents the system, not an individual team.
            </p>
          </div>
        </div>
      </section>

      {/* ====================== DEDICATED ACCOUNT MANAGER MODEL ====================== */}
      <section id="account-model" className="max-w-7xl mx-auto px-6 py-20">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-3xl font-bold">
              Dedicated Account Manager{" "}
              <span className="text-[#FF6A00]">Model</span>
            </h2>

            <p className="mt-4 text-gray-300">
              Every IPP, BPP, and client engagement receives:
            </p>

            <ul className="mt-6 space-y-3">
              {dedicatedModel.map((p) => (
                <li key={p} className="flex items-start gap-3 p-4 rounded-xl bg-[#1E1E1E] border border-white/10">
                  <CheckCircle2 className="w-5 h-5 text-[#FF6A00] mt-0.5" />
                  <span className="text-gray-200">{p}</span>
                </li>
              ))}
            </ul>

            <div className="mt-8 p-5 rounded-2xl bg-[#FF6A00]/10 border border-[#FF6A00]/25">
              <p className="text-white font-semibold">
                This ensures no confusion and no duplication.
              </p>
            </div>
          </div>

          <div className="relative">
            <div className="absolute inset-0 rounded-3xl bg-[#FF6A00]/10 blur-2xl" />
            <div className="relative overflow-hidden rounded-3xl border border-white/10 bg-[#121212]">
              <img
                alt="Single manager coordination"
                className="w-full h-[420px] object-cover opacity-90"
                src="https://images.unsplash.com/photo-1549923746-c502d488b3ea?q=80&w=1600&auto=format&fit=crop"
              />
              <div className="p-6">
                <p className="text-sm text-gray-300">
                  One owner connected to teams, vendors, and delivery — controlled communication and alignment.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ====================== ROLE OF ACCOUNT MANAGER ====================== */}
      <section className="bg-[#1E1E1E] border-y border-white/10">
        <div className="max-w-7xl mx-auto px-6 py-20">
          <h2 className="text-3xl font-bold text-center">
            Role of the <span className="text-[#FF6A00]">Account Manager</span>
          </h2>

          <p className="mt-4 text-gray-300 text-center max-w-3xl mx-auto">
            The Account Manager is responsible for:
          </p>

          <div className="mt-12 grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {roleCards.map((c) => (
              <div
                key={c.title}
                className="p-6 rounded-2xl bg-black/15 border border-white/10 hover:border-[#FF6A00]/40 transition"
              >
                <div className="w-12 h-12 rounded-2xl bg-[#FF6A00]/15 border border-[#FF6A00]/30 text-[#FF6A00] flex items-center justify-center">
                  {c.icon}
                </div>
                <h3 className="mt-4 font-bold text-lg">{c.title}</h3>
                <p className="mt-2 text-gray-400 text-sm leading-relaxed">{c.desc}</p>
              </div>
            ))}
          </div>

          <div className="mt-10 text-center">
            <p className="text-gray-300 font-semibold">
              They do not execute work.
              <br />
              <span className="text-white font-bold">They control execution flow.</span>
            </p>
          </div>
        </div>
      </section>

      {/* ====================== LIFECYCLE (STEPPER / ACCORDION) ====================== */}
      <section className="max-w-7xl mx-auto px-6 py-20">
        <h2 className="text-3xl font-bold text-center">
          Account Management During the{" "}
          <span className="text-[#FF6A00]">Lifecycle</span>
        </h2>

        <div className="mt-12 space-y-4 max-w-4xl mx-auto">
          {lifecycle.map((s) => {
            const isOpen = openLife === s.id;

            return (
              <div
                key={s.id}
                className={`rounded-2xl border transition ${isOpen
                  ? "border-[#FF6A00]/50 bg-black/25"
                  : "border-white/10 bg-black/10 hover:border-[#FF6A00]/30"
                  }`}
              >
                <button
                  onClick={() => setOpenLife(isOpen ? "" : s.id)}
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
                    <ul className="space-y-3">
                      {s.points.map((p) => (
                        <li key={p} className="flex items-start gap-3">
                          <CheckCircle2 className="w-5 h-5 text-[#FF6A00] mt-0.5" />
                          <span className="text-gray-200">{p}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </section>

      {/* ====================== SUPPORT MODEL ====================== */}
      <section id="support-model" className="bg-[#1E1E1E] border-y border-white/10">
        <div className="max-w-7xl mx-auto px-6 py-20">
          <h2 className="text-3xl font-bold text-center">
            Support Model at{" "}
            <span className="text-[#FF6A00]">Zryoss</span>
          </h2>

          <p className="mt-4 text-gray-300 text-center max-w-3xl mx-auto">
            Support is provided through a structured, tiered approach:
          </p>

          <div className="mt-12 grid md:grid-cols-3 gap-4">
            {supportModel.map((s) => (
              <div
                key={s.title}
                className="p-6 rounded-2xl bg-black/15 border border-white/10 hover:border-[#FF6A00]/40 transition"
              >
                <div className="w-12 h-12 rounded-2xl bg-[#FF6A00]/15 border border-[#FF6A00]/30 text-[#FF6A00] flex items-center justify-center">
                  {s.icon}
                </div>
                <h3 className="mt-4 font-bold text-lg">{s.title}</h3>
                <p className="mt-2 text-gray-400 text-sm leading-relaxed">
                  → {s.desc}
                </p>
              </div>
            ))}
          </div>

          <div className="mt-10 text-center">
            <p className="text-white font-semibold">
              Support is process-driven, not ad-hoc.
            </p>
          </div>
        </div>
      </section>

      {/* ====================== COMMUNICATION & UPDATE FRAMEWORK ====================== */}
      <section className="max-w-7xl mx-auto px-6 py-20">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-3xl font-bold">
              Communication & Update{" "}
              <span className="text-[#FF6A00]">Framework</span>
            </h2>

            <p className="mt-4 text-gray-300">
              Zryoss ensures:
            </p>

            <ul className="mt-6 space-y-3">
              {commsFramework.map((p) => (
                <li key={p} className="flex items-start gap-3 p-4 rounded-xl bg-[#1E1E1E] border border-white/10">
                  <CheckCircle2 className="w-5 h-5 text-[#FF6A00] mt-0.5" />
                  <span className="text-gray-200">{p}</span>
                </li>
              ))}
            </ul>

            <div className="mt-8 p-5 rounded-2xl bg-[#FF6A00]/10 border border-[#FF6A00]/25">
              <p className="text-white font-semibold">
                Communication is consistent, documented, and transparent.
              </p>
            </div>
          </div>

          <div className="relative">
            <div className="absolute inset-0 rounded-3xl bg-[#FF6A00]/10 blur-2xl" />
            <div className="relative overflow-hidden rounded-3xl border border-white/10 bg-[#121212]">
              <img
                alt="Central communication dashboard"
                className="w-full h-[420px] object-cover opacity-90"
                src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=1600&auto=format&fit=crop"
              />
              <div className="p-6">
                <p className="text-sm text-gray-300">
                  Centralized updates + structured timelines ensure zero communication chaos.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ====================== ISSUE HANDLING & ESCALATION ====================== */}
      <section className="bg-[#1E1E1E] border-y border-white/10">
        <div className="max-w-7xl mx-auto px-6 py-20">
          <h2 className="text-3xl font-bold text-center">
            Issue Handling &{" "}
            <span className="text-[#FF6A00]">Escalation</span>
          </h2>

          <p className="mt-4 text-gray-300 text-center max-w-3xl mx-auto">
            When issues arise:
          </p>

          <div className="mt-10 max-w-4xl mx-auto">
            <div className="space-y-4">
              {escalationSteps.map((s, i) => (
                <div
                  key={s}
                  className="flex items-start gap-4 p-5 rounded-2xl bg-black/15 border border-white/10"
                >
                  <div className="w-10 h-10 rounded-xl bg-[#FF6A00]/15 border border-[#FF6A00]/30 flex items-center justify-center text-[#FF6A00] font-extrabold">
                    {i + 1}
                  </div>
                  <div>
                    <p className="font-semibold">{s}</p>
                    <p className="text-sm text-gray-400 mt-1">
                      Escalation ensures resolution, not delay.
                    </p>
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-8 p-6 rounded-2xl bg-[#FF6A00]/10 border border-[#FF6A00]/25">
              <p className="text-white font-semibold">
                No issue depends on personal availability.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ====================== VISIBILITY & REPORTING ====================== */}
      <section className="max-w-7xl mx-auto px-6 py-20">
        <h2 className="text-3xl font-bold text-center">
          Visibility &{" "}
          <span className="text-[#FF6A00]">Reporting</span>
        </h2>

        <p className="mt-4 text-gray-300 text-center max-w-3xl mx-auto">
          Account Managers provide visibility on:
        </p>

        <div className="mt-12 grid sm:grid-cols-2 lg:grid-cols-5 gap-4">
          {visibilityCards.map((v) => (
            <div
              key={v.title}
              className="p-6 rounded-2xl bg-[#1E1E1E] border border-white/10 hover:border-[#FF6A00]/40 transition text-center"
            >
              <div className="mx-auto w-12 h-12 rounded-2xl bg-[#FF6A00]/15 border border-[#FF6A00]/30 text-[#FF6A00] flex items-center justify-center">
                {v.icon}
              </div>
              <p className="mt-4 font-semibold text-gray-200">{v.title}</p>
            </div>
          ))}
        </div>

        <p className="mt-10 text-center font-semibold text-white">
          This allows partners and clients to stay informed and confident.
        </p>
      </section>

      {/* ====================== CONTINUITY & LONG TERM SUPPORT ====================== */}
      <section className="bg-[#1E1E1E] border-y border-white/10">
        <div className="max-w-7xl mx-auto px-6 py-20">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold">
                Continuity & Long-Term{" "}
                <span className="text-[#FF6A00]">Support</span>
              </h2>

              <p className="mt-6 text-gray-300">Zryoss ensures:</p>

              <ul className="mt-6 space-y-3">
                {[
                  "Account continuity even if teams change",
                  "Historical context is preserved",
                  "Long-term relationships are supported",
                ].map((p) => (
                  <li key={p} className="flex items-start gap-3 p-4 rounded-xl bg-black/15 border border-white/10">
                    <CheckCircle2 className="w-5 h-5 text-[#FF6A00] mt-0.5" />
                    <span className="text-gray-200">{p}</span>
                  </li>
                ))}
              </ul>

              <div className="mt-8 p-6 rounded-2xl bg-[#FF6A00]/10 border border-[#FF6A00]/25">
                <p className="text-white font-semibold">
                  The system remembers— <span className="text-white font-bold">not just people.</span>
                </p>
              </div>
            </div>

            <div className="relative">
              <div className="absolute inset-0 rounded-3xl bg-[#FF6A00]/10 blur-2xl" />
              <div className="relative overflow-hidden rounded-3xl border border-white/10 bg-[#121212]">
                <img
                  alt="System continuity"
                  className="w-full h-[420px] object-cover opacity-90"
                  src="https://images.unsplash.com/photo-1555949963-aa79dcee981c?q=80&w=1600&auto=format&fit=crop"
                />
                <div className="p-6">
                  <p className="text-sm text-gray-300">
                    Historical records + continuity loops ensure long-term account stability and trust.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ====================== PROTECTS IPP & BPP ====================== */}
      <section className="max-w-7xl mx-auto px-6 py-20">
        <div className="grid lg:grid-cols-2 gap-10 items-center">
          <div>
            <h2 className="text-3xl font-bold">
              How This Model Protects{" "}
              <span className="text-[#FF6A00]">IPP & BPP</span>
            </h2>

            <p className="mt-4 text-gray-300">
              For IPPs and BPPs:
            </p>

            <ul className="mt-6 space-y-3">
              {ippProtections.map((p) => (
                <li key={p} className="flex items-start gap-3 p-4 rounded-xl bg-[#1E1E1E] border border-white/10">
                  <XCircle className="w-5 h-5 text-[#FF6A00] mt-0.5" />
                  <span className="text-gray-200">{p}</span>
                </li>
              ))}
            </ul>

            <div className="mt-8 p-6 rounded-2xl bg-[#FF6A00]/10 border border-[#FF6A00]/25">
              <p className="text-white font-semibold">
                You focus on business growth.
                <br />
                <span className="text-white font-bold">Zryoss manages operations and support.</span>
              </p>
            </div>
          </div>

          <div className="relative">
            <div className="absolute inset-0 rounded-3xl bg-[#FF6A00]/10 blur-2xl" />
            <div className="relative overflow-hidden rounded-3xl border border-white/10 bg-[#121212]">
              <img
                alt="Growth protected by system"
                className="w-full h-[420px] object-cover opacity-90"
                src="https://images.unsplash.com/photo-1556761175-5973dc0f32e7?q=80&w=1600&auto=format&fit=crop"
              />
              <div className="p-6">
                <p className="text-sm text-gray-300">
                  Business growth stays protected when execution ownership stays centralized.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ====================== WHO BENEFITS ====================== */}
      <section className="bg-[#1E1E1E] border-y border-white/10">
        <div className="max-w-7xl mx-auto px-6 py-20">
          <h2 className="text-3xl font-bold text-center">
            Who Benefits From Account Management{" "}
            <span className="text-[#FF6A00]">& Support</span>
          </h2>

          <div className="mt-12 grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {whoBenefits.map((x) => (
              <div
                key={x.title}
                className="p-6 rounded-2xl bg-black/15 border border-white/10 hover:border-[#FF6A00]/40 transition"
              >
                <div className="w-12 h-12 rounded-2xl bg-[#FF6A00]/15 border border-[#FF6A00]/30 text-[#FF6A00] flex items-center justify-center">
                  {x.icon}
                </div>
                <h3 className="mt-4 font-bold text-lg">{x.title}</h3>
                <p className="mt-2 text-gray-400 text-sm">{x.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ====================== GLUE SECTION ====================== */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-[#121212] via-[#1E1E1E] to-[#121212]" />
        <div className="absolute left-1/2 -translate-x-1/2 top-0 w-[850px] h-[850px] rounded-full bg-[#FF6A00]/10 blur-3xl" />

        <div className="relative max-w-5xl mx-auto px-6 py-20 text-center">
          <h2 className="text-3xl sm:text-4xl font-extrabold">
            Account Management Is the{" "}
            <span className="text-[#FF6A00]">Glue of the System</span>
          </h2>

          <p className="mt-6 text-gray-300 text-lg">
            Without account management:
            <br />
            <span className="text-white font-bold">Systems break</span>
            <br />
            <span className="text-white font-bold">Execution fragments</span>
            <br />
            <span className="text-white font-bold">Scale becomes risky</span>
          </p>

          <p className="mt-4 text-gray-400">
            Zryoss treats account management as a core operating function, not a support desk.
          </p>
        </div>
      </section>

      {/* ====================== FINAL CTA ====================== */}
      <section className="relative overflow-hidden bg-[#1E1E1E] border-t border-white/10">
        <div className="absolute inset-0 bg-gradient-to-b from-[#1E1E1E] via-black/30 to-[#121212]" />
        <div className="absolute -top-24 left-0 w-[520px] h-[520px] rounded-full bg-[#FF6A00]/10 blur-3xl" />
        <div className="absolute -bottom-40 right-0 w-[650px] h-[650px] rounded-full bg-[#FF6A00]/10 blur-3xl" />

        <div className="relative max-w-5xl mx-auto px-6 py-20 text-center">
          <h2 className="text-3xl sm:text-4xl font-extrabold">
            Final Thought
          </h2>

          <p className="mt-6 text-gray-200 text-lg font-semibold">
            Execution does not fail due to lack of effort.
            <br />
            <span className="text-[#FF6A00]">It fails due to lack of ownership.</span>
          </p>

          <p className="mt-6 text-gray-300">
            Zryoss ensures every account has one owner and full system support.
          </p>

          <p className="mt-3 text-white font-bold">
            You build relationships.
            <br />
            Zryoss manages execution and support.
          </p>

          <div className="mt-10 flex justify-center">
            <button className="inline-flex items-center gap-2 px-8 py-4 rounded-2xl bg-[#FF6A00] text-white font-bold hover:brightness-110 transition">
              Start Managed Execution <ArrowRight className="w-5 h-5" />
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}
