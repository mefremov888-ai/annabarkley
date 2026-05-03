'use client';

import { useLang } from '@/lib/i18n/context';
import { PageHeader } from '@/components/sections/PageHeader';
import { RevealOnScroll } from '@/components/ui/RevealOnScroll';

const POSTS = {
  en: [
    { t: 'Why Is My Child So Anxious?', d: 'Anxiety in children often looks different than in adults — and what helps may surprise you.', cat: 'Children', bg: 'var(--sage-pale)' },
    { t: 'The Teenage Identity Crisis', d: 'When is it healthy growth versus a warning sign? A practical guide for parents.', cat: 'Teens', bg: 'var(--rose-pale)' },
    { t: 'Why We Repeat Emotional Patterns', d: 'Many adult struggles have roots in childhood — and recognising them is the first step.', cat: 'Adults', bg: 'linear-gradient(135deg, var(--sage-pale), var(--rose-pale))' },
    { t: "You Don't Have to Be a Perfect Parent", d: "What actually matters for your child's emotional development.", cat: 'Parenting', bg: 'var(--sage-pale)' },
    { t: 'Emotional Challenges of Expat Life', d: 'Moving to a new country affects the whole family — including the parts you did not expect.', cat: 'Families', bg: 'var(--rose-pale)' },
  ],
  ru: [
    { t: 'Почему мой ребёнок тревожится?', d: 'Тревога у детей часто выглядит иначе, чем у взрослых — и помогает не всегда то, что кажется очевидным.', cat: 'Дети', bg: 'var(--sage-pale)' },
    { t: 'Подростковый кризис идентичности', d: 'Когда это здоровое взросление, а когда — повод обратиться за помощью.', cat: 'Подростки', bg: 'var(--rose-pale)' },
    { t: 'Почему мы повторяем эмоциональные паттерны', d: 'Корни взрослых трудностей часто в детстве — и осознать их первый шаг.', cat: 'Взрослые', bg: 'linear-gradient(135deg, var(--sage-pale), var(--rose-pale))' },
    { t: 'Не нужно быть идеальным родителем', d: 'Что на самом деле важно для эмоционального развития ребёнка.', cat: 'Родители', bg: 'var(--sage-pale)' },
    { t: 'Эмоции экспата', d: 'Переезд в другую страну влияет на всю семью — включая то, чего вы не ожидали.', cat: 'Семьи', bg: 'var(--rose-pale)' },
  ],
};

export default function BlogPage() {
  const { lang } = useLang();
  return (
    <>
      <PageHeader headingKey="blog" />
      <section className="py-12 px-7 pb-32">
        <div className="container-x">
          <div className="grid grid-cols-3 gap-6 max-lg:grid-cols-2 max-md:grid-cols-1">
            {POSTS[lang].map((post, i) => (
              <RevealOnScroll key={post.t} delay={i * 60}>
                <article className="rounded-2xl border border-border bg-white overflow-hidden transition-all duration-500 hover:-translate-y-1.5 hover:shadow-2xl">
                  <div className="h-40 flex items-center justify-center" style={{ background: post.bg }}>
                    <svg width="36" height="36" viewBox="0 0 24 24" fill="none" stroke="var(--sage-deep)" strokeWidth="1.5" strokeLinecap="round" aria-hidden="true">
                      <path d="M14 2H6a2 2 0 00-2 2v16a2 2 0 002 2h12a2 2 0 002-2V8z" />
                      <polyline points="14 2 14 8 20 8" />
                    </svg>
                  </div>
                  <div className="p-7">
                    <span className="text-[11px] uppercase tracking-[0.2em] font-bold text-sage-deep">{post.cat}</span>
                    <h3 className="my-3">{post.t}</h3>
                    <p className="text-text-muted font-light leading-[1.7]" style={{ fontSize: '14px' }}>{post.d}</p>
                  </div>
                </article>
              </RevealOnScroll>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
