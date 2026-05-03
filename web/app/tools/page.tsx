'use client';

import Link from 'next/link';
import { useLang } from '@/lib/i18n/context';
import { PageHeader } from '@/components/sections/PageHeader';
import { RevealOnScroll } from '@/components/ui/RevealOnScroll';
import { TOOLS } from '@/lib/tools';

export default function ToolsIndex() {
  const { lang } = useLang();
  return (
    <>
      <PageHeader headingKey="tools" />
      <section className="py-12 px-7 pb-32">
        <div className="container-x">
          <div className="grid grid-cols-2 gap-5 max-md:grid-cols-1">
            {TOOLS.map((tool, i) => (
              <RevealOnScroll key={tool.slug} delay={i * 40}>
                <Link
                  href={`/tools/${tool.slug}`}
                  className="block p-9 rounded-card border border-border bg-white transition-all duration-500 hover:-translate-y-1 hover:shadow-2xl"
                >
                  <div className="flex items-center gap-4 mb-4">
                    <div
                      aria-hidden="true"
                      className="w-12 h-12 rounded-2xl flex items-center justify-center flex-shrink-0"
                      style={{ background: 'linear-gradient(135deg, var(--sage-pale), var(--rose-pale))' }}
                    >
                      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke={tool.iconColor} strokeWidth="1.5" strokeLinecap="round">
                        <path d="M12 2v4m0 12v4M4.93 4.93l2.83 2.83m8.48 8.48l2.83 2.83M2 12h4m12 0h4M4.93 19.07l2.83-2.83m8.48-8.48l2.83-2.83" />
                      </svg>
                    </div>
                    <span className="text-[11px] uppercase tracking-[0.2em] font-bold text-sage">{tool.badge[lang]}</span>
                  </div>
                  <h3 className="mb-3">{tool.t[lang]}</h3>
                  <p className="text-text-muted font-light leading-[1.7]" style={{ fontSize: '15px' }}>{tool.d[lang]}</p>
                  <span className="text-sage font-semibold text-[14px] mt-5 inline-block">
                    {lang === 'en' ? 'Open →' : 'Открыть →'}
                  </span>
                </Link>
              </RevealOnScroll>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
