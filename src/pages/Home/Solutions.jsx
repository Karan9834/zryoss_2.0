import React, { useEffect, useMemo, useRef } from "react";
import { ArrowUpRight } from "lucide-react";
import { Link } from "react-router-dom";

const solutions = [
  {
    id: "it",
    title: "IT & Software",
    fullTitle: "IT & Software Solutions",
    subtitle:
      "Enterprise-grade technology systems built for scale, security, and performance.",
    link: "/solutions/it-software",
  },
  {
    id: "marketing",
    title: "Digital Marketing",
    fullTitle: "Digital Marketing Solutions",
    subtitle:
      "Growth systems designed to generate revenue through data-driven performance marketing.",
    link: "/solutions/digital-marketing",
  },
  {
    id: "hr",
    title: "HR & Recruitment",
    fullTitle: "HR & Recruitment Solutions",
    subtitle:
      "Structured hiring and workforce systems built for high-growth enterprises.",
    link: "/solutions/hr-recruitment",
  },
  {
    id: "education",
    title: "Education & EdTech",
    fullTitle: "Education & EdTech Solutions",
    subtitle: "Innovative learning platforms and educational technology solutions.",
    link: "/solutions/education-edtech",
  },
  {
    id: "healthcare",
    title: "Healthcare Tech",
    fullTitle: "Healthcare & Medical Technology",
    subtitle: "Advanced healthcare IT and patient management platforms.",
    link: "/solutions/healthcare-technology",
  },
  {
    id: "interior",
    title: "Interior & Infra",
    fullTitle: "Interior & Infrastructure Solutions",
    subtitle: "Commercial space design and infrastructure optimization services.",
    link: "/solutions/interior-infrastructure",
  },
  {
    id: "business",
    title: "Business Services",
    fullTitle: "Business & Professional Services",
    subtitle: "Legal, compliance, and consulting services for business operation.",
    link: "/solutions/business-services",
  },
];

// ✅ local images from public/Home-Solution
const images = {
  it: "/images/Home-Solution/IT-&-Software-Solutions.jpg",
  marketing: "/images/Home-Solution/Digital-Marketing-Solutions.jpg",
  hr: "/images/Home-Solution/HR-&-Recruitment-Solutions.jpg",
  education: "/images/Home-Solution/Education-&-EdTech-Solutions.jpg",
  healthcare: "/images/Home-Solution/Healthcare-&-Medical-Technology.jpg",
  interior: "/images/Home-Solution/Interior-&-Infrastructure-Solutions.jpg",
  business: "/images/Home-Solution/Business-&-Professional-Services.jpg",
};


export default function SolutionsMarquee() {
  const rootRef = useRef(null);
  const trackRef = useRef(null);
  const rafRef = useRef(null);

  // ✅ REAL infinite loop: use scrollLeft trick
  const speedRef = useRef(0.55); // slow smooth
  const isDraggingRef = useRef(false);
  const startXRef = useRef(0);
  const startScrollLeftRef = useRef(0);

  const items = useMemo(() => {
    const base = solutions.map((s) => ({ ...s, image: images[s.id] }));
    // ✅ triple clone to allow infinite illusion
    return [...base, ...base, ...base];
  }, []);

  useEffect(() => {
    const root = rootRef.current;
    if (!root) return;

    // start in the middle set
    root.scrollLeft = root.scrollWidth / 3;

    const tick = () => {
      if (!rootRef.current) return;

      if (!isDraggingRef.current) {
        root.scrollLeft += speedRef.current;
      }

      // ✅ when near edges, jump to middle without flicker
      const oneThird = root.scrollWidth / 3;

      if (root.scrollLeft < oneThird * 0.55) {
        root.scrollLeft += oneThird;
      } else if (root.scrollLeft > oneThird * 1.55) {
        root.scrollLeft -= oneThird;
      }

      rafRef.current = requestAnimationFrame(tick);
    };

    rafRef.current = requestAnimationFrame(tick);

    return () => rafRef.current && cancelAnimationFrame(rafRef.current);
  }, []);

  const onPointerDown = (e) => {
    const root = rootRef.current;
    if (!root) return;

    isDraggingRef.current = true;
    startXRef.current = e.clientX;
    startScrollLeftRef.current = root.scrollLeft;
    root.style.cursor = "grabbing";
  };

  const onPointerMove = (e) => {
    const root = rootRef.current;
    if (!root || !isDraggingRef.current) return;

    const dx = e.clientX - startXRef.current;
    root.scrollLeft = startScrollLeftRef.current - dx;
  };

  const onPointerUp = () => {
    const root = rootRef.current;
    if (!root) return;

    isDraggingRef.current = false;
    root.style.cursor = "grab";
  };

  return (
    <section
      id="solutions"
      className="relative bg-[#050505] py-16 sm:py-20 md:py-24 overflow-hidden border-t border-white/5"
    >
      {/* glow */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div
          className="absolute -top-56 left-1/2 -translate-x-1/2
          w-[320px] sm:w-[520px] md:w-[950px]
          h-[320px] sm:h-[520px] md:h-[950px]
          bg-orange-500/10 blur-[110px] sm:blur-[160px] md:blur-[240px]"
        />
      </div>

      {/* header */}
      <div className="relative max-w-[90rem] mx-auto px-5 sm:px-6 md:px-10 lg:px-28 xl:px-32">
        <div className="text-center max-w-4xl mx-auto">
          <p className="text-orange-500 text-[10px] sm:text-[11px] md:text-xs uppercase tracking-[0.45em] mb-5 font-semibold">
            Solutions
          </p>

          <h2 className="text-4xl md:text-5xl font-bold leading-tight text-white">
            Purpose-built Solutions
            <span className="block text-orange-400 mt-2">
              That Help Teams Move Faster
            </span>
          </h2>

          <p className="text-gray-400 text-sm sm:text-base md:text-lg mt-5">
            Zryoss combines strategy, automation and execution to deliver measurable
            outcomes across departments — from product to growth.
          </p>
        </div>
      </div>

      {/* slider */}
      <div className="relative mt-12 sm:mt-14">
        {/* fade edges */}
        <div className="pointer-events-none absolute left-0 top-0 h-full w-16 sm:w-24 bg-gradient-to-r from-[#050505] to-transparent z-10" />
        <div className="pointer-events-none absolute right-0 top-0 h-full w-16 sm:w-24 bg-gradient-to-l from-[#050505] to-transparent z-10" />

        <div
          ref={rootRef}
          className="
            overflow-x-auto no-scrollbar
            cursor-grab
            select-none
          "
          onPointerDown={onPointerDown}
          onPointerMove={onPointerMove}
          onPointerUp={onPointerUp}
          onPointerCancel={onPointerUp}
          onPointerLeave={onPointerUp}
        >
          <div
            ref={trackRef}
            className="
              flex gap-5 sm:gap-6 md:gap-7
              px-6 sm:px-10 md:px-14
              py-2
              w-max
            "
          >
            {items.map((item, idx) => (
              <SolutionCard key={`${item.id}-${idx}`} item={item} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function SolutionCard({ item }) {
  return (
    <div
      className="
        relative flex-shrink-0
        w-[220px] sm:w-[240px] md:w-[265px] lg:w-[280px]
        h-[310px] sm:h-[335px] md:h-[360px]
        rounded-[24px] overflow-hidden
        border border-white/10
        bg-white/5
        shadow-[0_18px_70px_rgba(0,0,0,0.55)]
        group
      "
    >
      {/* image */}
      <img
        src={item.image}
        alt={item.fullTitle}
        className="absolute inset-0 w-full h-full object-cover"
        draggable={false}
      />

      {/* base gradient */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/15 to-black/0" />

      {/* ✅ default bottom title should disappear on hover */}
      <div className="absolute bottom-4 left-5 right-5 transition-opacity duration-300 group-hover:opacity-0">
        <p className="text-white font-semibold text-base sm:text-[17px] drop-shadow-lg">
          {item.title}
        </p>
      </div>

      {/* ✅ Hover overlay from bottom */}
      <div
        className="
          absolute inset-0
          flex flex-col justify-end
          bg-black/90
          opacity-0
          group-hover:opacity-100
          transition-opacity duration-500 ease-out
        "
      >
        <div
          className="
            translate-y-10 group-hover:translate-y-0
            transition-transform duration-700 ease-out
            p-4 sm:p-5 md:p-6
          "
        >
          {/* heading */}
          <h3 className="text-white text-[16px] sm:text-[18px] md:text-[20px] font-semibold leading-snug">
            {item.fullTitle}
          </h3>

          <p className="text-white/80 text-[12px] sm:text-[13px] md:text-[14px] mt-1.5 sm:mt-2 leading-relaxed">
            {item.subtitle}
          </p>

          {/* ✅ points like before */}
          <div className="mt-2 sm:mt-3">
            <p className="text-[9px] sm:text-[10px] uppercase tracking-widest text-orange-400 font-bold mb-2 sm:mb-3">
              Highlights
            </p>

            <ul className="space-y-1 sm:space-y-1.5 md:space-y-2 text-white/90 text-[11px] sm:text-[12px] md:text-sm">
              <li className="flex gap-2 items-start">
                <span className="mt-[5px] sm:mt-[6px] w-1 h-1 sm:w-1.5 sm:h-1.5 rounded-full bg-orange-400 flex-shrink-0" />
                <span>Execution-ready systems</span>
              </li>
              <li className="flex gap-2 items-start">
                <span className="mt-[5px] sm:mt-[6px] w-1 h-1 sm:w-1.5 sm:h-1.5 rounded-full bg-orange-400 flex-shrink-0" />
                <span>Scalable workflows</span>
              </li>
              <li className="flex gap-2 items-start">
                <span className="mt-[5px] sm:mt-[6px] w-1 h-1 sm:w-1.5 sm:h-1.5 rounded-full bg-orange-400 flex-shrink-0" />
                <span>High-performing delivery</span>
              </li>
              <li className="flex gap-2 items-start">
                <span className="mt-[5px] sm:mt-[6px] w-1 h-1 sm:w-1.5 sm:h-1.5 rounded-full bg-orange-400 flex-shrink-0" />
                <span>Business-first outcomes</span>
              </li>
            </ul>
          </div>

          {/* ✅ Explore button smaller height */}
          <div className="pt-3 sm:pt-4 md:pt-5">
            <Link
              to={item.link}
              className="
                inline-flex items-center gap-2
                px-2.5 py-1.5 sm:px-3 sm:py-2 rounded-full
                bg-orange-500 text-white
                text-[10px] sm:text-[11px] md:text-xs font-semibold
                shadow-lg shadow-orange-500/15
                hover:scale-[1.02] active:scale-[0.98]
                transition
              "
            >
              Explore
              <span className="w-6 h-6 sm:w-7 sm:h-7 rounded-full bg-gray-800 text-orange-400 flex items-center justify-center border border-white/10">
                <ArrowUpRight className="w-3 h-3 sm:w-3.5 sm:h-3.5" />
              </span>
            </Link>
          </div>

          {/* ✅ Zryoss removed */}
        </div>
      </div>
    </div>
  );
}

