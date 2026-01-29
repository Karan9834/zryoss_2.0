import React from "react";
import { motion } from "framer-motion";
import { Sparkles, ArrowUpRight } from "lucide-react";
import { useNavigate } from "react-router-dom";

const fadeUp = {
  hidden: { opacity: 0, y: 28 },
  show: { opacity: 1, y: 0 },
};

export default function HowHeroSection() {
  const navigate = useNavigate();
  return (
    <section className="relative bg-[#050505] py-20 md:py-32 overflow-hidden border-b border-white/5">
      {/* lights/glows */}
      <div className="absolute top-0 left-1/4 -translate-x-1/2 h-[600px] w-[600px] rounded-full bg-orange-500/10 blur-[120px] pointer-events-none" />
      <div className="absolute bottom-0 right-0 h-[500px] w-[500px] rounded-full bg-blue-500/5 blur-[100px] pointer-events-none" />

      <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">

          {/* Left Content */}
          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.35 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="text-left"
          >
            {/* Badge - Matching Overview.jsx typography */}
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-orange-500/30 bg-orange-500/10 backdrop-blur-sm mb-5">
              <span className="w-2 h-2 rounded-full bg-orange-500 animate-pulse" />
              <span className="text-orange-500 text-xs uppercase tracking-[0.45em] font-bold">
                How Zryoss Works
              </span>
            </div>

            {/* Heading - Matching Overview.jsx typography */}
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold leading-[1.15] tracking-tight mb-5 text-white">
              A Clear System. <br />
              <span className="block mt-1">A Structured Path.</span>
              <span className="block text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-orange-600 mt-1">
                A Scalable Outcome.
              </span>
            </h1>

            {/* Paragraph 1 - Matching Overview.jsx typography */}
            <p className="text-xl text-gray-400 leading-relaxed font-light mb-6">
              Zryoss is designed to remove confusion from business building. It does not rely
              on motivation, guesswork, or individual effort alone.
            </p>

            {/* Paragraph 2 - Matching Overview.jsx typography */}
            <p className="text-xl text-gray-400 leading-relaxed font-light mb-8">
              It works through a{" "}
              <span className="text-white font-medium">step-by-step operating system</span>{" "}
              that guides individuals and businesses to a structured, scalable brand.
            </p>

            {/* Progress pill */}
            <div className="flex flex-wrap items-center gap-3 mb-10">
              <Pill label="Connect" />
              <Pill label="Choose Path" />
              <Pill label="Build" />
              <Pill label="Execute" />
              <Pill label="Scale" />
            </div>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row gap-4">
              <button
                onClick={() => navigate('/apply')}
                className="rounded-xl bg-orange-500 px-8 py-4 font-bold text-white shadow-[0_0_25px_rgba(249,115,22,0.35)] hover:bg-orange-600 transition"
              >
                Become an IPP
              </button>

              <button
                onClick={() => navigate('/apply')}
                className="rounded-xl border border-white/10 bg-white/5 px-8 py-4 font-semibold text-white hover:border-orange-500/50 hover:text-orange-300 transition inline-flex items-center justify-center gap-2"
              >
                Become a BPP <ArrowUpRight size={18} />
              </button>
            </div>
          </motion.div>

          {/* Right Image */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
            className="relative hidden lg:block"
          >
            <div className="relative rounded-2xl overflow-hidden border border-white/10 shadow-2xl">
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent z-10" />
              <img
                src="/How yoss Works End-to End.jpg"
                alt="How Zryoss Works"
                className="w-full h-[260px] md:h-[420px] object-cover rounded-2xl transform hover:scale-105 transition-transform duration-700"
              />
            </div>
            {/* Decorative element behind */}
            <div className="absolute -z-10 top-10 -right-10 w-full h-full border border-white/5 rounded-2xl" />
          </motion.div>

        </div>
      </div>
    </section>
  );
}

function Pill({ label }) {
  return (
    <div className="rounded-full border border-white/10 bg-white/5 px-5 py-2 text-white/80 text-sm font-medium hover:border-orange-500/30 transition-colors">
      {label}
    </div>
  );
}
