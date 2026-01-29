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
        <section className="relative bg-[#050505] min-h-screen flex items-center py-20 md:py-32 overflow-hidden border-b border-white/5">
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
                        <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-orange-500/30 bg-orange-500/10 backdrop-blur-sm mb-5">
                            <span className="w-2 h-2 rounded-full bg-orange-500 animate-pulse" />
                            <p className="text-orange-500 text-xs uppercase tracking-[0.45em] font-bold">
                                Technology & Automation Platform
                            </p>
                        </div>

                        <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold leading-[1.15] tracking-tight mb-5 text-white">
                            The Digital Backbone That Powers <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-red-500">Every Zryoss Brand</span>
                        </h1>

                        <p className="text-xl text-gray-400 leading-relaxed font-light mb-8">
                            Technology at Zryoss is not an add-on. It is the foundation that enables consistency, control, and growth across multiple independent brands.
                        </p>

                        <div className="flex flex-col sm:flex-row gap-4">
                            <Link to="/ecosystem/overview" className="rounded-xl bg-orange-500 px-8 py-4 font-bold text-white shadow-[0_0_25px_rgba(249,115,22,0.35)] hover:bg-orange-600 transition flex items-center justify-center gap-2 group">
                                Explore The Ecosystem
                                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                            </Link>

                            <Link to="/platform/how-zryoss-works" className="rounded-xl border border-white/10 bg-white/5 px-8 py-4 font-semibold text-white hover:border-orange-500/50 hover:text-orange-300 transition flex items-center justify-center">
                                See How It Works
                            </Link>
                        </div>
                    </motion.div>

                    {/* Right Visual */}
                    <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                        className="relative"
                    >
                        <div className="absolute inset-0 rounded-3xl bg-orange-500/10 blur-2xl -z-10" />
                        <div className="rounded-3xl border border-white/10 bg-white/5 p-2">
                            <img
                                src="/Technology Platform.jpg"
                                alt="Technology Platform"
                                className="w-full h-[260px] md:h-[420px] object-cover rounded-2xl transform hover:scale-105 transition-transform duration-700"
                            />
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}
