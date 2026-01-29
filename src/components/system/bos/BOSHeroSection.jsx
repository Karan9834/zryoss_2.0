import React from "react";
import { motion } from "framer-motion";
import { Sparkles, Cpu, ArrowUpRight } from "lucide-react";
import { useNavigate } from "react-router-dom";

const fadeUp = {
  hidden: { opacity: 0, y: 26 },
  show: { opacity: 1, y: 0 },
};

export default function BOSHeroSection() {
  const navigate = useNavigate();
  return (
    <section className="relative bg-[#050505] min-h-screen flex items-center py-20 md:py-32 overflow-hidden border-b border-white/5">
      <div className="absolute -top-40 left-1/2 -translate-x-1/2 h-[680px] w-[680px] rounded-full bg-orange-500/10 blur-[120px] pointer-events-none" />
      <div className="absolute -bottom-48 right-[-120px] h-[560px] w-[560px] rounded-full bg-orange-500/10 blur-[120px] pointer-events-none" />

      <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.35 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="grid grid-cols-1 lg:grid-cols-[1.2fr_0.8fr] gap-12 lg:gap-16 items-center"
        >
          {/* Left content */}
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-orange-500/30 bg-orange-500/10 backdrop-blur-sm mb-5">
              <span className="w-2 h-2 rounded-full bg-orange-500 animate-pulse" />
              <p className="text-orange-500 text-xs uppercase tracking-[0.45em] font-bold">
                Business Operating System
              </p>
            </div>

            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold leading-[1.15] tracking-tight mb-5 text-white">
              A System That Runs Your Business —{" "}
              <span className="block text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-orange-600 mt-1">
                Not Just Supports It
              </span>
            </h1>

            <p className="text-xl text-gray-400 leading-relaxed font-light mb-6">
              A Business Operating System (Business OS) is the foundation that allows a
              business to function consistently, scale efficiently, and grow sustainably.
            </p>

            <p className="text-xl text-gray-400 leading-relaxed font-light mb-8">
              Zryoss is built as a{" "}
              <span className="text-white font-medium">Business Operating System</span>, not
              a service provider.
            </p>

            <div className="flex flex-wrap gap-4 mb-6">
              <button
                onClick={() => navigate('/platform/how-zryoss-works')}
                className="rounded-xl bg-orange-500 px-8 py-4 font-bold text-white shadow-[0_0_25px_rgba(249,115,22,0.35)] hover:bg-orange-600 transition"
              >
                See How Zryoss Works
              </button>

              <button
                onClick={() => navigate('/apply')}
                className="rounded-xl border border-white/10 bg-white/5 px-8 py-4 font-semibold text-white hover:border-orange-500/50 hover:text-orange-300 transition inline-flex items-center justify-center gap-2"
              >
                Join as IPP / BPP <ArrowUpRight size={18} />
              </button>
            </div>
          </div>

          {/* Right visual card */}
          <div className="rounded-[34px] border border-orange-500/20 bg-gradient-to-b from-orange-500/12 to-transparent p-8 shadow-[0_0_45px_rgba(249,115,22,0.12)] relative overflow-hidden group hover:border-orange-500/40 transition-colors duration-500">
            <div className="absolute -top-24 -right-24 h-72 w-72 rounded-full bg-orange-500/15 blur-3xl" />

            <div className="relative flex items-center gap-3">
              <div className="h-12 w-12 rounded-2xl border border-white/10 bg-[#0B1220]/55 flex items-center justify-center">
                <Cpu size={22} className="text-orange-400" />
              </div>

              <div>
                <p className="text-orange-300 text-xs font-semibold tracking-widest uppercase">
                  Zryoss OS Concept
                </p>
                <h3 className="text-white text-xl font-extrabold group-hover:text-orange-100 transition-colors">
                  System → Execution → Scale
                </h3>
              </div>
            </div>

            <p className="relative mt-5 text-white/70 text-sm leading-relaxed font-light">
              Just like a computer cannot function without an OS, a business cannot grow
              without a structured system controlling execution, coordination and scalability.
            </p>

            <div className="relative mt-7 grid grid-cols-2 gap-3">
              <Mini label="Consistency" />
              <Mini label="Coordination" />
              <Mini label="Scalability" />
              <Mini label="Control" />
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

function Mini({ label }) {
  return (
    <div className="rounded-2xl border border-white/10 bg-[#0B1220]/45 px-4 py-3 text-center hover:border-orange-500/30 transition-colors">
      <p className="text-white/80 text-xs font-semibold tracking-wide">{label}</p>
    </div>
  );
}
