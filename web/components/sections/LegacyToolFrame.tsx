'use client';

import Link from 'next/link';
import { useLang } from '@/lib/i18n/context';
import { PageHeader } from '@/components/sections/PageHeader';
import { getTool } from '@/lib/tools';

export function LegacyToolFrame({ slug, file }: { slug: string; file: string }) {
  const { lang } = useLang();
  const tool = getTool(slug);

  return (
    <>
      <PageHeader headingKey="tools" />
      <section className="py-8 px-7 pb-20">
        <div className="container-x" style={{ maxWidth: '900px' }}>
          <Link href="/tools" className="text-sage font-semibold text-[14px] hover:underline mb-6 inline-block">
            {lang === 'en' ? '← All tools' : '← Все инструменты'}
          </Link>
          {tool && (
            <div className="mb-6">
              <h2 className="mb-2">{tool.t[lang]}</h2>
              <p className="text-text-muted font-light leading-[1.7]" style={{ fontSize: '15px' }}>{tool.d[lang]}</p>
            </div>
          )}
          <div className="rounded-card overflow-hidden border border-border" style={{ height: 'min(85vh, 980px)' }}>
            <iframe
              src={`/legacy-tools/${file}`}
              title={tool?.t[lang] || slug}
              loading="lazy"
              className="w-full h-full border-0"
              sandbox="allow-scripts allow-same-origin allow-forms allow-popups"
            />
          </div>
          <p className="text-[12px] text-text-muted text-center mt-4 font-light">
            {lang === 'en'
              ? 'This tool runs in a sandboxed frame. A native React version is on the roadmap.'
              : 'Инструмент работает в изолированном фрейме. Нативная React-версия — в плане работ.'}
          </p>
        </div>
      </section>
    </>
  );
}
