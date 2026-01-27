import React, { useState, useRef } from "react";
import { X, Mail, Phone, AlertCircle, ShieldCheck, ArrowRight, CheckCircle2 } from "lucide-react";
import { useEmail } from "../hooks/useEmail";

export default function ContactModal({ open, onClose }) {
    const formRef = useRef();
    const { sendEmail, loading: emailLoading } = useEmail();
    const [formData, setFormData] = useState({
        first_name: "",
        email: "",
        phone: "",
        message: "",
    });
    const [errors, setErrors] = useState({});
    const [submitted, setSubmitted] = useState(false);

    if (!open) return null;

    const validate = () => {
        let tempErrors = {};
        if (!formData.first_name.trim()) tempErrors.first_name = "Full Name is required";

        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!formData.email) {
            tempErrors.email = "Email is required";
        } else if (!emailRegex.test(formData.email)) {
            tempErrors.email = "Please enter a valid work email";
        }

        if (!formData.phone) {
            tempErrors.phone = "Phone number is required";
        } else if (formData.phone.length < 10) {
            tempErrors.phone = "Enter a valid 10-digit number";
        }

        if (!formData.message.trim()) {
            tempErrors.message = "Please share your requirements";
        } else if (formData.message.length < 10) {
            tempErrors.message = "Message is too short";
        }

        setErrors(tempErrors);
        return Object.keys(tempErrors).length === 0;
    };

    const handlePhoneChange = (e) => {
        const val = e.target.value.replace(/\D/g, "").slice(0, 10);
        setFormData({ ...formData, phone: val });
        if (errors.phone) {
            const newErrors = { ...errors };
            delete newErrors.phone;
            setErrors(newErrors);
        }
    };

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
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
                setSubmitted(true);
                setFormData({
                    first_name: "",
                    email: "",
                    phone: "",
                    message: "",
                });
                setTimeout(() => {
                    setSubmitted(false);
                    onClose();
                }, 3000);
            } else {
                alert("Failed to send message. Please try again.");
            }
        }
    };

    // Error Bubble Component
    const ErrorBubble = ({ msg }) => (
        <div className="absolute -top-10 left-0 bg-orange-600 text-white text-[10px] font-bold py-1.5 px-3 rounded-lg animate-in fade-in slide-in-from-bottom-1 z-50 flex items-center gap-1.5 shadow-xl">
            <AlertCircle size={12} /> {msg}
            <div className="absolute -bottom-1 left-4 w-2 h-2 bg-orange-600 rotate-45" />
        </div>
    );

    return (
        <div className="fixed inset-0 z-[999] flex items-center justify-center p-4">
            {/* BACKDROP - Little fade, subtle blur */}
            <div onClick={onClose} className="absolute inset-0 bg-black/60 backdrop-blur-[2px] transition-all duration-500" />

            {/* MODAL CONTAINER - Gray sided bg, premium dark */}
            <div className="relative w-full max-w-5xl bg-[#121212] border border-white/10 rounded-[2.5rem] overflow-hidden grid md:grid-cols-2 shadow-[0_30px_100px_-20px_rgba(0,0,0,0.8)] animate-in zoom-in duration-300">

                {/* LEFT PANEL: Coffee Aesthetic & Branding */}
                <div className="hidden md:flex flex-col justify-between p-12 relative overflow-hidden group">
                    {/* Background Image - Black Coffee Aesthetic */}
                    <div className="absolute inset-0 z-0">
                        <img
                            src="https://images.unsplash.com/photo-1514432324607-a09d9b4aefdd?q=80&w=1974&auto=format&fit=crop"
                            alt="Black Coffee Aesthetic"
                            className="w-full h-full object-cover opacity-30 grayscale group-hover:scale-110 transition-transform duration-1000"
                        />
                        <div className="absolute inset-0 bg-gradient-to-tr from-[#121212] via-transparent to-[#121212]/50" />
                    </div>

                    <div className="relative z-10">
                        <div className="w-14 h-14 bg-orange-500 text-black rounded-2xl flex items-center justify-center mb-8 shadow-lg shadow-orange-500/20 transform -rotate-6">
                            <ShieldCheck size={32} />
                        </div>
                        <h2 className="text-5xl font-extrabold leading-[1.1] mb-4 text-white">
                            Your Brand. <br />
                            <span className="text-orange-500 italic">Our Engine.</span>
                        </h2>
                        <p className="text-gray-400 text-lg font-light max-w-xs border-l-2 border-orange-500 pulse pl-4">
                            Zryoss manages your backend while you build your brand empire.
                        </p>
                    </div>

                    <div className="relative z-10 space-y-6">
                        <div className="flex items-center gap-4">
                            <div className="h-[1px] w-12 bg-orange-500/50" />
                            <p className="text-orange-500 text-xs font-bold uppercase tracking-[0.3em]">Execution Focused</p>
                        </div>
                        <div className="space-y-3">
                            <p className="text-white font-bold text-xl">Global Operating Platform</p>
                            <div className="flex flex-col gap-2">
                                <span className="text-gray-400 text-sm flex items-center gap-3 group-hover:text-white transition-colors">
                                    <Mail size={16} className="text-orange-500" /> sales@zryoss.com
                                </span>
                                <span className="text-gray-400 text-sm flex items-center gap-3">
                                    <Phone size={16} className="text-orange-500" /> +91 011 6926 9633
                                </span>
                            </div>
                        </div>
                    </div>
                </div>

                {/* RIGHT PANEL: Form & Service Details */}
                <div className="p-8 md:p-12 bg-[#121212] relative flex flex-col justify-center">
                    <button onClick={onClose} className="absolute top-8 right-8 p-3 rounded-full hover:bg-white/5 transition-all text-gray-500 hover:text-white active:scale-95">
                        <X size={24} />
                    </button>

                    {submitted ? (
                        <div className="flex flex-col items-center justify-center text-center animate-in fade-in zoom-in duration-500">
                            <div className="w-20 h-20 bg-green-500/10 rounded-full flex items-center justify-center mb-6 border border-green-500/20">
                                <CheckCircle2 size={48} className="text-green-500" />
                            </div>
                            <h3 className="text-3xl font-bold mb-3">Enquiry Received</h3>
                            <p className="text-gray-400">Our success team will reach out to you within 4 business hours.</p>
                        </div>
                    ) : (
                        <>
                            <div className="mb-10">
                                <h3 className="text-2xl font-bold mb-4 flex items-center gap-3">
                                    Partner with Zryoss <div className="h-[2px] flex-grow bg-gradient-to-r from-orange-500 to-transparent opacity-30" />
                                </h3>
                            </div>

                            <form ref={formRef} onSubmit={handleSubmit} className="space-y-5">
                                <div className="relative">
                                    {errors.first_name && <ErrorBubble msg={errors.first_name} />}
                                    <input
                                        name="first_name"
                                        className={`w-full px-6 py-4 rounded-xl bg-white/[0.04] border ${errors.first_name ? "border-orange-600" : "border-white/10"} focus:border-orange-500/50 focus:bg-white/[0.06] outline-none transition-all placeholder:text-gray-600 text-white`}
                                        placeholder="Full Name"
                                        value={formData.first_name}
                                        onChange={handleChange}
                                    />
                                </div>

                                <div className="relative">
                                    {errors.email && <ErrorBubble msg={errors.email} />}
                                    <input
                                        name="email"
                                        className={`w-full px-6 py-4 rounded-xl bg-white/[0.04] border ${errors.email ? "border-orange-600" : "border-white/10"} focus:border-orange-500/50 focus:bg-white/[0.06] outline-none transition-all placeholder:text-gray-600 text-white`}
                                        placeholder="Work Email"
                                        value={formData.email}
                                        onChange={handleChange}
                                    />
                                </div>

                                <div className="relative">
                                    {errors.phone && <ErrorBubble msg={errors.phone} />}
                                    <div className="relative flex items-center">
                                        <div className="absolute left-4 flex items-center gap-2 pr-3 border-r border-white/10 h-6">
                                            <img src="https://flagcdn.com/w20/in.png" alt="India" className="w-4 h-auto opacity-80" />
                                            <span className="text-orange-500 font-bold text-sm">+91</span>
                                        </div>
                                        <input
                                            name="phone"
                                            type="tel"
                                            className={`w-full px-6 py-4 pl-24 rounded-xl bg-white/[0.04] border ${errors.phone ? "border-orange-600" : "border-white/10"} focus:border-orange-500/50 focus:bg-white/[0.06] outline-none transition-all text-white placeholder:text-gray-600`}
                                            placeholder="Phone Number"
                                            value={formData.phone}
                                            onChange={handlePhoneChange}
                                        />
                                    </div>
                                </div>

                                <div className="relative">
                                    {errors.message && <ErrorBubble msg={errors.message} />}
                                    <textarea
                                        name="message"
                                        rows="3"
                                        className={`w-full px-6 py-4 rounded-xl bg-white/[0.04] border ${errors.message ? "border-orange-600" : "border-white/10"} focus:border-orange-500/50 focus:bg-white/[0.06] outline-none resize-none transition-all placeholder:text-gray-600 text-white`}
                                        placeholder="Briefly describe your business requirement..."
                                        value={formData.message}
                                        onChange={handleChange}
                                    />
                                </div>

                                <button
                                    type="submit"
                                    disabled={submitted || emailLoading}
                                    className="group w-full bg-orange-500 hover:bg-orange-600 text-white font-extrabold py-5 rounded-2xl transition-all flex items-center justify-center gap-3 shadow-[0_15px_30px_-5px_rgba(249,115,22,0.3)] hover:shadow-[0_20px_40px_-5px_rgba(249,115,22,0.4)] hover:-translate-y-1 active:scale-95 disabled:opacity-50"
                                >
                                    <span className="flex items-center gap-2">
                                        {emailLoading ? "Sending..." : "Send Message"} <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
                                    </span>
                                </button>
                            </form>

                            <div className="mt-8"></div>
                        </>
                    )}
                </div>
            </div>
        </div>
    );
}
