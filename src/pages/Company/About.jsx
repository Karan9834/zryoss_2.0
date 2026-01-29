import React from "react";
import {
  ArrowRight,
  Shield,
  Workflow,
  Network,
  Settings,
  Users,
  Megaphone,
  BookOpen,
  HeartPulse,
  Building2,
  BriefcaseBusiness,
  BadgeCheck,
  FileText,
  TrendingUp,
  Scale,
  CheckCircle2,
  Handshake,
  Lightbulb,
  Leaf,
} from "lucide-react";

export default function About() {
  const scrollToEcosystem = () => {
    const el = document.getElementById("ecosystem");
    if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  return (
    <div className="min-h-screen bg-[#121212] text-white">
      {/* ===================================================== */}
      {/* 1) HERO SECTION */}
      {/* ===================================================== */}
      <section
        className="relative overflow-hidden min-h-screen flex items-center"
        style={{
          backgroundImage:
            "url(https://images.unsplash.com/photo-1558494949-ef010cbdcc31?q=80&w=1920&auto=format&fit=crop)",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        {/* overlays */}
        <div className="absolute inset-0 bg-[#0b0b0b]/80" />
        <div className="absolute inset-0 bg-gradient-to-b from-[#121212]/10 via-[#121212]/70 to-[#121212]" />

        {/* orange glow */}
        <div className="absolute -top-44 left-1/2 -translate-x-1/2 w-[980px] h-[980px] rounded-full bg-[#FF6A00]/10 blur-3xl" />
        <div className="absolute -bottom-44 right-0 w-[640px] h-[640px] rounded-full bg-[#FF6A00]/10 blur-3xl" />

        {/* watermark (workflow diagram) */}
        <div className="absolute inset-0 opacity-[0.07] pointer-events-none">
          <svg
            viewBox="0 0 1200 600"
            className="w-full h-full"
            xmlns="http://www.w3.org/2000/svg"
          >
            <g fill="none" stroke="#FF6A00" strokeWidth="2">
              <circle cx="240" cy="140" r="28" />
              <circle cx="520" cy="120" r="20" />
              <circle cx="820" cy="150" r="26" />
              <circle cx="960" cy="360" r="18" />
              <circle cx="580" cy="440" r="24" />
              <circle cx="300" cy="420" r="18" />
              <line x1="240" y1="140" x2="520" y2="120" />
              <line x1="520" y1="120" x2="820" y2="150" />
              <line x1="820" y1="150" x2="960" y2="360" />
              <line x1="960" y1="360" x2="580" y2="440" />
              <line x1="580" y1="440" x2="300" y2="420" />
              <line x1="300" y1="420" x2="240" y2="140" />
            </g>
          </svg>
        </div>

        <div className="relative max-w-7xl mx-auto px-6 py-28 w-full">
          <div className="text-center max-w-4xl mx-auto">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10 text-sm text-gray-200">
              <span className="w-2 h-2 rounded-full bg-[#FF6A00]" />
              Zryoss · About
            </div>

            <h1 className="mt-6 text-3xl md:text-4xl lg:text-5xl font-bold text-white leading-[1.15] tracking-tight mb-5">
              About Zryoss
            </h1>

            <h2 className="mt-4 text-2xl sm:text-3xl font-extrabold text-[#FF6A00]">
              Building Businesses Through Systems, Not Chaos
            </h2>

            <p className="mt-6 text-gray-200 leading-relaxed text-lg">
              Zryoss is a business operating platform brand developed within the
              Kryoss group ecosystem to help individuals and organizations build,
              run, and scale independent businesses using a structured,
              system-driven approach.
            </p>

            <div className="mt-8 max-w-3xl mx-auto p-6 rounded-2xl bg-white/5 border border-white/10">
              <p className="text-gray-200 leading-relaxed">
                Zryoss exists to solve one fundamental problem in modern business:
              </p>

              <div className="mt-4 p-5 rounded-2xl bg-[#FF6A00]/10 border border-[#FF6A00]/25">
                <p className="text-white font-semibold">
                  “People and businesses fail not because they lack ideas,
                  <br />
                  but because they lack a reliable operating system.”
                </p>
              </div>
            </div>

            <div className="mt-10 flex flex-col sm:flex-row gap-4 justify-center">
              <button
                onClick={scrollToEcosystem}
                className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl bg-[#FF6A00] text-black font-semibold hover:brightness-110 transition"
              >
                Explore Ecosystem <ArrowRight className="w-5 h-5" />
              </button>

              <a
                href="#ownership"
                className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl border border-white/15 bg-white/5 hover:bg-white/10 transition font-semibold"
              >
                Learn More
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* ===================================================== */}
      {/* 2) BRAND OWNERSHIP & GROUP STRUCTURE */}
      {/* ===================================================== */}
      <section id="ownership" className="max-w-7xl mx-auto px-6 py-20">
        <div className="grid lg:grid-cols-2 gap-12 items-start">
          <div>
            <h2 className="text-3xl font-bold">
              Brand Ownership &{" "}
              <span className="text-[#FF6A00]">Group Structure</span>
            </h2>

            <p className="mt-4 text-gray-300 leading-relaxed">
              Zryoss operates as a platform brand supported by experienced
              operating companies within the group.
            </p>

            <p className="mt-6 text-gray-300 leading-relaxed">
              <span className="text-white font-semibold">
                These companies provide legal, operational, and execution
                strength behind the Zryoss platform.
              </span>
            </p>

            <div className="mt-8 p-5 rounded-2xl bg-[#FF6A00]/10 border border-[#FF6A00]/25">
              <p className="text-white font-semibold">
                Parent & Group Companies
              </p>
              <p className="mt-2 text-gray-300 text-sm">
                Zryoss is backed by real operating companies— not assumptions.
              </p>
            </div>
          </div>

          <div className="grid sm:grid-cols-2 gap-4">
            {[
              {
                title: "Kryoss Softech Private Limited",
                icon: <Settings className="w-6 h-6" />,
                desc: "The primary technology and execution backbone of the group. Responsible for platform engineering, software delivery, IT systems, and digital infrastructure.",
              },
              {
                title: "Clink Consultancy Services Private Limited",
                icon: <Users className="w-6 h-6" />,
                desc: "A group company focused on recruitment, HR services, consulting, and talent-driven solutions across multiple industries.",
              },
            ].map((x) => (
              <div
                key={x.title}
                className="p-6 rounded-2xl bg-[#1E1E1E] border border-white/10 hover:border-[#FF6A00]/40 transition"
              >
                <div className="w-12 h-12 rounded-2xl bg-[#FF6A00]/15 border border-[#FF6A00]/30 text-[#FF6A00] flex items-center justify-center">
                  {x.icon}
                </div>

                <h3 className="mt-4 font-bold text-lg">{x.title}</h3>
                <p className="mt-3 text-gray-400 text-sm leading-relaxed">
                  {x.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ===================================================== */}
      {/* 3) ZRYOSS AS AN ECOSYSTEM BRAND */}
      {/* ===================================================== */}
      <section
        id="ecosystem"
        className="relative overflow-hidden bg-[#1E1E1E] border-y border-white/10"
      >
        {/* background */}
        <div className="absolute inset-0 opacity-25">
          <img
            src="https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?q=80&w=1920&auto=format&fit=crop"
            alt="Ecosystem"
            className="w-full h-full object-cover"
          />
        </div>
        <div className="absolute inset-0 bg-[#0b0b0b]/70" />

        {/* hub watermark */}
        <div className="absolute inset-0 opacity-[0.07] pointer-events-none">
          <svg viewBox="0 0 1200 600" className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
            <g fill="none" stroke="#FF6A00" strokeWidth="2">
              <circle cx="600" cy="300" r="90" />
              <circle cx="240" cy="140" r="30" />
              <circle cx="960" cy="140" r="30" />
              <circle cx="240" cy="460" r="30" />
              <circle cx="960" cy="460" r="30" />
              <line x1="600" y1="300" x2="240" y2="140" />
              <line x1="600" y1="300" x2="960" y2="140" />
              <line x1="600" y1="300" x2="240" y2="460" />
              <line x1="600" y1="300" x2="960" y2="460" />
            </g>
          </svg>
        </div>

        <div className="relative max-w-7xl mx-auto px-6 py-20">
          <h2 className="text-3xl font-bold text-center">
            Zryoss as an{" "}
            <span className="text-[#FF6A00]">Ecosystem Brand</span>
          </h2>

          <p className="mt-4 text-gray-300 text-center max-w-3xl mx-auto">
            Zryoss functions as the central operating system that connects and
            governs multiple specialized execution brands within the group
            ecosystem.
          </p>

          <h3 className="mt-10 text-center font-semibold text-white">
            Core Execution Brands Powered by Zryoss
          </h3>

          <div className="mt-12 grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {[
              { title: "Kryoss Softech – IT & Software Solutions", icon: <Settings className="w-6 h-6" /> },
              { title: "Adkryoss – Digital Marketing & Growth Solutions", icon: <Megaphone className="w-6 h-6" /> },
              { title: "Clink HR – Recruitment & HR Services", icon: <Users className="w-6 h-6" /> },
              { title: "Edulinkers – Education & EdTech Platforms", icon: <BookOpen className="w-6 h-6" /> },
              { title: "Medikryoss – Healthcare & Medical Technology", icon: <HeartPulse className="w-6 h-6" /> },
              { title: "Kryoss Interiors – Interior & Infrastructure Solutions", icon: <Building2 className="w-6 h-6" /> },
              { title: "Vyombiz – Business & Professional Services", icon: <BriefcaseBusiness className="w-6 h-6" /> },
              { title: "Zryoss – Central Operating System", icon: <Network className="w-6 h-6" /> },
            ].map((b) => (
              <div
                key={b.title}
                className="p-6 rounded-2xl bg-black/20 border border-white/10 hover:border-[#FF6A00]/40 transition"
              >
                <div className="w-12 h-12 rounded-2xl bg-[#FF6A00]/15 border border-[#FF6A00]/30 text-[#FF6A00] flex items-center justify-center">
                  {b.icon}
                </div>
                <p className="mt-4 font-semibold text-gray-200">{b.title}</p>
              </div>
            ))}
          </div>

          <p className="mt-10 text-center text-gray-300">
            Each brand operates in its own domain, while Zryoss ensures{" "}
            <span className="text-white font-semibold">
              standardized execution, quality control, and operational governance.
            </span>
          </p>
        </div>
      </section>

      {/* ===================================================== */}
      {/* 4) WHY THIS GROUP STRUCTURE MATTERS */}
      {/* ===================================================== */}
      <section className="max-w-7xl mx-auto px-6 py-20">
        <h2 className="text-3xl font-bold text-center">
          Why This Group Structure{" "}
          <span className="text-[#FF6A00]">Matters</span>
        </h2>

        <p className="mt-4 text-gray-300 text-center max-w-3xl mx-auto">
          This ecosystem structure ensures long-term execution strength,
          operational clarity, and scalable delivery discipline.
        </p>

        <div className="mt-12 grid sm:grid-cols-2 lg:grid-cols-5 gap-4">
          {[
            { title: "Strong execution capability across domains", icon: <BadgeCheck className="w-6 h-6" /> },
            { title: "Reduced dependency on external vendors", icon: <Shield className="w-6 h-6" /> },
            { title: "Consistent delivery standards", icon: <CheckCircle2 className="w-6 h-6" /> },
            { title: "Legal and operational accountability", icon: <FileText className="w-6 h-6" /> },
            { title: "Long-term scalability", icon: <TrendingUp className="w-6 h-6" /> },
          ].map((x) => (
            <div
              key={x.title}
              className="p-6 rounded-2xl bg-[#1E1E1E] border border-white/10 hover:border-[#FF6A00]/40 transition"
            >
              <div className="w-12 h-12 rounded-2xl bg-[#FF6A00]/15 border border-[#FF6A00]/30 text-[#FF6A00] flex items-center justify-center">
                {x.icon}
              </div>
              <p className="mt-4 font-semibold text-gray-200 text-sm leading-relaxed">
                {x.title}
              </p>
            </div>
          ))}
        </div>

        <div className="mt-10 p-6 rounded-2xl bg-[#FF6A00]/10 border border-[#FF6A00]/25 text-center">
          <p className="text-white font-semibold">
            Zryoss is not built on promises. It is built on real operating
            companies and real execution capacity.
          </p>
        </div>
      </section>

      {/* ===================================================== */}
      {/* 5) WHAT ZRYOSS DOES */}
      {/* ===================================================== */}
      <section className="bg-[#1E1E1E] border-y border-white/10">
        <div className="max-w-7xl mx-auto px-6 py-20">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold">
                What{" "}
                <span className="text-[#FF6A00]">Zryoss</span> Does
              </h2>

              <p className="mt-4 text-gray-300">
                Through its platform and ecosystem, Zryoss provides:
              </p>

              <ul className="mt-6 space-y-3">
                {[
                  "Centralized operations and delivery governance",
                  "Account management and quality assurance",
                  "Vendor coordination and SLA enforcement",
                  "Reporting, performance tracking, and control",
                  "A scalable backend engine for independent brands",
                ].map((p) => (
                  <li
                    key={p}
                    className="flex items-start gap-3 p-4 rounded-xl bg-black/20 border border-white/10"
                  >
                    <CheckCircle2 className="w-5 h-5 text-[#FF6A00] mt-0.5" />
                    <span className="text-gray-200">{p}</span>
                  </li>
                ))}
              </ul>

              <p className="mt-6 text-gray-300">
                This allows partners and clients to grow without building complex
                internal teams.
              </p>
            </div>

            <div className="relative">
              <div className="absolute inset-0 rounded-3xl bg-[#FF6A00]/10 blur-2xl" />
              <div className="relative overflow-hidden rounded-3xl border border-white/10 bg-[#121212]">
                <img
                  alt="Centralized dashboard"
                  className="w-full h-[420px] object-cover opacity-90"
                  src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=1600&auto=format&fit=crop"
                />
                <div className="p-6">
                  <p className="text-sm text-gray-300">
                    A centralized operating engine that provides governance,
                    reporting, control, and scalable execution capacity.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ===================================================== */}
      {/* 6) WHO ZRYOSS IS BUILT FOR */}
      {/* ===================================================== */}
      <section className="max-w-7xl mx-auto px-6 py-20">
        <h2 className="text-3xl font-bold text-center">
          Who Zryoss Is{" "}
          <span className="text-[#FF6A00]">Built For</span>
        </h2>

        <p className="mt-4 text-gray-300 text-center max-w-3xl mx-auto">
          If you want independence without operational chaos, Zryoss is designed
          for you.
        </p>

        <div className="mt-12 grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {[
            { title: "Professionals seeking business ownership", icon: <Users className="w-6 h-6" /> },
            { title: "Founders who want structured execution", icon: <Lightbulb className="w-6 h-6" /> },
            { title: "Businesses looking for scalable systems", icon: <Building2 className="w-6 h-6" /> },
            { title: "Partners who value governance and clarity", icon: <Handshake className="w-6 h-6" /> },
          ].map((x) => (
            <div
              key={x.title}
              className="p-6 rounded-2xl bg-[#1E1E1E] border border-white/10 hover:border-[#FF6A00]/40 transition"
            >
              <div className="w-12 h-12 rounded-2xl bg-[#FF6A00]/15 border border-[#FF6A00]/30 text-[#FF6A00] flex items-center justify-center">
                {x.icon}
              </div>
              <p className="mt-4 font-semibold text-gray-200">{x.title}</p>
            </div>
          ))}
        </div>
      </section>

      {/* ===================================================== */}
      {/* 7) LONG-TERM VISION */}
      {/* ===================================================== */}
      <section className="bg-[#1E1E1E] border-y border-white/10">
        <div className="max-w-7xl mx-auto px-6 py-20">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold">
                Long-Term{" "}
                <span className="text-[#FF6A00]">Vision</span>
              </h2>

              <p className="mt-4 text-gray-300">
                Backed by the Kryoss group companies, Zryoss aims to become:
              </p>

              <ul className="mt-6 space-y-3">
                {[
                  "A trusted business operating platform",
                  "A scalable execution backbone for independent brands",
                  "A long-term ecosystem for sustainable business growth",
                ].map((p) => (
                  <li
                    key={p}
                    className="flex items-start gap-3 p-4 rounded-xl bg-black/20 border border-white/10"
                  >
                    <CheckCircle2 className="w-5 h-5 text-[#FF6A00] mt-0.5" />
                    <span className="text-gray-200">{p}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="relative">
              <div className="absolute inset-0 rounded-3xl bg-[#FF6A00]/10 blur-2xl" />
              <div className="relative overflow-hidden rounded-3xl border border-white/10 bg-[#121212]">
                <img
                  alt="Growth roadmap"
                  className="w-full h-[420px] object-cover opacity-90"
                  src="https://images.unsplash.com/photo-1526378722484-bd91ca387e72?q=80&w=1600&auto=format&fit=crop"
                />
                <div className="p-6">
                  <p className="text-sm text-gray-300">
                    A roadmap built for scale, sustainability, and long-term
                    ecosystem growth.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ===================================================== */}
      {/* 8) OUR COMMITMENT */}
      {/* ===================================================== */}
      <section className="max-w-7xl mx-auto px-6 py-20">
        <h2 className="text-3xl font-bold text-center">
          Our{" "}
          <span className="text-[#FF6A00]">Commitment</span>
        </h2>

        <p className="mt-4 text-gray-300 text-center max-w-3xl mx-auto">
          Zryoss is committed to platform-level governance, ethical discipline,
          and long-term ecosystem trust.
        </p>

        <div className="mt-12 grid sm:grid-cols-2 lg:grid-cols-5 gap-4">
          {[
            { title: "Ethical and transparent operations", icon: <Scale className="w-6 h-6" /> },
            { title: "Strong execution discipline", icon: <BadgeCheck className="w-6 h-6" /> },
            { title: "Platform-level governance", icon: <Shield className="w-6 h-6" /> },
            { title: "Quality-driven delivery", icon: <CheckCircle2 className="w-6 h-6" /> },
            { title: "Long-term partner and client trust", icon: <Handshake className="w-6 h-6" /> },
          ].map((x) => (
            <div
              key={x.title}
              className="p-6 rounded-2xl bg-[#1E1E1E] border border-white/10 hover:border-[#FF6A00]/40 transition"
            >
              <div className="w-12 h-12 rounded-2xl bg-[#FF6A00]/15 border border-[#FF6A00]/30 text-[#FF6A00] flex items-center justify-center">
                {x.icon}
              </div>
              <p className="mt-4 font-semibold text-gray-200 text-sm leading-relaxed">
                {x.title}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* ===================================================== */}
      {/* 9) FINAL SECTION — YOUR BRAND. OUR ENGINE. */}
      {/* ===================================================== */}
      <section className="relative overflow-hidden">
        {/* background */}
        <div className="absolute inset-0 bg-gradient-to-b from-[#1E1E1E] via-[#121212] to-[#121212]" />

        {/* glow */}
        <div className="absolute left-1/2 -translate-x-1/2 top-0 w-[850px] h-[850px] rounded-full bg-[#FF6A00]/10 blur-3xl" />

        {/* watermark (engine/workflow integration) */}
        <div className="absolute inset-0 opacity-[0.07] pointer-events-none">
          <svg viewBox="0 0 1200 600" className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
            <g fill="none" stroke="#FF6A00" strokeWidth="2">
              <circle cx="600" cy="290" r="90" />
              <circle cx="600" cy="290" r="45" />
              <path d="M600 200 v-50" />
              <path d="M600 430 v-50" />
              <path d="M510 290 h-60" />
              <path d="M750 290 h-60" />
            </g>
          </svg>
        </div>

        <div className="relative max-w-5xl mx-auto px-6 py-20 text-center">
          <h2 className="text-3xl sm:text-4xl font-extrabold">
            Your Brand.{" "}
            <span className="text-[#FF6A00]">Our Engine.</span>
          </h2>

          <p className="mt-6 text-gray-300 text-lg leading-relaxed">
            Zryoss does not take ownership of your vision.
            <br />
            <span className="text-white font-bold">
              It provides the system that powers it.
            </span>
          </p>

          <div className="mt-10 inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-[#FF6A00] text-black font-bold">
            Your Brand. Our Engine. <ArrowRight className="w-5 h-5" />
          </div>
        </div>
      </section>
    </div>
  );
}
