'use client';

import Link from 'next/link';
import { useLang } from '@/lib/i18n/context';
import { AB_CONFIG } from '@/lib/config';
import { Tag } from '@/components/ui/Tag';
import { GradLine } from '@/components/ui/GradLine';
import { RevealOnScroll } from '@/components/ui/RevealOnScroll';
import type { BlogPostMeta } from '@/lib/blog';
import type { BlogPostContent } from '@/lib/blog-content';

function formatDate(iso: string, lang: 'en' | 'ru'): string {
  const d = new Date(iso + 'T00:00:00Z');
  return d.toLocaleDateString(lang === 'ru' ? 'ru-RU' : 'en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
    timeZone: 'UTC',
  });
}

interface Props {
  meta: BlogPostMeta;
  content: BlogPostContent;
}

export function BlogArticle({ meta, content }: Props) {
  const { lang, t } = useLang();

  return (
    <>
      <section className="pt-32 pb-8 px-7 max-md:pt-24">
        <div className="container-x" style={{ maxWidth: '760px' }}>
          <Link
            href="/blog"
            className="text-sage font-semibold text-[14px] hover:underline mb-6 inline-block"
          >
            {t.allArticles}
          </Link>

          <Tag>{meta.cat[lang]}</Tag>
          <h1 className="mt-6 mb-4">{meta.t[lang]}</h1>

          <div
            className="text-text-muted font-light mb-6"
            style={{ fontSize: '13px', letterSpacing: '0.02em' }}
          >
            <time dateTime={meta.date}>{formatDate(meta.date, lang)}</time>
            <span className="mx-2" aria-hidden="true">·</span>
            <span>
              {meta.readingMinutes} {t.readingMinutes}
            </span>
          </div>

          <GradLine />
        </div>
      </section>

      <section className="pb-12 px-7">
        <div className="container-x" style={{ maxWidth: '760px' }}>
          <RevealOnScroll>
            <p
              className="text-text font-light leading-[1.9] mb-10"
              style={{ fontSize: '18px' }}
            >
              {content.lede[lang]}
            </p>
          </RevealOnScroll>

          {content.sections.map((s, i) => (
            <RevealOnScroll key={i}>
              <h2 className="mt-12 mb-5">{s.h[lang]}</h2>
              {s.p[lang].map((para, j) => (
                <p
                  key={j}
                  className="text-text-muted font-light leading-[1.9] mb-5 last:mb-0"
                  style={{ fontSize: '17px' }}
                >
                  {para}
                </p>
              ))}
            </RevealOnScroll>
          ))}
        </div>
      </section>

      <section className="pb-12 px-7">
        <div className="container-x" style={{ maxWidth: '760px' }}>
          <RevealOnScroll>
            <div
              className="rounded-card p-8 max-md:p-6"
              style={{
                background:
                  'linear-gradient(135deg, var(--sage-pale), var(--rose-pale))',
              }}
            >
              <h3
                className="font-heading text-sage-deep mb-3"
                style={{ fontSize: '14px', fontWeight: 600, letterSpacing: '0.02em' }}
              >
                {t.whenReachOut}
              </h3>
              <p
                className="text-text leading-[1.8] font-light"
                style={{ fontSize: '16px' }}
              >
                {content.closing[lang]}
              </p>
            </div>
          </RevealOnScroll>
        </div>
      </section>

      <section className="pt-4 pb-16 px-7">
        <div className="container-x" style={{ maxWidth: '760px' }}>
          <div className="flex gap-3 flex-wrap justify-center">
            <Link href="/contact" className="btn-primary">
              {t.bookFreeCall}
            </Link>
            <a
              href={AB_CONFIG.WA_URL}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={t.chatOnWhatsApp}
              className="btn-wa"
            >
              {t.chatOnWhatsApp}
            </a>
          </div>
        </div>
      </section>

      <section className="pb-32 px-7">
        <div className="container-x" style={{ maxWidth: '760px' }}>
          <p
            className="text-text-muted text-center font-light"
            style={{ fontSize: '12px', opacity: 0.7 }}
          >
            {t.blogDisclaimer}
          </p>
        </div>
      </section>
    </>
  );
}
