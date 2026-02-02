import { motion } from "framer-motion";
import { ShieldAlert, FileText, Scale, MessageSquare, Briefcase, Info, Download, ArrowRight } from "lucide-react";
import FadeUp from "../../components/animations/FadeUp";
import HeroContact from "../Home/HeroContact";

const guidelines = [
  {
    title: "Ethical Representation",
    desc: "Partners must represent ZRYOSS accurately and avoid misleading claims related to income, partnerships, or outcomes.",
    icon: <Briefcase className="w-5 h-5" />
  },
  {
    title: "No Income Guarantees",
    desc: "Partners must not promise fixed, guaranteed, or passive income to any individual or organization.",
    icon: <Scale className="w-5 h-5" />
  },
  {
    title: "No Recruitment-Based Promotion",
    desc: "ZRYOSS must never be positioned as an MLM, referral, or recruitment income opportunity.",
    icon: <ShieldAlert className="w-5 h-5" />
  },
  {
    title: "Client Communication Standards",
    desc: "All client communication must remain professional, transparent, and within approved service scope.",
    icon: <MessageSquare className="w-5 h-5" />
  },
  {
    title: "Brand Usage Policy",
    desc: "Brand assets and references must be used strictly according to approved ZRYOSS brand guidelines.",
    icon: <FileText className="w-5 h-5" />
  },
  {
    title: "Compliance & Reporting",
    desc: "Partners must comply with reporting requirements, platform policies, and operational processes.",
    icon: <Info className="w-5 h-5" />
  },
  {
    title: "Violations & Consequences",
    desc: "Any violation may result in corrective action, suspension, or termination of partnership.",
    icon: <ShieldAlert className="w-5 h-5" />
  },
];

export default function PartnerGuidelines() {
  return (
    <div className="bg-[#050505] text-white min-h-screen">
      {/* Hero Section */}
      <section className="relative h-[80vh] w-full overflow-hidden flex items-center">
        <div className="absolute inset-0">
          <img
            src="https://images.unsplash.com/photo-1557804506-669a67965ba0?q=80&w=2074&auto=format&fit=crop"
            alt="Compliance"
            className="w-full h-full object-cover opacity-30 brightness-[0.4]"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-[#050505]/60 to-[#050505]" />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-6">
          <FadeUp>
            <span className="inline-block mb-4 text-xs tracking-[0.2em] uppercase text-orange-400 font-bold px-4 py-1 rounded-full bg-orange-500/10 border border-orange-500/20">
              Governance & Compliance
            </span>
            <h1 className="text-5xl md:text-7xl lg:text-8xl font-black text-white tracking-tight mb-8 font-['Playfair_Display']">
              Partner <span className="text-orange-500 italic">Guidelines</span>
            </h1>
            <p className="mt-6 max-w-2xl text-gray-400 text-xl font-light leading-relaxed mb-10">
              Ethical standards, communication rules, and operational
              responsibilities required to represent and operate within the
              ZRYOSS ecosystem.
            </p>

            <div className="flex flex-wrap gap-8 items-center text-sm">
              <div className="flex items-center gap-2 text-gray-400">
                <span className="w-2 h-2 rounded-full bg-orange-500" />
                <strong>Last updated:</strong> <span className="font-light">January 2026</span>
              </div>
              <button className="flex items-center gap-3 px-6 py-3 bg-white/5 border border-white/10 rounded-xl hover:bg-orange-500 hover:border-orange-500 transition-all font-bold">
                <Download className="w-4 h-4" />
                Download PDF Guidelines
              </button>
            </div>
          </FadeUp>
        </div>
      </section>

      {/* Guidelines Grid */}
      <section className="py-32 relative">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-8">
            {guidelines.map((item, i) => (
              <FadeUp key={i} delay={i * 0.05}>
                <div className="group relative p-10 rounded-[35px] bg-[#0A0A0A] border border-white/10 hover:border-orange-500/30 transition-all duration-300">
                  <div className="flex gap-6">
                    <div className="w-12 h-12 rounded-2xl bg-orange-500/10 flex items-center justify-center text-orange-500 shrink-0 group-hover:bg-orange-500 group-hover:text-white transition-all">
                      {item.icon}
                    </div>
                    <div>
                      <h3 className="text-2xl font-bold mb-4 text-white group-hover:text-orange-500 transition-colors">
                        {item.title}
                      </h3>
                      <p className="text-gray-400 text-base leading-relaxed font-light">
                        {item.desc}
                      </p>
                    </div>
                  </div>
                </div>
              </FadeUp>
            ))}
          </div>

          {/* Legal Caution */}
          <FadeUp delay={0.4}>
            <div className="mt-32 p-12 rounded-[40px] border border-red-500/20 bg-red-500/[0.02] flex flex-col md:flex-row items-center gap-10">
              <div className="w-16 h-16 rounded-full bg-red-500/10 flex items-center justify-center text-red-500 shrink-0">
                <ShieldAlert className="w-8 h-8" />
              </div>
              <div className="text-center md:text-left">
                <h4 className="text-xl font-bold text-red-500 mb-2">Notice of Mandatory Adherence</h4>
                <p className="text-gray-500 text-lg font-light leading-relaxed">
                  Adherence to these guidelines is mandatory for continued association with the ZRYOSS platform.
                  ZRYOSS reserves the right to modify policies to ensure compliance, integrity, and long-term sustainability.
                </p>
              </div>
            </div>
          </FadeUp>
        </div>
      </section>

      {/* HeroContact Section */}
      <HeroContact />
    </div>
  );
}
