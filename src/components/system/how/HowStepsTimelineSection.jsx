import React from "react";
import { motion } from "framer-motion";
import { PenTool, Users, MonitorPlay, Handshake, Cog, Globe } from "lucide-react";

const fadeUp = {
  hidden: { opacity: 0, y: 28 },
  show: { opacity: 1, y: 0 },
};

export default function HowStepsTimelineSection() {
  const steps = [
    {
      id: "01",
      title: "Create Your Brand",
      icon: PenTool,
      desc:
        "Create and build your own brand.",
      bullets: ["Brand Identity", "Company Profile", "Marketing Assets"],
    },
    {
      id: "02",
      title: "Generate Leads",
      icon: Users,
      desc:
        "Generate leads and connect with clients.",
      bullets: ["Client Outreach", "Network Building", "Lead Generation"],
    },
    {
      id: "03",
      title: "Conduct Demos",
      icon: MonitorPlay,
      desc:
        "Zryoss helps explain services and conduct demos.",
      bullets: ["Service Explanation", "Demo Support", "Expert Assistance"],
    },
    {
      id: "04",
      title: "Close Deals",
      icon: Handshake,
      desc:
        "Deals close with support from our team.",
      bullets: ["Closing Assistance", "Quotation Creation", "Negotiation Support"],
    },
    {
      id: "05",
      title: "Execution & Delivery",
      icon: Cog,
      desc:
        "Our vendor network executes the service under your brand name.",
      bullets: ["Backend Execution", "Vendor Network", "Seamless Delivery"],
    },
    {
      id: "06",
      title: "Expand Through the Ecosystem",
      icon: Globe,
      desc:
        "Once the business stabilizes, partners can expand their network and revenue channels inside the ecosystem.",
      bullets: ["Build partner networks", "Create IPP under IBP", "Generate long-term recurring income"],
    },
  ];

  return (
    <section className="relative bg-[#0B0F14] py-16 md:py-24 overflow-hidden">
      <div className="absolute -top-44 left-[-140px] h-[560px] w-[560px] rounded-full bg-orange-500/10 blur-3xl" />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.35 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="text-center max-w-4xl mx-auto"
        >
          <p className="text-orange-500 font-semibold tracking-widest text-xs uppercase">
            Step-by-step system
          </p>
          <h2 className="mt-3 text-3xl md:text-5xl font-extrabold text-white leading-tight">
            A Predictable Journey — Not a Gamble
          </h2>
          <p className="mt-4 text-white/70 text-base md:text-lg leading-relaxed">
            Starting your business with Zryoss is simple.
          </p>
        </motion.div>

        {/* timeline */}
        <div className="mt-14 grid grid-cols-1 lg:grid-cols-[1fr_1fr] gap-6">
          {steps.map((s, idx) => {
            const Icon = s.icon;
            return (
              <motion.div
                key={idx}
                variants={fadeUp}
                initial="hidden"
                whileInView="show"
                viewport={{ once: true, amount: 0.25 }}
                transition={{ duration: 0.75, delay: idx * 0.07 }}
                className="rounded-[34px] border border-white/10 bg-white/5 hover:border-orange-500/30 hover:bg-white/[0.07] transition overflow-hidden"
              >
                <div className="p-8">
                  <div className="flex items-start justify-between gap-5">
                    <div>
                      <p className="text-orange-300 text-xs font-semibold tracking-widest uppercase">
                        Step {s.id}
                      </p>
                      <h3 className="mt-2 text-white text-2xl font-extrabold">
                        {s.title}
                      </h3>
                    </div>

                    <div className="h-12 w-12 rounded-2xl border border-white/10 bg-[#0B1220]/55 flex items-center justify-center">
                      <Icon size={22} className="text-orange-400" />
                    </div>
                  </div>

                  <p className="mt-4 text-white/70 leading-relaxed">{s.desc}</p>

                  <div className="mt-6 grid grid-cols-1 sm:grid-cols-3 gap-3">
                    {s.bullets.map((b, i) => (
                      <div
                        key={i}
                        className="rounded-2xl border border-white/10 bg-[#0B1220]/45 px-4 py-3 text-center"
                      >
                        <p className="text-white/80 text-xs font-semibold">{b}</p>
                      </div>
                    ))}
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
