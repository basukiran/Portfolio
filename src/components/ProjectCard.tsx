import { useRef, useState } from 'react';
import { motion } from 'framer-motion';
import { ArrowUpRight, Github } from 'lucide-react';
import type { Project } from '@/config/site';
import { ProjectVisual } from './ProjectVisual';

export function ProjectCard({ project, featured }: { project: Project; featured?: boolean }) {
  const [mouse, setMouse] = useState({ x: 0, y: 0 });
  const ref = useRef<HTMLDivElement>(null);

  const onMove = (e: React.MouseEvent) => {
    const rect = ref.current?.getBoundingClientRect();
    if (!rect) return;
    setMouse({
      x: (e.clientX - rect.left) / rect.width - 0.5,
      y: (e.clientY - rect.top) / rect.height - 0.5,
    });
  };

  return (
    <motion.article
      ref={ref}
      onMouseMove={onMove}
      onMouseLeave={() => setMouse({ x: 0, y: 0 })}
      initial={{ opacity: 0, y: 60 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-80px' }}
      transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
      className={`group grid items-center gap-8 md:gap-16 ${
        featured ? 'lg:grid-cols-2' : 'lg:grid-cols-2'
      }`}
    >
      {/* Visual */}
      <motion.div
        initial={{ scale: 0.8, opacity: 0 }}
        whileInView={{ scale: 1, opacity: 1 }}
        viewport={{ once: true, margin: '-80px' }}
        transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
        className={featured ? 'order-2 lg:order-1' : 'order-1'}
      >
        <ProjectVisual
          variant={project.visual}
          accent={project.accent}
          mouseX={mouse.x}
          mouseY={mouse.y}
        />
      </motion.div>

      {/* Text */}
      <div className={featured ? 'order-1 lg:order-2' : 'order-2'}>
        <motion.span
          initial={{ x: -30, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="font-mono text-sm"
          style={{ color: project.accent }}
        >
          {project.index}
        </motion.span>

        <motion.h3
          initial={{ x: -40, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.1 }}
          className="font-display mt-3 text-3xl font-semibold tracking-tight sm:text-4xl md:text-5xl"
        >
          {project.title}
        </motion.h3>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mt-5 max-w-md text-balance text-white/55"
        >
          {project.description}
        </motion.p>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="mt-6 flex flex-wrap gap-2"
        >
          {project.tech.map((t, i) => (
            <motion.span
              key={t}
              initial={{ opacity: 0, y: 8 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.35 + i * 0.06 }}
              className="rounded-full border border-white/10 px-3 py-1 font-mono text-[0.7rem] text-white/50"
            >
              {t}
            </motion.span>
          ))}
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5 }}
          className="mt-8 flex flex-wrap gap-3"
        >
          {project.links.map((link) => (
            <a
              key={link.label}
              href={link.href}
              target="_blank"
              rel="noopener noreferrer"
              data-cursor="Open"
              className={`group/btn flex items-center gap-2 rounded-full px-5 py-2.5 font-mono text-xs uppercase tracking-wider transition-all ${
                link.variant === 'primary'
                  ? 'bg-white text-black hover:bg-white/90'
                  : 'border border-white/15 text-white/70 hover:border-white/40 hover:text-white'
              }`}
            >
              {link.label}
              {link.label === 'GitHub' ? (
                <Github size={14} />
              ) : (
                <ArrowUpRight size={14} className="transition-transform group-hover/btn:translate-x-0.5 group-hover/btn:-translate-y-0.5" />
              )}
            </a>
          ))}
        </motion.div>
      </div>
    </motion.article>
  );
}
