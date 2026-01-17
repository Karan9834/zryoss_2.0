import React, { useState } from "react";
import { ArrowRight, AlertCircle } from "lucide-react";

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
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    message: ""
  });

  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);

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

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validate()) {
      setIsSubmitting(true);
      // Simulate API call
      setTimeout(() => {
        alert("Message sent to sales@zryoss.com successfully!");
        setFormData({ firstName: "", lastName: "", email: "", phone: "", message: "" });
        setIsSubmitting(false);
      }, 1500);
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
          <div className="space-y-4 text-sm text-gray-300 max-w-md leading-relaxed">
            <p>
              Office No. 837-A, 8th Floor <br />
              JMD Megapolis, Sohna Road <br />
              Gurgaon, Haryana, India
            </p>

            <p>
              <a href="mailto:sales@zryoss.com" className="hover:text-orange-400 transition-colors underline underline-offset-4">sales@zryoss.com</a>
              <span className="mx-2">/</span>
              <a href="mailto:info@zryoss.com" className="hover:text-orange-400 transition-colors underline underline-offset-4">info@zryoss.com</a>
            </p>

            <p>
              <a href="tel:01169269633" className="hover:text-orange-400 transition-colors underline underline-offset-4">011 6926 9633</a>
            </p>
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

            <form onSubmit={handleSubmit} className="space-y-5">
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
                disabled={isSubmitting}
                className="w-full mt-4 bg-orange-400 hover:bg-orange-500 text-white font-semibold py-4 rounded-xl flex items-center justify-between px-6 transition-all disabled:opacity-70 disabled:cursor-not-allowed"
              >
                {isSubmitting ? "Sending..." : "Lets Connect"}
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
