import React from "react";
import { motion } from "framer-motion";

const logos = [
    { id: 1, src: "/core-execution-model/clinkhr.jpg", alt: "Clink HR" },
    { id: 2, src: "/core-execution-model/edulinker.png", alt: "Edulinker" },
    { id: 3, src: "/core-execution-model/kryoss.jpg", alt: "Kryoss" },
    { id: 4, src: "/core-execution-model/medikryoss.png", alt: "Medikryoss" },
    { id: 5, src: "/core-execution-model/vyombiz.jpg", alt: "Vyombiz" },
];

// Use 4 sets of logos to ensure it covers even ultra-wide screens and loops smoothly
const allLogos = [...logos, ...logos, ...logos, ...logos];

const CoreBrands = () => {
    return (
        <section
            id="core-model"
            className="relative py-24 lg:py-32 bg-[#050505] overflow-hidden"
        >
            {/* Background Glow */}
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full bg-[radial-gradient(circle_at_center,rgba(249,115,22,0.03)_0%,transparent_70%)] pointer-events-none" />

            <div className="relative max-w-[90rem] mx-auto px-6 lg:px-28 xl:px-32">
                <div className="mb-16 text-center max-w-3xl mx-auto">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                    >
                        <span className="text-orange-500 text-xs font-bold tracking-[0.4em] uppercase block mb-6">
                            Platform Synergy
                        </span>
                        <h2 className="text-4xl md:text-5xl font-bold leading-tight text-white mb-6">
                            Core Execution <span className="text-orange-500">Brands</span>
                        </h2>
                        <div className="w-20 h-1 bg-gradient-to-r from-orange-500 to-transparent mx-auto rounded-full opacity-50" />
                    </motion.div>
                </div>

                <div className="relative flex overflow-hidden -mx-4">
                    <motion.div
                        className="flex whitespace-nowrap py-12"
                        style={{ willChange: "transform" }}
                        animate={{
                            x: ["0%", "-25%"],
                        }}
                        transition={{
                            x: {
                                repeat: Infinity,
                                repeatType: "loop",
                                duration: 40, // Elegant pace
                                ease: "linear",
                            },
                        }}
                        whileHover={{ animationPlayState: "paused" }}
                    >
                        {allLogos.map((logo, index) => (
                            <motion.div
                                key={`${logo.id}-${index}`}
                                whileHover={{ y: -5, scale: 1.02 }}
                                className="flex-shrink-0 mx-4 w-44 h-20 md:w-60 md:h-24 bg-white rounded-2xl md:rounded-[2rem] flex items-center justify-center p-2 shadow-[0_20px_40px_-10px_rgba(0,0,0,0.3)] border border-white/10 group transition-all duration-500"
                            >
                                <img
                                    src={logo.src}
                                    alt={logo.alt}
                                    className="w-[90%] h-[90%] object-contain filter grayscale-0 opacity-100 group-hover:grayscale group-hover:opacity-80 transition-all duration-700 pointer-events-none"
                                />
                            </motion.div>
                        ))}
                    </motion.div>

                    {/* Premium Gradient Fades - Reduced width and intensity */}
                    <div className="absolute inset-y-0 left-0 w-24 bg-gradient-to-r from-[#050505] to-transparent z-10 pointer-events-none" />
                    <div className="absolute inset-y-0 right-0 w-24 bg-gradient-to-l from-[#050505] to-transparent z-10 pointer-events-none" />
                </div>
            </div>
        </section>
    );
};

export default CoreBrands;
