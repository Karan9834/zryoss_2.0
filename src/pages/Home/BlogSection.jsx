import { Link } from "react-router-dom";
import { blogsData } from "../Resources/blogsData";
import FadeUp from "../../components/animations/FadeUp";
import { ArrowUpRight, ArrowRight } from "lucide-react";

export default function BlogSection() {
    // Show only first 4 blogs on home page
    const displayBlogs = blogsData.slice(0, 4);

    return (
        <section id="blogs" className="py-24 bg-[#050505] relative overflow-hidden border-t border-white/5">
            {/* Glow Background Effect */}
            <div className="absolute inset-0 pointer-events-none overflow-hidden">
                <div
                    className="absolute -bottom-56 left-1/2 -translate-x-1/2
                    w-[320px] sm:w-[520px] md:w-[950px]
                    h-[320px] sm:h-[520px] md:h-[950px]
                    bg-orange-500/10 blur-[110px] sm:blur-[160px] md:blur-[240px]"
                />
            </div>

            <div className="max-w-7xl mx-auto px-6 relative z-10">
                <div className="text-center mb-16">
                    <FadeUp>
                        <p className="text-orange-500 text-xs uppercase tracking-[0.45em] mb-5 font-bold">
                            Blog & Insights
                        </p>
                        <h2 className="text-4xl md:text-5xl font-bold leading-tight text-white mb-6">
                            Latest Articles &
                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-orange-600 block sm:inline sm:ml-2">
                                Insights
                            </span>
                        </h2>
                        <div className="w-24 h-1 bg-orange-500 mx-auto rounded-full mb-6" />
                        <p className="text-gray-400 text-lg max-w-2xl mx-auto font-light">
                            Stay updated with the latest trends in business ecosystems, partner platforms, and centralized operations.
                        </p>
                    </FadeUp>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                    {displayBlogs.map((blog, index) => (
                        <FadeUp key={blog.id} delay={index * 0.1}>
                            <div className="group relative bg-white/5 border border-white/10 rounded-[24px] overflow-hidden hover:border-orange-500/30 transition-all duration-500 flex flex-col h-full shadow-[0_18px_70px_rgba(0,0,0,0.55)] hover:scale-[1.02] hover:-translate-y-2">
                                {/* Image Section */}
                                <div className="relative h-48 overflow-hidden">
                                    <img
                                        src={blog.image}
                                        alt={blog.title}
                                        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                                    />
                                    {/* Overlay */}
                                    <div className="absolute inset-0 bg-gradient-to-t from-[#050505]/90 via-[#050505]/20 to-transparent" />
                                </div>

                                {/* Content Section */}
                                <div className="p-6 flex flex-col flex-grow relative z-10">
                                    <p className="text-[10px] text-orange-400 uppercase tracking-widest mb-3 font-bold opacity-80">
                                        {blog.subtitle}
                                    </p>

                                    <h3 className="text-[17px] font-semibold text-white mb-3 line-clamp-2 leading-snug group-hover:text-orange-400 transition-colors duration-500">
                                        {blog.title}
                                    </h3>

                                    <p className="text-gray-400 text-sm mb-8 line-clamp-4 leading-relaxed font-light">
                                        {blog.excerpt}
                                    </p>

                                    <div className="mt-auto">
                                        <Link
                                            to={`/resources/blog/${blog.id}`}
                                            className="block w-full py-3 rounded-full bg-orange-500 text-white text-sm font-semibold shadow-lg shadow-orange-500/15 hover:scale-[1.02] active:scale-[0.98] transition-all text-center"
                                        >
                                            Explore
                                        </Link>
                                    </div>
                                </div>
                            </div>
                        </FadeUp>
                    ))}
                </div>

                <div className="mt-16 text-center">
                    <FadeUp delay={0.4}>
                        <Link
                            to="/resources/blog"
                            className="inline-flex items-center text-gray-300 hover:text-orange-400 font-medium transition-all group"
                        >
                            View All Articles
                            <ArrowRight className="ml-2 w-5 h-5 transition-transform group-hover:translate-x-1" />
                        </Link>
                    </FadeUp>
                </div>
            </div>
        </section>
    );
}
