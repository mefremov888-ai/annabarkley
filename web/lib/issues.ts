import type { Lang } from './i18n/types';

export interface IssueData {
  slug: string;
  t: { en: string; ru: string };
  d: { en: string; ru: string };
  full: { en: string[]; ru: string[] };
  signs: { en: string[]; ru: string[] };
  metaDesc: { en: string; ru: string };
}

export const ISSUES: IssueData[] = [
  {
    slug: 'anxiety',
    t: { en: 'Anxiety', ru: 'Тревожность' },
    d: { en: 'Racing thoughts, persistent worry, panic attacks, avoidance.', ru: 'Навязчивые мысли, постоянное беспокойство, панические атаки, избегание.' },
    full: {
      en: [
        'Anxiety is one of the most common concerns I work with — in children, teens, and adults. It can look very different depending on age: a child might complain of stomachaches before school, a teenager might withdraw from friends, an adult might find themselves unable to sleep or concentrate.',
        'I use cognitive behavioural therapy, exposure techniques, and mindfulness-based approaches tailored to your age and situation. Many clients report feeling more equipped to manage anxiety within 8-12 sessions, though every person\'s experience is unique.',
        'You don\'t have to navigate this alone. Anxiety often responds well to evidence-based support.',
      ],
      ru: [
        'Тревожность — одна из самых частых тем в моей работе с детьми, подростками и взрослыми. Она выглядит по-разному в разном возрасте: ребёнок может жаловаться на боли в животе перед школой, подросток — замыкаться, взрослый — не спать ночами и не мочь сосредоточиться.',
        'Я использую когнитивно-поведенческую терапию, техники экспозиции и практики майндфулнес, адаптированные под возраст и ситуацию. Многие клиенты отмечают, что после 8-12 сессий им легче справляться с тревогой, хотя путь у каждого свой.',
        'Вам не обязательно проходить это в одиночку. Тревожность часто хорошо отвечает на поддержку, основанную на доказательной практике.',
      ],
    },
    signs: {
      en: ['Persistent worry or dread', 'Physical symptoms: racing heart, tension, nausea', 'Avoidance of situations or places', 'Difficulty sleeping or concentrating', 'Irritability or restlessness'],
      ru: ['Постоянное беспокойство или страх', 'Физические симптомы: сердцебиение, напряжение, тошнота', 'Избегание ситуаций или мест', 'Трудности со сном или концентрацией', 'Раздражительность или беспокойство'],
    },
    metaDesc: {
      en: 'Anxiety support for children, teens, and adults in Dubai. CBT, exposure, mindfulness — tailored to age and situation.',
      ru: 'Поддержка при тревожности для детей, подростков и взрослых в Дубае. КПТ, экспозиция, майндфулнес.',
    },
  },
  {
    slug: 'depression',
    t: { en: 'Depression', ru: 'Депрессия' },
    d: { en: 'Low mood, loss of interest, fatigue, hopelessness.', ru: 'Сниженное настроение, потеря интереса, усталость, безнадёжность.' },
    full: {
      en: [
        'Depression is more than feeling sad. It can show up as exhaustion, loss of interest in things you used to enjoy, difficulty getting out of bed, or a sense that nothing matters.',
        'Therapy can help you understand what is contributing to these feelings and gradually rebuild a sense of meaning, connection, and energy. CBT and interpersonal approaches are well-supported by research for depression.',
      ],
      ru: [
        'Депрессия — это больше, чем грусть. Она проявляется как истощение, потеря интереса к тому, что раньше радовало, трудность встать с постели или ощущение, что ничего не имеет значения.',
        'Терапия помогает понять, что подпитывает эти переживания, и постепенно восстановить смысл, контакт и энергию. КПТ и межличностные подходы имеют хорошую исследовательскую поддержку при работе с депрессией.',
      ],
    },
    signs: {
      en: ['Persistent low mood for two weeks or more', 'Loss of interest in activities you used to enjoy', 'Changes in sleep or appetite', 'Fatigue or low energy', 'Feelings of worthlessness or hopelessness'],
      ru: ['Стойкое сниженное настроение в течение двух недель и более', 'Потеря интереса к занятиям, которые раньше радовали', 'Изменения сна или аппетита', 'Усталость или низкая энергия', 'Ощущение никчёмности или безнадёжности'],
    },
    metaDesc: { en: 'Support for depression in Dubai — therapy for adults and teens, English/Russian.', ru: 'Поддержка при депрессии в Дубае — терапия взрослых и подростков, EN/RU.' },
  },
  {
    slug: 'burnout',
    t: { en: 'Burnout', ru: 'Выгорание' },
    d: { en: 'Emotional exhaustion, cynicism, reduced sense of accomplishment.', ru: 'Эмоциональное истощение, цинизм, снижение чувства результата.' },
    full: {
      en: [
        'Burnout shows up most clearly in three areas: emotional exhaustion that doesn\'t lift with rest, cynicism or detachment from work and people, and a quietly growing sense that your effort isn\'t making a difference.',
        'Therapy supports recovery by addressing the patterns that fuel burnout — over-functioning, blurred boundaries, perfectionism — and helping you re-establish sustainable rhythms.',
      ],
      ru: [
        'Выгорание ярче всего проявляется в трёх областях: эмоциональное истощение, которое не уходит после отдыха, цинизм или отстранённость от работы и людей, и тихо растущее ощущение, что усилия не приводят к результату.',
        'Терапия поддерживает восстановление через работу с паттернами, подпитывающими выгорание — гиперфункциональностью, размытыми границами, перфекционизмом — и помогает восстановить устойчивый ритм.',
      ],
    },
    signs: {
      en: ['Chronic exhaustion that rest does not fix', 'Cynicism or detachment from work and people', 'Reduced sense of accomplishment', 'Cognitive fog and forgetfulness', 'Physical symptoms: headaches, gut issues, sleep disturbance'],
      ru: ['Хроническая усталость, которую не снимает отдых', 'Цинизм или отстранённость от работы и людей', 'Снижение чувства достижения', 'Когнитивный туман, забывчивость', 'Физические симптомы: головные боли, ЖКТ, нарушения сна'],
    },
    metaDesc: { en: 'Burnout therapy in Dubai for professionals and parents — restore boundaries and energy.', ru: 'Работа с выгоранием в Дубае — для профессионалов и родителей.' },
  },
  {
    slug: 'school-anxiety',
    t: { en: 'School Anxiety', ru: 'Школьная тревога' },
    d: { en: 'Exam stress, school refusal, social fears, academic pressure.', ru: 'Стресс перед экзаменами, отказ от школы, социальные страхи, академическое давление.' },
    full: {
      en: [
        'School anxiety can look like Sunday-night stomachaches, refusal to go to class, panic before tests, or quiet withdrawal from peers. It is rarely about laziness — far more often it points to overwhelm, social pressure, or unprocessed experiences.',
        'I work with the child or teen directly, and with parents in parallel, to map the triggers and build manageable steps back into school life.',
      ],
      ru: [
        'Школьная тревога может выглядеть как боли в животе в воскресенье вечером, отказ идти в школу, паника перед контрольной или тихий уход от сверстников. Это редко про лень — гораздо чаще про перегрузку, социальное давление или непрожитый опыт.',
        'Я работаю с ребёнком или подростком напрямую, а параллельно — с родителями, чтобы выявить триггеры и выстроить посильные шаги возвращения к школьной жизни.',
      ],
    },
    signs: {
      en: ['Stomachaches or headaches before school', 'Sleep disturbance Sunday nights', 'Tearfulness or anger about going', 'Withdrawal from friends or activities', 'Drop in academic performance'],
      ru: ['Боли в животе или голове перед школой', 'Нарушение сна в воскресенье вечером', 'Слёзы или злость по поводу школы', 'Уход от друзей или занятий', 'Снижение академических результатов'],
    },
    metaDesc: { en: 'School anxiety support — children and teenagers in Dubai. Bilingual EN/RU.', ru: 'Помощь при школьной тревоге — дети и подростки в Дубае. EN/RU.' },
  },
  {
    slug: 'self-esteem',
    t: { en: 'Self-Esteem', ru: 'Самооценка' },
    d: { en: '"Not enough", comparison, imposter syndrome, harsh inner voice.', ru: 'Ощущение «я недостаточно», сравнение, синдром самозванца, жёсткий внутренний голос.' },
    full: {
      en: [
        'A harsh inner voice tends to form long before adulthood. Therapy can help you understand where these beliefs originated and work toward a more accurate, compassionate view of yourself.',
      ],
      ru: [
        'Жёсткий внутренний голос формируется задолго до взрослого возраста. Терапия помогает понять, где эти убеждения возникли, и постепенно сформировать более точный и сострадательный взгляд на себя.',
      ],
    },
    signs: {
      en: ['Constant comparison with others', 'Difficulty accepting compliments', 'Perfectionism, fear of failure', 'Imposter feelings at work', 'Apologising for taking up space'],
      ru: ['Постоянное сравнение с другими', 'Трудно принимать комплименты', 'Перфекционизм и страх неудачи', 'Синдром самозванца на работе', 'Извинения за то, что занимаешь место'],
    },
    metaDesc: { en: 'Self-esteem therapy in Dubai — soften the inner critic.', ru: 'Работа с самооценкой в Дубае — смягчение внутреннего критика.' },
  },
  {
    slug: 'bullying',
    t: { en: 'Bullying', ru: 'Буллинг' },
    d: { en: 'Peer aggression, isolation, digital bullying, recovery.', ru: 'Агрессия сверстников, изоляция, кибербуллинг, восстановление.' },
    full: {
      en: [
        'Bullying — in person or online — leaves marks. The work is twofold: helping the child or teen process what happened and rebuild safety, and supporting parents to advocate effectively in school and digital spaces.',
      ],
      ru: [
        'Буллинг — очный или онлайн — оставляет следы. Работа идёт в двух направлениях: помочь ребёнку или подростку прожить произошедшее и восстановить чувство безопасности, и поддержать родителей в защите интересов в школе и цифровом пространстве.',
      ],
    },
    signs: {
      en: ['Reluctance to attend school or use phone', 'Sudden mood or appetite changes', 'Unexplained physical complaints', 'Loss of trust in peers', 'Self-criticism that mirrors what bullies say'],
      ru: ['Нежелание идти в школу или пользоваться телефоном', 'Резкие изменения настроения или аппетита', 'Необъяснимые физические жалобы', 'Потеря доверия к сверстникам', 'Самокритика, повторяющая слова обидчиков'],
    },
    metaDesc: { en: 'Recovery from bullying — children and teens in Dubai.', ru: 'Восстановление после буллинга — дети и подростки в Дубае.' },
  },
  {
    slug: 'trauma',
    t: { en: 'Trauma', ru: 'Травма' },
    d: { en: 'Past experiences that still affect your present.', ru: 'Прошлый опыт, продолжающий влиять на настоящее.' },
    full: {
      en: [
        'Trauma is what happens inside us when something overwhelming happens to us. It can stay alive in the body, in startle responses, in patterns of avoidance, or in relationships.',
        'Working with EMDR and integrative approaches, the goal is not to forget — healing often means the memory loses some of its grip on daily life, without erasing what happened.',
      ],
      ru: [
        'Травма — это то, что происходит внутри нас, когда с нами случается слишком многое. Она может оставаться живой в теле, в реакциях вздрагивания, в паттернах избегания или в отношениях.',
        'Работая с EMDR и интегративными подходами, цель — не забыть. Исцеление часто означает, что память теряет часть своей власти над повседневной жизнью, не стирая того, что произошло.',
      ],
    },
    signs: {
      en: ['Intrusive memories or flashbacks', 'Heightened startle response', 'Avoidance of reminders', 'Numbing or dissociation', 'Hypervigilance or sleep disturbance'],
      ru: ['Навязчивые воспоминания или флешбэки', 'Усиленная реакция вздрагивания', 'Избегание напоминаний', 'Эмоциональное оцепенение или диссоциация', 'Гипербдительность или нарушения сна'],
    },
    metaDesc: { en: 'Trauma-informed therapy in Dubai — EMDR and integrative approaches.', ru: 'Травма-информированная терапия в Дубае — EMDR и интегративные подходы.' },
  },
  {
    slug: 'grief',
    t: { en: 'Grief', ru: 'Горевание' },
    d: { en: 'Loss, mourning, processing life changes.', ru: 'Утрата, переживание потери и жизненных перемен.' },
    full: {
      en: [
        'Grief is not only about death. We also grieve relationships, places, identities, futures we expected. There is no neat timeline — only the work of moving with the loss rather than around it.',
      ],
      ru: [
        'Горевание — это не только о смерти. Мы горюем и об отношениях, местах, идентичностях, ожидаемых будущих. Здесь нет аккуратной хронологии — только работа двигаться с потерей, а не в обход неё.',
      ],
    },
    signs: {
      en: ['Waves of sadness, anger or numbness', 'Difficulty concentrating', 'Disrupted sleep or appetite', 'Sense of unreality', 'Avoiding reminders of what was lost'],
      ru: ['Волны грусти, злости или оцепенения', 'Трудности с концентрацией', 'Нарушения сна или аппетита', 'Ощущение нереальности', 'Избегание напоминаний о том, что утрачено'],
    },
    metaDesc: { en: 'Grief support in Dubai — therapy for loss and life transitions.', ru: 'Поддержка при горе и утрате в Дубае.' },
  },
  {
    slug: 'parent-teen',
    t: { en: 'Parent-Teen Conflict', ru: 'Конфликт родитель-подросток' },
    d: { en: 'Communication breakdown, boundary struggles, trust.', ru: 'Разрыв коммуникации, борьба за границы, доверие.' },
    full: {
      en: [
        'When the door slams, the goal is rarely to remove the conflict — it is to learn to navigate it. I work both with the teen alone and with parents, often holding parallel processes that converge in joint sessions.',
      ],
      ru: [
        'Когда хлопает дверь, задача редко в том, чтобы убрать конфликт — она в том, чтобы научиться его проходить. Я работаю и с подростком отдельно, и с родителями, часто параллельно, сводя процессы в совместных встречах.',
      ],
    },
    signs: {
      en: ['Communication reduced to logistics or arguments', 'Frequent door-slamming or silent treatment', 'Trust eroding around honesty or curfew', 'Either side feels unheard', 'Parents disagreeing on response'],
      ru: ['Общение сведено к логистике или ссорам', 'Частое хлопанье дверью или молчанка', 'Подрыв доверия в вопросах честности или времени дома', 'Любая сторона чувствует, что её не слышат', 'Родители расходятся в реакциях'],
    },
    metaDesc: { en: 'Parent-teen conflict support — Dubai psychologist, EN/RU.', ru: 'Поддержка при конфликте родителя и подростка — психолог в Дубае.' },
  },
  {
    slug: 'anger',
    t: { en: 'Anger Management', ru: 'Управление гневом' },
    d: { en: 'Outbursts, irritability, regulation.', ru: 'Вспышки, раздражительность, регуляция.' },
    full: {
      en: [
        'Anger is a signal — usually pointing at boundaries crossed, needs unmet, or older emotions activated. The work is not to suppress it, but to recognise it earlier and respond rather than react.',
      ],
      ru: [
        'Гнев — это сигнал, обычно указывающий на пересечённые границы, неудовлетворённые потребности или активированные более ранние чувства. Задача не в том, чтобы его подавить, а в том, чтобы заметить раньше и отвечать, а не реагировать.',
      ],
    },
    signs: {
      en: ['Outbursts that feel out of proportion', 'Regret after the fact', 'Physical tension before the anger arrives', 'Loved ones walking on eggshells', 'Triggers from old experiences'],
      ru: ['Вспышки, кажущиеся непропорциональными', 'Сожаление после', 'Физическое напряжение перед гневом', 'Близкие ходят как по яйцам', 'Триггеры из прошлого опыта'],
    },
    metaDesc: { en: 'Anger management therapy in Dubai — adults and teens.', ru: 'Работа с гневом в Дубае — взрослые и подростки.' },
  },
  {
    slug: 'divorce',
    t: { en: 'Divorce & Separation', ru: 'Развод и разделение' },
    d: { en: 'Family restructuring, co-parenting, adjustment.', ru: 'Реструктуризация семьи, со-родительство, адаптация.' },
    full: {
      en: [
        'Separation reorganises everything — daily routine, identity, the shape of the family. Therapy supports the adults and the children differently, and is often most effective when both are held in mind.',
      ],
      ru: [
        'Разделение перестраивает всё — повседневный ритм, идентичность, форму семьи. Терапия по-разному поддерживает взрослых и детей, и часто работает лучше всего, когда обе стороны удерживаются в фокусе.',
      ],
    },
    signs: {
      en: ['Children\'s behaviour changing', 'Communication between parents under strain', 'Loneliness in the new structure', 'Unresolved guilt or anger', 'Loss of orientation about the future'],
      ru: ['Изменения в поведении детей', 'Напряжённое общение между родителями', 'Одиночество в новой структуре', 'Неразрешённая вина или злость', 'Потеря ориентира в отношении будущего'],
    },
    metaDesc: { en: 'Divorce and co-parenting support in Dubai.', ru: 'Поддержка при разводе и со-родительстве в Дубае.' },
  },
  {
    slug: 'expat-adjustment',
    t: { en: 'Expat Adjustment', ru: 'Адаптация экспатов' },
    d: { en: 'Relocation stress, identity shifts, loneliness abroad.', ru: 'Стресс переезда, смещение идентичности, одиночество за рубежом.' },
    full: {
      en: [
        'Expat life multiplies transitions. Identity at work and home shifts. Family far away. Children adapting at different speeds. Therapy creates a stable point inside that movement.',
      ],
      ru: [
        'Жизнь экспата умножает переходы. Идентичность на работе и дома смещается. Семья далеко. Дети адаптируются с разной скоростью. Терапия создаёт устойчивую точку внутри этого движения.',
      ],
    },
    signs: {
      en: ['Mood drop after the honeymoon phase', 'Identity confusion at work or socially', 'Loneliness despite a busy schedule', 'Children showing adjustment difficulties', 'Couple tension under relocation pressure'],
      ru: ['Снижение настроения после первой эйфории', 'Идентичностная путаница в работе или в общении', 'Одиночество при насыщенном графике', 'Сложности адаптации у детей', 'Напряжение в паре под давлением переезда'],
    },
    metaDesc: { en: 'Expat adjustment therapy in Dubai — bilingual support.', ru: 'Адаптация экспатов в Дубае — билингвальная поддержка.' },
  },
];

export function getIssueBySlug(slug: string): IssueData | undefined {
  return ISSUES.find((i) => i.slug === slug);
}

export function getAllIssueSlugs(): string[] {
  return ISSUES.map((i) => i.slug);
}

export function getIssueShortList(lang: Lang) {
  return ISSUES.map((i) => ({ slug: i.slug, t: i.t[lang], d: i.d[lang] }));
}
