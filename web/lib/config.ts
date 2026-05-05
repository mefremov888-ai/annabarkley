// Anna Barkley — глобальные константы.
// Один источник правды для контактов, ссылок, compliance-плейсхолдеров.
// Перед публичным деплоем заменить значения с пометкой PLACEHOLDER на реальные.

const PHONE_RAW = '971551234567'; // PLACEHOLDER

export const AB_CONFIG = {
  // Контакты
  PHONE: '+971 55 123 4567',                       // PLACEHOLDER
  PHONE_RAW,
  EMAIL: 'hello@annabarkley.com',                  // PLACEHOLDER
  WA_URL: `https://wa.me/${PHONE_RAW}`,
  TELEGRAM_URL: 'https://t.me/annabarkley',        // PLACEHOLDER
  INSTAGRAM_URL: 'https://instagram.com/annabarkley', // PLACEHOLDER

  // Бизнес
  DOMAIN: 'annabarkley.com',                       // PLACEHOLDER
  HOURS: 'Sun-Thu 9:00-18:00',
  CITY: 'Dubai, UAE',

  // Compliance — обязательно заменить перед запуском
  DHA_LICENSE: '__BLOCK_LAUNCH:DHA_LICENSE__',     // PLACEHOLDER
  DHA_CLASSIFICATION: '__BLOCK_LAUNCH:DHA_CLASS__', // PLACEHOLDER

  // Сторонние
  // BOOKING_URL пуст пока не задан NEXT_PUBLIC_CALENDLY_URL → CalendlyButton
  // деградирует до ссылки на /contact.
  BOOKING_URL: process.env.NEXT_PUBLIC_CALENDLY_URL || '',
  FORMS_ENDPOINT: process.env.NEXT_PUBLIC_FORMS_ENDPOINT || '',
  GA4_ID: process.env.NEXT_PUBLIC_GA4_ID || '',
  YANDEX_METRIKA_ID: process.env.NEXT_PUBLIC_YANDEX_METRIKA_ID || '',

  EXCHANGE_API: 'https://open.er-api.com/v6/latest/AED',
  EXCHANGE_TTL_MS: 24 * 60 * 60 * 1000,

  // Координаты кабинета для карт (формат "lat,lng"). Без значения карта не рендерится.
  OFFICE_COORDS: process.env.NEXT_PUBLIC_OFFICE_COORDS || '',
  OFFICE_NAME: process.env.NEXT_PUBLIC_OFFICE_NAME || 'Anna Barkley — Psychologist',
} as const;

export function isReadyForLaunch(): boolean {
  return (
    !AB_CONFIG.DHA_LICENSE.includes('BLOCK_LAUNCH') &&
    !AB_CONFIG.DHA_CLASSIFICATION.includes('BLOCK_LAUNCH')
  );
}

// Базовый URL сайта для canonical/sitemap (указывается через env в проде)
export const SITE_URL =
  process.env.NEXT_PUBLIC_SITE_URL || `https://${AB_CONFIG.DOMAIN}`;
