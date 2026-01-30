import React from "react";
import FadeUp from "../../components/animations/FadeUp";
import { CheckCircle2 } from "lucide-react";

export default function WhatIsZryoss() {
  const points = [
    "Launch your own independent brand",
    "Acquire and manage clients directly",
    "Deliver services professionally via specialist brands",
    "Scale without the burden of building internal teams",
    "Operate with absolute clarity and systemized control",
  ];

  return (
    <section
      id="platform"
      className="py-24 bg-[#050505] relative overflow-hidden scroll-mt-24 z-10"
    >
      {/* Background Decor */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-orange-500/5 blur-[120px] rounded-full" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-orange-500/3 blur-[100px] rounded-full" />

      {/* ✅ width aligned with navbar/footer */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20">
          {/* LEFT CONTENT */}
          <div className="flex flex-col justify-between h-full gap-8 lg:gap-12">
            <FadeUp>
              <div>
                <span className="text-xs uppercase tracking-[0.3em] text-orange-500 font-bold mb-4 block">
                  A Business Operating System
                </span>

                <h2 className="text-4xl md:text-5xl font-bold leading-tight text-white mb-6">
                  Your Growth {" "}
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-orange-600">
                    Partner
                  </span>
                </h2>

                <div className="w-24 h-1 bg-orange-500 rounded-full mb-10" />

                <p className="text-gray-300 text-lg leading-relaxed font-light max-w-xl">
                  ZRYOSS provides a ready-to-use business operating backbone that
                  lets you focus on growth and relationships — while we handle the
                  complex execution behind the scenes.
                </p>
              </div>
            </FadeUp>

            {/* Bullet Points */}
            <FadeUp delay={0.2}>
              <div className="space-y-5">
                {points.map((point, idx) => (
                  <div key={idx} className="flex items-start gap-4">
                    <div className="mt-0.5">
                      <CheckCircle2 className="w-6 h-6 text-orange-500 shrink-0" />
                    </div>

                    <span className="text-gray-300 text-lg font-light leading-snug">
                      {point}
                    </span>
                  </div>
                ))}
              </div>
            </FadeUp>
          </div>

          {/* RIGHT (Image frame + Quote frame) */}
          <div className="flex flex-col justify-between h-full gap-6">
            <FadeUp delay={0.15}>
              {/* ✅ TOP IMAGE FRAME */}
              <div className="relative rounded-[42px] border border-orange-500/25 bg-black/40 overflow-hidden h-full">
                <div className="p-8">
                  <div className="relative rounded-[28px] overflow-hidden shadow-[0_35px_90px_rgba(0,0,0,0.75)]">
                    <img
                      src="/what_imge.jpg"
                      alt="ZRYOSS Platform"
                      className="w-full h-full object-cover"
                    />
                  </div>
                </div>

                <div className="absolute inset-0 pointer-events-none bg-gradient-to-br from-orange-500/10 via-transparent to-transparent opacity-70" />
              </div>
            </FadeUp>

            {/* ✅ BOTTOM QUOTE FRAME */}
            <FadeUp delay={0.3}>
              <div className="relative rounded-[24px] border border-white/10 bg-white/[0.04] backdrop-blur-xl overflow-hidden shadow-[0_15px_40px_rgba(0,0,0,0.45)]">
                <div className="absolute inset-0 bg-gradient-to-br from-orange-500/10 via-transparent to-transparent opacity-50 pointer-events-none" />

                <div className="relative p-5 md:p-6">
                  <div className="absolute left-0 top-4 bottom-4 w-[3px] bg-orange-500 rounded-full" />

                  <p className="text-white text-base md:text-lg font-light leading-snug italic pl-6">
                    “You focus on growth and relationships.
                    <br />
                    <span className="text-orange-400 font-semibold italic">
                      ZRYOSS handles execution and operations.
                    </span>
                    ”
                  </p>
                </div>
              </div>
            </FadeUp>
          </div>
        </div>
      </div>
    </section>
  );
}
