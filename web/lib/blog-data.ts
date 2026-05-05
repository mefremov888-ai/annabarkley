// Унифицированный источник данных блога. Если Sanity сконфигурирован и
// у проекта есть опубликованные посты — берём их. Иначе fallback на локальный
// `lib/blog.ts` (сидовый контент, готовится в коде).
//
// Используется только в server-компонентах (RSC) или generateStaticParams.

import { POSTS, type BlogPostMeta } from './blog';
import { fetchAllPosts, fetchPostBySlug } from '@/sanity/posts';
import type { SanityPost, SanityPostMeta } from '@/sanity/queries';

function adaptMeta(p: SanityPostMeta): BlogPostMeta {
  return {
    slug: p.slug,
    cat: { en: p.categoryEn, ru: p.categoryRu },
    date: p.date,
    readingMinutes: p.readingMinutes ?? 5,
    bg: p.bgImage ? `center/cover url("${p.bgImage}")` : 'var(--sage-pale)',
    t: { en: p.titleEn, ru: p.titleRu },
    d: { en: p.metaDescEn ?? '', ru: p.metaDescRu ?? '' },
    metaDesc: { en: p.metaDescEn ?? '', ru: p.metaDescRu ?? '' },
  };
}

export async function getAllPosts(): Promise<BlogPostMeta[]> {
  const sanity = await fetchAllPosts();
  if (sanity.length > 0) {
    return sanity.map(adaptMeta);
  }
  return POSTS;
}

export async function getAllPostSlugs(): Promise<string[]> {
  const all = await getAllPosts();
  return all.map((p) => p.slug);
}

export interface FullPost {
  meta: BlogPostMeta;
  /** Если 'sanity' — body в Portable Text формате; если 'local' — есть в lib/blog-content.ts */
  source: 'sanity' | 'local';
  /** Только при source === 'sanity' */
  bodyEn?: unknown[];
  /** Только при source === 'sanity' */
  bodyRu?: unknown[];
}

export async function getFullPost(slug: string): Promise<FullPost | null> {
  // Пробуем Sanity
  const sanityPost: SanityPost | null = await fetchPostBySlug(slug);
  if (sanityPost) {
    return {
      meta: adaptMeta(sanityPost),
      source: 'sanity',
      bodyEn: sanityPost.bodyEn,
      bodyRu: sanityPost.bodyRu,
    };
  }
  // Fallback: ищем в локальных POSTS
  const local = POSTS.find((p) => p.slug === slug);
  if (local) {
    return { meta: local, source: 'local' };
  }
  return null;
}
