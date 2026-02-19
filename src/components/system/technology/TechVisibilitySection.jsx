// eslint-disable-next-line no-unused-vars
import { motion } from "framer-motion";
import { Eye, Activity } from "lucide-react";

export default function TechVisibilitySection() {
    return (
        <section className="relative bg-[#050505] py-24 overflow-hidden">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="p-10 md:p-16 rounded-[3rem] bg-gradient-to-br from-[#0a0a0a] to-[#000] border border-white/5 relative shadow-2xl">
                    {/* Accent Glow */}
                    <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-orange-500/5 rounded-full blur-[100px]" />

                    <div className="relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                        <div>
                            <div className="w-12 h-12 rounded-xl bg-orange-500/10 flex items-center justify-center mb-6">
                                <Eye className="w-6 h-6 text-orange-400" />
                            </div>
                            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
                                Visibility and Control<br />for Partners
                            </h2>
                            <p className="text-white/60 text-lg mb-8 leading-relaxed">
                                Partners gain visibility into without managing operations. Through the platform, transparency builds trust and confidence without adding complexity.
                            </p>

                            <ul className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                                {[
                                    "Track client progress",
                                    "Monitor milestones",
                                    "View performance",
                                    "Structured updates"
                                ].map((item, i) => (
                                    <li key={i} className="flex items-center gap-3 text-white/80 font-medium">
                                        <Activity className="w-4 h-4 text-orange-500" />
                                        {item}
                                    </li>
                                ))}
                            </ul>
                        </div>

                        <div className="relative">
                            <div className="bg-[#0a0a0a] border border-white/10 rounded-2xl p-6 shadow-xl">
                                <div className="flex justify-between items-center mb-6">
                                    <h4 className="text-white font-bold">Project Velocity</h4>
                                    <span className="text-green-400 text-xs bg-green-500/10 px-2 py-1 rounded">On Track</span>
                                </div>
                                {/* Fake Chart */}
                                <div className="flex items-end gap-2 h-32 mb-4">
                                    {[40, 60, 45, 70, 55, 80, 75].map((h, i) => (
                                        <div key={i} className="flex-1 bg-orange-500/20 rounded-t-sm hover:bg-orange-500/40 transition-colors" style={{ height: `${h}%` }} />
                                    ))}
                                </div>
                                <div className="flex justify-between text-xs text-white/40">
                                    <span>Mon</span>
                                    <span>Sun</span>
                                </div>
                            </div>

                            {/* Floating Element */}
                            <motion.div
                                animate={{ y: [0, -10, 0] }}
                                transition={{ repeat: Infinity, duration: 4, ease: "easeInOut" }}
                                className="absolute -bottom-6 -left-6 bg-[#111] border border-white/10 p-4 rounded-xl shadow-lg flex items-center gap-3"
                            >
                                <div className="w-3 h-3 rounded-full bg-green-500 animate-pulse" />
                                <div>
                                    <p className="text-white font-bold text-sm">Real-time Data</p>
                                    <p className="text-white/40 text-xs">Live updates enabled</p>
                                </div>
                            </motion.div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
