import React from 'react';
import { EDUCATION_SUMMARY } from '../data/cv';
import SectionHeading from './SectionHeading';

export default function InspirationAbout() {
  return (
    <section id="about" className="grid gap-8 lg:grid-cols-[0.9fr_1.1fr] lg:items-start reveal">
      <div className="space-y-6">
        <SectionHeading
          eyebrow="About"
          title="I build thoughtful digital experiences that feel calm, clear, and dependable."
          description="I combine strong front-end execution with a human-centered approach so products are not only attractive, but genuinely useful."
        />
        <div className="space-y-4 text-slate-300">
          <p>
            I am a fresh graduate with hands-on experience in web development, client collaboration, and product-focused problem solving. My background spans internships, freelance work, and thesis-based system development, which helped me grow both technically and professionally.
          </p>
          <p>
            I care about creating interfaces that are intuitive on first use, responsive across devices, and built with enough structure to scale over time. Whether I am shaping a landing page or a full web system, I aim for clarity, polish, and a strong sense of purpose in every detail.
          </p>
        </div>
      </div>

      <div className="grid gap-4 sm:grid-cols-2">
        <article className="rounded-[1.5rem] border border-white/6 bg-slate-900/50 p-6">
          <h4 className="text-sm font-semibold text-sky-300">Education</h4>
          <p className="mt-2 text-slate-300">{EDUCATION_SUMMARY}</p>
        </article>
        <article className="rounded-[1.5rem] border border-white/6 bg-slate-900/50 p-6">
          <h4 className="text-sm font-semibold text-sky-300">Availability</h4>
          <p className="mt-2 text-slate-300">Open to freelance and full-time opportunities.</p>
        </article>
      </div>
    </section>
  );
}
