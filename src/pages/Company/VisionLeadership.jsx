import { motion } from "framer-motion";
import {
  Globe,
  Target,
  ShieldCheck,
  Zap,
  UserCheck,
  Scale,
  Eye,
  ArrowRight,
  CheckCircle2,
  Building2,
  Lock,
  Leaf,
} from "lucide-react";

/**
 * FadeUp Animation Component
 */
const FadeUp = ({ children, delay = 0 }) => (
  <motion.div
    initial={{ opacity: 0, y: 30 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ duration: 0.6, delay }}
  >
    {children}
  </motion.div>
);

export default function VisionLeadership() {
  return (
    <main className="bg-[#050505] text-white overflow-hidden font-sans">

      {/* ================= HERO SECTION ================= */}
      <section className="relative h-[80vh] min-h-[600px] flex items-center justify-center border-b border-white/5">
        <div className="absolute inset-0 z-0">
          <img
            src="https://images.unsplash.com/photo-1497366216548-37526070297c?q=80&w=2069&auto=format&fit=crop"
            alt="Corporate Vision Background"
            className="w-full h-full object-cover opacity-20"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-[#050505] via-[#050505]/60 to-[#050505]" />
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(255,138,0,0.08),transparent_70%)]" />
        </div>

        <div className="relative z-10 max-w-5xl mx-auto px-6 text-center">
          <FadeUp>
            <span className="inline-block px-4 py-1.5 mb-6 rounded-full border border-orange-500/30 bg-orange-500/10 text-orange-400 text-sm font-medium tracking-wide">
              Vision, Mission & Values
            </span>
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white leading-[1.15] tracking-tight mb-5">
              Building the Future of <br className="hidden md:block" />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-orange-600">
                System-Driven Businesses
              </span>
            </h1>
            <p className="text-lg md:text-2xl text-gray-300 max-w-3xl mx-auto leading-relaxed mb-12">
              Zryoss is built with a long-term vision: to help individuals and
              organizations create independent, scalable businesses backed by a
              reliable operating system.
            </p>
            <p className="text-sm text-gray-500 uppercase tracking-widest">
              Powered by Kryoss Softech & Clink Consultancy
            </p>
          </FadeUp>
        </div>
      </section>

      {/* ================= VISION ================= */}
      <section className="py-24 relative">
        <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-16 items-center">
          <FadeUp>
            <div className="relative">
              <div className="absolute -inset-4 bg-orange-500/10 rounded-full blur-3xl" />
              <Eye className="w-24 h-24 text-orange-500 relative z-10 mb-8" />
              <h2 className="text-4xl md:text-5xl font-bold mb-6">
                Our Vision
              </h2>
              <p className="text-xl text-gray-300 mb-8">
                To Become the Operating Backbone for Independent Businesses
              </p>
              <p className="text-gray-400 leading-relaxed mb-8">
                Zryoss aims to be a globally trusted business operating platform
                that powers thousands of independent brands across industries.
              </p>
            </div>
          </FadeUp>

          <FadeUp delay={0.2}>
            <div className="grid gap-6">
              {[
                "Businesses are built on systems, not improvisation",
                "Execution is predictable, not stressful",
                "Growth does not break operations",
                "Individuals can own brands without managing chaos",
              ].map((item, i) => (
                <div key={i} className="flex items-start gap-4 p-4 rounded-xl bg-[#0E0F12] border border-white/10 hover:border-orange-500/30 transition-colors">
                  <Target className="w-6 h-6 text-orange-500 shrink-0" />
                  <p className="text-gray-200">{item}</p>
                </div>
              ))}
            </div>
          </FadeUp>
        </div>
      </section>

      {/* ================= MISSION ================= */}
      <section className="py-24 bg-[#0A0A0A] border-y border-white/5">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-16 items-center md:flex-row-reverse">
            <FadeUp className="md:order-2">
              <div className="grid gap-6">
                {[
                  "Provide a ready-to-use operating system for businesses",
                  "Centralize execution, delivery, and quality governance",
                  "Enable partners to focus on growth and relationships",
                  "Build sustainable business ecosystems across domains",
                ].map((item, i) => (
                  <div key={i} className="flex items-start gap-4 p-4 rounded-xl bg-black border border-white/10 hover:border-orange-500/30 transition-colors">
                    <CheckCircle2 className="w-6 h-6 text-orange-500 shrink-0" />
                    <p className="text-gray-200">{item}</p>
                  </div>
                ))}
              </div>
            </FadeUp>

            <FadeUp delay={0.2} className="md:order-1">
              <Globe className="w-24 h-24 text-orange-500 mb-8" />
              <h2 className="text-4xl md:text-5xl font-bold mb-6">
                Our Mission
              </h2>
              <p className="text-xl text-gray-300 mb-8">
                To Replace Chaos With Structure at Every Stage of Business
              </p>
              <p className="text-gray-400 leading-relaxed">
                Zryoss exists to make execution reliable, scalable, and
                accountable.
              </p>
            </FadeUp>
          </div>
        </div>
      </section>

      {/* ================= CORE VALUES ================= */}
      <section className="py-32">
        <div className="max-w-7xl mx-auto px-6">
          <FadeUp>
            <div className="text-center mb-20">
              <h2 className="text-4xl md:text-5xl font-bold mb-6">Our Core Values</h2>
              <p className="text-gray-400 max-w-2xl mx-auto">
                Values are not statements. They are embedded into the system.
              </p>
            </div>
          </FadeUp>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                icon: Building2,
                title: "System Before Scale",
                desc: "We believe growth without systems creates risk. Every expansion must be supported by process, governance, and control.",
              },
              {
                icon: Zap,
                title: "Execution Over Ideas",
                desc: "Ideas have potential. Execution creates results. Zryoss prioritizes delivery discipline over theory or motivation.",
              },
              {
                icon: UserCheck,
                title: "Ownership With Accountability",
                desc: "We believe in empowering independent brands—while ensuring clear ownership and responsibility at every level.",
              },
              {
                icon: ShieldCheck,
                title: "Quality Is Non-Negotiable",
                desc: "Speed without quality damages trust. Zryoss enforces consistent quality standards across all brands, vendors, and deliveries.",
              },
              {
                icon: Globe,
                title: "Transparency Builds Trust",
                desc: "Clear communication, documented decisions, and visible reporting are core. Trust is built through clarity, not promises.",
              },
              {
                icon: Leaf,
                title: "Long-Term Thinking",
                desc: "Zryoss is not built for short-term wins. Every system is designed for durability, continuity, and long-term growth.",
              },
            ].map((value, i) => (
              <FadeUp key={i} delay={i * 0.1}>
                <div className="p-8 h-full rounded-3xl bg-[#0E0F12] border border-white/10 hover:border-orange-500/30 transition-all hover:-translate-y-1 group">
                  <div className="w-14 h-14 rounded-full bg-orange-500/10 flex items-center justify-center mb-6 group-hover:bg-orange-500/20 transition-colors">
                    <value.icon className="w-7 h-7 text-orange-500" />
                  </div>
                  <h3 className="text-xl font-bold mb-4">{value.title}</h3>
                  <p className="text-gray-400 leading-relaxed text-sm">
                    {value.desc}
                  </p>
                </div>
              </FadeUp>
            ))}
          </div>
        </div>
      </section>

      {/* ================= VALUES REFLECTION ================= */}
      <section className="py-24 bg-[#0A0A0A] border-y border-white/5">
        <div className="max-w-6xl mx-auto px-6 text-center">
          <FadeUp>
            <h2 className="text-3xl md:text-4xl font-semibold mb-12">
              How These Values Reflect in Our Platform
            </h2>
          </FadeUp>

          <div className="grid md:grid-cols-3 lg:grid-cols-5 gap-6">
            {[
              "Designs its operations framework",
              "Governs execution across brands",
              "Manages vendors and partners",
              "Supports IPP and BPP models",
              "Protects client and partner reputation",
            ].map((item, i) => (
              <FadeUp key={i} delay={i * 0.1}>
                <div className="p-6 rounded-2xl bg-black border border-white/10 flex flex-col items-center gap-4 h-full justify-center">
                  <div className="w-2 h-2 rounded-full bg-orange-500" />
                  <p className="text-sm font-medium text-gray-300">{item}</p>
                </div>
              </FadeUp>
            ))}
          </div>
        </div>
      </section>

      {/* ================= COMMITMENT ================= */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-16">
          <FadeUp>
            <div className="p-10 rounded-3xl bg-gradient-to-br from-[#12141A] to-black border border-white/10">
              <h3 className="text-2xl font-bold text-white mb-8 flex items-center gap-3">
                <Scale className="w-6 h-6 text-orange-500" />
                Commitment to Ethical Growth
              </h3>
              <ul className="space-y-6">
                {[
                  "Ethical business practices",
                  "Responsible partner enablement",
                  "Clear commercial structures",
                  "Compliance-aware operations",
                ].map((item, i) => (
                  <li key={i} className="flex items-center gap-4">
                    <div className="w-8 h-8 rounded-full bg-orange-500/10 flex items-center justify-center shrink-0">
                      <CheckCircle2 className="w-4 h-4 text-orange-500" />
                    </div>
                    <span className="text-gray-300 font-medium">{item}</span>
                  </li>
                ))}
              </ul>
              <p className="mt-8 pt-8 border-t border-white/10 text-gray-400 italic">
                "Sustainable growth matters more than rapid expansion."
              </p>
            </div>
          </FadeUp>

          <FadeUp delay={0.2}>
            <div className="p-10 rounded-3xl bg-gradient-to-br from-[#12141A] to-black border border-white/10 h-full flex flex-col justify-center">
              <h3 className="text-2xl font-bold text-white mb-6">
                Building With Purpose
              </h3>
              <p className="text-gray-400 mb-8 leading-relaxed">
                Zryoss is built for people who believe in structure over shortcuts, want ownership without operational chaos, and think long-term about business growth.
              </p>
              <div className="p-6 rounded-xl bg-orange-500/10 border border-orange-500/20">
                <p className="text-orange-200 font-medium text-lg text-center">
                  "If your vision is serious, Zryoss is designed to support it."
                </p>
              </div>
            </div>
          </FadeUp>
        </div>
      </section>

      {/* ================= CTA ================= */}
      <section className="py-32 text-center relative overflow-hidden">
        <div className="absolute inset-0 bg-[#050505]" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(255,138,0,0.1),transparent_60%)]" />

        <div className="relative z-10 max-w-4xl mx-auto px-6">
          <FadeUp>
            <h2 className="text-5xl md:text-7xl font-bold mb-8">
              Your Brand. <span className="text-orange-500">Our Engine.</span>
            </h2>
            <p className="text-xl text-gray-400 mb-12 max-w-2xl mx-auto">
              You build the business. <br />
              Zryoss powers the system behind it.
            </p>

            <a
              href="/contact"
              className="inline-flex items-center gap-3 px-8 py-4 rounded-full bg-orange-600 text-white font-semibold hover:bg-orange-500 transition-all hover:scale-105 shadow-xl shadow-orange-900/20"
            >
              Start Building Today
              <ArrowRight size={20} />
            </a>
          </FadeUp>
        </div>
      </section>

    </main>
  );
}
