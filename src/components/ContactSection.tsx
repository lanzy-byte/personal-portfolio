import React, { useState } from 'react';
import { CONTACT } from '../data/cv';
import SectionHeading from './SectionHeading';

export default function ContactSection() {
  const [copied, setCopied] = useState(false);

  const handleCopyEmail = async () => {
    try {
      await navigator.clipboard.writeText(CONTACT.email);
      setCopied(true);
      window.setTimeout(() => setCopied(false), 1800);
    } catch {
      window.location.href = `mailto:${CONTACT.email}`;
    }
  };

  return (
    <section id="contact" className="relative overflow-hidden rounded-[2rem] border border-white/10 bg-slate-950/70 px-6 py-12 shadow-2xl shadow-slate-950/30 backdrop-blur-xl sm:px-8 lg:px-10 reveal">
      <div className="absolute right-0 top-0 h-40 w-40 rounded-full bg-sky-500/10 blur-3xl" />
      <div className="relative grid gap-8 lg:grid-cols-[1.2fr_0.8fr] lg:items-center">
        <div className="space-y-5">
          <SectionHeading
            eyebrow="Get in touch"
            title="Let’s build something that feels effortless and memorable."
            description="I’m open to new projects, freelance work, and roles where I can contribute to polished web experiences with a strong visual and technical focus."
          />
          <p className="max-w-2xl text-slate-300">
            Reach out if you want to discuss a project, a collaboration, or just say hello. I respond fast and enjoy working on ideas that balance creativity with real-world impact.
          </p>
          <div className="flex flex-col gap-3 sm:flex-row sm:items-center">
            <a href={`mailto:${CONTACT.email}?subject=Let's%20work%20together`} className="rounded-full bg-sky-400 px-6 py-3 text-sm font-semibold text-slate-950 transition hover:bg-sky-300">Email me</a>
            <button
              type="button"
              onClick={handleCopyEmail}
              className="rounded-full border border-white/10 px-6 py-3 text-sm font-semibold text-slate-300 transition hover:bg-white/5"
            >
              {copied ? 'Email copied' : 'Copy email'}
            </button>
            <span className="text-sm text-slate-400">or call {CONTACT.phone}</span>
          </div>
        </div>

        <div className="grid gap-4 rounded-[1.75rem] border border-white/10 bg-slate-900/80 p-6">
          <div className="space-y-3">
            <p className="text-sm font-semibold uppercase tracking-[0.35em] text-sky-300">Contact</p>
            <p className="text-white">{CONTACT.email}</p>
            <p className="text-slate-400">{CONTACT.phone}</p>
          </div>
          <div className="space-y-3">
            <p className="text-sm font-semibold uppercase tracking-[0.35em] text-slate-300">Location</p>
            <p className="text-slate-300">{CONTACT.location}</p>
          </div>
          <div className="rounded-3xl bg-slate-950/90 p-4 text-sm text-slate-400">
            <p>Want to see more? Contact me for your next website </p>
          </div>
        </div>
      </div>
    </section>
  );
}
