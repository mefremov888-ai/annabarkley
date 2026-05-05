'use client';

import { useEffect } from 'react';
import { trackEvent, type EventName } from '@/lib/analytics';

/**
 * Глобальный делегированный обработчик кликов: трекает аутбаунд-ссылки
 * (WhatsApp, Telegram, тел.) без правки каждой <a> в кодовой базе.
 *
 * Пишется один раз в layout. На SSR ничего не делает.
 */
export function OutboundTracker() {
  useEffect(() => {
    function onClick(e: MouseEvent) {
      const target = e.target;
      if (!(target instanceof Element)) return;
      const anchor = target.closest('a');
      if (!anchor) return;
      const href = anchor.getAttribute('href') || '';

      let event: EventName | null = null;
      const params: Record<string, string> = {};

      if (href.startsWith('https://wa.me/') || href.includes('whatsapp.com')) {
        event = 'whatsapp_click';
      } else if (href.startsWith('https://t.me/') || href.includes('telegram')) {
        event = 'telegram_click';
      } else if (href.startsWith('tel:')) {
        event = 'phone_click';
        params.number = href.slice(4);
      }

      if (event) {
        // Небольшой контекст: где кликнули. Берём текст или aria-label, обрезаем.
        const label = (anchor.getAttribute('aria-label') || anchor.textContent || '').trim().slice(0, 60);
        if (label) params.label = label;
        trackEvent(event, params);
      }
    }

    document.addEventListener('click', onClick, true);
    return () => document.removeEventListener('click', onClick, true);
  }, []);

  return null;
}
