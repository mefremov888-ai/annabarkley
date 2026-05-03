'use client';

import Link from 'next/link';
import { useLang } from '@/lib/i18n/context';
import { PageHeader } from '@/components/sections/PageHeader';

const TEXT = {
  en: [
    'Expat life in Dubai brings opportunities and disorientation in equal measure. Adjustments to a new culture, distance from family, identity shifts at work and home — these are common experiences, not personal failings.',
    'Therapy can help you take stock, reconnect with what matters, and build sustainable ways to cope when the ground keeps shifting. Sessions in English or Russian, in person or online.',
  ],
  ru: [
    'Жизнь экспата в Дубае несёт и новые возможности, и дезориентацию. Адаптация к другой культуре, дистанция от близких, смещение идентичности на работе и дома — это распространённый опыт, а не личная слабость.',
    'Терапия помогает остановиться, восстановить связь с тем, что важно, и найти устойчивые способы справляться, когда всё вокруг продолжает меняться. Сессии на английском или русском, очно или онлайн.',
  ],
};

export default function ExpatPage() {
  const { lang, t } = useLang();
  return (
    <>
      <PageHeader headingKey="expat" />
      <section className="py-16 px-7 pb-32">
        <div className="container-x" style={{ maxWidth: '720px' }}>
          {TEXT[lang].map((p, i) => (
            <p key={i} className="text-text-muted font-light mb-6 last:mb-0" style={{ fontSize: '17px', lineHeight: 1.9 }}>{p}</p>
          ))}
          <div className="mt-10">
            <Link href="/contact" className="btn-primary">{t.bookFreeCall}</Link>
          </div>
        </div>
      </section>
    </>
  );
}
