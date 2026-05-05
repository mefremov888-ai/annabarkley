/**
 * Sanity environment variables.
 *
 * Если NEXT_PUBLIC_SANITY_PROJECT_ID не задан — Sanity-интеграция выключена,
 * блог рендерится из локального blog-content.ts. Когда переменные заданы:
 * блог тянется из Sanity. Studio для редактирования контента — на sanity.io
 * (отдельное приложение, бесплатное для команды до 3 редакторов).
 */

export const apiVersion = process.env.NEXT_PUBLIC_SANITY_API_VERSION || '2024-01-01';
export const dataset = process.env.NEXT_PUBLIC_SANITY_DATASET || 'production';
export const projectId = process.env.NEXT_PUBLIC_SANITY_PROJECT_ID || '';
export const sanityEnabled = projectId.length > 0;
