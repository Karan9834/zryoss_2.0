import FadeUp from "../../components/animations/FadeUp";
import React, { useMemo } from "react";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
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
  ShieldCheck,
  Handshake,
} from "lucide-react";

export default function VendorCoordination() {
  const navigate = useNavigate();
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
        icon: <Handshake className="w-6 h-6" />,
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
    <main className="bg-[#050505] text-white overflow-hidden font-sans selection:bg-orange-500/30">
      {/* Refined Background System */}
      <div className="fixed inset-0 z-0 pointer-events-none overflow-hidden">
        <div className="absolute top-[-10%] right-[-5%] w-[800px] h-[800px] bg-orange-600/10 rounded-full blur-[120px] animate-pulse" />
        <div className="absolute bottom-[10%] left-[-10%] w-[600px] h-[600px] bg-purple-600/5 rounded-full blur-[100px]" />
        <div className="absolute top-[20%] left-[10%] w-[400px] h-[400px] bg-orange-500/5 rounded-full blur-[100px]" />
      </div>

      {/* ✅ 1. HERO */}
      <section className="relative min-h-[90vh] flex items-center pt-32 pb-20">
        <div className="max-w-7xl mx-auto px-6 relative z-10 w-full">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            {/* Left Column: Content */}
            <div>
              <FadeUp>
                <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-orange-500/10 border border-orange-500/20 text-orange-400 text-sm font-medium mb-8">
                  <span className="w-2 h-2 rounded-full bg-orange-500 animate-pulse" />
                  Zryoss · Vendor Coordination Model
                </div>

                <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-[1.1] mb-6">
                  Vendor Coordination <br />
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-orange-600">
                    Model
                  </span>
                </h1>

                <h2 className="text-xl md:text-2xl font-medium text-gray-300 mb-8 max-w-xl">
                  Multiple Vendors. One System. <span className="text-white">Zero Confusion.</span>
                </h2>

                <p className="text-gray-400 leading-relaxed text-lg mb-10 max-w-lg">
                  At Zryoss, vendor coordination is not handled through informal alignment.
                  It is governed through a central hub where roles, timelines, and dependencies
                  are clearly defined and controlled.
                </p>

                <div className="flex flex-col sm:flex-row gap-5">
                  <button
                    onClick={scrollToArchitecture}
                    className="group relative inline-flex items-center justify-center gap-2 px-8 py-4 rounded-xl bg-orange-500 text-white font-bold hover:bg-orange-600 transition-all duration-300 overflow-hidden shadow-[0_0_40px_rgba(249,115,22,0.2)]"
                  >
                    <div className="absolute inset-0 bg-gradient-to-r from-white/0 via-white/20 to-white/0 -translate-x-full group-hover:translate-x-full transition-transform duration-700" />
                    Explore Architecture <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                  </button>
                  <a
                    href="#roles"
                    className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-xl border border-white/10 bg-white/5 hover:bg-white/10 transition font-bold"
                  >
                    View Roles
                  </a>
                </div>
              </FadeUp>
            </div>

            {/* Right Column: Image */}
            <div className="relative mt-10 lg:mt-0">
              <FadeUp delay={0.2}>
                <div className="absolute inset-0 bg-gradient-to-tr from-orange-500/20 via-transparent to-purple-600/10 blur-3xl" />
                <div className="relative group">
                  <div className="absolute -inset-1 bg-gradient-to-r from-orange-500/20 to-purple-500/20 rounded-[2rem] blur opacity-25 group-hover:opacity-50 transition duration-1000 group-hover:duration-200" />
                  <img
                    src="/operations-hero-images/Vendor_Coordination.png"
                    alt="Vendor Coordination"
                    className="relative rounded-[2rem] shadow-2xl border border-white/10 transform transition-all duration-700 object-cover w-full h-auto aspect-[16/10] grayscale-[20%] group-hover:grayscale-0"
                  />
                </div>
              </FadeUp>
            </div>
          </div>
        </div>
      </section>

      {/* ✅ 2. WHY VENDOR COORDINATION BREAKS */}
      <section className="relative py-24 z-10">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-16 items-start">
            {/* left text */}
            <FadeUp>
              <div>
                <h2 className="text-3xl md:text-4xl font-bold mb-8">
                  Why Vendor Coordination Breaks <br />
                  <span className="text-orange-500">in Most Businesses</span>
                </h2>

                <p className="text-gray-400 mb-10 leading-relaxed text-lg">
                  Vendor coordination usually fails because of fragmented silos and lack of clear ownership.
                </p>

                <div className="grid gap-4">
                  {failures.map((x, i) => (
                    <FadeUp key={x} delay={i * 0.05}>
                      <div className="flex items-start gap-4 p-5 rounded-2xl bg-[#0E0F12] border border-white/5 hover:border-orange-500/30 transition-all duration-300">
                        <div className="shrink-0 w-10 h-10 rounded-xl bg-orange-500/10 flex items-center justify-center text-orange-500">
                          <AlertTriangle className="w-5 h-5" />
                        </div>
                        <span className="text-gray-200 font-medium leading-tight">{x}</span>
                      </div>
                    </FadeUp>
                  ))}
                </div>

                <div className="mt-10 p-6 rounded-2xl bg-orange-500/5 border border-orange-500/10">
                  <p className="text-gray-300">
                    Zryoss eliminates these failures by centralizing coordination under <span className="text-white font-semibold underline decoration-orange-500/30 underline-offset-4">one operational authority.</span>
                  </p>
                </div>
              </div>
            </FadeUp>

            {/* right illustration */}
            <div className="relative">
              <FadeUp delay={0.2}>
                <div className="absolute inset-0 bg-orange-500/10 blur-3xl rounded-full" />
                <div className="relative overflow-hidden rounded-[2rem] border border-white/10 bg-[#0E0F12]">
                  <img
                    alt="Fragmented vendor silos"
                    className="w-full h-[450px] object-cover opacity-80 group-hover:scale-105 transition-transform duration-700"
                    src="https://images.unsplash.com/photo-1555949963-ff9fe0c870eb?q=80&w=1600&auto=format&fit=crop"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0E0F12] via-transparent to-transparent" />
                  <div className="absolute bottom-0 left-0 p-8">
                    <p className="text-sm font-medium text-orange-400 mb-2 uppercase tracking-widest">Visibility Gap</p>
                    <p className="text-white font-medium">Disconnected vendors create fragmented delivery and hidden dependencies.</p>
                  </div>
                </div>
              </FadeUp>
            </div>
          </div>
        </div>
      </section>

      {/* ✅ 3. WHAT VENDOR COORDINATION MEANS */}
      <section className="relative py-24 bg-[#08090A] border-y border-white/5 overflow-hidden">
        {/* Animated pattern background */}
        <div className="absolute inset-0 opacity-[0.03] pointer-events-none">
          <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
            <defs>
              <pattern id="gridLarge" width="80" height="80" patternUnits="userSpaceOnUse">
                <path d="M 80 0 L 0 0 0 80" fill="none" stroke="white" strokeWidth="1" />
              </pattern>
            </defs>
            <rect width="100%" height="100%" fill="url(#gridLarge)" />
          </svg>
        </div>

        <div className="relative max-w-7xl mx-auto px-6">
          <FadeUp>
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                What Vendor Coordination <br />
                <span className="text-orange-500">Means at Zryoss</span>
              </h2>
              <p className="text-lg text-gray-400 max-w-2xl mx-auto">
                Coordination is a system-governed function, ensuring harmony across every domain.
              </p>
            </div>
          </FadeUp>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {vcMeans.map((x, i) => (
              <FadeUp key={x} delay={i * 0.05}>
                <div className="group p-8 rounded-3xl bg-[#0E0F12] border border-white/5 hover:border-orange-500/30 transition-all duration-500 h-full flex flex-col">
                  <div className="w-12 h-12 rounded-2xl bg-orange-500/10 flex items-center justify-center text-orange-500 mb-6 group-hover:scale-110 transition-transform">
                    <CheckCircle2 className="w-6 h-6" />
                  </div>
                  <h3 className="text-white font-bold mb-3">{x}</h3>
                  <p className="text-sm text-gray-400 leading-relaxed">
                    System-led coordination keeps all vendors aligned to one unified delivery benchmark.
                  </p>
                </div>
              </FadeUp>
            ))}
          </div>

          <FadeUp delay={0.4}>
            <div className="mt-16 relative group">
              <div className="absolute -inset-1 bg-gradient-to-r from-orange-500 to-purple-600 rounded-2xl blur opacity-15 group-hover:opacity-25 transition duration-1000" />
              <div className="relative py-6 px-10 rounded-2xl bg-[#0E0F12] border border-white/5 text-center">
                <p className="text-lg text-gray-200">
                  Vendors <span className="text-orange-400 font-bold italic">never</span> coordinate with each other independently.
                  <span className="text-white font-medium ml-2">All coordination flows through Zryoss operations.</span>
                </p>
              </div>
            </div>
          </FadeUp>
        </div>
      </section>

      {/* ✅ 4. ARCHITECTURE */}
      <section id="architecture" className="py-24 relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <FadeUp>
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                Hub-and-Spoke <br />
                <span className="text-orange-500">Coordination Architecture</span>
              </h2>
              <p className="text-gray-400 max-w-2xl mx-auto">A centralized command layer for distributed execution capacity.</p>
            </div>
          </FadeUp>

          <div className="relative mt-20 px-8 py-16 rounded-[3rem] bg-[#0E0F12] border border-white/5 shadow-2xl overflow-hidden group">
            <div className="absolute inset-0 bg-gradient-to-br from-orange-500/5 via-transparent to-purple-600/5 opacity-50" />

            <div className="relative grid lg:grid-cols-3 gap-12 items-center">
              {/* left */}
              <div className="space-y-6">
                <FadeUp delay={0.2}>
                  <NodeCard
                    title="Execution Brands"
                    icon={<Workflow className="w-5 h-5" />}
                    subtitle="Domain-specific controllers"
                  />
                </FadeUp>
                <FadeUp delay={0.3}>
                  <NodeCard
                    title="Work Translation"
                    icon={<Shuffle className="w-5 h-5" />}
                    subtitle="Translate scope into work"
                  />
                </FadeUp>
              </div>

              {/* hub */}
              <div className="relative flex justify-center">
                <FadeUp delay={0.4}>
                  <div className="relative w-56 h-56 flex items-center justify-center">
                    {/* Pulsing rings */}
                    <div className="absolute inset-0 rounded-full border border-orange-500/20 animate-ping-slow" />
                    <div className="absolute inset-[10%] rounded-full border border-orange-500/10 animate-ping" />

                    <div className="relative z-10 w-44 h-44 rounded-full bg-gradient-to-br from-orange-500 to-orange-600 p-1 flex items-center justify-center shadow-[0_0_50px_rgba(249,115,22,0.4)]">
                      <div className="w-full h-full rounded-full bg-[#050505] flex flex-col items-center justify-center text-center p-4">
                        <Network className="w-10 h-10 text-orange-500 mb-2" />
                        <span className="font-bold text-sm tracking-tight leading-tight">ZRYOSS <br /> OPERATIONS</span>
                      </div>
                    </div>
                  </div>
                </FadeUp>
              </div>

              {/* right */}
              <div className="space-y-6">
                <FadeUp delay={0.5}>
                  <NodeCard
                    title="Vendors"
                    icon={<Settings className="w-5 h-5" />}
                    subtitle="Task execution units"
                  />
                </FadeUp>
                <FadeUp delay={0.6}>
                  <NodeCard
                    title="Standards Alignment"
                    icon={<BadgeCheck className="w-5 h-5" />}
                    subtitle="Follow benchmarks & timelines"
                  />
                </FadeUp>
              </div>
            </div>

            <div className="mt-16 grid grid-cols-1 sm:grid-cols-3 gap-4">
              {[
                { label: "One Direction", icon: ArrowRight },
                { label: "One Authority", icon: ShieldCheck },
                { label: "One Reporting Line", icon: LineChart },
              ].map((item, i) => (
                <FadeUp key={i} delay={0.7 + i * 0.1}>
                  <div className="flex items-center gap-3 px-6 py-4 rounded-2xl bg-white/5 border border-white/5 group-hover:bg-white/[0.07] transition-colors">
                    <item.icon className="w-5 h-5 text-orange-500" />
                    <span className="text-gray-200 font-semibold">{item.label}</span>
                  </div>
                </FadeUp>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ✅ 5. ROLES & RESPONSIBILITIES */}
      <section id="roles" className="py-24 relative bg-[#08090A]">
        <div className="max-w-7xl mx-auto px-6">
          <FadeUp>
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                Roles & <span className="text-orange-500">Responsibilities</span>
              </h2>
              <p className="text-gray-400 max-w-2xl mx-auto">No role overlaps. No responsibility gaps. Every unit is aligned.</p>
            </div>
          </FadeUp>

          <div className="grid lg:grid-cols-3 gap-8">
            {roles.map((r, i) => (
              <FadeUp key={r.title} delay={i * 0.1}>
                <div className="group relative p-8 rounded-[2.5rem] bg-[#0E0F12] border border-white/5 hover:border-orange-500/30 transition-all duration-500 h-full flex flex-col">
                  <div className="w-14 h-14 rounded-2xl bg-orange-500/10 flex items-center justify-center text-orange-500 mb-8 group-hover:scale-110 group-hover:rotate-3 transition-transform duration-500">
                    {r.icon}
                  </div>

                  <h3 className="text-xl font-bold text-white mb-6 group-hover:text-orange-400 transition-colors uppercase tracking-tight">{r.title}</h3>

                  <ul className="space-y-4 mb-8 flex-grow">
                    {r.points.map((p, idx) => (
                      <li key={idx} className="flex items-start gap-3">
                        <CheckCircle2 className="w-5 h-5 text-orange-500/60 mt-1 shrink-0" />
                        <span className="text-gray-300 leading-snug">{p}</span>
                      </li>
                    ))}
                  </ul>

                  <div className="mt-auto p-5 rounded-2xl bg-orange-500/5 border border-orange-500/10 group-hover:bg-orange-500/10 transition-colors">
                    <p className="text-white font-semibold text-sm">{r.highlight}</p>
                  </div>
                </div>
              </FadeUp>
            ))}
          </div>
        </div>
      </section>

      {/* ✅ 6. TASK ALLOCATION & DEPENDENCY MAPPING */}
      <section className="py-24 relative">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <FadeUp>
              <div>
                <h2 className="text-3xl md:text-4xl font-bold mb-8">
                  Task Allocation & <br />
                  <span className="text-orange-500">Dependency Mapping</span>
                </h2>

                <p className="text-gray-400 mb-10 text-lg">Handoffs are defined before execution begins to prevent hidden delays.</p>

                <div className="grid gap-4">
                  {[
                    "Tasks are broken down into granular units",
                    "Dependencies between vendors are identified",
                    "Sequence and handoffs are locked",
                    "Individual ownership is assigned",
                  ].map((p, i) => (
                    <FadeUp key={i} delay={i * 0.05}>
                      <div className="flex items-center gap-4 p-5 rounded-2xl bg-[#0E0F12] border border-white/5 hover:border-orange-500/30 transition-all duration-300">
                        <div className="w-10 h-10 rounded-xl bg-orange-500/10 flex items-center justify-center text-orange-500">
                          <Layers className="w-5 h-5" />
                        </div>
                        <span className="text-gray-200 font-medium">{p}</span>
                      </div>
                    </FadeUp>
                  ))}
                </div>

                <div className="mt-12 flex flex-wrap gap-4">
                  {["No Waiting", "No Misalignment", "No Blame-shifting"].map((x, i) => (
                    <FadeUp key={i} delay={0.3 + i * 0.1}>
                      <div className="flex items-center gap-2 px-4 py-2 rounded-full bg-orange-500/5 border border-orange-500/10 text-orange-400 text-sm font-medium">
                        <CheckCircle2 className="w-4 h-4" />
                        {x}
                      </div>
                    </FadeUp>
                  ))}
                </div>
              </div>
            </FadeUp>

            {/* Illustration */}
            <div className="relative">
              <FadeUp delay={0.2}>
                <div className="absolute inset-0 bg-orange-500/10 blur-3xl rounded-full" />
                <div className="relative group overflow-hidden rounded-[2.5rem] border border-white/10 bg-[#0E0F12]">
                  <img
                    alt="Dependency mapping"
                    className="w-full h-[450px] object-cover opacity-80 group-hover:scale-105 transition-transform duration-700"
                    src="https://images.unsplash.com/photo-1526379095098-d400fd0bf935?q=80&w=1600&auto=format&fit=crop"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0E0F12] to-transparent" />
                  <div className="absolute bottom-0 left-0 p-8">
                    <p className="text-white font-medium leading-relaxed">
                      Dependency mapping ensures that every vendor knows <br />
                      <span className="text-orange-400 font-bold">who they depend on and who depends on them.</span>
                    </p>
                  </div>
                </div>
              </FadeUp>
            </div>
          </div>
        </div>
      </section>

      {/* ✅ 7. CENTRAL COMMUNICATION FRAMEWORK */}
      <section className="py-24 relative bg-[#08090A] border-y border-white/5">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            {/* image */}
            <div className="order-2 lg:order-1 relative">
              <FadeUp delay={0.2}>
                <div className="absolute inset-0 bg-orange-600/10 blur-3xl rounded-full" />
                <div className="relative group overflow-hidden rounded-[2.5rem] border border-white/10 bg-[#0E0F12]">
                  <img
                    alt="Central communication hub"
                    className="w-full h-[450px] object-cover opacity-80 group-hover:scale-105 transition-transform duration-700"
                    src="https://images.unsplash.com/photo-1559136555-9303baea8ebd?q=80&w=1600&auto=format&fit=crop"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0E0F12] to-transparent" />
                  <div className="absolute bottom-0 left-0 p-8">
                    <p className="text-white font-medium leading-relaxed">
                      One channel, one source of truth. <br />
                      <span className="text-orange-400 font-bold tracking-wide">ZERO NOISE.</span>
                    </p>
                  </div>
                </div>
              </FadeUp>
            </div>

            {/* text */}
            <div className="order-1 lg:order-2">
              <FadeUp>
                <h2 className="text-3xl md:text-4xl font-bold mb-8">
                  Central Communication <br />
                  <span className="text-orange-500">Framework</span>
                </h2>

                <p className="text-gray-400 mb-10 text-lg">No informal decisions. No contradictory updates.</p>

                <div className="space-y-4">
                  {[
                    "All vendor communication is logged centrally",
                    "Updates are context-aware and documented",
                    "Visible to all relevant operational stakeholders",
                    "Free from side-channel or verbal decisions",
                  ].map((p, i) => (
                    <FadeUp key={i} delay={i * 0.05}>
                      <div className="flex items-center gap-4 p-5 rounded-2xl bg-[#0E0F12] border border-white/5 hover:border-orange-500/30 transition-all">
                        <div className="w-10 h-10 rounded-xl bg-orange-500/10 flex items-center justify-center text-orange-500">
                          <MessageSquareText className="w-5 h-5" />
                        </div>
                        <span className="text-gray-200 font-medium">{p}</span>
                      </div>
                    </FadeUp>
                  ))}
                </div>
              </FadeUp>
            </div>
          </div>
        </div>
      </section>

      {/* ✅ 8. TIMELINE SYNCHRONIZATION */}
      <section className="py-24 relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <FadeUp>
              <div>
                <h2 className="text-3xl md:text-4xl font-bold mb-8">
                  Timeline <br />
                  <span className="text-orange-500">Synchronization</span>
                </h2>

                <p className="text-gray-400 mb-10 text-lg">One delay among many vendors can derail a project. We ensure it doesn't.</p>

                <div className="space-y-6">
                  {[
                    "Vendor timelines align with overall delivery milestones",
                    "Potential delays are flagged via predictive monitoring",
                    "Timeline adjustments are coordinated centrally",
                  ].map((p, i) => (
                    <FadeUp key={i} delay={i * 0.1}>
                      <div className="flex items-start gap-5 p-6 rounded-[1.5rem] bg-[#0E0F12] border border-white/5 shadow-lg group hover:border-orange-500/30 transition-all">
                        <div className="w-12 h-12 rounded-2xl bg-orange-500/10 flex items-center justify-center text-orange-500 group-hover:scale-110 transition-transform">
                          <Timer className="w-6 h-6" />
                        </div>
                        <p className="text-gray-200 font-medium leading-relaxed">{p}</p>
                      </div>
                    </FadeUp>
                  ))}
                </div>

                <div className="mt-10 p-6 rounded-2xl bg-orange-500/10 border border-orange-500/20 text-orange-400 font-bold text-center">
                  One delayed vendor does not derail the entire delivery.
                </div>
              </div>
            </FadeUp>

            {/* Visual Timeline Widget */}
            <div className="relative">
              <FadeUp delay={0.2}>
                <div className="absolute inset-0 bg-orange-500/10 blur-3xl rounded-full" />
                <div className="relative p-10 rounded-[3rem] bg-[#0E0F12] border border-white/5 overflow-hidden group">
                  <div className="flex justify-between items-center mb-10">
                    <div className="flex gap-4">
                      <div className="w-10 h-10 rounded-xl bg-orange-500/10 border border-orange-500/20 flex items-center justify-center text-orange-500">
                        <Workflow className="w-5 h-5" />
                      </div>
                      <div>
                        <p className="text-white font-bold">Sync Dashboard</p>
                        <p className="text-xs text-gray-500">Real-time Coordination</p>
                      </div>
                    </div>
                    <div className="px-3 py-1 rounded-full bg-green-500/10 border border-green-500/20 text-green-500 text-[10px] uppercase font-bold tracking-tighter">Live</div>
                  </div>

                  <div className="space-y-6">
                    {[
                      { name: "Vendor Alpha", status: "Completed", color: "bg-green-500", w: "100%" },
                      { name: "Vendor Beta", status: "In Progress", color: "bg-orange-500", w: "65%" },
                      { name: "Vendor Gamma", status: "Locked", color: "bg-orange-500/60", w: "40%" },
                      { name: "Grand Delivery", status: "Scheduled", color: "bg-white/20", w: "10%" }
                    ].map((v, i) => (
                      <div key={i} className="space-y-2">
                        <div className="flex justify-between text-xs">
                          <span className="text-gray-300 font-semibold">{v.name}</span>
                          <span className={`${v.status === 'Completed' ? 'text-green-500' : 'text-gray-500'}`}>{v.status}</span>
                        </div>
                        <div className="h-2 rounded-full bg-white/5 overflow-hidden">
                          <motion.div
                            initial={{ width: 0 }}
                            whileInView={{ width: v.w }}
                            transition={{ duration: 1.5, delay: 0.5 + i * 0.1 }}
                            className={`h-full rounded-full ${v.color}`}
                          />
                        </div>
                      </div>
                    ))}
                  </div>

                  <div className="mt-10 pt-6 border-t border-white/5 flex justify-between items-center">
                    <span className="text-gray-500 text-xs">Last Sync: Just now</span>
                    <button className="text-orange-500 text-xs font-bold hover:underline">View Map →</button>
                  </div>
                </div>
              </FadeUp>
            </div>
          </div>
        </div>
      </section>

      {/* ✅ 9. QUALITY ALIGNMENT */}
      <section className="py-24 relative bg-[#08090A] border-y border-white/5">
        <div className="max-w-7xl mx-auto px-6">
          <FadeUp>
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                Quality Alignment <br />
                <span className="text-orange-500">Across Vendors</span>
              </h2>
              <p className="text-gray-400 max-w-2xl mx-auto">No matter the domain, quality meets a single Zryoss benchmark.</p>
            </div>
          </FadeUp>

          <div className="grid md:grid-cols-3 gap-8">
            {qualityCards.map((c, i) => (
              <FadeUp key={c.title} delay={i * 0.1}>
                <div className="group p-8 rounded-[2rem] bg-[#0E0F12] border border-white/5 hover:border-orange-500/30 transition-all duration-500 h-full">
                  <div className="w-14 h-14 rounded-2xl bg-orange-500/10 flex items-center justify-center text-orange-500 mb-8 group-hover:scale-110 group-hover:-rotate-3 transition-transform duration-500">
                    {c.icon}
                  </div>
                  <h3 className="text-white font-bold text-xl mb-4">{c.title}</h3>
                  <p className="text-gray-400 text-sm leading-relaxed mb-6 group-hover:text-gray-300 transition-colors">
                    {c.desc}
                  </p>
                  <div className="flex items-center gap-2 text-orange-500 text-xs font-bold uppercase tracking-widest opacity-0 group-hover:opacity-100 transition-opacity">
                    <ShieldCheck className="w-4 h-4" /> Enforced Standard
                  </div>
                </div>
              </FadeUp>
            ))}
          </div>

          <FadeUp delay={0.4}>
            <div className="mt-16 text-center">
              <p className="text-gray-500 italic">
                Vendors are aligned to <span className="text-orange-400 font-bold not-italic underline decoration-orange-500/30 underline-offset-8">one quality benchmark</span>, regardless of the vertical or complexity.
              </p>
            </div>
          </FadeUp>
        </div>
      </section>

      {/* ✅ 10. ISSUE HANDLING & ESCALATION */}
      <section className="py-24 relative">
        <div className="max-w-7xl mx-auto px-6">
          <FadeUp>
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                Issue Handling <br />
                <span className="text-orange-500">& Escalation</span>
              </h2>
              <p className="text-gray-400 max-w-2xl mx-auto">Vendor issues are contained and resolved before they impact the client.</p>
            </div>
          </FadeUp>

          <div className="max-w-4xl mx-auto">
            <div className="space-y-6">
              {escalationSteps.map((s, i) => (
                <FadeUp key={i} delay={i * 0.1}>
                  <div className="relative group p-8 rounded-[2rem] bg-[#0E0F12] border border-white/5 hover:border-orange-500/30 transition-all duration-300 flex items-center gap-8 shadow-xl">
                    <div className="shrink-0 w-16 h-16 rounded-[1.2rem] bg-orange-500/10 border border-orange-500/20 flex items-center justify-center text-orange-500">
                      <div className="flex flex-col items-center">
                        <span className="text-[10px] font-bold uppercase tracking-tighter opacity-70">Step</span>
                        <span className="text-2xl font-bold">{i + 1}</span>
                      </div>
                    </div>

                    <div className="flex-grow flex items-center justify-between">
                      <div>
                        <h4 className="text-xl font-bold text-white mb-1 group-hover:text-orange-400 transition-colors">{s.title}</h4>
                        <p className="text-sm text-gray-500">Escalation ensuring resolution continuity.</p>
                      </div>
                      <div className="shrink-0 text-orange-500/20 group-hover:text-orange-500/40 transition-colors">
                        {s.icon}
                      </div>
                    </div>

                    {i < escalationSteps.length - 1 && (
                      <div className="absolute left-[3.35rem] top-[6.5rem] w-px h-12 bg-gradient-to-b from-orange-500 to-transparent z-0" />
                    )}
                  </div>
                </FadeUp>
              ))}
            </div>

            <FadeUp delay={0.5}>
              <div className="mt-16 p-8 rounded-[2rem] bg-[#0E0F12] border border-orange-500/20 text-center relative overflow-hidden group">
                <div className="absolute inset-0 bg-orange-500/5 group-hover:bg-orange-500/10 transition-colors" />
                <p className="relative z-10 text-orange-100 font-semibold text-lg italic tracking-tight">
                  "Individual mistakes are expected. <span className="text-white not-italic font-bold">Systemic failure is not allowed."</span>
                </p>
              </div>
            </FadeUp>
          </div>
        </div>
      </section>

      {/* ✅ 11. VENDOR SUBSTITUTION & CONTINUITY */}
      <section className="relative py-24 bg-[#08090A] border-t border-white/5">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <FadeUp>
              <div>
                <h2 className="text-3xl md:text-4xl font-bold mb-8">
                  Vendor Substitution & <br />
                  <span className="text-orange-500">Continuity Planning</span>
                </h2>

                <p className="text-gray-400 mb-10 text-lg">Zryoss ensures business continuity even if a vendor fails to perform.</p>

                <div className="space-y-4">
                  {[
                    "Standardized work documentation for easy handoff",
                    "Pool of pre-vetted backup vendors",
                    "Rapid substitution framework for underperforming units",
                    "Shadowing and knowledge transfer processes",
                  ].map((p, i) => (
                    <FadeUp key={i} delay={i * 0.05}>
                      <div className="flex items-center gap-4 p-5 rounded-2xl bg-[#0E0F12] border border-white/5 hover:border-orange-500/30 transition-all">
                        <div className="w-10 h-10 rounded-xl bg-orange-500/10 flex items-center justify-center text-orange-500">
                          <Repeat2 className="w-5 h-5" />
                        </div>
                        <span className="text-gray-200 font-medium">{p}</span>
                      </div>
                    </FadeUp>
                  ))}
                </div>
              </div>
            </FadeUp>

            <div className="relative">
              <FadeUp delay={0.2}>
                <div className="absolute inset-0 bg-orange-500/10 blur-3xl rounded-full" />
                <div className="relative group overflow-hidden rounded-[2.5rem] border border-white/10 bg-[#0E0F12]">
                  <img
                    alt="Continuity planning"
                    className="w-full h-[450px] object-cover opacity-80 group-hover:scale-105 transition-transform duration-700"
                    src="https://images.unsplash.com/photo-1552664730-d307ca884978?q=80&w=1600&auto=format&fit=crop"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0E0F12] to-transparent" />
                  <div className="absolute bottom-0 left-0 p-8">
                    <p className="text-white font-medium">
                      Project success is <span className="text-orange-400 font-bold">decoupled</span> from individual vendor stability.
                    </p>
                  </div>
                </div>
              </FadeUp>
            </div>
          </div>
        </div>
      </section>

      {/* ✅ 12. FINAL CALLOUT */}
      <section className="py-32 relative overflow-hidden">
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-orange-500/10 rounded-full blur-[120px]" />
        </div>

        <div className="relative max-w-4xl mx-auto px-6 text-center">
          <FadeUp>
            <h2 className="text-4xl md:text-5xl font-extrabold mb-8">
              Multiple vendors do not create chaos. <br />
              <span className="text-orange-500">Poor coordination does.</span>
            </h2>

            <p className="text-xl text-gray-300 mb-12 leading-relaxed">
              Zryoss replaces chaos with system-led coordination.
              You close the business; Zryoss coordinates the execution.
            </p>

            <div className="flex flex-col sm:flex-row gap-6 justify-center">
              <button
                onClick={() => navigate("/contact")}
                className="group relative inline-flex items-center justify-center gap-2 px-10 py-5 rounded-2xl bg-orange-500 text-white font-bold hover:bg-orange-600 transition-all duration-300 shadow-[0_0_50px_rgba(249,115,22,0.3)]">
                Start Coordinated Execution <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </button>
            </div>
          </FadeUp>
        </div>
      </section>
    </main>
  );
}

/* -------------------- small ui helpers -------------------- */
function NodeCard({ title, icon, subtitle }) {
  return (
    <div className="group rounded-2xl bg-[#0E0F12] border border-white/5 p-6 hover:border-orange-500/30 transition-all duration-300 shadow-xl">
      <div className="flex items-center gap-4">
        <div className="w-12 h-12 rounded-xl bg-orange-500/10 border border-orange-500/20 text-orange-500 flex items-center justify-center group-hover:scale-110 transition-transform">
          {icon}
        </div>
        <div>
          <p className="font-bold text-white group-hover:text-orange-400 transition-colors uppercase tracking-tight text-sm">{title}</p>
          <p className="text-sm text-gray-500 group-hover:text-gray-400 transition-colors">{subtitle}</p>
        </div>
      </div>
    </div>
  );
}
