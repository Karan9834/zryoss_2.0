import React, { useState, useRef } from "react";
import {
  Mail,
  Phone,
  MapPin,
  Globe,
  ArrowRight,
  ShieldCheck,
  AlertCircle,
} from "lucide-react";
import FadeUp from "../../components/animations/FadeUp";
import { useEmail } from "../../hooks/useEmail";

/* ---------- INPUT STYLES ---------- */
const INPUT_CLASSES = `
  w-full px-4 py-3.5 rounded-xl
  bg-[#0f0f0f]
  border border-white/10
  text-white placeholder-gray-500
  outline-none transition-all duration-200
  focus:border-orange-500/60
  focus:ring-1 focus:ring-orange-500/30
`;

/* ---------- MAIN COMPONENT ---------- */
export default function Contact() {
  const formRef = useRef();
  const { sendEmail, loading } = useEmail();
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    companyName: "",
    contactNumber: "",
    message: "",
  });
  const [errors, setErrors] = useState({});

  const mapEmbedUrl =
    "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3508.435967072558!2d77.0366883!3d28.436341!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390d1879c2980d23%3A0x676e2730626359d9!2sJMD%20Megapolis!5e0!3m2!1sen!2sin!4v1700000000000";

  const validate = () => {
    let tempErrors = {};
    if (!formData.fullName.trim()) tempErrors.fullName = "Full Name is required";

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!formData.email) {
      tempErrors.email = "Email is required";
    } else if (!emailRegex.test(formData.email)) {
      tempErrors.email = "Invalid email format";
    }

    const phoneRegex = /^[0-9+\-\s()]*$/;
    if (!formData.contactNumber) {
      tempErrors.contactNumber = "Phone number is required";
    } else if (!phoneRegex.test(formData.contactNumber) || formData.contactNumber.length < 10) {
      tempErrors.contactNumber = "Invalid phone number";
    }

    if (!formData.message.trim()) tempErrors.message = "Message is required";

    setErrors(tempErrors);
    return Object.keys(tempErrors).length === 0;
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((p) => ({ ...p, [name]: value }));
    // Clear error
    if (errors[name]) {
      setErrors((prev) => ({ ...prev, [name]: "" }));
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (validate()) {
      const result = await sendEmail(formRef);
      if (result.success) {
        alert("Enquiry submitted successfully!");
        setFormData({
          fullName: "",
          email: "",
          companyName: "",
          contactNumber: "",
          message: "",
        });
      } else {
        alert("Failed to send enquiry. Please try again later.");
      }
    }
  };

  return (
    <section className="py-28 bg-[#050505] text-white">
      <div className="max-w-7xl mx-auto px-6">

        {/* ---------- HEADER ---------- */}
        <FadeUp>
          <div className="max-w-3xl mb-20">
            <span className="text-xs uppercase tracking-[0.25em] text-orange-500 font-bold">
              Enterprise Contact
            </span>
            <h1 className="text-5xl md:text-6xl font-bold mt-4 leading-tight">
              Let’s talk about <br />
              <span className="text-gray-400">your business execution</span>
            </h1>
            <p className="mt-6 text-lg text-gray-400">
              Reach out to Zryoss for platform demos, partnerships, or
              enterprise-level execution support.
            </p>
          </div>
        </FadeUp>

        {/* ---------- GRID ---------- */}
        <div className="grid lg:grid-cols-12 gap-16 items-start">

          {/* ---------- LEFT: MAP + INFO ---------- */}
          <div className="lg:col-span-5 space-y-10">
            <FadeUp delay={0.1}>
              <div>
                <h3 className="flex items-center gap-2 text-xs uppercase tracking-widest text-gray-500 mb-3 font-bold">
                  <MapPin size={14} className="text-orange-500" />
                  Headquarters
                </h3>
                <p className="text-lg font-medium leading-relaxed">
                  Office No. 837-A, 8th Floor <br />
                  JMD Megapolis, Sohna Road <br />
                  Gurgaon, Haryana
                </p>
              </div>
            </FadeUp>

            {/* MAP – REAL & CLEAR */}
            <FadeUp delay={0.2}>
              <div className="relative aspect-square w-full rounded-3xl overflow-hidden border border-white/10 shadow-2xl">
                <iframe
                  title="Zryoss Headquarters"
                  src={mapEmbedUrl}
                  loading="lazy"
                  className="w-full h-full"
                />
                {/* Map label */}
                <div className="absolute bottom-5 left-5 right-5 bg-black/70 backdrop-blur-md border border-white/10 rounded-xl px-4 py-3 flex justify-between items-center">
                  <div>
                    <p className="text-xs text-orange-500 font-bold uppercase">
                      Gurgaon, India
                    </p>
                    <p className="text-[11px] text-gray-400">
                      GMT +5:30 IST
                    </p>
                  </div>
                  <Globe size={16} className="text-gray-400" />
                </div>
              </div>
            </FadeUp>

            {/* CONTACT CARDS */}
            <FadeUp delay={0.25}>
              <div className="grid grid-cols-2 gap-4">
                <div className="p-4 rounded-2xl bg-white/[0.03] border border-white/5">
                  <p className="text-xs text-gray-500 mb-1">Email</p>
                  <p className="font-semibold text-sm">info@zryoss.com</p>
                </div>
                <div className="p-4 rounded-2xl bg-white/[0.03] border border-white/5">
                  <p className="text-xs text-gray-500 mb-1">Phone</p>
                  <p className="font-semibold text-sm">+91 98765 43210</p>
                </div>
              </div>
            </FadeUp>
          </div>

          {/* ---------- RIGHT: FORM ---------- */}
          <div className="lg:col-span-7">
            <FadeUp delay={0.3}>
              <form
                ref={formRef}
                onSubmit={handleSubmit}
                className="bg-[#0c0c0c] border border-white/10 rounded-[2.5rem] p-8 md:p-12"
              >
                <div className="flex items-center gap-3 mb-10">
                  <div className="w-10 h-10 rounded-xl bg-orange-500/10 flex items-center justify-center">
                    <ShieldCheck className="text-orange-500" size={20} />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold">Secure Enquiry</h3>
                    <p className="text-xs text-gray-500">
                      Enterprise-grade communication
                    </p>
                  </div>
                </div>

                <div className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <input
                        name="fullName"
                        value={formData.fullName}
                        placeholder="Full Name"
                        onChange={handleInputChange}
                        className={`${INPUT_CLASSES} ${errors.fullName ? "border-red-500/50" : ""}`}
                      />
                      {errors.fullName && <span className="text-red-400 text-xs mt-1 flex items-center gap-1"><AlertCircle size={10} /> {errors.fullName}</span>}
                    </div>
                    <div>
                      <input
                        name="email"
                        type="text"
                        value={formData.email}
                        placeholder="Work Email"
                        onChange={handleInputChange}
                        className={`${INPUT_CLASSES} ${errors.email ? "border-red-500/50" : ""}`}
                      />
                      {errors.email && <span className="text-red-400 text-xs mt-1 flex items-center gap-1"><AlertCircle size={10} /> {errors.email}</span>}
                    </div>
                  </div>

                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <input
                        name="companyName"
                        value={formData.companyName}
                        placeholder="Company Name (Optional)"
                        onChange={handleInputChange}
                        className={INPUT_CLASSES}
                      />
                    </div>
                    <div>
                      <input
                        name="contactNumber"
                        value={formData.contactNumber}
                        placeholder="Phone Number"
                        onChange={handleInputChange}
                        className={`${INPUT_CLASSES} ${errors.contactNumber ? "border-red-500/50" : ""}`}
                      />
                      {errors.contactNumber && <span className="text-red-400 text-xs mt-1 flex items-center gap-1"><AlertCircle size={10} /> {errors.contactNumber}</span>}
                    </div>
                  </div>

                  <div>
                    <textarea
                      name="message"
                      rows={4}
                      value={formData.message}
                      placeholder="Briefly describe your requirement"
                      onChange={handleInputChange}
                      className={`${INPUT_CLASSES} resize-none ${errors.message ? "border-red-500/50" : ""}`}
                    />
                    {errors.message && <span className="text-red-400 text-xs mt-1 flex items-center gap-1"><AlertCircle size={10} /> {errors.message}</span>}
                  </div>

                  <button
                    type="submit"
                    disabled={loading}
                    className="w-full bg-orange-600 text-white hover:bg-orange-500 font-bold py-4 rounded-xl transition-all flex items-center justify-center gap-2 disabled:opacity-70 disabled:cursor-not-allowed"
                  >
                    {loading ? "Submitting..." : "Submit Enquiry"}
                    {!loading && <ArrowRight size={18} />}
                  </button>
                </div>
              </form>
            </FadeUp>
          </div>
        </div>
      </div>
    </section>
  );
}
