'use client';

import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { useLang } from '@/lib/i18n/context';
import { AB_CONFIG } from '@/lib/config';
import { PageHeader } from '@/components/sections/PageHeader';

type LabelSide = 'left' | 'right';

interface Zone {
  id: ZoneId;
  x: number;
  y: number;
  cl: string;
  ls: LabelSide;
}

type ZoneId =
  | 'head' | 'jaw' | 'throat' | 'shoulders' | 'chest'
  | 'back' | 'stomach' | 'hands' | 'lower' | 'legs';

const Z: Zone[] = [
  { id: 'head',      x: 48, y: 10, cl: '#C9B5D4', ls: 'right' },
  { id: 'jaw',       x: 48, y: 18, cl: '#D49A9A', ls: 'left'  },
  { id: 'throat',    x: 48, y: 22, cl: '#89A4C7', ls: 'right' },
  { id: 'shoulders', x: 36, y: 26, cl: '#9BB5A0', ls: 'left'  },
  { id: 'chest',     x: 46, y: 34, cl: '#A8D5A2', ls: 'right' },
  { id: 'back',      x: 68, y: 30, cl: '#C4B08B', ls: 'right' },
  { id: 'stomach',   x: 48, y: 46, cl: '#D4C49A', ls: 'left'  },
  { id: 'hands',     x: 10, y: 55, cl: '#A8BFA8', ls: 'left'  },
  { id: 'lower',     x: 48, y: 56, cl: '#D49A9A', ls: 'right' },
  { id: 'legs',      x: 44, y: 82, cl: '#9BB5A0', ls: 'left'  },
];

interface Bilingual { en: string; ru: string }
interface BilingualList { en: string[]; ru: string[] }

interface ZoneContent {
  n: Bilingual;
  intro: Bilingual;
  q1: Bilingual;
  o1a: Bilingual;
  o1b: Bilingual;
  q2: Bilingual;
  o2a: Bilingual;
  o2b: Bilingual;
  d_aa: Bilingual;
  d_ab: Bilingual;
  d_ba: Bilingual;
  d_bb: Bilingual;
  sym: BilingualList;
  emo: { t: Bilingual; c: string }[];
  helps: BilingualList;
  seek: Bilingual;
}

const ZC: Record<ZoneId, ZoneContent> = {
  head: {
    n: { en: 'Head', ru: 'Голова' },
    intro: {
      en: "The head often carries what we try to control through thinking.\nDo you notice it's hard to 'turn off'?",
      ru: 'Голова часто берёт на себя то, что мы контролируем.\nВам трудно «выключиться»?',
    },
    q1: { en: 'Do you overthink after situations pass?', ru: 'Прокручиваете ситуации после того, как они прошли?' },
    o1a: { en: 'Yes, constantly', ru: 'Да, постоянно' },
    o1b: { en: 'Sometimes', ru: 'Иногда' },
    q2: { en: 'Hard to fall asleep from racing thoughts?', ru: 'Трудно заснуть из-за мыслей?' },
    o2a: { en: 'Yes', ru: 'Да' },
    o2b: { en: 'Not really', ru: 'Не особо' },
    d_aa: {
      en: 'Your mind is always running. Overthinking is often a way to feel safe — but the head pays the price.',
      ru: 'Ум всегда работает. Перемыкание — способ чувствовать себя в безопасности. Но голова платит.',
    },
    d_ab: {
      en: 'Even occasional overthinking leaves marks. Notice when it happens — usually in moments of uncertainty.',
      ru: 'Даже редкое перемыкание оставляет след. Замечайте, когда — обычно в моменты неопределённости.',
    },
    d_ba: {
      en: "Thoughts that won't stop at night mean something unresolved is asking for attention. Not solving — just acknowledgment.",
      ru: 'Мысли не дают спать — что-то нерешённое просит внимания. Не решения — признания.',
    },
    d_bb: {
      en: "Good. The tension might be about responsibility or needing to be 'always on.'",
      ru: 'Напряжение может быть от ответственности или необходимости быть «всегда включённым».',
    },
    sym: {
      en: ['Tension headaches', 'Migraines', 'Mental fog', 'Pressure behind eyes'],
      ru: ['Боли напряжения', 'Мигрени', 'Туман в голове', 'Давление за глазами'],
    },
    emo: [
      { t: { en: 'Anxiety', ru: 'Тревога' }, c: '#C4B08B' },
      { t: { en: 'Overthinking', ru: 'Перемыкание' }, c: '#C9B5D4' },
      { t: { en: 'Perfectionism', ru: 'Перфекционизм' }, c: '#89A4C7' },
    ],
    helps: {
      en: ['Body-scan meditation', 'Journaling before bed', 'Setting thinking boundaries'],
      ru: ['Медитация сканирования тела', 'Дневник перед сном', 'Границы для мыслей'],
    },
    seek: {
      en: 'Chronic headaches deserve a medical evaluation alongside therapy.',
      ru: 'Хронические головные боли — врач плюс терапия.',
    },
  },
  jaw: {
    n: { en: 'Jaw', ru: 'Челюсть' },
    intro: {
      en: 'The jaw holds what we clench back.\nDo you grind teeth at night or clench during the day?',
      ru: 'Челюсть хранит сжатое.\nСкрежещете зубами ночью или сжимаете челюсть днём?',
    },
    q1: { en: 'Something you want to say but keep holding back?', ru: 'Есть что-то, что хочется сказать, но удерживаете?' },
    o1a: { en: 'Yes', ru: 'Да' },
    o1b: { en: 'Not sure', ru: 'Не уверен(а)' },
    q2: { en: 'Do you suppress frustration or anger?', ru: 'Подавляете раздражение или злость?' },
    o2a: { en: 'Yes, often', ru: 'Да, часто' },
    o2b: { en: 'Not particularly', ru: 'Не особо' },
    d_aa: {
      en: "Something unspoken — your jaw literally holds it. The body doesn't forget what the mind silences.",
      ru: 'Невысказанное — челюсть буквально держит. Тело не забывает того, что ум заглушает.',
    },
    d_ab: {
      en: 'Even unnamed, your jaw may hold tension worth noticing.',
      ru: 'Даже без имени — челюсть хранит напряжение, которое стоит заметить.',
    },
    d_ba: {
      en: "Suppressed anger doesn't disappear. It finds another exit — often through the jaw.",
      ru: 'Подавленная злость не исчезает. Она ищет выход — часто через челюсть.',
    },
    d_bb: {
      en: 'Maybe tension from determination — you push through, and the jaw absorbs it.',
      ru: 'Может быть, напряжение от решимости — вы давите вперёд, челюсть поглощает усилие.',
    },
    sym: {
      en: ['Night grinding', 'TMJ pain', 'Daytime clenching', 'Jaw headaches'],
      ru: ['Ночной скрежет', 'Боль ВНЧС', 'Дневное сжимание', 'Головные боли от челюсти'],
    },
    emo: [
      { t: { en: 'Suppressed anger', ru: 'Подавленная злость' }, c: '#D49A9A' },
      { t: { en: 'Control', ru: 'Контроль' }, c: '#C9B5D4' },
    ],
    helps: {
      en: ['Jaw massage before sleep', 'Notice clenching', 'Express frustration in words'],
      ru: ['Массаж челюсти перед сном', 'Замечать сжимание', 'Выражать раздражение словами'],
    },
    seek: {
      en: 'Teeth damage or chronic TMJ benefits from dental and therapy support together.',
      ru: 'Повреждение зубов или хронический ВНЧС — стоматолог плюс терапия.',
    },
  },
  throat: {
    n: { en: 'Throat', ru: 'Горло' },
    intro: {
      en: 'The throat holds everything unsaid.\nDo you feel a lump or tightness here?',
      ru: 'Горло хранит невысказанное.\nЧувствуете ком или сдавленность?',
    },
    q1: { en: "Situations where it's hard to speak your truth?", ru: 'Бывают ситуации, когда трудно сказать правду?' },
    o1a: { en: 'Yes, definitely', ru: 'Да, определённо' },
    o1b: { en: 'Sometimes', ru: 'Иногда' },
    q2: { en: 'More fear of conflict or judgment?', ru: 'Больше страх конфликта или осуждения?' },
    o2a: { en: 'Conflict', ru: 'Конфликта' },
    o2b: { en: 'Judgment', ru: 'Осуждения' },
    d_aa: {
      en: 'Chronically holding back tightens the throat. Your body speaks for your silence.',
      ru: 'Постоянное сдерживание сжимает горло. Тело говорит за молчание.',
    },
    d_ab: {
      en: 'Even occasional suppression leaves traces. Notice which situations tighten your throat.',
      ru: 'Даже редкое подавление оставляет след. Замечайте, какие ситуации сжимают горло.',
    },
    d_ba: {
      en: "Fear of conflict means others' comfort matters more than your truth. The throat pays.",
      ru: 'Страх конфликта означает, что чужой комфорт важнее вашей правды. Горло платит.',
    },
    d_bb: {
      en: 'Fear of judgment can silence the most important things. What if being seen is what you need?',
      ru: 'Страх осуждения заглушает самое важное. А что, если быть увиденным — это то, что нужно?',
    },
    sym: {
      en: ['Lump in throat', 'Voice loss', 'Tight neck'],
      ru: ['Ком в горле', 'Потеря голоса', 'Напряжение шеи'],
    },
    emo: [
      { t: { en: 'Suppressed truth', ru: 'Подавленная правда' }, c: '#89A4C7' },
      { t: { en: 'Shame', ru: 'Стыд' }, c: '#D49A9A' },
    ],
    helps: {
      en: ['Voice exercises', 'Unsent letters', 'Small acts of honesty'],
      ru: ['Голосовые упражнения', 'Письма без отправки', 'Маленькие шаги честности'],
    },
    seek: {
      en: 'A persistent lump may improve with assertiveness-focused therapy.',
      ru: 'Постоянный ком может облегчиться в терапии ассертивности.',
    },
  },
  shoulders: {
    n: { en: 'Shoulders', ru: 'Плечи' },
    intro: {
      en: 'Shoulders carry the weight of responsibility.\nDo you feel you must handle everything alone?',
      ru: 'Плечи несут вес ответственности.\nЧувствуете, что должны справляться один?',
    },
    q1: { en: 'Hard for you to ask for help?', ru: 'Трудно просить о помощи?' },
    o1a: { en: 'Very hard', ru: 'Очень' },
    o1b: { en: 'Sometimes', ru: 'Иногда' },
    q2: { en: "Do you take on other people's problems?", ru: 'Берёте на себя чужие проблемы?' },
    o2a: { en: 'Yes', ru: 'Да' },
    o2b: { en: 'Not really', ru: 'Не особо' },
    d_aa: {
      en: 'When asking for help feels impossible, shoulders absorb everything.',
      ru: 'Когда просить о помощи невозможно — плечи впитывают всё.',
    },
    d_ab: {
      en: 'Even occasional reluctance builds up. Shoulders stiffen a little more each time.',
      ru: 'Даже редкое нежелание просить накапливается. Плечи сжимаются каждый раз чуть сильнее.',
    },
    d_ba: {
      en: "Taking on others' burdens is generous but costly. Your body says there's a limit.",
      ru: 'Нести чужое — щедро, но дорого. Тело говорит — есть предел.',
    },
    d_bb: {
      en: 'Then tension might be about your own high standards.',
      ru: 'Тогда напряжение может быть от собственных высоких стандартов.',
    },
    sym: {
      en: ['Chronic tension', 'Stiffness', 'Neck-shoulder pain'],
      ru: ['Хроническое напряжение', 'Скованность', 'Боль шея-плечи'],
    },
    emo: [
      { t: { en: 'Burden', ru: 'Бремя' }, c: '#9BB5A0' },
      { t: { en: 'Guilt', ru: 'Вина' }, c: '#D49A9A' },
    ],
    helps: {
      en: ['Delegate one thing this week', 'Daily stretches', 'Name what you carry'],
      ru: ['Делегировать одно дело на этой неделе', 'Ежедневные растяжки', 'Назвать, что несёте'],
    },
    seek: {
      en: 'Chronic shoulder tension with headaches often eases as therapy redistributes the load.',
      ru: 'Хроническое напряжение плеч плюс головные боли часто облегчается, когда терапия помогает перераспределить нагрузку.',
    },
  },
  chest: {
    n: { en: 'Chest', ru: 'Грудь' },
    intro: {
      en: "The chest is your emotional center.\nTension here often means feelings you're not letting yourself feel.",
      ru: 'Грудь — эмоциональный центр.\nНапряжение здесь часто означает чувства, которые вы себе не разрешаете.',
    },
    q1: { en: 'Hold back emotions or express them?', ru: 'Сдерживаете эмоции или выражаете?' },
    o1a: { en: 'Hold back', ru: 'Сдерживаю' },
    o1b: { en: 'Express', ru: 'Выражаю' },
    q2: { en: "Something important that's hard to say to someone?", ru: 'Есть что-то важное, что трудно сказать кому-то?' },
    o2a: { en: 'Yes', ru: 'Да' },
    o2b: { en: 'Not really', ru: 'Не совсем' },
    d_aa: {
      en: "You hold a lot inside. The chest contracts when we're afraid to feel.",
      ru: 'Многое внутри. Грудь сжимается, когда боимся чувствовать.',
    },
    d_ab: {
      en: 'You can express, but perhaps not always safely. That distinction matters.',
      ru: 'Вы выражаете, но, возможно, не всегда безопасно. Это важное различие.',
    },
    d_ba: {
      en: 'Something specific is waiting. The heart knows — even when the mind avoids it.',
      ru: 'Что-то конкретное ждёт. Сердце знает — даже когда ум избегает.',
    },
    d_bb: {
      en: 'Maybe about loss or vulnerability. The chest often carries old grief.',
      ru: 'Может быть, про потерю или уязвимость. Грудь часто хранит старое горе.',
    },
    sym: {
      en: ['Chest tightness', 'Palpitations', 'Heaviness'],
      ru: ['Сдавленность в груди', 'Сердцебиение', 'Тяжесть'],
    },
    emo: [
      { t: { en: 'Grief', ru: 'Горе' }, c: '#89A4C7' },
      { t: { en: 'Heartbreak', ru: 'Боль сердца' }, c: '#D49A9A' },
      { t: { en: 'Anxiety', ru: 'Тревога' }, c: '#C4B08B' },
    ],
    helps: {
      en: ['Diaphragmatic breathing', 'Allow yourself to cry', 'Vulnerability journal'],
      ru: ['Диафрагмальное дыхание', 'Разрешить себе плакать', 'Дневник уязвимости'],
    },
    seek: {
      en: 'Rule out cardiac causes first. If clear, grief-focused therapy may help.',
      ru: 'Сначала исключите кардиологию. Если норма — терапия горя может помочь.',
    },
  },
  back: {
    n: { en: 'Back', ru: 'Спина' },
    intro: {
      en: 'The back represents support.\nDo you feel supported in your life right now?',
      ru: 'Спина — это опора.\nЧувствуете поддержку в жизни сейчас?',
    },
    q1: { en: 'People you can truly lean on?', ru: 'Есть люди, на которых можно опереться?' },
    o1a: { en: 'Not really', ru: 'Не особо' },
    o1b: { en: 'Yes, some', ru: 'Да, есть' },
    q2: { en: 'Learned early you can only rely on yourself?', ru: 'Рано научились рассчитывать только на себя?' },
    o2a: { en: 'Yes', ru: 'Да' },
    o2b: { en: 'Not exactly', ru: 'Не совсем' },
    d_aa: {
      en: 'When support is absent, the back stiffens to compensate. Especially for expats.',
      ru: 'Когда поддержки нет — спина каменеет, чтобы компенсировать. Особенно у экспатов.',
    },
    d_ab: {
      en: "Having some support is good. But the back says it's not enough — or you don't let them in.",
      ru: 'Какая-то поддержка есть. Но спина говорит — недостаточно. Или вы не впускаете.',
    },
    d_ba: {
      en: 'Self-reliance as survival becomes armor. The back is tired of carrying what could be shared.',
      ru: 'Самоопора как выживание становится бронёй. Спина устала нести то, чем можно поделиться.',
    },
    d_bb: {
      en: 'Then pain might be about a specific situation. What changed recently?',
      ru: 'Тогда боль может быть про конкретную ситуацию. Что изменилось недавно?',
    },
    sym: {
      en: ['Upper back pain', 'Morning stiffness', 'Stress pain'],
      ru: ['Боль в верхней части спины', 'Утренняя скованность', 'Боль от стресса'],
    },
    emo: [
      { t: { en: 'Loneliness', ru: 'Одиночество' }, c: '#89A4C7' },
      { t: { en: 'Betrayal', ru: 'Предательство' }, c: '#D49A9A' },
    ],
    helps: {
      en: ['Where do you need support?', 'Build network slowly', 'Attachment-focused therapy'],
      ru: ['Где нужна поддержка?', 'Строить сеть постепенно', 'Терапия привязанности'],
    },
    seek: {
      en: 'Chronic stress pain often improves with physiotherapy and psychotherapy together.',
      ru: 'Хроническая боль от стресса часто облегчается физиотерапией плюс психотерапией.',
    },
  },
  stomach: {
    n: { en: 'Stomach', ru: 'Живот' },
    intro: {
      en: "Your 'second brain' — 500 million neurons.\nNausea or cramps before stressful events?",
      ru: '«Второй мозг» — 500 миллионов нейронов.\nТошнота или спазмы перед стрессовыми событиями?',
    },
    q1: { en: 'Try to control everything or worry internally?', ru: 'Пытаетесь всё контролировать или переживаете внутри?' },
    o1a: { en: 'Control', ru: 'Контролирую' },
    o1b: { en: 'Worry', ru: 'Переживаю' },
    q2: { en: 'Do you trust your gut feelings?', ru: 'Доверяете «чутью»?' },
    o2a: { en: 'Not usually', ru: 'Не особо' },
    o2b: { en: 'Yes', ru: 'Да' },
    d_aa: {
      en: 'Control is a strategy — but the gut absorbs the effort.',
      ru: 'Контроль — стратегия. Но кишечник поглощает усилие.',
    },
    d_ab: {
      en: "Internal worry that doesn't get expressed settles in the gut.",
      ru: 'Внутреннее переживание, которое не выражается, оседает в кишечнике.',
    },
    d_ba: {
      en: 'Not trusting intuition creates tension. The gut speaks louder when not heard.',
      ru: 'Не доверять интуиции — создавать напряжение. Кишечник говорит громче, когда его не слышат.',
    },
    d_bb: {
      en: "That's a strength. Stomach tension might be specific anxiety, not a pattern.",
      ru: 'Это сила. Напряжение в животе может быть конкретной тревогой, а не паттерном.',
    },
    sym: {
      en: ['Stress nausea', 'IBS-like discomfort', 'Appetite changes'],
      ru: ['Тошнота от стресса', 'Симптомы СРК', 'Изменения аппетита'],
    },
    emo: [
      { t: { en: 'Anxiety', ru: 'Тревога' }, c: '#C4B08B' },
      { t: { en: 'Fear', ru: 'Страх' }, c: '#C4B08B' },
    ],
    helps: {
      en: ['Breathing before meals', 'Find emotional triggers', 'Name the feeling'],
      ru: ['Дыхание перед едой', 'Найти эмоциональные триггеры', 'Назвать эмоцию'],
    },
    seek: {
      en: 'Chronic gut symptoms with normal medical tests often respond to anxiety therapy.',
      ru: 'Хронические симптомы при нормальных анализах часто откликаются на терапию тревоги.',
    },
  },
  hands: {
    n: { en: 'Hands', ru: 'Руки' },
    intro: {
      en: 'Hands represent action — doing, creating.\nSomething you want to do but feel unable to?',
      ru: 'Руки — это действие, создание.\nЕсть что-то, что хочется сделать, но кажется невозможным?',
    },
    q1: { en: 'Feel stuck or blocked?', ru: 'Чувствуете заблокированность?' },
    o1a: { en: 'Yes, very', ru: 'Да, очень' },
    o1b: { en: 'A little', ru: 'Немного' },
    q2: { en: 'Fear or uncertainty holding you back?', ru: 'Страх или неуверенность держат?' },
    o2a: { en: 'Fear', ru: 'Страх' },
    o2b: { en: 'Uncertainty', ru: 'Неуверенность' },
    d_aa: {
      en: "When we can't act on what we want — hands respond.",
      ru: 'Когда не можем действовать на то, что хотим — руки реагируют.',
    },
    d_ab: {
      en: 'Even mild stuckness accumulates. Notice what your hands reach for.',
      ru: 'Даже лёгкая заблокированность накапливается. Замечайте, к чему тянутся руки.',
    },
    d_ba: {
      en: 'Fear paralyzes action. The smallest step can release the hands.',
      ru: 'Страх парализует действие. Самый маленький шаг может освободить руки.',
    },
    d_bb: {
      en: 'Uncertainty is harder. Sometimes the first step is choosing a direction, not the right one.',
      ru: 'Неуверенность сложнее. Иногда первый шаг — выбрать направление, а не правильное.',
    },
    sym: {
      en: ['Sweaty palms', 'Trembling', 'Fist clenching'],
      ru: ['Потные ладони', 'Тремор', 'Сжатые кулаки'],
    },
    emo: [
      { t: { en: 'Powerlessness', ru: 'Бессилие' }, c: '#89A4C7' },
      { t: { en: 'Frustration', ru: 'Фрустрация' }, c: '#D49A9A' },
    ],
    helps: {
      en: ['Creative expression', 'Ask: what do my hands want?', 'Movement-based therapy'],
      ru: ['Творческое выражение', 'Спросить: чего хотят руки?', 'Двигательная терапия'],
    },
    seek: {
      en: 'Persistent stuckness often unlocks in therapy as energy returns to action.',
      ru: 'Стойкое застревание часто разблокируется в терапии — энергия возвращается к действию.',
    },
  },
  lower: {
    n: { en: 'Lower Abdomen', ru: 'Низ живота' },
    intro: {
      en: 'Connected to safety, identity, creative energy.\nDo you feel safe in your body?',
      ru: 'Связан с безопасностью, идентичностью, творческой энергией.\nЧувствуете безопасность в теле?',
    },
    q1: { en: "Something here that's hard to talk about?", ru: 'Есть что-то, о чём трудно говорить?' },
    o1a: { en: 'Yes', ru: 'Да' },
    o1b: { en: 'Not sure', ru: 'Не уверен(а)' },
    q2: { en: 'Sometimes feel disconnected from your body?', ru: 'Бывает ощущение отключения от тела?' },
    o2a: { en: 'Yes, often', ru: 'Да, часто' },
    o2b: { en: 'Sometimes', ru: 'Иногда' },
    d_aa: {
      en: "Thank you for your honesty. This zone holds our deepest safety. What's hard to talk about deserves gentle attention.",
      ru: 'Спасибо за честность. Эта зона хранит самую глубинную безопасность. То, о чём трудно говорить, заслуживает бережного внимания.',
    },
    d_ab: {
      en: 'Even without words, the body knows. This area responds to boundaries.',
      ru: 'Даже без слов тело знает. Эта зона откликается на границы.',
    },
    d_ba: {
      en: 'Disconnection is how we protect ourselves. But reconnection — slowly — is healing.',
      ru: 'Отключение — это способ защиты. Но воссоединение — медленно — целительно.',
    },
    d_bb: {
      en: 'Occasional disconnection is normal. Notice when it happens — the pattern reveals the message.',
      ru: 'Периодическое отключение нормально. Замечайте, когда — паттерн раскрывает суть.',
    },
    sym: {
      en: ['Pelvic tension', 'Numbness', 'Bladder sensitivity'],
      ru: ['Тазовое напряжение', 'Оцепенение', 'Чувствительность мочевого пузыря'],
    },
    emo: [
      { t: { en: 'Shame', ru: 'Стыд' }, c: '#D49A9A' },
      { t: { en: 'Boundary violation', ru: 'Нарушение границ' }, c: '#D49A9A' },
    ],
    helps: {
      en: ['Somatic therapy', 'Gentle yoga', 'Rebuild body safety'],
      ru: ['Соматическая терапия', 'Мягкая йога', 'Восстановление безопасности в теле'],
    },
    seek: {
      en: 'Chronic pain or numbness benefits from trauma-informed therapy.',
      ru: 'Хроническая боль или оцепенение — травма-информированная терапия.',
    },
  },
  legs: {
    n: { en: 'Legs', ru: 'Ноги' },
    intro: {
      en: "Legs are about stability and moving forward.\nDo you know where you're headed?",
      ru: 'Ноги — устойчивость и движение вперёд.\nЗнаете, куда идёте?',
    },
    q1: { en: 'Uncertain about your path in life?', ru: 'Неуверенность в жизненном пути?' },
    o1a: { en: 'Yes, very', ru: 'Да, большая' },
    o1b: { en: 'Sometimes', ru: 'Иногда' },
    q2: { en: 'More about being stuck or afraid of the next step?', ru: 'Больше про застревание или страх следующего шага?' },
    o2a: { en: 'Stuck', ru: 'Застревание' },
    o2b: { en: 'Afraid', ru: 'Страх' },
    d_aa: {
      en: 'Deep uncertainty weakens the legs — literally.',
      ru: 'Глубокая неуверенность ослабляет ноги — буквально.',
    },
    d_ab: {
      en: 'Some uncertainty is natural. Does it energize or drain you?',
      ru: 'Немного неуверенности — норма. Она даёт энергию или забирает?',
    },
    d_ba: {
      en: 'Being stuck means something holds you in place. Often not laziness — an unspoken need.',
      ru: 'Застревание означает, что что-то держит на месте. Часто не лень — невысказанная потребность.',
    },
    d_bb: {
      en: 'Fear of the next step is human. Your legs are ready. You just need permission to move.',
      ru: 'Страх следующего шага — это человеческое. Ноги готовы. Нужно только разрешение двигаться.',
    },
    sym: {
      en: ['Heavy legs', 'Restless legs', 'Knee pain'],
      ru: ['Тяжесть в ногах', 'Беспокойные ноги', 'Боль в коленях'],
    },
    emo: [
      { t: { en: 'Insecurity', ru: 'Неуверенность' }, c: '#C4B08B' },
      { t: { en: 'Future fear', ru: 'Страх будущего' }, c: '#C4B08B' },
    ],
    helps: {
      en: ['Walk barefoot', 'What feels unstable?', 'Direction-focused therapy'],
      ru: ['Ходить босиком', 'Что ощущается нестабильным?', 'Терапия направления'],
    },
    seek: {
      en: 'Chronic weakness benefits from emotional and medical work in parallel.',
      ru: 'Хроническая слабость — эмоциональная и медицинская работа параллельно.',
    },
  },
};

const T = {
  en: {
    title: 'Body Map · with Mira',
    intro: 'Click any zone on the body. Mira will walk you through what might be living there — gently, with two simple questions and a reflection.',
    welc: 'You can start anywhere.\nYour body already knows where to look.',
    nm: 'Mira',
    rl: 'Your guide',
    w1: 'Explore a zone',
    symT: 'Symptoms',
    emoT: 'Emotions',
    helpT: 'What helps',
    seekT: 'When to reach out',
    ctaWa: 'Chat on WhatsApp',
    ctaMore: 'Explore another zone',
    bookFree: 'Book a free 15-min call',
    backToTools: '← All tools',
    disclaimer: 'Mira is not a therapist. For self-awareness only.',
    miraAlt: 'Mira — the guide character of the body map',
    waMsg: (zone: string) =>
      `Hi Anna, I explored "${zone}" on the body map and would like to discuss what came up.`,
  },
  ru: {
    title: 'Карта тела · с Мирой',
    intro: 'Нажмите на любую зону. Мира мягко проведёт через то, что может там жить — два простых вопроса и небольшое отражение.',
    welc: 'Вы можете начать с любого места.\nТело уже знает, где сейчас важно посмотреть.',
    nm: 'Мира',
    rl: 'Ваш проводник',
    w1: 'Выберите зону',
    symT: 'Симптомы',
    emoT: 'Эмоции',
    helpT: 'Что помогает',
    seekT: 'Когда обратиться',
    ctaWa: 'Написать в WhatsApp',
    ctaMore: 'Другая зона',
    bookFree: 'Бесплатный звонок 15 минут',
    backToTools: '← Все инструменты',
    disclaimer: 'Мира — не терапевт. Только для самопознания.',
    miraAlt: 'Мира — персонаж-проводник карты тела',
    waMsg: (zone: string) =>
      `Здравствуйте, Анна! Я изучил(а) зону «${zone}» на карте тела и хотел(а) бы обсудить, что отозвалось.`,
  },
};

type Step = 0 | 1 | 2;
type Answer = 'a' | 'b';

export function BodyMap() {
  const { lang } = useLang();
  const [selected, setSelected] = useState<ZoneId | null>(null);
  const [step, setStep] = useState<Step>(0);
  const [a1, setA1] = useState<Answer | null>(null);
  const [a2, setA2] = useState<Answer | null>(null);

  const t = T[lang];

  const reset = () => {
    setSelected(null);
    setStep(0);
    setA1(null);
    setA2(null);
  };

  const onPickZone = (id: ZoneId) => {
    setSelected(id);
    setStep(0);
    setA1(null);
    setA2(null);
  };

  const onAnswer = (q: 1 | 2, v: Answer) => {
    if (q === 1) {
      setA1(v);
      setStep(1);
    } else {
      setA2(v);
      setStep(2);
    }
  };

  const zoneObj = selected ? Z.find((z) => z.id === selected)! : null;
  const zc = selected ? ZC[selected] : null;
  const finalKey: keyof ZoneContent | null =
    step === 2 && a1 && a2 ? (`d_${a1}${a2}` as keyof ZoneContent) : null;

  return (
    <>
      <PageHeader headingKey="tools" />
      <section className="py-8 px-7 pb-32">
        <div className="container-x" style={{ maxWidth: '1100px' }}>
          <Link
            href="/tools"
            className="text-sage font-semibold text-[14px] hover:underline mb-8 inline-block"
          >
            {t.backToTools}
          </Link>

          <div className="text-center mb-12">
            <h1 className="mb-3">{t.title}</h1>
            <p
              className="text-text-muted font-light leading-[1.7] max-w-[600px] mx-auto"
              style={{ fontSize: '15px' }}
            >
              {t.intro}
            </p>
          </div>

          <div className="grid grid-cols-[380px_1fr] gap-8 items-start max-md:grid-cols-1 max-md:max-w-[440px] max-md:mx-auto">
            {/* Mira + zones */}
            <div
              className="relative w-full overflow-hidden rounded-card"
              style={{
                background:
                  'linear-gradient(180deg, rgba(245,230,230,.2), rgba(232,239,232,.15), var(--bg))',
                aspectRatio: '380 / 600',
              }}
            >
              <Image
                src="/images/mira.jpg"
                alt={t.miraAlt}
                fill
                priority
                sizes="(max-width: 860px) 90vw, 380px"
                style={{ objectFit: 'cover', objectPosition: 'left center' }}
              />

              {Z.map((z) => {
                const isSel = selected === z.id;
                const isLeft = z.ls === 'left';
                const labelStyle: React.CSSProperties = isLeft
                  ? { right: `calc(${100 - z.x}% + 14px)` }
                  : { left: `calc(${z.x}% + 14px)` };
                const zoneName = ZC[z.id].n[lang];
                return (
                  <span key={z.id}>
                    <button
                      type="button"
                      onClick={() => onPickZone(z.id)}
                      aria-label={zoneName}
                      aria-pressed={isSel}
                      className="absolute w-3 h-3 rounded-full cursor-pointer transition-all duration-300 z-[4] focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2"
                      style={{
                        left: `${z.x}%`,
                        top: `${z.y}%`,
                        transform: 'translate(-50%, -50%)',
                        background: isSel ? z.cl : 'rgba(255,255,255,.7)',
                        border: `2px solid ${isSel ? z.cl : 'rgba(255,255,255,.85)'}`,
                        boxShadow: isSel
                          ? `0 4px 16px ${z.cl}66`
                          : '0 2px 8px rgba(0,0,0,.1)',
                      }}
                    />
                    <button
                      type="button"
                      onClick={() => onPickZone(z.id)}
                      aria-hidden="true"
                      tabIndex={-1}
                      className="absolute z-[5] cursor-pointer transition-all duration-300 whitespace-nowrap"
                      style={{
                        top: `${z.y}%`,
                        ...labelStyle,
                        transform: 'translateY(-50%)',
                        padding: '6px 14px',
                        borderRadius: '20px',
                        background: isSel
                          ? `${z.cl}1F`
                          : 'rgba(255,255,255,.78)',
                        backdropFilter: 'blur(8px)',
                        WebkitBackdropFilter: 'blur(8px)',
                        border: `1px solid ${isSel ? `${z.cl}55` : 'rgba(255,255,255,.55)'}`,
                      }}
                    >
                      <span
                        className="font-heading"
                        style={{
                          fontSize: '11px',
                          fontWeight: isSel ? 600 : 400,
                          color: isSel ? z.cl : 'var(--charcoal)',
                          letterSpacing: '-0.01em',
                        }}
                      >
                        {zoneName}
                      </span>
                    </button>
                  </span>
                );
              })}
            </div>

            {/* Dialog panel */}
            <div className="md:sticky md:top-10">
              {!selected && (
                <div className="py-12 px-7 text-center border-[1.5px] border-dashed border-border rounded-card">
                  <h2
                    className="font-heading text-charcoal whitespace-pre-line mb-5"
                    style={{
                      fontSize: 'clamp(1.3rem, 3vw, 1.6rem)',
                      fontWeight: 300,
                      letterSpacing: '-0.02em',
                    }}
                  >
                    {t.welc}
                  </h2>
                  <div
                    className="mx-auto mb-4"
                    style={{
                      width: '40px',
                      height: '2px',
                      background:
                        'linear-gradient(90deg, var(--sage), var(--rose))',
                      borderRadius: '2px',
                    }}
                  />
                  <p
                    className="text-text-muted font-light"
                    style={{ fontSize: '12px' }}
                  >
                    {t.nm} · {t.rl}
                  </p>
                </div>
              )}

              {selected && zc && zoneObj && (
                <article
                  className="rounded-card border border-border bg-white overflow-hidden"
                  style={{ animation: 'fadeUp 0.5s cubic-bezier(0.16, 1, 0.3, 1)' }}
                >
                  <header
                    className="px-6 py-4 border-b border-border"
                    style={{
                      background:
                        'linear-gradient(135deg, rgba(232,239,232,.2), rgba(245,230,230,.15))',
                    }}
                  >
                    <div className="font-heading text-charcoal" style={{ fontSize: '15px', fontWeight: 500 }}>
                      {t.nm}
                    </div>
                    <div className="text-text-muted font-light" style={{ fontSize: '11px' }}>
                      {zc.n[lang]}
                    </div>
                  </header>

                  <div className="p-6">
                    {step === 0 && (
                      <>
                        <p
                          className="text-text font-light leading-[1.85] whitespace-pre-line mb-5"
                          style={{ fontSize: '14.5px' }}
                        >
                          {zc.intro[lang]}
                        </p>
                        <p
                          className="text-text font-light leading-[1.85] mb-3"
                          style={{ fontSize: '14.5px' }}
                        >
                          {zc.q1[lang]}
                        </p>
                        <div className="flex flex-col gap-2">
                          <button
                            type="button"
                            onClick={() => onAnswer(1, 'a')}
                            className="w-full text-left px-5 py-3.5 border-[1.5px] border-border rounded-2xl bg-white text-text text-[14px] hover:border-sage hover:bg-sage-pale transition-all"
                          >
                            {zc.o1a[lang]}
                          </button>
                          <button
                            type="button"
                            onClick={() => onAnswer(1, 'b')}
                            className="w-full text-left px-5 py-3.5 border-[1.5px] border-border rounded-2xl bg-white text-text text-[14px] hover:border-sage hover:bg-sage-pale transition-all"
                          >
                            {zc.o1b[lang]}
                          </button>
                        </div>
                      </>
                    )}

                    {step === 1 && (
                      <>
                        <p
                          className="text-text font-light leading-[1.85] mb-5"
                          style={{ fontSize: '14.5px' }}
                        >
                          {zc.q2[lang]}
                        </p>
                        <div className="flex flex-col gap-2">
                          <button
                            type="button"
                            onClick={() => onAnswer(2, 'a')}
                            className="w-full text-left px-5 py-3.5 border-[1.5px] border-border rounded-2xl bg-white text-text text-[14px] hover:border-sage hover:bg-sage-pale transition-all"
                          >
                            {zc.o2a[lang]}
                          </button>
                          <button
                            type="button"
                            onClick={() => onAnswer(2, 'b')}
                            className="w-full text-left px-5 py-3.5 border-[1.5px] border-border rounded-2xl bg-white text-text text-[14px] hover:border-sage hover:bg-sage-pale transition-all"
                          >
                            {zc.o2b[lang]}
                          </button>
                        </div>
                      </>
                    )}

                    {step === 2 && finalKey && (
                      <>
                        <p
                          className="text-text font-light leading-[1.85] whitespace-pre-line mb-5"
                          style={{ fontSize: '14.5px' }}
                        >
                          {(zc[finalKey] as Bilingual)[lang]}
                        </p>

                        <div className="mb-4">
                          <h3
                            className="font-heading text-charcoal mb-1.5"
                            style={{ fontSize: '11px', fontWeight: 600, letterSpacing: '0.02em' }}
                          >
                            {t.symT}
                          </h3>
                          {zc.sym[lang].map((s, i) => (
                            <div key={i} className="flex gap-2 items-start py-0.5">
                              <span
                                aria-hidden="true"
                                className="w-1 h-1 rounded-full mt-2 flex-shrink-0"
                                style={{ background: zoneObj.cl }}
                              />
                              <span className="text-text leading-[1.5] font-light text-[12.5px]">
                                {s}
                              </span>
                            </div>
                          ))}
                        </div>

                        <div className="mb-4">
                          <h3
                            className="font-heading text-charcoal mb-2"
                            style={{ fontSize: '11px', fontWeight: 600, letterSpacing: '0.02em' }}
                          >
                            {t.emoT}
                          </h3>
                          <div className="flex flex-wrap gap-1">
                            {zc.emo.map((e, i) => (
                              <span
                                key={i}
                                className="font-bold"
                                style={{
                                  fontSize: '9px',
                                  padding: '3px 9px',
                                  borderRadius: '12px',
                                  color: e.c,
                                  background: `${e.c}1A`,
                                }}
                              >
                                {e.t[lang]}
                              </span>
                            ))}
                          </div>
                        </div>

                        <div className="mb-4">
                          <h3
                            className="font-heading text-charcoal mb-1.5"
                            style={{ fontSize: '11px', fontWeight: 600, letterSpacing: '0.02em' }}
                          >
                            {t.helpT}
                          </h3>
                          {zc.helps[lang].map((h, i) => (
                            <div key={i} className="flex gap-2 items-start py-0.5">
                              <span
                                aria-hidden="true"
                                className="w-1 h-1 rounded-full mt-2 flex-shrink-0"
                                style={{ background: 'var(--sage)' }}
                              />
                              <span className="text-text leading-[1.5] font-light text-[12.5px]">
                                {h}
                              </span>
                            </div>
                          ))}
                        </div>

                        <div
                          className="p-4 rounded-2xl mt-3"
                          style={{
                            background:
                              'linear-gradient(135deg, var(--sage-pale), var(--rose-pale))',
                          }}
                        >
                          <h3
                            className="font-heading text-sage mb-1"
                            style={{ fontSize: '10px', fontWeight: 600 }}
                          >
                            {t.seekT}
                          </h3>
                          <p className="text-text leading-[1.6] font-light text-[12.5px]">
                            {zc.seek[lang]}
                          </p>
                        </div>

                        <div className="flex flex-col gap-2 mt-4">
                          <a
                            href={`${AB_CONFIG.WA_URL}?text=${encodeURIComponent(t.waMsg(zc.n[lang]))}`}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="btn-wa w-full justify-center"
                            style={{ padding: '12px', fontSize: '13px' }}
                          >
                            {t.ctaWa}
                          </a>
                          <button
                            type="button"
                            onClick={reset}
                            className="w-full font-bold rounded-full border-[1.5px] border-sage-muted text-sage bg-white hover:bg-sage-pale transition-all"
                            style={{ padding: '12px', fontSize: '13px' }}
                          >
                            {t.ctaMore}
                          </button>
                        </div>
                      </>
                    )}
                  </div>
                </article>
              )}
            </div>
          </div>

          {/* Bottom CTA + disclaimer */}
          <div className="text-center mt-16">
            <Link href="/contact" className="btn-primary">
              {t.bookFree}
            </Link>
            <p
              className="text-text-muted font-light mt-6"
              style={{ fontSize: '11px', opacity: 0.6 }}
            >
              {t.disclaimer}
            </p>
          </div>
        </div>
      </section>

      <style jsx>{`
        @keyframes fadeUp {
          from { opacity: 0; transform: translateY(16px); }
          to   { opacity: 1; transform: translateY(0); }
        }
      `}</style>
    </>
  );
}
