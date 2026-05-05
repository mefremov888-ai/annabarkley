import { createClient, type SanityClient } from 'next-sanity';
import { apiVersion, dataset, projectId, sanityEnabled } from './env';

/**
 * Клиент для чтения контента из Sanity. Используется на сервере (RSC) и в API.
 * Если Sanity не сконфигурирован — null, потребители должны отдавать fallback.
 */
export const sanityClient: SanityClient | null = sanityEnabled
  ? createClient({
      projectId,
      dataset,
      apiVersion,
      useCdn: true,
      perspective: 'published',
    })
  : null;
