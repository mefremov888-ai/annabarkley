'use client';

import { useLang } from '@/lib/i18n/context';

export function Marquee() {
  const { t } = useLang();
  const items = [...t.marquee, ...t.marquee];

  return (
    <div className="overflow-hidden whitespace-nowrap py-7 border-y border-border bg-white">
      <div className="inline-flex animate-marquee will-change-transform">
        {items.map((item, i) => (
          <span key={i} className="inline-flex items-center gap-4 px-8 font-heading text-charcoal opacity-30" style={{ fontSize: 'clamp(14px, 2vw, 20px)', fontWeight: 400 }}>
            <span aria-hidden="true" className="w-[6px] h-[6px] rounded-full" style={{ background: 'linear-gradient(135deg, var(--sage), var(--rose))' }} />
            {item}
          </span>
        ))}
      </div>
    </div>
  );
}
