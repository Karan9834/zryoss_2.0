import { BookOpen, FileText, Sparkles, ShieldCheck, Library, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import FadeUp from "../../components/animations/FadeUp";
import HeroContact from "../Home/HeroContact";

const resourceLinks = [
  {
    title: "Blog / Insights",
    desc: "Perspectives on system-driven business and market trends.",
    path: "/resources/blog",
    icon: <BookOpen className="w-6 h-6" />
  },
  {
    title: "Knowledge Hub",
    desc: "In-depth explanations of the Zryoss ecosystem and logic.",
    path: "/resources/knowledge-center",
    icon: <Library className="w-6 h-6" />
  },
  {
    title: "Training & Enablement",
    desc: "Practical modules for product and market mastery.",
    path: "/resources/training",
    icon: <Sparkles className="w-6 h-6" />
  },
  {
    title: "Partner Guidelines",
    desc: "Operational and ethical standards for all partners.",
    path: "/resources/partner-guidelines",
    icon: <ShieldCheck className="w-6 h-6" />
  },
  {
    title: "FAQs",
    desc: "Common operational and platform questions answered.",
    path: "/resources/faqs",
    icon: <FileText className="w-6 h-6" />
  }
];

export default function Resources() {
  return (
    <div className="bg-[#050505] text-white min-h-screen">
      {/* Hero Section */}
      <section className="relative h-[60vh] flex items-center overflow-hidden">
        <div className="absolute inset-0">
          <img
            src="https://images.unsplash.com/photo-1497215728101-856f4ea42174?q=80&w=2070&auto=format&fit=crop"
            alt="Office"
            className="w-full h-full object-cover opacity-20 brightness-50"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-[#050505]/60 to-[#050505]" />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-6 w-full">
          <FadeUp>
            <h1 className="text-5xl md:text-7xl font-black mb-8 tracking-tight">
              Resources <span className="text-orange-500 italic">&</span> Learning
            </h1>
            <p className="mt-6 max-w-3xl text-gray-400 text-xl font-light leading-relaxed">
              Access insights, documentation, and guidance to better understand
              Zryoss, its ecosystem, and how to operate with absolute clarity.
            </p>
          </FadeUp>
        </div>
      </section>

      {/* Grid Section */}
      <section className="py-32 relative">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {resourceLinks.map((item, i) => (
              <FadeUp key={i} delay={i * 0.1}>
                <Link
                  to={item.path}
                  className="group block relative p-10 rounded-[35px] bg-[#0A0A0A] border border-white/10 hover:border-orange-500/50 transition-all duration-500 h-full overflow-hidden"
                >
                  <div className="relative z-10">
                    <div className="w-14 h-14 rounded-2xl bg-white/5 flex items-center justify-center text-orange-500 mb-8 group-hover:bg-orange-500 group-hover:text-white transition-all duration-500">
                      {item.icon}
                    </div>
                    <h3 className="text-2xl font-bold mb-4 flex items-center gap-3 transition-colors group-hover:text-orange-500">
                      {item.title}
                      <ArrowRight className="w-5 h-5 opacity-0 group-hover:opacity-100 transition-all -translate-x-2 group-hover:translate-x-0" />
                    </h3>
                    <p className="text-gray-400 text-base font-light leading-relaxed">
                      {item.desc}
                    </p>
                  </div>

                  {/* Background decoration */}
                  <div className="absolute -bottom-10 -right-10 opacity-[0.02] group-hover:opacity-[0.05] transition-opacity duration-700">
                    {React.cloneElement(item.icon, { className: "w-48 h-48 rotate-12" })}
                  </div>
                </Link>
              </FadeUp>
            ))}
          </div>
        </div>
      </section>

      {/* HeroContact Section */}
      <HeroContact />
    </div>
  );
}
