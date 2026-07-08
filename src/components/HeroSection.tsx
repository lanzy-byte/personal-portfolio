import React, { useState } from 'react';
import { CONTACT, PROFILE } from '../data/cv';

export default function HeroSection() {
  const [isFlipped, setIsFlipped] = useState(false);

  return (
    <section className="hero grid gap-8 lg:grid-cols-[1.1fr_0.9fr] lg:items-center reveal">
      <div className="order-2 space-y-6 lg:order-1">
        <h1 className="hero-name">{PROFILE.name}</h1>
        <h2 className="hero-role">{PROFILE.role}</h2>

        <p className="hero-intro text-lg sm:text-xl">{PROFILE.intro}</p>

        <div className="flex flex-wrap gap-3">
          <a href="#projects" className="btn-primary">Explore projects</a>
          <a href={`mailto:${CONTACT.email}?subject=Let's work together`} className="btn-ghost">Let&apos;s connect</a>
        </div>
      </div>

      <div className="order-1 relative flex items-center justify-center lg:order-2">
        <div className="relative mx-auto h-44 w-44 sm:h-56 sm:w-56 lg:h-[420px] lg:w-[320px]">
          <div className="absolute inset-0 rounded-[2rem] bg-[radial-gradient(circle_at_top_left,rgba(255,255,255,0.22),transparent_28%),linear-gradient(135deg,rgba(255,107,107,0.18),rgba(96,165,250,0.16),rgba(15,23,42,0.8))] blur-[1px]" />
          <div className="absolute -top-4 -right-4 h-20 w-20 rounded-full bg-pink-400/20 blur-3xl" />
          <div className="absolute -bottom-4 -left-4 h-20 w-20 rounded-full bg-cyan-400/20 blur-3xl" />

          <button
            type="button"
            onClick={() => setIsFlipped((prev) => !prev)}
            className="group relative h-full w-full rounded-full border border-white/10 bg-white/5 p-2 shadow-[0_20px_60px_rgba(2,6,23,0.45)] outline-none transition-all duration-700 ease-[cubic-bezier(.22,1,.36,1)] hover:-translate-y-1 hover:shadow-[0_24px_70px_rgba(2,6,23,0.6)] active:scale-[0.98] lg:rounded-[1.5rem]"
            style={{ perspective: '1200px' }}
            aria-label="Flip portrait card"
          >
            <div className="absolute inset-0 rounded-full bg-gradient-to-br from-rose-500/20 via-transparent to-sky-500/20 opacity-0 transition-opacity duration-500 group-hover:opacity-100 lg:rounded-[1.5rem]" />
            <div
              className="relative h-full w-full transition-transform duration-700 ease-[cubic-bezier(.22,1,.36,1)]"
              style={{ transformStyle: 'preserve-3d', transform: isFlipped ? 'rotateY(180deg)' : 'rotateY(0deg)' }}
            >
              <div className="absolute inset-0 overflow-hidden rounded-full lg:rounded-[1.25rem]" style={{ backfaceVisibility: 'hidden' }}>
                <div className="absolute inset-0" style={{ background: 'radial-gradient(circle, rgba(255,107,107,0.08), transparent 60%)' }} />
                <img
                  src="/public/profile.jpg"
                  alt="Lanze Pedrezuela portrait"
                  className="relative h-full w-full rounded-full object-cover transition-transform duration-300 hover:scale-105 lg:rounded-[1.25rem]"
                />
              </div>

              <div
                className="absolute inset-0 flex flex-col items-center justify-center rounded-full border border-white/10 bg-slate-900/90 p-4 text-center text-sm text-slate-100 shadow-inner lg:rounded-[1.25rem]"
                style={{ backfaceVisibility: 'hidden', transform: 'rotateY(180deg)' }}
              >
                <p className="text-[11px] uppercase tracking-[0.35em] text-slate-400">My mantra</p>
                <p className="mt-3 text-base font-semibold leading-relaxed text-white sm:text-lg">
                  “It does not matter how slowly you go as long as you do not stop”
                </p>
                <p className="mt-3 text-xs text-slate-400">Tap to flip back</p>
              </div>
            </div>
            <span className="absolute -bottom-2 left-1/2 -translate-x-1/2 rounded-full border border-white/10 bg-slate-950/80 px-3 py-1 text-[10px] uppercase tracking-[0.28em] text-slate-300 sm:hidden">
              Tap to flip
            </span>
          </button>
        </div>
      </div>
    </section>
  );
}
