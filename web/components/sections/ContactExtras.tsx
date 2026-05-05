'use client';

import { useLang } from '@/lib/i18n/context';
import { CalendlyButton } from '@/components/ui/CalendlyButton';
import { AB_CONFIG } from '@/lib/config';

/**
 * Дополнительные CTA под формой /contact: блок Calendly показывается только
 * если NEXT_PUBLIC_CALENDLY_URL задан (иначе CalendlyButton деградирует
 * в ссылку на /contact, и здесь это бессмысленно).
 */
export function ContactExtras() {
  const { t } = useLang();
  if (!AB_CONFIG.BOOKING_URL) return null;
  return (
    <div className="mt-6 grid gap-3">
      <p className="text-center text-[13px] text-text-muted font-light">{t.bookViaCalendly}</p>
      <CalendlyButton className="btn-outline justify-center w-full" ariaLabel={t.bookFreeCall}>
        {t.bookFreeCall}
      </CalendlyButton>
    </div>
  );
}
