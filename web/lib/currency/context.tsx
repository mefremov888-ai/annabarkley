'use client';

import { createContext, useCallback, useContext, useEffect, useMemo, useRef, useState } from 'react';
import { defaultCurrency, detectCurrency, isCurrency, type Currency } from './index';
import { getRates, type Rates } from './rates';
import { trackEvent } from '@/lib/analytics';

interface CurrencyContextValue {
  currency: Currency;
  setCurrency: (c: Currency) => void;
  rates: Rates | null;
  ready: boolean;
}

const STORAGE_KEY = 'ab_currency';

const CurrencyContext = createContext<CurrencyContextValue | null>(null);

export function CurrencyProvider({ children }: { children: React.ReactNode }) {
  const [currency, setCurrencyState] = useState<Currency>(defaultCurrency);
  const [rates, setRates] = useState<Rates | null>(null);
  const [ready, setReady] = useState(false);
  const isHydrated = useRef(false);

  // На клиенте — восстановить выбор из localStorage или авто-детект.
  useEffect(() => {
    try {
      const stored = localStorage.getItem(STORAGE_KEY);
      if (isCurrency(stored)) {
        setCurrencyState(stored);
      } else {
        setCurrencyState(detectCurrency());
      }
    } catch {
      setCurrencyState(detectCurrency());
    }
    setReady(true);
    isHydrated.current = true;
  }, []);

  // Загрузить/обновить курсы.
  useEffect(() => {
    let alive = true;
    getRates().then((r) => {
      if (alive) setRates(r);
    });
    return () => {
      alive = false;
    };
  }, []);

  const setCurrency = useCallback((c: Currency) => {
    setCurrencyState(c);
    try {
      localStorage.setItem(STORAGE_KEY, c);
    } catch {
      // ignore
    }
    if (isHydrated.current) trackEvent('currency_change', { to: c });
  }, []);

  const value = useMemo<CurrencyContextValue>(
    () => ({ currency, setCurrency, rates, ready }),
    [currency, setCurrency, rates, ready],
  );

  return <CurrencyContext.Provider value={value}>{children}</CurrencyContext.Provider>;
}

export function useCurrency(): CurrencyContextValue {
  const ctx = useContext(CurrencyContext);
  if (!ctx) throw new Error('useCurrency must be used within CurrencyProvider');
  return ctx;
}
