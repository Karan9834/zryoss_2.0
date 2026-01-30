import React, { useEffect } from "react";
import {
  ArrowRight,
  ArrowUpRight,
  CheckCircle2,
  Layers,
  Settings,
  ShieldCheck,
  Users,
  Zap,
  Globe,
  BarChart3,
  Briefcase,
  Cpu,
  GraduationCap,
  HeartPulse,
  Building2,
  Scale
} from "lucide-react";
import { Link } from "react-router-dom";
import FadeUp from "../../components/animations/FadeUp";

const Overview = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen bg-[#050505] text-white selection:bg-orange-500/30 font-sans relative overflow-hidden">
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
                <p className="text-orange-500 text-xs uppercase tracking-[0.45em] mb-6 font-bold">
                  Platform Solutions
                </p>
                <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold leading-[1.15] tracking-tight mb-5 text-white">
                  Business Solutions <br />
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-orange-600">
                    Delivered Through a Central OS
                  </span>
                </h1>
                <p className="text-xl text-gray-400 leading-relaxed font-light mb-12">
                  The solutions offered under Zryoss are designed to help businesses build, run, and scale efficiently—without managing fragmented vendors, teams, or execution complexity.
                </p>

                <div className="p-8 border border-white/10 bg-white/5 rounded-[24px] backdrop-blur-sm inline-block w-full shadow-2xl relative overflow-hidden group">
                  <div className="absolute inset-0 bg-gradient-to-r from-orange-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
                  <p className="text-lg text-gray-300 relative z-10 leading-relaxed">
                    <span className="text-orange-500 font-bold mr-3 underline decoration-orange-500/30 underline-offset-4">Note:</span>
                    Zryoss does not operate as a traditional service provider. It delivers solutions through a platform-governed ecosystem, ensuring quality, accountability, and scalability.
                  </p>
                </div>
              </FadeUp>
            </div>

            {/* Right Column: Image */}
            <div className="relative mt-10 lg:mt-0">
              <FadeUp delay={0.2}>
                <div className="absolute inset-0 bg-gradient-to-r from-orange-500/20 to-yellow-600/20 blur-3xl rounded-3xl transform rotate-3" />
                <img
                  src="/solution-hero-images/Solutions_Overview.jpg"
                  alt="Business Solutions Delivered Through a Central OS"
                  className="relative rounded-3xl shadow-2xl border border-white/10 transform hover:scale-[1.02] transition-transform duration-500 object-cover w-full h-auto aspect-[4/3]"
                />
              </FadeUp>
            </div>
          </div>
        </div>
      </section>

      {/* Differentiation Section */}
      <section className="py-32 relative">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex flex-col lg:flex-row gap-20 items-start">
            <div className="lg:w-1/3">
              <FadeUp>
                <p className="text-orange-500 text-[10px] uppercase tracking-[0.4em] mb-4 font-bold">
                  The Zryoss Edge
                </p>
                <h2 className="text-4xl md:text-5xl font-bold mb-8 leading-tight">What Makes Our <br /> Solutions Different</h2>
                <div className="w-20 h-1 bg-gradient-to-r from-orange-500 to-orange-600 rounded-full mb-8" />
                <p className="text-gray-400 text-lg mb-8 font-light leading-relaxed">
                  Most solution providers focus on selling services.
                  <br /><strong className="text-white font-semibold">Zryoss focuses on delivering outcomes through systems.</strong>
                </p>
              </FadeUp>
            </div>

            <div className="lg:w-2/3 grid grid-cols-1 sm:grid-cols-2 gap-8">
              {[
                { icon: <Layers className="text-orange-500" />, title: "Centralized Platform", desc: "Backed by a centralized operating platform ensuring uniformity." },
                { icon: <Zap className="text-orange-500" />, title: "Domain Execution", desc: "Executed by domain-specific execution brands with deep expertise." },
                { icon: <Settings className="text-orange-500" />, title: "Structured Workflows", desc: "Managed through strictly defined and monitored workflows." },
                { icon: <ShieldCheck className="text-orange-500" />, title: "Governed Quality", desc: "Governed by multiple quality and accountability layers." },
              ].map((item, idx) => (
                <FadeUp key={idx} delay={idx * 0.1}>
                  <div className="p-8 rounded-[32px] bg-white/5 border border-white/10 hover:border-orange-500/30 transition-all duration-500 group h-full hover:scale-[1.02] hover:-translate-y-2 shadow-2xl shadow-black/40">
                    <div className="w-14 h-14 rounded-[18px] bg-orange-500/10 flex items-center justify-center mb-6 group-hover:bg-orange-500/20 transition-all duration-500 border border-orange-500/20">
                      {item.icon}
                    </div>
                    <h3 className="text-2xl font-bold mb-4 text-white group-hover:text-orange-400 transition-colors">{item.title}</h3>
                    <p className="text-gray-400 font-light leading-relaxed">{item.desc}</p>
                  </div>
                </FadeUp>
              ))}
            </div>
          </div>
          <FadeUp delay={0.4}>
            <div className="mt-20 text-center p-10 rounded-[40px] border border-white/5 bg-gradient-to-b from-white/5 to-transparent">
              <p className="text-2xl font-light text-white/90">
                Clients receive <span className="text-orange-500 font-bold">reliable execution</span>, not just ad-hoc delivery.
              </p>
            </div>
          </FadeUp>
        </div>
      </section>

      {/* Delivery Process */}
      <section className="py-32 relative overflow-hidden bg-white/[0.02] border-y border-white/5">
        <div className="max-w-7xl mx-auto px-6">
          <FadeUp>
            <div className="text-center mb-20">
              <p className="text-orange-500 text-[10px] uppercase tracking-[0.4em] mb-4 font-bold">
                Our Workflow
              </p>
              <h2 className="text-4xl md:text-5xl font-bold text-center">
                How Zryoss <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-orange-600">Delivers Solutions</span>
              </h2>
            </div>
          </FadeUp>

          <div className="relative">
            {/* Connecting Line (Desktop) */}
            <div className="hidden lg:block absolute top-12 left-0 w-full h-px bg-gradient-to-r from-transparent via-orange-500/30 to-transparent z-0" />

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-8 relative z-10">
              {[
                "Requirement Validation",
                "Demo & Alignment",
                "Execution Routing",
                "Centralized Mgmt",
                "Quality Checks",
                "Support & Optimization"
              ].map((step, i) => (
                <FadeUp key={i} delay={i * 0.1}>
                  <div className="flex flex-col items-center text-center group">
                    <div className="w-24 h-24 rounded-full bg-[#050505] border border-white/10 text-orange-500 flex items-center justify-center font-bold text-2xl mb-6 z-10 shadow-2xl group-hover:border-orange-500/50 group-hover:scale-110 transition-all duration-500">
                      <div className="w-16 h-16 rounded-full bg-orange-500/5 flex items-center justify-center border border-orange-500/10">
                        {String(i + 1).padStart(2, '0')}
                      </div>
                    </div>
                    <h3 className="text-[15px] font-bold text-gray-200 px-2 leading-snug group-hover:text-orange-400 transition-colors">{step}</h3>
                  </div>
                </FadeUp>
              ))}
            </div>
          </div>

          <div className="mt-20 text-center">
            <FadeUp delay={0.6}>
              <p className="inline-flex items-center gap-3 px-6 py-3 rounded-full border border-white/10 bg-white/5 text-gray-400 text-sm font-medium">
                <span className="w-2 h-2 rounded-full bg-orange-500 animate-pulse" />
                Ensuring consistency — regardless of solution type.
              </p>
            </FadeUp>
          </div>
        </div>
      </section>

      {/* Core Solution Categories */}
      <section className="py-32 relative">
        <div className="max-w-7xl mx-auto px-6">
          <FadeUp>
            <div className="mb-16">
              <p className="text-orange-500 text-[10px] uppercase tracking-[0.4em] mb-4 font-bold">
                Expertise
              </p>
              <h2 className="text-4xl md:text-5xl font-bold">Core Solution Categories</h2>
            </div>
          </FadeUp>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                icon: <Cpu size={32} />,
                title: "Technology & Software",
                desc: "Custom software, SaaS platforms, enterprise applications, and system integrations.",
                to: "/solutions/it-software"
              },
              {
                icon: <BarChart3 size={32} />,
                title: "Digital Marketing & Growth",
                desc: "Performance marketing, branding, lead generation, and digital visibility.",
                to: "/solutions/digital-marketing"
              },
              {
                icon: <Users size={32} />,
                title: "HR & Recruitment",
                desc: "Talent acquisition, staffing, and HR process support aligned with growth needs.",
                to: "/solutions/hr-recruitment"
              },
              {
                icon: <GraduationCap size={32} />,
                title: "Education & EdTech",
                desc: "Learning platforms, school/institute software, and education technology systems.",
                to: "/solutions/education"
              },
              {
                icon: <HeartPulse size={32} />,
                title: "Healthcare & MedTech",
                desc: "Clinical applications, hospital management systems, pharma ERPs, and healthcare SaaS.",
                to: "/solutions/healthcare"
              },
              {
                icon: <Building2 size={32} />,
                title: "Interior & Infrastructure",
                desc: "Commercial interiors, execution coordination, and infrastructure delivery.",
                to: "/solutions/real-estate-interior"
              },
              {
                icon: <Briefcase size={32} />,
                title: "Business & Professional",
                desc: "Compliance, consulting, operational support, and professional services.",
                to: "/solutions/business-consulting"
              }
            ].map((sol, idx) => (
              <FadeUp key={idx} delay={idx * 0.05}>
                <Link to={sol.to} className="group p-10 rounded-[32px] bg-white/5 border border-white/10 hover:border-orange-500/30 transition-all duration-500 block h-full flex flex-col shadow-2xl hover:scale-[1.02] hover:-translate-y-2">
                  <div className="w-16 h-16 rounded-2xl bg-zinc-900 border border-white/5 flex items-center justify-center text-white mb-8 group-hover:text-orange-500 group-hover:border-orange-500/20 transition-all duration-500">
                    {sol.icon}
                  </div>
                  <h3 className="text-2xl font-bold mb-4 text-white group-hover:text-orange-400 transition-colors">{sol.title}</h3>
                  <p className="text-gray-400 font-light leading-relaxed mb-10 flex-grow">{sol.desc}</p>

                  <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-white/10 text-white text-[11px] font-semibold group-hover:bg-orange-500 group-hover:border-orange-500 transition-all w-fit mt-auto">
                    Explore Solutions
                    <ArrowUpRight className="w-3.5 h-3.5" />
                  </div>
                </Link>
              </FadeUp>
            ))}

            {/* CTA Card */}
            <FadeUp delay={0.4}>
              <div className="p-10 rounded-[32px] bg-gradient-to-br from-orange-500 to-orange-600 flex flex-col justify-center items-center text-center h-full shadow-2xl relative overflow-hidden group">
                <div className="absolute inset-0 bg-white/10 opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none" />
                <h3 className="text-2xl font-bold mb-4 text-white relative z-10">Need a Custom Solution?</h3>
                <p className="text-white/80 mb-8 font-light relative z-10">We build systems tailored to your specific industry needs and challenges.</p>
                <Link to="/contact" className="px-8 py-4 bg-white text-orange-600 rounded-2xl font-bold hover:scale-105 transition-all shadow-xl relative z-10 active:scale-95">
                  Contact Us
                </Link>
              </div>
            </FadeUp>
          </div>
        </div>
      </section>

      {/* One Platform Section */}
      <section className="py-32 border-y border-white/5 relative overflow-hidden">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-orange-500/5 blur-[180px] pointer-events-none" />

        <div className="max-w-7xl mx-auto px-6">
          <div className="flex flex-col lg:flex-row items-center gap-20">
            <div className="lg:w-1/2">
              <FadeUp>
                <h2 className="text-4xl md:text-5xl font-bold mb-8 leading-tight">One Platform. <br /> <span className="text-gray-500">Multiple Solutions.</span></h2>
                <p className="text-xl text-gray-400 mb-10 font-light leading-relaxed">
                  While the solutions span multiple industries, they all operate on one centralized system. Clients don’t manage multiple vendors. They engage with one operating system.
                </p>

                <ul className="space-y-6">
                  {[
                    "Cross-solution coordination",
                    "Consistent delivery standards",
                    "Easier scaling for clients",
                    "Reduced operational risk"
                  ].map((item, i) => (
                    <li key={i} className="flex items-center gap-4 text-lg font-light text-gray-200">
                      <div className="w-6 h-6 rounded-full bg-orange-500/10 flex items-center justify-center border border-orange-500/20">
                        <CheckCircle2 className="text-orange-500 w-4 h-4" />
                      </div>
                      {item}
                    </li>
                  ))}
                </ul>
              </FadeUp>
            </div>

            <div className="lg:w-1/2 w-full">
              <FadeUp delay={0.2}>
                <div className="p-10 md:p-14 rounded-[40px] bg-white/[0.03] border border-white/10 relative shadow-2xl backdrop-blur-sm">
                  <div className="absolute top-0 right-0 w-32 h-32 bg-orange-500/10 rounded-full blur-3xl pointer-events-none" />
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    <div className="p-8 bg-[#050505] rounded-[24px] border border-white/5 shadow-inner group hover:border-orange-500/30 transition-all duration-500">
                      <Globe className="text-orange-500 mb-4 group-hover:scale-110 transition-transform" size={40} />
                      <div className="text-5xl font-bold text-white mb-2">1</div>
                      <div className="text-gray-400 text-sm uppercase tracking-widest font-bold">Central OS</div>
                    </div>
                    <div className="p-8 bg-[#050505] rounded-[24px] border border-white/5 shadow-inner group hover:border-orange-500/30 transition-all duration-500">
                      <Layers className="text-blue-500 mb-4 group-hover:scale-110 transition-transform" size={40} />
                      <div className="text-5xl font-bold text-white mb-2">7+</div>
                      <div className="text-gray-400 text-sm uppercase tracking-widest font-bold">Industries</div>
                    </div>
                    <div className="p-8 bg-[#050505] rounded-[24px] border border-white/5 shadow-inner col-span-1 sm:col-span-2 group hover:border-orange-500/30 transition-all duration-500">
                      <Scale className="text-green-500 mb-4 group-hover:scale-110 transition-transform" size={40} />
                      <div className="text-5xl font-bold text-white mb-2">100%</div>
                      <div className="text-gray-400 text-sm uppercase tracking-widest font-bold text-center sm:text-left">Governance & Accountability</div>
                    </div>
                  </div>
                </div>
              </FadeUp>
            </div>
          </div>
        </div>
      </section>

      {/* Target Audience & Governance */}
      <section className="py-32 relative">
        <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-8 lg:gap-12">
          {/* Governance */}
          <FadeUp>
            <div className="p-12 rounded-[40px] bg-white/5 border border-white/10 hover:border-orange-500/20 transition-all duration-500 h-full flex flex-col shadow-2xl">
              <div className="flex items-center gap-4 mb-8">
                <div className="w-12 h-12 rounded-xl bg-orange-500/10 flex items-center justify-center border border-orange-500/20">
                  <ShieldCheck className="text-orange-500" />
                </div>
                <h3 className="text-2xl font-bold text-white">Governance & Quality</h3>
              </div>
              <p className="text-gray-400 mb-10 font-light text-lg leading-relaxed">Every solution is governed by a strict framework to ensure predictability and absolute dependability.</p>
              <ul className="space-y-6 mt-auto">
                {["Defined scopes and timelines", "Platform-managed execution", "Account ownership and reporting", "Structured escalation mechanisms"].map((item, i) => (
                  <li key={i} className="flex items-start gap-4 text-gray-300 pb-5 border-b border-white/5 last:border-0 last:pb-0">
                    <div className="w-2 h-2 rounded-full bg-orange-500 mt-2 flex-shrink-0" />
                    <span className="font-light leading-snug">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </FadeUp>

          {/* Who For */}
          <FadeUp delay={0.2}>
            <div className="p-12 rounded-[40px] bg-white/5 border border-white/10 hover:border-orange-500/20 transition-all duration-500 h-full flex flex-col shadow-2xl">
              <div className="flex items-center gap-4 mb-8">
                <div className="w-12 h-12 rounded-xl bg-blue-500/10 flex items-center justify-center border border-blue-500/20">
                  <Users className="text-blue-500" />
                </div>
                <h3 className="text-2xl font-bold text-white">Who These Solutions Are For</h3>
              </div>
              <p className="text-gray-400 mb-10 font-light text-lg leading-relaxed">If your business needs execution you can trust without operational noise, Zryoss is built for you.</p>
              <ul className="space-y-6 mt-auto">
                {[
                  "Startups looking for structured execution",
                  "SMEs aiming to scale without chaos",
                  "Enterprises seeking reliable delivery",
                  "Founders who value systems over shortcuts"
                ].map((item, i) => (
                  <li key={i} className="flex items-start gap-4 text-gray-300 pb-5 border-b border-white/5 last:border-0 last:pb-0">
                    <div className="w-2 h-2 rounded-full bg-blue-500 mt-2 flex-shrink-0" />
                    <span className="font-light leading-snug">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </FadeUp>
        </div>
      </section>

      {/* Bottom Section */}
      <section className="py-32 relative text-center">
        <div className="max-w-4xl mx-auto px-6">
          <FadeUp>
            <h2 className="text-4xl md:text-5xl font-bold mb-8">More Than Services. <span className="text-orange-500">A Business Engine.</span></h2>
            <p className="text-xl text-gray-400 mb-16 font-light leading-relaxed">
              Zryoss solutions are not standalone offerings. They are components of a larger business operating ecosystem. Each solution solves a real problem, fits into a structured system, and supports long-term growth.
            </p>

            <div className="p-1 md:p-2 rounded-[32px] bg-gradient-to-r from-orange-500/20 via-orange-500/10 to-transparent border border-white/10 inline-block text-left w-full shadow-3xl">
              <div className="bg-[#050505] rounded-[30px] p-8 md:p-12 flex flex-col md:flex-row justify-between items-center gap-10">
                <div className="text-center md:text-left">
                  <h3 className="text-3xl font-bold text-white mb-3">One Partner. Many Capabilities.</h3>
                  <p className="text-gray-400 font-light text-lg">Complex operations, simplified at the front, systematized at the back.</p>
                </div>
                <Link to="/contact" className="whitespace-nowrap px-10 py-5 bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700 text-white rounded-[20px] font-bold transition-all shadow-xl shadow-orange-500/20 hover:scale-[1.05] active:scale-[0.98]">
                  Get Started Now
                </Link>
              </div>
            </div>
          </FadeUp>
        </div>
      </section>

    </div>
  );
};

export default Overview;
