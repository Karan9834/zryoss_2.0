import { useState, useEffect, useRef } from "react";
import {
  Mail,
  Phone,
  Clock,
  Send,
  CheckCircle2,
  Sparkles,
  Users,
  TrendingUp,
  Award,
  Briefcase,
  Upload,
  X,
  AlertCircle,
} from "lucide-react";
import { useEmail } from "../../hooks/useEmail";

/* ================= FadeUp ================= */
const FadeUp = ({ children, delay = 0 }) => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setIsVisible(true), delay);
    return () => clearTimeout(timer);
  }, [delay]);

  return (
    <div
      className={`transform transition-all duration-1000 ${isVisible ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"
        }`}
    >
      {children}
    </div>
  );
};

/* ================= MAIN ================= */
export default function ApplyPage() {
  const formRef = useRef();
  const { sendEmail, loading } = useEmail();
  const [formData, setFormData] = useState({
    first_name: "",
    email: "",
    phone: "",
    companyName: "",
    partnerRole: "",
    partnerType: "ipp",
    experience: "",
    message: "",
    heardFrom: "website",
  });

  const [errors, setErrors] = useState({});
  const [file, setFile] = useState(null);
  const [submitted, setSubmitted] = useState(false);

  const validate = () => {
    let tempErrors = {};
    if (!formData.first_name.trim()) tempErrors.first_name = "Full Name is required";

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!formData.email) {
      tempErrors.email = "Email is required";
    } else if (!emailRegex.test(formData.email)) {
      tempErrors.email = "Invalid email format";
    }

    if (!formData.phone.trim()) {
      tempErrors.phone = "Phone number is required";
    } else if (formData.phone.length < 10) {
      tempErrors.phone = "Invalid phone number";
    }

    if (!formData.message.trim()) tempErrors.message = "Message is required";

    setErrors(tempErrors);
    return Object.keys(tempErrors).length === 0;
  };

  const handleSubmit = async (e) => {
    if (e) e.preventDefault();
    if (validate()) {
      const result = await sendEmail(formRef);
      if (result.success) {
        setSubmitted(true);
      } else {
        alert("Failed to submit application. Please try again later.");
      }
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
    if (errors[name]) {
      setErrors({ ...errors, [name]: "" });
    }
  };

  const handleFileChange = (e) => {
    if (e.target.files && e.target.files[0]) setFile(e.target.files[0]);
  };

  const benefits = [
    {
      icon: <TrendingUp className="w-6 h-6" />,
      title: "Performance-Based Earnings",
      desc: "Earnings are generated only through real business closures.",
    },
    {
      icon: <Users className="w-6 h-6" />,
      title: "Centralized Execution",
      desc: "Zryoss manages delivery, demos, compliance & operations.",
    },
    {
      icon: <Award className="w-6 h-6" />,
      title: "No MLM / No Recruitment",
      desc: "No downlines, no hierarchy, no passive income model.",
    },
  ];

  /* ================= SUCCESS ================= */
  if (submitted) {
    return (
      <section className="min-h-screen bg-[#050505] text-white flex items-center justify-center">
        <div className="text-center max-w-xl px-6">
          <CheckCircle2 className="w-16 h-16 text-green-500 mx-auto mb-6" />
          <h2 className="text-4xl font-black mb-4">
            Application Received
          </h2>
          <p className="text-gray-400 mb-8">
            Our team will review your application and connect with you shortly.
          </p>
          <button
            onClick={() => setSubmitted(false)}
            className="px-6 py-3 bg-white/10 rounded-lg"
          >
            Submit Another Application
          </button>
        </div>
      </section>
    );
  }

  return (
    <section className="min-h-screen bg-[#050505] text-white py-20">
      <div className="max-w-7xl mx-auto px-6">

        {/* ================= HERO ================= */}
        <div className="text-center max-w-7xl mx-auto mb-20">
          <FadeUp>
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-orange-500/10 border border-orange-500/20 mb-6">
              <Sparkles className="w-4 h-4 text-orange-500" />
              <span className="text-sm text-orange-400">
                Partner Program
              </span>
            </div>

            <h1 className="text-4xl md:text-6xl font-black mb-6">
              Join the Zryoss{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-red-500">
                Partner Network
              </span>
            </h1>

            <p className="text-lg text-gray-400">
              Business-first partnerships focused on real execution,
              real sales, and zero hype.
            </p>
          </FadeUp>
        </div>

        {/* ================= BENEFITS ================= */}
        <FadeUp delay={100}>
          <div className="grid md:grid-cols-3 gap-6 mb-20">
            {benefits.map((b, i) => (
              <div
                key={i}
                className="p-6 rounded-2xl bg-white/[0.04] border border-white/10"
              >
                <div className="w-12 h-12 bg-orange-500/10 text-orange-500 rounded-xl flex items-center justify-center mb-4">
                  {b.icon}
                </div>
                <h3 className="font-bold mb-2">{b.title}</h3>
                <p className="text-sm text-gray-400">{b.desc}</p>
              </div>
            ))}
          </div>
        </FadeUp>

        {/* ================= CONTENT + FORM ================= */}
        <div className="grid lg:grid-cols-5 gap-10">

          {/* ================= LEFT CONTENT ================= */}
          <div className="lg:col-span-2 space-y-6">

            {/* IPP */}
            <div className="group p-6 rounded-2xl bg-white/[0.03] border border-white/10 hover:border-orange-500/50 hover:bg-white/[0.05] transition-all duration-500 hover:scale-[1.02]">
              <h3 className="text-xl font-bold text-orange-400 mb-2 group-hover:text-blue-400 transition-colors">
                Independent Prime Partner (IPP)
              </h3>
              <p className="text-sm text-gray-400 mb-4">
                IPPs run their own brand and sales operations while leveraging
                Zryoss's centralized delivery, demo, and compliance systems.
              </p>
              <ul className="space-y-2 text-sm text-gray-400">
                <li className="flex items-center gap-2">
                  <div className="w-1.5 h-1.5 rounded-full bg-orange-500" />
                  Owns clients & sales strategy
                </li>
                <li className="flex items-center gap-2">
                  <div className="w-1.5 h-1.5 rounded-full bg-orange-500" />
                  Can build internal sales teams
                </li>
                <li className="flex items-center gap-2">
                  <div className="w-1.5 h-1.5 rounded-full bg-orange-500" />
                  Full control over growth
                </li>
              </ul>
              <p className="text-xs text-gray-500 mt-4 italic">
                Not a franchise · Not MLM · Not passive income
              </p>
            </div>

            {/* BPP */}
            <div className="group p-6 rounded-2xl bg-white/[0.03] border border-white/10 hover:border-orange-500/50 hover:bg-white/[0.05] transition-all duration-500 hover:scale-[1.02]">
              <h3 className="text-xl font-bold text-orange-400 mb-2 group-hover:text-blue-400 transition-colors">
                Business Prime Partner (BPP)
              </h3>
              <p className="text-sm text-gray-400 mb-4">
                BPPs are sales-focused partners earning only on successful
                business closures.
              </p>
              <ul className="space-y-2 text-sm text-gray-400">
                <li className="flex items-center gap-2">
                  <div className="w-1.5 h-1.5 rounded-full bg-orange-500" />
                  Promotes Zryoss services
                </li>
                <li className="flex items-center gap-2">
                  <div className="w-1.5 h-1.5 rounded-full bg-orange-500" />
                  Shares qualified leads
                </li>
                <li className="flex items-center gap-2">
                  <div className="w-1.5 h-1.5 rounded-full bg-orange-500" />
                  Supports deal closure
                </li>
              </ul>
              <p className="text-xs text-gray-500 mt-4 italic">
                No recruitment · No downlines · No guaranteed income
              </p>
            </div>

            {/* Contact */}
            <div className="p-8 rounded-2xl bg-gradient-to-br from-orange-500/20 to-transparent border border-orange-500/30 shadow-2xl shadow-orange-500/5">
              <h4 className="font-bold text-xl mb-6">Need help?</h4>
              <div className="space-y-4">
                <a href="mailto:partners@zryoss.com" className="flex items-center gap-4 text-gray-300 hover:text-white transition-colors group">
                  <div className="w-10 h-10 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center group-hover:border-orange-500/50 transition-all">
                    <Mail className="w-5 h-5 text-orange-400" />
                  </div>
                  <div>
                    <p className="text-[10px] uppercase tracking-widest text-gray-500 font-bold">Email Us</p>
                    <p className="text-sm font-medium">partners@zryoss.com</p>
                  </div>
                </a>

                <a href="tel:01169269633" className="flex items-center gap-4 text-gray-300 hover:text-white transition-colors group">
                  <div className="w-10 h-10 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center group-hover:border-orange-500/50 transition-all">
                    <Phone className="w-5 h-5 text-orange-400" />
                  </div>
                  <div>
                    <p className="text-[10px] uppercase tracking-widest text-gray-500 font-bold">Call for Support</p>
                    <p className="text-sm font-medium">011 6926 9633</p>
                  </div>
                </a>

                <div className="flex items-center gap-4 text-gray-400">
                  <div className="w-10 h-10 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center">
                    <Clock className="w-5 h-5 text-gray-500" />
                  </div>
                  <div>
                    <p className="text-[10px] uppercase tracking-widest text-gray-600 font-bold">Operating Hours</p>
                    <p className="text-sm font-medium">Mon–Fri, 10AM–6PM IST</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* ================= FORM (FULLY PRESENT) ================= */}
          <div className="lg:col-span-3">
            <div className="p-8 rounded-2xl bg-[#0a0a0a] border border-white/10">
              <h2 className="text-2xl font-bold mb-6">
                Partner Application
              </h2>

              <form ref={formRef} onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <input
                    name="first_name"
                    value={formData.first_name}
                    onChange={handleChange}
                    placeholder="Full Name"
                    className={`w-full px-4 py-3 bg-white/5 border rounded-lg ${errors.first_name ? 'border-red-500' : 'border-white/10'}`}
                  />
                  {errors.first_name && <span className="text-red-500 text-xs flex items-center gap-1 mt-1"><AlertCircle size={10} /> {errors.first_name}</span>}
                </div>
                <div>
                  <input
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="Email"
                    className={`w-full px-4 py-3 bg-white/5 border rounded-lg ${errors.email ? 'border-red-500' : 'border-white/10'}`}
                  />
                  {errors.email && <span className="text-red-500 text-xs flex items-center gap-1 mt-1"><AlertCircle size={10} /> {errors.email}</span>}
                </div>
                <div>
                  <input
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    placeholder="Phone"
                    className={`w-full px-4 py-3 bg-white/5 border rounded-lg ${errors.phone ? 'border-red-500' : 'border-white/10'}`}
                  />
                  {errors.phone && <span className="text-red-500 text-xs flex items-center gap-1 mt-1"><AlertCircle size={10} /> {errors.phone}</span>}
                </div>

                <input name="companyName" value={formData.companyName} onChange={handleChange} placeholder="Company Name" className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-lg" />

                <div>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    rows="4"
                    placeholder="Tell us about your business"
                    className={`w-full px-4 py-3 bg-white/5 border rounded-lg ${errors.message ? 'border-red-500' : 'border-white/10'}`}
                  />
                  {errors.message && <span className="text-red-500 text-xs flex items-center gap-1 mt-1"><AlertCircle size={10} /> {errors.message}</span>}
                </div>

                <button
                  type="submit"
                  disabled={loading}
                  className="w-full bg-gradient-to-r from-orange-600 to-red-600 py-4 rounded-lg font-bold flex justify-center items-center gap-2 disabled:opacity-70 disabled:cursor-not-allowed"
                >
                  {loading ? "Submitting..." : "Submit Application"}
                  {!loading && <Send className="w-5 h-5" />}
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
