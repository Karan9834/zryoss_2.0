// eslint-disable-next-line no-unused-vars
import { motion } from "framer-motion";
import { LayoutDashboard, Cog, ClipboardCheck, Users, BarChart2, CheckCircle2 } from "lucide-react";

export default function TechIncludesSection() {
    const features = [
        {
            icon: LayoutDashboard,
            title: "Centralized Dashboards",
            desc: "Single pane of glass for all operations and metrics."
        },
        {
            icon: Cog,
            title: "Workflow Automation",
            desc: "Automated task routing and assignment logic."
        },
        {
            icon: ClipboardCheck,
            title: "Task Tracking",
            desc: "Real-time visibility into every project status."
        },
        {
            icon: Users,
            title: "Onboarding Tools",
            desc: "Streamlined client intake and setup flows."
        },
        {
            icon: BarChart2,
            title: "Performance Monitoring",
            desc: "Data-driven insights into team execution."
        }
    ];

    return (
        <section className="relative bg-[#050505] py-24 overflow-hidden border-b border-white/5">
            <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-orange-900/10 via-transparent to-transparent opacity-60" />

            <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex flex-col lg:flex-row gap-16 items-center">

                    {/* Features Grid */}
                    <div className="w-full lg:w-1/2 space-y-6">
                        <h2 className="text-3xl md:text-4xl font-bold text-white mb-8">
                            What the Zryoss Tech Platform Includes
                        </h2>

                        {features.map((feature, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, x: -20 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: index * 0.1 }}
                                className="flex items-start gap-4 p-4 rounded-xl hover:bg-white/5 transition-colors group"
                            >
                                <div className="shrink-0 w-12 h-12 rounded-full bg-[#0a0a0a] border border-white/10 flex items-center justify-center group-hover:border-orange-500/30 transition-colors">
                                    <feature.icon className="w-5 h-5 text-orange-400 group-hover:scale-110 transition-transform" />
                                </div>
                                <div>
                                    <h3 className="text-white font-bold text-lg">{feature.title}</h3>
                                    <p className="text-white/50 text-sm mt-1">{feature.desc}</p>
                                </div>
                            </motion.div>
                        ))}
                    </div>

                    {/* Abstract Dashboard Visual */}
                    <motion.div
                        initial={{ opacity: 0, scale: 0.95 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        className="w-full lg:w-1/2"
                    >
                        <div className="relative rounded-2xl bg-[#0a0a0a] border border-white/10 shadow-2xl p-6 overflow-hidden">
                            {/* Browser Header */}
                            <div className="flex items-center gap-2 mb-6 border-b border-white/5 pb-4">
                                <div className="w-3 h-3 rounded-full bg-red-500/50" />
                                <div className="w-3 h-3 rounded-full bg-yellow-500/50" />
                                <div className="w-3 h-3 rounded-full bg-green-500/50" />
                                <div className="ml-4 w-64 h-2 bg-white/5 rounded-full" />
                            </div>

                            {/* Dashboard Mockup Grid */}
                            <div className="grid grid-cols-2 gap-4">
                                {/* Card 1 */}
                                <div className="col-span-2 p-4 rounded-xl bg-[#111]">
                                    <div className="w-32 h-3 bg-white/20 rounded-full mb-4" />
                                    <div className="flex gap-2 mt-4">
                                        <div className="w-full h-20 bg-gradient-to-r from-orange-500/10 to-transparent rounded-lg border border-orange-500/20" />
                                    </div>
                                </div>
                                {/* Card 2 */}
                                <div className="p-4 rounded-xl bg-[#111]">
                                    <div className="w-20 h-3 bg-white/20 rounded-full mb-2" />
                                    <div className="w-10 h-10 rounded-full border-4 border-orange-500/30 border-t-orange-500 mt-4 mx-auto" />
                                </div>
                                {/* Card 3 */}
                                <div className="p-4 rounded-xl bg-[#111]">
                                    <div className="w-20 h-3 bg-white/20 rounded-full mb-3" />
                                    <div className="space-y-2">
                                        <div className="w-full h-2 bg-white/5 rounded-full" />
                                        <div className="w-2/3 h-2 bg-white/5 rounded-full" />
                                        <div className="w-3/4 h-2 bg-white/5 rounded-full" />
                                    </div>
                                </div>
                            </div>

                            {/* Integrated Badge */}
                            <div className="absolute bottom-6 right-6 px-4 py-2 bg-green-500/10 border border-green-500/20 rounded-full flex items-center gap-2 backdrop-blur-md">
                                <CheckCircle2 className="w-4 h-4 text-green-400" />
                                <span className="text-green-400 text-xs font-bold uppercase tracking-wider">System Active</span>
                            </div>
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}
