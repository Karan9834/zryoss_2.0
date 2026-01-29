import FadeUp from "../../components/animations/FadeUp";
import { motion } from "framer-motion";
import {
  Settings,
  Workflow,
  ShieldCheck,
  Zap,
  BarChart4,
  Search,
  CheckCircle2,
  ArrowRight,
  ChevronRight,
  Sparkles,
  Globe,
  Database,
  Cloud,
  Server,
  Code2,
  Lock,
  Timer,
  TrendingDown,
  Users
} from "lucide-react";

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  show: { opacity: 1, y: 0 },
};


const governanceFlowImage = "/images/ecosystem/os-governance-flow.png";
const dashboardMockupImage = "/images/ecosystem/os-dashboard-mockup.png";
const heroBgImage = "/images/ecosystem/os-bg.png";
const velocityImage = "/images/ecosystem/os-velocity.png";

export default function OperatingSystem() {
  const coreModules = [
    {
      title: "Control Center",
      desc: "Centralized governance for all business transactions.",
      icon: <Settings className="text-orange-500" size={32} />,
      features: ["Transaction Monitoring", "Protocol Compliance", "Access Governance"]
    },
    {
      title: "Execution Engine",
      desc: "Domain-specific workflows for guaranteed delivery.",
      icon: <Workflow className="text-orange-500" size={32} />,
      features: ["Automated Workflows", "SLA Management", "Quality Benchmarking"]
    },
    {
      title: "Integrity Layer",
      desc: "Vetting and verification for the entire ecosystem.",
      icon: <ShieldCheck className="text-orange-500" size={32} />,
      features: ["Vendor Verification", "Client Security", "Data Integrity"]
    }
  ];

  return (
    <div className="bg-[#050505] text-white selection:bg-orange-500/30 min-h-screen">
      <section className="relative bg-[#050505] min-h-screen flex items-center py-20 md:py-32 overflow-hidden border-b border-white/5">
        {/* Background Elements - Matching TechHeroSection */}
        <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
          <div className="absolute -top-[20%] right-[10%] w-[50%] h-[50%] bg-orange-500/10 rounded-full blur-[140px]" />
          <div className="absolute bottom-[0%] -left-[10%] w-[40%] h-[60%] bg-red-500/10 rounded-full blur-[140px]" />
        </div>

        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            {/* Left Content - All content remains exactly the same */}
            <FadeUp>
              {/* Badge */}
              <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-orange-500/30 bg-orange-500/10 backdrop-blur-sm mb-6">
                <Zap size={14} className="text-orange-500" />
                <span className="text-xs uppercase tracking-[0.45em] text-orange-500 font-bold">
                  Business Engine
                </span>
              </div>

              {/* H1 */}
              <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold leading-[1.15] tracking-tight mb-5 text-white">
                The OS for <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-orange-600">
                  Modern Commerce.
                </span>
              </h1>

              {/* Paragraph */}
              <p className="text-xl text-gray-400 leading-relaxed font-light mb-6">
                Zryoss OS is more than software. It's an integrated set of protocols, governance, and technology that bridges the gap between vision and execution.
              </p>

              {/* CTA */}
              <div className="flex flex-wrap gap-4 mb-6">
                <button className="rounded-xl bg-gradient-to-r from-orange-500 to-orange-600 px-6 py-3 font-semibold text-white shadow-lg shadow-orange-500/30 hover:bg-orange-600 hover:shadow-orange-500/60 transition inline-flex items-center gap-2">
                  Request Demo <ArrowRight size={18} />
                </button>
              </div>
            </FadeUp>

            {/* Right Visual - Matching TechHeroSection exactly */}
            <FadeUp delay={0.2}>
              <div className="relative">
                <div className="absolute inset-0 rounded-3xl bg-orange-500/10 blur-2xl -z-10" />
                <div className="rounded-3xl border border-white/10 bg-white/5 p-2">
                  <img
                    src="/zryoss operating.png"
                    alt="Zryoss Operating System"
                    className="w-full h-[260px] md:h-[420px] object-cover rounded-2xl transform hover:scale-105 transition-transform duration-700"
                  />
                </div>
              </div>
            </FadeUp>
          </div>
        </div>
      </section>

      {/* CORE MODULES SECTION */}
      <section className="py-24 relative z-10">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid md:grid-cols-3 gap-8">
            {coreModules.map((module, i) => (
              <FadeUp key={i} delay={i * 0.1}>
                <div className="h-full p-8 rounded-3xl bg-white/5 border border-white/10 hover:border-orange-500/30 transition-all duration-500 group relative overflow-hidden">
                  <div className="absolute top-0 right-0 w-32 h-32 bg-orange-500/5 blur-3xl rounded-full opacity-0 group-hover:opacity-100 transition-opacity" />

                  <div className="mb-6">{module.icon}</div>
                  <h3 className="text-2xl font-bold mb-4">{module.title}</h3>
                  <p className="text-gray-400 mb-8 font-light text-sm leading-relaxed">{module.desc}</p>

                  <ul className="space-y-3">
                    {module.features.map((f, j) => (
                      <li key={j} className="flex items-center gap-3 text-xs text-gray-500 group-hover:text-gray-300 transition-colors">
                        <CheckCircle2 size={14} className="text-orange-500" />
                        {f}
                      </li>
                    ))}
                  </ul>
                </div>
              </FadeUp>
            ))}
          </div>
        </div>
      </section>

      {/* SYSTEM ARCHITECTURE LADDER */}
      <section className="py-32 bg-white/[0.02]">
        <div className="max-w-7xl mx-auto px-6">
          <FadeUp>
            <div className="max-w-3xl mb-24">
              <span className="text-orange-500 text-xs font-bold uppercase tracking-[0.2em] block mb-4">Architecture</span>
              <h2 className="text-4xl md:text-5xl font-bold mb-6">Designed for Reliability, <br /> Built for Impact.</h2>
              <p className="text-gray-400 text-lg font-light">The OS layers ensure that every action taken within the ecosystem is compliant, secure, and scalable.</p>
            </div>
          </FadeUp>

          <div className="space-y-24">
            {[
              {
                title: "Unified CRM & ERP",
                desc: "Every partner and brand operates on a unified transactional system. This eliminates data silos and ensuring every client interaction is recorded and governed centrally.",
                img: <BarChart4 size={80} className="text-orange-500 opacity-20" />,
                align: "left"
              },
              {
                title: "Quality Monitoring Protocols",
                desc: "Software-defined KPIs monitor delivery in real-time. If a brand or vendor falls below the Zryoss standard, the system flags it instantly for corrective action.",
                img: <Search size={80} className="text-orange-500 opacity-20" />,
                align: "right"
              }
            ].map((item, i) => (
              <FadeUp key={i}>
                <div className={`flex flex-col ${item.align === 'right' ? 'md:flex-row-reverse' : 'md:flex-row'} items-center gap-16`}>
                  <div className="md:w-1/2">
                    <div className="relative">
                      <div className="text-8xl font-black text-white/[0.03] absolute -top-12 -left-8 pointer-events-none">0{i + 1}</div>
                      <h3 className="text-3xl font-bold mb-6 relative z-10">{item.title}</h3>
                      <p className="text-gray-300 text-lg font-light leading-relaxed mb-8">
                        {item.desc}
                      </p>
                      <button className="flex items-center gap-2 text-orange-400 font-bold group">
                        Learn Detail <ChevronRight size={18} className="group-hover:translate-x-1 transition-transform" />
                      </button>
                    </div>
                  </div>
                  <div className="md:w-1/2">
                    <div className="aspect-video rounded-3xl bg-neutral-900 border border-white/5 flex items-center justify-center p-12 bg-gradient-to-br from-orange-500/5 to-transparent relative overflow-hidden">
                      <div className="absolute inset-0 bg-[radial-gradient(#f97316_0.5px,transparent_0.5px)] [background-size:20px_20px] opacity-10" />
                      {item.img}
                      <div className="absolute inset-x-0 bottom-0 h-1/3 bg-gradient-to-t from-black to-transparent" />
                    </div>
                  </div>
                </div>
              </FadeUp>
            ))}
          </div>
        </div>
      </section>

      {/* INTEGRATION STACK */}
      <section className="py-24 bg-[#0a0a0a]">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <FadeUp>
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Universal Compatibility</h2>
            <p className="text-gray-400 max-w-2xl mx-auto mb-16">
              The Zryoss OS isn't a walled garden. It connects seamlessly with the enterprise tools your partners already utilize.
            </p>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-8">
              {[
                { icon: <Database className="text-blue-500" />, name: "ERP Systems", examples: "SAP, Oracle, Netsuite" },
                { icon: <Cloud className="text-orange-500" />, name: "Cloud Infra", examples: "AWS, Azure, Google Cloud" },
                { icon: <Users className="text-green-500" />, name: "HRIS", examples: "Workday, BambooHR, Rippling" },
                { icon: <Code2 className="text-purple-500" />, name: "API Layer", examples: "GraphQL, REST, Webhooks" }
              ].map((item, i) => (
                <div key={i} className="p-6 rounded-2xl bg-white/5 border border-white/5 hover:border-orange-500/30 transition-all cursor-default group">
                  <div className="w-12 h-12 mx-auto rounded-full bg-black border border-white/10 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                    {item.icon}
                  </div>
                  <h4 className="font-bold text-lg mb-2">{item.name}</h4>
                  <p className="text-xs text-gray-500 font-mono">{item.examples}</p>
                </div>
              ))}
            </div>
          </FadeUp>
        </div>
      </section>

      {/* SECURITY & COMPLIANCE */}
      <section className="py-24 relative overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-full bg-orange-500/[0.02] pointer-events-none" />
        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <FadeUp>
            <div className="flex flex-col md:flex-row items-center gap-16">
              <div className="md:w-1/2">
                <h2 className="text-4xl font-bold mb-6">Military-Grade Governance</h2>
                <p className="text-gray-400 text-lg font-light leading-relaxed mb-8">
                  The OS doesn't just manage workflows; it enforces security. With built-in audit trails, role-based access control (RBAC), and automated compliance checks, your data is always protected.
                </p>
                <ul className="space-y-4">
                  {["ISO 27001 Compliant Framework", "End-to-End Encryption", "Real-time Access Logging", "Automated Compliance Audits"].map((item, i) => (
                    <li key={i} className="flex items-center gap-3 text-white">
                      <div className="w-6 h-6 rounded-full bg-green-500/20 flex items-center justify-center">
                        <CheckCircle2 size={14} className="text-green-500" />
                      </div>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
              <div className="md:w-1/2">
                <div className="p-4 rounded-3xl bg-black border border-white/10 relative h-full min-h-[400px]">
                  <img src={governanceFlowImage} alt="Governance Flow" className="w-full h-full object-cover rounded-2xl opacity-60 hover:opacity-100 transition-opacity duration-500" />
                  <div className="absolute bottom-6 left-6 right-6">
                    <div className="p-4 rounded-xl bg-black/80 backdrop-blur-md border border-white/10">
                      <div className="flex items-center gap-3 mb-2">
                        <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
                        <span className="text-xs font-mono text-green-500">SYSTEM_STATUS: SECURE</span>
                      </div>
                      <div className="w-full bg-white/10 h-1 rounded-full overflow-hidden">
                        <div className="w-full h-full bg-green-500 animate-[loading_2s_ease-in-out_infinite]" />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </FadeUp>
        </div>
      </section>

      {/* OPERATIONAL VELOCITY COMPARISON */}
      <section className="py-24 bg-gradient-to-b from-[#050505] to-[#0a0a0a] border-t border-white/5">
        <div className="max-w-7xl mx-auto px-6">
          <FadeUp>
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold mb-6">The Efficiency Delta</h2>
              <p className="text-gray-400">Comparing traditional operations vs. the Zryoss Operating System.</p>
            </div>

            <div className="grid md:grid-cols-2 gap-12 bg-white/5 rounded-3xl p-8 md:p-12 border border-white/10 items-center">
              <div>
                <h3 className="text-xl font-bold text-gray-500 mb-8 border-b border-white/10 pb-4">Velocity Metrics</h3>
                <div className="space-y-8">
                  <div>
                    <div className="flex justify-between text-sm mb-2 text-gray-500">
                      <span>Vendor Onboarding</span>
                      <span>3-6 Months</span>
                    </div>
                    <div className="w-full bg-white/5 h-2 rounded-full overflow-hidden">
                      <div className="w-[80%] h-full bg-gray-700/50 rounded-full" />
                    </div>
                  </div>
                  <div>
                    <div className="flex justify-between text-sm mb-2 text-orange-400 font-bold">
                      <span>Zryoss Onboarding</span>
                      <span>&lt; 7 Days</span>
                    </div>
                    <div className="w-full bg-white/5 h-2 rounded-full overflow-hidden relative">
                      <div className="w-[15%] h-full bg-orange-500 rounded-full absolute top-0 left-0" />
                    </div>
                  </div>
                  <div className="pt-4">
                    <p className="text-xs text-gray-500 leading-relaxed">
                      Data based on average enterprise deployment times vs. Zryoss ecosystem integration logs.
                    </p>
                  </div>
                </div>
              </div>

              <div className="relative h-[300px] rounded-2xl overflow-hidden border border-white/10 group">
                <img src={velocityImage} alt="Operational Velocity Chart" className="w-full h-full object-cover opacity-80 group-hover:opacity-100 transition-opacity duration-500" />
                <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent" />
                <div className="absolute bottom-4 left-4 right-4">
                  <div className="flex items-center justify-between text-xs font-mono text-orange-500 uppercase tracking-widest border-t border-white/10 pt-3">
                    <span>Live Tracking</span>
                    <span className="animate-pulse">● Recoding</span>
                  </div>
                </div>
              </div>
            </div>
          </FadeUp>
        </div>
      </section>

      {/* FINAL CTA */}
      <section className="py-32">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <FadeUp>
            <h2 className="text-3xl md:text-4xl font-bold mb-8 italic text-white/90">
              "We provide the system, you provide the growth."
            </h2>
            <div className="w-16 h-1 bg-orange-500 mx-auto rounded-full mb-12" />
            <p className="text-gray-400 text-lg mb-12 font-light">
              Become part of a structured business environment where your focus is 100% on results, while we manage the operational baseline.
            </p>
            <button className="px-12 py-5 bg-orange-500 hover:bg-orange-600 text-white rounded-2xl font-bold transition-all hover:scale-105 shadow-xl shadow-orange-500/20">
              Get Started Today
            </button>
          </FadeUp>
        </div>
      </section>
    </div>
  );
}
