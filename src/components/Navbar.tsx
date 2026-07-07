import React from 'react';

export default function Navbar() {
  return (
    <header className="sticky top-0 z-40 border-b border-white/6 bg-slate-950/85 backdrop-blur-xl">
      <div className="mx-auto flex max-w-7xl items-center justify-between gap-4 px-6 py-4 md:px-10 lg:px-12">
        <div className="flex items-center gap-3">
          <img src="/public/profile.jpg" alt="Lanze" className="h-9 w-9 rounded-full object-cover shadow-sm ring-1 ring-white/6" />
          <span className="sr-only">Lanze Pedrezuela</span>
        </div>

        <nav className="flex items-center gap-6 text-sm text-slate-300">
          <a href="#home" className="transition hover:text-white">Home</a>
          <a href="#projects" className="transition hover:text-white">Projects</a>
          <a href="#about" className="transition hover:text-white">About</a>
          <a href="#contact" className="rounded-full border border-white/10 bg-white/5 px-4 py-2 transition hover:bg-white/10 hover:text-white">Contact</a>
        </nav>
      </div>
    </header>
  );
}
