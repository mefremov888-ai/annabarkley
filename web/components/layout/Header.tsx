'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useEffect, useState } from 'react';
import { useLang } from '@/lib/i18n/context';
import { AB_CONFIG } from '@/lib/config';
import { Logo } from '@/components/ui/Logo';
import { LangToggle } from '@/components/ui/LangToggle';
import { MobileMenu } from './MobileMenu';

const NAV_ROUTES = ['/', '/services', '/issues', '/pricing', '/contact'] as const;

export function Header() {
  const { t } = useLang();
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  // Закрывать меню при смене маршрута
  useEffect(() => {
    setMenuOpen(false);
  }, [pathname]);

  return (
    <>
      <header
        className={[
          'fixed top-0 left-0 right-0 z-[1000] transition-all duration-500 ease-curve',
          scrolled
            ? 'py-[14px] px-7 bg-bg/[0.88] backdrop-blur-[24px] backdrop-saturate-150 border-b border-border/60'
            : 'py-[22px] px-7',
        ].join(' ')}
      >
        <div className="max-w-container mx-auto flex items-center justify-between">
          <Logo />

          <nav className="flex items-center gap-1 max-[900px]:hidden" aria-label="Primary">
            {NAV_ROUTES.map((route, i) => {
              const isActive = route === '/' ? pathname === '/' : pathname.startsWith(route);
              return (
                <Link
                  key={route}
                  href={route}
                  aria-current={isActive ? 'page' : undefined}
                  className={[
                    'font-body text-[13px] font-normal px-[14px] py-2 rounded-full transition-all duration-300',
                    isActive ? 'bg-sage-pale text-sage font-semibold' : 'text-text hover:bg-sage-pale hover:text-sage hover:font-semibold',
                  ].join(' ')}
                >
                  {t.nav[i]}
                </Link>
              );
            })}
            <LangToggle />
            <a
              href={AB_CONFIG.WA_URL}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Chat on WhatsApp"
              className="btn-wa ml-2"
              style={{ padding: '12px 20px', fontSize: '12px' }}
            >
              WhatsApp
            </a>
          </nav>

          <button
            type="button"
            aria-label={menuOpen ? 'Close navigation menu' : 'Open navigation menu'}
            aria-expanded={menuOpen}
            aria-controls="mobile-menu"
            onClick={() => setMenuOpen((v) => !v)}
            className="hidden max-[900px]:flex items-center justify-center bg-transparent border-0 cursor-pointer p-1 z-[1002]"
          >
            <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={menuOpen ? 2 : 1.5} strokeLinecap="round" aria-hidden="true">
              {menuOpen ? (
                <>
                  <line x1="18" y1="6" x2="6" y2="18" />
                  <line x1="6" y1="6" x2="18" y2="18" />
                </>
              ) : (
                <>
                  <line x1="4" y1="7" x2="20" y2="7" />
                  <line x1="4" y1="12" x2="16" y2="12" />
                  <line x1="4" y1="17" x2="20" y2="17" />
                </>
              )}
            </svg>
          </button>
        </div>
      </header>
      <MobileMenu open={menuOpen} onClose={() => setMenuOpen(false)} />
    </>
  );
}
