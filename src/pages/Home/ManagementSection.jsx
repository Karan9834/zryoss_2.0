import React from "react";
import FadeUp from "../../components/animations/FadeUp";
import { Link } from "react-router-dom";
import {
  BarChart3,
  ShieldCheck,
  Users2,
  PenTool,
  Presentation,
  FileCheck,
  Headphones,
  Landmark,
} from "lucide-react";

const services = [
  {
    title: "Brand & Business Setup",
    desc: "Complete infrastructure for your brand launch, from legal frameworks to operational setup.",
    icon: <PenTool className="w-8 h-8" />,
  },
  {
    title: "Sales & Demo Enablement",
    desc: "Domain experts handle your technical pitches and product demos, ensuring professional closure.",
    icon: <Presentation className="w-8 h-8" />,
  },
  {
    title: "Execution & Delivery",
    desc: "End-to-end fulfillment handled by specialist brands, guaranteeing technical excellence.",
    icon: <FileCheck className="w-8 h-8" />,
  },
  {
    title: "Vendor Coordination",
    desc: "Management of all external partners and technical teams so you never have to chase execution.",
    icon: <Users2 className="w-8 h-8" />,
  },
  {
    title: "Quality Governance",
    desc: "Strict protocol-driven quality control at every stage of the project lifecycle.",
    icon: <ShieldCheck className="w-8 h-8" />,
  },
  {
    title: "Account Management",
    desc: "A dedicated lead coordinates all backend activities, serving as your internal primary contact.",
    icon: <Headphones className="w-8 h-8" />,
  },
  {
    title: "Reporting & Escalation",
    desc: "Transparent real-time visibility into project health, performance metrics, and rapid resolution.",
    icon: <BarChart3 className="w-8 h-8" />,
  },
  {
    title: "Government Funding",
    desc: "We provide structured guidance for MSME, Startup India, and capital schemes to ensure your business is funding-ready.",
    icon: <Landmark className="w-8 h-8" />,
  },
];

export default function ManagementSection() {
  return (
    <section className="py-8 md:py-12 lg:py-16 bg-[#0a0a0a] border-y border-white/5 relative z-10">
      <div className="max-w-7xl mx-auto px-4 md:px-6 lg:px-8">
        <FadeUp>
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-10 lg:mb-12 gap-6 sm:gap-8">
            <div className="max-w-2xl">
              <span className="text-xs uppercase tracking-[0.3em] text-orange-500 font-bold mb-3 block">
                The Backend Engine
              </span>
              <h2 className="text-3xl md:text-4xl font-bold leading-tight md:leading-snug text-white mb-3">
                What We <br className="hidden sm:block" />
                <span className="text-orange-400">Manage for You</span>
              </h2>
              <p className="text-gray-400 text-base md:text-lg font-light leading-snug md:leading-relaxed">
                We operate as your complete backend business engine, removing the
                operational friction of running a professional service brand.
              </p>
            </div>

            <div className="p-5 sm:p-6 rounded-xl sm:rounded-2xl bg-orange-500/5 border border-orange-500/20 max-w-sm">
              <p className="text-orange-400 text-sm sm:text-base font-medium italic">
                "You never chase execution. <br />
                You never manage vendors."
              </p>
            </div>
          </div>
        </FadeUp>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 md:gap-6 lg:gap-8">
          {services.map((svc, idx) => (
            <FadeUp key={idx} delay={idx * 0.1}>
              <div className="group p-8 rounded-3xl bg-[#121212] border border-white/5 
                /* Subtle Orange Shadow for Base State */
                shadow-[0_4px_20px_rgba(249,115,22,0.04)] 
                /* Glowing Orange Shadow on Hover */
                hover:shadow-[0_20px_40px_rgba(249,115,22,0.12)] 
                hover:bg-[#1a1a1a] hover:-translate-y-2 hover:rotate-1 
                transition-all duration-500 ease-out h-full flex flex-col cursor-default">

                <div className="w-14 h-14 rounded-xl bg-orange-500/10 border border-orange-500/20 flex items-center justify-center text-orange-500 mb-6 shrink-0 group-hover:scale-110 group-hover:-rotate-3 transition-transform duration-500">
                  {svc.icon}
                </div>

                <h3 className="text-lg md:text-xl font-semibold text-white mb-3">
                  {svc.title}
                </h3>

                <p className="text-gray-400 text-sm md:text-base leading-snug md:leading-relaxed font-light">
                  {svc.desc}
                </p>
              </div>
            </FadeUp>
          ))}
        </div>
      </div>
    </section>
  );
}