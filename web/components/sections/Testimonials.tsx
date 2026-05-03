'use client';

import { useLang } from '@/lib/i18n/context';
import { Tag } from '@/components/ui/Tag';
import { RevealOnScroll } from '@/components/ui/RevealOnScroll';

export function Testimonials() {
  const { t } = useLang();
  return (
    <section className="py-32 px-7 max-md:py-20 relative overflow-hidden" style={{ background: 'var(--charcoal)' }}>
      <div aria-hidden="true" className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[600px] rounded-full blur-[120px] opacity-20" style={{ background: 'radial-gradient(circle, var(--sage), transparent 70%)' }} />
      <div className="container-x relative z-10">
        <RevealOnScroll className="text-center mb-14">
          <Tag dark>{t.testimonialsTag}</Tag>
          <h2 className="mt-6 text-white">{t.testimonialsHeading}</h2>
        </RevealOnScroll>
        <div className="grid grid-cols-3 gap-6 max-md:grid-cols-1">
          {t.testimonials.map((te, i) => (
            <RevealOnScroll key={te.n} delay={i * 100}>
              <article
                className="rounded-card p-10 transition-all duration-300 hover:-translate-y-1"
                style={{
                  background: 'rgba(255,255,255,0.04)',
                  border: '1px solid rgba(255,255,255,0.08)',
                }}
              >
                <div className="flex gap-1 mb-5" aria-label="5 out of 5 stars">
                  {[0, 1, 2, 3, 4].map((s) => (
                    <svg key={s} width="16" height="16" viewBox="0 0 24 24" fill="var(--gold)" aria-hidden="true">
                      <polygon points="12,2 15,9 22,9.5 17,14 18.5,21 12,17 5.5,21 7,14 2,9.5 9,9" />
                    </svg>
                  ))}
                </div>
                <p className="text-white/85 font-light leading-[1.85] mb-6" style={{ fontSize: '15px' }}>{te.t}</p>
                <div className="flex items-center gap-3">
                  <div
                    aria-hidden="true"
                    className="w-[46px] h-[46px] rounded-full flex items-center justify-center font-heading font-semibold text-white"
                    style={{ background: 'linear-gradient(135deg, rgba(124,154,124,0.4), rgba(234,199,199,0.4))', fontSize: '16px' }}
                  >
                    {te.i}
                  </div>
                  <div>
                    <div className="text-white font-medium">{te.n}</div>
                    <div className="text-white/45 text-[13px] font-light">{te.r}</div>
                  </div>
                </div>
              </article>
            </RevealOnScroll>
          ))}
        </div>
      </div>
    </section>
  );
}
