import { motion } from 'framer-motion';
import { skillGroups } from '@/config/site';

export function Skills() {
  return (
    <section id="skills" className="relative px-6 py-32 md:py-48">
      <div className="mx-auto max-w-6xl">
        <div className="mb-16">
          <span className="eyebrow">Capabilities</span>
          <h2 className="font-display mt-4 text-4xl font-semibold tracking-tight sm:text-5xl md:text-6xl">
            The stack behind
            <br />
            <span className="text-white/40">the intelligence.</span>
          </h2>
        </div>

        <div className="grid gap-12 md:grid-cols-3">
          {skillGroups.map((group, gi) => (
            <motion.div
              key={group.category}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-60px' }}
              transition={{ duration: 0.6, delay: gi * 0.15 }}
              className="border-t border-white/10 pt-6"
            >
              <h3 className="font-mono text-xs uppercase tracking-widest text-white/40">
                {group.category}
              </h3>
              <ul className="mt-6 flex flex-col gap-3">
                {group.skills.map((skill, si) => (
                  <motion.li
                    key={skill}
                    initial={{ opacity: 0, x: -16 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: gi * 0.15 + si * 0.08 }}
                    className="font-display text-xl text-white/80 transition-colors hover:text-white"
                  >
                    {skill}
                  </motion.li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
