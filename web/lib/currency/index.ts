export type Currency = 'AED' | 'USD' | 'RUB';

export const supportedCurrencies: Currency[] = ['AED', 'USD', 'RUB'];
export const defaultCurrency: Currency = 'AED';

export const CURRENCY_LABELS: Record<Currency, { code: string; symbol: string; flag: string; name: { en: string; ru: string } }> = {
  AED: { code: 'AED', symbol: 'AED', flag: '🇦🇪', name: { en: 'UAE Dirham', ru: 'Дирхам ОАЭ' } },
  USD: { code: 'USD', symbol: '$',   flag: '🇺🇸', name: { en: 'US Dollar',  ru: 'Доллар США' } },
  RUB: { code: 'RUB', symbol: '₽',   flag: '🇷🇺', name: { en: 'Russian Ruble', ru: 'Российский рубль' } },
};

export function isCurrency(s: unknown): s is Currency {
  return s === 'AED' || s === 'USD' || s === 'RUB';
}

/**
 * Авто-определение валюты по таймзоне и языку браузера. Только для первого
 * визита — после выбор сохраняется в localStorage.
 */
export function detectCurrency(): Currency {
  if (typeof window === 'undefined') return defaultCurrency;
  try {
    const tz = (Intl.DateTimeFormat().resolvedOptions().timeZone || '').toLowerCase();
    if (tz === 'asia/dubai' || tz === 'asia/abu_dhabi' || tz === 'asia/muscat') return 'AED';
    if (
      tz.startsWith('europe/moscow') ||
      tz.startsWith('europe/kaliningrad') ||
      tz.startsWith('europe/samara') ||
      tz.startsWith('asia/yekaterinburg') ||
      tz.startsWith('asia/omsk') ||
      tz.startsWith('asia/novosibirsk') ||
      tz.startsWith('asia/krasnoyarsk') ||
      tz.startsWith('asia/irkutsk') ||
      tz.startsWith('asia/yakutsk') ||
      tz.startsWith('asia/vladivostok') ||
      tz.startsWith('asia/magadan') ||
      tz.startsWith('asia/kamchatka')
    ) return 'RUB';

    const nav = (typeof navigator !== 'undefined' ? navigator.language : '').toLowerCase();
    if (nav.startsWith('ru')) return 'RUB';
    if (nav.endsWith('-ae') || nav === 'ar') return 'AED';
    return 'USD';
  } catch {
    return defaultCurrency;
  }
}
