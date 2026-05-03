'use client';

import { useState } from 'react';
import Link from 'next/link';
import { useLang } from '@/lib/i18n/context';
import { AB_CONFIG } from '@/lib/config';
import { PageHeader } from '@/components/sections/PageHeader';

const STEPS = {
  en: [
    { count: 5, sense: 'see', prompt: 'Name 5 things you can see right now.' },
    { count: 4, sense: 'touch', prompt: 'Name 4 things you can touch or feel.' },
    { count: 3, sense: 'hear', prompt: 'Name 3 things you can hear.' },
    { count: 2, sense: 'smell', prompt: 'Name 2 things you can smell.' },
    { count: 1, sense: 'taste', prompt: 'Name 1 thing you can taste.' },
  ],
  ru: [
    { count: 5, sense: 'видите', prompt: 'Назовите 5 вещей, которые вы видите.' },
    { count: 4, sense: 'чувствуете', prompt: 'Назовите 4 вещи, которые вы можете коснуться или почувствовать.' },
    { count: 3, sense: 'слышите', prompt: 'Назовите 3 вещи, которые вы слышите.' },
    { count: 2, sense: 'запах', prompt: 'Назовите 2 запаха.' },
    { count: 1, sense: 'вкус', prompt: 'Назовите 1 вкус.' },
  ],
};

export default function GroundingPage() {
  const { lang, t } = useLang();
  const [step, setStep] = useState(0);
  const [items, setItems] = useState<string[]>([]);
  const [draft, setDraft] = useState('');

  const total = STEPS[lang].length;
  const finished = step >= total;
  const current = !finished ? STEPS[lang][step] : null;

  const submit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!current) return;
    if (!draft.trim()) return;
    const newItems = [...items, draft.trim()];
    setItems(newItems);
    setDraft('');
    if (newItems.filter((_, i) => i >= step * 100).length >= current.count) {
      // упрощённая логика — просто переключаем шаг по нажатию Next
    }
  };

  const nextStep = () => {
    setStep((s) => s + 1);
  };

  const restart = () => {
    setStep(0);
    setItems([]);
    setDraft('');
  };

  return (
    <>
      <PageHeader headingKey="tools" />
      <section className="py-8 px-7 pb-32">
        <div className="container-x" style={{ maxWidth: '560px' }}>
          <Link href="/tools" className="text-sage font-semibold text-[14px] hover:underline mb-6 inline-block">
            {lang === 'en' ? '← All tools' : '← Все инструменты'}
          </Link>

          {!finished && current && (
            <>
              <div className="flex gap-1.5 mb-8">
                {STEPS[lang].map((_, i) => (
                  <div key={i} className={['h-1 flex-1 rounded transition-colors', i <= step ? 'bg-sage' : 'bg-border'].join(' ')} />
                ))}
              </div>
              <div className="text-center mb-8">
                <div className="font-heading text-[80px] font-light text-sage leading-none mb-2">{current.count}</div>
                <h3 className="mb-3">{current.prompt}</h3>
              </div>
              <form onSubmit={submit} className="flex flex-col gap-3">
                <input
                  type="text"
                  value={draft}
                  onChange={(e) => setDraft(e.target.value)}
                  placeholder={lang === 'en' ? 'Type one and press Enter' : 'Введите и нажмите Enter'}
                  className="px-5 py-4 rounded-2xl bg-white border-[1.5px] border-border outline-none focus:border-sage transition-colors"
                />
                <button type="submit" className="btn-outline justify-center" disabled={!draft.trim()}>
                  {lang === 'en' ? 'Add' : 'Добавить'}
                </button>
                {items.length > 0 && (
                  <ul className="mt-3 flex flex-wrap gap-2">
                    {items.map((it, i) => (
                      <li key={i} className="px-3 py-1.5 rounded-full bg-sage-pale text-sage text-[13px]">{it}</li>
                    ))}
                  </ul>
                )}
                <button type="button" onClick={nextStep} className="btn-primary justify-center mt-2">
                  {lang === 'en' ? 'Next →' : 'Далее →'}
                </button>
              </form>
            </>
          )}

          {finished && (
            <div className="text-center">
              <svg width="56" height="56" viewBox="0 0 24 24" fill="none" stroke="var(--sage)" strokeWidth="1.5" strokeLinecap="round" className="mx-auto mb-6" aria-hidden="true">
                <circle cx="12" cy="12" r="10" />
                <polyline points="8 12 11 15 16 9" />
              </svg>
              <h3 className="mb-3">{lang === 'en' ? 'Well done.' : 'Хорошо.'}</h3>
              <p className="text-text-muted font-light mb-8" style={{ fontSize: '15px' }}>
                {lang === 'en' ? 'Notice how your body feels right now.' : 'Заметьте, как чувствует себя ваше тело сейчас.'}
              </p>
              <div className="flex gap-3 justify-center flex-wrap">
                <button type="button" onClick={restart} className="btn-primary">
                  {lang === 'en' ? 'Start Again' : 'Начать заново'}
                </button>
                <a href={AB_CONFIG.WA_URL} target="_blank" rel="noopener noreferrer" className="btn-wa">{t.chatOnWhatsApp}</a>
              </div>
            </div>
          )}
        </div>
      </section>
    </>
  );
}
