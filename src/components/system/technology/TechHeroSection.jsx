// eslint-disable-next-line no-unused-vars
import { motion } from "framer-motion";
import { Database, ArrowRight, Zap, Link as LinkIcon, Lock } from "lucide-react";
import { Link } from "react-router-dom";

export default function TechHeroSection() {
    const fadeUp = {
        hidden: { opacity: 0, y: 30 },
        show: { opacity: 1, y: 0 },
    };

    return (
        <section className="relative bg-[#050505] py-20 md:py-32 overflow-hidden">
            {/* Background Elements */}
            <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
                <div className="absolute -top-[20%] right-[10%] w-[50%] h-[50%] bg-orange-500/10 rounded-full blur-[140px]" />
                <div className="absolute bottom-[0%] -left-[10%] w-[40%] h-[60%] bg-red-500/10 rounded-full blur-[140px]" />
            </div>

            <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
                    {/* Left Content */}
                    <motion.div
                        variants={fadeUp}
                        initial="hidden"
                        whileInView="show"
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                    >
                        <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-2 mb-6">
                            <Database size={16} className="text-orange-400" />
                            <span className="text-xs font-semibold tracking-widest text-orange-100 uppercase">
                                Technology & Automation Platform
                            </span>
                        </div>

                        <h1 className="text-4xl md:text-6xl font-extrabold text-white leading-[1.1] mb-6">
                            The Digital Backbone That Powers <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-red-500">Every Zryoss Brand</span>
                        </h1>

                        <p className="text-lg text-white/70 leading-relaxed mb-8 max-w-xl">
                            Technology at Zryoss is not an add-on. It is the foundation that enables consistency, control, and growth across multiple independent brands.
                        </p>

                        <div className="flex flex-col sm:flex-row gap-4">
                            <Link to="/ecosystem" className="px-8 py-4 rounded-xl bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700 text-white font-bold shadow-lg shadow-orange-500/25 transition-all flex items-center justify-center gap-2 group">
                                Explore The Ecosystem
                                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                            </Link>
                            <Link to="/platform/how-zryoss-works" className="px-8 py-4 rounded-xl border border-white/10 hover:border-white/20 bg-white/5 hover:bg-white/10 text-white font-semibold flex items-center justify-center transition-all">
                                See How It Works
                            </Link>
                        </div>
                    </motion.div>

                    {/* Right Visual - Tech Graph Abstract */}
                    <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                        className="relative"
                    >
                        <div className="relative z-10 p-8 rounded-[40px] border border-white/10 bg-[#0a0a0a]/60 backdrop-blur-md shadow-2xl overflow-hidden group">
                            {/* Grid overlay */}
                            <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:40px_40px]" />

                            <div className="relative z-10 flex flex-col items-center justify-center gap-8 py-10">
                                {/* Central Hub */}
                                <div className="w-24 h-24 rounded-full bg-gradient-to-br from-orange-500 to-red-600 flex items-center justify-center shadow-[0_0_50px_rgba(249,115,22,0.5)] z-20">
                                    <Database className="w-10 h-10 text-white" />
                                </div>

                                {/* Connected Nodes */}
                                <div className="grid grid-cols-3 gap-6 w-full max-w-sm">
                                    {[
                                        { icon: Zap, label: "Execution" },
                                        { icon: LinkIcon, label: "Coordination" },
                                        { icon: Lock, label: "Scale" }
                                    ].map((item, i) => (
                                        <div key={i} className="flex flex-col items-center gap-3">
                                            <div className="w-14 h-14 rounded-2xl bg-[#050505] border border-white/10 flex items-center justify-center group-hover:border-orange-500/50 transition-colors duration-500">
                                                <item.icon className="w-6 h-6 text-white/60 group-hover:text-orange-400 transition-colors" />
                                            </div>
                                            <span className="text-xs font-semibold text-white/50 tracking-wider uppercase">{item.label}</span>
                                        </div>
                                    ))}
                                </div>

                                {/* Connecting Lines (Simulated) */}
                                <svg className="absolute inset-0 w-full h-full pointer-events-none z-0 opacity-20" style={{ overflow: 'visible' }}>
                                    <path d="M200 150 L 100 280" stroke="url(#line-grad)" strokeWidth="2" strokeDasharray="5,5" />
                                    <path d="M200 150 L 200 280" stroke="url(#line-grad)" strokeWidth="2" strokeDasharray="5,5" />
                                    <path d="M200 150 L 300 280" stroke="url(#line-grad)" strokeWidth="2" strokeDasharray="5,5" />
                                    <defs>
                                        <linearGradient id="line-grad" x1="0%" y1="0%" x2="0%" y2="100%">
                                            <stop offset="0%" stopColor="#f97316" />
                                            <stop offset="100%" stopColor="#ef4444" />
                                        </linearGradient>
                                    </defs>
                                </svg>
                            </div>
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}
