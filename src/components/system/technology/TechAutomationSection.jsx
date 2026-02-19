// eslint-disable-next-line no-unused-vars
import { motion } from "framer-motion";
import { GitPullRequest, CheckSquare, Bell, AlertTriangle, FileText } from "lucide-react";

export default function TechAutomationSection() {
    const steps = [
        { icon: GitPullRequest, label: "Task Creation" },
        { icon: Bell, label: "Assignments" },
        { icon: CheckSquare, label: "Approvals" },
        { icon: AlertTriangle, label: "Escalation" },
        { icon: FileText, label: "Reporting" },
    ];

    return (
        <section className="relative bg-[#050505] py-24">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                <div className="mb-16">
                    <span className="text-orange-500 font-bold tracking-widest text-sm uppercase">Smart Workflows</span>
                    <h2 className="mt-4 text-3xl md:text-5xl font-bold text-white">Workflow Automation</h2>
                    <p className="mt-4 text-white/60 text-lg max-w-2xl mx-auto">
                        Automation is used to standardize execution, not replace people. It ensures execution remains predictable and efficient.
                    </p>
                </div>

                {/* Process Flow */}
                <div className="relative flex flex-wrap justify-center gap-4 md:gap-8">
                    {/* Connector Line */}
                    <div className="hidden md:block absolute top-[28px] left-[10%] right-[10%] h-[2px] bg-gradient-to-r from-transparent via-orange-500/30 to-transparent" />

                    {steps.map((step, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1 }}
                            className="relative z-10 flex flex-col items-center gap-4 group"
                        >
                            <div className="w-16 h-16 rounded-2xl bg-[#0a0a0a] border border-white/10 flex items-center justify-center shadow-lg group-hover:border-orange-500/50 group-hover:shadow-orange-500/20 transition-all duration-300">
                                <step.icon className="w-7 h-7 text-white/70 group-hover:text-orange-400 transition-colors" />
                            </div>
                            <span className="text-white font-medium text-sm">{step.label}</span>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
