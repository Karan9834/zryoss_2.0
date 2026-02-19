import React, { useState, useRef } from "react";
import {
  Mail,
  Phone,
  MapPin,
  ArrowRight,
  ShieldCheck,
  AlertCircle,
  ExternalLink
} from "lucide-react";
import FadeUp from "../../components/animations/FadeUp";
import { useEmail } from "../../hooks/useEmail";

const INPUT_CLASSES = `
  w-full px-4 py-4 rounded-xl
  bg-white/[0.03] border border-white/10
  text-white placeholder-gray-500
  outline-none transition-all duration-300
  focus:border-orange-500/50 focus:bg-white/[0.05]
`;

export default function Contact() {
  const formRef = useRef();
  const { sendEmail, loading } = useEmail();

  const [formData, setFormData] = useState({
    first_name: "",
    email: "",
    companyName: "",
    phone: "",
    message: "",
  });

  const [errors, setErrors] = useState({});

  const officeAddress =
    "Office No. 837-A, 8th Floor, JMD Megapolis, Sohna Road, Gurgaon, Haryana";

  const googleMapsUrl = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(
    officeAddress
  )}`;

  const validate = () => {
    let tempErrors = {};
    if (!formData.first_name.trim()) tempErrors.first_name = "Full Name is required";

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!formData.email) {
      tempErrors.email = "Email is required";
    } else if (!emailRegex.test(formData.email)) {
      tempErrors.email = "Valid work email required";
    }

    if (!formData.phone) {
      tempErrors.phone = "Phone number is required";
    } else if (formData.phone.length !== 10) {
      tempErrors.phone = "Enter a valid 10-digit number";
    }

    if (!formData.message.trim() || formData.message.length < 5)
      tempErrors.message = "Message is too short";

    setErrors(tempErrors);
    return Object.keys(tempErrors).length === 0;
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    let finalValue = value;

    if (name === "phone") {
      finalValue = value.replace(/\D/g, "").slice(0, 10);
    }

    setFormData({ ...formData, [name]: finalValue });

    if (errors[name]) {
      const newErrors = { ...errors };
      delete newErrors[name];
      setErrors(newErrors);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (validate()) {
      const result = await sendEmail(formRef);
      if (result.success) {
        alert("Success! We'll be in touch.");
        setFormData({
          first_name: "",
          email: "",
          companyName: "",
          phone: "",
          message: "",
        });
      } else {
        alert("Failed to send message. Please try again.");
      }
    }
  };

  const ErrorBubble = ({ msg }) => (
    <div className="absolute -top-10 left-0 bg-orange-600 text-white text-[10px] font-bold py-1 px-3 rounded-lg animate-bounce shadow-lg flex items-center gap-1 z-20">
      <AlertCircle size={12} /> {msg}
      <div className="absolute -bottom-1 left-4 w-2 h-2 bg-orange-600 rotate-45"></div>
    </div>
  );

  return (
    <section className="relative py-24 bg-[#050505] text-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 relative z-10">

        {/* TOP HEADER - SPANNING TOP */}
        <div className="mb-16">
          <FadeUp>
            <span className="text-orange-500 text-xs font-bold tracking-[0.3em] uppercase">
              Enterprise execution
            </span>
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white leading-[1.15] tracking-tight mb-5">
              Let's build <span className="text-gray-500 italic">together.</span>
            </h1>
          </FadeUp>
        </div>

        <div className="grid lg:grid-cols-12 gap-12 items-start">
          {/* LEFT SIDE: Contact Info + Map */}
          <div className="lg:col-span-5 space-y-6">

            {/* 1. Office Address - NOW AT TOP */}
            <FadeUp delay={0.1}>
              <a
                href={googleMapsUrl}
                target="_blank"
                rel="noreferrer"
                className="flex items-start gap-4 p-6 rounded-[2rem] bg-white/[0.02] border border-white/10 hover:border-orange-500/30 transition-all group"
              >
                <div className="w-12 h-12 rounded-2xl bg-orange-500/10 flex items-center justify-center border border-orange-500/20 group-hover:bg-orange-500/20 transition-colors">
                  <MapPin className="text-orange-500" size={22} />
                </div>
                <div>
                  <p className="text-[10px] font-bold text-orange-500 tracking-[0.2em] uppercase mb-3">Our Base</p>
                  <p className="text-sm text-gray-300 leading-relaxed font-medium">{officeAddress}</p>
                </div>
              </a>
            </FadeUp>

            {/* 2. Map - ADJUSTED HEIGHT */}
            <FadeUp delay={0.2}>
              <div className="group relative w-full h-[320px] rounded-[2rem] overflow-hidden border border-white/10 shadow-2xl ">
                <iframe
                  title="Zryoss Map"
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3509.324227092892!2d77.031915676182!3d28.409440393510515!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390d2380f68e0d99%3A0x6b162b7754b5df5b!2sJMD%20Megapolis!5e0!3m2!1sen!2sin!5m2!1sen!2sin"
                  className="w-full h-full grayscale invert opacity-70 group-hover:opacity-100 group-hover:grayscale-0 transition-all duration-700"
                  loading="lazy"
                />
                <a
                  href={googleMapsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="absolute bottom-6 right-6 bg-orange-500 p-3.5 rounded-full hover:scale-110 transition-transform shadow-[0_10px_30px_-5px_rgba(249,115,22,0.5)] active:scale-95"
                >
                  <ExternalLink size={20} className="text-black" />
                </a>
              </div>
            </FadeUp>

            {/* 3. Email & Phone Cards */}
            <div className="grid sm:grid-cols-2 gap-6 mt-8">
              <FadeUp delay={0.3}>
                <div className="p-6 rounded-[2rem] bg-white/[0.02] border border-white/10 space-y-4 hover:border-orange-500/20 transition-all h-full">
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 rounded-lg bg-orange-500/10 flex items-center justify-center">
                      <Mail className="text-orange-500" size={16} />
                    </div>
                    <span className="text-[10px] font-bold tracking-widest text-orange-500 uppercase">Mail Us</span>
                  </div>
                  <div className="space-y-2">
                    <a href="mailto:sales@zryoss.com" className="block text-xs text-gray-400 hover:text-white transition-colors">sales@zryoss.com</a>
                    <a href="mailto:info@zryoss.com" className="block text-xs text-gray-400 hover:text-white transition-colors">info@zryoss.com</a>
                  </div>
                </div>
              </FadeUp>

              <FadeUp delay={0.4}>
                <div className="p-6 rounded-[2rem] bg-white/[0.02] border border-white/10 hover:border-orange-500/20 transition-all space-y-4 h-full">
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 rounded-lg bg-orange-500/10 flex items-center justify-center">
                      <Phone className="text-orange-500" size={16} />
                    </div>
                    <span className="text-[10px] font-bold tracking-widest text-orange-500 uppercase">Call Us</span>
                  </div>
                  <div className="space-y-1">
                    <a href="tel:01169269633" className="block text-sm text-white font-bold hover:text-orange-400 transition-colors">011 6926 9633</a>
                    <p className="text-[9px] text-gray-500 uppercase font-bold">Mon–Fri, 10AM–6PM</p>
                  </div>
                </div>
              </FadeUp>
            </div>
          </div>

          {/* RIGHT SIDE: Form */}
          <div className="lg:col-span-7">
            <FadeUp delay={0.2}>
              <div className="bg-[#0c0c0c] border border-white/10 rounded-[2.5rem] p-8 md:p-12 shadow-[0_20px_60px_-15px_rgba(0,0,0,0.5)]">
                <div className="flex items-center gap-4 mb-10">
                  <div className="w-12 h-12 rounded-2xl bg-orange-500/10 flex items-center justify-center border border-orange-500/20 shadow-inner">
                    <ShieldCheck className="text-orange-500" size={24} />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold">Secure Project Inquiry</h3>
                    <p className="text-xs text-gray-500 uppercase tracking-widest mt-1">Response within 24 business hours</p>
                  </div>
                </div>

                <form ref={formRef} onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-6">
                    <div className="relative">
                      {errors.first_name && <ErrorBubble msg={errors.first_name} />}
                      <input name="first_name" value={formData.first_name} placeholder="Full Name" onChange={handleInputChange} className={INPUT_CLASSES} />
                    </div>

                    <div className="relative">
                      {errors.email && <ErrorBubble msg={errors.email} />}
                      <input name="email" value={formData.email} placeholder="Work Email" onChange={handleInputChange} className={INPUT_CLASSES} />
                    </div>
                  </div>

                  <div className="grid md:grid-cols-2 gap-6">
                    <div className="relative">
                      <input name="companyName" value={formData.companyName} placeholder="Company (Optional)" onChange={handleInputChange} className={INPUT_CLASSES} />
                    </div>

                    <div className="relative">
                      {errors.phone && <ErrorBubble msg={errors.phone} />}
                      <div className="relative flex items-center">
                        <div className="absolute left-4 flex items-center gap-2 pr-3 border-r border-white/10 h-6">
                          <img src="https://flagcdn.com/w20/in.png" alt="India" className="w-4 h-auto opacity-80" />
                          <span className="text-orange-500 font-bold text-sm">+91</span>
                        </div>
                        <input name="phone" type="tel" value={formData.phone} placeholder="Phone Number" onChange={handleInputChange} className={`${INPUT_CLASSES} pl-24`} />
                      </div>
                    </div>
                  </div>

                  <div className="relative">
                    {errors.message && <ErrorBubble msg={errors.message} />}
                    <textarea name="message" rows={5} value={formData.message} placeholder="Tell us about your requirements and goals..." onChange={handleInputChange} className={`${INPUT_CLASSES} resize-none`} />
                  </div>

                  <button
                    type="submit"
                    disabled={loading}
                    className="group w-full bg-orange-500 text-white hover:bg-orange-600 font-extrabold py-5 rounded-2xl transition-all flex items-center justify-center gap-3 shadow-[0_15px_30px_-5px_rgba(249,115,22,0.3)] hover:shadow-[0_20px_40px_-5px_rgba(249,115,22,0.4)] active:scale-[0.98] disabled:opacity-50"
                  >
                    <span>{loading ? "Initializing..." : "Send Secure Message"}</span>
                    {!loading && <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />}
                  </button>

                  <p className="text-[10px] text-center text-gray-600 uppercase tracking-widest mt-6">
                    Your data is secure and protected under NDAs by default.
                  </p>
                </form>
              </div>
            </FadeUp>
          </div>
        </div>
      </div>
    </section>
  );
}