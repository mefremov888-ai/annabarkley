# Anna Barkley — Полный аудит + CJM + Мира + Техническая часть
**v2.0 | Апрель 2026**

---

## 1. CJM — CUSTOMER JOURNEY MAP

### 1.1 Пользователь: Мама ребёнка с тревогой (ICP B)

```
ЭТАП 1: ОСОЗНАНИЕ                    ЭТАП 2: ИССЛЕДОВАНИЕ
Google: "child anxiety Dubai"         Заходит на annabarkley.com
         ↓                                     ↓
Видит сайт в поиске (SEO)            Hero: "Поддержка детей..."
Schema.org: Psychologist               ↓
         ↓                           Листает → Pillars → "Дети"
Кликает                                ↓
                                     "Хочу узнать больше"
                                              ↓
┌─────────────────────────────────────────────────────────┐
│ ПРОБЛЕМА v1: Куда дальше?                               │
│ Нет чёткого следующего шага.                            │
│ Issues? Services? Pricing? Слишком много вариантов.     │
│                                                         │
│ РЕШЕНИЕ: CTA на Hero → Quiz (подбор за 60 сек)         │
│ + Sticky bar "Бесплатная консультация"                  │
└─────────────────────────────────────────────────────────┘
         ↓
ЭТАП 3: ВОВЛЕЧЕНИЕ
Открывает Issues → "School Anxiety"
Читает SEO-текст, симптомы ✓
         ↓
┌─────────────────────────────────────────────────────────┐
│ ПРОБЛЕМА v2: Инструменты невидимы                       │
│ Тест тревожности, дыхание, карта тела — всё существует, │
│ но НИГДЕ нет ссылок. Пользователь не знает.            │
│                                                         │
│ РЕШЕНИЕ (уже сделано):                                  │
│ ✅ Добавлена страница "Tools" в навигацию               │
│ ✅ 4 карточки инструментов с описанием и кнопками       │
│ ✅ Footer: ссылка "Tools"                               │
│                                                         │
│ РЕШЕНИЕ (нужно доделать):                               │
│ ☐ CTA "Пройди тест тревожности" на /issues/anxiety     │
│ ☐ CTA "Попробуй дыхание" на /issues/burnout            │
│ ☐ CTA "Исследуй тело с Мирой" на /issues/trauma        │
│ ☐ Banner "Попробуй бесплатно" на Home (перед CTA)      │
└─────────────────────────────────────────────────────────┘
         ↓
ЭТАП 4: ИНСТРУМЕНТЫ
Пользователь открывает Tools →
"Тест тревожности" → проходит →
Результат: "Moderate anxiety, 14/30"
         ↓
WhatsApp CTA с предзаполненным
"Набрала 14/30 на тесте, хочу обсудить"
         ↓
ЭТАП 5: КОНВЕРСИЯ
Записывается на бесплатный звонок
         ↓
Звонок 15 мин → Intake → Пакет 4 сессии
```

### 1.2 Пользователь: Выгоревший экспат (ICP A)

```
ВХОД: Instagram → сторис → ссылка на сайт
     или Google: "psychologist Dubai expat burnout"
         ↓
Hero → Листает → видит "Tools" в навигации (НОВОЕ) ✓
         ↓
Открывает "Дыхание" → 4-7-8 техника → 4 цикла
Чувствует эффект → доверие ↑↑↑
         ↓
Возвращается → "Карта тела с Мирой"
Кликает "Плечи" → Мира: "Тебе кажется, что должен справляться один?"
→ "Да, очень" → "Берёшь чужие проблемы?" → "Да"
→ Инсайт: "Гипернезависимость — часто реакция на травму"
         ↓
Эмоциональный отклик → WhatsApp → запись
```

### 1.3 Пользователь: Мама подростка (ICP C)

```
ВХОД: Google: "teen therapist Dubai Russian"
         ↓
Видит билингвальность (EN/RU toggle) → переключает на RU ✓
         ↓
Issues → "Буллинг" или "Самооценка" → читает
         ↓
┌─────────────────────────────────────────────────────────┐
│ ПРОБЛЕМА v3: Нет пути "для подростка"                   │
│ Сайт написан для родителей. Подросток не будет          │
│ читать текст "Your child may experience..."              │
│                                                         │
│ РЕШЕНИЕ: Мира как точка входа для подростков.           │
│ "Колесо эмоций" и "Карта тела" — визуальные,           │
│ интерактивные, без длинного текста.                     │
│ ☐ Добавить CTA "Покажи подростку" на issue pages       │
│ ☐ Мира говорит на "ты" — подходит для teens            │
└─────────────────────────────────────────────────────────┘
```

### 1.4 Путь к каждому инструменту (текущий vs. исправленный)

| Инструмент | Было (до) | Стало (после) |
|-----------|-----------|---------------|
| Тест тревожности | Файл существует, ноль ссылок | Nav → Tools → "Открыть". Issue pages → CTA. Home banner |
| Дыхание | Файл существует, ноль ссылок | Nav → Tools → "Открыть". Burnout/Anxiety pages → CTA |
| Колесо эмоций | Файл существует, ноль ссылок | Nav → Tools → "Открыть" |
| Карта тела (Мира) | Файл существует, ноль ссылок | Nav → Tools → "Открыть". Trauma/general → CTA. Главный USP |

---

## 2. ПОЛНЫЙ АУДИТ САЙТА

### 2.1 Что работает ✅

| # | Элемент | Статус | Детали |
|---|---------|--------|--------|
| 1 | 14 страниц | ✅ | Home, About, Services+FAQ, Issues×12, Pricing, How, Quiz, Blog, B2B, Trust, Contact, Privacy, Terms |
| 2 | Билингвизм | ✅ | Все тексты, кнопки, формы EN/RU |
| 3 | Premium-эффекты | ✅ | Cursor (lerp 0.22), parallax, tilt, transitions, counters, blobs, marquee, loader, grain |
| 4 | 4 инструмента | ✅ | Anxiety, Breathing×5, Emotions×8, Body Map+Мира |
| 5 | Навигация к инструментам | ✅ | Кнопка "Tools" в nav, mobile menu, footer. Страница с 4 карточками |
| 6 | SEO | ✅ | Schema.org, meta, sitemap в launch plan |
| 7 | Юридика UAE | ✅ | Privacy 12п PDPL, Terms 11п (telehealth+minors), Trust+DHA |
| 8 | Мобильная адаптация | ✅ | 3 брейкпоинта: 900/768/400px |
| 9 | Валютный конвертер | ✅ | AED/USD/RUB, ExchangeRate API |
| 10 | WhatsApp | ✅ | Floating + header + CTA + в инструментах |
| 11 | Cookie consent | ✅ | Баннер, localStorage |
| 12 | Lead magnet | ✅ | Email capture на главной |
| 13 | Мира как тело | ✅ | Character sheet (front view) = кликабельная карта тела |
| 14 | Диалог Миры | ✅ | 10 зон × 2 вопроса × 4 ветки = 80 путей × 2 языка |
| 15 | Подписи без эмодзи | ✅ | Frosted glass labels, чередование лево/право |
| 16 | Баг `cur` исправлен | ✅ | curEl для курсора, cur для валюты |
| 17 | Заголовок "Стоимость услуг" | ✅ | Было "Прозрачные цены" |

### 2.2 Что нужно доработать ☐

| # | Проблема | Критичность | Решение | Ответственный |
|---|---------|-------------|---------|---------------|
| 1 | Placeholder контакты | 🔴 Высокая | Заменить номер, email, адрес | Анна |
| 2 | DHA лицензия placeholder | 🔴 Высокая | Вставить реальный номер | Анна |
| 3 | Вымышленные отзывы | 🔴 Высокая | Заменить на реальные или убрать | Анна |
| 4 | Нет фото Анны | 🔴 Высокая | Фотосессия | Анна |
| 5 | Юрист не проверял | 🔴 Высокая | Ревью Privacy/Terms/Issue pages | Юрист UAE |
| 6 | CTA инструментов на Issue pages | 🟡 Средняя | Добавить баннеры | Разработчик |
| 7 | Instagram ссылка | 🟡 Средняя | Добавить в footer + header | Разработчик |
| 8 | Calendly embed | 🟡 Средняя | На /contact | Разработчик |
| 9 | GA4 | 🟡 Средняя | Подключить + 10 events | Разработчик |
| 10 | Статьи блога — только карточки | 🟢 Низкая | Написать полные тексты | Копирайтер |
| 11 | OG Image (1200×630) | 🟢 Низкая | Дизайн + загрузка | Дизайнер |
| 12 | Позиции зон на Мире | 🟡 Средняя | Fine-tune по реальному рендеру | Разработчик |

---

## 3. ПЕРСОНАЖ МИРА — СПЕЦИФИКАЦИЯ

### 3.1 Визуальный профиль

Источник: загруженный character sheet (front + back view).

- Стиль: semi-realistic digital illustration, soft painterly
- Возраст: визуально 28-32
- Волосы: каштановые, мягкий пучок, выбивающиеся пряди
- Одежда: кремовое wrap dress, рукава-фонарики, midi
- Босиком: символ заземлённости
- Палитра: идеально совпадает с сайтом (#F5E6E6 платье, #7C9A7C листья)

### 3.2 Промпты для генерации ракурсов

**Ракурс 1 — Hero (3/4, приветствие):**
Same character as reference. 3/4 view, slight smile, one hand gently raised welcoming. Soft cream wrap dress, bare feet. Warm lighting from left. Background: abstract sage and rose organic shapes. Semi-realistic digital illustration, soft painterly.

**Ракурс 2 — Thinking (для панели диалога):**
Same character. Close-up portrait, head tilted, thoughtful expression, hand near chin. Cream dress visible at shoulders. Minimal background. Semi-realistic, painterly.

**Ракурс 3 — Breathing (для дыхательного):**
Same character. Eyes closed, peaceful, hands on diaphragm. Subtle glow around her. Cream dress, bare feet. Very serene.

**Ракурс 4 — Goodbye/CTA:**
Same character. Warm smile, hands clasped, slightly bowing. Gentle. Background: sage and rose gradient.

**Ракурс 5 — Pointing:**
Same character. Full body, one hand gently gesturing toward chest area. Soft expression.

### 3.3 Tone of Voice

Формула: **наблюдение → гипотеза → приглашение**

| Параметр | Значение |
|----------|----------|
| Местоимение | "ты" |
| Ритм | Медленный, с паузами |
| Длина фразы | 8-15 слов |
| Категоричность | Нулевая |
| Маркеры | "иногда", "может быть", "похоже ли" |
| Запрещено | "у тебя проблема", "это означает", "нужно", "диагноз" |

### 3.4 UX-сценарии (реализованы в tool-body-map.html)

10 зон × 4 ветки ответов × 2 языка = **80 уникальных диалоговых путей**

Каждая зона: intro от Миры → вопрос 1 (2 варианта) → вопрос 2 (2 варианта) → глубинный инсайт (ветка aa/ab/ba/bb) → симптомы + эмоции + рекомендации → WhatsApp CTA

---

## 4. ТЕХНИЧЕСКАЯ АРХИТЕКТУРА

### 4.1 Текущий стек (прототип)

- Один HTML-файл (anna-barkley-complete.html, 130 KB)
- 4 отдельных HTML-файла инструментов
- Vanilla JS, CSS-in-HTML
- Нет бэкенда, нет БД

### 4.2 Целевой стек (Next.js)

| Компонент | Технология |
|-----------|-----------|
| Framework | Next.js 14+ App Router |
| Language | TypeScript |
| Styling | Tailwind CSS |
| Animations | Framer Motion |
| LLM (Мира) | Claude API (Sonnet) |
| Storage | Supabase |
| Hosting | Vercel |
| Analytics | GA4 |
| Forms | Resend / Formspree |
| Booking | Cal.com / Calendly |

### 4.3 Файловая структура Next.js

```
app/
├── layout.tsx
├── page.tsx ..................... Home
├── about/page.tsx
├── services/page.tsx
├── issues/
│   ├── page.tsx
│   └── [slug]/page.tsx ......... 12 dynamic pages
├── pricing/page.tsx
├── how/page.tsx
├── quiz/page.tsx
├── tools/
│   ├── page.tsx ................. Tools hub (4 cards)
│   ├── anxiety-test/page.tsx
│   ├── breathing/page.tsx
│   ├── emotions/page.tsx
│   └── body-map/page.tsx ....... Mira integrated
├── mira/
│   ├── page.tsx ................. Mira AI chat (phase 2)
│   └── profile/page.tsx ........ User state (phase 2)
├── contact/page.tsx
├── blog/page.tsx
├── b2b/page.tsx
├── trust/page.tsx
├── privacy/page.tsx
├── terms/page.tsx
├── api/
│   └── mira/route.ts ........... Claude API endpoint
├── sitemap.ts
└── robots.ts

components/
├── layout/ ...................... Header, Footer, MobileMenu, WhatsApp
├── ui/ .......................... Button, Card, Tag, GradLine, FAQ
├── effects/ ..................... Cursor, Parallax, Blobs, Transitions
├── mira/ ........................ MiraBody, MiraDialogue, MiraProfile
└── tools/ ....................... AnxietyTest, Breathing, EmotionWheel

content/
├── issues/ ...................... 12 JSON files with full texts
├── mira/scenarios/ .............. 10 JSON files per zone
└── texts.ts ..................... All UI texts EN/RU
```

### 4.4 AI-агент Миры (Phase 2)

System prompt:
```
Ты — Мира. Мягкий проводник саморефлексии.
Стиль: наблюдение → гипотеза → вопрос.
Без диагнозов, без давления, короткие фразы.
Язык: {lang}. Контекст: {userState}. Зона: {zone}.
```

Memory layer:
```json
{ "zones": ["chest","stomach"], "pattern": "suppression", "sessions": 3 }
```

### 4.5 Монетизация

| Модель | Цена | Описание |
|--------|------|----------|
| Freemium | $0 | Базовые зоны, 1 диалог/день, 2 техники дыхания |
| Подписка | $5-15/мес | Безлимит диалогов, все техники, профиль |
| Пакет | $19-39 | 15-20 сообщений, итоговый инсайт |
| Консультация | 700 AED | Лидогенерация через Миру → Анна |
| B2B | 2,000-15,000 AED/мес | Лицензия для школ/компаний |

---

## 5. ПОЛНЫЙ ПАКЕТ ФАЙЛОВ

| # | Файл | Размер | Описание |
|---|------|--------|----------|
| 1 | anna-barkley-complete.html | 130 KB | Сайт: 15 страниц (+ Tools), навигация, юридика, валюты |
| 2 | anna-barkley-tech-spec.md | 834 стр | Техспецификация каждой страницы |
| 3 | anna-barkley-launch-plan.md | 493 стр | Чек-лист + Next.js архитектура |
| 4 | mira-character-spec.md | ЭТОТ | CJM + аудит + Мира + техническая часть |
| 5 | tool-anxiety-test.html | 20 KB | Тест тревожности (10 вопросов, 3 уровня) |
| 6 | tool-breathing.html | 14 KB | Дыхание (5 уровней) |
| 7 | tool-emotion-wheel.html | 18 KB | Колесо эмоций (8, SVG иконки) |
| 8 | tool-body-map.html | 229 KB | Мира = тело, диалоги, 80 путей |
| 9 | body-map-diagram.svg | 7.6 KB | Векторная схема для печати/Instagram |

### Что изменилось в финальной версии сайта:

1. ✅ Страница "Tools" добавлена — 4 карточки с описанием и кнопками "Открыть"
2. ✅ "Tools" / "Инструменты" в навигации (desktop + mobile + footer)
3. ✅ pageMap обновлён
4. ✅ Билингвальные названия инструментов
5. ✅ Баг `cur` исправлен (curEl для курсора)
6. ✅ Заголовок "Стоимость услуг" (не "Прозрачные цены")
7. ✅ Курсор ускорен (lerp 0.22 + will-change GPU)
8. ✅ 3 брейкпоинта мобильной адаптации
9. ✅ Privacy Policy 12 пунктов (PDPL)
10. ✅ Terms 11 пунктов (telehealth + minors)
11. ✅ Trust page с DHA placeholder
12. ✅ Валютный конвертер AED/USD/RUB

---

*Этот документ — финальный пакет для передачи разработчику. Содержит CJM для 3 персон, полный аудит (17 готово / 12 доработать), спецификацию Миры, техническую архитектуру, и список всех файлов.*
