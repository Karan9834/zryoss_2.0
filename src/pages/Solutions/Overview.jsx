import React, { useEffect } from "react";
import {
  ShieldCheck,
  Cpu,
  Globe,
  Users,
  Briefcase,
  TrendingUp,
  BarChart3,
  Search,
  CheckCircle2,
  ArrowRight,
  Target,
  Rocket,
  LineChart,
  Layout,
  Smartphone,
  PieChart,
  Code2,
  Terminal,
  Settings,
  Database,
  Cloud,
  Zap,
  Megaphone
} from "lucide-react";
import { Link } from "react-router-dom";
import FadeUp from "../../components/animations/FadeUp";

const SolutionsOverview = () => {
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
        </div>

        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left Column: Content */}
            <div>
              <FadeUp>
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-orange-500/30 bg-orange-500/10 text-orange-400 text-sm font-medium mb-6">
                  <Zap size={14} />
                  Zryoss Solutions Ecosystem
                </div>
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-[1.15] tracking-tight mb-6">
                  One Platform. <br />
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-500 to-white">
                    Integrated Solutions.
                  </span>
                </h1>
                <p className="text-xl text-gray-400 leading-relaxed mb-10 max-w-xl">
                  Our platform provides a range of domain-specific solutions—from Tech and Marketing to HR and Business Consulting—governed by one central system for predictable execution.
                </p>

                <div className="flex flex-wrap gap-4">
                  <Link to="/contact" className="px-8 py-4 bg-orange-600 hover:bg-orange-500 text-white rounded-full font-bold transition shadow-[0_0_20px_rgba(234,88,12,0.3)] flex items-center gap-2">
                    Explore Solutions <ArrowRight size={18} />
                  </Link>
                </div>
              </FadeUp>
            </div>

            {/* Right Column: Key Metrics / Highlight */}
            <div className="relative mt-10 lg:mt-0">
              <FadeUp delay={0.2}>
                <div className="grid grid-cols-2 gap-4">
                  {[
                    { label: "Domains Covered", value: "8+", icon: <Globe size={20} /> },
                    { label: "Execution Entities", value: "3 Core", icon: <Cpu size={20} /> },
                    { label: "Partner Network", value: "Verified", icon: <ShieldCheck size={20} /> },
                    { label: "System Control", value: "Centralized", icon: <Settings size={20} /> }
                  ].map((stat, i) => (
                    <div key={i} className="p-6 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-md">
                      <div className="text-orange-500 mb-3">{stat.icon}</div>
                      <div className="text-2xl font-bold text-white mb-1">{stat.value}</div>
                      <div className="text-sm text-gray-500">{stat.label}</div>
                    </div>
                  ))}
                </div>
              </FadeUp>
            </div>
          </div>
        </div>
      </section>

      {/* The Zryoss Solutions Framework */}
      <section className="py-24 bg-[#0a0a0a]">
        <div className="max-w-7xl mx-auto px-6">
          <FadeUp>
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-5xl font-bold mb-6">The Zryoss <span className="text-orange-500">Solutions Framework</span></h2>
              <p className="text-xl text-gray-400 max-w-3xl mx-auto">
                All our solutions follow a three-tier delivery model to ensure quality, accountability, and scalability.
              </p>
            </div>
          </FadeUp>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                title: "Tier 1: Validation",
                desc: "Every requirement is validated by our platform for feasibility and business alignment.",
                icon: <Target size={30} />
              },
              {
                title: "Tier 2: Routing",
                desc: "Tasks are routed to either a Core Brand or a Verified Partner based on the domain and scale.",
                icon: <ArrowRight size={30} />
              },
              {
                title: "Tier 3: Execution",
                desc: "Delivery is governed by our systems to enforce timelines, quality benchmarks, and security.",
                icon: <ShieldCheck size={30} />
              }
            ].map((tier, i) => (
              <FadeUp key={i} delay={i * 0.1}>
                <div className="p-8 rounded-3xl bg-[#0f0f0f] border border-white/5 hover:border-orange-500/20 transition-all group">
                  <div className="w-16 h-16 rounded-2xl bg-orange-500/10 flex items-center justify-center text-orange-500 mb-8 group-hover:scale-110 transition-transform">
                    {tier.icon}
                  </div>
                  <h3 className="text-2xl font-bold mb-4">{tier.title}</h3>
                  <p className="text-gray-400 leading-relaxed">{tier.desc}</p>
                </div>
              </FadeUp>
            ))}
          </div>
        </div>
      </section>

      {/* Solution Domains Grid */}
      <section className="py-24 bg-[#050505]">
        <div className="max-w-7xl mx-auto px-6">
          <FadeUp>
            <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
              <div className="max-w-2xl">
                <h2 className="text-3xl md:text-5xl font-bold mb-6">Core Solution <span className="text-orange-500">Domains</span></h2>
                <p className="text-xl text-gray-400">
                  Select a domain to see how we systematize delivery in that specific area.
                </p>
              </div>
            </div>
          </FadeUp>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                title: "IT & Software",
                path: "/solutions/it-software",
                icon: <Code2 size={24} />,
                brand: "Kryoss Softech",
                desc: "Custom builds, SaaS, and platform engineering."
              },
              {
                title: "Digital Marketing",
                path: "/solutions/digital-marketing",
                icon: <Megaphone size={24} />,
                brand: "Adkryoss",
                desc: "Performance marketing and organic growth."
              },
              {
                title: "HR & Recruitment",
                path: "/solutions/hr-recruitment",
                icon: <Users size={24} />,
                brand: "Clink Admission",
                desc: "Talent acquisition and workforce scaling."
              },
              {
                title: "Business Consulting",
                path: "/solutions/business-consulting",
                icon: <Briefcase size={24} />,
                brand: "Internal/Partner",
                desc: "Strategy, planning, and operational audits."
              },
              {
                title: "Healthcare",
                path: "/solutions/healthcare",
                icon: <ShieldCheck size={24} />,
                brand: "Vertical-specific",
                desc: "HIMS, telemedicine, and healthcare tech."
              },
              {
                title: "Real Estate & Interior",
                path: "/solutions/real-estate-interior",
                icon: <Layout size={24} />,
                brand: "Kryoss Interiors",
                desc: "Design, infra, and project management."
              },
              {
                title: "Education",
                path: "/solutions/education",
                icon: <Smartphone size={24} />,
                brand: "Vertical-specific",
                desc: "LMS, e-learning platforms, and digital labs."
              },
              {
                title: "General Resources",
                path: "/resources",
                icon: <PieChart size={24} />,
                brand: "Ecosystem support",
                desc: "Additional support and specialized resources."
              }
            ].map((sol, i) => (
              <FadeUp key={i} delay={i * 0.05}>
                <Link
                  to={sol.path}
                  className="group relative p-8 rounded-3xl bg-[#0a0a0a] border border-white/5 hover:border-orange-500/30 transition-all flex flex-col h-full"
                >
                  <div className="text-orange-500 mb-6 group-hover:scale-110 transition-transform">{sol.icon}</div>
                  <h3 className="text-xl font-bold mb-2">{sol.title}</h3>
                  <div className="text-xs font-semibold text-gray-500 uppercase tracking-wider mb-4">Delivered via {sol.brand}</div>
                  <p className="text-gray-400 text-sm mb-8 flex-grow">{sol.desc}</p>
                  <div className="flex items-center gap-2 text-orange-500 font-bold text-sm">
                    View Details <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
                  </div>
                </Link>
              </FadeUp>
            ))}
          </div>
        </div>
      </section>

      {/* The "Zryoss Advantage" for Solutions */}
      <section className="py-24 bg-[#0a0a0a] relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <FadeUp>
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-5xl font-bold mb-6">Why Zryoss for <span className="text-orange-500">Your Solutions?</span></h2>
              <p className="text-xl text-gray-400 max-w-3xl mx-auto">
                Fragmentation is the enemy of growth. We bring order to the delivery process.
              </p>
            </div>
          </FadeUp>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                title: "Accountability",
                desc: "You deal with our platform, not disconnected vendors. We own the delivery result.",
                icon: <ShieldCheck className="text-orange-500" />
              },
              {
                title: "Predictability",
                desc: "Our systems enforce timelines and quality standards, making execution risk-free.",
                icon: <Zap className="text-orange-500" />
              },
              {
                title: "Scalability",
                desc: "Seamlessly expand from one solution to multiple as your business grows.",
                icon: <TrendingUp className="text-orange-500" />
              },
              {
                title: "Cost Control",
                desc: "Standardized processes reduce overhead and prevent unexpected project costs.",
                icon: <BarChart3 className="text-orange-500" />
              },
              {
                title: "Domain Expertise",
                desc: "Execution is handled by specialized entities like Kryoss Softech and Adkryoss.",
                icon: <Target className="text-orange-500" />
              },
              {
                title: "Integration",
                desc: "Marketing interacts with Tech, and HR interacts with Strategy—all in one ecosystem.",
                icon: <Settings className="text-orange-500" />
              }
            ].map((adv, i) => (
              <FadeUp key={i} delay={i * 0.1}>
                <div className="p-8 rounded-3xl bg-white/5 border border-white/10 hover:bg-white/[0.08] transition-colors">
                  <div className="mb-6">{adv.icon}</div>
                  <h3 className="text-xl font-bold mb-4">{adv.title}</h3>
                  <p className="text-gray-400">{adv.desc}</p>
                </div>
              </FadeUp>
            ))}
          </div>
        </div>
      </section>

      {/* How It All Works (Summary) */}
      <section className="py-24 bg-[#050505]">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex flex-col lg:flex-row gap-16 items-center">
            <div className="lg:w-1/2">
              <FadeUp>
                <h2 className="text-3xl md:text-5xl font-bold mb-8 leading-tight">From Requirement <br /> to <span className="text-orange-500">Execution</span></h2>
                <div className="space-y-8">
                  {[
                    { step: "01", title: "Requirement Validation", desc: "You submit your needs to the platform. Our experts validate the feasibility and align it with business goals." },
                    { step: "02", title: "Resource Routing", desc: "The platform routes the job to specialized execution teams within our Core Brands or Partner Network." },
                    { step: "03", title: "Governed Delivery", desc: "We track every milestone. You see real-time progress through one centralized dashboard." }
                  ].map((item, i) => (
                    <div key={i} className="flex gap-6">
                      <div className="text-2xl font-bold text-orange-500/50">{item.step}</div>
                      <div>
                        <h3 className="text-xl font-bold mb-2">{item.title}</h3>
                        <p className="text-gray-400">{item.desc}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </FadeUp>
            </div>

            <div className="lg:w-1/2">
              <FadeUp delay={0.2}>
                <div className="relative p-12 rounded-[40px] bg-gradient-to-br from-orange-600/20 via-[#0a0a0a] to-blue-600/10 border border-white/10">
                  <h3 className="text-2xl font-bold mb-6 flex items-center gap-3">
                    <Rocket className="text-orange-500" /> Ready to Scale?
                  </h3>
                  <p className="text-gray-400 text-lg mb-10 leading-relaxed">
                    Don't let fragmented execution slow you down. Bring your business vision to life with our solutions ecosystem.
                  </p>
                  <Link to="/contact" className="w-full py-4 bg-white text-black font-bold rounded-2xl flex items-center justify-center gap-2 hover:bg-gray-200 transition-colors">
                    Start Your Project <ArrowRight size={20} />
                  </Link>
                  <p className="mt-6 text-center text-sm text-gray-500 italic">
                    "Trusted by startups and enterprises for predictable delivery."
                  </p>
                </div>
              </FadeUp>
            </div>
          </div>
        </div>
      </section>

      {/* Footer CTA */}
      <section className="py-32 relative text-center">
        <div className="max-w-4xl mx-auto px-6 relative z-10">
          <FadeUp>
            <h2 className="text-3xl md:text-5xl font-bold mb-8">Ready to Build the <span className="text-orange-500">Future?</span></h2>
            <p className="text-xl text-gray-400 mb-12">
              Whether you need software development, market growth, or talent acquisition, we're your one-stop operating system.
            </p>
          </FadeUp>

          <FadeUp delay={0.2}>
            <div className="flex flex-col sm:flex-row gap-6 justify-center">
              <Link to="/contact" className="px-10 py-5 bg-orange-600 hover:bg-orange-500 text-white rounded-full font-bold text-lg transition shadow-[0_0_30px_rgba(234,88,12,0.4)] flex items-center justify-center gap-2">
                Talk to Our Experts <ArrowRight size={20} />
              </Link>
              <Link to="/platform" className="px-10 py-5 border border-white/20 hover:bg-white/5 rounded-full font-bold text-lg transition flex items-center justify-center gap-2">
                Explore the Platform
              </Link>
            </div>
          </FadeUp>
        </div>

        {/* Background Visual Enhancer */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[400px] bg-orange-600/5 rounded-full blur-[120px] pointer-events-none" />
      </section>

    </div>
  );
};

export default SolutionsOverview;
