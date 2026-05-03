'use client';

import { useState } from 'react';
import Link from 'next/link';
import { useLang } from '@/lib/i18n/context';
import { AB_CONFIG } from '@/lib/config';
import { PageHeader } from '@/components/sections/PageHeader';

interface Emotion {
  n: { en: string; ru: string };
  c: { en: string; ru: string };
  cl: string;
  d: { en: string; ru: string };
  b: { en: string[]; ru: string[] };
  nr: { en: string; ru: string };
  h: { en: string; ru: string };
  icon: React.ReactNode;
}

const Joy = (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" aria-hidden="true">
    <circle cx="12" cy="12" r="5" />
    <path d="M12 1v2M12 21v2M4.22 4.22l1.42 1.42M18.36 18.36l1.42 1.42M1 12h2M21 12h2M4.22 19.78l1.42-1.42M18.36 5.64l1.42-1.42" />
  </svg>
);
const Sadness = (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" aria-hidden="true">
    <path d="M20 17.58A5 5 0 0 0 18 8h-1.26A8 8 0 1 0 4 16.25" />
    <path d="M8 16h.01M8 20h.01M12 18h.01M12 22h.01M16 16h.01M16 20h.01" />
  </svg>
);
const Fear = (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" aria-hidden="true">
    <path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z" />
  </svg>
);
const Anger = (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" aria-hidden="true">
    <path d="M8.5 14.5A2.5 2.5 0 0 0 11 12c0-1.38-.5-2-1-3-1.072-2.143-.224-4.054 2-6 .5 2.5 2 4.9 4 6.5 2 1.6 3 3.5 3 5.5a7 7 0 1 1-14 0c0-1.153.433-2.294 1-3a2.5 2.5 0 0 0 2.5 2.5z" />
  </svg>
);
const Surprise = (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" aria-hidden="true">
    <path d="M12 3l1.5 5.5L19 10l-5.5 1.5L12 17l-1.5-5.5L5 10l5.5-1.5Z" />
  </svg>
);
const Disgust = (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" aria-hidden="true">
    <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
  </svg>
);
const Trust = (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" aria-hidden="true">
    <path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z" />
  </svg>
);
const Anticipation = (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" aria-hidden="true">
    <circle cx="12" cy="12" r="10" />
    <path d="M12 6v6l4 2" />
  </svg>
);

const EMOTIONS: Emotion[] = [
  {
    n: { en: 'Joy', ru: 'Радость' },
    c: { en: 'Positive', ru: 'Позитивная' },
    cl: '#A8D5A2',
    d: {
      en: 'Joy signals that something meaningful is happening. It connects you to the present and what matters most.',
      ru: 'Радость — сигнал, что происходит значимое. Она связывает с настоящим и важным.',
    },
    b: {
      en: ['Warmth in chest', 'Lightness in body', 'Spontaneous smile', 'Increased energy'],
      ru: ['Тепло в груди', 'Лёгкость в теле', 'Улыбка', 'Прилив энергии'],
    },
    nr: {
      en: 'Joy can be quiet or explosive. Feeling guilty about joy is common in hard times. All joy is valid.',
      ru: 'Радость бывает тихой и бурной. Вина за радость — частое явление. Любая радость настоящая.',
    },
    h: {
      en: "If you rarely feel joy, or it's quickly followed by guilt, therapy can help reconnect with positive experiences.",
      ru: 'Если радуетесь редко или радость быстро сменяется виной — терапия может помочь.',
    },
    icon: Joy,
  },
  {
    n: { en: 'Sadness', ru: 'Грусть' },
    c: { en: 'Core', ru: 'Базовая' },
    cl: '#89A4C7',
    d: {
      en: 'Sadness tells you something important has been lost. One of the most fundamental and most avoided emotions.',
      ru: 'Грусть говорит, что что-то важное потеряно. Одна из самых базовых и самых избегаемых эмоций.',
    },
    b: {
      en: ['Heaviness in chest', 'Low energy', 'Desire to withdraw', 'Tearfulness'],
      ru: ['Тяжесть в груди', 'Низкая энергия', 'Желание уединиться', 'Слёзы'],
    },
    nr: {
      en: 'Sadness is not depression. Feeling sad after loss or disappointment is healthy and natural.',
      ru: 'Грусть — не депрессия. Грустить после потери или разочарования — здорово и естественно.',
    },
    h: {
      en: 'If sadness persists over two weeks, interferes with daily life, or comes without clear reason — support may help.',
      ru: 'Если грусть длится более двух недель, мешает жить или приходит без причины — стоит обратиться за поддержкой.',
    },
    icon: Sadness,
  },
  {
    n: { en: 'Fear', ru: 'Страх' },
    c: { en: 'Core', ru: 'Базовая' },
    cl: '#C4B08B',
    d: {
      en: "Fear is your brain's alarm system. It becomes a problem when it fires too often or too intensely.",
      ru: 'Страх — система защиты мозга. Проблема — когда срабатывает слишком часто или слишком сильно.',
    },
    b: {
      en: ['Racing heart', 'Shallow breathing', 'Muscle tension', 'Hypervigilance'],
      ru: ['Учащённое сердцебиение', 'Поверхностное дыхание', 'Напряжение мышц', 'Бдительность'],
    },
    nr: {
      en: 'Fear before a big decision is normal. It shows you care about the outcome.',
      ru: 'Страх перед важным решением — абсолютно нормален. Он показывает, что результат для вас важен.',
    },
    h: {
      en: 'If fear controls your decisions or causes panic attacks — CBT often helps.',
      ru: 'Если страх управляет решениями или вызывает панические атаки — КПТ часто помогает.',
    },
    icon: Fear,
  },
  {
    n: { en: 'Anger', ru: 'Злость' },
    c: { en: 'Core', ru: 'Базовая' },
    cl: '#D49A9A',
    d: {
      en: "Anger signals a crossed boundary or unmet need. It's not 'bad' — but expression matters enormously.",
      ru: 'Злость — сигнал нарушенной границы или неудовлетворённой потребности. Она не "плохая", но способ выражения решает всё.',
    },
    b: {
      en: ['Heat in face', 'Clenched jaw or fists', 'Raised voice', 'Urge to act now'],
      ru: ['Жар в лице', 'Сжатые кулаки', 'Повышенный голос', 'Импульс действовать сейчас'],
    },
    nr: {
      en: 'Anger at injustice is healthy. It protects your boundaries.',
      ru: 'Злиться на несправедливость — здоровая реакция. Она защищает границы.',
    },
    h: {
      en: 'If anger leads to regretted outbursts or damages relationships — therapy supports regulation.',
      ru: 'Если злость приводит к вспышкам, о которых жалеете, или разрушает отношения — терапия поможет с регуляцией.',
    },
    icon: Anger,
  },
  {
    n: { en: 'Surprise', ru: 'Удивление' },
    c: { en: 'Transitional', ru: 'Переходная' },
    cl: '#C9B5D4',
    d: {
      en: 'Surprise resets your attention and prepares your brain for new information. Brief and intense.',
      ru: 'Удивление сбрасывает внимание и готовит мозг к новому. Короткая и интенсивная эмоция.',
    },
    b: {
      en: ['Widened eyes', 'Momentary freeze', 'Sharp breath', 'Heightened alertness'],
      ru: ['Расширенные глаза', 'Замирание', 'Резкий вдох', 'Повышенная настороженность'],
    },
    nr: {
      en: 'Surprise is neutral — the shortest-lived emotion. It can lead to joy or fear.',
      ru: 'Удивление нейтрально — самая короткая эмоция. Может перейти в радость или страх.',
    },
    h: {
      en: 'If you feel constantly startled or hypervigilant — this could relate to anxiety or trauma.',
      ru: 'Если постоянно вздрагиваете или настороже — это может быть связано с тревогой или травмой.',
    },
    icon: Surprise,
  },
  {
    n: { en: 'Disgust', ru: 'Отвращение' },
    c: { en: 'Protective', ru: 'Защитная' },
    cl: '#9BB5A0',
    d: {
      en: 'Disgust protects you from physical threats and violations of your values.',
      ru: 'Отвращение защищает от физических угроз и нарушений ваших ценностей.',
    },
    b: {
      en: ['Nausea', 'Desire to pull away', 'Wrinkling nose', 'Sense of contamination'],
      ru: ['Тошнота', 'Желание отстраниться', 'Сморщенный нос', 'Ощущение загрязнения'],
    },
    nr: {
      en: 'Moral disgust shows intact values. Physical disgust protects the body.',
      ru: 'Моральное отвращение показывает живые ценности. Физическое — защищает тело.',
    },
    h: {
      en: 'If disgust targets yourself — body, identity, or worth — this is worth exploring in therapy.',
      ru: 'Если отвращение направлено на себя — тело, идентичность, самоценность — это стоит исследовать.',
    },
    icon: Disgust,
  },
  {
    n: { en: 'Trust', ru: 'Доверие' },
    c: { en: 'Relational', ru: 'Отношенческая' },
    cl: '#A8BFA8',
    d: {
      en: 'Trust is the foundation of connection. It builds slowly through consistency and safety.',
      ru: 'Доверие — основа связи. Оно строится медленно через постоянство и безопасность.',
    },
    b: {
      en: ['Open posture', 'Body relaxation', 'Willingness to be vulnerable', 'Sense of safety'],
      ru: ['Открытая поза', 'Расслабление тела', 'Готовность быть уязвимым', 'Ощущение безопасности'],
    },
    nr: {
      en: 'Trust requires evidence. Caution with new people is wisdom, not weakness.',
      ru: 'Доверие требует доказательств. Осторожность с новыми людьми — мудрость, а не слабость.',
    },
    h: {
      en: "If you can't trust anyone or trust too fast — therapy helps build healthy discernment.",
      ru: 'Если невозможно никому доверять или доверяете слишком быстро — терапия поможет с балансом.',
    },
    icon: Trust,
  },
  {
    n: { en: 'Anticipation', ru: 'Предвкушение' },
    c: { en: 'Forward', ru: 'Перспективная' },
    cl: '#D4C49A',
    d: {
      en: 'Your mind projecting into the future — with excitement or dread. Drives motivation and anxiety.',
      ru: 'Проекция ума в будущее — с волнением или тревогой. Движет мотивацией и тревогой.',
    },
    b: {
      en: ['Restlessness', 'Difficulty being present', '"What if" thoughts', 'Excitement mixed with worry'],
      ru: ['Беспокойство', 'Трудно быть в моменте', 'Мысли "что если"', 'Волнение и тревога вместе'],
    },
    nr: {
      en: 'Looking forward and worrying about uncertainty is normal.',
      ru: 'Ждать чего-то и волноваться из-за неопределённости — нормально.',
    },
    h: {
      en: 'If anticipation becomes chronic worry or disrupts sleep — support can help.',
      ru: 'Если предвкушение превращается в хроническую тревогу или нарушает сон — поддержка поможет.',
    },
    icon: Anticipation,
  },
];

const T = {
  en: {
    intro: 'Click any emotion to understand it better. Naming what you feel is the first step to feeling better.',
    centerPrompt: 'How do\nyou feel?',
    empty: '← Click on an emotion to explore it',
    bodyTitle: 'How it feels in the body',
    normalTitle: "When it's normal",
    helpTitle: 'When to seek support',
    waLabel: 'Discuss with a therapist',
    backToTools: '← All tools',
    waMsg: (name: string) => `Hi Anna, I'd like to discuss ${name.toLowerCase()}.`,
  },
  ru: {
    intro: 'Нажмите на эмоцию, чтобы узнать о ней больше. Назвать чувство — первый шаг к тому, чтобы стало легче.',
    centerPrompt: 'Что вы\nчувствуете?',
    empty: '← Нажмите на эмоцию, чтобы изучить её',
    bodyTitle: 'Как ощущается в теле',
    normalTitle: 'Когда это нормально',
    helpTitle: 'Когда стоит обратиться за поддержкой',
    waLabel: 'Обсудить с терапевтом',
    backToTools: '← Все инструменты',
    waMsg: (name: string) => `Здравствуйте, Анна! Хотела бы обсудить: ${name.toLowerCase()}.`,
  },
};

export function EmotionWheel() {
  const { lang } = useLang();
  const [selected, setSelected] = useState<number | null>(null);
  const tt = T[lang];

  return (
    <>
      <PageHeader headingKey="tools" />
      <section className="py-8 px-7 pb-32">
        <div className="container-x" style={{ maxWidth: '1000px' }}>
          <Link href="/tools" className="text-sage font-semibold text-[14px] hover:underline mb-8 inline-block">
            {tt.backToTools}
          </Link>

          <div className="text-center mb-12">
            <h1 className="mb-3">{lang === 'en' ? 'Emotion Wheel' : 'Колесо эмоций'}</h1>
            <p className="text-text-muted font-light leading-[1.7] max-w-[500px] mx-auto" style={{ fontSize: '15px' }}>
              {tt.intro}
            </p>
          </div>

          <div className="grid grid-cols-2 gap-12 items-start max-md:grid-cols-1">
            {/* Wheel */}
            <div className="relative w-full mx-auto" style={{ maxWidth: '420px', aspectRatio: '1' }}>
              <div
                className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[90px] h-[90px] rounded-full bg-bg border-[1.5px] border-border flex items-center justify-center text-center font-heading text-text-muted z-[2] whitespace-pre-line"
                style={{ fontSize: '11px', lineHeight: 1.4 }}
              >
                {tt.centerPrompt}
              </div>
              {EMOTIONS.map((e, i) => {
                const angleDeg = (i / EMOTIONS.length) * 360 - 90;
                const angleRad = (angleDeg * Math.PI) / 180;
                const r = 38;
                const x = 50 + r * Math.cos(angleRad);
                const y = 50 + r * Math.sin(angleRad);
                const isSel = selected === i;
                return (
                  <button
                    key={i}
                    type="button"
                    onClick={() => setSelected(i)}
                    aria-pressed={isSel}
                    aria-label={e.n[lang]}
                    className="absolute w-[105px] h-[105px] rounded-full flex flex-col items-center justify-center gap-1 cursor-pointer border-[2.5px] transition-all duration-[400ms] ease-curve hover:z-[3]"
                    style={{
                      left: `${x}%`,
                      top: `${y}%`,
                      transform: `translate(-50%, -50%)${isSel ? ' scale(1.15)' : ''}`,
                      background: `${e.cl}33`,
                      borderColor: isSel ? e.cl : 'transparent',
                      zIndex: isSel ? 3 : 1,
                    }}
                  >
                    <span className="w-6 h-6" style={{ color: e.cl }}>{e.icon}</span>
                    <span className="font-heading font-medium text-charcoal text-center leading-[1.2]" style={{ fontSize: '10.5px' }}>
                      {e.n[lang]}
                    </span>
                  </button>
                );
              })}
            </div>

            {/* Panel */}
            <div className="md:sticky md:top-10">
              {selected === null && (
                <div className="py-20 px-5 text-center text-text-muted font-light text-[15px] border-[1.5px] border-dashed border-border rounded-card">
                  {tt.empty}
                </div>
              )}
              {selected !== null && (() => {
                const e = EMOTIONS[selected];
                return (
                  <article
                    className="rounded-card border border-border p-9 max-md:p-6 bg-white"
                    style={{ animation: 'fadeUp 0.5s cubic-bezier(0.16, 1, 0.3, 1)' }}
                  >
                    <div className="w-12 h-12 rounded-2xl flex items-center justify-center mb-5" style={{ background: `${e.cl}33`, color: e.cl }}>
                      <span className="w-[22px] h-[22px]">{e.icon}</span>
                    </div>
                    <div className="font-heading text-charcoal mb-1" style={{ fontSize: 'clamp(1.3rem, 3vw, 1.7rem)', fontWeight: 400 }}>
                      {e.n[lang]}
                    </div>
                    <span
                      className="inline-block font-bold uppercase mb-4"
                      style={{ fontSize: '11px', letterSpacing: '0.15em', padding: '4px 14px', borderRadius: '20px', color: e.cl, background: `${e.cl}1A` }}
                    >
                      {e.c[lang]}
                    </span>
                    <p className="text-text-muted font-light leading-[1.85] mb-6" style={{ fontSize: '15px' }}>{e.d[lang]}</p>

                    <div className="mb-5">
                      <h3 className="font-heading text-charcoal mb-2.5" style={{ fontSize: '13px', fontWeight: 600 }}>{tt.bodyTitle}</h3>
                      {e.b[lang].map((b, i) => (
                        <div key={i} className="flex gap-2.5 items-start py-1">
                          <span aria-hidden="true" className="w-1.5 h-1.5 rounded-full mt-[7px] flex-shrink-0" style={{ background: e.cl }} />
                          <span className="text-text leading-[1.6] font-light text-[14px]">{b}</span>
                        </div>
                      ))}
                    </div>

                    <div className="mb-5">
                      <h3 className="font-heading text-charcoal mb-2.5" style={{ fontSize: '13px', fontWeight: 600 }}>{tt.normalTitle}</h3>
                      <p className="text-text leading-[1.7] font-light text-[14px]">{e.nr[lang]}</p>
                    </div>

                    <div className="p-5 rounded-2xl mt-5" style={{ background: 'linear-gradient(135deg, var(--sage-pale), var(--rose-pale))' }}>
                      <h3 className="font-heading text-sage mb-2" style={{ fontSize: '13px', fontWeight: 600 }}>{tt.helpTitle}</h3>
                      <p className="text-text leading-[1.7] font-light text-[14px]">{e.h[lang]}</p>
                    </div>

                    <a
                      href={`${AB_CONFIG.WA_URL}?text=${encodeURIComponent(tt.waMsg(e.n[lang]))}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={tt.waLabel}
                      className="btn-wa w-full mt-5 justify-center"
                      style={{ padding: '14px', fontSize: '14px' }}
                    >
                      {tt.waLabel}
                    </a>
                  </article>
                );
              })()}
            </div>
          </div>
        </div>
      </section>
      <style jsx>{`
        @keyframes fadeUp {
          from { opacity: 0; transform: translateY(20px); }
          to { opacity: 1; transform: translateY(0); }
        }
      `}</style>
    </>
  );
}
