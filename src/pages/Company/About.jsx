import { motion } from "framer-motion";
import {
  ShieldCheck,
  Globe,
  Layers,
  Cpu,
  Users,
  Briefcase,
  Target,
  ArrowRight,
  CheckCircle2,
  Building2,
} from "lucide-react";

/**
 * FadeUp Animation Component
 */
const FadeUp = ({ children, delay = 0 }) => (
  <motion.div
    initial={{ opacity: 0, y: 30 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ duration: 0.6, delay }}
  >
    {children}
  </motion.div>
);

export default function About() {
  return (
    <main className="bg-[#050505] text-white overflow-hidden font-sans">

      {/* ================= HERO SECTION ================= */}
      <section className="relative h-screen min-h-[700px] flex items-center justify-center border-b border-white/5">
        {/* Background Image */}
        <div className="absolute inset-0 z-0">
          <img
            src="https://images.unsplash.com/photo-1451187580459-43490279c0fa?q=80&w=2072&auto=format&fit=crop"
            alt="Zryoss Abstract Background"
            className="w-full h-full object-cover opacity-20"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-[#050505]/80 via-[#050505]/60 to-[#050505]" />
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(255,138,0,0.08),transparent_70%)]" />
        </div>

        <div className="relative z-10 max-w-5xl mx-auto px-6 text-center">
          <FadeUp>
            <span className="inline-block px-4 py-1.5 mb-6 rounded-full border border-orange-500/30 bg-orange-500/10 text-orange-400 text-sm font-medium tracking-wide">
              About Zryoss
            </span>
            <h1 className="text-5xl md:text-7xl font-bold tracking-tight mb-8">
              Building Businesses Through <br className="hidden md:block" />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-orange-600">
                Systems, Not Chaos
              </span>
            </h1>
            <p className="text-lg md:text-2xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
              Zryoss is a business operating platform brand developed within the
              Kryoss group ecosystem to help individuals and organizations
              build, run, and scale independent businesses using a structured,
              system-driven approach.
            </p>

            <div className="mt-12 bg-white/5 backdrop-blur-sm border border-white/10 p-8 rounded-2xl max-w-2xl mx-auto">
              <p className="text-xl font-medium italic text-gray-200">
                "People and businesses fail not because they lack ideas, but
                because they lack a reliable operating system."
              </p>
            </div>
          </FadeUp>
        </div>
      </section>

      {/* ================= BRAND OWNERSHIP ================= */}
      <section className="py-24 bg-[#080808]">
        <div className="max-w-7xl mx-auto px-6">
          <FadeUp>
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-semibold mb-4">
                Brand Ownership & Group Structure
              </h2>
              <p className="text-gray-400 max-w-2xl mx-auto">
                Zryoss operates as a platform brand supported by experienced
                operating companies within the group.
              </p>
            </div>
          </FadeUp>

          <div className="grid md:grid-cols-2 gap-8">
            {/* Kryoss Softech */}
            <FadeUp delay={0.1}>
              <div className="h-full p-10 rounded-3xl bg-[#0E0F12] border border-white/10 hover:border-orange-500/30 transition-colors group">
                <div className="w-14 h-14 rounded-xl bg-blue-500/10 flex items-center justify-center mb-6 group-hover:bg-blue-500/20 transition">
                  <Cpu className="text-blue-500 w-7 h-7" />
                </div>
                <h3 className="text-2xl font-bold mb-3 text-white">
                  Kryoss Softech Private Limited
                </h3>
                <p className="text-gray-400 leading-relaxed">
                  The primary technology and execution backbone of the group.
                  Responsible for platform engineering, software delivery, IT
                  systems, and digital infrastructure.
                </p>
              </div>
            </FadeUp>

            {/* Clink Consultancy */}
            <FadeUp delay={0.2}>
              <div className="h-full p-10 rounded-3xl bg-[#0E0F12] border border-white/10 hover:border-orange-500/30 transition-colors group">
                <div className="w-14 h-14 rounded-xl bg-orange-500/10 flex items-center justify-center mb-6 group-hover:bg-orange-500/20 transition">
                  <Users className="text-orange-500 w-7 h-7" />
                </div>
                <h3 className="text-2xl font-bold mb-3 text-white">
                  Clink Consultancy Services Private Limited
                </h3>
                <p className="text-gray-400 leading-relaxed">
                  A group company focused on recruitment, HR services,
                  consulting, and talent-driven solutions across multiple
                  industries.
                </p>
              </div>
            </FadeUp>
          </div>

          <FadeUp delay={0.3}>
            <div className="mt-12 text-center">
              <p className="inline-block px-6 py-3 rounded-full bg-white/5 border border-white/10 text-gray-300">
                These companies provide legal, operational, and execution strength behind the Zryoss platform.
              </p>
            </div>
          </FadeUp>
        </div>
      </section>

      {/* ================= ECOSYSTEM ================= */}
      <section className="py-24 relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_bottom_left,rgba(255,138,0,0.05),transparent_50%)]" />

        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <FadeUp>
              <h2 className="text-3xl md:text-5xl font-bold mb-6">
                Zryoss as an <br />
                <span className="text-orange-500">Ecosystem Brand</span>
              </h2>
              <p className="text-gray-400 text-lg leading-relaxed mb-8">
                Zryoss functions as the central operating system that connects
                and governs multiple specialized execution brands within the
                group ecosystem.
              </p>
              <p className="text-gray-300 font-medium border-l-4 border-orange-500 pl-4">
                Each brand operates in its own domain, while Zryoss ensures
                standardized execution, quality control, and operational
                governance.
              </p>
            </FadeUp>

            <FadeUp delay={0.2}>
              <div className="grid gap-4">
                {[
                  { name: "Kryoss Softech", desc: "IT & Software Solutions" },
                  { name: "Adkryoss", desc: "Digital Marketing & Growth Solutions" },
                  { name: "Clink HR", desc: "Recruitment & HR Services" },
                  { name: "Edulinkers", desc: "Education & EdTech Platforms" },
                  { name: "Medikryoss", desc: "Healthcare & Medical Technology" },
                  { name: "Kryoss Interiors", desc: "Interior & Infrastructure Solutions" },
                  { name: "Vyombiz", desc: "Business & Professional Services" },
                ].map((brand, i) => (
                  <div
                    key={i}
                    className="flex items-center gap-4 p-4 rounded-xl bg-[#12141A] border border-white/5 hover:border-orange-500/30 transition-all cursor-default"
                  >
                    <div className="w-2 h-2 rounded-full bg-orange-500 shrink-0" />
                    <div>
                      <h4 className="font-semibold text-white">{brand.name}</h4>
                      <p className="text-sm text-gray-400">{brand.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </FadeUp>
          </div>
        </div>
      </section>

      {/* ================= WHY STRUCTURE MATTERS ================= */}
      <section className="py-24 bg-[#0A0A0A] border-y border-white/5">
        <div className="max-w-6xl mx-auto px-6 text-center">
          <FadeUp>
            <h2 className="text-3xl md:text-4xl font-semibold mb-16">
              Why This Group Structure Matters
            </h2>
          </FadeUp>

          <div className="grid md:grid-cols-5 gap-6">
            {[
              { icon: Target, title: "Strong execution capability across domains" },
              { icon: ShieldCheck, title: "Reduced dependency on external vendors" },
              { icon: CheckCircle2, title: "Consistent delivery standards" },
              { icon: Building2, title: "Legal and operational accountability" },
              { icon: ArrowRight, title: "Long-term scalability" },
            ].map((item, i) => (
              <FadeUp key={i} delay={i * 0.1}>
                <div className="p-6 h-full rounded-2xl bg-black border border-white/10 flex flex-col items-center gap-4 hover:-translate-y-2 transition-transform duration-300">
                  <div className="p-3 rounded-full bg-orange-500/10 text-orange-500">
                    <item.icon size={28} />
                  </div>
                  <p className="text-sm font-medium text-gray-300 leading-snug">
                    {item.title}
                  </p>
                </div>
              </FadeUp>
            ))}
          </div>

          <FadeUp delay={0.5}>
            <div className="mt-16 bg-gradient-to-r from-transparent via-orange-950/30 to-transparent p-1">
              <div className="bg-[#0A0A0A] rounded-lg p-6">
                <p className="text-xl md:text-2xl text-gray-200">
                  "Zryoss is not built on promises. It is built on{" "}
                  <span className="text-orange-500 font-semibold">real operating companies</span>{" "}
                  and{" "}
                  <span className="text-orange-500 font-semibold">real execution capacity</span>."
                </p>
              </div>
            </div>
          </FadeUp>
        </div>
      </section>

      {/* ================= WHAT ZRYOSS DOES ================= */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-16">
          <FadeUp>
            <div className="sticky top-24">
              <h2 className="text-3xl md:text-5xl font-bold mb-6">
                What Zryoss Does
              </h2>
              <p className="text-gray-400 text-lg mb-8">
                Through its platform and ecosystem, Zryoss provides a comprehensive engine for growth.
              </p>
              <p className="text-white text-xl font-medium">
                This allows partners and clients to grow without building
                complex internal teams.
              </p>
            </div>
          </FadeUp>

          <div className="grid gap-6">
            {[
              "Centralized operations and delivery governance",
              "Account management and quality assurance",
              "Vendor coordination and SLA enforcement",
              "Reporting, performance tracking, and control",
              "A scalable backend engine for independent brands",
            ].map((item, i) => (
              <FadeUp key={i} delay={i * 0.1}>
                <div className="p-6 rounded-xl bg-[#12141a] border border-white/5 flex items-center gap-4">
                  <div className="w-8 h-8 rounded-full bg-orange-500/20 flex items-center justify-center shrink-0">
                    <CheckCircle2 className="w-5 h-5 text-orange-500" />
                  </div>
                  <p className="text-gray-200 font-medium">{item}</p>
                </div>
              </FadeUp>
            ))}
          </div>
        </div>
      </section>

      {/* ================= WHO ZRYOSS IS FOR ================= */}
      <section className="py-24 bg-[#080808]">
        <div className="max-w-6xl mx-auto px-6">
          <FadeUp>
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-semibold mb-6">
                Who Zryoss Is Built For
              </h2>
              <p className="text-lg text-gray-400">
                If you want independence without operational chaos, Zryoss is
                designed for you.
              </p>
            </div>
          </FadeUp>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { title: "Professionals", sub: "Seeking business ownership" },
              { title: "Founders", sub: "Who want structured execution" },
              { title: "Businesses", sub: "Looking for scalable systems" },
              { title: "Partners", sub: "Who value governance and clarity" },
            ].map((item, i) => (
              <FadeUp key={i} delay={i * 0.1}>
                <div className="p-8 rounded-2xl bg-[#0E0F12] border border-white/10 text-center hover:bg-[#161A22] transition-colors">
                  <h3 className="text-xl font-bold text-white mb-2">
                    {item.title}
                  </h3>
                  <p className="text-sm text-gray-400">{item.sub}</p>
                </div>
              </FadeUp>
            ))}
          </div>
        </div>
      </section>

      {/* ================= VISION & COMMITMENT ================= */}
      <section className="py-24 border-t border-white/5">
        <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-12">
          {/* Vision */}
          <FadeUp>
            <div className="p-10 rounded-3xl bg-gradient-to-br from-[#12141A] to-black border border-white/10 h-full">
              <h3 className="text-2xl font-bold text-orange-500 mb-6 flex items-center gap-3">
                <Globe className="w-6 h-6" /> Long-Term Vision
              </h3>
              <p className="text-gray-400 mb-6">
                Backed by the Kryoss group companies, Zryoss aims to become:
              </p>
              <ul className="space-y-4">
                {[
                  "A trusted business operating platform",
                  "A scalable execution backbone for independent brands",
                  "A long-term ecosystem for sustainable business growth",
                ].map((item, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <span className="w-1.5 h-1.5 rounded-full bg-orange-500 mt-2.5" />
                    <span className="text-gray-300">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </FadeUp>

          {/* Commitment */}
          <FadeUp delay={0.2}>
            <div className="p-10 rounded-3xl bg-gradient-to-br from-[#12141A] to-black border border-white/10 h-full">
              <h3 className="text-2xl font-bold text-orange-500 mb-6 flex items-center gap-3">
                <ShieldCheck className="w-6 h-6" /> Our Commitment
              </h3>
              <p className="text-gray-400 mb-6">
                We are dedicated to maintaining the highest standards:
              </p>
              <ul className="space-y-4">
                {[
                  "Ethical and transparent operations",
                  "Strong execution discipline",
                  "Platform-level governance",
                  "Quality-driven delivery",
                  "Long-term partner and client trust",
                ].map((item, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <span className="w-1.5 h-1.5 rounded-full bg-orange-500 mt-2.5" />
                    <span className="text-gray-300">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </FadeUp>
        </div>
      </section>

      {/* ================= FINAL CTA ================= */}
      <section className="py-32 text-center relative overflow-hidden">
        <div className="absolute inset-0 bg-[#050505]" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(255,138,0,0.1),transparent_60%)]" />

        <div className="relative z-10 max-w-4xl mx-auto px-6">
          <FadeUp>
            <h2 className="text-5xl md:text-7xl font-bold mb-8">
              Your Brand. <span className="text-orange-500">Our Engine.</span>
            </h2>
            <p className="text-xl text-gray-400 mb-12 max-w-2xl mx-auto">
              Zryoss does not take ownership of your vision. <br />
              It provides the system that powers it.
            </p>

            <a
              href="/contact"
              className="inline-flex items-center gap-3 px-8 py-4 rounded-full bg-orange-600 text-white font-semibold hover:bg-orange-500 transition-all hover:scale-105 shadow-xl shadow-orange-900/20"
            >
              Start Building Today
              <ArrowRight size={20} />
            </a>
          </FadeUp>
        </div>
      </section>

    </main>
  );
}
