'use client';

import { useState } from 'react';
import Link from 'next/link';
import { useLang } from '@/lib/i18n/context';
import { AB_CONFIG } from '@/lib/config';
import { PageHeader } from '@/components/sections/PageHeader';

interface Level {
  min: number;
  max: number;
  key: 'low' | 'mid' | 'high';
  label: { en: string; ru: string };
  desc: { en: string; ru: string };
  tips: { en: string[]; ru: string[] };
}

interface Question {
  q: { en: string; ru: string };
  os: { en: string[]; ru: string[] };
}

const QUESTIONS: Question[] = [
  {
    q: { en: 'How often do you feel nervous, anxious, or on edge?', ru: 'Как часто вы чувствуете нервозность, тревогу или напряжение?' },
    os: {
      en: ['Not at all', 'Several days', 'More than half the days', 'Nearly every day'],
      ru: ['Совсем нет', 'Несколько дней', 'Больше половины дней', 'Почти каждый день'],
    },
  },
  {
    q: { en: 'How often are you unable to stop or control worrying?', ru: 'Как часто вы не можете остановить или контролировать беспокойство?' },
    os: {
      en: ['Not at all', 'Several days', 'More than half the days', 'Nearly every day'],
      ru: ['Совсем нет', 'Несколько дней', 'Больше половины дней', 'Почти каждый день'],
    },
  },
  {
    q: { en: 'How often do you have trouble relaxing?', ru: 'Как часто вам трудно расслабиться?' },
    os: {
      en: ['Not at all', 'Several days', 'More than half the days', 'Nearly every day'],
      ru: ['Совсем нет', 'Несколько дней', 'Больше половины дней', 'Почти каждый день'],
    },
  },
  {
    q: { en: "How often do you feel restless, so that it's hard to sit still?", ru: 'Как часто вы чувствуете беспокойство, что трудно усидеть на месте?' },
    os: {
      en: ['Not at all', 'Several days', 'More than half the days', 'Nearly every day'],
      ru: ['Совсем нет', 'Несколько дней', 'Больше половины дней', 'Почти каждый день'],
    },
  },
  {
    q: { en: 'How often do you become easily annoyed or irritable?', ru: 'Как часто вы легко раздражаетесь?' },
    os: {
      en: ['Not at all', 'Several days', 'More than half the days', 'Nearly every day'],
      ru: ['Совсем нет', 'Несколько дней', 'Больше половины дней', 'Почти каждый день'],
    },
  },
  {
    q: { en: 'How often do you feel afraid, as if something terrible might happen?', ru: 'Как часто вы чувствуете страх, будто может случиться что-то ужасное?' },
    os: {
      en: ['Not at all', 'Several days', 'More than half the days', 'Nearly every day'],
      ru: ['Совсем нет', 'Несколько дней', 'Больше половины дней', 'Почти каждый день'],
    },
  },
  {
    q: { en: 'How often do you have difficulty concentrating on things?', ru: 'Как часто вам трудно сосредоточиться?' },
    os: {
      en: ['Not at all', 'Several days', 'More than half the days', 'Nearly every day'],
      ru: ['Совсем нет', 'Несколько дней', 'Больше половины дней', 'Почти каждый день'],
    },
  },
  {
    q: { en: 'How often do you have trouble falling asleep or staying asleep?', ru: 'Как часто вам трудно заснуть или не просыпаться ночью?' },
    os: {
      en: ['Not at all', 'Several days', 'More than half the days', 'Nearly every day'],
      ru: ['Совсем нет', 'Несколько дней', 'Больше половины дней', 'Почти каждый день'],
    },
  },
  {
    q: { en: 'How often do you experience physical symptoms (racing heart, sweating, tension)?', ru: 'Как часто вы испытываете физические симптомы (сердцебиение, потливость, напряжение)?' },
    os: {
      en: ['Not at all', 'Several days', 'More than half the days', 'Nearly every day'],
      ru: ['Совсем нет', 'Несколько дней', 'Больше половины дней', 'Почти каждый день'],
    },
  },
  {
    q: { en: 'How much does anxiety interfere with your work, social life, or relationships?', ru: 'Насколько тревога мешает вашей работе, социальной жизни или отношениям?' },
    os: {
      en: ['Not at all', 'A little', 'Moderately', 'Severely'],
      ru: ['Совсем не мешает', 'Немного', 'Умеренно', 'Сильно'],
    },
  },
];

const LEVELS: Level[] = [
  {
    min: 0, max: 7, key: 'low',
    label: { en: 'Low Anxiety', ru: 'Низкая тревожность' },
    desc: {
      en: 'Your anxiety levels appear to be within a normal range. Everyone experiences some worry — and yours seems manageable right now.',
      ru: 'Ваш уровень тревожности в пределах нормы. Все испытывают волнение — и ваше сейчас управляемо.',
    },
    tips: {
      en: [
        'Continue maintaining healthy routines and sleep habits',
        'Practice mindfulness or deep breathing when stress builds',
        'Stay connected with people who support you',
        'Consider a check-in session if anything changes',
      ],
      ru: [
        'Продолжайте поддерживать здоровые привычки и режим сна',
        'Практикуйте осознанность или дыхательные упражнения при стрессе',
        'Поддерживайте связь с близкими людьми',
        'Рассмотрите профилактическую консультацию',
      ],
    },
  },
  {
    min: 8, max: 17, key: 'mid',
    label: { en: 'Moderate Anxiety', ru: 'Умеренная тревожность' },
    desc: {
      en: 'Your responses suggest moderate anxiety that may be affecting your daily functioning. This is common — and support is available.',
      ru: 'Ваши ответы указывают на умеренную тревожность, которая может влиять на повседневную жизнь. Это распространённо — и поддержка доступна.',
    },
    tips: {
      en: [
        'Structured therapy (CBT) may help reduce symptoms at this level',
        'Regular exercise and sleep hygiene can make a real difference',
        'Journaling or tracking your worry patterns helps build awareness',
        'A professional assessment can clarify what would help most',
      ],
      ru: [
        'Структурированная терапия (КПТ) может помочь на этом уровне',
        'Регулярные упражнения и гигиена сна имеют значение',
        'Ведение дневника тревоги помогает осознанности',
        'Профессиональная оценка прояснит, что поможет больше всего',
      ],
    },
  },
  {
    min: 18, max: 30, key: 'high',
    label: { en: 'Elevated Anxiety', ru: 'Повышенная тревожность' },
    desc: {
      en: 'Your responses indicate significant anxiety that is likely affecting multiple areas of your life. This level of distress is not something you need to manage alone.',
      ru: 'Ваши ответы указывают на значительную тревожность, которая, вероятно, влияет на несколько сфер жизни. С этим не нужно справляться в одиночку.',
    },
    tips: {
      en: [
        'Professional support is recommended at this level',
        'CBT and exposure therapy have research support for working with anxiety',
        'A thorough assessment will help create a targeted plan',
        "You've already taken an important step by recognising this",
      ],
      ru: [
        'Профессиональная поддержка рекомендуется на этом уровне',
        'КПТ и экспозиционная терапия имеют исследовательскую поддержку',
        'Тщательная оценка поможет создать целевой план',
        'Вы уже сделали важный шаг, признав это',
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
    intro: "Answer 10 questions honestly. This is not a diagnosis — it's a starting point for understanding how anxiety may be affecting your daily life.",
    start: 'Start the Test',
    question: 'Question',
    of: 'of',
    next: 'Next Question',
    seeResults: 'See Results',
    yourResult: 'Your Result',
    retake: 'Take Again',
    waMsg: (score: number, max: number) =>
      `Hi Anna, I just took the anxiety self-check and scored ${score}/${max}. I'd like to discuss my results.`,
    disclaimer:
      'This self-check is for informational purposes only and is not a clinical diagnosis. It is based on validated screening tools (GAD-7 adapted) but does not replace professional assessment. If you are in crisis, please contact emergency services.',
    backToTools: '← All tools',
  },
  ru: {
    intro: 'Ответьте на 10 вопросов честно. Это не диагноз — отправная точка для понимания того, как тревога может влиять на вашу жизнь.',
    start: 'Начать тест',
    question: 'Вопрос',
    of: 'из',
    next: 'Следующий вопрос',
    seeResults: 'Посмотреть результат',
    yourResult: 'Ваш результат',
    retake: 'Пройти заново',
    waMsg: (score: number, max: number) =>
      `Здравствуйте, Анна! Я прошла тест тревожности и набрала ${score}/${max}. Хотела бы обсудить результаты.`,
    disclaimer:
      'Этот тест носит информационный характер и не является клиническим диагнозом. Он основан на валидированных инструментах скрининга (адаптация GAD-7), но не заменяет профессиональную оценку.',
    backToTools: '← Все инструменты',
  },
};

export function AnxietyTest() {
  const { lang, t } = useLang();
  const [step, setStep] = useState(-1); // -1: intro, 0..N-1: questions, N: result
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

  const score = answers.reduce((a, b) => a + b, 0);
  const max = total * 3;
  const level = LEVELS.find((l) => score >= l.min && score <= l.max) || LEVELS[2];

  return (
    <>
      <PageHeader headingKey="tools" />
      <section className="py-8 px-7 pb-32">
        <div className="container-x" style={{ maxWidth: '640px' }}>
          <Link href="/tools" className="text-sage font-semibold text-[14px] hover:underline mb-8 inline-block">
            {tt.backToTools}
          </Link>

          {/* Intro */}
          {step === -1 && (
            <div>
              <h1 className="mb-4">
                {lang === 'en' ? 'Anxiety Self-Check' : 'Самопроверка тревожности'}
              </h1>
              <div className="grad-line mb-6" />
              <p className="text-text-muted font-light leading-[1.85] mb-10" style={{ fontSize: '17px' }}>
                {tt.intro}
              </p>
              <button type="button" onClick={goNext} className="btn-primary w-full justify-center">
                {tt.start} →
              </button>
            </div>
          )}

          {/* Question */}
          {step >= 0 && step < total && (
            <div>
              <div className="flex gap-1 mb-9" role="progressbar" aria-valuemin={0} aria-valuemax={total} aria-valuenow={step}>
                {Array.from({ length: total }).map((_, i) => (
                  <div
                    key={i}
                    className={[
                      'h-[5px] flex-1 rounded transition-all duration-500',
                      i < step ? 'bg-sage' : '',
                      i === step ? 'bg-gradient-to-r from-sage to-rose shadow-[0_0_8px_rgba(124,154,124,0.3)]' : '',
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
                {QUESTIONS[step].os[lang].map((opt, i) => {
                  const isSel = selected === i;
                  return (
                    <button
                      key={i}
                      type="button"
                      onClick={() => setSelected(i)}
                      aria-pressed={isSel}
                      className={[
                        'flex items-center gap-4 px-6 py-[18px] rounded-2xl border-[1.5px] text-left transition-all duration-[400ms]',
                        isSel
                          ? 'border-sage bg-sage-pale'
                          : 'border-border bg-white hover:border-sage-muted hover:translate-x-1',
                      ].join(' ')}
                    >
                      <span
                        aria-hidden="true"
                        className={[
                          'w-[22px] h-[22px] rounded-full border-2 flex items-center justify-center flex-shrink-0 transition-all',
                          isSel ? 'border-sage bg-sage' : 'border-border',
                        ].join(' ')}
                      >
                        <span
                          className={[
                            'w-[10px] h-[10px] rounded-full bg-white transition-transform duration-300',
                            isSel ? 'scale-100' : 'scale-0',
                          ].join(' ')}
                        />
                      </span>
                      <span className={['text-[15px]', isSel ? 'font-medium text-charcoal' : 'font-normal text-text'].join(' ')}>
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

          {/* Result */}
          {step >= total && (
            <div className="text-center">
              <h2 className="mb-8">{tt.yourResult}</h2>
              <div className="relative w-[160px] h-[160px] mx-auto mb-7">
                <div aria-hidden="true" className="absolute inset-0 rounded-full border-[3px] border-border" />
                <svg
                  width="164"
                  height="164"
                  viewBox="0 0 164 164"
                  className="absolute -inset-[2px] -rotate-90"
                  aria-hidden="true"
                >
                  <circle
                    cx="82"
                    cy="82"
                    r="72"
                    fill="none"
                    stroke={LEVEL_COLOR[level.key]}
                    strokeWidth="4"
                    strokeDasharray={2 * Math.PI * 72}
                    strokeDashoffset={(2 * Math.PI * 72) * (1 - score / max)}
                    strokeLinecap="round"
                    style={{ transition: 'stroke-dashoffset 1.5s cubic-bezier(0.16, 1, 0.3, 1)' }}
                  />
                </svg>
                <div className="absolute inset-0 flex flex-col items-center justify-center">
                  <span className="font-heading font-light text-charcoal" style={{ fontSize: '48px', letterSpacing: '-0.03em', lineHeight: 1 }}>
                    {score}
                  </span>
                  <span className="text-text-muted font-light" style={{ fontSize: '14px' }}>/ {max}</span>
                </div>
              </div>
              <span
                className="inline-block font-bold uppercase mb-5"
                style={{
                  fontSize: '13px',
                  letterSpacing: '0.15em',
                  padding: '8px 20px',
                  borderRadius: '30px',
                  color: LEVEL_COLOR[level.key],
                  background: LEVEL_BG[level.key],
                }}
              >
                {level.label[lang]}
              </span>
              <p className="text-text-muted font-light leading-[1.85] mb-9 max-w-[480px] mx-auto" style={{ fontSize: '16px' }}>
                {level.desc[lang]}
              </p>
              <ul className="text-left mb-10">
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
                  href={`${AB_CONFIG.WA_URL}?text=${encodeURIComponent(tt.waMsg(score, max))}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={t.chatOnWhatsApp}
                  className="btn-wa justify-center"
                >
                  {t.chatOnWhatsApp}
                </a>
                <Link href="/contact" className="btn-primary justify-center">
                  {t.bookFreeCall}
                </Link>
                <button type="button" onClick={reset} className="btn-outline justify-center">
                  {tt.retake}
                </button>
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
