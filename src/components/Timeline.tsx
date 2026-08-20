import { motion } from 'framer-motion';
import { timeline } from '@/config/site';

export function Timeline() {
  return (
    <section className="relative px-6 py-32 md:py-48">
      <div className="mx-auto max-w-4xl">
        <div className="mb-16">
          <span className="eyebrow">Journey</span>
          <h2 className="font-display mt-4 text-4xl font-semibold tracking-tight sm:text-5xl">
            From curiosity
            <br />
            <span className="text-white/40">to capability.</span>
          </h2>
        </div>

        <div className="relative">
          {/* Vertical line */}
          <div className="absolute left-[7px] top-0 h-full w-px bg-gradient-to-b from-white/30 via-white/10 to-transparent md:left-1/2" />

          <div className="flex flex-col gap-12">
            {timeline.map((entry, i) => (
              <motion.div
                key={entry.year}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-80px' }}
                transition={{ duration: 0.6 }}
                className={`relative flex items-start gap-6 pl-8 md:pl-0 ${
                  i % 2 === 0 ? 'md:flex-row-reverse md:text-right' : ''
                }`}
              >
                {/* Dot */}
                <div className="absolute left-0 top-1.5 h-3.5 w-3.5 rounded-full border-2 border-white/40 bg-[#050506] md:left-1/2 md:-translate-x-1/2" />

                <div className="md:w-1/2 md:px-10">
                  <span className="font-display text-4xl font-bold text-white/90">
                    {entry.year}
                  </span>
                  <p className="mt-2 text-white/55">{entry.title}</p>
                </div>
                <div className="hidden md:block md:w-1/2" />
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
