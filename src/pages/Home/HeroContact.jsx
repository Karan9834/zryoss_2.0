import React, { useState, useRef } from "react";
import { ArrowRight, AlertCircle } from "lucide-react";
import { useEmail } from "../../hooks/useEmail";

const countries = [
  { name: "India", flag: "https://flagcdn.com/w40/in.png" },
  { name: "UAE", flag: "https://flagcdn.com/w40/ae.png" },
  { name: "USA", flag: "https://flagcdn.com/w40/us.png" },
  { name: "UK", flag: "https://flagcdn.com/w40/gb.png" },
  { name: "Mexico", flag: "https://flagcdn.com/w40/mx.png" },
];

const INPUT =
  "w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white placeholder-gray-400 outline-none focus:border-orange-400/60 focus:ring-1 focus:ring-orange-400/20";
const ERROR_TEXT = "text-red-400 text-xs mt-1 flex items-center gap-1";

export default function HeroContact() {
  const formRef = useRef();
  const { sendEmail, loading } = useEmail();
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    message: ""
  });

  const [errors, setErrors] = useState({});

  const validate = () => {
    let tempErrors = {};
    if (!formData.firstName.trim()) tempErrors.firstName = "First Name is required";
    if (!formData.lastName.trim()) tempErrors.lastName = "Last Name is required";

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!formData.email) {
      tempErrors.email = "Email is required";
    } else if (!emailRegex.test(formData.email)) {
      tempErrors.email = "Invalid email format";
    }

    const phoneRegex = /^[0-9+\-\s()]*$/;
    if (!formData.phone) {
      tempErrors.phone = "Phone number is required";
    } else if (!phoneRegex.test(formData.phone) || formData.phone.length < 10) {
      tempErrors.phone = "Invalid phone number";
    }

    if (!formData.message.trim()) tempErrors.message = "Message is required";

    setErrors(tempErrors);
    return Object.keys(tempErrors).length === 0;
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
    // Clear error when user starts typing
    if (errors[name]) {
      setErrors({ ...errors, [name]: "" });
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (validate()) {
      const result = await sendEmail(formRef);
      if (result.success) {
        alert("Message sent to sales@zryoss.com successfully!");
        setFormData({ firstName: "", lastName: "", email: "", phone: "", message: "" });
      } else {
        alert("Failed to send message. Please try again later.");
      }
    }
  };

  return (
    <section className="relative min-h-screen flex items-center overflow-hidden bg-[#050505]">
      {/* BACKGROUND GLOW */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_left,_rgba(251,146,60,0.18),transparent_50%)]" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_right,_rgba(249,115,22,0.18),transparent_50%)]" />

      {/* ✅ same width + padding as navbar/footer */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-32 grid lg:grid-cols-12 gap-20 items-center">
        {/* LEFT CONTENT */}
        <div className="lg:col-span-6 space-y-10">
          <div>
            <p className="flex items-center gap-2 text-xs uppercase tracking-[0.35em] text-orange-400 mb-6">
              <span className="w-2 h-2 rounded-full bg-orange-400" />
              Contact Us
            </p>

            <h1 className="text-4xl md:text-5xl font-bold leading-tight text-white mb-6">
              Ready To Fuel Your <span className="text-orange-400">Vision</span>{" "}
              With <span className="block mt-3">AI-Powered Innovation?</span>
            </h1>
          </div>

          {/* CONTACT DETAILS */}
          {/* CONTACT DETAILS */}
{/* CONTACT DETAILS */}
<div className="max-w-md space-y-5">
  {/* Address */}
  <div className="rounded-2xl border border-white/10 bg-white/[0.04] backdrop-blur-xl p-5">
    <p className="text-sm font-bold text-white mb-2 tracking-wide">
      Office Address
    </p>
    <p className="text-sm text-gray-200 font-semibold leading-relaxed">
      Office No. 837-A, 8th Floor <br />
      JMD Megapolis, Sohna Road <br />
      Gurgaon, Haryana, India
    </p>
  </div>

  {/* Email + Phone Cards */}
  <div className="grid sm:grid-cols-2 gap-4">
    
    {/* ✅ Email Container (both emails in one) */}
    <div className="group rounded-2xl border border-white/10 bg-white/[0.04] backdrop-blur-xl p-5 hover:border-orange-400/40 hover:bg-orange-500/10 transition-all">
      <div className="flex items-start gap-3">
        <span className="mt-1 h-10 w-10 rounded-xl flex items-center justify-center bg-white/5 border border-white/10 group-hover:border-orange-400/40">
          {/* Email icon */}
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="18"
            height="18"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="text-orange-400"
          >
            <path d="m22 7-8.991 5.727a2 2 0 0 1-2.009 0L2 7" />
            <rect x="2" y="4" width="20" height="16" rx="2" />
          </svg>
        </span>

        <div className="leading-tight">
          {/* ✅ Bigger heading */}
          <p className="text-[13px] font-bold text-gray-200 tracking-[0.18em] uppercase mb-2">
            Email
          </p>

          <div className="flex flex-col gap-2">
            <a
              href="mailto:sales@zryoss.com"
              className="text-sm font-bold text-white hover:text-orange-400 transition-colors"
            >
              sales@zryoss.com
            </a>

            <a
              href="mailto:info@zryoss.com"
              className="text-sm font-bold text-white hover:text-orange-400 transition-colors"
            >
              info@zryoss.com
            </a>
          </div>
        </div>
      </div>
    </div>

    {/* ✅ Phone */}
    <a
      href="tel:01169269633"
      className="group rounded-2xl border border-white/10 bg-white/[0.04] backdrop-blur-xl p-5 hover:border-orange-400/40 hover:bg-orange-500/10 transition-all"
    >
      <div className="flex items-start gap-3">
        <span className="mt-1 h-10 w-10 rounded-xl flex items-center justify-center bg-white/5 border border-white/10 group-hover:border-orange-400/40">
          {/* Phone icon */}
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="18"
            height="18"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="text-orange-400"
          >
            <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.12.81.3 1.6.54 2.36a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.72-1.11a2 2 0 0 1 2.11-.45c.76.24 1.55.42 2.36.54A2 2 0 0 1 22 16.92z" />
          </svg>
        </span>

        <div className="leading-tight">
          {/* ✅ Bigger heading */}
          <p className="text-[13px] font-bold text-gray-200 tracking-[0.18em] uppercase mb-2">
            Phone
          </p>

          <p className="text-sm font-bold text-white">
            011 6926 9633
          </p>

          <p className="text-xs text-gray-400 mt-1">
            Mon–Sat, 10AM–6PM
          </p>
        </div>
      </div>
    </a>
  </div>
</div>


        </div>

        {/* RIGHT FORM */}
        <div className="lg:col-span-6">
          <div className="relative rounded-3xl border border-white/15 bg-white/[0.06] backdrop-blur-2xl p-8 md:p-10 shadow-2xl">
            {/* Decorative shape */}
            <div className="absolute -top-6 -right-6 w-20 h-20 border-2 border-orange-400/40 rounded-xl rotate-45" />

            <p className="text-lg mb-8 max-w-sm text-white/90">
              Partner With Experts Who Leverage AI & Tech To Transform Ideas
              Into Market-Leading Solutions.
            </p>

            <form ref={formRef} onSubmit={handleSubmit} className="space-y-5">
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <input
                    name="firstName"
                    value={formData.firstName}
                    onChange={handleChange}
                    placeholder="First Name"
                    className={`${INPUT} ${errors.firstName ? "border-red-500/50" : ""}`}
                  />
                  {errors.firstName && <span className={ERROR_TEXT}><AlertCircle size={10} /> {errors.firstName}</span>}
                </div>
                <div>
                  <input
                    name="lastName"
                    value={formData.lastName}
                    onChange={handleChange}
                    placeholder="Last Name"
                    className={`${INPUT} ${errors.lastName ? "border-red-500/50" : ""}`}
                  />
                  {errors.lastName && <span className={ERROR_TEXT}><AlertCircle size={10} /> {errors.lastName}</span>}
                </div>
              </div>

              <div>
                <input
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="Email"
                  className={`${INPUT} ${errors.email ? "border-red-500/50" : ""}`}
                />
                {errors.email && <span className={ERROR_TEXT}><AlertCircle size={10} /> {errors.email}</span>}
              </div>

              <div>
                <input
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  placeholder="Phone Number"
                  className={`${INPUT} ${errors.phone ? "border-red-500/50" : ""}`}
                />
                {errors.phone && <span className={ERROR_TEXT}><AlertCircle size={10} /> {errors.phone}</span>}
              </div>

              <div>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  rows="4"
                  placeholder="Message"
                  className={`${INPUT} resize-none ${errors.message ? "border-red-500/50" : ""}`}
                />
                {errors.message && <span className={ERROR_TEXT}><AlertCircle size={10} /> {errors.message}</span>}
              </div>

              <button
                type="submit"
                disabled={loading}
                className="w-full mt-4 bg-orange-400 hover:bg-orange-500 text-white font-semibold py-4 rounded-xl flex items-center justify-between px-6 transition-all disabled:opacity-70 disabled:cursor-not-allowed"
              >
                {loading ? "Sending..." : "Lets Connect"}
                <span className="rounded-lg p-2 bg-white/10">
                  <ArrowRight size={16} />
                </span>
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
