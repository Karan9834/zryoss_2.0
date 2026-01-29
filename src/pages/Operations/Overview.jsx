import React from "react";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import {
  ArrowRight,
  ShieldCheck,
  ClipboardCheck,
  Workflow,
  Target,
  Timer,
  AlertTriangle,
  CheckCircle2,
  Layers,
  Users,
  BadgeCheck,
  BarChart3,
  Sparkles,
  Lock,
  Radar,
  Activity,
} from "lucide-react";

/* =====================================================
   Animations
===================================================== */
const container = {
  hidden: {},
  show: { transition: { staggerChildren: 0.08 } },
};

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.65, ease: [0.21, 0.45, 0.32, 0.9] },
  },
};

const FadeUp = ({ children, delay = 0, className = "" }) => (
  <motion.div
    variants={fadeUp}
    initial="hidden"
    whileInView="show"
    viewport={{ once: true, margin: "-100px" }}
    transition={{ delay }}
    className={className}
  >
    {children}
  </motion.div>
);

/* =====================================================
   UI Helpers
===================================================== */
const Section = ({ children, className = "" }) => (
  <section className={`relative ${className}`}>{children}</section>
);

const Wrap = ({ children, className = "" }) => (
  <div className={`max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 ${className}`}>
    {children}
  </div>
);

const Chip = ({ children, icon: Icon }) => (
  <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/[0.06] border border-white/10 text-white/90 text-sm">
    <Icon className="w-4 h-4 text-orange-400" />
    {children}
  </span>
);

const Stat = ({ icon: Icon, label, value }) => (
  <div className="rounded-2xl border border-white/10 bg-white/[0.03] p-5 flex items-start gap-4">
    <div className="w-11 h-11 rounded-2xl bg-orange-500/10 border border-orange-500/20 flex items-center justify-center">
      <Icon className="w-5 h-5 text-orange-400" />
    </div>
    <div>
      <p className="text-[12px] uppercase tracking-[0.35em] text-white/55 font-semibold">
        {label}
      </p>
      <p className="mt-1 text-lg font-bold text-white">{value}</p>
    </div>
  </div>
);

const Divider = () => (
  <div className="py-14">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="h-px w-full bg-gradient-to-r from-transparent via-white/10 to-transparent" />
    </div>
  </div>
);

/* =====================================================
   Section Title Block ✅ (Your requested layout)
===================================================== */
const SectionHead = ({ icon: Icon, title, subtitle }) => (
  <div className="flex flex-col gap-4">
    <div className="inline-flex items-center gap-2 w-fit px-4 py-2 rounded-full bg-orange-500/10 border border-orange-500/20">
      <Icon className="w-4 h-4 text-orange-300" />
      <span className="text-orange-200 text-xs uppercase tracking-[0.35em] font-semibold">
        {subtitle}
      </span>
    </div>

    <h2 className="text-3xl md:text-5xl font-bold leading-tight text-white">
      {title}
    </h2>
  </div>
);

const SubText = ({ children }) => (
  <p className="mt-6 text-white/80 text-lg leading-relaxed font-light">
    {children}
  </p>
);

const Bullet = ({ children }) => (
  <div className="flex items-start gap-3">
    <span className="mt-2 w-2 h-2 rounded-full bg-orange-500 shrink-0" />
    <span className="text-white/85 text-[16px] leading-relaxed font-light">
      {children}
    </span>
  </div>
);

const CheckBullet = ({ children }) => (
  <div className="flex items-start gap-3">
    <CheckCircle2 className="w-5 h-5 text-orange-400 mt-0.5 shrink-0" />
    <span className="text-white/85 text-[16px] leading-relaxed font-light">
      {children}
    </span>
  </div>
);

const Callout = ({ title, children, icon: Icon }) => (
  <div className="rounded-3xl border border-orange-500/25 bg-orange-500/10 p-6 md:p-7">
    <div className="flex items-center gap-3">
      <div className="w-10 h-10 rounded-2xl bg-black/25 border border-white/10 flex items-center justify-center">
        <Icon className="w-5 h-5 text-orange-300" />
      </div>
      <p className="text-white font-semibold text-lg">{title}</p>
    </div>

    <div className="mt-4 text-white/90 text-[16px] leading-relaxed font-light">
      {children}
    </div>
  </div>
);

/* =====================================================
   Page
===================================================== */
export default function Overview() {
  const navigate = useNavigate();

  return (
    <div className="bg-[#050505] text-white overflow-hidden selection:bg-orange-500/25">
      {/* Background ambience */}
      <div className="fixed inset-0 pointer-events-none z-0">
        <div className="absolute -top-40 left-1/2 -translate-x-1/2 w-[900px] h-[900px] bg-orange-500/10 blur-[200px]" />
        <div className="absolute bottom-[-220px] left-[-220px] w-[620px] h-[620px] bg-orange-500/5 blur-[180px]" />
        <div className="absolute top-[25%] right-[-260px] w-[700px] h-[700px] bg-white/[0.02] blur-[220px]" />
        <div className="absolute inset-0 opacity-[0.12] bg-[linear-gradient(to_right,rgba(255,255,255,0.08)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.08)_1px,transparent_1px)] bg-[size:70px_70px]" />
      </div>

      {/* =====================================================
          HERO ✅ keep same
      ====================================================== */}
      <Section className="relative min-h-screen flex items-center justify-center z-10 py-16">
        <Wrap className="w-full">
          <motion.div variants={container} initial="hidden" animate="show">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              {/* Left Column: Content */}
              <motion.div variants={fadeUp}>
                <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10 text-white/80 text-xs uppercase tracking-[0.35em] font-semibold mb-6">
                  <span className="w-2 h-2 rounded-full bg-orange-500" />
                  Operations Overview
                </div>

                <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold leading-[1.15] tracking-tight mb-6 text-white">
                  Execution Is Not an Activity. <br />
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-orange-600">
                    It Is a System.
                  </span>
                </h1>

                <p className="text-white/80 text-lg leading-relaxed font-light mb-8">
                  At <span className="text-white font-medium">Zryoss</span>, operations are governed through a{" "}
                  <span className="text-white font-medium">
                    centralized, system-driven framework
                  </span>{" "}
                  designed to ensure{" "}
                  <span className="text-white font-medium">
                    consistency, accountability, and scalability
                  </span>.
                </p>

                <div className="flex flex-wrap gap-3 mb-8">
                  <Chip icon={ShieldCheck}>Centralized governance</Chip>
                  <Chip icon={Radar}>Real-time visibility</Chip>
                </div>

                <div className="flex flex-col sm:flex-row gap-4">
                  <button
                    onClick={() => navigate('/contact')}
                    className="inline-flex items-center justify-center gap-3 px-8 py-3.5 rounded-xl bg-orange-500 hover:bg-orange-600 text-white font-semibold transition shadow-[0_0_28px_rgba(249,115,22,0.25)] cursor-pointer"
                  >
                    Talk to Zryoss <ArrowRight className="w-5 h-5" />
                  </button>

                  {/* <button className="inline-flex items-center justify-center gap-3 px-8 py-3.5 rounded-xl bg-white/[0.05] border border-white/10 hover:border-orange-500/30 text-white/90 font-semibold transition">
                    View Workflow <Workflow className="w-5 h-5 text-orange-400" />
                  </button> */}
                </div>
              </motion.div>

              {/* Right Column: Image */}
              <motion.div variants={fadeUp} className="relative hidden lg:block">
                <div className="absolute inset-0 bg-orange-500/20 blur-[100px] rounded-full" />
                <img
                  src="/operations-hero-images/Operations_Overview.jpg"
                  alt="Operations Overview"
                  className="relative rounded-3xl shadow-2xl border border-white/10 transform hover:scale-[1.02] transition-transform duration-500 object-cover w-full h-auto aspect-[4/3]"
                />
              </motion.div>
            </div>
          </motion.div>
        </Wrap>
      </Section>

      {/* =====================================================
          CONTENT PAGE (SaaS Doc Style Sections)
      ====================================================== */}
      <Section className="relative z-10 -mt-16">
        <Divider />

        {/* SECTION 1 */}
        <Wrap className="pb-20 md:pb-28">
          <div className="grid lg:grid-cols-12 gap-10 items-center">
            <div className="lg:col-span-7">
              <FadeUp>
                <SectionHead
                  icon={ShieldCheck}
                  subtitle="Delivery & Execution Management"
                  title={
                    <>
                      Execution Is Controlled.{" "}
                      <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-orange-600">
                        Delivery Is Accountable.
                      </span>
                    </>
                  }
                />
                <SubText>
                  At <span className="text-white font-medium">Zryoss</span>, delivery and execution
                  are not left to individuals, vendors, or chance. They are managed through a{" "}
                  <span className="text-white font-medium">
                    centralized execution control framework
                  </span>{" "}
                  designed to ensure{" "}
                  <span className="text-white font-medium">
                    predictable outcomes, consistent quality, and on-time delivery
                  </span>{" "}
                  across all verticals.
                </SubText>

                <SubText>
                  Zryoss does not just enable sales. It{" "}
                  <span className="text-white font-semibold">owns execution discipline</span>.
                </SubText>
              </FadeUp>
            </div>

            <div className="lg:col-span-5">
              <FadeUp delay={0.05}>
                <div className="relative rounded-3xl overflow-hidden border border-white/10 bg-white/[0.03]">
                  <img
                    src="https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&q=80&w=1600"
                    alt="Delivery execution"
                    className="w-full h-[360px] object-cover opacity-85"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/30 to-transparent" />
                  <div className="absolute bottom-6 left-6 right-6">
                    <div className="rounded-2xl border border-white/10 bg-black/40 backdrop-blur-xl p-5">
                      <p className="text-xs uppercase tracking-[0.35em] text-white/60 font-semibold">
                        Control Framework
                      </p>
                      <p className="mt-2 text-lg font-semibold text-white">
                        System-first execution discipline
                      </p>
                      <p className="mt-2 text-white/70 text-sm leading-relaxed">
                        Execution is structured, measurable, accountable — never assumed.
                      </p>
                    </div>
                  </div>
                </div>
              </FadeUp>
            </div>
          </div>
        </Wrap>

        <Divider />

        {/* SECTION 2 */}
        <Wrap className="pb-20 md:pb-28">
          <div className="grid lg:grid-cols-12 gap-12">
            <div className="lg:col-span-5">
              <FadeUp>
                <SectionHead
                  icon={AlertTriangle}
                  subtitle="Why delivery breaks"
                  title="Why Delivery & Execution Break in Most Businesses"
                />
                <SubText>Most businesses face delivery failures because:</SubText>
              </FadeUp>
            </div>

            <div className="lg:col-span-7">
              <FadeUp delay={0.05}>
                <div className="space-y-4">
                  {[
                    "Sales commits without execution validation",
                    "Vendors work in silos",
                    "No single owner for delivery",
                    "Quality checks are informal",
                    "Escalations happen too late",
                  ].map((x, i) => (
                    <div
                      key={i}
                      className="rounded-2xl border border-white/10 bg-white/[0.03] p-5 hover:border-orange-500/25 transition"
                    >
                      <Bullet>{x}</Bullet>
                    </div>
                  ))}

                  <Callout title="Zryoss fixes this by separating:" icon={ShieldCheck}>
                    <div className="space-y-2">
                      <div>👉 <span className="font-semibold">Sales authority</span></div>
                      <div>👉 <span className="font-semibold">Execution authority</span></div>
                      <div>👉 <span className="font-semibold">Delivery ownership</span></div>
                    </div>
                  </Callout>
                </div>
              </FadeUp>
            </div>
          </div>
        </Wrap>

        <Divider />

        {/* SECTION 3 */}
        <Wrap className="pb-20 md:pb-28">
          <div className="grid lg:grid-cols-12 gap-12">
            <div className="lg:col-span-5">
              <FadeUp>
                <SectionHead
                  icon={ClipboardCheck}
                  subtitle="What it covers"
                  title="What Delivery & Execution Management Means at Zryoss"
                />
                <SubText>Delivery & Execution Management covers:</SubText>
              </FadeUp>
            </div>

            <div className="lg:col-span-7">
              <FadeUp delay={0.05}>
                <div className="grid sm:grid-cols-2 gap-4">
                  {[
                    "Scope finalization and locking",
                    "Execution planning and routing",
                    "Task and milestone management",
                    "Vendor and team coordination",
                    "Quality checkpoints",
                    "Timeline enforcement",
                    "Issue resolution and escalation",
                  ].map((x, i) => (
                    <div
                      key={i}
                      className="rounded-2xl border border-white/10 bg-white/[0.03] p-5 hover:border-orange-500/25 transition"
                    >
                      <CheckBullet>{x}</CheckBullet>
                    </div>
                  ))}
                </div>

                <div className="mt-6 rounded-3xl border border-white/10 bg-black/30 p-6">
                  <p className="text-white/90 text-[16px] leading-relaxed font-light">
                    Nothing moves forward without{" "}
                    <span className="text-white font-semibold">system approval</span>.
                  </p>
                </div>
              </FadeUp>
            </div>
          </div>
        </Wrap>

        <Divider />

        {/* SECTION 4 */}
        <Wrap className="pb-20 md:pb-28">
          <div className="grid lg:grid-cols-12 gap-10 items-center">
            <div className="lg:col-span-6">
              <FadeUp>
                <SectionHead
                  icon={Target}
                  subtitle="Centralized model"
                  title="Centralized Execution Control Model"
                />
                <SubText>All execution under Zryoss follows one rule:</SubText>

                <div className="mt-6 rounded-3xl border border-orange-500/20 bg-orange-500/10 p-6">
                  <p className="text-white text-lg font-light leading-relaxed">
                    <span className="text-orange-400 font-semibold">“</span>
                    No execution happens outside the platform.
                    <span className="text-orange-400 font-semibold">”</span>
                  </p>
                </div>

                <div className="mt-6 space-y-3">
                  {[
                    "Every task is tracked",
                    "Every milestone is accountable",
                    "Every delay is visible",
                    "Every delivery has an owner",
                  ].map((x, i) => (
                    <Bullet key={i}>{x}</Bullet>
                  ))}
                </div>

                <SubText>Execution is transparent, not assumed.</SubText>
              </FadeUp>
            </div>

            <div className="lg:col-span-6">
              <FadeUp delay={0.05}>
                <div className="relative rounded-3xl overflow-hidden border border-white/10 bg-white/[0.03]">
                  <img
                    src="https://images.unsplash.com/photo-1521737604893-d14cc237f11d?auto=format&fit=crop&q=80&w=1600"
                    alt="Execution monitoring"
                    className="w-full h-[420px] object-cover opacity-85"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/30 to-transparent" />
                  <div className="absolute bottom-6 left-6 right-6">
                    <div className="p-6 rounded-2xl bg-black/45 backdrop-blur-xl border border-white/10">
                      <p className="text-xs uppercase tracking-[0.35em] text-white/60 font-semibold">
                        Governance control
                      </p>
                      <p className="mt-2 text-lg font-semibold text-white">
                        Platform-owned delivery discipline
                      </p>
                      <p className="mt-2 text-white/70 text-sm leading-relaxed">
                        Execution gets validated, routed, tracked, checked, and delivered through one accountable system.
                      </p>
                    </div>
                  </div>
                </div>
              </FadeUp>
            </div>
          </div>
        </Wrap>

        <Divider />

        {/* SECTION 5 Timeline */}
        <Wrap className="pb-20 md:pb-28">
          <FadeUp>
            <div className="max-w-4xl">
              <SectionHead
                icon={Workflow}
                subtitle="End-to-end flow"
                title="How Delivery & Execution Works (End-to-End)"
              />
            </div>
          </FadeUp>

          <FadeUp delay={0.05}>
            <div className="mt-10 grid md:grid-cols-2 gap-5">
              {[
                "Opportunity is approved and scoped",
                "Scope is locked and validated",
                "Execution plan is created",
                "Work is routed to the relevant execution brand",
                "Vendors and teams are assigned",
                "Milestones and timelines are defined",
                "Progress is monitored centrally",
                "Quality checks are performed",
                "Final delivery and sign-off are completed",
              ].map((x, i) => (
                <div
                  key={i}
                  className="rounded-3xl border border-white/10 bg-white/[0.03] p-6 hover:border-orange-500/25 transition"
                >
                  <div className="flex gap-4">
                    <div className="w-11 h-11 rounded-2xl bg-orange-500/10 border border-orange-500/20 flex items-center justify-center text-orange-400 font-bold">
                      {String(i + 1).padStart(2, "0")}
                    </div>
                    <p className="text-white/85 text-[16px] leading-relaxed font-light">
                      {x}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-10 rounded-3xl border border-orange-500/20 bg-orange-500/10 p-6">
              <p className="text-white/90 text-[16px] leading-relaxed font-light">
                Each step is <span className="font-semibold">mandatory</span>.
              </p>
            </div>
          </FadeUp>
        </Wrap>

        <Divider />

        {/* SECTION 6 */}
        <Wrap className="pb-20 md:pb-28">
          <div className="grid lg:grid-cols-12 gap-12">
            <div className="lg:col-span-5">
              <FadeUp>
                <SectionHead
                  icon={Layers}
                  subtitle="Ecosystem delivery"
                  title="Execution Across Ecosystem Brands"
                />
                <SubText>Delivery is handled through specialized execution brands:</SubText>
              </FadeUp>
            </div>

            <div className="lg:col-span-7">
              <FadeUp delay={0.05}>
                <div className="grid sm:grid-cols-2 gap-4">
                  {[
                    "Technology & software delivery",
                    "Digital marketing execution",
                    "HR & recruitment delivery",
                    "Education & EdTech platforms",
                    "Healthcare & medical systems",
                    "Interior & infrastructure projects",
                    "Business & professional services",
                  ].map((x, i) => (
                    <div
                      key={i}
                      className="rounded-2xl border border-white/10 bg-white/[0.03] p-5 hover:border-orange-500/25 transition"
                    >
                      <CheckBullet>{x}</CheckBullet>
                    </div>
                  ))}
                </div>

                <SubText>
                  Each brand executes in its domain— but delivery governance remains{" "}
                  <span className="text-white font-semibold">centralized</span>.
                </SubText>
              </FadeUp>
            </div>
          </div>
        </Wrap>

        <Divider />

        {/* SECTION 7 */}
        <Wrap className="pb-20 md:pb-28">
          <div className="grid lg:grid-cols-12 gap-12">
            <div className="lg:col-span-5">
              <FadeUp>
                <SectionHead
                  icon={Users}
                  subtitle="Account ownership"
                  title="Role of Account Management in Delivery"
                />
                <SubText>Every delivery is supported by:</SubText>
              </FadeUp>
            </div>

            <div className="lg:col-span-7">
              <FadeUp delay={0.05}>
                <div className="space-y-3">
                  {[
                    "Assigned account ownership",
                    "Clear communication channels",
                    "Structured updates and reporting",
                    "Controlled escalation paths",
                  ].map((x, i) => (
                    <Bullet key={i}>{x}</Bullet>
                  ))}
                </div>

                <div className="mt-8 rounded-3xl border border-white/10 bg-white/[0.03] p-7">
                  <p className="text-white font-semibold text-lg">
                    Account management ensures:
                  </p>
                  <div className="mt-4 space-y-2 text-white/85 text-[16px] leading-relaxed font-light">
                    <div>• No execution gaps</div>
                    <div>• No communication breakdown</div>
                    <div>• No untracked delays</div>
                  </div>
                </div>
              </FadeUp>
            </div>
          </div>
        </Wrap>

        <Divider />

        {/* SECTION 8 + 9 */}
        <Wrap className="pb-20 md:pb-28">
          <FadeUp>
            <div className="max-w-4xl">
              <SectionHead
                icon={BadgeCheck}
                subtitle="Execution protection"
                title="Quality + Timelines + Escalations"
              />
            </div>
          </FadeUp>

          <div className="mt-10 grid md:grid-cols-2 gap-6">
            <FadeUp delay={0.03}>
              <div className="rounded-3xl border border-white/10 bg-white/[0.03] p-8">
                <div className="flex items-center gap-3">
                  <BadgeCheck className="w-6 h-6 text-orange-400" />
                  <h3 className="text-xl md:text-2xl font-bold text-white">
                    Quality Assurance Embedded in Execution
                  </h3>
                </div>

                <p className="mt-4 text-white/80 text-[16px] leading-relaxed font-light">
                  Quality is not a final step at Zryoss. It is embedded throughout execution.
                </p>

                <div className="mt-6 space-y-3">
                  {[
                    "Pre-execution validation",
                    "Mid-cycle quality checks",
                    "Final delivery verification",
                    "Post-delivery review",
                  ].map((x, i) => (
                    <CheckBullet key={i}>{x}</CheckBullet>
                  ))}
                </div>

                <p className="mt-6 text-white/80 text-[16px] leading-relaxed font-light">
                  Quality failures are corrected <span className="font-semibold">before delivery</span>, not after complaints.
                </p>
              </div>
            </FadeUp>

            <FadeUp delay={0.06}>
              <div className="rounded-3xl border border-white/10 bg-white/[0.03] p-8">
                <div className="flex items-center gap-3">
                  <Timer className="w-6 h-6 text-orange-400" />
                  <h3 className="text-xl md:text-2xl font-bold text-white">
                    Timeline & Commitment Enforcement
                  </h3>
                </div>

                <p className="mt-4 text-white/80 text-[16px] leading-relaxed font-light">
                  Zryoss enforces:
                </p>

                <div className="mt-6 space-y-3">
                  {[
                    "Realistic timelines only",
                    "Execution feasibility checks",
                    "Delay detection and correction",
                    "Accountability for missed milestones",
                  ].map((x, i) => (
                    <Bullet key={i}>{x}</Bullet>
                  ))}
                </div>

                <p className="mt-6 text-white/80 text-[16px] leading-relaxed font-light">
                  Promises are made <span className="font-semibold">after validation</span>, not before.
                </p>
              </div>
            </FadeUp>
          </div>

          <div className="mt-6 grid md:grid-cols-2 gap-6">
            <FadeUp delay={0.09}>
              <div className="rounded-3xl border border-white/10 bg-white/[0.03] p-8">
                <div className="flex items-center gap-3">
                  <AlertTriangle className="w-6 h-6 text-orange-400" />
                  <h3 className="text-xl md:text-2xl font-bold text-white">
                    Escalation & Issue Resolution
                  </h3>
                </div>

                <p className="mt-4 text-white/80 text-[16px] leading-relaxed font-light">
                  If issues arise:
                </p>

                <div className="mt-6 space-y-3">
                  {[
                    "They are logged centrally",
                    "Ownership is assigned immediately",
                    "Resolution timelines are enforced",
                    "Root causes are addressed systemically",
                  ].map((x, i) => (
                    <Bullet key={i}>{x}</Bullet>
                  ))}
                </div>

                <p className="mt-6 text-white/80 text-[16px] leading-relaxed font-light">
                  Escalations are managed, not ignored.
                </p>
              </div>
            </FadeUp>

            <FadeUp delay={0.12}>
              <div className="rounded-3xl border border-white/10 bg-white/[0.03] p-8">
                <div className="flex items-center gap-3">
                  <ShieldCheck className="w-6 h-6 text-orange-400" />
                  <h3 className="text-xl md:text-2xl font-bold text-white">
                    What This Model Prevents
                  </h3>
                </div>

                <p className="mt-4 text-white/80 text-[16px] leading-relaxed font-light">
                  This execution framework prevents:
                </p>

                <div className="mt-6 space-y-3">
                  {[
                    "Over-promising in sales",
                    "Vendor-led chaos",
                    "Unclear delivery ownership",
                    "Quality compromise",
                    "Reputation damage",
                  ].map((x, i) => (
                    <CheckBullet key={i}>{x}</CheckBullet>
                  ))}
                </div>

                <p className="mt-6 text-white/80 text-[16px] leading-relaxed font-light">
                  Delivery discipline protects the ecosystem.
                </p>
              </div>
            </FadeUp>
          </div>
        </Wrap>

        <Divider />

        {/* SECTION 10 */}
        <Wrap className="pb-20 md:pb-28">
          <FadeUp>
            <SectionHead icon={Users} subtitle="Stakeholder outcomes" title="Who Benefits From This Model" />
          </FadeUp>

          <FadeUp delay={0.05}>
            <div className="mt-10 grid sm:grid-cols-2 gap-4">
              {[
                "Clients receive reliable delivery",
                "IPP & BPP avoid execution stress",
                "Vendors operate with clarity",
                "Investors see predictable execution",
              ].map((x, i) => (
                <div
                  key={i}
                  className="rounded-3xl border border-white/10 bg-white/[0.03] p-6 hover:border-orange-500/25 transition"
                >
                  <Bullet>{x}</Bullet>
                </div>
              ))}
            </div>

            <SubText>Everyone operates with confidence.</SubText>
          </FadeUp>
        </Wrap>

        <Divider />

        {/* SECTION 11 */}
        <Wrap className="pb-20 md:pb-28">
          <FadeUp>
            <SectionHead
              icon={BarChart3}
              subtitle="Scale readiness"
              title="Execution Is the Backbone of Scale"
            />
            <SubText>Zryoss can scale because:</SubText>
          </FadeUp>

          <FadeUp delay={0.05}>
            <div className="mt-10 grid sm:grid-cols-2 gap-4">
              {[
                "Execution is repeatable",
                "Delivery is measurable",
                "Governance is fixed",
                "Accountability is clear",
              ].map((x, i) => (
                <div
                  key={i}
                  className="rounded-3xl border border-white/10 bg-white/[0.03] p-6 hover:border-orange-500/25 transition"
                >
                  <CheckBullet>{x}</CheckBullet>
                </div>
              ))}
            </div>

            <SubText>Scale does not weaken delivery— it strengthens it.</SubText>
          </FadeUp>
        </Wrap>

        <Divider />

        {/* FINAL CTA */}
        <Wrap className="pb-24 md:pb-32">
          <FadeUp>
            <div className="relative rounded-3xl border border-orange-500/25 bg-white/[0.04] overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-br from-orange-500/14 via-transparent to-transparent opacity-70 pointer-events-none" />

              <div className="p-10 md:p-14 relative">
                <h3 className="text-3xl md:text-5xl font-bold leading-tight">
                  Deliver With Discipline.
                  <br />
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-orange-600">
                    Execute With Confidence.
                  </span>
                </h3>

                <p className="mt-7 text-white/85 text-lg leading-relaxed font-light max-w-3xl">
                  Zryoss does not rely on effort. It relies on{" "}
                  <span className="text-white font-semibold">execution systems</span>.
                </p>
                <p className="mt-3 text-white/85 text-lg leading-relaxed font-light max-w-3xl">
                  You close the opportunity.{" "}
                  <span className="text-white font-semibold">Zryoss delivers the outcome.</span>
                </p>

                <div className="mt-10 flex flex-wrap gap-4">
                  <button className="inline-flex items-center gap-3 px-10 py-4 rounded-xl bg-orange-500 hover:bg-orange-600 text-white font-semibold transition shadow-[0_0_28px_rgba(249,115,22,0.25)]">
                    Talk to Zryoss <ArrowRight className="w-5 h-5" />
                  </button>

                  {/* <button className="inline-flex items-center gap-3 px-10 py-4 rounded-xl bg-white/[0.05] border border-white/10 hover:border-orange-500/30 text-white/90 font-semibold transition">
                    Explore Operations Roadmap{" "}
                    <ArrowRight className="w-5 h-5 text-orange-400" />
                  </button> */}
                </div>
              </div>
            </div>
          </FadeUp>
        </Wrap>
      </Section>
    </div>
  );
}
