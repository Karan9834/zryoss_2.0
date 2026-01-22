import React, { useEffect, useRef, useState } from "react";
import {
  ArrowRight,
  CheckCircle2,
  AlertCircle,
  ShieldCheck,
  Target,
  Globe,
  Building2,
  Zap,
  Code2,
  Server,
  Fingerprint,
  Plus,
  Minus,
} from "lucide-react";

/* ---------------- Hooks & Utility Components ---------------- */

const useScrollVisibility = (threshold = 0.1) => {
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setIsVisible(true);
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
        transform: isVisible ? "translateY(0)" : "translateY(40px)",
        transitionDelay: `${delay}ms`,
      }}
    >
      {children}
    </div>
  );
};

const SectionHeader = ({
  label,
  title,
  subtitle,
  align = "center", // "center" | "left"
  variant = "default", // "default" | "alt"
  accent = "soft", // "none" | "soft" | "strong"
}) => {
  const isCenter = align === "center";

  const titleAccent =
    accent === "strong"
      ? "text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-amber-400"
      : accent === "soft"
      ? "text-white"
      : "text-white";

  return (
    <div className={`${isCenter ? "text-center" : "text-left"} mb-14`}>
      {/* label chip */}
      <div
        className={`inline-flex items-center gap-2 px-4 py-2 rounded-full border border-white/10 bg-white/5 backdrop-blur-sm mb-6`}
      >
        <span className="w-2 h-2 rounded-full bg-orange-500 animate-pulse" />
        <span className="text-xs font-semibold tracking-widest uppercase text-neutral-300">
          {label}
        </span>
      </div>

      {/* title */}
      <h2
        className={`text-4xl md:text-5xl font-bold tracking-tight mb-5 ${
          variant === "alt" ? "leading-[1.05]" : ""
        }`}
      >
        <span className={titleAccent}>{title}</span>
      </h2>

      {/* subtle divider line */}
      <div
        className={`h-px ${
          isCenter ? "mx-auto" : ""
        } w-24 bg-gradient-to-r from-orange-500/40 via-white/10 to-transparent mb-6`}
      />

      {/* subtitle */}
      {subtitle && (
        <p
          className={`text-neutral-400 text-lg leading-relaxed font-light ${
            isCenter ? "max-w-3xl mx-auto" : "max-w-2xl"
          }`}
        >
          {subtitle}
        </p>
      )}
    </div>
  );
};


const FAQItem = ({ question, answer, isOpen, onClick }) => {
  return (
    <div className="border-b border-white/10 last:border-0">
      <button
        onClick={onClick}
        className="w-full py-6 flex items-center justify-between text-left group"
      >
        <span
          className={`text-lg font-medium transition-colors ${
            isOpen
              ? "text-orange-500"
              : "text-white group-hover:text-orange-400"
          }`}
        >
          {question}
        </span>
        <div
          className={`p-2 rounded-full transition-all ${
            isOpen
              ? "bg-orange-600 rotate-180"
              : "bg-white/5 group-hover:bg-white/10"
          }`}
        >
          {isOpen ? <Minus size={16} /> : <Plus size={16} />}
        </div>
      </button>

      <div
        className={`grid transition-[grid-template-rows] duration-500 ease-out ${
          isOpen ? "grid-rows-[1fr] opacity-100 pb-8" : "grid-rows-[0fr] opacity-0"
        }`}
      >
        <div className="overflow-hidden">
          <p className="text-neutral-400 text-base leading-relaxed max-w-2xl">
            {answer}
          </p>
        </div>
      </div>
    </div>
  );
};

/* ---------------- Main Page ---------------- */

export default function Overview() {
  const [openFaqIndex, setOpenFaqIndex] = useState(0);

  const checklist = [
    "Identity",
    "Digital presence",
    "Business positioning",
    "Sales readiness",
    "Operational alignment",
  ];

  const failReasons = [
    "Branding is inconsistent",
    "Digital presence looks unprofessional",
    "Messaging is unclear",
    "Operations are not aligned with positioning",
  ];

  const steps = [
    {
      num: "01",
      title: "Brand Direction & Positioning",
      icon: Target,
      points: [
        "Business vertical and domain focus",
        "Target audience and market positioning",
        "Service offerings and scope",
        "Brand tone and direction",
      ],
      note: "Clear, focused, scalable brand foundation",
    },
    {
      num: "02",
      title: "Brand Identity Creation",
      icon: Fingerprint,
      points: [
        "Brand name (if required)",
        "Logo and visual identity",
        "Brand guidelines and consistency",
        "Aligned with vertical + market expectations",
      ],
      note: "Identity built for long-term scalability",
    },
    {
      num: "03",
      title: "Website & Digital Presence",
      icon: Globe,
      points: [
        "Professional website under your brand name",
        "Domain and hosting setup (where applicable)",
        "Clear service pages and positioning",
        "Contact and inquiry setup",
      ],
      note: "Execution-ready website, not informational only",
    },
    {
      num: "04",
      title: "Company Profile & Sales Collateral",
      icon: Building2,
      points: [
        "Company profile / pitch deck",
        "Service brochures or presentations",
        "Proposal + pricing structure support",
      ],
      note: "Professional communication from day one",
    },
    {
      num: "05",
      title: "Social Media & Digital Setup",
      icon: Zap,
      points: [
        "Official social media pages",
        "Initial branding and positioning",
        "Content structure and posting plan",
      ],
      note: "Credibility + market visibility ensured",
    },
  ];

  const ecosystemPoints = [
    "Connected to the Zryoss platform",
    "Execution routing is enabled",
    "Sales enablement and demo support are activated",
    "Account management is assigned",
  ];

  const faqs = [
    {
      question: "Is IPP an employment role?",
      answer:
        "No. IPP is not an employment role. It is a business partnership model designed for ownership-based founders.",
    },
    {
      question: "Is IPP a franchise?",
      answer:
        "No. IPP is not a franchise. There is no franchising structure — you operate independently under your own brand.",
    },
    {
      question: "Is IPP a passive investment product?",
      answer:
        "No. IPP is not a passive investment model. You build your business and own clients, while Zryoss powers backend execution.",
    },
    {
      question: "Who owns the brand and client relationship?",
      answer:
        "You own the brand fully. Your client relationships belong to you. Zryoss does not claim brand ownership.",
    },
  ];

  return (
    <div className="min-h-screen bg-[#050505] text-white font-sans selection:bg-orange-600/30">
      {/* Ambient Background */}
      <div className="fixed inset-0 pointer-events-none z-0">
        <div className="absolute top-[-20%] right-[-10%] w-[800px] h-[800px] bg-orange-600/10 rounded-full blur-[120px]" />
        <div className="absolute bottom-[-10%] left-[-10%] w-[600px] h-[600px] bg-blue-600/5 rounded-full blur-[100px]" />
      </div>

      {/* ---------------- HERO ---------------- */}
      <section className="relative min-h-screen flex items-center px-4 sm:px-6 lg:px-8 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img
            src="https://images.unsplash.com/photo-1519389950473-47ba0277781c?auto=format&fit=crop&q=80&w=2000"
            className="w-full h-full object-cover opacity-25"
            alt="Background"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#050505] via-[#050505]/40 to-transparent" />
        </div>

        <div className="max-w-7xl mx-auto relative z-10 w-full">
          <AnimatedSection>
            <div className="max-w-4xl mx-auto text-center">
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/5 backdrop-blur-sm border border-white/10 rounded-full mb-8">
                <span className="w-2 h-2 rounded-full bg-orange-500 animate-pulse" />
                <span className="text-xs font-semibold tracking-wide uppercase text-neutral-300">
                  IPP – Independent Prime Partner
                </span>
              </div>

              <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold leading-[0.95] tracking-tight mb-6">
                Build Your Own Brand.
                <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-500 to-amber-500">
                  Operate on a Proven System.
                </span>
              </h1>

              <p className="text-lg md:text-xl text-neutral-300 leading-relaxed max-w-2xl mx-auto font-light mb-10">
                An Independent Prime Partner (IPP) is an individual or founder who
                builds and operates their own independent business brand, while using
                <span className="text-white font-medium"> Zryoss</span> as the backend
                operating system.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                <button className="px-8 py-4 bg-orange-600 hover:bg-orange-500 rounded-full font-bold text-base transition-all hover:scale-[1.03] shadow-[0_0_30px_-12px_rgba(234,88,12,0.5)] flex items-center justify-center gap-2">
                  Start IPP Journey <ArrowRight size={18} />
                </button>

                <a
                  href="#brand-creation"
                  className="px-8 py-4 bg-transparent border border-neutral-700 hover:border-white rounded-full font-bold text-base transition-all hover:bg-white/5 flex items-center justify-center gap-2"
                >
                  Brand Creation Process <ArrowRight size={18} />
                </a>
              </div>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* ---------------- IPP DEFINITION ---------------- */}
      <section className="py-24 relative z-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeader
              label="Program Overview"
              title="What Exactly Is an IPP?"
              subtitle="Clear definition, clarity on what you get, and why this model is designed for ownership-first founders."
              align="left"
              variant="alt"
              accent="soft"
            />


          <div className="grid lg:grid-cols-2 gap-12 items-start">
            <AnimatedSection>
              <h3 className="text-2xl font-bold mb-5 text-white">What IPP Is</h3>

              <p className="text-neutral-400 text-lg leading-relaxed font-light mb-8">
                IPP is a business partnership model designed for people who want
                ownership—without the burden of building everything from scratch.
              </p>

              <div className="grid gap-4">
                {[
                  "You build your independent business brand",
                  "You operate under your chosen name and positioning",
                  "Zryoss powers backend execution as the operating system",
                ].map((item, i) => (
                  <div
                    key={i}
                    className="flex items-center gap-4 p-4 rounded-xl bg-white/5 border border-white/10"
                  >
                    <div className="w-9 h-9 rounded-full bg-orange-600/20 flex items-center justify-center">
                      <CheckCircle2 className="text-orange-500" size={16} />
                    </div>
                    <span className="text-neutral-200">{item}</span>
                  </div>
                ))}
              </div>
            </AnimatedSection>

            <AnimatedSection delay={150}>
              <div className="bg-neutral-900/50 border border-white/5 rounded-3xl p-8">
                <h3 className="text-2xl font-bold mb-6">What IPP Is NOT</h3>

                <div className="space-y-4">
                  {[
                    "IPP is not an employment role.",
                    "IPP is not a franchise.",
                    "IPP is not a passive investment product.",
                  ].map((item, i) => (
                    <div
                      key={i}
                      className="flex items-start gap-4 p-4 rounded-xl bg-black/30 border border-white/5"
                    >
                      <div className="w-9 h-9 rounded-full bg-white/5 flex items-center justify-center mt-0.5">
                        <AlertCircle className="text-orange-400" size={16} />
                      </div>
                      <span className="text-neutral-300 leading-relaxed">
                        {item}
                      </span>
                    </div>
                  ))}
                </div>

                <div className="mt-8 p-5 rounded-2xl bg-gradient-to-r from-orange-500/15 to-transparent border border-orange-500/20">
                  <div className="flex items-center gap-3 mb-2">
                    <ShieldCheck className="text-orange-400" size={18} />
                    <span className="font-bold text-white">
                      Ownership-led partnership
                    </span>
                  </div>
                  <p className="text-sm text-neutral-300 leading-relaxed">
                    IPP is built for founders who want to grow a serious business with a
                    structured system behind execution.
                  </p>
                </div>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* ---------------- BRAND CREATION INTRO ---------------- */}
      <section id="brand-creation" className="py-24 bg-[#0a0a0a] relative z-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeader
            label="Brand Creation System"
            title="From Individual to a Fully Launched Business Brand"
            subtitle="Zryoss builds your brand operationally, so you don’t waste time experimenting."
          />

          <div className="grid lg:grid-cols-2 gap-10">
            <AnimatedSection>
              <div className="p-10 rounded-3xl bg-neutral-900/40 border border-white/5 relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-orange-500/10 to-transparent opacity-60" />
                <div className="relative">
                  <h3 className="text-2xl font-bold mb-4 text-white">
                    You own the brand.
                  </h3>
                  <p className="text-neutral-300 leading-relaxed">
                    Zryoss builds the foundation, aligns positioning with execution
                    capability, and ensures you launch as a real business—not just a logo.
                  </p>
                </div>
              </div>
            </AnimatedSection>

            <AnimatedSection delay={120}>
              <div className="p-10 rounded-3xl bg-neutral-900/40 border border-white/5">
                <h3 className="text-2xl font-bold mb-4">Why Brand Creation Is Central</h3>
                <ul className="space-y-3 text-neutral-300">
                  {failReasons.map((r, i) => (
                    <li key={i} className="flex items-start gap-3">
                      <span className="mt-1 w-2 h-2 rounded-full bg-orange-500" />
                      <span>{r}</span>
                    </li>
                  ))}
                </ul>

                <div className="mt-8 border-t border-white/10 pt-6">
                  <p className="text-neutral-400 leading-relaxed">
                    Zryoss solves this by treating brand creation as a{" "}
                    <span className="text-white font-semibold">system process</span> —
                    not a creative exercise alone.
                  </p>
                </div>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* ---------------- WHAT BRAND CREATION INCLUDES ---------------- */}
      <section className="py-24 relative z-10 bg-[#050505]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeader
            label="What You Get"
            title="Brand Creation Means More Than Visuals"
            subtitle="This includes everything required to operate as a real business from day one."
          />

          <div className="grid lg:grid-cols-2 gap-14 items-center">
            <AnimatedSection>
              <div className="grid gap-4">
                {checklist.map((item, i) => (
                  <div
                    key={i}
                    className="flex items-center gap-4 p-4 rounded-xl bg-neutral-900/50 border border-white/5 hover:border-orange-500/20 transition-colors"
                  >
                    <div className="w-9 h-9 rounded-full bg-orange-600/20 flex items-center justify-center">
                      <CheckCircle2 className="text-orange-500" size={16} />
                    </div>
                    <span className="text-neutral-200">{item}</span>
                  </div>
                ))}
              </div>
            </AnimatedSection>

            <AnimatedSection delay={150}>
              <div className="relative rounded-3xl overflow-hidden border border-white/10 shadow-2xl bg-neutral-900">
                <img
                  src="https://images.unsplash.com/photo-1553877522-43269d4ea984?auto=format&fit=crop&q=80&w=1400"
                  alt="Brand strategy"
                  className="w-full h-[520px] object-cover opacity-65"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/10 to-transparent" />
                <div className="absolute bottom-0 left-0 right-0 p-8">
                  <div className="bg-black/55 backdrop-blur-xl p-6 rounded-2xl border border-white/10">
                    <div className="flex items-center justify-between">
                      <span className="text-xs font-mono text-orange-500">
                        IPP BRAND READINESS
                      </span>
                      <span className="text-xs font-mono text-green-400 flex items-center gap-2">
                        <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
                        MARKET READY
                      </span>
                    </div>
                    <div className="mt-4 text-neutral-200 font-medium">
                      Not perfection —{" "}
                      <span className="text-white font-bold">business readiness</span>.
                    </div>
                  </div>
                </div>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* ---------------- STEPS ---------------- */}
      <section className="py-24 bg-[#0a0a0a] relative z-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeader
            label="Execution Flow"
            title="Step-by-Step IPP Brand Creation Process"
            subtitle="Structured. Predictable. Execution-focused. Your brand is built like a system."
          />

          <div className="grid lg:grid-cols-2 gap-8">
            {steps.map((s, i) => (
              <AnimatedSection key={s.num} delay={i * 80}>
                <div className="p-8 rounded-3xl bg-neutral-900/50 border border-white/5 hover:border-orange-500/20 hover:bg-neutral-900 transition-colors group">
                  <div className="flex items-center justify-between mb-6">
                    <div className="flex items-center gap-4">
                      <div className="w-14 h-14 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center">
                        <s.icon className="text-orange-500" size={26} />
                      </div>
                      <div>
                        <div className="text-xs font-mono text-neutral-500">{s.num}</div>
                        <h3 className="text-2xl font-bold text-white group-hover:text-orange-500 transition-colors">
                          {s.title}
                        </h3>
                      </div>
                    </div>

                    <div className="hidden sm:flex items-center gap-2 text-xs px-3 py-1 rounded-full bg-white/5 border border-white/10 text-neutral-300">
                      <Code2 size={14} />
                      System Step
                    </div>
                  </div>

                  <ul className="space-y-3 text-neutral-300">
                    {s.points.map((p, idx) => (
                      <li key={idx} className="flex items-start gap-3">
                        <CheckCircle2 className="text-orange-500 mt-0.5" size={16} />
                        <span>{p}</span>
                      </li>
                    ))}
                  </ul>

                  <div className="mt-6 p-4 rounded-2xl bg-black/35 border border-white/5 text-sm text-neutral-400">
                    {s.note}
                  </div>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* ---------------- OWNERSHIP + INTEGRATION ---------------- */}
      <section className="py-24 relative z-10 bg-[#050505]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeader
            label="System + Ownership"
            title="Ownership, Control & Ecosystem Integration"
            subtitle="You own everything client-facing. Zryoss powers the backend execution."
          />

          <div className="grid lg:grid-cols-2 gap-10">
            <AnimatedSection>
              <div className="p-10 rounded-3xl bg-neutral-900/45 border border-white/5">
                <h3 className="text-2xl font-bold mb-6">Brand Ownership & Control</h3>
                <div className="space-y-4 text-neutral-300 leading-relaxed">
                  {[
                    "The brand is fully owned by the IPP.",
                    "The brand operates under the IPP’s chosen name.",
                    "Clients belong to the IPP.",
                    "Zryoss does not claim brand ownership.",
                  ].map((t, i) => (
                    <div key={i} className="flex gap-3">
                      <CheckCircle2 size={18} className="text-orange-500 mt-0.5" />
                      <span>{t}</span>
                    </div>
                  ))}
                </div>

                <div className="mt-8 p-5 rounded-2xl bg-gradient-to-r from-orange-500/15 to-transparent border border-orange-500/20">
                  <p className="text-neutral-200">
                    Zryoss only provides the operating and execution backbone.
                  </p>
                </div>
              </div>
            </AnimatedSection>

            <AnimatedSection delay={120}>
              <div className="p-10 rounded-3xl bg-neutral-900/45 border border-white/5">
                <h3 className="text-2xl font-bold mb-6">Integration with Zryoss Ecosystem</h3>

                <div className="space-y-4">
                  {ecosystemPoints.map((item, i) => (
                    <div key={i} className="flex items-start gap-3">
                      <Server className="text-orange-500 mt-0.5" size={18} />
                      <span className="text-neutral-300">{item}</span>
                    </div>
                  ))}
                </div>

                <div className="mt-10 rounded-2xl bg-black/30 border border-white/5 p-6">
                  <div className="text-xs uppercase tracking-widest text-neutral-500 mb-2 font-semibold">
                    Result
                  </div>
                  <p className="text-neutral-200 leading-relaxed">
                    Your brand becomes operationally{" "}
                    <span className="text-white font-bold">live</span> — not just visible.
                  </p>
                </div>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* ---------------- TIMELINE + WHY WORKS ---------------- */}
      <section className="py-24 bg-[#0a0a0a] relative z-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeader
            label="Readiness + Proof"
            title="Timeline & Why This System Works"
            subtitle="Fast, structured, predictable — and built to reduce startup risk."
          />

          <div className="grid lg:grid-cols-2 gap-10">
            <AnimatedSection>
              <div className="p-10 rounded-3xl bg-neutral-900/55 border border-white/5">
                <h3 className="text-2xl font-bold mb-6">Timeline & Readiness</h3>

                <p className="text-neutral-400 leading-relaxed mb-6">
                  Brand creation is designed to be fast, structured, and predictable.
                </p>

                <div className="p-6 rounded-2xl bg-black/35 border border-white/5">
                  <div className="flex items-center gap-3 mb-2">
                    <Zap size={18} className="text-orange-500" />
                    <span className="font-bold text-white">Goal</span>
                  </div>
                  <p className="text-neutral-300">
                    The goal is not perfection — the goal is business readiness.
                  </p>
                </div>
              </div>
            </AnimatedSection>

            <AnimatedSection delay={120}>
              <div className="p-10 rounded-3xl bg-neutral-900/55 border border-white/5">
                <h3 className="text-2xl font-bold mb-6">Why This Model Works</h3>

                <div className="space-y-4 text-neutral-300">
                  {[
                    "Eliminates early-stage confusion",
                    "Ensures professional market entry",
                    "Aligns brand with execution capability",
                    "Saves time, cost, and effort",
                    "Reduces startup risk",
                  ].map((x, i) => (
                    <div key={i} className="flex items-start gap-3">
                      <CheckCircle2 className="text-orange-500 mt-0.5" size={18} />
                      <span>{x}</span>
                    </div>
                  ))}
                </div>

                <div className="mt-8 p-6 rounded-2xl bg-gradient-to-r from-orange-500/15 to-transparent border border-orange-500/20">
                  <p className="text-white font-semibold">
                    You don’t experiment. You start with a system.
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
          <SectionHeader
            label="Final Message"
            title="Your Brand Is the Front. Zryoss Is the Engine."
            subtitle="Brand creation is not separate in Zryoss — it is the first step of execution."
          />

          <AnimatedSection className="text-center">
            <p className="text-neutral-400 text-lg max-w-3xl mx-auto leading-relaxed font-light mb-10">
              IPP brand creation ensures you don’t just look like a business — you operate like one.
              From identity to execution, everything flows as one system.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="px-10 py-4 bg-orange-600 hover:bg-orange-500 rounded-full font-bold transition-all hover:scale-[1.03] flex items-center justify-center gap-2">
                Apply for IPP Partnership <ArrowRight size={18} />
              </button>

              <a
                href="#"
                className="px-10 py-4 bg-transparent border border-neutral-700 hover:border-white rounded-full font-bold transition-all hover:bg-white/5"
              >
                Download IPP Overview
              </a>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* ---------------- FAQ ---------------- */}
      <section className="py-24 bg-[#0a0a0a] relative z-10">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeader
            label="FAQ"
            title="Common Questions"
            subtitle="Quick answers to help you understand the IPP model clearly."
          />

          <div className="bg-white/5 rounded-3xl p-8 md:p-12 border border-white/5">
            {faqs.map((faq, i) => (
              <AnimatedSection key={i} delay={i * 60}>
                <FAQItem
                  question={faq.question}
                  answer={faq.answer}
                  isOpen={openFaqIndex === i}
                  onClick={() => setOpenFaqIndex(openFaqIndex === i ? -1 : i)}
                />
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
