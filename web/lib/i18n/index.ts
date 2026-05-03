import { en } from './en';
import { ru } from './ru';
import type { Dictionary, Lang } from './types';

export type { Dictionary, Lang };

export const dictionaries: Record<Lang, Dictionary> = { en, ru };

export const defaultLang: Lang = 'en';
export const supportedLangs: Lang[] = ['en', 'ru'];

export function isLang(value: string | null | undefined): value is Lang {
  return value === 'en' || value === 'ru';
}
