'use client';

import Link from 'next/link';
import { useState, type ReactNode } from 'react';
import { AB_CONFIG } from '@/lib/config';
import { trackEvent } from '@/lib/analytics';

declare global {
  interface Window {
    Calendly?: {
      initPopupWidget: (opts: { url: string }) => void;
    };
  }
}

const SCRIPT_URL = 'https://assets.calendly.com/assets/external/widget.js';
const CSS_URL = 'https://assets.calendly.com/assets/external/widget.css';

function ensureCalendlyLoaded(): Promise<void> {
  if (typeof window === 'undefined') return Promise.resolve();
  if (window.Calendly) return Promise.resolve();

  if (!document.querySelector(`link[data-calendly]`)) {
    const link = document.createElement('link');
    link.rel = 'stylesheet';
    link.href = CSS_URL;
    link.dataset.calendly = 'true';
    document.head.appendChild(link);
  }

  return new Promise<void>((resolve, reject) => {
    const existing = document.querySelector<HTMLScriptElement>('script[data-calendly]');
    if (existing) {
      if (window.Calendly) return resolve();
      existing.addEventListener('load', () => resolve(), { once: true });
      existing.addEventListener('error', () => reject(new Error('calendly_load_failed')), { once: true });
      return;
    }
    const s = document.createElement('script');
    s.src = SCRIPT_URL;
    s.async = true;
    s.dataset.calendly = 'true';
    s.onload = () => resolve();
    s.onerror = () => reject(new Error('calendly_load_failed'));
    document.body.appendChild(s);
  });
}

interface CalendlyButtonProps {
  children: ReactNode;
  className?: string;
  url?: string;
  fallbackHref?: string;
  ariaLabel?: string;
}

/**
 * Открывает Calendly popup поверх страницы.
 * Если AB_CONFIG.BOOKING_URL не настроен (нет NEXT_PUBLIC_CALENDLY_URL) —
 * деградирует до обычной ссылки на fallbackHref (по умолчанию /contact).
 */
export function CalendlyButton({
  children,
  className = 'btn-primary justify-center',
  url,
  fallbackHref = '/contact',
  ariaLabel,
}: CalendlyButtonProps) {
  const target = url || AB_CONFIG.BOOKING_URL;
  const [loading, setLoading] = useState(false);

  if (!target) {
    return (
      <Link href={fallbackHref} className={className} aria-label={ariaLabel}>
        {children}
      </Link>
    );
  }

  async function open() {
    setLoading(true);
    trackEvent('book_call_click', { source: 'calendly_popup' });
    try {
      await ensureCalendlyLoaded();
      if (window.Calendly) {
        window.Calendly.initPopupWidget({ url: target });
      } else {
        window.open(target, '_blank', 'noopener,noreferrer');
      }
    } catch {
      window.open(target, '_blank', 'noopener,noreferrer');
    } finally {
      setLoading(false);
    }
  }

  return (
    <button
      type="button"
      onClick={open}
      disabled={loading}
      aria-busy={loading}
      aria-label={ariaLabel}
      className={`${className} disabled:opacity-60 disabled:cursor-not-allowed`}
    >
      {children}
    </button>
  );
}
