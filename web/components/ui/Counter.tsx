'use client';

import { useEffect, useRef, useState } from 'react';

export function Counter({ target, suffix = '+', duration = 2200 }: { target: number; suffix?: string; duration?: number }) {
  const ref = useRef<HTMLSpanElement>(null);
  const [value, setValue] = useState(0);
  const startedRef = useRef(false);

  useEffect(() => {
    if (!ref.current) return;
    const el = ref.current;
    const observer = new IntersectionObserver(
      (entries) => {
        const entry = entries[0];
        if (entry.isIntersecting && !startedRef.current) {
          startedRef.current = true;
          const start = performance.now();
          const tick = (now: number) => {
            const p = Math.min((now - start) / duration, 1);
            const eased = 1 - Math.pow(1 - p, 4);
            setValue(Math.round(target * eased));
            if (p < 1) requestAnimationFrame(tick);
          };
          requestAnimationFrame(tick);
          observer.disconnect();
        }
      },
      { threshold: 0.3 }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, [target, duration]);

  return (
    <span ref={ref} className="font-heading font-light text-charcoal leading-none tracking-[-0.03em]" style={{ fontSize: 'clamp(40px, 6vw, 56px)' }}>
      {value}
      <span className="text-sage font-light" style={{ fontSize: 'clamp(20px, 3vw, 28px)' }}>{suffix}</span>
    </span>
  );
}
