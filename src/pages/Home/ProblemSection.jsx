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
        title: "Limited Career Paths",
        desc: "Traditional job markets are increasingly constrained, leaving high-potential individuals with limited avenues for true growth and ownership.",
        icon: "💼"
    },
    {
        title: "Execution Gaps",
        desc: "Most startups and businesses fail not due to a lack of vision, but because they cannot bridge the gap between idea and professional execution.",
        icon: "⚙️"
    },
    {
        title: "The Founder's Trap",
        desc: "Business owners often get stuck managing vendors, internal teams, and day-to-day chaos instead of focusing on strategic growth.",
        icon: "🕸️"
    },
    {
        title: "Scaling Paradox",
        desc: "Without robust systems, rapid growth often breaks internal operations, leading to decreased quality and systemic collapse.",
        icon: "📈"
    }
];

export default function ProblemSection() {
    return (
        <section className="py-24 bg-[#050505] relative overflow-hidden">
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

            <div className="max-w-7xl mx-auto px-6 lg:px-16 xl:px-20 relative z-10">
                <FadeUp>
                    <div className="text-center mb-20">
                        <span className="text-xs uppercase tracking-[0.3em] text-orange-500 font-bold mb-4 block">
                            The Problem We Solve
                        </span>
                        <h2 className="text-4xl md:text-5xl font-bold leading-tight text-white mb-6">
                            Why Most People and{" "}
                            <span className="block text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-orange-600 mt-1">
                                Businesses Struggle
                            </span>
                        </h2>
                        <div className="w-24 h-1 bg-orange-500 mx-auto rounded-full mb-6" />
                        <p className="text-gray-400 text-lg max-w-3xl mx-auto font-light">
                            The modern business reality is difficult. Effort alone is no longer enough to guarantee success in a fragmented market.
                        </p>
                    </div>
                </FadeUp>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-20">
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

                <FadeUp delay={0.5}>
                    <div className="max-w-3xl mx-auto p-8 md:p-10 rounded-[2rem] bg-[#0A0A0A] border border-white/10 text-center relative overflow-hidden group transition-all duration-500 shadow-xl shadow-black/40 hover:-translate-y-[2px] hover:border-orange-500/30">

                        {/* Background Pattern */}
                        <div className="absolute inset-0 opacity-[0.025] bg-[radial-gradient(#ffffff_1px,transparent_1px)] [background-size:28px_28px]" />

                        {/* Subtle Top Gradient */}
                        <div className="absolute top-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-orange-500/25 to-transparent" />

                        {/* Content */}
                        <div className="relative z-10">

                            <h3 className="text-xl md:text-3xl font-light text-white/90 leading-tight mb-2">
                                “People do not fail because they lack ideas.
                            </h3>

                            <h3 className="text-xl md:text-3xl leading-tight mb-6">
                                <span className="text-orange-500 font-semibold">
                                    They fail because they lack systems.
                                </span>
                                <span className="text-orange-500/50">”</span>
                            </h3>

                            {/* Divider */}
                            <div className="flex justify-center mb-6">
                                <div className="w-16 h-[1.5px] bg-gradient-to-r from-transparent via-orange-500 to-transparent rounded-full shadow-[0_0_12px_rgba(249,115,22,0.5)] group-hover:w-24 transition-all duration-500" />
                            </div>

                            {/* Zryoss Tagline */}
                            <p className="text-white/40 uppercase tracking-[0.3em] text-[11px] md:text-[13px] font-semibold">
                                Business execution, unified under one operating system
                            </p>
                        </div>

                        {/* Decorative Glows */}
                        <div className="absolute -top-32 -right-32 w-56 h-56 bg-orange-500/10 blur-[100px] rounded-full pointer-events-none" />
                        <div className="absolute -bottom-32 -left-32 w-56 h-56 bg-orange-500/10 blur-[100px] rounded-full pointer-events-none" />

                    </div>
                </FadeUp>

            </div>
        </section>
    );
}