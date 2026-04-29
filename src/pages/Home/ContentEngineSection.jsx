import React from "react";
import { Link } from "react-router-dom";
import { CheckCircle2, ArrowRight } from "lucide-react";
import { motion } from "framer-motion";

const FadeUp = ({ children, delay = 0, className = "" }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.75, ease: "easeOut", delay }}
      className={className}
    >
      {children}
    </motion.div>
  );
};

export default function ContentEngineSection() {
  const steps = [
    {
      number: "1",
      title: "Build Your Presence",
      desc: "We help you create a strong identity so people notice, trust, and remember you.",
      points: [
        "Personal / Business Branding",
        "Clear Positioning",
        "Consistent Content Direction",
      ],
    },
    {
      number: "2",
      title: "Reach the Right Audience",
      desc: "Your presence is pushed to the right people so opportunities start coming to you.",
      points: [
        "Multi-platform Presence",
        "Audience Growth",
        "Increased Visibility",
      ],
    },
    {
      number: "3",
      title: "Convert into Business",
      desc: "We help you turn attention into clients and revenue.",
      points: [
        "Lead Generation",
        "Deal Closing Support",
        "Business Opportunities",
      ],
    },
  ];

  const whoIsThisFor = [
    "Want to start your own business",
    "Already running a business but want more clients",
    "Want growth without chasing leads",
    "Want a system, not struggle",
  ];

  return (
    <section className="relative py-8 md:py-12 lg:py-16 bg-[#050505] overflow-hidden">
      {/* Background Decor */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-orange-500/5 blur-[120px] rounded-full pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-orange-500/5 blur-[120px] rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 md:px-6 lg:px-8 relative z-10">
        
        {/* Header Content */}
        <FadeUp>
          <div className="text-center max-w-4xl mx-auto mb-10 lg:mb-12">
            <span className="text-orange-500 text-[10px] sm:text-xs font-bold tracking-[0.45em] uppercase block mb-3">
              From Visibility to Business
            </span>
            <h2 className="text-3xl md:text-4xl font-bold leading-tight md:leading-snug text-white mb-4">
              Content Engine by{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-orange-600">
                Zryoss
              </span>
            </h2>
            <div className="w-16 h-[2px] bg-gradient-to-r from-transparent via-orange-500 to-transparent mx-auto rounded-full mb-4 opacity-60" />
            <p className="text-gray-300 text-sm md:text-base leading-snug md:leading-relaxed font-light mx-auto max-w-2xl">
              We help you grow your visibility, bring the right audience, and turn that attention into real business — while we handle the backend execution.
            </p>
          </div>
        </FadeUp>

        {/* 3 Steps */}
        <div className="grid md:grid-cols-3 gap-4 md:gap-6 lg:gap-8 mb-10 md:mb-12">
          {steps.map((step, idx) => (
            <FadeUp key={idx} delay={idx * 0.15} className="h-full">
              <div className="h-full rounded-3xl border border-white/10 bg-gradient-to-br from-white/[0.05] to-transparent p-8 hover:border-orange-500/30 hover:shadow-2xl hover:shadow-orange-500/10 transition-all duration-500 group relative overflow-hidden">
                <div className="absolute top-0 right-0 w-32 h-32 bg-orange-500/5 blur-[40px] group-hover:bg-orange-500/10 transition-colors" />
                
                <div className="w-12 h-12 rounded-full bg-gradient-to-br from-orange-500/20 to-orange-600/20 border border-orange-500/30 flex items-center justify-center text-orange-400 font-bold text-lg mb-4 group-hover:scale-110 transition-transform duration-300">
                  {step.number}
                </div>
                
                <h3 className="text-2xl font-bold text-white mb-3 group-hover:text-orange-400 transition-colors">
                  {step.title}
                </h3>
                
                <p className="text-gray-300 text-sm md:text-base leading-snug md:leading-relaxed font-light mb-4">
                  {step.desc}
                </p>
                
                <div className="space-y-3">
                  {step.points.map((point, pIdx) => (
                    <div key={pIdx} className="flex items-start gap-3">
                      <CheckCircle2 className="w-4 h-4 text-orange-500 shrink-0 mt-0.5" />
                      <span className="text-gray-400 text-sm font-light">
                        {point}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </FadeUp>
          ))}
        </div>

        {/* Simple Power Line */}
        <FadeUp delay={0.3}>
          <div className="relative rounded-2xl border border-orange-500/20 bg-orange-500/5 p-6 md:p-8 text-center max-w-4xl mx-auto mb-10 md:mb-12 shadow-[0_0_40px_rgba(249,115,22,0.1)]">
            <h4 className="text-lg md:text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-orange-300 via-orange-400 to-orange-500 tracking-wide">
              People see you <span className="text-white/50 mx-2">→</span> People trust you <span className="text-white/50 mx-2">→</span> People buy from you
            </h4>
          </div>
        </FadeUp>

        {/* Bottom Section: Who is this for + CTA */}
        <div className="grid lg:grid-cols-2 gap-4 md:gap-6 lg:gap-8 items-center max-w-6xl mx-auto">
          {/* Who is this for */}
          <FadeUp delay={0.4}>
            <div>
              <span className="text-orange-500 text-[10px] sm:text-xs font-bold tracking-[0.3em] uppercase block mb-3">
                Who Is This For
              </span>
              <h3 className="text-2xl md:text-3xl font-bold text-white mb-6">
                Designed for those ready to scale
              </h3>
              <div className="space-y-4">
                {whoIsThisFor.map((item, idx) => (
                  <div key={idx} className="flex items-center gap-4">
                    <div className="w-8 h-8 rounded-full bg-white/5 border border-white/10 flex items-center justify-center shrink-0">
                      <CheckCircle2 className="w-4 h-4 text-orange-400" />
                    </div>
                    <span className="text-gray-300 text-base md:text-lg font-light">
                      {item}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </FadeUp>

          {/* CTA Card */}
          <FadeUp delay={0.5}>
            <div className="relative rounded-3xl border border-white/10 bg-gradient-to-br from-white/[0.05] to-transparent p-8 md:p-12 text-center overflow-hidden">
              <div className="absolute inset-0 bg-orange-500/5 mix-blend-overlay pointer-events-none" />
              
              <h3 className="text-2xl md:text-3xl font-bold text-white mb-6 relative z-10">
                Start Building Your Business with Zryoss
              </h3>
              
              <div className="flex flex-col sm:flex-row items-center justify-center gap-4 relative z-10">
                <Link to="/apply" className="w-full sm:w-auto">
                  <button className="w-full sm:w-auto px-8 py-3.5 bg-gradient-to-r from-orange-500 to-orange-600 text-white text-sm font-bold tracking-wide rounded-full shadow-[0_10px_30px_rgba(249,115,22,0.3)] hover:shadow-[0_15px_40px_rgba(249,115,22,0.5)] hover:scale-105 hover:-translate-y-0.5 transition-all duration-300 flex items-center justify-center gap-2 group">
                    Start Now
                    <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
                  </button>
                </Link>
                <Link to="/contact" className="w-full sm:w-auto">
                  <button className="w-full sm:w-auto px-8 py-3.5 border border-white/20 text-white font-semibold text-sm rounded-full hover:border-orange-500/50 hover:bg-white/5 hover:scale-105 hover:-translate-y-0.5 transition-all duration-300">
                    Book a Demo
                  </button>
                </Link>
              </div>
            </div>
          </FadeUp>
        </div>

      </div>
    </section>
  );
}
