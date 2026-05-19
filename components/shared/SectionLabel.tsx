interface SectionLabelProps {
  label: string;
}

export function SectionLabel({ label }: SectionLabelProps) {
  return (
    <p className="mb-4 text-xs font-semibold uppercase tracking-[0.2em] text-[#F5A623]">
      {label}
    </p>
  );
}
