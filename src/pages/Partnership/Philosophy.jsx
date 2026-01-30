import React, { useEffect } from "react";
import {
  Scale,
  ShieldCheck,
  Layers,
  TrendingUp,
  Users,
  AlertTriangle,
  Lightbulb,
  Target,
  CheckCircle2,
  Handshake,
  Clock,
  ArrowRight
} from "lucide-react";
import { Link } from "react-router-dom";
import FadeUp from "../../components/animations/FadeUp";

const Philosophy = () => {
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
                  <Scale size={14} />
                  Partnership Philosophy
                </div>
                <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold leading-[1.15] tracking-tight mb-5 text-white">
                  Building Businesses With <br />
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-orange-600">
                    Structure, Not Shortcuts
                  </span>
                </h1>
                <p className="text-xl text-gray-400 leading-relaxed font-light mb-8">
                  At Zryoss, partnership is not about expansion for numbers. It is about building sustainable businesses through systems.
                </p>

                <div className="flex flex-col gap-3 text-sm text-gray-400 mb-10 font-light">
                  <span className="flex items-center gap-3"><AlertTriangle size={16} className="text-orange-500" /> No fast growth without control</span>
                  <span className="flex items-center gap-3"><AlertTriangle size={16} className="text-orange-500" /> No income promises without execution</span>
                  <span className="flex items-center gap-3"><AlertTriangle size={16} className="text-orange-500" /> No recruitment without responsibility</span>
                </div>

                <div className="p-8 border border-white/10 bg-white/5 rounded-[24px] backdrop-blur-sm inline-block w-full shadow-2xl relative overflow-hidden group">
                  <div className="absolute inset-0 bg-gradient-to-r from-orange-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
                  <p className="text-lg text-gray-300 relative z-10 leading-relaxed italic">
                    "Zryoss believes in <strong className="text-white">long-term value creation</strong>, backed by a strong operating foundation."
                  </p>
                </div>
              </FadeUp>
            </div>

            {/* Right Column: Image */}
            <div className="relative hidden lg:block">
              <FadeUp delay={0.2}>
                <div className="absolute inset-0 bg-gradient-to-r from-orange-500/20 to-yellow-600/20 blur-3xl rounded-3xl transform rotate-3" />
                <img
                  src="/Partnership Philosophy.jpg"
                  alt="Partnership Philosophy"
                  className="relative rounded-3xl shadow-2xl border border-white/10 transform hover:scale-[1.02] transition-transform duration-500 object-cover w-full h-auto aspect-[4/3]"
                />
              </FadeUp>
            </div>
          </div>
        </div>
      </section>

      {/* Core Belief */}
      <section className="py-24 bg-[#0a0a0a]">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-3xl font-bold mb-8">The Core Belief Behind Zryoss Partnerships</h2>
          <div className="bg-gradient-to-br from-orange-900/10 to-transparent border border-orange-500/20 p-10 rounded-3xl relative overflow-hidden">
            <div className="relative z-10">
              <p className="text-2xl md:text-3xl font-serif italic text-white mb-6">
                "People don’t fail because they lack talent.<br />
                <span className="text-orange-500">They fail because they lack systems.</span>"
              </p>
            </div>
            <div className="absolute top-0 right-0 w-32 h-32 bg-orange-500/10 blur-3xl rounded-full"></div>
          </div>
          <p className="text-gray-400 mt-8 text-lg">Our partnership philosophy exists to replace chaos with structure—and effort with execution.</p>
        </div>
      </section>

      {/* Ownership & Scale */}
      <section className="py-24 bg-[#050505]">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-3xl font-bold mb-6">Ownership Comes Before Scale</h2>
              <p className="text-gray-400 text-lg mb-8">Zryoss partnerships are designed so you build a real asset.</p>
              <ul className="space-y-4 mb-8">
                <li className="flex items-center gap-3 text-white"><CheckCircle2 className="text-orange-500" /> Partners own their brands</li>
                <li className="flex items-center gap-3 text-white"><CheckCircle2 className="text-orange-500" /> Partners own their client relationships</li>
                <li className="flex items-center gap-3 text-white"><CheckCircle2 className="text-orange-500" /> Partners build real businesses</li>
              </ul>
              <p className="text-sm text-gray-500 border-l-2 border-white/20 pl-4">Scale is encouraged only after ownership and stability are established. There is no shortcut to credibility.</p>
            </div>
            <div className="grid grid-cols-1 gap-6">
              <div className="bg-[#111] p-6 rounded-2xl border border-white/5 flex items-center gap-4">
                <div className="w-12 h-12 bg-orange-500/10 rounded-lg flex items-center justify-center text-orange-500"><Target /></div>
                <div><h4 className="font-bold text-white">Focus</h4><p className="text-xs text-gray-500">Relationships & Growth</p></div>
              </div>
              <div className="bg-[#111] p-6 rounded-2xl border border-white/5 flex items-center gap-4">
                <div className="w-12 h-12 bg-blue-500/10 rounded-lg flex items-center justify-center text-blue-500"><ShieldCheck /></div>
                <div><h4 className="font-bold text-white">Stability</h4><p className="text-xs text-gray-500">Built on Systems</p></div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Systems Over Individuals */}
      <section className="py-24 bg-[#0a0a0a]">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <h2 className="text-3xl font-bold mb-12">Systems Over Individuals</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              { title: "No Founder Dependency", desc: "Businesses don’t depend on founders presence." },
              { title: "No Individual Exec Dependency", desc: "Execution doesn’t depend on single individuals." },
              { title: "No Quality Variance", desc: "Quality doesn’t depend on personal effort." }
            ].map((item, i) => (
              <div key={i} className="bg-white/5 p-8 rounded-3xl border border-white/5 hover:border-orange-500/30 transition-all">
                <Layers className="mx-auto mb-6 text-orange-500" size={32} />
                <h3 className="text-xl font-bold mb-4">{item.title}</h3>
                <p className="text-gray-400 text-sm">{item.desc}</p>
              </div>
            ))}
          </div>
          <div className="mt-16 inline-flex items-center gap-6 px-8 py-4 rounded-full bg-[#050505] border border-white/10">
            <span className="text-gray-300 font-medium">Everything runs on:</span>
            <span className="text-white text-sm bg-white/10 px-3 py-1 rounded-md">Defined workflows</span>
            <span className="text-white text-sm bg-white/10 px-3 py-1 rounded-md">Centralized operations</span>
            <span className="text-white text-sm bg-white/10 px-3 py-1 rounded-md">Platform governance</span>
          </div>
          <p className="text-orange-500 font-bold mt-8">Because systems scale better than people.</p>
        </div>
      </section>

      {/* Centralized Execution */}
      <section className="py-24 bg-[#050505]">
        <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-16">
          <div>
            <h2 className="text-3xl font-bold mb-6">Execution Is Centralized for a Reason</h2>
            <p className="text-gray-400 mb-8">In most partnerships, execution is left to individuals—which leads to inconsistency and burnout.</p>
            <div className="bg-[#111] rounded-2xl p-8 border border-white/10">
              <h4 className="text-white font-bold mb-4">Zryoss centralizes execution so that:</h4>
              <ul className="space-y-3">
                {["Quality remains consistent", "Risk is controlled", "Partners focus on growth", "Clients receive reliable delivery"].map((item, i) => (
                  <li key={i} className="flex gap-3 text-gray-300"><div className="w-1.5 h-1.5 bg-orange-500 rounded-full mt-2"></div>{item}</li>
                ))}
              </ul>
            </div>
          </div>
          <div className="flex flex-col justify-center text-center">
            <h3 className="text-2xl font-bold text-white mb-2">This is not loss of control.</h3>
            <h3 className="text-2xl font-bold text-orange-500 mb-6">This is operational maturity.</h3>
            <div className="w-24 h-1 bg-white/10 mx-auto"></div>
          </div>
        </div>
      </section>

      {/* Growth Must Be Earned */}
      <section className="py-24 bg-[#0a0a0a]">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-3xl font-bold text-center mb-16">Growth Must Be Earned, Not Promised</h2>
          <div className="grid md:grid-cols-2 gap-12">
            <div className="bg-red-500/5 p-8 rounded-3xl border border-red-500/10">
              <h3 className="text-xl font-bold text-red-500 mb-6 flex items-center gap-2"><AlertTriangle size={20} /> Zryoss Does Not Promise</h3>
              <ul className="space-y-4">
                <li className="text-gray-400">Fixed income</li>
                <li className="text-gray-400">Guaranteed success</li>
                <li className="text-gray-400">Passive earnings without effort</li>
              </ul>
            </div>
            <div className="bg-green-500/5 p-8 rounded-3xl border border-green-500/10">
              <h3 className="text-xl font-bold text-green-500 mb-6 flex items-center gap-2"><CheckCircle2 size={20} /> Growth Happens When</h3>
              <ul className="space-y-4">
                <li className="text-gray-400">Real clients are acquired</li>
                <li className="text-gray-400">Real services are delivered</li>
                <li className="text-gray-400">Real value is created</li>
              </ul>
            </div>
          </div>
          <p className="text-center font-bold text-white mt-12 text-lg">Partnership rewards performance, not participation.</p>
        </div>
      </section>

      {/* Expansion & Transparency */}
      <section className="py-24 bg-[#050505]">
        <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-16">
          {/* Expansion */}
          <div>
            <h2 className="text-2xl font-bold mb-6 flex items-center gap-3"><TrendingUp className="text-orange-500" /> Limited, Controlled Expansion</h2>
            <p className="text-gray-400 mb-6">Zryoss does not believe in unlimited hierarchies or recruitment-driven structures. All expansion models are clearly defined, strictly limited, and system-controlled.</p>
            <p className="text-sm text-gray-500">This keeps the ecosystem clean, compliant, and credible.</p>
          </div>
          {/* Transparency */}
          <div>
            <h2 className="text-2xl font-bold mb-6 flex items-center gap-3"><Lightbulb className="text-orange-500" /> Transparency Over Hype</h2>
            <div className="grid grid-cols-2 gap-4">
              <div className="bg-[#111] p-4 rounded-xl text-center border border-white/5"><span className="text-gray-300 text-sm">Clear Roles</span></div>
              <div className="bg-[#111] p-4 rounded-xl text-center border border-white/5"><span className="text-gray-300 text-sm">Transparent Charges</span></div>
              <div className="bg-[#111] p-4 rounded-xl text-center border border-white/5"><span className="text-gray-300 text-sm">Defined Boundaries</span></div>
              <div className="bg-[#111] p-4 rounded-xl text-center border border-white/5"><span className="text-gray-300 text-sm">Written Logic</span></div>
            </div>
            <p className="text-sm text-gray-500 mt-6">There is no ambiguity—because ambiguity damages trust.</p>
          </div>
        </div>
      </section>

      {/* Long Term */}
      <section className="py-24 bg-[#0a0a0a] text-center">
        <div className="max-w-4xl mx-auto px-6">
          <Clock className="text-white mx-auto mb-6" size={48} />
          <h2 className="text-3xl font-bold mb-8">Long-Term Thinking Over Short-Term Wins</h2>
          <div className="flex flex-wrap justify-center gap-8 text-lg font-medium text-gray-300 mb-12">
            <span>Years, not weeks</span>
            <span className="w-1 h-1 bg-white/20 rounded-full self-center"></span>
            <span>Businesses, not campaigns</span>
            <span className="w-1 h-1 bg-white/20 rounded-full self-center"></span>
            <span>Stability, not spikes</span>
          </div>
          <div className="bg-white/5 p-8 rounded-3xl inline-block border border-white/10">
            <p className="text-xl text-orange-500 italic font-medium mb-2">"Will this still work at scale?"</p>
            <p className="text-sm text-gray-500">If the answer is no—it is not implemented.</p>
          </div>
        </div>
      </section>

      {/* Mutual Accountability */}
      <section className="py-24 bg-[#050505] border-t border-white/5">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-3xl font-bold text-center mb-16">Mutual Accountability</h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="p-8 rounded-3xl bg-[#111] border border-white/5">
              <h3 className="text-xl font-bold text-white mb-6 flex items-center gap-2"><Users className="text-gray-400" /> Partner Responsibility</h3>
              <ul className="space-y-3 text-gray-400">
                <li>Build the market</li>
                <li>Maintain relationships</li>
                <li>Represent the brand ethically</li>
              </ul>
            </div>
            <div className="p-8 rounded-3xl bg-[#111] border border-orange-500/20">
              <h3 className="text-xl font-bold text-white mb-6 flex items-center gap-2"><ShieldCheck className="text-orange-500" /> Zryoss Responsibility</h3>
              <ul className="space-y-3 text-gray-400">
                <li>Manage execution</li>
                <li>Maintain systems</li>
                <li>Protect quality and governance</li>
              </ul>
            </div>
          </div>
          <p className="text-center text-white font-bold mt-10">Both sides are accountable.</p>
        </div>
      </section>

      {/* Why it Matters */}
      <section className="py-24 bg-[#0a0a0a]">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-3xl font-bold mb-10">Why This Philosophy Matters</h2>
          <div className="grid grid-cols-2 gap-6 mb-12">
            <div className="text-left bg-[#050505] p-6 rounded-xl border border-white/5"><span className="text-gray-400">It protects partner credibility</span></div>
            <div className="text-left bg-[#050505] p-6 rounded-xl border border-white/5"><span className="text-gray-400">It protects client trust</span></div>
            <div className="text-left bg-[#050505] p-6 rounded-xl border border-white/5"><span className="text-gray-400">It protects ecosystem integrity</span></div>
            <div className="text-left bg-[#050505] p-6 rounded-xl border border-white/5"><span className="text-gray-400">It ensures long-term sustainability</span></div>
          </div>
          <h3 className="text-2xl font-bold text-orange-500">Zryoss does not grow fast. It grows right.</h3>
        </div>
      </section>

      {/* Commitment CTA */}
      <section className="py-24 bg-[#050505] relative overflow-hidden text-center">
        <div className="max-w-4xl mx-auto px-6 relative z-10">
          <h2 className="text-4xl font-bold mb-8">Partnership Is a Commitment, Not a Transaction</h2>
          <p className="text-xl text-gray-400 mb-12">Joining Zryoss is not about buying access. It is about committing to a structured way of building a business.</p>

          <div className="flex justify-center gap-6 mb-12 text-left">
            <div className="bg-white/5 px-6 py-4 rounded-xl border border-white/10">
              <p className="text-white font-bold">Systems</p>
              <p className="text-xs text-gray-500">over shortcuts</p>
            </div>
            <div className="bg-white/5 px-6 py-4 rounded-xl border border-white/10">
              <p className="text-white font-bold">Ownership</p>
              <p className="text-xs text-gray-500">over hype</p>
            </div>
            <div className="bg-white/5 px-6 py-4 rounded-xl border border-white/10">
              <p className="text-white font-bold">Execution</p>
              <p className="text-xs text-gray-500">over promises</p>
            </div>
          </div>

          <div className="p-8 bg-gradient-to-r from-orange-900/20 to-black rounded-3xl border border-orange-500/20 mb-12">
            <h3 className="text-2xl font-bold text-white mb-2">One Philosophy. One System. Real Businesses.</h3>
            <p className="text-gray-400">This philosophy guides IPP & BPP partnerships, Ecosystem expansion, and Long-term scale.</p>
          </div>

          <div className="flex flex-col sm:flex-row justify-center gap-6">
            <Link to="/apply" className="px-8 py-4 bg-orange-500 text-white font-bold rounded-full hover:bg-orange-600 transition-colors flex items-center gap-2">
              Apply for Partnership <ArrowRight size={20} />
            </Link>
          </div>
        </div>
      </section>

    </div>
  );
};

export default Philosophy;
