import React, { useEffect } from "react";
import {
  ShieldCheck,
  Building2,
  Users,
  Megaphone,
  Briefcase,
  XCircle,
  Settings,
  GitBranch,
  Layers,
  HeartHandshake,
  Lock,
  ArrowRight,
  UserCheck,
  CheckCircle2,
  AlertOctagon,
  Power
} from "lucide-react";
import { Link } from "react-router-dom";
import FadeUp from "../../components/animations/FadeUp";

const BrandOwnership = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen bg-[#050505] text-white font-sans selection:bg-orange-500/30">

      {/* Background Glows */}
      <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-orange-500/10 blur-[150px] rounded-full -translate-y-1/2 translate-x-1/2 pointer-events-none" />
      <div className="absolute middle-0 left-0 w-[500px] h-[500px] bg-orange-500/5 blur-[130px] rounded-full translate-y-1/2 -translate-x-1/2 pointer-events-none" />

      {/* Hero Section */}
      <section className="relative pt-40 pb-24 overflow-hidden border-b border-white/5">
        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left Column: Content */}
            <div>
              <FadeUp>
                <div className="inline-flex items-center gap-2 text-orange-500 text-xs uppercase tracking-[0.45em] mb-6 font-bold">
                  <ShieldCheck size={14} />
                  Brand Ownership Model
                </div>
                <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold leading-[1.15] tracking-tight mb-5 text-white">
                  Your Brand Is Yours. <br />
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-orange-600">
                    Zryoss Is the Operating Engine.
                  </span>
                </h1>
                <p className="text-xl text-gray-400 leading-relaxed font-light mb-8">
                  At Zryoss, brand ownership is non-negotiable. Zryoss provides the system that runs the business, not the identity that represents it.
                </p>

                <div className="p-8 border border-white/10 bg-white/5 rounded-[24px] backdrop-blur-sm inline-block w-full shadow-2xl relative overflow-hidden group">
                  <div className="absolute inset-0 bg-gradient-to-r from-orange-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
                  <div className="flex items-start gap-4 text-left relative z-10">
                    <div className="w-1 bg-orange-500 h-10 rounded-full mt-1 hidden md:block flex-shrink-0"></div>
                    <p className="text-lg text-gray-300 leading-relaxed italic">
                      "Every partner—IPP or BPP—builds and operates their own independent brand. Zryoss does not own partner brands or claim client ownership."
                    </p>
                  </div>
                </div>
              </FadeUp>
            </div>

            {/* Right Column: Image */}
            <div className="relative hidden lg:block">
              <FadeUp delay={0.2}>
                <div className="absolute inset-0 bg-gradient-to-r from-orange-500/20 to-yellow-600/20 blur-3xl rounded-3xl transform rotate-3" />
                <img
                  src="/Brand-Ownership-Model.png"
                  alt="Brand Ownership Model"
                  className="relative rounded-3xl shadow-2xl border border-white/10 transform hover:scale-[1.02] transition-transform duration-500 object-cover w-full h-auto aspect-[4/3]"
                />
              </FadeUp>
            </div>
          </div>
        </div>
      </section>

      {/* What Brand Ownership Means */}
      <section className="py-24 bg-[#0a0a0a]">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-3xl font-bold mb-12 text-center">What Brand Ownership Means at Zryoss</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { icon: Building2, title: "Your Name", desc: "The brand name belongs to the partner" },
              { icon: Briefcase, title: "Your Business", desc: "Operates independently in the market" },
              { icon: Users, title: "Your Clients", desc: "Acquired and retained by the partner" },
              { icon: Megaphone, title: "Your Reputation", desc: "Market reputation is built by the partner" }
            ].map((item, i) => (
              <div key={i} className="bg-[#111] p-6 rounded-2xl border border-white/5 hover:border-orange-500/30 transition-all group">
                <item.icon className="text-orange-500 mb-4 group-hover:scale-110 transition-transform" size={32} />
                <h3 className="font-bold text-white mb-2">{item.title}</h3>
                <p className="text-gray-400 text-sm">{item.desc}</p>
              </div>
            ))}
          </div>
          <p className="text-center text-white font-medium mt-12 text-lg">Zryoss works behind the brand, not above it.</p>
        </div>
      </section>

      {/* What Zryoss Does NOT Own vs Controls */}
      <section className="py-24 bg-[#050505]">
        <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-16">

          {/* Not Own */}
          <div className="bg-red-500/5 rounded-3xl p-10 border border-red-500/10 h-full">
            <div className="flex items-center gap-4 mb-8">
              <XCircle className="text-red-500 w-10 h-10" />
              <h2 className="text-2xl font-bold text-white">What Zryoss Does NOT Own</h2>
            </div>
            <p className="text-gray-400 mb-6">These remain 100% with the partner.</p>
            <ul className="space-y-4">
              {["Partner brand names", "Partner websites or domains", "Partner social media pages", "Partner client lists", "Partner revenue streams"].map((item, i) => (
                <li key={i} className="flex items-center gap-3 text-gray-300">
                  <span className="text-red-500">✕</span> {item}
                </li>
              ))}
            </ul>
          </div>

          {/* Controls */}
          <div className="bg-blue-500/5 rounded-3xl p-10 border border-blue-500/10 h-full">
            <div className="flex items-center gap-4 mb-8">
              <Settings className="text-blue-500 w-10 h-10" />
              <h2 className="text-2xl font-bold text-white">What Zryoss Does Control</h2>
            </div>
            <p className="text-gray-400 mb-6">Zryoss controls the operating layer, not the brand layer.</p>
            <ul className="space-y-4">
              {["Execution workflows", "Service delivery routing", "Vendor and team coordination", "Quality standards", "Account management", "Platform governance"].map((item, i) => (
                <li key={i} className="flex items-center gap-3 text-gray-300">
                  <span className="text-blue-500">✓</span> {item}
                </li>
              ))}
            </ul>
            <div className="mt-8 p-4 bg-blue-500/10 rounded-xl border border-blue-500/20">
              <p className="text-blue-300 text-sm font-medium">This protects delivery quality, prevents chaos, and maintains credibility.</p>
            </div>
          </div>

        </div>
      </section>

      {/* Brand vs Operating Layer */}
      <section className="py-24 bg-[#0a0a0a]">
        <div className="max-w-5xl mx-auto px-6">
          <h2 className="text-3xl font-bold text-center mb-16">Brand Layer vs Operating Layer</h2>
          <div className="relative">
            {/* Center Line */}
            <div className="hidden md:block absolute top-0 bottom-0 left-1/2 w-px bg-gradient-to-b from-transparent via-white/20 to-transparent -translate-x-1/2"></div>

            <div className="grid md:grid-cols-2 gap-12 md:gap-24 relative">
              {/* Brand Layer */}
              <div className="text-right">
                <div className="inline-flex items-center gap-2 mb-6 text-orange-500 font-bold bg-orange-500/10 px-4 py-2 rounded-full">
                  Partner-Owned <UserCheck size={16} />
                </div>
                <h3 className="text-2xl font-bold text-white mb-6">Brand Layer</h3>
                <ul className="space-y-6">
                  <li className="flex items-center justify-end gap-3 text-gray-300">Brand name & identity <div className="w-2 h-2 bg-orange-500 rounded-full"></div></li>
                  <li className="flex items-center justify-end gap-3 text-gray-300">Market positioning <div className="w-2 h-2 bg-orange-500 rounded-full"></div></li>
                  <li className="flex items-center justify-end gap-3 text-gray-300">Client relationships <div className="w-2 h-2 bg-orange-500 rounded-full"></div></li>
                  <li className="flex items-center justify-end gap-3 text-gray-300">Business growth strategy <div className="w-2 h-2 bg-orange-500 rounded-full"></div></li>
                </ul>
              </div>

              {/* Operating Layer */}
              <div className="text-left">
                <div className="inline-flex items-center gap-2 mb-6 text-blue-500 font-bold bg-blue-500/10 px-4 py-2 rounded-full">
                  <Settings size={16} /> Zryoss-Controlled
                </div>
                <h3 className="text-2xl font-bold text-white mb-6">Operating Layer</h3>
                <ul className="space-y-6">
                  <li className="flex items-center gap-3 text-gray-300"><div className="w-2 h-2 bg-blue-500 rounded-full"></div> Execution & delivery</li>
                  <li className="flex items-center gap-3 text-gray-300"><div className="w-2 h-2 bg-blue-500 rounded-full"></div> Demos & pre-sales support</li>
                  <li className="flex items-center gap-3 text-gray-300"><div className="w-2 h-2 bg-blue-500 rounded-full"></div> Operations & vendors</li>
                  <li className="flex items-center gap-3 text-gray-300"><div className="w-2 h-2 bg-blue-500 rounded-full"></div> Quality & reporting</li>
                </ul>
              </div>
            </div>

            <div className="text-center mt-16 px-6">
              <p className="text-gray-400 italic">"Both layers work together—but ownership is clearly separated."</p>
            </div>
          </div>
        </div>
      </section>

      {/* Why & Exit & Powered By */}
      <section className="py-24 bg-[#050505]">
        <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-3 gap-8">

          {/* Why No Ownership */}
          <div className="bg-[#111] p-8 rounded-2xl border border-white/5">
            <HeartHandshake className="text-orange-500 mb-6" size={32} />
            <h3 className="text-xl font-bold text-white mb-4">Why Zryoss Avoids Ownership</h3>
            <p className="text-gray-400 text-sm mb-4">Zryoss believes partners should build real equity, not temporary labels.</p>
            <ul className="space-y-2 text-sm text-gray-500 list-disc list-inside">
              <li>Ownership builds entrepreneurs</li>
              <li>Independence creates value</li>
              <li>Transferable assets</li>
            </ul>
          </div>

          {/* Exit */}
          <div className="bg-[#111] p-8 rounded-2xl border border-white/5">
            <GitBranch className="text-white mb-6" size={32} />
            <h3 className="text-xl font-bold text-white mb-4">What Happens If a Partner Exits?</h3>
            <p className="text-gray-400 text-sm mb-4">The system is separate from the brand.</p>
            <ul className="space-y-2 text-sm text-gray-500 list-disc list-inside">
              <li>Overview remains with partner</li>
              <li>Zryoss claims no rights</li>
              <li>Clients remain with partner</li>
            </ul>
          </div>

          {/* Powered By */}
          <div className="bg-[#111] p-8 rounded-2xl border border-white/5">
            <Power className="text-blue-500 mb-6" size={32} />
            <h3 className="text-xl font-bold text-white mb-4">"Powered by Zryoss"</h3>
            <p className="text-gray-400 text-sm mb-4">Optional display indicating backend support.</p>
            <ul className="space-y-2 text-sm text-gray-500 list-disc list-inside">
              <li>Backend operational support</li>
              <li>Platform-enabled execution</li>
              <li>Not a franchise status</li>
            </ul>
          </div>

        </div>
      </section>

      {/* Integrity & Conclusion */}
      <section className="py-24 bg-[#0a0a0a]">
        <div className="max-w-6xl mx-auto px-6 text-center">

          {/* Integrity */}
          <div className="mb-20">
            <AlertOctagon className="text-red-500 mx-auto mb-6" size={48} />
            <h2 className="text-3xl font-bold mb-6">Protection of Brand Integrity</h2>
            <p className="text-gray-400 mb-8 max-w-2xl mx-auto">While Zryoss does not own brands, it enforces ethical representation guidelines, no false promises, and compliance with operating standards.</p>
            <div className="flex flex-wrap justify-center gap-4">
              <span className="px-4 py-2 bg-red-900/10 text-red-400 rounded-full border border-red-500/20 text-sm">Protects Client Trust</span>
              <span className="px-4 py-2 bg-red-900/10 text-red-400 rounded-full border border-red-500/20 text-sm">Protects Ecosystem Credibility</span>
              <span className="px-4 py-2 bg-red-900/10 text-red-400 rounded-full border border-red-500/20 text-sm">Protects Partner Reputation</span>
            </div>
          </div>

          {/* Why Strong */}
          <div className="bg-gradient-to-r from-orange-900/20 to-black p-12 rounded-3xl border border-orange-500/20">
            <h2 className="text-3xl font-bold text-white mb-8">Brand Ownership Is the Foundation of Trust</h2>
            <div className="grid md:grid-cols-3 gap-8 text-center">
              <div>
                <h4 className="font-bold text-orange-500 mb-2">Ownership is Respected</h4>
                <p className="text-xs text-gray-500">Real Entrepreneurs</p>
              </div>
              <div>
                <h4 className="font-bold text-white mb-2">Roles are Separated</h4>
                <p className="text-xs text-gray-500">Clear Boundaries</p>
              </div>
              <div>
                <h4 className="font-bold text-blue-500 mb-2">Control where Necessary</h4>
                <p className="text-xs text-gray-500">For Operations Only</p>
              </div>
            </div>
            <p className="mt-8 text-gray-400">This clarity is what allows the ecosystem to scale without conflict.</p>
          </div>

        </div>
      </section>

      {/* Final CTA */}
      <section className="py-24 bg-[#050505] relative overflow-hidden text-center">
        <div className="max-w-4xl mx-auto px-6 relative z-10">
          <h2 className="text-4xl font-bold mb-8">Your Brand in Front. A System Behind You.</h2>
          <p className="text-xl text-gray-400 mb-12">Zryoss does not replace your identity. It strengthens your execution.</p>

          <div className="flex justify-center items-center gap-12 mb-12">
            <div className="text-center">
              <div className="text-4xl font-bold text-white mb-2">You</div>
              <div className="text-sm text-gray-500 uppercase tracking-widest">Own the Brand</div>
            </div>
            <div className="h-12 w-px bg-white/10"></div>
            <div className="text-center">
              <div className="text-4xl font-bold text-orange-500 mb-2">Zryoss</div>
              <div className="text-sm text-gray-500 uppercase tracking-widest">Runs the Engine</div>
            </div>
          </div>

          <div className="flex flex-col sm:flex-row justify-center gap-6">
            <Link to="/partnership/ipp" className="px-8 py-4 bg-orange-500 text-white font-bold rounded-full hover:bg-orange-600 transition-colors flex items-center gap-2">
              Start Your Brand (IPP) <ArrowRight size={20} />
            </Link>
            <Link to="/partnership/bpp" className="px-8 py-4 bg-white/5 text-white font-bold rounded-full border border-white/10 hover:bg-white/10 transition-colors">
              Explore BPP Model
            </Link>
          </div>
        </div>
      </section>

    </div>
  );
};

export default BrandOwnership;
