import { useEffect, useRef, useState } from 'react';
import { useMediaQuery } from '@/hooks/useMediaQuery';

export function CustomCursor() {
  const isFinePointer = useMediaQuery('(hover: hover) and (pointer: fine)');
  const dotRef = useRef<HTMLDivElement>(null);
  const ringRef = useRef<HTMLDivElement>(null);
  const [label, setLabel] = useState('');
  const [active, setActive] = useState(false);

  useEffect(() => {
    if (!isFinePointer) return;
    document.body.classList.add('custom-cursor-active');

    const dot = dotRef.current;
    const ring = ringRef.current;
    if (!dot || !ring) return;

    let mx = window.innerWidth / 2;
    let my = window.innerHeight / 2;
    let rx = mx;
    let ry = my;
    let raf = 0;

    const onMove = (e: MouseEvent) => {
      mx = e.clientX;
      my = e.clientY;
      dot.style.transform = `translate3d(${mx}px, ${my}px, 0) translate(-50%, -50%)`;

      const target = (e.target as HTMLElement)?.closest('[data-cursor]') as HTMLElement | null;
      if (target) {
        setLabel(target.dataset.cursor || '');
        setActive(true);
      } else {
        setActive(false);
        setLabel('');
      }
    };

    const loop = () => {
      rx += (mx - rx) * 0.18;
      ry += (my - ry) * 0.18;
      ring.style.transform = `translate3d(${rx}px, ${ry}px, 0) translate(-50%, -50%)`;
      raf = requestAnimationFrame(loop);
    };
    loop();

    window.addEventListener('mousemove', onMove);
    return () => {
      window.removeEventListener('mousemove', onMove);
      cancelAnimationFrame(raf);
      document.body.classList.remove('custom-cursor-active');
    };
  }, [isFinePointer]);

  if (!isFinePointer) return null;

  return (
    <>
      <div
        ref={ringRef}
        className="pointer-events-none fixed left-0 top-0 z-[150] flex items-center justify-center rounded-full border border-white/30 transition-[width,height,opacity] duration-300"
        style={{
          width: active ? 64 : 28,
          height: active ? 64 : 28,
          opacity: 1,
          backgroundColor: active ? 'rgba(255,255,255,0.04)' : 'transparent',
        }}
      >
        {label && (
          <span className="font-mono text-[0.55rem] uppercase tracking-widest text-white/80">
            {label}
          </span>
        )}
      </div>
      <div
        ref={dotRef}
        className="pointer-events-none fixed left-0 top-0 z-[151] h-1.5 w-1.5 rounded-full bg-white"
      />
    </>
  );
}
