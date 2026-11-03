import { Link, useRouterState } from "@tanstack/react-router";
import { useEffect, useState } from "react";

const navLinkClass = "transition-colors";

const SECTION_LINKS = [
  { label: "Home", href: "#hero" },
  { label: "About", href: "#about" },
  { label: "Amenities", href: "#amenities" },
  { label: "Gallery", href: "#gallery" },
  { label: "Floor Plan", href: "#floor-plan" },
  { label: "Location", href: "#location" },
];

const LAND_SECTION_LINKS = [
  { label: "Home", href: "#hero" },
  { label: "About", href: "#about" },
  { label: "Location", href: "#location" },
];

export function SiteHeader() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const pathname = useRouterState({ select: (s) => s.location.pathname });
  const isLand = pathname.startsWith("/projects/land");
  const light = isLand || pathname.startsWith("/projects/sun-glory");
  const sectionLinks = isLand ? LAND_SECTION_LINKS : SECTION_LINKS;

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50);
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    setMenuOpen(false);
  }, [pathname]);

  return (
    <nav
      className="full-width top-0 sticky z-50 transition-all duration-300 bg-white shadow-md shadow-navy/10"
    >
      <div
        className="flex justify-between items-stretch w-full pr-4 md:pr-container-padding max-w-full mx-auto"
      >
        <Link
          to="/"
          className={`flex items-center bg-white pl-4 md:pl-container-padding pr-10 md:pr-16 [clip-path:polygon(0_0,100%_0,calc(100%-32px)_100%,0_100%)] transition-all duration-300 ${
            scrolled ? "py-1.5" : "py-2.5"
          }`}
        >
          <img
            src="/Rishi-Builders-Logo.png"
            alt="Rishi Builders & Developers logo"
            className={`w-auto transition-all duration-300 ${
              scrolled ? "h-12 md:h-14" : "h-14 md:h-[76px]"
            }`}
          />
        </Link>
        <div className="flex items-center gap-4 md:gap-8 py-3">
          {light ? (
            <div className="hidden md:flex items-center gap-8 font-nav-link text-nav-link text-ink">
              {sectionLinks.map((item) => (
                <a
                  key={item.href}
                  href={item.href}
                  onClick={(e) => {
                    e.preventDefault();
                    document
                      .querySelector(item.href)
                      ?.scrollIntoView({ behavior: "smooth" });
                  }}
                  className="relative group py-2 transition-colors hover:text-primary"
                >
                  {item.label}
                  <span className="absolute -bottom-1 left-0 right-0 h-0.5 bg-primary scale-x-0 group-hover:scale-x-100 transition-transform origin-left" />
                </a>
              ))}
            </div>
          ) : (
            <div className="hidden md:flex items-center gap-8 font-nav-link text-nav-link text-ink">
              <div className="relative group py-2">
                <div className="absolute -top-1 left-0 right-0 h-px opacity-0 group-hover:opacity-100 transition-opacity bg-primary"></div>
                <Link to="/" className={`${navLinkClass} hover:text-primary`}>
                  Home
                </Link>
                <div className="absolute -bottom-1 left-0 right-0 h-px opacity-0 group-hover:opacity-100 transition-opacity bg-primary"></div>
              </div>
              <div className="relative group py-2">
                <div className="absolute -top-1 left-0 right-0 h-px opacity-0 group-hover:opacity-100 transition-opacity bg-primary"></div>
                <Link to="/about" className={`${navLinkClass} hover:text-primary`}>
                  About
                </Link>
                <div className="absolute -bottom-1 left-0 right-0 h-px opacity-0 group-hover:opacity-100 transition-opacity bg-primary"></div>
              </div>
              <div className="relative group py-2">
                <div className="absolute -top-1 left-0 right-0 h-px opacity-0 group-hover:opacity-100 transition-opacity bg-primary"></div>
                <span className="flex items-center gap-1 cursor-pointer hover:text-primary transition-colors">Projects</span>
                <div className="absolute -bottom-1 left-0 right-0 h-px opacity-0 group-hover:opacity-100 transition-opacity bg-primary"></div>
                <div className="absolute top-full left-0 hidden group-hover:block min-w-[260px] pt-4 z-50">
                  <div className="bg-white rounded-b-xl overflow-hidden shadow-xl border-t-2 border-gold">
                    <div className="flex flex-col">
                      <div className="px-6 py-4">
                        <div className="text-gold-deep font-label-caps text-xs mb-3 tracking-widest font-bold uppercase">
                          LAND PROJECTS
                        </div>
                        <div className="flex flex-col gap-3">
                          <Link
                            to="/projects/na-plots"
                            className="text-on-surface-variant hover:text-primary transition-colors text-sm"
                          >
                            Final NA Layout
                          </Link>
                          <Link
                            to="/projects/agricultural-land"
                            className="text-on-surface-variant hover:text-primary transition-colors text-sm"
                          >
                            Agricultural Land
                          </Link>
                        </div>
                      </div>
                      <div className="px-6 py-4 border-t border-outline-variant/40">
                        <div className="text-gold-deep font-label-caps text-xs mb-3 tracking-widest font-bold uppercase">
                          CONSTRUCTION PROJECTS
                        </div>
                        <div className="flex flex-col gap-3">
                          <Link
                            to="/projects/residential"
                            className="text-on-surface-variant hover:text-primary transition-colors text-sm"
                          >
                            Residential Projects
                          </Link>
                          <Link
                            to="/projects/commercial"
                            className="text-on-surface-variant hover:text-primary transition-colors text-sm"
                          >
                            Commercial Projects
                          </Link>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="relative group py-2">
                <div className="absolute -top-1 left-0 right-0 h-px opacity-0 group-hover:opacity-100 transition-opacity bg-primary"></div>
                <Link to="/contact" className={`${navLinkClass} hover:text-primary`}>
                  Contact
                </Link>
                <div className="absolute -bottom-1 left-0 right-0 h-px opacity-0 group-hover:opacity-100 transition-opacity bg-primary"></div>
              </div>
            </div>
          )}
          <Link
            to="/contact"
            className="hidden sm:inline-block bg-primary text-white font-semibold font-label-caps text-xs md:text-sm px-4 md:px-8 py-3 border border-primary hover:bg-primary-active hover:border-primary-active hover:text-white shadow-md shadow-gold/30 transition-colors duration-300 uppercase tracking-widest whitespace-nowrap"
          >
            ENQUIRE NOW
          </Link>
          <button
            type="button"
            aria-label={menuOpen ? "Close menu" : "Open menu"}
            aria-expanded={menuOpen}
            onClick={() => setMenuOpen((v) => !v)}
            className="md:hidden flex items-center justify-center w-10 h-10 rounded border border-outline-variant text-ink transition-colors hover:bg-surface-container-low"
          >
            <span className="material-symbols-outlined">
              {menuOpen ? "close" : "menu"}
            </span>
          </button>
        </div>
      </div>
      <div className="h-[3px] w-full brand-rule" />

      {/* Mobile menu */}
      {menuOpen && (
        <div
          className="md:hidden w-full border-t border-outline-variant/40 bg-white text-ink"
        >
          <div className="px-6 py-5 flex flex-col gap-4 font-nav-link text-nav-link max-h-[70vh] overflow-y-auto">
            {light ? (
              sectionLinks.map((item) => (
                <a
                  key={item.href}
                  href={item.href}
                  onClick={(e) => {
                    e.preventDefault();
                    setMenuOpen(false);
                    document
                      .querySelector(item.href)
                      ?.scrollIntoView({ behavior: "smooth" });
                  }}
                  className="py-1 hover:text-primary transition-colors"
                >
                  {item.label}
                </a>
              ))
            ) : (
              <>
                <Link to="/" onClick={() => setMenuOpen(false)} className="py-1">
                  Home
                </Link>
                <Link to="/about" onClick={() => setMenuOpen(false)} className="py-1">
                  About
                </Link>
                <div className="flex flex-col gap-3">
                  <span className="text-gold-deep text-xs tracking-widest font-bold uppercase">
                    Land Projects
                  </span>
                  <Link
                    to="/projects/na-plots"
                    onClick={() => setMenuOpen(false)}
                    className="pl-4 text-sm"
                  >
                    Final NA Layout
                  </Link>
                  <Link
                    to="/projects/agricultural-land"
                    onClick={() => setMenuOpen(false)}
                    className="pl-4 text-sm"
                  >
                    Agricultural Land
                  </Link>
                  <span className="text-gold-deep text-xs tracking-widest font-bold uppercase mt-2">
                    Construction Projects
                  </span>
                  <Link
                    to="/projects/residential"
                    onClick={() => setMenuOpen(false)}
                    className="pl-4 text-sm"
                  >
                    Residential Projects
                  </Link>
                  <Link
                    to="/projects/commercial"
                    onClick={() => setMenuOpen(false)}
                    className="pl-4 text-sm"
                  >
                    Commercial Projects
                  </Link>
                </div>
                <Link to="/contact" onClick={() => setMenuOpen(false)} className="py-1">
                  Contact
                </Link>
              </>
            )}
            <Link
              to="/contact"
              onClick={() => setMenuOpen(false)}
              className="mt-2 bg-primary text-white font-semibold text-center font-label-caps text-sm px-6 py-3 uppercase tracking-widest"
            >
              Enquire Now
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
}
