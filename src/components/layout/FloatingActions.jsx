import React, { useState, useEffect } from "react";
import { ArrowUp } from "lucide-react";
import { FaWhatsapp } from "react-icons/fa";

export default function FloatingActions() {
    const [showScroll, setShowScroll] = useState(false);

    useEffect(() => {
        const checkScroll = () => {
            if (window.scrollY > 300) {
                setShowScroll(true);
            } else {
                setShowScroll(false);
            }
        };

        window.addEventListener("scroll", checkScroll);
        return () => window.removeEventListener("scroll", checkScroll);
    }, []);

    const scrollToTop = () => {
        window.scrollTo({ top: 0, behavior: "smooth" });
    };

    return (
        <div className="fixed bottom-6 right-6 z-50 flex flex-col items-center gap-4">
            {/* Scroll To Top Button */}
            <button
                onClick={scrollToTop}
                className={`p-3 rounded-full bg-gray-600 text-white shadow-lg transition-all duration-300 hover:bg-gray-500 hover:-translate-y-1 ${showScroll ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10 pointer-events-none"
                    }`}
                aria-label="Scroll to top"
            >
                <ArrowUp size={20} />
            </button>

            {/* WhatsApp Button */}
            <a
                href="https://wa.me/918448909389"
                target="_blank"
                rel="noopener noreferrer"
                className="group relative flex items-center justify-center p-3.5 rounded-full bg-[#25D366] text-white shadow-xl transition-all duration-300 hover:bg-[#20bd5a] hover:scale-110"
                aria-label="Contact us on WhatsApp"
            >
                <FaWhatsapp size={24} />

                {/* Tooltip / Label */}
                <span className="absolute right-full mr-4 px-3 py-1.5 bg-white text-black text-xs font-semibold rounded-lg opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all whitespace-nowrap shadow-lg">
                    Message us
                    <div className="absolute top-1/2 -right-1 -translate-y-1/2 w-2 h-2 bg-white rotate-45" />
                </span>
            </a>
        </div>
    );
}
