import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { PROJECTS } from '../data/projects';
import Navbar from '../components/Navbar';

export default function ProjectPage() {
  const { slug } = useParams();
  const slugify = (text: string) => text.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/(^-|-$)/g, '');
  const project = PROJECTS.find(p => (p as any).slug === slug || slugify(p.title) === slug);

  if (!project) {
    return (
      <div className="min-h-screen bg-[radial-gradient(circle_at_top_left,_rgba(96,165,250,0.2),_transparent_35%),linear-gradient(135deg,_#070b16,_#111827_45%,_#0f172a)] text-slate-100">
        <Navbar />
        <main className="mx-auto max-w-4xl p-8">
          <h2 className="text-2xl font-semibold">Project not found</h2>
          <p className="mt-2 text-slate-300">We couldn't find that project.</p>
          <Link to="/" className="mt-4 inline-block text-sky-300">Return home</Link>
        </main>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-[radial-gradient(circle_at_top_left,_rgba(96,165,250,0.2),_transparent_35%),linear-gradient(135deg,_#070b16,_#111827_45%,_#0f172a)] text-slate-100">
      <Navbar />
      <main className="mx-auto max-w-4xl p-8">
        <Link to="/" className="text-sm text-sky-300">← Back</Link>
        <header className="mt-4">
          <h1 className="text-4xl font-bold">{project.title}</h1>
          <div className="mt-2 flex flex-col gap-1 sm:flex-row sm:items-center sm:gap-4">
            <p className="text-slate-300">{project.description}</p>
            <div className="ml-0 mt-2 flex items-center gap-3 text-xs text-slate-400 sm:ml-auto sm:mt-0">
              {project.role && <span>{project.role}</span>}
              {project.timeline && <span>• {project.timeline}</span>}
            </div>
          </div>
        </header>

        <section className="mt-8 grid gap-6">
          <div className="rounded-2xl bg-slate-900/40 p-4 img-hover-zoom">
            <img src={project.image} alt={project.title} className="w-full rounded-xl object-cover" />
          </div>

          {project.images && project.images.length > 0 && (
            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
              {project.images.map((img: string, i: number) => (
                <div key={i} className="rounded-xl overflow-hidden bg-slate-900/30">
                  <img src={img} alt={`${project.title} ${i + 1}`} className="w-full h-56 object-cover" />
                </div>
              ))}
            </div>
          )}

          <div className="grid gap-4 sm:grid-cols-2">
            <div>
              <h3 className="text-lg font-semibold">Problem</h3>
              <p className="mt-2 text-slate-300">{project.problem}</p>
            </div>

            <div>
              <h3 className="text-lg font-semibold">Approach</h3>
              <ul className="mt-2 list-inside list-disc text-slate-300">
                {project.approach && project.approach.map((a: string, idx: number) => (
                  <li key={idx} className="mt-1">{a}</li>
                ))}
              </ul>
            </div>
          </div>

          {project.outcome && (
            <div>
              <h3 className="text-lg font-semibold">Outcome</h3>
              <p className="mt-2 text-slate-300">{project.outcome}</p>
            </div>
          )}

          <section>
            <h3 className="text-lg font-semibold">Tech / Tools</h3>
            <div className="mt-3 flex flex-wrap gap-2">
              {project.stack.map((s: string) => (
                <span key={s} className="rounded-full border border-white/10 bg-slate-900/60 px-3 py-1 text-xs text-slate-300">{s}</span>
              ))}
            </div>
          </section>
        </section>
      </main>
    </div>
  );
}
