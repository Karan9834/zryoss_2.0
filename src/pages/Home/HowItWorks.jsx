import React from "react";
import { CheckCircle2, ArrowDown, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

const FadeUp = ({ children, delay = 0 }) => {
  return (
    <div
      className="opacity-0 animate-fadeUp"
      style={{ animationDelay: `${delay}s`, animationFillMode: "forwards" }}
    >
      {children}
    </div>
  );
};

export default function HowItWorks() {
  const sections = [
    {
      label: "Step 01",
      title: "Build Your Authority Engine",
      desc: "We don't just create brands — we build visibility systems that position you as a leader in your space.",
      points: ["Personal / Business Brand Positioning", "Authority Content Strategy (podcast, short-form, insights)", "Digital Presence Setup"],
    },
    {
      label: "Step 02",
      title: "Amplify Reach & Attract Opportunities",
      desc: "Your visibility is strategically distributed to bring consistent inbound opportunities.",
      points: ["Multi-platform Content Distribution", "Influencer & Network Amplification", "Audience-to-Opportunity Conversion"],
    },
    {
      label: "Step 03",
      title: "Filter & Focus on High-Value Deals",
      desc: "We ensure your time goes into the right opportunities.",
      points: ["Opportunity Qualification", "Strategic Fit Analysis", "High-Value Deal Mapping"],
    },
    {
      label: "Step 04",
      title: "Convert Attention into Revenue",
      desc: "We help you turn visibility into actual business.",
      points: ["Sales & Closing Support", "Professional Pitching", "Conversion Strategy"],
    },
    {
      label: "Step 05",
      title: "Execution Powered by Zryoss",
      desc: "You bring the opportunity — we deliver the result.",
      points: ["Expert Vendor Network", "White-label Execution", "Scalable Delivery Systems"],
    },
    {
      label: "Step 06",
      title: "Maintain Quality & Brand Trust",
      desc: "We ensure every delivery upholds the standard your brand promises.",
      points: ["Quality Control Systems", "Timeline Governance", "Performance Monitoring"],
    },
    {
      label: "Step 07",
      title: "Operate Without Overload",
      desc: "You stay focused on growth while we handle the backend complexity.",
      points: ["Dedicated Account Manager", "Backend Operations Handling", "Centralized Coordination"],
    },
    {
      label: "Step 08",
      title: "Enable Scale & Funding Readiness",
      desc: "We prepare your business for the next level of growth and investor readiness.",
      points: [
        "MSME / Startup Registration",
        "Govt Scheme Guidance",
        "Investor Readiness Support",
        "Documentation Assistance",
      ],
    },
  ];

  return (
    <section className="relative bg-[#050505] text-white py-8 md:py-12 lg:py-16 overflow-hidden">
      <style>{`
        @keyframes fadeUp {
          from { opacity: 0; transform: translateY(24px); }
          to { opacity: 1; transform: translateY(0); }
        }
        .animate-fadeUp { animation: fadeUp 0.75s ease-out; }
      `}</style>

      {/* Background */}
      <div className="absolute top-0 left-0 w-96 h-96 bg-orange-500/10 blur-[140px] rounded-full" />
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-orange-500/7 blur-[140px] rounded-full" />

      <div className="max-w-7xl mx-auto px-4 md:px-6 lg:px-8 relative z-10">
        {/* Header */}
        <FadeUp>
          <div className="text-center mb-10 md:mb-12">
            <span className="text-xs uppercase tracking-[0.3em] text-orange-500 font-bold mb-3 block">
              How It Works
            </span>

            <h2 className="text-3xl md:text-4xl font-bold leading-tight md:leading-snug max-w-4xl mx-auto mb-4">
              A Visibility-to-Business Engine
              <span className="block text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-orange-600 mt-2">
                Built for Scale &amp; Control
              </span>
            </h2>

            <div className="w-24 h-1 bg-orange-500 mx-auto rounded-full mb-4" />

            <p className="text-gray-400 text-base md:text-lg max-w-3xl mx-auto font-light leading-snug md:leading-relaxed">
              Build authority, attract opportunities, and scale your business — powered by structured content, strategic distribution, and Zryoss execution systems.
            </p>
          </div>
        </FadeUp>

        {/* Timeline Steps */}
        <div className="max-w-4xl mx-auto space-y-8">
          {sections.map((section, i) => (
            <FadeUp key={i} delay={i * 0.1}>
              <div className="relative group">
                {/* Connecting Line */}
                {i < sections.length - 1 && (
                  <div className="absolute left-6 top-20 bottom-0 w-0.5 bg-gradient-to-b from-orange-500/50 to-orange-500/10 group-hover:from-orange-500 group-hover:to-orange-500/30 transition-all duration-500" />
                )}

                <div className="relative flex gap-4 md:gap-6 lg:gap-8">
                  {/* Step Number Circle */}
                  <div className="shrink-0">
                    <div className="w-12 h-12 rounded-full bg-gradient-to-br from-orange-500 to-orange-600 flex items-center justify-center text-black font-bold text-lg shadow-lg shadow-orange-500/50 group-hover:scale-110 transition-transform duration-300">
                      {String(i + 1).padStart(2, "0")}
                    </div>
                  </div>

                  {/* Content Card */}
                  <div className="flex-1 pb-6">
                    <div className="rounded-3xl border border-white/10 bg-gradient-to-br from-white/[0.05] to-transparent p-6 md:p-8 hover:border-orange-500/30 hover:shadow-2xl hover:shadow-orange-500/10 transition-all duration-500 group-hover:-translate-y-1">
                      {/* Badge */}
                      <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-orange-500/30 bg-orange-500/10 text-orange-400 text-[10px] uppercase tracking-[0.3em] font-bold mb-3">
                        {section.label}
                      </div>

                      {/* Title */}
                      <h3 className="text-xl md:text-2xl lg:text-3xl font-bold text-white mb-2 group-hover:text-orange-400 transition-colors">
                        {section.title}
                      </h3>

                      {/* Description */}
                      <p className="text-gray-300 text-sm md:text-base leading-snug md:leading-relaxed font-light mb-4">
                        {section.desc}
                      </p>

                      {/* Key Points */}
                      <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-3 md:gap-4 lg:gap-6">
                        {section.points.map((point, idx) => (
                          <div
                            key={idx}
                            className="flex items-start gap-2 p-3 rounded-xl bg-black/30 border border-white/5 hover:border-orange-500/20 transition-colors"
                          >
                            <CheckCircle2 className="w-4 h-4 text-orange-400 shrink-0 mt-0.5" />
                            <span className="text-gray-200 text-sm font-light leading-snug">
                              {point}
                            </span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>

                {/* Arrow Indicator (between steps) */}
                {i < sections.length - 1 && (
                  <div className="absolute left-6 top-[4.5rem] -translate-x-1/2">
                    <ArrowDown className="w-4 h-4 text-orange-500/50 animate-bounce" />
                  </div>
                )}
              </div>
            </FadeUp>
          ))}
        </div>

        {/* Bottom CTA */}
        <FadeUp delay={0.8}>
          <div className="mt-10 md:mt-12 text-center">
            <h3 className="text-3xl md:text-4xl font-bold text-white mb-3">
              From Visibility to Revenue —{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-orange-600">
                Build a Business That Scales
              </span>
            </h3>
            <p className="text-gray-400 text-base md:text-lg max-w-2xl mx-auto mb-6 font-light leading-snug md:leading-relaxed">
              Leverage content, distribution, and execution — all in one system designed to grow your business faster.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link to="/apply">
                <button className="px-8 py-3.5 bg-gradient-to-r from-orange-500 to-orange-600 text-white font-bold text-sm rounded-full shadow-lg shadow-orange-500/30 hover:shadow-orange-500/50 hover:scale-105 hover:-translate-y-0.5 transition-all duration-300 flex items-center gap-2 group">
                  Start Your Growth Journey
                  <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
                </button>
              </Link>
              <Link to="/contact">
                <button className="px-8 py-3.5 border border-white/20 text-white font-semibold text-sm rounded-full hover:border-orange-500/50 hover:bg-white/5 hover:scale-105 hover:-translate-y-0.5 transition-all duration-300">
                  Book a Strategy Call
                </button>
              </Link>
            </div>
          </div>
        </FadeUp>
      </div>
    </section>
  );
}
