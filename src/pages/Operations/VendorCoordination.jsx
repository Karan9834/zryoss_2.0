import React, { useMemo } from "react";
import {
  ArrowRight,
  CheckCircle2,
  AlertTriangle,
  Workflow,
  Network,
  Shield,
  Users,
  Settings,
  Layers,
  GitBranch,
  MessageSquareText,
  ClipboardList,
  Timer,
  BadgeCheck,
  Repeat2,
  SearchCheck,
  ArrowUpRight,
  Building2,
  BriefcaseBusiness,
  GraduationCap,
  HeartPulse,
  Paintbrush,
  Flag,
  LineChart,
  Boxes,
  HardDrive,
  Shuffle,
} from "lucide-react";

export default function VendorCoordination() {
  const failures = useMemo(
    () => [
      "Vendors work in silos",
      "No single coordination owner exists",
      "Dependencies are unmanaged",
      "Communication is scattered",
      "Accountability is unclear",
    ],
    []
  );

  const vcMeans = useMemo(
    () => [
      "Clear task ownership",
      "Defined execution boundaries",
      "Dependency mapping between vendors",
      "Timeline synchronization",
      "Quality and SLA alignment",
      "Single-point coordination through the platform",
    ],
    []
  );

  const roles = useMemo(
    () => [
      {
        title: "Zryoss Operations",
        icon: <Shield className="w-6 h-6" />,
        points: [
          "Owns overall delivery coordination",
          "Assigns tasks and priorities",
          "Tracks dependencies and progress",
          "Handles escalations",
        ],
        highlight: "Owns delivery coordination end-to-end.",
      },
      {
        title: "Execution Brands",
        icon: <Workflow className="w-6 h-6" />,
        points: [
          "Translate scope into executable work",
          "Manage domain-specific execution",
          "Review vendor deliverables",
        ],
        highlight: "Domain controllers for execution quality.",
      },
      {
        title: "Vendors",
        icon: <Settings className="w-6 h-6" />,
        points: [
          "Execute assigned tasks",
          "Follow defined timelines and standards",
          "Report progress within the system",
        ],
        highlight: "Task execution units aligned to benchmarks.",
      },
    ],
    []
  );

  const qualityCards = useMemo(
    () => [
      {
        title: "Shared standards upfront",
        icon: <BadgeCheck className="w-6 h-6" />,
        desc: "Quality standards are shared upfront so every vendor aligns from day one.",
      },
      {
        title: "Central review & control",
        icon: <SearchCheck className="w-6 h-6" />,
        desc: "Deliverables are reviewed centrally to maintain consistency across all workstreams.",
      },
      {
        title: "Rework enforcement",
        icon: <Repeat2 className="w-6 h-6" />,
        desc: "Rework is enforced if needed to keep delivery aligned to one benchmark.",
      },
    ],
    []
  );

  const escalationSteps = useMemo(
    () => [
      { title: "Issue logged centrally", icon: <ClipboardList className="w-5 h-5" /> },
      { title: "Impact assessed on dependencies", icon: <GitBranch className="w-5 h-5" /> },
      { title: "Corrective action assigned", icon: <Shield className="w-5 h-5" /> },
      { title: "Alternate execution path activated", icon: <Shuffle className="w-5 h-5" /> },
    ],
    []
  );

  const verticals = useMemo(
    () => [
      { title: "IT & Software", icon: <Workflow className="w-6 h-6" /> },
      { title: "Digital Marketing", icon: <BriefcaseBusiness className="w-6 h-6" /> },
      { title: "HR & Recruitment", icon: <Users className="w-6 h-6" /> },
      { title: "Education & EdTech", icon: <GraduationCap className="w-6 h-6" /> },
      { title: "Healthcare Technology", icon: <HeartPulse className="w-6 h-6" /> },
      { title: "Interior & Infrastructure", icon: <Paintbrush className="w-6 h-6" /> },
      { title: "Business & Professional Services", icon: <Building2 className="w-6 h-6" /> },
      { title: "Multi-Vendor Ecosystem", icon: <Network className="w-6 h-6" /> },
    ],
    []
  );

  const stakeholders = useMemo(
    () => [
      {
        title: "Clients",
        icon: <HandshakeIcon />,
        desc: "smooth, predictable delivery",
      },
      {
        title: "IPP & BPP",
        icon: <Shield className="w-6 h-6" />,
        desc: "no vendor follow-ups",
      },
      {
        title: "Vendors",
        icon: <Boxes className="w-6 h-6" />,
        desc: "clarity and fairness",
      },
      {
        title: "Operations teams",
        icon: <HardDrive className="w-6 h-6" />,
        desc: "control and visibility",
      },
    ],
    []
  );

  const scrollToArchitecture = () => {
    const el = document.getElementById("architecture");
    if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  return (
    <div className="min-h-screen bg-[#121212] text-white">
      {/* ✅ HERO */}
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

        {/* hub glow */}
        <div className="absolute -top-52 left-1/2 -translate-x-1/2 w-[980px] h-[980px] rounded-full bg-[#FF6A00]/10 blur-3xl" />
        <div className="absolute -bottom-44 right-0 w-[640px] h-[640px] rounded-full bg-[#FF6A00]/10 blur-3xl" />

        {/* watermark */}
        <div className="absolute inset-0 opacity-[0.06] pointer-events-none">
          <svg
            viewBox="0 0 1200 600"
            className="w-full h-full"
            xmlns="http://www.w3.org/2000/svg"
          >
            <g fill="none" stroke="#FF6A00" strokeWidth="2">
              <circle cx="600" cy="300" r="90" />
              <circle cx="240" cy="140" r="36" />
              <circle cx="960" cy="140" r="36" />
              <circle cx="240" cy="460" r="36" />
              <circle cx="960" cy="460" r="36" />
              <line x1="600" y1="300" x2="240" y2="140" />
              <line x1="600" y1="300" x2="960" y2="140" />
              <line x1="600" y1="300" x2="240" y2="460" />
              <line x1="600" y1="300" x2="960" y2="460" />
            </g>
          </svg>
        </div>

        <div className="relative max-w-7xl mx-auto px-6 w-full py-0">
          <div className="text-center max-w-3xl mx-auto">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10 text-sm text-gray-200">
              <span className="w-2 h-2 rounded-full bg-[#FF6A00]" />
              Zryoss · Vendor Coordination Model
            </div>

            <h1 className="mt-6 text-4xl sm:text-5xl font-extrabold leading-tight">
              Vendor Coordination Model
            </h1>

            <h2 className="mt-4 text-2xl sm:text-3xl font-extrabold text-[#FF6A00]">
              Multiple Vendors. One System. Zero Confusion.
            </h2>

            <p className="mt-6 text-gray-200 leading-relaxed text-lg">
              At Zryoss, vendor coordination is not handled through calls, follow-ups,
              or informal alignment. It is governed through a central coordination model
              where roles, responsibilities, timelines, and dependencies are clearly
              defined and controlled.
              <br />
              <span className="text-white font-semibold">
                Vendors execute tasks. Zryoss coordinates the system.
              </span>
            </p>

<<<<<<< HEAD
            <div className="mt-10 flex flex-col sm:flex-row gap-4 justify-center">
              <button
                onClick={scrollToArchitecture}
                className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl bg-[#FF6A00] text-white font-semibold hover:brightness-110 transition"
              >
                Explore Architecture <ArrowRight className="w-5 h-5" />
              </button>
              <a
                href="#roles"
                className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl border border-white/15 bg-white/5 hover:bg-white/10 transition font-semibold"
              >
                View Roles
              </a>
            </div>
          </div>
        </div>
      </section>
=======
      <div className="mt-10 flex flex-col sm:flex-row gap-4 justify-center">
        <button
          onClick={scrollToArchitecture}
          className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl bg-[#FF6A00] text-white font-semibold hover:brightness-110 transition"
        >
          Explore Architecture <ArrowRight className="w-5 h-5" />
        </button>
        <a
          href="#roles"
          className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl border border-white/15 bg-white/5 hover:bg-white/10 transition font-semibold"
        >
          View Roles
        </a>
      </div>
    </div>
  </div>
</section>
>>>>>>> ed11d59dc3576dac588ad0207c2f917481892cd9


      {/* ✅ 2. WHY VENDOR COORDINATION BREAKS */}
      <section className="max-w-7xl mx-auto px-6 py-20">
        <div className="grid lg:grid-cols-2 gap-10 items-start">
          {/* left text */}
          <div>
            <h2 className="text-3xl font-bold">
              Why Vendor Coordination Breaks in Most{" "}
              <span className="text-[#FF6A00]">Businesses</span>
            </h2>

            <p className="mt-4 text-gray-300">
              Vendor coordination usually fails because:
            </p>

            <ul className="mt-6 space-y-3">
              {failures.map((x) => (
                <li
                  key={x}
                  className="flex items-start gap-3 p-4 rounded-xl bg-[#1E1E1E] border border-white/10"
                >
                  <AlertTriangle className="w-5 h-5 text-[#FF6A00] mt-0.5" />
                  <span className="text-gray-200">{x}</span>
                </li>
              ))}
            </ul>

            <p className="mt-6 text-gray-300">
              This leads to delays, rework, and client dissatisfaction.
            </p>

            <p className="mt-4 text-gray-300">
              Zryoss eliminates these failures by centralizing vendor coordination
              under one operational authority.
            </p>
          </div>

          {/* right illustration */}
          <div className="relative">
            <div className="absolute inset-0 rounded-3xl bg-[#FF6A00]/10 blur-2xl" />
            <div className="relative overflow-hidden rounded-3xl border border-white/10 bg-[#121212]">
              <img
                alt="Fragmented vendor silos illustration"
                className="w-full h-[420px] object-cover opacity-90"
                src="https://images.unsplash.com/photo-1555949963-ff9fe0c870eb?q=80&w=1600&auto=format&fit=crop"
              />
              <div className="p-6">
                <p className="text-sm text-gray-300">
                  Disconnected vendors create fragmented delivery and hidden
                  dependencies.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ✅ 3. WHAT VENDOR COORDINATION MEANS */}
      <section className="relative bg-[#1E1E1E] border-y border-white/10 overflow-hidden">
        {/* faint grid */}
        <div className="absolute inset-0 opacity-[0.06] pointer-events-none">
          <svg viewBox="0 0 1200 600" className="w-full h-full">
            <defs>
              <pattern id="grid" width="40" height="40" patternUnits="userSpaceOnUse">
                <path d="M 40 0 L 0 0 0 40" fill="none" stroke="#FF6A00" strokeWidth="1" />
              </pattern>
            </defs>
            <rect width="1200" height="600" fill="url(#grid)" />
          </svg>
        </div>

        <div className="relative max-w-7xl mx-auto px-6 py-20">
          <div className="text-center max-w-3xl mx-auto">
            <h2 className="text-3xl font-bold">
              What Vendor Coordination Means at{" "}
              <span className="text-[#FF6A00]">Zryoss</span>
            </h2>

            <p className="mt-4 text-gray-300">
              Vendor coordination at Zryoss includes:
            </p>
          </div>

          <div className="mt-10 grid md:grid-cols-2 gap-4 max-w-5xl mx-auto">
            {vcMeans.map((x) => (
              <div
                key={x}
                className="flex items-start gap-3 p-5 rounded-2xl bg-black/20 border border-white/10"
              >
                <CheckCircle2 className="w-5 h-5 text-[#FF6A00] mt-0.5" />
                <div>
                  <p className="font-semibold text-gray-100">{x}</p>
                  <p className="text-sm text-gray-400 mt-1">
                    System-led coordination keeps all vendors aligned to one delivery plan.
                  </p>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-10 text-center">
            <div className="inline-flex items-center gap-2 px-5 py-3 rounded-2xl bg-[#FF6A00]/10 border border-[#FF6A00]/25">
              <span className="text-white font-semibold">
                Vendors never coordinate with each other independently. All coordination flows through Zryoss operations.
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* ✅ 4. ARCHITECTURE */}
      <section id="architecture" className="max-w-7xl mx-auto px-6 py-20">
        <h2 className="text-3xl font-bold text-center">
          The Zryoss Vendor Coordination{" "}
          <span className="text-[#FF6A00]">Architecture</span>
        </h2>

        <p className="mt-4 text-gray-300 text-center max-w-3xl mx-auto">
          Zryoss follows a hub-and-spoke coordination model:
        </p>

        {/* Hub + Spokes visual */}
        <div className="mt-12 flex justify-center">
          <div className="relative w-full max-w-5xl rounded-3xl border border-white/10 bg-[#1E1E1E] overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-br from-[#FF6A00]/10 via-transparent to-transparent" />
            <div className="relative p-10">
              <div className="grid md:grid-cols-3 gap-6 items-center">
                {/* left */}
                <div className="space-y-4">
                  <NodeCard
                    title="Execution Brands"
                    icon={<Workflow className="w-5 h-5" />}
                    subtitle="Domain-specific controllers"
                  />
                  <NodeCard
                    title="Execution Brands"
                    icon={<Workflow className="w-5 h-5" />}
                    subtitle="Translate scope into work"
                  />
                </div>

                {/* hub */}
                <div className="flex justify-center">
                  <div className="relative">
                    <div className="absolute inset-0 rounded-full blur-3xl bg-[#FF6A00]/30" />
                    <div className="relative w-44 h-44 rounded-full bg-[#FF6A00] text-white font-extrabold flex flex-col items-center justify-center shadow-2xl">
                      <Network className="w-8 h-8" />
                      <span className="mt-2 text-sm">Zryoss Operations</span>
                      <span className="text-[11px] opacity-80">Central coordination hub</span>
                    </div>
                  </div>
                </div>

                {/* right */}
                <div className="space-y-4">
                  <NodeCard
                    title="Vendors"
                    icon={<Settings className="w-5 h-5" />}
                    subtitle="Task execution units"
                  />
                  <NodeCard
                    title="Vendors"
                    icon={<Settings className="w-5 h-5" />}
                    subtitle="Follow standards & timelines"
                  />
                </div>
              </div>

              <div className="mt-10 grid md:grid-cols-3 gap-4 text-center">
                {[
                  "One direction",
                  "One decision authority",
                  "One reporting line",
                ].map((x) => (
                  <div
                    key={x}
                    className="rounded-2xl bg-black/20 border border-white/10 p-4"
                  >
                    <p className="font-semibold text-white">{x}</p>
                  </div>
                ))}
              </div>

              <div className="mt-8 text-center text-gray-300">
                <p>
                  This structure ensures centralized control while execution capacity remains distributed.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ✅ 5. ROLES & RESPONSIBILITIES */}
      <section id="roles" className="bg-[#1E1E1E] border-y border-white/10">
        <div className="max-w-7xl mx-auto px-6 py-20">
          <h2 className="text-3xl font-bold text-center">
            Roles &{" "}
            <span className="text-[#FF6A00]">Responsibilities</span>
          </h2>

          <p className="mt-4 text-gray-300 text-center max-w-3xl mx-auto">
            No role overlaps. No responsibility gaps.
          </p>

          <div className="mt-12 grid lg:grid-cols-3 gap-5">
            {roles.map((r) => (
              <div
                key={r.title}
                className="p-7 rounded-3xl bg-black/20 border border-white/10 hover:border-[#FF6A00]/35 transition"
              >
                <div className="w-12 h-12 rounded-2xl bg-[#FF6A00]/15 border border-[#FF6A00]/25 text-[#FF6A00] flex items-center justify-center">
                  {r.icon}
                </div>

                <h3 className="mt-4 font-extrabold text-lg">{r.title}</h3>
                <ul className="mt-4 space-y-2 text-gray-300">
                  {r.points.map((p) => (
                    <li key={p} className="flex items-start gap-2">
                      <CheckCircle2 className="w-5 h-5 text-[#FF6A00] mt-0.5" />
                      <span>{p}</span>
                    </li>
                  ))}
                </ul>

                <div className="mt-6 p-4 rounded-2xl bg-[#FF6A00]/10 border border-[#FF6A00]/25">
                  <p className="text-white font-semibold">{r.highlight}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ✅ 6. TASK ALLOCATION & DEPENDENCY MAPPING */}
      <section className="max-w-7xl mx-auto px-6 py-20">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-3xl font-bold">
              Task Allocation &{" "}
              <span className="text-[#FF6A00]">Dependency Mapping</span>
            </h2>

            <p className="mt-5 text-gray-300">
              Before execution:
            </p>

            <ul className="mt-6 space-y-3">
              {[
                "Tasks are broken down clearly",
                "Dependencies between vendors are identified",
                "Sequence and handoffs are defined",
                "Ownership is assigned",
              ].map((p) => (
                <li
                  key={p}
                  className="flex items-start gap-3 p-4 rounded-xl bg-[#1E1E1E] border border-white/10"
                >
                  <Layers className="w-5 h-5 text-[#FF6A00] mt-0.5" />
                  <span className="text-gray-200">{p}</span>
                </li>
              ))}
            </ul>

            <p className="mt-8 text-gray-300">This prevents:</p>

            <ul className="mt-4 space-y-3">
              {[
                "Waiting on other vendors",
                "Misaligned timelines",
                "Blame-shifting during delays",
              ].map((p) => (
                <li key={p} className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-[#FF6A00] mt-0.5" />
                  <span className="text-gray-200">{p}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* flowchart illustration */}
          <div className="relative">
            <div className="absolute inset-0 rounded-3xl bg-[#FF6A00]/10 blur-2xl" />
            <div className="relative overflow-hidden rounded-3xl border border-white/10 bg-[#121212]">
              <img
                alt="Dependency mapping flowchart"
                className="w-full h-[420px] object-cover opacity-90"
                src="https://images.unsplash.com/photo-1526379095098-d400fd0bf935?q=80&w=1600&auto=format&fit=crop"
              />
              <div className="p-6">
                <p className="text-sm text-gray-300">
                  Dependencies and handoffs are mapped before delivery begins.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ✅ 7. CENTRAL COMMUNICATION FRAMEWORK */}
      <section className="bg-[#1E1E1E] border-y border-white/10">
        <div className="max-w-7xl mx-auto px-6 py-20">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* text */}
            <div>
              <h2 className="text-3xl font-bold">
                Central Communication{" "}
                <span className="text-[#FF6A00]">Framework</span>
              </h2>

              <p className="mt-6 text-gray-300">
                All vendor communication is:
              </p>

              <ul className="mt-6 space-y-3">
                {[
                  "Logged centrally",
                  "Context-aware and documented",
                  "Visible to relevant stakeholders",
                  "Free from side-channel decisions",
                ].map((p) => (
                  <li
                    key={p}
                    className="flex items-start gap-3 p-4 rounded-xl bg-black/20 border border-white/10"
                  >
                    <MessageSquareText className="w-5 h-5 text-[#FF6A00] mt-0.5" />
                    <span className="text-gray-200">{p}</span>
                  </li>
                ))}
              </ul>

              <p className="mt-8 text-gray-300">This ensures:</p>

              <ul className="mt-4 space-y-2">
                {[
                  "No information loss",
                  "No contradictory instructions",
                  "No hidden dependencies",
                ].map((p) => (
                  <li key={p} className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-[#FF6A00] mt-0.5" />
                    <span className="text-gray-200">{p}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* image */}
            <div className="relative">
              <div className="absolute inset-0 rounded-3xl bg-[#FF6A00]/10 blur-2xl" />
              <div className="relative overflow-hidden rounded-3xl border border-white/10 bg-[#121212]">
                <img
                  alt="Central communication hub illustration"
                  className="w-full h-[420px] object-cover opacity-90"
                  src="https://images.unsplash.com/photo-1559136555-9303baea8ebd?q=80&w=1600&auto=format&fit=crop"
                />
                <div className="p-6">
                  <p className="text-sm text-gray-300">
                    Centralized communication removes confusion and prevents missed context.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ✅ 8. TIMELINE SYNCHRONIZATION */}
      <section className="max-w-7xl mx-auto px-6 py-20">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-3xl font-bold">
              Timeline{" "}
              <span className="text-[#FF6A00]">Synchronization</span>
            </h2>

            <p className="mt-6 text-gray-300">Zryoss ensures:</p>

            <ul className="mt-6 space-y-3">
              {[
                "Vendor timelines align with overall delivery milestones",
                "Delays are flagged early",
                "Adjustments are coordinated centrally",
              ].map((p) => (
                <li
                  key={p}
                  className="flex items-start gap-3 p-4 rounded-xl bg-[#1E1E1E] border border-white/10"
                >
                  <Timer className="w-5 h-5 text-[#FF6A00] mt-0.5" />
                  <span className="text-gray-200">{p}</span>
                </li>
              ))}
            </ul>

            <div className="mt-8 p-5 rounded-2xl bg-[#FF6A00]/10 border border-[#FF6A00]/25">
              <p className="text-white font-semibold">
                One delayed vendor does not derail the entire delivery.
              </p>
            </div>
          </div>

          <div className="relative overflow-hidden rounded-3xl border border-white/10 bg-[#1E1E1E]">
            <div className="absolute inset-0 bg-gradient-to-br from-[#FF6A00]/10 via-transparent to-transparent" />
            <div className="relative p-8">
              <div className="flex items-center justify-between text-sm text-gray-300">
                <span>Vendor A</span>
                <span>Vendor B</span>
                <span>Vendor C</span>
              </div>

              <div className="mt-6 space-y-4">
                {["Milestone 1", "Milestone 2", "Milestone 3", "Final Delivery"].map(
                  (m, i) => (
                    <div
                      key={m}
                      className="rounded-2xl bg-black/20 border border-white/10 p-4"
                    >
                      <div className="flex items-center justify-between">
                        <p className="font-semibold">{m}</p>
                        <span className="text-xs text-gray-400">
                          {i === 3 ? "Locked" : "Synced"}
                        </span>
                      </div>
                      <div className="mt-3 h-2 rounded-full bg-white/10 overflow-hidden">
                        <div
                          className="h-2 bg-[#FF6A00] rounded-full"
                          style={{ width: `${(i + 1) * 22}%` }}
                        />
                      </div>
                    </div>
                  )
                )}
              </div>

              <p className="mt-6 text-sm text-gray-400">
                Milestones are aligned across vendors using centralized synchronization.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ✅ 9. QUALITY ALIGNMENT */}
      <section className="bg-[#1E1E1E] border-y border-white/10">
        <div className="max-w-7xl mx-auto px-6 py-20">
          <h2 className="text-3xl font-bold text-center">
            Quality Alignment Across{" "}
            <span className="text-[#FF6A00]">Vendors</span>
          </h2>

          <p className="mt-4 text-gray-300 text-center">
            To maintain consistency:
          </p>

          <div className="mt-12 grid md:grid-cols-3 gap-4">
            {qualityCards.map((c) => (
              <div
                key={c.title}
                className="p-6 rounded-2xl bg-black/15 border border-white/10 hover:border-[#FF6A00]/40 transition"
              >
                <div className="w-12 h-12 rounded-2xl bg-[#FF6A00]/15 border border-[#FF6A00]/30 text-[#FF6A00] flex items-center justify-center">
                  {c.icon}
                </div>
                <h3 className="mt-4 font-bold text-lg">{c.title}</h3>
                <p className="mt-2 text-gray-400 text-sm leading-relaxed">
                  {c.desc}
                </p>
              </div>
            ))}
          </div>

          <div className="mt-10 text-center text-white font-semibold">
            Vendors are aligned to one quality benchmark, regardless of domain.
          </div>
        </div>
      </section>

      {/* ✅ 10. ISSUE HANDLING & ESCALATION */}
      <section className="max-w-7xl mx-auto px-6 py-20">
        <h2 className="text-3xl font-bold text-center">
          Issue Handling &{" "}
          <span className="text-[#FF6A00]">Escalation</span>
        </h2>

        <p className="mt-4 text-gray-300 text-center max-w-3xl mx-auto">
          Vendor issues are contained before they reach the client.
        </p>

        <div className="mt-12 max-w-4xl mx-auto space-y-4">
          {escalationSteps.map((s, i) => (
            <div
              key={s.title}
              className="relative p-5 rounded-2xl bg-[#1E1E1E] border border-white/10"
            >
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-[#FF6A00]/15 border border-[#FF6A00]/25 text-[#FF6A00] flex items-center justify-center">
                  {s.icon}
                </div>
                <div>
                  <p className="text-gray-400 text-sm">Step {i + 1}</p>
                  <p className="font-bold text-white">{s.title}</p>
                </div>
              </div>

              {i !== escalationSteps.length - 1 && (
                <div className="absolute left-9 top-[70px] w-[2px] h-10 bg-gradient-to-b from-[#FF6A00] to-transparent opacity-70" />
              )}
            </div>
          ))}
        </div>
      </section>

      {/* ✅ 11. VENDOR SUBSTITUTION */}
      <section className="bg-[#1E1E1E] border-y border-white/10">
        <div className="max-w-7xl mx-auto px-6 py-20">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold">
                Vendor Substitution &{" "}
                <span className="text-[#FF6A00]">Continuity Planning</span>
              </h2>

              <p className="mt-6 text-gray-300">Zryoss ensures:</p>

              <ul className="mt-6 space-y-3">
                {[
                  "No single vendor is a critical failure point",
                  "Alternate vendors are available",
                  "Execution continuity is maintained",
                ].map((p) => (
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
                  Delivery does not stop because one vendor fails.
                </p>
              </div>
            </div>

            <div className="relative overflow-hidden rounded-3xl border border-white/10 bg-[#121212]">
              <div className="absolute inset-0 bg-gradient-to-br from-[#FF6A00]/12 via-transparent to-transparent" />
              <div className="relative p-10">
                <div className="flex items-center justify-center">
                  <div className="w-16 h-16 rounded-3xl bg-[#FF6A00]/15 border border-[#FF6A00]/30 text-[#FF6A00] flex items-center justify-center">
                    <Shuffle className="w-8 h-8" />
                  </div>
                </div>
                <p className="mt-6 text-center font-bold text-white text-lg">
                  Continuity Loop
                </p>
                <p className="mt-2 text-center text-gray-400 text-sm">
                  Alternate execution paths activate automatically when needed.
                </p>

                <div className="mt-8 grid grid-cols-3 gap-3">
                  {["Primary Vendor", "Backup Vendor", "Delivery Continues"].map((t) => (
                    <div
                      key={t}
                      className="rounded-2xl bg-black/20 border border-white/10 p-4 text-center"
                    >
                      <p className="text-sm text-gray-200 font-semibold">{t}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ✅ 12. MULTI VERTICALS */}
      <section className="max-w-7xl mx-auto px-6 py-20">
        <h2 className="text-3xl font-bold text-center">
          Coordination Across{" "}
          <span className="text-[#FF6A00]">Multiple Verticals</span>
        </h2>

        <p className="mt-4 text-gray-300 text-center max-w-3xl mx-auto">
          This coordination model works consistently across:
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
                The coordination logic remains the same. Only execution expertise changes.
              </p>
            </div>
          ))}
        </div>

        <p className="mt-10 text-center font-semibold text-white">
          The coordination logic remains the same. Only execution expertise changes.
        </p>
      </section>

      {/* ✅ 13. WHY THIS MODEL SCALES */}
      <section className="bg-[#1E1E1E] border-y border-white/10">
        <div className="max-w-7xl mx-auto px-6 py-20">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold">
                Why This Model{" "}
                <span className="text-[#FF6A00]">Scales</span>
              </h2>

              <p className="mt-6 text-gray-300">Because:</p>

              <ul className="mt-6 space-y-3">
                {[
                  "Coordination authority is centralized",
                  "Execution capacity is distributed",
                  "Dependencies are controlled",
                  "Governance remains fixed",
                ].map((p) => (
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
                  Scale increases complexity — Zryoss absorbs that complexity.
                </p>
              </div>
            </div>

            <div className="relative overflow-hidden rounded-3xl border border-white/10 bg-[#121212]">
              <img
                alt="Scaling coordination illustration"
                className="w-full h-[420px] object-cover opacity-90"
                src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=1600&auto=format&fit=crop"
              />
              <div className="p-6">
                <p className="text-sm text-gray-300">
                  Central governance + distributed execution enables scalable multi-vendor delivery.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ✅ 14. WHO BENEFITS */}
      <section className="max-w-7xl mx-auto px-6 py-20">
        <h2 className="text-3xl font-bold text-center">
          Who Benefits From{" "}
          <span className="text-[#FF6A00]">This Model</span>
        </h2>

        <div className="mt-12 grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {stakeholders.map((s) => (
            <div
              key={s.title}
              className="p-6 rounded-2xl bg-[#1E1E1E] border border-white/10 hover:border-[#FF6A00]/40 transition"
            >
              <div className="w-12 h-12 rounded-2xl bg-[#FF6A00]/15 border border-[#FF6A00]/30 text-[#FF6A00] flex items-center justify-center">
                {s.icon}
              </div>
              <h3 className="mt-4 font-bold text-lg text-white">
                {s.title} <span className="text-[#FF6A00]">→</span>
              </h3>
              <p className="mt-2 text-gray-300">{s.desc}</p>
            </div>
          ))}
        </div>

        <p className="mt-10 text-center font-semibold text-white">
          Everyone operates within a defined structure.
        </p>
      </section>

      {/* ✅ 15. COORDINATION IS OPERATIONS FUNCTION */}
      <section className="relative overflow-hidden bg-[#1E1E1E] border-y border-white/10">
        <div className="absolute inset-0 opacity-[0.08] pointer-events-none">
          <Shield className="w-[520px] h-[520px] text-[#FF6A00] absolute -right-40 -top-40" />
        </div>

        <div className="relative max-w-5xl mx-auto px-6 py-20 text-center">
          <h2 className="text-3xl sm:text-4xl font-extrabold">
            Vendor Coordination Is an{" "}
            <span className="text-[#FF6A00]">Operations Function</span>
          </h2>

          <p className="mt-8 text-gray-200 text-lg font-semibold">
            At Zryoss:
          </p>

          <div className="mt-6 space-y-3 text-gray-300 text-lg">
            <p>• Coordination is not a soft skill</p>
            <p>
              • It is a <span className="text-white font-bold">system-defined function</span>
            </p>
          </div>

          <p className="mt-8 text-gray-400">
            This is what allows multiple vendors to act as one execution unit.
          </p>
        </div>
      </section>

      {/* ✅ 16. FINAL CTA */}
      <section className="relative overflow-hidden border-t border-white/10">
        <div className="absolute inset-0 bg-gradient-to-b from-[#121212] via-[#1E1E1E] to-[#121212]" />
        <div className="absolute -top-24 left-0 w-[500px] h-[500px] rounded-full bg-[#FF6A00]/10 blur-3xl" />
        <div className="absolute -bottom-40 right-0 w-[650px] h-[650px] rounded-full bg-[#FF6A00]/10 blur-3xl" />

        {/* watermark hub/spoke */}
        <div className="absolute inset-0 opacity-[0.06] pointer-events-none">
          <svg viewBox="0 0 1200 600" className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
            <g fill="none" stroke="#FF6A00" strokeWidth="2">
              <circle cx="600" cy="300" r="100" />
              <circle cx="300" cy="180" r="40" />
              <circle cx="900" cy="180" r="40" />
              <circle cx="300" cy="420" r="40" />
              <circle cx="900" cy="420" r="40" />
              <line x1="600" y1="300" x2="300" y2="180" />
              <line x1="600" y1="300" x2="900" y2="180" />
              <line x1="600" y1="300" x2="300" y2="420" />
              <line x1="600" y1="300" x2="900" y2="420" />
            </g>
          </svg>
        </div>

        <div className="relative max-w-5xl mx-auto px-6 py-20 text-center">
          <h2 className="text-3xl sm:text-4xl font-extrabold">Final Thought</h2>

          <p className="mt-6 text-gray-200 text-lg font-semibold">
            Multiple vendors do not create chaos.
            <br />
            <span className="text-[#FF6A00]">Poor coordination does.</span>
          </p>

          <p className="mt-6 text-gray-300">
            Zryoss replaces chaos with system-led coordination.
          </p>

          <p className="mt-3 text-white font-bold">
            You close the business.
            <br />
            Zryoss coordinates the execution.
          </p>

          <div className="mt-10 flex justify-center">
            <button className="inline-flex items-center gap-2 px-8 py-4 rounded-2xl bg-[#FF6A00] text-white font-bold hover:brightness-110 transition">
              Start Coordinated Execution <ArrowRight className="w-5 h-5" />
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}

/* -------------------- small ui helpers -------------------- */
function NodeCard({ title, icon, subtitle }) {
  return (
    <div className="rounded-2xl bg-black/20 border border-white/10 p-5 hover:border-[#FF6A00]/40 transition">
      <div className="flex items-center gap-3">
        <div className="w-10 h-10 rounded-xl bg-[#FF6A00]/15 border border-[#FF6A00]/30 text-[#FF6A00] flex items-center justify-center">
          {icon}
        </div>
        <div>
          <p className="font-bold">{title}</p>
          <p className="text-sm text-gray-400">{subtitle}</p>
        </div>
      </div>
    </div>
  );
}

/* handshake icon (lucide doesn't export a default Handshake in all versions) */
function HandshakeIcon() {
  return <LineChart className="w-6 h-6" />;
}
