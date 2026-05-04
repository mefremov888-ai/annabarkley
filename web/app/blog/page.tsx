'use client';

import Link from 'next/link';
import { useLang } from '@/lib/i18n/context';
import { PageHeader } from '@/components/sections/PageHeader';
import { RevealOnScroll } from '@/components/ui/RevealOnScroll';
import { POSTS } from '@/lib/blog';

export default function BlogPage() {
  const { lang, t } = useLang();
  return (
    <>
      <PageHeader headingKey="blog" />
      <section className="py-12 px-7 pb-32">
        <div className="container-x">
          <div className="grid grid-cols-3 gap-6 max-lg:grid-cols-2 max-md:grid-cols-1">
            {POSTS.map((post, i) => (
              <RevealOnScroll key={post.slug} delay={i * 60}>
                <Link
                  href={`/blog/${post.slug}`}
                  className="group block rounded-2xl border border-border bg-white overflow-hidden transition-all duration-500 hover:-translate-y-1.5 hover:shadow-2xl focus:outline-none focus-visible:ring-2 focus-visible:ring-sage focus-visible:ring-offset-2"
                  aria-label={post.t[lang]}
                >
                  <div
                    className="h-40 flex items-center justify-center"
                    style={{ background: post.bg }}
                  >
                    <svg
                      width="36"
                      height="36"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="var(--sage-deep)"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                      aria-hidden="true"
                    >
                      <path d="M14 2H6a2 2 0 00-2 2v16a2 2 0 002 2h12a2 2 0 002-2V8z" />
                      <polyline points="14 2 14 8 20 8" />
                    </svg>
                  </div>
                  <div className="p-7">
                    <span className="text-[11px] uppercase tracking-[0.2em] font-bold text-sage-deep">
                      {post.cat[lang]}
                    </span>
                    <h3 className="my-3 group-hover:text-sage transition-colors">
                      {post.t[lang]}
                    </h3>
                    <p
                      className="text-text-muted font-light leading-[1.7] mb-4"
                      style={{ fontSize: '14px' }}
                    >
                      {post.d[lang]}
                    </p>
                    <div
                      className="text-text-muted font-light"
                      style={{ fontSize: '12px', letterSpacing: '0.02em' }}
                    >
                      {post.readingMinutes} {t.readingMinutes}
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
