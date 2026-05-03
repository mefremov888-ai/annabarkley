'use client';

import { useLang } from '@/lib/i18n/context';
import type { Lang } from '@/lib/i18n/types';

export function LangToggle({ scale = 1 }: { scale?: number }) {
  const { lang, setLang } = useLang();
  const langs: Lang[] = ['en', 'ru'];

  return (
    <div
      role="group"
      aria-label="Language"
      className="inline-flex items-center gap-[2px] bg-black/[.04] rounded-[30px] p-[3px]"
      style={{ transform: scale !== 1 ? `scale(${scale})` : undefined }}
    >
      {langs.map((l) => (
        <button
          key={l}
          type="button"
          onClick={() => setLang(l)}
          aria-pressed={lang === l}
          aria-label={`Switch to ${l === 'en' ? 'English' : 'Russian'}`}
          className={[
            'font-body text-[12px] font-semibold tracking-[0.05em] px-[14px] py-[6px] rounded-[30px] transition-all duration-300',
            lang === l ? 'bg-sage text-white shadow-[0_2px_8px_rgba(124,154,124,0.3)]' : 'text-text-muted bg-transparent',
          ].join(' ')}
        >
          {l.toUpperCase()}
        </button>
      ))}
    </div>
  );
}
