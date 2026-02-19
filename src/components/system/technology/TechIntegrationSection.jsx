// eslint-disable-next-line no-unused-vars
import { motion } from "framer-motion";
import { Network, Link, Users, Building2 } from "lucide-react";

export default function TechIntegrationSection() {
    return (
        <section className="relative bg-[#050505] py-24 overflow-hidden">
            {/* Background Pattern */}
            <div className="absolute inset-0 opacity-20" style={{ backgroundImage: 'radial-gradient(#f97316 1px, transparent 1px)', backgroundSize: '32px 32px' }} />

            <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                    <motion.div
                        initial={{ opacity: 0, x: -30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                    >
                        <h2 className="text-3xl md:text-5xl font-bold text-white mb-6 leading-tight">Integration Across the Ecosystem</h2>
                        <p className="text-white/60 text-lg mb-8">
                            The technology platform connects Zryoss core execution brands, approved vendors, and internal operations teams. This integration ensures smooth coordination and faster delivery.
                        </p>

                        <div className="space-y-4">
                            {[
                                { icon: Building2, text: "Core Execution Brands" },
                                { icon: Users, text: "Approved Vendors & Partners" },
                                { icon: Network, text: "Internal Operations Teams" }
                            ].map((item, index) => (
                                <div key={index} className="flex items-center gap-4 p-4 rounded-xl bg-[#0a0a0a] border border-white/5 hover:border-orange-500/20 transition-colors">
                                    <item.icon className="w-5 h-5 text-orange-400" />
                                    <span className="text-white font-medium">{item.text}</span>
                                </div>
                            ))}
                        </div>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        className="relative"
                    >
                        {/* Central Hub Visual */}
                        <div className="relative aspect-square max-w-md mx-auto">
                            <div className="absolute inset-0 rounded-full border border-orange-500/20 animate-[spin_10s_linear_infinite]" />
                            <div className="absolute inset-8 rounded-full border border-red-500/20 animate-[spin_15s_linear_infinite_reverse]" />
                            <div className="absolute inset-16 rounded-full border border-white/10" />

                            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-24 h-24 rounded-full bg-orange-600/20 backdrop-blur-md flex items-center justify-center border border-orange-500/50 shadow-[0_0_30px_rgba(249,115,22,0.3)]">
                                <Link className="w-10 h-10 text-white" />
                            </div>

                            {/* Satellite Nodes */}
                            {[0, 120, 240].map((deg, i) => (
                                <div key={i} className="absolute top-1/2 left-1/2 w-12 h-12 bg-[#111] rounded-xl border border-white/10 flex items-center justify-center transform -translate-x-1/2 -translate-y-1/2"
                                    style={{ transform: `translate(-50%, -50%) rotate(${deg}deg) translateY(-140px) rotate(-${deg}deg)` }}>
                                    <div className="w-3 h-3 rounded-full bg-orange-500" />
                                </div>
                            ))}
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}
