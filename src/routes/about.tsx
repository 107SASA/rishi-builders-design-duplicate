import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";

const MILESTONE_PERIODS = [
  { id: "1998-2008", label: "1998 - 2008" },
  { id: "2009-2019", label: "2009 - 2019" },
  { id: "2020-present", label: "2020 - Present" },
] as const;

type PeriodId = (typeof MILESTONE_PERIODS)[number]["id"];

const MILESTONES: Record<PeriodId, { name: string; location: string }[]> = {
  "1998-2008": [
    { name: "Sun City I", location: "Anand Nagar, Sinhgad Road" },
    { name: "Sun City II", location: "Anand Nagar, Sinhgad Road" },
    { name: "Sun Paradise I", location: "Anand Nagar, Sinhgad Road" },
    { name: "Sun Paradise II", location: "Anand Nagar, Sinhgad Road" },
    { name: "Sun Empire", location: "Anand Nagar, Sinhgad Road" },
    { name: "Sun Galaxy", location: "Vadgaon BK" },
    { name: "Sun Orbit", location: "Anand Nagar, Sinhgad Road" },
    { name: "Sun Residency", location: "Dhayari" },
    { name: "Sun Orion", location: "Vadgaon BK" },
    { name: "Sun Satellite", location: "Anandnagar, Sinhgad Road" },
    { name: "Sun Horizon", location: "Balewadi, Near Sadanand Hotel" },
  ],
  "2009-2019": [
    { name: "Sun Exotica", location: "Kondhwa" },
    { name: "Sun Grandeur", location: "Bavdhan" },
    { name: "Sun Solitaire", location: "Kalyani Nagar" },
  ],
  "2020-present": [
    { name: "Sun Glory", location: "Sinhgad Road" },
    { name: "Sun Platina", location: "Kothrud" },
  ],
};

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About Rishi Builders & Developers" },
      { name: "description", content: "Four decades of trusted craftsmanship, milestones and delivered projects by Rishi Builders & Developers in Pune." },
      { property: "og:title", content: "About Rishi Builders & Developers" },
      { property: "og:description", content: "Four decades of trusted craftsmanship, milestones and delivered projects by Rishi Builders & Developers in Pune." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: AboutPage,
});

function AboutPage() {
  const [period, setPeriod] = useState<PeriodId>("1998-2008");
  return (
    <>
{/* Header (Shared Component) */}

{/* Main Content */}
<main className="flex-grow">
{/* Hero Tagline Area (Optional, adding for transition) */}
<section className="page-banner w-full py-16 md:py-20 text-center px-6 mb-margin-lg">
<p className="font-label-caps text-label-caps text-on-dark-soft uppercase tracking-[0.25em] mb-4">About Us</p>
<h2 className="font-headline-xl text-3xl md:text-headline-xl text-white uppercase tracking-[0.12em]">Come Home To Quality</h2>
<div className="h-1 w-16 bg-gold mx-auto mt-6"></div>
</section>
{/* Asymmetric About Section */}
<section className="relative w-full max-w-[1440px] mx-auto px-6 md:px-6 md:px-container-padding py-margin-lg">
<div className="relative flex flex-col md:flex-row items-center">
{/* Left: Large Image */}
<div className="w-full md:w-[55%] overflow-hidden bg-surface-container z-0 h-64 sm:h-80 md:h-[500px]">
<img alt="Rishi Builders Architectural Excellence" className="w-full h-full object-cover" src="https://lh3.googleusercontent.com/aida-public/AB6AXuDB_7TcwZt1-efWbkNATByt7rGqstefpPayJ-DQfoPiyuse-JXi4gIY7Ea5KZkJx6waAH0w2DwIPPcTS_BjTuyzoIqM7n_SJ41TzGM4ch0Jjsl_ljjNmBqoG8l0XzTMlBIhGM71qqChpb9enx2MwimYLXkXKLHmlK4iJjM335S4yHMiB0frGLQfUHFI7hl7WDs-8CAarthilcSlYmSUYQ7KWIBZPVSVAldNC9pUviz_AYoVuMpbIN4trQ" />
</div>
{/* Right: Overlapping Card */}
<div className="w-full md:w-[45%] md:absolute md:right-0 z-10 -mt-12 md:mt-0">
<div className="bg-surface-container-lowest p-6 sm:p-10 md:p-12 shadow-[0_20px_60px_-15px_rgba(0,0,0,0.1)] flex flex-col justify-center gap-6 h-auto border border-surface-container/50 md:h-[420px] md:py-16">
{/* Decorative Accents & Heading */}
<div className="flex flex-col gap-4">
<div className="flex items-center gap-4">
<div className="h-[1px] w-12 bg-primary"></div>
<div className="h-[1px] w-8 bg-secondary"></div>
</div>
<h1 className="font-headline-xl text-headline-xl text-ink leading-tight">
                        DISCOVER<br />
                        RISHI BUILDERS
                    </h1>
</div>
{/* Body Copy */}
<div className="flex flex-col gap-4 font-body-md text-body-md text-on-surface-variant">
<p className="md:line-clamp-3">
                        Founded on the principles of architectural integrity and uncompromising quality, Rishi Builders has been shaping the skyline with spaces that resonate with modern luxury and timeless elegance.
                    </p>
</div>
{/* Action */}
<div className="pt-2">
<a className="inline-flex items-center gap-2 font-label-caps text-label-caps text-primary border-b border-secondary pb-1 hover:text-secondary transition-colors group" href="#">
                        EXPLORE OUR LEGACY
                        <span className="material-symbols-outlined text-sm group-hover:translate-x-1 transition-transform">arrow_forward</span>
</a>
</div>
</div>
</div>
</div>
</section>
{/* Project Milestones Section */}
<section className="w-full bg-surface-container-low mt-margin-lg">
<div className="max-w-[1440px] mx-auto px-6 md:px-container-padding py-section-gap">
<div className="flex flex-col items-center gap-4 mb-16">
<h3 className="font-label-caps text-label-caps text-on-surface-variant uppercase tracking-[0.2em] text-center">From Vision to Reality</h3>
<h2 className="font-headline-xl text-headline-xl text-ink text-center">OUR PROJECT MILESTONES</h2>
<div className="flex items-center justify-center gap-4 mt-2">
<div className="h-[1px] w-12 bg-primary"></div>
<div className="h-[1px] w-8 bg-secondary"></div>
</div>
</div>
{/* Timeline Filter */}
<div className="flex flex-wrap justify-center gap-2 sm:gap-4 mb-10 md:mb-16">
{MILESTONE_PERIODS.map((p) => (
  <button
    key={p.id}
    onClick={() => setPeriod(p.id)}
    className={`milestone-btn px-4 sm:px-8 py-3 border border-outline-variant font-label-caps text-xs sm:text-sm tracking-wider sm:tracking-widest transition-colors duration-300 ${period === p.id ? "bg-ink border-ink text-white font-semibold" : "bg-white text-ink hover:bg-cream"}`}
  >{p.label}</button>
))}
</div>
{/* Milestones Grid */}
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-x-8 gap-y-12 transition-opacity duration-500 opacity-100" id="milestones-grid">
{MILESTONES[period].map((m) => (
  <div className="flex flex-col rounded-xl bg-white p-6 shadow-sm border-t-2 border-gold hover:shadow-lg hover:-translate-y-1 transition-all duration-300" key={m.name}>
    <h4 className="font-headline-lg text-2xl text-ink mb-3">{m.name}</h4>
    <div className="h-[1px] w-full bg-gold mb-4"></div>
    <p className="font-body-md text-on-surface-variant text-sm uppercase tracking-wider">{m.location}</p>
  </div>
))}
</div>
</div>
</section>

</main>
{/* Footer (Shared Component) */}
    </>
  );
}
