'use client';

import { createContext, useCallback, useContext, useEffect, useMemo, useState } from 'react';
import { defaultLang, dictionaries, isLang, supportedLangs } from './index';
import type { Dictionary, Lang } from './types';

interface LangContextValue {
  lang: Lang;
  t: Dictionary;
  setLang: (l: Lang) => void;
  toggleLang: () => void;
}

const LangContext = createContext<LangContextValue | null>(null);

export function LangProvider({ children, initial }: { children: React.ReactNode; initial?: Lang }) {
  const [lang, setLangState] = useState<Lang>(initial ?? defaultLang);

  // Восстановить выбор языка из localStorage на клиенте
  useEffect(() => {
    try {
      const stored = localStorage.getItem('ab_lang');
      if (isLang(stored) && stored !== lang) setLangState(stored);
    } catch {}
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  // Синхронизировать <html lang>
  useEffect(() => {
    if (typeof document !== 'undefined') {
      document.documentElement.lang = lang;
    }
  }, [lang]);

  const setLang = useCallback((l: Lang) => {
    setLangState(l);
    try { localStorage.setItem('ab_lang', l); } catch {}
  }, []);

  const toggleLang = useCallback(() => {
    setLang(lang === 'en' ? 'ru' : 'en');
  }, [lang, setLang]);

  const value = useMemo<LangContextValue>(() => ({
    lang,
    t: dictionaries[lang],
    setLang,
    toggleLang,
  }), [lang, setLang, toggleLang]);

  return <LangContext.Provider value={value}>{children}</LangContext.Provider>;
}

export function useLang(): LangContextValue {
  const ctx = useContext(LangContext);
  if (!ctx) throw new Error('useLang must be used within LangProvider');
  return ctx;
}

export { supportedLangs };
