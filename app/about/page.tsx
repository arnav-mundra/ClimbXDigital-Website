import { SectionLabel } from "@/components/shared/SectionLabel";

export default function AboutPage() {
  return (
    <div className="mx-auto max-w-6xl px-6 py-20">
      <SectionLabel label="ABOUT CLIMBX DIGITAL" />
      <h1 className="mb-10 text-5xl font-black md:text-7xl">
        Results-driven digital marketing, built around your brand.
      </h1>

      <div className="grid gap-6 lg:grid-cols-2">
        <div className="rounded-2xl border border-white/10 bg-[#1A1A1A] p-6">
          <p className="mb-5 text-white/75">
            ClimbX Digital is a results-driven digital marketing agency focused on helping brands scale and stand out. We combine strategic thinking with creative execution.
          </p>
          <p className="mb-6 text-white/75">
            Whether you’re a startup or an established business, we deliver data-backed solutions designed to maximize ROI and long-term growth.
          </p>

          <h2 className="mb-3 text-2xl font-bold">We specialize in</h2>
          <ul className="space-y-2 text-white/75">
            <li>Social media & Content strategy</li>
            <li>Performance marketing & Ads</li>
            <li>Website design</li>
            <li>Branding</li>
          </ul>
        </div>

        <div className="rounded-2xl border border-white/10 bg-[#1A1A1A] p-6">
          <div className="mt-2 rounded-xl border border-[#F5A623]/30 bg-[#0A0A0A] p-5">
            <p className="text-sm font-semibold text-[#F5A623]">Our promise</p>
            <p className="mt-2 text-white/75">
              Customized strategy, creative storytelling, and measurable performance—delivered with responsibility.
            </p>
          </div>
        </div>
      </div>

      <section className="mt-12">
        <div className="rounded-2xl border border-white/10 bg-[#1A1A1A] p-8 md:p-10">
          <h2 className="mb-6 text-3xl font-bold md:text-5xl">Words From the Founder</h2>

          <div className="space-y-4 text-lg leading-relaxed text-white/75">
            <p>
              ClimbX Digital was built from a simple belief — every brand has potential, but not every brand gets the right direction online. Over time, working with different businesses helped me understand something important: growth is not just about following trends, it’s about building trust.
            </p>
            <p>
              Every project we take on is approached with responsibility because behind every brand is someone’s vision. We don’t see our clients as just accounts. We see them as partners we grow alongside.
            </p>
          </div>

          <p className="mt-8 text-xl font-semibold text-[#F5A623]">— Anupam Kamble</p>
          <p className="text-white/70">Founder, ClimbX Digital 🚀</p>
        </div>
      </section>
    </div>
  );
}
