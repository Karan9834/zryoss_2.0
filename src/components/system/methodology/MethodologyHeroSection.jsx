import React from "react";
import { motion } from "framer-motion";
import { Sparkles, Layers, ArrowUpRight } from "lucide-react";
import { useNavigate } from "react-router-dom";

const fadeUp = {
  hidden: { opacity: 0, y: 28 },
  show: { opacity: 1, y: 0 },
};

export default function MethodologyHeroSection() {
  const navigate = useNavigate();
  return (
    <section className="relative bg-[#050505] min-h-screen flex items-center py-20 md:py-32 overflow-hidden border-b border-white/5">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(249,115,22,0.12),transparent_55%)]" />
      <div className="absolute -bottom-56 left-1/2 -translate-x-1/2 h-[820px] w-[820px] rounded-full bg-orange-500/10 blur-[120px] pointer-events-none" />

      <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.35 }}
          transition={{ duration: 0.9, ease: "easeOut" }}
          className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center"
        >
          {/* Left Content */}
          <div className="text-left">
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-orange-500/30 bg-orange-500/10 backdrop-blur-sm mb-5">
              <Sparkles size={16} className="text-orange-500" />
              <p className="text-orange-500 text-xs uppercase tracking-[0.45em] font-bold">
                Zryoss Methodology
              </p>
            </div>

            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold leading-[1.15] tracking-tight mb-5 text-white">
              A Structured Framework for{" "}
              <span className="block text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-orange-600 mt-1">
                Sustainable Businesses
              </span>
            </h1>

            <p className="text-xl text-gray-400 leading-relaxed font-light mb-6">
              Zryoss Methodology is the{" "}
              <span className="text-white font-medium">core execution framework</span>{" "}
              powering the entire ecosystem — defining how businesses are built, operated
              and scaled through a repeatable system.
            </p>

            <div className="flex flex-wrap gap-4 mb-10">
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

          {/* Right Image */}
          <div className="relative">
            <div className="absolute inset-0 rounded-3xl bg-orange-500/10 blur-2xl -z-10" />
            <div className="rounded-3xl border border-white/10 bg-white/5 p-2">
              <img
                src="/AZryous Mathodology.jpg"
                alt="Zryoss Methodology"
                className="w-full h-[260px] md:h-[420px] object-cover rounded-2xl transform hover:scale-105 transition-transform duration-700"
              />
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
