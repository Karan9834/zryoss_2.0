import React, { useEffect } from "react";
import {
  GraduationCap,
  BookOpen,
  Layout,
  Users,
  CheckCircle2,
  ArrowRight,
  Monitor,
  School,
  Server,
  Network,
  ShieldCheck,
  Zap,
  Globe,
  Database
} from "lucide-react";
import { Link } from "react-router-dom";

const Edulinker = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen bg-[#050505] text-white selection:bg-orange-500/30 font-sans">

      {/* Hero Section */}
      <section className="relative pt-32 pb-20 overflow-hidden">
        {/* Background Effects */}
        <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
          <div className="absolute top-[-10%] right-[-5%] w-[600px] h-[600px] bg-orange-600/10 rounded-full blur-[120px]" />
          <div className="absolute bottom-[10%] left-[-10%] w-[400px] h-[400px] bg-blue-600/5 rounded-full blur-[100px]" />
          <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1509062522246-3755977927d7?q=80&w=2604&auto=format&fit=crop')] bg-cover bg-center opacity-10 mix-blend-overlay"></div>
        </div>

        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <div className="flex flex-col lg:flex-row items-center gap-16">
            <div className="lg:w-1/2">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-orange-500/30 bg-orange-500/10 text-orange-400 text-sm font-medium mb-6">
                <GraduationCap size={14} />
                EdTech & Education Software Execution Brand
              </div>
              <h1 className="text-5xl md:text-7xl font-bold tracking-tight leading-tight mb-8">
                Edulinkers <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-500 to-red-500">
                  Execution
                </span>
              </h1>
              <h2 className="text-2xl text-white/80 font-medium mb-6">
                EdTech & Education Software Execution Brand of the Zryoss Ecosystem
              </h2>
              <p className="text-xl text-gray-400 leading-relaxed max-w-xl mb-10">
                Edulinkers is responsible for delivering education-focused software solutions—including ready-made SaaS platforms and custom-built systems—for schools, teachers, coaching institutes, and education organizations.
              </p>

              <div className="p-6 border border-white/10 bg-white/5 rounded-2xl backdrop-blur-sm inline-block w-full max-w-lg">
                <div className="flex items-center gap-4">
                  <div className="h-10 w-1 bg-orange-500 rounded-full"></div>
                  <p className="text-lg text-gray-200 italic">
                    "Where education software is required, <span className="text-white font-bold">Edulinkers executes</span>. <br />
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
                  src="/edulinker_hero_ai.png"
                  alt="EdTech Execution"
                  className="w-full h-auto object-cover transform group-hover:scale-105 transition-transform duration-700 opacity-80"
                  onError={(e) => { e.target.src = 'https://images.unsplash.com/photo-1501504905252-473c47e087f8?q=80&w=2574&auto=format&fit=crop' }} // Fallback
                />

                <div className="absolute bottom-8 left-8 right-8 z-20">
                  <div className="flex items-center justify-between">
                    <div className="flex gap-2">
                      <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse"></span>
                      <span className="text-xs font-mono text-green-500">SYSTEM ACTIVE</span>
                    </div>
                    <GraduationCap className="text-white/50" />
                  </div>
                </div>
              </div>

              {/* Floating Elements */}
              <div className="absolute -top-10 -right-10 w-32 h-32 bg-orange-500/20 rounded-full blur-3xl animate-pulse"></div>
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
              <h2 className="text-3xl md:text-4xl font-bold mb-6">Role of Edulinkers <br /> in the Ecosystem</h2>
              <p className="text-lg text-gray-400 mb-8 leading-relaxed">
                Edulinkers functions as the dedicated education software execution engine of the ecosystem. Its role is to ensure that education software is reliable, easy to use, and institutions get ready-to-deploy digital systems.
              </p>

              <div className="grid grid-cols-1 gap-4">
                {[
                  "Education software is reliable and easy to use",
                  "Institutions get ready-to-deploy digital systems",
                  "Teachers and administrators can operate efficiently",
                  "IPPs and BPPs never manage tech delivery directly"
                ].map((item, i) => (
                  <div key={i} className="flex items-center gap-3 p-3 bg-white/5 rounded-xl border border-white/5">
                    <CheckCircle2 className="text-orange-500 w-5 h-5 shrink-0" />
                    <span className="text-gray-200 text-sm font-medium">{item}</span>
                  </div>
                ))}
              </div>

              <p className="mt-8 text-sm text-gray-500 flex items-center gap-2">
                <ShieldCheck size={16} className="text-blue-500" />
                ZRYOSS governs the system. Edulinkers executes EdTech delivery.
              </p>
            </div>
            <div className="md:w-1/2">
              <div className="grid grid-cols-2 gap-4">
                <div className="p-6 bg-[#0f0f0f] rounded-2xl border border-white/5 flex flex-col items-center text-center">
                  <School className="text-orange-500 mb-4 h-10 w-10" />
                  <h3 className="font-bold text-white mb-2">Schools & ERP</h3>
                  <p className="text-xs text-gray-400">Management Systems</p>
                </div>
                <div className="p-6 bg-[#0f0f0f] rounded-2xl border border-white/5 flex flex-col items-center text-center">
                  <BookOpen className="text-blue-500 mb-4 h-10 w-10" />
                  <h3 className="font-bold text-white mb-2">LMS & Learning</h3>
                  <p className="text-xs text-gray-400">Digital Education</p>
                </div>
                <div className="p-6 bg-[#0f0f0f] rounded-2xl border border-white/5 flex flex-col items-center text-center">
                  <Users className="text-green-500 mb-4 h-10 w-10" />
                  <h3 className="font-bold text-white mb-2">Portals</h3>
                  <p className="text-xs text-gray-400">Student & Parent</p>
                </div>
                <div className="p-6 bg-[#0f0f0f] rounded-2xl border border-white/5 flex flex-col items-center text-center">
                  <Monitor className="text-purple-500 mb-4 h-10 w-10" />
                  <h3 className="font-bold text-white mb-2">Custom Tech</h3>
                  <p className="text-xs text-gray-400">Institutes & Coaching</p>
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
            <h2 className="text-3xl font-bold mb-4">What Edulinkers Delivers</h2>
            <p className="text-gray-400">All solutions follow ZRYOSS operating and quality standards.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
            {/* Ready-Made SaaS */}
            <div className="p-8 rounded-3xl bg-[#0a0a0a] border border-white/10 hover:border-orange-500/30 transition-all">
              <div className="flex items-center gap-4 mb-6">
                <div className="w-12 h-12 rounded-full bg-orange-500/10 flex items-center justify-center text-orange-500">
                  <Layout />
                </div>
                <h3 className="text-2xl font-bold text-white">Ready-Made SaaS Solutions</h3>
              </div>
              <ul className="space-y-4">
                {["School management systems (ERP)", "Learning management systems (LMS)", "Online classes & digital learning platforms", "Student, teacher & parent portals", "Attendance, fees, exams & reporting systems"].map((item, i) => (
                  <li key={i} className="flex gap-3 text-gray-300">
                    <span className="w-1.5 h-1.5 bg-orange-500 rounded-full mt-2"></span>
                    {item}
                  </li>
                ))}
              </ul>
            </div>

            {/* Custom Software */}
            <div className="p-8 rounded-3xl bg-[#0a0a0a] border border-white/10 hover:border-blue-500/30 transition-all">
              <div className="flex items-center gap-4 mb-6">
                <div className="w-12 h-12 rounded-full bg-blue-500/10 flex items-center justify-center text-blue-500">
                  <Monitor />
                </div>
                <h3 className="text-2xl font-bold text-white">Custom Education Software</h3>
              </div>
              <ul className="space-y-4">
                {["Custom portals for schools and institutes", "Teacher-focused platforms and tools", "Coaching & training institute systems", "Education marketplaces and platforms"].map((item, i) => (
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
          <h2 className="text-3xl font-bold text-center mb-16">How Work Reaches Edulinkers</h2>

          <div className="relative">
            {/* Line */}
            <div className="hidden md:block absolute top-[50%] left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-orange-500/50 to-transparent -translate-y-1/2 z-0"></div>

            <div className="grid grid-cols-1 md:grid-cols-7 gap-4 relative z-10">
              {[
                { step: "1", title: "Acquisition", desc: "IPP/BPP acquires client" },
                { step: "2", title: "Validation", desc: "ZRYOSS validates scope" },
                { step: "3", title: "Routing", desc: "Work routed to Edulinkers" },
                { step: "4", title: "Solutioning", desc: "SaaS or Custom finalized" },
                { step: "5", title: "Execution", desc: "Implementation & Setup" },
                { step: "6", title: "Support", desc: "Delivery managed centrally" },
                { step: "7", title: "Handover", desc: "Final system to client" }
              ].map((item, i) => (
                <div key={i} className="flex flex-col items-center text-center">
                  <div className="w-14 h-14 rounded-2xl bg-[#111] border border-white/20 flex items-center justify-center text-lg font-bold text-white mb-6 shadow-lg relative overflow-hidden group">
                    <span className="relative z-10">{item.step}</span>
                    <div className="absolute inset-0 bg-orange-500/20 opacity-0 group-hover:opacity-100 transition-opacity"></div>
                  </div>
                  <h3 className="text-sm font-bold text-white mb-1">{item.title}</h3>
                  <p className="text-[10px] text-gray-500 leading-tight px-1">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="mt-12 text-center p-4 bg-orange-900/10 border border-orange-500/20 rounded-xl inline-block w-full max-w-2xl mx-auto">
            <p className="text-orange-300 font-medium">IPP or BPP never manages developers or deployments.</p>
          </div>
        </div>
      </section>

      {/* Deployment & Vendor Management */}
      <section className="py-24 bg-[#050505]">
        <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-16">

          {/* Deployment Model */}
          <div>
            <h3 className="text-2xl font-bold mb-6 flex items-center gap-3">
              <Zap className="text-yellow-500" />
              SaaS Deployment & Customization
            </h3>
            <div className="bg-[#0a0a0a] p-8 rounded-3xl border border-white/10 mb-8 h-full">
              <p className="text-gray-400 mb-6">Edulinkers supports both ready deployment and customization-based delivery, making digital adoption fast, affordable, and scalable.</p>
              <ul className="space-y-4">
                <li className="flex items-center gap-3 text-gray-300">
                  <CheckCircle2 className="w-5 h-5 text-yellow-500" /> Institutions can use ready SaaS platforms
                </li>
                <li className="flex items-center gap-3 text-gray-300">
                  <CheckCircle2 className="w-5 h-5 text-yellow-500" /> Custom modules can be added as required
                </li>
                <li className="flex items-center gap-3 text-gray-300">
                  <CheckCircle2 className="w-5 h-5 text-yellow-500" /> Branding can be aligned to the institution
                </li>
                <li className="flex items-center gap-3 text-gray-300">
                  <CheckCircle2 className="w-5 h-5 text-yellow-500" /> Training and onboarding are supported
                </li>
              </ul>
            </div>
          </div>

          {/* Management */}
          <div>
            <h3 className="text-2xl font-bold mb-6 flex items-center gap-3">
              <Users className="text-blue-500" />
              Vendor, Tech & Support Management
            </h3>
            <div className="bg-[#0a0a0a] p-8 rounded-3xl border border-white/10 h-full">
              <div className="space-y-6">
                <div>
                  <h4 className="text-white font-bold mb-2">Edulinkers Manages:</h4>
                  <ul className="space-y-2 text-sm text-gray-400">
                    <li className="flex items-center gap-2"><div className="w-1.5 h-1.5 bg-blue-500 rounded-full"></div> Internal EdTech development teams</li>
                    <li className="flex items-center gap-2"><div className="w-1.5 h-1.5 bg-blue-500 rounded-full"></div> Technology partners and vendors</li>
                    <li className="flex items-center gap-2"><div className="w-1.5 h-1.5 bg-blue-500 rounded-full"></div> Hosting, deployment, and maintenance support</li>
                  </ul>
                </div>
                <div>
                  <h4 className="text-white font-bold mb-2">Execution Assurance:</h4>
                  <ul className="space-y-2 text-sm text-gray-400">
                    <li className="flex items-center gap-2"><div className="w-1.5 h-1.5 bg-green-500 rounded-full"></div> Managed centrally</li>
                    <li className="flex items-center gap-2"><div className="w-1.5 h-1.5 bg-green-500 rounded-full"></div> Tracked through ZRYOSS OS</li>
                    <li className="flex items-center gap-2"><div className="w-1.5 h-1.5 bg-green-500 rounded-full"></div> Delivered with defined SLAs</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>

        </div>
      </section>

      {/* Quality & Relationships */}
      <section className="py-24 bg-[#0a0a0a]">
        <div className="max-w-7xl mx-auto px-6">
          <div className="mb-20">
            <h2 className="text-3xl font-bold mb-8 text-center">Quality, Reliability & Data Responsibility</h2>
            <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
              {[
                { title: "Stable Delivery", desc: "Secure software delivery" },
                { title: "Structured Onboarding", desc: "Training & Adoption" },
                { title: "Ongoing Support", desc: "Issue Resolution" },
                { title: "Continuous Updates", desc: "System Improvement" }
              ].map((item, i) => (
                <div key={i} className="bg-white/5 p-6 rounded-2xl border border-white/5 text-center">
                  <h3 className="font-bold text-lg text-white mb-2">{item.title}</h3>
                  <p className="text-gray-400 text-sm">{item.desc}</p>
                </div>
              ))}
            </div>
            <p className="text-center text-gray-500 mt-6 italic">"Education systems are treated as long-term infrastructure, not one-time projects."</p>
          </div>

          <div className="grid md:grid-cols-2 gap-12">
            {/* Relationship */}
            <div className="border-l-4 border-orange-500 pl-8">
              <h3 className="text-2xl font-bold mb-6 text-white">Relationship with IPP & BPP</h3>
              <div className="space-y-6">
                <div>
                  <h4 className="text-orange-500 font-bold text-sm uppercase tracking-wide mb-1">IPP / BPP</h4>
                  <p className="text-gray-400">Focuses on institutions and relationships.</p>
                </div>
                <div>
                  <h4 className="text-white font-bold text-sm uppercase tracking-wide mb-1">Edulinkers</h4>
                  <p className="text-gray-400">Manages software execution.</p>
                </div>
                <div>
                  <h4 className="text-blue-500 font-bold text-sm uppercase tracking-wide mb-1">ZRYOSS</h4>
                  <p className="text-gray-400">Handles coordination, governance, and reporting.</p>
                </div>
              </div>
              <p className="mt-8 italic text-gray-500">"This allows partners to grow in the education sector without technical complexity."</p>
            </div>

            {/* Scalability */}
            <div className="border-l-4 border-blue-500 pl-8">
              <h3 className="text-2xl font-bold mb-6 text-white">Scalability Across Institutions</h3>
              <p className="text-gray-400 mb-6">Edulinkers is designed to support:</p>
              <ul className="space-y-3 mb-6 block">
                {["Multiple schools and institutes", "Teachers and education networks", "Growing student volumes", "Long-term platform usage"].map((item, i) => (
                  <li key={i} className="flex gap-2 text-gray-300"><span className="text-blue-500">•</span> {item}</li>
                ))}
              </ul>
              <p className="italic text-gray-500">"As education partners scale, Edulinkers scales execution capacity seamlessly."</p>
            </div>
          </div>
        </div>
      </section>

      {/* Why Separate Brand */}
      <section className="py-24 bg-[#050505] relative overflow-hidden">
        <div className="max-w-4xl mx-auto px-6 text-center relative z-10">
          <h2 className="text-3xl font-bold mb-8">Why Edulinkers Exists as a Separate Brand</h2>

          <div className="grid grid-cols-2 gap-4 mb-12">
            <div className="p-4 bg-white/5 rounded-xl"><h4 className="font-bold text-white">Domain Understanding</h4><p className="text-xs text-gray-400 mt-1">Schools & Teaching</p></div>
            <div className="p-4 bg-white/5 rounded-xl"><h4 className="font-bold text-white">Reliable Systems</h4><p className="text-xs text-gray-400 mt-1">User-friendly</p></div>
            <div className="p-4 bg-white/5 rounded-xl"><h4 className="font-bold text-white">Long-term Support</h4><p className="text-xs text-gray-400 mt-1">Upgrades & Maintenance</p></div>
            <div className="p-4 bg-white/5 rounded-xl"><h4 className="font-bold text-white">Compliance</h4><p className="text-xs text-gray-400 mt-1">Data & Operations</p></div>
          </div>

          <div className="p-8 rounded-3xl bg-gradient-to-r from-gray-900 to-black border border-white/10 shadow-2xl">
            <h3 className="text-2xl font-bold text-white mb-2">One Ecosystem. One Education Technology Standard.</h3>
            <p className="text-gray-400 mb-8">Edulinkers ensures that education software delivered through ZRYOSS is reliable, scalable, and institution-ready.</p>
            <div className="flex flex-col md:flex-row justify-center gap-8 mt-8 text-left md:text-center">
              <div>
                <span className="block text-gray-500 text-xs uppercase tracking-widest mb-1">Partners</span>
                <span className="text-xl font-bold text-white">Bring Institutions</span>
              </div>
              <div>
                <span className="block text-gray-500 text-xs uppercase tracking-widest mb-1">ZRYOSS</span>
                <span className="text-xl font-bold text-blue-500">Runs the System</span>
              </div>
              <div>
                <span className="block text-gray-500 text-xs uppercase tracking-widest mb-1">Edulinkers</span>
                <span className="text-xl font-bold text-orange-500">Powers Education</span>
              </div>
            </div>
          </div>
        </div>

        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-orange-600/5 rounded-full blur-[120px] pointer-events-none"></div>
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

            {/* Medikryoss */}
            <Link
              to="/ecosystem/brands/medikryoss"
              className="group relative rounded-2xl bg-[#0c0c0c] border border-white/5 p-8 text-left transition-all duration-300 hover:-translate-y-1 hover:border-green-500/40 hover:shadow-[0_0_40px_rgba(34,197,94,0.15)]"
            >
              <span className="inline-block mb-3 text-xs uppercase tracking-widest text-green-500/80">
                Healthcare
              </span>

              <h3 className="text-2xl font-bold text-white mb-3 group-hover:text-green-500 transition-colors">
                Medikryoss
              </h3>

              <p className="text-gray-400 mb-6 leading-relaxed">
                Specialized healthcare operations and medical technology management.
              </p>

              <div className="flex items-center gap-3 text-sm font-semibold text-white">
                View Brand
                <ArrowRight className="w-4 h-4 text-green-500 transition-transform group-hover:translate-x-1" />
              </div>
            </Link>

          </div>
        </div>
      </section>

    </div>
  );
};

export default Edulinker;
