import React from "react";
import {
  Users,
  ShieldCheck,
  Zap,
  Clock,
  MessageSquare,
  AlertTriangle,
  BarChart3,
  CheckCircle2,
  ArrowRight,
  UserCheck,
  Layers,
  Activity,
  User,
  Building2,
  Bell
} from "lucide-react";

export default function AccountManagement() {
  const lifecyclePhases = [
    {
      title: "1️⃣ During Onboarding",
      items: [
        "Coordinates onboarding steps",
        "Ensures scope clarity and approvals",
        "Prepares execution readiness",
        "Aligns all stakeholders"
      ]
    },
    {
      title: "2️⃣ During Execution",
      items: [
        "Monitors progress and milestones",
        "Shares structured updates",
        "Flags risks and delays early",
        "Ensures quality checkpoints"
      ]
    },
    {
      title: "3️⃣ During Delivery & Closure",
      items: [
        "Oversees final delivery",
        "Ensures sign-offs and documentation",
        "Captures feedback",
        "Supports transition or expansion"
      ]
    }
  ];

  const supportTiers = [
    { title: "Operational Support", desc: "Execution and delivery coordination", icon: <Layers className="w-5 h-5 text-[#FF6A00]" /> },
    { title: "Quality Support", desc: "Resolution of delivery or output issues", icon: <CheckCircle2 className="w-5 h-5 text-[#FF6A00]" /> },
    { title: "Escalation Support", desc: "System-level issue handling", icon: <AlertTriangle className="w-5 h-5 text-[#FF6A00]" /> },
  ];

  const issueSteps = [
    "Issue is logged centrally",
    "Impact is assessed",
    "Ownership is assigned",
    "Resolution timeline is defined",
    "Escalation is triggered if required"
  ];

  return (
    <div className="min-h-screen bg-[#121212] text-white selection:bg-[#FF6A00]/30 selection:text-white font-sans">

      {/* 1. HERO SECTION */}
      <section className="relative min-h-[85vh] flex items-center justify-center overflow-hidden">
        {/* Background Image */}
        <div
          className="absolute inset-0 z-0 bg-cover bg-center"
          style={{ backgroundImage: "url(/account_management_hero_new.png)" }}
        />
        {/* Gradient Overlay */}
        <div className="absolute inset-0 z-10 bg-[#121212]/90 bg-gradient-to-t from-[#121212] via-[#121212]/80 to-transparent" />

        {/* Content */}
        <div className="relative z-20 max-w-5xl mx-auto px-6 text-center">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10 text-sm text-gray-200 mb-8 backdrop-blur-sm">
            <span className="w-2 h-2 rounded-full bg-[#FF6A00]" />
            Operations & Support
          </div>

          <h1 className="text-5xl md:text-7xl font-extrabold tracking-tight leading-tight mb-8">
            One Account. <span className="text-[#FF6A00]">One Owner.</span><br />
            Continuous Support.
          </h1>

          <p className="text-xl md:text-2xl text-gray-300 max-w-3xl mx-auto font-light leading-relaxed mb-10">
            At Zryoss, account management is not a support function.<br />
            It is a <span className="text-white font-medium">core operational control layer</span> that ensures execution alignment, communication clarity, and delivery accountability.
          </p>

          <div className="flex flex-col sm:flex-row gap-5 justify-center">
            <button className="px-8 py-4 bg-[#FF6A00] text-white font-bold text-lg rounded-xl hover:bg-[#FF6A00]/90 transition shadow-[0_0_25px_rgba(255,106,0,0.4)] flex items-center justify-center gap-2">
              Contact Support <ArrowRight className="w-5 h-5" />
            </button>
          </div>
        </div>
      </section>

      {/* 2. WHY IT MATTERS */}
      <section className="py-24 px-6 max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold mb-8">
              Why Account Management Matters
            </h2>
            <p className="text-gray-300 text-lg mb-8">
              Most execution failures happen because <strong>no single point of responsibility exists</strong>. Clients chase multiple teams, communication scatters, and ownership becomes unclear.
            </p>
            <div className="space-y-4">
              {[
                "Clients and partners chase multiple teams",
                "Communication is scattered",
                "Issues escalate too late",
                "Ownership becomes unclear"
              ].map((item, i) => (
                <div key={i} className="flex items-center gap-4 p-4 rounded-xl bg-[#1E1E1E] border border-white/5">
                  <AlertTriangle className="w-5 h-5 text-red-500 shrink-0" />
                  <span className="text-gray-200">{item}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="bg-[#1E1E1E] p-10 rounded-3xl border border-white/10 relative overflow-hidden">
            <div className="absolute top-0 right-0 w-64 h-64 bg-[#FF6A00]/10 rounded-full blur-[80px]" />
            <h3 className="text-2xl font-bold mb-6 text-white relative z-10">The Zryoss Solution</h3>
            <p className="text-gray-300 mb-8 relative z-10">
              Zryoss eliminates these risks by assigning <strong>dedicated account ownership</strong> from day one.
            </p>

            <div className="grid gap-4 relative z-10">
              <div className="flex items-center gap-3">
                <CheckCircle2 className="w-6 h-6 text-[#FF6A00]" />
                <span className="text-lg font-medium">Single point of coordination</span>
              </div>
              <div className="flex items-center gap-3">
                <CheckCircle2 className="w-6 h-6 text-[#FF6A00]" />
                <span className="text-lg font-medium">Clear responsibility boundaries</span>
              </div>
              <div className="flex items-center gap-3">
                <CheckCircle2 className="w-6 h-6 text-[#FF6A00]" />
                <span className="text-lg font-medium">Defined update cycles</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 3. DEDICATED MODEL & ROLE */}
      <section className="bg-[#1E1E1E] py-24 border-y border-white/10">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl md:text-5xl font-bold mb-6">Dedicated Account <span className="text-[#FF6A00]">Manager Model</span></h2>
            <p className="text-gray-400 text-lg">
              Every IPP, BPP, and client engagement receives a dedicated expert. They do not execute work—they <span className="text-white">control execution flow</span>.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="col-span-1 md:col-span-1 p-8 rounded-3xl bg-[#121212] border border-white/10 h-full">
              <UserCheck className="w-12 h-12 text-[#FF6A00] mb-6" />
              <h3 className="text-xl font-bold mb-4">Responsible For:</h3>
              <ul className="space-y-3 text-gray-300">
                <li className="flex gap-3 text-sm"><span className="text-[#FF6A00] mt-1">•</span> Understanding full engagement scope</li>
                <li className="flex gap-3 text-sm"><span className="text-[#FF6A00] mt-1">•</span> Coordinating execution across brands</li>
                <li className="flex gap-3 text-sm"><span className="text-[#FF6A00] mt-1">•</span> Tracking milestones & timelines</li>
                <li className="flex gap-3 text-sm"><span className="text-[#FF6A00] mt-1">•</span> Managing escalations & resolution</li>
              </ul>
            </div>

            <div className="col-span-1 md:col-span-2 p-8 rounded-3xl bg-[#121212] border border-white/10 h-full relative overflow-hidden group">
              <div className="absolute inset-0 bg-gradient-to-r from-[#FF6A00]/5 to-transparent opacity-0 group-hover:opacity-100 transition duration-500" />
              <h3 className="text-2xl font-bold mb-6">Account Management Includes</h3>
              <div className="grid sm:grid-cols-2 gap-x-8 gap-y-4">
                {[
                  "Single point of coordination",
                  "Issue tracking and escalation",
                  "Execution alignment across teams",
                  "Delivery oversight",
                  "Communication and updates",
                  "Long-term continuity"
                ].map((feat, i) => (
                  <div key={i} className="flex items-center gap-3 p-3 bg-white/5 rounded-lg border border-white/5">
                    <Zap className="w-4 h-4 text-[#FF6A00]" />
                    <span className="text-white font-medium">{feat}</span>
                  </div>
                ))}
              </div>
              <div className="mt-8 pt-6 border-t border-white/10">
                <p className="text-[#FF6A00] font-mono text-sm">
                  ★ The Account Manager represents the system, not an individual team.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 4. LIFECYCLE MANAGEMENT */}
      <section className="py-24 px-6 max-w-7xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-16">
          Account Management During the <span className="text-[#FF6A00]">Lifecycle</span>
        </h2>

        <div className="grid md:grid-cols-3 gap-8">
          {lifecyclePhases.map((phase, idx) => (
            <div key={idx} className="p-8 rounded-2xl bg-[#1E1E1E] border border-white/10 hover:border-[#FF6A00]/40 transition duration-300">
              <h3 className="text-xl font-bold text-white mb-6 pb-4 border-b border-white/10">{phase.title}</h3>
              <ul className="space-y-4">
                {phase.items.map((item, i) => (
                  <li key={i} className="flex items-start gap-3 text-gray-300">
                    <CheckCircle2 className="w-5 h-5 text-[#FF6A00] shrink-0 mt-0.5" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </section>

      {/* 5. SUPPORT & COMMUNICATION */}
      <section className="bg-[#1E1E1E] py-24 border-y border-white/10">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-20">
            {/* Support Model */}
            <div>
              <h2 className="text-3xl font-bold mb-8">Support Model</h2>
              <p className="text-gray-300 mb-8">Support is provided through a structured, tiered approach. It is process-driven, not ad-hoc.</p>

              <div className="space-y-4">
                {supportTiers.map((tier, idx) => (
                  <div key={idx} className="flex items-center gap-4 p-5 rounded-xl bg-[#121212] border border-white/10 hover:border-[#FF6A00]/30 transition">
                    <div className="p-3 bg-white/5 rounded-lg border border-white/5">
                      {tier.icon}
                    </div>
                    <div>
                      <h4 className="text-white font-bold">{tier.title}</h4>
                      <p className="text-sm text-gray-400">{tier.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Communication */}
            <div>
              <h2 className="text-3xl font-bold mb-8">Communication & Updates</h2>
              <div className="bg-[#121212] p-8 rounded-3xl border border-white/10 h-fit">
                <ul className="space-y-6">
                  {[
                    "Scheduled updates (status, progress, risks)",
                    "Centralized communication records",
                    "Clear response timelines",
                    "No dependency on informal follow-ups"
                  ].map((item, i) => (
                    <li key={i} className="flex items-center gap-4">
                      <div className="w-2 h-2 rounded-full bg-[#FF6A00]" />
                      <span className="text-gray-200 text-lg">{item}</span>
                    </li>
                  ))}
                </ul>
                <div className="mt-8 p-4 bg-[#FF6A00]/10 rounded-xl border border-[#FF6A00]/20 text-center">
                  <span className="text-[#FF6A00] font-semibold">"Communication is consistent, documented, and transparent."</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 6. ISSUE HANDLING & VISIBILITY */}
      <section className="py-24 px-6 max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold mb-4">Issue Handling & <span className="text-[#FF6A00]">Visibility</span></h2>
          <p className="text-gray-400">No issue depends on personal availability.</p>
        </div>

        {/* Issue Steps */}
        <div className="relative mb-20">
          <div className="absolute top-1/2 left-0 w-full h-1 bg-white/10 -translate-y-1/2 hidden md:block" />
          <div className="grid md:grid-cols-5 gap-6 relative z-10">
            {issueSteps.map((step, i) => (
              <div key={i} className="flex flex-col items-center text-center group">
                <div className="w-12 h-12 rounded-full bg-[#1E1E1E] border-2 border-[#FF6A00] text-white font-bold flex items-center justify-center mb-4 text-xl group-hover:scale-110 transition bg-[#121212]">
                  {i + 1}
                </div>
                <p className="text-gray-300 text-sm font-medium bg-[#121212] px-2 py-1 rounded border border-transparent group-hover:border-white/10 transition">{step}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Visibility Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {[
            { label: "Execution Status", icon: <Activity className="w-5 h-5" /> },
            { label: "Delivery Timelines", icon: <Clock className="w-5 h-5" /> },
            { label: "Quality Adherence", icon: <ShieldCheck className="w-5 h-5" /> },
            { label: "Pending Actions", icon: <Layers className="w-5 h-5" /> },
            { label: "Risks & Resolutions", icon: <AlertTriangle className="w-5 h-5" /> },
            { label: "Account Continuity", icon: <Users className="w-5 h-5" /> }
          ].map((item, idx) => (
            <div key={idx} className="flex items-center gap-4 p-6 rounded-xl bg-[#1E1E1E] border border-white/5 hover:bg-white/5 transition">
              <div className="text-[#FF6A00]">{item.icon}</div>
              <span className="text-lg font-medium text-white">{item.label}</span>
            </div>
          ))}
        </div>
      </section>

      {/* 7. CONTINUITY & BENEFITS */}
      <section className="bg-[#1E1E1E] py-24 border-t border-white/10">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-16">
            <div>
              <h2 className="text-3xl font-bold mb-6">How This Model Protects You</h2>
              <p className="text-gray-400 mb-8 text-lg">
                For IPPs & BPPs, this means no execution chasing, no vendor coordination, and no communication overload.
              </p>

              <div className="bg-[#121212] p-8 rounded-3xl border border-white/10 mb-8">
                <h4 className="text-[#FF6A00] font-bold mb-4 uppercase tracking-wider text-sm">Who Benefits</h4>
                <div className="space-y-4">
                  <div className="flex justify-between border-b border-white/10 pb-2">
                    <span className="text-white">Clients</span>
                    <span className="text-gray-400">Clear communication & confidence</span>
                  </div>
                  <div className="flex justify-between border-b border-white/10 pb-2">
                    <span className="text-white">IPP & BPP</span>
                    <span className="text-gray-400">Operational peace of mind</span>
                  </div>
                  <div className="flex justify-between border-b border-white/10 pb-2">
                    <span className="text-white">Execution Teams</span>
                    <span className="text-gray-400">Clarity & alignment</span>
                  </div>
                  <div className="flex justify-between border-b border-white/10 pb-2">
                    <span className="text-white">Leadership</span>
                    <span className="text-gray-400">Visibility & control</span>
                  </div>
                </div>
              </div>
            </div>

            <div className="flex flex-col justify-center">
              <div className="p-8 rounded-3xl bg-[#FF6A00]/10 border border-[#FF6A00]/20 text-center relative overflow-hidden">
                <div className="absolute top-0 right-0 w-32 h-32 bg-[#FF6A00]/20 blur-[60px]" />
                <Users className="w-16 h-16 text-[#FF6A00] mx-auto mb-6" />
                <h3 className="text-2xl font-bold text-white mb-4">System Memory, Not Just People</h3>
                <p className="text-gray-300 mb-6">
                  Zryoss ensures account continuity even if teams change. Historical context is preserved, and long-term relationships are supported.
                </p>
                <p className="text-lg font-semibold text-white">
                  "The system remembers—not just people."
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 8. FINAL THOUGHT / GLUE */}
      <section className="py-24 px-6 text-center max-w-4xl mx-auto">
        <div className="mb-12">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">Account Management is the <span className="text-[#FF6A00]">Glue</span></h2>
          <p className="text-xl text-gray-400 mb-8">
            Without it, systems break, execution fragments, and scale becomes risky. <br />
            Zryoss treats account management as a core operating function, not a support desk.
          </p>
        </div>

        <div className="p-10 rounded-3xl bg-gradient-to-br from-[#1E1E1E] to-[#121212] border border-white/10 shadow-2xl">
          <p className="text-2xl md:text-3xl font-serif italic text-gray-200 mb-6">
            "Execution does not fail due to lack of effort.<br />
            It fails due to lack of ownership."
          </p>
          <div className="w-16 h-1 bg-[#FF6A00] mx-auto mb-6" />
          <p className="text-lg text-gray-400">
            You build relationships. <strong className="text-white">Zryoss manages execution and support.</strong>
          </p>
        </div>
      </section>

    </div>
  );
}
