import React, { useEffect } from "react";
import {
  HeartPulse,
  Activity,
  Stethoscope,
  Building2,
  Database,
  ShieldCheck,
  CheckCircle2,
  ArrowRight,
  Monitor,
  Server,
  Users,
  Workflow,
  Globe,
  Pill,
  Syringe
} from "lucide-react";
import { Link } from "react-router-dom";

const Medikryoss = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen bg-[#050505] text-white selection:bg-green-500/30 font-sans">

      {/* Hero Section */}
      <section className="relative pt-32 pb-20 overflow-hidden">
        {/* Background Effects */}
        <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
          <div className="absolute top-[-10%] right-[-5%] w-[600px] h-[600px] bg-green-600/10 rounded-full blur-[120px]" />
          <div className="absolute bottom-[10%] left-[-10%] w-[400px] h-[400px] bg-blue-600/5 rounded-full blur-[100px]" />
          <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1532187863486-abf9dbad1b69?q=80&w=2070&auto=format&fit=crop')] bg-cover bg-center opacity-10 mix-blend-overlay"></div>
        </div>

        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <div className="flex flex-col lg:flex-row items-center gap-16">
            <div className="lg:w-1/2">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-green-500/30 bg-green-500/10 text-green-400 text-sm font-medium mb-6">
                <HeartPulse size={14} />
                Healthcare & Medical Software Execution Brand
              </div>
              <h1 className="text-5xl md:text-7xl font-bold tracking-tight leading-tight mb-8">
                Medikryoss <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-green-500 to-emerald-400">
                  Execution
                </span>
              </h1>
              <h2 className="text-2xl text-white/80 font-medium mb-6">
                Healthcare & Medical Software Execution Brand of the Zryoss Ecosystem
              </h2>
              <p className="text-xl text-gray-400 leading-relaxed max-w-xl mb-10">
                Medikryoss is responsible for delivering software, applications, and digital systems for the medical and healthcare industry, including ready-made SaaS platforms and custom-built solutions.
              </p>

              <div className="p-6 border border-white/10 bg-white/5 rounded-2xl backdrop-blur-sm inline-block w-full max-w-lg">
                <div className="flex items-center gap-4">
                  <div className="h-10 w-1 bg-green-500 rounded-full"></div>
                  <p className="text-lg text-gray-200 italic">
                    "Where medical tech is required, <span className="text-white font-bold">Medikryoss executes</span>. <br />
                    Where governance is required, <span className="text-white font-bold">ZRYOSS governs</span>."
                  </p>
                </div>
              </div>
            </div>

            <div className="lg:w-1/2 relative">
              <div className="relative rounded-3xl overflow-hidden border border-white/10 shadow-2xl group">
                <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent z-10"></div>
                {/* AI generated image */}
                <img
                  src="/medikryoss_hero_ai.png"
                  alt="Healthcare Execution"
                  className="w-full h-auto object-cover transform group-hover:scale-105 transition-transform duration-700 opacity-80"
                  onError={(e) => { e.target.src = 'https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?q=80&w=2070&auto=format&fit=crop' }} // Fallback
                />

                <div className="absolute bottom-8 left-8 right-8 z-20">
                  <div className="flex items-center justify-between">
                    <div className="flex gap-2">
                      <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse"></span>
                      <span className="text-xs font-mono text-green-500">SYSTEM ACTIVE</span>
                    </div>
                    <Activity className="text-white/50" />
                  </div>
                </div>
              </div>

              {/* Floating Elements */}
              <div className="absolute -top-10 -right-10 w-32 h-32 bg-green-500/20 rounded-full blur-3xl animate-pulse"></div>
              <div className="absolute -bottom-10 -left-10 w-32 h-32 bg-blue-500/20 rounded-full blur-3xl animate-pulse delay-1000"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Role Section */}
      <section className="py-24 bg-[#0a0a0a]">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex flex-col md:flex-row gap-16 items-center">
            <div className="md:w-1/2">
              <h2 className="text-3xl md:text-4xl font-bold mb-6">Role of Medikryoss <br /> in the Ecosystem</h2>
              <p className="text-lg text-gray-400 mb-8 leading-relaxed">
                Medikryoss functions as the dedicated healthcare technology execution engine of the ecosystem. Its role is to ensure that medical software is reliable, secure, and digitized correctly.
              </p>

              <div className="grid grid-cols-1 gap-4">
                {[
                  "Medical software is reliable and secure",
                  "Healthcare workflows are digitized correctly",
                  "Industry-specific requirements are handled professionally",
                  "IPPs and BPPs never manage medical tech execution directly"
                ].map((item, i) => (
                  <div key={i} className="flex items-center gap-3 p-3 bg-white/5 rounded-xl border border-white/5">
                    <CheckCircle2 className="text-green-500 w-5 h-5 shrink-0" />
                    <span className="text-gray-200 text-sm font-medium">{item}</span>
                  </div>
                ))}
              </div>

              <p className="mt-8 text-sm text-gray-500 flex items-center gap-2">
                <ShieldCheck size={16} className="text-blue-500" />
                ZRYOSS governs the system. Medikryoss executes healthcare technology.
              </p>
            </div>
            <div className="md:w-1/2">
              <div className="grid grid-cols-2 gap-4">
                <div className="p-6 bg-[#0f0f0f] rounded-2xl border border-white/5 flex flex-col items-center text-center">
                  <Stethoscope className="text-green-500 mb-4 h-10 w-10" />
                  <h3 className="font-bold text-white mb-2">Clinical</h3>
                  <p className="text-xs text-gray-400">Doctor & Patient Apps</p>
                </div>
                <div className="p-6 bg-[#0f0f0f] rounded-2xl border border-white/5 flex flex-col items-center text-center">
                  <Building2 className="text-blue-500 mb-4 h-10 w-10" />
                  <h3 className="font-bold text-white mb-2">Hospital</h3>
                  <p className="text-xs text-gray-400">HMS & Management</p>
                </div>
                <div className="p-6 bg-[#0f0f0f] rounded-2xl border border-white/5 flex flex-col items-center text-center">
                  <Pill className="text-red-500 mb-4 h-10 w-10" />
                  <h3 className="font-bold text-white mb-2">Pharma</h3>
                  <p className="text-xs text-gray-400">ERP & Supply Chain</p>
                </div>
                <div className="p-6 bg-[#0f0f0f] rounded-2xl border border-white/5 flex flex-col items-center text-center">
                  <Globe className="text-purple-500 mb-4 h-10 w-10" />
                  <h3 className="font-bold text-white mb-2">SaaS</h3>
                  <p className="text-xs text-gray-400">Ready Platforms</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Offerings Section */}
      <section className="py-24 bg-[#050505]">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold mb-4">What Medikryoss Delivers</h2>
            <p className="text-gray-400">All solutions follow ZRYOSS operating and quality standards.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
            {/* Clinical & Hospital */}
            <div className="p-8 rounded-3xl bg-[#0a0a0a] border border-white/10 hover:border-green-500/30 transition-all">
              <div className="flex items-center gap-4 mb-6">
                <div className="w-12 h-12 rounded-full bg-green-500/10 flex items-center justify-center text-green-500">
                  <Activity />
                </div>
                <h3 className="text-2xl font-bold text-white">Clinical & Hospital Systems</h3>
              </div>
              <ul className="space-y-4">
                {["Clinic management systems", "Doctor appointment & patient apps", "Electronic medical records (EMR/EHR)", "Hospital management systems (HMS)", "Diagnostic & lab management software"].map((item, i) => (
                  <li key={i} className="flex gap-3 text-gray-300">
                    <span className="w-1.5 h-1.5 bg-green-500 rounded-full mt-2"></span>
                    {item}
                  </li>
                ))}
              </ul>
            </div>

            {/* Pharma & SaaS */}
            <div className="p-8 rounded-3xl bg-[#0a0a0a] border border-white/10 hover:border-blue-500/30 transition-all">
              <div className="flex items-center gap-4 mb-6">
                <div className="w-12 h-12 rounded-full bg-blue-500/10 flex items-center justify-center text-blue-500">
                  <Database />
                </div>
                <h3 className="text-2xl font-bold text-white">Pharma & Healthcare SaaS</h3>
              </div>
              <ul className="space-y-4">
                {["Pharma ERP solutions", "Inventory & supply chain systems", "Subscription-based medical software", "White-label healthcare apps", "Compliance-aligned reporting tools"].map((item, i) => (
                  <li key={i} className="flex gap-3 text-gray-300">
                    <span className="w-1.5 h-1.5 bg-blue-500 rounded-full mt-2"></span>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Routing Process */}
      <section className="py-24 bg-[#080808]">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-3xl font-bold text-center mb-16">How Work Reaches Medikryoss</h2>

          <div className="relative">
            {/* Line */}
            <div className="hidden md:block absolute top-[50%] left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-green-500/50 to-transparent -translate-y-1/2 z-0"></div>

            <div className="grid grid-cols-1 md:grid-cols-7 gap-4 relative z-10">
              {[
                { step: "1", title: "Acquisition", desc: "IPP/BPP acquires client" },
                { step: "2", title: "Validation", desc: "ZRYOSS checks compliance" },
                { step: "3", title: "Routing", desc: "Work routed to Medikryoss" },
                { step: "4", title: "Solutioning", desc: "SaaS or Custom finalized" },
                { step: "5", title: "Execution", desc: "Dev, Deploy, Onboard" },
                { step: "6", title: "Support", desc: "Maintenance managed" },
                { step: "7", title: "Live", desc: "System delivered" }
              ].map((item, i) => (
                <div key={i} className="flex flex-col items-center text-center">
                  <div className="w-14 h-14 rounded-2xl bg-[#111] border border-white/20 flex items-center justify-center text-lg font-bold text-white mb-6 shadow-lg relative overflow-hidden group">
                    <span className="relative z-10">{item.step}</span>
                    <div className="absolute inset-0 bg-green-500/20 opacity-0 group-hover:opacity-100 transition-opacity"></div>
                  </div>
                  <h3 className="text-sm font-bold text-white mb-1">{item.title}</h3>
                  <p className="text-[10px] text-gray-500 leading-tight px-1">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="mt-12 text-center p-4 bg-green-900/10 border border-green-500/20 rounded-xl inline-block w-full max-w-2xl mx-auto">
            <p className="text-green-300 font-medium">IPP or BPP never manages developers, hosting, or deployments.</p>
          </div>
        </div>
      </section>

      {/* Deployment & Vendor Management */}
      <section className="py-24 bg-[#050505]">
        <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-16">

          {/* Deployment Model */}
          <div>
            <h3 className="text-2xl font-bold mb-6 flex items-center gap-3">
              <Workflow className="text-blue-500" />
              SaaS Deployment & Custom Solutions
            </h3>
            <div className="bg-[#0a0a0a] p-8 rounded-3xl border border-white/10 h-full">
              <p className="text-gray-400 mb-6">Medikryoss supports both ready-made deployment and custom healthcare software.</p>
              <ul className="space-y-4">
                <li className="flex items-center gap-3 text-gray-300">
                  <CheckCircle2 className="w-5 h-5 text-blue-500" /> Clinics & hospitals adopt ready SaaS systems
                </li>
                <li className="flex items-center gap-3 text-gray-300">
                  <CheckCircle2 className="w-5 h-5 text-blue-500" /> Custom modules added based on workflow
                </li>
                <li className="flex items-center gap-3 text-gray-300">
                  <CheckCircle2 className="w-5 h-5 text-blue-500" /> Branding aligned to the institution
                </li>
                <li className="flex items-center gap-3 text-gray-300">
                  <CheckCircle2 className="w-5 h-5 text-blue-500" /> Training and onboarding supported
                </li>
              </ul>
            </div>
          </div>

          {/* Management */}
          <div>
            <h3 className="text-2xl font-bold mb-6 flex items-center gap-3">
              <Users className="text-purple-500" />
              Vendor, Tech & Support Management
            </h3>
            <div className="bg-[#0a0a0a] p-8 rounded-3xl border border-white/10 h-full">
              <div className="space-y-6">
                <div>
                  <h4 className="text-white font-bold mb-2">Medikryoss Manages:</h4>
                  <ul className="space-y-2 text-sm text-gray-400">
                    <li className="flex items-center gap-2"><div className="w-1.5 h-1.5 bg-green-500 rounded-full"></div> Healthcare technology teams</li>
                    <li className="flex items-center gap-2"><div className="w-1.5 h-1.5 bg-green-500 rounded-full"></div> Approved development vendors</li>
                    <li className="flex items-center gap-2"><div className="w-1.5 h-1.5 bg-green-500 rounded-full"></div> Hosting & maintenance partners</li>
                  </ul>
                </div>
                <div>
                  <h4 className="text-white font-bold mb-2">Execution Assurance:</h4>
                  <ul className="space-y-2 text-sm text-gray-400">
                    <li className="flex items-center gap-2"><div className="w-1.5 h-1.5 bg-blue-500 rounded-full"></div> Governed centrally</li>
                    <li className="flex items-center gap-2"><div className="w-1.5 h-1.5 bg-blue-500 rounded-full"></div> Tracked through ZRYOSS OS</li>
                    <li className="flex items-center gap-2"><div className="w-1.5 h-1.5 bg-blue-500 rounded-full"></div> Delivered with defined SLAs</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>

        </div>
      </section>

      {/* Compliance & Relationships */}
      <section className="py-24 bg-[#0a0a0a]">
        <div className="max-w-7xl mx-auto px-6">
          <div className="mb-20">
            <h2 className="text-3xl font-bold mb-8 text-center">Compliance, Data & Reliability</h2>
            <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
              {[
                { title: "Secure Architecture", desc: "Data protection priority" },
                { title: "Access Control", desc: "Role-based security" },
                { title: "Compliance Ready", desc: "Industry standards" },
                { title: "Critical Infrastructure", desc: "Reliable uptime" }
              ].map((item, i) => (
                <div key={i} className="bg-white/5 p-6 rounded-2xl border border-white/5 text-center">
                  <h3 className="font-bold text-lg text-white mb-2">{item.title}</h3>
                  <p className="text-gray-400 text-sm">{item.desc}</p>
                </div>
              ))}
            </div>
            <p className="text-center text-gray-500 mt-6 italic">"Healthcare systems are treated as critical operational infrastructure, not experimental tools."</p>
          </div>

          <div className="grid md:grid-cols-2 gap-12">
            {/* Relationship */}
            <div className="border-l-4 border-green-500 pl-8">
              <h3 className="text-2xl font-bold mb-6 text-white">Relationship with IPP & BPP</h3>
              <div className="space-y-6">
                <div>
                  <h4 className="text-green-500 font-bold text-sm uppercase tracking-wide mb-1">IPP / BPP</h4>
                  <p className="text-gray-400">Focuses on doctors, clinics, hospitals, or pharma clients.</p>
                </div>
                <div>
                  <h4 className="text-white font-bold text-sm uppercase tracking-wide mb-1">Medikryoss</h4>
                  <p className="text-gray-400">Manages healthcare software execution.</p>
                </div>
                <div>
                  <h4 className="text-blue-500 font-bold text-sm uppercase tracking-wide mb-1">ZRYOSS</h4>
                  <p className="text-gray-400">Coordinates governance, delivery, and reporting.</p>
                </div>
              </div>
              <p className="mt-8 italic text-gray-500">"Partners grow in the medical sector without technical or compliance complexity."</p>
            </div>

            {/* Scalability */}
            <div className="border-l-4 border-blue-500 pl-8">
              <h3 className="text-2xl font-bold mb-6 text-white">Scalability Across Healthcare</h3>
              <p className="text-gray-400 mb-6">Medikryoss is designed to support:</p>
              <ul className="space-y-3 mb-6 block">
                {["Clinics, hospitals, and diagnostic chains", "Pharma distributors and manufacturers", "Multiple locations and branches", "Long-term digital healthcare operations"].map((item, i) => (
                  <li key={i} className="flex gap-2 text-gray-300"><span className="text-blue-500">•</span> {item}</li>
                ))}
              </ul>
              <p className="italic text-gray-500">"As ecosystem demand grows, Medikryoss scales execution without compromising reliability."</p>
            </div>
          </div>
        </div>
      </section>

      {/* Why Separate Brand */}
      <section className="py-24 bg-[#050505] relative overflow-hidden">
        <div className="max-w-4xl mx-auto px-6 text-center relative z-10">
          <h2 className="text-3xl font-bold mb-8">Why Medikryoss Exists as a Separate Brand</h2>

          <div className="grid grid-cols-2 gap-4 mb-12">
            <div className="p-4 bg-white/5 rounded-xl"><h4 className="font-bold text-white">Domain Understanding</h4><p className="text-xs text-gray-400 mt-1">Medical Specifics</p></div>
            <div className="p-4 bg-white/5 rounded-xl"><h4 className="font-bold text-white">Reliable Systems</h4><p className="text-xs text-gray-400 mt-1">Uptime & Security</p></div>
            <div className="p-4 bg-white/5 rounded-xl"><h4 className="font-bold text-white">Long-term Support</h4><p className="text-xs text-gray-400 mt-1">Continuous Care</p></div>
            <div className="p-4 bg-white/5 rounded-xl"><h4 className="font-bold text-white">Controlled Execution</h4><p className="text-xs text-gray-400 mt-1">Standards</p></div>
          </div>

          <div className="p-8 rounded-3xl bg-gradient-to-r from-gray-900 to-black border border-white/10 shadow-2xl">
            <h3 className="text-2xl font-bold text-white mb-2">One Ecosystem. One Standard for Healthcare Technology.</h3>
            <p className="text-gray-400 mb-8">Medikryoss ensures that medical and healthcare software delivered through ZRYOSS is reliable, compliant-ready, and scalable.</p>
            <div className="flex flex-col md:flex-row justify-center gap-8 mt-8 text-left md:text-center">
              <div>
                <span className="block text-gray-500 text-xs uppercase tracking-widest mb-1">Partners</span>
                <span className="text-xl font-bold text-white">Bring Opportunities</span>
              </div>
              <div>
                <span className="block text-gray-500 text-xs uppercase tracking-widest mb-1">ZRYOSS</span>
                <span className="text-xl font-bold text-blue-500">Runs the System</span>
              </div>
              <div>
                <span className="block text-gray-500 text-xs uppercase tracking-widest mb-1">Medikryoss</span>
                <span className="text-xl font-bold text-green-500">Powers Healthcare</span>
              </div>
            </div>
          </div>
        </div>

        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-green-600/5 rounded-full blur-[120px] pointer-events-none"></div>
      </section>

      {/* Footer Navigation */}
      <section className="relative py-24 bg-[#050505] overflow-hidden border-t border-white/5">

        {/* Soft Green Ambient Glow */}
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute -top-40 left-1/2 -translate-x-1/2 w-[700px] h-[700px] bg-green-500/10 blur-[140px]" />
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

            {/* Kryoss Softech */}
            <Link
              to="/ecosystem/brands/kryoss-softech"
              className="group relative rounded-2xl bg-[#0c0c0c] border border-white/5 p-8 text-left transition-all duration-300 hover:-translate-y-1 hover:border-blue-500/40 hover:shadow-[0_0_40px_rgba(59,130,246,0.15)]"
            >
              <span className="inline-block mb-3 text-xs uppercase tracking-widest text-blue-500/80">
                Technology
              </span>

              <h3 className="text-2xl font-bold text-white mb-3 group-hover:text-blue-500 transition-colors">
                Kryoss Softech
              </h3>

              <p className="text-gray-400 mb-6 leading-relaxed">
                The execution engine for all technology-driven services, ensuring quality and focus.
              </p>

              <div className="flex items-center gap-3 text-sm font-semibold text-white">
                View Brand
                <ArrowRight className="w-4 h-4 text-blue-500 transition-transform group-hover:translate-x-1" />
              </div>
            </Link>

            {/* Edulinkers */}
            <Link
              to="/ecosystem/brands/edulinker"
              className="group relative rounded-2xl bg-[#0c0c0c] border border-white/5 p-8 text-left transition-all duration-300 hover:-translate-y-1 hover:border-orange-500/40 hover:shadow-[0_0_40px_rgba(249,115,22,0.15)]"
            >
              <span className="inline-block mb-3 text-xs uppercase tracking-widest text-orange-500/80">
                Education
              </span>

              <h3 className="text-2xl font-bold text-white mb-3 group-hover:text-orange-500 transition-colors">
                Edulinkers
              </h3>

              <p className="text-gray-400 mb-6 leading-relaxed">
                Education technology execution for schools, institutes, and learning platforms.
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

export default Medikryoss;
