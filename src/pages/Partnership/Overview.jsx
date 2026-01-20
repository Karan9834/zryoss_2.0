import { motion } from "framer-motion";
import {
  Layers,
  ShieldCheck,
  Building2,
  ArrowRight,
  CheckCircle,
  Rocket,
  TrendingUp,
} from "lucide-react";

/* =========================
   AUDIENCE DATA
========================= */
const audiences = [
  {
    icon: Rocket,
    title: "Founders & Startups",
    desc: "Build strong operational foundations with structured execution, compliance, and governance — without assembling large internal teams.",
  },
  {
    icon: TrendingUp,
    title: "Growing Companies",
    desc: "Scale teams, systems, and infrastructure while maintaining cost control, accountability, and execution clarity.",
  },
  {
    icon: Building2,
    title: "Enterprises",
    desc: "Execute across technology, legal, and infrastructure with governance-aligned, SLA-driven delivery models.",
  },
];

export default function Overview() {
  return (
    <div className="bg-[#050505] text-white overflow-hidden">
      {/* =====================================================
          HERO
      ====================================================== */}
      <section className="relative min-h-screen flex items-center overflow-hidden border-b border-white/5">
        {/* background */}
        <img
          src="https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=1920&h=1080&fit=crop"
          alt=""
          className="absolute inset-0 w-full h-full object-cover opacity-30 md:opacity-35"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/75 via-black/55 to-[#050505]" />

        {/* glows */}
        <div className="absolute -top-40 left-1/2 -translate-x-1/2 w-[720px] h-[720px] bg-orange-500/15 blur-[170px]" />
        <div className="absolute bottom-[-240px] right-[-220px] w-[600px] h-[600px] bg-orange-500/10 blur-[180px]" />

        {/* ✅ content center */}
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
          <div className="min-h-screen flex flex-col items-center justify-center text-center pt-24 pb-20">
            <motion.span
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              className="inline-flex items-center gap-2 mb-7 text-xs uppercase tracking-[0.35em] text-orange-400 font-semibold"
            >
              <span className="w-2.5 h-2.5 rounded-full bg-orange-500" />
              Overview
            </motion.span>

            {/* ✅ HERO HEADING same as Home page */}
            <motion.h1
              initial={{ opacity: 0, y: 26 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-4xl md:text-5xl font-bold leading-tight text-white"
            >
              Structured execution <br />
              across{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-orange-600">
                business operations
              </span>
            </motion.h1>

            {/* body */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.12 }}
              className="mt-8 max-w-3xl text-white/80 text-lg leading-relaxed font-light"
            >
              Zryoss is an execution-first operating platform helping
              organizations build, operate, and scale with clarity, compliance,
              and control.
            </motion.p>

            {/* highlights */}
            <div className="mt-10 flex flex-wrap justify-center gap-4">
              {[
                "Execution, not consulting",
                "Governance-driven delivery",
                "Verified partners only",
              ].map((item, i) => (
                <div
                  key={i}
                  className="flex items-center gap-2.5 px-6 py-3 rounded-full bg-white/[0.06] border border-white/15 hover:border-orange-500/40 transition"
                >
                  <CheckCircle className="w-5 h-5 text-orange-400" />
                  <span className="text-white text-[15px] font-medium">
                    {item}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* =====================================================
          CORE CAPABILITIES
      ====================================================== */}
      <section className="relative py-24 md:py-32">
        <div className="absolute -top-40 left-1/2 -translate-x-1/2 w-[620px] h-[620px] bg-orange-500/10 blur-[170px]" />

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mb-14 md:mb-20">
            <span className="text-xs uppercase tracking-[0.3em] text-orange-400 font-semibold">
              Core Capabilities
            </span>

            {/* ✅ Section Heading like Home page */}
            <h2 className="mt-4 text-3xl md:text-5xl font-bold leading-tight">
              What{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-orange-600">
                Zryoss
              </span>{" "}
              Does
            </h2>

            <p className="mt-6 text-white/75 text-lg leading-relaxed font-light">
              Zryoss delivers execution across critical business functions
              through structured processes, centralized governance, and
              accountable outcomes.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 md:gap-10">
            {[
              {
                icon: Layers,
                title: "Technology Enablement",
                desc: "Scalable software, cloud, and digital systems aligned with long-term business objectives.",
              },
              {
                icon: ShieldCheck,
                title: "Legal & Compliance",
                desc: "Governance, contracts, and regulatory execution that reduce risk and ensure continuity.",
              },
              {
                icon: Building2,
                title: "Infrastructure & Operations",
                desc: "Execution-driven real estate and operational infrastructure via verified partners.",
              },
            ].map((item, i) => {
              const Icon = item.icon;
              return (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 26 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  whileHover={{ y: -8 }}
                  className="rounded-3xl border border-white/10 bg-white/[0.04] backdrop-blur-xl p-9 hover:border-orange-500/40 transition relative overflow-hidden group"
                >
                  <div className="absolute inset-0 bg-gradient-to-br from-orange-500/0 via-orange-500/0 to-orange-500/12 opacity-0 group-hover:opacity-100 transition-opacity" />

                  <div className="relative z-10">
                    <div className="w-14 h-14 rounded-2xl mb-7 bg-orange-500/10 border border-orange-500/25 flex items-center justify-center">
                      <Icon className="w-7 h-7 text-orange-400" />
                    </div>

                    {/* ✅ Card title scale */}
                    <h3 className="text-xl md:text-2xl font-semibold mb-4">
                      {item.title}
                    </h3>

                    <p className="text-white/75 text-[16px] leading-relaxed font-light">
                      {item.desc}
                    </p>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* =====================================================
          WHO ZRYOSS IS BUILT FOR
      ====================================================== */}
      <section className="relative py-24 md:py-32 overflow-hidden border-t border-white/5">
        <div className="absolute -top-52 left-1/2 -translate-x-1/2 w-[640px] h-[640px] bg-orange-500/10 blur-[170px]" />

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mb-14 md:mb-20">
            <span className="text-xs uppercase tracking-[0.3em] text-orange-400 font-semibold">
              Target Audience
            </span>

            {/* ✅ Section heading */}
            <h2 className="mt-4 text-3xl md:text-5xl font-bold leading-tight">
              Who{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-orange-600">
                Zryoss
              </span>{" "}
              Is Built For
            </h2>

            <p className="mt-6 text-white/75 text-lg leading-relaxed font-light">
              Zryoss is designed for organizations that value execution clarity,
              governance, and long-term operational control.
            </p>
          </div>

          <motion.div
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            variants={{
              show: { transition: { staggerChildren: 0.12 } },
            }}
            className="grid md:grid-cols-3 gap-8 md:gap-10"
          >
            {audiences.map((item, i) => {
              const Icon = item.icon;
              return (
                <motion.div
                  key={i}
                  variants={{
                    hidden: { opacity: 0, y: 30 },
                    show: { opacity: 1, y: 0 },
                  }}
                  whileHover={{ y: -8 }}
                  className="rounded-3xl border border-white/10 bg-white/[0.04] backdrop-blur-xl p-9 hover:border-orange-500/40 transition relative overflow-hidden group"
                >
                  <div className="absolute inset-0 bg-gradient-to-br from-orange-500/0 via-orange-500/0 to-orange-500/12 opacity-0 group-hover:opacity-100 transition-opacity" />

                  <div className="relative z-10">
                    <div className="w-14 h-14 rounded-2xl mb-7 bg-orange-500/10 border border-orange-500/25 flex items-center justify-center">
                      <Icon className="w-7 h-7 text-orange-400" />
                    </div>

                    <h3 className="text-xl md:text-2xl font-semibold mb-4">
                      {item.title}
                    </h3>

                    <p className="text-white/75 text-[16px] leading-relaxed font-light">
                      {item.desc}
                    </p>
                  </div>
                </motion.div>
              );
            })}
          </motion.div>
        </div>
      </section>

      {/* =====================================================
          WORKFLOW
      ====================================================== */}
      <section className="relative py-24 md:py-32 bg-black/30 overflow-hidden border-t border-white/5">
        <div className="absolute -top-40 left-1/2 -translate-x-1/2 w-[620px] h-[620px] bg-orange-500/10 blur-[170px]" />

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mb-14 md:mb-20">
            <span className="text-xs uppercase tracking-[0.3em] text-orange-400 font-semibold">
              Operating Model
            </span>

            {/* ✅ Section heading */}
            <h2 className="mt-4 text-3xl md:text-5xl font-bold text-white">
              Execution{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-orange-600">
                Workflow
              </span>
            </h2>

            <p className="mt-6 text-white/75 text-lg leading-relaxed font-light">
              A structured, governance-driven execution framework designed to
              reduce ambiguity, improve accountability, and enable predictable
              outcomes across business operations.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-5 gap-7">
            {[
              {
                step: "01",
                title: "Assess",
                desc: "Understand business context, constraints, risks, and execution scope before action.",
              },
              {
                step: "02",
                title: "Align",
                desc: "Define objectives, stakeholders, timelines, and governance responsibilities.",
              },
              {
                step: "03",
                title: "Execute",
                desc: "Deliver through verified partners with milestone-based execution and oversight.",
              },
              {
                step: "04",
                title: "Govern",
                desc: "Track progress, enforce SLAs, manage risks, and maintain compliance standards.",
              },
              {
                step: "05",
                title: "Scale",
                desc: "Optimize systems, expand execution, and support long-term operational growth.",
              },
            ].map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 26 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.08 }}
                whileHover={{ y: -8 }}
                className="group relative rounded-3xl border border-white/10 bg-white/[0.04] backdrop-blur-xl p-8 hover:border-orange-500/40 transition overflow-hidden"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-orange-500/0 via-orange-500/0 to-orange-500/12 opacity-0 group-hover:opacity-100 transition-opacity" />

                <div className="relative z-10">
                  <div className="inline-flex items-center justify-center w-14 h-14 rounded-2xl bg-orange-500/10 border border-orange-500/25 text-orange-400 font-bold mb-6 text-lg">
                    {item.step}
                  </div>

                  <h3 className="text-xl font-semibold text-white group-hover:text-orange-400 transition">
                    {item.title}
                  </h3>

                  <p className="mt-4 text-white/75 text-[15px] leading-relaxed font-light">
                    {item.desc}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>

          <p className="mt-12 text-sm text-white/60 max-w-2xl font-light leading-relaxed">
            This workflow is applied consistently across technology, legal, and
            infrastructure engagements to ensure execution clarity and governance.
          </p>
        </div>
      </section>

      {/* =====================================================
          CTA
      ====================================================== */}
      <section className="py-24 md:py-32 text-center">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="rounded-3xl border border-orange-500/25 bg-white/[0.04] p-12 md:p-16 relative overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-br from-orange-500/12 via-transparent to-transparent opacity-70 pointer-events-none" />

            {/* ✅ CTA HEADING same */}
            <h2 className="relative text-4xl md:text-5xl font-bold mb-8 leading-tight">
              Build with clarity. <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-orange-600">
                Scale with confidence.
              </span>
            </h2>

            <p className="relative text-white/80 text-lg mb-12 max-w-2xl mx-auto font-light leading-relaxed">
              Talk to Zryoss about structured execution for your business.
            </p>

            <button className="relative inline-flex items-center gap-2 px-10 py-4 rounded-xl bg-orange-500 hover:bg-orange-600 text-white font-semibold text-lg transition shadow-[0_0_26px_rgba(249,115,22,0.28)]">
              Talk to Zryoss <ArrowRight className="w-5 h-5" />
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}
