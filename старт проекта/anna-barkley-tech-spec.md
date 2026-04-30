# Anna Barkley — Psychologist in Dubai
# Полная техническая спецификация сайта
**Версия:** 1.0  
**Дата:** Апрель 2026  
**Статус:** Готово к разработке

---

## 1. Общее описание проекта

### 1.1 Цель
Конверсионный, SEO-оптимизированный сайт для частной психологической практики в Дубае. Целевое действие — запись на бесплатную консультацию через форму, WhatsApp или телефон.

### 1.2 Целевая аудитория
- ICP A: Взрослые экспаты 25-44 (тревога, выгорание, отношения, адаптация)
- ICP B: Родители детей 6-12 (школьная тревога, поведение, эмоции)
- ICP C: Родители подростков 13-17 (идентичность, буллинг, самооценка)
- ICP D: Корпоративные клиенты и школы (B2B wellbeing-программы)

### 1.3 Языки
Полный билингвизм EN / RU. Переключатель в header. Все тексты, metadata, формы, кнопки — на обоих языках. Язык по умолчанию: EN.

### 1.4 Ценовое позиционирование
Middle-premium: 650-950 AED/сессия. Базовый тариф 700 AED/50 мин. Пакеты: 4 сессии 2,600 AED, 8 сессий 4,800 AED, семейный 3,200 AED.

---

## 2. Технический стек

### 2.1 Frontend
- Framework: Next.js 14+ (App Router)
- Language: TypeScript
- Styling: Tailwind CSS
- Animations: Framer Motion (для page transitions, scroll reveals)
- Package manager: pnpm

### 2.2 Деплой
- Хостинг: Vercel
- Домен: annabarkley.com
- SSL: автоматический через Vercel

### 2.3 Интеграции
- Формы: Formspree или Resend (email delivery)
- Запись: Calendly embed или Cal.com
- Аналитика: Google Analytics 4 (GA4)
- Search Console: Google Search Console
- Мессенджеры: WhatsApp Business (wa.me/номер), Telegram

### 2.4 Шрифты
- Заголовки: Sora (weight 300, 400, 500, 600)
- Текст: Plus Jakarta Sans (weight 300, 400, 500, 600)
- Загрузка: Google Fonts через next/font (оптимизация)

---

## 3. Дизайн-система

### 3.1 Цветовая палитра

| Токен | Hex | Назначение |
|-------|-----|------------|
| bg | #F7F5F2 | Основной фон |
| bg-deep | #EFECE7 | Альтернативный фон |
| sage | #7C9A7C | Основной акцент (доверие, спокойствие) |
| sage-deep | #5B7A5B | Тёмный sage (hover, active) |
| sage-muted | #A8BFA8 | Приглушённый sage (бордеры) |
| sage-pale | #E8EFE8 | Бледный sage (фоны карточек) |
| rose | #EAC7C7 | Вторичный акцент (эмоции, тепло) |
| rose-deep | #D4A9A9 | Тёмный rose |
| rose-pale | #F5E6E6 | Бледный rose |
| gold | #C4A265 | Третичный акцент (звёзды рейтинга) |
| gold-pale | #F5EDE0 | Бледный gold |
| charcoal | #1A1A1A | Заголовки, тёмные секции |
| text | #3B3B3B | Основной текст |
| text-muted | #8A8A80 | Вторичный текст |
| white | #FFFFFF | Белый |
| border | #E8E4DC | Границы |
| whatsapp | #25D366 | WhatsApp кнопки |

### 3.2 Типографика

| Элемент | Шрифт | Размер | Вес | Tracking |
|---------|-------|--------|-----|----------|
| h1 | Sora | clamp(2.6rem, 5.5vw, 4.4rem) | 300 | -0.03em |
| h2 | Sora | clamp(1.8rem, 4vw, 3rem) | 300 | -0.02em |
| h3 | Sora | clamp(1.2rem, 2.5vw, 1.6rem) | 400 | -0.01em |
| body | Plus Jakarta Sans | 16.5px | 300 | normal |
| body-small | Plus Jakarta Sans | 14px | 300 | normal |
| tag | Plus Jakarta Sans | 11px | 700 | 0.2em |
| button | Plus Jakarta Sans | 14-16px | 600 | 0.02em |
| nav | Plus Jakarta Sans | 13px | 400/600 | normal |

### 3.3 Spacing
- Секции: 140px vertical padding (100px на мобильных)
- Container: max-width 1280px, padding 0 28px
- Карточки: padding 36-40px, border-radius 24px
- Кнопки: padding 16px 34px (lg: 20px 44px), border-radius 60px
- Gap между карточками: 24px
- Gap в grid: 80px (g2), 24px (g3)

### 3.4 Эффекты и анимации

#### 3.4.1 Custom Cursor
- Круг 20px, border 1.5px solid sage, mix-blend-mode: difference
- Следует за мышью с lerp 0.12 (плавное отставание)
- Точка 5px в центре (мгновенно следует)
- На hover по интерактивным элементам: увеличивается до 60px, фон rgba(sage, 0.1)
- Скрывается на мобильных (< 768px)

#### 3.4.2 Scroll Progress Bar
- Фиксированная полоска 3px top:0
- Gradient: sage → rose → sage
- Ширина = % прокрутки страницы

#### 3.4.3 Page Transitions (Curtain)
- При навигации между страницами
- Фаза 1: тёмный слой (charcoal) выезжает снизу (500ms, cubic-bezier(.7,0,.3,1))
- Фаза 2: через 150ms sage-слой выезжает снизу (400ms)
- Переключение страницы (мгновенно, scrollTo 0)
- Фаза 3: sage уезжает вверх (400ms)
- Фаза 4: тёмный уезжает вверх (500ms)
- Общий цикл: ~800ms

#### 3.4.4 Reveal on Scroll
- Каждая секция/карточка: opacity 0, translateY(50px)
- При входе в viewport (threshold 0.08): opacity 1, transform none
- Timing: 1s cubic-bezier(0.16, 1, 0.3, 1)
- Stagger: каждый элемент + 0.05-0.12s transition-delay

#### 3.4.5 Split Text (Hero)
- Заголовок разбит на отдельные слова
- Каждое слово в overflow:hidden контейнере
- Слово выезжает снизу (translateY 110% → 0)
- Delay: 0.4s + i * 0.05s per word
- Ключевые слова ("emotions," "anxiety," / "эмоции," "тревогу") выделены цветом sage

#### 3.4.6 Magnetic Buttons
- При наведении кнопка следует за курсором на 20% расстояния
- transform: translate(deltaX * 0.2, deltaY * 0.2)
- При уходе: возврат в исходную позицию
- Transition: 0.4s cubic-bezier(0.16, 1, 0.3, 1)

#### 3.4.7 3D Tilt Cards
- При наведении карточка наклоняется за курсором
- perspective(800px) rotateY(x * 8deg) rotateX(y * -8deg) scale(1.02)
- При уходе: возврат к плоскому состоянию
- Transition: 0.5s cubic-bezier(0.16, 1, 0.3, 1)

#### 3.4.8 Parallax Background
- Фиксированный слой (position: fixed, z-index: 0)
- Элементы реагируют на scrollY:
  - 2 кольца: scale и rotate меняются пропорционально скроллу
  - 2 свечения: translate по синусоиде, масштабирование
  - 2 крестика: rotation с разной скоростью, пульсация scale
- Прозрачность всех элементов меняется от 0.05 до 0.25

#### 3.4.9 Morphing Blobs
- 2-3 больших элемента с blur(80px), opacity 0.25
- border-radius анимируется между 4 состояниями (40% 60% ... → ... → ...)
- animation: morph 25-30s ease-in-out infinite alternate

#### 3.4.10 Animated Counters
- Числа "10+", "500+", "3" в Hero
- При входе в viewport: считает от 0 до target
- Easing: easeOutQuart (1 - (1-p)^4), duration 2200ms
- Запускается один раз

#### 3.4.11 Marquee
- Бесконечная горизонтальная лента
- Содержание: "Child Psychology · Anxiety & Emotions · Teen Support · ..."
- Скорость: 35s linear infinite
- Каждый элемент с точкой-градиентом sage → rose
- Opacity элементов: 0.3

#### 3.4.12 Loader (начальный экран)
- Фон: charcoal
- Имя "Anna Barkley" — побуквенно, каждая буква translateY(110% → 0)
- Delay: 0.1s + i * 0.05s
- Линия gradient (sage → rose): scaleX(0 → 1), 1.8s
- Подзаголовок "Psychologist · Dubai": fade in через 0.7s
- Весь loader исчезает через 2.2s (opacity → 0, visibility → hidden)

#### 3.4.13 Grain Overlay
- Фиксированный слой поверх всего (z-index: 9997)
- SVG feTurbulence noise texture
- Opacity: 0.022
- pointer-events: none

---

## 4. Архитектура сайта

### 4.1 Карта страниц (26 URL)

```
/ ........................... Главная
/about ...................... Обо мне
/services ................... Услуги (6 направлений + FAQ)
/issues ..................... Проблемы (индекс, 12 карточек)
  /issues/anxiety ........... Тревожность
  /issues/depression ........ Депрессия
  /issues/burnout ........... Выгорание
  /issues/school-anxiety .... Школьная тревога
  /issues/self-esteem ....... Самооценка
  /issues/bullying .......... Буллинг
  /issues/trauma ............ Травма
  /issues/grief ............. Горевание
  /issues/parent-teen ....... Конфликт родитель-подросток
  /issues/anger ............. Управление гневом
  /issues/divorce ........... Развод
  /issues/expat-adjustment .. Адаптация экспатов
/pricing .................... Цены и пакеты
/how ........................ Как это работает (4 шага)
/quiz ....................... Квиз (подбор за 60 сек)
/blog ....................... Ресурсы / статьи
/online ..................... Онлайн-терапия
/expat ...................... Поддержка экспатов
/trust ...................... Доверие и лицензирование
/b2b ........................ Для школ и компаний
/contact .................... Контакт + форма
/privacy .................... Политика конфиденциальности
/terms ...................... Условия использования
```

### 4.2 Навигация

#### Header (desktop)
Позиция: fixed, top: 0. При скролле > 60px: blur-фон, бордер.

| Элемент | Действие |
|---------|----------|
| Logo (Anna Barkley + иконка leaf) | → / |
| Home | → / |
| Services | → /services |
| Issues | → /issues |
| Pricing | → /pricing |
| Contact | → /contact |
| [EN/RU toggle] | Переключение языка |
| WhatsApp (зелёная кнопка) | → wa.me/номер (новая вкладка) |

#### Header (mobile < 900px)
- Навигация скрыта
- Кнопка-бургер → full-screen menu
- Пункты: Home, About, Services, Issues, Pricing, Resources, B2B, Contact
- EN/RU toggle в центре внизу

#### Footer
4 колонки:
1. Logo + описание бренда
2. Navigate: Home, About, Services, Issues, Pricing, Contact, Resources, B2B
3. Services: Children, Teens, Adults, Parents, Online
4. Connect: email, телефон, город

Под колонками: © 2026 Anna Barkley | Privacy Policy | Terms of Service

#### Floating WhatsApp
- Позиция: fixed, bottom 28px, right 28px
- Круглая кнопка 60px (52px mobile)
- Фон: #25D366, тень с пульсацией
- SVG иконка WhatsApp
- Клик → wa.me/номер (новая вкладка)
- Видна на ВСЕХ страницах

---

## 5. Спецификация страниц

### 5.1 Главная (/)

#### Секция 1: Hero
- Фон: bg (#F7F5F2) + morphing blobs
- Layout: 2 колонки (текст | визуал), на mobile — 1 колонка без визуала
- Tag: "Psychologist · Dubai · Children · Teens · Adults"
- H1 (split-text animation): "Supporting children, teens, and adults through emotions, anxiety, and life transitions"
  - "emotions," и "anxiety," — выделены sage
- RU: "Поддержка детей, подростков и взрослых через эмоции, тревогу и жизненные перемены"
  - "эмоции," и "тревогу" — выделены sage
- Gradient line (80px)
- Подзаголовок: "A safe and supportive space to understand your emotions, build resilience, and feel more confident — at every stage of life."
- RU: "Безопасное пространство, чтобы понять свои эмоции, развить устойчивость и обрести уверенность — на каждом этапе жизни."
- CTA 1 (primary): "Book a Free Consultation" → /contact
- CTA 2 (outline): "How It Works" → /how
- Счётчики (animated): 10+ Years | 500+ Clients | 3 Age Groups
- Визуал (правая колонка): скруглённая карточка с gradient bg, breathing heart icon, цитата "From childhood to adulthood — emotional support that grows with you."

**SEO:**
- Title: "Anna Barkley — Psychologist in Dubai"
- Description: "Psychologist in Dubai supporting children, teens, and adults through anxiety, emotions, and life transitions. Bilingual EN/RU."

#### Секция 2: Marquee
- Бесконечная бегущая строка
- EN: "Child Psychology · Anxiety & Emotions · Teen Support · Adult Therapy · Family Guidance · Dubai · Bilingual EN / RU · Online Sessions"
- RU: "Детская психология · Тревога и эмоции · Поддержка подростков · Терапия взрослых · Семейное консультирование · Дубай · Билингвально EN / RU · Онлайн-сессии"

#### Секция 3: Pillars (3 колонки)
- Tag: "Who I Work With" / "С кем я работаю"
- H2: "Emotional support across every stage" / "Эмоциональная поддержка на каждом этапе"

| # | Заголовок EN | Заголовок RU | Описание EN | Описание RU | Фон | Иконка |
|---|-------------|-------------|-------------|-------------|-----|--------|
| 1 | Children | Дети | Helping children understand emotions, reduce anxiety, and feel safe. Through play, creativity, and gentle conversation. | Помогаю детям понять эмоции, снизить тревогу и чувствовать себя в безопасности. | sage-pale | Фигурка ребёнка |
| 2 | Teens | Подростки | Support with identity, stress, relationships, and emotional regulation during a critical stage of growth. | Поддержка в вопросах идентичности, стресса, отношений и регуляции. | rose-pale | Фигурка подростка |
| 3 | Adults | Взрослые | Anxiety, life transitions, relationships, and emotional patterns that often begin earlier in life. | Тревога, жизненные перемены, отношения и паттерны из детства. | sage-pale → rose-pale | Фигурка взрослого |

Каждая карточка: pillar component, 3D tilt, hover: translateY(-8px) scale(1.01), иконка в белом круге 84px.

#### Секция 4: Testimonials (тёмный фон)
- Фон: charcoal (#1A1A1A)
- Радиальное свечение сверху
- Tag: "Client Stories" / "Отзывы"
- H2: "A space where families feel understood" / "Пространство, где семьи чувствуют понимание"
- 3 карточки в ряд:

| # | Имя | Роль | Текст EN | Текст RU | Инициал |
|---|-----|------|----------|----------|---------|
| 1 | Layla M. / Лейла М. | Mother of two / Мама двоих детей | "Anna helped my daughter open up about her anxiety in ways I never could." | «Анна помогла моей дочери открыться о своей тревоге так, как я никогда не могла.» | L/Л |
| 2 | David K. / Давид К. | Expat professional / Экспат | "Anna connects with a 7-year-old and a 40-year-old equally well." | «Анна одинаково хорошо работает и с 7-летним, и с 40-летним.» | D/Д |
| 3 | Nadia S. / Надия С. | Teen client's parent / Мама подростка | "After one session with Anna, my teenager asked to come back." | «После одной сессии моя дочь попросила вернуться.» | N/Н |

Каждая: 5 золотых звёзд, аватар-круг с инициалом, gradient bg.

#### Секция 5: Lead Magnet
- Баннер с gradient-фоном (sage-pale → rose-pale)
- H3: "Free guide: How to recognize anxiety in your child" / "Бесплатный гид: Как распознать тревогу у ребёнка"
- Подтекст: "A practical checklist for parents — straight to your inbox." / "Практический чек-лист для родителей — на вашу почту."
- Поле email + кнопка "Get the Guide" / "Получить гид"

#### Секция 6: CTA
- Фон: gradient sage-pale → rose-pale → bg
- Sparkle SVG icon
- H2: "Sometimes one conversation can change everything" / "Иногда один разговор может изменить всё"
- Gradient line
- Подтекст: "You don't need to have everything figured out — just start." / "Не нужно иметь ответы на все вопросы — просто начните."
- 2 кнопки: "Book Your Free Call" (primary) + "Chat on WhatsApp" (green wa)

---

### 5.2 About (/about)

**SEO:**
- Title: "About Anna Barkley — Psychologist Dubai"
- Description: "Licensed psychologist with 10+ years experience. Children, teens, adults. CBT, EMDR, Play Therapy. Bilingual EN/RU."

#### Секция 1: Header
- Tag: "About Anna" / "Обо мне"
- H1: "Understanding emotions at every age" / "Понимание эмоций в любом возрасте"
- Gradient line

#### Секция 2: Bio (3 абзаца)
EN:
1. "I am a licensed psychologist based in Dubai, working with children, adolescents, and adults in international environments for over 10 years."
2. "My work is grounded in understanding how early experiences shape the way we think, feel, and relate to others."
3. "I believe every individual has the ability to grow — when they feel safe, understood, and supported."

RU:
1. "Я — психолог в Дубае, более 10 лет работающий с детьми, подростками и взрослыми в международной среде."
2. "Моя работа основана на понимании того, как ранний опыт формирует наше мышление и отношения."
3. "Я верю, что каждый способен расти — когда чувствует себя в безопасности и понятым."

Кнопка: "Trust & Licensing →" → /trust

---

### 5.3 Services (/services)

**SEO:**
- Title: "Therapy Services — Anna Barkley Dubai"
- Description: "Individual therapy for children, teens, and adults. Parent guidance, online sessions. Dubai."

#### Секция 1: Header
- Tag: "Services" / "Услуги"
- H1: "Support designed around you" / "Поддержка для вас"

#### Секция 2: 6 карточек (g3)

| # | Иконка | Заголовок EN | Заголовок RU | Описание EN | Описание RU |
|---|--------|-------------|-------------|-------------|-------------|
| 1 | Ребёнок | Children Sessions | Сессии для детей | Helping children understand emotions through play, creativity, and gentle conversation. | Помогаю детям понять эмоции через игру и мягкий диалог. |
| 2 | Подросток | Teen Support | Поддержка подростков | Identity, stress, relationships, and emotional regulation. | Идентичность, стресс, отношения и регуляция. |
| 3 | Взрослый | Adult Therapy | Терапия для взрослых | Anxiety, life transitions, relationships, and deep patterns. | Тревога, перемены, отношения и глубинные паттерны. |
| 4 | Семья | Parent Guidance | Консультации родителей | Understanding your child better. | Понять ребёнка лучше. |
| 5 | Сердце | Expat & Family Support | Поддержка экспатов | Relocation stress, cultural adaptation. | Стресс переезда, адаптация. |
| 6 | Монитор | Online Sessions | Онлайн-сессии | Same quality, from anywhere. | То же качество, из любой точки. |

Каждая: GlassCard, tilt, иконка, h3, описание, кнопка "Book Now".

#### Секция 3: FAQ (5 вопросов)

| # | Вопрос EN | Вопрос RU | Ответ EN | Ответ RU |
|---|-----------|-----------|----------|----------|
| 1 | At what age can a child start therapy? | С какого возраста можно начать терапию? | Children as young as 4-5 can benefit from play-based therapy. The approach is adapted to each age group. | Дети от 4-5 лет могут получить пользу от игровой терапии. Подход адаптируется к возрасту. |
| 2 | Do you work with parents too? | Вы работаете и с родителями? | Yes. Parent guidance is an important part of the process. I also offer individual adult therapy for parents. | Да. Консультации родителей — важная часть процесса. |
| 3 | How long does therapy usually take? | Сколько длится терапия? | Some see progress in 8-12 sessions. Others benefit from longer support. | Некоторые чувствуют прогресс за 8-12 сессий. Другим полезна более длительная работа. |
| 4 | Do you offer sessions in Russian? | Сессии на русском? | Yes, I work in both English and Russian. | Да, работаю на английском и русском. |
| 5 | Is everything confidential? | Всё конфиденциально? | Absolutely. Confidentiality is the foundation. For minors, boundaries are discussed with parents upfront. | Абсолютно. Для несовершеннолетних границы обсуждаются с родителями заранее. |

Компонент: аккордеон. Кнопка + (rotate 45° при открытии), sage-pale bg → white при открытии, max-height анимация.

---

### 5.4 Issues (/issues)

**SEO:**
- Title: "Common Issues — Psychologist Dubai"
- Description: "Support for anxiety, depression, burnout, trauma, school stress, self-esteem, bullying, and more."

#### Секция 1: Header
- Tag: "What I Help With" / "С чем я помогаю"
- H1: "Every challenge deserves the right support" / "Каждый вызов заслуживает правильной поддержки"

#### Секция 2: Issue Grid (12 карточек)

| # | Ключ | Заголовок EN | Заголовок RU | Краткое EN | Краткое RU |
|---|------|-------------|-------------|------------|------------|
| 1 | anxiety | Anxiety | Тревожность | Racing thoughts, persistent worry, panic attacks, avoidance. | Навязчивые мысли, беспокойство, панические атаки. |
| 2 | depression | Depression | Депрессия | Low mood, loss of interest, fatigue, hopelessness. | Сниженное настроение, потеря интереса, усталость. |
| 3 | burnout | Burnout | Выгорание | Emotional exhaustion, cynicism, reduced performance. | Эмоциональное истощение, цинизм. |
| 4 | school | School Anxiety | Школьная тревога | Exam stress, refusal, social fears, academic pressure. | Стресс перед экзаменами, отказ от школы. |
| 5 | self-esteem | Self-Esteem | Самооценка | Feeling "not enough," comparison, imposter syndrome. | Ощущение «я недостаточно», сравнение. |
| 6 | bullying | Bullying | Буллинг | Peer aggression, isolation, digital bullying, recovery. | Агрессия сверстников, кибербуллинг. |
| 7 | trauma | Trauma | Травма | Past experiences that still affect your present. | Прошлый опыт, влияющий на настоящее. |
| 8 | grief | Grief | Горевание | Loss, mourning, processing life changes. | Утрата, переживание потери. |
| 9 | parent-teen | Parent-Teen Conflict | Конфликт родитель — подросток | Communication breakdown, boundary struggles, trust. | Разрыв коммуникации, границы, доверие. |
| 10 | anger | Anger Management | Управление гневом | Emotional outbursts, frustration, regulation. | Вспышки, раздражительность. |
| 11 | divorce | Divorce & Separation | Развод и разделение | Family restructuring, co-parenting, adjustment. | Реструктуризация семьи, со-родительство. |
| 12 | expat | Expat Adjustment | Адаптация экспатов | Relocation stress, identity shifts, loneliness abroad. | Стресс переезда, одиночество за рубежом. |

Компонент: issue-card (flex, gap 16px, heart icon в sage-pale box, hover: translateY(-4px) + shadow).

Клик по карточке → открывает /issues/[slug] — отдельную страницу.

---

### 5.5 Отдельная Issue-страница (/issues/[slug])

Каждая из 12 страниц содержит:

1. **Кнопка "← What I Help With"** → /issues
2. **Tag**: название issue
3. **H1**: название issue
4. **Gradient line**
5. **Полный текст** (300-500 слов, 3-4 абзаца) — уникальный для каждой проблемы
6. **H3**: "Signs to look for" / "На что обратить внимание"
7. **Список симптомов** (5 пунктов, с чекмарками)
8. **2 CTA**: "Book a Free Consultation" (primary) + "Chat on WhatsApp" (green)

**SEO для каждой:**
- Title: "[Issue Name] Therapy Dubai — Anna Barkley"
- Description: уникальный на 150-160 символов
- Schema.org: FAQPage (если есть FAQ) + MedicalCondition

**Пример: /issues/anxiety**

Title: "Anxiety Therapy Dubai — Anna Barkley"
Description: "Specialized anxiety treatment for children, teens, and adults in Dubai. CBT, exposure therapy, mindfulness."

Полный текст (EN):
"Anxiety is one of the most common concerns I work with — in children, teens, and adults. It can look very different depending on age: a child might complain of stomachaches before school, a teenager might withdraw from friends, an adult might find themselves unable to sleep or concentrate.

I use cognitive behavioral therapy, exposure techniques, and mindfulness-based approaches tailored to your age and situation. Most clients notice meaningful improvement within 8-12 sessions.

You don't have to manage this alone. Anxiety responds very well to professional support."

Signs:
- Persistent worry or dread
- Physical symptoms: racing heart, tension, nausea
- Avoidance of situations or places
- Difficulty sleeping or concentrating
- Irritability or restlessness

(Аналогичный контент для каждой из 12 Issue-страниц — полные тексты приведены в HTML-прототипе anna-barkley-complete.html)

---

### 5.6 Pricing (/pricing)

**SEO:**
- Title: "Therapy Pricing Dubai — Anna Barkley"
- Description: "Transparent pricing for therapy sessions in Dubai. From 700 AED. Packages available."

#### Секция 1: Header
- Tag: "Pricing" / "Цены"
- H1: "Transparent pricing" / "Прозрачные цены"
- Подтекст: "Invest in your well-being with packages designed for lasting change." / "Пакеты для устойчивых изменений."

#### Секция 2: 4 карточки (g4)

| # | Название EN | Название RU | Цена | Per | Featured | Описание EN | Описание RU | Фичи EN | Фичи RU |
|---|-----------|-----------|------|-----|----------|-------------|-------------|---------|---------|
| 1 | Single Session | Разовая сессия | 700 | /session | Нет | 50-minute session. For getting started. | 50 минут. Для начала. | Adults/teens/children, In-person or online, Session notes | Взрослые/подростки/дети, Очно или онлайн, Заметки включены |
| 2 | 4-Session Intensive | Пакет 4 сессии | 2,600 | /package | ДА | Monthly intensive. Save 200 AED. | Интенсив. Экономия 200 AED. | Weekly 4 weeks, Progress tracking, Between-session support, Flexible rescheduling | Еженедельно 4 недели, Отслеживание прогресса, Поддержка между сессиями, Гибкий перенос |
| 3 | 8-Session Program | Пакет 8 сессий | 4,800 | /package | Нет | Deep transformation. Save 800 AED. | Глубокая работа. Экономия 800 AED. | 10-week program, Comprehensive assessment, Detailed report, Priority scheduling | Программа 10 недель, Полная оценка, Детальный отчёт, Приоритет расписания |
| 4 | Family Package | Семейный | 3,200 | /package | Нет | Parent + child combined. | Родитель + ребёнок. | 4 individual + 1 family, Coordinated approach, Parent guidance, Flexible combination | 4 индив. + 1 семейная, Координированный подход, Консультация родителей, Гибкая комбинация |

Featured карточка (#2): border sage, gradient bg sage-pale → white, цветная полоска сверху (sage → rose, 4px).

Каждая: price-amt (шрифт heading, 300 weight), список фич с чекмарками, кнопка "Book Now".

---

### 5.7 How It Works (/how)

**SEO:**
- Title: "How Therapy Works — Anna Barkley"
- Description: "From free consultation to lasting change. 4 simple steps to start therapy in Dubai."

#### Timeline (4 шага)
Вертикальная линия слева (gradient sage → rose-pale). Точка sage на каждом шаге.

| # | Заголовок EN | Заголовок RU | Описание EN | Описание RU |
|---|-------------|-------------|-------------|-------------|
| 1 | Free 15-min call | Бесплатный звонок 15 мин | We discuss your situation, answer questions, and check if we're a good fit. No pressure. | Обсудим ситуацию. Без давления. |
| 2 | Intake session | Первичная сессия | Deeper exploration of your story, strengths, and goals. Together we build a personalized plan. | Глубже изучаем историю и цели. Строим план. |
| 3 | Regular sessions | Регулярные сессии | Weekly or biweekly, tailored to you. CBT, play therapy, EMDR — whatever works best. | Еженедельно или раз в 2 недели. КПТ, игровая, EMDR. |
| 4 | Measurable progress | Измеримый прогресс | Regular check-ins on goals. You'll feel the difference, and we'll track it together. | Регулярные проверки. Вы почувствуете разницу. |

CTA внизу: кнопка → /quiz

---

### 5.8 Quiz (/quiz)

**SEO:**
- Title: "Find Your Fit — Anna Barkley"
- Description: "Take a 60-second quiz to find the right therapy approach for you or your child."

#### Интерактивный квиз (3 шага)
Progress bar: 3 точки (sage при активации).

**Шаг 1:**
- Вопрос: "Who is this for?" / "Для кого?"
- Варианты: My child (under 12) | My teenager (13-17) | Myself (adult) | Our family

**Шаг 2:**
- Вопрос: "Main concern?" / "Основной запрос?"
- Варианты: Anxiety or worry | Low mood | Relationships | Life transition | Not sure yet

**Шаг 3:**
- Вопрос: "Preferred format?" / "Формат?"
- Варианты: In-person in Dubai | Online video | Either works

**Результат:**
- Иконка чекмарка
- H3: "Based on your answers, here's what I recommend:" / "Рекомендация на основе ваших ответов:"
- Выбранные ответы в цепочке: "Child → Anxiety → Online"
- 2 кнопки: "Book Your Free Call" + "Chat on WhatsApp"

Компонент: quiz-opt (кнопки на всю ширину, hover: translateX(4px) + sage border).

---

### 5.9 Blog (/blog)

**SEO:**
- Title: "Resources — Anna Barkley Psychologist"
- Description: "Articles on child psychology, teen mental health, parenting, and emotional well-being."

5 карточек (g3):

| # | Заголовок EN | Заголовок RU | Описание EN | Описание RU | Категория EN | Категория RU | Цвет фона |
|---|-------------|-------------|-------------|-------------|-------------|-------------|-----------|
| 1 | Why Is My Child So Anxious? | Почему мой ребёнок тревожится? | Anxiety in children often looks different... | Тревога у детей выглядит иначе... | Children | Дети | sage-pale |
| 2 | The Teenage Identity Crisis | Подростковый кризис идентичности | When is it healthy growth vs. a warning sign? | Когда это нормальное развитие, а когда нужна помощь? | Teens | Подростки | rose-pale |
| 3 | Why We Repeat Emotional Patterns | Почему мы повторяем паттерны | Many adult struggles have roots in childhood. | Корни взрослых проблем часто в детстве. | Adults | Взрослые | sage-pale → rose-pale |
| 4 | You Don't Have to Be a Perfect Parent | Не нужно быть идеальным родителем | What actually matters for emotional development. | Что важно для эмоционального развития. | Parenting | Родители | sage-pale |
| 5 | Emotional Challenges of Expat Life | Эмоции экспата | Moving to a new country affects the whole family. | Переезд влияет на всю семью. | Families | Семьи | rose-pale |

Компонент: blog-card (border, цветная шапка 160px с иконкой, tag, h3, описание, "Read article →").

---

### 5.10 B2B (/b2b)

**SEO:**
- Title: "Wellbeing Programs Dubai — Schools & Companies"
- Description: "Wellbeing workshops for schools and corporate employee programs in Dubai."

2 карточки в ряд:

**For Schools / Для школ:**
- Описание: Wellbeing workshops for parents and teachers. Screening slots for students. Referral pathways. Monthly "wellbeing office hours."
- Фичи: 60-min parent workshop, Student screening slots, Referral pathway setup, Monthly retainer available
- CTA: Book Now → /contact

**For Companies / Для компаний:**
- Описание: Employee wellbeing programs. Burnout prevention workshops. Confidential 1:1 sessions. Monthly aggregate reporting. Pilot 30 days.
- Фичи: 45-60 min manager workshop, Confidential sessions, Monthly aggregate report, 30-day pilot program
- CTA: Book Now → /contact

---

### 5.11 Contact (/contact)

**SEO:**
- Title: "Contact — Anna Barkley Psychologist Dubai"
- Description: "Book a free 15-minute consultation. WhatsApp, email, or in-person. Dubai."

#### Форма
Поля (2 колонки):
- Full Name / Имя (text, required)
- Email (email, required)
- Phone / WhatsApp (tel, optional)
- Who is this for? / Для кого? (select: My child / My teenager / Myself / Our family)
- What brings you here? / Что привело вас? (textarea, 5 rows)

Кнопка: "Send Message" / "Отправить" (primary, full width)

**Состояние после отправки (success):**
Форма заменяется на:
- Иконка: зелёная галочка в круге
- H3: "Thank you for reaching out" / "Спасибо за обращение"
- Текст: "I'll respond within 24 hours. For urgent matters, message me on WhatsApp." / "Отвечу в течение 24 часов."
- Кнопка: "Chat on WhatsApp" (green)

Под формой: 2 кнопки в ряд — "WhatsApp" (green, → wa.me) + "Telegram" (outline)

---

### 5.12 Trust (/trust)

**SEO:**
- Title: "Licensed Psychologist Dubai — Anna Barkley"
- Description: "Licensed, regulated practice. Evidence-based approaches. Strict confidentiality."

6 пунктов с чекмарками:
1. Licensed and regulated practice / Лицензированная практика
2. Evidence-based: CBT, EMDR, Play Therapy / Доказательные подходы
3. Strict confidentiality policy / Строгая конфиденциальность
4. Encrypted, secure communication / Зашифрованная связь
5. Bilingual EN/RU sessions / Билингвально
6. 10+ years international experience / 10+ лет опыта

---

### 5.13 Privacy (/privacy) и Terms (/terms)

Статические текстовые страницы. Не индексируются как высокоприоритетные (priority 0.3 в sitemap).

**Privacy Policy** содержит: Data we collect, How we use it, Data protection, Your rights, Cookies.

**Terms of Service** содержит: Services description, Cancellation (24h), Confidentiality, Payments, Limitation.

---

### 5.14 Online (/online) и Expat (/expat)

SEO-лендинги под high-intent запросы:
- "online therapy dubai" → /online
- "expat therapist dubai" → /expat

Каждая: header + 2 абзаца + CTA кнопка.

---

## 6. Компонентная библиотека

### 6.1 Layout Components

| Компонент | Файл | Тип | Описание |
|-----------|------|-----|----------|
| Header | Header.tsx | Client | Sticky header, blur on scroll, nav, lang toggle, WA button |
| Footer | Footer.tsx | Server | 4-column footer, links, legal |
| MobileMenu | MobileMenu.tsx | Client | Full-screen overlay menu |
| WhatsAppFloat | WhatsAppFloat.tsx | Client | Fixed green circle, bottom-right |

### 6.2 UI Components

| Компонент | Файл | Props | Описание |
|-----------|------|-------|----------|
| Button | Button.tsx | variant (primary/outline/wa), size (default/lg), magnetic | Кнопка с magnetic effect, radial gradient on hover |
| GlassCard | GlassCard.tsx | tilt, children | Backdrop-blur card, 3D tilt on hover |
| Tag | Tag.tsx | variant (default/dark), children | Uppercase badge |
| GradLine | GradLine.tsx | width, center | Animated gradient line |
| IconBox | IconBox.tsx | icon, size | Gradient bg icon wrapper |
| RevealOnScroll | RevealOnScroll.tsx | delay, direction | IntersectionObserver wrapper |
| Counter | Counter.tsx | target, suffix | Animated number counter |
| CookieBanner | CookieBanner.tsx | — | Cookie consent, localStorage |
| FAQ | FAQ.tsx | items | Accordion with animation |

### 6.3 Section Components

| Компонент | Файл | Где используется |
|-----------|------|-----------------|
| Hero | Hero.tsx | Home |
| Pillars | Pillars.tsx | Home |
| Testimonials | Testimonials.tsx | Home |
| CTABanner | CTABanner.tsx | Home, issue pages |
| LeadMagnet | LeadMagnet.tsx | Home |
| Marquee | Marquee.tsx | Home |
| PricingCards | PricingCards.tsx | Pricing |
| StepsTimeline | StepsTimeline.tsx | How |
| IssueGrid | IssueGrid.tsx | Issues index |
| ContactForm | ContactForm.tsx | Contact |
| Quiz | Quiz.tsx | Quiz |

### 6.4 Effect Components (Client-only)

| Компонент | Файл | Описание |
|-----------|------|----------|
| CustomCursor | CustomCursor.tsx | Circle + dot cursor, hover state |
| ScrollProgress | ScrollProgress.tsx | Top progress bar |
| ParallaxBG | ParallaxBG.tsx | Fixed parallax shapes |
| FloatingBlobs | FloatingBlobs.tsx | Morphing blobs |
| PageTransition | PageTransition.tsx | Curtain transition |
| SplitText | SplitText.tsx | Word-by-word reveal |

---

## 7. SEO Specification

### 7.1 Metadata (per page)
Каждая page.tsx экспортирует generateMetadata() возвращающий:
- title (уникальный, с template "... | Anna Barkley")
- description (уникальный, 150-160 символов)
- canonical URL
- openGraph: title, description, url, type, images
- twitter: card (summary_large_image), title, description

### 7.2 Schema.org (JSON-LD)

**На главной:**
```json
{
  "@type": "LocalBusiness",
  "name": "Anna Barkley — Psychologist",
  "telephone": "+971551234567",
  "address": { "addressLocality": "Dubai", "addressCountry": "AE" },
  "priceRange": "700-950 AED",
  "openingHours": "Su-Th 09:00-18:00"
}
```

**На About:**
```json
{ "@type": "Psychologist", "name": "Anna Barkley", "knowsLanguage": ["en","ru"] }
```

**На Services и Issue-страницах:**
```json
{ "@type": "FAQPage", "mainEntity": [...] }
```

### 7.3 Sitemap
Auto-generated через app/sitemap.ts. 26 URL с приоритетами 0.3-1.0.

### 7.4 robots.txt
```
User-agent: *
Allow: /
Sitemap: https://annabarkley.com/sitemap.xml
```

### 7.5 Internal Linking
- Каждая Issue-страница ссылается на /contact и /pricing
- Services ссылается на Issues
- How It Works ссылается на /quiz
- About ссылается на /trust
- Blog-статьи ссылаются на релевантные Issues

---

## 8. Analytics Events (GA4)

| Event | Trigger | Parameters |
|-------|---------|-----------|
| contact_form_submit | Отправка формы на /contact | source: page |
| whatsapp_click | Клик по любой WA кнопке | page, position (header/float/cta) |
| quiz_complete | Финиш квиза | answers (строка) |
| pricing_view | Открытие /pricing | — |
| cta_click | Клик по любой CTA кнопке | cta_id, page |
| phone_click | Клик по номеру телефона | page |
| lead_magnet_submit | Отправка email на lead magnet | — |
| issue_page_view | Открытие issue-страницы | issue_slug |
| lang_switch | Переключение языка | from, to |
| blog_article_click | Клик по статье блога | article_slug |

---

## 9. Compliance

### 9.1 Cookie Consent
- Баннер появляется через 3 сек после загрузки
- Текст: "We use cookies to improve your experience..."
- Кнопка "Accept" сохраняет в localStorage
- Не показывается повторно после принятия
- Меняет язык при переключении EN/RU

### 9.2 Медицинская реклама (DHA)
- Никаких гарантий результата в текстах
- Нет слов "cure", "guaranteed", "100%"
- Формулировки: "support", "help", "may improve"
- Соответствие DHA guidelines по мед-рекламе в соцсетях

### 9.3 Телехелс (DHA Standards)
- Consent flow перед онлайн-сессиями
- Логирование согласий (opt-in)
- Secure/encrypted communication

### 9.4 PDPL (UAE Data Protection)
- Минимизация собираемых данных
- Шифрование клинических данных
- DPA с подрядчиками
- Data retention policy

---

## 10. Контактные данные (заменить на реальные)

| Поле | Значение (placeholder) |
|------|----------------------|
| Имя | Anna Barkley |
| Email | hello@annabarkley.com |
| Телефон | +971 55 123 4567 |
| WhatsApp | wa.me/971551234567 |
| Город | Dubai, UAE |
| Instagram | @annabarkley |
| Домен | annabarkley.com |
| Часы работы | Sun-Thu 9:00-18:00, Sat by appointment |

---

## 11. Файлы-исходники

| Файл | Назначение |
|------|-----------|
| anna-barkley-complete.html | Рабочий HTML-прототип со всеми страницами, текстами, эффектами |
| anna-barkley-launch-plan.md | Чек-лист запуска + Next.js структура |
| Данный документ | Полная техническая спецификация |

Все тексты EN и RU, все анимации, все компоненты полностью описаны в HTML-прототипе и готовы к переносу в Next.js.

---

*Документ подготовлен как полная техническая спецификация для передачи разработчику или AI-агенту.*

---

## 12. ДЕЛЬТА v2.0 — Все изменения после v1.0

### 12.1 Новая страница: Tools (/tools)
Добавлена в навигацию (desktop + mobile + footer). 7 карточек инструментов в сетке 2 колонки. Каждая: иконка, тег, описание, кнопка "Открыть". Билингвально.

### 12.2 Три новых инструмента
- tool-burnout-test.html — 12 вопросов, 3 шкалы (истощение/деперсонализация/достижения), bar chart результат
- tool-grounding.html — 5-4-3-2-1 сенсорная техника, пользователь вводит ответы, прогресс по 5 чувствам
- tool-mood-diary.html — ежедневный трекер настроения, localStorage, неделя, автопаттерн после 3 записей

### 12.3 Персонаж Мира
Интегрирована в tool-body-map.html. Её фронтальный вид = кликабельная карта тела. 10 зон, диалоговая система: intro → вопрос 1 → вопрос 2 → инсайт (4 ветки). 80 уникальных путей × 2 языка. Подробно: mira-character-spec.md.

### 12.4 Валютный конвертер на /pricing
AED/USD/RUB. Курс из ExchangeRate API. Fallback rates.

### 12.5 Юридика обновлена
Privacy Policy: 12 пунктов (PDPL). Terms: 11 пунктов (telehealth + minors). Trust: DHA license placeholder + compliance block.

### 12.6 Мобильная адаптация
3 брейкпоинта: 900px (tablet), 768px (phone), 400px (small phone).

### 12.7 Исправления
Баг cur → curEl. Pricing title → "Стоимость услуг". Cursor lerp 0.12 → 0.22.

### 12.8 Обновлённая карта: 31 URL (было 26)
Добавлены: /tools, /tools/anxiety-test, /tools/breathing, /tools/emotions, /tools/body-map, /tools/burnout, /tools/grounding, /tools/mood-diary, /mira (Phase 2), /mira/profile (Phase 2).

### 12.9 Инструкция для AI-агента
Читать файлы в порядке: (1) tech-spec + дельта v2 → структура, (2) launch-plan → Next.js архитектура, (3) mira-character-spec → Мира + CJM + бизнес, (4) anna-barkley-complete.html → все тексты и логика, (5) tool-*.html → перенести в React. Все тексты EN/RU есть в HTML-прототипе.
