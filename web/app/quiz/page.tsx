'use client';

import Link from 'next/link';
import { useState } from 'react';
import { useLang } from '@/lib/i18n/context';
import { AB_CONFIG } from '@/lib/config';
import { PageHeader } from '@/components/sections/PageHeader';

const STEPS = {
  en: [
    { q: 'Who is this for?', opts: ['My child (under 12)', 'My teenager (13-17)', 'Myself (adult)', 'Our family'] },
    { q: 'Main concern?', opts: ['Anxiety or worry', 'Low mood', 'Relationships', 'Life transition', 'Not sure yet'] },
    { q: 'Preferred format?', opts: ['In-person in Dubai', 'Online video', 'Either works'] },
  ],
  ru: [
    { q: 'Для кого?', opts: ['Ребёнок (до 12)', 'Подросток (13-17)', 'Я сам/я сама', 'Наша семья'] },
    { q: 'Основной запрос?', opts: ['Тревога', 'Сниженное настроение', 'Отношения', 'Жизненные перемены', 'Пока не знаю'] },
    { q: 'Формат?', opts: ['Очно в Дубае', 'Онлайн', 'Без разницы'] },
  ],
};

export default function QuizPage() {
  const { lang, t } = useLang();
  const [step, setStep] = useState(0);
  const [answers, setAnswers] = useState<string[]>([]);

  const total = STEPS[lang].length;
  const finished = step >= total;

  const onPick = (opt: string) => {
    setAnswers([...answers, opt]);
    setStep(step + 1);
  };

  return (
    <>
      <PageHeader headingKey="quiz" />
      <section className="py-12 px-7 pb-32">
        <div className="container-x" style={{ maxWidth: '640px' }}>
          {!finished && (
            <>
              <div className="flex gap-1.5 mb-8">
                {Array.from({ length: total }).map((_, i) => (
                  <div key={i} className={['h-1 flex-1 rounded transition-colors', i <= step ? 'bg-sage' : 'bg-border'].join(' ')} />
                ))}
              </div>
              <h2 className="mb-8 text-center">{STEPS[lang][step].q}</h2>
              <div className="flex flex-col gap-3">
                {STEPS[lang][step].opts.map((opt) => (
                  <button
                    key={opt}
                    type="button"
                    onClick={() => onPick(opt)}
                    className="block w-full px-6 py-5 rounded-2xl border-[1.5px] border-border bg-white text-left text-[15px] text-text transition-all duration-300 hover:border-sage hover:bg-sage-pale hover:translate-x-1"
                  >
                    {opt}
                  </button>
                ))}
              </div>
            </>
          )}
          {finished && (
            <div className="text-center">
              <svg width="56" height="56" viewBox="0 0 24 24" fill="none" stroke="var(--sage)" strokeWidth="1.5" strokeLinecap="round" className="mx-auto mb-6" aria-hidden="true">
                <circle cx="12" cy="12" r="10" />
                <polyline points="8 12 11 15 16 9" />
              </svg>
              <h3 className="mb-3">{lang === 'en' ? "Based on your answers, here's what I recommend:" : 'Рекомендация на основе ваших ответов:'}</h3>
              <p className="text-text-muted font-light mb-6" style={{ fontSize: '15px' }}>{answers.join(' → ')}</p>
              <div className="flex gap-3 justify-center flex-wrap">
                <Link href="/contact" className="btn-primary">{t.bookFreeCall}</Link>
                <a href={AB_CONFIG.WA_URL} target="_blank" rel="noopener noreferrer" aria-label={t.chatOnWhatsApp} className="btn-wa">{t.chatOnWhatsApp}</a>
              </div>
            </div>
          )}
        </div>
      </section>
    </>
  );
}
