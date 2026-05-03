'use client';

import Link from 'next/link';
import { useEffect } from 'react';
import { useLang } from '@/lib/i18n/context';
import { LangToggle } from '@/components/ui/LangToggle';

const MOBILE_ROUTES = [
  '/',
  '/about',
  '/services',
  '/issues',
  '/pricing',
  '/tools',
  '/blog',
  '/b2b',
  '/contact',
] as const;

export function MobileMenu({ open, onClose }: { open: boolean; onClose: () => void }) {
  const { t } = useLang();

  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : '';
    return () => { document.body.style.overflow = ''; };
  }, [open]);

  return (
    <div
      id="mobile-menu"
      className={[
        'fixed inset-0 z-[999] bg-bg flex flex-col justify-center items-center gap-3 transition-opacity duration-500',
        open ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none',
      ].join(' ')}
      aria-hidden={!open}
    >
      {MOBILE_ROUTES.map((route, i) => (
        <Link
          key={route}
          href={route}
          onClick={onClose}
          className="font-heading font-light text-charcoal py-2 transition-all duration-[400ms] tracking-[-0.02em] hover:text-sage hover:translate-x-[10px]"
          style={{ fontSize: 'clamp(24px, 6vw, 38px)' }}
        >
          {t.navMobile[i]}
        </Link>
      ))}
      <div className="mt-5">
        <LangToggle scale={1.3} />
      </div>
    </div>
  );
}
