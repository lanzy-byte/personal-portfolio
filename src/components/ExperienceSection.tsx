import React from 'react';
import SectionHeading from './SectionHeading';
import { TECHNICAL_SKILLS, SOFT_SKILLS, CERTIFICATIONS, CONTACT } from '../data/cv';
import { EXPERIENCES } from '../data/experience';

export default function ExperienceSection() {
  return (
    <section id="experience" className="grid gap-6 lg:grid-cols-[0.8fr_1.2fr] reveal">
      <div className="rounded-[2rem] border border-white/10 bg-slate-950/60 p-8 shadow-2xl shadow-slate-950/30 backdrop-blur-xl">
        <SectionHeading
          eyebrow="Toolkit"
          title="Skills & Certifications"
        />

        <div className="mt-6 grid gap-4 sm:grid-cols-2">
          <div>
            <h3 className="mb-2 text-sm font-semibold text-slate-200">Technical skills</h3>
            <ul className="list-inside list-disc space-y-1 text-slate-300">
              {TECHNICAL_SKILLS.map((s) => <li key={s}>{s}</li>)}
            </ul>
          </div>
          <div>
            <h3 className="mb-2 text-sm font-semibold text-slate-200">Soft skills</h3>
            <ul className="list-inside list-disc space-y-1 text-slate-300">
              {SOFT_SKILLS.map((s) => <li key={s}>{s}</li>)}
            </ul>
          </div>
        </div>

        <div className="mt-6">
          <h3 className="mb-2 text-sm font-semibold text-slate-200">Certifications</h3>
          <ul className="list-inside list-disc space-y-1 text-slate-300">
            {CERTIFICATIONS.map((c) => <li key={c}>{c}</li>)}
          </ul>
        </div>

        <div className="mt-6 text-sm text-slate-400">
          <div><strong>Contact:</strong> {CONTACT.email} • {CONTACT.phone}</div>
          <div className="mt-1">{CONTACT.location}</div>
        </div>
      </div>

      <div className="space-y-5">
        {EXPERIENCES.map((item) => (
          <article key={item.role} className="rounded-[2rem] border border-white/10 bg-slate-950/60 p-8 shadow-2xl shadow-slate-950/30 backdrop-blur-xl">
            <div className="flex flex-col gap-2 sm:flex-row sm:items-center sm:justify-between">
              <h3 className="text-xl font-semibold">{item.role}</h3>
              <span className="text-sm text-sky-300">{item.period}</span>
            </div>
            <ul className="mt-4 list-disc space-y-2 pl-5 text-slate-300">
              {item.points.map((point) => (
                <li key={point}>{point}</li>
              ))}
            </ul>
          </article>
        ))}
      </div>
    </section>
  );
}
