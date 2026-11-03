import { Link } from "@tanstack/react-router";

const SOCIAL_ICONS = ["share", "photo_camera", "play_arrow", "work"];

const QUICK_LINKS = [
  { label: "Home", to: "/" },
  { label: "About Us", to: "/about" },
  { label: "Contact Us", to: "/contact" },
] as const;

const PROJECT_GROUPS = [
  {
    title: "Land Projects",
    links: [
      { label: "Final NA Layout", to: "/projects/na-plots" },
      { label: "Agricultural Land", to: "/projects/agricultural-land" },
    ],
  },
  {
    title: "Construction Projects",
    links: [
      { label: "Residential Projects", to: "/projects/residential" },
      { label: "Commercial Projects", to: "/projects/commercial" },
    ],
  },
] as const;

const RERA_PROJECTS = [
  { name: "Sun Glory", reg: "PR1260002600531" },
  { name: "Sun Platina", reg: "P52100080580" },
];

const LEGAL_LINKS = ["Disclaimer", "Privacy Policy", "Terms & Conditions"];

const headingClass =
  "font-label-caps text-xs font-bold uppercase tracking-[0.18em] text-gold-deep mb-5";
const linkClass = "text-on-tertiary hover:text-gold transition-colors";

export function SiteFooter() {
  return (
    <footer className="bg-tertiary full-width">
      <div className="h-1 w-full brand-rule" />
      <div className="w-full max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-12 gap-x-10 gap-y-12 px-6 md:px-12 py-14 md:py-16">
        {/* Brand */}
        <div className="flex flex-col gap-6 lg:col-span-4">
          <img
            src="/Rishi-Builders-Logo.png"
            alt="Rishi Builders & Developers logo"
            className="h-20 md:h-24 w-auto self-start object-contain"
          />
          <p className="font-body-md text-sm leading-relaxed text-on-tertiary-container max-w-xs">
            Premium residential, commercial and land projects across Pune,
            built on trust, quality and timely delivery.
          </p>
          <div className="flex gap-3">
            {SOCIAL_ICONS.map((icon) => (
              <a
                key={icon}
                href="#"
                className="w-10 h-10 rounded border border-gold text-gold flex items-center justify-center hover:bg-gold hover:text-white transition-colors"
              >
                <span className="material-symbols-outlined text-lg">{icon}</span>
              </a>
            ))}
          </div>
        </div>

        {/* Quick links */}
        <div className="lg:col-span-2">
          <h4 className={headingClass}>Quick Links</h4>
          <ul className="flex flex-col gap-3 font-body-md text-sm">
            {QUICK_LINKS.map((l) => (
              <li key={l.to}>
                <Link className={linkClass} to={l.to}>
                  {l.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Projects */}
        <div className="lg:col-span-3">
          <h4 className={headingClass}>Our Projects</h4>
          <div className="flex flex-col gap-5">
            {PROJECT_GROUPS.map((g) => (
              <div key={g.title}>
                <p className="font-body-md text-[11px] font-semibold uppercase tracking-[0.15em] text-on-tertiary-container mb-2.5">
                  {g.title}
                </p>
                <ul className="flex flex-col gap-2.5 font-body-md text-sm">
                  {g.links.map((l) => (
                    <li key={l.to}>
                      <Link className={linkClass} to={l.to}>
                        {l.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        {/* RERA */}
        <div className="lg:col-span-3">
          <h4 className={headingClass}>MahaRERA Registered</h4>
          <div className="flex flex-col gap-4">
            {RERA_PROJECTS.map((p) => (
              <div key={p.reg} className="flex items-center gap-3">
                <img
                  src={`https://api.qrserver.com/v1/create-qr-code/?size=120x120&margin=0&data=${p.reg}`}
                  alt={`${p.name} MahaRERA QR code`}
                  className="w-14 h-14 bg-white p-1 border border-black/10 shrink-0"
                  loading="lazy"
                />
                <div className="font-body-md text-sm leading-snug">
                  <p className="text-on-tertiary font-semibold uppercase tracking-wider text-xs">
                    {p.name}
                  </p>
                  <p className="text-on-tertiary-container text-xs mt-0.5">{p.reg}</p>
                </div>
              </div>
            ))}
          </div>
          <div className="flex flex-wrap gap-3 mt-6">
            {["CREDAI Pune", "MahaRERA"].map((b) => (
              <span
                key={b}
                className="px-3 py-1.5 rounded border border-gold/50 bg-white text-gold-deep font-label-caps text-[11px] font-bold uppercase tracking-wider"
              >
                {b}
              </span>
            ))}
          </div>
        </div>
      </div>

      <div className="w-full border-t border-black/[0.08] text-on-tertiary-container font-body-md text-xs">
        <div className="w-full max-w-7xl mx-auto px-6 md:px-12 py-4 flex flex-col lg:flex-row gap-3 justify-between items-center text-center lg:text-left">
          <p>Copyright © 2026 Rishi Builders &amp; Developers - All Rights Reserved.</p>
          <ul className="flex flex-wrap justify-center gap-x-5 gap-y-1">
            {LEGAL_LINKS.map((l) => (
              <li key={l}>
                <a className="hover:text-gold transition-colors" href="#">
                  {l}
                </a>
              </li>
            ))}
          </ul>
          <p>Designed &amp; Developed By Mulsetu</p>
        </div>
      </div>
    </footer>
  );
}
