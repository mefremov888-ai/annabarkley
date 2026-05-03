'use client';

import Link from 'next/link';
import { useLang } from '@/lib/i18n/context';
import { PageHeader } from '@/components/sections/PageHeader';
import { RevealOnScroll } from '@/components/ui/RevealOnScroll';

const BLOCKS = {
  en: [
    {
      t: 'For Schools',
      d: 'Wellbeing workshops for parents and teachers. Screening slots for students. Referral pathways. Monthly office hours.',
      f: ['60-min parent workshop', 'Student screening slots', 'Referral pathway setup', 'Monthly retainer available'],
    },
    {
      t: 'For Companies',
      d: 'Employee wellbeing programmes. Burnout prevention workshops. Confidential 1-to-1 sessions. Monthly aggregate reporting. 30-day pilots.',
      f: ['45-60 min manager workshop', 'Confidential individual sessions', 'Monthly aggregate report', '30-day pilot programme'],
    },
  ],
  ru: [
    {
      t: 'Для школ',
      d: 'Воркшопы well-being для родителей и учителей. Окна скрининга для учеников. Маршруты направлений. Ежемесячные «часы поддержки».',
      f: ['Воркшоп для родителей 60 мин', 'Скрининг учеников', 'Настройка маршрутов направлений', 'Ежемесячный ретейнер'],
    },
    {
      t: 'Для компаний',
      d: 'Программы well-being для сотрудников. Профилактика выгорания. Конфиденциальные 1-на-1 сессии. Ежемесячные агрегированные отчёты. Пилот 30 дней.',
      f: ['Воркшоп для менеджеров 45-60 мин', 'Конфиденциальные индивидуальные сессии', 'Ежемесячный агрегированный отчёт', 'Пилотная программа 30 дней'],
    },
  ],
};

export default function B2BPage() {
  const { lang, t } = useLang();
  return (
    <>
      <PageHeader headingKey="b2b" />
      <section className="py-16 px-7 pb-32">
        <div className="container-x">
          <div className="grid grid-cols-2 gap-6 max-md:grid-cols-1">
            {BLOCKS[lang].map((b, i) => (
              <RevealOnScroll key={b.t} delay={i * 80}>
                <article
                  className="rounded-card p-10 transition-all duration-500"
                  style={{ background: 'rgba(255,255,255,0.6)', backdropFilter: 'blur(24px)', border: '1px solid rgba(255,255,255,0.4)' }}
                >
                  <h3 className="mb-3">{b.t}</h3>
                  <p className="text-text-muted font-light mb-6 leading-[1.85]" style={{ fontSize: '15px' }}>{b.d}</p>
                  <ul className="flex flex-col gap-2 mb-7">
                    {b.f.map((f) => (
                      <li key={f} className="flex gap-2 items-start text-[14px] text-text">
                        <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="var(--sage)" strokeWidth="2.5" strokeLinecap="round" className="mt-1 flex-shrink-0" aria-hidden="true">
                          <polyline points="20 6 9 17 4 12" />
                        </svg>
                        <span>{f}</span>
                      </li>
                    ))}
                  </ul>
                  <Link href="/contact" className="btn-primary">{t.bookNow}</Link>
                </article>
              </RevealOnScroll>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
