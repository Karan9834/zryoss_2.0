import React, { useEffect } from "react";
import {
  Users,
  UserCheck,
  Briefcase,
  ShieldCheck,
  Workflow,
  Network,
  Clock,
  ArrowRight,
  Target,
  FileCheck,
  Layers,
  Scale
} from "lucide-react";
import { Link } from "react-router-dom";

const ClinkHR = () => {
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
          <div className="absolute bottom-[10%] left-[-10%] w-[400px] h-[400px] bg-green-600/5 rounded-full blur-[100px]" />
          <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1556761175-5973dc0f32e7?q=80&w=2664&auto=format&fit=crop')] bg-cover bg-center opacity-10 mix-blend-overlay"></div>
        </div>

        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <div className="flex flex-col lg:flex-row items-center gap-16">
            <div className="lg:w-1/2">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-green-500/30 bg-green-500/10 text-green-400 text-sm font-medium mb-6">
                <Users size={14} />
                Recruitment & HR Execution Brand
              </div>
              <h1 className="text-5xl md:text-7xl font-bold tracking-tight leading-tight mb-8">
                Clink <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-green-500 to-emerald-400">
                  HR
                </span>
              </h1>
              <h2 className="text-2xl text-white/80 font-medium mb-6">
                Recruitment & HR Execution Brand of the Zryoss Ecosystem
              </h2>
              <p className="text-xl text-gray-400 leading-relaxed max-w-xl mb-10">
                Clink HR is the dedicated execution engine responsible for managing and delivering all hiring, recruitment, and HR-related services brought into the ecosystem by IPPs and BPPs.
              </p>

              <div className="p-6 border border-white/10 bg-white/5 rounded-2xl backdrop-blur-sm inline-block w-full max-w-lg">
                <div className="flex items-center gap-4">
                  <div className="h-10 w-1 bg-orange-500 rounded-full"></div>
                  <p className="text-lg text-gray-200 italic">
                    "Whenever an IPP or BPP operates in the recruitment or HR vertical, <span className="text-white font-bold">execution is centrally managed by Clink HR</span>."
                  </p>
                </div>
              </div>
            </div>

            <div className="lg:w-1/2 relative">
              <div className="relative rounded-3xl overflow-hidden border border-white/10 shadow-2xl group">
                <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent z-10"></div>
                <img
                  src="/clink_hr_hero_ai.png"
                  alt="AI HR Execution"
                  className="w-full h-auto object-cover transform group-hover:scale-105 transition-transform duration-700 opacity-90"
                  onError={(e) => { e.target.src = 'https://images.unsplash.com/photo-1521737604893-d14cc237f11d?q=80&w=2684&auto=format&fit=crop' }}
                />

                <div className="absolute bottom-8 left-8 right-8 z-20">
                  <div className="flex items-center justify-between">
                    <div className="flex gap-2">
                      <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse"></span>
                      <span className="text-xs font-mono text-green-500">HIRING ACTIVE</span>
                    </div>
                    <UserCheck className="text-white/50" />
                  </div>
                </div>
              </div>

              {/* Floating Elements */}
              <div className="absolute -top-10 -right-10 w-32 h-32 bg-green-500/20 rounded-full blur-3xl animate-pulse"></div>
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
              <h2 className="text-3xl md:text-4xl font-bold mb-6">Role of Clink HR <br /> in the Ecosystem</h2>
              <p className="text-lg text-gray-400 mb-8 leading-relaxed">
                Clink HR functions as the dedicated HR and talent execution engine of the ecosystem. Its role is to ensure structured, compliant, and timely hiring processes.
              </p>

              <div className="grid grid-cols-1 gap-4">
                {[
                  "Hiring processes are structured",
                  "Delivery timelines are met",
                  "Compliance and quality are maintained",
                  "IPPs and BPPs never manage recruitment chaos"
                ].map((item, i) => (
                  <div key={i} className="flex items-center gap-3 p-3 bg-white/5 rounded-xl border border-white/5">
                    <ShieldCheck className="text-green-500 w-5 h-5 shrink-0" />
                    <span className="text-gray-200 text-sm font-medium">{item}</span>
                  </div>
                ))}
              </div>

              <p className="mt-8 text-sm text-gray-500 flex items-center gap-2">
                <Workflow size={16} className="text-orange-500" />
                ZRYOSS governs the system. Clink HR executes HR delivery.
              </p>
            </div>
            <div className="md:w-1/2">
              <div className="p-8 bg-[#0f0f0f] rounded-3xl border border-white/5 h-full flex flex-col justify-center relative overflow-hidden">
                <Target className="text-green-900/20 absolute -right-10 -bottom-10 w-64 h-64" />
                <h3 className="text-2xl font-bold text-white mb-6 z-10">What Clink HR Executes</h3>
                <ul className="space-y-4 z-10">
                  {[
                    "Recruitment and talent acquisition",
                    "Permanent and contractual hiring",
                    "Industry-specific staffing solutions",
                    "HR operations and compliance support",
                    "Workforce planning and coordination"
                  ].map((item, i) => (
                    <li key={i} className="flex items-start gap-3">
                      <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-green-500 shrink-0"></span>
                      <span className="text-gray-300">{item}</span>
                    </li>
                  ))}
                </ul>
                <p className="mt-8 text-xs text-gray-500 z-10 border-t border-white/5 pt-4">All services follow ZRYOSS-defined operating standards.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Routing Process */}
      <section className="py-24 bg-[#050505]">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-3xl font-bold text-center mb-16">How Work Reaches Clink HR</h2>

          <div className="relative">
            {/* Line */}
            <div className="hidden md:block absolute top-[50%] left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-green-500/50 to-transparent -translate-y-1/2 z-0"></div>

            <div className="grid grid-cols-1 md:grid-cols-7 gap-4 relative z-10">
              {[
                { step: "1", title: "Client", desc: "IPP/BPP acquires client" },
                { step: "2", title: "Validation", desc: "ZRYOSS checks scope" },
                { step: "3", title: "Assignment", desc: "Assigned to Clink HR" },
                { step: "4", title: "Planning", desc: "Delivery execution plan" },
                { step: "5", title: "Coordination", desc: "Vendors & recruiters" },
                { step: "6", title: "Monitoring", desc: "Quality & timelines" },
                { step: "7", title: "Delivery", desc: "Completion" }
              ].map((item, i) => (
                <div key={i} className="flex flex-col items-center text-center group">
                  <div className="w-14 h-14 rounded-full bg-[#111] border border-white/20 flex items-center justify-center text-lg font-bold text-white mb-4 shadow-lg relative overflow-hidden transition-all group-hover:border-green-500 group-hover:scale-110">
                    <span className="relative z-10">{item.step}</span>
                    <div className="absolute inset-0 bg-green-500/20 opacity-0 group-hover:opacity-100 transition-opacity"></div>
                  </div>
                  <h3 className="text-xs font-bold text-white mb-1">{item.title}</h3>
                  <p className="text-[10px] text-gray-500 max-w-[100px]">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="mt-12 text-center">
            <p className="text-gray-400 text-sm">IPP or BPP never directly manages recruiters or vendors.</p>
          </div>
        </div>
      </section>

      {/* Vendor & Accountability */}
      <section className="py-24 bg-[#080808]">
        <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-16">

          {/* Vendor Management */}
          <div>
            <h3 className="text-2xl font-bold mb-6 flex items-center gap-3">
              <Network className="text-orange-500" />
              Vendor & Recruiter Management
            </h3>
            <div className="bg-[#0a0a0a] p-8 rounded-3xl border border-white/10 mb-8 h-full">
              <p className="text-gray-400 mb-6">Clink HR manages recruitment vendors, hiring partners, and industry-specific recruiters.</p>
              <div className="space-y-4">
                <div className="flex items-center gap-4 p-4 bg-[#111] rounded-xl border border-white/5">
                  <div className="bg-green-500/10 p-2 rounded-lg text-green-500"><ShieldCheck size={20} /></div>
                  <div>
                    <h4 className="font-bold text-white text-sm">Under Supervision</h4>
                    <p className="text-xs text-gray-500">All vendors operate under Clink HR.</p>
                  </div>
                </div>
                <div className="flex items-center gap-4 p-4 bg-[#111] rounded-xl border border-white/5">
                  <div className="bg-green-500/10 p-2 rounded-lg text-green-500"><FileCheck size={20} /></div>
                  <div>
                    <h4 className="font-bold text-white text-sm">Defined SLAs</h4>
                    <p className="text-xs text-gray-500">Strict quality benchmarks.</p>
                  </div>
                </div>
                <div className="flex items-center gap-4 p-4 bg-[#111] rounded-xl border border-white/5">
                  <div className="bg-green-500/10 p-2 rounded-lg text-green-500"><Layers size={20} /></div>
                  <div>
                    <h4 className="font-bold text-white text-sm">System Integrated</h4>
                    <p className="text-xs text-gray-500">Through ZRYOSS Operating System.</p>
                  </div>
                </div>
              </div>
              <p className="mt-6 text-sm text-green-400 font-medium">Ensures controlled hiring outcomes.</p>
            </div>
          </div>

          {/* Accountability */}
          <div>
            <h3 className="text-2xl font-bold mb-6 flex items-center gap-3">
              <Scale className="text-orange-500" />
              Quality, Compliance & Accountability
            </h3>
            <div className="bg-[#0a0a0a] p-8 rounded-3xl border border-white/10 h-full">
              <div className="grid grid-cols-1 gap-6">
                {[
                  { title: "Defined Processes", desc: "Structured hiring workflows." },
                  { title: "Compliance-Aligned", desc: "Legal and regulatory adherence." },
                  { title: "Candidate Quality Checks", desc: "Rigorous screening standards." },
                  { title: "Performance Monitoring", desc: "Timeline tracking." }
                ].map((item, i) => (
                  <div key={i} className="flex justify-between items-center border-b border-white/5 pb-4 last:border-0 last:pb-0">
                    <h4 className="font-bold text-gray-200">{item.title}</h4>
                    <span className="text-sm text-gray-500">{item.desc}</span>
                  </div>
                ))}
              </div>
              <div className="mt-8 p-4 bg-orange-900/10 border border-orange-500/20 rounded-xl text-center">
                <p className="text-orange-400 text-sm font-medium">Execution is reviewed continuously—not after failures.</p>
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
            <div className="border-l-4 border-green-500 pl-8">
              <h3 className="text-2xl font-bold mb-6 text-white">Relationship with IPP & BPP</h3>
              <div className="space-y-6">
                <div className="group hover:bg-white/5 p-4 rounded-xl transition-colors">
                  <h4 className="text-white font-bold text-sm uppercase tracking-wide mb-1">IPP / BPP</h4>
                  <p className="text-gray-400">Focuses on client relationships.</p>
                </div>
                <div className="group hover:bg-white/5 p-4 rounded-xl transition-colors">
                  <h4 className="text-green-500 font-bold text-sm uppercase tracking-wide mb-1">Clink HR</h4>
                  <p className="text-gray-400">Manages hiring execution.</p>
                </div>
                <div className="group hover:bg-white/5 p-4 rounded-xl transition-colors">
                  <h4 className="text-orange-500 font-bold text-sm uppercase tracking-wide mb-1">ZRYOSS</h4>
                  <p className="text-gray-400">Coordinates operations and governance.</p>
                </div>
              </div>
            </div>

            {/* Scalability */}
            <div className="border-l-4 border-orange-500 pl-8">
              <h3 className="text-2xl font-bold mb-6 text-white">Scalability Across Industries</h3>
              <p className="text-gray-400 mb-6">Clink HR is designed to support:</p>
              <ul className="space-y-3 mb-6 block">
                {["Multiple hiring mandates simultaneously", "Different industries and skill sets", "Growing volumes without delivery breakdown", "Rapid execution capacity scaling"].map((item, i) => (
                  <li key={i} className="flex gap-2 text-gray-300"><Clock size={18} className="text-orange-500" /> {item}</li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Why Separate Brand */}
      <section className="py-24 bg-[#050505] relative overflow-hidden">
        <div className="max-w-4xl mx-auto px-6 text-center relative z-10">
          <h2 className="text-3xl font-bold mb-8">Why Clink HR Exists as a Separate Brand</h2>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-12">
            <div className="p-4 bg-white/5 rounded-xl border border-white/5"><h4 className="font-bold text-white text-sm">Process Discipline</h4></div>
            <div className="p-4 bg-white/5 rounded-xl border border-white/5"><h4 className="font-bold text-white text-sm">Compliance Awareness</h4></div>
            <div className="p-4 bg-white/5 rounded-xl border border-white/5"><h4 className="font-bold text-white text-sm">Talent Network Depth</h4></div>
            <div className="p-4 bg-white/5 rounded-xl border border-white/5"><h4 className="font-bold text-white text-sm">Execution Capability</h4></div>
          </div>

          <div className="p-8 rounded-3xl bg-gradient-to-r from-gray-900 to-black border border-white/10 shadow-2xl">
            <h3 className="text-2xl font-bold text-white mb-4">One Ecosystem. One HR Execution Standard.</h3>
            <div className="flex flex-col md:flex-row justify-center gap-8 mt-8 text-left md:text-center">
              <div>
                <span className="block text-gray-500 text-xs uppercase tracking-widest mb-1">Partners</span>
                <span className="text-xl font-bold text-white">Build Relationships</span>
              </div>
              <div>
                <span className="block text-gray-500 text-xs uppercase tracking-widest mb-1">ZRYOSS</span>
                <span className="text-xl font-bold text-orange-500">Governs Execution</span>
              </div>
              <div>
                <span className="block text-gray-500 text-xs uppercase tracking-widest mb-1">Clink HR</span>
                <span className="text-xl font-bold text-green-500">Delivers Talent</span>
              </div>
            </div>
          </div>
        </div>

        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-green-600/5 rounded-full blur-[120px] pointer-events-none"></div>
      </section>

    </div>
  );
};

export default ClinkHR;
