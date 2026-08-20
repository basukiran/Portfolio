import { useEffect, useRef, lazy, Suspense } from 'react';
import { motion } from 'framer-motion';
import { ArrowDown } from 'lucide-react';
import { siteConfig } from '@/config/site';
import { useReducedMotion } from '@/hooks/useReducedMotion';

const Hero3D = lazy(() => import('./Hero3D').then((m) => ({ default: m.Hero3D })));

export function Hero() {
  const mouseRef = useRef({ x: 0, y: 0 });
  const containerRef = useRef<HTMLDivElement>(null);
  const reduced = useReducedMotion();

  useEffect(() => {
    if (reduced) return;
    const onMove = (e: MouseEvent) => {
      const x = (e.clientX / window.innerWidth - 0.5) * 2;
      const y = (e.clientY / window.innerHeight - 0.5) * 2;
      mouseRef.current = { x, y };
      if (containerRef.current) {
        containerRef.current.style.setProperty('--mx', `${x * 12}px`);
        containerRef.current.style.setProperty('--my', `${y * 12}px`);
      }
    };
    window.addEventListener('mousemove', onMove);
    return () => window.removeEventListener('mousemove', onMove);
  }, [reduced]);

  return (
    <section
      id="hero"
      ref={containerRef}
      className="relative flex min-h-screen flex-col items-center justify-center overflow-hidden px-6"
    >
      {/* Grid background */}
      <div className="absolute inset-0 grid-bg mask-fade-b opacity-60" />

      {/* Radial glow */}
      <div
        className="absolute left-1/2 top-1/2 h-[60vh] w-[60vh] -translate-x-1/2 -translate-y-1/2 rounded-full opacity-40 blur-[120px]"
        style={{
          background: 'radial-gradient(circle, rgba(74,222,128,0.18), transparent 70%)',
          transform: 'translate(calc(-50% + var(--mx,0)), calc(-50% + var(--my,0)))',
        }}
      />

      {/* 3D layer */}
      {!reduced && (
        <div className="absolute inset-0 opacity-70">
          <Suspense fallback={null}>
            <Hero3D mouse={mouseRef.current} />
          </Suspense>
        </div>
      )}

      {/* Content */}
      <div className="relative z-10 flex flex-col items-center text-center">
        <motion.p
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 0.6 }}
          className="eyebrow mb-6"
        >
          {siteConfig.fullName.toUpperCase()} — {siteConfig.role.toUpperCase()}
        </motion.p>

        <motion.h1
          initial={{ opacity: 0, scale: 0.92, filter: 'blur(10px)' }}
          animate={{ opacity: 1, scale: 1, filter: 'blur(0px)' }}
          transition={{ delay: 0.5, duration: 1, ease: [0.22, 1, 0.36, 1] }}
          className="font-display text-[18vw] font-bold leading-[0.85] tracking-tighter sm:text-[14vw] md:text-[12rem]"
        >
          BASUKIRAN
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.9, duration: 0.7 }}
          className="mt-8 max-w-md text-balance text-base text-white/60 sm:text-lg"
        >
          {siteConfig.tagline}
        </motion.p>

        <motion.a
          href="#work"
          data-cursor="Explore"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.3, duration: 0.6 }}
          className="group mt-16 flex flex-col items-center gap-2 text-white/50 transition-colors hover:text-white"
        >
          <span className="font-mono text-[0.65rem] uppercase tracking-[0.3em]">
            Explore My Work
          </span>
          <motion.span
            animate={{ y: [0, 6, 0] }}
            transition={{ repeat: Infinity, duration: 1.8, ease: 'easeInOut' }}
          >
            <ArrowDown size={16} />
          </motion.span>
        </motion.a>
      </div>
    </section>
  );
}
