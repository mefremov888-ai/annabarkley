'use client';

import Link from 'next/link';
import { useLang } from '@/lib/i18n/context';
import { AB_CONFIG } from '@/lib/config';
import { GradLine } from '@/components/ui/GradLine';
import { RevealOnScroll } from '@/components/ui/RevealOnScroll';

export function CTABanner() {
  const { t } = useLang();
  return (
    <section
      className="py-32 px-7 max-md:py-20 text-center relative overflow-hidden"
      style={{ background: 'linear-gradient(180deg, var(--sage-pale), var(--rose-pale), var(--bg))' }}
    >
      <div className="container-x" style={{ maxWidth: '760px' }}>
        <RevealOnScroll>
          <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="var(--sage)" strokeWidth="1.5" strokeLinecap="round" className="mx-auto mb-6" aria-hidden="true">
            <path d="M12 3v3m0 12v3M3 12h3m12 0h3M5.6 5.6l2.1 2.1m8.6 8.6l2.1 2.1M5.6 18.4l2.1-2.1m8.6-8.6l2.1-2.1" />
          </svg>
          <h2>{t.ctaH}</h2>
          <GradLine center className="my-6" />
          <p className="text-text-muted font-light leading-[1.85] max-w-[560px] mx-auto mb-8" style={{ fontSize: '17px' }}>{t.ctaP}</p>
          <div className="flex gap-3 justify-center flex-wrap">
            <Link href="/contact" className="btn-primary">{t.ctaBook}</Link>
            <a href={AB_CONFIG.WA_URL} target="_blank" rel="noopener noreferrer" aria-label={t.chatOnWhatsApp} className="btn-wa">{t.ctaWa}</a>
          </div>
        </RevealOnScroll>
      </div>
    </section>
  );
}
