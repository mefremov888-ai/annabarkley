'use client';

import { useEffect, useRef, useState } from 'react';
import Link from 'next/link';
import { useLang } from '@/lib/i18n/context';
import { PageHeader } from '@/components/sections/PageHeader';

interface Pattern {
  name: { en: string; ru: string };
  desc: { en: string; ru: string };
  pattern: string; // "4-4" / "4-4-4-4" / "4-7-8"
  steps: { phase: 'inhale' | 'hold' | 'exhale'; duration: number }[];
}

const PATTERNS: Pattern[] = [
  {
    name: { en: 'Simple Calm', ru: 'Простое спокойствие' },
    desc: { en: 'Easy start, no hold', ru: 'Лёгкий старт, без задержки' },
    pattern: '4 – 4',
    steps: [
      { phase: 'inhale', duration: 4 },
      { phase: 'exhale', duration: 4 },
    ],
  },
  {
    name: { en: 'Square Breathing', ru: 'Квадратное дыхание' },
    desc: { en: 'Equal rhythm all sides', ru: 'Равный ритм со всех сторон' },
    pattern: '4 – 4 – 4 – 4',
    steps: [
      { phase: 'inhale', duration: 4 },
      { phase: 'hold', duration: 4 },
      { phase: 'exhale', duration: 4 },
      { phase: 'hold', duration: 4 },
    ],
  },
  {
    name: { en: '4-7-8 Classic', ru: '4-7-8 классика' },
    desc: { en: 'Calming pattern', ru: 'Успокаивающий паттерн' },
    pattern: '4 – 7 – 8',
    steps: [
      { phase: 'inhale', duration: 4 },
      { phase: 'hold', duration: 7 },
      { phase: 'exhale', duration: 8 },
    ],
  },
];

const PHASE_LABELS = {
  en: { inhale: 'Breathe In', hold: 'Hold', exhale: 'Breathe Out' },
  ru: { inhale: 'Вдох', hold: 'Задержка', exhale: 'Выдох' },
};

export default function BreathingPage() {
  const { lang } = useLang();
  const [patternIdx, setPatternIdx] = useState(0);
  const [running, setRunning] = useState(false);
  const [phase, setPhase] = useState<'idle' | 'inhale' | 'hold' | 'exhale'>('idle');
  const [count, setCount] = useState(0);
  const [cycle, setCycle] = useState(0);
  const timerRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  const current = PATTERNS[patternIdx];

  useEffect(() => () => { if (timerRef.current) clearTimeout(timerRef.current); }, []);

  const stop = () => {
    setRunning(false);
    setPhase('idle');
    setCount(0);
    setCycle(0);
    if (timerRef.current) clearTimeout(timerRef.current);
  };

  const start = () => {
    stop();
    setRunning(true);
    runStep(0, 0);
  };

  const runStep = (stepIdx: number, cyc: number) => {
    const steps = current.steps;
    const step = steps[stepIdx];
    setPhase(step.phase);
    setCount(step.duration);
    setCycle(cyc + 1);

    let remaining = step.duration;
    const tick = () => {
      remaining -= 1;
      if (remaining <= 0) {
        const nextStep = (stepIdx + 1) % steps.length;
        const nextCycle = nextStep === 0 ? cyc + 1 : cyc;
        if (nextCycle >= 5) {
          setRunning(false);
          setPhase('idle');
          setCount(0);
          return;
        }
        runStep(nextStep, nextCycle);
      } else {
        setCount(remaining);
        timerRef.current = setTimeout(tick, 1000);
      }
    };
    timerRef.current = setTimeout(tick, 1000);
  };

  return (
    <>
      <PageHeader headingKey="tools" />
      <section className="py-8 px-7 pb-32">
        <div className="container-x text-center" style={{ maxWidth: '520px' }}>
          <Link href="/tools" className="text-sage font-semibold text-[14px] hover:underline mb-8 inline-block">
            {lang === 'en' ? '← All tools' : '← Все инструменты'}
          </Link>

          <div className="flex flex-col gap-2 mb-8">
            {PATTERNS.map((p, i) => (
              <button
                key={p.pattern}
                type="button"
                onClick={() => { setPatternIdx(i); stop(); }}
                disabled={running}
                aria-pressed={i === patternIdx}
                className={[
                  'flex items-center gap-3 px-5 py-4 rounded-2xl border-[1.5px] text-left transition-all duration-300',
                  i === patternIdx ? 'border-sage bg-sage-pale' : 'border-border bg-white hover:border-sage-muted',
                  running ? 'opacity-50 cursor-not-allowed' : 'cursor-pointer',
                ].join(' ')}
              >
                <div className="flex-1">
                  <div className="font-heading text-[14px] font-medium text-charcoal">{p.name[lang]}</div>
                  <div className="text-text-muted text-[12px] font-light">{p.desc[lang]}</div>
                </div>
                <div className="font-heading text-sage text-[13px] font-medium">{p.pattern}</div>
              </button>
            ))}
          </div>

          <div className="relative w-[260px] h-[260px] mx-auto mb-8">
            <div className="absolute inset-0 rounded-full border-2 border-border" />
            <div
              aria-hidden="true"
              className="absolute inset-5 rounded-full flex items-center justify-center flex-col transition-transform duration-1000"
              style={{
                background:
                  phase === 'idle'
                    ? 'linear-gradient(135deg, rgba(124,154,124,0.1), rgba(234,199,199,0.1))'
                    : phase === 'inhale'
                    ? 'linear-gradient(135deg, rgba(124,154,124,0.22), rgba(234,199,199,0.15))'
                    : phase === 'hold'
                    ? 'linear-gradient(135deg, rgba(124,154,124,0.28), rgba(234,199,199,0.22))'
                    : 'linear-gradient(135deg, rgba(124,154,124,0.06), rgba(234,199,199,0.06))',
                transform:
                  phase === 'idle' ? 'scale(0.82)' : phase === 'exhale' ? 'scale(0.68)' : 'scale(1)',
              }}
            >
              <div className="font-heading text-charcoal" style={{ fontSize: 'clamp(16px, 3.5vw, 22px)', fontWeight: 300 }}>
                {phase === 'idle' ? (lang === 'en' ? 'Ready' : 'Готовы') : PHASE_LABELS[lang][phase]}
              </div>
              {running && count > 0 && (
                <div className="font-heading text-sage" style={{ fontSize: '44px', fontWeight: 200, marginTop: 2, lineHeight: 1 }}>
                  {count}
                </div>
              )}
            </div>
          </div>

          {running && cycle > 0 && (
            <div className="text-text-muted font-light text-[12px] mb-6">
              {lang === 'en' ? 'Cycle' : 'Цикл'} {cycle} {lang === 'en' ? 'of' : 'из'} 5
            </div>
          )}

          <button type="button" onClick={running ? stop : start} className={running ? 'btn-outline' : 'btn-primary'}>
            {running ? (lang === 'en' ? 'Stop' : 'Остановить') : (lang === 'en' ? 'Start' : 'Начать')}
          </button>

          <p className="text-text-muted text-[13px] font-light leading-[1.6] mt-8 p-4 rounded-2xl bg-black/[.02]">
            {lang === 'en'
              ? 'Find a comfortable position. You can close your eyes or soften your gaze.'
              : 'Найдите удобное положение. Можно закрыть глаза или расфокусировать взгляд.'}
          </p>
        </div>
      </section>
    </>
  );
}
