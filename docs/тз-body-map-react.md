# ТЗ: Портирование Body-Map в нативный React

**Контекст.** 6 из 7 интерактивных инструментов сайта реализованы как нативные React-компоненты (`web/components/sections/`). Седьмой — Body-Map (Карта тела с Мирой) — пока работает через `<iframe>` в `LegacyToolFrame`, потому что HTML-прототип содержит большое (~200КБ) base64-изображение персонажа Миры внутри тега `<img src="data:image/png;...">`. Iframe-обёртка работает, но:
- ломает SEO (контент не индексируется)
- ломает i18n (язык изолирован от родительского контекста `useLang()`)
- ломает Lighthouse (загружается весь HTML+image отдельно)
- мешает консистентности UX (своя шапка с EN/RU, не синхронизированная с сайтом)

## 1. Цель

Заменить iframe-обёртку нативным React-компонентом `<BodyMap />`, чтобы Body-Map был неотличим по UX от Anxiety-Test, Burnout-Test и Emotion-Wheel.

## 2. Объём работы

### 2.1. Извлечь изображение Миры в отдельный файл

- В `старт проекта/tool-body-map.html` строка с `<img src="data:image/png;base64,/9j/4AAQ...">` содержит data-URI.
- Декодировать base64 → сохранить в `web/public/images/mira.jpg` (несмотря на префикс `image/png`, фактический формат — JPEG: signature `/9j/4AAQ...`).
- Размер исходника ~150КБ. Прогнать через WebP-конвертацию: `mira.webp` (qoi 80) — целевой размер ≤80КБ.
- Сохранить и `mira.jpg` (fallback) и `mira.webp` (default через `<picture>` или `next/image`).

### 2.2. Создать `web/components/sections/BodyMap.tsx`

Структурно повторить паттерн `EmotionWheel.tsx`:

```tsx
'use client';
import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { useLang } from '@/lib/i18n/context';
import { AB_CONFIG } from '@/lib/config';
import { PageHeader } from '@/components/sections/PageHeader';

interface Zone {
  id: string;
  x: number; y: number; s: number; cl: string; ls: 'left' | 'right';
}

interface ZoneContent {
  n: { en: string; ru: string };
  intro: { en: string; ru: string };
  q1: { en: string; ru: string };
  o1a: { en: string; ru: string };
  o1b: { en: string; ru: string };
  q2: { en: string; ru: string };
  o2a: { en: string; ru: string };
  o2b: { en: string; ru: string };
  d_aa: { en: string; ru: string };
  d_ab: { en: string; ru: string };
  d_ba: { en: string; ru: string };
  d_bb: { en: string; ru: string };
  sym: { en: string[]; ru: string[] };
  emo: { t: { en: string; ru: string }; c: string }[];
  helps: { en: string[]; ru: string[] };
  seek: { en: string; ru: string };
}
```

Зоны (10 штук): `head, jaw, throat, shoulders, chest, back, stomach, hands, lower, legs`. Координаты, цвета, стороны лейблов скопировать из исходника `tool-body-map.html` (массив `Z`).

Тексты EN/RU для каждой зоны — взять из `S.en.z.*` и `S.ru.z.*` в исходнике.

### 2.3. Состояние и логика

```ts
const [selectedZone, setSelectedZone] = useState<string | null>(null);
const [step, setStep] = useState<0 | 1 | 2>(0); // 0: intro, 1: после q1, 2: финальный диалог
const [a1, setA1] = useState<'a' | 'b' | null>(null);
const [a2, setA2] = useState<'a' | 'b' | null>(null);
```

Поток:
1. Пользователь нажимает зону → `step=0`, показ intro + q1
2. Отвечает на q1 → `step=1`, показ q2
3. Отвечает на q2 → `step=2`, показ финального текста (`d_${a1}${a2}`), симптомов, эмоций, советов
4. Кнопка «другая зона» → `setSelectedZone(null); setStep(0); setA1(null); setA2(null);`

### 2.4. Layout

`grid-cols-[380px_1fr] md:grid-cols-1` — слева Мира + dot/label оверлеи, справа sticky-панель диалога. На мобильных — стек вертикально.

Зоны рисовать как абсолютно-позиционированные кнопки `<button>` (не `<div>`) с `aria-pressed`, `aria-label`. Цвет/тень — из исходника.

### 2.5. Disclaimer

В исходнике текст: «Mira is not a therapist. For self-awareness only.» / «Мира — не терапевт. Только для самопознания.» — рендерить под основным контентом, мелким шрифтом.

### 2.6. CTA

В финальном диалоге — две кнопки:
- WhatsApp (текст с упоминанием выбранной зоны: `Hi Anna, I explored ${zone.n} on the body map and...`)
- «Другая зона»

Дополнительно в подвале страницы (вне диалога) — `<Link href="/contact" className="btn-primary">{t.bookFreeCall}</Link>`.

### 2.7. Удалить legacy-iframe

После проверки:
- Удалить `web/public/legacy-tools/body-map.html`
- Удалить пустую папку `web/public/legacy-tools/`
- Удалить `web/components/sections/LegacyToolFrame.tsx`
- Заменить `web/app/tools/body-map/page.tsx`:

```tsx
import { BodyMap } from '@/components/sections/BodyMap';
export const metadata = {
  title: 'Body Map · with Mira',
  description: 'An interactive body map — Mira walks you through how emotions show up in different parts of the body. Bilingual EN/RU.',
};
export default function Page() { return <BodyMap />; }
```

## 3. Acceptance criteria

- [ ] `web/public/images/mira.webp` ≤ 80КБ, `mira.jpg` ≤ 150КБ
- [ ] `<BodyMap />` рендерится в `/tools/body-map` без iframe
- [ ] Все 10 зон кликабельны клавиатурой (Tab+Enter)
- [ ] EN/RU переключается синхронно с глобальным `useLang()`
- [ ] При смене зоны диалог сбрасывается в `step=0`
- [ ] WhatsApp-CTA содержит локализованный preset с именем зоны
- [ ] `npm run build` чистый
- [ ] Lighthouse Performance ≥ 90 на странице `/tools/body-map` (раньше из-за iframe был ~70)
- [ ] Раздел `/legacy-tools/` и `LegacyToolFrame.tsx` удалены

## 4. Зависимости / что нужно от пользователя

- ❌ Ничего внешнего не нужно. Все исходные данные есть в `старт проекта/tool-body-map.html`.

## 5. Оценка трудозатрат

- Извлечение и оптимизация изображения: 15 мин
- Перенос данных Z + ZoneContent (en/ru): 1 ч
- React-компонент (state, layout, диалог): 1.5 ч
- Тестирование UX + a11y + Lighthouse: 30 мин
- **Итого: ~3 часа**

## 6. Риски

- **R1.** Координаты зон откалиброваны под левую половину обрезанного изображения (фронтальный вид). Если новый размер контейнера/`object-fit` не совпадёт — точки сдвинутся. Митигация: проверить визуально на 3 размерах экрана (мобильный 375px, планшет 768px, десктоп 1440px).
- **R2.** WebP-конвертация может ухудшить читаемость лица. Митигация: визуальная проверка, при необходимости поднять качество до 85.
- **R3.** Текст диалогов содержит DHA-чувствительные формулировки (например, «healing»). Перед коммитом прогнать поиск по запрещённым словам: `cure, guaranteed, 100%`.

---
