import React, { useEffect } from "react";
import {
  ArrowRight,
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

const Overview = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen bg-[#050505] text-white selection:bg-orange-500/30 font-sans">

      {/* Hero Section */}
      <section className="relative pt-32 pb-20 overflow-hidden">
        {/* Abstract Background Elements */}
        <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
          <div className="absolute top-[-10%] right-[-5%] w-[500px] h-[500px] bg-orange-600/10 rounded-full blur-[100px]" />
          <div className="absolute bottom-[10%] left-[-10%] w-[400px] h-[400px] bg-red-600/5 rounded-full blur-[100px]" />
        </div>

        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <div className="max-w-4xl">
            <h1 className="text-5xl md:text-7xl font-bold tracking-tight leading-tight mb-8">
              Business Solutions <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-500 to-red-500">
                Delivered Through a Central OS
              </span>
            </h1>
            <p className="text-xl text-gray-400 leading-relaxed max-w-2xl mb-10">
              The solutions offered under Zryoss are designed to help businesses build, run, and scale efficiently—without managing fragmented vendors, teams, or execution complexity.
            </p>
            <div className="p-6 border border-white/10 bg-white/5 rounded-2xl backdrop-blur-sm inline-block max-w-3xl">
              <p className="text-lg text-gray-200">
                <span className="text-orange-500 font-bold mr-2">note:</span>
                Zryoss does not operate as a traditional service provider. It delivers solutions through a platform-governed ecosystem, ensuring quality, accountability, and scalability.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Differentiation Section */}
      <section className="py-20 bg-[#0a0a0a]">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex flex-col md:flex-row gap-16 items-start">
            <div className="md:w-1/3">
              <h2 className="text-3xl font-bold mb-6">What Makes Zryoss <br /> Solutions Different</h2>
              <p className="text-gray-400 text-lg mb-8">
                Most solution providers focus on selling services.
                <br /><strong className="text-white">Zryoss focuses on delivering outcomes through systems.</strong>
              </p>
              <div className="h-1 w-20 bg-gradient-to-r from-orange-500 to-red-500 rounded-full"></div>
            </div>

            <div className="md:w-2/3 grid grid-cols-1 sm:grid-cols-2 gap-6">
              {[
                { icon: <Layers className="text-orange-500" />, title: "Centralized Platform", desc: "Backed by a centralized operating platform." },
                { icon: <Zap className="text-orange-500" />, title: "Domain Execution", desc: "Executed by domain-specific execution brands." },
                { icon: <Settings className="text-orange-500" />, title: "Structured Workflows", desc: "Managed through structured workflows." },
                { icon: <ShieldCheck className="text-orange-500" />, title: "Governed Quality", desc: "Governed by quality and accountability layers." },
              ].map((item, idx) => (
                <div key={idx} className="p-6 rounded-2xl bg-[#0f0f0f] border border-white/5 hover:border-orange-500/30 transition-all duration-300 group">
                  <div className="w-12 h-12 rounded-lg bg-orange-500/10 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                    {item.icon}
                  </div>
                  <h3 className="text-xl font-semibold mb-2">{item.title}</h3>
                  <p className="text-gray-400">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
          <div className="mt-12 text-center">
            <p className="text-xl font-medium text-white/90">Clients receive reliable execution, not ad-hoc delivery.</p>
          </div>
        </div>
      </section>

      {/* Delivery Process */}
      <section className="py-24 relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-16">
            How Zryoss <span className="text-orange-500">Delivers Solutions</span>
          </h2>

          <div className="relative">
            {/* Connecting Line (Desktop) */}
            <div className="hidden md:block absolute top-1/2 left-0 w-full h-0.5 bg-gradient-to-r from-transparent via-orange-500/30 to-transparent -translate-y-1/2" />

            <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-6 gap-6 relative z-10">
              {[
                "Requirement Validation",
                "Demo & Alignment",
                "Execution Routing",
                "Centralized Mgmt",
                "Quality Checks",
                "Support & Optimization"
              ].map((step, i) => (
                <div key={i} className="flex flex-col items-center text-center">
                  <div className="w-10 h-10 rounded-full bg-[#111] border border-orange-500 text-orange-500 flex items-center justify-center font-bold text-lg mb-4 z-10 shadow-[0_0_15px_rgba(249,115,22,0.2)]">
                    {i + 1}
                  </div>
                  <h3 className="text-sm font-semibold text-gray-200 px-2">{step}</h3>
                </div>
              ))}
            </div>
          </div>

          <div className="mt-12 text-center">
            <p className="inline-block px-4 py-2 rounded-full border border-white/10 bg-white/5 text-gray-300 text-sm">
              Ensuring consistency—regardless of solution type.
            </p>
          </div>
        </div>
      </section>

      {/* Core Solution Categories */}
      <section className="py-20 bg-[#080808]">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-3xl md:text-4xl font-bold mb-12">Core Solution Categories</h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
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
                desc: "Learning platforms, school/institute software, and education technology systems."
              },
              {
                icon: <HeartPulse size={32} />,
                title: "Healthcare & MedTech",
                desc: "Clinical applications, hospital management systems, pharma ERPs, and healthcare SaaS."
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
            ].map((sol, idx) => {
              const CardContent = (
                <>
                  <div className="w-14 h-14 rounded-2xl bg-zinc-900 flex items-center justify-center text-white mb-6 group-hover:text-orange-500 transition-colors">
                    {sol.icon}
                  </div>
                  <h3 className="text-2xl font-semibold mb-3">{sol.title}</h3>
                  <p className="text-gray-400 leading-relaxed">{sol.desc}</p>
                  {sol.to && (
                    <div className="mt-6 flex items-center gap-2 text-sm font-medium text-orange-500 opacity-0 group-hover:opacity-100 transition-opacity transform translate-y-2 group-hover:translate-y-0">
                      Explore <ArrowRight size={16} />
                    </div>
                  )}
                </>
              );

              return sol.to ? (
                <Link key={idx} to={sol.to} className="group p-8 rounded-3xl bg-[#0e0e0e] border border-white/5 hover:bg-[#121212] hover:border-orange-500/20 transition-all duration-300 block">
                  {CardContent}
                </Link>
              ) : (
                <div key={idx} className="group p-8 rounded-3xl bg-[#0e0e0e] border border-white/5 hover:bg-[#121212] hover:border-orange-500/20 transition-all duration-300">
                  {CardContent}
                </div>
              );
            })}

            {/* CTA Card */}
            <div className="p-8 rounded-3xl bg-gradient-to-br from-orange-600 to-red-700 flex flex-col justify-center items-center text-center">
              <h3 className="text-2xl font-bold mb-4">Need a Custom Solution?</h3>
              <p className="text-white/80 mb-6">We build systems tailored to your specific industry needs.</p>
              <Link to="/contact" className="px-6 py-3 bg-white text-orange-600 rounded-full font-bold hover:bg-gray-100 transition shadow-lg">
                Contact Us
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* One Platform Section */}
      <section className="py-24 border-y border-white/5 bg-[#050505]">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex flex-col lg:flex-row items-center gap-16">
            <div className="lg:w-1/2">
              <h2 className="text-4xl font-bold mb-6">One Platform. <br /> <span className="text-gray-500">Multiple Solutions.</span></h2>
              <p className="text-xl text-gray-400 mb-8">
                While the solutions span multiple industries, they all operate on one centralized system. Clients don’t manage multiple vendors. They engage with one operating system.
              </p>

              <ul className="space-y-4">
                {[
                  "Cross-solution coordination",
                  "Consistent delivery standards",
                  "Easier scaling for clients",
                  "Reduced operational risk"
                ].map((item, i) => (
                  <li key={i} className="flex items-center gap-3 text-lg">
                    <CheckCircle2 className="text-orange-500 w-6 h-6" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>

            <div className="lg:w-1/2 p-10 rounded-3xl bg-[#0a0a0a] border border-white/10 relative">
              <div className="absolute top-0 right-0 w-32 h-32 bg-orange-500/10 rounded-full blur-3xl" />
              <div className="grid grid-cols-2 gap-4">
                <div className="p-6 bg-[#111] rounded-2xl border border-white/5">
                  <Globe className="text-orange-500 mb-3" size={32} />
                  <div className="text-4xl font-bold text-white mb-1">1</div>
                  <div className="text-gray-400 text-sm">Central OS</div>
                </div>
                <div className="p-6 bg-[#111] rounded-2xl border border-white/5">
                  <Layers className="text-blue-500 mb-3" size={32} />
                  <div className="text-4xl font-bold text-white mb-1">7+</div>
                  <div className="text-gray-400 text-sm">Industries</div>
                </div>
                <div className="p-6 bg-[#111] rounded-2xl border border-white/5 col-span-2">
                  <Scale className="text-green-500 mb-3" size={32} />
                  <div className="text-4xl font-bold text-white mb-1">100%</div>
                  <div className="text-gray-400 text-sm">Governance & Accountability</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Target Audience & Governance */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-12">

          {/* Governance */}
          <div className="p-10 rounded-3xl bg-[#0a0a0a] border border-white/10">
            <h3 className="text-2xl font-bold mb-6 flex items-center gap-3">
              <ShieldCheck className="text-orange-500" />
              Governance & Quality
            </h3>
            <p className="text-gray-400 mb-8">Every solution is governed by a strict framework to ensure predictability and dependability.</p>
            <ul className="space-y-4">
              {["Defined scopes and timelines", "Platform-managed execution", "Account ownership and reporting", "Structured escalation mechanisms"].map((item, i) => (
                <li key={i} className="flex items-center gap-3 text-gray-300 pb-3 border-b border-white/5 last:border-0">
                  <span className="w-1.5 h-1.5 rounded-full bg-orange-500" />
                  {item}
                </li>
              ))}
            </ul>
          </div>

          {/* Who For */}
          <div className="p-10 rounded-3xl bg-[#0a0a0a] border border-white/10">
            <h3 className="text-2xl font-bold mb-6 flex items-center gap-3">
              <Users className="text-orange-500" />
              Who These Solutions Are For
            </h3>
            <p className="text-gray-400 mb-8">If your business needs execution you can trust, Zryoss solutions are built for you.</p>
            <ul className="space-y-4">
              {[
                "Startups looking for structured execution",
                "SMEs aiming to scale without chaos",
                "Enterprises seeking reliable delivery",
                "Founders who value systems over shortcuts"
              ].map((item, i) => (
                <li key={i} className="flex items-center gap-3 text-gray-300 pb-3 border-b border-white/5 last:border-0">
                  <span className="w-1.5 h-1.5 rounded-full bg-orange-500" />
                  {item}
                </li>
              ))}
            </ul>
          </div>

        </div>
      </section>

      {/* Bottom Section */}
      <section className="py-20 relative text-center">
        <div className="max-w-3xl mx-auto px-6">
          <h2 className="text-3xl font-bold mb-6">More Than Services. <span className="text-orange-500">A Business Engine.</span></h2>
          <p className="text-xl text-gray-400 mb-10">
            Zryoss solutions are not standalone offerings. They are components of a larger business operating ecosystem. Each solution solves a real problem, fits into a structured system, and supports long-term growth.
          </p>

          <div className="p-8 rounded-2xl bg-gradient-to-r from-zinc-900 to-black border border-white/10 inline-block text-left w-full">
            <div className="flex flex-col md:flex-row justify-between items-center gap-8">
              <div>
                <h3 className="text-2xl font-bold text-white mb-2">One Partner. Many Capabilities.</h3>
                <p className="text-gray-400">Complex operations, simplified at the front, systematized at the back.</p>
              </div>
              <Link to="/contact" className="whitespace-nowrap px-8 py-3 bg-orange-600 hover:bg-orange-500 text-white rounded-full font-semibold transition shadow-[0_0_20px_rgba(234,88,12,0.3)]">
                Get Started
              </Link>
            </div>
          </div>
        </div>
      </section>

    </div>
  );
};

export default Overview;
