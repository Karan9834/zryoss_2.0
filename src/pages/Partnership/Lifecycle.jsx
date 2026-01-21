import React, { useEffect } from "react";
import {
  FileText,
  CheckCircle2,
  Rocket,
  Settings,
  TrendingUp,
  ShieldCheck,
  BarChart3,
  Globe,
  RefreshCcw,
  Lock,
  ArrowRight,
  Flag,
  Target,
  Layers
} from "lucide-react";
import { Link } from "react-router-dom";

const Lifecycle = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const stages = [
    {
      id: 1,
      title: "Application & Evaluation",
      purpose: "Ensure alignment before onboarding.",
      icon: FileText,
      whatHappens: [
        "Partner applies through official channels",
        "Business intent and background are reviewed",
        "Model fit (IPP or BPP) is evaluated",
        "Expectations and responsibilities are clarified"
      ],
      outcome: "Only partners who align with system-led execution and ethical practices move forward."
    },
    {
      id: 2,
      title: "Partnership Confirmation & Onboarding",
      purpose: "Formally activate the partnership.",
      icon: CheckCircle2,
      whatHappens: [
        "Partnership terms are confirmed",
        "Onboarding scope is finalized",
        "Platform access is initiated",
        "Account ownership is assigned"
      ],
      outcome: "The partner officially becomes part of the Zryoss operating system."
    },
    {
      id: 3,
      title: "Brand Creation & Business Setup",
      purpose: "Make the partner market-ready.",
      icon: Rocket,
      whatHappens: [
        "Brand positioning and identity are created",
        "Website, profile, and digital presence are built",
        "Sales and presentation material is prepared",
        "Platform workflows are connected"
      ],
      outcome: "The partner brand is professionally launched, not just announced."
    },
    {
      id: 4,
      title: "Enablement & System Integration",
      purpose: "Prepare the partner to operate confidently.",
      icon: Settings,
      whatHappens: [
        "Platform orientation and process walkthrough",
        "Demo and sales enablement activation",
        "Execution routing readiness",
        "Account management alignment"
      ],
      outcome: "The partner understands how to operate within the system—without managing execution."
    },
    {
      id: 5,
      title: "Market Activation & Client Acquisition",
      purpose: "Start real business activity.",
      icon: Target,
      whatHappens: [
        "Partner begins acquiring clients",
        "Opportunities are introduced into the platform",
        "Demos and pre-sales support are provided",
        "Scopes are validated centrally"
      ],
      outcome: "Business generation begins with execution confidence."
    },
    {
      id: 6,
      title: "Execution, Delivery & Support",
      purpose: "Deliver value consistently.",
      icon: Layers,
      whatHappens: [
        "Work is routed to the correct execution brand",
        "Vendors and teams are managed centrally",
        "Quality and timelines are monitored",
        "Account management coordinates updates"
      ],
      outcome: "Clients experience structured, reliable delivery."
    },
    {
      id: 7,
      title: "Stabilization & Performance Alignment",
      purpose: "Move from early activity to steady operations.",
      icon: BarChart3,
      whatHappens: [
        "Delivery patterns stabilize",
        "Communication flows improve",
        "Performance metrics are tracked",
        "Expectations are refined"
      ],
      outcome: "The partnership becomes operationally mature."
    },
    {
      id: 8,
      title: "Growth & Controlled Expansion",
      purpose: "Scale without breaking the system.",
      icon: TrendingUp,
      whatHappens: [
        "Increased business volume is supported",
        "Additional execution capacity is activated",
        "(If applicable) controlled sub-partnering is enabled",
        "Governance remains intact"
      ],
      outcome: "Growth strengthens the ecosystem instead of destabilizing it."
    },
    {
      id: 9,
      title: "Long-Term Continuity",
      purpose: "Support sustainable business ownership.",
      icon: RefreshCcw,
      whatHappens: [
        "Long-term account continuity is maintained",
        "Execution standards remain consistent",
        "Partner evolves with the ecosystem"
      ],
      outcome: "The partnership becomes a long-term business asset, not a short-term engagement."
    }
  ];

  return (
    <div className="min-h-screen bg-[#050505] text-white font-sans selection:bg-orange-500/30">

      {/* Hero Section */}
      <section className="relative pt-32 pb-24 overflow-hidden">
        {/* Background */}
        <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
          <div className="absolute top-[20%] left-[50%] w-[600px] h-[600px] bg-orange-600/10 rounded-full blur-[120px] -translate-x-1/2" />
          <div className="absolute inset-0 bg-[url('/lifecycle_hero.png')] bg-cover bg-center opacity-30 mix-blend-screen"></div>
          <div className="absolute inset-0 bg-gradient-to-b from-[#050505] via-transparent to-[#050505]"></div>
        </div>

        <div className="max-w-7xl mx-auto px-6 relative z-10 text-center">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-orange-500/30 bg-orange-500/10 text-orange-400 text-sm font-medium mb-8">
            <RefreshCcw size={14} />
            Partnership Engagement Lifecycle
          </div>

          <h1 className="text-5xl md:text-7xl font-bold tracking-tight mb-8">
            From Entry to Scale <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-500 to-white">
              One Structured Journey
            </span>
          </h1>

          <p className="text-xl text-gray-400 max-w-3xl mx-auto mb-10 leading-relaxed">
            There are no shortcuts. There is no ambiguity. The Partnership Engagement Lifecycle at Zryoss defines how a partnership begins, operates, and grows.
          </p>
        </div>
      </section>

      {/* Lifecycle Stages */}
      <section className="py-24 bg-[#0a0a0a]">
        <div className="max-w-5xl mx-auto px-6">
          <div className="relative border-l border-white/10 ml-6 md:ml-12 space-y-20">

            {stages.map((stage, index) => (
              <div key={index} className="relative pl-12 md:pl-20">
                {/* Number & Icon */}
                <div className="absolute -left-6 md:-left-8 top-0 flex flex-col items-center">
                  <div className="w-12 h-12 md:w-16 md:h-16 bg-[#111] rounded-full border border-orange-500/20 flex items-center justify-center z-10">
                    <stage.icon className="text-orange-500" size={24} />
                  </div>
                  <div className="mt-2 text-xs text-gray-500 font-bold">Stage {stage.id}</div>
                </div>

                {/* Content */}
                <div className="bg-[#050505] p-8 rounded-3xl border border-white/5 hover:border-orange-500/20 transition-all">
                  <div className="flex flex-col md:flex-row md:items-center justify-between mb-6 gap-4">
                    <h2 className="text-2xl font-bold text-white">{stage.title}</h2>
                    <span className="px-4 py-1.5 bg-white/5 rounded-full text-xs font-medium text-gray-300 border border-white/10 whitespace-nowrap">
                      {stage.purpose}
                    </span>
                  </div>

                  <div className="grid md:grid-cols-2 gap-8">
                    <div>
                      <h4 className="text-sm font-bold text-orange-500 uppercase tracking-widest mb-4">What Happens</h4>
                      <ul className="space-y-3">
                        {stage.whatHappens.map((item, i) => (
                          <li key={i} className="flex gap-3 text-gray-400 text-sm">
                            <div className="w-1.5 h-1.5 bg-white/20 rounded-full mt-2 shrink-0"></div>
                            {item}
                          </li>
                        ))}
                      </ul>
                    </div>
                    <div className="bg-[#111] p-6 rounded-xl border border-white/5 flex flex-col justify-center">
                      <h4 className="text-sm font-bold text-white mb-2 flex items-center gap-2"><Flag size={14} className="text-green-500" /> Outcome</h4>
                      <p className="text-gray-400 text-sm italic">"{stage.outcome}"</p>
                    </div>
                  </div>
                </div>
              </div>
            ))}

          </div>
        </div>
      </section>

      {/* What Never Changes */}
      <section className="py-24 bg-[#050505]">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <h2 className="text-3xl font-bold mb-16">What Never Changes in the Lifecycle</h2>
          <div className="flex flex-wrap justify-center gap-6">
            {[
              "Brand ownership remains with the partner",
              "Execution remains centralized",
              "Governance remains system-controlled",
              "Income depends on real business",
              "Roles remain clearly defined"
            ].map((item, i) => (
              <div key={i} className="bg-[#111] px-8 py-4 rounded-full border border-white/5 flex items-center gap-4 hover:border-orange-500/30 transition-all">
                <Lock className="text-orange-500" size={18} />
                <span className="text-gray-300 font-medium">{item}</span>
              </div>
            ))}
          </div>
          <p className="mt-12 text-white font-bold text-lg">The system does not bend for speed.</p>
        </div>
      </section>

      {/* Why This Matters */}
      <section className="py-24 bg-[#0a0a0a]">
        <div className="max-w-5xl mx-auto px-6 text-center">
          <h2 className="text-3xl font-bold mb-8">Why This Lifecycle Matters</h2>
          <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
            {[
              { icon: ShieldCheck, text: "Prevents Premature Scaling" },
              { icon: Target, text: "Reduces Partner Risk" },
              { icon: BarChart3, text: "Creates Predictable Outcomes" },
              { icon: Globe, text: "Protects Ecosystem Credibility" },
              { icon: RefreshCcw, text: "Enables Long-Term Sustainability" }
            ].map((item, i) => (
              <div key={i} className="flex flex-col items-center p-4 bg-[#050505] rounded-xl border border-white/5 text-center">
                <item.icon className="text-gray-500 mb-3" size={24} />
                <span className="text-xs text-gray-300 font-medium">{item.text}</span>
              </div>
            ))}
          </div>
          <p className="mt-10 text-orange-500 font-bold">Zryoss grows through process, not pressure.</p>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-24 bg-[#050505] relative overflow-hidden text-center">
        <div className="max-w-4xl mx-auto px-6 relative z-10">
          <h2 className="text-4xl font-bold mb-8">One Lifecycle. One System. Real Businesses.</h2>
          <div className="flex flex-col md:flex-row justify-center gap-8 mb-12 text-gray-400">
            <div className="px-6 py-3 bg-[#111] rounded-lg border border-white/5">Partners know what to expect</div>
            <div className="px-6 py-3 bg-[#111] rounded-lg border border-white/5">Execution remains reliable</div>
            <div className="px-6 py-3 bg-[#111] rounded-lg border border-white/5">Growth remains controlled</div>
          </div>
          <p className="text-xl text-white mb-12">From first interaction to long-term scale—<br />everything flows through one operating system.</p>

          <Link to="/contact" className="px-8 py-4 bg-orange-500 text-white font-bold rounded-full hover:bg-orange-600 transition-colors inline-flex items-center gap-2">
            Begin the Lifecycle <ArrowRight size={20} />
          </Link>
        </div>
      </section>

    </div>
  );
};

export default Lifecycle;
