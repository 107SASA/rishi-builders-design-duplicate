import { createFileRoute, Link } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import { ProjectCard } from "@/components/ProjectCard";
import { useSwipe } from "@/hooks/use-swipe";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Rishi Builders & Developers | Premium Homes in Pune" },
      { name: "description", content: "Rishi Builders & Developers — premium residential, commercial and land projects across Pune. Come home to quality." },
      { property: "og:title", content: "Rishi Builders & Developers | Premium Homes in Pune" },
      { property: "og:description", content: "Rishi Builders & Developers — premium residential, commercial and land projects across Pune. Come home to quality." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: HomePage,
});

function HomePage() {
  const [slide, setSlide] = useState(2);
  const heroSwipe = useSwipe(
    () => setSlide((s) => (s + 1) % 4),
    () => setSlide((s) => (s + 3) % 4),
  );

  useEffect(() => {
    const id = setInterval(() => setSlide((s) => (s + 1) % 4), 6000);
    return () => clearInterval(id);
  }, []);

  return (
    <>
{/* TopNavBar */}


{/* Hero Carousel */}
<header className="relative w-full h-[100svh] min-h-[520px] bg-navy" id="hero-carousel" {...heroSwipe}>
{/* Slides Container */}
<div className="relative w-full h-full" id="carousel-slides">
{/* Slide 1 */}
<div className={`carousel-slide absolute inset-0 transition-opacity duration-1000 ease-in-out ${slide === 0 ? "opacity-100 z-10" : "opacity-0 z-0"}`}>
<img alt="" className="absolute inset-0 w-full h-full object-cover object-center" src="https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?auto=format&fit=crop&w=2400&q=80" />
<div className="absolute inset-0 bg-gradient-to-r from-navy/85 via-navy/30 to-transparent"></div>
<div className="relative z-20 h-full flex items-center pl-6 md:pl-24 pr-6 md:pr-container-padding">
<div className="max-w-7xl mx-auto w-full">
<div className="max-w-2xl transform transition-all duration-700 translate-y-0 opacity-100">
<h2 className="font-display-lg-mobile text-display-lg-mobile md:font-display-lg md:text-display-lg text-white mb-2 leading-tight drop-shadow-lg">Sun Glory<br />Lokmanya Nagar</h2>
<p className="font-label-caps text-secondary-fixed mb-4 tracking-widest uppercase">Sadashiv Peth</p>
<p className="font-body-lg text-white/90 mb-8">Premium 3 BHK Residences</p>
<button className="bg-primary text-white font-semibold font-label-caps text-xs sm:text-sm px-8 sm:px-12 py-3 sm:py-4 hover:bg-primary-active hover:text-white shadow-lg transition-colors uppercase tracking-widest">KNOW MORE</button>
</div>
</div>
</div>
</div>
{/* Slide 2 */}
<div className={`carousel-slide absolute inset-0 transition-opacity duration-1000 ease-in-out ${slide === 1 ? "opacity-100 z-10" : "opacity-0 z-0"}`}>
<img alt="" className="absolute inset-0 w-full h-full object-cover object-center" src="https://images.unsplash.com/photo-1460317442991-0ec209397118?auto=format&fit=crop&w=2400&q=80" />
<div className="absolute inset-0 bg-gradient-to-r from-navy/85 via-navy/30 to-transparent"></div>
<div className="relative z-20 h-full flex items-center pl-6 md:pl-24 pr-6 md:pr-container-padding">
<div className="max-w-7xl mx-auto w-full">
<div className="max-w-2xl transform transition-all duration-700 translate-y-0 opacity-100">
<h2 className="font-display-lg-mobile text-display-lg-mobile md:font-display-lg md:text-display-lg text-white mb-2 leading-tight drop-shadow-lg">Sun Crest<br />Dhayari</h2>
<p className="font-label-caps text-secondary-fixed mb-4 tracking-widest uppercase">Pune</p>
<p className="font-body-lg text-white/90 mb-8">2 BHK Premium Homes</p>
<button className="bg-primary text-white font-semibold font-label-caps text-xs sm:text-sm px-8 sm:px-12 py-3 sm:py-4 hover:bg-primary-active hover:text-white shadow-lg transition-colors uppercase tracking-widest">KNOW MORE</button>
</div>
</div>
</div>
</div>
{/* Slide 3 */}
<div className={`carousel-slide absolute inset-0 transition-opacity duration-1000 ease-in-out ${slide === 2 ? "opacity-100 z-10" : "opacity-0 z-0"}`}>
<img alt="" className="absolute inset-0 w-full h-full object-cover object-center" src="https://images.unsplash.com/photo-1515263487990-61b07816b324?auto=format&fit=crop&w=2400&q=80" />
<div className="absolute inset-0 bg-gradient-to-r from-navy/85 via-navy/30 to-transparent"></div>
<div className="relative z-20 h-full flex items-center pl-6 md:pl-24 pr-6 md:pr-container-padding">
<div className="max-w-7xl mx-auto w-full">
<div className="max-w-2xl transform transition-all duration-700 translate-y-0 opacity-100 md:ml-12">
<h2 className="font-display-lg-mobile text-display-lg-mobile md:font-display-lg md:text-display-lg text-white mb-2 leading-tight drop-shadow-lg">Sun Regalia<br />Sinhagad Road</h2>
<p className="font-label-caps text-secondary-fixed mb-4 tracking-widest uppercase">Pune</p>
<p className="font-body-lg text-white/90 mb-8">Elevate your lifestyle</p>
<button className="bg-primary text-white font-semibold font-label-caps text-xs sm:text-sm px-8 sm:px-12 py-3 sm:py-4 hover:bg-primary-active hover:text-white shadow-lg transition-colors uppercase tracking-widest">KNOW MORE</button>
</div>
</div>
</div>
</div>
{/* Slide 4 */}
<div className={`carousel-slide absolute inset-0 transition-opacity duration-1000 ease-in-out ${slide === 3 ? "opacity-100 z-10" : "opacity-0 z-0"}`}>
<img alt="" className="absolute inset-0 w-full h-full object-cover object-center" src="https://images.unsplash.com/photo-1574362848149-11496d93a7c7?auto=format&fit=crop&w=2400&q=80" />
<div className="absolute inset-0 bg-gradient-to-r from-navy/85 via-navy/30 to-transparent"></div>
<div className="relative z-20 h-full flex items-center pl-6 md:pl-24 pr-6 md:pr-container-padding">
<div className="max-w-7xl mx-auto w-full">
<div className="max-w-2xl transform transition-all duration-700 translate-y-0 opacity-100">
<h2 className="font-display-lg-mobile text-display-lg-mobile md:font-display-lg md:text-display-lg text-white mb-2 leading-tight drop-shadow-lg">Sun Crest<br />Dhayari</h2>
<p className="font-label-caps text-secondary-fixed mb-4 tracking-widest uppercase">Pune</p>
<p className="font-body-lg text-white/90 mb-8">2 BHK Premium Homes</p>
<button className="bg-primary text-white font-semibold font-label-caps text-xs sm:text-sm px-8 sm:px-12 py-3 sm:py-4 hover:bg-primary-active hover:text-white shadow-lg transition-colors uppercase tracking-widest">KNOW MORE</button>
</div>
</div>
</div>
</div>
</div>
{/* Controls */}
<button className="absolute left-2 sm:left-8 bottom-5 md:bottom-auto md:top-1/2 md:-translate-y-1/2 z-30 p-1 text-white/50 hover:text-white transition-colors" onClick={() => setSlide((s) => (s + 3) % 4)}>
<span className="material-symbols-outlined text-4xl sm:text-6xl font-light">chevron_left</span>
</button>
<button className="absolute right-2 sm:right-8 bottom-5 md:bottom-auto md:top-1/2 md:-translate-y-1/2 z-30 p-1 text-white/50 hover:text-white transition-colors" onClick={() => setSlide((s) => (s + 1) % 4)}>
<span className="material-symbols-outlined text-4xl sm:text-6xl font-light">chevron_right</span>
</button>
<div className="absolute bottom-10 left-1/2 -translate-x-1/2 z-30 flex gap-3">
{[0, 1, 2, 3].map((i) => (
  <button
    key={i}
    aria-label={`Go to slide ${i + 1}`}
    onClick={() => setSlide(i)}
    className={`h-2 rounded-full transition-all duration-300 ${slide === i ? "w-8 bg-gold" : "w-2 bg-white/50 hover:bg-white/80"}`}
  />
))}
</div>
</header>
{/* Featured Projects */}
<section className="bg-surface-container-low py-section-gap px-6 md:px-container-padding">
<div className="max-w-7xl mx-auto text-center mb-16">
<div className="flex items-center justify-center gap-4 mb-4">
<div className="hidden sm:block w-12 h-0.5 bg-gold"></div>
<h2 className="font-headline-lg text-headline-lg text-ink uppercase tracking-widest">OUR FEATURED PROPERTIES</h2>
<div className="hidden sm:block w-12 h-0.5 bg-gold"></div>
</div>
<p className="font-body-md text-body-md text-on-surface-variant max-w-3xl mx-auto">At Rishi Builders, we redefine modern living with thoughtfully designed residential and commercial spaces. Our featured projects showcase a perfect blend of luxury, innovation, and sustainability.</p>
</div>
<div className="center-orphan grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto items-stretch">
<ProjectCard
  image="https://lh3.googleusercontent.com/aida-public/AB6AXuDcRSWE4H8JDKcFgOjzFClloKapPaYDubyup1JqKPT32tlnNnfODfij4oUuYy13pgXdFViNWpM7tkXRguYOxKiOEF_4a9HMTK3581fH2NUYuYmJla7-LVo8CIaiK2Fr6bfoPXJvfdwxP2zkY0WjE2o24E4sqmq5VTfUEfyd941W3Sd5az0ST4Lsz5_wBpu5dXC9KGDKleNr3jWMokW6Y6TF2VTh55NjqL3kLqFO6FEtJndwTFsm2mp8sfUwXzNJm6tRpRMErlsGjKUHQ7E"
  title="Sun Garnet"
  subtitle="Keshav Nagar"
  description="Premium residential building featuring a sophisticated facade with a mix of glass and solid panels."
  to="/projects/sun-glory"
/>
<ProjectCard
  image="https://lh3.googleusercontent.com/aida-public/AB6AXuAH0fMDAitEM2IKwsF2DrTL7X5teMZAbmoJlvke_oJ9Jgw77PzpvlwfrkZL_5rslrdxNWbEtG6CfF9n3Vi56XQHZ-_UBxWoo3P3f522lT9DtBij5j_yQWYVjrvCryOFxV2uMq1AxiFXWj8dUZ8pXDPixoFAuGTYdo4X5qiC-jAoQYX6R2c5xxD_Wg3MxKgkH0gQ8tIKoLnbC73cAJREmNPkyFbUCOG-89AC5z43WyG7Xvo9CIZ-gyOGRaSetBQ1B0IWIicmwz-4jqzcGR8"
  title="Sun Regalia"
  subtitle="Sinhagad Road"
  description="A sprawling luxury complex nestled in a quiet urban setting, highlighting premium residential living."
  to="/projects/sun-glory"
/>
<ProjectCard
  image="https://lh3.googleusercontent.com/aida-public/AB6AXuCMyis14d6jQtZW8hxy9ycbU164bAxZfmugBuaSXbaH8dU5ArAV8Q7h3v0t_VMilex9lftTuSQllH5CZ60He3wEs1ZjQPG_3NBB3t3QswktTHPFSdpT0tMdbq10wvRE2mUtP2_8DCsSLjWq9IMjLCpeRBu4lXBeqvr81Y8Gn6RKLyO-UxLmDD7zHP1sl6pLz6AzCsZ4cl-vwyPsv_CL9SBUSKJ6yAOLbilO1ugWxgdmR51iUZjkLVtnvPlKJOVULRR23YtvRoYBoZFeDn8"
  title="Sun Platina"
  subtitle="Kharadi"
  description="A sprawling luxury complex reflecting growth and investment potential in Pune's top hotspot."
  to="/projects/sun-glory"
/>
</div>
</section>
{/* Footer */}
    </>
  );
}
