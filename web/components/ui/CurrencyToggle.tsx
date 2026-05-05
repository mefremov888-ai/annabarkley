'use client';

import { useCurrency } from '@/lib/currency/context';
import { CURRENCY_LABELS, supportedCurrencies, type Currency } from '@/lib/currency';
import { useLang } from '@/lib/i18n/context';

export function CurrencyToggle({ scale = 1 }: { scale?: number }) {
  const { currency, setCurrency } = useCurrency();
  const { lang } = useLang();

  return (
    <div
      role="group"
      aria-label={lang === 'ru' ? 'Валюта' : 'Currency'}
      className="inline-flex items-center gap-[2px] bg-black/[.04] rounded-[30px] p-[3px]"
      style={{ transform: scale !== 1 ? `scale(${scale})` : undefined }}
    >
      {supportedCurrencies.map((c: Currency) => {
        const meta = CURRENCY_LABELS[c];
        const active = currency === c;
        return (
          <button
            key={c}
            type="button"
            onClick={() => setCurrency(c)}
            aria-pressed={active}
            aria-label={`${meta.name[lang]} (${meta.code})`}
            title={meta.name[lang]}
            className={[
              'font-body text-[12px] font-semibold tracking-[0.04em] px-[10px] py-[6px] rounded-[30px] transition-all duration-300',
              active ? 'bg-sage text-white shadow-[0_2px_8px_rgba(124,154,124,0.3)]' : 'text-text-muted bg-transparent',
            ].join(' ')}
          >
            <span aria-hidden="true" className="mr-[3px]">{meta.flag}</span>
            {meta.code}
          </button>
        );
      })}
    </div>
  );
}
