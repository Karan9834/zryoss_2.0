import React from "react";
import { motion } from "framer-motion";

export default function ConnectedBrandsSection() {
  return (
    <section
      id="connected-brands"
      className="relative min-h-screen flex flex-col justify-center bg-[#050505]"
    >
      {/* Radial orange glow — same as rest of homepage */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[70%] h-[70%] bg-[radial-gradient(ellipse_at_center,rgba(249,115,22,0.07)_0%,transparent_65%)] pointer-events-none" />

      <div className="relative w-full flex flex-col items-center px-4 md:px-6 lg:px-8 py-8 md:py-12 lg:py-16">

        {/* ── Centered Text Block ── */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.75, ease: "easeOut" }}
          className="text-center max-w-3xl mx-auto mb-6 lg:mb-8"
        >
          <span className="text-orange-500 text-[10px] font-bold tracking-[0.45em] uppercase block mb-3">
            The Connected Ecosystem
          </span>

          <h2 className="text-3xl md:text-4xl font-bold leading-tight md:leading-snug text-white mb-3">
            Powering the Future Through{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-400 via-orange-500 to-orange-600">
              Connected Brands
            </span>
          </h2>

          {/* Accent bar */}
          <div className="w-16 h-[2px] bg-gradient-to-r from-transparent via-orange-500 to-transparent mx-auto rounded-full mb-3 opacity-60" />

          <p className="text-gray-300 text-sm md:text-base leading-snug md:leading-relaxed font-light mx-auto mb-2">
            Zryoss brings together a network of specialized brands under one unified system —
            creating a powerful execution engine for modern businesses.
          </p>

          <p className="text-gray-500 text-sm md:text-base leading-snug md:leading-relaxed font-light mx-auto mb-4">
            From HR tech to education platforms and enterprise solutions, every brand operates
            independently yet connects seamlessly to deliver faster results, smarter workflows,
            and scalable innovation.
          </p>

          <div className="flex flex-col items-center gap-1">
            <p className="text-gray-500 text-sm font-light tracking-wide">
              This is not just integration.
            </p>
            <p className="text-orange-400 text-base md:text-lg font-bold tracking-[0.15em] uppercase">
              This is orchestration.
            </p>
          </div>
        </motion.div>

        {/* ── Clean Borderless Video ── */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.9, ease: "easeOut", delay: 0.15 }}
          className="relative w-full max-w-5xl mx-auto"
        >
          {/* Soft ambient glow under the video */}
          <div className="absolute -bottom-6 left-1/2 -translate-x-1/2 w-3/4 h-12 bg-orange-500/10 blur-2xl rounded-full pointer-events-none" />

          <video
            src="/Zryoss_Ecosystem brands/brand video z.mp4"
            autoPlay
            loop
            muted
            playsInline
            disablePictureInPicture
            className="w-full rounded-2xl shadow-[0_30px_80px_-10px_rgba(0,0,0,0.7)]"
          >
            <track kind="captions" src="" srcLang="en" label="English" default />
          </video>
        </motion.div>

      </div>
    </section>
  );
}
