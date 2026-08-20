import { motion, AnimatePresence } from 'framer-motion';
import { useEffect, useState } from 'react';

export function IntroLoader({ onComplete }: { onComplete: () => void }) {
  const [stage, setStage] = useState(0);

  useEffect(() => {
    const timers = [
      setTimeout(() => setStage(1), 200),
      setTimeout(() => setStage(2), 900),
      setTimeout(() => setStage(3), 1500),
      setTimeout(() => onComplete(), 2200),
    ];
    return () => timers.forEach(clearTimeout);
  }, [onComplete]);

  return (
    <AnimatePresence>
      <motion.div
        className="fixed inset-0 z-[200] flex flex-col items-center justify-center bg-[#050506]"
        exit={{ opacity: 0, filter: 'blur(8px)' }}
        transition={{ duration: 0.6, ease: 'easeInOut' }}
      >
        <div className="overflow-hidden">
          <motion.div
            initial={{ y: '110%' }}
            animate={{ y: stage >= 1 ? '0%' : '110%' }}
            transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
            className="font-display text-5xl font-bold tracking-tight sm:text-7xl"
          >
            BASUKIRAN
          </motion.div>
        </div>

        <motion.div
          initial={{ scaleX: 0, opacity: 0 }}
          animate={{ scaleX: stage >= 2 ? 1 : 0, opacity: stage >= 2 ? 1 : 0 }}
          transition={{ duration: 0.5, ease: 'easeOut' }}
          className="mt-8 h-px w-40 origin-left bg-gradient-to-r from-transparent via-white/60 to-transparent"
        />

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: stage >= 3 ? 1 : 0 }}
          transition={{ duration: 0.4 }}
          className="eyebrow mt-4"
        >
          AI / ML Engineer
        </motion.p>
      </motion.div>
    </AnimatePresence>
  );
}
