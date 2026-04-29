import React from "react";

const FadeUp = ({ children, delay = 0 }) => {
    return (
        <div
            className="opacity-0 animate-fadeUp"
            style={{ animationDelay: `${delay}s`, animationFillMode: 'forwards' }}
        >
            {children}
        </div>
    );
};

const problems = [
    {
        title: "Low Brand Visibility",
        desc: "Most businesses struggle to reach the right audience because they lack consistent content, online presence, and personal branding.",
        icon: "💼"
    },
    {
        title: "Execution Challenges",
        desc: "Even with great ideas, businesses fail to execute due to lack of systems, expert support, and reliable backend infrastructure.",
        icon: "⚙️"
    },
    {
        title: "Stuck in Daily Operations",
        desc: "Business owners get trapped in managing tasks, vendors, and daily work instead of focusing on growth and scaling.",
        icon: "🕸️"
    },
    {
        title: "Unstable Growth",
        desc: "Without strong branding and systems, growth becomes inconsistent, unpredictable, and difficult to sustain long-term.",
        icon: "📈"
    }
];

export default function ProblemSection() {
    return (
        <section className="py-8 md:py-12 lg:py-16 bg-[#050505] relative overflow-hidden">
            <style>{`
                @keyframes fadeUp {
                    from {
                        opacity: 0;
                        transform: translateY(30px);
                    }
                    to {
                        opacity: 1;
                        transform: translateY(0);
                    }
                }
                .animate-fadeUp {
                    animation: fadeUp 0.8s ease-out;
                }
            `}</style>

            {/* Background Decor */}
            <div className="absolute top-0 right-0 w-96 h-96 bg-orange-500/5 blur-[120px] rounded-full" />
            <div className="absolute bottom-0 left-0 w-96 h-96 bg-orange-500/3 blur-[100px] rounded-full" />

            <div className="max-w-7xl mx-auto px-4 md:px-6 lg:px-8 relative z-10">
                <FadeUp>
                    <div className="text-center mb-10 md:mb-14">
                        <span className="text-xs uppercase tracking-[0.3em] text-orange-500 font-bold mb-3 block">
                            THE PROBLEM WE SOLVE
                        </span>
                        <h2 className="text-3xl md:text-4xl font-bold leading-tight md:leading-snug text-white mb-4">
                            Why Most Businesses Fail to{" "}
                            <span className="block text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-orange-600">
                                Build a Strong Brand
                            </span>
                        </h2>
                        <div className="w-24 h-1 bg-orange-500 mx-auto rounded-full mb-4" />
                        <p className="text-gray-400 text-base md:text-lg max-w-3xl mx-auto font-light leading-snug md:leading-relaxed">
                            In today&apos;s digital-first world, businesses don&apos;t fail because of lack of effort — they fail because they lack visibility, content, and structured execution systems.
                        </p>
                    </div>
                </FadeUp>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6 lg:gap-8 mb-8">
                    {problems.map((prob, idx) => (
                        <FadeUp key={idx} delay={idx * 0.1}>
                            <div className="relative p-8 rounded-3xl bg-gradient-to-br from-white/[0.03] to-transparent border border-white/10 hover:border-orange-500/40 transition-all duration-500 group h-full hover:shadow-2xl hover:shadow-orange-500/10 hover:-translate-y-2">
                                {/* Hover Glow Effect */}
                                <div className="absolute inset-0 bg-gradient-to-br from-orange-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-3xl" />

                                <div className="relative z-10">
                                    <div className="text-5xl mb-6 grayscale group-hover:grayscale-0 transition-all duration-500 transform group-hover:scale-110 group-hover:rotate-6">
                                        {prob.icon}
                                    </div>
                                    <h3 className="text-xl font-semibold text-white mb-4 group-hover:text-orange-400 transition-colors duration-300">
                                        {prob.title}
                                    </h3>
                                    <p className="text-gray-400 text-sm leading-relaxed font-light group-hover:text-gray-300 transition-colors">
                                        {prob.desc}
                                    </p>
                                </div>

                                {/* Bottom Accent Line */}
                                <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-orange-500/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-b-3xl" />
                            </div>
                        </FadeUp>
                    ))}
                </div>



            </div>
        </section>
    );
}