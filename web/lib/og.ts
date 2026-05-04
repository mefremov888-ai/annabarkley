// Билдер URL для динамической OG-карточки (`/app/og/route.tsx`).
// Возвращает относительный путь — `metadataBase` в `layout.tsx` превратит его в абсолютный.

export type OgKind = 'default' | 'blog' | 'tools' | 'issues' | 'pricing' | 'contact';

export interface OgParams {
  kind?: OgKind;
  title?: string;
  subtitle?: string;
  lang?: 'en' | 'ru';
}

export function buildOgUrl(params: OgParams = {}): string {
  const search = new URLSearchParams();
  if (params.kind) search.set('kind', params.kind);
  if (params.title) search.set('title', params.title);
  if (params.subtitle) search.set('subtitle', params.subtitle);
  if (params.lang) search.set('lang', params.lang);
  const qs = search.toString();
  return qs ? `/og?${qs}` : '/og';
}

// Удобный шорткат для metadata.openGraph.images
export function ogImage(params: OgParams = {}) {
  return [{ url: buildOgUrl(params), width: 1200, height: 630, alt: params.title || 'Anna Barkley' }];
}
