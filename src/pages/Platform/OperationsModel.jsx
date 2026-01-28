import React from "react";
import { Link } from "react-router-dom";
import {
  Settings,
  Shield,
  Users,
  CheckCircle,
  Layers,
  BarChart3,
  RefreshCcw,
  Zap,
  ArrowRight,
  Briefcase,
  Cpu,
  TrendingUp,
  MessageSquare,
  AlertCircle
} from "lucide-react";
import FadeUp from "../../components/animations/FadeUp";

export default function OperationsModel() {
  return (
    <div className="bg-[#050505] min-h-screen text-white overflow-hidden selection:bg-orange-500/30">

      {/* 1. Hero Section */}
      <section className="relative pt-32 pb-20 px-6 sm:px-8">
        <div className="absolute top-0 right-1/2 translate-x-1/2 w-[800px] h-[500px] bg-gradient-to-b from-orange-900/20 via-red-900/10 to-transparent blur-[120px] rounded-full pointer-events-none" />

        <div className="max-w-7xl mx-auto text-center relative z-10">
          <FadeUp>
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-orange-500/10 border border-orange-500/20 text-orange-400 text-xs font-bold uppercase tracking-widest mb-8 cursor-default">
              <Settings className="w-3.5 h-3.5" /> Operations Engine
            </div>
            <h1 className="text-5xl md:text-7xl font-bold tracking-tight mb-8">
              Centralized <br />
              <span className="bg-gradient-to-r from-orange-400 via-orange-600 to-red-600 bg-clip-text text-transparent">
                Operations Model
              </span>
            </h1>
          </FadeUp>

          <FadeUp delay={0.1}>
            <h2 className="text-2xl md:text-3xl font-medium text-white mb-6">
              One Backend System That Runs Every Brand
            </h2>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto font-light leading-relaxed mb-10">
              Zryoss operates through a Centralized Operations Model that manages execution, delivery, and ongoing support for all partner-owned brands.
              <br /><br />
              <span className="text-gray-300">Partners focus on growth and relationships. Zryoss manages operations end to end.</span>
            </p>
          </FadeUp>
        </div>
      </section>

      {/* 2. Why Centralized Operations Matter */}
      <section className="py-24 px-6 relative bg-[#0a0a0a] border-y border-white/5">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <FadeUp>
              <h2 className="text-3xl md:text-5xl font-bold mb-6">
                Why Centralized <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-gray-200 to-gray-500">
                  Operations Matter
                </span>
              </h2>
              <p className="text-gray-400 text-lg leading-relaxed mb-6">
                Most businesses struggle after the first few clients—not because of demand, but because of execution pressure.
              </p>
              <div className="flex items-center gap-3 text-orange-400 font-medium bg-orange-500/10 p-4 rounded-xl border border-orange-500/20 max-w-fit">
                <Shield className="w-5 h-5" />
                Zryoss eliminates these risks by centralizing operations under one controlled system.
              </div>
            </FadeUp>

            <FadeUp delay={0.2}>
              <div className="space-y-4">
                {[
                  "Fragmented teams and vendors",
                  "Inconsistent service delivery",
                  "Poor coordination and timelines",
                  "Founder-dependent operations",
                  "Quality drop during scale"
                ].map((risk, i) => (
                  <div key={i} className="bg-[#111] p-4 rounded-xl border border-white/5 flex items-center gap-4 hover:border-red-500/30 transition group">
                    <div className="w-8 h-8 rounded-full bg-red-500/10 flex items-center justify-center text-red-500 shrink-0 group-hover:bg-red-500/20 transition">
                      <AlertCircle className="w-5 h-5" />
                    </div>
                    <span className="text-gray-300 font-medium">{risk}</span>
                  </div>
                ))}
              </div>
            </FadeUp>
          </div>
        </div>
      </section>

      {/* 3. What the Model Includes */}
      <section className="py-24 px-6 relative bg-[#050505]">
        <div className="max-w-7xl mx-auto relative z-10">
          <div className="text-center mb-16">
            <FadeUp>
              <h2 className="text-3xl md:text-5xl font-bold mb-6">What the Operations Model Includes</h2>
              <p className="text-gray-400 text-lg max-w-2xl mx-auto">
                The Zryoss operations model covers the entire delivery lifecycle. All activities are managed through standard operating processes, not ad-hoc decisions.
              </p>
            </FadeUp>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {[
              { title: "Client Onboarding", icon: Users, desc: "Documentation and account setup." },
              { title: "Task Planning", icon: Layers, desc: "Execution allocation and roadmap." },
              { title: "Service Delivery", icon: Zap, desc: "Execution across ecosystem brands." },
              { title: "Quality Checks", icon: CheckCircle, desc: "Approvals and strict standards." },
              { title: "Ongoing Support", icon: RefreshCcw, desc: "Client coordination and care." },
              { title: "Coordination", icon: MessageSquare, desc: "Seamless communication loops." }
            ].map((item, i) => (
              <FadeUp key={i} delay={i * 0.1}>
                <div className="h-full p-8 rounded-3xl bg-[#0b0b0b] border border-white/5 hover:border-orange-500/30 hover:bg-white/5 transition duration-300 group">
                  <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-gray-800 to-black flex items-center justify-center mb-6 group-hover:scale-110 transition border border-white/10 group-hover:border-orange-500/30">
                    <item.icon className="w-6 h-6 text-gray-400 group-hover:text-orange-400 transition" />
                  </div>
                  <h3 className="text-xl font-bold mb-3 text-white">{item.title}</h3>
                  <p className="text-gray-400 leading-relaxed text-sm">{item.desc}</p>
                </div>
              </FadeUp>
            ))}
          </div>
        </div>
      </section>

      {/* 4. How Execution Happens */}
      <section className="py-24 bg-[#080808] border-y border-white/5 px-6">
        <div className="max-w-5xl mx-auto">
          <FadeUp>
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-5xl font-bold mb-6">How Execution Happens</h2>
              <p className="text-gray-400 text-lg">Every step is tracked and controlled inside the platform.</p>
            </div>
          </FadeUp>

          <div className="relative">
            {/* Connector Line */}
            <div className="absolute left-4 top-4 bottom-4 w-0.5 bg-gradient-to-b from-orange-500 via-gray-800 to-gray-800 md:left-1/2 md:-translate-x-1/2" />

            {[
              "Client requirements validated centrally",
              "Scope and timelines finalized",
              "Tasks allocated to execution brand/partner",
              "Delivery monitored vs defined standards",
              "Quality checks performed",
              "Output delivered to client",
              "Ongoing support maintained"
            ].map((step, i) => (
              <FadeUp key={i} delay={i * 0.1}>
                <div className={`relative flex items-center mb-12 last:mb-0 ${i % 2 === 0 ? "md:flex-row-reverse" : ""}`}>
                  <div className="hidden md:block w-1/2" />
                  <div className="absolute left-4 md:left-1/2 -translate-x-1/2 w-4 h-4 rounded-full bg-[#050505] border-2 border-orange-500 z-10 box-content" />
                  <div className="pl-12 md:pl-0 md:w-1/2 md:px-12">
                    <div className="bg-[#111] p-6 rounded-2xl border border-white/5 hover:border-orange-500/20 transition hover:bg-[#151515]">
                      <span className="text-orange-500 font-mono text-xs mb-2 block tracking-wider">STEP {i + 1}</span>
                      <h3 className="text-lg font-medium text-white">{step}</h3>
                    </div>
                  </div>
                </div>
              </FadeUp>
            ))}
          </div>
        </div>
      </section>

      {/* 5. Role of Zryoss Core Execution Brands */}
      <section className="py-24 px-6 bg-[#050505]">
        <div className="max-w-7xl mx-auto">
          <FadeUp>
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-5xl font-bold mb-6">Role of Zryoss Core Execution Brands</h2>
              <p className="text-gray-400 text-lg max-w-3xl mx-auto">
                Execution is handled through specialized Zryoss ecosystem brands, each responsible for a defined domain. This specialization ensures depth, speed, and quality.
              </p>
            </div>
          </FadeUp>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { title: "Technology Execution", icon: Cpu, color: "blue" },
              { title: "HR & Talent Ops", icon: Users, color: "rose" },
              { title: "Business Growth", icon: TrendingUp, color: "emerald" },
              { title: "Industry Services", icon: Briefcase, color: "amber" }
            ].map((brand, i) => (
              <FadeUp key={i} delay={i * 0.1}>
                <div className="bg-[#0a0a0a] p-8 rounded-2xl border border-white/5 hover:border-white/10 text-center group h-full transition hover:-translate-y-1">
                  <div className={`w-14 h-14 mx-auto rounded-full bg-${brand.color}-500/10 flex items-center justify-center mb-6 text-${brand.color}-500 group-hover:scale-110 transition`}>
                    <brand.icon className="w-7 h-7" />
                  </div>
                  <h3 className="text-xl font-bold text-white mb-2">{brand.title}</h3>
                </div>
              </FadeUp>
            ))}
          </div>
        </div>
      </section>

      {/* 6. Partner Experience */}
      <section className="py-24 px-6 bg-[#080808] border-y border-white/5">
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-16 items-center">
          <div className="order-2 md:order-1">
            <div className="p-8 rounded-3xl bg-gradient-to-br from-[#111] to-black border border-white/10 shadow-2xl">
              <h3 className="text-2xl font-bold mb-8 text-white">Partner Benefits</h3>
              <ul className="space-y-5">
                {[
                  "No need to hire delivery teams",
                  "No need to manage vendors",
                  "No need to handle daily execution",
                  "No need to worry about quality control"
                ].map((item, i) => (
                  <li key={i} className="flex items-center gap-4 text-gray-300 group">
                    <div className="w-6 h-6 rounded-full bg-green-500/20 flex items-center justify-center shrink-0">
                      <CheckCircle className="w-3.5 h-3.5 text-green-500" />
                    </div>
                    <span className="group-hover:text-white transition">{item}</span>
                  </li>
                ))}
              </ul>
              <div className="mt-8 pt-8 border-t border-white/5 text-center">
                <p className="text-gray-400 italic">"Zryoss functions as the partner’s extended operations department."</p>
              </div>
            </div>
          </div>

          <FadeUp className="order-1 md:order-2">
            <h2 className="text-3xl md:text-5xl font-bold mb-6">
              Partner Experience with <br /> Centralized Operations
            </h2>
            <p className="text-gray-400 text-lg mb-8 leading-relaxed">
              From a partner’s perspective, centralized operations mean freedom from operational burdens, allowing them to focus entirely on client relationships and business expansion.
            </p>
          </FadeUp>
        </div>
      </section>

      {/* 7, 8, 9. Quality, Account Mgmt, Scaling */}
      <section className="py-24 px-6 bg-[#050505]">
        <div className="max-w-7xl mx-auto space-y-24">

          {/* Quality */}
          <FadeUp>
            <div className="grid md:grid-cols-2 gap-12 items-start">
              <div>
                <h2 className="text-3xl font-bold mb-4 text-white">Quality Control & Accountability</h2>
                <p className="text-gray-400 mb-6">Quality is not dependent on individuals—it is enforced by the system.</p>
                <ul className="space-y-3">
                  {["Defined service benchmarks", "Multi-level quality reviews", "Performance tracking", "Issue escalation mechanisms"].map((item, i) => (
                    <li key={i} className="flex items-center gap-3 text-gray-300 text-sm">
                      <div className="w-1.5 h-1.5 bg-orange-500 rounded-full" /> {item}
                    </li>
                  ))}
                </ul>
              </div>
              {/* Account Management */}
              <div>
                <h2 className="text-3xl font-bold mb-4 text-white">Account Management Integration</h2>
                <p className="text-gray-400 mb-6">Centralized operations work closely with account management to prevent execution gaps.</p>
                <ul className="space-y-3">
                  {["Clear communication with clients", "Timely updates and reporting", "Issue resolution", "Long-term relationship stability"].map((item, i) => (
                    <li key={i} className="flex items-center gap-3 text-gray-300 text-sm">
                      <div className="w-1.5 h-1.5 bg-blue-500 rounded-full" /> {item}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </FadeUp>

          {/* Scaling */}
          <FadeUp delay={0.2}>
            <div className="bg-[#111] rounded-3xl p-10 border border-white/5 text-center relative overflow-hidden">
              <div className="absolute top-0 right-0 w-64 h-64 bg-orange-500/5 blur-[80px] rounded-full pointer-events-none" />
              <h2 className="text-3xl font-bold mb-6 relative z-10">Scaling Without Operational Breakdown</h2>
              <p className="text-gray-400 max-w-3xl mx-auto mb-8 relative z-10">
                As partners scale, the system ensures smooth handling of higher volumes, consistent quality, and controlled expansion.
                <br /><span className="text-white font-medium">Growth strengthens the system instead of breaking it.</span>
              </p>

              <div className="flex flex-wrap justify-center gap-4 relative z-10">
                {["Smooth Volume Handling", "Consistent Quality", "Controlled Expansion", "No Chaos"].map((tag, i) => (
                  <span key={i} className="px-4 py-2 bg-white/5 rounded-full text-sm text-gray-300 border border-white/10">{tag}</span>
                ))}
              </div>
            </div>
          </FadeUp>

        </div>
      </section>

      {/* 10. Why This Model Works */}
      <section className="py-24 px-6 bg-[#080808] border-t border-white/5">
        <div className="max-w-4xl mx-auto text-center">
          <FadeUp>
            <h2 className="text-3xl md:text-5xl font-bold mb-10">Why This Model Works</h2>
            <div className="grid sm:grid-cols-2 gap-4 text-start">
              {[
                "Removes execution burden from partners",
                "Ensures consistent delivery quality",
                "Reduces operational risk",
                "Enables faster and safer scale",
                "Builds long-term stability"
              ].map((reason, i) => (
                <div key={i} className="flex items-center gap-4 p-4 bg-[#111] rounded-xl border border-white/5">
                  <CheckCircle className="w-5 h-5 text-orange-500 shrink-0" />
                  <span className="text-gray-200">{reason}</span>
                </div>
              ))}
            </div>
            <div className="mt-10 inline-block bg-orange-500/10 px-6 py-3 rounded-full border border-orange-500/20 text-orange-400 font-medium">
              Centralization creates control, clarity, and confidence.
            </div>
          </FadeUp>
        </div>
      </section>

      {/* 11. Final CTA */}
      <section className="py-24 px-6 text-center bg-black">
        <div className="max-w-4xl mx-auto">
          <FadeUp>
            <h2 className="text-4xl md:text-6xl font-bold mb-8 tracking-tight">
              One Operations Engine. <br />
              <span className="text-white">Many Independent Brands.</span>
            </h2>
            <p className="text-xl text-gray-400 mb-6 max-w-2xl mx-auto">
              Zryoss does not create dependency. It creates operational reliability.
              <br />Partners own their brands. Zryoss runs the engine.
            </p>
            <p className="text-white font-medium mb-10 uppercase tracking-widest text-sm">Ready to see how execution is managed at scale?</p>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
              <Link to="/platform/how-zryoss-works" className="px-10 py-5 bg-orange-600 text-white font-bold rounded-full hover:bg-orange-500 transition shadow-[0_0_20px_rgba(234,88,12,0.3)]">
                See How Zryoss Works (End-to-End)
              </Link>
              <Link to="/ecosystem" className="px-10 py-5 border border-white/20 rounded-full font-medium hover:bg-white/5 transition flex items-center gap-2">
                Explore the Ecosystem <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </FadeUp>
        </div>
      </section>

    </div>
  );
}
