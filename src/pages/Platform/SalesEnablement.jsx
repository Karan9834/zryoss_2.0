import React, { useEffect } from "react";
import {
  Settings,
  Target,
  Users,
  Briefcase,
  CheckCircle2,
  GitBranch,
  ShieldCheck,
  TrendingUp,
  MessageSquare,
  ArrowRight,
  Layers,
  FileCheck,
  Globe,
  Database,
  BarChart3
} from "lucide-react";
import { Link } from "react-router-dom";

const SalesEnablement = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen bg-[#050505] text-white font-sans selection:bg-orange-500/30">

      {/* Hero Section */}
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center pt-32 pb-24 overflow-hidden border-b border-white/5">
        {/* Background */}
        <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
          <div className="absolute top-[-10%] right-[-5%] w-[600px] h-[600px] bg-orange-600/10 rounded-full blur-[120px]" />
          <div className="absolute bottom-[10%] left-[-10%] w-[400px] h-[400px] bg-white/5 rounded-full blur-[100px]" />
        </div>

        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">

            {/* Left Content */}
            <div className="text-left">
              <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-orange-500/30 bg-orange-500/10 backdrop-blur-sm mb-5">
                <Settings size={14} className="text-orange-500" />
                <p className="text-orange-500 text-xs uppercase tracking-[0.45em] font-bold">
                  Centralized Sales & Demo Engine
                </p>
              </div>

              <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold leading-[1.15] tracking-tight mb-5 text-white">
                A Centralized Sales and Demo <br />
                <span className="block text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-orange-600 mt-1">
                  Engine That Partners Can Rely On
                </span>
              </h1>

              <p className="text-xl text-gray-400 leading-relaxed font-light mb-6">
                Zryoss provides a centralized Sales Enablement & Demo System designed to help partners convert opportunities into clients without handling technical complexity.
              </p>

              <div className="p-4 bg-white/5 border border-white/10 rounded-xl backdrop-blur-sm mb-8 max-w-lg">
                <p className="text-gray-300 italic text-sm">"Partners focus on relationships and opportunities. <br /> <strong className="text-orange-500">Zryoss manages operations end to end.</strong>"</p>
              </div>
            </div>

            {/* Right Image */}
            <div className="relative">
              <div className="absolute inset-0 rounded-3xl bg-orange-500/10 blur-2xl -z-10" />

              <div className="rounded-3xl border border-white/10 bg-white/5 p-2">
                <img
                  src="/Sales trablement & Deme System.jpg"
                  alt="Sales Enablement Dashboard"
                  className="w-full h-[260px] md:h-[420px] object-cover rounded-2xl transform hover:scale-105 transition-transform duration-700"
                />
              </div>

              {/* Decorative background - kept as per original but could be removed if strict adherence to ZryossIntroSection is desired. Kept for slight variation but matching core dimensions */}
              {/* <div className="absolute -z-10 top-10 -right-10 w-full h-full border border-white/5 rounded-2xl" /> */}
            </div>

          </div>
        </div>
      </section>

      {/* Centralized Operations Model */}
      <section className="py-24 bg-[#0a0a0a]">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex flex-col lg:flex-row items-center gap-16">
            <div className="lg:w-1/2">
              <h2 className="text-4xl font-bold mb-6">Centralized Operations Model</h2>
              <h3 className="text-2xl text-orange-500 mb-6">One Backend System That Runs Every Brand</h3>
              <p className="text-gray-400 text-lg leading-relaxed mb-6">
                Zryoss operates through a Centralized Operations Model that manages execution, delivery, and ongoing support for all partner-owned brands.
              </p>
              <p className="text-gray-400 text-lg leading-relaxed mb-8">
                Instead of every partner building teams, processes, and delivery systems independently, Zryoss provides one centralized operational engine that powers all brands consistently.
              </p>

              <div className="flex items-center gap-4 text-sm font-semibold text-white">
                <CheckCircle2 className="text-orange-500" /> Partners focus on growth.
                <CheckCircle2 className="text-orange-500" /> Zryoss manages operations.
              </div>
            </div>
            <div className="lg:w-1/2">
              <div className="relative rounded-2xl overflow-hidden border border-white/10 shadow-2xl bg-[#111] p-8">
                <div className="grid grid-cols-2 gap-4">
                  <div className="p-5 bg-black/40 rounded-xl border border-white/5">
                    <Target className="text-orange-500 mb-3" size={32} />
                    <h4 className="font-bold mb-1">Execution Focused</h4>
                    <p className="text-xs text-gray-500">Production-ready systems</p>
                  </div>
                  <div className="p-5 bg-black/40 rounded-xl border border-white/5">
                    <ShieldCheck className="text-white mb-3" size={32} />
                    <h4 className="font-bold mb-1">Delivery Control</h4>
                    <p className="text-xs text-gray-500">End-to-end management</p>
                  </div>
                  <div className="p-5 bg-black/40 rounded-xl border border-white/5">
                    <Users className="text-orange-500 mb-3" size={32} />
                    <h4 className="font-bold mb-1">Accountability</h4>
                    <p className="text-xs text-gray-500">System-driven trust</p>
                  </div>
                  <div className="p-5 bg-black/40 rounded-xl border border-white/5">
                    <Briefcase className="text-white mb-3" size={32} />
                    <h4 className="font-bold mb-1">Reliability</h4>
                    <p className="text-xs text-gray-500">Enterprise grade</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why It Matters */}
      <section className="py-24 bg-[#050505]">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-16">
            <div>
              <h2 className="text-3xl font-bold mb-8">Why Centralized Operations Matter</h2>
              <p className="text-gray-400 mb-8">Most businesses struggle after the first few clients—not because of demand, but because of execution pressure.</p>

              <div className="space-y-4">
                {[
                  "Fragmented teams and vendors",
                  "Inconsistent service delivery",
                  "Poor coordination and timelines",
                  "Founder-dependent operations",
                  "Quality drop during scale"
                ].map((issue, i) => (
                  <div key={i} className="flex items-center gap-3 text-gray-400">
                    <div className="w-8 h-8 rounded-full bg-red-500/10 flex items-center justify-center text-red-500 text-xs shrink-0">✕</div>
                    {issue}
                  </div>
                ))}
              </div>
            </div>

            <div className="bg-[#0a0a0a] border border-white/10 rounded-3xl p-10 flex flex-col justify-center">
              <h3 className="text-2xl font-bold text-white mb-4">The Zryoss Solution</h3>
              <p className="text-lg text-orange-500 font-medium mb-8">Zryoss eliminates these risks by centralizing operations under one controlled system.</p>
              <div className="h-px w-full bg-white/10 mb-8"></div>
              <div className="flex items-center gap-4">
                <CheckCircle2 className="text-green-500 w-8 h-8" />
                <span className="text-gray-300">Consistent, Scalable, Reliable Execution.</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* What it Includes */}
      <section className="py-24 bg-[#0a0a0a]">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-3xl font-bold text-center mb-16">What the Centralized Operations Model Includes</h2>
          <div className="grid md:grid-cols-3 gap-6">
            {[
              { icon: FileCheck, title: "Client Onboarding", desc: "Documentation & Setup" },
              { icon: Layers, title: "Planning & Allocation", desc: "Task execution management" },
              { icon: Globe, title: "Service Delivery", desc: "Across ecosystem brands" },
              { icon: CheckCircle2, title: "Quality Checks", desc: "Approvals & Standards" },
              { icon: MessageSquare, title: "Ongoing Support", desc: "Client coordination" },
              { icon: Settings, title: "Standard Processes", desc: "No ad-hoc decisions" }
            ].map((item, i) => (
              <div key={i} className="p-6 bg-[#111] border border-white/5 rounded-2xl hover:border-orange-500/30 transition-colors group">
                <item.icon className="text-orange-500 mb-4 group-hover:scale-110 transition-transform" size={32} />
                <h3 className="text-xl font-bold text-white mb-2">{item.title}</h3>
                <p className="text-gray-400 text-sm">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How Execution Happens */}
      <section className="py-24 bg-[#050505]">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-3xl font-bold text-center mb-16">How Execution Happens Inside the Platform</h2>
          <div className="relative">
            {/* Connection Line */}
            <div className="hidden md:block absolute top-[20px] left-0 w-full h-[2px] bg-gradient-to-r from-transparent via-orange-500/30 to-transparent"></div>

            <div className="grid grid-cols-1 md:grid-cols-7 gap-4">
              {[
                "Requirements Validated",
                "Scope Finalized",
                "Task Allocated",
                "Monitored Execution",
                "Quality Checks",
                "Client Delivery",
                "Ongoing Support"
              ].map((step, i) => (
                <div key={i} className="relative pt-8 text-center group">
                  <div className="w-4 h-4 rounded-full bg-[#111] border-2 border-orange-500 mx-auto mb-4 relative z-10 group-hover:scale-125 transition-transform"></div>
                  <h4 className="font-bold text-white text-sm">{step}</h4>
                </div>
              ))}
            </div>
            <p className="text-center text-gray-500 mt-12">Every step is tracked and controlled.</p>
          </div>
        </div>
      </section>

      {/* Role of Execution Brands & Partner Experience */}
      <section className="py-24 bg-[#0a0a0a]">
        <div className="max-w-7xl mx-auto px-6 space-y-24">

          {/* Execution Brands */}
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-3xl font-bold mb-6">Role of Zryoss Core Execution Brands</h2>
              <p className="text-gray-400 mb-8">Execution is handled through specialized Zryoss ecosystem brands, each responsible for a defined domain.</p>
              <div className="grid grid-cols-1 gap-4">
                <div className="flex items-center gap-4 p-4 bg-white/5 rounded-xl border border-white/5">
                  <Database className="text-blue-500" /> Technology and software execution
                </div>
                <div className="flex items-center gap-4 p-4 bg-white/5 rounded-xl border border-white/5">
                  <Users className="text-green-500" /> HR and talent operations
                </div>
                <div className="flex items-center gap-4 p-4 bg-white/5 rounded-xl border border-white/5">
                  <Briefcase className="text-purple-500" /> Business and growth execution
                </div>
                <div className="flex items-center gap-4 p-4 bg-white/5 rounded-xl border border-white/5">
                  <Layers className="text-orange-500" /> Industry-specific service delivery
                </div>
              </div>
            </div>
            <div className="bg-gradient-to-br from-orange-900/10 to-transparent p-10 rounded-3xl border border-orange-500/10 text-center">
              <h3 className="text-2xl font-bold text-white mb-2">Specialization Ensured</h3>
              <p className="text-orange-400 text-lg">Depth. Speed. Quality.</p>
            </div>
          </div>

          {/* Partner Experience */}
          <div className="bg-[#111] rounded-3xl p-12 border border-white/5">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold mb-4">Partner Experience with Centralized Operations</h2>
              <p className="text-gray-400">Zryoss functions as the partner’s extended operations department.</p>
            </div>
            <div className="grid md:grid-cols-4 gap-8">
              {[
                "No hiring delivery teams",
                "No managing vendors",
                "No daily execution handling",
                "No quality control worries"
              ].map((item, i) => (
                <div key={i} className="text-center">
                  <div className="w-16 h-16 rounded-full bg-orange-500/10 flex items-center justify-center text-orange-500 mx-auto mb-6">
                    <CheckCircle2 size={32} />
                  </div>
                  <p className="text-white font-medium">{item}</p>
                </div>
              ))}
            </div>
          </div>

        </div>
      </section>

      {/* Quality & Account Management */}
      <section className="py-24 bg-[#050505] border-t border-white/5">
        <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-16">

          {/* Quality */}
          <div>
            <h2 className="text-3xl font-bold mb-8">Quality Control and Accountability</h2>
            <p className="text-gray-400 mb-8">Quality is not dependent on individuals—it is enforced by the system.</p>
            <ul className="space-y-4">
              {[
                "Defined service benchmarks",
                "Multi-level quality reviews",
                "Performance tracking",
                "Issue escalation mechanisms"
              ].map((item, i) => (
                <li key={i} className="flex gap-3 text-gray-300">
                  <span className="w-1.5 h-1.5 bg-orange-500 rounded-full mt-2.5"></span>
                  {item}
                </li>
              ))}
            </ul>
          </div>

          {/* Account Mgmt */}
          <div>
            <h2 className="text-3xl font-bold mb-8">Account Management Integration</h2>
            <p className="text-gray-400 mb-8">Centralized operations work closely with account management to prevent execution gaps.</p>
            <ul className="space-y-4">
              {[
                "Clear communication with clients",
                "Timely updates and reporting",
                "Issue resolution and escalation",
                "Long-term relationship stability"
              ].map((item, i) => (
                <li key={i} className="flex gap-3 text-gray-300">
                  <span className="w-1.5 h-1.5 bg-white rounded-full mt-2.5"></span>
                  {item}
                </li>
              ))}
            </ul>
          </div>

        </div>
      </section>

      {/* Scaling & Conclusion */}
      <section className="py-24 bg-[#0a0a0a]">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <h2 className="text-3xl font-bold mb-12">Scaling Without Operational Breakdown</h2>
          <div className="grid md:grid-cols-4 gap-6 mb-20">
            {[
              "Smooth handling of higher volumes",
              "Consistent service quality",
              "Controlled expansion across verticals",
              "No increase in operational chaos"
            ].map((item, i) => (
              <div key={i} className="p-6 bg-[#050505] rounded-xl border border-white/5">
                <TrendingUp className="text-orange-500 mx-auto mb-4" />
                <p className="text-sm font-medium text-gray-300">{item}</p>
              </div>
            ))}
          </div>

          <div className="max-w-4xl mx-auto bg-gradient-to-r from-orange-900/20 to-black p-10 rounded-3xl border border-orange-500/20">
            <h2 className="text-3xl font-bold mb-6">Why This Model Works</h2>
            <div className="flex flex-wrap justify-center gap-4 mb-8">
              {["Removes execution burden", "Reduces risk", "Enables faster scale", "Builds stability"].map((tag, i) => (
                <span key={i} className="px-4 py-2 bg-black/50 rounded-full text-sm text-orange-400 border border-orange-500/20">{tag}</span>
              ))}
            </div>
            <h3 className="text-2xl font-bold text-white mb-2">Centralization creates control, clarity, and confidence.</h3>
          </div>
        </div>
      </section>

      {/* Final Statement */}
      <section className="py-24 bg-[#050505] text-center border-t border-white/5">
        <div className="max-w-3xl mx-auto px-6">
          <h2 className="text-4xl font-bold mb-6">One Operations Engine. Many Independent Brands.</h2>
          <div className="space-y-4 text-xl text-gray-400">
            <p>Zryoss does not create dependency. <br /> <span className="text-white">It creates operational reliability.</span></p>
            <div className="h-0.5 w-20 bg-orange-500 mx-auto my-6"></div>
            <p>Partners own their brands. <br /> <span className="text-white">Zryoss runs the engine that keeps them operating.</span></p>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 bg-gradient-to-b from-[#050505] to-[#111] relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1519389950473-47ba0277781c?q=80&w=2070&auto=format&fit=crop')] bg-cover bg-center opacity-5 mix-blend-overlay"></div>
        <div className="max-w-4xl mx-auto px-6 relative z-10 text-center">
          <h2 className="text-4xl font-bold mb-8">Ready to See How Execution Is Managed at Scale?</h2>
          <p className="text-xl text-gray-400 mb-10">Explore how delivery, quality, and support are controlled within the Zryoss platform.</p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
            <Link to="/platform/how-zryoss-works" className="px-8 py-4 bg-orange-500 text-white font-bold rounded-full hover:bg-orange-600 transition-colors flex items-center gap-2">
              See How Zryoss Works <ArrowRight size={20} />
            </Link>
            <Link to="/ecosystem/overview" className="px-8 py-4 bg-white/5 text-white font-bold rounded-full border border-white/10 hover:bg-white/10 transition-colors">
              Explore the Ecosystem
            </Link>
          </div>
        </div>
      </section>

    </div>
  );
};

export default SalesEnablement;