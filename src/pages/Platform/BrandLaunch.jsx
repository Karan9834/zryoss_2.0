import React from "react";
import { Link } from "react-router-dom";
import {
  Rocket,
  Shield,
  LayoutGrid,
  Users,
  Settings,
  Workflow,
  CheckCircle,
  ArrowRight,
  Globe,
  FileText,
  Layers,
  MessageSquare,
  Zap,
} from "lucide-react";
import FadeUp from "../../components/animations/FadeUp";

export default function BrandLaunchSupport() {
  return (
    <div className="bg-[#050505] min-h-screen text-white overflow-hidden selection:bg-orange-500/30">
      {/* HERO */}
      {/* HERO */}
      <section className="relative min-h-screen flex items-center pt-32 pb-20 overflow-hidden border-b border-white/5">
        {/* Background Glows */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[850px] h-[520px] bg-gradient-to-b from-orange-600/20 via-red-900/10 to-transparent blur-[130px] rounded-full pointer-events-none" />
        <div className="absolute top-20 right-0 w-[420px] h-[420px] bg-blue-900/10 blur-[110px] rounded-full pointer-events-none" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">

            {/* Left Content */}
            <div className="text-left">
              <FadeUp>
                <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-orange-500/30 bg-orange-500/10 backdrop-blur-sm mb-5 cursor-default">
                  <Rocket className="w-3.5 h-3.5 text-orange-400" />
                  <p className="text-orange-500 text-xs uppercase tracking-[0.45em] font-bold">
                    Brand Launch Framework
                  </p>
                </div>

                <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold leading-[1.15] tracking-tight mb-5 text-white">
                  Brand Launch & <br />
                  <span className="block text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-orange-600 mt-1">
                    Support Framework
                  </span>
                </h1>
              </FadeUp>

              <FadeUp delay={0.1}>
                {/* Updated Typography */}
                <h2 className="text-xl md:text-2xl font-semibold text-white/90 mb-6">
                  From Zero to a Fully Operating Brand
                </h2>
                <p className="text-xl text-gray-400 leading-relaxed font-light mb-8">
                  Launch your own independent brand and operate professionally without building backend infrastructure. Powered by one platform.
                </p>
              </FadeUp>

              <FadeUp delay={0.2}>
                <div className="flex flex-col sm:flex-row gap-4">
                  <Link
                    to="/platform/how-zryoss-works"
                    className="rounded-xl bg-orange-500 px-8 py-4 font-bold text-white shadow-[0_0_25px_rgba(249,115,22,0.35)] hover:bg-orange-600 transition flex items-center justify-center gap-2 group"
                  >
                    See How It Works <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </Link>

                  <Link
                    to="/partnership"
                    className="rounded-xl border border-white/10 bg-white/5 px-8 py-4 font-semibold text-white hover:border-orange-500/50 hover:text-orange-300 transition flex items-center justify-center gap-2 group"
                  >
                    Explore Partnerships <Globe className="w-4 h-4 text-gray-500 group-hover:text-white transition-colors" />
                  </Link>
                </div>
              </FadeUp>
            </div>

            {/* Right Image */}
            <FadeUp delay={0.2} className="relative">
              <div className="absolute inset-0 rounded-3xl bg-orange-500/10 blur-2xl -z-10" />
              <div className="rounded-3xl border border-white/10 bg-white/5 p-2">
                <img
                  src="/support and framwork.jpg"
                  alt="Brand Launch Framework"
                  className="w-full h-[260px] md:h-[420px] object-cover rounded-2xl transform hover:scale-105 transition-transform duration-700"
                />
              </div>
            </FadeUp>

          </div>
        </div>
      </section>

      {/* WHY FAIL */}
      <section className="py-24 bg-[#050505] relative overflow-hidden border-t border-white/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <FadeUp>
              <div>
                <h2 className="text-3xl md:text-5xl font-bold mb-6 leading-tight">
                  Why Brand Launch <br />
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-rose-500 to-red-600">
                    Fails for Most Businesses
                  </span>
                </h2>

                <p className="text-gray-400 text-lg leading-relaxed mb-8 font-light">
                  Many brands fail within the first few months. Zryoss solves
                  this by providing a complete, platform-led brand launch, not
                  just branding assets.
                </p>

                <div className="space-y-4">
                  {[
                    "Poor brand positioning",
                    "Unprofessional digital presence",
                    "Lack of execution readiness",
                    "No operational support",
                    "Inconsistent early delivery",
                  ].map((item, i) => (
                    <div key={i} className="flex items-center gap-4 group">
                      <div className="w-8 h-8 rounded-full bg-rose-500/10 flex items-center justify-center border border-rose-500/20 group-hover:bg-rose-500/20 transition-colors shrink-0">
                        <span className="text-rose-500 font-bold text-sm">
                          ✕
                        </span>
                      </div>
                      <span className="text-gray-300 group-hover:text-gray-200 transition-colors">
                        {item}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </FadeUp>

            <FadeUp delay={0.2}>
              <div className="bg-[#0A0A0A] border border-white/10 rounded-[32px] p-8 md:p-10 relative overflow-hidden shadow-2xl">
                <div className="absolute top-0 right-0 w-[320px] h-[320px] bg-orange-500/10 blur-[100px] rounded-full" />
                <div className="absolute bottom-0 left-0 w-[260px] h-[260px] bg-blue-500/5 blur-[80px] rounded-full" />

                <div className="relative z-10">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="p-2 bg-gradient-to-br from-orange-500 to-red-500 rounded-lg">
                      <Shield className="w-5 h-5 text-white" />
                    </div>
                    <h3 className="text-2xl font-bold">The Zryoss Solution</h3>
                  </div>

                  <p className="text-gray-400 mb-8 border-l-2 border-white/10 pl-4 font-light">
                    A structured framework to eliminate early-stage chaos and
                    ensuring operational excellence.
                  </p>

                  <div className="grid gap-4">
                    <div className="p-5 rounded-2xl bg-white/5 border border-white/10 flex items-center gap-5 hover:bg-white/10 transition duration-300">
                      <div className="bg-emerald-500/20 p-2.5 rounded-full">
                        <CheckCircle className="text-emerald-400 w-5 h-5" />
                      </div>
                      <div>
                        <div className="font-semibold text-white text-lg">
                          Partners own the brand
                        </div>
                        <div className="text-sm text-gray-500">
                          Full ownership and equity retention
                        </div>
                      </div>
                    </div>

                    <div className="p-5 rounded-2xl bg-white/5 border border-white/10 flex items-center gap-5 hover:bg-white/10 transition duration-300">
                      <div className="bg-blue-500/20 p-2.5 rounded-full">
                        <Settings className="text-blue-400 w-5 h-5" />
                      </div>
                      <div>
                        <div className="font-semibold text-white text-lg">
                          Zryoss runs the foundation
                        </div>
                        <div className="text-sm text-gray-500">
                          Operations, delivery, and support
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </FadeUp>
          </div>
        </div>
      </section>

      {/* FRAMEWORK INCLUDES */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-20">
            <FadeUp>
              <h2 className="text-3xl md:text-5xl font-bold mb-6">
                What the Framework Includes
              </h2>
              <p className="text-gray-400 text-lg font-light">
                Everything required to make a brand market-ready and operational
                from day one.
              </p>
            </FadeUp>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <FeatureCard
              icon={<Globe className="w-6 h-6 text-amber-500" />}
              title="Brand Setup & Identity"
              items={[
                "Brand positioning and alignment",
                "Logo and visual identity creation",
                "Website development under brand name",
                "Company profile & pitch materials",
                "Social media page setup",
              ]}
              delay={0}
              accent="amber"
            />

            <FeatureCard
              icon={<Zap className="w-6 h-6 text-sky-500" />}
              title="Business Readiness"
              items={[
                "Business registration support",
                "Service and offering structuring",
                "Pricing and proposal frameworks",
                "Sales enablement material",
                "Standard operating guidelines",
              ]}
              delay={0.1}
              accent="sky"
            />

            <FeatureCard
              icon={<Layers className="w-6 h-6 text-violet-500" />}
              title="6-Month Support Model"
              items={[
                "Sales enablement & demo coordination",
                "Client onboarding & delivery",
                "Social media posting support",
                "Blog & content publishing",
                "Account management",
              ]}
              delay={0.2}
              accent="violet"
            />
          </div>
        </div>
      </section>

      {/* BACKEND OPS */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-gradient-to-r from-[#0f0f0f] to-[#050505] border border-white/10 rounded-[40px] p-8 md:p-16 relative overflow-hidden group">
            <div className="absolute -top-40 -right-40 w-[600px] h-[600px] bg-orange-600/10 blur-[150px] rounded-full group-hover:bg-orange-600/15 transition duration-700" />

            <div className="grid md:grid-cols-2 gap-16 items-center relative z-10">
              <FadeUp>
                <h2 className="text-3xl md:text-4xl font-bold mb-6 leading-tight">
                  Zryoss as Your <br />
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-amber-600">
                    Backend Operations Team
                  </span>
                </h2>

                <p className="text-gray-400 text-lg mb-10 leading-relaxed font-light">
                  Partners do not need to hire or manage internal teams. The
                  platform handles execution centrally, allowing you to focus
                  purely on growth and client relationships.
                </p>

                <Link
                  to="/platform/operations-model"
                  className="inline-flex items-center gap-2 text-white font-medium border-b border-orange-500 pb-1 hover:text-orange-400 hover:border-orange-400 transition"
                >
                  Explore Operations Model <ArrowRight className="w-4 h-4" />
                </Link>
              </FadeUp>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                {[
                  { icon: Settings, label: "Operations Department", color: "text-blue-400" },
                  { icon: Workflow, label: "Delivery Team", color: "text-emerald-400" },
                  { icon: MessageSquare, label: "Pre-sales & Demo Unit", color: "text-amber-400" },
                  { icon: Shield, label: "Account Management", color: "text-rose-400" },
                ].map((stat, i) => (
                  <FadeUp key={i} delay={0.1 + i * 0.05}>
                    <div className="bg-white/[0.03] backdrop-blur-md border border-white/10 p-6 rounded-2xl hover:bg-white/5 hover:border-white/20 transition duration-300 group/card">
                      <stat.icon
                        className={`w-8 h-8 ${stat.color} mb-4 opacity-80 group-hover/card:opacity-100 transition`}
                      />
                      <div className="font-semibold text-gray-200 group-hover/card:text-white">
                        {stat.label}
                      </div>
                    </div>
                  </FadeUp>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CONTENT + DIGITAL PRESENCE */}
      <section className="py-24 relative">
        <div className="absolute left-0 bottom-0 w-1/3 h-full bg-gradient-to-r from-blue-900/5 to-transparent pointer-events-none" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid md:grid-cols-2 gap-20 items-center">
            <div className="order-2 md:order-1 flex flex-col gap-6">
              <div className="bg-[#0b0b0b] p-8 rounded-3xl border border-white/10 relative overflow-hidden group hover:border-orange-500/20 transition duration-500">
                <div className="absolute top-0 right-0 p-20 bg-orange-500/5 blur-[60px] group-hover:bg-orange-500/10 transition" />
                <h4 className="text-xl font-bold mb-6 flex items-center gap-3 relative z-10">
                  <span className="p-2 bg-orange-500/10 rounded-lg">
                    <FileText className="w-5 h-5 text-orange-500" />
                  </span>
                  Content Support
                </h4>
                <ul className="space-y-4 text-gray-400 relative z-10 font-light">
                  <li className="flex items-center gap-3">
                    <span className="w-1.5 h-1.5 bg-orange-500 rounded-full" />
                    Scheduled social media posts
                  </li>
                  <li className="flex items-center gap-3">
                    <span className="w-1.5 h-1.5 bg-orange-500 rounded-full" />
                    Blog and content publishing
                  </li>
                  <li className="flex items-center gap-3">
                    <span className="w-1.5 h-1.5 bg-orange-500 rounded-full" />
                    Brand consistency checks
                  </li>
                  <li className="flex items-center gap-3">
                    <span className="w-1.5 h-1.5 bg-orange-500 rounded-full" />
                    Platform-managed updates
                  </li>
                </ul>
              </div>

              <div className="bg-[#0b0b0b] p-8 rounded-3xl border border-white/10 relative overflow-hidden group hover:border-blue-500/20 transition duration-500">
                <div className="absolute top-0 right-0 p-20 bg-blue-500/5 blur-[60px] group-hover:bg-blue-500/10 transition" />
                <h4 className="text-xl font-bold mb-6 flex items-center gap-3 relative z-10">
                  <span className="p-2 bg-blue-500/10 rounded-lg">
                    <Shield className="w-5 h-5 text-blue-500" />
                  </span>
                  Account Coordination
                </h4>
                <ul className="space-y-4 text-gray-400 relative z-10 font-light">
                  <li className="flex items-center gap-3">
                    <span className="w-1.5 h-1.5 bg-blue-500 rounded-full" />
                    Dedicated account oversight
                  </li>
                  <li className="flex items-center gap-3">
                    <span className="w-1.5 h-1.5 bg-blue-500 rounded-full" />
                    Regular updates and communication
                  </li>
                  <li className="flex items-center gap-3">
                    <span className="w-1.5 h-1.5 bg-blue-500 rounded-full" />
                    Issue resolution and escalation
                  </li>
                  <li className="flex items-center gap-3">
                    <span className="w-1.5 h-1.5 bg-blue-500 rounded-full" />
                    Performance monitoring
                  </li>
                </ul>
              </div>
            </div>

            <FadeUp className="order-1 md:order-2">
              <h2 className="text-3xl md:text-5xl font-bold mb-8">
                Active Digital <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-slate-200 to-slate-500">
                  Presence & Coordination
                </span>
              </h2>
              <p className="text-gray-400 text-lg leading-relaxed mb-6 font-light">
                A dormant brand loses trust. As part of the support framework,
                Zryoss ensures continuous digital activity to keep your brand
                active, visible, and credible without you lifting a finger.
              </p>
              <p className="text-gray-400 text-lg leading-relaxed font-light">
                Our structured account management ensures that every request is
                handled efficiently, keeping your operations smooth and
                predictable.
              </p>
            </FadeUp>
          </div>
        </div>
      </section>

      {/* SCALE + WHO FOR */}
      <section className="py-24 bg-[#050505] border-t border-white/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-20">
            <FadeUp>
              <div className="mb-12">
                <h3 className="text-3xl font-bold mb-6 text-white">
                  Scalability After Initial Phase
                </h3>
                <p className="text-gray-400 leading-relaxed text-lg font-light">
                  After the initial support period, brands are stable and
                  operational. Systems are established, allowing partners to
                  scale confidently with proven workflows.
                </p>
              </div>

              <div>
                <h3 className="text-3xl font-bold mb-8 text-white">
                  Who This Is For
                </h3>
                <ul className="space-y-6">
                  {[
                    "Individuals launching their first professional brand",
                    "Partners expanding into new business areas",
                    "Businesses wanting execution without operational burden",
                    "Entrepreneurs who want structure from day one",
                  ].map((item, i) => (
                    <li key={i} className="flex items-start gap-4">
                      <div className="mt-2 w-2 h-2 rounded-full bg-orange-500 shrink-0 shadow-[0_0_10px_rgba(249,115,22,0.5)]" />
                      <span className="text-gray-300 text-lg font-light">
                        {item}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>
            </FadeUp>

            <FadeUp delay={0.2} className="h-full">
              <div className="bg-gradient-to-b from-[#111] to-[#0a0a0a] p-10 rounded-[40px] border border-white/10 flex flex-col justify-center h-full relative overflow-hidden hover:border-white/20 transition duration-500">
                <div className="absolute top-0 right-0 w-full h-full bg-[radial-gradient(circle_at_top_right,_var(--tw-gradient-stops))] from-green-500/5 via-transparent to-transparent pointer-events-none" />
                <h3 className="text-3xl font-bold mb-8 relative z-10">
                  Why This Framework Works
                </h3>

                <div className="space-y-5 relative z-10">
                  {[
                    "Removes early-stage execution risk",
                    "Ensures professional brand presence",
                    "Provides operational continuity",
                    "Allows partners to focus on growth",
                    "Creates a strong foundation for scale",
                  ].map((item, i) => (
                    <div
                      key={i}
                      className="flex items-center gap-4 p-4 bg-white/5 rounded-2xl hover:bg-white/10 transition-colors border border-white/10 hover:border-green-500/20 group"
                    >
                      <CheckCircle className="w-6 h-6 text-green-500 shrink-0 group-hover:scale-110 transition" />
                      <span className="text-gray-200 group-hover:text-white transition font-light">
                        {item}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </FadeUp>
          </div>
        </div>
      </section>

      {/* FINAL CTA */}
      <section className="py-32 text-center relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-t from-orange-900/10 to-transparent pointer-events-none" />

        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <FadeUp>
            <h2 className="text-4xl md:text-6xl font-bold mb-10 tracking-tight leading-tight">
              One Framework. One Platform. <br />
              <span className="bg-gradient-to-r from-orange-500 to-red-500 bg-clip-text text-transparent">
                Strong Brand Foundations.
              </span>
            </h2>

            <p className="text-lg md:text-xl text-gray-400 mb-14 max-w-2xl mx-auto font-light">
              Zryoss accelerates businesses by building strong operating
              foundations. Start with structure, support, and execution
              readiness.
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
              <Link
                to="/platform/how-zryoss-works"
                className="px-10 py-5 rounded-full bg-orange-600 text-white font-bold text-lg hover:bg-orange-500 transition shadow-[0_0_30px_rgba(234,88,12,0.3)]"
              >
                See How Zryoss Works
              </Link>

              <Link
                to="/partnership"
                className="px-10 py-5 rounded-full border border-white/20 hover:bg-white/10 text-lg transition font-medium"
              >
                Explore Partnership Models
              </Link>
            </div>
          </FadeUp>
        </div>
      </section>
    </div>
  );
}

/* ✅ Feature Card (fixed Tailwind dynamic class issue) */
function FeatureCard({ icon, title, items, delay, accent = "orange" }) {
  const accents = {
    amber: {
      border: "hover:border-amber-500/30",
      bg: "group-hover:bg-amber-500/10",
      dot: "group-hover:bg-amber-500",
    },
    sky: {
      border: "hover:border-sky-500/30",
      bg: "group-hover:bg-sky-500/10",
      dot: "group-hover:bg-sky-500",
    },
    violet: {
      border: "hover:border-violet-500/30",
      bg: "group-hover:bg-violet-500/10",
      dot: "group-hover:bg-violet-500",
    },
    orange: {
      border: "hover:border-orange-500/30",
      bg: "group-hover:bg-orange-500/10",
      dot: "group-hover:bg-orange-500",
    },
  };

  const styles = accents[accent] || accents.orange;

  return (
    <FadeUp delay={delay}>
      <div
        className={`h-full p-8 rounded-[32px] bg-[#0a0a0a] border border-white/10 transition duration-500 group ${styles.border}`}
      >
        <div
          className={`w-14 h-14 rounded-2xl bg-white/5 flex items-center justify-center mb-8 transition duration-500 ${styles.bg}`}
        >
          {icon}
        </div>

        <h3 className="text-2xl font-bold mb-6 text-white">{title}</h3>

        <ul className="space-y-4">
          {items.map((item, i) => (
            <li
              key={i}
              className="flex items-start gap-3 text-gray-400 text-[15px] font-light group-hover:text-gray-300 transition-colors"
            >
              <span
                className={`mt-2 w-1.5 h-1.5 rounded-full bg-white/20 shrink-0 transition duration-500 ${styles.dot}`}
              />
              {item}
            </li>
          ))}
        </ul>
      </div>
    </FadeUp>
  );
}
