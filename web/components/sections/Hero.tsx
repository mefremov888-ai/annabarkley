'use client';

import Link from 'next/link';
import { useLang } from '@/lib/i18n/context';
import { Tag } from '@/components/ui/Tag';
import { GradLine } from '@/components/ui/GradLine';
import { Counter } from '@/components/ui/Counter';

function highlightWords(text: string, highlights: string[]) {
  return text.split(' ').map((word, i) => {
    const isHighlight = highlights.some((h) => word.includes(h));
    return (
      <span key={i} className={isHighlight ? 'text-sage' : undefined}>
        {word}{' '}
      </span>
    );
  });
}

export function Hero() {
  const { t, lang } = useLang();

  return (
    <section className="relative min-h-screen flex items-center pt-24 pb-20 px-7 overflow-hidden">
      {/* Decorative blobs */}
      <div aria-hidden="true" className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute w-[600px] h-[600px] rounded-full blur-[80px] opacity-25 animate-morph" style={{ background: 'rgba(124, 154, 124, 0.5)', left: '10%', top: '10%' }} />
        <div className="absolute w-[500px] h-[500px] rounded-full blur-[80px] opacity-25 animate-morph" style={{ background: 'rgba(234, 199, 199, 0.6)', right: '5%', top: '20%', animationDirection: 'alternate-reverse', animationDuration: '30s' }} />
      </div>

      <div className="container-x relative z-10 w-full">
        <div className="grid grid-cols-2 gap-20 items-center max-md:grid-cols-1 max-md:gap-10">
          <div>
            <Tag>{lang === 'en' ? 'Psychologist · Dubai · Children · Teens · Adults' : 'Психолог · Дубай · Дети · Подростки · Взрослые'}</Tag>
            <h1 className="mt-7 mb-6">{highlightWords(t.heroT, t.heroHighlight)}</h1>
            <GradLine />
            <p className="mt-6 mb-8 text-text-muted font-light leading-[1.9]" style={{ fontSize: '17px' }}>{t.heroS}</p>
            <div className="flex gap-3 flex-wrap">
              <Link href="/contact" className="btn-primary">{t.heroC1}</Link>
              <Link href="/how" className="btn-outline">{t.heroC2}</Link>
            </div>
            <div className="mt-12 grid grid-cols-3 gap-8 max-md:gap-4">
              {t.stats.map((s) => {
                const num = parseInt(s.value, 10);
                const suffix = s.value.replace(String(num), '');
                return (
                  <div key={s.label}>
                    <Counter target={num} suffix={suffix || ''} />
                    <div className="mt-1 text-[12px] text-text-muted uppercase tracking-[0.12em] font-medium">{s.label}</div>
                  </div>
                );
              })}
            </div>
          </div>

          <div className="max-md:hidden">
            <div
              className="rounded-card p-12 relative overflow-hidden"
              style={{ background: 'linear-gradient(135deg, var(--sage-pale), var(--rose-pale))', minHeight: '460px' }}
            >
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-center px-6">
                <div className="w-[100px] h-[100px] rounded-full mx-auto flex items-center justify-center animate-breathe" style={{ background: 'rgba(255,255,255,0.6)', boxShadow: '0 16px 48px rgba(0,0,0,0.05)' }}>
                  <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="var(--sage)" strokeWidth="1.5" strokeLinecap="round">
                    <path d="M11 20A7 7 0 0 1 9.8 6.9C15.5 4.9 17 3.5 19 2c1 2 2 4.5 1 8-1.5 5-5.7 8.5-9 10z" />
                    <path d="M2 21c0-3 1.85-5.36 5.08-6C9.5 14.52 12 13 13 12" />
                  </svg>
                </div>
                <p className="mt-8 italic font-heading text-charcoal leading-[1.5]" style={{ fontSize: '18px', fontWeight: 300 }}>{t.heroQuote}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
