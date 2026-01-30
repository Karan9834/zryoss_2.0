import React, { useEffect } from "react";
import {
  Workflow,
  Headphones,
  ShieldCheck,
  Activity,
  XCircle,
  Users,
  CheckCircle2,
  TrendingUp,
  Layout,
  Briefcase,
  Monitor,
  HeartPulse,
  Home,
  GraduationCap,
  MessageSquare,
  ArrowRight,
  Target,
  FileSearch,
  Truck,
  Settings
} from "lucide-react";
import { Link } from "react-router-dom";
import FadeUp from "../../components/animations/FadeUp";

const SupportScope = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen bg-[#050505] text-white font-sans selection:bg-orange-500/30">

      {/* Background Glows */}
      <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-orange-500/10 blur-[150px] rounded-full -translate-y-1/2 translate-x-1/2 pointer-events-none" />
      <div className="absolute middle-0 left-0 w-[500px] h-[500px] bg-orange-500/5 blur-[130px] rounded-full translate-y-1/2 -translate-x-1/2 pointer-events-none" />

      {/* Hero Section */}
      <section className="relative pt-40 pb-24 overflow-hidden border-b border-white/5">
        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left Column: Content */}
            <div>
              <FadeUp>
                <div className="inline-flex items-center gap-2 text-orange-500 text-xs uppercase tracking-[0.45em] mb-6 font-bold">
                  <Workflow size={14} />
                  Execution & Support Model
                </div>
                <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold leading-[1.15] tracking-tight mb-5 text-white">
                  Centralized Execution. <br />
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-orange-600">
                    Structured Support.
                  </span>
                </h1>
                <p className="text-xl text-gray-400 leading-relaxed font-light mb-8">
                  Predictable Delivery. At Zryoss, execution and support are managed through a centralized operating system designed to deliver consistency, quality, and scale.
                </p>

                <div className="p-8 border border-white/10 bg-white/5 rounded-[24px] backdrop-blur-sm inline-block w-full shadow-2xl relative overflow-hidden group">
                  <div className="absolute inset-0 bg-gradient-to-r from-orange-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
                  <p className="text-lg text-gray-300 relative z-10 leading-relaxed italic">
                    "Partners focus on business growth. <strong className="text-white">Zryoss manages execution and support—end to end.</strong>"
                  </p>
                </div>
              </FadeUp>
            </div>

            {/* Right Column: Image */}
            <div className="relative hidden lg:block">
              <FadeUp delay={0.2}>
                <div className="absolute inset-0 bg-gradient-to-r from-orange-500/20 to-yellow-600/20 blur-3xl rounded-3xl transform rotate-3" />
                <img
                  src="/Execution Support Scope.png"
                  alt="Execution Support Scope"
                  className="relative rounded-3xl shadow-2xl border border-white/10 transform hover:scale-[1.02] transition-transform duration-500 object-cover w-full h-auto aspect-[4/3]"
                />
              </FadeUp>
            </div>
          </div>
        </div>
      </section>

      {/* Why Centralized & What Execution Means */}
      <section className="py-24 bg-[#0a0a0a]">
        <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-16">

          {/* Why Centralized */}
          <div>
            <h2 className="text-3xl font-bold mb-6">Why Execution & Support Are Centralized</h2>
            <p className="text-gray-400 mb-8">In most partnerships, problems arise because execution depends on individuals and support is informal.</p>

            <div className="space-y-4">
              {[
                "Execution depends on individuals",
                "Support is informal or reactive",
                "Vendors are unmanaged",
                "Quality varies with scale"
              ].map((item, i) => (
                <div key={i} className="flex items-center gap-3 text-gray-400">
                  <XCircle className="text-red-500 shrink-0" size={20} /> {item}
                </div>
              ))}
            </div>
            <div className="mt-8 p-4 bg-white/5 border-l-4 border-orange-500 rounded-r-xl">
              <p className="text-white italic">Zryoss eliminates this by owning execution responsibility and support structure at the system level.</p>
            </div>
          </div>

          {/* What Execution Means */}
          <div className="bg-[#111] p-8 rounded-3xl border border-white/5">
            <h2 className="text-2xl font-bold mb-6 flex items-center gap-3"><Activity className="text-orange-500" /> What "Execution" Means</h2>
            <ul className="space-y-4">
              {[
                "Requirement validation and scoping",
                "Execution routing to the correct domain brand",
                "Task planning and delivery coordination",
                "Vendor and team management",
                "Quality control and approvals",
                "Final delivery and stabilization"
              ].map((item, i) => (
                <li key={i} className="flex gap-3 text-gray-300">
                  <CheckCircle2 className="text-orange-500 shrink-0" size={20} />
                  {item}
                </li>
              ))}
            </ul>
            <p className="mt-8 text-sm text-gray-500 text-center">Execution is handled only through ecosystem execution brands.</p>
          </div>

        </div>
      </section>

      {/* Domain Based Execution */}
      <section className="py-24 bg-[#050505]">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-3xl font-bold text-center mb-16">Domain-Based Execution Model</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { icon: Monitor, brand: "Kryoss Softech", domain: "Technology" },
              { icon: Users, brand: "Clink HR", domain: "HR & Recruitment" },
              { icon: Briefcase, brand: "Vyombiz", domain: "Business Services" },
              { icon: Layout, brand: "Adkryoss", domain: "Digital Marketing" },
              { icon: GraduationCap, brand: "Edulinkers", domain: "Education Software" },
              { icon: HeartPulse, brand: "Medikryoss", domain: "Healthcare Software" },
              { icon: Home, brand: "Kryoss Interiors", domain: "Interiors & Infra" },
              { icon: MessageSquare, brand: "Clink Admission", domain: "Admissions & Consular" }
            ].map((item, i) => (
              <div key={i} className="bg-[#111] p-6 rounded-2xl border border-white/5 flex flex-col items-center text-center hover:border-blue-500/30 transition-all group">
                <item.icon className="text-blue-500 mb-4 group-hover:scale-110 transition-transform" size={32} />
                <h3 className="font-bold text-white mb-1 text-lg">{item.brand}</h3>
                <p className="text-xs text-blue-400 uppercase tracking-widest">{item.domain}</p>
              </div>
            ))}
          </div>
          <p className="text-center text-gray-400 mt-12">Partners never choose vendors or teams. The system assigns execution automatically.</p>
        </div>
      </section>

      {/* Support & Flow */}
      <section className="py-24 bg-[#0a0a0a]">
        <div className="max-w-7xl mx-auto px-6 space-y-24">

          {/* Support */}
          <div>
            <h2 className="text-3xl font-bold text-center mb-12">What "Support" Means at Zryoss</h2>
            <div className="grid md:grid-cols-3 gap-8">
              {[
                "Pre-sales and demo support",
                "Client onboarding coordination",
                "Account management"
              ].map((item, i) => (
                <div key={i} className="bg-[#050505] p-6 rounded-xl border border-white/5 text-center">
                  <Headphones className="mx-auto text-orange-500 mb-4" />
                  <p className="font-medium text-white">{item}</p>
                </div>
              ))}
              {[
                "Execution tracking and updates",
                "Issue escalation and resolution",
                "Ongoing operational assistance"
              ].map((item, i) => (
                <div key={i} className="bg-[#050505] p-6 rounded-xl border border-white/5 text-center">
                  <Settings className="mx-auto text-orange-500 mb-4" />
                  <p className="font-medium text-white">{item}</p>
                </div>
              ))}
            </div>
            <p className="text-center text-gray-500 mt-8">Support exists throughout the business lifecycle, not just at the end.</p>
          </div>

          {/* Flow */}
          <div className="bg-[#050505] p-12 rounded-3xl border border-white/5 relative overflow-hidden">
            <h2 className="text-3xl font-bold text-center mb-16">Execution & Support Flow (End-to-End)</h2>

            {/* Timeline Line */}
            <div className="hidden lg:block absolute top-1/2 left-0 w-full h-1 bg-gradient-to-r from-transparent via-orange-500/20 to-transparent -translate-y-1/2"></div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 relative z-10">
              {[
                { title: "Acquisition", icon: Users },
                { title: "Validation", icon: FileSearch },
                { title: "Demo/Pre-sales", icon: Layout },
                { title: "Assignment", icon: Workflow },
                { title: "Delivery", icon: Truck },
                { title: "Quality Check", icon: ShieldCheck },
                { title: "Coordination", icon: MessageSquare },
                { title: "Post-Support", icon: Headphones }
              ].map((step, i) => (
                <div key={i} className="bg-[#111] p-4 rounded-xl border border-white/10 text-center flex flex-col items-center">
                  <div className="w-8 h-8 rounded-full bg-orange-500 flex items-center justify-center text-black font-bold mb-3">{i + 1}</div>
                  <step.icon className="text-gray-400 mb-2" size={20} />
                  <h4 className="text-sm font-bold text-white">{step.title}</h4>
                </div>
              ))}
            </div>
            <p className="text-center text-orange-500 font-medium mt-12">This flow remains consistent—regardless of scale.</p>
          </div>

        </div>
      </section>

      {/* What Partners Do NOT Handle */}
      <section className="py-24 bg-[#050505]">
        <div className="max-w-4xl mx-auto px-6">
          <div className="bg-red-500/5 border border-red-500/10 rounded-3xl p-10 text-center">
            <h2 className="text-3xl font-bold mb-8 text-white">What Partners Do NOT Handle</h2>
            <div className="grid md:grid-cols-3 gap-6 text-left">
              {[
                "Delivery execution",
                "Vendor/freelancer mgmt",
                "Technical coordination",
                "Quality enforcement",
                "Internal follow-ups",
                "Escalation handling"
              ].map((item, i) => (
                <div key={i} className="flex items-center gap-3 text-red-100">
                  <XCircle className="text-red-500 shrink-0" size={20} /> {item}
                </div>
              ))}
            </div>
            <p className="text-white mt-8 font-bold">These are system responsibilities, not partner tasks.</p>
          </div>
        </div>
      </section>

      {/* Dedicated Support & Quality */}
      <section className="py-24 bg-[#0a0a0a]">
        <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-16">
          {/* Dedicated Support */}
          <div>
            <h2 className="text-3xl font-bold mb-6">Dedicated Account Support</h2>
            <p className="text-gray-400 mb-6">Each partner is supported through a defined account management layer, single-point coordination, and structured communication.</p>
            <div className="bg-[#111] p-6 rounded-xl border border-white/5">
              <h4 className="text-white font-bold mb-4">This prevents:</h4>
              <ul className="space-y-3 text-gray-400">
                <li className="flex gap-2"><CheckCircle2 className="text-green-500" /> Miscommunication</li>
                <li className="flex gap-2"><CheckCircle2 className="text-green-500" /> Execution gaps</li>
                <li className="flex gap-2"><CheckCircle2 className="text-green-500" /> Dependency on individuals</li>
              </ul>
            </div>
          </div>

          {/* Quality */}
          <div>
            <h2 className="text-3xl font-bold mb-6">Quality & Accountability</h2>
            <p className="text-gray-400 mb-6">Execution and support are governed through defined SLAs, quality checkpoints, and vendor evaluations.</p>
            <div className="bg-[#111] p-6 rounded-xl border border-white/5">
              <h4 className="text-white font-bold mb-4">If something goes wrong:</h4>
              <ul className="space-y-3 text-gray-400">
                <li className="flex gap-2"><ShieldCheck className="text-blue-500" /> Responsibility stays with the system</li>
                <li className="flex gap-2"><ShieldCheck className="text-blue-500" /> Escalation is structured</li>
                <li className="flex gap-2"><ShieldCheck className="text-blue-500" /> Resolution is enforced</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Scaling & Why it Works */}
      <section className="py-24 bg-[#050505]">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <h2 className="text-3xl font-bold mb-12">Why This Model Works</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="p-8 bg-[#111] rounded-2xl border border-white/5">
              <TrendingUp className="text-green-500 mx-auto mb-4" size={32} />
              <h3 className="text-xl font-bold text-white mb-2">Scales Safely</h3>
              <p className="text-sm text-gray-400">Execution capacity scales through brands without overloading partners.</p>
            </div>
            <div className="p-8 bg-[#111] rounded-2xl border border-white/5">
              <ShieldCheck className="text-blue-500 mx-auto mb-4" size={32} />
              <h3 className="text-xl font-bold text-white mb-2">Protects Trust</h3>
              <p className="text-sm text-gray-400">Maintains consistent delivery quality and protects brand integrity.</p>
            </div>
            <div className="p-8 bg-[#111] rounded-2xl border border-white/5">
              <Target className="text-orange-500 mx-auto mb-4" size={32} />
              <h3 className="text-xl font-bold text-white mb-2">Removes Stress</h3>
              <p className="text-sm text-gray-400">Removes operational stress so partners can focus on growth.</p>
            </div>
          </div>

          <div className="mt-16 bg-white/5 inline-block p-10 rounded-3xl border border-white/10">
            <h3 className="text-2xl font-bold text-white mb-2">One Promise. One System.</h3>
            <p className="text-gray-400 mb-6">Zryoss does not promise speed without structure. It promises execution with accountability.</p>
            <p className="text-orange-500 font-bold">A system stands behind every commitment.</p>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-24 bg-gradient-to-b from-[#050505] to-[#111] relative overflow-hidden text-center">
        <div className="max-w-4xl mx-auto px-6 relative z-10">
          <h2 className="text-4xl font-bold mb-8">Your Business in Front. A System Behind You.</h2>
          <p className="text-xl text-gray-400 mb-12">Execution and support are not optional layers at Zryoss. They are the core reason partnerships work.</p>

          <div className="flex justify-center items-center gap-12 mb-12">
            <div className="text-center">
              <div className="text-4xl font-bold text-white mb-2">You</div>
              <div className="text-sm text-gray-500 uppercase tracking-widest">Grow the Market</div>
            </div>
            <div className="h-12 w-px bg-white/10"></div>
            <div className="text-center">
              <div className="text-4xl font-bold text-orange-500 mb-2">Zryoss</div>
              <div className="text-sm text-gray-500 uppercase tracking-widest">Runs the Execution</div>
            </div>
          </div>

          <div className="flex flex-col sm:flex-row justify-center gap-6">
            <Link to="/apply" className="px-8 py-4 bg-orange-500 text-white font-bold rounded-full hover:bg-orange-600 transition-colors flex items-center gap-2">
              Partner With Zryoss <ArrowRight size={20} />
            </Link>
          </div>
        </div>
      </section>

    </div>
  );
};

export default SupportScope;
