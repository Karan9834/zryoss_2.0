import FadeUp from "../../components/animations/FadeUp";
import { useState } from "react";
import {
  Layers,
  ShieldCheck,
  Zap,
  Users,
  Network,
  ChevronRight,
  ArrowRight,
  Target,
  BarChart3,
  Cpu,
  Sparkles
} from "lucide-react";
import { useNavigate } from "react-router-dom";

// Import images
// Image paths from public directory
const platformLayerImage = "/Platform Layer.png";
const brandLayerImage = "/Brand Layer.png";
const vendorImage = "/vender.png";
const partnerImage = "/partner.png";

const globalMapImage = "/images/ecosystem/global-impact-map.png";
const heroBgImage = "/images/ecosystem/ecosystem-bg.png";
const coreSystemImage = "/images/ecosystem/ecosystem-core.png";

export default function Overview() {
  const navigate = useNavigate();
  const [expandedLayer, setExpandedLayer] = useState(0);

  const layers = [
    {
      title: "Platform Layer",
      tagline: "The Core Catalyst",
      shortDesc: "Central systems, governance, reporting, and controls.",
      detailedDesc: "The Platform Layer is the centralized control system of Zryoss. It manages core technology, sales workflows, CRM, reporting, governance frameworks, and quality controls to ensure consistency, compliance, and scalability across the ecosystem. This layer ensures every transaction and delivery follows defined standards.",
      gradient: "from-orange-600/20 via-orange-500/10 to-transparent",
      icon: <Cpu className="w-8 h-8 text-orange-500" />,
      image: platformLayerImage,
      features: [
        "Centralized control system",
        "Core technology management",
        "Sales workflows & CRM",
        "Governance frameworks",
        "Quality controls",
        "Compliance & standards"
      ],
      layerNumber: 1
    },
    {
      title: "Brand Layer",
      tagline: "Domain Authority",
      shortDesc: "Execution brands delivering domain-specific services.",
      detailedDesc: "The Brand Layer consists of Zryoss-owned execution brands operating in specific domains such as HR, IT, marketing, and compliance. These brands own service standards, pricing frameworks, delivery responsibility, and vendor coordination within their domain. They act as the execution authority between the platform and vendors.",
      gradient: "from-orange-600/15 via-orange-500/10 to-transparent",
      icon: <ShieldCheck className="w-8 h-8 text-orange-500" />,
      image: brandLayerImage,
      features: [
        "Domain-specific execution brands",
        "Service standards ownership",
        "Pricing frameworks",
        "Delivery responsibility",
        "Vendor coordination",
        "Execution authority"
      ],
      layerNumber: 2
    },
    {
      title: "Vendor Layer",
      tagline: "Scalable Execution",
      shortDesc: "Verified vendors executing delivery at scale.",
      detailedDesc: "The Vendor Layer includes vetted service providers and domain specialists responsible for actual service execution. Vendors operate under defined SLAs, timelines, and quality benchmarks monitored by Zryoss brands. This model enables scalable, asset-light delivery without compromising quality.",
      gradient: "from-orange-600/15 via-orange-500/10 to-transparent",
      icon: <Network className="w-8 h-8 text-orange-500" />,
      image: vendorImage,
      features: [
        "Vetted service providers",
        "Domain specialists",
        "Defined SLAs & timelines",
        "Quality benchmarks",
        "Asset-light delivery",
        "Scalable execution"
      ],
      layerNumber: 3
    },
    {
      title: "Partner Layer",
      tagline: "Growth Engine",
      shortDesc: "Independent partners driving client acquisition.",
      detailedDesc: "The Partner Layer consists of independent partners focused on sales, client relationships, and business growth. Partners acquire clients under their own brand name while Zryoss manages demos, execution, and delivery through the ecosystem. Partner earnings are linked solely to real business closures and delivery.",
      gradient: "from-orange-600/20 via-orange-500/10 to-transparent",
      icon: <Users className="w-8 h-8 text-orange-500" />,
      image: partnerImage,
      features: [
        "Independent sales partners",
        "Client acquisition focus",
        "Brand autonomy",
        "Business growth",
        "Performance-based earnings",
        "Demos & execution managed by Zryoss"
      ],
      layerNumber: 4
    },
  ];

  return (
    <div className="bg-[#050505] text-white selection:bg-orange-500/30 min-h-screen relative">
      {/* HERO SECTION */}
      <section className="relative pt-32 pb-20 overflow-hidden">
        <div className="absolute inset-0">
          <img src={heroBgImage} alt="Ecosystem Background" className="w-full h-full object-cover opacity-30" />
          <div className="absolute inset-0 bg-gradient-to-b from-[#050505] via-[#050505]/80 to-[#050505]" />
        </div>
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full pointer-events-none">
          <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] bg-orange-600/10 blur-[120px] rounded-full animate-pulse" />
          <div className="absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] bg-orange-600/5 blur-[120px] rounded-full" />
        </div>

        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <FadeUp>
            <div className="flex flex-col md:flex-row items-center gap-12">
              <div className="md:w-3/5">
                <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-orange-500/30 bg-orange-500/10 backdrop-blur-sm mb-6">
                  <Sparkles size={14} className="text-orange-500" />
                  <span className="text-[10px] uppercase tracking-[0.2em] text-orange-400 font-bold">
                    The Zryoss Architecture
                  </span>
                </div>

                <h1 className="text-5xl md:text-7xl font-bold leading-tight mb-6">
                  A Business System <br />
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-orange-600">
                    Built for Scale.
                  </span>
                </h1>

                <p className="text-gray-400 text-lg md:text-xl max-w-2xl font-light leading-relaxed mb-10">
                  The Zryoss Ecosystem is a multi-layered operating machine designed to decentralize growth while centralizing quality and control.
                </p>
              </div>

              <div className="md:w-2/5 flex justify-center">
                <div className="relative w-full aspect-square max-w-[500px]">
                  <div className="absolute inset-0 bg-orange-500/20 blur-[100px] rounded-full" />
                  <img src={coreSystemImage} alt="Ecosystem Core" className="relative z-10 w-full h-full object-contain drop-shadow-2xl animate-[float_6s_ease-in-out_infinite]" />
                </div>
              </div>
            </div>
          </FadeUp>
        </div>
      </section>

      {/* GLOBAL IMPACT STATS */}
      <section className="py-24 border-y border-white/5 bg-white/[0.02]">
        <div className="max-w-7xl mx-auto px-6">
          <FadeUp delay={0.1}>
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-4xl font-bold mb-6">Global Scale, Local Impact.</h2>
                <p className="text-gray-400 text-lg mb-8 leading-relaxed">
                  The Zryoss Ecosystem is not just a concept; it is an active global network executing complex business cycles every second.
                </p>
                <div className="grid grid-cols-2 gap-8 text-left">
                  {[
                    { label: "Active Partners", value: "250+" },
                    { label: "Service Vendors", value: "1,200+" },
                    { label: "Client Solutions", value: "50k+" },
                    { label: "Countries Reach", value: "15+" }
                  ].map((stat, i) => (
                    <div key={i} className="px-4 border-l border-orange-500/50 pl-6">
                      <h3 className="text-3xl md:text-4xl font-bold text-white mb-2">{stat.value}</h3>
                      <p className="text-sm text-orange-500 uppercase tracking-widest font-semibold">{stat.label}</p>
                    </div>
                  ))}
                </div>
              </div>
              <div className="relative">
                <div className="aspect-video rounded-3xl overflow-hidden border border-white/10 shadow-2xl relative group">
                  <img src={globalMapImage} alt="Global Network Map" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" />
                  <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-80" />
                  <div className="absolute bottom-4 left-6 flex items-center gap-2">
                    <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
                    <span className="text-xs font-mono text-green-500 uppercase">Live Network Activity</span>
                  </div>
                </div>
              </div>
            </div>
          </FadeUp>
        </div>
      </section>

      {/* OVERVIEW CARD */}
      <section className="py-20 relative z-10">
        <div className="max-w-7xl mx-auto px-6">
          <FadeUp delay={0.2}>
            <div className="relative group">
              <div className="absolute -inset-1 bg-gradient-to-r from-orange-600 to-orange-400 rounded-[2.5rem] blur opacity-20 group-hover:opacity-40 transition duration-1000 group-hover:duration-200"></div>
              <div className="relative bg-[#0a0a0a] border border-white/10 rounded-[2.5rem] p-8 md:p-14 overflow-hidden">
                <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-orange-600/5 to-transparent pointer-events-none" />

                <div className="grid lg:grid-cols-2 gap-12 items-center">
                  <div>
                    <h2 className="text-3xl md:text-4xl font-bold mb-6">
                      Coordinated <br />
                      <span className="text-orange-500">Execution Excellence</span>
                    </h2>
                    <p className="text-gray-400 text-lg font-light leading-relaxed mb-8">
                      Unlike traditional business models that break under the pressure of scale, Zryoss utilizes a modular architecture where every layer specializes in its core competency.
                    </p>

                    <div className="space-y-6">
                      {[
                        { icon: <Target className="text-orange-500" />, title: "Clear Accountability", desc: "Defined ownership across all 4 operational layers." },
                        { icon: <Zap className="text-orange-500" />, title: "Agile Scale", desc: "Asset-light delivery model powered by verified specialists." },
                        { icon: <BarChart3 className="text-orange-500" />, title: "Data-Backed Growth", desc: "Centralized reporting and governance for absolute clarity." }
                      ].map((item, i) => (
                        <div key={i} className="flex gap-4">
                          <div className="w-12 h-12 rounded-xl bg-orange-500/10 flex items-center justify-center shrink-0 border border-orange-500/20">
                            {item.icon}
                          </div>
                          <div>
                            <h4 className="text-white font-semibold">{item.title}</h4>
                            <p className="text-gray-500 text-sm">{item.desc}</p>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="relative">
                    <div className="aspect-square rounded-3xl bg-gradient-to-br from-orange-600/10 to-transparent border border-white/5 relative overflow-hidden group/map">
                      <img src={coreSystemImage} alt="Unified Core System" className="w-full h-full object-cover opacity-80 group-hover/map:scale-105 transition-transform duration-700" />
                      <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent" />
                      <div className="absolute bottom-6 left-6">
                        <div className="p-3 bg-black/60 backdrop-blur-md border border-white/10 rounded-xl inline-flex items-center gap-3">
                          <Network size={20} className="text-orange-500 animate-pulse" />
                          <div>
                            <h3 className="text-sm font-bold text-white">Unified Pulse</h3>
                            <p className="text-[10px] text-orange-400 font-mono tracking-wider uppercase">Status: Live</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </FadeUp>
        </div>
      </section>

      {/* LAYER ARCHITECTURE - MODERN TABS */}
      <section className="py-32 relative">
        <div className="max-w-7xl mx-auto px-6">
          <FadeUp>
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold mb-4">The Four Pillars</h2>
              <p className="text-gray-400 max-w-2xl mx-auto font-light">Explore the specific layers that make the Zryoss engine unbeatable.</p>
            </div>
          </FadeUp>

          <div className="grid lg:grid-cols-12 gap-8">
            {/* Sidebar Navigation */}
            <div className="lg:col-span-4 space-y-4">
              {layers.map((layer, index) => (
                <button
                  key={index}
                  onClick={() => setExpandedLayer(index)}
                  className={`w-full p-6 text-left rounded-2xl border transition-all duration-500 flex items-center justify-between group
                    ${expandedLayer === index ?
                      'bg-orange-500/10 border-orange-500/50 shadow-lg shadow-orange-500/5' :
                      'bg-white/5 border-white/10 hover:border-orange-500/30'
                    }`}
                >
                  <div className="flex items-center gap-4">
                    <div className={`w-10 h-10 rounded-lg flex items-center justify-center transition-colors
                      ${expandedLayer === index ? 'bg-orange-500 text-white' : 'bg-white/10 text-gray-400 group-hover:text-orange-400'}
                    `}>
                      <span className="font-bold text-sm">{layer.layerNumber}</span>
                    </div>
                    <div>
                      <h3 className={`font-bold transition-colors ${expandedLayer === index ? 'text-white' : 'text-gray-400 group-hover:text-white'}`}>
                        {layer.title}
                      </h3>
                      <p className="text-[10px] uppercase tracking-widest text-orange-500 font-bold opacity-0 group-hover:opacity-100 transition-opacity">
                        {layer.tagline}
                      </p>
                    </div>
                  </div>
                  <ChevronRight size={18} className={`transition-transform duration-500 ${expandedLayer === index ? 'rotate-90 text-orange-500' : 'text-gray-600'}`} />
                </button>
              ))}
            </div>

            {/* Content Display */}
            <div className="lg:col-span-8">
              <div className="bg-white/5 border border-white/10 rounded-[2rem] p-8 md:p-12 min-h-[600px] relative overflow-hidden flex flex-col">
                <div className={`absolute inset-0 bg-gradient-to-br ${layers[expandedLayer].gradient} opacity-40`} />

                <div className="relative z-10 flex flex-col h-full">
                  <div className="flex items-center gap-4 mb-8">
                    <div className="p-4 rounded-2xl bg-black/40 border border-white/10">
                      {layers[expandedLayer].icon}
                    </div>
                    <div>
                      <span className="text-orange-500 text-xs font-bold uppercase tracking-[0.2em]">{layers[expandedLayer].tagline}</span>
                      <h3 className="text-3xl font-bold">{layers[expandedLayer].title}</h3>
                    </div>
                  </div>

                  <div className="grid md:grid-cols-2 gap-10 flex-grow">
                    <div>
                      <p className="text-gray-300 text-lg font-light leading-relaxed mb-8">
                        {layers[expandedLayer].detailedDesc}
                      </p>

                      <h4 className="text-white font-bold mb-4 flex items-center gap-2">
                        <div className="w-1.5 h-6 bg-orange-500 rounded-full" />
                        Key Capabilities
                      </h4>
                      <ul className="grid grid-cols-1 gap-3">
                        {layers[expandedLayer].features.map((feature, i) => (
                          <li key={i} className="flex items-center gap-3 text-gray-400 group/item">
                            <div className="w-1.5 h-1.5 rounded-full bg-orange-500/40 group-hover/item:bg-orange-500 transition-colors" />
                            <span className="text-sm font-light">{feature}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div className="relative group/img h-full min-h-[300px]">
                      <div className="absolute inset-0 bg-orange-500/10 blur-3xl opacity-0 group-hover/img:opacity-100 transition-opacity duration-700" />
                      <div className="relative h-full rounded-2xl overflow-hidden border border-white/10 group-hover/img:border-orange-500/30 transition-all duration-500">
                        <img
                          src={layers[expandedLayer].image}
                          alt={layers[expandedLayer].title}
                          className="w-full h-full object-cover grayscale transition-all duration-700 group-hover/img:grayscale-0 group-hover/img:scale-110"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black via-black/20 to-transparent" />
                        <div className="absolute bottom-6 left-6 right-6">
                          <p className="text-xs font-mono text-orange-500 mb-1">// SYSTEM_LAYER_{layers[expandedLayer].layerNumber}</p>
                          <p className="text-white font-bold uppercase tracking-wider">{layers[expandedLayer].title}</p>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="mt-12 pt-8 border-t border-white/10 flex items-center justify-between">
                    <p className="text-gray-500 text-sm font-light italic">
                      "Excellence is not an act, it's a system."
                    </p>
                    <button className="flex items-center gap-2 text-orange-400 hover:text-orange-300 font-semibold transition-colors group/btn">
                      Explore this layer <ArrowRight size={16} className="group-hover/btn:translate-x-1 transition-transform" />
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* STRATEGIC VALUE */}
      <section className="py-24 bg-[#0a0a0a]">
        <div className="max-w-7xl mx-auto px-6">
          <FadeUp>
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold mb-6">Why This Architecture Wins</h2>
              <p className="text-gray-400 max-w-2xl mx-auto font-light leading-relaxed">
                By decoupling sales, brand authority, and execution, Zryoss solves the "Agency Dilemma" of scaling quality vs. quantity.
              </p>
            </div>
          </FadeUp>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                title: "Infinite Scalability",
                desc: "Add new vendors without restructuring the core brand. Scale sales without bottlenecking delivery.",
                icon: <Zap className="text-orange-500" size={32} />
              },
              {
                title: "Risk Distribution",
                desc: "Single point of failure is eliminated. If one vendor fails, the network adapts instantly.",
                icon: <ShieldCheck className="text-orange-500" size={32} />
              },
              {
                title: "Hyper-Specialization",
                desc: "Vendors focus only on execution. Partners focus only on sales. The Platform handles the rest.",
                icon: <Target className="text-orange-500" size={32} />
              }
            ].map((item, i) => (
              <FadeUp key={i} delay={i * 0.1}>
                <div className="p-8 rounded-3xl bg-white/5 border border-white/10 hover:border-orange-500/30 transition-all duration-300 h-full group">
                  <div className="w-14 h-14 rounded-2xl bg-orange-500/10 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                    {item.icon}
                  </div>
                  <h3 className="text-xl font-bold mb-3 text-white">{item.title}</h3>
                  <p className="text-gray-400 text-sm leading-relaxed">{item.desc}</p>
                </div>
              </FadeUp>
            ))}
          </div>
        </div>
      </section>

      {/* CASE STUDY HIGHLIGHT */}
      <section className="py-24 bg-white/[0.02]">
        <div className="max-w-7xl mx-auto px-6">
          <FadeUp>
            <div className="bg-gradient-to-r from-[#111] to-black border border-white/10 rounded-3xl p-8 md:p-12">
              <div className="flex flex-col md:flex-row gap-12 items-center">
                <div className="md:w-1/2">
                  <span className="text-orange-500 uppercase tracking-widest text-xs font-bold mb-4 block">Success Story</span>
                  <h3 className="text-3xl font-bold mb-6">TechGiant Corp: Scaling 3 Markets in 6 Months</h3>
                  <p className="text-gray-400 leading-relaxed mb-6">
                    "Using the Zryoss Vendor Layer, we instantly tapped into a pre-vetted network of 50 local implementation partners across SE Asia. No recruitment overhead, just immediate execution."
                  </p>
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 bg-white/10 rounded-full" />
                    <div>
                      <h5 className="font-bold text-white">Sarah Jenkins</h5>
                      <p className="text-xs text-gray-400">VP Operations, TechGiant Corp</p>
                    </div>
                  </div>
                </div>
                <div className="md:w-1/2 w-full">
                  <div className="grid grid-cols-2 gap-4">
                    <div className="bg-black border border-white/10 rounded-2xl p-6 text-center">
                      <div className="text-4xl font-bold text-orange-500 mb-1">300%</div>
                      <div className="text-xs text-gray-400 uppercase">Faster Deployment</div>
                    </div>
                    <div className="bg-black border border-white/10 rounded-2xl p-6 text-center">
                      <div className="text-4xl font-bold text-orange-500 mb-1">-$2M</div>
                      <div className="text-xs text-gray-400 uppercase">OpEx Savings</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </FadeUp>
        </div>
      </section>

      {/* FAQ SECTION */}
      <section className="py-24 relative overflow-hidden">
        <div className="max-w-4xl mx-auto px-6 relative z-10">
          <FadeUp>
            <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">Frequently Asked Questions</h2>
            <div className="space-y-6">
              {[
                { q: "How does the Platform Layer ensure quality?", a: "By implementing automated governance protocols and real-time SLA monitoring across all vendor outputs." },
                { q: "Can I be both a Partner and a Vendor?", a: "Yes, provided you pass the vetting process for both separate tracks. The system treats them as distinct roles." },
                { q: "What domains does Zryoss currently cover?", a: "We are currently active in HR Tech, Healthcare Management, Marketing Services, and Corporate Compliance." },
                { q: "How is data secured across layers?", a: "Zryoss uses a unified, encrypted data backbone where access is strictly role-based and audited." }
              ].map((faq, i) => (
                <div key={i} className="p-6 rounded-2xl bg-white/5 border border-white/10">
                  <h4 className="text-lg font-bold text-white mb-2">{faq.q}</h4>
                  <p className="text-gray-400 font-light">{faq.a}</p>
                </div>
              ))}
            </div>
          </FadeUp>
        </div>
      </section>

      {/* CALL TO ACTION */}
      <section className="py-32 relative">
        <div className="max-w-5xl mx-auto px-6 text-center relative z-10">
          <FadeUp>
            <div className="bg-gradient-to-br from-orange-600 to-orange-500 p-1 rounded-[3rem] shadow-2xl shadow-orange-500/20">
              <div className="bg-[#050505] rounded-[2.9rem] py-16 px-8 md:px-16 overflow-hidden relative">
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(249,115,22,0.1),transparent_70%)]" />

                <h2 className="text-3xl md:text-5xl font-bold mb-6 relative">Ready to plug into the engine?</h2>
                <p className="text-gray-400 text-lg mb-10 max-w-2xl mx-auto relative">
                  Join a system that takes care of the complexity, so you can take care of the growth.
                </p>

                <div className="flex flex-col sm:flex-row gap-4 justify-center relative">
                  <button
                    onClick={() => navigate('/apply')}
                    className="px-8 py-4 bg-orange-500 hover:bg-orange-600 text-white rounded-xl font-bold transition-all hover:scale-105 active:scale-95 shadow-lg shadow-orange-500/25"
                  >
                    Partner with Zryoss
                  </button>
                  {/* <button className="px-8 py-4 border border-white/20 hover:border-orange-500/50 hover:bg-orange-500/5 text-white rounded-xl font-bold transition-all hover:scale-105 active:scale-95">
                    View Network
                  </button> */}
                </div>
              </div>
            </div>
          </FadeUp>
        </div>
      </section>

      {/* Decorative Blur Bottom */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-full h-[500px] bg-gradient-to-t from-orange-600/10 to-transparent pointer-events-none" />
    </div>
  );
}