// eslint-disable-next-line no-unused-vars
import { motion } from "framer-motion";
import { ShieldCheck, Server, Lock, Layers } from "lucide-react";

export default function TechInfrastructureSection() {
    return (
        <section className="relative bg-[#050505] py-24">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-16">
                    <h2 className="text-3xl md:text-5xl font-bold text-white mb-4">Secure & Scalable Infrastructure</h2>
                    <p className="text-white/60 text-lg">Built to support multiple brands and verticals simultaneously.</p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                    {[
                        { icon: ShieldCheck, title: "Secure Access", desc: "Role-based permissions & data protection." },
                        { icon: Server, title: "Scalable Core", desc: "Infrastructure that grows with the ecosystem." },
                        { icon: Layers, title: "Multi-Brand", desc: "Standard processes across all brands." },
                        { icon: Lock, title: "Data Privacy", desc: "Strict adherence to protection standards." }
                    ].map((item, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, scale: 0.95 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1 }}
                            className="p-8 rounded-3xl bg-[#0a0a0a] border border-white/5 hover:border-orange-500/30 transition-colors text-center"
                        >
                            <div className="w-14 h-14 mx-auto rounded-full bg-orange-500/10 flex items-center justify-center mb-6">
                                <item.icon className="w-7 h-7 text-orange-400" />
                            </div>
                            <h3 className="text-white font-bold text-lg mb-2">{item.title}</h3>
                            <p className="text-white/50 text-sm">{item.desc}</p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
