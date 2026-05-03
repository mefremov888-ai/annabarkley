'use client';

import { useState } from 'react';
import Link from 'next/link';
import { useLang } from '@/lib/i18n/context';
import { AB_CONFIG } from '@/lib/config';
import { PageHeader } from '@/components/sections/PageHeader';

type Cat = 'E' | 'D' | 'A';

interface Question {
  q: { en: string; ru: string };
  cat: Cat;
}

const QUESTIONS: Question[] = [
  // Exhaustion (4)
  { q: { en: 'How often do you feel emotionally drained by your work?', ru: 'Как часто вы чувствуете эмоциональное истощение от работы?' }, cat: 'E' },
  { q: { en: 'Do you feel used up at the end of a workday?', ru: 'Чувствуете ли вы себя опустошённым в конце рабочего дня?' }, cat: 'E' },
  { q: { en: 'Do you feel fatigued when you get up and face another day?', ru: 'Чувствуете ли вы усталость, когда просыпаетесь и думаете о новом рабочем дне?' }, cat: 'E' },
  { q: { en: 'How often does working all day feel like a real strain?', ru: 'Ощущается ли работа целый день как настоящее напряжение?' }, cat: 'E' },
  // Depersonalization (4)
  { q: { en: 'Do you feel you treat some people as impersonal objects?', ru: 'Вы стали относиться к некоторым людям как к безличным объектам?' }, cat: 'D' },
  { q: { en: 'Have you become more callous toward people since starting this job?', ru: 'Стали ли вы более чёрствым к людям с начала этой работы?' }, cat: 'D' },
  { q: { en: 'Do you worry this job is making you emotionally harder?', ru: 'Вас беспокоит, что работа делает вас эмоционально жёстче?' }, cat: 'D' },
  { q: { en: 'Do you feel indifferent about what happens to certain people you work with?', ru: 'Вам безразлично, что происходит с некоторыми коллегами или клиентами?' }, cat: 'D' },
  // Accomplishment (4) — reverse scored
  { q: { en: 'Do you feel you are positively influencing people through your work?', ru: 'Чувствуете ли вы, что положительно влияете на людей через работу?' }, cat: 'A' },
  { q: { en: 'Do you feel energetic and effective at work?', ru: 'Чувствуете ли вы себя энергичным и эффективным на работе?' }, cat: 'A' },
  { q: { en: 'Can you easily create a relaxed atmosphere in your work?', ru: 'Можете ли вы легко создать спокойную атмосферу в работе?' }, cat: 'A' },
  { q: { en: 'Do you feel exhilarated after working closely with people?', ru: 'Чувствуете ли вы подъём после плотной работы с людьми?' }, cat: 'A' },
];

const SCALE = {
  en: ['Never', 'Rarely', 'Sometimes', 'Often'],
  ru: ['Никогда', 'Редко', 'Иногда', 'Часто'],
};

const CAT_NAME = {
  en: { E: 'Emotional Exhaustion', D: 'Depersonalization', A: 'Personal Accomplishment' },
  ru: { E: 'Эмоциональное истощение', D: 'Деперсонализация', A: 'Личные достижения' },
};

const BAR_COLOR: Record<Cat, string> = {
  E: '#D49A9A',
  D: '#C4B08B',
  A: '#89A4C7',
};

interface Level {
  max: number;
  key: 'low' | 'mid' | 'high';
  label: { en: string; ru: string };
  desc: { en: string; ru: string };
  tips: { en: string[]; ru: string[] };
}

const LEVELS: Level[] = [
  {
    max: 14, key: 'low',
    label: { en: 'Low Burnout Risk', ru: 'Низкий риск выгорания' },
    desc: {
      en: 'Your overall burnout indicators are within a healthy range. You appear to have good coping strategies and a sustainable relationship with your work.',
      ru: 'Ваши показатели в здоровом диапазоне. У вас хорошие стратегии совладания и устойчивые отношения с работой.',
    },
    tips: {
      en: [
        'Continue maintaining work-life boundaries',
        'Regular exercise and sleep habits protect you',
        'Stay connected with colleagues and friends',
        'Notice early warning signs if things change',
      ],
      ru: [
        'Продолжайте поддерживать границы работа-жизнь',
        'Физическая активность и сон — ваша защита',
        'Поддерживайте связь с коллегами и близкими',
        'Замечайте ранние сигналы, если что-то изменится',
      ],
    },
  },
  {
    max: 26, key: 'mid',
    label: { en: 'Moderate Burnout Risk', ru: 'Умеренный риск выгорания' },
    desc: {
      en: 'You show signs of burnout developing. This is the most important stage to intervene — before it becomes severe.',
      ru: 'Есть признаки развивающегося выгорания. Это важный момент для вмешательства — до того, как станет тяжелее.',
    },
    tips: {
      en: [
        'Set firm boundaries around work hours this week',
        'Identify your top 3 energy drains and address one',
        'Talk to someone you trust about how you feel',
        'A structured approach (therapy + lifestyle) often helps at this level',
      ],
      ru: [
        'Установите чёткие границы рабочего времени',
        'Определите 3 главных источника утечки энергии',
        'Поговорите с кем-то, кому доверяете',
        'Структурированный подход (терапия + образ жизни) часто помогает',
      ],
    },
  },
  {
    max: 36, key: 'high',
    label: { en: 'High Burnout Risk', ru: 'Высокий риск выгорания' },
    desc: {
      en: 'Your responses indicate significant burnout across multiple dimensions. This level of exhaustion affects health, relationships, and work quality.',
      ru: 'Ваши ответы указывают на значительное выгорание. Этот уровень истощения влияет на здоровье, отношения и качество работы.',
    },
    tips: {
      en: [
        'Professional support is recommended now',
        'Consider speaking with your manager about workload',
        'Your body and mind are sending a clear signal — listen',
        'Recovery is possible, but it usually requires active changes, not just rest',
      ],
      ru: [
        'Профессиональная поддержка рекомендуется сейчас',
        'Обсудите нагрузку с руководителем',
        'Тело и ум посылают ясный сигнал — прислушайтесь',
        'Восстановление возможно, но обычно требует активных изменений, не только отдыха',
      ],
    },
  },
];

const LEVEL_COLOR: Record<Level['key'], string> = {
  low: 'var(--sage)',
  mid: 'var(--gold)',
  high: 'var(--rose-deep)',
};

const LEVEL_BG: Record<Level['key'], string> = {
  low: 'var(--sage-pale)',
  mid: 'rgba(196,162,101,0.12)',
  high: 'var(--rose-pale)',
};

const T = {
  en: {
    intro: '12 questions about your energy, motivation, and emotional state at work. Takes about 3 minutes.',
    start: 'Start the Check',
    question: 'Question',
    of: 'of',
    next: 'Next',
    seeResults: 'See Results',
    yourResult: 'Your Burnout Profile',
    retake: 'Take Again',
    backToTools: '← All tools',
    waMsg: (total: number, e: number, d: number, a: number) =>
      `Hi Anna, I took the burnout check and scored ${total}/36. Exhaustion: ${e}, Depersonalization: ${d}, Accomplishment (reversed): ${a}. I'd like to discuss.`,
    disclaimer: 'This screening is based on validated burnout assessment principles (MBI adapted). It is not a clinical diagnosis. If you are experiencing severe symptoms, please seek professional support.',
  },
  ru: {
    intro: '12 вопросов об энергии, мотивации и эмоциональном состоянии. Занимает около 3 минут.',
    start: 'Начать проверку',
    question: 'Вопрос',
    of: 'из',
    next: 'Далее',
    seeResults: 'Результат',
    yourResult: 'Ваш профиль выгорания',
    retake: 'Пройти заново',
    backToTools: '← Все инструменты',
    waMsg: (total: number, e: number, d: number, a: number) =>
      `Здравствуйте, Анна! Прошла тест выгорания: ${total}/36. Истощение: ${e}, Деперсонализация: ${d}, Достижения (обратная шкала): ${a}.`,
    disclaimer: 'Скрининг основан на валидированных принципах оценки выгорания (адаптация MBI). Это не клинический диагноз.',
  },
};

export function BurnoutTest() {
  const { lang, t } = useLang();
  const [step, setStep] = useState(-1);
  const [answers, setAnswers] = useState<number[]>([]);
  const [selected, setSelected] = useState<number | null>(null);
  const total = QUESTIONS.length;
  const tt = T[lang];

  const goNext = () => {
    if (step >= 0 && selected !== null) {
      setAnswers([...answers, selected]);
    }
    setSelected(null);
    setStep(step + 1);
  };

  const reset = () => {
    setStep(-1);
    setAnswers([]);
    setSelected(null);
  };

  // Compute scores
  let exhaustion = 0;
  let depersonalization = 0;
  let accomplishment = 0;
  answers.forEach((v, i) => {
    if (i < 4) exhaustion += v;
    else if (i < 8) depersonalization += v;
    else accomplishment += 3 - v; // reverse-scored
  });
  const score = exhaustion + depersonalization + accomplishment;
  const level = LEVELS.find((l) => score <= l.max) || LEVELS[2];

  const bars: { cat: Cat; val: number; max: number }[] = [
    { cat: 'E', val: exhaustion, max: 12 },
    { cat: 'D', val: depersonalization, max: 12 },
    { cat: 'A', val: accomplishment, max: 12 },
  ];

  return (
    <>
      <PageHeader headingKey="tools" />
      <section className="py-8 px-7 pb-32">
        <div className="container-x" style={{ maxWidth: '640px' }}>
          <Link href="/tools" className="text-sage font-semibold text-[14px] hover:underline mb-8 inline-block">
            {tt.backToTools}
          </Link>

          {step === -1 && (
            <div>
              <h1 className="mb-4">{lang === 'en' ? 'Burnout Self-Check' : 'Проверка на выгорание'}</h1>
              <div className="grad-line mb-6" />
              <p className="text-text-muted font-light leading-[1.85] mb-10" style={{ fontSize: '17px' }}>{tt.intro}</p>
              <button type="button" onClick={goNext} className="btn-primary w-full justify-center">
                {tt.start} →
              </button>
            </div>
          )}

          {step >= 0 && step < total && (
            <div>
              <div className="flex gap-1 mb-9" role="progressbar" aria-valuemin={0} aria-valuemax={total} aria-valuenow={step}>
                {Array.from({ length: total }).map((_, i) => (
                  <div
                    key={i}
                    className={[
                      'h-[5px] flex-1 rounded transition-all duration-500',
                      i < step ? 'bg-sage' : '',
                      i === step ? 'bg-gradient-to-r from-sage to-rose' : '',
                      i > step ? 'bg-border' : '',
                    ].join(' ')}
                  />
                ))}
              </div>
              <div className="font-heading text-[13px] font-semibold text-sage uppercase tracking-[0.1em] mb-3">
                {tt.question} {step + 1} {tt.of} {total}
              </div>
              <h2 className="text-charcoal mb-7 font-normal leading-[1.4]" style={{ fontSize: 'clamp(1.1rem, 2.5vw, 1.4rem)' }}>
                {QUESTIONS[step].q[lang]}
              </h2>
              <div className="flex flex-col gap-2.5 mb-8">
                {SCALE[lang].map((opt, i) => {
                  const isSel = selected === i;
                  return (
                    <button
                      key={i}
                      type="button"
                      onClick={() => setSelected(i)}
                      aria-pressed={isSel}
                      className={[
                        'flex items-center gap-4 px-5 py-4 rounded-2xl border-[1.5px] text-left transition-all duration-[400ms]',
                        isSel
                          ? 'border-sage bg-sage-pale'
                          : 'border-border bg-white hover:border-sage-muted hover:translate-x-1',
                      ].join(' ')}
                    >
                      <span
                        aria-hidden="true"
                        className={[
                          'w-5 h-5 rounded-full border-2 flex items-center justify-center flex-shrink-0',
                          isSel ? 'border-sage bg-sage' : 'border-border',
                        ].join(' ')}
                      >
                        <span className={['w-2 h-2 rounded-full bg-white transition-transform duration-300', isSel ? 'scale-100' : 'scale-0'].join(' ')} />
                      </span>
                      <span className={['text-[14px]', isSel ? 'font-medium text-charcoal' : 'text-text'].join(' ')}>
                        {opt}
                      </span>
                    </button>
                  );
                })}
              </div>
              {selected !== null && (
                <button type="button" onClick={goNext} className="btn-primary w-full justify-center">
                  {step < total - 1 ? tt.next : tt.seeResults} →
                </button>
              )}
            </div>
          )}

          {step >= total && (
            <div className="text-center">
              <h2 className="mb-6 font-light" style={{ fontSize: 'clamp(1.4rem, 3vw, 1.8rem)' }}>{tt.yourResult}</h2>
              <span
                className="inline-block font-bold uppercase mb-7"
                style={{
                  fontSize: '13px',
                  letterSpacing: '0.1em',
                  padding: '8px 20px',
                  borderRadius: '30px',
                  color: LEVEL_COLOR[level.key],
                  background: LEVEL_BG[level.key],
                }}
              >
                {level.label[lang]}
              </span>
              <div className="flex flex-col gap-4 mb-8 text-left">
                {bars.map((bar) => (
                  <div key={bar.cat} className="flex flex-col gap-1.5">
                    <div className="flex justify-between text-[13px]">
                      <span className="font-heading font-medium text-charcoal">{CAT_NAME[lang][bar.cat]}</span>
                      <span className="font-semibold" style={{ color: BAR_COLOR[bar.cat] }}>{bar.val}/{bar.max}</span>
                    </div>
                    <div className="h-2 bg-border rounded-lg overflow-hidden">
                      <div
                        className="h-full rounded-lg transition-all duration-1000"
                        style={{ width: `${(bar.val / bar.max) * 100}%`, background: BAR_COLOR[bar.cat] }}
                      />
                    </div>
                  </div>
                ))}
              </div>
              <p className="text-text-muted font-light leading-[1.85] mb-8" style={{ fontSize: '15px' }}>
                {level.desc[lang]}
              </p>
              <ul className="text-left mb-8">
                {level.tips[lang].map((tip, i) => (
                  <li key={i} className="flex gap-3 items-start py-3 border-b border-border last:border-b-0">
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="var(--sage)" strokeWidth="2.5" strokeLinecap="round" className="flex-shrink-0 mt-1" aria-hidden="true">
                      <polyline points="20 6 9 17 4 12" />
                    </svg>
                    <span className="text-text leading-[1.6] font-light text-[14px]">{tip}</span>
                  </li>
                ))}
              </ul>
              <div className="flex flex-col gap-3">
                <a
                  href={`${AB_CONFIG.WA_URL}?text=${encodeURIComponent(tt.waMsg(score, exhaustion, depersonalization, accomplishment))}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={t.chatOnWhatsApp}
                  className="btn-wa justify-center"
                >
                  {t.chatOnWhatsApp}
                </a>
                <Link href="/contact" className="btn-primary justify-center">{t.bookFreeCall}</Link>
                <button type="button" onClick={reset} className="btn-outline justify-center">{tt.retake}</button>
              </div>
              <p className="text-text-muted font-light text-[12px] leading-[1.7] mt-8 p-5 rounded-2xl bg-black/[0.02]">
                {tt.disclaimer}
              </p>
            </div>
          )}
        </div>
      </section>
    </>
  );
}
