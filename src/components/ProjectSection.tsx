import { projects } from '@/config/site';
import { ProjectCard } from './ProjectCard';

export function ProjectSection() {
  return (
    <section id="work" className="relative px-6 py-32 md:py-48">
      <div className="mx-auto max-w-6xl">
        <div className="mb-20 flex flex-col gap-4">
          <span className="eyebrow">Selected Work</span>
          <h2 className="font-display text-4xl font-semibold tracking-tight sm:text-5xl md:text-6xl">
            Projects that turn
            <br />
            <span className="text-white/40">research into reality.</span>
          </h2>
        </div>

        <div className="flex flex-col gap-32 md:gap-48">
          {projects.map((p, i) => (
            <ProjectCard key={p.id} project={p} featured={i === 1} />
          ))}
        </div>
      </div>
    </section>
  );
}
