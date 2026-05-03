'use client';

import Link from 'next/link';
import { useLang } from '@/lib/i18n/context';
import { PageHeader } from '@/components/sections/PageHeader';
import { RevealOnScroll } from '@/components/ui/RevealOnScroll';

const STEPS = {
  en: [
    { t: 'Free 15-min call', d: "We discuss your situation, answer questions, and check if we're a good fit. No pressure." },
    { t: 'Intake session', d: 'Deeper exploration of your story, strengths, and goals. Together we build a personalised plan.' },
    { t: 'Regular sessions', d: 'Weekly or biweekly, tailored to you. CBT, play therapy, EMDR — whichever approach fits best.' },
    { t: 'Measurable progress', d: "We check in on goals together. You'll feel the difference, and we'll track it as we go." },
  ],
  ru: [
    { t: 'Бесплатный звонок 15 мин', d: 'Обсудим ситуацию, ответим на вопросы и поймём, подходим ли мы друг другу. Без давления.' },
    { t: 'Первичная сессия', d: 'Глубже изучаем вашу историю, сильные стороны и цели. Вместе строим персональный план.' },
    { t: 'Регулярные сессии', d: 'Еженедельно или раз в две недели — адаптируется под вас. КПТ, игровая терапия, EMDR.' },
    { t: 'Измеримый прогресс', d: 'Регулярно сверяемся с целями. Вы почувствуете разницу, а мы будем отслеживать её вместе.' },
  ],
};

export default function HowPage() {
  const { lang, t } = useLang();
  return (
    <>
      <PageHeader headingKey="how" />
      <section className="py-16 px-7">
        <div className="container-x" style={{ maxWidth: '720px' }}>
          <div className="relative pl-16">
            <div aria-hidden="true" className="absolute left-[27px] top-[60px] bottom-5 w-[2px]" style={{ background: 'linear-gradient(to bottom, var(--sage), var(--rose-pale))' }} />
            {STEPS[lang].map((s, i) => (
              <RevealOnScroll key={i} delay={i * 80} className="relative mb-12 last:mb-0">
                <div aria-hidden="true" className="absolute -left-16 top-1 w-5 h-5 rounded-full bg-sage flex items-center justify-center z-10">
                  <span className="w-2 h-2 rounded-full bg-white" />
                </div>
                <h3 className="mb-2">{s.t}</h3>
                <p className="text-text-muted font-light leading-[1.85]" style={{ fontSize: '16px' }}>{s.d}</p>
              </RevealOnScroll>
            ))}
          </div>
          <div className="text-center mt-16">
            <Link href="/quiz" className="btn-primary">{lang === 'en' ? 'Take the 60-second quiz' : 'Подбор за 60 секунд'}</Link>
          </div>
        </div>
      </section>
    </>
  );
}
