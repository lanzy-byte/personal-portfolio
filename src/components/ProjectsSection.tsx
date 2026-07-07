import React, { useRef, useEffect } from 'react';
import SectionHeading from './SectionHeading';
import { Link } from 'react-router-dom';

type Project = {
  title: string;
  description: string;
  image: string;
  stack: string[];
};

type Props = {
  projects: Project[];
  activeIndex: number;
  currentProject: Project;
  goToProject: (index: number) => void;
  previousProject: () => void;
  nextProject: () => void;
};

export default function ProjectsSection({ projects, activeIndex, currentProject, goToProject, previousProject, nextProject }: Props) {
  const scrollerRef = useRef<HTMLDivElement | null>(null);
  const isDown = useRef(false);
  const startX = useRef(0);
  const scrollLeft = useRef(0);

  useEffect(() => {
    const scroller = scrollerRef.current;
    if (!scroller) return;

    const handleMouseUp = () => { isDown.current = false; scroller.classList.remove('cursor-grabbing'); };
    const handleMouseLeave = () => { isDown.current = false; scroller.classList.remove('cursor-grabbing'); };

    window.addEventListener('mouseup', handleMouseUp);
    scroller.addEventListener('mouseleave', handleMouseLeave);
    return () => {
      window.removeEventListener('mouseup', handleMouseUp);
      scroller.removeEventListener('mouseleave', handleMouseLeave);
    };
  }, []);

  function onMouseDown(e: React.MouseEvent<HTMLDivElement>) {
    const scroller = scrollerRef.current;
    if (!scroller) return;
    isDown.current = true;
    scroller.classList.add('cursor-grabbing');
    startX.current = e.pageX - scroller.offsetLeft;
    scrollLeft.current = scroller.scrollLeft;
  }

  function onMouseMove(e: React.MouseEvent<HTMLDivElement>) {
    const scroller = scrollerRef.current;
    if (!scroller || !isDown.current) return;
    e.preventDefault();
    const x = e.pageX - scroller.offsetLeft;
    const walk = (x - startX.current) * 1; // scroll-fast multiplier
    scroller.scrollLeft = scrollLeft.current - walk;
  }

  return (
    <section id="projects" className="space-y-6 reveal">
      <div className="flex items-end justify-between gap-4">
        <SectionHeading
          eyebrow="Selected work"
          title="Projects rooted in my resume and hands-on experience"
        />
      </div>

      <div className="rounded-[2rem] border border-white/10 bg-slate-950/60 p-6 shadow-2xl shadow-slate-950/30 backdrop-blur-xl">
        <div className="mb-4 text-sm text-slate-400">Drag card to browse 👆</div>
        <div
          ref={scrollerRef}
          onMouseDown={onMouseDown}
          onMouseMove={onMouseMove}
          className="no-scrollbar flex cursor-grab gap-6 overflow-x-auto py-6"
        >
          {projects.map((project) => {
            const slug = project.title.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/(^-|-$)/g, '');
            return (
              <Link key={project.title} to={`/projects/${slug}`} className="block">
                <article className="project-card min-w-[300px] sm:min-w-[360px] lg:min-w-[420px] overflow-hidden border bg-slate-900/60">
                  <div className="relative h-48 w-full overflow-hidden">
                    <img src={project.image} alt={project.title} className="h-full w-full object-cover" />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
                  </div>
                  <div className="p-4">
                    <div className="flex flex-wrap gap-2 mb-3">
                      {project.stack?.map((s) => (
                        <span key={s} className="project-tag">{s}</span>
                      ))}
                    </div>
                    <h3 className="text-lg font-semibold">{project.title}</h3>
                    <p className="mt-2 text-sm text-slate-300 line-clamp-3">{project.description}</p>
                  </div>
                </article>
              </Link>
            );
          })}
        </div>
      </div>
    </section>
  );
}
