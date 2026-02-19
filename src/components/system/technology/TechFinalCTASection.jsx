// eslint-disable-next-line no-unused-vars
import { motion } from "framer-motion";
import { ArrowRight, Globe } from "lucide-react";
import { Link } from "react-router-dom";

export default function TechFinalCTASection() {
    return (
        <section className="relative bg-[#050505] py-24 overflow-hidden">
            {/* Background Glow */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-orange-600/10 rounded-full blur-[120px]" />

            <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                >
                    <span className="text-orange-500 font-bold tracking-widest text-sm uppercase mb-4 block">Endless Scale</span>
                    <h2 className="text-4xl md:text-6xl font-black text-white mb-6">
                        Ready to See How Technology<br />Enables the Platform?
                    </h2>
                    <p className="text-xl text-white/60 mb-10 max-w-2xl mx-auto">
                        Explore how automation, workflows, and reporting support execution across the Zryoss ecosystem.
                    </p>

                    <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                        <Link to="/ecosystem/overview" className="px-8 py-4 rounded-xl bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700 text-white font-bold transition-all shadow-lg shadow-orange-500/25 flex items-center gap-2">
                            Explore the Ecosystem <Globe className="w-5 h-5" />
                        </Link>
                        <Link to="/platform/how-zryoss-works" className="px-8 py-4 rounded-xl border border-white/10 bg-white/5 hover:bg-white/10 text-white font-semibold transition-colors flex items-center gap-2">
                            See How Zryoss Works <ArrowRight className="w-5 h-5" />
                        </Link>
                    </div>
                </motion.div>
            </div>
        </section>
    );
}
