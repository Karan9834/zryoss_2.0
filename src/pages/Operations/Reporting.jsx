import React, { useMemo, useState } from "react";
import {
  ArrowRight,
  AlertTriangle,
  CheckCircle2,
  LineChart,
  BarChart3,
  TrendingUp,
  ChartNoAxesCombined,
  LayoutDashboard,
  Database,
  Network,
  FileText,
  ShieldCheck,
  Lock,
  History,
  ClipboardList,
  CheckSquare,
  Gauge,
  RefreshCcw,
  BadgeCheck,
  Bell,
  Flag,
  CalendarDays,
  Users,
  Settings,
  Handshake,
  Crown,
  HeartPulse,
  Bug,
  EyeOff,
  Shuffle,
  ChevronDown,
  ChevronUp,
} from "lucide-react";

export default function Reporting() {
  const [openCategory, setOpenCategory] = useState("cat-1");

  const handleScrollToSystem = () => {
    const el = document.getElementById("reporting-system");
    if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  const failures = [
    "Reports are manual and delayed",
    "Data is scattered across teams and vendors",
    "Metrics are unclear or vanity-driven",
    "Issues are identified too late",
    "Leadership lacks real execution visibility",
  ];

  const reportingMeans = [
    { text: "Execution progress and milestones", icon: <ChartNoAxesCombined className="w-5 h-5" /> },
    { text: "Delivery timelines and adherence", icon: <CalendarDays className="w-5 h-5" /> },
    { text: "Quality performance and rework", icon: <ShieldCheck className="w-5 h-5" /> },
    { text: "Vendor and partner performance", icon: <BarChart3 className="w-5 h-5" /> },
    { text: "Account health and risk indicators", icon: <HeartPulse className="w-5 h-5" /> },
    { text: "Capacity and scale readiness", icon: <TrendingUp className="w-5 h-5" /> },
  ];

  const categories = useMemo(
    () => [
      {
        id: "cat-1",
        number: "1️⃣",
        title: "Execution & Delivery Reports",
        icon: <LayoutDashboard className="w-5 h-5" />,
        tracks: [
          "Project and task progress",
          "Milestone completion status",
          "Timeline adherence",
          "Delivery risk indicators",
        ],
        purpose: "Ensure execution stays on track and predictable.",
      },
      {
        id: "cat-2",
        number: "2️⃣",
        title: "Quality Performance Reports",
        icon: <CheckSquare className="w-5 h-5" />,
        tracks: [
          "Quality checkpoint pass/fail rates",
          "Rework frequency",
          "Issue recurrence",
          "Client acceptance status",
        ],
        purpose: "Protect delivery quality and brand credibility.",
      },
      {
        id: "cat-3",
        number: "3️⃣",
        title: "Vendor & SLA Performance Reports",
        icon: <FileText className="w-5 h-5" />,
        tracks: [
          "SLA adherence",
          "Delivery timelines",
          "Quality compliance",
          "Issue resolution effectiveness",
        ],
        purpose: "Ensure vendors remain execution assets, not risks.",
      },
      {
        id: "cat-4",
        number: "4️⃣",
        title: "Account Health Reports",
        icon: <HeartPulse className="w-5 h-5" />,
        tracks: [
          "Account status and activity",
          "Delivery consistency",
          "Issue frequency",
          "Escalation trends",
        ],
        purpose: "Provide early warnings before problems escalate.",
      },
      {
        id: "cat-5",
        number: "5️⃣",
        title: "Partner Performance Visibility (IPP / BPP)",
        icon: <Network className="w-5 h-5" />,
        tracks: [
          "Business activity volume",
          "Execution dependency mapping",
          "Operational load",
          "Growth sustainability",
        ],
        purpose: "Enable responsible scaling without operational overload.",
      },
    ],
    []
  );

  const kpis = [
    { title: "On-time delivery rate", icon: <Gauge className="w-6 h-6" /> },
    { title: "Scope adherence percentage", icon: <ClipboardList className="w-6 h-6" /> },
    { title: "Quality acceptance ratio", icon: <BadgeCheck className="w-6 h-6" /> },
    { title: "Rework and correction cycles", icon: <RefreshCcw className="w-6 h-6" /> },
    { title: "SLA compliance score", icon: <ShieldCheck className="w-6 h-6" /> },
    { title: "Escalation resolution time", icon: <Flag className="w-6 h-6" /> },
  ];

  const alerts = [
    "Progress alerts",
    "Delay flags",
    "Quality deviation notifications",
    "SLA breach indicators",
  ];

  const reviewLevels = [
    {
      title: "Operational updates",
      subtitle: "ongoing",
      icon: <ChartNoAxesCombined className="w-6 h-6" />,
    },
    {
      title: "Account reviews",
      subtitle: "periodic",
      icon: <Users className="w-6 h-6" />,
    },
    {
      title: "Performance reviews",
      subtitle: "scheduled",
      icon: <CalendarDays className="w-6 h-6" />,
    },
    {
      title: "Leadership dashboards",
      subtitle: "strategic",
      icon: <LayoutDashboard className="w-6 h-6" />,
    },
  ];

  const stakeholders = [
    { title: "Account Managers", icon: <Users className="w-6 h-6" />, text: "execution control" },
    { title: "Operations Teams", icon: <Settings className="w-6 h-6" />, text: "delivery alignment" },
    { title: "IPP & BPP", icon: <Handshake className="w-6 h-6" />, text: "business visibility" },
    { title: "Clients", icon: <ShieldCheck className="w-6 h-6" />, text: "delivery confidence" },
    { title: "Leadership", icon: <Crown className="w-6 h-6" />, text: "scale readiness" },
  ];

  const decisions = [
    "Early risk identification",
    "Capacity planning",
    "Vendor optimization",
    "Process improvement",
    "Informed scale decisions",
  ];

  const governance = [
    "Data accuracy and consistency",
    "Controlled access and visibility",
    "Audit-ready documentation",
    "Historical performance tracking",
  ];

  const scalability = [
    "Reporting capacity scales automatically",
    "Metrics remain standardized",
    "Dashboards expand without fragmentation",
    "Governance remains unchanged",
  ];

  const prevents = [
    { title: "Surprise delays", icon: <CalendarDays className="w-6 h-6" /> },
    { title: "Hidden quality issues", icon: <Bug className="w-6 h-6" /> },
    { title: "Vendor underperformance", icon: <AlertTriangle className="w-6 h-6" /> },
    { title: "Operational blind spots", icon: <EyeOff className="w-6 h-6" /> },
    { title: "Uncontrolled scaling", icon: <Shuffle className="w-6 h-6" /> },
  ];

  return (
    <div className="min-h-screen bg-[#121212] text-white">
      {/* 1) HERO */}
      <section
        className="relative overflow-hidden min-h-screen flex items-center"
        style={{
          backgroundImage:
            "url(https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=1920&auto=format&fit=crop)",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        {/* overlays */}
        <div className="absolute inset-0 bg-[#0b0b0b]/80" />
        <div className="absolute inset-0 bg-gradient-to-b from-[#121212]/10 via-[#121212]/70 to-[#121212]" />

        {/* orange dashboard glow */}
        <div className="absolute -top-52 left-1/2 -translate-x-1/2 w-[980px] h-[980px] rounded-full bg-[#FF6A00]/10 blur-3xl" />
        <div className="absolute -bottom-44 right-0 w-[640px] h-[640px] rounded-full bg-[#FF6A00]/10 blur-3xl" />

        {/* subtle graph watermark */}
        <div className="absolute inset-0 opacity-[0.07] pointer-events-none">
          <svg
            viewBox="0 0 1200 600"
            className="w-full h-full"
            xmlns="http://www.w3.org/2000/svg"
          >
            <g fill="none" stroke="#FF6A00" strokeWidth="2">
              <path d="M80 520H1120" opacity="0.5" />
              <path d="M80 420H1120" opacity="0.35" />
              <path d="M80 320H1120" opacity="0.25" />
              <path d="M80 220H1120" opacity="0.2" />
              <path d="M80 120H1120" opacity="0.15" />

              <path
                d="M120 460 C 260 380, 360 430, 480 310 C 600 180, 740 240, 880 160 C 980 110, 1060 150, 1120 90"
                strokeWidth="4"
              />

              <circle cx="120" cy="460" r="8" fill="#FF6A00" />
              <circle cx="480" cy="310" r="8" fill="#FF6A00" />
              <circle cx="880" cy="160" r="8" fill="#FF6A00" />
              <circle cx="1120" cy="90" r="8" fill="#FF6A00" />
            </g>
          </svg>
        </div>

        <div className="relative max-w-7xl mx-auto px-6 w-full">
          <div className="text-center max-w-3xl mx-auto">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10 text-sm text-gray-200">
              <span className="w-2 h-2 rounded-full bg-[#FF6A00]" />
              Zryoss · Operations · Reporting
            </div>

            <h1 className="mt-6 text-4xl sm:text-5xl font-extrabold leading-tight text-white">
              Reporting & Performance Tracking
            </h1>

            <h2 className="mt-4 text-2xl sm:text-3xl font-extrabold text-[#FF6A00]">
              Visibility Creates Control. Control Enables Scale.
            </h2>

            <p className="mt-6 text-gray-200 leading-relaxed text-lg">
              At Zryoss, reporting is not an afterthought or a static document. It
              is a real-time operational visibility system that tracks execution
              health, delivery performance, quality adherence, and growth readiness
              across the entire ecosystem.
              <br />
              <span className="text-white font-semibold">
                Zryoss does not manage by assumptions. It manages by measurable
                performance data.
              </span>
            </p>

            <div className="mt-10 flex flex-col sm:flex-row gap-4 justify-center">
              <button
                onClick={handleScrollToSystem}
                className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl bg-[#FF6A00] text-black font-semibold hover:brightness-110 transition"
              >
                Explore Reporting System <ArrowRight className="w-5 h-5" />
              </button>

              <a
                href="#learn-more"
                className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl border border-white/15 bg-white/5 hover:bg-white/10 transition font-semibold"
              >
                Learn More
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* 2) WHY REPORTING FAILS */}
      <section id="learn-more" className="max-w-7xl mx-auto px-6 py-20">
        <div className="grid lg:grid-cols-2 gap-10 items-start">
          <div>
            <h2 className="text-3xl font-bold">
              Why Reporting Fails in Most{" "}
              <span className="text-[#FF6A00]">Organizations</span>
            </h2>

            <p className="mt-4 text-gray-300">
              Traditional reporting systems fail because:
            </p>

            <ul className="mt-6 space-y-3">
              {failures.map((f) => (
                <li
                  key={f}
                  className="flex items-start gap-3 p-4 rounded-xl bg-[#1E1E1E] border border-white/10"
                >
                  <AlertTriangle className="w-5 h-5 text-[#FF6A00] mt-0.5" />
                  <span className="text-gray-200">{f}</span>
                </li>
              ))}
            </ul>

            <p className="mt-6 text-gray-300">
              Zryoss eliminates these gaps through{" "}
              <span className="text-white font-semibold">
                centralized, system-governed reporting.
              </span>
            </p>
          </div>

          {/* right illustration */}
          <div className="relative">
            <div className="absolute inset-0 rounded-3xl bg-[#FF6A00]/10 blur-2xl" />
            <div className="relative overflow-hidden rounded-3xl border border-white/10 bg-[#121212]">
              <img
                alt="Broken reporting flow"
                className="w-full h-[420px] object-cover opacity-90"
                src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=1600&auto=format&fit=crop"
              />
              <div className="p-6">
                <p className="text-sm text-gray-300">
                  Fragmented charts and disconnected silos reduce visibility and delay action.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 3) WHAT REPORTING MEANS */}
      <section className="bg-[#1E1E1E] border-y border-white/10">
        <div className="max-w-7xl mx-auto px-6 py-20">
          <div className="text-center max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold">
              What Reporting Means at{" "}
              <span className="text-[#FF6A00]">Zryoss</span>
            </h2>

            <p className="mt-4 text-gray-300">
              Reporting & Performance Tracking at Zryoss covers:
            </p>
          </div>

          {/* faint grid overlay */}
          <div className="relative mt-12">
            <div className="absolute inset-0 opacity-[0.06] pointer-events-none">
              <svg viewBox="0 0 1200 400" className="w-full h-full">
                <g stroke="#FF6A00" strokeWidth="1">
                  {Array.from({ length: 16 }).map((_, i) => (
                    <line
                      key={`v-${i}`}
                      x1={i * 80}
                      y1="0"
                      x2={i * 80}
                      y2="400"
                      opacity="0.3"
                    />
                  ))}
                  {Array.from({ length: 6 }).map((_, i) => (
                    <line
                      key={`h-${i}`}
                      x1="0"
                      y1={i * 80}
                      x2="1200"
                      y2={i * 80}
                      opacity="0.25"
                    />
                  ))}
                </g>
              </svg>
            </div>

            <div className="relative grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {reportingMeans.map((x) => (
                <div
                  key={x.text}
                  className="p-6 rounded-2xl bg-black/15 border border-white/10 hover:border-[#FF6A00]/40 transition"
                >
                  <div className="w-12 h-12 rounded-2xl bg-[#FF6A00]/15 border border-[#FF6A00]/30 text-[#FF6A00] flex items-center justify-center">
                    {x.icon}
                  </div>
                  <p className="mt-4 font-semibold text-gray-100">{x.text}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="mt-10 text-center">
            <p className="text-gray-300">
              Reporting answers one core question:
              <br />
              <span className="text-white font-semibold">
                “Is the system performing as expected?”
              </span>
            </p>
          </div>
        </div>
      </section>

      {/* 4) CENTRALIZED ARCHITECTURE */}
      <section id="reporting-system" className="max-w-7xl mx-auto px-6 py-20">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-3xl font-bold">
              Centralized Reporting{" "}
              <span className="text-[#FF6A00]">Architecture</span>
            </h2>

            <p className="mt-4 text-gray-300">
              All operational data flows into a single reporting layer, ensuring:
            </p>

            <ul className="mt-6 space-y-3">
              {[
                "One source of truth",
                "Consistent metrics across verticals",
                "Real-time visibility",
                "Audit-ready records",
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

            <p className="mt-6 text-gray-300">
              No brand, vendor, or partner maintains isolated reports.
            </p>
          </div>

          {/* hub/spoke diagram */}
          <div className="relative">
            <div className="absolute inset-0 rounded-3xl bg-[#FF6A00]/10 blur-2xl" />
            <div className="relative rounded-3xl border border-white/10 bg-[#121212] p-8 overflow-hidden">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-[#FF6A00]/15 border border-[#FF6A00]/30 text-[#FF6A00] flex items-center justify-center">
                  <Database className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="font-bold">One Source of Truth</h3>
                  <p className="text-sm text-gray-400">
                    Central reporting hub across the ecosystem
                  </p>
                </div>
              </div>

              <div className="mt-8 opacity-[0.9]">
                <svg
                  viewBox="0 0 1200 600"
                  className="w-full h-[260px]"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <g fill="none" stroke="#FF6A00" strokeWidth="3" opacity="0.8">
                    <circle cx="600" cy="300" r="90" />
                    <circle cx="280" cy="140" r="40" />
                    <circle cx="920" cy="140" r="40" />
                    <circle cx="280" cy="460" r="40" />
                    <circle cx="920" cy="460" r="40" />
                    <line x1="600" y1="300" x2="280" y2="140" />
                    <line x1="600" y1="300" x2="920" y2="140" />
                    <line x1="600" y1="300" x2="280" y2="460" />
                    <line x1="600" y1="300" x2="920" y2="460" />
                  </g>
                </svg>
              </div>

              <p className="mt-6 text-gray-300 text-sm">
                One reporting layer ensures consistent metrics, visibility, and audit-ready execution records.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 5) KEY REPORTING CATEGORIES */}
      <section className="bg-[#1E1E1E] border-y border-white/10">
        <div className="max-w-7xl mx-auto px-6 py-20">
          <h2 className="text-3xl font-bold text-center">
            Key Reporting{" "}
            <span className="text-[#FF6A00]">Categories</span>
          </h2>

          <div className="mt-12 space-y-4">
            {categories.map((c) => {
              const isOpen = openCategory === c.id;
              return (
                <div
                  key={c.id}
                  className={`rounded-2xl border transition ${
                    isOpen
                      ? "border-[#FF6A00]/50 bg-black/25"
                      : "border-white/10 bg-black/10 hover:border-[#FF6A00]/30"
                  }`}
                >
                  <button
                    onClick={() => setOpenCategory(isOpen ? "" : c.id)}
                    className="w-full flex items-center justify-between gap-4 p-5 text-left"
                  >
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 rounded-xl bg-[#FF6A00]/15 border border-[#FF6A00]/30 text-[#FF6A00] flex items-center justify-center">
                        {c.icon}
                      </div>
                      <div>
                        <p className="text-gray-400 text-sm">{c.number}</p>
                        <h3 className="font-bold">{c.title}</h3>
                      </div>
                    </div>

                    <div className="text-[#FF6A00]">
                      {isOpen ? <ChevronUp /> : <ChevronDown />}
                    </div>
                  </button>

                  {isOpen && (
                    <div className="px-5 pb-6">
                      <p className="text-gray-300 font-semibold">Tracks:</p>
                      <ul className="mt-4 space-y-3">
                        {c.tracks.map((t) => (
                          <li key={t} className="flex items-start gap-3">
                            <CheckCircle2 className="w-5 h-5 text-[#FF6A00] mt-0.5" />
                            <span className="text-gray-200">{t}</span>
                          </li>
                        ))}
                      </ul>

                      <div className="mt-6 p-4 rounded-xl bg-[#FF6A00]/10 border border-[#FF6A00]/25">
                        <p className="font-semibold text-white">
                          Purpose: {c.purpose}
                        </p>
                      </div>
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* 6) METRICS & KPIs */}
      <section className="max-w-7xl mx-auto px-6 py-20">
        <h2 className="text-3xl font-bold text-center">
          Performance Metrics{" "}
          <span className="text-[#FF6A00]">& KPIs</span>
        </h2>

        <p className="mt-4 text-gray-300 text-center max-w-3xl mx-auto">
          Zryoss tracks standardized metrics such as:
        </p>

        <div className="mt-12 grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {kpis.map((k) => (
            <div
              key={k.title}
              className="p-6 rounded-2xl bg-[#1E1E1E] border border-white/10 hover:border-[#FF6A00]/40 transition relative overflow-hidden"
            >
              <div className="absolute -top-16 -right-16 w-44 h-44 rounded-full bg-[#FF6A00]/10 blur-2xl" />
              <div className="relative">
                <div className="w-12 h-12 rounded-2xl bg-[#FF6A00]/15 border border-[#FF6A00]/30 text-[#FF6A00] flex items-center justify-center">
                  {k.icon}
                </div>
                <h3 className="mt-4 font-bold">{k.title}</h3>
                <p className="mt-2 text-gray-400 text-sm">
                  Comparable, objective, and actionable metrics for scale readiness.
                </p>
              </div>
            </div>
          ))}
        </div>

        <p className="mt-10 text-center text-gray-300">
          Metrics are comparable, objective, and actionable.
        </p>
      </section>

      {/* 7) REAL-TIME MONITORING */}
      <section className="bg-[#1E1E1E] border-y border-white/10">
        <div className="max-w-7xl mx-auto px-6 py-20">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold">
                Real-Time Monitoring{" "}
                <span className="text-[#FF6A00]">& Alerts</span>
              </h2>

              <p className="mt-4 text-gray-300">
                The reporting system includes:
              </p>

              <ul className="mt-6 space-y-3">
                {alerts.map((p) => (
                  <li
                    key={p}
                    className="flex items-start gap-3 p-4 rounded-xl bg-black/15 border border-white/10"
                  >
                    <Bell className="w-5 h-5 text-[#FF6A00] mt-0.5" />
                    <span className="text-gray-200">{p}</span>
                  </li>
                ))}
              </ul>

              <div className="mt-8 p-5 rounded-2xl bg-[#FF6A00]/10 border border-[#FF6A00]/25">
                <p className="text-white font-semibold">
                  Issues are detected early, not after failure.
                </p>
              </div>
            </div>

            {/* illustration */}
            <div className="relative">
              <div className="absolute inset-0 rounded-3xl bg-[#FF6A00]/10 blur-2xl" />
              <div className="relative overflow-hidden rounded-3xl border border-white/10 bg-[#121212]">
                <img
                  alt="Live dashboard with alerts"
                  className="w-full h-[380px] object-cover opacity-90"
                  src="https://images.unsplash.com/photo-1556761175-5973dc0f32e7?q=80&w=1600&auto=format&fit=crop"
                />
                <div className="p-6">
                  <p className="text-sm text-gray-300">
                    Live dashboards trigger flags before small risks become system failures.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 8) REPORTING FREQUENCY */}
      <section className="max-w-7xl mx-auto px-6 py-20">
        <h2 className="text-3xl font-bold text-center">
          Reporting Frequency{" "}
          <span className="text-[#FF6A00]">& Reviews</span>
        </h2>

        <p className="mt-4 text-gray-300 text-center max-w-3xl mx-auto">
          Reporting is structured at multiple levels:
        </p>

        <div className="mt-12 grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {reviewLevels.map((r) => (
            <div
              key={r.title}
              className="p-6 rounded-2xl bg-[#1E1E1E] border border-white/10 hover:border-[#FF6A00]/40 transition"
            >
              <div className="w-12 h-12 rounded-2xl bg-[#FF6A00]/15 border border-[#FF6A00]/30 text-[#FF6A00] flex items-center justify-center">
                {r.icon}
              </div>
              <h3 className="mt-4 font-bold">{r.title}</h3>
              <p className="mt-2 text-gray-400">
                <span className="text-white font-semibold">{r.subtitle}</span>
              </p>
            </div>
          ))}
        </div>

        <p className="mt-10 text-center text-gray-300">
          Different stakeholders see relevant views, not noise.
        </p>
      </section>

      {/* 9) WHO USES REPORTS */}
      <section className="bg-[#1E1E1E] border-y border-white/10">
        <div className="max-w-7xl mx-auto px-6 py-20">
          <h2 className="text-3xl font-bold text-center">
            Who Uses These{" "}
            <span className="text-[#FF6A00]">Reports</span>
          </h2>

          <div className="mt-12 grid sm:grid-cols-2 lg:grid-cols-5 gap-4">
            {stakeholders.map((s) => (
              <div
                key={s.title}
                className="p-6 rounded-2xl bg-black/15 border border-white/10 hover:border-[#FF6A00]/40 transition"
              >
                <div className="w-12 h-12 rounded-2xl bg-[#FF6A00]/15 border border-[#FF6A00]/30 text-[#FF6A00] flex items-center justify-center">
                  {s.icon}
                </div>
                <h3 className="mt-4 font-bold">{s.title}</h3>
                <p className="mt-2 text-gray-400 text-sm">
                  → {s.text}
                </p>
              </div>
            ))}
          </div>

          <p className="mt-10 text-center text-gray-300">
            Everyone sees what they need—nothing more, nothing less.
          </p>
        </div>
      </section>

      {/* 10) DATA-DRIVEN DECISIONS */}
      <section className="max-w-7xl mx-auto px-6 py-20">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-3xl font-bold">
              Data-Driven Decision{" "}
              <span className="text-[#FF6A00]">Making</span>
            </h2>

            <p className="mt-4 text-gray-300">
              Reporting enables:
            </p>

            <ul className="mt-6 space-y-3">
              {decisions.map((p) => (
                <li
                  key={p}
                  className="flex items-start gap-3 p-4 rounded-xl bg-[#1E1E1E] border border-white/10"
                >
                  <LineChart className="w-5 h-5 text-[#FF6A00] mt-0.5" />
                  <span className="text-gray-200">{p}</span>
                </li>
              ))}
            </ul>

            <p className="mt-6 text-gray-300">
              Growth decisions are based on evidence, not intuition.
            </p>
          </div>

          <div className="relative">
            <div className="absolute inset-0 rounded-3xl bg-[#FF6A00]/10 blur-2xl" />
            <div className="relative overflow-hidden rounded-3xl border border-white/10 bg-[#121212]">
              <img
                alt="Decision tree"
                className="w-full h-[380px] object-cover opacity-90"
                src="https://images.unsplash.com/photo-1556155092-8707de31f9c4?q=80&w=1600&auto=format&fit=crop"
              />
              <div className="p-6">
                <p className="text-sm text-gray-300">
                  Evidence-backed decisions reduce risk and protect scalability.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 11) INTEGRITY & GOVERNANCE */}
      <section className="bg-[#1E1E1E] border-y border-white/10">
        <div className="max-w-7xl mx-auto px-6 py-20">
          <h2 className="text-3xl font-bold text-center">
            Reporting Integrity{" "}
            <span className="text-[#FF6A00]">& Governance</span>
          </h2>

          <p className="mt-4 text-gray-300 text-center">
            Zryoss ensures:
          </p>

          <div className="mt-12 grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-3">
              {governance.map((p) => (
                <div
                  key={p}
                  className="flex items-start gap-3 p-4 rounded-xl bg-black/15 border border-white/10"
                >
                  <ShieldCheck className="w-5 h-5 text-[#FF6A00] mt-0.5" />
                  <span className="text-gray-200">{p}</span>
                </div>
              ))}

              <div className="mt-6 p-5 rounded-2xl bg-[#FF6A00]/10 border border-[#FF6A00]/25">
                <p className="text-white font-semibold">
                  Reporting is trusted, not questioned.
                </p>
              </div>
            </div>

            <div className="relative rounded-3xl border border-white/10 bg-[#121212] overflow-hidden p-8">
              <div className="absolute inset-0 opacity-[0.07] pointer-events-none">
                <svg viewBox="0 0 1200 600" className="w-full h-full">
                  <g stroke="#FF6A00" strokeWidth="2">
                    {Array.from({ length: 14 }).map((_, i) => (
                      <line
                        key={`gov-v-${i}`}
                        x1={i * 90}
                        y1="0"
                        x2={i * 90}
                        y2="600"
                        opacity="0.25"
                      />
                    ))}
                    {Array.from({ length: 8 }).map((_, i) => (
                      <line
                        key={`gov-h-${i}`}
                        x1="0"
                        y1={i * 90}
                        x2="1200"
                        y2={i * 90}
                        opacity="0.2"
                      />
                    ))}
                  </g>
                </svg>
              </div>

              <div className="relative grid grid-cols-2 gap-4">
                {[
                  { icon: <Lock className="w-6 h-6" />, label: "Controlled access" },
                  { icon: <FileText className="w-6 h-6" />, label: "Audit-ready records" },
                  { icon: <History className="w-6 h-6" />, label: "Historical tracking" },
                  { icon: <ShieldCheck className="w-6 h-6" />, label: "Accuracy enforcement" },
                ].map((x) => (
                  <div
                    key={x.label}
                    className="p-4 rounded-2xl bg-black/20 border border-white/10"
                  >
                    <div className="w-11 h-11 rounded-2xl bg-[#FF6A00]/15 border border-[#FF6A00]/30 text-[#FF6A00] flex items-center justify-center">
                      {x.icon}
                    </div>
                    <p className="mt-3 font-semibold text-sm text-gray-200">
                      {x.label}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 12) SCALE WITH GROWTH */}
      <section className="max-w-7xl mx-auto px-6 py-20">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-3xl font-bold">
              How Reporting Scales With{" "}
              <span className="text-[#FF6A00]">Growth</span>
            </h2>

            <p className="mt-4 text-gray-300">
              As the ecosystem grows:
            </p>

            <ul className="mt-6 space-y-3">
              {scalability.map((p) => (
                <li
                  key={p}
                  className="flex items-start gap-3 p-4 rounded-xl bg-[#1E1E1E] border border-white/10"
                >
                  <TrendingUp className="w-5 h-5 text-[#FF6A00] mt-0.5" />
                  <span className="text-gray-200">{p}</span>
                </li>
              ))}
            </ul>

            <div className="mt-8 p-5 rounded-2xl bg-[#FF6A00]/10 border border-[#FF6A00]/25">
              <p className="text-white font-semibold">
                Scale increases visibility— it does not reduce control.
              </p>
            </div>
          </div>

          <div className="relative">
            <div className="absolute inset-0 rounded-3xl bg-[#FF6A00]/10 blur-2xl" />
            <div className="relative overflow-hidden rounded-3xl border border-white/10 bg-[#121212]">
              <img
                alt="Scaling dashboards"
                className="w-full h-[380px] object-cover opacity-90"
                src="https://images.unsplash.com/photo-1551836022-d5d88e9218df?q=80&w=1600&auto=format&fit=crop"
              />
              <div className="p-6">
                <p className="text-sm text-gray-300">
                  Dashboards expand without fragmentation. Governance remains unchanged.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 13) WHAT IT PREVENTS */}
      <section className="bg-[#1E1E1E] border-y border-white/10">
        <div className="max-w-7xl mx-auto px-6 py-20">
          <h2 className="text-3xl font-bold text-center">
            What This Reporting Model{" "}
            <span className="text-[#FF6A00]">Prevents</span>
          </h2>

          <p className="mt-4 text-gray-300 text-center">
            This framework prevents:
          </p>

          <div className="mt-12 grid sm:grid-cols-2 lg:grid-cols-5 gap-4">
            {prevents.map((x) => (
              <div
                key={x.title}
                className="p-6 rounded-2xl bg-black/15 border border-white/10 hover:border-[#FF6A00]/40 transition"
              >
                <div className="w-12 h-12 rounded-2xl bg-[#FF6A00]/15 border border-[#FF6A00]/30 text-[#FF6A00] flex items-center justify-center">
                  {x.icon}
                </div>
                <h3 className="mt-4 font-bold text-sm">{x.title}</h3>
                <p className="mt-2 text-gray-400 text-sm">
                  Reporting acts as an early-warning system.
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 14) BACKBONE */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-[#121212] via-[#1E1E1E] to-[#121212]" />
        <div className="absolute left-1/2 -translate-x-1/2 top-0 w-[800px] h-[800px] rounded-full bg-[#FF6A00]/10 blur-3xl" />

        <div className="relative max-w-5xl mx-auto px-6 py-20 text-center">
          <h2 className="text-3xl sm:text-4xl font-extrabold">
            Reporting Is the Backbone of{" "}
            <span className="text-[#FF6A00]">Governance</span>
          </h2>

          <p className="mt-8 text-gray-300 text-lg leading-relaxed">
            Without reporting:
            <br />
            <span className="text-white font-bold">There is no control</span>
            <br />
            <span className="text-white font-bold">There is no accountability</span>
            <br />
            <span className="text-white font-bold">There is no scalable execution</span>
          </p>

          <p className="mt-6 text-gray-400">
            Zryoss treats reporting as a core operating function, not a support activity.
          </p>
        </div>
      </section>

      {/* 15) FINAL CTA */}
      <section className="relative overflow-hidden bg-[#1E1E1E] border-t border-white/10">
        <div className="absolute inset-0 bg-gradient-to-b from-[#1E1E1E] via-black/30 to-[#121212]" />
        <div className="absolute -top-24 left-0 w-[500px] h-[500px] rounded-full bg-[#FF6A00]/10 blur-3xl" />
        <div className="absolute -bottom-40 right-0 w-[600px] h-[600px] rounded-full bg-[#FF6A00]/10 blur-3xl" />

        <div className="relative max-w-5xl mx-auto px-6 py-20 text-center">
          <h2 className="text-3xl sm:text-4xl font-extrabold">Final Thought</h2>

          <p className="mt-6 text-gray-200 text-lg font-semibold">
            You cannot manage what you cannot see.
            <br />
            <span className="text-[#FF6A00]">
              You cannot scale what you cannot measure.
            </span>
          </p>

          <p className="mt-8 text-gray-300">
            Zryoss ensures everything that matters is visible.
          </p>

          <p className="mt-3 text-white font-bold">
            You make decisions.
            <br />
            Zryoss provides the data.
          </p>

          <div className="mt-10 flex justify-center">
            <button className="inline-flex items-center gap-2 px-8 py-4 rounded-2xl bg-[#FF6A00] text-black font-bold hover:brightness-110 transition">
              Start Transparent Execution <ArrowRight className="w-5 h-5" />
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}
