import React, { useEffect, useRef, useState } from "react";
import {
  ArrowRight,
  CheckCircle2,
  AlertCircle,
  Globe,
  ShieldCheck,
  Users2,
  TrendingUp,
  Briefcase,
  Layers,
  Server,
  Target,
  Wallet,
  Crown,
} from "lucide-react";
import FadeUp from "../../../components/animations/FadeUp";
import { useNavigate } from "react-router-dom";
import { Helmet } from "react-helmet-async";

/* ---------------- Hooks & Utility ---------------- */

const useScrollVisibility = (threshold = 0.1) => {
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => entry.isIntersecting && setIsVisible(true),
      { threshold }
    );

    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, [threshold]);

  return [ref, isVisible];
};

const AnimatedSection = ({ children, delay = 0, className = "" }) => {
  const [ref, isVisible] = useScrollVisibility(0.1);

  return (
    <div
      ref={ref}
      className={`transform transition-all duration-1000 ease-out ${className}`}
      style={{
        opacity: isVisible ? 1 : 0,
        transform: isVisible ? "translateY(0)" : "translateY(40px)",
        transitionDelay: `${delay}ms`,
      }}
    >
      {children}
    </div>
  );
};

/* ---------------- Main Component ---------------- */

export default function Overview() {
  const navigate = useNavigate();
  const verticals = [
    "Technology & software",
    "Digital marketing",
    "HR & recruitment",
    "Education & admissions",
    "Healthcare & medical software",
    "Interiors & infrastructure",
    "Business & professional services",
  ];

  return (
    <div className="min-h-screen bg-[#050505] text-white font-sans selection:bg-orange-600/30">
      <Helmet>
        <title>Independent Business Partner (IBP) | Zryoss</title>
        <meta name="description" content="Become an Independent Business Partner (IBP) with Zryoss. Build multiple business verticals at scale using our centralized digital execution operating system." />
        <link rel="canonical" href="https://zryoss.com/partnership/IBP" />
      </Helmet>
      {/* Background Glows */}
      <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-orange-500/10 blur-[150px] rounded-full -translate-y-1/2 translate-x-1/2 pointer-events-none" />
      <div className="absolute middle-0 left-0 w-[500px] h-[500px] bg-orange-500/5 blur-[130px] rounded-full translate-y-1/2 -translate-x-1/2 pointer-events-none" />

      {/* Hero Section */}
      <section className="relative pt-40 pb-24 overflow-hidden border-b border-white/5">
        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left Column: Content */}
            <div>
              <FadeUp>
                <div className="inline-flex items-center gap-2 text-orange-500 text-xs uppercase tracking-[0.45em] mb-6 font-bold">
                  <span className="w-2 h-2 rounded-full bg-orange-500 animate-pulse" />
                  IBP – Independent Business Partner
                </div>
                <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold leading-[1.15] tracking-tight mb-5 text-white">
                  Build Multiple Businesses at Scale <br />
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-orange-600">
                    on One Operating System
                  </span>
                </h1>
                <p className="text-xl text-gray-400 leading-relaxed font-light mb-8">
                  A Independent Business Partner (IBP) is a scale-focused business partner who operates multiple business verticals under their own independent business identity—powered by <span className="text-white font-medium">Zryoss</span> as the centralized backend operating system.
                </p>

                <div className="flex flex-col sm:flex-row gap-4">
                  <button
                    onClick={() => navigate('/apply')}
                    className="px-8 py-4 bg-orange-600 hover:bg-orange-500 rounded-full font-bold text-base transition-all hover:scale-[1.03] shadow-[0_0_30px_-12px_rgba(234,88,12,0.5)] flex items-center justify-center gap-2 text-white"
                  >
                    Become an IBP <ArrowRight size={18} />
                  </button>

                  <a
                    className="px-8 py-4 bg-transparent border border-white/10 hover:border-white rounded-full font-bold text-base transition-all hover:bg-white/5 flex items-center justify-center gap-2 text-white"
                  >
                    View Details <ArrowRight size={18} />
                  </a>
                </div>
              </FadeUp>
            </div>

            {/* Right Column: Image */}
            <div className="relative hidden lg:block">
              <FadeUp delay={0.2}>
                <div className="absolute inset-0 bg-gradient-to-r from-orange-500/20 to-yellow-600/20 blur-3xl rounded-3xl transform rotate-3" />
                <img
                  src="/ibp_overview.png"
                  alt="Build Multiple Businesses at Scale"
                  className="relative rounded-3xl shadow-2xl border border-white/10 transform hover:scale-[1.02] transition-transform duration-500 object-cover w-full h-auto aspect-[4/3]"
                />
              </FadeUp>
            </div>
          </div>
        </div>
      </section>

      {/* ---------------- WHAT IS IBP ---------------- */}
      <section className="py-24 relative z-10 bg-[#0a0a0a]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <AnimatedSection>
              <h2 className="text-4xl md:text-5xl font-bold mb-6">
                What is <span className="text-orange-500">IBP?</span>
              </h2>
              <p className="text-neutral-400 text-lg leading-relaxed font-light mb-8">
                Independent Business Partner
              </p>

              <div className="p-8 rounded-3xl bg-neutral-900/40 border border-white/5 mb-10 relative overflow-hidden group hover:border-orange-500/20 transition-all duration-500">
                <div className="absolute inset-0 bg-gradient-to-br from-orange-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                <h3 className="text-2xl font-bold mb-4 relative z-10">A senior-level product & network partner</h3>
                <p className="text-neutral-300 leading-relaxed text-lg relative z-10">
                  An IBP gets exclusive access to an expansive digital ecosystem, empowering them to aggressively scale and build a massive independent business network.
                </p>
              </div>

              <div className="inline-flex flex-col sm:flex-row items-center gap-4 px-8 py-5 rounded-2xl bg-gradient-to-r from-orange-500/10 to-transparent border border-orange-500/30">
                <Crown className="text-orange-500 flex-shrink-0" size={28} />
                <span className="text-white font-bold text-xl tracking-wide text-center sm:text-left">
                  IBP = Product Leader + Network Builder
                </span>
              </div>
            </AnimatedSection>

            <AnimatedSection delay={150}>
              <div className="space-y-4">
                {[
                  "Gets access to 50+ software & app products",
                  "Can sell all products under own brand",
                  "Can create IPPs under itself",
                  "Earns direct income + passive income",
                ].map((item, i) => (
                  <div
                    key={i}
                    className="group flex items-center gap-5 p-6 rounded-3xl bg-neutral-900/30 border border-white/5 hover:bg-neutral-900/60 hover:border-orange-500/30 transition-all duration-300 transform hover:-translate-y-1 hover:shadow-[0_10px_30px_-15px_rgba(234,88,12,0.3)]"
                  >
                    <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-orange-500/20 to-orange-600/5 border border-orange-500/20 flex items-center justify-center flex-shrink-0 group-hover:scale-110 group-hover:bg-orange-500 transition-all duration-300">
                      <CheckCircle2 className="text-orange-500 group-hover:text-white transition-colors duration-300" size={24} />
                    </div>
                    <span className="text-neutral-200 text-xl font-medium leading-snug">{item}</span>
                  </div>
                ))}
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* ---------------- IBP vs IPP ---------------- */}
      <section className="py-24 relative z-10 bg-[#050505]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection className="text-center mb-14">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              What Makes an IBP Different From an IPP
            </h2>
            <p className="text-neutral-400 text-lg max-w-3xl mx-auto font-light leading-relaxed">
              While an IPP focuses on one primary business vertical, an IBP operates at a
              multi-vertical, expansion-oriented level.
            </p>
          </AnimatedSection>

          <div className="grid lg:grid-cols-3 gap-6">
            {[
              {
                icon: Layers,
                title: "Business Hub",
                desc: "Operates like a central hub that runs multiple domains.",
              },
              {
                icon: TrendingUp,
                title: "Growth Enabler",
                desc: "Creates expansion capacity across markets and verticals.",
              },
              {
                icon: Crown,
                title: "Expansion Partner",
                desc: "Builds footprint, leadership and high-level scaling.",
              },
            ].map((item, i) => (
              <AnimatedSection key={i} delay={i * 100}>
                <div className="h-full p-8 rounded-3xl bg-neutral-900/40 border border-white/5 hover:border-orange-500/25 hover:bg-neutral-900/70 transition-all group">
                  <div className="w-14 h-14 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                    <item.icon className="text-orange-500" size={28} />
                  </div>
                  <h3 className="text-2xl font-bold mb-4 group-hover:text-orange-500 transition-colors">
                    {item.title}
                  </h3>
                  <p className="text-neutral-400 leading-relaxed">{item.desc}</p>
                </div>
              </AnimatedSection>
            ))}
          </div>

          <AnimatedSection delay={200} className="mt-12">
            <div className="p-7 rounded-3xl bg-gradient-to-r from-orange-500/10 to-transparent border border-orange-500/20 text-center">
              <p className="text-white font-semibold text-lg">
                IBP works on the system, not just in the system.
              </p>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* ---------------- CORE ROLE ---------------- */}
      <section className="py-24 bg-[#0a0a0a] relative z-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <AnimatedSection>
              <h2 className="text-4xl md:text-5xl font-bold mb-6">Core Role of an IBP</h2>
              <div className="space-y-4">
                {[
                  "Build a larger business footprint",
                  "Operate across multiple verticals",
                  "Enable and support multiple IPPs",
                  "Drive higher market penetration",
                ].map((item, i) => (
                  <div
                    key={i}
                    className="flex items-start gap-3 p-4 rounded-2xl bg-neutral-900/50 border border-white/5"
                  >
                    <CheckCircle2 className="text-orange-500 mt-0.5" size={18} />
                    <span className="text-neutral-200">{item}</span>
                  </div>
                ))}
              </div>
            </AnimatedSection>

            <AnimatedSection delay={150}>
              <div className="p-10 rounded-3xl bg-neutral-900/40 border border-white/5">
                <h3 className="text-2xl font-bold mb-4">System Responsibility</h3>
                <div className="space-y-3 text-neutral-300 leading-relaxed">
                  <p>
                    <span className="text-white font-semibold">Zryoss manages execution.</span>
                  </p>
                  <p>
                    <span className="text-white font-semibold">IBP manages business expansion and leadership.</span>
                  </p>
                </div>

                <div className="mt-8 p-6 rounded-2xl bg-black/35 border border-white/5 flex gap-3">
                  <ShieldCheck className="text-orange-500" size={18} />
                  <p className="text-neutral-300">
                    IBP never manages execution teams or vendors directly.
                  </p>
                </div>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* ---------------- WHO IS IDEAL ---------------- */}
      <section className="py-24 relative z-10 bg-[#050505]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection className="text-center mb-14">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">Who Is an IBP Ideal For?</h2>
            <p className="text-neutral-400 text-lg max-w-3xl mx-auto font-light leading-relaxed">
              If you want to operate at strategic and scale level, IBP is built for you.
            </p>
          </AnimatedSection>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              "Experienced entrepreneurs",
              "Business owners and consultants",
              "Agency founders",
              "Organizations looking to expand service offerings",
              "Leaders who want to build business ecosystems",
            ].map((x, i) => (
              <AnimatedSection key={i} delay={i * 60}>
                <div className="p-6 rounded-3xl bg-neutral-900/40 border border-white/5 hover:border-orange-500/20 transition-colors">
                  <div className="flex items-center gap-3">
                    <Briefcase className="text-orange-500" size={18} />
                    <span className="text-neutral-200">{x}</span>
                  </div>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* ---------------- WHAT ZRYOSS PROVIDES ---------------- */}
      <section className="py-24 bg-[#0a0a0a] relative z-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection className="text-center mb-14">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              What Zryoss Provides to an IBP
            </h2>
            <p className="text-neutral-400 text-lg max-w-3xl mx-auto font-light">
              Zryoss provides everything required to operate at scale.
            </p>
          </AnimatedSection>

          <div className="grid lg:grid-cols-3 gap-6">
            {[
              {
                icon: Server,
                title: "Platform & Governance",
                points: [
                  "Centralized operating system",
                  "Multi-vertical execution routing",
                  "Account management and escalation",
                  "Quality control and reporting",
                ],
              },
              {
                icon: Globe,
                title: "Execution & Delivery",
                points: [
                  "Domain-based execution through ecosystem brands",
                  "Vendor and capacity management",
                  "Centralized demos and pre-sales support",
                ],
              },
              {
                icon: Target,
                title: "Enablement & Scale Support",
                points: [
                  "Brand and business structuring",
                  "Multi-IPP enablement",
                  "Growth and expansion alignment",
                ],
              },
            ].map((box, i) => (
              <AnimatedSection key={i} delay={i * 120}>
                <div className="p-8 rounded-3xl bg-neutral-900/45 border border-white/5 hover:border-orange-500/20 transition-colors h-full">
                  <div className="w-14 h-14 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center mb-6">
                    <box.icon className="text-orange-500" size={28} />
                  </div>

                  <h3 className="text-2xl font-bold mb-6">{box.title}</h3>

                  <div className="space-y-3">
                    {box.points.map((p, idx) => (
                      <div key={idx} className="flex items-start gap-3">
                        <CheckCircle2 className="text-orange-500 mt-0.5" size={16} />
                        <span className="text-neutral-300">{p}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </AnimatedSection>
            ))}
          </div>

          <AnimatedSection delay={250} className="mt-12 text-center">
            <div className="inline-flex items-center gap-2 px-5 py-3 rounded-full bg-white/5 border border-white/10 text-neutral-200">
              <ShieldCheck className="text-orange-500" size={18} />
              <span className="font-semibold">
                IBP never manages execution teams or vendors directly.
              </span>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* ---------------- VERTICALS ---------------- */}
      <section className="py-24 relative z-10 bg-[#050505]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection className="text-center mb-14">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Business Verticals Under an IBP
            </h2>
            <p className="text-neutral-400 text-lg max-w-3xl mx-auto font-light leading-relaxed">
              All execution remains routed through Zryoss ecosystem brands.
            </p>
          </AnimatedSection>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {verticals.map((v, i) => (
              <AnimatedSection key={i} delay={i * 60}>
                <div className="p-6 rounded-3xl bg-neutral-900/45 border border-white/5 hover:border-orange-500/20 transition-all hover:-translate-y-1">
                  <div className="flex items-center gap-3">
                    <CheckCircle2 className="text-orange-500" size={18} />
                    <span className="text-neutral-200">{v}</span>
                  </div>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* ---------------- RELATIONSHIP ---------------- */}
      <section className="py-24 bg-[#0a0a0a] relative z-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection className="text-center mb-14">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              IBP & IPP Relationship (High-Level)
            </h2>
          </AnimatedSection>

          <div className="grid lg:grid-cols-2 gap-8">
            <AnimatedSection>
              <div className="p-10 rounded-3xl bg-neutral-900/40 border border-white/5">
                <h3 className="text-2xl font-bold mb-6">Under an IBP</h3>
                <div className="space-y-4">
                  {[
                    "Multiple IPPs may operate",
                    "Each IPP runs their own independent brand",
                    "IBP provides leadership and growth enablement",
                    "Zryoss manages execution, demos, and operations",
                  ].map((x, i) => (
                    <div key={i} className="flex items-start gap-3">
                      <Users2 className="text-orange-500 mt-0.5" size={18} />
                      <span className="text-neutral-300">{x}</span>
                    </div>
                  ))}
                </div>
              </div>
            </AnimatedSection>

            <AnimatedSection delay={120}>
              <div className="p-10 rounded-3xl bg-gradient-to-br from-orange-500/15 to-transparent border border-orange-500/20">
                <h3 className="text-2xl font-bold mb-6">Governed Structure</h3>
                <p className="text-neutral-200 leading-relaxed">
                  This structure is <span className="text-white font-semibold">controlled</span>,{" "}
                  <span className="text-white font-semibold">limited</span>, and{" "}
                  <span className="text-white font-semibold">system-governed</span>.
                </p>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* ---------------- ONBOARDING ---------------- */}
      <section id="commercials" className="py-24 relative z-10 bg-[#050505]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection className="text-center mb-14">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              About IBP Onboarding & Commercial Model
            </h2>
            <p className="text-neutral-400 text-lg max-w-3xl mx-auto font-light leading-relaxed">
              IBP onboarding follows a transparent, one-time platform onboarding model.
            </p>
          </AnimatedSection>

          <AnimatedSection>
            <div className="p-10 rounded-3xl bg-neutral-900/45 border border-white/5 overflow-hidden relative">
              <div className="absolute inset-0 bg-gradient-to-br from-orange-500/10 to-transparent opacity-60 pointer-events-none" />

              <div className="relative">
                <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-8">
                  <div>
                    <div className="text-xs uppercase tracking-widest text-neutral-500 font-semibold mb-3">
                      IBP Onboarding Process (One-Time)
                    </div>
                    <div className="text-5xl font-bold text-white">
                      Structured Onboarding
                    </div>
                    <p className="text-neutral-400 mt-3">
                      Covers multi-vertical enablement + system setup + execution access + scale support
                    </p>
                  </div>

                  <div className="p-6 rounded-2xl bg-black/35 border border-white/10">
                    <div className="flex items-center gap-3 mb-3">
                      <Wallet className="text-orange-500" size={18} />
                      <span className="font-semibold text-white">Transparent Commercials</span>
                    </div>
                    <div className="space-y-2 text-sm text-neutral-300">
                      <div>• No guaranteed growth promises</div>
                      <div>• No recruitment-based rewards</div>
                      <div>• Transparent commercials</div>
                    </div>
                  </div>
                </div>

                <div className="mt-10 p-6 rounded-2xl bg-gradient-to-r from-orange-500/15 to-transparent border border-orange-500/20">
                  <p className="text-neutral-200 leading-relaxed">
                    Success is generated only through real business and service delivery.
                  </p>
                </div>
              </div>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* ---------------- MLM SAFE ---------------- */}
      <section className="py-24 bg-[#0a0a0a] relative z-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection className="text-center mb-14">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Important Clarifications (MLM-Safe)
            </h2>
          </AnimatedSection>

          <AnimatedSection>
            <div className="grid md:grid-cols-2 gap-6">
              {[
                "Not MLM",
                "Not a franchise",
                "Not a referral growth model",
                "Not an investment product",
              ].map((x, i) => (
                <div
                  key={i}
                  className="p-6 rounded-3xl bg-neutral-900/50 border border-white/5 flex items-center gap-3"
                >
                  <AlertCircle className="text-orange-500" size={18} />
                  <span className="text-neutral-200 font-semibold">{x}</span>
                </div>
              ))}
            </div>

            <div className="mt-8 p-7 rounded-3xl bg-gradient-to-r from-orange-500/10 to-transparent border border-orange-500/20 text-center">
              <p className="text-white font-semibold text-lg">
                IBP is a business operating partnership focused on execution and scale.
              </p>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* ---------------- WHY WORKS ---------------- */}
      <section className="py-24 bg-[#050505] relative z-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection className="text-center mb-14">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Why the IBP Model Works
            </h2>
          </AnimatedSection>

          <div className="grid lg:grid-cols-2 gap-8">
            <AnimatedSection>
              <div className="p-10 rounded-3xl bg-neutral-900/45 border border-white/5">
                <div className="space-y-4">
                  {[
                    "Enables multi-vertical growth",
                    "Removes execution bottlenecks",
                    "Centralizes quality and control",
                    "Allows leadership-based expansion",
                    "Protects ecosystem integrity",
                  ].map((x, i) => (
                    <div key={i} className="flex items-start gap-3">
                      <CheckCircle2 className="text-orange-500 mt-0.5" size={18} />
                      <span className="text-neutral-300">{x}</span>
                    </div>
                  ))}
                </div>
              </div>
            </AnimatedSection>

            <AnimatedSection delay={120}>
              <div className="p-10 rounded-3xl bg-gradient-to-br from-orange-500/15 to-transparent border border-orange-500/20">
                <p className="text-white font-semibold text-2xl leading-snug">
                  IBPs build business networks,
                  <br />
                  not sales chains.
                </p>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* ---------------- OWNERSHIP ---------------- */}
      <section className="py-24 bg-[#0a0a0a] relative z-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection className="text-center mb-14">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Ownership & Independence
            </h2>
          </AnimatedSection>

          <div className="grid lg:grid-cols-2 gap-8">
            <AnimatedSection>
              <div className="p-10 rounded-3xl bg-neutral-900/45 border border-white/5">
                <h3 className="text-2xl font-bold mb-6">An IBP Owns</h3>
                <div className="space-y-4">
                  {[
                    "Their business identity",
                    "Client and partner relationships",
                    "Long-term market presence",
                  ].map((x, i) => (
                    <div key={i} className="flex items-start gap-3">
                      <CheckCircle2 className="text-orange-500 mt-0.5" size={18} />
                      <span className="text-neutral-300">{x}</span>
                    </div>
                  ))}
                </div>
              </div>
            </AnimatedSection>

            <AnimatedSection delay={120}>
              <div className="p-10 rounded-3xl bg-neutral-900/45 border border-white/5">
                <h3 className="text-2xl font-bold mb-6">Zryoss Does Not Own</h3>
                <div className="space-y-4">
                  {[
                    "IBP brands",
                    "IBP clients",
                    "IBP growth value",
                  ].map((x, i) => (
                    <div key={i} className="flex items-start gap-3">
                      <AlertCircle className="text-orange-400 mt-0.5" size={18} />
                      <span className="text-neutral-300">{x}</span>
                    </div>
                  ))}
                </div>

                <div className="mt-8 p-6 rounded-2xl bg-gradient-to-r from-orange-500/15 to-transparent border border-orange-500/20">
                  <p className="text-neutral-200 leading-relaxed">
                    Zryoss operates the engine behind the business.
                  </p>
                </div>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* ---------------- FINAL CTA ---------------- */}
      <section className="py-24 bg-[#050505] relative z-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection className="text-center">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              One System. Bigger Vision.
            </h2>

            <p className="text-neutral-400 text-lg max-w-3xl mx-auto leading-relaxed font-light mb-10">
              IBP is for those who want to build bigger than one brand, lead multiple
              business units, and scale responsibly with systems. Zryoss provides the structure.
              IBP builds the scale.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button
                onClick={() => navigate('/apply')}
                className="px-10 py-4 bg-orange-600 hover:bg-orange-500 rounded-full font-bold transition-all hover:scale-[1.03] flex items-center justify-center gap-2"
              >
                Apply for IBP <ArrowRight size={18} />
              </button>

              {/* <button className="px-10 py-4 bg-transparent border border-neutral-700 hover:border-white rounded-full font-bold transition-all hover:bg-white/5">
                Download Overview
              </button> */}
            </div>
          </AnimatedSection>
        </div>
      </section>
    </div>
  );
}
