'use client';

import { useEffect, useState } from 'react';
import { useLang } from '@/lib/i18n/context';
import { loadAnalytics } from '@/lib/analytics';

type Consent = 'accept' | 'reject' | null;

function readConsent(): Consent {
  try {
    const v = localStorage.getItem('cookie_consent');
    if (v === 'accept' || v === 'reject') return v;
  } catch {}
  return null;
}

function writeConsent(v: Exclude<Consent, null>) {
  try { localStorage.setItem('cookie_consent', v); } catch {}
}

export function CookieBanner() {
  const { t } = useLang();
  const [show, setShow] = useState(false);

  useEffect(() => {
    const v = readConsent();
    if (v === 'accept') {
      loadAnalytics();
      return;
    }
    if (v === 'reject') return;
    const timer = setTimeout(() => setShow(true), 3000);
    return () => clearTimeout(timer);
  }, []);

  const accept = () => {
    writeConsent('accept');
    setShow(false);
    loadAnalytics();
  };
  const reject = () => {
    writeConsent('reject');
    setShow(false);
  };

  if (!show) return null;

  return (
    <div
      role="region"
      aria-label="Cookie consent"
      className="fixed bottom-0 left-0 right-0 z-[998] bg-charcoal text-white px-7 py-4 flex items-center justify-center gap-4 flex-wrap max-sm:flex-col max-sm:text-center"
    >
      <p className="text-[13px] font-light text-white/60 m-0 max-w-[760px]">{t.cookieT}</p>
      <div className="flex gap-[10px] flex-wrap">
        <button
          type="button"
          onClick={accept}
          className="font-body text-[13px] font-semibold px-5 py-2 rounded-[30px] border-0 cursor-pointer transition-all duration-300 bg-sage text-white hover:bg-sage-deep"
        >
          {t.cookieAccept}
        </button>
        <button
          type="button"
          onClick={reject}
          className="font-body text-[13px] font-semibold px-5 py-2 rounded-[30px] cursor-pointer transition-all duration-300 bg-transparent text-white/65 border border-white/25 hover:border-white/50"
        >
          {t.cookieReject}
        </button>
      </div>
    </div>
  );
}
