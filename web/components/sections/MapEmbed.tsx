'use client';

import { useLang } from '@/lib/i18n/context';
import { AB_CONFIG } from '@/lib/config';

interface MapEmbedProps {
  /** Override координаты "lat,lng" — иначе берётся из AB_CONFIG.OFFICE_COORDS. */
  coords?: string;
  /** Подпись маркера */
  label?: string;
  /** Заголовок секции (i18n из родителя) */
  heading?: { en: string; ru: string };
  className?: string;
  /** Высота карты в px. По умолчанию 380. */
  height?: number;
}

/**
 * Карта без API-ключей. Использует embed-ссылки Google Maps и Yandex Maps,
 * переключается по выбранному языку.
 *
 * Если NEXT_PUBLIC_OFFICE_COORDS не задан — компонент ничего не рендерит
 * (не показываем плейсхолдер с фейковой локацией).
 */
export function MapEmbed({ coords, label, heading, className = '', height = 380 }: MapEmbedProps) {
  const { lang } = useLang();
  const coordsRaw = (coords || AB_CONFIG.OFFICE_COORDS).trim();
  if (!coordsRaw) return null;

  const [latStr, lngStr] = coordsRaw.split(',').map((s) => s.trim());
  const lat = Number(latStr);
  const lng = Number(lngStr);
  if (Number.isNaN(lat) || Number.isNaN(lng)) return null;

  const placeLabel = label || AB_CONFIG.OFFICE_NAME;

  // Google Maps embed (без ключа — старый, но рабочий q-параметр)
  const googleSrc = `https://maps.google.com/maps?q=${lat},${lng}&hl=${lang}&z=15&output=embed`;

  // Yandex Maps embed (constructor-style без ключа)
  const yandexSrc =
    `https://yandex.com/map-widget/v1/?ll=${lng},${lat}&z=15&pt=${lng},${lat},pm2rdm&l=map`;

  const useYandex = lang === 'ru';
  const src = useYandex ? yandexSrc : googleSrc;
  const provider = useYandex ? 'Yandex Maps' : 'Google Maps';

  return (
    <section className={['py-12 px-7', className].join(' ')}>
      <div className="container-x" style={{ maxWidth: '960px' }}>
        {heading && (
          <h2 className="text-center mb-6" style={{ fontSize: 'clamp(28px, 3.5vw, 36px)' }}>
            {heading[lang]}
          </h2>
        )}
        <div className="rounded-card overflow-hidden border border-border bg-white">
          <iframe
            src={src}
            title={`${placeLabel} — ${provider}`}
            width="100%"
            height={height}
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            style={{ border: 0, display: 'block' }}
          />
        </div>
        <p className="text-center text-[12px] text-text-muted font-light mt-3">
          {placeLabel}
        </p>
      </div>
    </section>
  );
}
