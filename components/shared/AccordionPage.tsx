"use client";

import { useState } from "react";

interface Section {
  number: string;
  title: string;
  content: React.ReactNode;
}

interface AccordionPageProps {
  title: string;
  subtitle?: string;
  sections: Section[];
}

export function AccordionPage({ title, subtitle, sections }: AccordionPageProps) {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <div className="min-h-screen bg-[#0A0A0A] pt-32 pb-20 text-white">
      <div className="mx-auto max-w-4xl px-6">
        {/* Header */}
        <h1 className="mb-3 text-5xl font-bold tracking-tight text-white md:text-7xl lowercase">
          {title}
        </h1>
        {subtitle && (
          <p className="mb-6 text-sm text-white/50">{subtitle}</p>
        )}
        <hr className="mb-10 border-white/20" />

        {/* Accordion sections */}
        <div className="divide-y divide-white/10">
          {sections.map((section, i) => {
            const isOpen = openIndex === i;
            return (
              <div key={i}>
                <button
                  onClick={() => setOpenIndex(isOpen ? null : i)}
                  className="flex w-full items-center justify-between py-6 text-left group"
                >
                  <div className="flex items-baseline gap-5">
                    <span className="text-xs font-mono text-white/40 w-6 shrink-0">
                      {section.number}
                    </span>
                    <span className="text-xl font-semibold text-white group-hover:text-[#F5A623] transition-colors">
                      {section.title}
                    </span>
                  </div>
                  <span className="ml-4 flex h-8 w-8 shrink-0 items-center justify-center rounded-full border border-white/30 text-white/70 text-lg transition-colors group-hover:border-[#F5A623] group-hover:text-[#F5A623]">
                    {isOpen ? "−" : "+"}
                  </span>
                </button>

                {isOpen && (
                  <div className="pb-6 pl-11">
                    <div className="rounded-md bg-white/5 p-6 text-white/75 leading-relaxed text-sm border border-white/10">
                      {section.content}
                    </div>
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
