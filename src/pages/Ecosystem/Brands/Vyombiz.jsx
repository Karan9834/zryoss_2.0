import React, { useEffect } from "react";
import {
  Briefcase,
  LineChart,
  Users,
  ShieldCheck,
  Workflow,
  CheckCircle2,
  ArrowRight,
  TrendingUp,
  Award,
  BookOpen,
  PieChart,
  Layers
} from "lucide-react";
import { Link } from "react-router-dom";

const Vyombiz = () => {
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
          <div className="absolute top-[-10%] right-[-5%] w-[600px] h-[600px] bg-purple-600/10 rounded-full blur-[120px]" />
          <div className="absolute bottom-[10%] left-[-10%] w-[400px] h-[400px] bg-orange-600/5 rounded-full blur-[100px]" />
          <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=2670&auto=format&fit=crop')] bg-cover bg-center opacity-5 mix-blend-overlay"></div>
        </div>

        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <div className="flex flex-col lg:flex-row items-center gap-16">
            <div className="lg:w-1/2">
              {/* Badge - typography changed */}
              <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-orange-500/30 bg-orange-500/10 backdrop-blur-sm mb-6">
                <Briefcase size={14} className="text-orange-500" />
                <span className="text-xs uppercase tracking-[0.45em] text-orange-500 font-bold">
                  Business & Professional Services Brand
                </span>
              </div>

              {/* H1 - typography changed */}
              <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold leading-[1.15] tracking-tight mb-5 text-white">
                Vyombiz
              </h1>

              {/* H2 - typography changed */}
              <h2 className="text-xl md:text-2xl font-semibold text-white/90 mb-6">
                Business, Consulting & Professional Services Execution Brand of the Zryoss Ecosystem
              </h2>

              {/* Paragraph - typography changed */}
              <p className="text-xl text-gray-400 leading-relaxed font-light mb-10">
                Vyombiz is responsible for executing business-focused, advisory, consulting, and professional service engagements brought into the ecosystem by IPPs and BPPs.
              </p>

              <div className="p-6 border border-white/10 bg-white/5 rounded-2xl backdrop-blur-sm inline-block w-full max-w-lg">
                <div className="flex items-center gap-4">
                  <div className="h-10 w-1 bg-purple-500 rounded-full"></div>
                  <p className="text-lg text-gray-200 italic">
                    "Whenever an IPP or BPP operates in CAS, professional services, or advisory domains, <span className="text-white font-bold">execution is managed through Vyombiz</span>."
                  </p>
                </div>
              </div>
            </div>

            <div className="lg:w-1/2 relative">
              <div className="relative rounded-3xl overflow-hidden border border-white/10 shadow-2xl group">
                <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent z-10"></div>
                <img
                  src="/vyombiz_hero_ai.png"
                  alt="AI Business Execution"
                  className="w-full h-auto object-cover transform group-hover:scale-105 transition-transform duration-700 opacity-90"
                  onError={(e) => { e.target.src = 'https://images.unsplash.com/photo-1507679799987-c73779587ccf?q=80&w=2671&auto=format&fit=crop' }}
                />

                <div className="absolute bottom-8 left-8 right-8 z-20">
                  <div className="flex items-center justify-between">
                    <div className="flex gap-2">
                      <span className="w-2 h-2 rounded-full bg-purple-500 animate-pulse"></span>
                      <span className="text-xs font-mono text-purple-500">STRATEGY ACTIVE</span>
                    </div>
                    <LineChart className="text-white/50" />
                  </div>
                </div>
              </div>

              {/* Floating Elements */}
              <div className="absolute -top-10 -right-10 w-32 h-32 bg-purple-500/20 rounded-full blur-3xl animate-pulse"></div>
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
              <h2 className="text-3xl md:text-4xl font-bold mb-6">Role of Vyombiz <br /> in the Ecosystem</h2>
              <p className="text-lg text-gray-400 mb-8 leading-relaxed">
                Vyombiz functions as the professional services execution engine of the ecosystem. Its strategic role allows partners to deliver high-level consultancy without managing the experts themselves.
              </p>

              <div className="grid grid-cols-1 gap-4">
                {[
                  "Business and advisory services are structured",
                  "Client engagements are professionally delivered",
                  "Domain experts are coordinated effectively",
                  "Execution quality remains consistent at scale"
                ].map((item, i) => (
                  <div key={i} className="flex items-center gap-3 p-3 bg-white/5 rounded-xl border border-white/5">
                    <CheckCircle2 className="text-purple-500 w-5 h-5 shrink-0" />
                    <span className="text-gray-200 text-sm font-medium">{item}</span>
                  </div>
                ))}
              </div>

              <p className="mt-8 text-sm text-gray-500 flex items-center gap-2">
                <Workflow size={16} className="text-orange-500" />
                ZRYOSS governs the system. Vyombiz executes professional delivery.
              </p>
            </div>
            <div className="md:w-1/2">
              <div className="p-8 bg-[#0f0f0f] rounded-3xl border border-white/5 h-full flex flex-col justify-center relative overflow-hidden">
                <LineChart className="text-purple-900/20 absolute -right-10 -bottom-10 w-64 h-64" />
                <h3 className="text-2xl font-bold text-white mb-6 z-10">What Vyombiz Executes</h3>
                <ul className="space-y-4 z-10">
                  {[
                    "Business consulting and advisory",
                    "CAS and professional service offerings",
                    "Business setup and structuring support",
                    "Growth strategy and operational consulting",
                    "Process improvement and enablement services"
                  ].map((item, i) => (
                    <li key={i} className="flex items-start gap-3">
                      <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-purple-500 shrink-0"></span>
                      <span className="text-gray-300">{item}</span>
                    </li>
                  ))}
                </ul>
                <p className="mt-8 text-xs text-gray-500 z-10 border-t border-white/5 pt-4">All services are delivered under ZRYOSS operating standards.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Routing Process */}
      <section className="py-24 bg-[#050505]">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-3xl font-bold text-center mb-16">How Work Reaches Vyombiz</h2>

          <div className="relative">
            {/* Line */}
            <div className="hidden md:block absolute top-[50%] left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-purple-500/50 to-transparent -translate-y-1/2 z-0"></div>

            <div className="grid grid-cols-1 md:grid-cols-6 gap-6 relative z-10">
              {[
                { step: "1", title: "Closing", desc: "IPP/BPP closes client deal" },
                { step: "2", title: "Validation", desc: "ZRYOSS checks scope" },
                { step: "3", title: "Routing", desc: "Work routed to Vyombiz" },
                { step: "4", title: "Structuring", desc: "Vyombiz assigns experts" },
                { step: "5", title: "Review", desc: "Execution monitored" },
                { step: "6", title: "Delivery", desc: "Final output to client" }
              ].map((item, i) => (
                <div key={i} className="flex flex-col items-center text-center group">
                  <div className="w-16 h-16 rounded-2xl bg-[#111] border border-white/20 flex items-center justify-center text-xl font-bold text-white mb-6 shadow-lg relative overflow-hidden group hover:border-purple-500 transition-colors">
                    <span className="relative z-10">{item.step}</span>
                    <div className="absolute inset-0 bg-purple-500/20 opacity-0 group-hover:opacity-100 transition-opacity"></div>
                  </div>
                  <h3 className="text-sm font-bold text-white mb-1">{item.title}</h3>
                  <p className="text-xs text-gray-500">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="mt-12 text-center p-4 bg-purple-900/10 border border-purple-500/20 rounded-xl inline-block w-full max-w-2xl mx-auto">
            <p className="text-purple-300 font-medium text-sm">IPP or BPP never manages consultants or experts directly.</p>
          </div>
        </div>
      </section>

      {/* Expert Management & QC */}
      <section className="py-24 bg-[#080808]">
        <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-16">

          {/* Expert Management */}
          <div>
            <h3 className="text-2xl font-bold mb-6 flex items-center gap-3">
              <Users className="text-orange-500" />
              Expert & Vendor Management
            </h3>
            <div className="bg-[#0a0a0a] p-8 rounded-3xl border border-white/10 mb-8 h-full">
              <p className="text-gray-400 mb-6">Vyombiz manages business consultants, domain experts, and professional service vendors.</p>
              <ul className="space-y-4">
                <li className="flex items-center gap-3 text-gray-300">
                  <div className="text-purple-500"><ShieldCheck size={18} /></div>
                  Under Vyombiz’s supervision
                </li>
                <li className="flex items-center gap-3 text-gray-300">
                  <div className="text-purple-500"><BookOpen size={18} /></div>
                  With defined scopes and SLAs
                </li>
                <li className="flex items-center gap-3 text-gray-300">
                  <div className="text-purple-500"><Layers size={18} /></div>
                  Through the ZRYOSS Operating System
                </li>
              </ul>
              <p className="mt-8 text-sm text-purple-400 font-medium border-t border-white/5 pt-4">This ensures accountability, confidentiality, and delivery quality.</p>
            </div>
          </div>

          {/* QC */}
          <div>
            <h3 className="text-2xl font-bold mb-6 flex items-center gap-3">
              <Award className="text-orange-500" />
              Quality Control & Standards
            </h3>
            <div className="bg-[#0a0a0a] p-8 rounded-3xl border border-white/10 h-full">
              <div className="grid grid-cols-2 gap-6">
                {[
                  { title: "Frameworks", desc: "Clear engagement structures." },
                  { title: "Milestones", desc: "Defined delivery points." },
                  { title: "Validation", desc: "Review checkpoints." },
                  { title: "Monitoring", desc: "Ongoing performance tracking." }
                ].map((item, i) => (
                  <div key={i} className="p-4 bg-[#111] rounded-xl border border-white/5">
                    <h4 className="font-bold text-gray-200 text-sm mb-1">{item.title}</h4>
                    <p className="text-xs text-gray-500">{item.desc}</p>
                  </div>
                ))}
              </div>
              <div className="mt-8 text-center">
                <p className="text-gray-400 italic">"Professional services are delivered with discipline, not improvisation."</p>
              </div>
            </div>
          </div>

        </div>
      </section>

      {/* Relationship & Scalability */}
      <section className="py-24 bg-[#0a0a0a]">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-12">
            {/* Relationship */}
            <div className="border-l-4 border-purple-500 pl-8">
              <h3 className="text-2xl font-bold mb-6 text-white">Relationship with IPP & BPP</h3>
              <div className="space-y-6">
                <div>
                  <h4 className="text-orange-500 font-bold text-sm uppercase tracking-wide mb-1">IPP / BPP</h4>
                  <p className="text-gray-400">Owns the client relationship</p>
                </div>
                <div>
                  <h4 className="text-purple-500 font-bold text-sm uppercase tracking-wide mb-1">Vyombiz</h4>
                  <p className="text-gray-400">Manages service execution</p>
                </div>
                <div>
                  <h4 className="text-white font-bold text-sm uppercase tracking-wide mb-1">ZRYOSS</h4>
                  <p className="text-gray-400">Coordinates governance and control</p>
                </div>
              </div>
            </div>

            {/* Scalability */}
            <div className="border-l-4 border-blue-500 pl-8">
              <h3 className="text-2xl font-bold mb-6 text-white">Scalability Without Dilution</h3>
              <p className="text-gray-400 mb-6">Vyombiz is designed to:</p>
              <ul className="space-y-3 mb-6 block">
                {["Handle multiple consulting engagements", "Support different industries and domains", "Scale expert capacity without quality loss"].map((item, i) => (
                  <li key={i} className="flex gap-2 text-gray-300"><TrendingUp size={18} className="text-purple-500" /> {item}</li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Why Separate Brand */}
      <section className="py-24 bg-[#050505] relative overflow-hidden">
        <div className="max-w-4xl mx-auto px-6 text-center relative z-10">
          <h2 className="text-3xl font-bold mb-8">Why Vyombiz Exists as a Separate Brand</h2>

          <div className="flex flex-wrap justify-center gap-4 mb-12">
            <div className="px-6 py-3 bg-white/5 rounded-full border border-white/10"><span className="text-sm font-bold text-white">High Domain Expertise</span></div>
            <div className="px-6 py-3 bg-white/5 rounded-full border border-white/10"><span className="text-sm font-bold text-white">Structured Frameworks</span></div>
            <div className="px-6 py-3 bg-white/5 rounded-full border border-white/10"><span className="text-sm font-bold text-white">Strong Governance</span></div>
            <div className="px-6 py-3 bg-white/5 rounded-full border border-white/10"><span className="text-sm font-bold text-white">Consistent Standards</span></div>
          </div>

          <div className="p-8 rounded-3xl bg-gradient-to-r from-gray-900 to-black border border-white/10 shadow-2xl">
            <h3 className="text-2xl font-bold text-white mb-4">One Ecosystem. One Standard for Professional Execution.</h3>
            <div className="flex flex-col md:flex-row justify-center gap-8 mt-8 text-left md:text-center">
              <div>
                <span className="block text-gray-500 text-xs uppercase tracking-widest mb-1">Partners</span>
                <span className="text-xl font-bold text-white">Bring Opportunities</span>
              </div>
              <div>
                <span className="block text-gray-500 text-xs uppercase tracking-widest mb-1">ZRYOSS</span>
                <span className="text-xl font-bold text-orange-500">Runs the System</span>
              </div>
              <div>
                <span className="block text-gray-500 text-xs uppercase tracking-widest mb-1">Vyombiz</span>
                <span className="text-xl font-bold text-purple-500">Delivers Outcomes</span>
              </div>
            </div>
          </div>
        </div>

        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-purple-900/10 rounded-full blur-[120px] pointer-events-none"></div>
      </section>

    </div>
  );
};

export default Vyombiz;
