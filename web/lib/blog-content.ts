// Тело статей блога. Импортируется только из `app/blog/[slug]/page.tsx`,
// так что главная блога и sitemap не тащат тексты в bundle.
//
// Перед публичным запуском — ревью каждого черновика Анной (DHA Marketing Code
// требует, чтобы материалы психолога были авторизованы лицензированным
// специалистом).

export interface BlogSection {
  h: { en: string; ru: string };
  p: { en: string[]; ru: string[] };
}

export interface BlogPostContent {
  lede: { en: string; ru: string };
  sections: BlogSection[];
  closing: { en: string; ru: string };
}

export const POST_CONTENT: Record<string, BlogPostContent> = {
  'child-anxiety': {
    lede: {
      en: 'Many parents come in saying: my child used to love school, and now there are tears every morning. Or: she keeps complaining her stomach hurts but the pediatrician says everything is fine. Anxiety in children rarely shows up as a child saying "I am anxious." It shows up sideways — and often the things parents reach for first end up making it harder.',
      ru: 'Многие родители говорят: ребёнок раньше любил школу, а теперь каждое утро со слезами. Или: дочка постоянно жалуется на живот, а педиатр говорит — всё в норме. Тревога у детей редко звучит как «мне тревожно». Она проявляется боком — и то, что родители делают первым, часто только усложняет.',
    },
    sections: [
      {
        h: {
          en: 'What anxiety can look like in children 6–12',
          ru: 'Как выглядит тревога у детей 6–12 лет',
        },
        p: {
          en: [
            'In school-age children, anxiety often hides behind body language and behaviour. The most common forms I see in practice in Dubai are: morning stomachaches that disappear by 11 am, sudden refusal to attend school or activities, an unusual amount of "what if" questions, perfectionism around homework, sleep that breaks down (taking a long time to fall asleep, waking at 3 am), and sometimes irritability that looks like defiance.',
            'Younger children rarely have the words to say "I am worried about the test on Tuesday." Their nervous system says it for them — through the gut, through tears, through anger. When a parent asks "what is wrong?" the child often genuinely does not know.',
            'Two patterns deserve special attention. Children who become very rule-oriented — checking and re-checking their bag, asking the same question many times — are usually trying to manage anxiety by managing certainty. And children who suddenly will not separate from a parent (something that used to be easy) are often signalling that something feels unsafe in their world, even if the world has not actually changed.',
          ],
          ru: [
            'У детей 6–12 лет тревога часто прячется за телом и поведением. Самые частые проявления, которые я вижу в работе в Дубае: утренние боли в животе, которые проходят к одиннадцати; резкий отказ идти в школу или на занятия; много вопросов «а что если…»; перфекционизм с уроками; нарушения сна (долгое засыпание, пробуждения в три часа ночи); раздражительность, которая выглядит как непослушание.',
            'У младших детей редко есть слова, чтобы сказать «я переживаю про контрольную во вторник». За них говорит нервная система — через живот, через слёзы, через злость. Когда родитель спрашивает «что случилось?», ребёнок часто действительно не знает.',
            'Две формы заслуживают особого внимания. Дети, которые становятся очень правильными — по двадцать раз проверяют рюкзак, задают один и тот же вопрос — обычно пытаются справиться с тревогой через контроль определённости. А дети, которые вдруг не отпускают родителя там, где раньше отпускали, часто сигнализируют, что что-то ощущается небезопасным — даже если внешне ничего не изменилось.',
          ],
        },
      },
      {
        h: {
          en: 'Why "stop worrying" rarely works',
          ru: 'Почему «не переживай» обычно не помогает',
        },
        p: {
          en: [
            'The most common parent reflex is to reassure: "Everything will be fine. There is nothing to worry about." This comes from love — and it almost always backfires. The child receives two messages at once. First, that what they are feeling is wrong or exaggerated. Second, that the parent does not really see what is going on inside.',
            'A child\'s anxious brain is not asking for evidence that the worry is unfounded. It is asking, on a much deeper level, whether the adult next to them can hold what they are feeling without panicking themselves. Reassurance often signals the opposite: "this is too much for me too, please make it stop." So the child learns to hide it next time.',
            'A second well-meaning move that often makes things worse is full accommodation: letting the child skip school, letting them sleep in the parents\' bed every night, removing every situation that scares them. In the short term it brings relief. In the longer term it teaches the child\'s nervous system that the situation really was dangerous — otherwise why would the adults have arranged life around avoiding it?',
          ],
          ru: [
            'Самая частая родительская реакция — успокоить: «всё будет хорошо, переживать не из-за чего». Это идёт из любви — и почти всегда даёт обратный эффект. Ребёнок получает сразу два сообщения. Первое — то, что он чувствует, неправильно или преувеличено. Второе — что взрослый рядом не видит, что внутри.',
            'Тревожный мозг ребёнка не просит доказательств, что бояться нечего. Он на гораздо более глубоком уровне спрашивает: может ли взрослый рядом выдержать то, что я сейчас чувствую, не запаниковав сам. Утешение «это пустяки» часто читается ровно наоборот: «мне тоже невыносимо, пожалуйста, прекрати это». В следующий раз ребёнок просто спрячет.',
            'Второе движение из лучших побуждений, которое часто всё ухудшает — полное «приспособление»: разрешить пропустить школу, спать у родителей каждую ночь, убрать любую ситуацию, которая пугает. На короткой дистанции это приносит облегчение. На длинной — учит нервную систему, что ситуация и вправду была опасной: иначе зачем взрослые перестроили жизнь, чтобы её избегать?',
          ],
        },
      },
      {
        h: {
          en: 'What actually helps',
          ru: 'Что обычно помогает',
        },
        p: {
          en: [
            'Name it before you fix it. "It sounds like your stomach hurts and the morning feels really hard. That makes sense — you have been worried about Mrs. K\'s class." Naming the feeling out loud — including the part that does not seem rational — is one of the most regulating things an adult can do for a child. Functional MRI studies show that putting feelings into words quiets the threat response.',
            'Lower the stakes of the worry, not the demand of the situation. If a child is anxious about going to school, a parent\'s instinct is to bargain about whether to go. A more useful conversation is: we are going, and let us think together about what the hardest part will be and what would help. The child gets to keep agency over the small choices.',
            'Build small repeated exposures, not big talks. Anxiety responds to gradual practice, not to one big conversation about how everything will be fine. If a child is afraid of sleeping alone, sit on the floor of the room for five nights, then sit outside the open door, then sit in the hallway. The brain learns "I felt scared, and I survived, and the next time it was a little less."',
            'Take your own nervous system seriously. Children co-regulate from adults. If a parent has been holding job stress, marriage stress, or expat-relocation stress for months, the child often picks it up before the parent does. Many of the anxious children I work with start improving partly because the parent gets their own support in parallel.',
          ],
          ru: [
            'Сначала назвать, потом чинить. «Похоже, у тебя болит живот и идти утром правда тяжело. Это понятно — ты переживаешь из-за класса миссис К.» Назвать чувство вслух, включая ту часть, которая выглядит нерациональной — одна из самых успокаивающих вещей, которые взрослый может сделать для ребёнка. Исследования с фМРТ показывают, что когда чувство получает слова, реакция тревоги в мозге снижается.',
            'Снижать ставку переживания, а не требование ситуации. Если ребёнок тревожится из-за школы, родительский импульс — торговаться о том, идти или не идти. Более полезный разговор: мы идём, и давай вместе подумаем, какая часть будет самой сложной и что могло бы помочь. У ребёнка остаётся выбор в мелочах.',
            'Маленькие повторяющиеся опыты, а не один большой разговор. Тревога отвечает на постепенную практику, а не на убеждение, что всё будет хорошо. Если ребёнок боится спать один, можно пять ночей посидеть на полу в его комнате, потом сидеть у открытой двери снаружи, потом в коридоре. Мозг постепенно учится: «мне было страшно, я выжил, в следующий раз чуть легче».',
            'Серьёзно относиться к своей нервной системе. Дети «считывают» состояние со взрослого. Если родитель месяцами держит стресс работы, отношений, переезда — ребёнок часто чувствует это раньше, чем сам родитель замечает. Многие тревожные дети, с которыми я работаю, начинают восстанавливаться отчасти потому, что родитель параллельно получает свою поддержку.',
          ],
        },
      },
    ],
    closing: {
      en: 'When to reach out for support: anxiety lasting more than a few weeks, school refusal that does not respond to the steps above, sleep that does not return, panic-like episodes (sudden gasping, shaking, intense fear with no clear trigger), or anything that worries you as a parent. Child anxiety often responds well to evidence-based therapy — CBT for school-age children, parent-coaching alongside, and sometimes family work. You do not need to wait for it to get worse.',
      ru: 'Когда стоит обратиться: тревога длится больше нескольких недель, отказ от школы не сдвигается шагами выше, сон не возвращается, есть панические эпизоды (резкая одышка, дрожь, сильный страх без видимой причины) — или просто что-то беспокоит вас как родителя. Детская тревога обычно хорошо отвечает на доказательную терапию: КПТ для школьного возраста, параллельная работа с родителем, иногда семейная работа. Не обязательно ждать, пока станет хуже.',
    },
  },

  'teenager-identity': {
    lede: {
      en: 'A parent calls and says: I do not recognise my own child. The clothes are different, the music is different, friends I have never met, and most conversations end in a slammed door. Underneath the question "is this normal?" there is almost always another question: have I lost them, and is something seriously wrong? Most of the time, the first answer is "yes, this is normal." But there is a smaller subset of changes that does deserve attention.',
      ru: 'Родитель приходит и говорит: я не узнаю собственного ребёнка. Другая одежда, другая музыка, друзья, которых я не видел, и почти все разговоры заканчиваются хлопнувшей дверью. За вопросом «это нормально?» почти всегда стоит другой вопрос: я их потерял, и не происходит ли что-то серьёзное? Чаще всего первый ответ — «да, это нормально». Но есть меньшая категория изменений, которые действительно заслуживают внимания.',
    },
    sections: [
      {
        h: {
          en: 'What identity work is supposed to look like',
          ru: 'Как должна выглядеть работа над идентичностью',
        },
        p: {
          en: [
            'Adolescence is not a problem to solve, it is a developmental task. Between roughly 13 and 19, the brain reorganises around a question that has no equivalent in adult life: who am I, separate from my parents? To answer that, the teenager has to try things on. New friend groups. New aesthetics. New positions on politics, religion, what is funny, what is important. Sometimes the same teenager will hold three contradictory views in one week. From the outside this can look like instability. From the inside it is research.',
            'Three behaviours that worry parents but are usually healthy: pulling away from family conversations and preferring friends; intense interest in a subculture (music, fashion, online community) that the parent does not understand; sudden re-evaluation of family values, where things the family does in a certain way are now "wrong." This is the brain doing what it is supposed to do.',
            'A useful mental model: the teenager is not rejecting you, they are stepping back to see you. They cannot become a separate person while standing very close. The space they take is the prerequisite, not the threat.',
          ],
          ru: [
            'Подростковый возраст — не проблема, которую надо решить, а задача развития. Примерно с 13 до 19 мозг перестраивается вокруг вопроса, у которого нет аналога во взрослой жизни: кто я, отдельный от родителей? Чтобы найти ответ, подросток должен примерить много вариантов. Новые компании, эстетика, позиции по политике, религии, что смешно, что важно. Иногда один и тот же подросток за неделю удерживает три противоречащие точки зрения. Снаружи это выглядит как нестабильность. Внутри — это исследование.',
            'Три поведения, которые тревожат родителей, но обычно здоровы: отдаление от семейных разговоров в пользу друзей; страстный интерес к субкультуре (музыка, мода, онлайн-сообщество), которую родитель не понимает; внезапная переоценка семейных ценностей — то, что в семье делается определённым образом, теперь объявлено «неправильным». Это мозг делает то, что должен делать.',
            'Полезная модель: подросток не отвергает вас — он отходит, чтобы увидеть. Стать отдельным человеком, стоя слишком близко, невозможно. Дистанция, которую они берут, — это предпосылка, а не угроза.',
          ],
        },
      },
      {
        h: {
          en: 'What deserves attention',
          ru: 'Что заслуживает внимания',
        },
        p: {
          en: [
            'There is a smaller set of changes that is not part of normal identity work. The first is a sudden drop — in mood, in energy, in interest in everything (not just family) — that lasts more than two to three weeks. Healthy adolescence is volatile but not flat. Persistent flatness, especially with sleep change and appetite change, often signals depression rather than identity exploration.',
            'The second is social withdrawal that includes friends. Pulling away from parents while spending more time with peers is normal. Pulling away from peers as well — eating lunch alone, refusing previous social activities, spending hours in the room without contact — is a different signal.',
            'The third is any expression of self-harm, hopelessness, or "everyone would be better off without me," even said casually, even said as a joke. In Dubai I see this often missed, because the family culture or the school culture treats it as drama. It is not drama. Take it seriously the first time, not the third.',
            'The fourth is significant change in eating, body image, or sudden secrecy about food. Disordered eating in adolescents — across genders — is more common than parents realise and tends to escalate quietly.',
          ],
          ru: [
            'Есть меньший набор изменений, которые не относятся к нормальной работе над идентичностью. Первое — резкий спад в настроении, энергии, интересе ко всему (не только к семье), который длится больше двух-трёх недель. Здоровый подростковый возраст — это амплитуда, но не плоская линия. Стойкая «плоскость», особенно вместе с изменением сна и аппетита, чаще указывает на депрессию, а не на поиски себя.',
            'Второе — социальное отстранение, включающее друзей. Уход от родителей при росте времени с ровесниками — это норма. Уход и от ровесников — обедать в одиночку, отказываться от привычных активностей, часами в комнате без контакта — это другой сигнал.',
            'Третье — любые высказывания о самоповреждении, безнадёжности, «всем было бы лучше без меня», даже мимоходом, даже в шутку. В Дубае я часто вижу, как это пропускают: семейная культура или школа воспринимают это как драматизацию. Это не драматизация. Отнеситесь серьёзно с первого раза, не с третьего.',
            'Четвёртое — значимые изменения в еде, отношении к телу, новая секретность вокруг приёма пищи. Расстройства пищевого поведения у подростков — у всех полов — встречаются чаще, чем кажется родителям, и обычно тихо нарастают.',
          ],
        },
      },
      {
        h: {
          en: 'How to stay connected without crowding',
          ru: 'Как оставаться на связи, не подавляя',
        },
        p: {
          en: [
            'Lower the questions, raise the availability. Direct questions ("how was your day?") often produce nothing. Side-by-side time produces a lot — driving somewhere, cooking together, walking. Many of my best teenage clients start talking about something real after twelve minutes of saying nothing. The adult\'s job is to be reliably present, not to extract information.',
            'Hold the rules without making them the relationship. Curfews, screen time, who they go out with — these are not negotiable in the same way as music taste. State the rule once, calmly, and do not re-litigate it every conversation. The teenager will push, both because they need to and because pushing is the form. Holding the limit without escalation is more important than convincing them the limit is right.',
            'Stay curious about who they are becoming, not who they were. The hardest emotional move for a parent is to grieve, in a small way, the child they used to have so they can meet the person now showing up. Teenagers can tell when a parent is talking to who they used to be at 9 — and they shut down.',
          ],
          ru: [
            'Меньше прямых вопросов, больше доступности. Прямые вопросы («как прошёл день?») часто дают ноль. Время бок о бок даёт много — поездка в машине, готовка, прогулка. Многие мои лучшие подростковые клиенты начинают говорить о настоящем после двенадцати минут молчания. Задача взрослого — надёжно быть рядом, а не вытаскивать информацию.',
            'Держать правила, не превращая их в отношения. Время возвращения, экраны, с кем общаться — это не предмет переговоров наравне с музыкой. Правило проговорено один раз, спокойно, и не пересматривается в каждом разговоре. Подросток будет давить — отчасти потому что должен, отчасти потому что давление — это форма. Удерживать границу без эскалации важнее, чем убедить, что граница правильная.',
            'Быть любопытным к тому, кем ребёнок становится, а не кем был. Самое сложное эмоциональное движение для родителя — мягко погоревать о том ребёнке, который был, чтобы увидеть человека, который теперь стоит перед вами. Подростки чувствуют, когда родитель говорит с тем, кем они были в девять, — и закрываются.',
          ],
        },
      },
    ],
    closing: {
      en: 'When to reach out: persistent low mood beyond two to three weeks, withdrawal that includes friends, any mention of self-harm or hopelessness (always — first time), significant change in eating or body image, or your own sense that something is off and not shifting. Adolescent therapy works best when the teenager has some ownership of the choice; coming in for one session "to see what it is" is often a useful way to start. Parent-only sessions are also a real option, especially when the teenager is not ready.',
      ru: 'Когда стоит обратиться: устойчиво сниженное настроение больше двух-трёх недель, отстранение, включающее друзей, любое упоминание самоповреждения или безнадёжности (всегда — с первого раза), заметные изменения в еде и отношении к телу или просто ваше ощущение, что что-то не так и не сдвигается. Подростковая терапия лучше работает, когда у самого подростка есть выбор; одна сессия «попробовать» часто хороший старт. Также возможен формат работы только с родителем, особенно если подросток пока не готов.',
    },
  },

  'emotional-patterns': {
    lede: {
      en: 'A new client says, almost embarrassed: "I am intelligent, I have read the books, I see exactly what is happening — and I am still here, in the same kind of relationship I swore I would never be in again." This is not a failure of intelligence. It is how the human nervous system works. The patterns we form early often outlast our adult understanding of them. Naming them is the start of changing them.',
      ru: 'Новый клиент говорит, почти смущённо: «Я умный человек, я читал книги, я вижу ровно то, что происходит, — и всё равно я здесь, в тех же отношениях, в которых обещал себе никогда больше не оказаться». Это не провал интеллекта. Так устроена человеческая нервная система. Паттерны, сформированные рано, часто переживают взрослое понимание о них. Назвать их — это первый шаг к тому, чтобы их изменить.',
    },
    sections: [
      {
        h: {
          en: 'Why the brain repeats the familiar',
          ru: 'Почему мозг повторяет знакомое',
        },
        p: {
          en: [
            'The brain is, among other things, a prediction machine. It uses early experience to build a working model of how relationships, safety, conflict and love behave. Whatever the model says, the nervous system reads as "normal" — even when, on inspection, the model is painful. Familiar discomfort feels safer to the nervous system than unfamiliar comfort, because familiarity is predictable. This is why people sometimes leave a difficult partner, look at the available options, and somehow gravitate back to a partner who reminds them, in subtle ways, of the original difficulty. They are not choosing pain. They are choosing what their early system labelled "real."',
            'These patterns are not just about romantic relationships. They show up in work (always ending up with the boss who needs constant reassurance, always being the one who keeps the team together), in friendships (always the listener, never the listened-to), and in how a person treats themselves (always giving themselves the same harsh internal voice they once heard from outside).',
            'The reason "just stop doing it" rarely works is that the pattern is not running on the level of conscious choice. It runs on the level of "this configuration of cues feels right." By the time the conscious mind notices, the choice is already two years old.',
          ],
          ru: [
            'Мозг — среди прочего, машина предсказаний. На основе раннего опыта он строит рабочую модель того, как ведут себя отношения, безопасность, конфликт и любовь. Что бы модель ни говорила, нервная система читает это как «нормально» — даже когда при ближайшем рассмотрении модель болезненная. Знакомый дискомфорт ощущается безопаснее, чем незнакомый комфорт, потому что он предсказуем. Поэтому человек уходит от трудного партнёра, смотрит на варианты — и каким-то образом снова тянется к партнёру, который тонко напоминает первоначальную трудность. Это не выбор боли. Это выбор того, что ранняя система пометила как «настоящее».',
            'Эти паттерны касаются не только романтических отношений. Они проявляются на работе (всегда тот руководитель, которому нужно постоянное подтверждение; всегда тот, кто склеивает команду), в дружбе (всегда слушающий, не услышанный), в обращении с собой (тот же жёсткий внутренний голос, который когда-то звучал снаружи).',
            'Почему «просто перестань так делать» обычно не работает: паттерн запущен не на уровне сознательного выбора. Он запущен на уровне «такая конфигурация сигналов ощущается правильной». К тому моменту, когда сознание замечает, выбор уже сделан два года назад.',
          ],
        },
      },
      {
        h: {
          en: 'Three patterns that show up most often',
          ru: 'Три паттерна, которые встречаются чаще всего',
        },
        p: {
          en: [
            'The over-functioner. Someone who grew up being relied on more than was age-appropriate often becomes the adult who carries everything. They are excellent at work, exhausted at home, and find genuine rest impossible. Their nervous system is not safe in passive states. The cost shows up as burnout, resentment they are ashamed of, and difficulty asking for help even when help is offered.',
            'The translator. People who grew up reading the emotional weather of an unpredictable parent often become adults who can sense everyone\'s mood in a room. As a skill it looks impressive. As a default, it is exhausting — every interaction includes an invisible second job of reading the other person and managing them. They tend to end up with partners or friends who require this work, because that combination feels familiar.',
            'The disappearer. Someone whose early environment punished or ignored expressed needs often becomes an adult who, when something is wrong, goes very quiet — and is then surprised when partners feel shut out. From inside, they are not stonewalling. They are doing what worked at age seven. From outside, it can look like indifference.',
          ],
          ru: [
            'Гипер-функционер. Тот, на кого в детстве полагались больше, чем подходило по возрасту, часто становится взрослым, который тащит на себе всё. Он отлично работает, дома истощён, и настоящий отдых для него невозможен. Нервная система не чувствует безопасности в пассивных состояниях. Цена — выгорание, обида, за которую стыдно, и трудность просить помощь, даже когда её предлагают.',
            'Переводчик. Люди, выросшие, считывая эмоциональную погоду непредсказуемого родителя, часто становятся взрослыми, которые в любой комнате чувствуют настроение каждого. Как навык — впечатляющий. По умолчанию — изматывает: каждое взаимодействие включает невидимую вторую работу — считывать другого и регулировать его. Часто оказываются рядом с партнёрами или друзьями, которым эта работа нужна, — потому что такое сочетание ощущается знакомым.',
            'Исчезающий. Тот, чья ранняя среда наказывала или игнорировала выраженные потребности, часто становится взрослым, который, когда что-то не так, замолкает, — и удивляется, что партнёр чувствует себя отрезанным. Изнутри это не молчанка. Это то, что работало в семь лет. Снаружи это часто выглядит как безразличие.',
          ],
        },
      },
      {
        h: {
          en: 'How patterns shift',
          ru: 'Как паттерны сдвигаются',
        },
        p: {
          en: [
            'They do not shift through insight alone. Many people in therapy can describe their pattern with painful clarity by session three and still be in it by session three hundred — until something else happens. The "something else" is repeated lived experience of a different ending. A nervous system that learned "if I show a need, I get punished or ignored" has to repeatedly experience showing a need and getting met with care. That experience can come from a therapeutic relationship, from a partner who is willing to be slow, from close friendships — and usually some combination.',
            'Two practical moves people can make on their own. First: notice the moment of choosing, not the choice itself. The pattern lives inside a small window — twenty seconds when something familiar pulls and a different option becomes briefly visible. Catching that window, even occasionally, is more valuable than analysing the choice afterwards. Second: tell someone. Patterns hold their power partly through silence. A pattern named to a trusted person becomes harder to repeat unconsciously.',
            'And one important note: changing a pattern almost always feels worse before it feels better. A nervous system that has been organised around a coping strategy for thirty years will protest when that strategy is set down. People often interpret the protest as proof that the new approach is wrong. It is not. It is the pattern resisting being released.',
          ],
          ru: [
            'Они не сдвигаются одним пониманием. Многие в терапии могут к третьей сессии с болезненной ясностью описать свой паттерн — и оставаться в нём к трёхсотой, пока не случится «что-то ещё». Это «что-то ещё» — повторяющийся живой опыт другого финала. Нервная система, выучившая «если я проявляю потребность, меня наказывают или игнорируют», должна снова и снова получать опыт проявления потребности и ответа заботой. Этот опыт может прийти из терапевтических отношений, от партнёра, готового идти медленно, из близких дружб — обычно из сочетания.',
            'Два практических хода, которые можно сделать самому. Первое — заметить момент выбора, а не сам выбор. Паттерн живёт в маленьком окне — секунд двадцать, когда что-то знакомое тянет, а другая опция на мгновение становится видна. Поймать это окно, пусть иногда, ценнее, чем анализировать выбор задним числом. Второе — рассказать кому-то. Паттерны частично держатся за счёт молчания. Названный другому человеку, паттерн становится труднее повторять автоматически.',
            'И важное замечание: смена паттерна почти всегда сначала ощущается хуже, чем лучше. Нервная система, тридцать лет организованная вокруг копинга, протестует, когда этот копинг откладывают. Люди часто читают этот протест как доказательство, что новый подход неверен. Это не доказательство — это паттерн сопротивляется тому, что его отпускают.',
          ],
        },
      },
    ],
    closing: {
      en: 'When to reach out: when the same theme keeps appearing in different relationships, when "I know better and still cannot" describes you, when a recent loss or relocation has reactivated something older, or when therapy has been on the back of your mind for more than a year. The work is not about discovering you are broken. It is about updating a map that was drawn by a much younger version of you, with the information available to that version. Adult life deserves an adult map.',
      ru: 'Когда стоит обратиться: когда одна и та же тема возвращается в разные отношения; когда «я знаю как надо, и всё равно не могу» — про вас; когда недавняя потеря или переезд оживили что-то старое; или когда мысль про терапию крутится в голове больше года. Работа — не про то, чтобы обнаружить, что вы сломаны. Она про то, чтобы обновить карту, которую нарисовала гораздо более ранняя версия вас, с доступной ей тогда информацией. Взрослая жизнь заслуживает взрослой карты.',
    },
  },

  'imperfect-parenting': {
    lede: {
      en: 'A surprising amount of what parents do anxiously is not necessary, and a surprising amount of what they think does not matter, matters a lot. After many years of practice, the picture is clearer than parenting books make it sound. Children do not need parents who get it right. They need parents who recover well when they get it wrong.',
      ru: 'Удивительно много того, что родители делают тревожно, на самом деле не обязательно. И удивительно много того, что им кажется неважным, имеет значение. За годы практики картина становится яснее, чем её рисуют родительские книги. Детям не нужны родители, которые всё делают правильно. Им нужны родители, которые умеют восстанавливаться после своих ошибок.',
    },
    sections: [
      {
        h: {
          en: 'The "good enough" idea',
          ru: 'Идея «достаточно хорошего» родителя',
        },
        p: {
          en: [
            'In the 1950s the British paediatrician and psychoanalyst Donald Winnicott introduced the phrase "good enough mother." He meant something specific. A parent who attunes to a child perfectly, every time, would actually deprive the child of an essential developmental experience: the experience of small manageable disappointments and the experience of being cared for through them. Children build resilience not from never being let down, but from being let down within a relationship that can repair.',
            'Modern research backs this up. Studies of attachment have shown that what predicts secure attachment is not the absence of misattunement but the presence of repair: the parent who notices they snapped, comes back, names it, and re-establishes contact. Repair after rupture is the foundational mechanism. A relationship where the adult is reliably willing to repair gives the child a working model that says: love survives mistakes, including mine.',
            'This is good news for any parent who loses their patience — which is every parent. The slip is not the problem. What you do in the next twenty minutes is.',
          ],
          ru: [
            'В 1950-х британский педиатр и психоаналитик Дональд Винникотт ввёл понятие «достаточно хорошая мать». Он имел в виду конкретное. Родитель, идеально настроенный на ребёнка каждый раз, на самом деле лишил бы его важного опыта: опыта маленьких посильных разочарований и опыта быть в заботе во время них. Устойчивость ребёнка строится не из того, что его никогда не подводят, а из того, что подводят внутри отношений, которые умеют восстанавливаться.',
            'Современные исследования это подтверждают. Работы по привязанности показывают: безопасную привязанность предсказывает не отсутствие рассогласований, а наличие восстановления — родитель замечает, что сорвался, возвращается, называет это, восстанавливает контакт. Восстановление после разрыва — базовый механизм. Отношения, в которых взрослый стабильно готов восстанавливать, дают ребёнку рабочую модель: любовь переживает ошибки, в том числе мои.',
            'Это хорошая новость для каждого родителя, который теряет терпение, — то есть для каждого родителя. Срыв — не проблема. Проблема — то, что происходит в следующие двадцать минут.',
          ],
        },
      },
      {
        h: {
          en: 'What children actually need from a parent',
          ru: 'Что ребёнку на самом деле нужно от родителя',
        },
        p: {
          en: [
            'A reliably available adult. Not constantly available. Reliably available — meaning the child knows that the adult comes back, picks them up emotionally when they fall, and can be predicted. A child who knows the adult will respond can survive a great deal of imperfection elsewhere.',
            'An adult who can name feelings without becoming flooded by them. When a child cries hard, the most useful adult response is not "stop crying," and not joining the panic. It is "this is big, I am here, I can hold this." Children co-regulate from the adult\'s nervous system before they can regulate their own. An adult who can stay regulated in the storm teaches the child their feelings are survivable.',
            'An adult who repairs. After the snap, after the unfair punishment, after the harsh tone — coming back, in plain words, and saying "I was tired and I should not have spoken to you that way" rebuilds something that perfection cannot build. It also teaches the child the most important interpersonal skill of adult life: how to say sorry.',
            'An adult who has their own life. Children of parents whose only project is their child often grow up with a vague sense of debt. The parent who has friends, work they care about, interests, downtime — gives the child permission to one day have the same.',
          ],
          ru: [
            'Надёжно доступный взрослый. Не постоянно доступный. Надёжно доступный — это когда ребёнок знает, что взрослый возвращается, ловит его эмоционально, когда он падает, и его поведение предсказуемо. Ребёнок, который знает, что взрослый ответит, способен пережить много неидеальности в остальном.',
            'Взрослый, который может называть чувства, не утопая в них. Когда ребёнок сильно плачет, самый полезный ответ — не «прекрати плакать» и не присоединиться к панике. Это «это большое, я рядом, я могу это выдержать». Ребёнок саморегулируется через нервную систему взрослого, прежде чем учится регулироваться сам. Взрослый, способный остаться в равновесии в бурю, учит ребёнка, что его чувства можно пережить.',
            'Взрослый, который восстанавливает. После срыва, после несправедливого наказания, после резкого тона — вернуться, простыми словами, и сказать: «я устал и не должен был говорить с тобой так» — создаёт то, чего идеальность создать не может. И заодно учит ребёнка важнейшему межличностному навыку взрослой жизни — как говорить «прости».',
            'Взрослый, у которого есть своя жизнь. Дети родителей, для которых единственный проект — это сам ребёнок, часто растут с расплывчатым ощущением долга. Родитель, у которого есть друзья, работа, которая его волнует, интересы, время для себя, — даёт ребёнку разрешение однажды иметь то же самое.',
          ],
        },
      },
      {
        h: {
          en: 'Things that worry parents but matter less than they think',
          ru: 'Что тревожит родителей, но значит меньше, чем кажется',
        },
        p: {
          en: [
            'Whether the child watched a screen for forty minutes longer than planned. Whether they ate the perfect breakfast. Whether they did the enrichment activity. Whether the parent answered every question correctly. Whether the home looked the way the parenting account on Instagram looked.',
            'These are not zero — but on a list ranked by importance, they sit far below "did the child experience me coming back warmly after I lost my temper" or "does the child know my love is not contingent on their performance." If you only have a small amount of energy on a hard week, that energy is better spent on returning warmly than on optimising the schedule.',
          ],
          ru: [
            'Сколько минут ребёнок посмотрел экран сверх плана. Был ли идеальным завтрак. Сделал ли он развивающее занятие. Каждый ли вопрос родителя был корректен. Выглядел ли дом так, как родительский аккаунт в Инстаграме.',
            'Это не ноль — но в списке, отсортированном по значимости, они стоят далеко ниже, чем «получил ли ребёнок опыт, что я тепло возвращаюсь после срыва» или «знает ли ребёнок, что моя любовь не зависит от его результатов». Если на трудной неделе у вас осталось немного энергии, она лучше потрачена на тёплое возвращение, чем на оптимизацию расписания.',
          ],
        },
      },
    ],
    closing: {
      en: 'When to reach out: when parenting feels like a constant emergency, when the same conflict with your child repeats and nothing seems to shift it, when something in your own childhood is showing up more loudly through your child than expected, or when guilt about being "not enough" is bigger than the actual situation requires. Parent-only therapy is a real option — many of the changes a child needs come through changes the parent is supported to make.',
      ru: 'Когда стоит обратиться: когда родительство ощущается как постоянная аварийка; когда один и тот же конфликт с ребёнком повторяется, и ничто его не сдвигает; когда что-то из вашего собственного детства проявляется через ребёнка громче, чем ожидалось; или когда вина «я недостаточно хороший» больше, чем требует реальная ситуация. Терапия только с родителем — это реальный формат: многие изменения, которые нужны ребёнку, приходят через изменения, в которых поддержан родитель.',
    },
  },

  'expat-emotions': {
    lede: {
      en: 'Most families who move to Dubai do so for clear reasons: a job, an opportunity, a step forward. The decision is rational, the move is logistical, and on the spreadsheet the trade-off looks fine. The part that does not show up on the spreadsheet is what arrives in the second year — sometimes the third — and what it does to people who, by every external measure, are doing well.',
      ru: 'Большинство семей переезжает в Дубай по понятным причинам: работа, возможность, шаг вперёд. Решение рациональное, переезд — логистика, и в табличке компромисс выглядит нормально. То, что в таблице не помещается, приходит на втором году — иногда на третьем — и делает что-то с людьми, которые по всем внешним меркам в порядке.',
    },
    sections: [
      {
        h: {
          en: 'Why year two is often harder than year one',
          ru: 'Почему второй год часто тяжелее первого',
        },
        p: {
          en: [
            'In the first year almost everyone is in motion. Schools to find, apartments to set up, paperwork, visas, friends to meet, a city to learn. The nervous system is busy with new — and new, even when stressful, comes with adrenaline. People often report feeling fine, sometimes even excited, through the first nine to twelve months.',
            'Year two is when the new becomes routine and the question quietly arrives: what is this for. Friends from home are now in different time zones. The novelty of the city is normal. The specific reason for the move — usually one person\'s career — has become the background, and the daily texture is what is left. This is when the emotional bill comes due.',
            'Three patterns I see most often. Adults who feel a low-grade flatness they cannot explain ("we have a great life, why do I feel like this"). Couples who notice that the conversations they used to have at home no longer happen, replaced by logistics. Children who seemed fine at first and start showing trouble — at school, with sleep, with friends — six to eighteen months in.',
          ],
          ru: [
            'В первый год почти все в движении. Найти школу, снять квартиру, оформить документы и визы, познакомиться с людьми, выучить город. Нервная система занята новым — а новое, даже стрессовое, идёт с адреналином. Люди часто говорят, что им нормально, иногда даже воодушевлённо, первые девять-двенадцать месяцев.',
            'Второй год — когда новое становится рутиной и тихо приходит вопрос: ради чего всё это. Друзья из «там» теперь в других часовых поясах. Новизна города стала привычным фоном. Конкретная причина переезда — обычно карьера одного человека — ушла в фон, а ежедневная фактура — то, что осталось. Тогда приходит эмоциональный счёт.',
            'Три паттерна, которые встречаются чаще всего. Взрослые, у которых тлеет необъяснимая «плоскость» («у нас отличная жизнь, почему я так себя чувствую»). Пары, которые замечают, что разговоры, которые раньше были дома, заменились логистикой. Дети, которые выглядели в порядке, начинают показывать сложности — в школе, со сном, с друзьями — через шесть-восемнадцать месяцев после переезда.',
          ],
        },
      },
      {
        h: {
          en: 'The partner whose career did not move',
          ru: 'Партнёр, чья карьера не переехала',
        },
        p: {
          en: [
            'In many expat families one partner has a clear external structure — work, colleagues, deadlines, recognition — and the other does not. The "trailing partner" (the field uses unkind language) is often the one who carried the move, set up the household, signed up the children, found the doctors. Once that work is done, the structure that held them disappears, and they often end up in a strange landscape: very busy, very competent, and slowly invisible. This is one of the most common quiet sources of distress in expat couples in Dubai.',
            'Three things matter here. First — name it. The partner whose work did not move is doing real work; pretending it is "just life" devalues both the work and the loss. Second — protect time and money for the trailing partner\'s own engagement, whatever shape that takes (work, study, friends, project, body practice). Without it, resentment is nearly inevitable and shows up months later as something else. Third — talk about the move as a joint project, not as one person\'s opportunity that the other came along for. The framing matters more than people expect.',
          ],
          ru: [
            'Во многих семьях экспатов у одного партнёра есть внешняя структура — работа, коллеги, дедлайны, признание — а у другого нет. «Сопровождающий партнёр» (термин в индустрии звучит грубо) — обычно тот, кто вёз переезд, настраивал быт, оформлял детей, искал врачей. Когда эта работа закончена, структура, которая держала, исчезает, и человек оказывается в странном пейзаже: очень занят, очень компетентен — и постепенно невидим. Это один из самых частых тихих источников страдания в парах экспатов в Дубае.',
            'Здесь важны три вещи. Первое — назвать. Партнёр, чья работа не переехала, делает реальную работу; делать вид, что это «просто жизнь», обесценивает и работу, и потерю. Второе — защитить время и деньги на собственную вовлечённость этого партнёра, в любой форме (работа, учёба, друзья, проект, телесная практика). Без этого обида почти неизбежна — и возвращается через несколько месяцев в виде чего-то другого. Третье — говорить о переезде как о совместном проекте, а не как о возможности одного, за которой поехал второй. Эта рамка значит больше, чем кажется.',
          ],
        },
      },
      {
        h: {
          en: 'Children and the delayed reaction',
          ru: 'Дети и отложенная реакция',
        },
        p: {
          en: [
            'Many parents tell me with relief: "the kids did so well with the move." For about eight months that is often true. Children at school age have a strong adaptive capacity — new uniform, new accent, new friends, fine. The reaction tends to come later, in two waves.',
            'The first wave: somewhere between six and twelve months after the move, when the child realises this is the new life, not a long trip. School pressure builds. The friends made are real but new. Sleep can shift. Behaviour at home can spike (school keeps them in regulation; home is where the nervous system finally lets go). Parents often interpret this as "they are fine at school but difficult with us," when actually the trouble at home is a sign of trust.',
            'The second wave: at major transitions — moving up a school, a sibling joining a new school, the family\'s first visit "back" — older feelings about loss often resurface. A child who never seemed sad about leaving their grandmother may, eighteen months in, weep for an hour about it. This is not a regression. It is the system processing what was previously too much to process.',
          ],
          ru: [
            'Многие родители с облегчением говорят: «дети справились с переездом отлично». Месяцев восемь это часто правда. У школьников сильная адаптивная способность — новая форма, новый акцент, новые друзья, всё нормально. Реакция приходит позже, двумя волнами.',
            'Первая волна — примерно между шестью и двенадцатью месяцами после переезда, когда ребёнок осознаёт: это новая жизнь, а не длинная поездка. Усиливается школьное давление. Друзья настоящие, но всё ещё новые. Сон может сдвинуться. Поведение дома может «вспыхнуть» (школа держит ребёнка в регуляции; дома нервная система наконец расслабляется). Родители часто читают это как «в школе всё хорошо, а с нами трудно», тогда как трудности дома — это признак доверия.',
            'Вторая волна — на больших переходах: смена школы, поступление младшего брата в новую школу, первая поездка «обратно». Старые чувства про потерю часто всплывают. Ребёнок, который, казалось, не грустил о бабушке, через полтора года вдруг плачет о ней час. Это не регресс. Это система перерабатывает то, что в момент переезда было ещё слишком много.',
          ],
        },
      },
    ],
    closing: {
      en: 'When to reach out: low-grade flatness lasting more than a few weeks, distance in the couple that conversation alone is not closing, a child showing trouble at home well after the move, or your own sense that the cost of being here is higher than you have admitted out loud. Therapy in expat contexts is often briefer and more focused than people expect — many of the difficulties are not character problems, they are situational, and once they are named they tend to move.',
      ru: 'Когда стоит обратиться: «плоскость», которая держится больше нескольких недель, дистанция в паре, которую один разговор не закрывает, ребёнок показывает сложности дома спустя время после переезда, или ваше собственное ощущение, что цена быть здесь выше, чем вы признали вслух. Терапия в экспат-контексте часто короче и предметнее, чем кажется: многие сложности — не характер, а ситуация, и когда их называют, они начинают двигаться.',
    },
  },
};

export function getPostContent(slug: string): BlogPostContent | undefined {
  return POST_CONTENT[slug];
}
