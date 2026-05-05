import { AB_CONFIG } from '@/lib/config';

declare global {
  interface Window {
    gtag?: (...args: unknown[]) => void;
    dataLayer?: unknown[];
    ym?: (id: number, action: string, ...args: unknown[]) => void;
    __abAnalyticsLoaded?: boolean;
  }
}

export type EventName =
  | 'whatsapp_click'
  | 'telegram_click'
  | 'phone_click'
  | 'contact_submit'
  | 'lead_magnet_submit'
  | 'book_call_click'
  | 'language_change'
  | 'currency_change'
  | 'tool_open';

export interface EventParams {
  [k: string]: string | number | boolean | undefined;
}

/**
 * Загружает скрипты GA4 и Yandex.Metrika. Вызывается из CookieBanner после
 * accept. Идемпотентно — повторные вызовы no-op.
 */
export function loadAnalytics(): void {
  if (typeof window === 'undefined') return;
  if (window.__abAnalyticsLoaded) return;
  window.__abAnalyticsLoaded = true;

  // --- Google Analytics 4 ---
  if (AB_CONFIG.GA4_ID) {
    const s = document.createElement('script');
    s.async = true;
    s.src = `https://www.googletagmanager.com/gtag/js?id=${AB_CONFIG.GA4_ID}`;
    document.head.appendChild(s);
    window.dataLayer = window.dataLayer || [];
    const gtag = (...args: unknown[]) => {
      window.dataLayer!.push(args);
    };
    window.gtag = gtag as typeof window.gtag;
    gtag('js', new Date());
    gtag('config', AB_CONFIG.GA4_ID, { anonymize_ip: true });
  }

  // --- Yandex.Metrika ---
  const ymId = Number(AB_CONFIG.YANDEX_METRIKA_ID);
  if (ymId) {
    // Стандартный inline-инициализатор Метрики, переписанный без eval.
    type YmFn = ((...args: unknown[]) => void) & { a?: unknown[]; l?: number };
    const ym: YmFn = function (this: unknown, ...args: unknown[]) {
      (ym.a = ym.a || []).push(args);
    };
    ym.l = Date.now();
    (window as unknown as { ym: YmFn }).ym = ym;

    const SRC = 'https://mc.yandex.ru/metrika/tag.js';
    if (!document.querySelector(`script[src="${SRC}"]`)) {
      const k = document.createElement('script');
      k.async = true;
      k.src = SRC;
      const a = document.getElementsByTagName('script')[0];
      a?.parentNode?.insertBefore(k, a);
    }
    window.ym?.(ymId, 'init', {
      defer: true,
      clickmap: true,
      trackLinks: true,
      accurateTrackBounce: true,
      webvisor: false,
    });
  }
}

/**
 * Отправляет событие в подключённые провайдеры. Безопасно — если ничего
 * не подключено или нет согласия, тихо ничего не делает.
 */
export function trackEvent(name: EventName, params?: EventParams): void {
  if (typeof window === 'undefined') return;
  try {
    if (window.gtag) {
      window.gtag('event', name, params || {});
    }
    const ymId = Number(AB_CONFIG.YANDEX_METRIKA_ID);
    if (ymId && window.ym) {
      window.ym(ymId, 'reachGoal', name, params);
    }
  } catch {
    // ignore — analytics ошибки не должны ломать UX
  }
}
