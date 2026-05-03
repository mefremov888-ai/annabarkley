// Anna Barkley — глобальные константы для всех HTML.
// Один источник правды для контактов, ссылок и compliance-плейсхолдеров.
// Перед публичным деплоем заменить значения с пометкой PLACEHOLDER на реальные.
(function(global){
  const PHONE_RAW = '971551234567'; // PLACEHOLDER
  const cfg = {
    // Контакты
    PHONE: '+971 55 123 4567',          // PLACEHOLDER
    PHONE_RAW: PHONE_RAW,
    EMAIL: 'hello@annabarkley.com',     // PLACEHOLDER
    WA_URL: 'https://wa.me/' + PHONE_RAW,
    TELEGRAM_URL: 'https://t.me/annabarkley', // PLACEHOLDER
    INSTAGRAM_URL: 'https://instagram.com/annabarkley', // PLACEHOLDER

    // Бизнес
    DOMAIN: 'annabarkley.com',           // PLACEHOLDER (домен не куплен)
    HOURS: 'Sun-Thu 9:00-18:00',
    CITY: 'Dubai, UAE',

    // Compliance — обязательно заменить перед публичным запуском
    DHA_LICENSE: '__BLOCK_LAUNCH:DHA_LICENSE__',     // PLACEHOLDER (CI должен ловить)
    DHA_CLASSIFICATION: '__BLOCK_LAUNCH:DHA_CLASS__', // PLACEHOLDER (Clinical / Counselling)

    // Сторонние API
    BOOKING_URL: 'https://calendly.com/annabarkley', // PLACEHOLDER
    FORMS_ENDPOINT: '',  // PLACEHOLDER (Formspree/Resend — пусто = mailto fallback)

    // Tooling
    EXCHANGE_API: 'https://open.er-api.com/v6/latest/AED', // public, без ключа
    EXCHANGE_TTL_MS: 24 * 60 * 60 * 1000,
  };

  // Список плейсхолдеров — для CI/предзапускового аудита
  cfg.PLACEHOLDERS = ['PHONE','PHONE_RAW','EMAIL','TELEGRAM_URL','INSTAGRAM_URL','DOMAIN','DHA_LICENSE','DHA_CLASSIFICATION','BOOKING_URL'];
  cfg.isReadyForLaunch = function(){
    return !cfg.DHA_LICENSE.includes('BLOCK_LAUNCH') && !cfg.DHA_CLASSIFICATION.includes('BLOCK_LAUNCH');
  };

  global.AB_CONFIG = cfg;
  // Удобные шорткаты для существующего кода
  global.WA = cfg.WA_URL;
})(typeof window !== 'undefined' ? window : globalThis);
