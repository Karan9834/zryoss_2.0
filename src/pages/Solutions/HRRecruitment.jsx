import React, { useEffect } from "react";
import {
  Users,
  Briefcase,
  CheckCircle2,
  Clock,
  ShieldCheck,
  TrendingUp,
  ArrowRight,
  UserCheck,
  Building2,
  FileText,
  Search,
  Scale,
  Zap,
  Globe,
  Layout,
  Network
} from "lucide-react";
import { Link } from "react-router-dom";

const HRRecruitment = () => {
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
          <div className="absolute bottom-[10%] left-[-10%] w-[400px] h-[400px] bg-red-600/5 rounded-full blur-[100px]" />
          {/* Hero Image Overlay */}
          <div className="absolute inset-0 z-0 opacity-20 bg-[url('/hr_recruitment_hero.jpg')] bg-cover bg-center mix-blend-screen" />
        </div>

        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left Column: Content */}
            <div>
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-orange-500/30 bg-orange-500/10 text-orange-400 text-sm font-medium mb-6">
                <Users size={14} />
                Delivered Through Clink HR & Verified Partners
              </div>
              <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white leading-[1.15] tracking-tight mb-5">
                HR & Recruitment <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-500 to-white">
                  Solutions
                </span>
              </h1>
              <h2 className="text-2xl text-white/80 font-medium mb-6">
                Talent Acquisition & Workforce Solutions — Delivered Through a Central System
              </h2>
              <p className="text-xl text-gray-400 leading-relaxed mb-10">
                The HR & Recruitment Solutions offered by Zryoss are designed to help organizations hire, manage, and scale talent efficiently—without fragmented agencies, inconsistent quality, or operational overhead.
              </p>

              <div className="p-6 border border-white/10 bg-white/5 rounded-2xl backdrop-blur-sm inline-block w-full">
                <p className="text-lg text-gray-200">
                  Execution is delivered through <span className="text-white font-bold">Clink HR</span> and its verified recruitment network, governed centrally by the Zryoss platform.
                </p>
              </div>
            </div>

            {/* Right Column: Image */}
            <div className="relative hidden lg:block">
              <div className="absolute inset-0 bg-gradient-to-r from-orange-500/20 to-red-500/20 blur-3xl rounded-3xl transform rotate-3" />
              <img
                src="/solution-hero-images/hr.jpg"
                alt="HR & Recruitment Solutions"
                className="relative rounded-3xl shadow-2xl border border-white/10 transform hover:scale-[1.02] transition-transform duration-500 object-cover w-full h-auto aspect-[4/3]"
              />
            </div>
          </div>
        </div>
      </section>

      {/* The Problem Section */}
      <section className="py-24 bg-[#0a0a0a]">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex flex-col md:flex-row gap-16">
            <div className="md:w-1/3">
              <h2 className="text-3xl font-bold mb-6">Why Traditional Recruitment <br /> Fails at Scale</h2>
              <p className="text-gray-400 text-lg mb-8">
                Most businesses face recurring HR challenges when relying on fragmented providers.
              </p>
              <div className="h-1 w-20 bg-gradient-to-r from-orange-500 to-white rounded-full"></div>
            </div>

            <div className="md:w-2/3 grid grid-cols-1 sm:grid-cols-2 gap-4">
              {[
                "Inconsistent candidate quality",
                "Long hiring cycles",
                "Multiple agencies with no accountability",
                "Poor coordination between hiring managers and recruiters",
                "High attrition due to role mismatch"
              ].map((problem, idx) => (
                <div key={idx} className="p-5 rounded-2xl bg-[#0f0f0f] border border-red-500/10 flex items-start gap-4 hover:bg-[#121212] transition-colors">
                  <div className="p-2 bg-red-500/10 rounded-lg">
                    <Zap className="text-red-500 shrink-0" size={20} />
                  </div>
                  <span className="text-gray-300 pt-1">{problem}</span>
                </div>
              ))}

              <div className="p-5 rounded-2xl bg-gradient-to-br from-gray-900 to-black border border-white/10 flex items-center justify-center text-center col-span-1 sm:col-span-2">
                <p className="text-white italic">
                  "Zryoss addresses these issues by systematizing recruitment and HR execution."
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Differentiation Section */}
      <section className="py-24 bg-[#050505] relative">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold mb-6">What Makes Zryoss <br /> HR Solutions Different</h2>
            <p className="text-xl text-gray-400">
              Zryoss does not act as a standalone recruitment agency.<br />
              It provides <span className="text-white font-semibold">platform-governed HR execution</span>.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { title: "Standardized Workflows", desc: "Hiring workflows are standardized for consistency.", icon: <Layout size={24} /> },
              { title: "Validated Quality", desc: "Candidate quality is validated before reaching you.", icon: <UserCheck size={24} /> },
              { title: "Centralized Communication", desc: "All communication is centralized in one place.", icon: <Network size={24} /> },
              { title: "Defined Accountability", desc: "Accountability is clearly defined for every role.", icon: <ShieldCheck size={24} /> }
            ].map((item, i) => (
              <div key={i} className="p-8 rounded-3xl border border-white/10 bg-[#0a0a0a] hover:border-orange-500/30 transition-all group">
                <div className="w-12 h-12 rounded-full bg-orange-500/10 flex items-center justify-center text-orange-500 mb-6 group-hover:scale-110 transition-transform">
                  {item.icon}
                </div>
                <h3 className="text-xl font-bold mb-3">{item.title}</h3>
                <p className="text-gray-400 text-sm">{item.desc}</p>
              </div>
            ))}
          </div>

          <div className="mt-12 p-8 rounded-3xl border border-orange-500/20 bg-gradient-to-br from-orange-900/10 to-transparent flex flex-col justify-center items-center text-center max-w-3xl mx-auto">
            <h3 className="text-xl font-bold text-orange-500 mb-2">The Result</h3>
            <p className="text-white text-lg font-medium">Clients receive predictable hiring outcomes, not random profiles.</p>
          </div>
        </div>
      </section>

      {/* Core Offerings */}
      <section className="py-20 bg-[#080808]">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-3xl md:text-4xl font-bold mb-12">Core HR & Recruitment Offerings</h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">

            {/* Talent Acquisition */}
            <div className="group p-8 rounded-3xl bg-[#0e0e0e] border border-white/5 hover:border-orange-500/30 transition-colors">
              <Briefcase className="text-orange-500 mb-6" size={40} />
              <h3 className="text-2xl font-bold mb-4">Talent Acquisition & Staffing</h3>
              <div className="grid sm:grid-cols-2 gap-4">
                <ul className="space-y-3 text-gray-400">
                  <li className="flex items-center gap-2"><span className="w-1.5 h-1.5 bg-orange-500 rounded-full"></span> Permanent hiring</li>
                  <li className="flex items-center gap-2"><span className="w-1.5 h-1.5 bg-orange-500 rounded-full"></span> Role-based talent sourcing</li>
                </ul>
                <ul className="space-y-3 text-gray-400">
                  <li className="flex items-center gap-2"><span className="w-1.5 h-1.5 bg-orange-500 rounded-full"></span> Contract and project-based staffing</li>
                  <li className="flex items-center gap-2"><span className="w-1.5 h-1.5 bg-orange-500 rounded-full"></span> Startup and scale-up hiring</li>
                </ul>
              </div>
            </div>

            {/* Bulk & Volume Hiring */}
            <div className="group p-8 rounded-3xl bg-[#0e0e0e] border border-white/5 hover:border-orange-500/30 transition-colors">
              <Users className="text-orange-500 mb-6" size={40} />
              <h3 className="text-2xl font-bold mb-4">Bulk & Volume Hiring</h3>
              <ul className="space-y-3 text-gray-400">
                <li className="flex items-start gap-2"><span className="text-orange-500 mt-1">•</span> Campus and fresher hiring</li>
                <li className="flex items-start gap-2"><span className="text-orange-500 mt-1">•</span> Volume recruitment for operations teams</li>
                <li className="flex items-start gap-2"><span className="text-orange-500 mt-1">•</span> Fast-scaling workforce support</li>
              </ul>
            </div>

            {/* Specialized & Niche Hiring */}
            <div className="group p-8 rounded-3xl bg-[#0e0e0e] border border-white/5 hover:border-orange-500/30 transition-colors">
              <Search className="text-orange-500 mb-6" size={40} />
              <h3 className="text-2xl font-bold mb-4">Specialized & Niche Hiring</h3>
              <div className="grid sm:grid-cols-2 gap-4">
                <ul className="space-y-3 text-gray-400">
                  <li className="flex items-start gap-2"><span className="text-orange-500 mt-1">•</span> Technology roles</li>
                  <li className="flex items-start gap-2"><span className="text-orange-500 mt-1">•</span> Sales and growth roles</li>
                </ul>
                <ul className="space-y-3 text-gray-400">
                  <li className="flex items-start gap-2"><span className="text-orange-500 mt-1">•</span> Domain-specific professionals</li>
                  <li className="flex items-start gap-2"><span className="text-orange-500 mt-1">•</span> Leadership and mid-management</li>
                </ul>
              </div>
            </div>

            {/* HR Process Support */}
            <div className="group p-8 rounded-3xl bg-[#0e0e0e] border border-white/5 hover:border-orange-500/30 transition-colors">
              <FileText className="text-orange-500 mb-6" size={40} />
              <h3 className="text-2xl font-bold mb-4">HR Process Support</h3>
              <ul className="space-y-3 text-gray-400">
                <li className="flex items-start gap-2"><span className="text-orange-500 mt-1">•</span> Hiring workflow alignment</li>
                <li className="flex items-start gap-2"><span className="text-orange-500 mt-1">•</span> Interview coordination</li>
                <li className="flex items-start gap-2"><span className="text-orange-500 mt-1">•</span> Offer management support</li>
                <li className="flex items-start gap-2"><span className="text-orange-500 mt-1">•</span> Joining and onboarding assistance</li>
              </ul>
            </div>

          </div>
        </div>
      </section>

      {/* Delivery Process */}
      <section className="py-24 relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-16">
            How Zryoss Delivers <br /><span className="text-orange-500">HR & Recruitment Solutions</span>
          </h2>

          <div className="relative">
            {/* Connecting Line (Desktop) */}
            <div className="hidden md:block absolute top-12 left-0 w-full h-0.5 bg-gradient-to-r from-transparent via-orange-500/30 to-transparent" />

            <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-7 gap-4 relative z-10">
              {[
                "Hiring requirement is validated",
                "Role scope & timelines defined",
                "Execution routed to Clink HR",
                "Sourcing & screening begin",
                "Shortlists reviewed & refined",
                "Interviews are coordinated",
                "Final selection & onboarding"
              ].map((step, i) => (
                <div key={i} className="flex flex-col items-center text-center group">
                  <div className="w-20 h-20 rounded-full bg-[#111] border border-white/10 group-hover:border-orange-500 flex items-center justify-center font-bold text-2xl mb-6 z-10 shadow-lg transition-colors overflow-hidden relative">
                    <span className="text-white group-hover:text-orange-500 transition-colors z-10">{i + 1}</span>
                    <div className="absolute inset-0 bg-orange-500/10 opacity-0 group-hover:opacity-100 transition-opacity" />
                  </div>
                  <h3 className="text-sm font-medium text-gray-300 mb-2 max-w-[150px]">{step}</h3>
                </div>
              ))}
            </div>
          </div>

          <div className="mt-16 text-center">
            <p className="text-lg text-gray-400">All steps are tracked and managed centrally.</p>
          </div>
        </div>
      </section>

      {/* Quality & Governance */}
      <section className="py-20 bg-[#0a0a0a]">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex flex-col lg:flex-row items-center gap-16">
            <div className="lg:w-1/2">
              <h2 className="text-3xl md:text-4xl font-bold mb-6">Platform-Governed <span className="text-orange-500">Quality Control</span></h2>
              <p className="text-xl text-gray-400 mb-8">Recruitment performance is measured and optimized, not assumed.</p>

              <div className="space-y-6">
                {[
                  "Role-fit validation",
                  "Candidate quality checks",
                  "Delivery timelines",
                  "Feedback and improvement loops"
                ].map((item, i) => (
                  <div key={i} className="flex items-center gap-4 p-4 rounded-xl bg-[#111] border border-white/5">
                    <ShieldCheck className="text-orange-500 shrink-0" />
                    <span className="text-gray-200">{item}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="lg:w-1/2 grid grid-cols-1 gap-4">
              <div className="p-8 rounded-3xl bg-[#0f0f0f] border border-white/5">
                <h3 className="text-xl font-bold mb-6 text-white text-center">Solutions for Different Business Stages</h3>
                <div className="space-y-6">
                  <div className="border-l-2 border-orange-500 pl-4">
                    <h4 className="font-bold text-white">Startups</h4>
                    <p className="text-sm text-gray-400">Founding team hiring, Early growth roles, Cost-efficient recruitment models.</p>
                  </div>
                  <div className="border-l-2 border-orange-500 pl-4">
                    <h4 className="font-bold text-white">Growing Businesses</h4>
                    <p className="text-sm text-gray-400">Team expansion support, Sales and operations hiring, Hiring process stabilization.</p>
                  </div>
                  <div className="border-l-2 border-orange-500 pl-4">
                    <h4 className="font-bold text-white">Enterprises</h4>
                    <p className="text-sm text-gray-400">Volume and specialized hiring, Structured recruitment workflows, SLA-driven execution.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="mt-16 p-8 rounded-3xl bg-[#111] border border-white/5 text-center">
            <h3 className="text-xl font-bold text-white mb-4">Compliance & Professional Standards</h3>
            <div className="flex flex-wrap justify-center gap-8 text-gray-400">
              <span className="flex items-center gap-2"><Scale size={16} className="text-orange-500" /> Ethical hiring practices</span>
              <span className="flex items-center gap-2"><Scale size={16} className="text-orange-500" /> Defined engagement terms</span>
              <span className="flex items-center gap-2"><Scale size={16} className="text-orange-500" /> Platform-governed processes</span>
            </div>
            <p className="mt-4 text-sm text-gray-500">This protects both employer and candidate trust.</p>
          </div>
        </div>
      </section>

      {/* Client Experience & Scale */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-12">
          <div>
            <h3 className="text-2xl font-bold mb-6 text-orange-500">Client Experience</h3>
            <p className="text-gray-300 mb-6 font-medium text-lg">Clients benefit from:</p>
            <ul className="space-y-3">
              {["One coordination point", "Clear hiring timelines", "Reduced dependency on multiple agencies", "Transparent progress updates", "Consistent candidate quality"].map((item, i) => (
                <li key={i} className="flex items-center gap-3 text-gray-400">
                  <CheckCircle2 size={16} className="text-orange-500" />
                  {item}
                </li>
              ))}
            </ul>
            <p className="text-gray-300 mt-6 italic">HR teams spend less time chasing—and more time selecting the right talent.</p>
          </div>

          <div>
            <h3 className="text-2xl font-bold mb-6 text-orange-500">Scalable Recruitment Without Chaos</h3>
            <p className="text-gray-300 mb-6 font-medium text-lg">As hiring demand increases:</p>
            <ul className="space-y-3">
              {["Recruitment capacity scales through the ecosystem", "Quality benchmarks remain fixed", "Coordination remains centralized"].map((item, i) => (
                <li key={i} className="flex items-center gap-3 text-gray-400">
                  <TrendingUp size={16} className="text-orange-500" />
                  {item}
                </li>
              ))}
            </ul>
            <p className="text-gray-300 mt-6 italic">You scale teams—without scaling recruitment problems.</p>
          </div>
        </div>
      </section>

      {/* Bottom Section */}
      <section className="py-20 relative text-center">
        <div className="max-w-4xl mx-auto px-6">
          <h2 className="text-3xl font-bold mb-6">More Than Hiring. <span className="text-orange-500">A Workforce System.</span></h2>
          <p className="text-xl text-gray-400 mb-12">
            Zryoss HR & Recruitment Solutions are built to Reduce hiring risk, Improve talent fit, and Support long-term growth.
            <br /><br />
            Because people are not just hired—they are integrated into systems.
          </p>

          <div className="p-10 rounded-3xl bg-gradient-to-r from-zinc-900 via-zinc-900 to-black border border-white/10 inline-block text-left w-full shadow-2xl">
            <div className="flex flex-col md:flex-row justify-between items-center gap-8">
              <div>
                <h3 className="text-3xl font-bold text-white mb-2">One Hiring Partner.</h3>
                <h3 className="text-3xl font-bold text-orange-500 mb-2">One Operating System.</h3>
                <div className="text-gray-400 mt-4">
                  <p>With Zryoss:</p>
                  <ul className="list-disc list-inside mt-2">
                    <li>Recruitment becomes predictable</li>
                    <li>Execution becomes reliable</li>
                    <li>Growth becomes manageable</li>
                  </ul>
                  <p className="mt-4 font-semibold text-white">Your business focuses on performance. Zryoss manages the hiring engine.</p>
                </div>
              </div>
              <Link to="/contact" className="whitespace-nowrap px-8 py-4 bg-orange-600 hover:bg-orange-500 text-white rounded-full font-bold text-lg transition shadow-[0_0_25px_rgba(234,88,12,0.4)] flex items-center gap-2">
                Get Started <ArrowRight size={20} />
              </Link>
            </div>
          </div>
        </div>
      </section>

    </div>
  );
};

export default HRRecruitment;
