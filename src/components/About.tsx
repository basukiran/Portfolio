import { motion } from 'framer-motion';
import { aboutInterests, siteConfig } from '@/config/site';

export function About() {
  return (
    <section id="about" className="relative px-6 py-32 md:py-48">
      <div className="mx-auto grid max-w-6xl gap-16 lg:grid-cols-2 lg:items-center">
        <div>
          <span className="eyebrow">About Me</span>
          <h2 className="font-display mt-4 text-4xl font-semibold tracking-tight sm:text-5xl">
            I build with intelligence,
            <br />
            <span className="text-white/40">not just code.</span>
          </h2>
          <p className="mt-8 max-w-md text-balance text-lg text-white/60">
            I am {siteConfig.fullName}, an Artificial Intelligence and Machine Learning
            engineering student focused on building practical intelligent systems.
          </p>

          <div className="mt-10 flex flex-wrap gap-2">
            {aboutInterests.map((item, i) => (
              <motion.span
                key={item}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.06 }}
                className="rounded-full border border-white/10 px-4 py-2 text-sm text-white/60"
              >
                {item}
              </motion.span>
            ))}
          </div>
        </div>

        {/* Interactive visual */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="relative aspect-square w-full"
        >
          <div className="absolute inset-0 grid-bg opacity-30" />
          <div className="absolute inset-0 flex items-center justify-center">
            <svg viewBox="0 0 400 400" className="h-full w-full">
              {Array.from({ length: 6 }).map((_, i) => (
                <motion.circle
                  key={i}
                  cx="200"
                  cy="200"
                  r={40 + i * 30}
                  fill="none"
                  stroke="#4ade80"
                  strokeOpacity={0.25 - i * 0.03}
                  strokeWidth="1"
                  initial={{ pathLength: 0, opacity: 0 }}
                  whileInView={{ pathLength: 1, opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.15, duration: 1 }}
                />
              ))}
              {Array.from({ length: 8 }).map((_, i) => {
                const a = (i / 8) * Math.PI * 2;
                return (
                  <motion.line
                    key={i}
                    x1="200"
                    y1="200"
                    x2={200 + Math.cos(a) * 200}
                    y2={200 + Math.sin(a) * 200}
                    stroke="#4ade80"
                    strokeOpacity="0.1"
                    initial={{ pathLength: 0 }}
                    whileInView={{ pathLength: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.5 + i * 0.1, duration: 0.6 }}
                  />
                );
              })}
              <motion.circle
                cx="200"
                cy="200"
                r="8"
                fill="#4ade80"
                animate={{ scale: [1, 1.3, 1] }}
                transition={{ repeat: Infinity, duration: 2 }}
              />
            </svg>
          </div>
          <div
            className="absolute inset-0 rounded-full blur-[100px] opacity-30"
            style={{ background: 'radial-gradient(circle, rgba(74,222,128,0.3), transparent 70%)' }}
          />
        </motion.div>
      </div>
    </section>
  );
}
