import Link from "next/link";
import { caseStudies } from "@/data/caseStudies";
import { testimonials } from "@/data/testimonials";
import { SectionLabel } from "@/components/shared/SectionLabel";
import { MagneticButton } from "@/components/shared/MagneticButton";

const servicesProvided = [
  {
    category: "social",
    title: "social media marketing",
    icon: (
      <svg className="w-10 h-10 text-[#F5A623]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1">
        <path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z" />
      </svg>
    ),
  },
  {
    category: "branding",
    title: "branding & creative design",
    icon: (
      <svg className="w-10 h-10 text-[#F5A623]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1">
        <path d="M12 2L15 8H21L16 13L18 20L12 16L6 20L8 13L3 8H9L12 2Z" />
      </svg>
    ),
  },
  {
    category: "development",
    title: "website development",
    icon: (
      <svg className="w-10 h-10 text-[#F5A623]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1">
        <line x1="4" y1="6" x2="20" y2="6" />
        <line x1="4" y1="12" x2="20" y2="12" />
        <line x1="4" y1="18" x2="20" y2="18" />
      </svg>
    ),
  },
  {
    category: "search",
    title: "seo services",
    icon: (
      <svg className="w-10 h-10 text-[#F5A623]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1">
        <circle cx="11" cy="11" r="8" />
        <line x1="21" y1="21" x2="16.65" y2="16.65" />
      </svg>
    ),
  },
  {
    category: "growth",
    title: "performance marketing",
    icon: (
      <svg className="w-10 h-10 text-[#F5A623]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1">
        <path d="M22 12h-4l-3 9L9 3l-3 9H2" />
      </svg>
    ),
  },
  {
    category: "content",
    title: "content creation",
    icon: (
      <svg className="w-10 h-10 text-[#F5A623]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1">
        <path d="M11 4H4a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7" />
        <path d="M18.5 2.5a2.121 2.121 0 0 1 3 3L12 15l-4 1 1-4 9.5-9.5z" />
      </svg>
    ),
  },
  {
    category: "production",
    title: "video production",
    icon: (
      <svg className="w-10 h-10 text-[#F5A623]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1">
        <polygon points="5 3 19 12 5 21 5 3" />
      </svg>
    ),
  },
  {
    category: "advertising",
    title: "advertising campaign management",
    icon: (
      <svg className="w-10 h-10 text-[#F5A623]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1">
        <circle cx="12" cy="12" r="10" />
        <path d="M12 2C12 2 8 8 8 12C8 16 12 22 12 22" />
        <path d="M12 2C12 2 16 8 16 12C16 16 12 22 12 22" />
        <path d="M2 12H22" />
      </svg>
    ),
  },
  {
    category: "strategy",
    title: "consulting & strategy services",
    icon: (
      <svg className="w-10 h-10 text-[#F5A623]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1">
        <rect x="3" y="3" width="18" height="18" rx="2" ry="2" />
        <line x1="3" y1="9" x2="21" y2="9" />
        <line x1="9" y1="21" x2="9" y2="9" />
      </svg>
    ),
  },
];

export default function Home() {
  const tickerContent =
    "PERFORMANCE MARKETING ◆ SEO & CONTENT ◆ PAID MEDIA ◆ BRAND IDENTITY ◆ SOCIAL MEDIA ◆ WEB DESIGN ◆";

  return (
    <div>
      <section className="relative flex min-h-[75vh] flex-col items-center justify-center px-6 py-20 text-center">
        <h1 className="mb-6 max-w-5xl text-5xl font-black uppercase md:text-7xl xl:text-[6rem] leading-none">
          We build <br /> <span className="text-transparent" style={{ WebkitTextStroke: "2px #F5A623" }}>digital</span> experiences
        </h1>
        <p className="max-w-2xl text-lg text-white/70 mb-10">
          We solve business challenges with smart thinking, big ideas, and incisive action. Our whole approach is based around making things simple.
        </p>
        <MagneticButton href="/contact" className="bg-[#F5A623] text-black font-semibold">
          START YOUR CLIMB
        </MagneticButton>
      </section>

      <section className="relative -translate-y-6 flex items-center overflow-hidden border-y border-[#F5A623]/30 bg-[#1A1A1A] py-4">
        <div className="ticker w-full text-sm leading-none tracking-widest text-[#F5A623]">
          <div className="ticker-track">
            <span className="ticker-item">{tickerContent}</span>
            <span className="ticker-item" aria-hidden="true">
              {tickerContent}
            </span>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-6 pt-6 pb-20">
        <div className="mb-6 flex items-end justify-between">
          <div className="flex items-baseline gap-4">
            <h2 className="text-5xl font-semibold tracking-tight text-white md:text-7xl">our expertise</h2>
            <span className="hidden text-sm font-medium text-white/60 md:inline-block">
              / discover our services
            </span>
          </div>
        </div>
        <hr className="mb-12 border-white/20" />
        <div className="grid gap-x-10 gap-y-12 sm:grid-cols-2">
          {servicesProvided.map((service) => (
            <article key={service.title} className="flex items-start gap-6 border-b border-white/10 pb-12">
              <div className="flex-shrink-0 text-[#F5A623]">{service.icon}</div>
              <div>
                <p className="mb-1 flex items-center gap-2 text-sm font-medium lowercase text-white/70">
                  <span className="h-1.5 w-1.5 rounded-full bg-[#F5A623]"></span>
                  {service.category}
                </p>
                <h3 className="text-2xl font-bold lowercase text-white">{service.title}</h3>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-6 pb-20">
        <div className="mb-6 flex items-end justify-between">
          <div className="flex items-baseline gap-4">
            <h2 className="text-4xl font-semibold tracking-tight text-white md:text-6xl">results that speak</h2>
            <span className="hidden text-sm font-medium text-white/60 md:inline-block">
              / our case studies
            </span>
          </div>
        </div>
        <hr className="mb-12 border-white/20" />
        <div className="grid gap-5 md:grid-cols-2">
          {caseStudies.map((study) => (
            <article key={study.id} className="rounded-2xl border border-white/10 bg-[#1A1A1A] p-8 hover:border-[#F5A623]/60 transition-colors">
              <h3 className="mb-2 text-2xl font-bold text-white">{study.brand}</h3>
              <p className="mb-4 text-white/70">{study.result}</p>
              <Link href="/work" className="font-semibold text-[#F5A623] hover:underline">view case</Link>
            </article>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-6 pb-20 text-left">
        <div className="mb-6 flex items-end justify-between">
          <div className="flex items-baseline gap-4">
            <h2 className="max-w-4xl text-3xl font-semibold tracking-tight text-white md:text-5xl">
              data-driven creativity
            </h2>
            <span className="hidden text-sm font-medium text-white/60 md:inline-block">
              / by the numbers
            </span>
          </div>
        </div>
        <hr className="mb-12 border-white/20" />
        <div className="grid gap-4 md:grid-cols-4">
          {[
            ["Rs 15Cr+", "Ad Spend Managed"],
            ["50+", "Brands Grown"],
            ["4.2x", "Average ROAS Delivered"],
            ["3 Yrs", "Of Consistent Results"],
          ].map(([value, label]) => (
            <div key={label} className="rounded-xl bg-[#1A1A1A] p-6">
              <p className="mb-2 text-3xl font-black text-[#F5A623]">{value}</p>
              <p className="lowercase text-white/70">{label}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="bg-gradient-to-r from-[#F5A623] to-[#FF6B00] px-6 py-24 text-center text-black">
        <h2 className="mb-4 text-5xl font-black lowercase md:text-7xl">ready to climb?</h2>
        <p className="mb-8 text-xl font-light text-black/80">Let's build something worth talking about.</p>
        <MagneticButton href="/contact" className="bg-black text-white font-semibold lowercase">
          get in touch
        </MagneticButton>
      </section>
    </div>
  );
}
