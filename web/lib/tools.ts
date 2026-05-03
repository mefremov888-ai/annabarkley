export interface ToolItem {
  slug: string;
  t: { en: string; ru: string };
  d: { en: string; ru: string };
  badge: { en: string; ru: string };
  iconColor: string;
}

export const TOOLS: ToolItem[] = [
  {
    slug: 'anxiety-test',
    t: { en: 'Anxiety Self-Check', ru: 'Тест на тревожность' },
    d: { en: '10-question check-in to understand your current anxiety level.', ru: '10 вопросов, чтобы понять ваш текущий уровень тревоги.' },
    badge: { en: 'Self-check', ru: 'Самопроверка' },
    iconColor: 'var(--sage)',
  },
  {
    slug: 'burnout-test',
    t: { en: 'Burnout Self-Check', ru: 'Тест на выгорание' },
    d: { en: '12 questions across exhaustion, cynicism, and accomplishment.', ru: '12 вопросов по истощению, цинизму и достижениям.' },
    badge: { en: 'Self-check', ru: 'Самопроверка' },
    iconColor: 'var(--rose-deep)',
  },
  {
    slug: 'breathing',
    t: { en: 'Breathing Exercises', ru: 'Дыхательные техники' },
    d: { en: 'Three guided patterns to slow the body and the mind.', ru: 'Три направляемых паттерна, чтобы замедлить тело и ум.' },
    badge: { en: 'Practice', ru: 'Практика' },
    iconColor: 'var(--sage)',
  },
  {
    slug: 'grounding',
    t: { en: '5-4-3-2-1 Grounding', ru: 'Заземление 5-4-3-2-1' },
    d: { en: 'A sensory grounding technique to bring yourself back to the present.', ru: 'Сенсорная техника заземления — возвращение в настоящее.' },
    badge: { en: 'Practice', ru: 'Практика' },
    iconColor: 'var(--sage)',
  },
  {
    slug: 'emotion-wheel',
    t: { en: 'Emotion Wheel', ru: 'Колесо эмоций' },
    d: { en: "An interactive wheel to name what you're feeling.", ru: 'Интерактивное колесо для называния чувств.' },
    badge: { en: 'Reflection', ru: 'Рефлексия' },
    iconColor: 'var(--gold)',
  },
  {
    slug: 'body-map',
    t: { en: 'Body Map (with Mira)', ru: 'Карта тела (с Мирой)' },
    d: { en: 'Mira walks you through how emotions show up in different parts of the body.', ru: 'Мира проведёт вас через то, как эмоции проявляются в теле.' },
    badge: { en: 'Reflection', ru: 'Рефлексия' },
    iconColor: 'var(--rose-deep)',
  },
  {
    slug: 'mood-diary',
    t: { en: 'Mood Diary', ru: 'Дневник настроения' },
    d: { en: 'A simple daily check-in. Patterns appear after a few days.', ru: 'Простой ежедневный чек-ин. Паттерны проявляются за несколько дней.' },
    badge: { en: 'Tracking', ru: 'Отслеживание' },
    iconColor: 'var(--sage)',
  },
];

export function getTool(slug: string) {
  return TOOLS.find((t) => t.slug === slug);
}
