import React, { useEffect } from "react";
import {
    ShieldCheck,
    Briefcase,
    UserCheck,
    Info,
    CreditCard,
    FileText,
    Lock,
    Users,
    AlertTriangle,
    RefreshCw,
    Scale,
    Settings,
    HelpCircle,
    FileBadge
} from "lucide-react";
import FadeUp from "../components/animations/FadeUp";
// Creating TermsCondition.jsx in pages/ folder, so path to FadeUp is ../components/animations/FadeUp

const TermsCondition = () => {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    const sections = [
        {
            id: "1",
            title: "1. About Zryoss",
            icon: <Info size={24} />,
            content: [
                {
                    text: "We are a Business Operating System designed to enable individuals and organizations to build, operate, and scale independent brands using a structured backend ecosystem. We are: Not a franchise, Not an investment scheme, Not a guaranteed income program. We provide business setup, operational support, execution management, and platform enablement services. (Ref: Companies Act, 2013 - Section 447 & 448 regarding transparency and prevention of fraud)."
                }
            ]
        },
        {
            id: "2",
            title: "2. Eligibility to Use the Platform",
            icon: <UserCheck size={24} />,
            content: [
                {
                    text: "By accessing or using our platform, you acknowledge and confirm that: You are at least 18+ years of age, you are legally capable of entering into agreements, and you are using the platform for lawful business purposes. We reserve the right to deny or terminate access if eligibility conditions are not met."
                }
            ]
        },
        {
            id: "3",
            title: "3. Nature of Relationship",
            icon: <Users size={24} />,
            content: [
                {
                    text: "Use of Zryoss does not create: Employment, Agency, Partnership, Franchise, Joint venture. All users, partners (IPP/BPP), and clients operate as independent entities."
                }
            ]
        },
        {
            id: "4",
            title: "4. Scope of Services",
            icon: <Settings size={24} />,
            content: [
                {
                    text: "We may provide services including but not limited to: Brand & business setup, Website and digital presence creation, Platform and system access, Sales, demo, and pre-sales support, Backend execution and delivery management, Account management and reporting, Vendor coordination and quality governance. Exact services depend on the agreed scope at the time of onboarding."
                }
            ]
        },
        {
            id: "5",
            title: "5. Fees & Payments",
            icon: <CreditCard size={24} />,
            content: [
                {
                    text: "We charge service-based fees for: Business setup, Platform enablement, Operational and execution support. Fees are linked to defined services, not participation or recruitment. No income, profit, or business success is guaranteed. All payment terms are communicated transparently during onboarding. (Ref: Companies Act, 2013 - Section 134 regarding financial accountability)."
                }
            ]
        },
        {
            id: "6",
            title: "6. User Responsibilities",
            icon: <Briefcase size={24} />,
            content: [
                {
                    text: "By using the platform, you agree to: Provide accurate and complete information, Use the platform ethically and lawfully, Not misrepresent Our services or capabilities, Not overpromise or mislead clients, Follow platform processes and guidelines. Violation may result in suspension or termination."
                }
            ]
        },
        {
            id: "7",
            title: "7. Intellectual Property Rights",
            icon: <FileBadge size={24} />,
            content: [
                {
                    text: "All platform-related intellectual property including: Systems, Frameworks, Content, Processes, Training materials remain the property of Zryoss or its licensors. Users may not copy, reproduce, resell, or misuse any platform of assets without written permission. (Ref: Trade Marks Act, 1999 & Copyright Act, 1957; Information Technology Act, 2000)."
                }
            ]
        },
        {
            id: "8",
            title: "8. Confidentiality",
            icon: <Lock size={24} />,
            content: [
                {
                    text: "Users agree to maintain confidentiality of: Platform processes, Pricing structures, Vendor or partner details, Internal documentation. Confidential information must not be disclosed to third parties during or after association with Zryoss. (Ref: Indian Contract Act, 1872 - Section 27 regarding reasonable non-disclosure)."
                }
            ]
        },
        {
            id: "9",
            title: "9. Third-Party Services & Vendors",
            icon: <Users size={24} />,
            content: [
                {
                    text: "We work with: Internal execution brands, External vendors and service providers. We coordinate delivery but do not guarantee outcomes caused by: Client delays, Third-party failures, External market conditions."
                }
            ]
        },
        {
            id: "10",
            title: "10. Limitation of Liability",
            icon: <AlertTriangle size={24} />,
            content: [
                {
                    text: "We shall not be liable for: Business losses, Revenue shortfall, Indirect or consequential damages, Market or economic risks. Use of the platform is at the user’s own business risk. (Ref: Indian Contract Act, 1872 - Section 73 & 74 regarding damages and liability)."
                }
            ]
        },
        {
            id: "11",
            title: "11. Platform Modifications",
            icon: <RefreshCw size={24} />,
            content: [
                {
                    text: "We reserve the right to: Modify services, Update processes, Change platform structure. Such changes are made to improve performance and governance. Continued use implies acceptance of updated Terms."
                }
            ]
        },
        {
            id: "12",
            title: "12. Suspension & Termination",
            icon: <Briefcase size={24} />, // Reusing icon or finding a better one like FileX or Ban but sticking to lucide-react consistent imports
            content: [
                {
                    text: "We may suspend or terminate access if: Terms are violated, Misrepresentation occurs, Platform reputation is harmed, Legal or compliance risks arise. Termination does not waive outstanding obligations. (Ref: Information Technology Act, 2000 - Section 43A & Section 79)."
                }
            ]
        },
        {
            id: "13",
            title: "13. Governing Law",
            icon: <Scale size={24} />,
            content: [
                {
                    text: "These Terms shall be governed by and interpreted in accordance with the laws of India. Any disputes shall be subject to the jurisdiction of Indian courts. (Ref: Indian Contract Act, 1872 - Section 10 regarding valid contracts). You are at least 18 years of age and legally capable of entering into binding agreements. You will use the platform only for lawful and legitimate business purposes."
                }
            ]
        },
        {
            id: "14",
            title: "14. Disclaimer",
            icon: <AlertTriangle size={24} />,
            content: [
                {
                    text: "We provide systems, support, and execution frameworks. Business outcomes depend on individual effort, market demand, and external factors. We do not guarantee revenue, profitability, or business success. Results may vary based on industry conditions, client acquisition, and execution volume. Users are responsible for their own business decisions and associated risks. We do not assure: Fixed income, Guaranteed profits, Business success. (Ref: Consumer Protection Act, 2019 - Section 2(47) regarding unfair trade practices)."
                }
            ]
        },
        {
            id: "15",
            title: "15. Contact Information",
            icon: <HelpCircle size={24} />,
            content: [
                {
                    text: "For any questions regarding these Terms, please contact Us through the official communication channels listed on the website."
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
                            <FileText size={14} />
                            Legal & Usage
                        </div>
                        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-[1.15] tracking-tight mb-6">
                            Terms & <br />
                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-500 to-white">
                                Conditions.
                            </span>
                        </h1>
                        <p className="text-xl text-gray-400 leading-relaxed mb-10">
                            Please read these terms carefully. By accessing or using our website or any associated services,
                            you agree to be bound by these Terms & Conditions.
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

                    {/* Final Note */}
                    <FadeUp delay={0.2}>
                        <div className="mt-16 p-8 rounded-3xl bg-gradient-to-br from-orange-600/10 via-[#0a0a0a] to-transparent border border-orange-500/20 text-center">
                            <h3 className="text-2xl font-bold mb-4">Final Note</h3>
                            <p className="text-gray-400 leading-relaxed max-w-2xl mx-auto mb-6">
                                By using Our Services, you acknowledge that you have read, understood, and agreed to these Terms & Conditions.
                            </p>
                            <p className="text-lg font-bold text-white mb-2">
                                Your Brand. Our Engine. Governed by Clarity. Built on Trust.
                            </p>
                            <p className="text-sm text-gray-500 font-medium opacity-80">
                                Powered by Kryoss Softech Pvt Ltd
                            </p>
                        </div>
                    </FadeUp>

                </div>
            </section>

        </div>
    );
};

export default TermsCondition;
