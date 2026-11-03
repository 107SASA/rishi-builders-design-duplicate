
const accent = "var(--color-gold)";

export function LandFooter() {
  return (
    <footer className="bg-tertiary full-width">
      <div className="h-1 w-full brand-rule" />
      <div className="w-full max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 px-6 md:px-12 py-14">
        {/* Column 1: Logo + tagline */}
        <div className="flex flex-col gap-5">
          <img
            src="/Rishi-Builders-Logo.png"
            alt="Rishi Builders & Developers"
            className="h-14 w-auto object-contain p-2 self-start"
          />
          <h3
            className="font-headline-lg text-xl leading-snug tracking-wide"
            style={{ color: accent }}
          >
            COME HOME TO QUALITY
          </h3>
        </div>

        {/* Column 2: Site address */}
        <div>
          <h4
            className="font-body-md text-xs font-bold tracking-[0.18em] mb-3 text-gold"
          >
            SUN APEX SITE ADDRESS
          </h4>
          <p className="font-body-md text-sm leading-relaxed text-on-tertiary-container">
            S. No. 123, Near Main Road,
            <br />
            Lokmanya Nagar, Sadashiv Peth,
            <br />
            Pune - 411030
          </p>
        </div>

        {/* Column 3: Rishi Developers */}
        <div>
          <h4 className="font-body-md text-xs font-bold tracking-[0.18em] mb-3 text-gold">
            RISHI DEVELOPERS
          </h4>
          <p className="font-body-md text-sm leading-relaxed text-on-tertiary-container">
            Rishi Corporate House, College Road,
            <br />
            Nashik, Maharashtra 422005
          </p>
        </div>

        {/* Column 4: Social links */}
        <div>
          <h4 className="font-body-md text-xs font-bold tracking-[0.18em] mb-4 text-gold">
            SOCIAL LINKS
          </h4>
          <div className="flex gap-3">
            {["share", "photo_camera", "play_arrow", "work"].map((icon) => (
              <a
                key={icon}
                href="#"
                className="w-10 h-10 rounded border flex items-center justify-center transition-colors hover:bg-gold hover:!text-white"
                style={{ borderColor: accent, color: accent }}
              >
                <span className="material-symbols-outlined text-lg">{icon}</span>
              </a>
            ))}
          </div>
        </div>
      </div>

      <div
        className="w-full min-h-[50px] py-2 flex items-center bg-tertiary border-t border-black/[0.08] text-on-tertiary-container font-body-md text-xs"
      >
        <div className="w-full max-w-7xl mx-auto px-6 md:px-12 flex flex-col sm:flex-row gap-1 sm:gap-4 justify-between items-center text-center sm:text-left">
          <p>© 2026 Rishi Group - All Rights Reserved.</p>
          <p>Designed &amp; Developed By Mulsetu</p>
        </div>
      </div>
    </footer>
  );
}
