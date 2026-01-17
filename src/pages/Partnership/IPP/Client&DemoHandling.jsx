import React, { useState, useEffect, useRef } from 'react';
import {
    Users,
    MonitorPlay,
    MessageSquare,
    ShieldCheck,
    Zap,
    Briefcase,
    Headphones,
    CheckCircle2,
    ArrowRight,
    Presentation,
    PcCase
} from 'lucide-react';

/* --- Hooks & Utility Components --- */

const useScrollVisibility = (threshold = 0.1) => {
    const [isVisible, setIsVisible] = useState(false);
    const ref = useRef(null);

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setIsVisible(true);
                }
            },
            { threshold }
        );
        if (ref.current) observer.observe(ref.current);
        return () => observer.disconnect();
    }, [threshold]);

    return [ref, isVisible];
};

const AnimatedSection = ({ children, delay = 0, className = "" }) => {
    const [ref, isVisible] = useScrollVisibility(0.1);

    return (
        <div
            ref={ref}
            className={`transform transition-all duration-1000 ease-out ${className}`}
            style={{
                opacity: isVisible ? 1 : 0,
                transform: isVisible ? 'translateY(0)' : 'translateY(40px)',
                transitionDelay: `${delay}ms`
            }}
        >
            {children}
        </div>
    );
};

export default function ClientHandlingDemo() {
    const features = [
        {
            title: "Expert Demo Assistance",
            icon: Presentation,
            desc: "Don't sell alone. Our product experts join your sales calls to handle complex technical demos and Q&A sessions, tailored to your prospect's industry.",
            points: ["Live technical walkthroughs", "Industry-specific use cases", "Handling technical objections", "White-labeled support"]
        },
        {
            title: "Pre-Configured Environments",
            icon: MonitorPlay,
            desc: "Instant access to industry-specific sandbox environments. Show your clients a fully working system populated with relevant data, not just an empty shell.",
            points: ["Vertical-specific data sets", "Zero-setup demo instances", "Custom branding options", "24/7 Availability"]
        },
        {
            title: "Proposal & RFP Support",
            icon: FileTextIcon,
            desc: "Winning big contracts requires precise technical documentation. We help you draft technical responses, security questionnaires, and scope of work documents.",
            points: ["Technical proposal writing", "Security compliance answers", "Scope definition assistance", "Competitive differentiation"]
        },
        {
            title: "Technical Client Onboarding",
            icon: RocketIcon,
            desc: "Once you close the deal, we ensure the client is set up for success. Our team handles data migration, system configuration, and user training.",
            points: ["Data migration support", "System configuration", "User training sessions", "Go-live assistance"]
        }
    ];

    return (
        <div className="min-h-screen bg-[#050505] text-white font-sans selection:bg-orange-600/30">
            {/* Background Ambience */}
            <div className="fixed inset-0 pointer-events-none z-0">
                <div className="absolute top-[-20%] right-[-10%] w-[800px] h-[800px] bg-orange-600/5 rounded-full blur-[120px]" />
                <div className="absolute bottom-[-10%] left-[-10%] w-[600px] h-[600px] bg-blue-600/5 rounded-full blur-[100px]" />
            </div>

            {/* Hero Section */}
            <section className="relative min-h-[80vh] flex items-center justify-center px-6 overflow-hidden">
                <div className="max-w-7xl mx-auto relative z-10 w-full text-center">
                    <AnimatedSection>
                        <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/5 backdrop-blur-sm border border-white/10 rounded-full mb-8 hover:bg-white/10 transition-colors cursor-default">
                            <span className="w-2 h-2 rounded-full bg-orange-500 animate-pulse" />
                            <span className="text-xs font-semibold tracking-wide uppercase text-neutral-300">Included in IPP Partnership</span>
                        </div>

                        <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold mb-8 leading-[0.95] tracking-tight">
                            Client Handling <br />
                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-500 to-amber-500">
                                & Demo Support
                            </span>
                        </h1>

                        <p className="text-xl md:text-2xl text-neutral-400 mb-10 leading-relaxed max-w-3xl mx-auto font-light">
                            You own the relationship. We power the conversation. <br className="hidden md:block" />
                            Leverage Zryoss technical experts to close deals with confidence.
                        </p>

                        <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
                            <div className="px-8 py-4 bg-white/5 border border-white/10 rounded-2xl flex items-center gap-4 text-left">
                                <div className="p-2 bg-orange-500/10 rounded-lg text-orange-500">
                                    <Briefcase size={24} />
                                </div>
                                <div>
                                    <div className="text-sm text-neutral-400">Role</div>
                                    <div className="font-bold text-white">Sales & Relationship</div>
                                </div>
                            </div>
                            <div className="px-8 py-4 bg-white/5 border border-white/10 rounded-2xl flex items-center gap-4 text-left">
                                <div className="p-2 bg-blue-500/10 rounded-lg text-blue-500">
                                    <PcCase size={24} />
                                </div>
                                <div>
                                    <div className="text-sm text-neutral-400">Support</div>
                                    <div className="font-bold text-white">Technical & Demos</div>
                                </div>
                            </div>
                        </div>
                    </AnimatedSection>
                </div>
            </section>

            {/* The Challenge Section */}
            <section className="py-24 px-6 relative z-10 bg-neutral-900/30 border-y border-white/5">
                <div className="max-w-7xl mx-auto">
                    <div className="grid lg:grid-cols-2 gap-16 items-center">
                        <AnimatedSection>
                            <h2 className="text-3xl md:text-5xl font-bold mb-8 leading-tight">
                                Sales Are Lost in <br />
                                <span className="text-orange-500">Technical Details</span>
                            </h2>
                            <p className="text-neutral-400 text-lg mb-8 leading-relaxed">
                                Many partners excel at networking and relationship building but struggle with deep technical questions, complex configurations, or product demonstrations. This can stall deals or erode trust.
                            </p>
                            <p className="text-white text-xl font-medium border-l-4 border-orange-500 pl-6 py-2 bg-white/5 rounded-r-lg">
                                Zryoss bridges this gap by acting as your technical pre-sales engineering team.
                            </p>
                        </AnimatedSection>

                        <AnimatedSection delay={200}>
                            <div className="bg-black/40 border border-white/10 rounded-3xl p-8 hover:border-orange-500/30 transition-colors">
                                <h3 className="text-2xl font-bold mb-6">Our Support Covers</h3>
                                <div className="space-y-4">
                                    {[
                                        "Complex Product Walkthroughs",
                                        "Answering Technical Objections",
                                        "Security & Compliance Queires",
                                        "Custom Solution Mapping",
                                        "Integration Capabilities"
                                    ].map((item, i) => (
                                        <div key={i} className="flex items-center gap-4 p-3 rounded-xl bg-white/5">
                                            <CheckCircle2 className="text-orange-500" size={20} />
                                            <span className="text-lg text-neutral-200">{item}</span>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </AnimatedSection>
                    </div>
                </div>
            </section>

            {/* Support Features Grid */}
            <section className="py-24 px-6 relative z-10">
                <div className="max-w-7xl mx-auto">
                    <AnimatedSection className="mb-20 text-center">
                        <h2 className="text-4xl md:text-5xl font-bold mb-4">Comprehensive Sales Enablement</h2>
                        <p className="text-neutral-400">Everything you need to move a prospect from "Interested" to "Signed".</p>
                    </AnimatedSection>

                    <div className="grid md:grid-cols-2 gap-8">
                        {features.map((feature, i) => (
                            <AnimatedSection key={i} delay={i * 100}>
                                <div className="h-full bg-neutral-900/50 border border-white/5 p-8 rounded-3xl hover:bg-neutral-900 hover:border-orange-500/30 transition-all group">
                                    <div className="w-14 h-14 bg-orange-600/10 rounded-xl flex items-center justify-center text-orange-500 mb-6 group-hover:scale-110 transition-transform">
                                        <feature.icon size={28} />
                                    </div>
                                    <h3 className="text-2xl font-bold text-white mb-4">{feature.title}</h3>
                                    <p className="text-neutral-400 mb-6 leading-relaxed">{feature.desc}</p>
                                    <ul className="space-y-3">
                                        {feature.points.map((point, idx) => (
                                            <li key={idx} className="flex items-center gap-2 text-neutral-300 text-sm">
                                                <div className="w-1.5 h-1.5 rounded-full bg-orange-500" />
                                                {point}
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            </AnimatedSection>
                        ))}
                    </div>
                </div>
            </section>

            {/* Engagement Model */}
            <section className="py-24 px-6 bg-[#0a0a0a]">
                <div className="max-w-7xl mx-auto">
                    <div className="bg-gradient-to-br from-neutral-900 to-black border border-white/10 rounded-[2.5rem] p-10 md:p-16 relative overflow-hidden">
                        <div className="relative z-10 grid lg:grid-cols-2 gap-12">
                            <div>
                                <h2 className="text-3xl md:text-4xl font-bold mb-6">How We Engage</h2>
                                <p className="text-neutral-400 text-lg mb-8">
                                    We adapt to your preferred sales style. Whether you want us in the spotlight or behind the scenes.
                                </p>
                                <div className="space-y-6">
                                    <div className="flex gap-4">
                                        <div className="p-3 bg-white/5 rounded-xl h-fit">
                                            <Users className="text-white" size={24} />
                                        </div>
                                        <div>
                                            <h4 className="text-xl font-bold text-white mb-2">"As Zryoss"</h4>
                                            <p className="text-neutral-400 text-sm">
                                                We introduce ourselves as the technical partner/vendor powering your solution. Best for transparency and large enterprise deals.
                                            </p>
                                        </div>
                                    </div>
                                    <div className="flex gap-4">
                                        <div className="p-3 bg-white/5 rounded-xl h-fit">
                                            <ShieldCheck className="text-white" size={24} />
                                        </div>
                                        <div>
                                            <h4 className="text-xl font-bold text-white mb-2">"White-Label Technical Team"</h4>
                                            <p className="text-neutral-400 text-sm">
                                                We join as "Your Company's Technical Team". Best for maintaining a unified brand front during the sales process.
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="flex items-center justify-center">
                                <div className="w-full max-w-sm bg-white/5 border border-white/10 rounded-2xl p-6 backdrop-blur-sm">
                                    <div className="flex items-center justify-between mb-6 border-b border-white/10 pb-4">
                                        <span className="text-sm text-neutral-400">Meeting Request</span>
                                        <span className="text-xs px-2 py-1 rounded bg-green-500/20 text-green-400">Confirmed</span>
                                    </div>
                                    <div className="flex items-center gap-4 mb-4">
                                        <div className="w-10 h-10 rounded-full bg-orange-500 flex items-center justify-center text-white font-bold">You</div>
                                        <div className="flex-1">
                                            <div className="h-2 bg-white/20 rounded w-3/4 mb-2"></div>
                                            <div className="h-2 bg-white/10 rounded w-1/2"></div>
                                        </div>
                                    </div>
                                    <div className="flex items-center gap-4 mb-4 pl-8 relative">
                                        <div className="absolute left-3 top-[-20px] bottom-6 w-0.5 bg-white/10 border-l-2 border-dashed border-white/20"></div>
                                        <div className="w-10 h-10 rounded-full bg-blue-600 flex items-center justify-center text-white font-bold">Z</div>
                                        <div className="flex-1">
                                            <div className="text-sm text-white font-medium">Zryoss Expert</div>
                                            <div className="text-xs text-neutral-400">Technical Demo Lead</div>
                                        </div>
                                    </div>
                                    <div className="flex items-center gap-4">
                                        <div className="w-10 h-10 rounded-full bg-neutral-700 flex items-center justify-center text-white font-bold">C</div>
                                        <div className="flex-1">
                                            <div className="text-sm text-white font-medium">Client</div>
                                            <div className="text-xs text-neutral-400">Decision Maker</div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* CTA */}
            <section className="py-32 px-6 bg-[#080808] border-t border-white/5 text-center">
                <div className="max-w-4xl mx-auto">
                    <AnimatedSection>
                        <h2 className="text-4xl md:text-6xl font-bold mb-8">
                            Sell With <br />
                            <span className="text-orange-500">Confidence.</span>
                        </h2>
                        <p className="text-xl text-neutral-400 mb-12">
                            Stop worrying about the technical demo. Focus on the relationship and the close. We've got the tech covered.
                        </p>

                        <div className="flex flex-col sm:flex-row gap-4 justify-center">
                            <button className="px-8 py-4 bg-orange-600 hover:bg-orange-500 text-white font-bold rounded-full transition-all">
                                Become a Partner
                            </button>
                            <button className="px-8 py-4 bg-white/5 hover:bg-white/10 text-white font-medium rounded-full transition-all border border-white/10">
                                Contact Sales Support
                            </button>
                        </div>
                    </AnimatedSection>
                </div>
            </section>
        </div>
    );
}

// Icons placeholders for the ones not imported from top if needed, 
// but I am importing them. except FileTextIcon and RocketIcon which I need to map.
// Actually I missed importing specific icons used in the features array.
// Fixing imports:
const FileTextIcon = ({ size }) => (
    <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M14.5 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7.5L14.5 2z" /><polyline points="14 2 14 8 20 8" /><line x1="16" y1="13" x2="8" y2="13" /><line x1="16" y1="17" x2="8" y2="17" /><polyline points="10 9 9 9 8 9" /></svg>
);
const RocketIcon = ({ size }) => (
    <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M4.5 16.5c-1.5 1.26-2 5-2 5s3.74-.5 5-2c.71-.84.7-2.13-.09-2.91a2.18 2.18 0 0 0-2.91-.09z" /><path d="m12 15-3-3a22 22 0 0 1 2-3.95A12.88 12.88 0 0 1 22 2c0 2.72-.78 7.5-6 11a22.35 22.35 0 0 1-4 2z" /><path d="M9 12H4s.55-3.03 2-4c1.62-1.08 5 0 5 0" /><path d="M12 15v5s3.03-.55 4-2c1.08-1.62 0-5 0-5" /></svg>
);
