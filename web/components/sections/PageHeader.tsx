'use client';

import { useLang } from '@/lib/i18n/context';
import { Tag } from '@/components/ui/Tag';
import { GradLine } from '@/components/ui/GradLine';

const HEADERS = {
  about: { tag: { en: 'About Anna', ru: 'Обо мне' }, h: { en: 'Understanding emotions at every age', ru: 'Понимание эмоций в любом возрасте' } },
  services: { tag: { en: 'Services', ru: 'Услуги' }, h: { en: 'Support designed around you', ru: 'Поддержка для вас' } },
  pricing: { tag: { en: 'Pricing', ru: 'Цены' }, h: { en: 'Transparent pricing', ru: 'Прозрачные цены' } },
  how: { tag: { en: 'How It Works', ru: 'Как это работает' }, h: { en: 'From first conversation to lasting support', ru: 'От первого разговора к устойчивой поддержке' } },
  quiz: { tag: { en: 'Find Your Fit', ru: 'Подбор за 60 секунд' }, h: { en: 'Find the right approach for you', ru: 'Найдём подход для вас' } },
  contactH: { tag: { en: 'Get in Touch', ru: 'Связаться' }, h: { en: 'Your first step starts here', ru: 'Ваш первый шаг' } },
  blog: { tag: { en: 'Resources', ru: 'Ресурсы' }, h: { en: 'Articles on mental health', ru: 'Статьи о ментальном здоровье' } },
  b2b: { tag: { en: 'For Schools & Companies', ru: 'Для школ и компаний' }, h: { en: 'Wellbeing programs', ru: 'Программы well-being' } },
  trust: { tag: { en: 'Trust & Licensing', ru: 'Доверие и лицензия' }, h: { en: 'Licensed and accountable', ru: 'Лицензировано и прозрачно' } },
  online: { tag: { en: 'Online Therapy', ru: 'Онлайн-терапия' }, h: { en: 'Therapy from anywhere in the UAE', ru: 'Терапия из любой точки ОАЭ' } },
  expat: { tag: { en: 'Expat Support', ru: 'Поддержка экспатов' }, h: { en: 'Adjusting to life abroad', ru: 'Адаптация к жизни за рубежом' } },
  issues: { tag: { en: 'What I Help With', ru: 'С чем я помогаю' }, h: { en: 'Every challenge deserves the right support', ru: 'Каждый вызов заслуживает правильной поддержки' } },
  tools: { tag: { en: 'Self-Help Tools', ru: 'Инструменты' }, h: { en: 'Practical tools to start exploring', ru: 'Практические инструменты для начала' } },
  privacy: { tag: { en: 'Privacy', ru: 'Конфиденциальность' }, h: { en: 'Privacy Policy', ru: 'Политика конфиденциальности' } },
  terms: { tag: { en: 'Terms', ru: 'Условия' }, h: { en: 'Terms of Service', ru: 'Условия использования' } },
  getInTouch: { tag: { en: 'Get in Touch', ru: 'Связаться' }, h: { en: 'Your first step starts here', ru: 'Ваш первый шаг' } },
} as const;

type HeaderKey = keyof typeof HEADERS;

interface Props {
  tagKey?: HeaderKey;
  headingKey: HeaderKey;
  subtitle?: { en: string; ru: string };
}

export function PageHeader({ tagKey, headingKey, subtitle }: Props) {
  const { lang } = useLang();
  const tagSrc = tagKey ? HEADERS[tagKey] : HEADERS[headingKey];
  const head = HEADERS[headingKey];

  return (
    <section className="pt-32 pb-12 px-7 max-md:pt-24 max-md:pb-8">
      <div className="container-x text-center">
        <Tag>{tagSrc.tag[lang]}</Tag>
        <h1 className="mt-6 mb-6">{head.h[lang]}</h1>
        <GradLine center />
        {subtitle && (
          <p className="mt-7 text-text-muted font-light max-w-[640px] mx-auto" style={{ fontSize: '17px', lineHeight: 1.85 }}>
            {subtitle[lang]}
          </p>
        )}
      </div>
    </section>
  );
}
