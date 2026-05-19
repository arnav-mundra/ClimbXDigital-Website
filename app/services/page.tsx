import { services } from "@/data/services";
import { SectionLabel } from "@/components/shared/SectionLabel";
import { MagneticButton } from "@/components/shared/MagneticButton";

export default function ServicesPage() {
  return (
    <div className="mx-auto max-w-6xl px-6 py-20">
      <SectionLabel label="SERVICES" />
      <h1 className="mb-10 text-5xl font-black md:text-7xl">What We Do</h1>
      <div className="space-y-8">
        {services.map((service, index) => (
          <article key={service.id} className="grid gap-6 rounded-2xl border border-white/10 bg-[#1A1A1A] p-6 md:grid-cols-2">
            <div className={`h-48 rounded-xl bg-gradient-to-br from-[#F5A623]/20 to-[#FF6B00]/10 ${index % 2 ? "md:order-2" : ""}`} />
            <div>
              <h2 className="mb-2 text-3xl font-bold">{service.title}</h2>
              <p className="mb-4 text-white/75">{service.description}</p>
              <ul className="mb-5 list-inside list-disc text-white/70">
                {service.deliverables?.slice(0, 3).map((item) => <li key={item}>{item}</li>)}
              </ul>
              <MagneticButton href="/contact" className="bg-[#F5A623] text-black">Get Started</MagneticButton>
            </div>
          </article>
        ))}
      </div>
    </div>
  );
}
