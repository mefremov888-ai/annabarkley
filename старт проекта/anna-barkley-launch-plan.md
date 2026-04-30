# Anna Barkley — Launch Checklist & Next.js Architecture

## Чек-лист на запуск

### Фаза 1: Контент и медиа (неделя 1-2)

#### Фотографии (критично)
- [ ] Профессиональная фотосессия Анны (5-8 фото)
  - Портрет для Hero (светлый фон, взгляд в камеру, тёплый)
  - Фото для About (за работой или в кабинете)
  - Фото кабинета (уютный, располагающий)
  - 2-3 lifestyle-фото (для блога и соцсетей)
- [ ] Обработать фото (WebP формат, оптимизация)
- [ ] Создать OG-image 1200x630px для шеринга в соцсетях

#### Тексты
- [ ] Проверить и утвердить ВСЕ тексты сайта на EN
- [ ] Проверить и утвердить ВСЕ тексты сайта на RU
- [ ] Написать 5 полных статей для блога (500-1000 слов каждая)
- [ ] Собрать 5-8 реальных отзывов клиентов (с разрешения)
- [ ] Подготовить bio для Schema.org (реальные данные)

#### Контактные данные
- [ ] Зарегистрировать email: hello@annabarkley.com
- [ ] Создать WhatsApp Business аккаунт
- [ ] Определить точный адрес кабинета в Dubai
- [ ] Установить часы работы (Sun-Thu 9-18 или другие)
- [ ] Настроить Instagram Business профиль

---

### Фаза 2: Техническая настройка (неделя 2-3)

#### Домен и хостинг
- [ ] Купить домен annabarkley.com
- [ ] Настроить Vercel (для Next.js деплоя)
- [ ] Подключить домен к Vercel
- [ ] Настроить SSL (автоматический через Vercel)

#### Проект
- [ ] Развернуть Next.js проект (структура ниже)
- [ ] Перенести весь контент из HTML в отдельные страницы
- [ ] Настроить tailwind.config.ts с цветовой палитой
- [ ] Подключить шрифты Sora + Plus Jakarta Sans
- [ ] Проверить все страницы на desktop (1440px, 1280px, 1024px)
- [ ] Проверить все страницы на mobile (375px, 390px, 414px)

#### Формы и интеграции
- [ ] Подключить Calendly (или Cal.com) для записи
- [ ] Настроить форму контакта (варианты: Formspree, Resend, SendGrid)
- [ ] Подключить WhatsApp Business API или wa.me ссылку
- [ ] Настроить автоответ на email

---

### Фаза 3: SEO и аналитика (неделя 3-4)

#### SEO
- [ ] Уникальный title и description для КАЖДОЙ страницы
- [ ] OG tags для каждой страницы
- [ ] Настроить sitemap.xml (автогенерация через next-sitemap)
- [ ] Создать robots.txt
- [ ] Добавить Schema.org разметку на каждую страницу
  - LocalBusiness на главной
  - Psychologist на About
  - FAQPage на Services и Issue-страницах
  - Service на каждой услуге
- [ ] Подключить Google Search Console
- [ ] Отправить sitemap в Google
- [ ] Настроить canonical URLs
- [ ] Проверить Core Web Vitals (Lighthouse > 90)

#### Аналитика
- [ ] Подключить Google Analytics 4 (GA4)
- [ ] Настроить события (events):
  - `contact_form_submit`
  - `whatsapp_click`
  - `quiz_complete`
  - `pricing_view`
  - `cta_click` (с указанием какой CTA)
  - `phone_click`
  - `lead_magnet_submit`
- [ ] Настроить конверсии в GA4
- [ ] Подключить Google Tag Manager (опционально)

---

### Фаза 4: Compliance (неделя 3-4)

- [ ] Политика конфиденциальности — утвердить с юристом
- [ ] Условия использования — утвердить с юристом
- [ ] Cookie consent — проверить GDPR/UAE compliance
- [ ] Consent flow для телетерапии (DHA требования)
- [ ] Проверить формулировки рекламы (DHA guidelines)
- [ ] Убрать любые "гарантии результата" из текстов

---

### Фаза 5: Запуск (неделя 4)

- [ ] Финальная проверка всех ссылок
- [ ] Проверить формы (отправка реально работает)
- [ ] Проверить WhatsApp ссылки
- [ ] Проверить переключение EN/RU
- [ ] Проверить мобильное меню
- [ ] Проверить скорость загрузки (< 3 сек)
- [ ] Сделать бэкап
- [ ] Запустить на продакшн
- [ ] Протестировать на реальном телефоне (iOS + Android)
- [ ] Отправить ссылку 3-5 людям для feedback

---

### После запуска (постоянно)

- [ ] Публиковать 1 статью в блог в неделю
- [ ] Постить в Instagram 3-5 раз в неделю
- [ ] Собирать отзывы после каждого завершённого кейса
- [ ] Мониторить Google Search Console (позиции, клики)
- [ ] Мониторить GA4 (конверсии, источники)
- [ ] Тестировать A/B: hero заголовки, CTA тексты
- [ ] Связаться с 3-5 школами для партнёрства
- [ ] Связаться с 3-5 педиатрами для referral

---

## Next.js Project Structure

```
anna-barkley/
├── app/
│   ├── layout.tsx              ← Root layout (header, footer, fonts, analytics)
│   ├── page.tsx                ← Home page (/)
│   ├── about/
│   │   └── page.tsx            ← About (/about)
│   ├── services/
│   │   └── page.tsx            ← Services (/services)
│   ├── issues/
│   │   ├── page.tsx            ← Issues index (/issues)
│   │   ├── anxiety/page.tsx         ← /issues/anxiety
│   │   ├── depression/page.tsx      ← /issues/depression
│   │   ├── burnout/page.tsx         ← /issues/burnout
│   │   ├── school-anxiety/page.tsx  ← /issues/school-anxiety
│   │   ├── self-esteem/page.tsx     ← /issues/self-esteem
│   │   ├── bullying/page.tsx        ← /issues/bullying
│   │   ├── trauma/page.tsx          ← /issues/trauma
│   │   ├── grief/page.tsx           ← /issues/grief
│   │   ├── parent-teen/page.tsx     ← /issues/parent-teen
│   │   ├── anger/page.tsx           ← /issues/anger
│   │   ├── divorce/page.tsx         ← /issues/divorce
│   │   └── expat-adjustment/page.tsx ← /issues/expat-adjustment
│   ├── pricing/
│   │   └── page.tsx            ← Pricing (/pricing)
│   ├── how/
│   │   └── page.tsx            ← How It Works (/how)
│   ├── quiz/
│   │   └── page.tsx            ← Quiz (/quiz)
│   ├── blog/
│   │   ├── page.tsx            ← Blog index (/blog)
│   │   └── [slug]/page.tsx     ← Dynamic blog post (/blog/child-anxiety)
│   ├── b2b/
│   │   └── page.tsx            ← B2B (/b2b)
│   ├── online/
│   │   └── page.tsx            ← Online therapy (/online)
│   ├── expat/
│   │   └── page.tsx            ← Expat support (/expat)
│   ├── trust/
│   │   └── page.tsx            ← Trust & licensing (/trust)
│   ├── contact/
│   │   └── page.tsx            ← Contact (/contact)
│   ├── privacy/
│   │   └── page.tsx            ← Privacy policy (/privacy)
│   ├── terms/
│   │   └── page.tsx            ← Terms of service (/terms)
│   ├── globals.css             ← Global styles + Tailwind
│   ├── sitemap.ts              ← Auto-generated sitemap
│   └── robots.ts               ← robots.txt config
│
├── components/
│   ├── layout/
│   │   ├── Header.tsx          ← Sticky header + language toggle
│   │   ├── Footer.tsx          ← Footer with all links
│   │   ├── MobileMenu.tsx      ← Full-screen mobile menu
│   │   └── WhatsAppFloat.tsx   ← Floating WA button
│   ├── ui/
│   │   ├── Button.tsx          ← Magnetic button component
│   │   ├── GlassCard.tsx       ← Glass card with 3D tilt
│   │   ├── Tag.tsx             ← Tag/badge component
│   │   ├── GradLine.tsx        ← Animated gradient line
│   │   ├── IconBox.tsx         ← Icon wrapper
│   │   ├── RevealOnScroll.tsx  ← Intersection observer reveal
│   │   ├── Counter.tsx         ← Animated counter
│   │   └── CookieBanner.tsx    ← Cookie consent
│   ├── sections/
│   │   ├── Hero.tsx            ← Hero with split text
│   │   ├── Pillars.tsx         ← Children/Teens/Adults cards
│   │   ├── Testimonials.tsx    ← Dark testimonials section
│   │   ├── CTABanner.tsx       ← Call-to-action section
│   │   ├── LeadMagnet.tsx      ← Email capture banner
│   │   ├── Marquee.tsx         ← Scrolling marquee strip
│   │   ├── PricingCards.tsx    ← Pricing grid
│   │   ├── StepsTimeline.tsx   ← How it works steps
│   │   ├── IssueGrid.tsx       ← Issues card grid
│   │   ├── FAQ.tsx             ← Accordion FAQ
│   │   └── ContactForm.tsx     ← Form with success state
│   └── effects/
│       ├── CustomCursor.tsx    ← Custom cursor (client component)
│       ├── ScrollProgress.tsx  ← Scroll progress bar
│       ├── ParallaxBG.tsx      ← Parallax background shapes
│       ├── FloatingBlobs.tsx   ← Morphing blob background
│       └── PageTransition.tsx  ← Curtain page transition
│
├── lib/
│   ├── i18n.ts                 ← All translations EN/RU
│   ├── seo.ts                  ← generateMetadata helpers
│   ├── analytics.ts            ← GA4 event tracking
│   ├── icons.tsx               ← SVG icon components
│   └── constants.ts            ← Colors, fonts, WA number, etc.
│
├── content/
│   ├── issues/                 ← Issue page content (MDX or JSON)
│   │   ├── anxiety.ts
│   │   ├── depression.ts
│   │   ├── burnout.ts
│   │   └── ... (12 files)
│   ├── blog/                   ← Blog posts (MDX)
│   │   ├── child-anxiety.mdx
│   │   ├── teen-identity.mdx
│   │   └── ... (5+ files)
│   └── services.ts             ← Services data
│
├── public/
│   ├── images/
│   │   ├── anna-portrait.webp
│   │   ├── anna-office.webp
│   │   ├── og-image.jpg        ← 1200x630 for social sharing
│   │   └── favicon.ico
│   ├── sitemap.xml             ← Auto-generated
│   └── robots.txt              ← Auto-generated
│
├── tailwind.config.ts
├── next.config.ts
├── package.json
├── tsconfig.json
└── README.md                   ← Instructions for AI agents
```

---

## Ключевые файлы

### tailwind.config.ts — Цветовая палитра

```typescript
const config = {
  theme: {
    extend: {
      colors: {
        bg: '#F7F5F2',
        'bg-deep': '#EFECE7',
        sage: { DEFAULT: '#7C9A7C', deep: '#5B7A5B', muted: '#A8BFA8', pale: '#E8EFE8' },
        rose: { DEFAULT: '#EAC7C7', deep: '#D4A9A9', pale: '#F5E6E6' },
        gold: { DEFAULT: '#C4A265', pale: '#F5EDE0' },
        charcoal: '#1A1A1A',
        text: { DEFAULT: '#3B3B3B', muted: '#8A8A80' },
      },
      fontFamily: {
        heading: ['Sora', 'system-ui', 'sans-serif'],
        body: ['Plus Jakarta Sans', 'system-ui', 'sans-serif'],
      },
    },
  },
};
```

### app/layout.tsx — Root layout

```tsx
import { Sora, Plus_Jakarta_Sans } from 'next/font/google';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import WhatsAppFloat from '@/components/layout/WhatsAppFloat';
import CookieBanner from '@/components/ui/CookieBanner';
import CustomCursor from '@/components/effects/CustomCursor';
import ScrollProgress from '@/components/effects/ScrollProgress';
import ParallaxBG from '@/components/effects/ParallaxBG';
import { Analytics } from '@/lib/analytics';

const sora = Sora({ subsets: ['latin'], variable: '--font-heading' });
const jakarta = Plus_Jakarta_Sans({ subsets: ['latin'], variable: '--font-body' });

export const metadata = {
  title: { default: 'Anna Barkley — Psychologist in Dubai', template: '%s | Anna Barkley' },
  description: 'Psychologist in Dubai supporting children, teens, and adults.',
  openGraph: { images: ['/images/og-image.jpg'] },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${sora.variable} ${jakarta.variable}`}>
      <body>
        <CustomCursor />
        <ScrollProgress />
        <ParallaxBG />
        <Header />
        <main>{children}</main>
        <Footer />
        <WhatsAppFloat />
        <CookieBanner />
        <Analytics />
      </body>
    </html>
  );
}
```

### app/issues/[slug]/page.tsx — Dynamic issue pages

```tsx
import { issues } from '@/content/issues';
import { generateMetadata as genMeta } from '@/lib/seo';

// Generates all 12 issue pages at build time
export function generateStaticParams() {
  return issues.map((issue) => ({ slug: issue.slug }));
}

export function generateMetadata({ params }) {
  const issue = issues.find((i) => i.slug === params.slug);
  return genMeta({
    title: `${issue.title} — Psychologist Dubai`,
    description: issue.metaDescription,
    path: `/issues/${issue.slug}`,
  });
}

export default function IssuePage({ params }) {
  const issue = issues.find((i) => i.slug === params.slug);
  return (
    <>
      <IssueHero issue={issue} />
      <IssueContent issue={issue} />
      <IssueSigns issue={issue} />
      <IssueCTA />
      <RelatedIssues current={issue.slug} />
      <FAQ items={issue.faq} />
    </>
  );
}
```

### lib/seo.ts — SEO helper

```typescript
export function generateMetadata({ title, description, path }) {
  const url = `https://annabarkley.com${path}`;
  return {
    title,
    description,
    alternates: { canonical: url },
    openGraph: {
      title,
      description,
      url,
      type: 'website',
      images: [{ url: '/images/og-image.jpg', width: 1200, height: 630 }],
    },
    twitter: { card: 'summary_large_image', title, description },
  };
}
```

### lib/analytics.ts — Event tracking

```typescript
export function trackEvent(name: string, params?: Record<string, string>) {
  if (typeof window !== 'undefined' && window.gtag) {
    window.gtag('event', name, params);
  }
}

// Usage:
// trackEvent('contact_form_submit', { source: 'contact_page' });
// trackEvent('whatsapp_click', { page: 'issue_anxiety' });
// trackEvent('quiz_complete', { answers: 'child,anxiety,online' });
// trackEvent('cta_click', { cta: 'hero_book_consultation' });
```

### app/sitemap.ts — Auto sitemap

```typescript
export default function sitemap() {
  const base = 'https://annabarkley.com';
  const issues = ['anxiety','depression','burnout','school-anxiety',
    'self-esteem','bullying','trauma','grief','parent-teen',
    'anger','divorce','expat-adjustment'];

  return [
    { url: base, lastModified: new Date(), priority: 1.0 },
    { url: `${base}/about`, priority: 0.8 },
    { url: `${base}/services`, priority: 0.9 },
    { url: `${base}/pricing`, priority: 0.8 },
    { url: `${base}/contact`, priority: 0.9 },
    { url: `${base}/issues`, priority: 0.9 },
    ...issues.map(slug => ({
      url: `${base}/issues/${slug}`,
      priority: 0.8,
    })),
    { url: `${base}/blog`, priority: 0.7 },
    { url: `${base}/how`, priority: 0.7 },
    { url: `${base}/quiz`, priority: 0.7 },
    { url: `${base}/online`, priority: 0.7 },
    { url: `${base}/expat`, priority: 0.7 },
    { url: `${base}/trust`, priority: 0.6 },
    { url: `${base}/b2b`, priority: 0.6 },
    { url: `${base}/privacy`, priority: 0.3 },
    { url: `${base}/terms`, priority: 0.3 },
  ];
}
```

---

## SEO-матрица: URL → Title → Description

| URL | Title (EN) | Meta Description |
|-----|------------|-----------------|
| / | Anna Barkley — Psychologist in Dubai | Psychologist in Dubai supporting children, teens, and adults through anxiety, emotions, and life transitions. Bilingual EN/RU. |
| /about | About Anna Barkley — Psychologist Dubai | Licensed psychologist with 10+ years experience. Children, teens, adults. CBT, EMDR, Play Therapy. Bilingual EN/RU. |
| /services | Therapy Services — Anna Barkley Dubai | Individual therapy for children, teens, and adults. Couples counseling, parent guidance, online sessions. Dubai. |
| /issues | Common Issues — Psychologist Dubai | Support for anxiety, depression, burnout, trauma, school stress, self-esteem, bullying, and more. Dubai. |
| /issues/anxiety | Anxiety Therapy Dubai — Anna Barkley | Specialized anxiety treatment for children, teens, and adults in Dubai. CBT, exposure therapy, mindfulness. |
| /issues/depression | Depression Therapy Dubai — Anna Barkley | Evidence-based depression treatment in Dubai. Individual therapy for all ages. |
| /issues/burnout | Burnout Therapy Dubai — Anna Barkley | Recover from burnout with a licensed psychologist in Dubai. Expat-focused support. |
| /issues/school-anxiety | School Anxiety Help Dubai — Anna Barkley | Help for children and teens struggling with school anxiety, exam stress, and social fears in Dubai. |
| /issues/self-esteem | Self-Esteem Therapy Dubai — Anna Barkley | Build confidence and overcome imposter syndrome. Therapy for children, teens, and adults. |
| /issues/bullying | Bullying Support Dubai — Anna Barkley | Recovery from bullying for children and teens. Evidence-based therapy in Dubai. |
| /issues/trauma | Trauma Therapy Dubai — EMDR — Anna Barkley | EMDR and trauma-focused CBT for children, teens, and adults in Dubai. |
| /issues/grief | Grief Counseling Dubai — Anna Barkley | Support through loss, mourning, and life changes. Compassionate therapy in Dubai. |
| /issues/parent-teen | Parent-Teen Conflict — Psychologist Dubai | Improve parent-teen communication and rebuild trust. Family therapy in Dubai. |
| /issues/anger | Anger Management Dubai — Anna Barkley | Anger management therapy for children, teens, and adults. Evidence-based approaches. |
| /issues/divorce | Divorce Support Dubai — Family Psychologist | Support for families going through divorce. Children's adjustment, co-parenting guidance. |
| /issues/expat-adjustment | Expat Therapist Dubai — Anna Barkley | Specialized support for expat families. Relocation stress, cultural adaptation. Bilingual EN/RU. |
| /pricing | Therapy Pricing Dubai — Anna Barkley | Transparent pricing for therapy sessions in Dubai. From 700 AED. Packages available. |
| /how | How Therapy Works — Anna Barkley | From free consultation to lasting change. 4 simple steps to start therapy in Dubai. |
| /quiz | Find Your Fit — Anna Barkley | Take a 60-second quiz to find the right therapy approach for you or your child. |
| /blog | Resources — Anna Barkley Psychologist | Articles on child psychology, teen mental health, parenting, and emotional well-being. |
| /online | Online Therapy Dubai — Anna Barkley | Secure online therapy sessions for children, teens, and adults. Available across UAE. |
| /expat | Expat Psychologist Dubai — Anna Barkley | Specialized support for expat families in Dubai. Bilingual EN/RU. |
| /trust | Licensed Psychologist Dubai — Anna Barkley | Licensed, regulated practice. Evidence-based approaches. Strict confidentiality. |
| /b2b | Wellbeing Programs Dubai — Schools & Companies | Wellbeing workshops for schools and corporate employee programs in Dubai. |
| /contact | Contact — Anna Barkley Psychologist Dubai | Book a free 15-minute consultation. WhatsApp, email, or in-person. Dubai. |

---

## Команды для запуска проекта

```bash
# 1. Создать проект
pnpm create next-app anna-barkley --typescript --tailwind --app --src-dir=false

# 2. Установить зависимости
cd anna-barkley
pnpm add framer-motion next-sitemap

# 3. Запустить dev-сервер
pnpm dev

# 4. Деплой на Vercel
pnpm vercel --prod
```

---

## Для AI-агента: как продолжить разработку

Этот проект подготовлен для продолжения разработки AI-агентом (Cursor / Claude Code).

**Порядок работы:**
1. Создать Next.js проект по структуре выше
2. Перенести контент из `anna-barkley-complete.html` в компоненты
3. Каждая `page.tsx` — это отдельная страница со своим `generateMetadata`
4. Компоненты в `/components/ui/` — переиспользуемые
5. Эффекты в `/components/effects/` — клиентские (`'use client'`)
6. Переводы в `/lib/i18n.ts` — один объект EN/RU
7. Контент issues в `/content/issues/` — по файлу на issue

**Принципы:**
- Server Components по умолчанию (SEO)
- `'use client'` только для интерактива (cursor, quiz, form, menu)
- Все тексты через i18n (никаких хардкодов)
- Каждая страница = отдельный URL = отдельная индексация Google
- Metadata генерируется на сервере

---

## ДЕЛЬТА v2.0

### Новые маршруты (добавить к структуре)
```
app/tools/page.tsx ............... Hub: 7 инструментов
app/tools/anxiety-test/page.tsx
app/tools/breathing/page.tsx
app/tools/emotions/page.tsx
app/tools/body-map/page.tsx ...... Мира = кликабельное тело, 80 диалогов
app/tools/burnout/page.tsx ....... 12 вопросов, 3 шкалы
app/tools/grounding/page.tsx ..... 5-4-3-2-1 сенсорная техника
app/tools/mood-diary/page.tsx .... localStorage, паттерны
app/mira/page.tsx ................ Phase 2: AI-чат (Claude API)
app/api/mira/route.ts ........... Claude API endpoint
```

### Новые компоненты
```
components/mira/MiraBody.tsx ..... Фронтальный вид Миры + зоны
components/mira/MiraDialogue.tsx . Диалоговая панель
components/tools/ToolCard.tsx .... Карточка для hub
```

### Новые ассеты
```
public/mira/front.png ........... Кроп фронтального вида (из character sheet)
public/mira/avatar.png ........... Круглый аватар для диалога
content/mira/scenarios/*.json .... 10 JSON сценариев (по зоне)
```

### Навигация обновлена
Desktop: Home | Services | Issues | Pricing | Tools | Contact
Mobile: + Tools. Footer: + Tools. Итого: 31 URL.
