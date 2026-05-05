# Подключение Sanity CMS

После публичного запуска Анна сможет редактировать статьи блога самостоятельно через web-интерфейс Sanity Studio (бесплатно для команды до 3 редакторов). До настройки блог рендерится из локальных файлов `web/lib/blog.ts` и `web/lib/blog-content.ts` — сайт работает без Sanity.

## Что от пользователя

### 1. Создать аккаунт и проект на sanity.io

1. Открыть https://www.sanity.io/ → **Get started** → войти через Google или GitHub
2. **Create new project** → имя `anna-barkley` → dataset `production` (по умолчанию)
3. Скопировать **Project ID** с дашборда (в URL и Settings → API)

### 2. Скопировать схему в Sanity Studio

Анна (или Михаил) создаёт Sanity Studio локально один раз:

```bash
# В отдельной папке (НЕ внутри anna site/), один раз:
npm create sanity@latest -- --template clean
# Указать project ID из шага 1, dataset = production

# Скопировать содержимое нашего файла схемы:
# docs/sanity-templates/post.ts → studio/schemaTypes/post.ts
# В studio/schemaTypes/index.ts добавить: import { post } from './post'; export const schemaTypes = [post];

# Запустить Studio локально
npm run dev
# Открывается localhost:3333

# Опубликовать студию на хостинге Sanity
npm run deploy
# Studio будет доступна по адресу <projectid>.sanity.studio
```

После deploy Студия живёт по адресу типа `https://anna-barkley.sanity.studio` — Анна заходит туда, логинится Google-аккаунтом, редактирует статьи.

### 3. Прописать env vars в Vercel

Vercel → Project annabarkley → Settings → Environment Variables → добавить:

| Имя | Значение | Где использовать |
|---|---|---|
| `NEXT_PUBLIC_SANITY_PROJECT_ID` | `xxxxxxxx` (из шага 1) | Production + Preview |
| `NEXT_PUBLIC_SANITY_DATASET` | `production` | Production + Preview |

После сохранения — **Redeploy** (Deployments → ⋯ → Redeploy на последнем).

### 4. Перенести черновики статей в Sanity

Анна заходит в Studio → **Blog Post** → **Create new** для каждой из 5 статей. Тексты черновиков сейчас в `web/lib/blog-content.ts` — можно скопировать оттуда. Поля схемы:

- Title (EN), Title (RU) — заголовок
- Slug — auto-generate из EN-заголовка
- Date — дата публикации
- Category (EN/RU) — выбрать из списка
- Background image — загрузить hero-фото для статьи
- Meta description (EN/RU) — для соцсетей и SEO
- Reading time — целое число минут
- Body (EN), Body (RU) — текст статьи (rich text editor с заголовками, списками, цитатами)

**Важно:** перед публикацией каждой статьи — проверить DHA Marketing Code (запрещены `cure`, `guaranteed`, `100%`, `permanent fix`, `complete recovery`).

После публикации статьи в Sanity сайт автоматически отобразит её на `/blog` (revalidate = 60 секунд).

## Архитектура в коде

- **`web/sanity/env.ts`** — флаг `sanityEnabled` = есть ли projectId
- **`web/sanity/client.ts`** — Sanity HTTP-клиент (читает CDN, кэшируется на 60с)
- **`web/sanity/queries.ts`** — GROQ запросы и TS типы
- **`web/sanity/posts.ts`** — `fetchAllPosts()` / `fetchPostBySlug()`
- **`web/sanity/schemas/post.ts`** — схема Blog Post (копируется в Studio при настройке)
- **`web/lib/blog-data.ts`** — единая точка входа: пробует Sanity, fallback на локальный `lib/blog.ts`

Когда `NEXT_PUBLIC_SANITY_PROJECT_ID` не задан или Sanity вернул 0 постов — сайт работает на локальном контенте, ничего не падает.

## Что мне сделать в коде, когда Анна готова

После того как Анна перенесла все 5 статей в Sanity:

1. Переключить `web/app/blog/page.tsx` и `web/app/blog/[slug]/page.tsx` на `getAllPosts()` / `getFullPost()` из `lib/blog-data.ts`
2. Добавить `<PortableText>` рендерер для статей с `source === 'sanity'`
3. Удалить `lib/blog-content.ts` (или оставить как backup на одну итерацию)

Это отдельная задача на ~1.5 часа после настройки Sanity.
