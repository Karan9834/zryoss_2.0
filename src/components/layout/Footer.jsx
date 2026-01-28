import { useEffect } from "react";
import { Link } from "react-router-dom";
import {
  Facebook,
  Twitter,
  Linkedin,
  Instagram,
  ArrowRight,
  ShieldCheck,
  ExternalLink,
} from "lucide-react";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  useEffect(() => {
    const script = document.createElement("script");
    script.src = "//images.dmca.com/Badges/DMCABadgeHelper.min.js";
    script.async = true;
    document.body.appendChild(script);
    return () => {
      try {
        document.body.removeChild(script);
      } catch (e) {
        // ignore if already removed
      }
    };
  }, []);

  return (
    <footer className="relative border-t border-white/10 bg-[#050505] mt-32 text-white overflow-hidden">
      {/* Top Glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-3/4 h-[1px] bg-gradient-to-r from-transparent via-orange-500/50 to-transparent" />

      {/* ✅ Width SAME as Navbar */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-20 pb-10">
        {/* BRAND + NEWSLETTER */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 mb-16">
          {/* BRAND */}
          <div className="lg:col-span-4 space-y-6">
            <Link to="/">
              <img
                src="/Zryoss_logo_2_white.jpg"
                alt="Zryoss Logo"
                className="h-10 w-auto object-contain brightness-110"
              />
            </Link>

            <p className="text-gray-400 text-[16px] leading-relaxed max-w-md">
              India's first execution-focused operating platform for the next
              generation of enterprises. Scaling systems, not just software.
            </p>

            <div className="flex items-center gap-4">
              {/* <SocialIcon icon={<Twitter size={18} />} /> */}
              <SocialIcon href="https://www.linkedin.com/company/zryoss/" icon={<Linkedin size={18} />} />
              <SocialIcon href="https://www.instagram.com/zryoss_dc/" icon={<Instagram size={18} />} />
              <SocialIcon href="https://www.facebook.com/profile.php?id=61585341822507" icon={<Facebook size={18} />} />
            </div>
          </div>

          {/* NEWSLETTER */}
          <div className="lg:col-span-8 flex flex-col md:flex-row justify-between items-center bg-white/[0.03] p-10 rounded-[32px] border border-white/10 gap-8 shadow-2xl relative overflow-hidden group">
            <div className="absolute inset-0 bg-gradient-to-r from-orange-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none" />
            <div className="max-w-sm relative z-10 text-center md:text-left">
              <h3 className="text-2xl font-bold mb-3 text-white">
                Join the <span className="text-orange-500">ecosystem</span>
              </h3>
              <p className="text-sm text-gray-400 font-light leading-relaxed">
                Monthly insights on execution, scalability & enterprise growth.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto relative z-10">
              <input
                type="email"
                placeholder="Work email address"
                className="bg-white/5 border border-white/10 rounded-[18px] px-6 py-4 focus:outline-none focus:border-orange-500 focus:bg-white/[0.08] transition-all min-w-[280px] text-sm font-light"
              />
              <button className="bg-gradient-to-r from-orange-500 to-orange-600 hover:scale-[1.02] active:scale-[0.98] text-white font-bold px-8 py-4 rounded-[18px] flex items-center justify-center gap-2 transition-all shadow-xl shadow-orange-500/20">
                Subscribe
                <ArrowRight
                  size={18}
                  className="group-hover:translate-x-1 transition-transform"
                />
              </button>
            </div>
          </div>
        </div>

        {/* ✅ NAV SECTIONS */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-7 gap-x-10 gap-y-10 mb-16">
          {/* PLATFORM */}
          <FooterSection title="Platform">
            <FooterLink to="/platform/what-is-zryoss">What is Zryoss</FooterLink>
            <FooterLink to="/platform/business-platform">
              Business Platform
            </FooterLink>
            <FooterLink to="/platform/methodology">Methodology</FooterLink>
            <FooterLink to="/platform/technology">Technology</FooterLink>
          </FooterSection>

          {/* ECOSYSTEM */}
          <FooterSection title="Ecosystem">
            <FooterLink to="/ecosystem/overview">Ecosystem Overview</FooterLink>
            <FooterLink to="/ecosystem/operating-system">
              Operating System
            </FooterLink>
            <FooterLink to="/ecosystem/vendors">Partner Network</FooterLink>
            <FooterLink to="/ecosystem/roadmap">Scale Roadmap</FooterLink>
          </FooterSection>

          {/* PARTNERSHIP */}
          <FooterSection title="Partnership">
            <FooterLink to="/partnership">Overview</FooterLink>
            <FooterLink to="/partnership/ipp">IPP</FooterLink>
            <FooterLink to="/partnership/bpp">BPP</FooterLink>
            <FooterLink to="/partnership/support-scope">Support Scope</FooterLink>
          </FooterSection>

          {/* SOLUTIONS */}
          <FooterSection title="Solutions">
            <FooterLink to="/solutions">Solutions Overview</FooterLink>
            <FooterLink to="/solutions/it-software">IT & Software</FooterLink>
            <FooterLink to="/solutions/hr-recruitment">
              HR & Recruitment
            </FooterLink>
            <FooterLink to="/solutions/digital-marketing">
              Digital Marketing
            </FooterLink>
          </FooterSection>

          {/* OPERATIONS */}
          <FooterSection title="Operations">
            <FooterLink to="/operations">Operations Overview</FooterLink>
            <FooterLink to="/operations/onboarding">Onboarding</FooterLink>
            <FooterLink to="/operations/delivery">Delivery</FooterLink>
            <FooterLink to="/operations/reporting">Reporting</FooterLink>
          </FooterSection>

          {/* RESOURCES */}
          <FooterSection title="Resources">
            <FooterLink to="/resources/blog">Blog / Insights</FooterLink>
            <FooterLink to="/resources/faqs">FAQs</FooterLink>
          </FooterSection>

          {/* COMPANY */}
          <FooterSection title="Company">
            <FooterLink to="/company/about">About</FooterLink>
            <FooterLink to="/company/vision-leadership">
              Vision & Leadership
            </FooterLink>
            <FooterLink to="/company/ethics-governance">
              Ethics & Governance
            </FooterLink>
            <FooterLink to="/company/risk-disclosure">Risk Disclosure</FooterLink>
          </FooterSection>
        </div>

        {/* ✅ BOTTOM */}
        <div className="pt-10 border-t border-white/5 flex flex-col xl:flex-row justify-between items-center gap-10">
          <div className="flex flex-col md:flex-row items-center gap-8 md:gap-16">
            {/* Copyright & Powered By Group */}
            <div className="flex items-center gap-4 text-[13px] text-gray-500 whitespace-nowrap">
              <span>© {currentYear} <span className="text-gray-200 font-bold">Zryoss</span></span>

              <div className="w-[1px] h-4 bg-white/40 hidden sm:block" />

              <div className="flex items-center gap-1.5 text-gray-500 opacity-90">
                <span className="text-[13px] uppercase tracking-wider opacity-90">Powered by</span>
                <a
                  href="https://kryosssoftech.org/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-1 text-gray-200 font-bold hover:text-orange-400 transition-all"
                >
                  Kryoss Softech
                  <ExternalLink className="w-3 h-3 opacity-50" />
                </a>
              </div>
            </div>

            {/* Redesigned Legal Links */}
            <div className="flex items-center gap-6 sm:gap-10">
              {[
                { name: "Privacy", path: "/privacy" },
                { name: "Terms", path: "/terms" },
                { name: "Compliance", path: "/security" },
              ].map((link) => (
                <Link
                  key={link.name}
                  to={link.path}
                  className="text-[10px] sm:text-[11px] uppercase tracking-[0.2em] font-bold text-gray-400 hover:text-white transition-all relative group py-1"
                >
                  {link.name}
                  <span className="absolute bottom-0 left-0 w-0 h-[1.5px] bg-gradient-to-r from-orange-400 to-orange-600 transition-all duration-300 group-hover:w-full" />
                </Link>
              ))}
            </div>
          </div>

          {/* DMCA Badge - Centered vertically with text */}
          <div className="flex items-center opacity-80 hover:opacity-100 transition-opacity">
            <a
              href="//www.dmca.com/Protection/Status.aspx?id=4387dfbf-3bed-4aea-a28c-47397971b242"
              title="DMCA.com Protection Status"
              className="dmca-badge inline-block"
            >
              <img
                src="//images.dmca.com/Badges/dmca-badge-w150-5x1-01.png?ID=//www.dmca.com/Protection/Status.aspx?id=4387dfbf-3bed-4aea-a28c-47397971b242"
                alt="DMCA.com Protection Status"
                className="h-6 w-auto object-contain"
              />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}

/* HELPERS */
function FooterSection({ title, children }) {
  return (
    <div className="space-y-4">
      <h4 className="text-orange-500 font-bold text-xs uppercase tracking-[0.2em]">
        {title}
      </h4>
      <ul className="space-y-2">{children}</ul>
    </div>
  );
}

function FooterLink({ to, children }) {
  return (
    <li>
      <Link
        to={to}
        className="text-gray-400 hover:text-white text-[14px] transition-all duration-200 inline-block transform hover:translate-x-1"
      >
        {children}
      </Link>
    </li>
  );
}

function SocialIcon({ icon, href = "#" }) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="w-10 h-10 flex items-center justify-center rounded-full bg-white/5 text-gray-400 hover:bg-orange-500 hover:text-white transition-all duration-300"
    >
      {icon}
    </a>
  );
}
