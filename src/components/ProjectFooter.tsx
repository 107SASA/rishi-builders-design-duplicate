const PROJECT_BY_IMG =
  "https://lh3.googleusercontent.com/aida-public/AB6AXuAnz1KsaHXn8dJdl2k5yVepM1QUGBA6DvTYzsyd8Bk_Qgfp-77GOcqVHAKiYQvvm_tyVxefvav_bLdrELkY7KxLeIluT7MNTQBETBNxF0ESBK-JjycHhGE0ahA9njB70NQNu9Ead7rv0OoY4y50vrxbm7hab0JevuV3dTWZaoHs76O01YDjhwy0aX9dobV8QdBsVAtNj3Ju5aMKaDxCaxoW9tyoMRATXnZ9BraLo_u3NYW270fCE5TiIg";

const QR_IMG =
  "https://api.qrserver.com/v1/create-qr-code/?size=200x200&margin=0&data=P52100055156";

const accent = "var(--color-gold)";

export function ProjectFooter() {
  return (
    <footer className="bg-tertiary full-width">
      <div className="h-1 w-full brand-rule" />
      <div className="w-full max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 px-6 md:px-12 py-14">
        {/* Column 1 */}
        <div className="flex flex-col gap-7">
          <h3
            className="font-headline-lg text-2xl leading-snug tracking-wide"
            style={{ color: accent }}
          >
            COME HOME TO QUALITY
          </h3>
          <div>
            <h4
              className="font-body-md text-xs font-bold tracking-[0.18em] mb-3"
              style={{ color: accent }}
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
          <div>
            <h4
              className="font-body-md text-xs font-bold tracking-[0.18em] mb-3"
              style={{ color: accent }}
            >
              RISHI DEVELOPERS
            </h4>
            <p className="font-body-md text-sm leading-relaxed text-on-tertiary-container">
              Rishi Corporate House, College Road,
              <br />
              Nashik, Maharashtra 422005
            </p>
          </div>
        </div>

        {/* Column 2 */}
        <div className="flex flex-col gap-8">
          <div>
            <h4
              className="font-body-md text-xs font-bold tracking-[0.18em] mb-4"
              style={{ color: accent }}
            >
              DOWNLOADS
            </h4>
            <ul className="flex flex-col gap-3 font-body-md text-sm">
              {["RERA Certificate", "EC Certificate", "Six monthly compliance"].map(
                (label) => (
                  <li key={label}>
                    <a
                      href="#"
                      className="text-on-tertiary hover:text-gold transition-colors"
                    >
                      {label}
                    </a>
                  </li>
                ),
              )}
            </ul>
          </div>
          <div>
            <h4
              className="font-body-md text-xs font-bold tracking-[0.18em] mb-4"
              style={{ color: accent }}
            >
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

        {/* Column 3 */}
        <div>
          <h4
            className="font-body-md text-xs font-bold tracking-[0.18em] mb-4"
            style={{ color: accent }}
          >
            PROJECT BY
          </h4>
          <img
            src={PROJECT_BY_IMG}
            alt="Rishi Builders project"
            className="w-24 h-16 object-cover grayscale mb-6"
            loading="lazy"
          />
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 bg-black/5 flex items-center justify-center text-on-tertiary-container">
              <span className="material-symbols-outlined text-lg">handshake</span>
            </div>
            <span className="font-body-md text-xs tracking-[0.15em] text-on-tertiary">
              JV PARTNER
            </span>
          </div>
        </div>

        {/* Column 4 */}
        <div>
          <h4
            className="font-body-md text-xs font-bold tracking-[0.18em] mb-4"
            style={{ color: accent }}
          >
            MAHA RERA
          </h4>
          <p className="font-body-md text-sm text-on-tertiary-container mb-5">
            Registration No: P52100055156
          </p>
          <img
            src={QR_IMG}
            alt="MahaRERA registration QR code"
            className="w-20 h-20 bg-white p-1 border border-black/10"
            loading="lazy"
          />
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
