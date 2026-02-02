import { useState, useRef } from "react";
import { Link } from "react-router-dom";
import FadeUp from "../../components/animations/FadeUp";
import { AlertCircle, CheckCircle2, ArrowRight, ArrowUpRight } from "lucide-react";
import { useEmail } from "../../hooks/useEmail";
import { blogsData } from "./blogsData";
import HeroContact from "../Home/HeroContact";

export default function Blog() {
  const formRef = useRef();
  const { sendEmail, loading } = useEmail();
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState("idle"); // idle, success
  const [error, setError] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");

    if (!email) {
      setError("Email is required");
      return;
    }
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      setError("Please enter a valid email address");
      return;
    }

    const result = await sendEmail(formRef);

    if (result.success) {
      setStatus("success");
      setEmail("");
    } else {
      setError("Failed to subscribe. Please try again later.");
    }
  };

  return (
    <div className="bg-[#050505] min-h-screen">
      {/* ================= HERO SECTION ================= */}
      <section className="relative overflow-hidden min-h-screen flex items-center pt-16 pb-16">
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
                  Knowledge Hub
                </div>

                <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold leading-tight mb-6">
                  Our Blog & <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-orange-600">Insights</span>
                </h1>

                <p className="text-gray-200 leading-relaxed text-lg mb-8 max-w-2xl">
                  Thought leadership on business platforms, execution systems,
                  and scalable growth models. Explore our latest articles, expert opinions,
                  and deep dives into how we're shaping the future of enterprise innovation
                  and operational excellence. Stay updated with the core insights driving
                  the global business ecosystem.
                </p>


                {/* <div className="flex flex-wrap gap-4 items-center">
                  <div className="flex -space-x-3">
                    {[1, 2, 3, 4].map((i) => (
                      <div key={i} className="w-10 h-10 rounded-full border-2 border-[#050505] bg-gray-800 flex items-center justify-center overflow-hidden">
                        <img src={`https://i.pravatar.cc/100?img=${i + 10}`} alt="Reader" className="w-full h-full object-cover" />
                      </div>
                    ))}
                  </div>
                  <div className="text-sm text-gray-400">
                    <span className="text-white font-semibold">1,000+</span> professionals reading monthly
                  </div>
                </div> */}
              </FadeUp>
            </div>

            {/* Right Column: Image */}
            <div className="relative block">
              <FadeUp delay={0.2}>
                <div className="absolute inset-0 bg-orange-500/20 blur-[100px] rounded-full" />
                <img
                  src="/Resources_pages_images/Blog  Insights.png"
                  alt="Blog & Insights"
                  className="relative rounded-3xl shadow-2xl border border-white/10 transform hover:scale-[1.02] transition-transform duration-500 object-cover w-full h-auto aspect-[4/3]"
                />
              </FadeUp>
            </div>
          </div>
        </div>
      </section>

      {/* ================= BLOG LIST ================= */}
      <section className="py-24 relative overflow-hidden">
        {/* Glow */}
        <div className="absolute top-1/2 right-0 -translate-y-1/2 translate-x-1/2 w-[500px] h-[500px] bg-orange-500/5 blur-[120px] rounded-full" />

        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
            {blogsData.map((blog, i) => (
              <FadeUp key={blog.id} delay={i * 0.1}>
                <div className="group relative bg-white/5 border border-white/10 rounded-[24px] overflow-hidden hover:border-orange-500/30 transition-all duration-500 flex flex-col h-full shadow-[0_18px_70px_rgba(0,0,0,0.55)] hover:scale-[1.02] hover:-translate-y-2">
                  {/* Image Section */}
                  <div className="relative aspect-video overflow-hidden">
                    <img
                      src={blog.image}
                      alt={blog.title}
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#050505]/50 via-transparent to-transparent" />
                  </div>

                  {/* Content Section */}
                  <div className="p-6 flex flex-col flex-grow relative z-10">
                    <div className="text-[10px] text-orange-400 uppercase tracking-widest mb-3 font-bold opacity-80 flex items-center gap-2">
                      <span className="w-1.5 h-1.5 rounded-full bg-orange-500" />
                      {blog.date}
                    </div>

                    <h3 className="text-[17px] font-bold text-white mb-3 line-clamp-2 leading-snug group-hover:text-orange-400 transition-colors duration-500">
                      {blog.title}
                    </h3>

                    <p className="text-gray-400 text-[13px] mb-6 line-clamp-3 leading-relaxed font-light">
                      {blog.excerpt}
                    </p>

                    <div className="mt-auto">
                      <Link
                        to={`/resources/blog/${blog.id}`}
                        className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-white/10 text-white text-[11px] font-semibold hover:bg-orange-500 hover:border-orange-500 hover:shadow-lg transition-all"
                      >
                        Read More
                        <ArrowUpRight className="w-3.5 h-3.5" />
                      </Link>
                    </div>
                  </div>
                </div>
              </FadeUp>
            ))}
          </div>
        </div>
      </section>

      {/* ================= NEWSLETTER SECTION ================= */}
      <section className="relative py-32 overflow-hidden border-t border-white/5">
        <div className="absolute -top-40 right-1/4 w-[600px] h-[600px] 
                        bg-orange-500/10 blur-[160px]" />

        <div className="relative max-w-7xl mx-auto px-6">
          <FadeUp>
            <div className="grid lg:grid-cols-2 gap-20 items-center">

              {/* IMAGE */}
              <div className="relative flex justify-center lg:justify-start">
                <div className="absolute inset-0 bg-orange-500/5 blur-3xl rounded-full" />
                <img
                  src="/weekly-insight-1.png"
                  alt="Weekly Insights"
                  className="relative w-full max-w-sm aspect-square rounded-[32px] transform hover:scale-105 transition-transform duration-700 object-cover"
                />
              </div>

              {/* CONTENT */}
              <div>
                <p className="text-orange-500 text-xs uppercase tracking-[0.3em] mb-4 font-bold">
                  Weekly Insights
                </p>

                <h2 className="text-4xl md:text-5xl font-bold text-white leading-tight">
                  Get Stories in Your Inbox <br />
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-orange-600">Twice a Month</span>
                </h2>

                <p className="mt-8 max-w-xl text-gray-400 text-lg font-light leading-relaxed">
                  Curated insights, platform updates, and execution-focused
                  perspectives from our ecosystem.
                </p>

                {status === "success" ? (
                  <div className="mt-10 p-6 bg-green-500/10 border border-green-500/20 rounded-2xl flex items-center gap-3 text-green-400 backdrop-blur-sm">
                    <CheckCircle2 />
                    <span className="font-medium">Thanks for subscribing! Check your inbox soon.</span>
                  </div>
                ) : (
                  <form ref={formRef} onSubmit={handleSubmit} className="mt-10 max-w-xl relative group/form">
                    <div className="flex flex-col sm:flex-row gap-4">
                      <div className="flex-1 relative">
                        <input
                          type="email"
                          name="email"
                          value={email}
                          onChange={(e) => {
                            setEmail(e.target.value);
                            setError("");
                          }}
                          placeholder="Enter your email address"
                          className={`w-full h-full px-6 py-5 rounded-2xl bg-white/5 
                                      border text-white placeholder-gray-500 focus:outline-none
                                      transition-all duration-300 ${error ? 'border-red-500 focus:border-red-500' : 'border-white/10 focus:border-orange-500'}`}
                        />
                        {error && <div className="absolute -bottom-6 left-0 flex items-center gap-1 text-red-500 text-xs font-medium"><AlertCircle size={14} /> {error}</div>}
                      </div>

                      <button
                        type="submit"
                        disabled={loading}
                        className="px-10 py-5 rounded-2xl bg-gradient-to-r from-orange-500 to-orange-600 
                                   text-white font-bold
                                   hover:from-orange-600 hover:to-orange-700
                                   hover:shadow-[0_0_40px_rgba(249,115,22,0.3)]
                                   hover:scale-[1.02] active:scale-[0.98]
                                   transition-all duration-300 disabled:opacity-70 flex items-center justify-center gap-2"
                      >
                        {loading ? "Subscribing..." : "Subscribe"}
                        {!loading && <ArrowRight size={18} />}
                      </button>
                    </div>
                  </form>
                )}

                <p className="mt-10 text-xs text-gray-500 flex items-center gap-2">
                  <span className="w-1 h-1 rounded-full bg-orange-500/50" />
                  Your privacy is important. Unsubscribe anytime.
                </p>
              </div>

            </div>
          </FadeUp>
        </div>
      </section>

      {/* ================= HERO CONTACT SECTION ================= */}
      <HeroContact />
    </div>
  );
}
