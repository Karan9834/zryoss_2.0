import React, { useEffect } from "react";
import {
    GraduationCap,
    BookOpen,
    School,
    Users,
    MonitorPlay,
    Code,
    Rocket,
    ShieldCheck,
    TrendingUp,
    Target,
    CheckCircle2,
    ArrowRight,
    Monitor,
    Layout,
    Presentation,
    Building2,
    Settings,
    AlertTriangle
} from "lucide-react";
import { Link } from "react-router-dom";

const Education = () => {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <div className="min-h-screen bg-[#050505] text-white selection:bg-orange-500/30 font-sans">

            {/* Hero Section */}
            <section className="relative pt-32 pb-20 overflow-hidden">
                {/* Background Effects */}
                <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
                    <div className="absolute top-[-10%] right-[-5%] w-[600px] h-[600px] bg-orange-600/10 rounded-full blur-[120px]" />
                    <div className="absolute bottom-[10%] left-[-10%] w-[400px] h-[400px] bg-blue-600/5 rounded-full blur-[100px]" />
                </div>

                <div className="max-w-7xl mx-auto px-6 relative z-10">
                    <div className="grid lg:grid-cols-2 gap-12 items-center">
                        {/* Left Column: Content */}
                        <div>
                            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-orange-500/30 bg-orange-500/10 text-orange-400 text-sm font-medium mb-6">
                                <GraduationCap size={14} />
                                Powered by Edulinkers
                            </div>
                            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white leading-[1.15] tracking-tight mb-5">
                                Education & <br />
                                <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-500 to-red-500">
                                    EdTech
                                </span> Solutions
                            </h1>
                            <h2 className="text-2xl text-white/80 font-medium mb-6">
                                Scalable Education Technology Built for Institutions, Not Experiments
                            </h2>
                            <p className="text-xl text-gray-400 leading-relaxed mb-10">
                                The Education & EdTech Solutions offered by Zryoss are designed to help educational institutions digitize operations, improve learning delivery, and scale efficiently—without building technology teams or managing unreliable vendors.
                            </p>

                            <div className="p-6 border border-white/10 bg-white/5 rounded-2xl backdrop-blur-sm inline-block w-full">
                                <p className="text-lg text-gray-200">
                                    Execution is delivered through <span className="text-white font-bold">Edulinkers</span>, a specialized education technology brand within the Zryoss ecosystem.
                                </p>
                            </div>
                        </div>

                        {/* Right Column: Image */}
                        <div className="relative mt-10 lg:mt-0">
                            <div className="absolute inset-0 bg-gradient-to-r from-orange-500/20 to-blue-600/20 blur-3xl rounded-3xl transform rotate-3" />
                            <img
                                src="/solution-hero-images/Education.jpg"
                                alt="Education & EdTech Solutions"
                                className="relative rounded-3xl shadow-2xl border border-white/10 transform hover:scale-[1.02] transition-transform duration-500 object-cover w-full h-auto aspect-[4/3]"
                            />
                        </div>
                    </div>
                </div>
            </section>

            {/* The Challenge Section */}
            <section className="py-24 bg-[#0a0a0a]">
                <div className="max-w-7xl mx-auto px-6">
                    <div className="flex flex-col md:flex-row gap-16">
                        <div className="md:w-1/3">
                            <h2 className="text-3xl font-bold mb-6">The Real Problem in <br /> Education Technology</h2>
                            <p className="text-gray-400 text-lg mb-8">
                                Most schools and institutes struggle with disconnected tools and poor adoption.
                            </p>
                            <div className="h-1 w-20 bg-gradient-to-r from-orange-500 to-red-500 rounded-full"></div>
                        </div>

                        <div className="md:w-2/3 grid grid-cols-1 sm:grid-cols-2 gap-4">
                            {[
                                "Multiple disconnected software tools",
                                "Poor adoption by teachers and staff",
                                "Expensive custom development",
                                "Apps that don’t scale beyond pilot stage",
                                "Lack of long-term technical support"
                            ].map((problem, idx) => (
                                <div key={idx} className="p-5 rounded-2xl bg-[#0f0f0f] border border-red-500/10 flex items-start gap-4 hover:bg-[#121212] transition-colors">
                                    <AlertTriangle className="text-red-500 shrink-0 mt-1" size={20} />
                                    <span className="text-gray-300">{problem}</span>
                                </div>
                            ))}

                            <div className="p-5 rounded-2xl bg-gradient-to-br from-gray-900 to-black border border-white/10 flex items-center justify-center text-center col-span-1 sm:col-span-2">
                                <p className="text-white italic">
                                    "Zryoss solves this by delivering ready, system-governed education platforms that work in real institutional environments."
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Differentiation Section */}
            <section className="py-24 bg-[#050505] relative">
                <div className="max-w-7xl mx-auto px-6">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl md:text-5xl font-bold mb-6">What Makes Zryoss <br /> EdTech Solutions Different</h2>
                        <p className="text-xl text-gray-400">
                            Zryoss does not sell random education apps.<br />
                            It delivers <span className="text-white font-semibold">institution-ready education systems</span>.
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                        {[
                            {
                                icon: <Layout size={24} />,
                                title: "Academic Workflows",
                                desc: "Technology aligns with academic workflows."
                            },
                            {
                                icon: <Users size={24} />,
                                title: "Easy Adoption",
                                desc: "Platforms are easy to adopt and manage by staff."
                            },
                            {
                                icon: <Settings size={24} />,
                                title: "Centralized Support",
                                desc: "Execution is centrally supported."
                            },
                            {
                                icon: <TrendingUp size={24} />,
                                title: "Seamless Scaling",
                                desc: "Scaling does not require rebuilding."
                            }
                        ].map((item, i) => (
                            <div key={i} className="p-8 rounded-3xl border border-white/10 bg-[#0a0a0a] hover:border-orange-500/30 transition-all group">
                                <div className="w-12 h-12 rounded-full bg-orange-500/10 flex items-center justify-center text-orange-500 mb-6 group-hover:scale-110 transition-transform">
                                    {item.icon}
                                </div>
                                <h3 className="text-xl font-bold mb-3">{item.title}</h3>
                                <p className="text-gray-400">{item.desc}</p>
                            </div>
                        ))}
                    </div>

                    <div className="mt-12 text-center">
                        <div className="inline-block p-4 rounded-xl border border-orange-500/20 bg-gradient-to-br from-orange-900/10 to-transparent">
                            <p className="text-white text-lg font-medium">Education technology becomes operational infrastructure, not a side project.</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Core Offerings */}
            <section className="py-20 bg-[#080808]">
                <div className="max-w-7xl mx-auto px-6">
                    <h2 className="text-3xl md:text-4xl font-bold mb-12">Core Education & EdTech Offerings</h2>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">

                        {/* School Management */}
                        <div className="group p-8 rounded-3xl bg-[#0e0e0e] border border-white/5 hover:border-orange-500/30 transition-colors">
                            <School className="text-orange-500 mb-6" size={40} />
                            <h3 className="text-2xl font-bold mb-4">School & Institute Management Systems</h3>
                            <ul className="space-y-3 text-gray-400">
                                <li className="flex items-start gap-2"><span className="text-orange-500 mt-1">•</span> Student information systems</li>
                                <li className="flex items-start gap-2"><span className="text-orange-500 mt-1">•</span> Attendance and academic management</li>
                                <li className="flex items-start gap-2"><span className="text-orange-500 mt-1">•</span> Fee and administration modules</li>
                                <li className="flex items-start gap-2"><span className="text-orange-500 mt-1">•</span> Parent and student communication systems</li>
                            </ul>
                        </div>

                        {/* LMS */}
                        <div className="group p-8 rounded-3xl bg-[#0e0e0e] border border-white/5 hover:border-orange-500/30 transition-colors">
                            <BookOpen className="text-orange-500 mb-6" size={40} />
                            <h3 className="text-2xl font-bold mb-4">Learning Management Systems (LMS)</h3>
                            <ul className="space-y-3 text-gray-400">
                                <li className="flex items-start gap-2"><span className="text-orange-500 mt-1">•</span> Online and hybrid learning platforms</li>
                                <li className="flex items-start gap-2"><span className="text-orange-500 mt-1">•</span> Course and content management</li>
                                <li className="flex items-start gap-2"><span className="text-orange-500 mt-1">•</span> Assignment, assessment, and tracking tools</li>
                                <li className="flex items-start gap-2"><span className="text-orange-500 mt-1">•</span> Teacher and student dashboards</li>
                            </ul>
                        </div>

                        {/* Coaching Platforms */}
                        <div className="group p-8 rounded-3xl bg-[#0e0e0e] border border-white/5 hover:border-orange-500/30 transition-colors">
                            <Presentation className="text-orange-500 mb-6" size={40} />
                            <h3 className="text-2xl font-bold mb-4">Coaching & Training Institute Platforms</h3>
                            <ul className="space-y-3 text-gray-400">
                                <li className="flex items-start gap-2"><span className="text-orange-500 mt-1">•</span> Batch and student management</li>
                                <li className="flex items-start gap-2"><span className="text-orange-500 mt-1">•</span> Online class and content delivery</li>
                                <li className="flex items-start gap-2"><span className="text-orange-500 mt-1">•</span> Test, mock, and evaluation systems</li>
                                <li className="flex items-start gap-2"><span className="text-orange-500 mt-1">•</span> Lead-to-enrollment workflows</li>
                            </ul>
                        </div>

                        {/* SaaS Products */}
                        <div className="group p-8 rounded-3xl bg-[#0e0e0e] border border-white/5 hover:border-orange-500/30 transition-colors">
                            <MonitorPlay className="text-orange-500 mb-6" size={40} />
                            <h3 className="text-2xl font-bold mb-4">Ready-Made SaaS EdTech Products</h3>
                            <ul className="space-y-3 text-gray-400">
                                <li className="flex items-start gap-2"><span className="text-orange-500 mt-1">•</span> Pre-built education platforms</li>
                                <li className="flex items-start gap-2"><span className="text-orange-500 mt-1">•</span> Subscription-based usage models</li>
                                <li className="flex items-start gap-2"><span className="text-orange-500 mt-1">•</span> Fast deployment with customization options</li>
                            </ul>
                        </div>

                        {/* Custom Software */}
                        <div className="group p-8 rounded-3xl bg-[#0e0e0e] border border-white/5 hover:border-orange-500/30 transition-colors">
                            <Code className="text-orange-500 mb-6" size={40} />
                            <h3 className="text-2xl font-bold mb-4">Custom Education Software</h3>
                            <ul className="space-y-3 text-gray-400">
                                <li className="flex items-start gap-2"><span className="text-orange-500 mt-1">•</span> Institution-specific workflows</li>
                                <li className="flex items-start gap-2"><span className="text-orange-500 mt-1">•</span> Integration with existing systems</li>
                                <li className="flex items-start gap-2"><span className="text-orange-500 mt-1">•</span> Scalable architecture for growth</li>
                            </ul>
                        </div>

                    </div>
                </div>
            </section>

            {/* Delivery Process */}
            <section className="py-24 relative overflow-hidden">
                <div className="max-w-7xl mx-auto px-6">
                    <h2 className="text-3xl md:text-4xl font-bold text-center mb-16">
                        How Zryoss Delivers <br /><span className="text-orange-500">Education Solutions</span>
                    </h2>

                    <div className="relative">
                        {/* Connecting Line (Desktop) */}
                        <div className="hidden md:block absolute top-12 left-0 w-full h-0.5 bg-gradient-to-r from-transparent via-orange-500/30 to-transparent" />

                        <div className="grid grid-cols-1 md:grid-cols-4 lg:grid-cols-7 gap-4 relative z-10">
                            {[
                                "Requirement Validation",
                                "Workflow Mapping",
                                "Platform Demo",
                                "Execution Routing",
                                "Customization & Deployment",
                                "Training & Adoption",
                                "Ongoing Support"
                            ].map((step, i) => (
                                <div key={i} className="flex flex-col items-center text-center group">
                                    <div className="w-20 h-20 rounded-full bg-[#111] border border-white/10 group-hover:border-orange-500 flex items-center justify-center font-bold text-2xl mb-6 z-10 shadow-lg transition-colors overflow-hidden relative">
                                        <span className="text-white group-hover:text-orange-500 transition-colors z-10">{i + 1}</span>
                                        <div className="absolute inset-0 bg-orange-500/10 opacity-0 group-hover:opacity-100 transition-opacity" />
                                    </div>
                                    <h3 className="text-sm font-bold text-white mb-2 px-2">{step}</h3>
                                </div>
                            ))}
                        </div>
                    </div>

                    <div className="mt-16 text-center">
                        <p className="text-lg text-gray-400">All delivery is managed through the Zryoss platform.</p>
                    </div>
                </div>
            </section>

            {/* Segments & Governance */}
            <section className="py-20 bg-[#0a0a0a]">
                <div className="max-w-7xl mx-auto px-6">
                    <div className="flex flex-col lg:flex-row items-center gap-16">
                        <div className="lg:w-1/2">
                            <h2 className="text-3xl md:text-4xl font-bold mb-6">Adoption, Support <br /> & <span className="text-orange-500">Governance</span></h2>
                            <p className="text-xl text-gray-400 mb-8">Institutions are supported continuously, not abandoned after launch.</p>

                            <div className="space-y-6">
                                {[
                                    "Simple onboarding and training",
                                    "Teacher and staff adoption support",
                                    "Platform stability and security",
                                    "Long-term system continuity"
                                ].map((item, i) => (
                                    <div key={i} className="flex items-center gap-4 p-4 rounded-xl bg-[#111] border border-white/5">
                                        <CheckCircle2 className="text-orange-500 shrink-0" />
                                        <span className="text-gray-200">{item}</span>
                                    </div>
                                ))}
                            </div>
                        </div>

                        <div className="lg:w-1/2 grid grid-cols-1 gap-4">
                            <div className="p-8 rounded-3xl bg-[#0f0f0f] border border-white/5">
                                <h3 className="text-xl font-bold mb-6 text-white text-center">Solutions for Different Segments</h3>
                                <div className="space-y-6">
                                    <div className="border-l-2 border-orange-500 pl-4">
                                        <h4 className="font-bold text-white">Schools</h4>
                                        <p className="text-sm text-gray-400">End-to-end school management, parent-teacher comms, digital operations.</p>
                                    </div>
                                    <div className="border-l-2 border-orange-500 pl-4">
                                        <h4 className="font-bold text-white">Colleges & Universities</h4>
                                        <p className="text-sm text-gray-400">Student lifecycle management, department workflows, scalable platforms.</p>
                                    </div>
                                    <div className="border-l-2 border-orange-500 pl-4">
                                        <h4 className="font-bold text-white">Coaching & Training Institutes</h4>
                                        <p className="text-sm text-gray-400">Online + offline batch systems, lead-to-admission, performance tracking.</p>
                                    </div>
                                    <div className="border-l-2 border-orange-500 pl-4">
                                        <h4 className="font-bold text-white">EdTech Startups</h4>
                                        <p className="text-sm text-gray-400">SaaS platform development, MVP to scale-ready systems, technology execution.</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Scalability */}
            <section className="py-24">
                <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-12">
                    <div>
                        <h3 className="text-2xl font-bold mb-6 text-orange-500">Scalable Education Without Burden</h3>
                        <p className="text-gray-300 mb-6 font-medium text-lg">As institutions grow, your technology should grow with you effortlessly.</p>
                        <ul className="space-y-3">
                            {[
                                "Student volume scales easily",
                                "New modules are activated as needed",
                                "Performance remains stable"
                            ].map((item, i) => (
                                <li key={i} className="flex items-center gap-3 text-gray-400">
                                    <TrendingUp size={16} className="text-orange-500" />
                                    {item}
                                </li>
                            ))}
                        </ul>
                        <p className="mt-8 text-gray-400 italic">"You don’t replace systems every year. You grow on one platform."</p>
                    </div>

                    <div>
                        <div className="p-8 rounded-3xl bg-[#0f0f0f] border border-white/5 h-full flex flex-col justify-center">
                            <h3 className="text-2xl font-bold mb-6 text-white">More Than Software. <br /> <span className="text-orange-500">An Education System.</span></h3>
                            <ul className="space-y-4">
                                <li className="flex items-center gap-3 text-gray-300">
                                    <Target size={18} className="text-orange-500" />
                                    Improve operational efficiency
                                </li>
                                <li className="flex items-center gap-3 text-gray-300">
                                    <Target size={18} className="text-orange-500" />
                                    Enhance learning delivery
                                </li>
                                <li className="flex items-center gap-3 text-gray-300">
                                    <Target size={18} className="text-orange-500" />
                                    Reduce administrative load
                                </li>
                                <li className="flex items-center gap-3 text-gray-300">
                                    <Target size={18} className="text-orange-500" />
                                    Support long-term institutional growth
                                </li>
                            </ul>
                            <p className="mt-8 text-gray-400 text-sm">Because education needs reliability, not experiments.</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Bottom CTA */}
            <section className="py-20 relative text-center">
                <div className="max-w-4xl mx-auto px-6">
                    <div className="p-10 rounded-3xl bg-gradient-to-r from-zinc-900 via-zinc-900 to-black border border-white/10 inline-block text-left w-full shadow-2xl">
                        <div className="flex flex-col md:flex-row justify-between items-center gap-8">
                            <div>
                                <h3 className="text-3xl font-bold text-white mb-2">One Education Partner.</h3>
                                <h3 className="text-3xl font-bold text-orange-500 mb-2">One Operating System.</h3>
                                <p className="text-gray-400 mt-4">You lead education. Zryoss powers the system.</p>
                            </div>
                            <Link to="/contact" className="whitespace-nowrap px-8 py-4 bg-orange-600 hover:bg-orange-500 text-white rounded-full font-bold text-lg transition shadow-[0_0_25px_rgba(234,88,12,0.4)] flex items-center gap-2">
                                Get Started <ArrowRight size={20} />
                            </Link>
                        </div>
                    </div>
                </div>
            </section>

        </div>
    );
};

export default Education;
