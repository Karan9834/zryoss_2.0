import React, { useState, useRef, useEffect } from "react";
import {
  Mail,
  Phone,
  MapPin,
  ArrowRight,
  ArrowUpRight,
  ShieldCheck,
  AlertCircle,
  ExternalLink
} from "lucide-react";
import FadeUp from "../../components/animations/FadeUp";
import { useEmail } from "../../hooks/useEmail";

const INPUT_CLASSES = `
  w-full px-6 py-5 rounded-[20px]
  bg-white/[0.03] border border-white/10
  text-white placeholder-gray-500
  outline-none transition-all duration-500
  focus:border-orange-500/50 focus:bg-white/[0.05] focus:shadow-[0_0_30px_rgba(249,115,22,0.05)]
  font-light
`;

export default function Contact() {
  const formRef = useRef();
  const { sendEmail, loading } = useEmail();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

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
    <div className="absolute -top-10 left-0 bg-red-500 text-white text-[10px] font-bold py-1.5 px-4 rounded-full animate-bounce shadow-lg flex items-center gap-2 z-20 border border-white/10">
      <AlertCircle size={12} /> {msg}
      <div className="absolute -bottom-1 left-4 w-2 h-2 bg-red-500 rotate-45"></div>
    </div>
  );

  return (
    <section className="relative py-32 bg-[#050505] text-white overflow-hidden min-h-screen">
      {/* Background Ambience */}
      <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-orange-500/10 blur-[150px] rounded-full -translate-y-1/2 translate-x-1/2 pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-blue-500/5 blur-[130px] rounded-full translate-y-1/2 -translate-x-1/2 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        {/* TOP HEADER */}
        <div className="mb-20">
          <FadeUp>
            <p className="text-orange-500 text-xs font-bold tracking-[0.5em] uppercase mb-6">
              Establish Connection
            </p>
            <h1 className="text-5xl md:text-7xl font-bold tracking-tight leading-tight">
              Let's build <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-orange-600 italic">together.</span>
            </h1>
          </FadeUp>
        </div>

        <div className="grid lg:grid-cols-12 gap-16 items-start">
          {/* LEFT SIDE: Contact Info + Map */}
          <div className="lg:col-span-5 space-y-8">
            {/* 1. Office Address */}
            <FadeUp delay={0.1}>
              <a
                href={googleMapsUrl}
                target="_blank"
                rel="noreferrer"
                className="flex items-start gap-6 p-8 rounded-[32px] bg-white/5 border border-white/10 hover:border-orange-500/30 transition-all duration-500 group shadow-2xl hover:scale-[1.01]"
              >
                <div className="w-14 h-14 rounded-2xl bg-orange-500/10 flex items-center justify-center border border-orange-500/20 group-hover:bg-orange-500/20 transition-all duration-500 shadow-inner">
                  <MapPin className="text-orange-500" size={24} />
                </div>
                <div>
                  <p className="text-[10px] font-bold text-orange-500 tracking-[0.3em] uppercase mb-4">Location</p>
                  <p className="text-lg text-gray-300 leading-relaxed font-light">{officeAddress}</p>
                </div>
              </a>
            </FadeUp>

            {/* 2. Map */}
            <FadeUp delay={0.2}>
              <div className="group relative w-full h-[350px] rounded-[40px] overflow-hidden border border-white/10 shadow-3xl">
                <iframe
                  title="Zryoss Map"
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3509.324227092892!2d77.031915676182!3d28.409440393510515!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390d2380f68e0d99%3A0x6b162b7754b5df5b!2sJMD%20Megapolis!5e0!3m2!1sen!2sin!5m2!1sen!2sin"
                  className="w-full h-full grayscale invert opacity-40 group-hover:opacity-100 group-hover:grayscale-0 transition-all duration-1000"
                  loading="lazy"
                />
                <a
                  href={googleMapsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="absolute bottom-8 right-8 bg-orange-500 p-4 rounded-full hover:scale-110 transition-transform shadow-[0_15px_35px_-5px_rgba(249,115,22,0.5)] active:scale-95"
                >
                  <ExternalLink size={20} className="text-white" />
                </a>
              </div>
            </FadeUp>

            {/* 3. Email & Phone Cards */}
            <div className="grid sm:grid-cols-2 gap-6">
              <FadeUp delay={0.3}>
                <div className="p-8 rounded-[32px] bg-white/5 border border-white/10 space-y-6 hover:border-orange-500/20 transition-all duration-500 h-full shadow-2xl">
                  <div className="flex items-center gap-4">
                    <div className="w-10 h-10 rounded-xl bg-blue-500/10 flex items-center justify-center border border-blue-500/20">
                      <Mail className="text-blue-500" size={18} />
                    </div>
                    <span className="text-[10px] font-bold tracking-widest text-blue-500 uppercase">Email</span>
                  </div>
                  <div className="space-y-3">
                    <a href="mailto:sales@zryoss.com" className="block text-sm text-gray-400 hover:text-white transition-colors font-light tracking-wide">sales@zryoss.com</a>
                    <a href="mailto:info@zryoss.com" className="block text-sm text-gray-400 hover:text-white transition-colors font-light tracking-wide">info@zryoss.com</a>
                  </div>
                </div>
              </FadeUp>

              <FadeUp delay={0.4}>
                <div className="p-8 rounded-[32px] bg-white/5 border border-white/10 hover:border-orange-500/20 transition-all duration-500 space-y-6 h-full shadow-2xl">
                  <div className="flex items-center gap-4">
                    <div className="w-10 h-10 rounded-xl bg-orange-500/10 flex items-center justify-center border border-orange-500/20">
                      <Phone className="text-orange-500" size={18} />
                    </div>
                    <span className="text-[10px] font-bold tracking-widest text-orange-500 uppercase">Call</span>
                  </div>
                  <div className="space-y-2">
                    <a href="tel:01169269633" className="block text-xl text-white font-bold hover:text-orange-400 transition-colors">011 6926 9633</a>
                    <p className="text-[9px] text-gray-500 uppercase font-bold tracking-[0.2em]">Mon–Fri, 10AM–6PM</p>
                  </div>
                </div>
              </FadeUp>
            </div>
          </div>

          {/* RIGHT SIDE: Form */}
          <div className="lg:col-span-7">
            <FadeUp delay={0.2}>
              <div className="bg-[#0c0c0c] border border-white/10 rounded-[48px] p-8 md:p-14 shadow-3xl relative overflow-hidden group">
                <div className="absolute top-0 right-0 w-64 h-64 bg-orange-500/5 blur-[80px] rounded-full pointer-events-none group-hover:bg-orange-500/10 transition-colors duration-1000" />

                <div className="flex items-center gap-6 mb-12 relative z-10">
                  <div className="w-14 h-14 rounded-2xl bg-orange-500/10 flex items-center justify-center border border-orange-500/20 shadow-inner">
                    <ShieldCheck className="text-orange-500" size={28} />
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-white">Secure Inquiry</h3>
                    <p className="text-[10px] text-gray-500 uppercase tracking-[0.3em] font-bold mt-2">Response within 24 hours</p>
                  </div>
                </div>

                <form ref={formRef} onSubmit={handleSubmit} className="space-y-8 relative z-10">
                  <div className="grid md:grid-cols-2 gap-8">
                    <div className="relative">
                      {errors.first_name && <ErrorBubble msg={errors.first_name} />}
                      <input name="first_name" value={formData.first_name} placeholder="Full Name" onChange={handleInputChange} className={INPUT_CLASSES} />
                    </div>

                    <div className="relative">
                      {errors.email && <ErrorBubble msg={errors.email} />}
                      <input name="email" value={formData.email} placeholder="Work Email" onChange={handleInputChange} className={INPUT_CLASSES} />
                    </div>
                  </div>

                  <div className="grid md:grid-cols-2 gap-8">
                    <div className="relative">
                      <input name="companyName" value={formData.companyName} placeholder="Company (Optional)" onChange={handleInputChange} className={INPUT_CLASSES} />
                    </div>

                    <div className="relative">
                      {errors.phone && <ErrorBubble msg={errors.phone} />}
                      <div className="relative flex items-center group/input">
                        <div className="absolute left-6 flex items-center gap-2 pr-4 border-r border-white/10 h-6">
                          <img src="https://flagcdn.com/w20/in.png" alt="India" className="w-4 h-auto opacity-60" />
                          <span className="text-orange-500 font-bold text-sm">+91</span>
                        </div>
                        <input name="phone" type="tel" value={formData.phone} placeholder="Phone Number" onChange={handleInputChange} className={`${INPUT_CLASSES} pl-28`} />
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
<<<<<<< HEAD
                    className="w-full bg-orange-600 text-white hover:bg-orange-500 font-bold py-4 rounded-xl transition-all flex items-center justify-center gap-2 disabled:opacity-70 disabled:cursor-not-allowed"
=======
                    className="group w-full relative h-[70px] overflow-hidden rounded-[20px] bg-gradient-to-r from-orange-500 to-orange-600 font-bold text-white shadow-xl shadow-orange-500/20 transition-all duration-500 hover:scale-[1.02] active:scale-[0.98] disabled:opacity-50"
>>>>>>> ed11d59dc3576dac588ad0207c2f917481892cd9
                  >
                    <div className="absolute inset-0 bg-white/20 translate-y-full group-hover:translate-y-0 transition-transform duration-500 pointer-events-none" />
                    <div className="relative z-10 flex items-center justify-center gap-3">
                      <span>{loading ? "Transmitting..." : "Send Secure Message"}</span>
                      {!loading && <ArrowUpRight size={22} className="group-hover:rotate-45 transition-transform duration-500" />}
                    </div>
                  </button>

                  <p className="text-[10px] text-center text-gray-500 uppercase tracking-[0.4em] font-medium">
                    Privacy First • Secure Data • NDA Protected
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
