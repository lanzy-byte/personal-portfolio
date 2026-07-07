import React from 'react';
import SectionHeading from './SectionHeading';

const PRINCIPLES = [
  {
    label: '01',
    title: 'Data-Informed, User-Centered',
    description: 'I combine empathy, feedback, and context to shape experiences that feel intuitive, meaningful, and genuinely useful to the people using them.',
  },
  {
    label: '02',
    title: 'Visual Intent, Engineered Precision',
    description: 'I care about how interfaces feel as much as how they function, making sure each interaction is polished, responsive, and dependable.',
  },
  {
    label: '03',
    title: 'Systems-Oriented Thinking',
    description: 'I design with structure and scalability in mind, building patterns that stay consistent while remaining flexible as products grow.',
  },
  {
    label: '04',
    title: 'Bridging Design and Engineering',
    description: 'I connect creative thinking with technical execution, turning concepts into practical solutions with clear communication and thoughtful delivery.',
  },
];

export default function PhilosophySection() {
  return (
    <section id="about" className="grid gap-8 lg:grid-cols-[0.9fr_1.1fr] lg:items-start reveal">
      <div className="space-y-6 rounded-[2rem] border border-white/10 bg-slate-950/60 p-8 shadow-2xl shadow-slate-950/40 backdrop-blur-xl">
        <SectionHeading
          eyebrow="Design philosophy"
          title="My process is grounded in clarity, craft, and collaboration."
          description="The work I create is shaped by thoughtful decisions, strong fundamentals, and a constant focus on the people behind the experience."
        />
        <p className="max-w-2xl text-slate-300">
          I value work that feels calm and intentional rather than noisy or overcomplicated. That means balancing aesthetic detail with usability, and making sure each solution is practical, adaptable, and built with care.
        </p>
      </div>

      <div className="grid gap-4 sm:grid-cols-2">
        {PRINCIPLES.map((item) => (
          <article key={item.label} className="group overflow-hidden rounded-[1.75rem] border border-white/10 bg-slate-900/70 p-6 shadow-xl shadow-slate-950/25 transition hover:-translate-y-1 hover:bg-slate-900/85">
            <div className="flex items-center gap-4">
              <div className="flex h-12 w-12 items-center justify-center rounded-3xl border border-sky-400/20 bg-sky-400/10 text-lg font-bold text-sky-200">{item.label}</div>
              <h3 className="text-xl font-semibold text-white">{item.title}</h3>
            </div>
            <p className="mt-4 text-sm leading-7 text-slate-300">{item.description}</p>
          </article>
        ))}
      </div>
    </section>
  );
}
