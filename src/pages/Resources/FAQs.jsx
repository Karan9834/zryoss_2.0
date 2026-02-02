import React, { useState } from "react";
import { Plus, Minus, HelpCircle, LayoutGrid, Workflow, Building2, Scale, ArrowRight } from "lucide-react";
import FadeUp from "../../components/animations/FadeUp";
import HeroContact from "../Home/HeroContact";

const faqsData = [
  {
    category: "ABOUT ZRYOSS",
    icon: <HelpCircle className="w-5 h-5" />,
    questions: [
      {
        q: "1. What exactly is ZRYOSS?",
        a: `ZRYOSS is a Business Operating System — not just a company. 
        It helps individuals and organizations build, operate, and scale independent brands using a structured backend system managed by Kryoss Softech Private Limited and its ecosystem brands.
        <br/><br/>
        ZRYOSS provides:
        <ul class="list-disc pl-5 mt-2 space-y-1">
          <li>Execution frameworks</li>
          <li>Technology platforms</li>
          <li>Delivery management</li>
          <li>Account support</li>
          <li>Quality governance</li>
        </ul>
        <br/>
        You focus on business growth — ZRYOSS manages operations.`
      },
      {
        q: "2. Is ZRYOSS a franchise or investment program?",
        a: "No. ZRYOSS is not a franchise, MLM, or investment-based system. It’s a business enablement platform where IPPs and BPPs operate independently under their own brand names using ZRYOSS’s system and support."
      },
      {
        q: "3. Who owns ZRYOSS?",
        a: "ZRYOSS is a brand developed and operated by <strong>Kryoss Softech Private Limited</strong>, and supported by group companies like <strong>Clink Consultancy Services Private Limited</strong>. These companies manage technology, HR, operations, and service execution within the ecosystem."
      },
      {
        q: "4. What makes ZRYOSS different from other business platforms?",
        a: `Unlike traditional platforms, ZRYOSS focuses on:
        <ul class="list-disc pl-5 mt-2 space-y-1">
          <li>Execution, not just training</li>
          <li>Systems, not people dependency</li>
          <li>Long-term operations, not short-term results</li>
          <li>Real backend teams and brands, not outsourcing</li>
        </ul>
        <br/>
        It’s a living ecosystem that connects brands, vendors, and partners under one structure.`
      }
    ]
  },
  {
    category: "ABOUT IPP & BPP",
    icon: <LayoutGrid className="w-5 h-5" />,
    questions: [
      {
        q: "5. What is an IPP (Independent Prime Partner)?",
        a: `An IPP is an individual or small team who wants to build their own brand under a supported structure.
        <br/><br/>
        ZRYOSS provides:
        <ul class="list-disc pl-5 mt-2 space-y-2 text-gray-400">
          <li><strong>Brand setup</strong> (logo, website, profiles)</li>
          <li><strong>6 months</strong> of backend and marketing support</li>
          <li>Client demo, delivery, and account management</li>
          <li>Operational handling by ZRYOSS teams</li>
        </ul>
        <br/>
        <strong>Cost:</strong> ₹50,000 (one-time setup)`
      },
      {
        q: "6. What is a BPP (Independent Business Partner)?",
        a: `A BPP is a larger-scale business partner who can handle multiple verticals and manage their own IPPs under them.
        <br/><br/>
        ZRYOSS provides:
        <ul class="list-disc pl-5 mt-2 space-y-2 text-gray-400">
          <li>Multi-vertical brand setup</li>
          <li>Dedicated Account Manager</li>
          <li>Operational & delivery management</li>
          <li>Demo and pre-sales support</li>
        </ul>
        <br/>
        <strong>Cost:</strong> ₹1,50,000 (one-time setup)`
      },
      {
        q: "7. Can IPPs and BPPs create their own sub-partners?",
        a: "Yes. IPP and BPP models allow limited-level sub-partnerships (up to Level 3) for local expansion and passive income — but all demos, execution, and delivery remain managed by ZRYOSS to maintain quality and control."
      },
      {
        q: "8. Who handles client delivery — IPP/BPP or ZRYOSS?",
        a: `All client deliveries are handled by ZRYOSS backend teams and execution brands like:
        <ul class="grid grid-cols-2 gap-2 mt-2 text-sm text-orange-400 font-medium">
          <li>• Kryoss Softech</li>
          <li>• Clink HR</li>
          <li>• Adkryoss</li>
          <li>• Edulinkers</li>
          <li>• Medikryoss</li>
          <li>• Kryoss Interiors</li>
          <li>• Vyombiz</li>
        </ul>
        <br/>
        Partners manage relationships and growth; ZRYOSS manages execution.`
      }
    ]
  },
  {
    category: "OPERATIONS & EXECUTION",
    icon: <Workflow className="w-5 h-5" />,
    questions: [
      {
        q: "9. How does ZRYOSS ensure delivery quality?",
        a: `Quality is controlled through a four-layer quality framework:
        <ol class="list-decimal pl-5 mt-2 space-y-2 text-gray-400">
          <li><strong>Pre-execution</strong> validation</li>
          <li><strong>In-progress</strong> review</li>
          <li><strong>Final</strong> verification</li>
          <li><strong>Post-delivery</strong> feedback</li>
        </ol>
        <br/>
        ZRYOSS has dedicated quality and account teams that monitor every stage.`
      },
      {
        q: "10. How are vendors managed?",
        a: `Vendors are:
        <ul class="list-disc pl-5 mt-2 space-y-1">
          <li>Pre-verified and onboarded</li>
          <li>Bound by SLAs</li>
          <li>Monitored for performance and timelines</li>
          <li>Replaced if standards drop</li>
        </ul>
        <br/>
        Vendors never operate independently — they work within the ZRYOSS system.`
      },
      {
        q: "11. Who do clients and partners talk to for support?",
        a: "Each IPP/BPP or client gets a Dedicated Account Manager. They handle: Communication & reporting, Escalations, Progress updates, Coordination between teams. No confusion, no multi-channel follow-ups."
      },
      {
        q: "12. What happens if a delay or issue occurs?",
        a: "Delays are managed through: Central tracking, Escalation management, Alternate resource planning. ZRYOSS ensures delivery continuity and transparent communication during issues."
      }
    ]
  },
  {
    category: "ABOUT THE ECOSYSTEM",
    icon: <Building2 className="w-5 h-5" />,
    questions: [
      {
        q: "13. What are ZRYOSS’s core execution brands?",
        a: `ZRYOSS powers multiple brands across industries:
        <br/><br/>
        <div class="overflow-x-auto">
          <table class="w-full border-collapse border border-white/10 text-sm">
            <thead>
              <tr class="bg-white/5 text-orange-400 uppercase tracking-widest text-[10px]">
                <th class="border border-white/10 p-3 text-left">Brand</th>
                <th class="border border-white/10 p-3 text-left">Focus Area</th>
              </tr>
            </thead>
            <tbody class="text-gray-400">
              <tr><td class="border border-white/10 p-3 font-bold text-white">Kryoss Softech</td><td class="border border-white/10 p-3">IT & Software Solutions</td></tr>
              <tr><td class="border border-white/10 p-3 font-bold text-white">Adkryoss</td><td class="border border-white/10 p-3">Digital Marketing & Growth</td></tr>
              <tr><td class="border border-white/10 p-3 font-bold text-white">Clink HR</td><td class="border border-white/10 p-3">HR & Recruitment</td></tr>
              <tr><td class="border border-white/10 p-3 font-bold text-white">Edulinkers</td><td class="border border-white/10 p-3">Education & EdTech SaaS</td></tr>
              <tr><td class="border border-white/10 p-3 font-bold text-white">Medikryoss</td><td class="border border-white/10 p-3">Healthcare & Medical IT</td></tr>
              <tr><td class="border border-white/10 p-3 font-bold text-white">Kryoss Interiors</td><td class="border border-white/10 p-3">Interior & Infrastructure</td></tr>
              <tr><td class="border border-white/10 p-3 font-bold text-white">Vyombiz</td><td class="border border-white/10 p-3">Business & Professional Services</td></tr>
            </tbody>
          </table>
        </div>
        <br/>
        Each brand executes in its domain while ZRYOSS governs quality and timelines.`
      },
      {
        q: "14. Can an IPP choose any business domain?",
        a: "Yes. IPP can select their preferred domain like IT, HR, Marketing, etc. BPPs can select multiple verticals and manage multiple IPPs."
      },
      {
        q: "15. How does ZRYOSS handle multi-brand coordination?",
        a: "All brands operate through one backend platform — ZRYOSS coordinates dependencies, reporting, and delivery timelines centrally."
      }
    ]
  },
  {
    category: "LEGAL & COMPLIANCE",
    icon: <Scale className="w-5 h-5" />,
    questions: [
      {
        q: "16. Is ZRYOSS a legally registered company?",
        a: "Yes. ZRYOSS operates under Kryoss Softech Private Limited (a legally registered company in India) and works with its group companies for domain-specific operations like Clink Consultancy Services Private Limited."
      },
      {
        q: "17. Are there written agreements or terms for partners?",
        a: "Yes. Every IPP/BPP onboarding includes a formal agreement defining: Scope of services, Roles and responsibilities, Commercial terms, Platform usage policies."
      },
      {
        q: "18. Does ZRYOSS comply with data protection and confidentiality?",
        a: "Yes. All client and partner data are handled under access-controlled systems, NDA and confidentiality terms, and role-based visibility only. Data is used strictly for operational purposes."
      },
      {
        q: "19. Can ZRYOSS operations change over time?",
        a: "Yes — systems evolve as the platform scales. Updates are always announced transparently, designed for better stability, and integrated into existing operations smoothly."
      },
      {
        q: "20. What kind of businesses benefit the most from ZRYOSS?",
        a: "ZRYOSS is ideal for: Professionals looking to start a business with structure, Agencies wanting backend execution support, Consultants aiming to scale without chaos, Businesses seeking operational clarity."
      }
    ]
  }
];

export default function FAQs() {
  const [activeId, setActiveId] = useState(null);

  const toggleFAQ = (id) => {
    setActiveId(activeId === id ? null : id);
  };

  return (
    <div className="bg-[#050505] text-white min-h-screen">
      {/* Hero Section */}
      <section className="relative overflow-hidden min-h-screen flex items-center pt-20 pb-16">
        {/* Background Effects */}
        <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
          <div className="absolute top-[-10%] right-[-5%] w-[600px] h-[600px] bg-orange-600/10 rounded-full blur-[120px]" />
          <div className="absolute bottom-[10%] left-[-10%] w-[400px] h-[400px] bg-purple-600/5 rounded-full blur-[100px]" />
        </div>

        <div className="max-w-7xl mx-auto px-6 relative z-10 w-full">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left Column: Content */}
            <div>
              <FadeUp>
                <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10 text-sm text-gray-200 mb-6">
                  <span className="w-2 h-2 rounded-full bg-[#FF6A00]" />
                  Transparency & Trust
                </div>

                <h1 className="text-4xl sm:text-5xl font-extrabold leading-tight mb-6 font-['Playfair_Display']">
                  Frequently Asked <span className="text-orange-500">Questions</span>
                </h1>

                <p className="text-gray-200 leading-relaxed text-lg mb-10">
                  Clear Answers. Transparent System. Real Structure. <br />
                  At ZRYOSS, we believe that clarity creates trust.
                </p>
              </FadeUp>
            </div>

            {/* Right Column: Image */}
            <div className="relative hidden lg:block">
              <FadeUp delay={0.2}>
                <div className="absolute inset-0 bg-orange-500/20 blur-[100px] rounded-full" />
                <img
                  src="/Resources_pages_images/What-is-an-FAQ-Page.jpg"
                  alt="FAQs"
                  className="relative rounded-3xl shadow-2xl border border-white/10 transform hover:scale-[1.02] transition-transform duration-500 object-cover w-full h-auto aspect-[4/3]"
                />
              </FadeUp>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Categories Section */}
      <section className="py-24 relative">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[1000px] h-[1000px] bg-orange-500/[0.03] blur-[150px] -z-10" />

        <div className="max-w-4xl mx-auto px-6">
          {faqsData.map((category, catIdx) => (
            <div key={catIdx} className="mb-24 last:mb-0">
              <FadeUp delay={catIdx * 0.1}>
                <div className="flex items-center gap-4 mb-10 pb-4 border-b border-white/10">
                  <div className="w-10 h-10 rounded-xl bg-orange-500/10 flex items-center justify-center text-orange-500">
                    {category.icon}
                  </div>
                  <h2 className="text-lg font-black tracking-[0.2em] text-orange-500 uppercase">{category.category}</h2>
                </div>

                <div className="space-y-4">
                  {category.questions.map((faq, qIdx) => {
                    const id = `${catIdx}-${qIdx}`;
                    const isOpen = activeId === id;
                    return (
                      <div
                        key={id}
                        className={`group rounded-[28px] border transition-all duration-500 ${isOpen ? "bg-white/[0.03] border-orange-500/50" : "bg-white/[0.01] border-white/5 hover:border-white/20"
                          }`}
                      >
                        <button
                          onClick={() => toggleFAQ(id)}
                          className="w-full px-8 py-7 flex items-center justify-between text-left focus:outline-none"
                        >
                          <span className={`text-xl font-bold transition-all duration-300 ${isOpen ? "text-orange-500" : "text-white"}`}>
                            {faq.q}
                          </span>
                          <div className={`w-10 h-10 rounded-full flex items-center justify-center transition-all duration-500 ${isOpen ? "bg-orange-500 text-white rotate-180 shadow-lg shadow-orange-500/20" : "bg-white/5 text-gray-500 group-hover:bg-white/10"
                            }`}>
                            {isOpen ? <Minus className="w-5 h-5" /> : <Plus className="w-5 h-5" />}
                          </div>
                        </button>

                        <div className={`overflow-hidden transition-all duration-500 ease-in-out ${isOpen ? "max-h-[1000px] opacity-100" : "max-h-0 opacity-0"
                          }`}>
                          <div className="px-8 pb-8">
                            <div className="w-full h-px bg-white/5 mb-8" />
                            <div className="text-gray-400 text-lg font-light leading-relaxed prose prose-invert prose-orange max-w-none"
                              dangerouslySetInnerHTML={{ __html: faq.a }}
                            />
                            {isOpen && (
                              <button className="mt-8 flex items-center gap-2 text-orange-500 font-bold text-sm tracking-widest uppercase hover:gap-4 transition-all">
                                Learn More about this process <ArrowRight className="w-4 h-4" />
                              </button>
                            )}
                          </div>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </FadeUp>
            </div>
          ))}

          {/* Final Insight Section */}
          <FadeUp delay={0.4}>
            <div className="mt-32 text-center relative">
              <div className="absolute inset-0 bg-orange-500/5 blur-[100px] -z-10" />
              <h3 className="text-3xl md:text-5xl font-black mb-8 italic tracking-tight font-['Playfair_Display']">Final <span className="text-orange-500">Insight</span></h3>
              <p className="text-2xl text-gray-400 font-light mb-12 leading-relaxed italic max-w-4xl mx-auto">
                "ZRYOSS is not a shortcut. It’s a system for serious professionals who want to build brands with structure, discipline, and real delivery power."
              </p>

              <div className="inline-block p-12 rounded-[50px] border border-white/5 bg-white/[0.02] backdrop-blur-3xl">
                <p className="text-white text-3xl font-black mb-4 tracking-tighter">Your Brand. Our Engine.</p>
                <div className="w-24 h-1.5 bg-orange-500 mx-auto rounded-full" />
              </div>
            </div>
          </FadeUp>
        </div>
      </section>

      {/* HeroContact Section */}
      <HeroContact />
    </div>
  );
}