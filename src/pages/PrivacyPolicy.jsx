import React, { useEffect } from "react";
import {
    ShieldCheck,
    Lock,
    Eye,
    FileText,
    Share2,
    Database,
    Clock,
    UserCheck,
    Cookie,
    ExternalLink,
    RefreshCw,
    Mail,
    ArrowRight
} from "lucide-react";
import FadeUp from "../components/animations/FadeUp";
// Using the same FadeUp path as seen in other pages at this level if they existed, but Overview was in Solutions subfolder (../../). 
// PrivacyPolicy is in pages/ so it should be ../components/animations/FadeUp.

const PrivacyPolicy = () => {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    const sections = [
        {
            id: "1",
            title: "1. Information We Collect",
            icon: <Eye size={24} />,
            content: [
                {
                    subTitle: "1.1 Personal Information",
                    text: "Information that may be collected includes: Name, contact details, professional information, business and organizational details, communication records and correspondence. This information is collected only when voluntarily provided."
                },
                {
                    subTitle: "1.2 Business & Operational Information",
                    text: "To enable services and execution support, the platform may collect: Business requirements and scope details, service preferences and operational data, account-related information."
                },
                {
                    subTitle: "1.3 Technical & Usage Information",
                    text: "Automatically collected data may include: IP address and device identifiers, browser type and operating system, usage patterns and interaction data. This data is used strictly for security, performance, and platform improvement."
                }
            ]
        },
        {
            id: "2",
            title: "2. How Information Is Used",
            icon: <FileText size={24} />,
            content: [
                {
                    text: "Information collected is used for the following purposes: To enable platform access and service delivery, to provide operational support and execution coordination, to communicate service updates and relevant information, to improve system performance and user experience, to comply with legal and regulatory obligations. Information is never used for unlawful, misleading, or unauthorized purposes."
                }
            ]
        },
        {
            id: "3",
            title: "3. Legal Basis for Processing",
            icon: <ShieldCheck size={24} />,
            content: [
                {
                    text: "Information is processed on one or more of the following legal grounds: User consent, contractual necessity, legitimate business interests, legal or regulatory compliance. Processing is limited strictly to defined and lawful purposes, ensuring alignment with the Information Technology Act, 2000 (Section 43A) and the Digital Personal Data Protection (DPDP) Act, 2023."
                }
            ]
        },
        {
            id: "4",
            title: "4. Information Sharing & Disclosure",
            icon: <Share2 size={24} />,
            content: [
                {
                    text: "Information may be shared only when necessary with: Internal execution teams and operational units, authorized service providers and vendors, legal, regulatory, or government authorities when required. Information is never sold, rented, or traded to third parties. All sharing is governed by confidentiality and data protection obligations."
                }
            ]
        },
        {
            id: "5",
            title: "5. Data Storage & Security",
            icon: <Database size={24} />,
            content: [
                {
                    text: "Appropriate technical and organizational measures are implemented to: Protect data against unauthorized access, prevent misuse, loss, or alteration, maintain data integrity and confidentiality. Access to information is restricted to authorized personnel only."
                }
            ]
        },
        {
            id: "6",
            title: "6. Data Retention",
            icon: <Clock size={24} />,
            content: [
                {
                    text: "Information is retained only for: As long as necessary to fulfill service obligations, compliance with legal or regulatory requirements, legitimate operational or audit purposes. Once no longer required, information is securely deleted or anonymized."
                }
            ]
        },
        {
            id: "7",
            title: "7. User Rights",
            icon: <UserCheck size={24} />,
            content: [
                {
                    text: "Users may have the right to: Access their personal information, request correction or updates, request deletion (subject to legal obligations), withdraw consent where applicable. Requests can be made through official communication channels."
                }
            ]
        },
        {
            id: "8",
            title: "8. Cookies & Tracking Technologies",
            icon: <Cookie size={24} />,
            content: [
                {
                    text: "The platform may use cookies and similar technologies to: Enhance functionality and performance, understand usage behavior, improve overall experience. Users may manage cookie preferences through browser settings."
                }
            ]
        },
        {
            id: "9",
            title: "9. Third-Party Links",
            icon: <ExternalLink size={24} />,
            content: [
                {
                    text: "The platform may contain links to third-party websites or services. No responsibility is assumed for the privacy practices or content of external platforms. Users are encouraged to review third-party privacy policies independently."
                }
            ]
        },
        {
            id: "10",
            title: "10. Policy Updates & Changes",
            icon: <RefreshCw size={24} />,
            content: [
                {
                    text: "This Privacy Policy may be updated periodically to reflect: Legal changes, operational enhancements, platform improvements. Continued use of the platform constitutes acceptance of the updated policy."
                }
            ]
        },
        {
            id: "11",
            title: "11. Contact & Grievance Resolution",
            icon: <Mail size={24} />,
            content: [
                {
                    text: "For privacy-related queries, concerns, or requests, users may reach out through the official support channels listed on the website. All requests are reviewed and addressed within a reasonable timeframe."
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
                            Trust & Security
                        </div>
                        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-[1.15] tracking-tight mb-6">
                            Our Commitment to <br />
                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-500 to-white">
                                Privacy.
                            </span>
                        </h1>
                        <p className="text-xl text-gray-400 leading-relaxed mb-10">
                            Protecting personal and business information is a core operational principle.
                            This policy explains how we collect, use, and protect your data.
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
                                                        {item.subTitle && (
                                                            <h3 className="text-lg font-semibold text-white mb-2">{item.subTitle}</h3>
                                                        )}
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
                                Privacy is treated as a matter of trust, responsibility, and governance.
                                Information is handled with care, purpose, and transparency—aligned with ethical
                                business standards and legal obligations.
                            </p>
                            <p className="text-sm text-gray-500 font-medium opacity-80 mt-4">
                                Powered by Kryoss Softech Pvt Ltd
                            </p>
                        </div>
                    </FadeUp>

                </div>
            </section>

        </div>
    );
};

export default PrivacyPolicy;
