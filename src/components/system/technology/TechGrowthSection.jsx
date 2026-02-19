// eslint-disable-next-line no-unused-vars
import { motion } from "framer-motion";
import { TrendingUp, Globe, Box, CheckCircle } from "lucide-react";

export default function TechGrowthSection() {
    return (
        <section className="relative bg-[#050505] py-24">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                {/* Top: Growth Features */}
                <div className="mb-20">
                    <div className="text-center mb-12">
                        <h2 className="text-3xl md:text-5xl font-bold text-white mb-4">Built for Long-Term Growth</h2>
                        <p className="text-white/60">It is not static—it grows with the ecosystem.</p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
                        {[
                            { icon: TrendingUp, title: "Support Volume", desc: "Handles increasing loads seamlessly." },
                            { icon: Box, title: "New Verticals", desc: "Adaptable to new business lines." },
                            { icon: Globe, title: "Evolving Platform", desc: "Constantly updated with improvements." },
                            { icon: CheckCircle, title: "Process Logic", desc: "Adapts to refined operating models." }
                        ].map((item, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: index * 0.1 }}
                                className="p-6 rounded-2xl bg-[#0a0a0a] border border-white/5 text-center"
                            >
                                <div className="w-12 h-12 mx-auto rounded-full bg-orange-500/10 flex items-center justify-center mb-4">
                                    <item.icon className="w-6 h-6 text-orange-400" />
                                </div>
                                <h3 className="text-white font-bold mb-2">{item.title}</h3>
                                <p className="text-white/50 text-sm">{item.desc}</p>
                            </motion.div>
                        ))}
                    </div>
                </div>

                {/* Bottom: The Result */}
                <div className="rounded-[3rem] bg-gradient-to-r from-orange-900/20 to-red-900/20 border border-white/5 p-10 md:p-16 text-center relative overflow-hidden">
                    <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(249,115,22,0.1),transparent_70%)]" />

                    <div className="relative z-10">
                        <h3 className="text-2xl md:text-4xl font-bold text-white mb-8">The Result: Controlled Execution at Scale</h3>

                        <div className="flex flex-wrap justify-center gap-4 md:gap-12">
                            {[
                                "Execution becomes traceable",
                                "Quality becomes measurable",
                                "Growth becomes manageable"
                            ].map((text, i) => (
                                <div key={i} className="flex items-center gap-3">
                                    <div className="w-2 h-2 rounded-full bg-green-500" />
                                    <span className="text-white/90 text-lg font-medium">{text}</span>
                                </div>
                            ))}
                        </div>

                        <p className="mt-10 text-orange-300 font-semibold text-xl">
                            "Automation removes chaos, not control."
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
}
