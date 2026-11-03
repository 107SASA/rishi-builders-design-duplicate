import { createFileRoute } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import { useSwipe } from "@/hooks/use-swipe";

const HERO_IMAGES = [
  "https://lh3.googleusercontent.com/aida-public/AB6AXuDnBsZy6XNkD6qQOnL6XBfD2QQrpJCodIB6oC1o1smocrBPFPvG69oJfbcB3h_bXazTJht0kGQm3LHnP_fkGvHCR6ymH2srj_mUIWopMU-GSNxSdynqyhZqfS8pYxdGF0TgKG026G0UXJ7vC409bbvTs5li8dwjNrVMdhSCKPVvrG66wYFfDVFi4UDjO396t3WG1QFvajiFCLS4Avvu1sVpWwW09wOMh60IjbvB7qKBdqg3zOg0aTO9kw",
  "https://lh3.googleusercontent.com/aida-public/AB6AXuANLb92m0lQF-c7XrRkXYK69GKSW4v_MvATte4zkuCw_EQjpjKwH9xjktM2KuXlaN9KranAexm-tRQ7vSxxqe8_SCcXK04MXckhFPSH1hf1MkBINSSqDjPfyAzc_Cba5VCnBRGRW61QuEwjQ6ko86t-55rRIV-5BXPGZ8HNBKaiW0dm5gQtEhtculGrGcBSp4TRj43nwDa0OOFa0FvGbrkQgzSGDMvFg3_bmDB5jjaoU17r5puoBQSZ2w",
  "https://lh3.googleusercontent.com/aida-public/AB6AXuBzUpBFeMd6hFt-VYk67wVUJ-jEgN96k0ojijWbzZlk3SfIewJwAPlewVg-6sr8QOeJRnKqZjK4JC0wgoNbVlkQINBnf8-iDc-9qqh5QV3cEKmt6IRYuTJcNu9ljomB7O9ks_LF1k046VD8whFWdq5aL2t25Rn1_t78v_CkMqJYfWVBDtpW0QoaXHKE8V0qbCYoH563aGGCuQW-C3rIRRdreCfvPaJwNDcofPRJOtBxXL-bjy7m49B9cg",
];

const ABOUT_IMG =
  "https://lh3.googleusercontent.com/aida-public/AB6AXuCvnedKxHhXdr_UrnYhLW6qQIk-nwjMwPNam-o5ScHCz7Wasug3VWBdPbSJThVma8UUphjyGGQ7RhT2OBDcb8L5Yvc4UORj30MlWm7BabpTV8C6FOtvwat3o9_T_Hx8rLDlUh3tJX70H093FBRJBrMcgQnmqJAIQQ2kDq8szHWgqBzMtmHowbPfdHPGaN9dw38BZg6WkzMcBaBOcccTbhCpV0qUeg_C1n7Hs8oi3uvx1S1uH-jtvnCW8jhfEeWvaYv2rMI";

const LOCATION_IMG =
  "https://lh3.googleusercontent.com/aida/AP1WRLsbpawNQb92x8dlWbalPtyTyteh6ksFWQTLFaQY96S9nUmqo8D3hNiRs9CrArvp4bu4OPwQQSDPEH7GdNmyiL1duLXOgtUEA8iA9YjaJ5Nrhb4geG5YcQsWYIiUUBFm98wrdbcWVocw6onoLbxQes-FLTXjJDcyBNY-SDMuSoB37300AZOk_jnGcMMFGQUpb39R6c5KjhJy7LMOZ_YwvnO4991pZ3JRFnKJ98KPjwY8nm3VdgcIjJU3_efu";

export const Route = createFileRoute("/projects/land")({
  head: () => ({
    meta: [
      { title: "Aura Estates — Rishi Builders & Developers" },
      { name: "description", content: "Premium NA land plots by Rishi Builders & Developers — clear titles, ready infrastructure, and strategic locations around Pune." },
      { property: "og:title", content: "Aura Estates — Rishi Builders & Developers" },
      { property: "og:description", content: "Premium NA land plots by Rishi Builders & Developers — clear titles, ready infrastructure, and strategic locations around Pune." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: LandProjectPage,
});

function LandProjectPage() {
  const [heroIdx, setHeroIdx] = useState(0);
  const [modalOpen, setModalOpen] = useState(false);
  const heroSwipe = useSwipe(
    () => setHeroIdx((i) => (i + 1) % HERO_IMAGES.length),
    () => setHeroIdx((i) => (i + HERO_IMAGES.length - 1) % HERO_IMAGES.length),
  );

  useEffect(() => {
    const t = setInterval(() => setHeroIdx((i) => (i + 1) % HERO_IMAGES.length), 6000);
    return () => clearInterval(t);
  }, []);

  const openModal = () => setModalOpen(true);
  const closeModal = () => setModalOpen(false);

  return (
    <>
      <main>
        {/* Hero Section */}
        <section className="relative w-full h-[100svh] min-h-[520px] md:min-h-[600px] flex items-center justify-start overflow-hidden" id="hero" {...heroSwipe}>
          <div className="absolute inset-0 z-0">
            <div className="relative w-full h-full">
              {HERO_IMAGES.map((src, i) => (
                <img key={src} alt="Aura Estates" className={`w-full h-full object-cover absolute inset-0 transition-opacity duration-1000 ease-in-out ${heroIdx === i ? "opacity-100" : "opacity-0"}`} src={src} />
              ))}
              <div className="absolute inset-0 bg-gradient-to-t from-navy/70 via-navy/30 to-navy/10"></div>
            </div>
          </div>
          <div className="relative z-10 px-6 md:px-container-padding w-full max-w-7xl mx-auto text-on-primary">
            <p className="font-label-caps text-label-caps text-white/80 mb-3 uppercase tracking-widest">North Valley</p>
            <h1 className="font-headline-xl text-headline-xl md:text-display-lg text-white mb-4 uppercase tracking-widest">Aura Estates</h1>
            <div className="w-24 h-[1px] bg-gold mb-6"></div>
            <p className="font-body-lg text-body-lg text-white/85 max-w-xl leading-relaxed">
              Exclusive NA plots designed for bespoke architectural visions, surrounded by protected woodlands and connected to the city.
            </p>
          </div>
          <button className="absolute left-3 md:left-8 bottom-6 md:bottom-auto md:top-1/2 md:-translate-y-1/2 z-20 p-1 text-on-primary hover:text-white/70 transition-colors" onClick={() => setHeroIdx((i) => (i + HERO_IMAGES.length - 1) % HERO_IMAGES.length)}>
            <span className="material-symbols-outlined text-5xl" style={{ fontVariationSettings: "'wght' 200" }}>chevron_left</span>
          </button>
          <button className="absolute right-3 md:right-8 bottom-6 md:bottom-auto md:top-1/2 md:-translate-y-1/2 z-20 p-1 text-on-primary hover:text-white/70 transition-colors" onClick={() => setHeroIdx((i) => (i + 1) % HERO_IMAGES.length)}>
            <span className="material-symbols-outlined text-5xl" style={{ fontVariationSettings: "'wght' 200" }}>chevron_right</span>
          </button>
        </section>

        {/* About Section */}
        <section className="bg-background" id="about">
          <div className="max-w-[1920px] mx-auto grid grid-cols-1 lg:grid-cols-2 items-center mt-section-gap">
            <div className="h-[320px] md:h-[600px] overflow-hidden">
              <img alt="Aura Estates landscape" className="w-full h-full object-cover" src={ABOUT_IMG} />
            </div>
            <div className="px-6 py-12 sm:p-12 lg:p-24 flex flex-col justify-center">
              <h2 className="font-headline-xl text-headline-xl text-ink mb-8">Experience True Space at North Valley</h2>
              <div className="w-16 h-[1px] bg-secondary mb-8"></div>
              <p className="font-body-lg text-body-lg text-on-surface-variant leading-relaxed">
                Aura Estates offers meticulously planned NA plots with clear titles and ready infrastructure. A rare blend of low-density exclusivity and seamless connectivity to Pune's key hubs, designed for those who appreciate space, security, and long-term value.
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mt-10">
                <div className="flex items-center gap-3">
                  <span className="material-symbols-outlined text-secondary">verified</span>
                  <span className="font-label-caps text-xs uppercase tracking-wider">Clear Titles</span>
                </div>
                <div className="flex items-center gap-3">
                  <span className="material-symbols-outlined text-secondary">forest</span>
                  <span className="font-label-caps text-xs uppercase tracking-wider">Surrounded by Woodlands</span>
                </div>
                <div className="flex items-center gap-3">
                  <span className="material-symbols-outlined text-secondary">road</span>
                  <span className="font-label-caps text-xs uppercase tracking-wider">Ready Infrastructure</span>
                </div>
                <div className="flex items-center gap-3">
                  <span className="material-symbols-outlined text-secondary">location_city</span>
                  <span className="font-label-caps text-xs uppercase tracking-wider">Strategic Connectivity</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Location Section */}
        <section className="py-section-gap bg-surface overflow-hidden" id="location">
          <div className="max-w-7xl mx-auto px-6 md:px-container-padding">
            <div className="text-center mb-16">
              <p className="font-label-caps text-label-caps text-secondary mb-2 uppercase tracking-widest">DISCOVER THE NEIGHBORHOOD</p>
              <h2 className="font-headline-xl text-headline-xl text-ink mb-4">Strategic Location</h2>
              <div className="w-24 h-[1px] bg-secondary mx-auto"></div>
            </div>
            <div className="mb-10 rounded-xl overflow-hidden shadow-2xl border border-outline-variant/20">
              <img alt="Strategic Location Map" className="w-full h-[280px] md:h-[500px] object-cover" src={LOCATION_IMG} />
            </div>
            <div className="flex justify-center">
              <button
                onClick={openModal}
                className="bg-primary text-white font-semibold font-label-caps text-sm px-6 md:px-10 py-4 hover:bg-primary-active hover:text-white transition-colors duration-300 uppercase tracking-widest w-full md:w-fit"
              >
                REQUEST BROCHURE
              </button>
            </div>
          </div>
        </section>
      </main>

      {/* Enquire Modal */}
      <div
        className={`fixed inset-0 z-[100] flex items-center justify-center p-4 transition-opacity duration-300 ${modalOpen ? "opacity-100" : "opacity-0 pointer-events-none"}`}
      >
        <div className="absolute inset-0 bg-navy/70 backdrop-blur-sm" onClick={closeModal}></div>
        <div className="relative bg-white w-full max-w-lg rounded-xl shadow-2xl border border-gold/40 overflow-hidden">
          <button className="absolute top-2 right-2 p-2 text-on-surface-variant hover:text-primary transition-colors" onClick={closeModal}>
            <span className="material-symbols-outlined text-3xl">close</span>
          </button>
          <div className="p-8 md:p-12 text-center">
            <p className="font-label-caps text-xs text-secondary tracking-widest uppercase mb-2">Your ideal space is just a step away</p>
            <h2 className="font-headline-xl text-3xl md:text-4xl text-ink uppercase mb-4">LET'S GET STARTED!</h2>
            <div className="flex items-center justify-center gap-2 mb-6">
              <div className="h-px w-12 bg-gold"></div>
              <div className="h-1 w-1 rounded-full bg-outline-variant"></div>
              <div className="h-px w-12 bg-gold"></div>
            </div>
            <p className="font-body-md text-on-surface-variant mb-8">Brochure and details will be sent on your mobile number</p>
            <form className="space-y-4 text-left" onSubmit={(e) => { e.preventDefault(); closeModal(); }}>
              <div>
                <input type="text" placeholder="Your Name" className="w-full px-4 py-3 border border-outline-variant/30 rounded focus:border-primary focus:ring-0 transition-colors font-body-md" />
              </div>
              <div>
                <input type="email" placeholder="Your Email" className="w-full px-4 py-3 border border-outline-variant/30 rounded focus:border-primary focus:ring-0 transition-colors font-body-md" />
              </div>
              <div>
                <input type="tel" placeholder="Phone" className="w-full px-4 py-3 border border-outline-variant/30 rounded focus:border-primary focus:ring-0 transition-colors font-body-md" />
              </div>
              <div>
                <select className="w-full px-4 py-3 border border-outline-variant/30 rounded focus:border-primary focus:ring-0 transition-colors font-body-md text-on-surface-variant">
                  <option value="">Select your dream project</option>
                  <option value="aura-estates">Aura Estates - North Valley</option>
                  <option value="other">Other Projects</option>
                </select>
              </div>
              <p className="text-[10px] text-on-surface-variant leading-tight mt-4">
                By clicking submit, I agree to be contacted by Rishi Builders and their partners via call, SMS, or WhatsApp regarding my enquiry.
              </p>
              <div className="pt-4 flex justify-center">
                <button type="submit" className="bg-primary text-white font-semibold font-label-caps text-sm px-12 py-4 hover:bg-primary-active hover:text-white transition-colors duration-300 uppercase tracking-widest w-full md:w-fit">
                  SUBMIT ENQUIRY
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
}
