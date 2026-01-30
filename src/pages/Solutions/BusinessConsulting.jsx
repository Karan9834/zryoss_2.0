import React, { useEffect } from "react";
import {
  Briefcase,
  ShieldCheck,
  Users,
  FileText,
  Scale,
  Layers,
  TrendingUp,
  CheckCircle2,
  ArrowRight,
  Calculator,
  Building2,
  AlertTriangle,
  Clock,
  Workflow
} from "lucide-react";
import { Link } from "react-router-dom";
import FadeUp from "../../components/animations/FadeUp";

const BusinessConsulting = () => {
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
        </div>

        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left Column: Content */}
            <div>
              <FadeUp>
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-orange-500/30 bg-orange-500/10 text-orange-400 text-sm font-medium mb-6">
                  <Briefcase size={14} />
                  Delivered Through Vyombiz & Verified Partners
                </div>
                <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white leading-[1.15] tracking-tight mb-5">
                  Business & <br />
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-500 to-red-500">
                    Professional Services
                  </span>
                </h1>
                <h2 className="text-2xl text-white/80 font-medium mb-6">
                  Compliance, Advisory & Business Support — Executed With Accountability
                </h2>
                <p className="text-xl text-gray-400 leading-relaxed mb-10">
                  The Business & Professional Services offered by Zryoss are designed to help businesses stay compliant, structured, and operationally sound—without juggling multiple advisors, consultants, or agencies.
                </p>

                <div className="p-6 border border-white/10 bg-white/5 rounded-2xl backdrop-blur-sm inline-block w-full">
                  <p className="text-lg text-gray-200">
                    Execution is delivered through <span className="text-white font-bold">Vyombiz</span> and its verified professional partner network, governed centrally by the Zryoss platform.
                  </p>
                </div>
              </FadeUp>
            </div>

            {/* Right Column: Image */}
            <div className="relative mt-10 lg:mt-0">
              <FadeUp delay={0.2}>
                <div className="absolute inset-0 bg-gradient-to-r from-orange-500/20 to-red-500/20 blur-3xl rounded-3xl transform rotate-3" />
                <img
                  src="/solution-hero-images/Business.jpg"
                  alt="Business & Professional Services"
                  className="relative rounded-3xl shadow-2xl border border-white/10 transform hover:scale-[1.02] transition-transform duration-500 object-cover w-full h-auto aspect-[4/3]"
                />
              </FadeUp>
            </div>
          </div>
        </div>
      </section>

      {/* The Problem Section */}
      <section className="py-24 bg-[#0a0a0a]">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex flex-col md:flex-row gap-16">
            <div className="md:w-1/3">
              <FadeUp>
                <h2 className="text-3xl font-bold mb-6">The Problem With Traditional <br /> Professional Services</h2>
                <p className="text-gray-400 text-lg mb-8">
                  Businesses commonly face fragmented advice and lack of accountability when dealing with multiple standalone providers.
                </p>
                <div className="h-1 w-20 bg-gradient-to-r from-orange-500 to-red-500 rounded-full"></div>
              </FadeUp>
            </div>

            <div className="md:w-2/3 grid grid-cols-1 sm:grid-cols-2 gap-4">
              {[
                "Multiple advisors with no coordination",
                "Delays in compliance and filings",
                "Inconsistent advice across domains",
                "Poor follow-up and accountability",
                "Founder dependency for routine matters"
              ].map((problem, idx) => (
                <FadeUp key={idx} delay={idx * 0.1}>
                  <div className="p-5 rounded-2xl bg-[#0f0f0f] border border-red-500/10 flex items-start gap-4 hover:bg-[#121212] transition-colors">
                    <AlertTriangle className="text-red-500 shrink-0 mt-1" size={20} />
                    <span className="text-gray-300">{problem}</span>
                  </div>
                </FadeUp>
              ))}

              <FadeUp delay={0.6} className="col-span-1 sm:col-span-2">
                <div className="p-5 rounded-2xl bg-gradient-to-br from-gray-900 to-black border border-white/10 flex items-center justify-center text-center">
                  <p className="text-white italic">
                    "Zryoss solves this by systematizing professional services delivery with one coordination layer and clear ownership."
                  </p>
                </div>
              </FadeUp>
            </div>
          </div>
        </div>
      </section>

      {/* Differentiation Section */}
      <section className="py-24 bg-[#050505] relative">
        <div className="max-w-7xl mx-auto px-6">
          <FadeUp>
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-5xl font-bold mb-6">What Makes Zryoss <br /> Business Services Different</h2>
              <p className="text-xl text-gray-400">
                Zryoss does not act as a directory of professionals.<br />
                It provides <span className="text-white font-semibold">platform-governed professional execution</span>.
              </p>
            </div>
          </FadeUp>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { title: "Defined Scope", desc: "Scope and responsibility are clearly defined, leaving no ambiguity." },
              { title: "Standardized Workflows", desc: "Workflows are standardized to ensure consistent execution." },
              { title: "Centralized Coordination", desc: "Professionals are coordinated centrally through one system." },
              { title: "Enforced Deadlines", desc: "Deadlines and quality are strictly enforced by the platform." },
              { title: "Structured Reporting", desc: "Reporting and escalation are structured for transparency." }
            ].map((item, i) => (
              <FadeUp key={i} delay={i * 0.1}>
                <div className={`p-8 rounded-3xl border border-white/10 bg-[#0a0a0a] hover:border-orange-500/30 transition-all group ${i >= 3 ? 'md:col-span-1.5' : ''}`}>
                  <div className="w-12 h-12 rounded-full bg-orange-500/10 flex items-center justify-center text-orange-500 mb-6 group-hover:scale-110 transition-transform">
                    <CheckCircle2 size={24} />
                  </div>
                  <h3 className="text-xl font-bold mb-3">{item.title}</h3>
                  <p className="text-gray-400">{item.desc}</p>
                </div>
              </FadeUp>
            ))}

            <FadeUp delay={0.5}>
              <div className="p-8 rounded-3xl border border-orange-500/20 bg-gradient-to-br from-orange-900/10 to-transparent flex flex-col justify-center items-center text-center h-full">
                <h3 className="text-xl font-bold text-orange-500 mb-2">The Result</h3>
                <p className="text-white text-lg font-medium">Clients receive reliable outcomes, not fragmented advice.</p>
              </div>
            </FadeUp>
          </div>
        </div>
      </section>

      {/* Core Offerings */}
      <section className="py-20 bg-[#080808]">
        <div className="max-w-7xl mx-auto px-6">
          <FadeUp>
            <h2 className="text-3xl md:text-4xl font-bold mb-12">Core Business & Professional Offerings</h2>
          </FadeUp>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {/* Company Setup */}
            <FadeUp delay={0.1}>
              <div className="group p-8 rounded-3xl bg-[#0e0e0e] border border-white/5 hover:border-orange-500/30 transition-colors h-full">
                <Building2 className="text-orange-500 mb-6" size={40} />
                <h3 className="text-2xl font-bold mb-4">Company & Business Setup</h3>
                <ul className="space-y-3 text-gray-400">
                  <li className="flex items-start gap-2"><span className="text-orange-500 mt-1">•</span> Company incorporation support</li>
                  <li className="flex items-start gap-2"><span className="text-orange-500 mt-1">•</span> Business structuring guidance</li>
                  <li className="flex items-start gap-2"><span className="text-orange-500 mt-1">•</span> Foundational documentation coordination</li>
                </ul>
              </div>
            </FadeUp>

            {/* Legal & Compliance */}
            <FadeUp delay={0.2}>
              <div className="group p-8 rounded-3xl bg-[#0e0e0e] border border-white/5 hover:border-orange-500/30 transition-colors h-full">
                <Scale className="text-orange-500 mb-6" size={40} />
                <h3 className="text-2xl font-bold mb-4">Legal & Compliance</h3>
                <ul className="space-y-3 text-gray-400">
                  <li className="flex items-start gap-2"><span className="text-orange-500 mt-1">•</span> Regulatory compliance coordination</li>
                  <li className="flex items-start gap-2"><span className="text-orange-500 mt-1">•</span> Statutory filings and renewals</li>
                  <li className="flex items-start gap-2"><span className="text-orange-500 mt-1">•</span> Contract and documentation support</li>
                </ul>
              </div>
            </FadeUp>

            {/* Accounting */}
            <FadeUp delay={0.3}>
              <div className="group p-8 rounded-3xl bg-[#0e0e0e] border border-white/5 hover:border-orange-500/30 transition-colors h-full">
                <Calculator className="text-orange-500 mb-6" size={40} />
                <h3 className="text-2xl font-bold mb-4">Accounting & Financial</h3>
                <ul className="space-y-3 text-gray-400">
                  <li className="flex items-start gap-2"><span className="text-orange-500 mt-1">•</span> Accounting and bookkeeping coordination</li>
                  <li className="flex items-start gap-2"><span className="text-orange-500 mt-1">•</span> Financial reporting support</li>
                  <li className="flex items-start gap-2"><span className="text-orange-500 mt-1">•</span> Compliance-aligned processes</li>
                </ul>
              </div>
            </FadeUp>

            {/* Taxation */}
            <FadeUp delay={0.4}>
              <div className="group p-8 rounded-3xl bg-[#0e0e0e] border border-white/5 hover:border-orange-500/30 transition-colors h-full">
                <FileText className="text-orange-500 mb-6" size={40} />
                <h3 className="text-2xl font-bold mb-4">Taxation & Regulatory</h3>
                <ul className="space-y-3 text-gray-400">
                  <li className="flex items-start gap-2"><span className="text-orange-500 mt-1">•</span> Tax compliance coordination</li>
                  <li className="flex items-start gap-2"><span className="text-orange-500 mt-1">•</span> Advisory for business operations</li>
                  <li className="flex items-start gap-2"><span className="text-orange-500 mt-1">•</span> Periodic filing support</li>
                </ul>
              </div>
            </FadeUp>

            {/* Advisory */}
            <FadeUp delay={0.5} className="md:col-span-2">
              <div className="group p-8 rounded-3xl bg-[#0e0e0e] border border-white/5 hover:border-orange-500/30 transition-colors h-full">
                <TrendingUp className="text-orange-500 mb-6" size={40} />
                <h3 className="text-2xl font-bold mb-4">Business Advisory & Operations</h3>
                <div className="grid md:grid-cols-2 gap-6">
                  <ul className="space-y-3 text-gray-400">
                    <li className="flex items-start gap-2"><span className="text-orange-500 mt-1">•</span> Business process alignment</li>
                    <li className="flex items-start gap-2"><span className="text-orange-500 mt-1">•</span> Operational structuring guidance</li>
                  </ul>
                  <ul className="space-y-3 text-gray-400">
                    <li className="flex items-start gap-2"><span className="text-orange-500 mt-1">•</span> Growth-readiness advisory</li>
                    <li className="flex items-start gap-2"><span className="text-orange-500 mt-1">•</span> Strategic expansion support</li>
                  </ul>
                </div>
              </div>
            </FadeUp>
          </div>
        </div>
      </section>

      {/* Delivery Process */}
      <section className="py-24 relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-6">
          <FadeUp>
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-16">
              How Zryoss Delivers <br /><span className="text-orange-500">Business & Professional Services</span>
            </h2>
          </FadeUp>

          <div className="relative">
            {/* Connecting Line (Desktop) */}
            <div className="hidden md:block absolute top-12 left-0 w-full h-0.5 bg-gradient-to-r from-transparent via-orange-500/30 to-transparent" />

            <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-6 gap-8 relative z-10">
              {[
                "Requirement Validation",
                "Scope & Timeline",
                "Execution Routing",
                "Workflow Tracking",
                "Quality Review",
                "Centralized Reporting"
              ].map((step, i) => (
                <FadeUp key={i} delay={i * 0.1}>
                  <div className="flex flex-col items-center text-center group">
                    <div className="w-24 h-24 rounded-full bg-[#111] border border-white/10 group-hover:border-orange-500 flex items-center justify-center font-bold text-3xl mb-6 z-10 shadow-lg transition-colors overflow-hidden relative">
                      <span className="text-white group-hover:text-orange-500 transition-colors z-10">{i + 1}</span>
                      <div className="absolute inset-0 bg-orange-500/10 opacity-0 group-hover:opacity-100 transition-opacity" />
                    </div>
                    <h3 className="text-lg font-bold text-white mb-2">{step}</h3>
                  </div>
                </FadeUp>
              ))}
            </div>
          </div>

          <FadeUp delay={0.8}>
            <div className="mt-16 text-center">
              <p className="text-lg text-gray-400">Clients interact with one system, not multiple professionals.</p>
            </div>
          </FadeUp>
        </div>
      </section>

      {/* Governance & Accountability */}
      <section className="py-20 bg-[#0a0a0a]">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex flex-col lg:flex-row items-center gap-16">
            <div className="lg:w-1/2">
              <FadeUp>
                <h2 className="text-3xl md:text-4xl font-bold mb-6">Centralized <span className="text-orange-500">Governance & Accountability</span></h2>
                <p className="text-xl text-gray-400 mb-8">Professional services are managed, not left to chance.</p>
              </FadeUp>

              <div className="space-y-6">
                {[
                  "Verified professionals only - Strict vetting process",
                  "Clear engagement boundaries - No scope creep",
                  "Deadline tracking - Automated follow-ups",
                  "Escalation handling - Immediate resolution if required"
                ].map((item, i) => (
                  <FadeUp key={i} delay={i * 0.1}>
                    <div className="flex items-center gap-4 p-4 rounded-xl bg-[#111] border border-white/5">
                      <ShieldCheck className="text-orange-500 shrink-0" />
                      <span className="text-gray-200">{item}</span>
                    </div>
                  </FadeUp>
                ))}
              </div>
            </div>

            <div className="lg:w-1/2 grid grid-cols-1 gap-4">
              <FadeUp delay={0.3}>
                <div className="p-8 rounded-3xl bg-[#0f0f0f] border border-white/5">
                  <h3 className="text-xl font-bold mb-6 text-white text-center">Solutions for Different Business Stages</h3>
                  <div className="space-y-6">
                    <div className="border-l-2 border-orange-500 pl-4">
                      <h4 className="font-bold text-white">Startups</h4>
                      <p className="text-sm text-gray-400">Company setup, early compliance, foundational advisory.</p>
                    </div>
                    <div className="border-l-2 border-orange-500 pl-4">
                      <h4 className="font-bold text-white">Growing Businesses</h4>
                      <p className="text-sm text-gray-400">Ongoing compliance management, financial & operational structuring.</p>
                    </div>
                    <div className="border-l-2 border-orange-500 pl-4">
                      <h4 className="font-bold text-white">Enterprises</h4>
                      <p className="text-sm text-gray-400">Multi-entity coordination, complex compliance and advisory needs.</p>
                    </div>
                  </div>
                </div>
              </FadeUp>
            </div>
          </div>
        </div>
      </section>

      {/* Client Experience & Scale */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-12">
          <FadeUp>
            <div>
              <h3 className="text-2xl font-bold mb-6 text-orange-500">Client Experience</h3>
              <p className="text-gray-300 mb-6 font-medium text-lg">Business owners focus on decisions—not paperwork and follow-ups.</p>
              <ul className="space-y-3">
                {["Single coordination point", "Reduced administrative burden", "Clear timelines and deliverables", "Professional accountability", "Long-term continuity"].map((item, i) => (
                  <li key={i} className="flex items-center gap-3 text-gray-400">
                    <CheckCircle2 size={16} className="text-orange-500" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </FadeUp>

          <FadeUp delay={0.2}>
            <div>
              <h3 className="text-2xl font-bold mb-6 text-orange-500">Scalable Support Without Chaos</h3>
              <p className="text-gray-300 mb-6 font-medium text-lg">You don’t rebuild advisory networks. You operate on one system.</p>
              <ul className="space-y-3">
                {["As businesses grow, service scope expands smoothly", "Additional professionals are activated instantly", "Governance and quality remain fixed"].map((item, i) => (
                  <li key={i} className="flex items-center gap-3 text-gray-400">
                    <TrendingUp size={16} className="text-orange-500" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </FadeUp>
        </div>
      </section>

      {/* Bottom Section */}
      <section className="py-20 relative text-center">
        <div className="max-w-4xl mx-auto px-6">
          <FadeUp>
            <h2 className="text-3xl font-bold mb-6">More Than Advice. <span className="text-orange-500">Business Infrastructure.</span></h2>
            <p className="text-xl text-gray-400 mb-12">
              Zryoss Business & Professional Services are built to reduce compliance risk, improve operational discipline, support sustainable growth, and protect long-term business credibility.
            </p>
          </FadeUp>

          <FadeUp delay={0.2}>
            <div className="p-10 rounded-3xl bg-gradient-to-r from-zinc-900 via-zinc-900 to-black border border-white/10 inline-block text-left w-full shadow-2xl">
              <div className="flex flex-col md:flex-row justify-between items-center gap-8">
                <div>
                  <h3 className="text-3xl font-bold text-white mb-2">One Professional Partner.</h3>
                  <h3 className="text-3xl font-bold text-orange-500 mb-2">One Operating System.</h3>
                  <p className="text-gray-400 mt-4">You focus on building the business. Zryoss manages the professional backbone.</p>
                </div>
                <Link to="/contact" className="whitespace-nowrap px-8 py-4 bg-orange-600 hover:bg-orange-500 text-white rounded-full font-bold text-lg transition shadow-[0_0_25px_rgba(234,88,12,0.4)] flex items-center gap-2">
                  Get Started <ArrowRight size={20} />
                </Link>
              </div>
            </div>
          </FadeUp>
        </div>
      </section>

    </div>
  );
};

export default BusinessConsulting;
