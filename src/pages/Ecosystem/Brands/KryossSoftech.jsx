import React, { useEffect } from "react";
import {
  Cpu,
  Code,
  Globe,
  Server,
  Workflow,
  ShieldCheck,
  Zap,
  Users,
  CheckCircle2,
  ArrowRight,
  Monitor,
  Database,
  Layers,
  Network
} from "lucide-react";
import { Link } from "react-router-dom";

const KryossSoftech = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen bg-[#050505] text-white selection:bg-orange-500/30 font-sans">

      {/* Hero Section */}
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 overflow-hidden">
        {/* Background Effects */}
        <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
          <div className="absolute top-[-10%] right-[-5%] w-[600px] h-[600px] bg-orange-600/10 rounded-full blur-[120px]" />
          <div className="absolute bottom-[10%] left-[-10%] w-[400px] h-[400px] bg-blue-600/5 rounded-full blur-[100px]" />
          <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1451187580459-43490279c0fa?q=80&w=2072&auto=format&fit=crop')] bg-cover bg-center opacity-10 mix-blend-overlay"></div>
        </div>

        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <div className="flex flex-col lg:flex-row items-center gap-16">
            <div className="lg:w-1/2">
              {/* Badge - typography changed */}
              <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-orange-500/30 bg-orange-500/10 backdrop-blur-sm mb-6">
                <Cpu size={14} className="text-orange-500" />
                <span className="text-xs uppercase tracking-[0.45em] text-orange-500 font-bold">
                  Technology & Digital Execution Brand
                </span>
              </div>

              {/* H1 - typography changed */}
              <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold leading-[1.15] tracking-tight mb-5 text-white">
                Kryoss <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-cyan-500">
                  Softech
                </span>
              </h1>

              {/* H2 - typography changed */}
              <h2 className="text-xl md:text-2xl font-semibold text-white/90 mb-6">
                Technology & Digital Execution Brand of the Zryoss Ecosystem
              </h2>

              {/* Paragraph - typography changed */}
              <p className="text-xl text-gray-400 leading-relaxed font-light mb-10">
                Kryoss Softech is the dedicated execution engine responsible for delivering all technology-driven services brought by IPPs and BPPs, ensuring specialized focus and quality control.
              </p>

              <div className="p-6 border border-white/10 bg-white/5 rounded-2xl backdrop-blur-sm inline-block w-full max-w-lg">
                <div className="flex items-center gap-4">
                  <div className="h-10 w-1 bg-orange-500 rounded-full"></div>
                  <p className="text-lg text-gray-200 italic">
                    "Where technology is required, <span className="text-white font-bold">Kryoss Softech executes</span>. <br />
                    Where structure is required, <span className="text-white font-bold">ZRYOSS governs</span>."
                  </p>
                </div>
              </div>
            </div>

            <div className="lg:w-1/2 relative">
              <div className="relative rounded-3xl overflow-hidden border border-white/10 shadow-2xl group">
                <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent z-10"></div>
                {/* Placeholder for AI generated image - or using a suitable unsplash fallback if local file not ready */}
                <img
                  src="/kryoss_hero_ai.png"
                  alt="AI Technology Execution"
                  className="w-full h-auto object-cover transform group-hover:scale-105 transition-transform duration-700 opacity-80"
                  onError={(e) => { e.target.src = 'https://images.unsplash.com/photo-1620712943543-bcc4688e7485?q=80&w=2565&auto=format&fit=crop' }} // Fallback
                />

                <div className="absolute bottom-8 left-8 right-8 z-20">
                  <div className="flex items-center justify-between">
                    <div className="flex gap-2">
                      <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse"></span>
                      <span className="text-xs font-mono text-green-500">SYSTEM ACTIVE</span>
                    </div>
                    <Cpu className="text-white/50" />
                  </div>
                </div>
              </div>

              {/* Floating Elements */}
              <div className="absolute -top-10 -right-10 w-32 h-32 bg-blue-500/20 rounded-full blur-3xl animate-pulse"></div>
              <div className="absolute -bottom-10 -left-10 w-32 h-32 bg-orange-500/20 rounded-full blur-3xl animate-pulse delay-1000"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Role Section */}
      <section className="py-24 bg-[#0a0a0a]">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex flex-col md:flex-row gap-16 items-center">
            <div className="md:w-1/2">
              <h2 className="text-3xl md:text-4xl font-bold mb-6">Role of Kryoss Softech <br /> in the Ecosystem</h2>
              <p className="text-lg text-gray-400 mb-8 leading-relaxed">
                Kryoss Softech functions as the dedicated execution engine for all technology and digital solutions within the ZRYOSS platform. Whenever an IPP or BPP operates in a technology vertical, their client work is routed here.
              </p>

              <div className="grid grid-cols-2 gap-4">
                {[
                  "Domain expertise",
                  "Centralized execution",
                  "Controlled quality",
                  "Predictable timelines"
                ].map((item, i) => (
                  <div key={i} className="flex items-center gap-3 p-3 bg-white/5 rounded-xl border border-white/5">
                    <CheckCircle2 className="text-blue-500 w-5 h-5 shrink-0" />
                    <span className="text-gray-200 text-sm font-medium">{item}</span>
                  </div>
                ))}
              </div>

              <p className="mt-8 text-sm text-gray-500 flex items-center gap-2">
                <ShieldCheck size={16} className="text-orange-500" />
                IPP or BPP never manages developers or vendors directly.
              </p>
            </div>
            <div className="md:w-1/2">
              <div className="grid grid-cols-2 gap-4">
                <div className="p-6 bg-[#0f0f0f] rounded-2xl border border-white/5 flex flex-col items-center text-center">
                  <Globe className="text-blue-500 mb-4 h-10 w-10" />
                  <h3 className="font-bold text-white mb-2">Websites</h3>
                  <p className="text-xs text-gray-400">Design & Dev</p>
                </div>
                <div className="p-6 bg-[#0f0f0f] rounded-2xl border border-white/5 flex flex-col items-center text-center">
                  <Code className="text-purple-500 mb-4 h-10 w-10" />
                  <h3 className="font-bold text-white mb-2">Software</h3>
                  <p className="text-xs text-gray-400">App Development</p>
                </div>
                <div className="p-6 bg-[#0f0f0f] rounded-2xl border border-white/5 flex flex-col items-center text-center">
                  <Zap className="text-yellow-500 mb-4 h-10 w-10" />
                  <h3 className="font-bold text-white mb-2">Automation</h3>
                  <p className="text-xs text-gray-400">System Integration</p>
                </div>
                <div className="p-6 bg-[#0f0f0f] rounded-2xl border border-white/5 flex flex-col items-center text-center">
                  <Server className="text-green-500 mb-4 h-10 w-10" />
                  <h3 className="font-bold text-white mb-2">Infrastructure</h3>
                  <p className="text-xs text-gray-400">Digital Support</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Execution Offerings */}
      <section className="py-24 bg-[#050505]">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold mb-4">What Kryoss Softech Executes</h2>
            <p className="text-gray-400">All execution follows ZRYOSS operating standards.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { title: "Website Design & Development", icon: <Globe />, desc: "High-performance websites and web platforms." },
              { title: "Software & App Development", icon: <Monitor />, desc: "Custom software solutions and mobile applications." },
              { title: "Platform & Portal Development", icon: <Layers />, desc: "Scalable enterprise portals and SaaS products." },
              { title: "Automation & System Integration", icon: <Workflow />, desc: "Streamlining operations through digital automation." },
              { title: "Tech Consulting & Implementation", icon: <Cpu />, desc: "Expert guidance on technology adoption." },
              { title: "Digital Infrastructure Support", icon: <Server />, desc: "Robust hosting, security, and maintenance." }
            ].map((item, i) => (
              <div key={i} className="group p-8 rounded-3xl bg-[#0a0a0a] border border-white/10 hover:border-blue-500/30 transition-all hover:bg-[#0e0e0e]">
                <div className="w-14 h-14 rounded-full bg-blue-500/10 flex items-center justify-center text-blue-500 mb-6 group-hover:scale-110 transition-transform">
                  {item.icon}
                </div>
                <h3 className="text-xl font-bold mb-3 text-white group-hover:text-blue-400 transition-colors">{item.title}</h3>
                <p className="text-gray-400 text-sm">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Routing Process */}
      <section className="py-24 bg-[#080808]">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-3xl font-bold text-center mb-16">How Work Reaches Kryoss Softech</h2>

          <div className="relative">
            {/* Line */}
            <div className="hidden md:block absolute top-[50%] left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-blue-500/50 to-transparent -translate-y-1/2 z-0"></div>

            <div className="grid grid-cols-1 md:grid-cols-6 gap-6 relative z-10">
              {[
                { step: "1", title: "Opportunity", desc: "IPP/BPP closes client deal" },
                { step: "2", title: "Validation", desc: "ZRYOSS checks scope" },
                { step: "3", title: "Assignment", desc: "Routed to Kryoss" },
                { step: "4", title: "Planning", desc: "Delivery plan created" },
                { step: "5", title: "Execution", desc: "Building & QC checks" },
                { step: "6", title: "Delivery", desc: "Handover to client" }
              ].map((item, i) => (
                <div key={i} className="flex flex-col items-center text-center">
                  <div className="w-16 h-16 rounded-2xl bg-[#111] border border-white/20 flex items-center justify-center text-xl font-bold text-white mb-6 shadow-lg relative overflow-hidden group">
                    <span className="relative z-10">{item.step}</span>
                    <div className="absolute inset-0 bg-blue-500/20 opacity-0 group-hover:opacity-100 transition-opacity"></div>
                  </div>
                  <h3 className="text-sm font-bold text-white mb-1">{item.title}</h3>
                  <p className="text-xs text-gray-500">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="mt-12 text-center p-4 bg-blue-900/10 border border-blue-500/20 rounded-xl inline-block w-full max-w-2xl mx-auto">
            <p className="text-blue-300 font-medium">This flow eliminates confusion and execution risk.</p>
          </div>
        </div>
      </section>

      {/* Vendor & QC */}
      <section className="py-24 bg-[#050505]">
        <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-16">

          {/* Vendor Management */}
          <div>
            <h3 className="text-2xl font-bold mb-6 flex items-center gap-3">
              <Users className="text-orange-500" />
              Vendor & Team Management
            </h3>
            <div className="bg-[#0a0a0a] p-8 rounded-3xl border border-white/10 mb-8">
              <ul className="space-y-4 mb-6">
                <li className="flex items-center gap-3 text-gray-300">
                  <span className="w-2 h-2 bg-blue-500 rounded-full"></span> Internal execution teams
                </li>
                <li className="flex items-center gap-3 text-gray-300">
                  <span className="w-2 h-2 bg-blue-500 rounded-full"></span> Approved technology vendors
                </li>
                <li className="flex items-center gap-3 text-gray-300">
                  <span className="w-2 h-2 bg-blue-500 rounded-full"></span> External specialists (when required)
                </li>
              </ul>
              <p className="text-sm text-gray-500 border-t border-white/5 pt-4">
                All vendors work under Kryoss Softech’s supervision, not directly with IPPs or BPPs. Ensuring no vendor chaos.
              </p>
            </div>
          </div>

          {/* QC */}
          <div>
            <h3 className="text-2xl font-bold mb-6 flex items-center gap-3">
              <ShieldCheck className="text-orange-500" />
              Quality Control & Accountability
            </h3>
            <div className="bg-[#0a0a0a] p-8 rounded-3xl border border-white/10">
              <div className="grid grid-cols-2 gap-4">
                <div className="p-4 bg-[#111] rounded-xl border border-white/5 text-center">
                  <h4 className="font-bold text-white mb-1">Standards</h4>
                  <p className="text-xs text-gray-400">Defined Delivery</p>
                </div>
                <div className="p-4 bg-[#111] rounded-xl border border-white/5 text-center">
                  <h4 className="font-bold text-white mb-1">Timelines</h4>
                  <p className="text-xs text-gray-400">Strict Schedule</p>
                </div>
                <div className="p-4 bg-[#111] rounded-xl border border-white/5 text-center">
                  <h4 className="font-bold text-white mb-1">Checkpoints</h4>
                  <p className="text-xs text-gray-400">Quality Review</p>
                </div>
                <div className="p-4 bg-[#111] rounded-xl border border-white/5 text-center">
                  <h4 className="font-bold text-white mb-1">Tracking</h4>
                  <p className="text-xs text-gray-400">Performance</p>
                </div>
              </div>
              <p className="mt-6 text-sm text-gray-500 text-center">
                Every project is monitored through the ZRYOSS Operating System.
              </p>
            </div>
          </div>

        </div>
      </section>

      {/* Relationships & Scalability tabs like section */}
      <section className="py-24 bg-[#0a0a0a]">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-12">
            {/* Relationship */}
            <div className="border-l-4 border-orange-500 pl-8">
              <h3 className="text-2xl font-bold mb-6 text-white">Relationship with IPP & BPP</h3>
              <div className="space-y-6">
                <div>
                  <h4 className="text-orange-500 font-bold text-sm uppercase tracking-wide mb-1">Partners (IPP/BPP)</h4>
                  <p className="text-gray-400">Focus on clients and growth.</p>
                </div>
                <div>
                  <h4 className="text-blue-500 font-bold text-sm uppercase tracking-wide mb-1">Kryoss Softech</h4>
                  <p className="text-gray-400">Focuses on technical delivery.</p>
                </div>
                <div>
                  <h4 className="text-white font-bold text-sm uppercase tracking-wide mb-1">ZRYOSS</h4>
                  <p className="text-gray-400">Manages coordination and governance.</p>
                </div>
              </div>
              <p className="mt-8 italic text-gray-500">"Partners are never exposed to technical complexity."</p>
            </div>

            {/* Scalability */}
            <div className="border-l-4 border-blue-500 pl-8">
              <h3 className="text-2xl font-bold mb-6 text-white">Scalability & Long-Term Execution</h3>
              <p className="text-gray-400 mb-6">Kryoss Softech is designed to:</p>
              <ul className="space-y-3 mb-6 block">
                {["Handle multiple brands simultaneously", "Execute across different scales", "Support long-term client relationships", "Grow with ecosystem demand"].map((item, i) => (
                  <li key={i} className="flex gap-2 text-gray-300"><span className="text-blue-500">•</span> {item}</li>
                ))}
              </ul>
              <p className="italic text-gray-500">"As IPPs and BPPs scale, Kryoss Softech scales with them."</p>
            </div>
          </div>
        </div>
      </section>

      {/* Why Separate Brand */}
      <section className="py-24 bg-[#050505] relative overflow-hidden">
        <div className="max-w-4xl mx-auto px-6 text-center relative z-10">
          <h2 className="text-3xl font-bold mb-8">Why Exists as a Separate Brand?</h2>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-12">
            <div className="p-4 bg-white/5 rounded-xl"><h4 className="font-bold text-white">Specialized Talent</h4></div>
            <div className="p-4 bg-white/5 rounded-xl"><h4 className="font-bold text-white">Process Discipline</h4></div>
            <div className="p-4 bg-white/5 rounded-xl"><h4 className="font-bold text-white">Continuous Upskilling</h4></div>
            <div className="p-4 bg-white/5 rounded-xl"><h4 className="font-bold text-white">Delivery Governance</h4></div>
          </div>

          <div className="p-8 rounded-3xl bg-gradient-to-r from-gray-900 to-black border border-white/10 shadow-2xl">
            <h3 className="text-2xl font-bold text-white mb-4">One Ecosystem. One Execution Standard.</h3>
            <div className="flex flex-col md:flex-row justify-center gap-8 mt-8 text-left md:text-center">
              <div>
                <span className="block text-gray-500 text-xs uppercase tracking-widest mb-1">Partners</span>
                <span className="text-xl font-bold text-white">Build Brands</span>
              </div>
              <div>
                <span className="block text-gray-500 text-xs uppercase tracking-widest mb-1">ZRYOSS</span>
                <span className="text-xl font-bold text-orange-500">Runs the System</span>
              </div>
              <div>
                <span className="block text-gray-500 text-xs uppercase tracking-widest mb-1">Kryoss Softech</span>
                <span className="text-xl font-bold text-blue-500">Delivers Tech</span>
              </div>
            </div>
          </div>
        </div>

        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-blue-600/5 rounded-full blur-[120px] pointer-events-none"></div>
      </section>

      {/* Footer Navigation */}
      <section className="relative py-24 bg-[#050505] overflow-hidden border-t border-white/5">

        {/* Soft Orange Ambient Glow */}
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute -top-40 left-1/2 -translate-x-1/2 w-[700px] h-[700px] bg-orange-500/10 blur-[140px]" />
        </div>

        <div className="relative max-w-7xl mx-auto px-6 text-center">

          {/* Heading */}
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4 tracking-tight">
            Explore Other Execution Brands
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto mb-14">
            Each brand operates with the same execution discipline, precision systems,
            and delivery standards.
          </p>

          {/* Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">

            {/* Clink HR */}
            <Link
              to="/ecosystem/brands/clink-hr"
              className="group relative rounded-2xl bg-[#0c0c0c] border border-white/5 p-8 text-left transition-all duration-300 hover:-translate-y-1 hover:border-orange-500/40 hover:shadow-[0_0_40px_rgba(255,115,0,0.15)]"
            >
              <span className="inline-block mb-3 text-xs uppercase tracking-widest text-orange-500/80">
                HR & Recruitment
              </span>

              <h3 className="text-2xl font-bold text-white mb-3 group-hover:text-orange-500 transition-colors">
                Clink HR
              </h3>

              <p className="text-gray-400 mb-6 leading-relaxed">
                Talent acquisition, workforce management, and HR execution—
                centralized, compliant, and scalable.
              </p>

              <div className="flex items-center gap-3 text-sm font-semibold text-white">
                View Brand
                <ArrowRight className="w-4 h-4 text-orange-500 transition-transform group-hover:translate-x-1" />
              </div>
            </Link>

            {/* Vyombiz */}
            <Link
              to="/ecosystem/brands/vyombiz"
              className="group relative rounded-2xl bg-[#0c0c0c] border border-white/5 p-8 text-left transition-all duration-300 hover:-translate-y-1 hover:border-orange-500/40 hover:shadow-[0_0_40px_rgba(255,115,0,0.15)]"
            >
              <span className="inline-block mb-3 text-xs uppercase tracking-widest text-orange-500/80">
                Business Services
              </span>

              <h3 className="text-2xl font-bold text-white mb-3 group-hover:text-orange-500 transition-colors">
                Vyombiz
              </h3>

              <p className="text-gray-400 mb-6 leading-relaxed">
                Structured business execution covering operations, compliance,
                finance, and growth support.
              </p>

              <div className="flex items-center gap-3 text-sm font-semibold text-white">
                View Brand
                <ArrowRight className="w-4 h-4 text-orange-500 transition-transform group-hover:translate-x-1" />
              </div>
            </Link>

          </div>
        </div>
      </section>


    </div>
  );
};

export default KryossSoftech;
