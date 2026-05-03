'use client';

import { useLang } from '@/lib/i18n/context';
import { Tag } from '@/components/ui/Tag';
import { RevealOnScroll } from '@/components/ui/RevealOnScroll';

const PILLAR_BG = ['var(--sage-pale)', 'var(--rose-pale)', 'linear-gradient(135deg, var(--sage-pale), var(--rose-pale))'];

const ICONS = [
  // Child
  <svg key="c" width="36" height="36" viewBox="0 0 24 24" fill="none" stroke="var(--sage)" strokeWidth="1.5" strokeLinecap="round" aria-hidden="true">
    <circle cx="12" cy="6" r="3" />
    <path d="M12 9v6m-3 0h6m-6 4l-2 2m4-2v3m4-3v3m2-2l-2-2" />
  </svg>,
  // Teen
  <svg key="t" width="36" height="36" viewBox="0 0 24 24" fill="none" stroke="var(--rose-deep)" strokeWidth="1.5" strokeLinecap="round" aria-hidden="true">
    <circle cx="12" cy="6" r="3" />
    <path d="M9 13v8m6-8v8m-3-9v3m-4-3h8" />
  </svg>,
  // Adult
  <svg key="a" width="36" height="36" viewBox="0 0 24 24" fill="none" stroke="var(--sage)" strokeWidth="1.5" strokeLinecap="round" aria-hidden="true">
    <circle cx="12" cy="6" r="3" />
    <path d="M5 21v-2a7 7 0 0114 0v2" />
  </svg>,
];

export function Pillars() {
  const { t } = useLang();

  return (
    <section className="py-32 px-7 max-md:py-20">
      <div className="container-x">
        <RevealOnScroll className="text-center mb-14">
          <Tag>{t.pillarsTag}</Tag>
          <h2 className="mt-6">{t.pillarsHeading}</h2>
        </RevealOnScroll>
        <div className="grid grid-cols-3 gap-6 max-md:grid-cols-1">
          {t.pillars.map((p, i) => (
            <RevealOnScroll key={p.t} delay={i * 100}>
              <article
                className="rounded-[28px] p-14 text-center relative overflow-hidden transition-all duration-[600ms] ease-curve hover:-translate-y-2 hover:scale-[1.01]"
                style={{ background: PILLAR_BG[i] || 'var(--sage-pale)' }}
              >
                <div
                  aria-hidden="true"
                  className="w-[84px] h-[84px] rounded-full flex items-center justify-center mx-auto mb-7"
                  style={{ background: 'rgba(255,255,255,0.7)', boxShadow: '0 16px 48px rgba(0,0,0,0.05)' }}
                >
                  {ICONS[i]}
                </div>
                <h3 className="mb-3">{p.t}</h3>
                <p className="text-text-muted font-light leading-[1.85]" style={{ fontSize: '15px' }}>{p.d}</p>
              </article>
            </RevealOnScroll>
          ))}
        </div>
      </div>
    </section>
  );
}
