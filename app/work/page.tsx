import { caseStudies } from "@/data/caseStudies";
import { SectionLabel } from "@/components/shared/SectionLabel";

export default function WorkPage() {
  return (
    <div className="mx-auto max-w-6xl px-6 py-20">
      <SectionLabel label="WORK" />
      <h1 className="mb-10 text-5xl font-black md:text-7xl">Work That Climbs.</h1>
      <div className="mb-8 flex flex-wrap gap-3 text-sm">
        {["All", "Paid Media", "SEO", "Social", "Brand"].map((tab) => (
          <button key={tab} className="rounded-full border border-white/20 px-4 py-2 hover:border-[#F5A623] hover:text-[#F5A623]">
            {tab}
          </button>
        ))}
      </div>
      <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-3">
        {caseStudies.map((study) => (
          <article key={study.id} className="rounded-2xl border border-white/10 bg-[#1A1A1A] p-6">
            <p className="mb-2 text-xs uppercase text-[#F5A623]">{study.category}</p>
            <h2 className="mb-2 text-2xl font-bold">{study.brand}</h2>
            <p className="text-white/75">{study.result}</p>
          </article>
        ))}
      </div>
    </div>
  );
}
