import React, { useEffect } from "react";
import {
  TrendingUp,
  Megaphone,
  BarChart3,
  Globe,
  Search,
  Mail,
  Target,
  CheckCircle2,
  ArrowRight,
  ShieldCheck,
  Zap,
  Layout,
  PieChart,
  Users,
  Smartphone,
  LineChart,
  Rocket
} from "lucide-react";
import { Link } from "react-router-dom";

const DigitalMarketing = () => {
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
          <div className="absolute bottom-[10%] left-[-10%] w-[400px] h-[400px] bg-purple-600/5 rounded-full blur-[100px]" />
          {/* Hero Image Overlay */}
          <div className="absolute inset-0 z-0 opacity-20 bg-[url('/digital_marketing_hero.jpg')] bg-cover bg-center mix-blend-screen" />
        </div>

        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <div className="max-w-4xl">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-orange-500/30 bg-orange-500/10 text-orange-400 text-sm font-medium mb-6">
              <Megaphone size={14} />
              Delivered Through Adkryoss & Verified Partners
            </div>
            <h1 className="text-5xl md:text-7xl font-bold tracking-tight leading-tight mb-8">
              Digital Marketing <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-500 to-white">
                Solutions
              </span>
            </h1>
            <h2 className="text-2xl text-white/80 font-medium mb-6">
              Performance-Driven Growth, Executed Through a Central System
            </h2>
            <p className="text-xl text-gray-400 leading-relaxed max-w-2xl mb-10">
              The Digital Marketing Solutions offered by Zryoss are designed to help businesses build visibility, generate demand, and convert leads consistently—without depending on freelancers, fragmented agencies, or unstructured campaigns.
            </p>

            <div className="p-6 border border-white/10 bg-white/5 rounded-2xl backdrop-blur-sm inline-block max-w-3xl">
              <p className="text-lg text-gray-200">
                Execution is delivered through <span className="text-white font-bold">Adkryoss</span> and its verified marketing partners, governed centrally by the Zryoss platform.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* The Problem Section */}
      <section className="py-24 bg-[#0a0a0a]">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex flex-col md:flex-row gap-16">
            <div className="md:w-1/3">
              <h2 className="text-3xl font-bold mb-6">The Problem With Traditional <br /> Digital Marketing</h2>
              <p className="text-gray-400 text-lg mb-8">
                Most businesses face the same issues with digital marketing: focus on vanity metrics instead of real growth.
              </p>
              <div className="h-1 w-20 bg-gradient-to-r from-orange-500 to-white rounded-full"></div>
            </div>

            <div className="md:w-2/3 grid grid-cols-1 sm:grid-cols-2 gap-4">
              {[
                "Too many agencies, no accountability",
                "Focus on likes instead of leads",
                "Campaigns without clear business goals",
                "Poor coordination between marketing and sales",
                "Results that don’t scale"
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
                  "Zryoss fixes this by treating digital marketing as a business growth system, not a creative experiment."
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
            <h2 className="text-3xl md:text-5xl font-bold mb-6">What Makes Zryoss <br /> Digital Marketing Different</h2>
            <p className="text-xl text-gray-400">
              Zryoss does not sell isolated marketing services.<br />
              It delivers <span className="text-white font-semibold">platform-governed growth execution</span>.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { title: "Aligned Objectives", desc: "Marketing is aligned to real business objectives.", icon: <Target size={24} /> },
              { title: "Planned Capacity", desc: "Campaigns are planned with execution capacity in mind.", icon: <Layout size={24} /> },
              { title: "Centralized Tracking", desc: "Performance is tracked centrally for transparency.", icon: <BarChart3 size={24} /> },
              { title: "Data-Driven Optimisation", desc: "Optimization is continuous and based on real data.", icon: <LineChart size={24} /> }
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
            <h3 className="text-xl font-bold text-orange-500 mb-2">The Outcome</h3>
            <p className="text-white text-lg font-medium">Marketing becomes predictable and scalable.</p>
          </div>
        </div>
      </section>

      {/* Core Offerings */}
      <section className="py-20 bg-[#080808]">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-3xl md:text-4xl font-bold mb-12">Core Digital Marketing Offerings</h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">

            {/* Brand & Online Presence */}
            <div className="group p-8 rounded-3xl bg-[#0e0e0e] border border-white/5 hover:border-orange-500/30 transition-colors">
              <Globe className="text-orange-500 mb-6" size={40} />
              <h3 className="text-2xl font-bold mb-4">Brand & Online Presence Building</h3>
              <ul className="space-y-3 text-gray-400">
                <li className="flex items-start gap-2"><span className="text-orange-500 mt-1">•</span> Brand positioning and digital identity</li>
                <li className="flex items-start gap-2"><span className="text-orange-500 mt-1">•</span> Website and landing page optimization</li>
                <li className="flex items-start gap-2"><span className="text-orange-500 mt-1">•</span> Social media presence setup and alignment</li>
              </ul>
            </div>

            {/* Performance Marketing */}
            <div className="group p-8 rounded-3xl bg-[#0e0e0e] border border-white/5 hover:border-orange-500/30 transition-colors">
              <Rocket className="text-orange-500 mb-6" size={40} />
              <h3 className="text-2xl font-bold mb-4">Performance Marketing & Lead Generaiton</h3>
              <ul className="space-y-3 text-gray-400">
                <li className="flex items-start gap-2"><span className="text-orange-500 mt-1">•</span> Paid advertising (search & social)</li>
                <li className="flex items-start gap-2"><span className="text-orange-500 mt-1">•</span> Lead generation campaigns</li>
                <li className="flex items-start gap-2"><span className="text-orange-500 mt-1">•</span> Funnel and conversion optimization</li>
                <li className="flex items-start gap-2"><span className="text-orange-500 mt-1">•</span> ROI-focused campaign execution</li>
              </ul>
            </div>

            {/* Social Media */}
            <div className="group p-8 rounded-3xl bg-[#0e0e0e] border border-white/5 hover:border-orange-500/30 transition-colors">
              <Smartphone className="text-orange-500 mb-6" size={40} />
              <h3 className="text-2xl font-bold mb-4">Social Media & Content Marketing</h3>
              <ul className="space-y-3 text-gray-400">
                <li className="flex items-start gap-2"><span className="text-orange-500 mt-1">•</span> Content planning and calendars</li>
                <li className="flex items-start gap-2"><span className="text-orange-500 mt-1">•</span> Platform-specific content execution</li>
                <li className="flex items-start gap-2"><span className="text-orange-500 mt-1">•</span> Community and brand engagement support</li>
              </ul>
            </div>

            {/* SEO */}
            <div className="group p-8 rounded-3xl bg-[#0e0e0e] border border-white/5 hover:border-orange-500/30 transition-colors">
              <Search className="text-orange-500 mb-6" size={40} />
              <h3 className="text-2xl font-bold mb-4">SEO & Organic Growth</h3>
              <ul className="space-y-3 text-gray-400">
                <li className="flex items-start gap-2"><span className="text-orange-500 mt-1">•</span> Search engine optimization</li>
                <li className="flex items-start gap-2"><span className="text-orange-500 mt-1">•</span> Content-driven organic visibility</li>
                <li className="flex items-start gap-2"><span className="text-orange-500 mt-1">•</span> Long-term traffic growth strategies</li>
              </ul>
            </div>

            {/* Automation */}
            <div className="group p-8 rounded-3xl bg-[#0e0e0e] border border-white/5 hover:border-orange-500/30 transition-colors md:col-span-2">
              <PieChart className="text-orange-500 mb-6" size={40} />
              <h3 className="text-2xl font-bold mb-4">Marketing Automation & Analytics</h3>
              <div className="grid md:grid-cols-2 gap-6">
                <ul className="space-y-3 text-gray-400">
                  <li className="flex items-start gap-2"><span className="text-orange-500 mt-1">•</span> Lead tracking and reporting</li>
                  <li className="flex items-start gap-2"><span className="text-orange-500 mt-1">•</span> Campaign performance analytics</li>
                </ul>
                <ul className="space-y-3 text-gray-400">
                  <li className="flex items-start gap-2"><span className="text-orange-500 mt-1">•</span> Optimization based on real data</li>
                </ul>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* Delivery Process */}
      <section className="py-24 relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-16">
            How Zryoss Delivers <br /><span className="text-orange-500">Digital Marketing Solutions</span>
          </h2>

          <div className="relative">
            {/* Connecting Line (Desktop) */}
            <div className="hidden md:block absolute top-12 left-0 w-full h-0.5 bg-gradient-to-r from-transparent via-orange-500/30 to-transparent" />

            <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-7 gap-4 relative z-10">
              {[
                "Business goals & audience validated",
                "Strategy aligned with capability",
                "Campaign plan & KPIs defined",
                "Execution routed to Adkryoss",
                "Campaigns launched & monitored",
                "Performance tracked & optimized",
                "Reports & insights shared"
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
            <p className="text-lg text-gray-400">All activities are coordinated through one system.</p>
          </div>
        </div>
      </section>

      {/* Quality & Governance */}
      <section className="py-20 bg-[#0a0a0a]">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex flex-col lg:flex-row items-center gap-16">
            <div className="lg:w-1/2">
              <h2 className="text-3xl md:text-4xl font-bold mb-6">Platform-Governed <span className="text-orange-500">Accountability</span></h2>
              <p className="text-xl text-gray-400 mb-8">Marketing performance is measured, not assumed. Zryoss ensures:</p>

              <div className="space-y-6">
                {[
                  "Clear KPIs and deliverables",
                  "No inflated promises",
                  "Regular performance reporting",
                  "Continuous improvement cycles"
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
                    <p className="text-sm text-gray-400">Brand launch and early visibility, Cost-efficient lead generation, Market testing campaigns.</p>
                  </div>
                  <div className="border-l-2 border-orange-500 pl-4">
                    <h4 className="font-bold text-white">Growing Businesses</h4>
                    <p className="text-sm text-gray-400">Consistent lead pipelines, Conversion and funnel optimization, Multi-channel growth strategies.</p>
                  </div>
                  <div className="border-l-2 border-orange-500 pl-4">
                    <h4 className="font-bold text-white">Enterprises</h4>
                    <p className="text-sm text-gray-400">Large-scale campaign management, Brand consistency across channels, Performance-driven growth programs.</p>
                  </div>
                </div>
              </div>
            </div>
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
              {["One marketing partner", "Clear growth objectives", "Transparent performance data", "Reduced coordination effort", "Scalable marketing execution"].map((item, i) => (
                <li key={i} className="flex items-center gap-3 text-gray-400">
                  <CheckCircle2 size={16} className="text-orange-500" />
                  {item}
                </li>
              ))}
            </ul>
            <p className="text-gray-300 mt-6 italic">Marketing teams stop guessing—and start operating with clarity.</p>
          </div>

          <div>
            <h3 className="text-2xl font-bold mb-6 text-orange-500">Scalable Growth Without Noise</h3>
            <p className="text-gray-300 mb-6 font-medium text-lg">As demand increases:</p>
            <ul className="space-y-3">
              {["Campaign capacity scales through the ecosystem", "Strategy remains aligned", "Performance benchmarks remain fixed"].map((item, i) => (
                <li key={i} className="flex items-center gap-3 text-gray-400">
                  <TrendingUp size={16} className="text-orange-500" />
                  {item}
                </li>
              ))}
            </ul>
            <p className="text-gray-300 mt-6 italic">You don’t change agencies every quarter. You build a growth engine.</p>
          </div>
        </div>
      </section>

      {/* Bottom Section */}
      <section className="py-20 relative text-center">
        <div className="max-w-4xl mx-auto px-6">
          <h2 className="text-3xl font-bold mb-6">More Than Campaigns. <span className="text-orange-500">A Growth System.</span></h2>
          <p className="text-xl text-gray-400 mb-12">
            Zryoss Digital Marketing Solutions are built to Support real business outcomes, Integrate with sales and execution, and Enable long-term brand value.
            <br /><br />
            Because growth should be engineered, not improvised.
          </p>

          <div className="p-10 rounded-3xl bg-gradient-to-r from-zinc-900 via-zinc-900 to-black border border-white/10 inline-block text-left w-full shadow-2xl">
            <div className="flex flex-col md:flex-row justify-between items-center gap-8">
              <div>
                <h3 className="text-3xl font-bold text-white mb-2">One Growth Partner.</h3>
                <h3 className="text-3xl font-bold text-orange-500 mb-2">One Operating System.</h3>
                <div className="text-gray-400 mt-4">
                  <p>With Zryoss:</p>
                  <ul className="list-disc list-inside mt-2">
                    <li>Marketing is structured</li>
                    <li>Execution is accountable</li>
                    <li>Results are repeatable</li>
                  </ul>
                  <p className="mt-4 font-semibold text-white">You define growth goals. Zryoss runs the marketing engine.</p>
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

export default DigitalMarketing;
