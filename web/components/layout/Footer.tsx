'use client';

import Link from 'next/link';
import { useLang } from '@/lib/i18n/context';
import { AB_CONFIG } from '@/lib/config';

export function Footer() {
  const { t, lang } = useLang();
  const year = new Date().getFullYear();

  const navLinks = [
    { href: '/', label: t.navMobile[0] },
    { href: '/about', label: t.navMobile[1] },
    { href: '/services', label: t.navMobile[2] },
    { href: '/issues', label: t.navMobile[3] },
    { href: '/pricing', label: t.navMobile[4] },
    { href: '/contact', label: t.navMobile[8] },
    { href: '/blog', label: t.navMobile[6] },
    { href: '/b2b', label: t.navMobile[7] },
  ];

  return (
    <footer className="bg-charcoal text-white relative overflow-hidden">
      <div className="container-x py-20 grid grid-cols-[2fr_1fr_1fr_1fr] gap-12 max-md:grid-cols-1 max-md:gap-8">
        <div>
          <div className="font-heading text-[20px] font-normal text-white mb-3">Anna Barkley</div>
          <p className="text-[13px] text-white/55 leading-[1.85] font-light max-w-[320px]">{t.heroS}</p>
        </div>

        <div>
          <h3 className="text-[12px] uppercase tracking-[0.2em] font-bold text-white/40 mb-5">{t.footerNav}</h3>
          <ul className="flex flex-col gap-2">
            {navLinks.map((l) => (
              <li key={l.href}>
                <Link href={l.href} className="text-[14px] text-white/50 font-light transition-all duration-300 hover:text-sage hover:translate-x-1 inline-block">
                  {l.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h3 className="text-[12px] uppercase tracking-[0.2em] font-bold text-white/40 mb-5">{t.footerServices}</h3>
          <ul className="flex flex-col gap-2 text-[14px] text-white/50 font-light">
            {t.pillars.map((p) => (
              <li key={p.t}>{p.t}</li>
            ))}
            <li>{lang === 'en' ? 'Online sessions' : 'Онлайн-сессии'}</li>
          </ul>
        </div>

        <div>
          <h3 className="text-[12px] uppercase tracking-[0.2em] font-bold text-white/40 mb-5">{t.footerConnect}</h3>
          <ul className="flex flex-col gap-2 text-[14px] text-white/50 font-light">
            <li><a href={`mailto:${AB_CONFIG.EMAIL}`} className="hover:text-sage transition-colors">{AB_CONFIG.EMAIL}</a></li>
            <li><a href={`tel:${AB_CONFIG.PHONE_RAW}`} className="hover:text-sage transition-colors">{AB_CONFIG.PHONE}</a></li>
            <li>{AB_CONFIG.CITY}</li>
            <li>{AB_CONFIG.HOURS}</li>
          </ul>
        </div>
      </div>
      <div className="border-t border-white/10 py-6 px-7 text-center text-[12px] text-white/35">
        © {year} Anna Barkley · <Link href="/privacy" className="hover:text-sage">Privacy</Link> · <Link href="/terms" className="hover:text-sage">Terms</Link>
      </div>
    </footer>
  );
}
