import React from "react";
import { useNavigate } from "react-router-dom";
import { User, Users, Globe, Target, Briefcase, Zap, ArrowRight, Landmark, TrendingUp, CheckCircle2 } from "lucide-react";

const FadeUp = ({ children, delay = 0 }) => {
  return (
    <div
      className="opacity-0 animate-fadeUp"
      style={{ animationDelay: `${delay}s`, animationFillMode: "forwards" }}
    >
      {children}
    </div>
  );
};

const Button = ({ children, primary, outline, className = "", onClick }) => {
  const baseStyles =
    "px-4 py-3 rounded-xl font-semibold transition-all duration-500 flex items-center justify-center gap-2 relative overflow-hidden group/btn cursor-pointer";
  const primaryStyles = primary
    ? "bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700 text-white shadow-lg shadow-orange-500/30 hover:shadow-orange-500/60 hover:scale-105 hover:-translate-y-1 before:absolute before:inset-0 before:bg-gradient-to-r before:from-white/30 before:via-white/10 before:to-transparent before:translate-x-[-200%] hover:before:translate-x-[200%] before:transition-transform before:duration-700 before:skew-x-12"
    : "";
  const outlineStyles = outline
    ? "border-2 border-orange-500/40 text-orange-400 hover:bg-gradient-to-r hover:from-orange-500/20 hover:to-orange-600/20 hover:border-orange-500 backdrop-blur-sm hover:scale-105 hover:-translate-y-1 hover:shadow-lg hover:shadow-orange-500/30 after:absolute after:inset-0 after:border-2 after:border-orange-500/0 hover:after:border-orange-500/50 after:rounded-xl after:transition-all after:duration-500 after:scale-95 hover:after:scale-100"
    : "";

  return (
    <button
      className={`${baseStyles} ${primaryStyles} ${outlineStyles} ${className}`}
      onClick={onClick}
    >
      <span className="relative z-10 flex items-center justify-center gap-2">
        {children}
      </span>
    </button>
  );
};

const models = [
  {
    type: "BGE",
    label: "Brand Growth Engine",
    focus: "BEST FOR EXISTING BUSINESSES & PERSONAL BRANDS",
    subtext: "Turn your business into a visible, trusted and lead-generating brand using content + systems.",
    icon: <Target className="w-8 h-8 text-blue-500" />,
    features: [
      { icon: <CheckCircle2 size={18} className="text-blue-500" />, text: "Podcast-based authority building" },
      { icon: <CheckCircle2 size={18} className="text-blue-500" />, text: "Reels & short-form content system" },
      { icon: <CheckCircle2 size={18} className="text-blue-500" />, text: "Social media growth & management" },
      { icon: <CheckCircle2 size={18} className="text-blue-500" />, text: "Website & lead funnel setup" },
      { icon: <CheckCircle2 size={18} className="text-blue-500" />, text: "CRM & automation integration" },
      { icon: <CheckCircle2 size={18} className="text-blue-500" />, text: "Personal + business brand positioning" },
      { icon: <CheckCircle2 size={18} className="text-blue-500" />, text: "Influencer & distribution support" },
      { icon: <CheckCircle2 size={18} className="text-blue-500" />, text: "Consistent lead generation system" },
      { icon: <CheckCircle2 size={18} className="text-blue-500" />, text: "Low-cost, high-visibility growth model" },
      { icon: <CheckCircle2 size={18} className="text-blue-500" />, text: "Strategy + execution handled by Zryoss" },
    ],
    cta: "Grow My Brand",
    color: "from-blue-500/10 to-transparent",
  },
  {
    type: "SYOB",
    label: "Start Your Own Business",
    focus: "BEST FOR INDIVIDUALS & NEW FOUNDERS",
    subtext: "Launch your own business with a ready system, brand support, and execution engine.",
    icon: <User className="w-8 h-8 text-orange-500" />,
    features: [
      { icon: <CheckCircle2 size={18} className="text-orange-500" />, text: "Start in a focused business domain" },
      { icon: <CheckCircle2 size={18} className="text-orange-500" />, text: "Complete backend, brand & operations support" },
      { icon: <CheckCircle2 size={18} className="text-orange-500" />, text: "Ready sales & business framework" },
      { icon: <CheckCircle2 size={18} className="text-orange-500" />, text: "Dedicated account manager guidance" },
      { icon: <CheckCircle2 size={18} className="text-orange-500" />, text: "Marketing materials under your brand name" },
      { icon: <CheckCircle2 size={18} className="text-orange-500" />, text: "Client demo & professional pitch support" },
      { icon: <CheckCircle2 size={18} className="text-orange-500" />, text: "Deal closing assistance by experts" },
      { icon: <CheckCircle2 size={18} className="text-orange-500" />, text: "Quotation, invoicing & process setup" },
      { icon: <CheckCircle2 size={18} className="text-orange-500" />, text: "Access to 100+ verified vendor network" },
      { icon: <CheckCircle2 size={18} className="text-orange-500" />, text: "Government funding & startup support" },
      { icon: <CheckCircle2 size={18} className="text-orange-500" />, text: "Basic content & branding guidance (reels + presence setup)" },
      { icon: <CheckCircle2 size={18} className="text-orange-500" />, text: "Initial authority building support (podcast exposure)" },
    ],
    cta: "Start My Business",
    color: "from-orange-500/20 to-transparent",
  },
  {
    type: "BSBN",
    label: "Build & Scale Your Business Network",
    focus: "BEST FOR BUILDERS & ENTREPRENEURS",
    subtext: "Expand into multiple domains and create a scalable business ecosystem with recurring growth.",
    icon: <Users className="w-8 h-8 text-green-500" />,
    features: [
      { icon: <CheckCircle2 size={18} className="text-green-500" />, text: "Operate across multiple business domains" },
      { icon: <CheckCircle2 size={18} className="text-green-500" />, text: "Build and manage your own partner network" },
      { icon: <CheckCircle2 size={18} className="text-green-500" />, text: "Central routing & tracking system" },
      { icon: <CheckCircle2 size={18} className="text-green-500" />, text: "Recurring revenue through network model" },
      { icon: <CheckCircle2 size={18} className="text-green-500" />, text: "Dedicated ecosystem support team" },
      { icon: <CheckCircle2 size={18} className="text-green-500" />, text: "Access to 100+ verified vendor network" },
      { icon: <CheckCircle2 size={18} className="text-green-500" />, text: "Marketing & brand support for your network" },
      { icon: <CheckCircle2 size={18} className="text-green-500" />, text: "Complete backend & operations handled" },
      { icon: <CheckCircle2 size={18} className="text-green-500" />, text: "Scalable expansion framework" },
      { icon: <CheckCircle2 size={18} className="text-green-500" />, text: "Government funding enablement support" },
      { icon: <CheckCircle2 size={18} className="text-green-500" />, text: "Content engine support (reels, content flow)" },
      { icon: <CheckCircle2 size={18} className="text-green-500" />, text: "Brand authority development (podcast + positioning)" },
    ],
    cta: "Scale My Business",
    color: "from-green-500/10 to-transparent",
  },
];

export default function PartnershipModels() {
  const navigate = useNavigate();

  const handleJoinClick = (type) => {
    navigate("/apply");
  };

  return (
    <section id="partnerships" className="py-24 bg-[#050505] relative overflow-hidden">
      <style>{`
        @keyframes fadeUp {
          from { opacity: 0; transform: translateY(30px); }
          to { opacity: 1; transform: translateY(0); }
        }
        .animate-fadeUp { animation: fadeUp 0.8s ease-out; }
      `}</style>

      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <FadeUp>
          <div className="text-center mb-16">
            {/* ✅ match ProblemSection */}
            <span className="text-xs uppercase tracking-[0.3em] text-orange-500 font-bold mb-4 block">
              Choose Your Path
            </span>

            {/* ✅ match ProblemSection */}
            <h2 className="text-4xl md:text-5xl font-bold leading-tight text-white mb-6">
              Growth & Partnership{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-orange-600">
                Models
              </span>
            </h2>

            <div className="w-24 h-1 bg-orange-500 mx-auto rounded-full mb-6" />

            {/* ✅ match ProblemSection */}
            <p className="text-gray-400 text-lg max-w-2xl mx-auto font-light">
              Select the partnership model that aligns with your vision and growth ambitions
            </p>
          </div>
        </FadeUp>

        <div className="grid lg:grid-cols-3 gap-8 mb-12">
          {models.map((model, idx) => (
            <FadeUp key={idx} delay={idx * 0.2}>
              <div
                className={`relative p-8 rounded-3xl bg-gradient-to-br ${model.color} border border-white/10 hover:border-orange-500/30 transition-all duration-500 group h-full flex flex-col hover:shadow-2xl hover:shadow-orange-500/10 hover:scale-[1.02] hover:-translate-y-2 backdrop-blur-sm`}
              >
                <div className="absolute inset-0 bg-gradient-to-br from-orange-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-3xl" />

                <div className="flex items-center justify-between mb-6 relative z-10">
                  <div className="p-3 rounded-2xl bg-black/40 border border-white/10 group-hover:border-orange-500/30 group-hover:bg-black/60 transition-all duration-500 group-hover:scale-110">
                    {model.icon}
                  </div>

                  <span className="text-3xl font-bold text-white/10 group-hover:text-orange-500/30 transition-all duration-500 uppercase font-mono">
                    {model.type}
                  </span>
                </div>

                <div className="mb-8 relative z-10">
                  {/* ✅ consistent card title weight */}
                  <h3 className="text-2xl md:text-3xl font-semibold text-white mb-2 group-hover:text-orange-400 transition-colors duration-500">
                    {model.label}
                  </h3>

                  {/* ✅ consistent subtitle */}
                  <p className="text-orange-400/80 text-xs uppercase tracking-[0.3em] font-bold group-hover:text-orange-300 transition-colors duration-500">
                    {model.focus}
                  </p>
                  {model.subtext && (
                    <p className="text-gray-300 text-sm mt-4 font-light leading-relaxed">
                      {model.subtext}
                    </p>
                  )}
                </div>

                <div className="space-y-4 flex-grow mb-8 relative z-10">
                  {model.features.map((feat, fIdx) => (
                    <div
                      key={fIdx}
                      className="flex items-start gap-3 text-gray-300 group-hover:text-gray-200 transition-all duration-300"
                    >
                      <div className="text-orange-500/60 group-hover:text-orange-500 group-hover:scale-110 transition-all duration-300 mt-1 flex-shrink-0">
                        {feat.icon}
                      </div>

                      {/* ✅ match ProblemSection paragraph style */}
                      <span className="text-sm md:text-base font-light leading-relaxed">
                        {feat.text}
                      </span>
                    </div>
                  ))}
                </div>

                <div className="relative z-10">
                  <Button primary className="w-full py-4" onClick={() => handleJoinClick(model.type)}>
                    <span className="hidden xl:inline">{model.cta}</span>
                    <span className="xl:hidden">Join</span>
                    <ArrowRight size={18} className="group-hover/btn:translate-x-1 transition-transform" />
                  </Button>
                </div>
              </div>
            </FadeUp>
          ))}
        </div>

        <FadeUp delay={0.4}>
          <div className="text-center mt-12 md:mt-16 relative z-10">
            {/* Added subtle glow behind the powerful text */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[300px] h-[100px] bg-orange-500/10 blur-[80px] pointer-events-none" />

            <h3 className="text-2xl md:text-3xl lg:text-4xl font-bold text-white leading-tight mb-3 tracking-wide">
              Your Brand. <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-500 to-orange-600">Our Execution.</span>
            </h3>
            <p className="text-lg text-gray-400 font-light tracking-wide">
              Build Your Business With Zryoss.
            </p>
          </div>
        </FadeUp>
      </div>
    </section>
  );
}
