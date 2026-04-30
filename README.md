# Anna Barkley — Psychologist in Dubai

Конверсионный билингв (EN/RU) сайт частной психологической практики в Дубае.

## Цель проекта

Запись клиента на бесплатную 15-минутную консультацию через форму, WhatsApp или телефон.

- **ICP A** — взрослые экспаты 25-44 (тревога, выгорание, отношения)
- **ICP B** — родители детей 6-12 (школьная тревога, поведение)
- **ICP C** — родители подростков 13-17 (идентичность, буллинг)
- **ICP D** — корпоративные клиенты и школы (B2B wellbeing)

Цены: 700 AED/сессия, пакеты 2,600 / 4,800 / 3,200 AED.

---

## Текущее состояние (2026-04-30)

Стадия: **прототип**, идёт допиливание перед миграцией на финальный стек.

### Что готово

```
старт проекта/
├── anna-barkley-complete.html    SPA-прототип со всеми 31 страницами (137 КБ)
├── anna-barkley-tech-spec.md     Полная техспецификация (Next.js 14)
├── anna-barkley-launch-plan.md   Чеклист запуска, фазы 1-5
├── mira-character-spec.md        Спека персонажа Мира
├── tool-anxiety-test.html        Тест уровня тревожности
├── tool-body-map.html            Карта тела (с Мирой)
├── tool-breathing.html           Дыхательные техники
├── tool-burnout-test.html        Тест на выгорание (MBI)
├── tool-emotion-wheel.html       Колесо эмоций
├── tool-grounding.html           Заземление 5-4-3-2-1
└── tool-mood-diary.html          Дневник настроения
```

### Чего нет

- Реальные тексты, фото, лицензия DHA, контактные данные
- Бэкенд для форм (Formspree/Resend/EmailJS)
- Calendly интеграция
- GA4 / Search Console
- Финальный стек (Next.js / Astro / static — не выбран)
- Купленный домен `annabarkley.com`

---

## Стек

**Сейчас:** статический HTML/CSS/JS, без сборщика. Открывается в браузере напрямую.

**Финальный стек по техспеке:** Next.js 14 (App Router) + TypeScript + Tailwind + Framer Motion. Деплой Vercel.

**Альтернатива:** Astro (легче Next.js, идеален для контентного сайта).

Выбор стека отложен до завершения допиливания прототипа.

---

## Roadmap

### Фаза 0 — Допиливание прототипа

Цель: рабочий прототип без блокеров запуска. После — выбор стека и миграция.

#### ✅ Применено (коммиты `51e5802`, `<P1-commit>`)

| # | Тип | Файл | Описание |
|---|-----|------|----------|
| D1 | Bug | tool-body-map.html | Добавлен `<div id="zones">` — Мира теперь рисует зоны |
| D2 | Bug | tool-body-map.html | Удалён shell-мусор (PART3, echo) после `</html>` |
| D3 | Bug | anna-barkley-complete.html | Мобильное меню `#mm` локализуется при setLang (массив `nm` + рендер в render()) |
| D4 | Bug | tool-burnout-test.html | Добавлено `--sagem` в `:root` |
| D5 | Bug | tool-breathing.html | Добавлено `--gold` в `:root` |
| D7 | Bug | tool-mood-diary.html | localStorage в try/catch для Safari Private |
| D8 | Bug | anna-barkley-complete.html | uP() null-checks для pe.r1...pe.x2 |
| D9 | Bug | anna-barkley-complete.html | Изменён порядок: render() сначала с fallback rates, потом fetchRates+rerender |
| D10 | Bug | anna-barkley-complete.html | goTo() валидация имени роута, `console.warn` на неизвестные |
| C1 | DHA | 2 файла | Заменены DHA-нарушения: "very treatable", "highly effective", "responds very well", "meaningful improvement", "Healing means…" — на support-language. RU-аналоги тоже |
| C7 | Compliance | anna-barkley-complete.html | Cookie banner: Accept all + Reject optional, статус в localStorage, текст про процессоров (GA, Calendly, Google Fonts, WhatsApp), GA4 загружается через `loadAnalytics()` только после accept |
| C8 | A11y | anna-barkley-complete.html | Контраст --txm #8A8A80→#6E6E66 (WCAG AA); focus-visible стили; skip-link; prefers-reduced-motion обёртка; aria-hidden для декоративных слоёв; aria-label/aria-expanded/aria-controls для menu; tabindex+keyboard для logo; main role; label[for] и required на форме контакта |
| C10 | UX | anna-barkley-complete.html | Тестимониал David K. переписан с общей фразы про разные возрасты на отзыв взрослого экспата о собственной терапии (EN+RU) |
| C3 | UX (частично) | anna-barkley-complete.html | Lead magnet — рабочая `<form>` с validation, mailto fallback (или fetch к FORMS_ENDPOINT если задан) |
| C4 | UX (частично) | anna-barkley-complete.html | Contact form — рабочая `<form>` с required, autocomplete, типизированными полями, mailto fallback, success-state с aria-live |
| C6 | Compliance (частично) | anna-barkley-complete.html | Parent consent чек-бокс показывается при выборе My child/My teenager; required; готов к серверной валидации |
| A3 | Org | / | Создан `index.html` в корне (редирект + dev warning) |
| A4 | Compliance | anna-barkley-complete.html | `[TO BE INSERTED]` заменён на видимый красный CI-маркер `BLOCK_LAUNCH:DHA_LICENSE` |
| A1 | Refactor | assets/js/config.js + 8 HTML | Создан `assets/js/config.js` с WA/EMAIL/PHONE/DHA_LICENSE/HOURS/EXCHANGE_API. Подключён во все 8 HTML. Все хардкоды WA-номера заменены на `AB_CONFIG.WA_URL` |
| P2-кэш | Perf | anna-barkley-complete.html | Кэш курсов валют в localStorage с TTL 24ч |
| P2-eol | Org | / | Создан `.gitattributes` (LF EOL для текстов, binary для медиа) |
| P2-docx | Org | / | `инструкция.docx` перенесена из исходников в `docs/` |
| Telegram | Bug | anna-barkley-complete.html | Telegram-кнопка получила реальный onclick (открывает `AB_CONFIG.TELEGRAM_URL`) |

#### ⏸ Отложено и почему

| # | Тип | Причина | Что нужно от тебя |
|---|-----|---------|-------------------|
| **A2** | Org | Переезд из `старт проекта/` в корень — рискованная операция, может сломать ссылки в HTML-прототипе и `t.file`-ссылки на инструменты. Лучше делать в отдельной сессии вместе с разделением SPA на отдельные страницы (C2). | Подтверждение, что готов сделать «миграцию структуры» одним блоком |
| **C2** | SEO | SPA→MPA расщепление 14+12 страниц — это **большая работа** (несколько часов) и **архитектурное решение**: либо так, либо сразу Next.js/Astro. Делать сейчас руками = потом всё равно переделывать в Next.js. | Решение про финальный стек: **Next.js** (по техспеке) / **Astro** (легче) / **продолжить статикой с разделением на файлы** |
| **C3 / C4 (полная интеграция)** | UX | Mailto-fallback работает, но для middle-premium практики нужен полноценный transactional flow с подтверждением и хранением заявок. | API-ключ Formspree (`https://formspree.io/f/xxxx`) или Resend API key + endpoint URL — впишутся в `AB_CONFIG.FORMS_ENDPOINT` |
| **C5** | Compliance | Telehealth consent flow требует **одобренного юристом UAE текста согласия** (DHA Telehealth Standards) и решения, на каком этапе показывать — отдельный экран или чек-бокс в форме онлайн-сессии. | Текст telehealth-согласия от юриста + flow-решение (отдельный шаг или inline) |
| **C6 (продолжение)** | Compliance | Чек-бокс уже работает в UI, но юр. формулировка минимальная. Полная версия требует **согласованного текста parent consent** (UAE-специфика). | Финальный текст согласия от юриста |
| **DHA license номер** | Compliance | `BLOCK_LAUNCH:DHA_LICENSE` маркер блокирует деплой пока номер не вставлен. | Реальный DHA license number + Classification (Clinical / Counselling) |
| **Реальные контакты** | Org | WA/EMAIL/PHONE/Domain — все плейсхолдеры. | Реальные значения для замены в `assets/js/config.js` |
| **Lazy-load Mira SVG** | Perf | tool-body-map.html — 235 КБ из-за data-URI картинки Миры. Lazy-load даст ~Lighthouse +10. | — Применимо самостоятельно в следующую итерацию, не блокер |
| **Хардкод email/phone/Schema.org JSON-LD** | Refactor | В Schema.org внутри `<script type="application/ld+json">` (строка 12) старый номер. JSON не поддерживает выражения — заменим, когда придут реальные значения. | — Применимо вручную в одну строку при замене реквизитов |

### Фаза 1 — Контент и медиа (1-2 недели)

- Профессиональная фотосессия Анны (5-8 фото, WebP)
- OG-image 1200×630 для соцсетей
- Утвердить EN+RU тексты (с лингвистом для RU)
- 5 полных статей блога (500-1000 слов)
- 5-8 реальных отзывов клиентов
- Bio для Schema.org

### Фаза 2 — Тех. инфраструктура (2-3 недели)

- Купить домен `annabarkley.com`
- Решить стек (Next.js / Astro / static)
- Развернуть проект, перенести контент
- Настроить Vercel/Netlify
- Подключить Calendly + Resend/Formspree
- WhatsApp Business аккаунт

### Фаза 3 — SEO и аналитика (3-4 неделя)

- Уникальный title/description per page
- OG tags + Twitter Cards
- sitemap.xml, robots.txt
- Schema.org (LocalBusiness, Psychologist, FAQPage, MedicalCondition)
- canonical URLs + hreflang
- GA4 + Search Console
- Lighthouse > 90

### Фаза 4 — Compliance (3-4 неделя)

- Privacy Policy / Terms — финал с юристом UAE
- Cookie consent: GDPR + UAE PDPL
- Telehealth consent flow (DHA Standards)
- Parent consent для минора
- Финальный аудит формулировок (DHA Marketing Code)

### Фаза 5 — Запуск (4 неделя)

- Финальная проверка ссылок, форм, переключения языков, мобильного меню
- Скорость загрузки < 3 сек
- Бэкап
- Деплой на прод
- Тест на iOS + Android
- Beta-feedback от 3-5 человек

---

## Аудит прототипа (2026-04-30)

Результат тройного аудита — архитектор / дебаггер / критик:

- **Архитектор:** структура `старт проекта/` ломает CI/CD; SPA не подходит под 26 URL спеки; CSS дублируется в 8 файлах; реквизиты захардкожены в 11 местах.
- **Дебаггер:** 14 багов (5 P0 / 6 P1 / 3 P2). Самые опасные — отсутствующий `#zones` в Карте тела и shell-мусор после `</html>`.
- **Критик:** 6/10. Блокеры запуска — DHA-нарушения в текстах, мёртвый SEO в SPA, фейковые формы (lead magnet, contact), отсутствие telehealth consent и parent consent, нулевой a11y.

Полные отчёты — в истории git коммитов и переписке.

---

## Локальный запуск

Прототип не требует сборки. Открыть в браузере:

```
старт проекта/anna-barkley-complete.html
```

Или (после применения A3) — `index.html` в корне.

---

## Контакты-плейсхолдеры

Все нижеперечисленные значения должны быть заменены на реальные перед запуском. Поиск: `[TO BE INSERTED]`, `971551234567`, `hello@annabarkley.com`.

| Поле | Плейсхолдер |
|------|-------------|
| Email | hello@annabarkley.com |
| Phone | +971 55 123 4567 |
| WhatsApp | wa.me/971551234567 |
| Domain | annabarkley.com (не куплен) |
| Hours | Sun-Thu 9:00-18:00 |
| DHA License | `[TO BE INSERTED]` |
