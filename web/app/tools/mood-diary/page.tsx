'use client';

import { useEffect, useState } from 'react';
import Link from 'next/link';
import { useLang } from '@/lib/i18n/context';
import { PageHeader } from '@/components/sections/PageHeader';

interface Entry {
  mood: string;
  text: string;
  date: string;
}

const MOODS = [
  { id: 'great', color: '#A8D5A2' },
  { id: 'good', color: '#7C9A7C' },
  { id: 'okay', color: '#C4A265' },
  { id: 'low', color: '#D4A9A9' },
  { id: 'bad', color: '#D49A9A' },
];

const LABELS = {
  en: ['Great', 'Good', 'Okay', 'Low', 'Difficult'],
  ru: ['Отлично', 'Хорошо', 'Нормально', 'Низко', 'Тяжело'],
};

const TEXT = {
  en: { title: 'Mood Diary', sub: 'Check in with yourself. How are you feeling right now?', ph: 'One thought, feeling, or observation… (optional)', save: 'Save Entry', recent: 'Recent entries', noData: 'No entries yet.', clear: 'Clear all entries' },
  ru: { title: 'Дневник настроения', sub: 'Отметьте, как вы себя чувствуете прямо сейчас.', ph: 'Одна мысль, чувство или наблюдение… (по желанию)', save: 'Сохранить', recent: 'Последние записи', noData: 'Пока нет записей.', clear: 'Очистить все' },
};

function readEntries(): Entry[] {
  try {
    const raw = localStorage.getItem('mood_diary');
    return raw ? JSON.parse(raw) : [];
  } catch {
    return [];
  }
}

function writeEntries(e: Entry[]) {
  try { localStorage.setItem('mood_diary', JSON.stringify(e)); } catch {}
}

export default function MoodDiaryPage() {
  const { lang } = useLang();
  const txt = TEXT[lang];
  const [entries, setEntries] = useState<Entry[]>([]);
  const [mood, setMood] = useState<string | null>(null);
  const [text, setText] = useState('');
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setEntries(readEntries());
    setMounted(true);
  }, []);

  const save = () => {
    if (!mood) return;
    const next: Entry = { mood, text, date: new Date().toISOString() };
    const updated = [next, ...entries].slice(0, 60);
    setEntries(updated);
    writeEntries(updated);
    setMood(null);
    setText('');
  };

  const clearAll = () => {
    if (!confirm(lang === 'en' ? 'Clear all entries?' : 'Очистить все записи?')) return;
    setEntries([]);
    try { localStorage.removeItem('mood_diary'); } catch {}
  };

  return (
    <>
      <PageHeader headingKey="tools" />
      <section className="py-8 px-7 pb-32">
        <div className="container-x" style={{ maxWidth: '560px' }}>
          <Link href="/tools" className="text-sage font-semibold text-[14px] hover:underline mb-6 inline-block">
            {lang === 'en' ? '← All tools' : '← Все инструменты'}
          </Link>

          <h2 className="mb-2">{txt.title}</h2>
          <p className="text-text-muted font-light mb-8" style={{ fontSize: '15px' }}>{txt.sub}</p>

          <div className="flex gap-3 justify-center mb-6 flex-wrap">
            {MOODS.map((m, i) => (
              <button
                key={m.id}
                type="button"
                onClick={() => setMood(m.id)}
                aria-pressed={mood === m.id}
                aria-label={LABELS[lang][i]}
                className={[
                  'flex flex-col items-center gap-1.5 p-3 rounded-2xl border-2 transition-all',
                  mood === m.id ? 'border-sage bg-sage-pale' : 'border-transparent hover:bg-black/[.02]',
                ].join(' ')}
              >
                <div className="w-9 h-9 rounded-full" style={{ background: m.color }} />
                <span className="text-[10px] font-heading font-medium text-text-muted">{LABELS[lang][i]}</span>
              </button>
            ))}
          </div>

          <textarea
            value={text}
            onChange={(e) => setText(e.target.value)}
            placeholder={txt.ph}
            rows={3}
            className="w-full px-5 py-4 rounded-2xl bg-white border-[1.5px] border-border outline-none focus:border-sage transition-colors resize-y text-[14px]"
          />

          <button type="button" onClick={save} disabled={!mood} className="btn-primary w-full justify-center mt-4 disabled:opacity-40 disabled:cursor-not-allowed">
            {txt.save}
          </button>

          {mounted && entries.length > 0 && (
            <>
              <h3 className="mt-12 mb-4">{txt.recent}</h3>
              <ul className="flex flex-col gap-3">
                {entries.slice(0, 10).map((e, i) => (
                  <li key={i} className="p-4 rounded-2xl bg-white border border-border">
                    <div className="flex items-center gap-3 mb-2">
                      <div className="w-5 h-5 rounded-full" style={{ background: MOODS.find((m) => m.id === e.mood)?.color }} />
                      <span className="text-[12px] text-text-muted font-light">
                        {new Date(e.date).toLocaleDateString(lang === 'en' ? 'en-GB' : 'ru-RU')}
                      </span>
                    </div>
                    {e.text && <p className="text-[14px] text-text font-light leading-[1.6]">{e.text}</p>}
                  </li>
                ))}
              </ul>
              <button type="button" onClick={clearAll} className="text-[12px] text-text-muted hover:text-rose-deep mt-6 mx-auto block">
                {txt.clear}
              </button>
            </>
          )}

          {mounted && entries.length === 0 && (
            <p className="text-center text-text-muted text-[14px] font-light mt-10">{txt.noData}</p>
          )}
        </div>
      </section>
    </>
  );
}
