'use client';

import Link from 'next/link';
import { useLang } from '@/lib/i18n/context';

export function Logo() {
  const { t } = useLang();
  return (
    <Link href="/" aria-label="Anna Barkley — homepage" className="flex items-center gap-3 group">
      <div
        aria-hidden="true"
        className="w-[42px] h-[42px] rounded-[14px] flex items-center justify-center transition-transform duration-[400ms] ease-curve group-hover:rotate-[-8deg] group-hover:scale-[1.05]"
        style={{
          background: 'linear-gradient(135deg, var(--sage), var(--rose-deep))',
          boxShadow: '0 4px 20px rgba(124, 154, 124, 0.25)',
        }}
      >
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="1.5" strokeLinecap="round">
          <path d="M11 20A7 7 0 0 1 9.8 6.9C15.5 4.9 17 3.5 19 2c1 2 2 4.5 1 8-1.5 5-5.7 8.5-9 10z" />
          <path d="M2 21c0-3 1.85-5.36 5.08-6C9.5 14.52 12 13 13 12" />
        </svg>
      </div>
      <div>
        <div className="font-heading text-[18px] font-normal text-charcoal">Anna Barkley</div>
        <div className="text-[10px] text-text-muted uppercase font-medium tracking-[0.12em]">{t.hdr}</div>
      </div>
    </Link>
  );
}
