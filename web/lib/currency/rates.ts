import { AB_CONFIG } from '@/lib/config';

export interface Rates {
  USD: number;
  RUB: number;
}

interface Cached {
  rates: Rates;
  fetchedAt: number;
}

const STORAGE_KEY = 'ab_rates';

// Резервные курсы (на случай провала API). Округлены, обновлять раз в полгода.
const FALLBACK: Rates = { USD: 0.272, RUB: 22.5 };

interface ApiResponse {
  result?: string;
  rates?: Record<string, number>;
}

async function fetchFromApi(): Promise<Rates> {
  const res = await fetch(AB_CONFIG.EXCHANGE_API, { cache: 'no-store' });
  if (!res.ok) throw new Error('rates_http_' + res.status);
  const data = (await res.json()) as ApiResponse;
  if (data.result !== 'success' || !data.rates) throw new Error('rates_api_failed');
  const usd = data.rates.USD;
  const rub = data.rates.RUB;
  if (typeof usd !== 'number' || typeof rub !== 'number') throw new Error('rates_missing');
  return { USD: usd, RUB: rub };
}

export async function getRates(): Promise<Rates> {
  if (typeof window === 'undefined') return FALLBACK;

  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    if (raw) {
      const cached = JSON.parse(raw) as Cached;
      if (Date.now() - cached.fetchedAt < AB_CONFIG.EXCHANGE_TTL_MS) return cached.rates;
    }
  } catch {
    // ignore parse error, fall through
  }

  try {
    const fresh = await fetchFromApi();
    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify({ rates: fresh, fetchedAt: Date.now() }));
    } catch {
      // ignore storage error
    }
    return fresh;
  } catch (err) {
    console.warn('[rates] fetch failed, using fallback', err);
    return FALLBACK;
  }
}

/**
 * Конвертирует AED → выбранная валюта. Округляет до удобной величины.
 */
export function convertFromAED(aed: number, target: 'AED' | 'USD' | 'RUB', rates: Rates | null): number {
  if (target === 'AED') return aed;
  if (!rates) return aed;
  if (target === 'USD') {
    return Math.round(aed * rates.USD);
  }
  if (target === 'RUB') {
    // Округление до десятков рублей, чтобы не показывать 16 234 ₽
    return Math.round((aed * rates.RUB) / 10) * 10;
  }
  return aed;
}

export function formatAmount(value: number): string {
  return value.toLocaleString('en-US');
}
