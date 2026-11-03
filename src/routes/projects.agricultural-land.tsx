import { createFileRoute } from "@tanstack/react-router";
import { ProjectCard } from "@/components/ProjectCard";
import { useState } from "react";

const STATUSES = ["ONGOING", "UPCOMING", "COMPLETED"] as const;

export const Route = createFileRoute("/projects/agricultural-land")({
  head: () => ({
    meta: [
      { title: "Agricultural Land — Rishi Builders & Developers" },
      { name: "description", content: "Agricultural land parcels around Pune curated by Rishi Builders & Developers." },
      { property: "og:title", content: "Agricultural Land — Rishi Builders & Developers" },
      { property: "og:description", content: "Agricultural land parcels around Pune curated by Rishi Builders & Developers." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: AgriPage,
});

function AgriPage() {
  const [status, setStatus] = useState<(typeof STATUSES)[number]>("ONGOING");
  return (
    <>
{/* TopNavBar Shared Component */}

{/* Main Content Canvas */}
<main className="flex-grow">
{/* Page Header & Filters */}
<section className="page-banner px-gutter md:px-container-padding py-16 md:py-24 text-center mb-12 md:mb-16">
<div className="max-w-5xl mx-auto">
<h1 className="font-headline-xl text-headline-xl md:font-display-lg md:text-display-lg text-white mb-4">Agricultural Land</h1>
<div className="flex items-center justify-center gap-3 mb-6"><div className="h-px w-12 bg-gold/60"></div><div className="h-1 w-10 bg-gold"></div><div className="h-px w-12 bg-gold/60"></div></div>
<p className="font-body-lg text-body-lg text-white/80 max-w-2xl mx-auto mb-10">
                Discover our portfolio of meticulously planned non-agricultural plots, designed for those who appreciate space, security, and long-term value.
            </p>
{/* Status Filters */}
<div className="flex flex-wrap justify-center gap-2 sm:gap-4">
{STATUSES.map((s) => (
  <button
    key={s}
    onClick={() => setStatus(s)}
    className={`px-4 sm:px-8 py-2.5 sm:py-3 font-label-caps text-xs sm:text-label-caps tracking-wider sm:tracking-widest border rounded-DEFAULT transition-all duration-300 ${status === s ? "bg-white border-white text-navy font-bold shadow-md" : "bg-white/5 border-white/40 text-white hover:bg-white/15 hover:border-white"}`}
  >{s}</button>
))}
</div>
</div>
</section>
{/* Project Grid */}
<section className="px-gutter md:px-6 md:px-container-padding pb-section-gap">
<div className="center-orphan grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-margin-md">
<ProjectCard
  image="https://lh3.googleusercontent.com/aida-public/AB6AXuDnBsZy6XNkD6qQOnL6XBfD2QQrpJCodIB6oC1o1smocrBPFPvG69oJfbcB3h_bXazTJht0kGQm3LHnP_fkGvHCR6ymH2srj_mUIWopMU-GSNxSdynqyhZqfS8pYxdGF0TgKG026G0UXJ7vC409bbvTs5li8dwjNrVMdhSCKPVvrG66wYFfDVFi4UDjO396t3WG1QFvajiFCLS4Avvu1sVpWwW09wOMh60IjbvB7qKBdqg3zOg0aTO9kw"
  title="Aura Estates"
  subtitle="North Valley"
  description="Exclusive 5-acre plots designed for bespoke architectural visions, surrounded by protected woodlands."
  to="/projects/land"
/>
<ProjectCard
  image="https://lh3.googleusercontent.com/aida-public/AB6AXuANLb92m0lQF-c7XrRkXYK69GKSW4v_MvATte4zkuCw_EQjpjKwH9xjktM2KuXlaN9KranAexm-tRQ7vSxxqe8_SCcXK04MXckhFPSH1hf1MkBINSSqDjPfyAzc_Cba5VCnBRGRW61QuEwjQ6ko86t-55rRIV-5BXPGZ8HNBKaiW0dm5gQtEhtculGrGcBSp4TRj43nwDa0OOFa0FvGbrkQgzSGDMvFg3_bmDB5jjaoU17r5puoBQSZ2w"
  title="The Grove"
  subtitle="West Hills"
  description="Premium lifestyle community offering unparalleled views and integrated smart-infrastructure."
  to="/projects/land"
/>
<ProjectCard
  image="https://lh3.googleusercontent.com/aida-public/AB6AXuBzUpBFeMd6hFt-VYk67wVUJ-jEgN96k0ojijWbzZlk3SfIewJwAPlewVg-6sr8QOeJRnKqZjK4JC0wgoNbVlkQINBnf8-iDc-9qqh5QV3cEKmt6IRYuTJcNu9ljomB7O9ks_LF1k046VD8whFWdq5aL2t25Rn1_t78v_CkMqJYfWVBDtpW0QoaXHKE8V0qbCYoH563aGGCuQW-C3rIRRdreCfvPaJwNDcofPRJOtBxXL-bjy7m49B9cg"
  title="Lakeside Enclave"
  subtitle="Eastern Shores"
  description="Waterfront properties offering a rare blend of tranquility and proximity to urban centers."
  to="/projects/land"
/>
</div>
</section>
</main>
{/* Footer Shared Component */}
    </>
  );
}
