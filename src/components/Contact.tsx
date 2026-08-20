import { motion } from 'framer-motion';
import { Mail, Linkedin, Github, ArrowUpRight } from 'lucide-react';
import { siteConfig } from '@/config/site';

export function Contact() {
  return (
    <section id="contact" className="relative px-6 py-32 md:py-56">
      <div className="mx-auto max-w-5xl text-center">
        <motion.span
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="eyebrow"
        >
          Contact
        </motion.span>

        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          className="font-display mt-6 text-5xl font-bold leading-[0.95] tracking-tighter sm:text-7xl md:text-8xl"
        >
          Let's build something
          <br />
          <span className="text-white/40">intelligent.</span>
        </motion.h2>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="mx-auto mt-8 max-w-md text-balance text-lg text-white/55"
        >
          Have an idea, project or opportunity? Let's talk.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3 }}
          className="mt-12 flex flex-wrap items-center justify-center gap-4"
        >
          <a
            href={`mailto:${siteConfig.email}`}
            data-cursor="Email"
            className="flex items-center gap-2 rounded-full bg-white px-6 py-3 font-mono text-xs uppercase tracking-wider text-black transition-transform hover:scale-105"
          >
            <Mail size={16} />
            Email Me
          </a>
          <a
            href={siteConfig.social.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            data-cursor="Open"
            className="flex items-center gap-2 rounded-full border border-white/15 px-6 py-3 font-mono text-xs uppercase tracking-wider text-white/70 transition-colors hover:border-white/40 hover:text-white"
          >
            <Linkedin size={16} />
            LinkedIn
          </a>
          <a
            href={siteConfig.social.github}
            target="_blank"
            rel="noopener noreferrer"
            data-cursor="Open"
            className="flex items-center gap-2 rounded-full border border-white/15 px-6 py-3 font-mono text-xs uppercase tracking-wider text-white/70 transition-colors hover:border-white/40 hover:text-white"
          >
            <Github size={16} />
            GitHub
          </a>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5 }}
          className="mt-16 flex flex-wrap items-center justify-center gap-x-8 gap-y-3 text-sm text-white/40"
        >
          <a
            href={siteConfig.resume}
            target="_blank"
            rel="noopener noreferrer"
            data-cursor="View"
            className="flex items-center gap-1.5 transition-colors hover:text-white"
          >
            View Resume <ArrowUpRight size={13} />
          </a>
          <a
            href={siteConfig.resume}
            download
            data-cursor="Download"
            className="flex items-center gap-1.5 transition-colors hover:text-white"
          >
            Download Resume <ArrowUpRight size={13} />
          </a>
        </motion.div>
      </div>
    </section>
  );
}
