import { useParams, Link, useNavigate } from "react-router-dom";
import { blogsData } from "./blogsData";
import FadeUp from "../../components/animations/FadeUp";
import { ArrowLeft, Calendar, Share2, Clock, User, Bookmark, ArrowRight, Facebook, Instagram, MessageCircle } from "lucide-react";
import { useEffect } from "react";

export default function BlogDetail() {
    const { id } = useParams();
    const navigate = useNavigate();
    const blog = blogsData.find((b) => b.id === id);

    useEffect(() => {
        if (!blog) {
            navigate("/resources/blog");
        }
        window.scrollTo(0, 0);
    }, [blog, navigate]);

    if (!blog) return null;

    return (
        <div className="bg-[#050505] min-h-screen pt-32 pb-24 relative overflow-hidden">
            {/* Background Glows */}
            <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-orange-500/10 blur-[150px] rounded-full -translate-y-1/2 translate-x-1/2 pointer-events-none" />
            <div className="absolute top-1/2 left-1/2 w-[800px] h-[800px] bg-orange-500/[0.02] blur-[180px] rounded-full -translate-x-1/2 -translate-y-1/2 pointer-events-none" />
            <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-blue-500/5 blur-[150px] rounded-full translate-y-1/2 -translate-x-1/2 pointer-events-none" />

            <div className="max-w-4xl mx-auto px-6 relative z-10">
                {/* Back Link */}
                <FadeUp>
                    <Link
                        to="/resources/blog"
                        className="inline-flex items-center text-gray-400 hover:text-orange-400 font-medium mb-12 transition-all group"
                    >
                        <div className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center mr-4 group-hover:border-orange-500/50 group-hover:bg-orange-500/5 transition-all">
                            <ArrowLeft className="w-5 h-5 transition-transform group-hover:-translate-x-1" />
                        </div>
                        Back to Insights
                    </Link>
                </FadeUp>

                {/* Header Section */}
                <header className="mb-16">
                    <FadeUp delay={0.1}>
                        <div className="flex flex-wrap items-center gap-6 text-gray-400 text-sm mb-8 uppercase tracking-widest font-bold">
                            <span className="flex items-center gap-2 text-orange-500">
                                <Calendar className="w-4 h-4" />
                                {blog.date}
                            </span>
                            <span className="flex items-center gap-2">
                                <Clock className="w-4 h-4" />
                                8 min read
                            </span>
                            <span className="flex items-center gap-2">
                                <User className="w-4 h-4" />
                                Zryoss Editorial
                            </span>
                        </div>

                        <h1 className="text-4xl md:text-6xl font-bold text-white mb-10 leading-[1.15] font-['Playfair_Display']">
                            {blog.title}
                        </h1>

                        <div className="flex items-center gap-4">
                            <div className="w-12 h-1 bg-orange-500 rounded-full" />
                            <p className="text-xl text-orange-400/90 font-medium tracking-wide">
                                {blog.subtitle}
                            </p>
                        </div>
                    </FadeUp>
                </header>

                {/* Featured Image */}
                <FadeUp delay={0.2}>
                    <div className="relative rounded-[40px] overflow-hidden mb-20 shadow-2xl shadow-black/50 border border-white/5 group">
                        <img
                            src={blog.image}
                            alt={blog.title}
                            className="w-full h-auto object-cover max-h-[600px] transition-transform duration-1000 group-hover:scale-105"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-[#050505]/60 to-transparent" />

                        {/* Overlay badge */}
                        <div className="absolute top-8 right-8">
                            <div className="bg-black/50 backdrop-blur-md border border-white/10 p-3 rounded-full text-white hover:bg-orange-500 transition-colors cursor-pointer">
                                <Bookmark className="w-5 h-5" />
                            </div>
                        </div>
                    </div>
                </FadeUp>

                {/* Blog Content */}
                <FadeUp delay={0.3}>
                    <article
                        className="prose prose-invert prose-orange max-w-none 
                       prose-h1:font-['Playfair_Display'] prose-h1:font-bold prose-h1:text-5xl lg:prose-h1:text-6xl prose-h1:mb-12 lg:prose-h1:mb-20 prose-h1:leading-tight
                       prose-h2:text-white prose-h2:text-3xl lg:prose-h2:text-4xl prose-h2:mt-24 lg:prose-h2:mt-40 prose-h2:mb-10 lg:prose-h2:mb-16 prose-h2:font-bold prose-h2:tracking-tight prose-h2:font-['Playfair_Display'] prose-h2:border-b prose-h2:border-white/10 prose-h2:pb-6
                       
                       prose-h3:text-white prose-h3:text-2xl lg:prose-h3:text-3xl prose-h3:mt-20 lg:prose-h3:mt-40 prose-h3:mb-10 lg:prose-h3:mb-16 prose-h3:font-bold 
                       prose-h3:bg-gradient-to-br prose-h3:from-orange-600/40 prose-h3:to-orange-950/10
                       prose-h3:p-8 lg:prose-h3:p-12 prose-h3:rounded-[32px] lg:prose-h3:rounded-[40px] prose-h3:border-l-8 prose-h3:border-orange-500 
                       prose-h3:shadow-[0_20px_40px_rgba(249,115,22,0.1)] lg:prose-h3:shadow-[0_30px_60px_rgba(249,115,22,0.15)] prose-h3:relative
                       prose-h3:before:content-['QUESTION'] prose-h3:before:block prose-h3:before:text-[10px] prose-h3:before:tracking-[0.5em] prose-h3:before:text-orange-500 prose-h3:before:mb-4 lg:prose-h3:before:mb-6 prose-h3:before:font-black
                       
                       prose-p:text-gray-300 prose-p:text-lg lg:prose-p:text-xl prose-p:leading-[1.8] lg:prose-p:leading-[2.2] prose-p:font-light prose-p:mt-8 lg:prose-p:mt-14 prose-p:mb-12 lg:prose-p:mb-20 prose-p:tracking-wide
                       prose-ul:text-gray-300 prose-ul:space-y-6 lg:prose-ul:space-y-10 prose-ul:my-12 lg:prose-ul:my-20 prose-li:text-lg lg:prose-li:text-xl prose-li:font-light prose-li:leading-relaxed
                       prose-strong:text-orange-400 prose-strong:font-bold prose-strong:bg-orange-400/10 prose-strong:px-2 prose-strong:py-0.5 lg:prose-strong:px-2.5 lg:prose-strong:py-1 prose-strong:rounded-lg
                       prose-blockquote:border-l-orange-500 prose-blockquote:bg-white/5 prose-blockquote:py-10 lg:prose-blockquote:py-16 prose-blockquote:px-10 lg:prose-blockquote:px-16 prose-blockquote:rounded-[32px] lg:prose-blockquote:rounded-[50px] prose-blockquote:italic prose-blockquote:text-2xl lg:prose-blockquote:text-3xl prose-blockquote:text-gray-200 prose-blockquote:my-20 lg:prose-blockquote:my-32 prose-blockquote:shadow-2xl prose-blockquote:border-white/5
                       prose-table:border-white/10 prose-table:my-16 lg:prose-table:my-24 prose-th:text-orange-400 prose-th:text-lg lg:prose-th:text-xl prose-th:py-6 lg:prose-th:py-10 prose-td:text-gray-300 prose-td:border-white/5 prose-td:py-6 lg:prose-td:py-10 prose-td:text-base lg:prose-td:text-lg"
                        dangerouslySetInnerHTML={{ __html: blog.content }}
                    />
                </FadeUp>

                {/* Footer Area / Shared */}
                <div className="mt-24 pt-16 border-t border-white/10 flex flex-col md:flex-row items-center justify-between gap-10">
                    <FadeUp delay={0.4}>
                        <div className="flex items-center gap-6">
                            <span className="text-gray-400 font-medium uppercase tracking-widest text-sm">Share:</span>
                            <div className="flex gap-4">
                                {[
                                    {
                                        name: 'Facebook',
                                        icon: <Facebook className="w-5 h-5" />,
                                        link: `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(window.location.href)}`
                                    },
                                    {
                                        name: 'Instagram',
                                        icon: <Instagram className="w-5 h-5" />,
                                        link: `https://www.instagram.com/zryoss_dc/`
                                    },
                                    {
                                        name: 'WhatsApp',
                                        icon: <MessageCircle className="w-5 h-5" />,
                                        link: `https://api.whatsapp.com/send?text=${encodeURIComponent(blog.title + " - " + window.location.href)}`
                                    }
                                ].map((platform) => (
                                    <a
                                        key={platform.name}
                                        href={platform.link}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="p-4 bg-white/5 border border-white/10 rounded-2xl text-gray-400 hover:text-orange-400 hover:border-orange-500/50 hover:bg-orange-500/5 transition-all"
                                        title={`Share on ${platform.name}`}
                                    >
                                        {platform.icon}
                                    </a>
                                ))}
                            </div>
                        </div>
                    </FadeUp>

                    <FadeUp delay={0.5}>
                        <Link
                            to="/apply"
                            className="group flex items-center gap-3 px-8 py-5 bg-gradient-to-r from-orange-500 to-orange-600 text-white font-bold rounded-2xl hover:from-orange-600 hover:to-orange-700 transition-all shadow-xl shadow-orange-500/20 hover:scale-[1.02] active:scale-[0.98]"
                        >
                            Partner with Zryoss
                            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                        </Link>
                    </FadeUp>
                </div>
            </div>
        </div>
    );
}
