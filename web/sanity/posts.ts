import { sanityClient } from './client';
import { sanityEnabled } from './env';
import { allPostsQuery, postBySlugQuery, type SanityPost, type SanityPostMeta } from './queries';

/**
 * Возвращает все посты из Sanity. Если интеграция выключена — пустой массив,
 * потребитель должен fallback'нуться на локальный blog.ts.
 *
 * Sanity CDN отдаёт ответ за 10–50 мс, кэшируется на edge на 60 секунд.
 */
export async function fetchAllPosts(): Promise<SanityPostMeta[]> {
  if (!sanityEnabled || !sanityClient) return [];
  try {
    return await sanityClient.fetch<SanityPostMeta[]>(allPostsQuery, {}, {
      next: { revalidate: 60 },
    });
  } catch (err) {
    console.warn('[sanity] fetchAllPosts failed', err);
    return [];
  }
}

export async function fetchPostBySlug(slug: string): Promise<SanityPost | null> {
  if (!sanityEnabled || !sanityClient) return null;
  try {
    const data = await sanityClient.fetch<SanityPost | null>(
      postBySlugQuery,
      { slug },
      { next: { revalidate: 60 } },
    );
    return data ?? null;
  } catch (err) {
    console.warn(`[sanity] fetchPostBySlug(${slug}) failed`, err);
    return null;
  }
}
