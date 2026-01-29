import { ArrowUpRight } from "lucide-react";
import { useNavigate } from "react-router-dom";

export default function ZryossIntroSection() {
  const navigate = useNavigate();
  return (
    <section className="relative overflow-hidden bg-[#070A0F] py-20 md:py-32">
      {/* background glow */}
      <div className="absolute -top-24 -left-24 h-72 w-72 rounded-full bg-orange-500/20 blur-3xl w-full max-w-[600px] h-[600px] blur-[120px]" />
      <div className="absolute -bottom-24 -right-24 h-72 w-72 rounded-full bg-orange-500/10 blur-3xl w-full max-w-[500px] h-[500px] blur-[100px]" />

      <div className="mx-auto max-w-7xl px-6 lg:px-8 relative">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">

          {/* LEFT CONTENT */}
          <div>
            {/* badge */}
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-orange-500/30 bg-orange-500/10 backdrop-blur-sm mb-5">
              <span className="w-2 h-2 rounded-full bg-orange-500 animate-pulse" />
              <p className="text-orange-500 text-xs uppercase tracking-[0.45em] font-bold">
                Business Operating System
              </p>
            </div>

            {/* heading */}
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold leading-[1.15] tracking-tight mb-5 text-white">
              Zryoss is <span className="text-orange-500">not a company.</span>
            </h1>

            {/* subheading */}
            <h2 className="text-xl md:text-2xl font-semibold text-white/90 mb-6">
              It is a <span className="text-orange-400">Business Operating System</span>
            </h2>

            {/* content */}
            <p className="text-xl text-gray-400 leading-relaxed font-light mb-6">
              Zryoss is a system-driven business ecosystem designed to help individuals and
              organizations{" "}
              <span className="text-white font-semibold">
                build, run, and scale their own brands
              </span>{" "}
              in a structured and sustainable way.
            </p>

            <p className="text-xl text-gray-400 leading-relaxed font-light mb-8">
              In a world where jobs are limited and businesses often fail due to lack of execution,
              Zryoss exists to provide{" "}
              <span className="text-orange-300 font-semibold">
                clarity, structure, and operational support
              </span>{" "}
              — not just advice.
            </p>

            {/* CTA */}
            <div className="flex flex-wrap gap-4 mb-6">
              <button
                onClick={() => navigate('/platform/business-operating-system')}
                className="rounded-xl bg-gradient-to-r from-orange-500 to-orange-600 px-6 py-3 font-semibold text-white shadow-lg shadow-orange-500/30 hover:bg-orange-600 hover:shadow-orange-500/60 transition"
              >
                Explore the System
              </button>

              <button className="rounded-xl border border-white/10 px-6 py-3 font-semibold text-white hover:border-orange-500/50 hover:text-orange-400 transition inline-flex items-center gap-2">
                Learn More <ArrowUpRight size={18} />
              </button>
            </div>

            {/* small trust line */}
            <p className="mt-6 text-xs text-white/40 tracking-wide font-light">
              Built for long-term stability • System-first execution • Ecosystem support
            </p>
          </div>

          {/* RIGHT IMAGE */}
          <div className="relative">
            <div className="absolute inset-0 rounded-3xl bg-orange-500/10 blur-2xl -z-10" />

            <div className="rounded-3xl border border-white/10 bg-white/5 p-2">
              <img
                className="w-full h-[260px] md:h-[420px] object-cover rounded-2xl"
                src="/what is zyross.jpg"
                alt="Business Dashboard"
              />
            </div>

            {/* floating card */}
            <div className="absolute -bottom-6 left-6 right-6 rounded-2xl border border-white/10 bg-[#0B1220]/70 backdrop-blur p-5">
              <p className="text-white font-semibold">Your Brand. Our Engine.</p>
              <p className="text-white/60 text-sm mt-1">
                A structured system that supports execution and scalable growth.
              </p>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
