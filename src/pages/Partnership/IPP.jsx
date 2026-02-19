import React, { useState, useEffect, useRef } from "react";
import {
  CheckCircle2,
  ArrowRight,
  Building2,
  Target,
  Zap,
  Stethoscope,
  Plane,
  Landmark,
  Truck,
  Film,
  GraduationCap,
  Mail,
  Phone,
  MapPin,
  Plus,
  Minus,
  Globe,
  Code2,
  Server,
  ShieldCheck,
  Fingerprint,
  Quote,
  Star,
  Star,
  Banknote,
} from "lucide-react";
import { useNavigate } from "react-router-dom";
import { useEmail } from "../../hooks/useEmail";

/* --- Hooks & Utility Components --- */

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

const FAQItem = ({ question, answer, isOpen, onClick }) => {
  return (
    <div className="border-b border-white/10 last:border-0">
      <button
        onClick={onClick}
        className="w-full py-6 flex items-center justify-between text-left group"
      >
        <span
          className={`text-[17px] md:text-lg font-medium transition-colors ${isOpen
            ? "text-orange-500"
            : "text-white group-hover:text-orange-400"
            }`}
        >
          {question}
        </span>

        <div
          className={`p-2 rounded-full transition-all ${isOpen
            ? "bg-orange-600 rotate-180"
            : "bg-white/5 group-hover:bg-white/10"
            }`}
        >
          {isOpen ? <Minus size={16} /> : <Plus size={16} />}
        </div>
      </button>

      <div
        className={`grid transition-[grid-template-rows] duration-500 ease-out ${isOpen ? "grid-rows-[1fr] opacity-100 pb-8" : "grid-rows-[0fr] opacity-0"
          }`}
      >
        <div className="overflow-hidden">
          <p className="text-neutral-400 text-[15px] md:text-base leading-relaxed max-w-2xl font-light">
            {answer}
          </p>
        </div>
      </div>
    </div>
  );
};

/* --- Main Page --- */

export default function KryossIPP() {
  const navigate = useNavigate();
  const formRef = useRef();
  const { sendEmail, loading } = useEmail();
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });
  const [openFaqIndex, setOpenFaqIndex] = useState(0);

  const clients = [
    "TechCorp",
    "GlobalSoft",
    "InnoVentures",
    "DataFlow",
    "CloudNine",
    "NextGen",
    "SmartHub",
    "ProSystems",
    "FutureTech",
    "Quantum",
  ];

  const testimonials = [
    {
      name: "David Chen",
      role: "CEO, Chen Digital",
      content:
        "The IPP model allowed me to fire my unreliable freelance network and switch to Kryoss. My agency's delivery capacity went from 2 projects a month to 15, all under my brand.",
      avatar:
        "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&q=80&w=200",
      stats: "750% Growth",
    },
    {
      name: "Elena Rodriguez",
      role: "Founder, Zenith Marketing",
      content:
        "I'm a marketer, not a coder. Kryoss handles the complex backend logic while I focus on client strategy. The white-label reporting is seamless.",
      avatar:
        "https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&q=80&w=200",
      stats: "Zero Tech Debt",
    },
    {
      name: "Marcus Thorne",
      role: "Director, Thorne Systems",
      content:
        "The ramp-up time was incredible. We signed the NDA on Monday and had a full development team assigned by Wednesday. Best partnership decision we've made.",
      avatar:
        "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?auto=format&fit=crop&q=80&w=200",
      stats: "Instant Scale",
    },
  ];

  const industries = [
    {
      icon: Stethoscope,
      name: "Healthcare IT",
      img: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?auto=format&fit=crop&q=80&w=600",
    },
    {
      icon: Plane,
      name: "Travel Tech",
      img: "https://images.unsplash.com/photo-1436491865332-7a61a109cc05?auto=format&fit=crop&q=80&w=600",
    },
    { icon: Landmark, name: "Fintech", img: "/finance image.webp" },
    {
      icon: Truck,
      name: "Logistics",
      img: "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?auto=format&fit=crop&q=80&w=600",
    },
    {
      icon: Film,
      name: "Media",
      img: "https://images.unsplash.com/photo-1485846234645-a62644f84728?auto=format&fit=crop&q=80&w=600",
    },
    {
      icon: GraduationCap,
      name: "EdTech",
      img: "https://images.unsplash.com/photo-1503676260728-1c00da094a0b?auto=format&fit=crop&q=80&w=600",
    },
  ];

  const workflowSteps = [
    {
      num: "01",
      title: "NDA & Onboard",
      desc: "Legal framework setup.",
      icon: ShieldCheck,
      detail: "24hr Processing",
    },
    {
      num: "02",
      title: "Scope Handoff",
      desc: "Send us your requirements.",
      icon: Target,
      detail: "Technical Audit",
    },
    {
      num: "03",
      title: "White-Label Dev",
      desc: "We build under your brand.",
      icon: Code2,
      detail: "Agile Sprints",
    },
    {
      num: "04",
      title: "Silent Delivery",
      desc: "Deploy to your client.",
      icon: Server,
      detail: "Full Documentation",
    },
  ];

  const handleSubmit = async (e) => {
    e.preventDefault();
    const result = await sendEmail(formRef);

    if (result.success) {
      alert("Application request submitted successfully!");
      setFormData({ name: "", email: "", message: "" });
    } else {
      alert("Failed to submit request. Please try again later.");
    }
  };

  return (
    <div className="min-h-screen bg-[#050505] text-white selection:bg-orange-600/30">
      {/* Background Ambience */}
      <div className="fixed inset-0 pointer-events-none z-0">
        <div className="absolute top-[-20%] right-[-10%] w-[800px] h-[800px] bg-orange-600/10 rounded-full blur-[130px]" />
        <div className="absolute bottom-[-10%] left-[-10%] w-[600px] h-[600px] bg-blue-600/5 rounded-full blur-[110px]" />
      </div>

      {/* HERO */}
      <section className="relative min-h-screen flex items-center border-b border-white/5 overflow-hidden">
        {/* background image */}
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-gradient-to-t from-[#050505] via-[#050505]/50 to-transparent z-10" />
          <img
            src="https://images.unsplash.com/photo-1519389950473-47ba0277781c?auto=format&fit=crop&q=80&w=2000"
            className="w-full h-full object-cover opacity-25"
            alt="Background"
          />
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full pt-28 pb-20">
          <AnimatedSection>
            <div className="max-w-4xl mx-auto text-center">
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/5 backdrop-blur-sm border border-white/10 rounded-full mb-8 hover:bg-white/10 transition-colors cursor-default">
                <span className="w-2 h-2 rounded-full bg-orange-500 animate-pulse" />
                <span className="text-[11px] md:text-xs font-semibold tracking-[0.18em] uppercase text-neutral-300">
                  Independent Prime Partner Program
                </span>
              </div>

              <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-8 leading-[1.02] tracking-tight">
                Your Brand.
                <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-500 to-amber-500">
                  Our Technology.
                </span>
              </h1>

              <p className="text-lg md:text-xl text-neutral-400 mb-10 leading-relaxed max-w-2xl mx-auto font-light">
                Scale your agency without the technical overhead. We provide the
                engine, you drive the business.
              </p>

              <div className="flex flex-col sm:flex-row gap-5 justify-center items-center">
                <button
                  onClick={() => navigate('/apply')}
                  className="px-10 py-4 bg-orange-600 hover:bg-orange-500 rounded-full font-bold text-base md:text-lg transition-all hover:scale-[1.03] shadow-[0_0_30px_-12px_rgba(234,88,12,0.55)] flex items-center gap-2 group"
                >
                  Start Partnership
                  <ArrowRight
                    size={20}
                    className="group-hover:translate-x-1 transition-transform"
                  />
                </button>

                <button className="px-10 py-4 bg-transparent border border-white/15 hover:border-white/30 text-white rounded-full font-bold text-base md:text-lg transition-all hover:bg-white/5">
                  View Documentation
                </button>
              </div>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* OVERVIEW */}
      <section className="py-24 relative z-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <AnimatedSection>
              <div className="relative rounded-3xl overflow-hidden aspect-[4/5] lg:aspect-square group shadow-2xl border border-white/10 bg-white/[0.02]">
                <img
                  src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&q=80&w=1200"
                  alt="Team collaboration"
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent" />

                <div className="absolute bottom-8 left-8 right-8">
                  <div className="p-4 bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl">
                    <div className="text-3xl font-bold text-white mb-1">
                      100+
                    </div>
                    <div className="text-sm text-neutral-300">
                      Active Agencies Supported
                    </div>
                  </div>
                </div>
              </div>
            </AnimatedSection>

            <AnimatedSection delay={200}>
              <h2 className="text-3xl md:text-5xl font-bold mb-8 leading-tight">
                The Partnership Model <br />
                <span className="text-white/35">Reimagined.</span>
              </h2>

              <div className="space-y-6 text-base md:text-lg text-neutral-400 font-light leading-relaxed">
                <p>
                  The Independent Prime Partner (IPP) program is built for
                  visionaries who want to lead without getting bogged down by
                  technical execution.
                </p>
                <p>
                  We act as your engine room. You own the client, the brand, and
                  the relationship. We provide the heavy lifting—development, QA,
                  and maintenance—completely white-labeled under your banner.
                </p>

                <div className="pt-6">
                  <div className="flex items-center gap-4 text-white font-medium">
                    <div className="w-12 h-12 rounded-full bg-orange-600/20 flex items-center justify-center text-orange-500">
                      <Zap size={24} />
                    </div>
                    <span>No franchising fees. No hidden costs.</span>
                  </div>
                </div>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* WHY JOIN */}
      <section className="py-24 bg-[#0a0a0a] relative border-y border-white/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
          <AnimatedSection className="mb-20">
            <div className="flex flex-col md:flex-row justify-between items-end gap-8 pb-8 border-b border-white/5">
              <div className="max-w-2xl">
                <h2 className="text-3xl md:text-5xl font-bold mb-4">
                  Why Become a Partner?
                </h2>
                <p className="text-neutral-400 text-lg font-light">
                  Unlock specific advantages designed to accelerate your
                  agency's growth with clear data-driven benefits.
                </p>
              </div>

              <button
                onClick={() => navigate('/apply')}
                className="px-6 py-2 rounded-full bg-white/5 border border-white/10 hover:bg-orange-600 hover:border-orange-600 text-white transition-all flex items-center gap-2"
              >
                <span>Join Program</span> <ArrowRight size={16} />
              </button>
            </div>
          </AnimatedSection>

          <div className="grid lg:grid-cols-3 gap-6">
            {[
              {
                icon: Fingerprint,
                title: "Total Brand Control",
                desc: "Your clients see only you. We operate silently in the background, ensuring your brand equity grows.",
                metrics: [
                  { label: "White-Label", value: "100%" },
                  { label: "IP Ownership", value: "Yours" },
                ],
                color: "text-orange-400",
              },
              {
                icon: Building2,
                title: "Zero Risk Entry",
                desc: "Start immediately without capital expenditure. No need to hire expensive technical teams.",
                metrics: [
                  { label: "Capex", value: "$0.00" },
                  { label: "Hiring Time", value: "0 Days" },
                ],
                color: "text-blue-400",
              },
              {
                icon: Globe,
                title: "Global Infrastructure",
                desc: "Leverage our distributed network of developers and battle-tested systems from day one.",
                metrics: [
                  { label: "Resources", value: "500+" },
                  { label: "Availability", value: "24/7" },
                ],
                color: "text-purple-400",
              },
            ].map((item, i) => (
              <AnimatedSection key={i} delay={i * 120}>
                <div className="h-full bg-white/[0.03] border border-white/10 rounded-3xl p-8 hover:bg-white/[0.05] hover:border-orange-500/30 transition-all duration-500 group relative overflow-hidden flex flex-col">
                  <div className="absolute inset-0 bg-gradient-to-br from-transparent via-transparent to-orange-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                  <div className="relative z-10 flex flex-col h-full">
                    <div className="w-14 h-14 bg-white/5 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300 border border-white/10">
                      <item.icon size={28} className={item.color} />
                    </div>

                    <h3 className="text-2xl font-bold mb-4 text-white group-hover:text-orange-500 transition-colors">
                      {item.title}
                    </h3>

                    <p className="text-neutral-400 leading-relaxed mb-8 font-light">
                      {item.desc}
                    </p>

                    <div className="w-full h-px bg-white/10 mb-6" />

                    <div className="grid grid-cols-2 gap-4 mt-auto">
                      {item.metrics.map((metric, idx) => (
                        <div
                          key={idx}
                          className="bg-black/20 rounded-xl p-3 border border-white/10"
                        >
                          <div className="text-xs text-neutral-500 uppercase tracking-wider mb-1 font-semibold">
                            {metric.label}
                          </div>
                          <div className="text-lg font-mono text-white font-bold">
                            {metric.value}
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* FUNDING SUPPORT */}
      <section className="py-24 relative z-10 bg-gradient-to-b from-[#0a0a0a] to-[#050505]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
          <div className="relative rounded-[2.5rem] overflow-hidden border border-amber-500/20 bg-gradient-to-br from-amber-950/20 to-black p-8 md:p-16">
            <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-amber-500/10 blur-[120px] rounded-full translate-x-1/2 -translate-y-1/2 pointer-events-none" />

            <div className="grid lg:grid-cols-2 gap-12 items-center relative z-10">
              <div>
                <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-amber-500/30 bg-amber-500/10 mb-8">
                  <span className="w-1.5 h-1.5 rounded-full bg-amber-400 animate-pulse" />
                  <span className="text-xs font-bold tracking-widest uppercase text-amber-300">
                    New Initiative
                  </span>
                </div>

                <h2 className="text-3xl md:text-5xl font-bold mb-6 text-white">
                  Get Funding Ready with <br />
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-400 to-yellow-600">
                    Government Support
                  </span>
                </h2>

                <p className="text-lg text-neutral-400 mb-8 leading-relaxed font-light max-w-xl">
                  We don't just provide technology — we help you secure the capital to grow.
                  Leverage our dedicated support to access schemes like <span className="text-white">MUDRA, Startup India, and MSME benefits</span>.
                </p>

                <button
                  onClick={() => navigate('/partnership/ipp/funding-support')}
                  className="px-8 py-4 bg-white text-black hover:bg-amber-400 transition-colors rounded-full font-bold flex items-center gap-2 group"
                >
                  Explore Funding Support
                  <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
                </button>
              </div>

              <div className="relative">
                <div className="relative rounded-3xl overflow-hidden border border-white/10 shadow-2xl bg-black/50 aspect-video group cursor-pointer hover:border-amber-500/40 transition-all duration-500">
                  <div className="absolute inset-0 bg-gradient-to-tr from-amber-500/10 to-transparent opacity-50" />
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="w-20 h-20 rounded-full bg-white/5 backdrop-blur-md border border-white/20 flex items-center justify-center group-hover:scale-110 transition-transform duration-500">
                      <Banknote size={32} className="text-amber-400" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* WORKFLOW */}
      <section className="py-24 bg-[#050505] relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full relative">
          <AnimatedSection className="text-center mb-20">
            <h2 className="text-3xl md:text-5xl font-bold mb-6">
              Seamless Workflow
            </h2>
            <p className="text-neutral-400 text-lg font-light">
              Four distinct phases to delivery excellence.
            </p>
          </AnimatedSection>

          <div className="relative">
            {/* Desktop line */}
            <div className="hidden md:block absolute top-1/2 left-0 w-full h-1 bg-white/10 -translate-y-1/2 rounded-full z-0" />
            {/* Mobile line */}
            <div className="md:hidden absolute top-0 left-8 h-full w-1 bg-white/10 rounded-full z-0" />

            <div className="grid grid-cols-1 md:grid-cols-4 gap-12 md:gap-6 relative z-10">
              {workflowSteps.map((step, i) => (
                <AnimatedSection key={i} delay={i * 150} className="relative">
                  <div className="flex flex-col md:items-center relative group">
                    <div className="flex items-center justify-center w-16 h-16 rounded-full bg-[#0a0a0a] border-4 border-white/10 text-white/40 font-bold text-xl mb-6 group-hover:border-orange-500 group-hover:text-orange-500 transition-all duration-500 shadow-[0_0_20px_rgba(0,0,0,1)] relative z-20">
                      {step.num}
                    </div>

                    <div className="pl-4 md:pl-0 md:text-center w-full">
                      <div className="p-6 rounded-2xl bg-white/[0.03] border border-white/10 hover:bg-white/[0.05] transition-all duration-300 hover:-translate-y-2">
                        <div className="mb-4 inline-flex p-3 rounded-xl bg-orange-500/10 text-orange-500 border border-orange-500/20">
                          <step.icon size={22} />
                        </div>
                        <h3 className="text-xl font-bold text-white mb-2">
                          {step.title}
                        </h3>
                        <p className="text-sm text-neutral-400 mb-4 h-10 font-light">
                          {step.desc}
                        </p>

                        <div className="inline-block px-3 py-1 rounded text-xs font-mono bg-white/5 text-neutral-300 border border-white/10">
                          {step.detail}
                        </div>
                      </div>
                    </div>
                  </div>
                </AnimatedSection>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CAPABILITIES */}
      <section className="py-28 bg-[#0a0a0a] border-y border-white/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-20 items-center">
            <AnimatedSection>
              <h2 className="text-3xl md:text-5xl font-bold mb-8 leading-tight">
                We Handle The Code.
                <br />
                You Handle The Business.
              </h2>

              <p className="text-neutral-400 text-lg mb-12 font-light leading-relaxed">
                Think of us as your elite technical co-founder. While you focus
                on strategy and sales, we execute with precision.
              </p>

              <div className="grid gap-6">
                {[
                  "Full-cycle software development & delivery",
                  "Rigorous QA & automated testing",
                  "Scalable cloud infrastructure management",
                  "White-label technical documentation",
                  "24/7 Maintenance & support teams",
                  "Security & compliance audits",
                ].map((item, i) => (
                  <div
                    key={i}
                    className="flex items-center gap-4 p-4 rounded-2xl bg-white/[0.03] border border-white/10 hover:bg-white/[0.05] hover:border-orange-500/30 transition-all group"
                  >
                    <div className="w-9 h-9 rounded-full bg-orange-600/20 flex items-center justify-center flex-shrink-0 group-hover:bg-orange-600 transition-colors">
                      <CheckCircle2
                        className="text-orange-500 group-hover:text-white"
                        size={16}
                      />
                    </div>
                    <span className="text-neutral-200 font-light">{item}</span>
                  </div>
                ))}
              </div>
            </AnimatedSection>

            <AnimatedSection delay={200} className="relative">
              <div className="sticky top-32">
                <div className="relative rounded-3xl overflow-hidden aspect-[3/4] border border-white/10 shadow-2xl bg-black">
                  <img
                    src="https://images.unsplash.com/photo-1555066931-4365d14bab8c?auto=format&fit=crop&q=80&w=1000"
                    alt="Coding Interface"
                    className="w-full h-full object-cover opacity-60"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-90" />

                  <div className="absolute bottom-0 left-0 right-0 p-8">
                    <div className="bg-black/50 backdrop-blur-xl p-6 rounded-2xl border border-white/10">
                      <div className="flex items-center justify-between mb-4">
                        <span className="text-xs font-mono text-orange-500 tracking-widest">
                          SYSTEM STATUS
                        </span>
                        <span className="flex items-center gap-2 text-xs font-mono text-green-400">
                          <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
                          OPERATIONAL
                        </span>
                      </div>

                      <div className="space-y-4">
                        <div className="space-y-2">
                          <div className="flex justify-between text-xs text-neutral-300">
                            <span>Server Load</span>
                            <span>24%</span>
                          </div>
                          <div className="h-1.5 bg-white/10 rounded-full overflow-hidden">
                            <div className="h-full w-1/4 bg-orange-500 rounded-full" />
                          </div>
                        </div>

                        <div className="space-y-2">
                          <div className="flex justify-between text-xs text-neutral-300">
                            <span>Project Delivery</span>
                            <span>98% On Time</span>
                          </div>
                          <div className="h-1.5 bg-white/10 rounded-full overflow-hidden">
                            <div className="h-full w-[98%] bg-green-500 rounded-full" />
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* TESTIMONIALS */}
      <section className="py-24 bg-[#050505] relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold mb-6">
              Partner Success Stories
            </h2>
            <p className="text-neutral-400 text-lg max-w-2xl mx-auto font-light">
              Hear from the agencies who are scaling their business with the
              Kryoss IPP model.
            </p>
          </AnimatedSection>

          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((t, i) => (
              <AnimatedSection key={i} delay={i * 150} className="h-full">
                <div className="p-8 rounded-3xl bg-white/[0.03] border border-white/10 flex flex-col h-full hover:bg-white/[0.05] transition-colors group relative overflow-hidden">
                  <Quote className="absolute -top-4 -right-4 w-24 h-24 text-white/5 -rotate-12 group-hover:text-orange-500/10 transition-colors" />

                  <div className="flex gap-1 mb-6">
                    {[...Array(5)].map((_, j) => (
                      <Star
                        key={j}
                        size={14}
                        className="fill-orange-500 text-orange-500"
                      />
                    ))}
                  </div>

                  <p className="text-base md:text-lg text-neutral-300 italic mb-10 relative z-10 leading-relaxed font-light">
                    "{t.content}"
                  </p>

                  <div className="mt-auto flex items-center gap-4 border-t border-white/10 pt-8">
                    <div className="w-14 h-14 rounded-full overflow-hidden border-2 border-orange-500/50">
                      <img
                        src={t.avatar}
                        alt={t.name}
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <div>
                      <h4 className="font-bold text-white">{t.name}</h4>
                      <p className="text-xs text-neutral-500 uppercase tracking-widest mb-1">
                        {t.role}
                      </p>
                      <div className="text-[10px] font-mono font-bold text-orange-500 px-2 py-0.5 bg-orange-500/10 rounded inline-block">
                        {t.stats}
                      </div>
                    </div>
                  </div>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* INDUSTRIES */}
      <section className="py-24 bg-[#0a0a0a] border-y border-white/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
          <AnimatedSection className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold mb-6">
              Industries We Serve
            </h2>
            <p className="text-neutral-400 text-lg max-w-2xl mx-auto font-light">
              Our expertise spans across critical sectors, delivering compliant
              and cutting-edge solutions.
            </p>
          </AnimatedSection>

          <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
            {industries.map((industry, i) => (
              <AnimatedSection key={i} delay={i * 70}>
                <div className="group relative aspect-[4/3] rounded-2xl overflow-hidden cursor-pointer shadow-lg border border-white/10 bg-black">
                  <img
                    src={industry.img}
                    alt={industry.name}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-black/40 group-hover:bg-black/60 transition-colors duration-300" />
                  <div className="absolute inset-0 flex flex-col items-center justify-center p-4 text-center">
                    <div className="w-12 h-12 bg-white/10 backdrop-blur-sm rounded-full flex items-center justify-center mb-3 transform translate-y-4 group-hover:translate-y-0 opacity-0 group-hover:opacity-100 transition-all duration-300 border border-white/10">
                      <industry.icon className="text-white" size={24} />
                    </div>
                    <h3 className="text-lg md:text-2xl font-bold text-white transform group-hover:-translate-y-1 transition-transform duration-300">
                      {industry.name}
                    </h3>
                  </div>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* CLIENTS MARQUEE */}
      <section className="py-16 border-y border-white/5 bg-black overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-10 text-center">
          <span className="text-xs font-mono text-neutral-500 tracking-[0.25em] uppercase">
            Trusted By Industry Leaders
          </span>
        </div>

        <div className="relative flex overflow-x-hidden group">
          <div className="animate-marquee whitespace-nowrap flex gap-16 px-6">
            {[...clients, ...clients, ...clients].map((client, i) => (
              <span
                key={i}
                className="text-2xl md:text-4xl font-bold text-neutral-800 hover:text-white transition-colors cursor-default"
              >
                {client.toUpperCase()}
              </span>
            ))}
          </div>

          <div className="animate-marquee2 absolute top-0 whitespace-nowrap flex gap-16 px-6">
            {[...clients, ...clients, ...clients].map((client, i) => (
              <span
                key={i}
                className="text-2xl md:text-4xl font-bold text-neutral-800 hover:text-white transition-colors cursor-default"
              >
                {client.toUpperCase()}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-24 bg-[#050505]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
          <AnimatedSection className="text-center mb-14">
            <h2 className="text-3xl md:text-5xl font-bold mb-6">
              Common Questions
            </h2>
          </AnimatedSection>

          <div className="bg-white/[0.03] rounded-3xl p-8 md:p-12 border border-white/10">
            {[
              {
                question: "How does the white-label arrangement work?",
                answer:
                  "We sign a strict NDA. Our team effectively becomes your team. We use your email domain for communication if needed, or work strictly backend. All documentation, code repositories, and deliverables carry your branding.",
              },
              {
                question: "What is the typical ramp-up time?",
                answer:
                  "Once partnership agreements are signed, we can typically deploy a dedicated team or resources within 7-14 days, depending on the complexity of the requirements.",
              },
              {
                question: "Do you offer post-launch support?",
                answer:
                  "Yes, we provide comprehensive SLA-based support packages that you can resell to your clients, generating recurring revenue streams.",
              },
              {
                question: "What is the cost structure?",
                answer:
                  "We offer flexible models: Fixed Cost for defined scopes, or Time & Material for evolving projects. Partners receive special wholesale rates allowing for healthy margins.",
              },
            ].map((faq, i) => (
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

      {/* CONTACT */}
      <section id="contact" className="py-24 bg-[#0a0a0a] border-t border-white/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
          <div className="grid lg:grid-cols-5 gap-12 bg-white/[0.03] rounded-[2rem] overflow-hidden border border-white/10 shadow-2xl">
            {/* Left */}
            <div className="lg:col-span-2 bg-gradient-to-b from-orange-600 to-orange-500 p-10 md:p-12 text-white flex flex-col justify-between relative overflow-hidden">
              <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-10" />

              <div className="relative z-10">
                <h3 className="text-3xl font-bold mb-6">Ready to Scale?</h3>
                <p className="text-orange-100 mb-12 font-light leading-relaxed">
                  Join the Independent Prime Partner program today and transform
                  your business delivery capabilities.
                </p>

                <div className="space-y-8">
                  <div className="flex items-start gap-4">
                    <Mail className="mt-1 opacity-80" />
                    <div>
                      <div className="text-xs uppercase opacity-70 mb-1">
                        Email Us
                      </div>
                      <div className="font-medium">partners@kryoss.com</div>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <Phone className="mt-1 opacity-80" />
                    <div>
                      <div className="text-xs uppercase opacity-70 mb-1">
                        Call Us
                      </div>
                      <div className="font-medium">+1 (888) KRYOSS-IPP</div>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <MapPin className="mt-1 opacity-80" />
                    <div>
                      <div className="text-xs uppercase opacity-70 mb-1">
                        Headquarters
                      </div>
                      <div className="font-medium">
                        123 Innovation Drive
                        <br />
                        San Francisco, CA 94105
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Right */}
            <div className="lg:col-span-3 p-10 md:p-12">
              <h3 className="text-2xl font-bold mb-8 text-white">
                Application Request
              </h3>

              <form ref={formRef} onSubmit={handleSubmit} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label className="text-xs font-bold text-neutral-500 uppercase tracking-wide">
                      Full Name
                    </label>
                    <input
                      type="text"
                      name="from_name"
                      className="w-full bg-black/40 border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-orange-500 transition-colors"
                      placeholder="John Doe"
                      value={formData.name}
                      onChange={(e) =>
                        setFormData({ ...formData, name: e.target.value })
                      }
                    />
                  </div>

                  <div className="space-y-2">
                    <label className="text-xs font-bold text-neutral-500 uppercase tracking-wide">
                      Work Email
                    </label>
                    <input
                      type="email"
                      name="reply_to"
                      className="w-full bg-black/40 border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-orange-500 transition-colors"
                      placeholder="john@company.com"
                      value={formData.email}
                      onChange={(e) =>
                        setFormData({ ...formData, email: e.target.value })
                      }
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <label className="text-xs font-bold text-neutral-500 uppercase tracking-wide">
                    Message / Inquiry
                  </label>
                  <textarea
                    name="message"
                    rows={4}
                    className="w-full bg-black/40 border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-orange-500 transition-colors resize-none"
                    placeholder="Tell us about your business..."
                    value={formData.message}
                    onChange={(e) =>
                      setFormData({ ...formData, message: e.target.value })
                    }
                  />
                </div>

                <button
                  type="submit"
                  disabled={loading}
                  className="w-full py-4 bg-orange-600 text-white font-bold rounded-xl hover:bg-orange-500 transition-colors flex items-center justify-center gap-2 disabled:opacity-70 disabled:cursor-not-allowed"
                >
                  {loading ? "Submitting..." : "Submit Application"}
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* OFFICE */}
      <section className="h-[380px] relative group overflow-hidden border-t border-white/5">
        <img
          src="https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&q=80&w=2000"
          alt="Office Map View"
          className="w-full h-full object-cover filter grayscale hover:grayscale-0 transition-all duration-700"
        />
        <div className="absolute inset-0 bg-black/30 pointer-events-none" />
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="bg-white/10 backdrop-blur-md p-8 rounded-full border border-white/20 hover:scale-110 transition-transform cursor-pointer shadow-2xl">
            <MapPin size={48} className="text-white drop-shadow-lg" />
          </div>
        </div>
      </section>

      {/* FOOTER */}
      {/* <footer className="bg-black py-14 border-t border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row justify-between items-center gap-8">
          <div className="text-center md:text-left">
            <div className="text-2xl font-bold tracking-tighter text-white mb-2">
              KRYOSS<span className="text-orange-600">.</span>
            </div>
            <p className="text-neutral-500 text-sm font-light">
              Empowering businesses through technical excellence.
            </p>
          </div>

          <div className="flex gap-8 text-sm text-neutral-400">
            <a href="#" className="hover:text-white transition-colors">
              Privacy Policy
            </a>
            <a href="#" className="hover:text-white transition-colors">
              Terms of Service
            </a>
            <a href="#" className="hover:text-white transition-colors">
              Partner Agreement
            </a>
          </div>

          <div className="text-neutral-600 text-xs">
            © 2024 Kryoss IPP. All rights reserved.
          </div>
        </div>
      </footer> */}

      {/* CSS for marquee */}
      <style>{`
        @keyframes marquee {
          0% { transform: translateX(0%); }
          100% { transform: translateX(-100%); }
        }
        @keyframes marquee2 {
          0% { transform: translateX(100%); }
          100% { transform: translateX(0%); }
        }
        .animate-marquee {
          animation: marquee 25s linear infinite;
        }
        .animate-marquee2 {
          animation: marquee2 25s linear infinite;
        }
      `}</style>
    </div>
  );
}
