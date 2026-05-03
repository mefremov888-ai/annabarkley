'use client';

import Link from 'next/link';
import { useLang } from '@/lib/i18n/context';
import { AB_CONFIG } from '@/lib/config';
import { Tag } from '@/components/ui/Tag';
import { GradLine } from '@/components/ui/GradLine';
import { RevealOnScroll } from '@/components/ui/RevealOnScroll';
import type { IssueData } from '@/lib/issues';

export function IssueDetail({ issue }: { issue: IssueData }) {
  const { lang, t } = useLang();
  return (
    <>
      <section className="pt-32 pb-12 px-7 max-md:pt-24">
        <div className="container-x" style={{ maxWidth: '760px' }}>
          <Link href="/issues" className="text-sage font-semibold text-[14px] hover:underline mb-6 inline-block">
            {t.whatIHelpWith}
          </Link>
          <Tag>{issue.t[lang]}</Tag>
          <h1 className="mt-6 mb-6">{issue.t[lang]}</h1>
          <GradLine />
        </div>
      </section>

      <section className="pb-16 px-7">
        <div className="container-x" style={{ maxWidth: '760px' }}>
          <RevealOnScroll>
            {issue.full[lang].map((p, i) => (
              <p key={i} className="text-text-muted font-light leading-[1.9] mb-6 last:mb-0" style={{ fontSize: '17px' }}>{p}</p>
            ))}
          </RevealOnScroll>
        </div>
      </section>

      <section className="pb-16 px-7">
        <div className="container-x" style={{ maxWidth: '760px' }}>
          <RevealOnScroll>
            <h3 className="mb-6">{t.signsHeading}</h3>
            <ul className="flex flex-col gap-3">
              {issue.signs[lang].map((s) => (
                <li key={s} className="flex gap-3 items-start">
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="var(--sage)" strokeWidth="2" strokeLinecap="round" className="mt-1 flex-shrink-0" aria-hidden="true">
                    <polyline points="20 6 9 17 4 12" />
                  </svg>
                  <span className="text-text leading-[1.7]" style={{ fontSize: '15px' }}>{s}</span>
                </li>
              ))}
            </ul>
          </RevealOnScroll>
        </div>
      </section>

      <section className="py-16 px-7 pb-32">
        <div className="container-x" style={{ maxWidth: '760px' }}>
          <div className="flex gap-3 flex-wrap justify-center">
            <Link href="/contact" className="btn-primary">{t.bookFreeCall}</Link>
            <a href={AB_CONFIG.WA_URL} target="_blank" rel="noopener noreferrer" aria-label={t.chatOnWhatsApp} className="btn-wa">{t.chatOnWhatsApp}</a>
          </div>
        </div>
      </section>
    </>
  );
}
