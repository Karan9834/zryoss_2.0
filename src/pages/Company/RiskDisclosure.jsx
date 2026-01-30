import React from "react";
import FadeUp from "../../components/animations/FadeUp";
import {
    ShieldAlert,
    AlertTriangle,
    TrendingDown,
    Activity,
    Users,
    Building2,
    Server,
    Scale,
    FileWarning,
    RefreshCw,
    CheckCircle2,
    Info,
} from "lucide-react";

export default function RiskDisclosure() {
    return (
        <main className="bg-[#050505] text-white overflow-hidden font-sans">
            {/* ================= HERO SECTION ================= */}
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
                            <FadeUp>
                                <div className="inline-block px-4 py-1.5 mb-6 rounded-full border border-orange-500/30 bg-orange-500/10 text-orange-400 text-sm font-medium tracking-wide">
                                    Transparency Builds Trust
                                </div>
                                <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white leading-[1.15] tracking-tight mb-5">
                                    Risk Disclosure
                                </h1>
                                <p className="text-lg text-gray-300 mb-8 leading-relaxed max-w-lg">
                                    Clarity Reduces Risk. <br className="hidden md:block" />
                                    This page outlines potential risks, limitations, and responsibilities associated with
                                    operating businesses on the Zryoss platform.
                                </p>
                                <p className="text-sm text-gray-500">
                                    Zryoss believes informed decisions create stronger, sustainable partnerships.
                                </p>
                            </FadeUp>
                        </div>

                        {/* Right Column: Image */}
                        <div className="relative mt-10 lg:mt-0">
                            <FadeUp delay={0.2}>
                                <div className="absolute inset-0 bg-gradient-to-r from-orange-500/20 to-blue-600/20 blur-3xl rounded-3xl transform rotate-3" />
                                <img
                                    src="/company-hero-images/4.png"
                                    alt="Risk Disclosure"
                                    className="relative rounded-3xl shadow-2xl border border-white/10 transform hover:scale-[1.02] transition-transform duration-500 object-cover w-full h-auto aspect-[4/3]"
                                />
                            </FadeUp>
                        </div>
                    </div>
                </div>
            </section>

            {/* ================= NATURE OF THE PLATFORM ================= */}
            <section className="py-24 relative">
                <div className="max-w-7xl mx-auto px-6">
                    <FadeUp>
                        <div className="text-center mb-16">
                            <h2 className="text-3xl md:text-4xl font-bold mb-6">
                                Nature of the Platform
                            </h2>
                            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
                                Zryoss is a Business Operating System that provides:
                            </p>
                        </div>
                    </FadeUp>

                    <div className="grid md:grid-cols-4 gap-6">
                        {[
                            { title: "Execution Frameworks", icon: Activity },
                            { title: "Operational Governance", icon: Scale },
                            { title: "Delivery Management", icon: CheckCircle2 },
                            { title: "Platform-level Support", icon: Building2 },
                        ].map((item, i) => (
                            <FadeUp key={i} delay={i * 0.1}>
                                <div className="p-8 h-full rounded-2xl bg-[#0E0F12] border border-white/10 flex flex-col items-center text-center hover:border-orange-500/30 transition-all">
                                    <div className="w-12 h-12 rounded-full bg-orange-500/10 flex items-center justify-center mb-4 text-orange-500">
                                        <item.icon size={24} />
                                    </div>
                                    <h3 className="font-semibold text-lg">{item.title}</h3>
                                </div>
                            </FadeUp>
                        ))}
                    </div>

                    <FadeUp delay={0.4}>
                        <div className="mt-12 text-center p-6 bg-orange-500/5 rounded-xl border border-orange-500/10 max-w-3xl mx-auto">
                            <p className="text-orange-200 font-medium">
                                Zryoss does not guarantee business outcomes, revenue, or success.
                                Results depend on market conditions, effort, strategy, and execution volume.
                            </p>
                        </div>
                    </FadeUp>
                </div>
            </section>

            {/* ================= NO GUARANTEED INCOME ================= */}
            <section className="py-24 bg-[#0A0A0A] border-y border-white/5">
                <div className="max-w-5xl mx-auto px-6 text-center">
                    <FadeUp>
                        <div className="inline-flex items-center justify-center p-4 bg-red-500/10 rounded-full mb-6">
                            <AlertTriangle className="w-8 h-8 text-red-500" />
                        </div>
                        <h2 className="text-3xl md:text-5xl font-bold mb-8">
                            No Guaranteed Income or Outcomes
                        </h2>
                        <div className="space-y-4 text-lg text-gray-300 mb-12">
                            <p>Operating through Zryoss involves real business activity and therefore real business risk.</p>
                            <ul className="flex flex-col gap-3 items-center">
                                <li className="flex items-center gap-2"><span className="w-1.5 h-1.5 rounded-full bg-red-500" /> There are no guaranteed earnings</li>
                                <li className="flex items-center gap-2"><span className="w-1.5 h-1.5 rounded-full bg-red-500" /> There is no assured profitability</li>
                                <li className="flex items-center gap-2"><span className="w-1.5 h-1.5 rounded-full bg-red-500" /> Outcomes vary based on multiple external and internal factors</li>
                            </ul>
                        </div>
                        <p className="text-gray-500 italic">
                            Zryoss provides systems and execution support, not financial guarantees.
                        </p>
                    </FadeUp>
                </div>
            </section>

            {/* ================= MARKET & OPERATIONAL RISKS ================= */}
            <section className="py-24">
                <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-12">
                    {/* Market Risks */}
                    <FadeUp>
                        <div className="h-full p-10 rounded-3xl bg-[#0E0F12] border border-white/10 relative overflow-hidden group hover:border-orange-500/20 transition-all">
                            <div className="absolute top-0 right-0 w-40 h-40 bg-orange-500/5 rounded-full blur-3xl group-hover:bg-orange-500/10 transition-colors" />
                            <div className="flex items-center gap-4 mb-8">
                                <TrendingDown className="w-8 h-8 text-orange-500" />
                                <h3 className="text-2xl font-bold">Market & Business Risks</h3>
                            </div>
                            <ul className="space-y-4 text-gray-400 mb-8">
                                {[
                                    "Market demand fluctuations",
                                    "Competitive pressure",
                                    "Client acquisition challenges",
                                    "Pricing and margin changes",
                                    "Industry-specific regulations"
                                ].map((risk, i) => (
                                    <li key={i} className="flex items-start gap-3">
                                        <span className="text-orange-500 mt-1">•</span>
                                        {risk}
                                    </li>
                                ))}
                            </ul>
                            <p className="text-sm text-gray-500 border-t border-white/5 pt-6">
                                Zryoss mitigates execution risk through systems, but market risk cannot be eliminated.
                            </p>
                        </div>
                    </FadeUp>

                    {/* Operational Risks */}
                    <FadeUp delay={0.2}>
                        <div className="h-full p-10 rounded-3xl bg-[#0E0F12] border border-white/10 relative overflow-hidden group hover:border-orange-500/20 transition-all">
                            <div className="absolute top-0 right-0 w-40 h-40 bg-blue-500/5 rounded-full blur-3xl group-hover:bg-blue-500/10 transition-colors" />
                            <div className="flex items-center gap-4 mb-8">
                                <Activity className="w-8 h-8 text-blue-500" />
                                <h3 className="text-2xl font-bold">Operational Dependency Risk</h3>
                            </div>
                            <p className="text-gray-300 mb-4">While Zryoss manages backend execution:</p>
                            <ul className="space-y-4 text-gray-400 mb-8">
                                {[
                                    "Service delivery depends on defined processes",
                                    "Timelines depend on scope clarity and approvals",
                                    "Execution capacity scales with demand",
                                    "Delays due to scope changes or external dependencies"
                                ].map((risk, i) => (
                                    <li key={i} className="flex items-start gap-3">
                                        <span className="text-blue-500 mt-1">•</span>
                                        {risk}
                                    </li>
                                ))}
                            </ul>
                            <p className="text-sm text-gray-500 border-t border-white/5 pt-6">
                                Zryoss addresses these through governance and escalation, but timelines may vary.
                            </p>
                        </div>
                    </FadeUp>
                </div>
            </section>

            {/* ================= PARTNER RESPONSIBILITIES ================= */}
            <section className="py-24 bg-[#0A0A0A] border-y border-white/5">
                <div className="max-w-4xl mx-auto px-6">
                    <FadeUp>
                        <div className="text-center mb-12">
                            <h2 className="text-3xl font-bold mb-4">Partner Responsibilities & Conduct</h2>
                            <p className="text-gray-400">IPP and BPP partners act as brand representatives.</p>
                        </div>
                    </FadeUp>

                    <div className="grid md:grid-cols-2 gap-8">
                        <FadeUp delay={0.1}>
                            <div className="p-8 rounded-xl bg-black border border-white/10 h-full">
                                <h4 className="text-lg font-semibold text-green-400 mb-4 flex items-center gap-2">
                                    <CheckCircle2 size={18} /> Responsibilities
                                </h4>
                                <ul className="space-y-3">
                                    {[
                                        "Ethical representation of services",
                                        "Accurate communication with clients",
                                        "Compliance with platform guidelines",
                                        "Adherence to approved scopes and pricing"
                                    ].map((item, i) => (
                                        <li key={i} className="text-gray-300 text-sm flex items-start gap-2">
                                            <span className="text-white/20 mt-1">→</span> {item}
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </FadeUp>

                        <FadeUp delay={0.2}>
                            <div className="p-8 rounded-xl bg-black border border-white/10 h-full">
                                <h4 className="text-lg font-semibold text-red-400 mb-4 flex items-center gap-2">
                                    <AlertTriangle size={18} /> Consequences
                                </h4>
                                <p className="text-sm text-gray-400 mb-4">Misrepresentation or deviation may result in:</p>
                                <ul className="space-y-3">
                                    {[
                                        "Corrective action",
                                        "Suspension of platform access",
                                        "Termination of partnership, if required"
                                    ].map((item, i) => (
                                        <li key={i} className="text-gray-300 text-sm flex items-start gap-2">
                                            <span className="text-white/20 mt-1">→</span> {item}
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </FadeUp>
                    </div>
                </div>
            </section>

            {/* ================= OTHER RISKS GRID ================= */}
            <section className="py-24">
                <div className="max-w-7xl mx-auto px-6">
                    <div className="grid md:grid-cols-3 gap-8">
                        {/* Vendor Risks */}
                        <FadeUp>
                            <div className="p-8 rounded-2xl bg-[#0E0F12] border border-white/10 h-full hover:-translate-y-1 transition-transform duration-300">
                                <Users className="w-10 h-10 text-orange-500 mb-6" />
                                <h3 className="text-xl font-bold mb-4">Vendor & Third-Party Risks</h3>
                                <p className="text-sm text-gray-400 mb-6">
                                    Zryoss works with verified vendors, but performance may vary.
                                </p>
                                <ul className="space-y-2 mb-6">
                                    <li className="text-xs text-gray-300">• External service dependencies</li>
                                    <li className="text-xs text-gray-300">• Technology/supply disruptions</li>
                                </ul>
                                <div className="pt-4 border-t border-white/5">
                                    <p className="text-xs text-gray-500">Mitigated via: SLA enforcement, Vendor Governance, Alternate planning.</p>
                                </div>
                            </div>
                        </FadeUp>

                        {/* Tech Risks */}
                        <FadeUp delay={0.1}>
                            <div className="p-8 rounded-2xl bg-[#0E0F12] border border-white/10 h-full hover:-translate-y-1 transition-transform duration-300">
                                <Server className="w-10 h-10 text-orange-500 mb-6" />
                                <h3 className="text-xl font-bold mb-4">Technology & Data Risks</h3>
                                <p className="text-sm text-gray-400 mb-6">
                                    As with any technology platform, absolute immunity cannot be guaranteed.
                                </p>
                                <ul className="space-y-2 mb-6">
                                    <li className="text-xs text-gray-300">• Potential system downtime</li>
                                    <li className="text-xs text-gray-300">• Data security threats</li>
                                    <li className="text-xs text-gray-300">• Impact of upgrades on workflows</li>
                                </ul>
                                <div className="pt-4 border-t border-white/5">
                                    <p className="text-xs text-gray-500">Zryoss implements security practices and access controls.</p>
                                </div>
                            </div>
                        </FadeUp>

                        {/* Regulatory Risks */}
                        <FadeUp delay={0.2}>
                            <div className="p-8 rounded-2xl bg-[#0E0F12] border border-white/10 h-full hover:-translate-y-1 transition-transform duration-300">
                                <FileWarning className="w-10 h-10 text-orange-500 mb-6" />
                                <h3 className="text-xl font-bold mb-4">Regulatory Considerations</h3>
                                <p className="text-sm text-gray-400 mb-6">
                                    Businesses must comply with local laws and industry-specific regulations.
                                </p>
                                <ul className="space-y-2 mb-6">
                                    <li className="text-xs text-gray-300">• Compliance is mandatory</li>
                                    <li className="text-xs text-gray-300">• Regulatory environments change</li>
                                </ul>
                                <div className="pt-4 border-t border-white/5">
                                    <p className="text-xs text-gray-500">
                                        Operates through Kryoss Softech PL & Clink Consultancy Services PL to maintain discipline.
                                    </p>
                                </div>
                            </div>
                        </FadeUp>
                    </div>
                </div>
            </section>

            {/* ================= LEGAL & CHANGE ================= */}
            <section className="py-24 bg-[#0A0A0A] border-y border-white/5">
                <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-2 gap-16">
                    <FadeUp>
                        <h3 className="text-2xl font-bold mb-4">Limitation of Liability</h3>
                        <div className="space-y-4 text-gray-400">
                            <p>Zryoss provides operational systems and execution support but:</p>
                            <ul className="space-y-2 list-disc pl-5">
                                <li>Does not assume liability for indirect business losses</li>
                                <li>Does not guarantee client conversion or revenue outcomes</li>
                            </ul>
                            <p className="text-sm italic">Partners and clients are encouraged to make independent assessments before engagement.</p>
                        </div>
                    </FadeUp>

                    <FadeUp delay={0.2}>
                        <h3 className="text-2xl font-bold mb-4 flex items-center gap-3">
                            <RefreshCw size={24} className="text-orange-500" /> Change & Evolution Risk
                        </h3>
                        <div className="space-y-4 text-gray-400">
                            <p>Zryoss is a growing platform where:</p>
                            <ul className="space-y-2 list-disc pl-5">
                                <li>Processes may evolve</li>
                                <li>Offerings may be updated</li>
                                <li>Execution structures may be refined</li>
                            </ul>
                            <p className="text-sm italic">Changes are made to strengthen the system but may require adaptation from partners.</p>
                        </div>
                    </FadeUp>
                </div>
            </section>

            {/* ================= CLOSING sections ================= */}
            <section className="py-24 relative overflow-hidden">
                <div className="absolute inset-0 bg-[#050505]" />

                <div className="relative z-10 max-w-4xl mx-auto px-6 text-center">
                    {/* Decision Responsibility */}
                    <FadeUp>
                        <div className="mb-20">
                            <h2 className="text-3xl font-bold mb-6">Decision Responsibility</h2>
                            <p className="text-gray-300 mb-4">
                                By engaging with Zryoss, partners acknowledge business risks and clients accept execution dependencies.
                                All parties agree to operate within defined frameworks.
                            </p>
                            <span className="inline-block px-4 py-2 border border-white/20 rounded text-sm text-gray-400">
                                Participation is based on informed consent and shared responsibility.
                            </span>
                        </div>
                    </FadeUp>

                    {/* Commitment */}
                    <FadeUp delay={0.1}>
                        <div className="mb-20 grid md:grid-cols-2 gap-8 items-center bg-[#0E0F12] p-8 rounded-3xl border border-white/10 text-left">
                            <div>
                                <h3 className="text-2xl font-bold mb-4 text-white">Our Commitment to Risk Management</h3>
                                <p className="text-gray-400">Zryoss actively works to reduce execution risk, improve operational predictability, strengthen governance, and communicate transparently.</p>
                            </div>
                            <div className="flex items-center justify-center md:justify-end">
                                <div className="text-right">
                                    <p className="text-xl font-medium text-orange-500">Risk is managed through systems,</p>
                                    <p className="text-xl font-medium text-white">not promises.</p>
                                </div>
                            </div>
                        </div>
                    </FadeUp>

                    {/* Final Note */}
                    <FadeUp delay={0.2}>
                        <div className="max-w-2xl mx-auto">
                            <h4 className="text-white font-bold text-lg mb-4">Final Note</h4>
                            <p className="text-gray-400 mb-8">
                                Every business carries risk. The difference lies in how well that risk is managed.
                                Zryoss exists to reduce operational uncertainty—not to eliminate business reality.
                            </p>
                            <div className="text-xl md:text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-orange-400 to-orange-600">
                                Build responsibly. Operate transparently. Scale sustainably.
                            </div>
                        </div>
                    </FadeUp>
                </div>
            </section>
        </main>
    );
}
