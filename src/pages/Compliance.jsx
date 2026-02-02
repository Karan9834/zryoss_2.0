import React, { useEffect } from "react";
import {
    ShieldCheck,
    Scale,
    Users,
    Settings,
    Banknote,
    Lock,
    Handshake,
    AlertTriangle,
    Gavel,
    MessageSquare,
    RefreshCw,
    FileText
} from "lucide-react";
import FadeUp from "../components/animations/FadeUp";

const Compliance = () => {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    const sections = [
        {
            id: "1",
            title: "Regulatory Compliance Framework",
            icon: <Scale size={24} />,
            content: [
                {
                    text: "Operations are conducted in accordance with: Applicable national and local laws, Commercial, contractual, and digital regulations, Data protection and privacy requirements, Industry-specific compliance obligations. Continuous monitoring mechanisms are maintained to adapt to regulatory changes."
                }
            ]
        },
        {
            id: "2",
            title: "Business Conduct & Ethical Standards",
            icon: <Users size={24} />,
            content: [
                {
                    text: "All stakeholders are expected to adhere to high standards of: Ethical business conduct, Professional integrity, Fair dealing and transparency, Responsible representation of services. Misrepresentation, deceptive practices, or unethical conduct are strictly prohibited."
                }
            ]
        },
        {
            id: "3",
            title: "Platform & Operational Compliance",
            icon: <Settings size={24} />,
            content: [
                {
                    text: "Internal systems and processes are designed to ensure: Structured onboarding and authorization controls, Defined operational workflows, Clear accountability and role ownership, Documented execution and approval mechanisms. Operational compliance is reviewed periodically to maintain consistency and quality."
                }
            ]
        },
        {
            id: "4",
            title: "Financial & Commercial Compliance",
            icon: <Banknote size={24} />,
            content: [
                {
                    text: "Financial processes follow established governance standards including: Transparent service-based fee structures, Proper invoicing and documentation, Lawful accounting and reporting practices, No participation-based or outcome-guaranteed models. All commercial activities are aligned with legitimate business service delivery."
                }
            ]
        },
        {
            id: "5",
            title: "Data Protection & Privacy Compliance",
            icon: <Lock size={24} />,
            content: [
                {
                    text: "Information handling practices comply with: Applicable data protection laws, Confidentiality obligations, Secure storage and access control policies. Data is processed strictly for defined, lawful, and operationally necessary purposes."
                }
            ]
        },
        {
            id: "6",
            title: "Partner, Vendor & Third-Party Compliance",
            icon: <Handshake size={24} />,
            content: [
                {
                    text: "All partners, vendors, and service providers are required to: Follow contractual and confidentiality obligations, Comply with applicable legal and regulatory standards, Operate within defined service scope and quality benchmarks. Non-compliance may result in corrective action or termination."
                }
            ]
        },
        {
            id: "7",
            title: "Risk Management & Internal Controls",
            icon: <AlertTriangle size={24} />,
            content: [
                {
                    text: "A structured approach is maintained to: Identify operational and compliance risks, Implement preventive and corrective controls, Review system vulnerabilities, Maintain business continuity standards. Risk assessments are performed periodically."
                }
            ]
        },
        {
            id: "8",
            title: "Monitoring, Audit & Enforcement",
            icon: <Gavel size={24} />,
            content: [
                {
                    text: "Compliance is supported through: Internal monitoring mechanisms, Periodic audits and performance reviews, Corrective action protocols, Enforcement of policies and guidelines. Violations are addressed promptly and proportionately."
                }
            ]
        },
        {
            id: "9",
            title: "Reporting & Grievance Mechanism",
            icon: <MessageSquare size={24} />,
            content: [
                {
                    text: "Concerns related to compliance, ethics, or governance may be reported through official communication channels. All reports are: Handled confidentially, Reviewed objectively, Addressed within reasonable timelines. Retaliation against reporting individuals is not permitted."
                }
            ]
        },
        {
            id: "10",
            title: "Policy Updates & Governance Review",
            icon: <RefreshCw size={24} />,
            content: [
                {
                    text: "Compliance policies may be updated to reflect: Regulatory changes, Operational enhancements, Governance improvements. Continued engagement with the platform indicates acceptance of updated policies."
                }
            ]
        }
    ];

    return (
        <div className="min-h-screen bg-[#050505] text-white selection:bg-orange-500/30 font-sans">

            {/* Hero Section */}
            <section className="relative pt-32 pb-20 overflow-hidden">
                {/* Background Effects */}
                <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
                    <div className="absolute top-[-10%] right-[-5%] w-[600px] h-[600px] bg-orange-600/10 rounded-full blur-[120px]" />
                    <div className="absolute bottom-[10%] left-[-10%] w-[400px] h-[400px] bg-blue-600/5 rounded-full blur-[100px]" />
                </div>

                <div className="max-w-4xl mx-auto px-6 relative z-10 text-center">
                    <FadeUp>
                        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-orange-500/30 bg-orange-500/10 text-orange-400 text-sm font-medium mb-6">
                            <ShieldCheck size={14} />
                            Governance & Integrity
                        </div>
                        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-[1.15] tracking-tight mb-6">
                            Commitment to Regulatory & <br />
                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-500 to-white">
                                Ethical Compliance.
                            </span>
                        </h1>
                        <p className="text-xl text-gray-400 leading-relaxed mb-10">
                            Compliance is treated as a foundational operational principle. All activities across the platform
                            are designed to align with applicable laws, regulations, and ethical standards.
                        </p>
                    </FadeUp>
                </div>
            </section>

            {/* Main Content */}
            <section className="pb-24">
                <div className="max-w-4xl mx-auto px-6">
                    <div className="space-y-8">
                        {sections.map((section, index) => (
                            <FadeUp key={section.id} delay={index * 0.05}>
                                <div className="p-8 rounded-3xl bg-[#0a0a0a] border border-white/5 hover:border-orange-500/20 transition-all group">
                                    <div className="flex items-start gap-4">
                                        <div className="w-12 h-12 shrink-0 rounded-2xl bg-orange-500/10 flex items-center justify-center text-orange-500 group-hover:scale-110 transition-transform">
                                            {section.icon}
                                        </div>
                                        <div>
                                            <h2 className="text-2xl font-bold mb-4 group-hover:text-orange-500 transition-colors">{section.title}</h2>
                                            <div className="space-y-4">
                                                {section.content.map((item, i) => (
                                                    <div key={i}>
                                                        <p className="text-gray-400 leading-relaxed">{item.text}</p>
                                                    </div>
                                                ))}
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </FadeUp>
                        ))}
                    </div>

                    {/* Final Statement */}
                    <FadeUp delay={0.2}>
                        <div className="mt-16 p-8 rounded-3xl bg-gradient-to-br from-orange-600/10 via-[#0a0a0a] to-transparent border border-orange-500/20 text-center">
                            <h3 className="text-2xl font-bold mb-4">Final Statement</h3>
                            <p className="text-gray-400 leading-relaxed max-w-2xl mx-auto">
                                Compliance is not treated as a formality, but as an ongoing responsibility.
                                Governance, accountability, and ethical conduct remain integral to sustainable operations and long-term trust.
                            </p>
                        </div>
                    </FadeUp>

                </div>
            </section>

        </div>
    );
};

export default Compliance;
