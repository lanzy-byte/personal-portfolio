import React from 'react';

type SectionHeadingProps = {
  eyebrow: string;
  title: string;
  description?: string;
};

export default function SectionHeading({ eyebrow, title, description }: SectionHeadingProps) {
  return (
    <div className="space-y-3">
      <p className="text-sm font-semibold uppercase tracking-[0.35em] text-sky-300">{eyebrow}</p>
      <h2 className="text-3xl font-bold leading-tight" style={{ fontFamily: "'Playfair Display', Georgia, serif" }}>{title}</h2>
      {description ? <p className="max-w-2xl text-slate-300">{description}</p> : null}
    </div>
  );
}
