import { useMemo, useState } from 'react';
import Navbar from './components/Navbar';
import HeroSection from './components/HeroSection';
import PhilosophySection from './components/PhilosophySection';
import InspirationAbout from './components/InspirationAbout';
import ProjectsSection from './components/ProjectsSection';
import ExperienceSection from './components/ExperienceSection';
import ContactSection from './components/ContactSection';
import ChatBot from './components/ChatBot';
import { PROJECTS } from './data/projects';

function App() {
  const year = useMemo(() => new Date().getFullYear(), []);
  const [activeIndex, setActiveIndex] = useState(0);
  const currentProject = PROJECTS[activeIndex];

  const goToProject = (index: number) => {
    setActiveIndex((index + PROJECTS.length) % PROJECTS.length);
  };

  const nextProject = () => goToProject(activeIndex + 1);
  const previousProject = () => goToProject(activeIndex - 1);

  return (
    <div className="site-shell min-h-screen overflow-x-hidden text-slate-100">
      <Navbar />
      <main className="mx-auto flex max-w-7xl flex-col gap-12 px-6 pb-16 pt-6 md:px-10 lg:px-12">
        <section id="home" className="space-y-12">
          <HeroSection />
          <PhilosophySection />
        </section>

        <ProjectsSection
          projects={PROJECTS}
          activeIndex={activeIndex}
          currentProject={currentProject}
          goToProject={goToProject}
          previousProject={previousProject}
          nextProject={nextProject}
        />

        <InspirationAbout />
        <ExperienceSection />
        <ContactSection />
      </main>

      <footer className="border-t border-white/10 px-6 py-8 text-center text-sm text-slate-400">
        <p>© {year} Lanze Pedrezuela. Designed with a polished visual system and modern portfolio structure.</p>
      </footer>

      <ChatBot />
    </div>
  );
}

export default App;
