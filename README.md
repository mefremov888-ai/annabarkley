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

### Фаза 0 — Допиливание прототипа (сейчас)

Цель: рабочий прототип без блокеров запуска. После — выбор стека и миграция.

#### P0 — Срочные фиксы (применяются в этой итерации)

| # | Тип | Файл | Описание |
|---|-----|------|----------|
| D1 | Bug | tool-body-map.html | Добавить `<div id="zones">` — без него Мира не отрисовывает зоны |
| D2 | Bug | tool-body-map.html | Удалить shell-мусор после `</html>` |
| D3 | Bug | anna-barkley-complete.html | Локализовать мобильное меню `#mm` при `setLang()` |
| D4 | Bug | tool-burnout-test.html | Добавить `--sagem` в `:root` |
| D5 | Bug | tool-breathing.html | Добавить `--gold` в `:root` |
| C1 | DHA | anna-barkley-complete.html, tool-anxiety-test.html | Заменить нарушающие формулировки ("very treatable", "highly effective", "responds very well", "meaningful improvement", "treatment", "Healing means…") |
| A3 | Org | / | Создать `index.html` в корне с редиректом на прототип |
| A4 | Compliance | anna-barkley-complete.html | Заменить `[TO BE INSERTED]` на видимые HTML-маркеры с CI-стопом |

#### P1 — Перед запуском (следующие итерации)

| # | Тип | Описание | Усилие |
|---|-----|----------|--------|
| A1 | Refactor | Вынести WA/EMAIL/PHONE/DHA_LICENSE в `assets/js/config.js`, общий для всех 8 HTML | M |
| A2 | Org | Перенести проект из `старт проекта/` в корень репо (кириллица + пробел ломает CI) | M |
| C2 | SEO | SPA→MPA: расщепить `anna-barkley-complete.html` на 14 отдельных HTML-страниц + 12 issue-страниц для SEO | L |
| C3 | UX | Подключить Lead Magnet к Resend/Formspree, добавить валидацию | S |
| C4 | UX | Подключить Contact Form к бэкенду, валидация, required, success/error states | S |
| C5 | Compliance | Telehealth consent flow перед записью на онлайн-сессию (DHA Telehealth Standards) | M |
| C6 | Compliance | Parent consent чек-бокс при выборе "My child"/"My teenager" | S |
| C7 | Compliance | Cookie banner: добавить Reject + Settings, блокировать GA4 до consent, перечислить процессоров (Calendly, GA4, Google Fonts, WhatsApp, Resend) в Privacy | M |
| C8 | A11y | aria-label на иконочные кнопки, focus-visible для tab-навигации, контраст text-muted #8A8A80 → #6E6E66, prefers-reduced-motion обёртка над анимациями, label[for] на формах, lang="" обновлять при setLang | M |
| C10 | UX | Hero для ICP A: альтернативный subheadline для взрослых экспатов или Smart Hero, тестимониал от взрослого |  S |
| D6 | Bug | submitForm: реальный POST на бэкенд | S |
| D7 | Bug | tool-mood-diary.html: localStorage в try/catch для Safari Private | XS |
| D8 | Bug | uP() null-checks для pe.r1...pe.x2 | XS |
| D9 | Bug | render() вызывается дважды на load — оставить один вызов | XS |
| D10 | Bug | goTo() валидация имени роута | XS |

#### P2 — Бэклог (после запуска)

- Legal в отдельные HTML с двумя `<div lang="">`
- Lazy-load Mira SVG в tool-body-map.html
- Кэш курсов валют в localStorage с TTL
- `.gitattributes` для кросс-платформенных EOL
- Удалить `инструкция.docx` из репо
- prefers-reduced-motion для curtain и custom cursor
- `tools/` подпапка с общим shell

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
