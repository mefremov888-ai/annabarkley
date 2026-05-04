import { ImageResponse } from 'next/og';

export const runtime = 'edge';

const PALETTE = {
  bg: '#F7F5F2',
  sagePale: '#E8EFE8',
  rosePale: '#F5E6E6',
  sage: '#7C9A7C',
  sageDeep: '#5B7A5B',
  rose: '#EAC7C7',
  roseDeep: '#D4A9A9',
  charcoal: '#1A1A1A',
  text: '#3B3B3B',
  textMuted: '#6E6E66',
};

type Kind = 'default' | 'blog' | 'tools' | 'issues' | 'pricing' | 'contact';

function clampLen(s: string, n: number): string {
  if (s.length <= n) return s;
  return s.slice(0, n - 1).trimEnd() + '…';
}

function tagFor(kind: Kind, lang: 'en' | 'ru'): string {
  const map: Record<Kind, { en: string; ru: string }> = {
    default: { en: 'Anna Barkley · Psychologist · Dubai', ru: 'Анна Баркли · Психолог · Дубай' },
    blog:    { en: 'Anna Barkley · Article',              ru: 'Анна Баркли · Статья' },
    tools:   { en: 'Anna Barkley · Self-help tool',       ru: 'Анна Баркли · Инструмент' },
    issues:  { en: 'Anna Barkley · What I help with',     ru: 'Анна Баркли · С чем помогаю' },
    pricing: { en: 'Anna Barkley · Transparent pricing',  ru: 'Анна Баркли · Прозрачные цены' },
    contact: { en: 'Anna Barkley · Free 15-min call',     ru: 'Анна Баркли · Бесплатный звонок' },
  };
  return map[kind][lang].toUpperCase();
}

function defaultTitle(kind: Kind, lang: 'en' | 'ru'): string {
  const map: Record<Kind, { en: string; ru: string }> = {
    default: { en: 'Psychologist in Dubai supporting children, teens and adults', ru: 'Психолог в Дубае: дети, подростки, взрослые' },
    blog:    { en: 'Articles on mental health',                                   ru: 'Статьи о ментальном здоровье' },
    tools:   { en: 'Free self-help tools',                                        ru: 'Бесплатные инструменты самопомощи' },
    issues:  { en: 'What I help with',                                            ru: 'С чем я помогаю' },
    pricing: { en: 'Transparent pricing — from 700 AED',                          ru: 'Прозрачные цены — от 700 AED' },
    contact: { en: 'Book your free 15-minute call',                               ru: 'Бесплатный 15-минутный звонок' },
  };
  return map[kind][lang];
}

// Загружает Inter TTF с Google Fonts. Старый User-Agent заставляет CSS API
// отдать одиночный full-coverage TTF (≈325КБ) с латиницей + кириллицей,
// вместо нескольких woff2-subset'ов (которые satori не парсит).
async function loadInterTTF(weight: 400 | 700): Promise<ArrayBuffer> {
  const family = `Inter:wght@${weight}`;
  const cssUrl = `https://fonts.googleapis.com/css2?family=${encodeURIComponent(family)}&display=swap`;
  const cssRes = await fetch(cssUrl, {
    headers: { 'User-Agent': 'Mozilla/5.0 (Windows NT 5.1)' },
  });
  if (!cssRes.ok) throw new Error(`Google Fonts CSS fetch failed: ${cssRes.status}`);
  const css = await cssRes.text();
  const m = css.match(/src:\s*url\(([^)]+)\)\s*format\('truetype'\)/);
  if (!m) throw new Error(`No truetype URL in CSS: ${css.slice(0, 200)}`);
  const fontRes = await fetch(m[1]);
  if (!fontRes.ok) throw new Error(`Font fetch failed: ${fontRes.status}`);
  return fontRes.arrayBuffer();
}

async function loadInterFonts() {
  const [r400, r700] = await Promise.all([loadInterTTF(400), loadInterTTF(700)]);
  return [
    { name: 'Inter', data: r400, style: 'normal' as const, weight: 400 as const },
    { name: 'Inter', data: r700, style: 'normal' as const, weight: 700 as const },
  ];
}

export async function GET(req: Request): Promise<Response> {
  const { searchParams } = new URL(req.url);
  const kindParam = (searchParams.get('kind') || 'default') as Kind;
  const validKinds: Kind[] = ['default', 'blog', 'tools', 'issues', 'pricing', 'contact'];
  const kind: Kind = validKinds.includes(kindParam) ? kindParam : 'default';
  const lang: 'en' | 'ru' = searchParams.get('lang') === 'ru' ? 'ru' : 'en';

  const titleRaw = searchParams.get('title') || defaultTitle(kind, lang);
  const subtitleRaw = searchParams.get('subtitle') || '';
  const title = clampLen(titleRaw, 90);
  const subtitle = subtitleRaw ? clampLen(subtitleRaw, 140) : '';
  const tag = tagFor(kind, lang);
  const fontsInput = await loadInterFonts();

  return new ImageResponse(
    (
      <div
        style={{
          width: '100%',
          height: '100%',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'space-between',
          padding: '72px 80px',
          background: `linear-gradient(135deg, ${PALETTE.sagePale} 0%, ${PALETTE.bg} 50%, ${PALETTE.rosePale} 100%)`,
          color: PALETTE.charcoal,
          fontFamily: 'Inter',
        }}
      >
        {/* Header: лого-листочек + имя */}
        <div style={{ display: 'flex', alignItems: 'center', gap: 14 }}>
          <div
            style={{
              width: 52,
              height: 52,
              borderRadius: 14,
              background: `linear-gradient(135deg, ${PALETTE.sage}, ${PALETTE.roseDeep})`,
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
            }}
          >
            <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth="1.6" strokeLinecap="round">
              <path d="M11 20A7 7 0 0 1 9.8 6.9C15.5 4.9 17 3.5 19 2c1 2 2 4.5 1 8-1.5 5-5.7 8.5-9 10z" />
              <path d="M2 21c0-3 1.85-5.36 5.08-6C9.5 14.52 12 13 13 12" />
            </svg>
          </div>
          <span style={{ fontSize: 26, fontWeight: 600, letterSpacing: '-0.01em' }}>
            Anna Barkley
          </span>
        </div>

        {/* Center: tag + headline + subtitle */}
        <div style={{ display: 'flex', flexDirection: 'column', maxWidth: 1040 }}>
          <span
            style={{
              fontSize: 18,
              fontWeight: 700,
              color: PALETTE.sageDeep,
              letterSpacing: '0.18em',
              marginBottom: 24,
            }}
          >
            {tag}
          </span>
          <span
            style={{
              fontSize: title.length > 60 ? 56 : 68,
              fontWeight: 700,
              lineHeight: 1.12,
              letterSpacing: '-0.02em',
              color: PALETTE.charcoal,
            }}
          >
            {title}
          </span>
          {subtitle && (
            <span
              style={{
                marginTop: 22,
                fontSize: 26,
                fontWeight: 400,
                lineHeight: 1.45,
                color: PALETTE.text,
              }}
            >
              {subtitle}
            </span>
          )}
        </div>

        {/* Footer: domain + accent line */}
        <div
          style={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            color: PALETTE.textMuted,
            fontSize: 20,
            fontWeight: 400,
          }}
        >
          <div style={{ display: 'flex', alignItems: 'center', gap: 14 }}>
            <div
              style={{
                width: 56,
                height: 3,
                borderRadius: 2,
                background: `linear-gradient(90deg, ${PALETTE.sage}, ${PALETTE.rose})`,
              }}
            />
            <span>annabarkley.com</span>
          </div>
          <span>{lang === 'ru' ? 'Билингв EN · RU' : 'Bilingual EN · RU'}</span>
        </div>
      </div>
    ),
    {
      width: 1200,
      height: 630,
      fonts: fontsInput,
      headers: {
        'Cache-Control': 'public, max-age=3600, s-maxage=86400, stale-while-revalidate=604800',
      },
    }
  );
}
