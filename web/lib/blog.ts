// Anna Barkley — метаданные блога.
// Только лёгкая часть (карточки + SEO), без тела статей.
// Тяжёлый контент (lede / sections / closing) — в `lib/blog-content.ts` и
// импортируется только из `/blog/[slug]/page.tsx`. Так главная блога и
// sitemap не тащат тексты статей в bundle.

export interface BlogPostMeta {
  slug: string;
  cat: { en: string; ru: string };
  date: string; // ISO YYYY-MM-DD
  readingMinutes: number;
  bg: string; // CSS background для hero-карточки на /blog
  t: { en: string; ru: string };
  d: { en: string; ru: string };
  metaDesc: { en: string; ru: string };
}

// DHA Marketing Code: список запрещённых формулировок. Заменять на
// support / help / may improve / often helps / evidence-based.
export const DHA_FORBIDDEN = [
  'cure',
  'guaranteed',
  '100%',
  'permanent fix',
  'complete recovery',
] as const;

export const POSTS: BlogPostMeta[] = [
  {
    slug: 'child-anxiety',
    cat: { en: 'Children', ru: 'Дети' },
    date: '2026-05-04',
    readingMinutes: 6,
    bg: 'var(--sage-pale)',
    t: { en: 'Why Is My Child So Anxious?', ru: 'Почему мой ребёнок тревожится?' },
    d: {
      en: 'Anxiety in children often looks different than in adults — and what helps may surprise you.',
      ru: 'Тревога у детей часто выглядит иначе, чем у взрослых — и помогает не всегда то, что кажется очевидным.',
    },
    metaDesc: {
      en: 'Child anxiety in Dubai often shows as stomachaches, school refusal, or anger. A psychologist explains what helps — and what does not.',
      ru: 'Детская тревога в Дубае часто выглядит как боли в животе, отказ от школы, вспышки злости. Что помогает — и что нет.',
    },
  },
  {
    slug: 'teenager-identity',
    cat: { en: 'Teens', ru: 'Подростки' },
    date: '2026-05-04',
    readingMinutes: 7,
    bg: 'var(--rose-pale)',
    t: { en: 'The Teenage Identity Crisis', ru: 'Подростковый кризис идентичности' },
    d: {
      en: 'When is it healthy growth versus a warning sign? A practical guide for parents.',
      ru: 'Когда это здоровое взросление, а когда — повод обратиться за помощью.',
    },
    metaDesc: {
      en: 'A psychologist on adolescent identity in Dubai: how to tell normal teen change from a warning sign — and what parents can do.',
      ru: 'Психолог о подростковой идентичности в Дубае: как отличить нормальное взросление от тревожного сигнала и что может сделать родитель.',
    },
  },
  {
    slug: 'emotional-patterns',
    cat: { en: 'Adults', ru: 'Взрослые' },
    date: '2026-05-04',
    readingMinutes: 7,
    bg: 'linear-gradient(135deg, var(--sage-pale), var(--rose-pale))',
    t: { en: 'Why We Repeat Emotional Patterns', ru: 'Почему мы повторяем эмоциональные паттерны' },
    d: {
      en: 'Many adult struggles have roots in childhood — and recognising them is the first step.',
      ru: 'Корни многих взрослых трудностей — в детстве. Их распознавание — первый шаг.',
    },
    metaDesc: {
      en: 'Why intelligent adults end up in the same relationship, work, or emotional pattern again — and what shifts it. By a psychologist in Dubai.',
      ru: 'Почему умные взрослые снова и снова оказываются в одних и тех же отношениях, работе, эмоциональных паттернах — и что это сдвигает. Психолог в Дубае.',
    },
  },
  {
    slug: 'imperfect-parenting',
    cat: { en: 'Parenting', ru: 'Родительство' },
    date: '2026-05-04',
    readingMinutes: 6,
    bg: 'var(--sage-pale)',
    t: {
      en: "You Don't Have to Be a Perfect Parent",
      ru: 'Не нужно быть идеальным родителем',
    },
    d: {
      en: "What actually matters for your child's emotional development.",
      ru: 'Что на самом деле важно для эмоционального развития ребёнка.',
    },
    metaDesc: {
      en: 'A psychologist in Dubai on what really matters for a child\'s emotional development — and why "good enough" parenting outperforms perfect.',
      ru: 'Психолог в Дубае о том, что на самом деле важно для эмоционального развития ребёнка — и почему «достаточно хороший» родитель работает лучше идеального.',
    },
  },
  {
    slug: 'expat-emotions',
    cat: { en: 'Families', ru: 'Семьи' },
    date: '2026-05-04',
    readingMinutes: 7,
    bg: 'var(--rose-pale)',
    t: { en: 'Emotional Challenges of Expat Life', ru: 'Эмоциональные вызовы жизни экспата' },
    d: {
      en: 'Moving to a new country affects the whole family — including the parts you did not expect.',
      ru: 'Переезд в другую страну влияет на всю семью — включая то, чего вы не ожидали.',
    },
    metaDesc: {
      en: 'A psychologist in Dubai on the hidden emotional cost of expat life — for couples, kids, and the partner whose career did not move with them.',
      ru: 'Психолог в Дубае о скрытой эмоциональной цене жизни экспата — для пар, детей и того партнёра, чья карьера не переехала вместе с семьёй.',
    },
  },
];

export function getPostBySlug(slug: string): BlogPostMeta | undefined {
  return POSTS.find((p) => p.slug === slug);
}

export function getAllPostSlugs(): string[] {
  return POSTS.map((p) => p.slug);
}
