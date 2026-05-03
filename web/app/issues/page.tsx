'use client';

import Link from 'next/link';
import { useLang } from '@/lib/i18n/context';
import { PageHeader } from '@/components/sections/PageHeader';
import { RevealOnScroll } from '@/components/ui/RevealOnScroll';
import { ISSUES } from '@/lib/issues';

export default function IssuesIndex() {
  const { lang } = useLang();
  return (
    <>
      <PageHeader headingKey="issues" />
      <section className="py-12 px-7 pb-32">
        <div className="container-x">
          <div className="grid gap-4" style={{ gridTemplateColumns: 'repeat(auto-fill, minmax(280px, 1fr))' }}>
            {ISSUES.map((issue, i) => (
              <RevealOnScroll key={issue.slug} delay={i * 30}>
                <Link
                  href={`/issues/${issue.slug}`}
                  className="block p-7 rounded-2xl border border-border bg-white transition-all duration-[400ms] hover:border-sage hover:-translate-y-1 hover:shadow-xl"
                >
                  <div className="flex gap-4 items-start">
                    <div
                      aria-hidden="true"
                      className="w-11 h-11 rounded-2xl flex items-center justify-center flex-shrink-0"
                      style={{ background: 'linear-gradient(135deg, var(--sage-pale), var(--rose-pale))' }}
                    >
                      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="var(--sage)" strokeWidth="1.5" strokeLinecap="round">
                        <path d="M11 20A7 7 0 0 1 9.8 6.9C15.5 4.9 17 3.5 19 2c1 2 2 4.5 1 8-1.5 5-5.7 8.5-9 10z" />
                      </svg>
                    </div>
                    <div>
                      <h3 className="mb-2">{issue.t[lang]}</h3>
                      <p className="text-text-muted font-light leading-[1.7]" style={{ fontSize: '14px' }}>{issue.d[lang]}</p>
                    </div>
                  </div>
                </Link>
              </RevealOnScroll>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
