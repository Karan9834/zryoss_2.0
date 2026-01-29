import React from "react";
import { motion } from "framer-motion";
import {
  CheckCircle,
  XCircle,
  Briefcase,
  Globe,
  Users,
  Layers,
  ShieldCheck,
  TrendingUp,
  ArrowRight,
  Target,
  Zap,
} from "lucide-react";

const fadeInUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
    },
  },
};

export default function PartnershipOverview() {
  return (
    <div className="bg-[#050505] text-white overflow-hidden font-sans">
      {/* =====================================================
          HERO SECTION
      ====================================================== */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden border-b border-white/5">
        {/* Background Image */}
        <div className="absolute inset-0 z-0">
          <img
            src="/partnership-hero-final.png"
            alt="Partnership Background"
            className="w-full h-full object-cover opacity-60"
          />
          <div className="absolute inset-0 bg-black/50" />
          <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-black/40 to-[#050505]" />
        </div>

        {/* Glow Effects */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[800px] bg-orange-500/10 blur-[150px] rounded-full pointer-events-none" />

        <div className="relative z-10 max-w-7xl mx-auto px-6 text-center pt-20">
          <motion.div
            initial="hidden"
            animate="visible"
            variants={fadeInUp}
            className="flex flex-col items-center"
          >
            <span className="inline-block py-1 px-3 rounded-full bg-orange-500/10 border border-orange-500/20 text-orange-400 text-sm font-semibold tracking-widest uppercase mb-6">
              Partnership Overview
            </span>
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold leading-[1.15] tracking-tight mb-5 text-white">
              Build Independent Businesses <br />
              on a <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-orange-600">Central Operating System</span>
            </h1>
            <p className="text-lg md:text-xl text-white/70 max-w-3xl mx-auto mb-10 leading-relaxed font-light">
              The partnership models under Zryoss are designed for individuals and organizations who want to build real, independent businesses—without creating execution teams, managing vendors, or building systems from scratch.
            </p>

            <div className="flex flex-wrap justify-center gap-4 text-sm md:text-base text-white/80">
              <div className="flex items-center gap-2 px-4 py-2 bg-white/5 rounded-full border border-white/10">
                <XCircle className="w-4 h-4 text-red-500" /> No Jobs
              </div>
              <div className="flex items-center gap-2 px-4 py-2 bg-white/5 rounded-full border border-white/10">
                <XCircle className="w-4 h-4 text-red-500" /> No Franchises
              </div>
              <div className="flex items-center gap-2 px-4 py-2 bg-white/5 rounded-full border border-white/10">
                <XCircle className="w-4 h-4 text-red-500" /> No Schemes
              </div>
            </div>

            <p className="mt-8 text-white font-medium text-lg">
              Zryoss offers structured business partnerships, powered by a centralized operating system.
            </p>
          </motion.div>
        </div>
      </section>

      {/* =====================================================
          WHY ZRYOSS PARTNERSHIPS EXIST
      ====================================================== */}
      <section className="relative py-24 px-6 border-b border-white/5">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeInUp}
            >
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                Why Zryoss <br /> <span className="text-orange-500">Partnerships Exist</span>
              </h2>
              <p className="text-white/70 text-lg mb-6 leading-relaxed">
                Across industries, capable people struggle not because they lack skill—but because they lack:
              </p>
              <ul className="space-y-4 mb-8">
                {["Execution systems", "Operational support", "Structured scale", "Backend reliability"].map((item, i) => (
                  <li key={i} className="flex items-center gap-3 text-white/80">
                    <div className="w-2 h-2 rounded-full bg-orange-500" />
                    {item}
                  </li>
                ))}
              </ul>
              <p className="text-xl font-semibold text-white">
                Zryoss partnerships exist to solve this gap.
              </p>
            </motion.div>

            <div className="grid gap-6">
              <motion.div
                initial={{ x: 20, opacity: 0 }}
                whileInView={{ x: 0, opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2 }}
                className="p-8 rounded-2xl bg-[#0A0A0A] border border-white/10 relative overflow-hidden group"
              >
                <div className="absolute top-0 right-0 w-32 h-32 bg-blue-500/10 blur-[60px] rounded-full" />
                <h3 className="text-xl font-bold text-white mb-4 flex items-center gap-2">
                  <Target className="w-5 h-5 text-blue-400" /> Partners Focus On:
                </h3>
                <ul className="space-y-3">
                  {["Brand building", "Client relationships", "Market growth"].map((item, i) => (
                    <li key={i} className="flex items-center gap-3 text-white/70 text-sm">
                      <CheckCircle className="w-4 h-4 text-blue-500" /> {item}
                    </li>
                  ))}
                </ul>
              </motion.div>

              <motion.div
                initial={{ x: 20, opacity: 0 }}
                whileInView={{ x: 0, opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.4 }}
                className="p-8 rounded-2xl bg-[#0A0A0A] border border-orange-500/30 relative overflow-hidden group"
              >
                <div className="absolute top-0 right-0 w-32 h-32 bg-orange-500/10 blur-[60px] rounded-full" />
                <h3 className="text-xl font-bold text-white mb-4 flex items-center gap-2">
                  <Layers className="w-5 h-5 text-orange-400" /> Zryoss Manages:
                </h3>
                <ul className="space-y-3">
                  {["Operations and execution", "Technology and workflows", "Vendor and delivery control", "Quality, coordination, and scale"].map((item, i) => (
                    <li key={i} className="flex items-center gap-3 text-white/70 text-sm">
                      <CheckCircle className="w-4 h-4 text-orange-500" /> {item}
                    </li>
                  ))}
                </ul>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* =====================================================
          TWO PARTNERSHIP MODELS
      ====================================================== */}
      <section className="relative py-24 px-6 bg-gradient-to-b from-[#050505] to-[#0A0A0A]">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <span className="text-orange-400 text-sm tracking-widest uppercase font-semibold">Our Models</span>
            <h2 className="text-3xl md:text-5xl font-bold mt-4 mb-6">Two Partnership Models at Zryoss</h2>
            <p className="text-white/60 max-w-2xl mx-auto">
              Zryoss offers two clearly defined partnership models, each designed for a different scale of business ambition.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {/* IPP Model */}
            <motion.div
              whileHover={{ y: -5 }}
              className="p-8 md:p-10 rounded-3xl bg-[#0E0E0E] border border-white/10 hover:border-orange-500/50 transition-all duration-300 relative overflow-hidden group"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-orange-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              <div className="relative z-10">
                <div className="flex items-center justify-between mb-8">
                  <div className="p-3 bg-white/5 rounded-xl border border-white/10">
                    <Briefcase className="w-8 h-8 text-orange-400" />
                  </div>
                  <span className="text-xs font-mono text-white/40">MODEL 01</span>
                </div>
                <h3 className="text-2xl font-bold text-white mb-2">Independent Prime Partner (IPP)</h3>
                <p className="text-white/60 mb-6 text-sm">Ideal for professionals, consultants, freelancers, and first-time founders.</p>

                <div className="bg-white/5 rounded-xl p-6 mb-6">
                  <h4 className="text-white font-semibold mb-4 text-sm uppercase tracking-wide">Designed for those who want to:</h4>
                  <ul className="space-y-3">
                    {["Launch their own brand", "Operate in one primary business vertical", "Start with controlled scale", "Grow steadily with system support"].map((item, i) => (
                      <li key={i} className="flex items-start gap-3 text-white/80 text-sm">
                        <div className="w-1.5 h-1.5 rounded-full bg-orange-500 mt-1.5" />
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </motion.div>

            {/* BPP Model */}
            <motion.div
              whileHover={{ y: -5 }}
              className="p-8 md:p-10 rounded-3xl bg-[#0E0E0E] border border-white/10 hover:border-orange-500/50 transition-all duration-300 relative overflow-hidden group"
            >
              <div className="absolute inset-0 bg-gradient-to-bl from-blue-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              <div className="relative z-10">
                <div className="flex items-center justify-between mb-8">
                  <div className="p-3 bg-white/5 rounded-xl border border-white/10">
                    <Globe className="w-8 h-8 text-blue-400" />
                  </div>
                  <span className="text-xs font-mono text-white/40">MODEL 02</span>
                </div>
                <h3 className="text-2xl font-bold text-white mb-2">Independent Business Partner (BPP)</h3>
                <p className="text-white/60 mb-6 text-sm">Operates at a strategic and expansion-focused level.</p>

                <div className="bg-white/5 rounded-xl p-6 mb-6">
                  <h4 className="text-white font-semibold mb-4 text-sm uppercase tracking-wide">Designed for those who want to:</h4>
                  <ul className="space-y-3">
                    {["Operate at a larger business scale", "Work across multiple verticals", "Build wider market presence", "Enable and support multiple IPPs"].map((item, i) => (
                      <li key={i} className="flex items-start gap-3 text-white/80 text-sm">
                        <div className="w-1.5 h-1.5 rounded-full bg-blue-500 mt-1.5" />
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* =====================================================
          COMMON FEATURES
      ====================================================== */}
      <section className="py-24 px-6 border-b border-white/5">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold mb-12 text-center">What All <span className="text-orange-500">Partnerships Have in Common</span></h2>

          <motion.div
            className="grid md:grid-cols-3 gap-6"
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            {[
              "Independent brand ownership",
              "Centralized operations managed by Zryoss",
              "Domain-based execution through ecosystem brands",
              "Sales enablement and demo support",
              "Account management and reporting",
              "Clear role boundaries and governance"
            ].map((feature, i) => (
              <motion.div key={i} variants={fadeInUp} className="p-6 bg-white/[0.03] border border-white/5 rounded-xl hover:border-orange-500/30 transition-colors">
                <CheckCircle className="w-8 h-8 text-orange-500 mb-4" />
                <p className="text-white font-medium">{feature}</p>
              </motion.div>
            ))}
          </motion.div>

          <div className="mt-12 text-center">
            <p className="text-xl font-light text-white/80 italic">"Partners never manage execution chaos."</p>
          </div>
        </div>
      </section>

      {/* =====================================================
          WHAT IT IS NOT
      ====================================================== */}
      <section className="py-24 px-6 bg-[#080808]">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-10">What Partnerships Are <span className="text-red-500">NOT</span></h2>
          <p className="text-white/60 mb-10">To remove any ambiguity, Zryoss partnerships are:</p>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {[
              "Not MLM",
              "Not referral-based income schemes",
              "Not franchise models",
              "Not investment or deposit plans",
              "Not employment contracts"
            ].map((item, i) => (
              <div key={i} className="flex items-center gap-3 p-4 bg-red-500/5 border border-red-500/10 rounded-lg">
                <XCircle className="w-5 h-5 text-red-500 shrink-0" />
                <span className="text-white/90 text-sm font-medium">{item.replace("Not ", "")}</span>
              </div>
            ))}
          </div>

          <p className="mt-10 text-white/80 font-medium">Earnings are generated only through real business and service delivery.</p>
        </div>
      </section>

      {/* =====================================================
          STRUCTURE / WORKFLOW
      ====================================================== */}
      <section className="py-24 px-6 relative overflow-hidden">
        <div className="absolute top-1/2 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-orange-500/20 to-transparent transform -translate-y-1/2 z-0 hidden md:block" />

        <div className="max-w-7xl mx-auto relative z-10">
          <h2 className="text-3xl font-bold mb-16 text-center">How the Partnership <span className="text-orange-500">Structure Works</span></h2>

          <div className="grid md:grid-cols-3 lg:grid-cols-6 gap-6">
            {[
              { step: 1, title: "Select Model", desc: "Appropriate model (IPP or BPP)" },
              { step: 2, title: "Setup", desc: "Brand and business setup completed" },
              { step: 3, title: "Acquire", desc: "Partner starts acquiring clients" },
              { step: 4, title: "Manage", desc: "Zryoss manages execution and delivery" },
              { step: 5, title: "Coordinate", desc: "Account management ensures coordination" },
              { step: 6, title: "Scale", desc: "Partner scales with system support" }
            ].map((item, i) => (
              <div key={i} className="relative bg-[#0E0E0E] p-6 rounded-2xl border border-white/10 text-center hover:border-orange-500/40 transition-colors">
                <div className="w-10 h-10 rounded-full bg-orange-500 text-white font-bold flex items-center justify-center mx-auto mb-4 text-lg shadow-[0_0_15px_rgba(249,115,22,0.4)]">
                  {item.step}
                </div>
                <h3 className="text-white font-semibold mb-2 text-sm">{item.title}</h3>
                <p className="text-white/50 text-xs">{item.desc}</p>
              </div>
            ))}
          </div>
          <p className="text-center mt-12 text-oraange-400 text-lg font-medium opacity-80">Growth happens through execution, not recruitment.</p>
        </div>
      </section>

      {/* =====================================================
          SUSTAINABILITY
      ====================================================== */}
      <section className="py-24 px-6 border-y border-white/5 bg-white/[0.02]">
        <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-3xl font-bold mb-6">Why This Partnership Model Is <span className="text-green-400">Sustainable</span></h2>
            <div className="space-y-4">
              {[
                "Separates business growth from execution risk",
                "Prevents founder burnout",
                "Maintains quality at scale",
                "Allows controlled expansion",
                "Protects partner and client trust"
              ].map((item, i) => (
                <div key={i} className="flex items-center gap-3">
                  <div className="w-1.5 h-1.5 bg-green-500 rounded-full" />
                  <span className="text-white/80">{item}</span>
                </div>
              ))}
            </div>
            <p className="mt-8 text-white/60 text-sm">Zryoss partnerships are built for long-term businesses, not short-term hype.</p>
          </div>

          <div className="p-8 rounded-3xl bg-[#080808] border border-white/10">
            <h3 className="text-xl font-bold mb-6 text-white text-center">Who Should Consider a Zryoss Partnership</h3>
            <div className="space-y-6">
              <div>
                <h4 className="flex items-center gap-2 text-green-400 font-semibold mb-3">
                  <CheckCircle className="w-5 h-5" /> Consider If You:
                </h4>
                <ul className="text-sm text-white/70 space-y-2 pl-7">
                  <li>• Want to build a serious business</li>
                  <li>• Value systems over shortcuts</li>
                  <li>• Prefer execution support over improvisation</li>
                  <li>• Want ownership with structure</li>
                </ul>
              </div>
              <div className="w-full h-[1px] bg-white/10" />
              <div>
                <h4 className="flex items-center gap-2 text-red-500 font-semibold mb-3">
                  <XCircle className="w-5 h-5" /> Not Suitable If You Want:
                </h4>
                <ul className="text-sm text-white/70 space-y-2 pl-7">
                  <li>• Guaranteed income</li>
                  <li>• Passive returns without effort</li>
                  <li>• Recruitment-driven models</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* =====================================================
          PHILOSOPHY
      ====================================================== */}
      <section className="py-20 px-6 text-center">
        <div className="max-w-4xl mx-auto">
          <div className="inline-block p-4 rounded-full bg-orange-500/10 mb-6">
            <Zap className="w-6 h-6 text-orange-500" />
          </div>
          <h2 className="text-3xl font-bold mb-8">One Partnership Philosophy</h2>
          <div className="flex flex-wrap justify-center gap-4 md:gap-8 mb-8">
            {["Businesses should be system-led", "Partners should own brands", "Execution should be centralized", "Scale should be controlled"].map((item, i) => (
              <span key={i} className="px-4 py-2 rounded-lg bg-white/5 border border-white/10 text-white/90 text-sm">
                {item}
              </span>
            ))}
          </div>
          <p className="text-white/60">This philosophy shapes every partnership offered.</p>
        </div>
      </section>

      {/* =====================================================
          CTA SECTION
      ====================================================== */}
      <section className="relative py-28 px-6 bg-[#060606] overflow-hidden">
        {/* Ambient Glow */}
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[500px] h-[500px] bg-orange-500/10 rounded-full blur-[120px]" />
          <div className="absolute bottom-0 right-0 w-[400px] h-[400px] bg-white/5 rounded-full blur-[120px]" />
        </div>

        <div className="relative max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 gap-16 items-center">

            {/* Left Content */}
            <div>
              <span className="inline-block mb-4 px-4 py-1 text-sm tracking-wide uppercase rounded-full bg-orange-500/10 text-orange-400 border border-orange-500/20">
                Partnership Models
              </span>

              <h2 className="text-4xl md:text-5xl font-bold text-white leading-tight mb-6">
                Build Your Vision <br />
                <span className="text-orange-500">Your Way</span>
              </h2>

              <p className="text-white/70 text-lg max-w-xl mb-10">
                Start lean with IPP or scale aggressively with BPP.
                Zryoss gives you a powerful, future-ready operating foundation to grow without limits.
              </p>

              <div className="flex flex-wrap gap-4">
                <button className="group px-8 py-4 rounded-xl bg-orange-500 text-white font-bold flex items-center gap-2 hover:bg-orange-400 transition-all shadow-[0_0_40px_rgba(249,115,22,0.35)]">
                  Become a Partner
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </button>

                <button className="px-8 py-4 rounded-xl border border-white/20 text-white font-semibold hover:border-orange-500/50 hover:text-orange-400 transition-all">
                  Compare Models
                </button>
              </div>
            </div>

            {/* Right Visual Cards */}
            <div className="relative">
              <div className="grid gap-6">

                {/* Card 1 */}
                <div className="p-6 rounded-2xl bg-white/5 backdrop-blur-xl border border-white/10 hover:border-orange-500/40 transition-all">
                  <h3 className="text-xl font-semibold text-white mb-2">IPP Model</h3>
                  <p className="text-white/60 text-sm">
                    Ideal for focused execution, faster onboarding, and lean operations.
                  </p>
                </div>

                {/* Card 2 */}
                <div className="p-6 rounded-2xl bg-white/5 backdrop-blur-xl border border-white/10 hover:border-orange-500/40 transition-all">
                  <h3 className="text-xl font-semibold text-white mb-2">BPP Model</h3>
                  <p className="text-white/60 text-sm">
                    Built for scale — multi-team execution, growth systems, and expansion.
                  </p>
                </div>

              </div>
            </div>

          </div>
        </div>
      </section>

    </div>
  );
}