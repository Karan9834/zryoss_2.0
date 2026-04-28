import React from "react";
import FadeUp from "../../components/animations/FadeUp";
import { CheckCircle2, ArrowRight } from "lucide-react";
import { useNavigate } from "react-router-dom";

export default function WhatIsZryoss() {
  const navigate = useNavigate();
  const points = [
    "Brand identity & premium positioning setup",
    "Personal branding via podcasts, reels & content",
    "Social media growth & lead generation system",
    "Website, apps & high-converting funnels",
    "Marketing creatives (brochures, videos & ad campaigns)",
    "Dedicated growth strategist & account manager",
    "Client pitching, demo & closing support",
    "Funding readiness (pitch deck, strategy & guidance)",
    "Investor & government funding support",
    "Complete backend execution & vendor management",
    "Access to 100+ verified service ecosystem",
  ];

  return (
    <section
      id="platform"
      className="py-24 bg-[#0A0A0A] relative overflow-hidden scroll-mt-24 z-10"
    >
      {/* Background Decor */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-orange-500/5 blur-[120px] rounded-full" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-orange-500/3 blur-[100px] rounded-full" />

      {/* ✅ width aligned with navbar/footer */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-start">
          {/* LEFT CONTENT */}
          <div className="flex flex-col w-full h-auto">
            <FadeUp>
              <div>
                <span className="text-xs uppercase tracking-[0.3em] text-orange-500 font-bold mb-4 block">
                  Start Your Business Without Building The Backend
                </span>

                <h2 className="text-4xl lg:text-5xl font-bold leading-tight text-white mb-6">
                  Build Your{" "}
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-orange-600">
                    Brand 
                  </span>
                </h2>

                <div className="w-20 h-1 bg-orange-500 rounded-full mb-8" />

                <p className="text-gray-300 text-lg leading-relaxed font-light max-w-xl mb-4">
                  With Zryoss, you don&apos;t just start a business — you build a powerful brand. We help you create visibility through content, podcasts, reels, and digital presence while we handle the backend, execution, and delivery.
                </p>

                <p className="text-gray-400 text-base leading-relaxed font-light max-w-xl mb-10">
                  Zryoss provides complete brand + business support including:
                </p>
              </div>
            </FadeUp>

            {/* Bullet Points */}
            <FadeUp delay={0.2}>
              <div className="flex flex-col gap-4 mb-10">
                {points.map((point, idx) => (
                  <div key={idx} className="flex items-center gap-4">
                    <CheckCircle2 className="w-6 h-6 text-orange-500 shrink-0" />

                    <span className="text-gray-300 text-lg font-light leading-snug">
                      {point}
                    </span>
                  </div>
                ))}
              </div>

              <p className="text-gray-500 text-sm font-medium mt-6 tracking-wide">
                Powered by <span className="text-orange-400">Kryoss Softech Pvt Ltd</span>
              </p>
            </FadeUp>
          </div>

          {/* RIGHT (Image frame + Quote frame) */}
          <div className="flex flex-col w-full gap-8">
            <FadeUp delay={0.15} className="w-full">
              {/* ✅ TOP IMAGE FRAME */}
              <div className="relative rounded-[42px] border border-orange-500/25 bg-black/40 overflow-hidden h-full">
                <div className="p-3">
                  <div className="relative rounded-[28px] overflow-hidden shadow-[0_35px_90px_rgba(0,0,0,0.75)]">
                    <video
                      src="/video/zryoss_intro_video.mp4"
                      autoPlay
                      loop
                      muted
                      controls
                      controlsList="nodownload noremoteplayback"
                      playsInline
                      className="w-full h-full object-cover"
                    >
                      <track
                        kind="captions"
                        src=""
                        srcLang="en"
                        label="English"
                        default
                      />
                    </video>
                  </div>
                </div>

                <div className="absolute inset-0 pointer-events-none bg-gradient-to-br from-orange-500/10 via-transparent to-transparent opacity-70" />
              </div>
            </FadeUp>

            {/* ✅ BOTTOM CARD FRAME */}
            <FadeUp delay={0.3} className="w-full relative z-10">
              <div className="relative rounded-[32px] border border-white/10 bg-gradient-to-br from-white/[0.06] to-white/[0.01] backdrop-blur-2xl overflow-hidden shadow-[0_25px_50px_rgba(0,0,0,0.5)] group hover:border-white/15 transition-all duration-500 w-full block">
                {/* Glow effects */}
                <div className="absolute inset-0 bg-orange-500/5 mix-blend-overlay pointer-events-none transition-opacity duration-500 opacity-50 group-hover:opacity-100" />
                <div className="absolute top-0 right-0 w-[200px] h-[200px] bg-orange-500/10 blur-[80px] rounded-full pointer-events-none" />

                <div className="relative p-8 lg:p-12 flex flex-col gap-8 h-full">

                  {/* Top Text Content */}
                  <div className="flex items-stretch gap-6">
                    <div className="w-[3px] bg-gradient-to-b from-orange-400 to-orange-600 rounded-full shrink-0 shadow-[0_0_15px_rgba(249,115,22,0.4)]" />

                    <div className="flex flex-col justify-center">
                      <p className="text-white text-2xl md:text-3xl font-bold leading-tight tracking-tight">
                        Launch &amp; Scale Your Brand With Zryoss
                      </p>
                      <p className="text-gray-400 text-[15px] font-medium leading-relaxed mt-3 max-w-[420px]">
                        Start your journey as a brand owner, not just a service provider. With Zryoss, you build authority through content, attract clients, and scale your business while we handle execution.
                      </p>
                    </div>
                  </div>

                  {/* Separator */}
                  <div className="h-px w-full bg-gradient-to-r from-white/10 via-white/5 to-transparent" />

                  {/* CTA Buttons Row */}
                  <div className="flex flex-wrap items-center gap-4">
                    <button
                      onClick={() => navigate('/apply')}
                      className="px-8 py-3.5 bg-gradient-to-r from-orange-500 to-orange-600 text-white text-sm font-bold tracking-wide rounded-[16px] shadow-[0_10px_30px_rgba(249,115,22,0.3)] hover:shadow-[0_15px_40px_rgba(249,115,22,0.5)] hover:bg-orange-600 hover:-translate-y-0.5 transition-all duration-300"
                    >
                      Start Building Your Brand
                    </button>

                    <button
                      onClick={() => navigate('/contact')}
                      className="px-8 py-3.5 bg-white/5 hover:bg-white/10 text-white text-sm font-semibold tracking-wide rounded-[16px] border border-white/10 hover:border-orange-500/50 hover:-translate-y-0.5 transition-all duration-300 flex items-center gap-2 group/btn"
                    >
                      Book a Growth Demo
                      <ArrowRight className="w-4 h-4 text-orange-400 group-hover/btn:translate-x-1 transition-transform" />
                    </button>
                  </div>

                </div>
              </div>
            </FadeUp>
          </div>
        </div>
      </div>
    </section>
  );
}
