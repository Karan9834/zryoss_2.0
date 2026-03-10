import React from "react";
import { motion } from "framer-motion";
import { 
  Network, 
  Compass, 
  Database, 
  Layers, 
  ShieldCheck, 
  ChevronRight,
  TrendingUp,
  Workflow,
  Zap,
  Share2,
  Link as LinkIcon,
  GitBranch,
  Hammer
} from "lucide-react";
import { useNavigate } from "react-router-dom";

/**
 * PredictableJourneySection
 * A high-end, premium section for the Home page that outlines 
 * the step-by-step business journey within Zryoss.
 */

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  show: { opacity: 1, y: 0 },
};

export default function PredictableJourneySection() {
  const navigate = useNavigate();
  const steps = [
    {
      id: "01",
      title: "Connect with the System",
      desc: "Start by connecting with Zryoss. Instead of starting from zero, you begin with a system already in place.",
      icon: LinkIcon,
      bullets: ["Proven business framework", "Execution support", "Existing ecosystem"],
      color: "from-orange-500/20 to-amber-500/20",
    },
    {
      id: "02",
      title: "Choose Your Path (IPP or IBP)",
      desc: "Pick the path that matches your stage today — individual growth or business scaling.",
      icon: GitBranch,
      bullets: ["IPP: individuals", "IBP: businesses", "Structured partner paths"],
      color: "from-amber-500/10 to-transparent",
    },
    {
      id: "03",
      title: "Build Using the Framework",
      desc: "Zryoss provides a structured build process so you don’t figure everything out alone.",
      icon: Hammer,
      bullets: ["Positioning & structure", "Processes & workflows", "Systems setup"],
      color: "from-orange-500/20 to-amber-500/20",
    },
    {
      id: "04",
      title: "Execute with Ecosystem Support",
      desc: "Execution is where most fail. Zryoss solves this through ecosystem-led support layers.",
      icon: Zap,
      bullets: ["Marketing engines", "HR & talent", "Tech & automation"],
      color: "from-amber-500/10 to-transparent",
    },
    {
      id: "05",
      title: "Scale Without Chaos",
      desc: "As growth happens, the OS ensures stability — roles, quality control, predictable systems.",
      icon: ShieldCheck,
      bullets: ["Accountability", "Quality control", "Reduced dependency"],
      color: "from-orange-500/20 to-amber-500/20",
    },
    {
      id: "06",
      title: "Expand Through the Ecosystem",
      desc: "Once the business stabilizes, partners can expand their network and revenue channels inside the ecosystem.",
      icon: Share2,
      bullets: ["Build partner networks", "Create IPP under IBP", "Generate recurring income"],
      color: "from-amber-500/10 to-transparent",
    },
  ];

  return (
    <section className="relative bg-[#070A0F] py-12 md:py-16 overflow-hidden border-t border-white/5">
      {/* Background Glows */}
      <div className="absolute top-0 left-0 w-96 h-96 bg-orange-500/10 blur-[150px] rounded-full pointer-events-none" />
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-orange-500/5 blur-[150px] rounded-full pointer-events-none" />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-4xl mx-auto mb-12 px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 mb-4"
          >
            <p className="text-xs tracking-[0.3em] uppercase text-orange-500 font-bold">
              Step-by-step system
            </p>
          </motion.div>

          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-3xl md:text-4xl lg:text-5xl font-bold text-white leading-tight"
          >
            Precision Systems — A <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-orange-600">Reliable Roadmap</span>
          </motion.h2>

          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="mt-6 text-gray-400 text-lg md:text-xl leading-relaxed font-light"
          >
            You always know what step you’re on, what comes next, and what support is available.
          </motion.p>
        </div>

        {/* Steps Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
          {steps.map((step, idx) => {
            const Icon = step.icon;
            return (
              <motion.div
                key={step.id}
                variants={fadeUp}
                initial="hidden"
                whileInView="show"
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.6, delay: idx * 0.1 }}
                className="group h-full"
              >
                {/* Card Container */}
                <div className="h-full rounded-[24px] border border-white/10 bg-[#0F1217] p-6 lg:p-8 transition-all duration-500 hover:border-orange-500/40 hover:bg-[#12161d] hover:shadow-[0_0_40px_rgba(249,115,22,0.1)] flex flex-col relative overflow-hidden">
                  
                  <div className="relative z-10 flex flex-col h-full">
                    {/* Top Row: Step Label & Icon */}
                    <div className="flex items-start justify-between mb-5">
                      <p className="text-orange-500 font-bold text-[10px] uppercase tracking-[0.2em] pt-1">
                        Step {step.id}
                      </p>
                      
                      <div className="h-10 w-10 rounded-xl border border-white/10 bg-[#0B1220]/60 flex items-center justify-center shadow-inner group-hover:border-orange-500/50 transition-colors">
                        <Icon size={18} className="text-orange-500" />
                      </div>
                    </div>

                    {/* Main Content */}
                    <h3 className="text-xl md:text-2xl font-bold text-white mb-2 group-hover:text-orange-500 transition-colors duration-300">
                      {step.title}
                    </h3>
                    <p className="text-gray-400 text-sm leading-relaxed mb-6 font-light">
                      {step.desc}
                    </p>

                    {/* Bottom Row: Pill Bullets */}
                    <div className="mt-auto flex flex-wrap gap-2">
                      {step.bullets.map((bullet, i) => (
                        <div 
                          key={i} 
                          className="px-4 py-2 rounded-xl border border-white/10 bg-black/20 backdrop-blur-sm group-hover:border-orange-500/20 transition-colors flex-1 text-center min-w-fit"
                        >
                          <p className="text-white/80 text-[12px] font-medium whitespace-nowrap">
                            {bullet}
                          </p>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Bottom CTA Area */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5 }}
          className="mt-12 text-center"
        >
          <button 
            onClick={() => navigate('/apply')}
            className="group px-8 py-3.5 bg-gradient-to-r from-orange-600 to-amber-600 text-white rounded-full font-bold text-base transition-all hover:scale-105 hover:shadow-[0_20px_40px_rgba(234,88,12,0.3)] flex items-center gap-3 mx-auto"
          >
            Build Your Predictable Business
            <ChevronRight size={18} className="group-hover:translate-x-1 transition-transform" />
          </button>
        </motion.div>
      </div>
    </section>
  );
}
