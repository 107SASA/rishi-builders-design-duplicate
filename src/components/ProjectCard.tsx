import { Link } from "@tanstack/react-router";
import { useEffect, useRef, useState } from "react";

type ProjectCardProps = {
  image: string;
  title: string;
  subtitle: string;
  description: string;
  to: string;
};

export function ProjectCard({ image, title, subtitle, description, to }: ProjectCardProps) {
  const ref = useRef<HTMLDivElement>(null);
  const [noHover, setNoHover] = useState(false);
  const [inView, setInView] = useState(false);

  useEffect(() => {
    const mql = window.matchMedia("(hover: none), (max-width: 1023px)");
    const sync = () => setNoHover(mql.matches);
    sync();
    mql.addEventListener("change", sync);
    return () => mql.removeEventListener("change", sync);
  }, []);

  useEffect(() => {
    const el = ref.current;
    if (!el || typeof IntersectionObserver === "undefined") return;
    const io = new IntersectionObserver(
      (entries) => setInView(entries[0]?.isIntersecting ?? false),
      { threshold: 0.6, rootMargin: "-10% 0px -10% 0px" },
    );
    io.observe(el);
    return () => io.disconnect();
  }, []);

  const expanded = noHover && inView;

  return (
    <div ref={ref} className="relative group cursor-pointer pt-4 pb-16 sm:pb-20">
      <div className="w-full h-[280px] sm:h-[340px] lg:h-[400px] rounded-2xl overflow-hidden relative z-0">
        <img alt={title} className="w-full h-full object-cover" src={image} loading="lazy" />
      </div>
      <div
        style={expanded ? { height: "auto", minHeight: 200 } : undefined}
        className="absolute bottom-16 sm:bottom-20 left-1/2 -translate-x-1/2 w-[85%] rounded-xl bg-navy-card/95 border-t-2 border-gold flex flex-col items-center text-center z-10 transition-all duration-[400ms] ease-out justify-end overflow-hidden h-[100px] md:group-hover:h-[240px] shadow-lg"
      >
        <div className="p-4 sm:p-6 flex flex-col items-center justify-end w-full h-full">
          <h3 className="font-headline-lg text-xl sm:text-2xl text-white mb-2 leading-tight">
            {title}
            <br />
            <span className="text-base sm:text-lg text-gold-light">{subtitle}</span>
          </h3>
          <div
            style={expanded ? { opacity: 1, height: "auto", marginTop: "0.5rem" } : undefined}
            className="opacity-0 md:group-hover:opacity-100 transition-opacity duration-300 ease-in-out h-0 md:group-hover:h-auto md:group-hover:mt-2 overflow-hidden flex flex-col items-center w-full"
          >
            <p className="text-white/75 text-xs sm:text-sm mb-4">{description}</p>
            <Link
              to={to}
              className="inline-block rounded-md bg-primary text-white font-semibold font-label-caps text-xs px-6 py-3 uppercase tracking-widest hover:bg-primary-active hover:text-white transition-colors"
            >
              EXPLORE MORE
            </Link>
          </div>
        </div>
      </div>
      <div
        style={expanded ? { opacity: 0, pointerEvents: "none" } : undefined}
        className="absolute bottom-0 left-1/2 -translate-x-1/2 z-20 opacity-100 md:group-hover:opacity-0 transition-opacity duration-200 mt-4"
      >
        <Link
          to={to}
          className="inline-block rounded-md bg-white text-primary shadow-md hover:bg-primary hover:text-white transition-colors font-label-caps text-xs px-6 sm:px-8 py-3 uppercase tracking-widest font-bold border-none whitespace-nowrap"
        >
          EXPLORE MORE
        </Link>
      </div>
    </div>
  );
}
