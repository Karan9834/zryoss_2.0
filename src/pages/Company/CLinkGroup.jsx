import React from "react";
import { Link } from "react-router-dom";
import FadeUp from "../../components/animations/FadeUp";
import {
    ArrowRight,
    BriefcaseBusiness,
    Globe,
    Building,
    Zap,
    Phone,
    FlaskConical,
    HeartPulse,
    Monitor,
} from "lucide-react";

export default function CLinkGroup() {
    const industries = [
        { title: "Public Sector", icon: <Building className="w-8 h-8" /> },
        { title: "Financial Services", icon: <Globe className="w-8 h-8" /> },
        { title: "Energy & Utilities", icon: <Zap className="w-8 h-8" /> },
        { title: "Telecom", icon: <Phone className="w-8 h-8" /> },
        { title: "Pharma & Biotech", icon: <FlaskConical className="w-8 h-8" /> },
        { title: "Healthcare", icon: <HeartPulse className="w-8 h-8" /> },
        { title: "Technology", icon: <Monitor className="w-8 h-8" /> },
        { title: "Business Operations", icon: <BriefcaseBusiness className="w-8 h-8" /> },
    ];

    const groupCompanies = [
        {
            name: "Kryoss",
            legal: "Kryoss Softech Private Ltd.",
            desc: "The technology powerhouse driving software engineering, cloud infrastructure, and enterprise digital architecture.",
            logo: "/brands_logo/kryoss_logo_2.png",
            href: "https://kryosssoftech.org/",
        },
        {
            name: "CCS",
            legal: "CLink Consultancy Services Private Ltd.",
            desc: "Providing high-level business consulting, strategy development, and operational excellence frameworks.",
            logo: "/brands_logo/clink_consultancy_logo.png",
        },
        {
            name: "CLink HR",
            legal: "Clink HR Services Private Ltd.",
            desc: "Specialized in strategic human resource management, executive search, and workforce planning for global enterprises.",
            logo: "/brands_logo/clink_hr.png",
            href: "https://clinkhr.com/",
        },
    ];

    const brands = [
        {
            title: "Kryoss Softech",
            desc: "Kryoss Softech is providing Customized Software Development, Web Application Development, Mobile Application Development and IT Consulting Services. We have earned the pride of being one of the leading App & web based software solution provider in India, we develop software solution that helps our customers to outperform the competition and stay ahead in today’s competitive business environment.",
            image: "/clink_group/Kryoss-softech.png",
            href: "https://kryosssoftech.org/",
        },
        {
            title: "Kryoss Works",
            desc: "Kryoss works is a tech loaded solution for your on-demand business. Kryoss Works is a one-stop solution for customized mobile apps, web apps, app clone scripts, web hosting, developer hiring and an array of other related services. We are experts in developing reliable tailored apps. We aim to inspire all the professionals by showing it’s possible to deliver happiness to customers, vendors, and business partners in a sustainable way.",
            image: "/clink_group/clink_works.jpg",
        },
        {
            title: "CLink HR",
            desc: "CLink Hr has set a new benchmark in the competitive world of talent acquisition through diligently conceptualized talent services and pioneer of organized recruitment as we grew, we built and acquired new businesses to provide our customers and candidates with greater degrees of partnership and value. CLink Hr is a preferred talent acquisition partner to Multinationals and leading Indian businesses.",
            image: "/clink_group/Clink-hr.png",
            href: "https://clinkhr.com/",
        },
        {
            title: "Edu-Linkers",
            desc: "LMS Platform for Educators, Teachers, Trainers and Institutes. Edu-Linker's is a complete solution for creating, managing and administrating your own online educational services. Edu-Linker's provides Online Teaching apps to sell courses, tests, Quiz and take Live Classes from branded web, iOS & Android Apps, for independent teachers, Trainers and Institutes.",
            image: "/clink_group/edulinkers.png",
        },
        {
            title: "VyomBiz",
            desc: "VyomBiz has a dedicated team of professionals to provide a comprehensive service. Not only we help the startup to incorporation of the business but also, we provide end to end services to maintain and take care of Mandatory Compliance of your Company. VyomBiz is the India’s largest online key to open the door of your business by saving your time and money with extreme satisfaction. Our company has 5000 huge network with brilliant professionals of Charted Accountants, CS, Lawyers, and Bankers across all over the India.",
            image: "/clink_group/Vyombiz.png",
            href: "https://vyombiz.in/",
        },
        {
            title: "MediKryoss",
            desc: "We design essential medical technology to make care more informed, personalized, interactive, and adaptable. Today’s eClinicalWorks offers unified and integrated healthcare IT solutions for medical professionals of every size and type — ambulatory practices, urgent care facilities, health centers, hospitals, and more than 50 specialties — along with tools for Patient Engagement, Population Health, and Performance Cycle Management.",
            image: "/clink_group/medikryoss.png",
        },
        {
            title: "AdKryoss",
            desc: "AdKryoss is the marketing and growth powerhouse of the ecosystem, specializing in performance marketing, brand scaling, and strategic digital execution. We manage end-to-end campaigns, from SEO and content strategy to paid advertising and social media growth, ensuring every brand under the Zryoss umbrella achieves maximum market visibility and measurable ROI.",
            image: "/clink_group/adkryoss.png",
            href: "https://adkryoss.com/",
        },
    ];

    return (
        <div className="min-h-screen bg-[#050505] text-white">
            {/* SECTION 1: HERO SECTION */}
            <section className="relative pt-32 pb-24 overflow-hidden min-h-[80vh] flex items-center">
                <div className="absolute inset-0 pointer-events-none">
                    <div className="absolute top-[-20%] right-[-10%] w-[800px] h-[800px] bg-orange-600/10 rounded-full blur-[150px] animate-pulse" />
                    <div className="absolute bottom-[-10%] left-[-5%] w-[600px] h-[600px] bg-blue-600/5 rounded-full blur-[120px]" />
                </div>

                <div className="max-w-7xl mx-auto px-6 relative z-10 w-full">
                    <div className="grid lg:grid-cols-2 gap-16 items-center">
                        <FadeUp>
                            <div className="space-y-8">
                                <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10 text-sm text-orange-500 font-bold tracking-widest uppercase">
                                    <span className="w-2 h-2 rounded-full bg-[#FF6A00] animate-ping" />
                                    Enterprise Excellence
                                </div>
                                <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white leading-[1.15] tracking-tight mb-5">
                                    CLink Group
                                </h1>
                                <h2 className="text-xl sm:text-2xl font-semibold text-[#FF6A00] mb-6">
                                    A Global Professional Services Firm That Makes Business Transformation Real
                                </h2>
                                <p className="text-gray-300 leading-relaxed text-lg mb-8">
                                    Empowering global enterprises through technology, consulting, and system-driven execution frameworks.
                                </p>
                                <div className="flex gap-4">
                                    <Link
                                        to="/contact"
                                        className="px-8 py-4 rounded-2xl bg-gradient-to-r from-orange-500 to-orange-700 text-white font-bold hover:shadow-[0_0_30px_rgba(234,88,12,0.4)] transition-all transform hover:-translate-y-1"
                                    >
                                        Let's talk
                                    </Link>
                                </div>
                            </div>
                        </FadeUp>
                        <FadeUp delay={0.2}>
                            <div className="relative">
                                <div className="absolute -inset-4 bg-gradient-to-r from-orange-500/20 to-blue-500/20 blur-3xl rounded-[40px]" />
                                <div className="relative rounded-[40px] border border-white/10 overflow-hidden shadow-2xl">
                                    <img
                                        src="/clink_group/hero_img.png"
                                        alt="CLink Group Technology"
                                        className="w-full h-auto transform hover:scale-105 transition-transform duration-700"
                                    />
                                    <div className="absolute inset-0 bg-gradient-to-t from-[#050505] via-transparent to-transparent opacity-60" />
                                </div>
                            </div>
                        </FadeUp>
                    </div>
                </div>
            </section>

            {/* SECTION 2: WHO WE ARE */}
            <section className="py-24 max-w-7xl mx-auto px-6">
                <div className="grid lg:grid-cols-2 gap-16 items-stretch">
                    <FadeUp>
                        <div className="relative rounded-3xl overflow-hidden border border-white/10 h-full">
                            <img
                                src="/clink_group/who_we_are.webp"
                                alt="Who We Are"
                                className="w-full h-full object-cover"
                            />
                            <div className="absolute inset-0 bg-blue-900/10 mix-blend-overlay" />
                        </div>
                    </FadeUp>
                    <FadeUp delay={0.2}>
                        <div className="space-y-6">
                            <h2 className="text-3xl md:text-4xl font-bold">Who We Are</h2>
                            <div className="space-y-4 text-lg text-gray-300 leading-relaxed">
                                <p>
                                    CLink Group is a global leader in Consulting, digital transformation, technology and engineering services. We enable clients in more than 20 countries to navigate their digital transformation. With over Ten Years of experience in managing the systems and workings of global enterprises, we expertly steer our clients through their digital journey.
                                </p>
                                <p>
                                    Clink Group is a global systems integrator committed to delivering leading-edge, technology-enabled, and business-driven solutions to small, medium, and global organizations in verticals such as the public sector, financial services, energy & utility, telecommunications, pharmaceutical & biotech, healthcare, and technology. We are a provider of software, solutions, and services focused on deploying business-driven, technology-enabled solutions that create next-generation competitive advantages for our global customers.
                                </p>
                            </div>

                        </div>
                    </FadeUp>
                </div>
            </section>

            {/* SECTION 3: WHAT WE DO */}
            <section className="py-24 bg-white/[0.02] border-y border-white/5">
                <div className="max-w-7xl mx-auto px-6">
                    <FadeUp>
                        <h2 className="text-3xl md:text-4xl font-bold mb-12">What We Do</h2>
                    </FadeUp>
                    <div className="grid lg:grid-cols-2 gap-16 items-stretch">
                        <FadeUp>
                            <div className="space-y-4 h-full flex flex-col justify-between">
                                {[
                                    { title: "Consulting & Digital Transformation", desc: "Strategic advice and implementation to modernize legacy operations." },
                                    { title: "Technology & Engineering Services", desc: "High-end software engineering and infrastructure management." },
                                    { title: "System Integration", desc: "Seamlessly connecting disparate tech stacks into a unified ecosystem." },
                                    { title: "Industry-specific solutions", desc: "Tailored frameworks for finance, telecom, healthcare, and more." },
                                ].map((item, idx) => (
                                    <div key={idx} className="group p-6 rounded-3xl bg-white/5 border border-white/10 hover:border-orange-500/50 transition-all flex-1 flex flex-col justify-center">
                                        <h3 className="text-lg font-bold text-orange-500 transition-colors uppercase tracking-wide">{item.title}</h3>
                                        <p className="text-gray-400 mt-2 text-sm">{item.desc}</p>
                                    </div>
                                ))}
                            </div>
                        </FadeUp>
                        <FadeUp delay={0.2}>
                            <div className="relative rounded-3xl overflow-hidden border border-white/10 bg-white p-8 h-full flex items-center">
                                <img
                                    src="/clink_group/what_we_do.png"
                                    alt="What We Do"
                                    className="w-full h-auto object-contain max-h-full"
                                />
                            </div>
                        </FadeUp>
                    </div>
                </div>
            </section>



            {/* SECTION 5: STATEMENT SECTION */}
            <section className="py-24 bg-gradient-to-r from-orange-600 to-orange-800 relative overflow-hidden text-center">
                <div className="max-w-7xl mx-auto px-6 relative z-10">
                    <FadeUp>
                        <h2 className="text-4xl md:text-6xl font-black text-white uppercase tracking-tighter mb-4">
                            Think Big.. We Do!!
                        </h2>
                        <p className="text-xl font-bold text-white/90">CLink Group of Companies</p>
                    </FadeUp>
                </div>
            </section>

            {/* SECTION 6: GROUP COMPANIES */}
            <section className="relative py-32 overflow-hidden">
                {/* Background Details */}
                <div className="absolute inset-0 bg-[#0A0A0A]">
                    <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_0%,rgba(255,106,0,0.03),transparent_70%)]" />
                    <div className="absolute bottom-0 left-0 right-0 h-1/2 bg-[linear-gradient(to_top,#050505,transparent)]" />
                </div>

                <div className="max-w-7xl mx-auto px-6 relative z-10">
                    <FadeUp>
                        <div className="text-center mb-24 space-y-4">
                            <h2 className="text-3xl md:text-4xl font-bold uppercase tracking-widest text-white">
                                Group Companies
                            </h2>
                            <div className="w-24 h-1 bg-gradient-to-r from-transparent via-orange-500 to-transparent mx-auto opacity-80" />
                        </div>
                    </FadeUp>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-10">
                        {groupCompanies.map((company, idx) => {
                            const cardContent = (
                                <div className={`group h-full relative flex flex-col rounded-[28px] border border-white/5 bg-gradient-to-b from-[#181818] to-[#0F0F0F] hover:from-[#202020] hover:to-[#121212] transition-all duration-300 hover:-translate-y-1.5 hover:border-orange-500/30 hover:shadow-[0_20px_40px_-20px_rgba(255,106,0,0.15)] overflow-hidden ${company.href ? "cursor-pointer" : ""}`}>
                                    {/* Logo Zone — full-width white banner */}
                                    <div className="w-full h-[180px] bg-white flex items-center justify-center p-6 shrink-0">
                                        <img
                                            src={company.logo}
                                            alt={company.name}
                                            className="w-full h-full object-contain transition-transform duration-300 group-hover:scale-105"
                                        />
                                    </div>

                                    {/* Content Zone — dark section */}
                                    <div className="flex flex-col items-center text-center px-8 py-8 flex-1">
                                        <h3 className="text-2xl font-bold text-white uppercase tracking-tight mb-3">
                                            {company.name}
                                        </h3>
                                        <div className="text-orange-500 text-xs font-bold uppercase tracking-[0.2em] mb-5 min-h-[1.5em]">
                                            {company.legal}
                                        </div>
                                        <p className="text-gray-400 text-base leading-relaxed line-clamp-3">
                                            {company.desc}
                                        </p>
                                    </div>
                                </div>
                            );

                            return (
                                <FadeUp key={idx} delay={idx * 0.1} className="h-full">
                                    {company.href ? (
                                        <a
                                            href={company.href}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="block h-full"
                                        >
                                            {cardContent}
                                        </a>
                                    ) : (
                                        cardContent
                                    )}
                                </FadeUp>
                            );
                        })}
                    </div>
                </div>
            </section>

            {/* SECTION 7: BRANDS OF CLINK GROUP */}
            <section className="py-24 bg-white/[0.01]">
                <div className="max-w-7xl mx-auto px-6">
                    <FadeUp>
                        <div className="text-center mb-24 space-y-4">
                            <h2 className="text-3xl md:text-4xl font-bold uppercase tracking-widest">Brands of CLink Group</h2>
                            <div className="w-32 h-1 bg-orange-500 mx-auto" />
                        </div>
                    </FadeUp>
                </div>
                <div className="space-y-0">
                    {brands.map((brand, idx) => (
                        <div key={idx} className={`${idx % 2 !== 0 ? "bg-zinc-900/50 border-y border-white/5" : ""} py-24 w-full`}>
                            <div className="max-w-7xl mx-auto px-6">
                                <FadeUp delay={0.1}>
                                    <div className={`flex flex-col ${idx % 2 === 0 ? "lg:flex-row" : "lg:flex-row-reverse"} gap-16 items-center`}>
                                        <div className="w-full lg:w-1/2 relative">
                                            <div className="absolute -inset-4 bg-orange-500/5 blur-2xl rounded-3xl" />
                                            <img
                                                src={brand.image}
                                                alt={brand.title}
                                                className="relative rounded-[40px] border border-white/10 w-full h-auto shadow-2xl"
                                            />
                                        </div>
                                        <div className="w-full lg:w-1/2 space-y-6">
                                            <h3 className="text-3xl font-extrabold text-white uppercase tracking-tight">{brand.title}</h3>
                                            <p className="text-gray-300 text-lg leading-relaxed font-normal">
                                                {brand.desc}
                                            </p>
                                            {brand.href ? (
                                                <a
                                                    href={brand.href}
                                                    target="_blank"
                                                    rel="noopener noreferrer"
                                                    className="inline-flex items-center gap-3 text-orange-500 font-bold uppercase tracking-[0.2em] hover:text-orange-400 transition-colors group"
                                                >
                                                    Visit Website <ArrowRight className="w-5 h-5 group-hover:translate-x-2 transition-transform" />
                                                </a>
                                            ) : (
                                                <Link
                                                    to="/contact"
                                                    className="inline-flex items-center gap-3 text-orange-500 font-bold uppercase tracking-[0.2em] hover:text-orange-400 transition-colors group"
                                                >
                                                    Visit Website <ArrowRight className="w-5 h-5 group-hover:translate-x-2 transition-transform" />
                                                </Link>
                                            )}
                                        </div>
                                    </div>
                                </FadeUp>
                            </div>
                        </div>
                    ))}
                </div>
            </section >

            {/* SECTION 4: INDUSTRIES WE SERVE */}
            <section className="py-16 md:py-24 max-w-7xl mx-auto px-6">
                <FadeUp>
                    <div className="text-center mb-12 md:mb-16 space-y-4">
                        <h2 className="text-2xl md:text-4xl font-bold uppercase">Industries We Serve</h2>
                        <div className="w-20 md:w-24 h-1 bg-orange-500 mx-auto" />
                    </div>
                </FadeUp>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
                    {industries.map((industry, idx) => (
                        <FadeUp key={idx} delay={idx * 0.05} className="h-full">
                            <div className="group p-6 md:p-8 rounded-3xl md:rounded-[40px] bg-white/5 border border-white/10 transition-all duration-500 text-center flex flex-col items-center justify-center gap-4 md:gap-6 cursor-default h-full aspect-[16/10] relative overflow-hidden">
                                {/* Bottom-to-top orange fill background */}
                                <div className="absolute inset-0 bg-orange-500 translate-y-[105%] group-hover:translate-y-0 transition-transform duration-500 ease-out z-0" />

                                <div className="relative z-10 text-orange-500 group-hover:text-white transition-colors duration-500">
                                    {React.cloneElement(industry.icon, { className: "w-8 h-8 md:w-10 md:h-10 transition-transform duration-500 group-hover:scale-110" })}
                                </div>
                                <h3 className="relative z-10 text-sm md:text-lg font-bold text-white uppercase tracking-widest">{industry.title}</h3>
                            </div>
                        </FadeUp>
                    ))}
                </div>
            </section>

            {/* SECTION 8: CTA SECTION */}
            <section className="py-16 relative overflow-hidden text-center bg-gradient-to-r from-orange-600 to-orange-800">
                <div className="max-w-4xl mx-auto px-6 relative z-10 space-y-8">
                    <FadeUp>
                        <h2 className="text-2xl md:text-3xl font-bold text-white leading-tight uppercase tracking-tighter">
                            Ready to transform your business with CLink Group?
                        </h2>
                        <div className="flex flex-col sm:flex-row gap-4 justify-center mt-8">
                            <Link
                                to="/contact"
                                className="px-8 py-3 rounded-full bg-white text-orange-600 font-bold uppercase tracking-[0.1em] hover:bg-gray-100 transition-all shadow-xl"
                            >
                                Contact Us
                            </Link>
                            <Link
                                to="/apply"
                                className="px-8 py-3 rounded-full border-2 border-white text-white font-bold uppercase tracking-[0.1em] hover:bg-white/10 transition-all"
                            >
                                Partner With Us
                            </Link>
                        </div>
                    </FadeUp>
                </div>
            </section>
        </div>
    );
}
