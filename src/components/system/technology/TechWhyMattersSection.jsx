// eslint-disable-next-line no-unused-vars
import { motion } from "framer-motion";
import { ServerCrash, Users, FileWarning, EyeOff } from "lucide-react";

export default function TechWhyMattersSection() {
    const challenges = [
        {
            icon: Users,
            title: "Manual Coordination",
            desc: "Teams waste time manually syncing instead of executing."
        },
        {
            icon: ServerCrash,
            title: "Disconnected Tools",
            desc: "Fragmented tech stacks lead to data silos and confusion."
        },
        {
            icon: EyeOff,
            title: "Lack of Visibility",
            desc: "Partners and founders fly blind without real-time data."
        },
        {
            icon: FileWarning,
            title: "Poor Accountability",
            desc: "Without tracking, it’s unclear who is responsible for what."
        }
    ];

    return (
        <section className="relative bg-[#050505] py-24 overflow-hidden border-b border-white/5">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
                    <motion.div
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                    >
                        <span className="text-orange-500 font-bold tracking-widest text-sm uppercase">The Friction Point</span>
                        <h2 className="mt-4 text-3xl md:text-5xl font-bold text-white leading-tight">
                            Why Technology Matters in Execution
                        </h2>
                        <p className="mt-6 text-lg text-white/60 leading-relaxed">
                            Most businesses fail to scale because their technology stack is fragmented. Growth breaks systems that aren't integrated.
                        </p>

                        <div className="mt-8 p-6 rounded-2xl bg-orange-500/5 border border-orange-500/10">
                            <p className="text-orange-200/80 font-medium italic">
                                "Zryoss eliminates these issues by providing one integrated technology backbone."
                            </p>
                        </div>
                    </motion.div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                        {challenges.map((item, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: index * 0.1 }}
                                className="p-6 rounded-2xl bg-[#0a0a0a] border border-white/5 hover:border-orange-500/20 group transition-colors"
                            >
                                <div className="w-10 h-10 rounded-lg bg-white/5 flex items-center justify-center mb-4 group-hover:bg-orange-500/10 transition-colors">
                                    <item.icon className="w-5 h-5 text-white/50 group-hover:text-orange-400" />
                                </div>
                                <h3 className="text-lg font-bold text-white mb-2">{item.title}</h3>
                                <p className="text-sm text-white/50">{item.desc}</p>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}
