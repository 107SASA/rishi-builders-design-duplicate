import { createFileRoute } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import { useSwipe } from "@/hooks/use-swipe";

const HERO_IMAGES = [
  "https://lh3.googleusercontent.com/aida-public/AB6AXuAnz1KsaHXn8dJdl2k5yVepM1QUGBA6DvTYzsyd8Bk_Qgfp-77GOcqVHAKiYQvvm_tyVxefvav_bLdrELkY7KxLeIluT7MNTQBETBNxF0ESBK-JjycHhGE0ahA9njB70NQNu9Ead7rv0OoY4y50vrxbm7hab0JevuV3dTWZaoHs76O01YDjhwy0aX9dobV8QdBsVAtNj3Ju5aMKaDxCaxoW9tyoMRATXnZ9BraLo_u3NYW270fCE5TiIg",
  "https://lh3.googleusercontent.com/aida-public/AB6AXuDVQI_Wm-lyQA_TmuX68H8CoJ-Mek2d4DLEuWEnhAZSMjBJFM0UDehDMcYVhcWyShe_MCdm_wesVb8kGV9tPbMIgpR8frkg1bcD15DH7pZC_RXe0V6QtB8BBQlpAU366WX1WYXoesnpxcBAIZMZOTOhsxGq6XuAZcKzL3n_G28MA9ShALW9wUkglVI3Ve0DeKh9SaHruV2COvR1zcsp2uaRiwFQ0eacw6tQnnWhKrmxRxnPGwe5lxUOkQ",
  "https://lh3.googleusercontent.com/aida-public/AB6AXuAzAqGFfr5lKC9KL_zJJfsG6fgMTT0CqlKp2-HlVKyTHw3T11PCRb2LjcOnbkGm5q4AqUJF3Iha5lAn10kJ4FwtXGDPAOozuixaWEI9vwqCJcxzMogAN5AVHRFVC3SbH3R9aQGwyB3nsHHMq4xU-LUj9DHYBwUC7PNjUWgj0eW_A02UhtDx3RCo2syD26v-TZy2w_JokAt9q3usrVK5cj6lZC3hrY5em0kjcuPCcxG0qjHM3HXwQ-kvww"
];

const AMENITIES = [
  { icon: "pool", label: "Rooftop Swimming Pool" },
  { icon: "sports_basketball", label: "Multi Court" },
  { icon: "deck", label: "Landscaped Rooftop" },
  { icon: "festival", label: "Party Hall" },
  { icon: "self_improvement", label: "Meditation Pavilion" },
  { icon: "child_care", label: "Creche" },
  { icon: "footprint", label: "Acupressure Pathway" },
  { icon: "fitness_center", label: "Fitness Center" },
  { icon: "playground_2", label: "Kids Play Area" },
  { icon: "sports_esports", label: "Multipurpose Hall with Indoor Games" },
  { icon: "chair", label: "Senior Lounge Seating" },
  { icon: "add_circle", label: "And Many More..." },
];

const GALLERY = [
  {
    "alt": "Living Room",
    "src": "https://lh3.googleusercontent.com/aida-public/AB6AXuD_Z08Zzb7rYH7w18lCcLUdTmJLkchoiXZBPhprKhzO6jgIIbX_5Wo751dEUjeKvL7-yFlGkOK3cBACP48wWAbI7lj7yOoNuFRUcyf8ypdIw3wsGFC5f9YIXNJCVW661G2r34-6zrVR57I_vaaFRYBCnVNoFVf42utJSXuUUxYN617fKbn_OTZDAO1__CbU6WIoPNE75OX-WMi8OYkYVlJHDNVuFVQjINwLvQDHkptlsPB2YvT-RFAkTA"
  },
  {
    "alt": "Exterior View",
    "src": "https://lh3.googleusercontent.com/aida-public/AB6AXuDDJk6ePrMdWyhwHeuvBTGO_geuNgNCrVLEtNA-A6n0n0yIk5Iykea_T_PF2PvMaVasbQv1ZHRKXtUVQg0I-1EnH1kzQ8GPBtysoLZJY_-7DeK3bAcjbQDckKvqmVZpx76BpcqUN5v44rR-i46UDh0GKD9iX1emaM9Vr3LwtfmJbX7fKhzaxKYkT8B0_XyQW9XNbZweitAUrajsPEsRRMFZCPplz_eWsXnmLh78Mb0XsnhOpOiVqnobD5aFPBVzqvt3G80"
  },
  {
    "alt": "Atrium Lobby",
    "src": "https://lh3.googleusercontent.com/aida-public/AB6AXuD1qnKxmswsX1lJOHcJdqU5s9OOO1UeFNUvPcOIwZLPsHRYl8EVpxeOoOAsKMtY2VVp5E2n2J9u4dysI0F34ey0WCS8U6yh-sraockbuobEVbWQh0a7x495QE2vKeH7W0sGWeg6HKiVXNSf7BQsW9jghX-VVV4mfxmdHENBQoo73CDRZW2H7Aag2ZlpGt1hVPfQMcf0vEq1KzSrHYZicO7a4nUTiLaAHkjHXk_pSKWv7dnCFus4vZaelA"
  }
];



export const Route = createFileRoute("/projects/sun-glory")({
  head: () => ({
    meta: [
      { title: "Sun Glory, Lokmanya Nagar — Rishi Builders" },
      { name: "description", content: "Premium 3 BHK residences at Sun Glory, Sadashiv Peth, Pune by Rishi Builders & Developers." },
      { property: "og:title", content: "Sun Glory, Lokmanya Nagar — Rishi Builders" },
      { property: "og:description", content: "Premium 3 BHK residences at Sun Glory, Sadashiv Peth, Pune by Rishi Builders & Developers." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: SunGloryPage,
});

function SunGloryPage() {
  const [heroIdx, setHeroIdx] = useState(0);
  const [galIdx, setGalIdx] = useState(0);
  const heroSwipe = useSwipe(
    () => setHeroIdx((i) => (i + 1) % HERO_IMAGES.length),
    () => setHeroIdx((i) => (i + HERO_IMAGES.length - 1) % HERO_IMAGES.length),
  );
  const galSwipe = useSwipe(
    () => setGalIdx((i) => (i + 1) % GALLERY.length),
    () => setGalIdx((i) => (i + GALLERY.length - 1) % GALLERY.length),
  );

  useEffect(() => {
    const t = setInterval(() => setHeroIdx((i) => (i + 1) % HERO_IMAGES.length), 6000);
    return () => clearInterval(t);
  }, []);

  return (
    <>
{/* TopNavBar */}

<main>
{/* Hero Section */}
<section className="relative w-full h-[100svh] min-h-[520px] md:min-h-[600px] flex items-center justify-start overflow-hidden hero-carousel-container" id="hero" {...heroSwipe}>
<div className="absolute inset-0 z-0">
<div className="relative w-full h-full">
{HERO_IMAGES.map((src, i) => (
  <img key={src} alt="Sun Glory" className={`w-full h-full object-cover absolute inset-0 transition-opacity duration-1000 ease-in-out ${heroIdx === i ? "opacity-100" : "opacity-0"}`} src={src} />
))}
<div className="absolute inset-0 bg-gradient-to-t from-navy/70 via-navy/30 to-navy/10"></div>
</div>
</div>
<div className="relative z-10 px-6 md:px-container-padding w-full max-w-7xl mx-auto text-on-primary">
</div>
{/* Carousel Controls (Decorative) */}
<button className="absolute left-3 md:left-8 bottom-6 md:bottom-auto md:top-1/2 md:-translate-y-1/2 z-20 p-1 text-on-primary hover:text-white/70 transition-colors hero-prev" onClick={() => setHeroIdx((i) => (i + HERO_IMAGES.length - 1) % HERO_IMAGES.length)}>
<span className="material-symbols-outlined text-5xl" style={{fontVariationSettings: "'wght' 200"}}>chevron_left</span>
</button>
<button className="absolute right-3 md:right-8 bottom-6 md:bottom-auto md:top-1/2 md:-translate-y-1/2 z-20 p-1 text-on-primary hover:text-white/70 transition-colors hero-next" onClick={() => setHeroIdx((i) => (i + 1) % HERO_IMAGES.length)}>
<span className="material-symbols-outlined text-5xl" style={{fontVariationSettings: "'wght' 200"}}>chevron_right</span>
</button>
</section>
{/* About Section (Overlapping Panel) */}
<section className="bg-background" id="about">
{/* First Editorial Section */}
<div className="max-w-[1920px] mx-auto grid grid-cols-1 lg:grid-cols-2 items-center mt-section-gap">
<div className="h-[320px] md:h-[600px] overflow-hidden slide-in-left visible">
<img alt="Luxury Project Exterior" className="w-full h-full object-cover" src="https://lh3.googleusercontent.com/aida-public/AB6AXuCvnedKxHhXdr_UrnYhLW6qQIk-nwjMwPNam-o5ScHCz7Wasug3VWBdPbSJThVma8UUphjyGGQ7RhT2OBDcb8L5Yvc4UORj30MlWm7BabpTV8C6FOtvwat3o9_T_Hx8rLDlUh3tJX70H093FBRJBrMcgQnmqJAIQQ2kDq8szHWgqBzMtmHowbPfdHPGaN9dw38BZg6WkzMcBaBOcccTbhCpV0qUeg_C1n7Hs8oi3uvx1S1uH-jtvnCW8jhfEeWvaYv2rMI" />
</div>
<div className="px-6 py-12 sm:p-12 lg:p-24 flex flex-col justify-center slide-in-right visible">
<h2 className="font-headline-xl text-headline-xl text-ink mb-8">Experience True Luxury at Lokmanya Nagar</h2>
<div className="w-16 h-[1px] bg-secondary mb-8"></div>
<p className="font-body-lg text-body-lg text-on-surface-variant leading-relaxed">
        Experience the pinnacle of city living with premium 3 BHK residences at Sun Glory, located in Lokmanya Nagar, Sadashiv Peth. Enjoy a rare blend of low-density exclusivity and unmatched, seamless connectivity to Laxmi Road, Swargate, and central business zones.
      </p>
</div>
</div>
{/* Second Editorial Section */}
<div className="max-w-[1920px] mx-auto grid grid-cols-1 lg:grid-cols-2 items-center bg-surface-container-low"><div className="h-[320px] md:h-[600px] overflow-hidden lg:order-2">
<img alt="Architectural Detail" className="w-full h-full object-cover" src="https://lh3.googleusercontent.com/aida-public/AB6AXuBbnU9LOU2EF4KbwEziSrLn1xjtteGn0BY6vOIH5wyowtxu8F019Fxxm-oZiFaqB2Wc-L6q6BaREb9EWp5omVjZnZw06APTfoIht19OklxNOdE19042CcP1XdV01ObrRcBhAsiEHQWFgnCy5l2ypVSp2cDn5Qf3C_Z-FvH1bvUIumPqmnnpzuos99WXcW7BluD9fKWyPPQazZSmSrse33Ie3LplwaBn60UTzh9lHQKXSmZ4l5e8kEo6b1SKTHHmWMnHatTTdb0RSlEQRIk" />
</div><div className="px-6 py-12 sm:p-12 lg:p-24 flex flex-col justify-center lg:order-1">
<h2 className="font-headline-xl text-headline-xl text-ink mb-8">Architectural Excellence</h2>
<div className="w-16 h-[1px] bg-secondary mb-8"></div>
<p className="font-body-lg text-body-lg text-on-surface-variant leading-relaxed">
        Our design philosophy merges timeless elegance with modern functionality. Every structure is a testament to our commitment to quality, featuring sustainable materials and innovative spatial planning that redefines urban living for the discerning homeowner.
      </p>
</div></div>
</section>
{/* Amenities Section */}
<section className="relative max-w-[1920px] mx-auto bg-surface-container-low px-6 md:px-container-padding py-16 md:py-24" id="amenities">
<div className="text-center pb-10 md:pb-12">
<p className="font-label-caps text-label-caps text-secondary mb-2 uppercase tracking-widest">Discover</p>
<h2 className="font-headline-xl text-3xl md:text-headline-xl text-ink mb-4 uppercase tracking-widest">AMENITIES</h2>
<div className="w-24 h-[1px] bg-secondary mx-auto"></div>
</div>
<div className="max-w-6xl mx-auto grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-x-4 gap-y-10 md:gap-y-14">
{AMENITIES.map((a) => (
  <div key={a.label} className="group flex flex-col items-center text-center">
    <span
      className="material-symbols-outlined leading-none text-primary transition-transform duration-300 group-hover:-translate-y-1"
      style={{ fontSize: "clamp(48px, 40px + 1.5vw, 60px)", fontVariationSettings: "'FILL' 0, 'wght' 200, 'GRAD' 0, 'opsz' 48" }}
      aria-hidden="true"
    >{a.icon}</span>
    <p className="mt-4 max-w-[11rem] font-label-caps text-xs md:text-sm font-semibold uppercase tracking-wider leading-snug text-ink">{a.label}</p>
  </div>
))}
</div>
</section>
<section className="py-16 md:py-section-gap bg-surface overflow-hidden" id="gallery">
<div className="text-center mb-12">
<p className="font-label-caps text-label-caps text-secondary mb-2 uppercase tracking-widest">Visuals</p>
<h2 className="font-headline-xl text-headline-xl text-ink mb-4 uppercase tracking-widest">GALLERY</h2>
<div className="w-24 h-[1px] bg-secondary mx-auto"></div>
</div>
<div className="relative max-w-[1920px] mx-auto px-4 md:px-0 overflow-hidden">
<div className="flex items-center justify-center gap-4 md:gap-8 overflow-hidden h-[400px] md:h-[600px] relative gallery-carousel" {...galSwipe}>
{GALLERY.map((g, i) => {
  const rel = (i - galIdx + GALLERY.length) % GALLERY.length;
  const cls = rel === 0
    ? "w-[80%] h-[75%] md:h-[85%] md:w-[50%] translate-x-0 opacity-100 scale-100 z-10"
    : rel === GALLERY.length - 1
      ? "w-[60%] h-[65%] md:h-[75%] md:w-[40%] -translate-x-[60%] md:-translate-x-[70%] opacity-40 scale-90 z-0"
      : "w-[60%] h-[65%] md:h-[75%] md:w-[40%] translate-x-[60%] md:translate-x-[70%] opacity-40 scale-90 z-0";
  return (
    <div key={g.src} className={`absolute top-1/2 -translate-y-1/2 transition-all duration-700 transform ${cls}`}>
      <img alt={g.alt} className="w-full h-full object-cover rounded-xl shadow-2xl" src={g.src} />
      {rel === 0 && (
        <div className="absolute bottom-8 left-8 bg-navy/60 backdrop-blur-md px-6 py-2 border-l-2 border-gold">
          <p className="text-white font-label-caps text-sm tracking-widest uppercase">{g.alt}</p>
        </div>
      )}
    </div>
  );
})}
</div>
<button className="absolute left-4 md:left-12 top-1/2 -translate-y-1/2 z-20 bg-white/90 hover:bg-white text-primary p-3 rounded-full shadow-lg transition-all duration-300 gallery-prev" onClick={() => setGalIdx((i) => (i + GALLERY.length - 1) % GALLERY.length)}>
<span className="material-symbols-outlined text-3xl">chevron_left</span>
</button>
<button className="absolute right-4 md:right-12 top-1/2 -translate-y-1/2 z-20 bg-white/90 hover:bg-white text-primary p-3 rounded-full shadow-lg transition-all duration-300 gallery-next" onClick={() => setGalIdx((i) => (i + 1) % GALLERY.length)}>
<span className="material-symbols-outlined text-3xl">chevron_right</span>
</button>
</div>
</section>
<section className="bg-surface overflow-hidden py-8">
<div className="max-w-7xl mx-auto px-6 md:px-container-padding">
<div className="relative w-full overflow-hidden rounded-xl shadow-2xl border border-outline-variant/20" style={{aspectRatio: "16 / 9"}}>
<iframe
className="absolute inset-0 w-full h-full"
src="https://www.youtube.com/embed/uySn1BZiWWs?autoplay=1&mute=1&loop=1&playlist=uySn1BZiWWs&controls=1&rel=0&modestbranding=1&playsinline=1"
title="Sun Glory Project Video"
frameBorder="0"
allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
allowFullScreen
referrerPolicy="strict-origin-when-cross-origin"
></iframe>
</div>
</div>
</section>
<section className="py-16 md:py-section-gap bg-background overflow-hidden" id="floor-plan">
<div className="text-center mb-12">
<p className="font-label-caps text-label-caps text-secondary mb-2 uppercase tracking-widest">Architectural Layout</p>
<h2 className="font-headline-xl text-headline-xl text-ink mb-4 uppercase tracking-widest">FLOOR PLAN</h2>
<div className="w-24 h-[1px] bg-secondary mx-auto"></div>
</div>
<div className="max-w-7xl mx-auto px-6 md:px-container-padding">
{/* Tabs */}
<div className="flex flex-wrap justify-center gap-2 md:gap-4 mb-12 px-0 md:px-6">
<button className="px-3 md:px-8 py-2.5 md:py-3 border border-ink bg-ink text-white font-semibold font-label-caps text-xs md:text-sm tracking-wider md:tracking-widest transition-all">3 BHK LUXURY</button>
<button className="px-3 md:px-8 py-2.5 md:py-3 border border-outline-variant/30 text-on-surface-variant font-label-caps text-xs md:text-sm tracking-wider md:tracking-widest hover:border-ink transition-all">2.5 BHK PREMIUM</button>
<button className="px-3 md:px-8 py-2.5 md:py-3 border border-outline-variant/30 text-on-surface-variant font-label-caps text-xs md:text-sm tracking-wider md:tracking-widest hover:border-ink transition-all">3 BHK XXL</button>
</div>
{/* Content Split */}
<div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
{/* Left: Image */}
<div className="bg-white p-4 shadow-sm border border-outline-variant/10">
<img alt="3 BHK Luxury Floor Plan" className="w-full h-auto object-contain" src="https://lh3.googleusercontent.com/aida-public/AB6AXuDHAfs2A-SHCMw0LYAKif6PvPi1vjU1t0Ok15RbprNBgb4Wz--M5aM3-RXmhl2zkpr7rujkqng877aYuStoCpafXAERH_hQK-pSRCAfPQZbDhJMMn6A9kFtzwBBObWLV3eCk2ZWQkGcTAI0Pefm1lEptCo1m8FA5MNB_PQq0JawU15bOw0wwtMpNV2rrOFCmcdoqqEDe-F8lR1JKuYZLTYjjlbBXg0YzD-LKsclVhagPmNLwLUUk3DNyw" />
</div>
{/* Right: Details */}
<div className="flex flex-col">
<h3 className="font-headline-lg text-headline-lg text-ink mb-4">The Grand Residences</h3>
<p className="font-body-lg text-on-surface-variant mb-8 leading-relaxed">Designed for the modern family, our 3 BHK Luxury units offer expansive living areas with double-height ceilings and premium finishes that define sophisticated urban living.</p>
<div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-10">
<div className="flex items-center gap-3">
<span className="material-symbols-outlined text-secondary">air</span>
<span className="font-label-caps text-xs uppercase tracking-wider">Cross Ventilation</span>
</div>
<div className="flex items-center gap-3">
<span className="material-symbols-outlined text-secondary">temple_hindu</span>
<span className="font-label-caps text-xs uppercase tracking-wider">Vaastu Compliant</span>
</div>
<div className="flex items-center gap-3">
<span className="material-symbols-outlined text-secondary">balcony</span>
<span className="font-label-caps text-xs uppercase tracking-wider">Private Balconies</span>
</div>
<div className="flex items-center gap-3">
<span className="material-symbols-outlined text-secondary">devices</span>
<span className="font-label-caps text-xs uppercase tracking-wider">Smart Home Ready</span>
</div>
</div>
<div className="bg-surface-container-low p-6 border-l-4 border-gold mb-8">
<p className="font-label-caps text-xs text-secondary uppercase mb-1">Total Carpet Area</p>
<p className="font-headline-lg text-3xl text-primary">1,450 Sq. Ft.</p>
</div>
<button className="bg-primary text-white font-semibold font-label-caps text-sm px-6 md:px-10 py-4 hover:bg-primary-active hover:text-white transition-colors duration-300 uppercase tracking-widest w-fit">
REQUEST BROCHURE
</button>
</div>
</div>
</div>
</section><section className="py-16 md:py-section-gap bg-background overflow-hidden" id="location"><div className="max-w-7xl mx-auto px-6 md:px-container-padding"><div className="text-center mb-16"><p className="font-label-caps text-label-caps text-secondary mb-2 uppercase tracking-widest">DISCOVER THE NEIGHBORHOOD</p><h2 className="font-headline-xl text-headline-xl text-ink mb-4">Strategic Location</h2><div className="w-24 h-[1px] bg-secondary mx-auto"></div></div><div className="mb-16 rounded-xl overflow-hidden shadow-2xl border border-outline-variant/20"><img alt="Strategic Location Map" className="w-full h-[280px] md:h-[500px] object-cover" src="https://lh3.googleusercontent.com/aida/AP1WRLsbpawNQb92x8dlWbalPtyTyteh6ksFWQTLFaQY96S9nUmqo8D3hNiRs9CrArvp4bu4OPwQQSDPEH7GdNmyiL1duLXOgtUEA8iA9YjaJ5Nrhb4geG5YcQsWYIiUUBFm98wrdbcWVocw6onoLbxQes-FLTXjJDcyBNY-SDMuSoB37300AZOk_jnGcMMFGQUpb39R6c5KjhJy7LMOZ_YwvnO4991pZ3JRFnKJ98KPjwY8nm3VdgcIjJU3_efu" /></div></div></section>
{/* Location Section */}
</main>
{/* Footer */}




<div id="enquire-modal" className="fixed inset-0 z-[100] flex items-center justify-center p-4 opacity-0 pointer-events-none transition-opacity duration-300">
    <div className="absolute inset-0 bg-navy/70 backdrop-blur-sm" id="modal-backdrop"></div>
    <div className="relative bg-white w-full max-w-lg rounded-xl shadow-2xl border border-gold/40 overflow-hidden transform transition-transform duration-300 scale-95" id="modal-container">
        <button className="absolute top-2 right-2 p-2 text-on-surface-variant hover:text-primary transition-colors" id="close-modal">
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
            <form className="space-y-4 text-left">
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
                        <option value="sun-glory">Sun Glory - Lokmanya Nagar</option>
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
