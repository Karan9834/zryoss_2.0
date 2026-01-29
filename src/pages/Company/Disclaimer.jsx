import React from "react";
import { motion } from "framer-motion";
import {
  AlertTriangle,
  ShieldAlert,
  FileText,
  Briefcase,
  Scale,
  Building2,
  Users,
  Info,
  Globe,
  Lock,
  ScrollText,
  CheckCircle2,
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

export default function Disclaimer() {
  return (
    <main className="bg-[#050505] text-white overflow-hidden font-sans">
      {/* ================= HERO SECTION ================= */}
      <section className="relative h-[60vh] min-h-[500px] flex items-center justify-center border-b border-white/5 pt-20">
        <div className="absolute inset-0 z-0">
          <img
            src="/disclaimer_hero_bg.png"
            alt="Disclaimer Background"
            className="w-full h-full object-cover opacity-30"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-[#050505] via-[#050505]/70 to-[#050505]" />
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(255,138,0,0.05),transparent_70%)]" />
        </div>

        <div className="relative z-10 max-w-4xl mx-auto px-6 text-center">
          <FadeUp>
            <span className="inline-block px-4 py-1.5 mb-6 rounded-full border border-orange-500/30 bg-orange-500/10 text-orange-400 text-sm font-medium tracking-wide">
              Legal & Compliance
            </span>
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white leading-[1.15] tracking-tight mb-5">
              Disclaimer
            </h1>
            <p className="text-lg md:text-xl text-gray-300 max-w-2xl mx-auto leading-relaxed">
              Please read this disclaimer carefully. By accessing or using this website,
              you acknowledge and agree to the terms outlined below.
            </p>
          </FadeUp>
        </div>
      </section>

      {/* ================= INTRODUCTORY DISCLAIMER ================= */}
      <section className="py-16 border-b border-white/5">
        <div className="max-w-4xl mx-auto px-6">
          <FadeUp>
            <div className="p-8 rounded-2xl bg-[#0E0F12] border border-white/10 flex gap-6 items-start">
              <div className="w-12 h-12 rounded-full bg-orange-500/10 flex items-center justify-center shrink-0">
                <AlertTriangle className="w-6 h-6 text-orange-500" />
              </div>
              <div>
                <h3 className="text-xl font-bold mb-3">Important Notice</h3>
                <p className="text-gray-400 leading-relaxed">
                  This website and all information presented herein are provided by <span className="text-white font-semibold">Zryoss</span>,
                  a business operating platform brand supported by group companies including <span className="text-white">Kryoss Softech Private Limited</span> and <span className="text-white">Clink Consultancy Services Private Limited</span>.
                </p>
              </div>
            </div>
          </FadeUp>
        </div>
      </section>

      {/* ================= NATURE OF THE PLATFORM ================= */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-12 items-center">
          <FadeUp>
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Nature of the Platform</h2>
            <p className="text-gray-400 mb-8 leading-relaxed">
              Zryoss is a Business Operating System designed to provide structure and support.
              We are not a service guarantee, employment offer, or financial assurance platform.
            </p>

            <div className="space-y-4">
              {[
                "Operational frameworks",
                "Execution governance",
                "Delivery management support",
                "Platform-level enablement"
              ].map((item, i) => (
                <div key={i} className="flex items-center gap-3">
                  <div className="w-2 h-2 rounded-full bg-orange-500" />
                  <span className="text-gray-300">{item}</span>
                </div>
              ))}
            </div>

            <p className="mt-8 text-sm text-gray-500 italic">
              All engagements are subject to defined scopes, approvals, and operational processes.
            </p>
          </FadeUp>

          <FadeUp delay={0.2}>
            <div className="grid grid-cols-2 gap-4">
              <div className="p-6 rounded-2xl bg-[#0E0F12] border border-white/5">
                <Briefcase className="w-8 h-8 text-orange-500 mb-4" />
                <h4 className="font-bold mb-2">Frameworks</h4>
                <p className="text-sm text-gray-500">Structured operational guidelines.</p>
              </div>
              <div className="p-6 rounded-2xl bg-[#0E0F12] border border-white/5">
                <Scale className="w-8 h-8 text-orange-500 mb-4" />
                <h4 className="font-bold mb-2">Governance</h4>
                <p className="text-sm text-gray-500">Oversight and compliance.</p>
              </div>
              <div className="p-6 rounded-2xl bg-[#0E0F12] border border-white/5">
                <Globe className="w-8 h-8 text-orange-500 mb-4" />
                <h4 className="font-bold mb-2">Enablement</h4>
                <p className="text-sm text-gray-500">Tools for growth.</p>
              </div>
              <div className="p-6 rounded-2xl bg-[#0E0F12] border border-white/5">
                <FileText className="w-8 h-8 text-orange-500 mb-4" />
                <h4 className="font-bold mb-2">Management</h4>
                <p className="text-sm text-gray-500">Delivery support systems.</p>
              </div>
            </div>
          </FadeUp>
        </div>
      </section>

      {/* ================= NO GUARANTEE ================= */}
      <section className="py-20 bg-[#0A0A0A] border-y border-white/5">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <FadeUp>
              <h2 className="text-3xl md:text-4xl font-bold mb-6">No Guarantee of Business Results</h2>
              <p className="text-gray-400 max-w-2xl mx-auto">
                Outcomes depend on multiple internal and external factors. Zryoss provides the engine; the driving is yours.
              </p>
            </FadeUp>
          </div>

          <div className="grid md:grid-cols-2 gap-12">
            <FadeUp>
              <div className="p-8 h-full rounded-2xl bg-black border border-white/10 relative overflow-hidden group">
                <div className="absolute top-0 right-0 w-32 h-32 bg-orange-500/5 rounded-full blur-3xl group-hover:bg-orange-500/10 transition-colors" />
                <h3 className="text-xl font-bold mb-6 flex items-center gap-3">
                  <ShieldAlert className="text-orange-500" />
                  We Do Not Guarantee
                </h3>
                <ul className="space-y-4">
                  {[
                    "Revenue or income",
                    "Client acquisition",
                    "Profitability",
                    "Business success"
                  ].map((item, i) => (
                    <li key={i} className="flex items-center gap-3 text-gray-300">
                      <span className="w-1.5 h-1.5 rounded-full bg-red-500/50" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </FadeUp>

            <FadeUp delay={0.2}>
              <div className="p-8 h-full rounded-2xl bg-black border border-white/10 relative overflow-hidden group">
                <div className="absolute top-0 right-0 w-32 h-32 bg-blue-500/5 rounded-full blur-3xl group-hover:bg-blue-500/10 transition-colors" />
                <h3 className="text-xl font-bold mb-6 flex items-center gap-3">
                  <Users className="text-blue-500" />
                  Outcomes Depend On
                </h3>
                <ul className="space-y-4">
                  {[
                    "Market conditions",
                    "Individual or organizational effort",
                    "Business strategy",
                    "Client demand",
                    "Execution volume"
                  ].map((item, i) => (
                    <li key={i} className="flex items-center gap-3 text-gray-300">
                      <span className="w-1.5 h-1.5 rounded-full bg-blue-500/50" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </FadeUp>
          </div>

          <FadeUp delay={0.4}>
            <p className="text-center mt-12 text-sm text-gray-500">
              *All business decisions are made at the discretion and responsibility of the user.
            </p>
          </FadeUp>
        </div>
      </section>

      {/* ================= GRID SECTIONS (Ownership, Accuracy, ThirdParty) ================= */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 lg:grid-cols-3 gap-8">

          {/* Independent Brand Ownership */}
          <FadeUp>
            <div className="p-8 rounded-2xl bg-[#0E0F12] border border-white/10 h-full hover:border-orange-500/30 transition-colors">
              <Building2 className="w-10 h-10 text-orange-500 mb-6" />
              <h3 className="text-xl font-bold mb-4">Independent Brand Ownership</h3>
              <p className="text-sm text-gray-400 mb-6">
                All IPP and BPP participants operate as independent business entities.
              </p>
              <ul className="space-y-3">
                {[
                  "Partners retain full responsibility",
                  "Zryoss provides backend only",
                  "No ownership claim over partner brands"
                ].map((item, i) => (
                  <li key={i} className="flex items-start gap-2 text-xs text-gray-300">
                    <CheckCircle2 className="w-4 h-4 text-orange-500/50 shrink-0" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </FadeUp>

          {/* Information Accuracy */}
          <FadeUp delay={0.1}>
            <div className="p-8 rounded-2xl bg-[#0E0F12] border border-white/10 h-full hover:border-orange-500/30 transition-colors">
              <Info className="w-10 h-10 text-orange-500 mb-6" />
              <h3 className="text-xl font-bold mb-4">Information Accuracy</h3>
              <p className="text-sm text-gray-400 mb-6">
                We make reasonable efforts to ensure accuracy, but information may change.
              </p>
              <ul className="space-y-3">
                {[
                  "Updates without prior notice",
                  "Features may evolve over time",
                  "Descriptions are indicative"
                ].map((item, i) => (
                  <li key={i} className="flex items-start gap-2 text-xs text-gray-300">
                    <CheckCircle2 className="w-4 h-4 text-orange-500/50 shrink-0" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </FadeUp>

          {/* Third-Party Services */}
          <FadeUp delay={0.2}>
            <div className="p-8 rounded-2xl bg-[#0E0F12] border border-white/10 h-full hover:border-orange-500/30 transition-colors">
              <Users className="w-10 h-10 text-orange-500 mb-6" />
              <h3 className="text-xl font-bold mb-4">Third-Party Services</h3>
              <p className="text-sm text-gray-400 mb-6">
                Dependencies on vendors and partners may impact timelines.
              </p>
              <ul className="space-y-3">
                {[
                  "Not responsible for external interruptions",
                  "Force majeure events",
                  "Independent 3rd-party actions"
                ].map((item, i) => (
                  <li key={i} className="flex items-start gap-2 text-xs text-gray-300">
                    <CheckCircle2 className="w-4 h-4 text-orange-500/50 shrink-0" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </FadeUp>
        </div>
      </section>

      {/* ================= LEGAL & COMPLIANCE SECTION ================= */}
      <section className="py-24 bg-[#0A0A0A] border-y border-white/5">
        <div className="max-w-7xl mx-auto px-6">
          <FadeUp>
            <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">Legal & Compliance</h2>
          </FadeUp>

          <div className="grid md:grid-cols-2 gap-12">
            {/* Complicance & Liability */}
            <FadeUp>
              <div className="space-y-8">
                <div>
                  <h3 className="text-2xl font-bold text-white mb-4 flex items-center gap-3">
                    <Scale className="text-orange-500" /> Limitation of Liability
                  </h3>
                  <p className="text-gray-400 mb-4 text-sm leading-relaxed">
                    To the maximum extent permitted by law, Zryoss shall not be liable for indirect, incidental, or consequential losses.
                    We are not responsible for business decisions taken by users. Liability is limited to the scope defined in formal agreements.
                  </p>
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-white mb-4 flex items-center gap-3">
                    <ScrollText className="text-orange-500" /> Compliance Responsibility
                  </h3>
                  <p className="text-gray-400 mb-4 text-sm leading-relaxed">
                    Users and partners are responsible for compliance with applicable laws, regulations, and industry-specific statutory requirements.
                    Zryoss maintains compliance discipline but does not replace individual legal responsibility.
                  </p>
                </div>
              </div>
            </FadeUp>

            {/* IP & Professional Advice */}
            <FadeUp delay={0.2}>
              <div className="p-8 rounded-3xl bg-[#0F0F0F] border border-white/10">
                <div className="mb-8">
                  <div className="flex items-center gap-3 mb-3">
                    <Lock className="w-5 h-5 text-orange-500" />
                    <h4 className="text-lg font-bold">Intellectual Property</h4>
                  </div>
                  <p className="text-sm text-gray-400">
                    All content, systems, and processes are proprietary. Unauthorized use, reproduction, or misrepresentation is prohibited.
                  </p>
                </div>
                <div className="mb-8">
                  <div className="flex items-center gap-3 mb-3">
                    <Briefcase className="w-5 h-5 text-orange-500" />
                    <h4 className="text-lg font-bold">Professional Advice</h4>
                  </div>
                  <p className="text-sm text-gray-400">
                    Content on this website does not constitute legal, financial, tax, or investment advice. Consult qualified professionals.
                  </p>
                </div>
                <div className="pt-6 border-t border-white/10">
                  <div className="flex items-center gap-3 mb-3">
                    <AlertTriangle className="w-5 h-5 text-orange-500" />
                    <h4 className="text-lg font-bold">Changes to Disclaimer</h4>
                  </div>
                  <p className="text-sm text-gray-400">
                    Zryoss reserves the right to modify this disclaimer at any time. Continued use implies acceptance.
                  </p>
                </div>
              </div>
            </FadeUp>
          </div>
        </div>
      </section>

      {/* ================= FINAL NOTE & GOVERNANCE ================= */}
      <section className="py-24 text-center">
        <div className="max-w-3xl mx-auto px-6">
          <FadeUp>
            <h2 className="text-3xl font-bold mb-8">Governing Understanding</h2>
            <div className="flex flex-wrap justify-center gap-4 mb-12">
              {[
                "Risk Disclosure",
                "Ethics & Governance",
                "Compliance Policies"
              ].map((item, i) => (
                <span key={i} className="px-6 py-2 rounded-full border border-white/10 bg-[#0E0F12] text-sm text-gray-300">
                  {item}
                </span>
              ))}
            </div>

            <div className="relative p-10 rounded-3xl bg-gradient-to-br from-orange-500/10 to-transparent border border-orange-500/20">
              <h3 className="text-2xl md:text-3xl font-bold mb-6">Final Note</h3>
              <p className="text-lg text-gray-300 mb-8 max-w-xl mx-auto">
                Zryoss provides systems, structure, and execution governance—not promises.
              </p>
              <div className="flex flex-col md:flex-row justify-center items-center gap-6 md:gap-12 mb-8">
                <span className="font-semibold text-white">Engage responsibly.</span>
                <span className="hidden md:block w-1.5 h-1.5 rounded-full bg-orange-500" />
                <span className="font-semibold text-white">Decide independently.</span>
                <span className="hidden md:block w-1.5 h-1.5 rounded-full bg-orange-500" />
                <span className="font-semibold text-white">Build sustainably.</span>
              </div>
              <div className="inline-block">
                <p className="text-orange-500 font-bold tracking-widest uppercase text-sm border-t border-b border-orange-500/30 py-2 px-8">
                  Your Brand. Our Engine.
                </p>
              </div>
            </div>
          </FadeUp>
        </div>
      </section>

    </main>
  );
}
