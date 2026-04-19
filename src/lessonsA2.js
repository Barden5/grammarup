// ─── A2 Topic 2 — Irregular past verbs ────────────────────────────────────────

export const lessonA2Topic2 = {
  id: "a2-2",
  level: "A2",
  title: "Irregular Past Verbs",
  subtitle: "Some verbs change completely in the past!",
  character: "Marco",
  characterEmoji: "🧪",
  story:
    "Marco's class went on a school trip yesterday! They visited the science museum. It was an amazing day! But some of the action words are tricky — they don't just add -ed! Help Marco tell the story of his trip!",
  rule:
    "We already know that most verbs add **-ed** in the past. walk → walked. mix → mixed. But some verbs change completely! These are called **irregular verbs**. go → **went**, see → **saw**, have → **had**, come → **came**, get → **got**, take → **took**, eat → **ate**, say → **said**, give → **gave**.",
  examples: [
    { sentence: "Marco **WENT** to the science museum yesterday.", note: "go → went" },
    { sentence: "He **SAW** a real dinosaur skeleton!",            note: "see → saw" },
    { sentence: "The class **HAD** lunch in the museum café.",     note: "have → had" },
  ],
  feedback: {
    correct: (answer) => `Yes! "${answer}" is right! Some past tense words change completely — good memory! ✅`,
    wrong:   (answer) => `Almost! The answer is "${answer}". This is an irregular verb — it changes completely in the past tense! 💡`,
  },
  scoreMessages: {
    perfect:  { emoji: "🏆", text: "Perfect score! You are an irregular verb expert! Marco is impressed!" },
    good:     { emoji: "🔬", text: "Really good work! Irregular verbs are tricky. Keep practicing!" },
    tryAgain: { emoji: "💛", text: "Good effort! Irregular verbs take time to learn. Let's try again!" },
  },
  exercises: [
    {
      id: 1,
      label: "Exercise 1",
      type: "Multiple Choice",
      icon: "🎯",
      storyPrompt: "Marco is telling his mum about the school trip. Pick the right word!",
      questions: [
        {
          id: 1,
          prompt: "Marco ___ to the museum by school bus.",
          choices: ["goed", "went", "going"],
          answer: "went",
          hint: "Go is irregular! go → went — not goed!",
        },
        {
          id: 2,
          prompt: "He ___ the most amazing robot exhibition!",
          choices: ["seed", "seen", "saw"],
          answer: "saw",
          hint: "See is irregular! see → saw — not seed!",
        },
        {
          id: 3,
          prompt: "The class ___ sandwiches for lunch.",
          choices: ["eated", "ate", "eating"],
          answer: "ate",
          hint: "Eat is irregular! eat → ate — not eated!",
        },
      ],
    },
    {
      id: 2,
      label: "Exercise 2",
      type: "Find the Mistake",
      icon: "🔍",
      storyPrompt: "Marco wrote his trip report but made some irregular verb mistakes. Find and fix the mistake!",
      questions: [
        {
          id: 4,
          prompt: "Marco ___ lots of photos at the museum.",
          wrongSentence: "Marco taked lots of photos at the museum.",
          wrongWord: "taked",
          choices: ["taked", "took", "taking"],
          answer: "took",
          hint: "Take is irregular! take → took — not taked!",
        },
        {
          id: 5,
          prompt: "His friend ___ late to the bus.",
          wrongSentence: "His friend comed late to the bus.",
          wrongWord: "comed",
          choices: ["comed", "came", "coming"],
          answer: "came",
          hint: "Come is irregular! come → came — not comed!",
        },
        {
          id: 6,
          prompt: "The teacher ___ it was the best trip ever!",
          wrongSentence: "The teacher sayed it was the best trip ever!",
          wrongWord: "sayed",
          choices: ["sayed", "said", "saying"],
          answer: "said",
          hint: "Say is irregular! say → said — not sayed!",
        },
      ],
    },
    {
      id: 3,
      label: "Exercise 3",
      type: "Fill in the Blank",
      icon: "✏️",
      storyPrompt: "Marco is finishing his trip diary. Fill in the blank!",
      questions: [
        {
          id: 7,
          prompt: "Marco ___ a free science book at the shop.",
          choices: ["getted", "got", "getting"],
          answer: "got",
          hint: "Get is irregular! get → got — not getted!",
        },
        {
          id: 8,
          prompt: "His best friend ___ to sit next to him on the bus.",
          choices: ["comed", "coming", "came"],
          answer: "came",
          hint: "Come is irregular! come → came — not comed!",
        },
        {
          id: 9,
          prompt: "Marco ___ his teacher a big thank you at the end.",
          choices: ["gived", "gave", "giving"],
          answer: "gave",
          hint: "Give is irregular! give → gave — not gived!",
        },
      ],
    },
  ],
};

export const allQuestionsA2Topic2 = lessonA2Topic2.exercises.flatMap((ex) =>
  ex.questions.map((q) => ({
    ...q,
    exerciseLabel:       ex.label,
    exerciseType:        ex.type,
    exerciseIcon:        ex.icon,
    exerciseId:          ex.id,
    exerciseStoryPrompt: ex.storyPrompt,
  }))
);

// ─── A2 Topic 3 — WH- questions ───────────────────────────────────────────────

export const lessonA2Topic3 = {
  id: "a2-3",
  level: "A2",
  title: "WH- Questions",
  subtitle: "Ask who, what, where, when, why and how!",
  character: "Marco",
  characterEmoji: "🧪",
  story:
    "Marco is interviewing people at the science fair for his school newspaper. He needs to ask the right questions!",
  rule:
    "We use **WH- question words** to ask for information. **WHO** asks about a person. **WHAT** asks about a thing. **WHERE** asks about a place. **WHEN** asks about a time. **WHY** asks about a reason. **HOW** asks about a way or manner.",
  examples: [
    { sentence: "**WHO** invented the telephone? Alexander Graham Bell!", note: "asking about a person" },
    { sentence: "**WHAT** did Marco find at the museum?",                note: "asking about a thing" },
    { sentence: "**WHERE** did the class go on their trip?",             note: "asking about a place" },
  ],
  feedback: {
    correct: (answer) => `Yes! "${answer}" is right! Great question! ✅`,
    wrong:   (answer) => `Almost! The answer is "${answer}". Who = person, What = thing, Where = place, When = time, Why = reason! 💡`,
  },
  scoreMessages: {
    perfect:  { emoji: "🏆", text: "Perfect score! Marco would make a great journalist!" },
    good:     { emoji: "🔬", text: "Really good work! WH- questions take practice. Keep going!" },
    tryAgain: { emoji: "💛", text: "Good effort! Who, what, where, when, why — let's try again!" },
  },
  exercises: [
    {
      id: 1,
      label: "Exercise 1",
      type: "Multiple Choice",
      icon: "🎯",
      storyPrompt: "Marco is writing interview questions for the school newspaper. Pick the right word!",
      questions: [
        {
          id: 1,
          prompt: "___ is your favourite scientist?",
          choices: ["Where", "Who", "When"],
          answer: "Who",
          hint: "We are asking about a PERSON. Use WHO!",
        },
        {
          id: 2,
          prompt: "___ did the trip happen?",
          choices: ["Who", "What", "When"],
          answer: "When",
          hint: "We are asking about a TIME. Use WHEN!",
        },
        {
          id: 3,
          prompt: "___ did Marco put his notebook?",
          choices: ["Where", "Why", "Who"],
          answer: "Where",
          hint: "We are asking about a PLACE. Use WHERE!",
        },
      ],
    },
    {
      id: 2,
      label: "Exercise 2",
      type: "Find the Mistake",
      icon: "🔍",
      storyPrompt: "Marco mixed up some question words in his interview notes. Find and fix the mistake!",
      questions: [
        {
          id: 4,
          prompt: "___ invented the telephone?",
          wrongSentence: "Where invented the telephone?",
          wrongWord: "Where",
          choices: ["Where", "Who", "What"],
          answer: "Who",
          hint: "We are asking about a person — the inventor. Use WHO not WHERE!",
        },
        {
          id: 5,
          prompt: "___ is the museum open?",
          wrongSentence: "Who is the museum open?",
          wrongWord: "Who",
          choices: ["Who", "When", "Where"],
          answer: "When",
          hint: "We are asking about a time. Use WHEN not WHO!",
        },
        {
          id: 6,
          prompt: "___ is your favourite experiment?",
          wrongSentence: "When is your favourite experiment?",
          wrongWord: "When",
          choices: ["When", "What", "Where"],
          answer: "What",
          hint: "We are asking about a thing. Use WHAT not WHEN!",
        },
      ],
    },
    {
      id: 3,
      label: "Exercise 3",
      type: "Fill in the Blank",
      icon: "✏️",
      storyPrompt: "Marco is preparing his final list of interview questions. Fill in the blank!",
      questions: [
        {
          id: 7,
          prompt: "___ did Marco win at the science fair?",
          choices: ["Where", "What", "When"],
          answer: "What",
          hint: "We are asking about a thing he won. Use WHAT!",
        },
        {
          id: 8,
          prompt: "___ did the class eat lunch?",
          choices: ["Who", "Why", "Where"],
          answer: "Where",
          hint: "We are asking about a place. Use WHERE!",
        },
        {
          id: 9,
          prompt: "___ did Marco feel happy at the fair?",
          choices: ["What", "Why", "When"],
          answer: "Why",
          hint: "We are asking about a reason. Use WHY!",
        },
      ],
    },
  ],
};

export const allQuestionsA2Topic3 = lessonA2Topic3.exercises.flatMap((ex) =>
  ex.questions.map((q) => ({
    ...q,
    exerciseLabel:       ex.label,
    exerciseType:        ex.type,
    exerciseIcon:        ex.icon,
    exerciseId:          ex.id,
    exerciseStoryPrompt: ex.storyPrompt,
  }))
);

// ─── A2 Topic 4 — Comparatives ────────────────────────────────────────────────

export const lessonA2Topic4 = {
  id: "a2-4",
  level: "A2",
  title: "Comparatives",
  subtitle: "Compare two things with -er and more!",
  character: "Marco",
  characterEmoji: "🧪",
  story:
    "Marco and his friend are comparing everything at the science fair — whose robot is bigger, whose experiment is faster!",
  rule:
    "We use **comparatives** to compare two things. For short words add **-er**: big → **bigger**, fast → **faster**, tall → **taller**. For long words use **MORE**: **more** interesting, **more** difficult, **more** beautiful. Always use **THAN** after the comparative: Marco's robot is faster **THAN** mine.",
  examples: [
    { sentence: "Marco's experiment is **FASTER** than his friend's.",      note: "short word → add -er" },
    { sentence: "The second robot is **MORE INTERESTING** than the first.", note: "long word → use more" },
    { sentence: "The new microscope is **BIGGER** than the old one.",       note: "short word → add -er" },
  ],
  feedback: {
    correct: (answer) => `Yes! "${answer}" is right! Great comparison! ✅`,
    wrong:   (answer) => `Almost! The answer is "${answer}". Short words add -er. Long words use more! 💡`,
  },
  scoreMessages: {
    perfect:  { emoji: "🏆", text: "Perfect score! You are a comparatives champion!" },
    good:     { emoji: "🔬", text: "Really good work! Keep practicing comparatives!" },
    tryAgain: { emoji: "💛", text: "Good effort! Short words add -er, long words use more. Let's try again!" },
  },
  exercises: [
    {
      id: 1,
      label: "Exercise 1",
      type: "Multiple Choice",
      icon: "🎯",
      storyPrompt: "Marco and his friend are comparing their science fair experiments. Pick the right word!",
      questions: [
        {
          id: 1,
          prompt: "Marco's robot is ___ than Dani's robot.",
          choices: ["more tall", "taller", "tallest"],
          answer: "taller",
          hint: "Tall is a short word — add -er! tall → taller!",
        },
        {
          id: 2,
          prompt: "This experiment is ___ than the last one.",
          choices: ["difficulter", "more difficult", "difficultly"],
          answer: "more difficult",
          hint: "Difficult is a long word — use MORE! more difficult!",
        },
        {
          id: 3,
          prompt: "The blue beaker is ___ than the red one.",
          choices: ["more big", "biggest", "bigger"],
          answer: "bigger",
          hint: "Big is a short word — add -er! big → bigger!",
        },
      ],
    },
    {
      id: 2,
      label: "Exercise 2",
      type: "Find the Mistake",
      icon: "🔍",
      storyPrompt: "Some comparison sentences on the posters have mistakes. Find and fix the mistake!",
      questions: [
        {
          id: 4,
          prompt: "Marco's notebook is ___ than Dani's.",
          wrongSentence: "Marco's notebook is more small than Dani's.",
          wrongWord: "more small",
          choices: ["more small", "smaller", "smallest"],
          answer: "smaller",
          hint: "Small is a short word — add -er! small → smaller — not more small!",
        },
        {
          id: 5,
          prompt: "The new robot is ___ than the old one.",
          wrongSentence: "The new robot is interestinger than the old one.",
          wrongWord: "interestinger",
          choices: ["interestinger", "more interesting", "most interesting"],
          answer: "more interesting",
          hint: "Interesting is a long word — use MORE! more interesting — not interestinger!",
        },
        {
          id: 6,
          prompt: "Today's experiment is ___ than yesterday's.",
          wrongSentence: "Today's experiment is more fast than yesterday's.",
          wrongWord: "more fast",
          choices: ["more fast", "faster", "fastest"],
          answer: "faster",
          hint: "Fast is a short word — add -er! faster — not more fast!",
        },
      ],
    },
    {
      id: 3,
      label: "Exercise 3",
      type: "Fill in the Blank",
      icon: "✏️",
      storyPrompt: "Marco is writing his comparison notes for the science fair. Fill in the blank!",
      questions: [
        {
          id: 7,
          prompt: "Marco's robot is ___ than Dani's.",
          choices: ["fast", "faster", "more fast"],
          answer: "faster",
          hint: "Fast is a short word. Add -er! fast → faster!",
        },
        {
          id: 8,
          prompt: "The second experiment was ___ than the first.",
          choices: ["more exciting", "excitinger", "exciting"],
          answer: "more exciting",
          hint: "Exciting is a long word. Use MORE! more exciting!",
        },
        {
          id: 9,
          prompt: "The new lab is ___ than the old classroom.",
          choices: ["bigger", "more big", "big"],
          answer: "bigger",
          hint: "Big is a short word. Add -er! big → bigger!",
        },
      ],
    },
  ],
};

export const allQuestionsA2Topic4 = lessonA2Topic4.exercises.flatMap((ex) =>
  ex.questions.map((q) => ({
    ...q,
    exerciseLabel:       ex.label,
    exerciseType:        ex.type,
    exerciseIcon:        ex.icon,
    exerciseId:          ex.id,
    exerciseStoryPrompt: ex.storyPrompt,
  }))
);

// ─── A2 Topic 5 — Conjunctions ────────────────────────────────────────────────

export const lessonA2Topic5 = {
  id: "a2-5",
  level: "A2",
  title: "Conjunctions",
  subtitle: "Connect your ideas with joining words!",
  character: "Marco",
  characterEmoji: "🧪",
  story:
    "Marco is writing up his science fair project and needs to connect his ideas properly!",
  rule:
    "**Conjunctions** are joining words. **AND** adds ideas: Marco likes science AND maths. **BUT** shows contrast: The experiment worked BUT it was messy. **OR** gives a choice: You can use red OR blue dye. **BECAUSE** gives a reason: Marco won BECAUSE his robot was fastest. **SO** shows a result: It rained SO they stayed inside.",
  examples: [
    { sentence: "Marco likes robots **AND** computers.",               note: "and = adding ideas" },
    { sentence: "The experiment was simple **BUT** very effective.",   note: "but = contrast" },
    { sentence: "Marco won **BECAUSE** his robot completed the maze.", note: "because = reason" },
  ],
  feedback: {
    correct: (answer) => `Yes! "${answer}" is right! Great connection! ✅`,
    wrong:   (answer) => `Almost! The answer is "${answer}". And = adding, But = contrast, Because = reason, So = result, Or = choice! 💡`,
  },
  scoreMessages: {
    perfect:  { emoji: "🏆", text: "Perfect score! Marco's essay is going to be amazing!" },
    good:     { emoji: "🔬", text: "Really good work! Conjunctions connect ideas — keep practicing!" },
    tryAgain: { emoji: "💛", text: "Good effort! And, but, because, so, or — let's try again!" },
  },
  exercises: [
    {
      id: 1,
      label: "Exercise 1",
      type: "Multiple Choice",
      icon: "🎯",
      storyPrompt: "Marco is connecting his science project ideas with joining words. Pick the right word!",
      questions: [
        {
          id: 1,
          prompt: "Marco likes science ___ he finds it exciting.",
          choices: ["but", "so", "because"],
          answer: "because",
          hint: "We are giving a reason. Use BECAUSE!",
        },
        {
          id: 2,
          prompt: "The robot was fast ___ it made too much noise.",
          choices: ["because", "but", "and"],
          answer: "but",
          hint: "We are showing a contrast — fast but noisy. Use BUT!",
        },
        {
          id: 3,
          prompt: "Marco studied hard ___ he won first prize.",
          choices: ["because", "but", "so"],
          answer: "so",
          hint: "Studied hard = reason. Won prize = result. Use SO!",
        },
      ],
    },
    {
      id: 2,
      label: "Exercise 2",
      type: "Find the Mistake",
      icon: "🔍",
      storyPrompt: "Marco's joining words got mixed up in his project write-up. Find and fix the mistake!",
      questions: [
        {
          id: 4,
          prompt: "Marco likes science ___ he finds it hard.",
          wrongSentence: "Marco likes science so he finds it hard.",
          wrongWord: "so",
          choices: ["so", "but", "because"],
          answer: "but",
          hint: "Likes science AND finds it hard — that is a contrast. Use BUT not SO!",
        },
        {
          id: 5,
          prompt: "It was raining ___ they went inside.",
          wrongSentence: "It was raining but they went inside.",
          wrongWord: "but",
          choices: ["but", "so", "and"],
          answer: "so",
          hint: "Raining = reason. Went inside = result. Use SO not BUT!",
        },
        {
          id: 6,
          prompt: "You can use red ___ blue dye.",
          wrongSentence: "You can use red so blue dye.",
          wrongWord: "so",
          choices: ["so", "or", "and"],
          answer: "or",
          hint: "We are giving a choice between two things. Use OR not SO!",
        },
      ],
    },
    {
      id: 3,
      label: "Exercise 3",
      type: "Fill in the Blank",
      icon: "✏️",
      storyPrompt: "Marco is putting the finishing touches on his project essay. Fill in the blank!",
      questions: [
        {
          id: 7,
          prompt: "Marco practiced every day ___ he won the competition.",
          choices: ["but", "so", "or"],
          answer: "so",
          hint: "Practiced = reason. Won = result. Use SO!",
        },
        {
          id: 8,
          prompt: "The experiment was messy ___ very interesting.",
          choices: ["so", "or", "but"],
          answer: "but",
          hint: "Messy contrasts with interesting. Use BUT!",
        },
        {
          id: 9,
          prompt: "You can work alone ___ with a partner.",
          choices: ["because", "and", "or"],
          answer: "or",
          hint: "We are giving a choice. Use OR!",
        },
      ],
    },
  ],
};

export const allQuestionsA2Topic5 = lessonA2Topic5.exercises.flatMap((ex) =>
  ex.questions.map((q) => ({
    ...q,
    exerciseLabel:       ex.label,
    exerciseType:        ex.type,
    exerciseIcon:        ex.icon,
    exerciseId:          ex.id,
    exerciseStoryPrompt: ex.storyPrompt,
  }))
);

// ─── A2 Topic 6 — Prepositions of place ──────────────────────────────────────

export const lessonA2Topic6 = {
  id: "a2-6",
  level: "A2",
  title: "Prepositions of Place",
  subtitle: "Say where things are with in, on, under, between!",
  character: "Marco",
  characterEmoji: "🧪",
  story:
    "Marco's science lab is a mess! Everything is in the wrong place. Help Marco find where everything is!",
  rule:
    "**Prepositions of place** tell us WHERE something is. **IN** = inside something: The pencil is IN the box. **ON** = on top of something: The book is ON the desk. **UNDER** = below something: The bag is UNDER the chair. **NEXT TO** = beside something: Marco sits NEXT TO the window. **BETWEEN** = in the middle of two things: The lab is BETWEEN the library and the gym.",
  examples: [
    { sentence: "The test tubes are **IN** the cupboard.",  note: "in = inside" },
    { sentence: "Marco's notebook is **ON** the desk.",     note: "on = on top of" },
    { sentence: "The bag is **UNDER** the table.",          note: "under = below" },
  ],
  feedback: {
    correct: (answer) => `Yes! "${answer}" is right! You found it! ✅`,
    wrong:   (answer) => `Almost! The answer is "${answer}". In = inside, On = on top, Under = below, Between = in the middle! 💡`,
  },
  scoreMessages: {
    perfect:  { emoji: "🏆", text: "Perfect score! The lab is organised thanks to you!" },
    good:     { emoji: "🔬", text: "Really good work! Keep practicing prepositions of place!" },
    tryAgain: { emoji: "💛", text: "Good effort! In, on, under, between — let's try again!" },
  },
  exercises: [
    {
      id: 1,
      label: "Exercise 1",
      type: "Multiple Choice",
      icon: "🎯",
      storyPrompt: "Marco's science lab is a mess! Help him describe where everything is. Pick the right word!",
      questions: [
        {
          id: 1,
          prompt: "The microscope is ___ the shelf.",
          choices: ["under", "on", "between"],
          answer: "on",
          hint: "The microscope is on top of the shelf. Use ON!",
        },
        {
          id: 2,
          prompt: "Marco keeps his notes ___ his desk drawer.",
          choices: ["on", "next to", "in"],
          answer: "in",
          hint: "The notes are inside the drawer. Use IN!",
        },
        {
          id: 3,
          prompt: "The lab is ___ the library and the gym.",
          choices: ["in", "between", "under"],
          answer: "between",
          hint: "The lab is in the middle of two buildings. Use BETWEEN!",
        },
      ],
    },
    {
      id: 2,
      label: "Exercise 2",
      type: "Find the Mistake",
      icon: "🔍",
      storyPrompt: "Marco got some location words wrong in his lab notes. Find and fix the mistake!",
      questions: [
        {
          id: 4,
          prompt: "The pencils are ___ the box.",
          wrongSentence: "The pencils are on the box.",
          wrongWord: "on",
          choices: ["on", "in", "under"],
          answer: "in",
          hint: "The pencils are inside the box — not on top of it. Use IN not ON!",
        },
        {
          id: 5,
          prompt: "Marco's bag is ___ the chair.",
          wrongSentence: "Marco's bag is in the chair.",
          wrongWord: "in",
          choices: ["in", "under", "on"],
          answer: "under",
          hint: "The bag is below the chair — not inside it. Use UNDER not IN!",
        },
        {
          id: 6,
          prompt: "The poster is ___ the wall.",
          wrongSentence: "The poster is under the wall.",
          wrongWord: "under",
          choices: ["under", "on", "in"],
          answer: "on",
          hint: "The poster is on the surface of the wall. Use ON not UNDER!",
        },
      ],
    },
    {
      id: 3,
      label: "Exercise 3",
      type: "Fill in the Blank",
      icon: "✏️",
      storyPrompt: "Marco is drawing a map of the lab and labelling where everything goes. Fill in the blank!",
      questions: [
        {
          id: 7,
          prompt: "The chemicals are kept ___ the locked cupboard.",
          choices: ["on", "under", "in"],
          answer: "in",
          hint: "Inside the cupboard. Use IN!",
        },
        {
          id: 8,
          prompt: "Marco's coat is hanging ___ his chair.",
          choices: ["in", "on", "between"],
          answer: "on",
          hint: "Hanging on top of the chair. Use ON!",
        },
        {
          id: 9,
          prompt: "The small table is ___ the two big desks.",
          choices: ["under", "in", "between"],
          answer: "between",
          hint: "In the middle of two desks. Use BETWEEN!",
        },
      ],
    },
  ],
};

export const allQuestionsA2Topic6 = lessonA2Topic6.exercises.flatMap((ex) =>
  ex.questions.map((q) => ({
    ...q,
    exerciseLabel:       ex.label,
    exerciseType:        ex.type,
    exerciseIcon:        ex.icon,
    exerciseId:          ex.id,
    exerciseStoryPrompt: ex.storyPrompt,
  }))
);

// ─── A2 Topic 7 — Prepositions of time ───────────────────────────────────────

export const lessonA2Topic7 = {
  id: "a2-7",
  level: "A2",
  title: "Prepositions of Time",
  subtitle: "Say when things happen with at, on, in!",
  character: "Marco",
  characterEmoji: "🧪",
  story:
    "Marco has a very busy week of science experiments planned. Help him talk about when everything is happening!",
  rule:
    "**Prepositions of time** tell us WHEN something happens. **AT** = specific times: AT 3 o'clock. AT night. **ON** = days and dates: ON Monday. ON 5th April. **IN** = months, years, seasons: IN June. IN 2024. IN winter. IN the morning.",
  examples: [
    { sentence: "The science fair starts **AT** 9 o'clock.", note: "at = specific time" },
    { sentence: "Marco's experiment is **ON** Friday.",       note: "on = day of the week" },
    { sentence: "The results will be ready **IN** March.",    note: "in = month" },
  ],
  feedback: {
    correct: (answer) => `Yes! "${answer}" is right! Perfect timing! ✅`,
    wrong:   (answer) => `Almost! The answer is "${answer}". At = clock times, On = days, In = months and seasons! 💡`,
  },
  scoreMessages: {
    perfect:  { emoji: "🏆", text: "Perfect score! Marco's schedule is sorted!" },
    good:     { emoji: "🔬", text: "Really good work! At, on, in — keep practicing!" },
    tryAgain: { emoji: "💛", text: "Good effort! At for times, on for days, in for months. Let's try again!" },
  },
  exercises: [
    {
      id: 1,
      label: "Exercise 1",
      type: "Multiple Choice",
      icon: "🎯",
      storyPrompt: "Marco is planning his busy week of science experiments. Pick the right word!",
      questions: [
        {
          id: 1,
          prompt: "The experiment starts ___ 2 o'clock.",
          choices: ["in", "on", "at"],
          answer: "at",
          hint: "It is a specific clock time. Use AT!",
        },
        {
          id: 2,
          prompt: "Marco has his science club ___ Wednesday.",
          choices: ["at", "in", "on"],
          answer: "on",
          hint: "It is a day of the week. Use ON!",
        },
        {
          id: 3,
          prompt: "The science fair is ___ April.",
          choices: ["at", "on", "in"],
          answer: "in",
          hint: "It is a month. Use IN!",
        },
      ],
    },
    {
      id: 2,
      label: "Exercise 2",
      type: "Find the Mistake",
      icon: "🔍",
      storyPrompt: "Some time words in Marco's timetable are wrong. Find and fix the mistake!",
      questions: [
        {
          id: 4,
          prompt: "Marco wakes up ___ 7 o'clock.",
          wrongSentence: "Marco wakes up in 7 o'clock.",
          wrongWord: "in",
          choices: ["in", "at", "on"],
          answer: "at",
          hint: "7 o'clock is a specific time. Use AT not IN!",
        },
        {
          id: 5,
          prompt: "The trip is ___ Friday.",
          wrongSentence: "The trip is at Friday.",
          wrongWord: "at",
          choices: ["at", "on", "in"],
          answer: "on",
          hint: "Friday is a day of the week. Use ON not AT!",
        },
        {
          id: 6,
          prompt: "School starts ___ September.",
          wrongSentence: "School starts on September.",
          wrongWord: "on",
          choices: ["on", "in", "at"],
          answer: "in",
          hint: "September is a month. Use IN not ON!",
        },
      ],
    },
    {
      id: 3,
      label: "Exercise 3",
      type: "Fill in the Blank",
      icon: "✏️",
      storyPrompt: "Marco is writing his final competition schedule. Fill in the blank!",
      questions: [
        {
          id: 7,
          prompt: "Marco goes to science club ___ Tuesdays.",
          choices: ["at", "in", "on"],
          answer: "on",
          hint: "Tuesday is a day of the week. Use ON!",
        },
        {
          id: 8,
          prompt: "The results come out ___ the morning.",
          choices: ["on", "at", "in"],
          answer: "in",
          hint: "Morning is a period of the day. Use IN!",
        },
        {
          id: 9,
          prompt: "The competition starts ___ noon.",
          choices: ["in", "on", "at"],
          answer: "at",
          hint: "Noon is a specific time. Use AT!",
        },
      ],
    },
  ],
};

export const allQuestionsA2Topic7 = lessonA2Topic7.exercises.flatMap((ex) =>
  ex.questions.map((q) => ({
    ...q,
    exerciseLabel:       ex.label,
    exerciseType:        ex.type,
    exerciseIcon:        ex.icon,
    exerciseId:          ex.id,
    exerciseStoryPrompt: ex.storyPrompt,
  }))
);

// ─── A2 Topic 8 — There is and there are ─────────────────────────────────────

export const lessonA2Topic8 = {
  id: "a2-8",
  level: "A2",
  title: "There Is and There Are",
  subtitle: "Describe what exists in a place!",
  character: "Marco",
  characterEmoji: "🧪",
  story:
    "Marco is describing his new school science lab to his friend who goes to a different school!",
  rule:
    "We use **THERE IS** for one thing: There IS a microscope on the desk. We use **THERE ARE** for more than one: There ARE three test tubes on the shelf. For questions: IS there a microscope? ARE there any test tubes? For negatives: There ISN'T a microscope. There AREN'T any test tubes.",
  examples: [
    { sentence: "**THERE IS** a big poster on the wall.",          note: "one thing → there is" },
    { sentence: "**THERE ARE** twenty students in the lab.",       note: "more than one → there are" },
    { sentence: "**IS THERE** a sink in the room? Yes there is!",  note: "question → is there" },
  ],
  feedback: {
    correct: (answer) => `Yes! "${answer}" is right! ✅`,
    wrong:   (answer) => `Almost! The answer is "${answer}". There is = one thing. There are = more than one! 💡`,
  },
  scoreMessages: {
    perfect:  { emoji: "🏆", text: "Perfect score! You described the lab perfectly!" },
    good:     { emoji: "🔬", text: "Really good work! There is and there are — keep practicing!" },
    tryAgain: { emoji: "💛", text: "Good effort! One thing = there is. More than one = there are. Let's try again!" },
  },
  exercises: [
    {
      id: 1,
      label: "Exercise 1",
      type: "Multiple Choice",
      icon: "🎯",
      storyPrompt: "Marco is describing his school science lab to his friend. Pick the right word!",
      questions: [
        {
          id: 1,
          prompt: "___ a large whiteboard in the lab.",
          choices: ["There are", "There is", "There were"],
          answer: "There is",
          hint: "One whiteboard — use THERE IS!",
        },
        {
          id: 2,
          prompt: "___ lots of books on the shelves.",
          choices: ["There is", "There was", "There are"],
          answer: "There are",
          hint: "Lots of books = more than one. Use THERE ARE!",
        },
        {
          id: 3,
          prompt: "___ a broken chair in the corner?",
          choices: ["Is there", "Are there", "Were there"],
          answer: "Is there",
          hint: "One chair — use IS THERE for questions!",
        },
      ],
    },
    {
      id: 2,
      label: "Exercise 2",
      type: "Find the Mistake",
      icon: "🔍",
      storyPrompt: "Marco's lab descriptions have some mistakes. Find and fix the mistake!",
      questions: [
        {
          id: 4,
          prompt: "There ___ a big fish tank in the lab.",
          wrongSentence: "There are a big fish tank in the lab.",
          wrongWord: "are",
          choices: ["are", "is", "were"],
          answer: "is",
          hint: "One fish tank — use THERE IS not THERE ARE!",
        },
        {
          id: 5,
          prompt: "There ___ many posters on the wall.",
          wrongSentence: "There is many posters on the wall.",
          wrongWord: "is",
          choices: ["is", "are", "was"],
          answer: "are",
          hint: "Many posters = more than one. Use THERE ARE not THERE IS!",
        },
        {
          id: 6,
          prompt: "___ there any pencils on the desk?",
          wrongSentence: "Is there any pencils on the desk?",
          wrongWord: "Is",
          choices: ["Is", "Are", "Were"],
          answer: "Are",
          hint: "Pencils = more than one. Use ARE THERE not IS THERE!",
        },
      ],
    },
    {
      id: 3,
      label: "Exercise 3",
      type: "Fill in the Blank",
      icon: "✏️",
      storyPrompt: "Marco is presenting his lab description to the class. Fill in the blank!",
      questions: [
        {
          id: 7,
          prompt: "___ a computer at every desk.",
          choices: ["There are", "There is", "Are there"],
          answer: "There is",
          hint: "One computer at each desk. Use THERE IS!",
        },
        {
          id: 8,
          prompt: "___ twelve lab coats hanging by the door.",
          choices: ["There is", "Is there", "There are"],
          answer: "There are",
          hint: "Twelve lab coats = more than one. Use THERE ARE!",
        },
        {
          id: 9,
          prompt: "___ any windows in the lab?",
          choices: ["Is there", "There is", "Are there"],
          answer: "Are there",
          hint: "Windows = more than one. Use ARE THERE for questions!",
        },
      ],
    },
  ],
};

export const allQuestionsA2Topic8 = lessonA2Topic8.exercises.flatMap((ex) =>
  ex.questions.map((q) => ({
    ...q,
    exerciseLabel:       ex.label,
    exerciseType:        ex.type,
    exerciseIcon:        ex.icon,
    exerciseId:          ex.id,
    exerciseStoryPrompt: ex.storyPrompt,
  }))
);

// ─── A2 Topic 9 — Future tense: will and going to ────────────────────────────

export const lessonA2Topic9 = {
  id: "a2-9",
  level: "A2",
  title: "Future Tense: Will and Going To",
  subtitle: "Talk about plans and predictions!",
  character: "Marco",
  characterEmoji: "🧪",
  story:
    "Marco is planning his next big science experiment. He has lots of exciting plans for the future!",
  rule:
    "We use **GOING TO** for plans we have already decided: I am GOING TO build a volcano. We use **WILL** for quick decisions and predictions: I think it WILL be amazing! Going to = already planned. Will = quick decision or prediction. For going to use: am/is/are + going to + verb. For will use: will + verb — it never changes!",
  examples: [
    { sentence: "Marco **IS GOING TO** present his experiment on Friday.", note: "already planned → going to" },
    { sentence: "I think the experiment **WILL** work perfectly.",          note: "prediction → will" },
    { sentence: "They **ARE GOING TO** use red food dye.",                 note: "already decided → going to" },
  ],
  feedback: {
    correct: (answer) => `Yes! "${answer}" is right! Great future planning! ✅`,
    wrong:   (answer) => `Almost! The answer is "${answer}". Going to = already planned. Will = prediction or quick decision! 💡`,
  },
  scoreMessages: {
    perfect:  { emoji: "🏆", text: "Perfect score! Marco's experiment is going to be amazing!" },
    good:     { emoji: "🔬", text: "Really good work! Will and going to — keep practicing!" },
    tryAgain: { emoji: "💛", text: "Good effort! Going to for plans, will for predictions. Let's try again!" },
  },
  exercises: [
    {
      id: 1,
      label: "Exercise 1",
      type: "Multiple Choice",
      icon: "🎯",
      storyPrompt: "Marco is planning his next big science experiment. Pick the right word!",
      questions: [
        {
          id: 1,
          prompt: "Marco ___ build a robot next week. (already planned)",
          choices: ["will", "is going to", "goes to"],
          answer: "is going to",
          hint: "Already planned — use IS GOING TO!",
        },
        {
          id: 2,
          prompt: "I think it ___ be a great experiment! (prediction)",
          choices: ["is going to", "goes", "will"],
          answer: "will",
          hint: "This is a prediction. Use WILL!",
        },
        {
          id: 3,
          prompt: "We ___ start the experiment after lunch. (already decided)",
          choices: ["will be", "are going to", "goes to"],
          answer: "are going to",
          hint: "Already decided — use ARE GOING TO!",
        },
      ],
    },
    {
      id: 2,
      label: "Exercise 2",
      type: "Find the Mistake",
      icon: "🔍",
      storyPrompt: "Marco made some future tense mistakes in his project plan. Find and fix the mistake!",
      questions: [
        {
          id: 4,
          prompt: "Marco ___ visit the science museum tomorrow.",
          wrongSentence: "Marco will to visit the science museum tomorrow.",
          wrongWord: "will to",
          choices: ["will to", "is going to", "goes to"],
          answer: "is going to",
          hint: "This is a plan — use IS GOING TO not WILL TO!",
        },
        {
          id: 5,
          prompt: "I think the experiment ___ work.",
          wrongSentence: "I think the experiment going to work.",
          wrongWord: "going to",
          choices: ["going to", "will", "is going to"],
          answer: "will",
          hint: "This is a prediction — use WILL not GOING TO on its own!",
        },
        {
          id: 6,
          prompt: "They are ___ present their results on Monday.",
          wrongSentence: "They are go to present their results on Monday.",
          wrongWord: "go to",
          choices: ["go to", "going to", "goes to"],
          answer: "going to",
          hint: "Use GOING TO not GO TO after are!",
        },
      ],
    },
    {
      id: 3,
      label: "Exercise 3",
      type: "Fill in the Blank",
      icon: "✏️",
      storyPrompt: "Marco is writing his project proposal for the next competition. Fill in the blank!",
      questions: [
        {
          id: 7,
          prompt: "Marco ___ win first prize — I am sure of it!",
          choices: ["is going to", "go to", "will"],
          answer: "will",
          hint: "This is a prediction. Use WILL!",
        },
        {
          id: 8,
          prompt: "We ___ mix the chemicals carefully. (planned step)",
          choices: ["will be", "are going to", "goes"],
          answer: "are going to",
          hint: "This is a planned step. Use ARE GOING TO!",
        },
        {
          id: 9,
          prompt: "I think it ___ make a loud noise!",
          choices: ["going to", "will", "are going to"],
          answer: "will",
          hint: "This is a prediction. Use WILL!",
        },
      ],
    },
  ],
};

export const allQuestionsA2Topic9 = lessonA2Topic9.exercises.flatMap((ex) =>
  ex.questions.map((q) => ({
    ...q,
    exerciseLabel:       ex.label,
    exerciseType:        ex.type,
    exerciseIcon:        ex.icon,
    exerciseId:          ex.id,
    exerciseStoryPrompt: ex.storyPrompt,
  }))
);

// ─── A2 Topic 10 — Can and can't ──────────────────────────────────────────────

export const lessonA2Topic10 = {
  id: "a2-10",
  level: "A2",
  title: "Can and Can't",
  subtitle: "Say what you are able and not able to do!",
  character: "Marco",
  characterEmoji: "🧪",
  story:
    "Marco is filling in a form for a science competition. He needs to say what he can and can't do!",
  rule:
    "We use **CAN** to say someone is able to do something: Marco CAN code a computer program. We use **CAN'T** to say someone is NOT able: He CAN'T swim very well. CAN never changes — never add -s! She can. He can. They can. For questions swap: **CAN** you help me?",
  examples: [
    { sentence: "Marco **CAN** build robots really well.",          note: "can = able to" },
    { sentence: "He **CAN'T** finish the experiment in one day.",   note: "can't = not able to" },
    { sentence: "**CAN** you help me with this formula?",           note: "can at the start = question" },
  ],
  feedback: {
    correct: (answer) => `Yes! "${answer}" is right! ✅`,
    wrong:   (answer) => `Almost! The answer is "${answer}". Can = able to. Can't = not able to. Can never adds -s! 💡`,
  },
  scoreMessages: {
    perfect:  { emoji: "🏆", text: "Perfect score! You can do anything! Marco agrees!" },
    good:     { emoji: "🔬", text: "Really good work! Can and can't — keep practicing!" },
    tryAgain: { emoji: "💛", text: "Good effort! Can = able to, can't = not able to. Let's try again!" },
  },
  exercises: [
    {
      id: 1,
      label: "Exercise 1",
      type: "Multiple Choice",
      icon: "🎯",
      storyPrompt: "Marco is filling in a science competition form. Pick the right word!",
      questions: [
        {
          id: 1,
          prompt: "Marco ___ speak three languages!",
          choices: ["cans", "can", "could"],
          answer: "can",
          hint: "Can never adds -s. Use CAN not CANS!",
        },
        {
          id: 2,
          prompt: "She ___ finish the experiment — it is too hard.",
          choices: ["can", "can't", "cans"],
          answer: "can't",
          hint: "She is NOT able to finish it. Use CAN'T!",
        },
        {
          id: 3,
          prompt: "___ you help me carry the equipment?",
          choices: ["Can", "Cans", "Could you"],
          answer: "Can",
          hint: "For questions use CAN at the start!",
        },
      ],
    },
    {
      id: 2,
      label: "Exercise 2",
      type: "Find the Mistake",
      icon: "🔍",
      storyPrompt: "Some ability statements on the competition form have mistakes. Find and fix the mistake!",
      questions: [
        {
          id: 4,
          prompt: "Marco ___ run very fast.",
          wrongSentence: "Marco cans run very fast.",
          wrongWord: "cans",
          choices: ["cans", "can", "could"],
          answer: "can",
          hint: "Can never changes — no -s! Use CAN not CANS!",
        },
        {
          id: 5,
          prompt: "She ___ swim very well.",
          wrongSentence: "She can't to swim very well.",
          wrongWord: "can't to",
          choices: ["can't to", "can't", "cannot to"],
          answer: "can't",
          hint: "After can't use the base verb directly — no TO! She can't swim!",
        },
        {
          id: 6,
          prompt: "Can Marco ___ a program?",
          wrongSentence: "Can Marco codes a program?",
          wrongWord: "codes",
          choices: ["codes", "code", "coding"],
          answer: "code",
          hint: "After can use the base verb — no -s! Can Marco code!",
        },
      ],
    },
    {
      id: 3,
      label: "Exercise 3",
      type: "Fill in the Blank",
      icon: "✏️",
      storyPrompt: "Marco is listing his science skills on the competition form. Fill in the blank!",
      questions: [
        {
          id: 7,
          prompt: "Marco ___ solve very difficult maths problems.",
          choices: ["cans", "can't", "can"],
          answer: "can",
          hint: "He IS able to solve them. Use CAN!",
        },
        {
          id: 8,
          prompt: "I ___ understand this formula — it is too complicated!",
          choices: ["can", "cans", "can't"],
          answer: "can't",
          hint: "NOT able to understand it. Use CAN'T!",
        },
        {
          id: 9,
          prompt: "___ your robot walk up stairs?",
          choices: ["Cans", "Does", "Can"],
          answer: "Can",
          hint: "For questions about ability use CAN at the start!",
        },
      ],
    },
  ],
};

export const allQuestionsA2Topic10 = lessonA2Topic10.exercises.flatMap((ex) =>
  ex.questions.map((q) => ({
    ...q,
    exerciseLabel:       ex.label,
    exerciseType:        ex.type,
    exerciseIcon:        ex.icon,
    exerciseId:          ex.id,
    exerciseStoryPrompt: ex.storyPrompt,
  }))
);
