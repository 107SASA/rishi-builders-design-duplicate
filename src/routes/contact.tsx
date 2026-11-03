import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact Rishi Builders & Developers" },
      { name: "description", content: "Enquire about Rishi Builders projects in Pune — site visits, pricing and availability." },
      { property: "og:title", content: "Contact Rishi Builders & Developers" },
      { property: "og:description", content: "Enquire about Rishi Builders projects in Pune — site visits, pricing and availability." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: ContactPage,
});

function ContactPage() {
  return (
    <>
{/* TopNavBar */}

{/* Main Content Canvas */}
<main className="w-full flex flex-col items-center">
{/* Enquiry Section */}
<section className="page-banner w-full px-6 md:px-container-padding py-16 md:py-24 flex flex-col items-center text-center"><div className="w-full max-w-[720px] mx-auto flex flex-col items-center bg-white shadow-2xl shadow-navy/40 border-t-4 border-gold px-6 sm:px-12 py-10 sm:py-14">
  <p className="font-label-caps text-xs uppercase tracking-widest text-gold-deep mb-4">Your ideal space is just a step away</p>
  <h1 className="font-headline-xl text-[32px] sm:text-[40px] md:text-[48px] leading-tight text-ink mb-6 tracking-[0.02em] font-normal">LET'S GET STARTED!</h1>
  <div className="flex items-center gap-4 mb-8 w-full max-w-[200px] justify-center">
    <div className="h-px bg-outline-variant/50 flex-1"></div>
    <div className="h-1 w-8 bg-gold"></div>
    <div className="h-px bg-outline-variant/50 flex-1"></div>
  </div>
  <p className="font-body-md text-on-surface-variant mb-12">Brochure and details will be sent on your mobile number</p>

  <form className="w-full space-y-6 text-left">
    <div className="grid grid-cols-1 gap-6">
      <input className="w-full h-[48px] border border-outline-variant/30 bg-white px-4 focus:outline-none focus:border-secondary transition-colors placeholder-on-surface-variant font-body-md rounded-none" placeholder="Your Name *" required={true} type="text" />
      <input className="w-full h-[48px] border border-outline-variant/30 bg-white px-4 focus:outline-none focus:border-secondary transition-colors placeholder-on-surface-variant font-body-md rounded-none" placeholder="Your Email *" required={true} type="email" />
      <input className="w-full h-[48px] border border-outline-variant/30 bg-white px-4 focus:outline-none focus:border-secondary transition-colors placeholder-on-surface-variant font-body-md rounded-none" placeholder="Phone *" required={true} type="tel" />
      <div className="relative">
        <select defaultValue="" className="w-full h-[48px] border border-outline-variant/30 bg-white px-4 focus:outline-none focus:border-secondary transition-colors text-on-surface-variant font-body-md appearance-none cursor-pointer rounded-none">
          <option disabled={true} value="">Select Your Project</option>
          <option value="project-1">Sun Glory</option>
          <option value="project-2">Sun Platina</option>
          <option value="project-3">Sun Emerald</option>
        </select>
        <span className="material-symbols-outlined absolute right-4 top-1/2 -translate-y-1/2 pointer-events-none text-on-surface-variant">expand_more</span>
      </div>
    </div>

    <div className="flex flex-col items-center gap-8 mt-12">
      <div className="flex items-start gap-3 max-w-[500px] text-center">
        <input className="mt-1 text-secondary focus:ring-secondary border-outline-variant" id="privacy" required={true} type="checkbox" />
        <label className="text-xs text-on-surface-variant leading-relaxed" htmlFor="privacy">
          I hereby authorize Rishi Builders and its affiliates to contact me via email, SMS, or phone calls. This consent overrides any registration on the DNC/NDNC registry.
        </label>
      </div>
      <button className="bg-primary text-white font-semibold font-label-caps text-sm tracking-[0.12em] hover:bg-primary-active hover:text-white transition-colors duration-300 w-full max-w-[330px] h-[58px] uppercase rounded-none" type="submit">
        SEND MESSAGE
      </button>
    </div>
  </form>
</div></section>
{/* Office Section */}
<section className="w-full bg-ivory py-section-gap px-6 md:px-container-padding border-t border-outline-variant/30">
<div className="max-w-6xl mx-auto">
<h2 className="font-headline-lg text-headline-lg text-ink text-center mb-margin-lg">RISHI HOUSE</h2>
<div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
{/* Contact Details */}
<div className="space-y-8">
<div>
<h3 className="font-label-caps text-secondary tracking-widest mb-2">HEADQUARTERS</h3>
<p className="font-body-md text-on-surface-variant leading-relaxed">
                                Rishi House, Plot No. 45, Sector 12,<br />
                                Architectural District, New Delhi,<br />
                                India - 110001
                            </p>
</div>
<div>
<h3 className="font-label-caps text-secondary tracking-widest mb-2">PHONE</h3>
<p className="font-body-md text-on-surface-variant leading-relaxed">
                                +91 98765 43210<br />
                                +91 11 2345 6789
                            </p>
</div>
<div>
<h3 className="font-label-caps text-secondary tracking-widest mb-2">EMAIL</h3>
<p className="font-body-md text-on-surface-variant leading-relaxed">
                                enquiries@rishibuilders.com<br />
                                investors@rishibuilders.com
                            </p>
</div>
</div>
{/* Map Image */}
<div className="w-full aspect-[4/3] bg-surface relative overflow-hidden shadow-sm">
<img className="w-full h-full object-cover transition-opacity duration-500" src="https://lh3.googleusercontent.com/aida-public/AB6AXuC89IzvRyv5WyYRqiS9ZJWLeJYbpfkPBilXKxEziR1cwke20J6d8cXxqCxaIYN-swd4JDlZNj3Z2sYAJ930ChdFgOeyqDXHwsG9vUMbsATr4rzok_Hfu-_5PZqerowLzLcmP_dBX0uf6gkovWSXEslYLFO-SWBZobzc7-vd-whTJm40QW4R-IhuU-6F--y3pgtvsvPG561QWfCGWaSTI-YBuDsV-qA4TAEg85erKWzXlXP9GhuspFV8PA" alt="Vibrant satellite map view of Rishi House, New Delhi" />
</div>
</div>
</div>
</section>
</main>
{/* Footer */}
    </>
  );
}
