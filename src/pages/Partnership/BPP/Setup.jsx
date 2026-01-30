import React, { useState, useEffect, useRef } from 'react';
import {
  Layout,
  ArrowRight,
  TrendingUp,
  ShieldCheck,
  Globe,
  Zap,
  Briefcase,
  Layers,
  UserCheck,
  CheckCircle2,
  XCircle,
  Scale,
  Building2,
  Users
} from 'lucide-react';
import FadeUp from "../../../components/animations/FadeUp";

/* --- Hooks & Utility Components --- */

const useScrollVisibility = (threshold = 0.1) => {
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
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
        transform: isVisible ? 'translateY(0)' : 'translateY(40px)',
        transitionDelay: `${delay}ms`
      }}
    >
      {children}
    </div>
  );
};

export default function BrandAndBusinessSetup() {
  return (
    <div className="min-h-screen bg-[#050505] text-white font-sans selection:bg-orange-600/30">
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
                  Independent Business Partner
                </div>
                <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold leading-[1.15] tracking-tight mb-5 text-white">
                  Build Scale on <br />
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-orange-600">
                    One Operating System
                  </span>
                </h1>
                <p className="text-xl text-gray-400 leading-relaxed font-light mb-8">
                  Scale-focused business partner operating multiple verticals under one independent identity.
                </p>

                <div className="flex flex-wrap gap-4">
                  {[
                    "Not a Job",
                    "Not a Franchise",
                    "Not Recruitment-Driven"
                  ].map((item, i) => (
                    <div key={i} className="px-6 py-3 bg-white/5 border border-white/10 rounded-full backdrop-blur-sm text-neutral-300 flex items-center gap-2">
                      <ShieldCheck size={16} className="text-orange-500" />
                      {item}
                    </div>
                  ))}
                </div>
              </FadeUp>
            </div>

            {/* Right Column: Image */}
            <div className="relative hidden lg:block">
              <FadeUp delay={0.2}>
                <div className="absolute inset-0 bg-gradient-to-r from-orange-500/20 to-yellow-600/20 blur-3xl rounded-3xl transform rotate-3" />
                <img
                  src="/Brand & Business Setup by Zryoss.png"
                  alt="Build Scale on One Operating System"
                  className="relative rounded-3xl shadow-2xl border border-white/10 transform hover:scale-[1.02] transition-transform duration-500 object-cover w-full h-auto aspect-[4/3]"
                />
              </FadeUp>
            </div>
          </div>
        </div>
      </section>

      {/* BPP vs IPP Description */}
      <section className="py-24 px-6 relative z-10 bg-neutral-900/30 border-y border-white/5">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <AnimatedSection>
              <h2 className="text-3xl md:text-5xl font-bold mb-8 leading-tight">
                What Makes a BPP <br />
                <span className="text-orange-500">Different?</span>
              </h2>
              <p className="text-neutral-400 text-lg mb-8 leading-relaxed">
                While an IPP focuses on one primary business vertical, a BPP operates at a multi-vertical, expansion-oriented level. BPP works on the system, not just in the system.
              </p>
              <div className="p-6 bg-orange-500/10 border-l-4 border-orange-500 rounded-r-lg">
                <p className="text-lg text-white font-medium">
                  BPP is designed for business builders who think at scale.
                </p>
              </div>
            </AnimatedSection>

            <AnimatedSection delay={200}>
              <div className="space-y-4">
                {[
                  { text: "A business hub", icon: Building2 },
                  { text: "A growth enabler", icon: TrendingUp },
                  { text: "A market expansion partner", icon: Globe }
                ].map((item, i) => (
                  <div key={i} className="flex items-center gap-4 p-4 bg-white/5 border border-white/5 rounded-xl hover:bg-white/10 transition-colors">
                    <div className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center text-orange-500 shrink-0">
                      <item.icon size={20} />
                    </div>
                    <span className="text-neutral-300 font-medium">{item.text}</span>
                  </div>
                ))}
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* Core Role & Ideal For */}
      <section className="py-24 px-6 relative z-10">
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12">
          <AnimatedSection>
            <h3 className="text-3xl font-bold text-white mb-8">Core Role of a BPP</h3>
            <div className="bg-[#111] p-8 rounded-3xl border border-white/10 h-full">
              <ul className="space-y-6">
                {[
                  "Build a larger business footprint",
                  "Operate across multiple verticals",
                  "Enable and support multiple IPPs",
                  "Drive higher market penetration"
                ].map((item, i) => (
                  <li key={i} className="flex items-center gap-4 text-neutral-300">
                    <Layout size={20} className="text-blue-500" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
              <div className="mt-8 pt-8 border-t border-white/10 text-neutral-400 text-sm">
                <strong className="text-white">Zryoss manages execution.</strong> BPP manages business expansion and leadership.
              </div>
            </div>
          </AnimatedSection>

          <AnimatedSection delay={200}>
            <h3 className="text-3xl font-bold text-white mb-8">Who Is a BPP Ideal For?</h3>
            <div className="bg-[#111] p-8 rounded-3xl border border-white/10 h-full">
              <ul className="space-y-6">
                {[
                  "Experienced entrepreneurs",
                  "Business owners and consultants",
                  "Agency founders",
                  "Organizations looking to expand service offerings",
                  "Leaders who want to build business ecosystems"
                ].map((item, i) => (
                  <li key={i} className="flex items-center gap-4 text-neutral-300">
                    <UserCheck size={20} className="text-green-500" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
              <div className="mt-8 pt-8 border-t border-white/10 text-neutral-400 text-sm italic">
                If you want to operate at strategic and scale level, BPP is built for you.
              </div>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* What Zryoss Provides */}
      <section className="py-24 px-6 bg-[#0a0a0a] border-y border-white/5">
        <div className="max-w-7xl mx-auto">
          <AnimatedSection className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold mb-4">What Zryoss Provides</h2>
            <p className="text-neutral-400">Everything required to operate at scale.</p>
          </AnimatedSection>

          <div className="grid lg:grid-cols-3 gap-8">
            {[
              {
                title: "Platform & Governance",
                icon: Layers,
                features: ["Centralized operating system", "Multi-vertical execution routing", "Account management", "Quality control and reporting"]
              },
              {
                title: "Execution & Delivery",
                icon: Zap,
                features: ["Domain-based execution", "Ecosystem brands", "Vendor management", "Centralized demos & pre-sales"]
              },
              {
                title: "Enablement & Scale",
                icon: TrendingUp,
                features: ["Brand and business structuring", "Multi-IPP enablement", "Growth and expansion alignment"]
              }
            ].map((card, i) => (
              <AnimatedSection key={i} delay={i * 100}>
                <div className="h-full p-8 bg-white/5 border border-white/5 rounded-2xl hover:bg-white/10 transition-colors">
                  <div className="w-12 h-12 bg-white/5 rounded-xl flex items-center justify-center text-orange-500 mb-6">
                    <card.icon size={24} />
                  </div>
                  <h3 className="text-xl font-bold text-white mb-6">{card.title}</h3>
                  <ul className="space-y-3">
                    {card.features.map((feat, j) => (
                      <li key={j} className="text-sm text-neutral-400 flex items-start gap-2">
                        <span className="w-1.5 h-1.5 rounded-full bg-orange-500 mt-1.5 shrink-0" />
                        {feat}
                      </li>
                    ))}
                  </ul>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* Verticals & Relationship */}
      <section className="py-24 px-6 relative z-10">
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12">
          <AnimatedSection>
            <div className="p-8 border border-white/10 rounded-3xl bg-neutral-900/50">
              <h3 className="text-2xl font-bold text-white mb-6">Business Verticals</h3>
              <div className="flex flex-wrap gap-2 mb-6">
                {[
                  "Technology & Software", "Digital Marketing", "HR & Recruitment", "Education", "Healthcare", "Interiors", "Business Services"
                ].map((tag, i) => (
                  <span key={i} className="px-3 py-1 bg-white/5 text-neutral-300 rounded-full text-sm border border-white/5">
                    {tag}
                  </span>
                ))}
              </div>
              <p className="text-sm text-neutral-500">All execution remains routed through Zryoss ecosystem brands.</p>
            </div>
          </AnimatedSection>

          <AnimatedSection delay={200}>
            <div className="p-8 border border-white/10 rounded-3xl bg-neutral-900/50">
              <h3 className="text-2xl font-bold text-white mb-6">BPP & IPP Relationship</h3>
              <ul className="space-y-3 text-neutral-300 mb-6">
                <li className="flex gap-2"><CheckCircle2 size={18} className="text-blue-500" /> Multiple IPPs may operate</li>
                <li className="flex gap-2"><CheckCircle2 size={18} className="text-blue-500" /> Each IPP runs own brand</li>
                <li className="flex gap-2"><CheckCircle2 size={18} className="text-blue-500" /> BPP provides leadership</li>
              </ul>
              <p className="text-sm text-neutral-500">This structure is controlled, limited, and system-governed.</p>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* Commercial Model */}
      <section className="py-24 px-6 bg-gradient-to-b from-[#111] to-black border-y border-white/5">
        <div className="max-w-4xl mx-auto text-center">
          <AnimatedSection>
            <h2 className="text-3xl md:text-5xl font-bold mb-8">BPP Commercial Model</h2>
            <div className="p-10 bg-white/5 border border-orange-500/20 rounded-3xl inline-block w-full max-w-2xl relative overflow-hidden">
              <div className="absolute top-0 right-0 p-4 bg-orange-500 text-black font-bold text-xs uppercase tracking-wider rounded-bl-xl">
                One-Time
              </div>
              <h3 className="text-neutral-400 text-lg mb-2">BPP Onboarding Fee</h3>
              <div className="text-5xl md:text-6xl font-bold text-white mb-6">
                ₹1,50,000
              </div>
              <div className="grid sm:grid-cols-3 gap-4 text-sm text-neutral-300 mb-8 border-t border-white/10 pt-6">
                <div>Multi-vertical enablement</div>
                <div>System setup & access</div>
                <div>Scale support</div>
              </div>
              <div className="flex flex-wrap justify-center gap-4 text-xs text-neutral-500">
                <span className="flex items-center gap-1"><XCircle size={12} /> No guaranteed incomes</span>
                <span className="flex items-center gap-1"><XCircle size={12} /> No recruitment payouts</span>
                <span className="flex items-center gap-1"><XCircle size={12} /> No hidden charges</span>
              </div>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* Clarifications - MLM Safe */}
      <section className="py-24 px-6 relative z-10">
        <div className="max-w-4xl mx-auto">
          <AnimatedSection>
            <div className="bg-red-900/10 border border-red-500/20 rounded-2xl p-8 text-center">
              <h3 className="text-2xl font-bold text-red-500 mb-6 flex items-center justify-center gap-2">
                <ShieldCheck /> Important Clarifications
              </h3>
              <div className="grid sm:grid-cols-2 gap-6 text-left max-w-lg mx-auto">
                <div className="space-y-2">
                  <div className="flex items-center gap-2 text-white"><XCircle className="text-red-500" size={16} /> Not MLM</div>
                  <div className="flex items-center gap-2 text-white"><XCircle className="text-red-500" size={16} /> Not a Franchise</div>
                </div>
                <div className="space-y-2">
                  <div className="flex items-center gap-2 text-white"><XCircle className="text-red-500" size={16} /> Not Referral Income Scheme</div>
                  <div className="flex items-center gap-2 text-white"><XCircle className="text-red-500" size={16} /> Not Investment Product</div>
                </div>
              </div>
              <p className="mt-8 text-neutral-400">BPP is a business operating partnership focused on execution and scale.</p>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* Why It Works & Ownership */}
      <section className="py-24 px-6 bg-[#080808]">
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12">
          <AnimatedSection>
            <h3 className="text-2xl font-bold text-white mb-6">Why The BPP Model Works</h3>
            <ul className="space-y-4">
              {[
                "Enables multi-vertical growth",
                "Removes execution bottlenecks",
                "Centralizes quality and control",
                "Allows leadership-based expansion",
                "Protects ecosystem integrity"
              ].map((item, i) => (
                <li key={i} className="flex gap-3 text-neutral-400">
                  <CheckCircle2 className="text-green-500 shrink-0" size={20} />
                  {item}
                </li>
              ))}
            </ul>
            <p className="mt-6 text-sm text-neutral-500 italic">BPPs build business networks, not sales chains.</p>
          </AnimatedSection>

          <AnimatedSection delay={200}>
            <div className="bg-[#111] p-8 rounded-2xl border border-white/5">
              <h3 className="text-2xl font-bold text-white mb-6">Ownership & Independence</h3>
              <div className="space-y-4 mb-6">
                <h4 className="text-green-500 font-bold text-sm uppercase">A BPP Owns</h4>
                <ul className="text-neutral-300 text-sm space-y-2 pl-4 border-l border-green-500/30">
                  <li>Identity, Client Relationships, Market Presence</li>
                </ul>
              </div>
              <div className="space-y-4">
                <h4 className="text-orange-500 font-bold text-sm uppercase">Zryoss Does Not Own</h4>
                <ul className="text-neutral-300 text-sm space-y-2 pl-4 border-l border-orange-500/30">
                  <li>BPP Brands, BPP Clients, BPP Revenues</li>
                </ul>
              </div>
              <p className="mt-6 text-sm text-neutral-500">Zryoss operates the engine behind the business.</p>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-32 px-6 text-center border-t border-white/5">
        <div className="max-w-4xl mx-auto">
          <AnimatedSection>
            <h2 className="text-4xl md:text-6xl font-bold mb-8">
              One System. <br />
              <span className="text-white">Bigger Vision.</span>
            </h2>
            <p className="text-xl text-neutral-400 mb-12">
              Build bigger than one brand. Lead multiple business units. Scale responsibly.
            </p>

            <div className="inline-block p-1 rounded-full bg-gradient-to-r from-orange-500 to-amber-500 p-1">
              <div className="px-12 py-6 bg-black rounded-full">
                <h3 className="text-2xl font-bold text-white">
                  Zryoss provides the structure. BPP builds the scale.
                </h3>
              </div>
            </div>
          </AnimatedSection>
        </div>
      </section>
    </div>
  );
}
