import { useRef } from 'react';
import { motion } from 'framer-motion';

interface VisualProps {
  variant: 'neural' | 'os' | 'speech';
  accent: string;
  mouseX: number;
  mouseY: number;
}

export function ProjectVisual({ variant, accent, mouseX, mouseY }: VisualProps) {
  const ref = useRef<HTMLDivElement>(null);

  const renderVisual = () => {
    switch (variant) {
      case 'neural':
        return (
          <svg viewBox="0 0 400 400" className="h-full w-full">
            {Array.from({ length: 5 }).map((_, ring) => {
              const r = 60 + ring * 38;
              return (
                <circle
                  key={ring}
                  cx="200"
                  cy="200"
                  r={r}
                  fill="none"
                  stroke={accent}
                  strokeOpacity={0.15 + ring * 0.04}
                  strokeWidth="1"
                />
              );
            })}
            {Array.from({ length: 12 }).map((_, i) => {
              const a = (i / 12) * Math.PI * 2;
              return (
                <line
                  key={i}
                  x1="200"
                  y1="200"
                  x2={200 + Math.cos(a) * 210}
                  y2={200 + Math.sin(a) * 210}
                  stroke={accent}
                  strokeOpacity="0.08"
                  strokeWidth="1"
                />
              );
            })}
            {Array.from({ length: 24 }).map((_, i) => {
              const a = (i / 24) * Math.PI * 2;
              const r = 80 + (i % 4) * 45;
              return (
                <circle
                  key={i}
                  cx={200 + Math.cos(a) * r}
                  cy={200 + Math.sin(a) * r}
                  r={2.5}
                  fill={accent}
                  opacity={0.5 + (i % 3) * 0.2}
                />
              );
            })}
            <circle cx="200" cy="200" r="6" fill={accent} />
          </svg>
        );
      case 'os':
        return (
          <div className="flex h-full w-full flex-col gap-2 p-6">
            {['w-3/4', 'w-full', 'w-5/6', 'w-2/3'].map((w, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className={`${w} h-10 rounded-md border border-white/10`}
                style={{ background: `linear-gradient(90deg, ${accent}22, transparent)` }}
              />
            ))}
            <div className="mt-auto flex gap-2">
              {['#', '#', '#'].map((_, i) => (
                <div
                  key={i}
                  className="h-8 w-8 rounded-full border border-white/10"
                  style={{ background: `${accent}1a` }}
                />
              ))}
            </div>
          </div>
        );
      case 'speech':
        return (
          <svg viewBox="0 0 400 400" className="h-full w-full">
            {Array.from({ length: 40 }).map((_, i) => {
              const h = 20 + Math.abs(Math.sin(i * 0.5)) * 120;
              return (
                <rect
                  key={i}
                  x={20 + i * 9}
                  y={200 - h / 2}
                  width="4"
                  height={h}
                  rx="2"
                  fill={accent}
                  opacity={0.3 + (i % 5) * 0.12}
                />
              );
            })}
            <circle cx="200" cy="200" r="150" fill="none" stroke={accent} strokeOpacity="0.12" />
            <circle cx="200" cy="200" r="110" fill="none" stroke={accent} strokeOpacity="0.18" />
          </svg>
        );
    }
  };

  return (
    <div
      ref={ref}
      className="relative aspect-square w-full overflow-hidden rounded-2xl border border-white/8 bg-white/[0.015]"
      style={{
        transform: `perspective(800px) rotateY(${mouseX * 6}deg) rotateX(${-mouseY * 6}deg)`,
        transition: 'transform 0.2s ease-out',
      }}
    >
      <div className="absolute inset-0 grid-bg opacity-30" />
      <div className="absolute inset-0 flex items-center justify-center p-8">
        {renderVisual()}
      </div>
      <div
        className="absolute inset-0 rounded-2xl"
        style={{ boxShadow: `inset 0 0 80px ${accent}15` }}
      />
    </div>
  );
}
