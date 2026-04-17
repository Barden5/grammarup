// ─── A1 Topic 2 — Nouns and plurals ──────────────────────────────────────────

export const lessonA1Topic2 = {
  id: "a1-nouns-plurals",
  level: "A1",
  title: "Nouns and Plurals",
  subtitle: "Add -s to make more than one!",
  character: "Biscuit",
  characterEmoji: "🐕",
  studentName: "Mia",
  story:
    "Biscuit loves to play! Today Biscuit is at the park. He sees lots of things. Help Biscuit name everything he sees!",
  rule:
    "A noun names a person, animal, place, or thing. When we see more than one, we add **-s** to the end. One cat becomes two **cats**. One tree becomes two **trees**.",
  tier: "Little Learners",
  cardDescription: "Name things and make them plural",
  accent: "green",
  feedback: {
    correct: (answer) => `Yes! "${answer}" is right! More than one — add -s! ✅`,
    wrong: (answer) =>
      `Almost! The answer is "${answer}". When we see more than one we add -s! 💡`,
  },
  scoreMessages: {
    perfect: { emoji: "🌟", text: "WOW! Perfect score! Biscuit is so proud of you!" },
    good:    { emoji: "🐕", text: "Great work! Biscuit says thank you! Keep practicing!" },
    tryAgain:{ emoji: "📚", text: "Good try! Let's practice again. Every mistake helps you learn!" },
  },
  examples: [
    { sentence: "Biscuit sees one big **TREE** in the park.", note: "tree is a noun" },
    { sentence: "He finds two red **BALLS** on the grass.",   note: "more than one — add -s" },
    { sentence: "Three **DOGS** are running and playing!",   note: "three things — add -s" },
  ],
  exercises: [
    {
      id: 1,
      label: "Exercise 1",
      type: "Multiple Choice",
      icon: "🎯",
      questions: [
        {
          id: 1,
          prompt: "Biscuit sees two ___ in the tree.",
          choices: ["bird", "birds", "birdes"],
          answer: "birds",
        },
        {
          id: 2,
          prompt: "He finds three ___ on the path.",
          choices: ["sticks", "stick", "sticking"],
          answer: "sticks",
        },
        {
          id: 3,
          prompt: "There are four ___ playing in the park.",
          choices: ["childs", "childes", "children"],
          answer: "children",
        },
      ],
    },
    {
      id: 2,
      label: "Exercise 2",
      type: "Find the Mistake",
      icon: "🔍",
      questions: [
        {
          id: 4,
          prompt: "Biscuit sees two ___ on the grass.",
          choices: ["ball", "balls", "balled"],
          answer: "balls",
        },
        {
          id: 5,
          prompt: "Three ___ are running fast.",
          choices: ["dog", "dogs", "dogged"],
          answer: "dogs",
        },
        {
          id: 6,
          prompt: "Biscuit finds four ___ by the tree.",
          choices: ["stick", "sticks", "sticked"],
          answer: "sticks",
        },
      ],
    },
    {
      id: 3,
      label: "Exercise 3",
      type: "Fill in the Blank",
      icon: "✏️",
      questions: [
        {
          id: 7,
          prompt: "Biscuit saw five ___ flying in the sky.",
          choices: ["bird", "birds", "birding"],
          answer: "birds",
        },
        {
          id: 8,
          prompt: "He played with two ___ at the park.",
          choices: ["ball", "balling", "balls"],
          answer: "balls",
        },
        {
          id: 9,
          prompt: "Biscuit made three new ___ today!",
          choices: ["friend", "friends", "friending"],
          answer: "friends",
        },
      ],
    },
  ],
};

export const allQuestionsA1Topic2 = lessonA1Topic2.exercises.flatMap((ex) =>
  ex.questions.map((q) => ({
    ...q,
    exerciseLabel: ex.label,
    exerciseType: ex.type,
    exerciseIcon: ex.icon,
    exerciseId: ex.id,
  }))
);

// ─── A1 Topic 3 — Articles: a, an, the ───────────────────────────────────────

export const lessonA1Topic3 = {
  id: "a1-articles",
  level: "A1",
  title: "Articles: a, an, the",
  subtitle: "a, an, or the — choose the right one!",
  character: "Biscuit",
  characterEmoji: "🐕",
  studentName: "Mia",
  story:
    "Biscuit is going to the shops with Mia today! There are so many things to see. Help Biscuit and Mia pick the right words!",
  rule:
    "We use **a** before most words. We use **an** before words that start with a vowel sound — a, e, i, o, u. We use **the** when we know exactly which one.",
  tier: "Little Learners",
  cardDescription: "When to use a, an, and the before nouns",
  accent: "green",
  feedback: {
    correct: (answer) => `Yes! "${answer}" is right! Great job! ✅`,
    wrong: (answer) =>
      `Almost! The answer is "${answer}". An before vowels, a before others, the for a specific one! 💡`,
  },
  scoreMessages: {
    perfect: { emoji: "🌟", text: "WOW! Perfect score! Biscuit is so proud!" },
    good:    { emoji: "🐕", text: "Great work! Keep practicing — you're almost there!" },
    tryAgain:{ emoji: "📚", text: "Good try! Let's practice again. Every mistake helps you learn!" },
  },
  examples: [
    { sentence: "Biscuit sees **A** big red ball.",           note: "any ball — use a" },
    { sentence: "Mia buys **AN** orange from the shop.",      note: "vowel sound — use an" },
    { sentence: "**THE** dog at the door is Biscuit!",        note: "the specific dog we know" },
  ],
  exercises: [
    {
      id: 1,
      label: "Exercise 1",
      type: "Multiple Choice",
      icon: "🎯",
      questions: [
        {
          id: 1,
          prompt: "Mia buys ___ apple for lunch.",
          choices: ["a", "an", "the"],
          answer: "an",
        },
        {
          id: 2,
          prompt: "Biscuit sees ___ cat sitting by the door.",
          choices: ["an", "the", "a"],
          answer: "a",
        },
        {
          id: 3,
          prompt: "___ shop closes at five o'clock.",
          choices: ["A", "An", "The"],
          answer: "The",
        },
      ],
    },
    {
      id: 2,
      label: "Exercise 2",
      type: "Find the Mistake",
      icon: "🔍",
      questions: [
        {
          id: 4,
          prompt: "Mia eats ___ orange at the park.",
          choices: ["a", "an", "the"],
          answer: "an",
        },
        {
          id: 5,
          prompt: "Biscuit finds ___ big bone!",
          choices: ["an", "a", "the"],
          answer: "a",
        },
        {
          id: 6,
          prompt: "___ shop on the corner is Mia's favourite.",
          choices: ["A", "An", "The"],
          answer: "The",
        },
      ],
    },
    {
      id: 3,
      label: "Exercise 3",
      type: "Fill in the Blank",
      icon: "✏️",
      questions: [
        {
          id: 7,
          prompt: "Biscuit found ___ umbrella by the door.",
          choices: ["a", "an", "the"],
          answer: "an",
        },
        {
          id: 8,
          prompt: "Mia bought ___ sandwich for lunch.",
          choices: ["a", "an", "the"],
          answer: "a",
        },
        {
          id: 9,
          prompt: "___ bus home was very fast!",
          choices: ["A", "An", "The"],
          answer: "The",
        },
      ],
    },
  ],
};

export const allQuestionsA1Topic3 = lessonA1Topic3.exercises.flatMap((ex) =>
  ex.questions.map((q) => ({
    ...q,
    exerciseLabel: ex.label,
    exerciseType: ex.type,
    exerciseIcon: ex.icon,
    exerciseId: ex.id,
  }))
);

// ─── A1 Topic 4 — Subject pronouns ───────────────────────────────────────────

export const lessonA1Topic4 = {
  id: "a1-subject-pronouns",
  level: "A1",
  title: "Subject Pronouns",
  subtitle: "Replace nouns with pronouns!",
  character: "Biscuit",
  characterEmoji: "🐕",
  studentName: "Mia",
  story:
    "Biscuit is at school with Mia today! There are lots of friends to meet. Help Biscuit learn about everyone!",
  rule:
    "A pronoun replaces a noun so we do not have to repeat the same name. **He** = a boy. **She** = a girl. **It** = a thing. **They** = more than one. **We** = me and others.",
  tier: "Little Learners",
  cardDescription: "I, you, he, she, it, we, they",
  accent: "green",
  feedback: {
    correct: (answer) => `Yes! "${answer}" is right! Great job! ✅`,
    wrong: (answer) =>
      `Almost! The answer is "${answer}". He = boy. She = girl. It = thing. They = more than one! 💡`,
  },
  scoreMessages: {
    perfect: { emoji: "🌟", text: "WOW! Perfect score! Biscuit is so proud!" },
    good:    { emoji: "🐕", text: "Great work! Keep practicing — you're almost there!" },
    tryAgain:{ emoji: "📚", text: "Good try! Let's practice again. Every mistake helps you learn!" },
  },
  examples: [
    { sentence: "Biscuit is a dog. **HE** loves to play!",             note: "Biscuit = he" },
    { sentence: "Mia and her friend are happy. **THEY** are laughing.", note: "more than one = they" },
    { sentence: "The ball is red. **IT** is Biscuit's favourite!",     note: "a thing = it" },
  ],
  exercises: [
    {
      id: 1,
      label: "Exercise 1",
      type: "Multiple Choice",
      icon: "🎯",
      questions: [
        {
          id: 1,
          prompt: "Tom is in our class. ___ sits near the window.",
          choices: ["She", "He", "They"],
          answer: "He",
        },
        {
          id: 2,
          prompt: "Sara and I walk to school together. ___ are best friends!",
          choices: ["We", "They", "He"],
          answer: "We",
        },
        {
          id: 3,
          prompt: "The teacher has a big book. ___ is very colourful!",
          choices: ["He", "She", "It"],
          answer: "It",
        },
      ],
    },
    {
      id: 2,
      label: "Exercise 2",
      type: "Find the Mistake",
      icon: "🔍",
      questions: [
        {
          id: 4,
          prompt: "Mia is kind. ___ helps everyone.",
          choices: ["He", "She", "They"],
          answer: "She",
        },
        {
          id: 5,
          prompt: "The pencil is on the desk. ___ is yellow.",
          choices: ["She", "It", "He"],
          answer: "It",
        },
        {
          id: 6,
          prompt: "Tom and Sara are funny. ___ makes everyone laugh.",
          choices: ["He", "She", "They"],
          answer: "They",
        },
      ],
    },
    {
      id: 3,
      label: "Exercise 3",
      type: "Fill in the Blank",
      icon: "✏️",
      questions: [
        {
          id: 7,
          prompt: "Biscuit loves Mia. ___ is his best friend!",
          choices: ["He", "She", "It"],
          answer: "She",
        },
        {
          id: 8,
          prompt: "The classroom is big. ___ has lots of windows.",
          choices: ["It", "She", "They"],
          answer: "It",
        },
        {
          id: 9,
          prompt: "Tom and Sara wave at Biscuit. ___ are so friendly!",
          choices: ["He", "She", "They"],
          answer: "They",
        },
      ],
    },
  ],
};

export const allQuestionsA1Topic4 = lessonA1Topic4.exercises.flatMap((ex) =>
  ex.questions.map((q) => ({
    ...q,
    exerciseLabel: ex.label,
    exerciseType: ex.type,
    exerciseIcon: ex.icon,
    exerciseId: ex.id,
  }))
);

// ─── A1 Topic 5 — Verb to be: am, is, are ────────────────────────────────────

export const lessonA1Topic5 = {
  id: "a1-verb-to-be",
  level: "A1",
  title: "Verb To Be: am, is, are",
  subtitle: "am, is, or are — which one fits?",
  character: "Biscuit",
  characterEmoji: "🐕",
  studentName: "Mia",
  story:
    "Biscuit is having a birthday party today! All his friends are coming. Help Biscuit describe everyone at the party!",
  rule:
    "We use **am** with I. We use **is** with he, she, it, or one person or thing. We use **are** with you, we, they, or more than one person or thing.",
  tier: "Little Learners",
  cardDescription: "Say who or what something is",
  accent: "green",
  feedback: {
    correct: (answer) => `Yes! "${answer}" is right! Great job! ✅`,
    wrong: (answer) =>
      `Almost! The answer is "${answer}". I = am. One thing = is. More than one = are! 💡`,
  },
  scoreMessages: {
    perfect: { emoji: "🌟", text: "WOW! Perfect score! Biscuit is so proud!" },
    good:    { emoji: "🐕", text: "Great work! Keep practicing — you're almost there!" },
    tryAgain:{ emoji: "📚", text: "Good try! Let's practice again. Every mistake helps you learn!" },
  },
  examples: [
    { sentence: "I **AM** so excited for the party!",         note: "I → am" },
    { sentence: "Biscuit **IS** the birthday boy today.",      note: "one person/thing → is" },
    { sentence: "All his friends **ARE** here to celebrate!", note: "more than one → are" },
  ],
  exercises: [
    {
      id: 1,
      label: "Exercise 1",
      type: "Multiple Choice",
      icon: "🎯",
      questions: [
        {
          id: 1,
          prompt: "I ___ so happy you are here!",
          choices: ["is", "are", "am"],
          answer: "am",
        },
        {
          id: 2,
          prompt: "Mia ___ Biscuit's best friend.",
          choices: ["am", "is", "are"],
          answer: "is",
        },
        {
          id: 3,
          prompt: "The balloons ___ red and yellow!",
          choices: ["am", "is", "are"],
          answer: "are",
        },
      ],
    },
    {
      id: 2,
      label: "Exercise 2",
      type: "Find the Mistake",
      icon: "🔍",
      questions: [
        {
          id: 4,
          prompt: "I ___ so happy it is my birthday!",
          choices: ["is", "am", "are"],
          answer: "am",
        },
        {
          id: 5,
          prompt: "The cake ___ very big and chocolate!",
          choices: ["are", "is", "am"],
          answer: "is",
        },
        {
          id: 6,
          prompt: "My friends ___ all coming to the party!",
          choices: ["is", "am", "are"],
          answer: "are",
        },
      ],
    },
    {
      id: 3,
      label: "Exercise 3",
      type: "Fill in the Blank",
      icon: "✏️",
      questions: [
        {
          id: 7,
          prompt: "The party ___ so much fun!",
          choices: ["am", "is", "are"],
          answer: "is",
        },
        {
          id: 8,
          prompt: "We ___ all eating cake together!",
          choices: ["am", "is", "are"],
          answer: "are",
        },
        {
          id: 9,
          prompt: "I ___ the happiest dog in the world!",
          choices: ["am", "is", "are"],
          answer: "am",
        },
      ],
    },
  ],
};

export const allQuestionsA1Topic5 = lessonA1Topic5.exercises.flatMap((ex) =>
  ex.questions.map((q) => ({
    ...q,
    exerciseLabel: ex.label,
    exerciseType: ex.type,
    exerciseIcon: ex.icon,
    exerciseId: ex.id,
  }))
);

// ─── A1 Topic 6 — Basic adjectives ───────────────────────────────────────────

export const lessonA1Topic6 = {
  id: "a1-basic-adjectives",
  level: "A1",
  title: "Basic Adjectives",
  subtitle: "Describe things with adjectives!",
  character: "Biscuit",
  characterEmoji: "🐕",
  studentName: "Mia",
  story:
    "Biscuit is at the pet shop today! There are so many animals to see. Help Biscuit describe everything he sees!",
  rule:
    "An adjective is a describing word. It tells us more about a noun. A **big** dog. A **happy** cat. A **red** ball. Adjectives usually come **before** the noun.",
  tier: "Little Learners",
  cardDescription: "Describe people, places, and things",
  accent: "green",
  feedback: {
    correct: (answer) => `Yes! "${answer}" is right! Great describing! ✅`,
    wrong: (answer) =>
      `Almost! The answer is "${answer}". Adjectives describe what something is like! 💡`,
  },
  scoreMessages: {
    perfect: { emoji: "🌟", text: "WOW! Perfect score! Biscuit is so proud!" },
    good:    { emoji: "🐕", text: "Great work! Keep practicing — you're almost there!" },
    tryAgain:{ emoji: "📚", text: "Good try! Let's practice again. Every mistake helps you learn!" },
  },
  examples: [
    { sentence: "Biscuit sees a **BIG** fluffy rabbit!",              note: "big describes the rabbit" },
    { sentence: "There is a **SMALL** green frog in the tank.",       note: "small describes the frog" },
    { sentence: "The **HAPPY** parrot says hello to everyone!",       note: "happy describes the parrot" },
  ],
  exercises: [
    {
      id: 1,
      label: "Exercise 1",
      type: "Multiple Choice",
      icon: "🎯",
      questions: [
        {
          id: 1,
          prompt: "The elephant at the zoo is very ___.",
          choices: ["tiny", "big", "quiet"],
          answer: "big",
        },
        {
          id: 2,
          prompt: "The kitten is so ___ — it fits in one hand!",
          choices: ["loud", "tall", "small"],
          answer: "small",
        },
        {
          id: 3,
          prompt: "The puppy wags its tail. It looks very ___.",
          choices: ["sad", "happy", "angry"],
          answer: "happy",
        },
      ],
    },
    {
      id: 2,
      label: "Exercise 2",
      type: "Find the Mistake",
      icon: "🔍",
      questions: [
        {
          id: 4,
          prompt: "The rabbit has long, ___ ears.",
          choices: ["happy", "soft", "fluffy"],
          answer: "soft",
        },
        {
          id: 5,
          prompt: "The fish has beautiful, ___ scales.",
          choices: ["loud", "shiny", "smooth"],
          answer: "shiny",
        },
        {
          id: 6,
          prompt: "The ___ elephant walked slowly.",
          choices: ["tiny", "big", "grey"],
          answer: "big",
        },
      ],
    },
    {
      id: 3,
      label: "Exercise 3",
      type: "Fill in the Blank",
      icon: "✏️",
      questions: [
        {
          id: 7,
          prompt: "The parrot has ___ feathers.",
          choices: ["colourful", "loudly", "running"],
          answer: "colourful",
        },
        {
          id: 8,
          prompt: "The tortoise walks in very ___ steps.",
          choices: ["slow", "quickly", "happy"],
          answer: "slow",
        },
        {
          id: 9,
          prompt: "Biscuit is a ___ dog!",
          choices: ["friendly", "running", "loudly"],
          answer: "friendly",
        },
      ],
    },
  ],
};

export const allQuestionsA1Topic6 = lessonA1Topic6.exercises.flatMap((ex) =>
  ex.questions.map((q) => ({
    ...q,
    exerciseLabel: ex.label,
    exerciseType: ex.type,
    exerciseIcon: ex.icon,
    exerciseId: ex.id,
  }))
);

// ─── A1 Topic 7 — Simple sentences ───────────────────────────────────────────

export const lessonA1Topic7 = {
  id: "a1-simple-sentences",
  level: "A1",
  title: "Simple Sentences",
  subtitle: "Every sentence needs WHO and WHAT!",
  character: "Biscuit",
  characterEmoji: "🐕",
  studentName: "Mia",
  story:
    "Biscuit is learning to write today! His teacher wants him to write sentences. Help Biscuit build good sentences!",
  rule:
    "A sentence tells us a complete idea. Every sentence needs **WHO** (the subject) and **WHAT THEY DO** (the verb). Biscuit **runs** — has a subject and a verb!",
  tier: "Little Learners",
  cardDescription: "Put words together to build a sentence",
  accent: "green",
  feedback: {
    correct: (answer) => `Yes! "${answer}" is right! Perfect sentence! ✅`,
    wrong: (answer) =>
      `Almost! The answer is "${answer}". Sentences need WHO and WHAT THEY DO! 💡`,
  },
  scoreMessages: {
    perfect: { emoji: "🌟", text: "WOW! Perfect score! Biscuit is so proud!" },
    good:    { emoji: "🐕", text: "Great work! Keep practicing — you're almost there!" },
    tryAgain:{ emoji: "📚", text: "Good try! Let's practice again. Every mistake helps you learn!" },
  },
  examples: [
    { sentence: "**BISCUIT RUNS** in the park every morning.", note: "Biscuit = subject, runs = verb" },
    { sentence: "**MIA READS** a book before bed.",            note: "Mia = subject, reads = verb" },
    { sentence: "**THE CAT SLEEPS** on the warm sofa.",        note: "the cat = subject, sleeps = verb" },
  ],
  exercises: [
    {
      id: 1,
      label: "Exercise 1",
      type: "Multiple Choice",
      icon: "🎯",
      questions: [
        {
          id: 1,
          prompt: "Which one is a complete sentence?",
          choices: ["The big dog.", "Runs fast.", "The big dog runs fast."],
          answer: "The big dog runs fast.",
        },
        {
          id: 2,
          prompt: "Which one is a complete sentence?",
          choices: ["Mia eats an apple.", "Eats an apple.", "Mia an apple."],
          answer: "Mia eats an apple.",
        },
        {
          id: 3,
          prompt: "Which one is a complete sentence?",
          choices: ["The cat.", "Sleeps all day.", "The cat sleeps all day."],
          answer: "The cat sleeps all day.",
        },
      ],
    },
    {
      id: 2,
      label: "Exercise 2",
      type: "Find the Mistake",
      icon: "🔍",
      questions: [
        {
          id: 4,
          prompt: "Biscuit ___ the park.",
          choices: ["runs to", "the park", "playing"],
          answer: "runs to",
        },
        {
          id: 5,
          prompt: "___ eats a big sandwich.",
          choices: ["Mia", "Eats", "Sandwich"],
          answer: "Mia",
        },
        {
          id: 6,
          prompt: "The bird ___ the tree.",
          choices: ["sits in", "the tree", "flying"],
          answer: "sits in",
        },
      ],
    },
    {
      id: 3,
      label: "Exercise 3",
      type: "Fill in the Blank",
      icon: "✏️",
      questions: [
        {
          id: 7,
          prompt: "Biscuit ___ his tail when he is happy.",
          choices: ["wags", "tail", "happy"],
          answer: "wags",
        },
        {
          id: 8,
          prompt: "___ reads a book every night.",
          choices: ["Reads", "Mia", "Book"],
          answer: "Mia",
        },
        {
          id: 9,
          prompt: "The cat ___ on the sofa all afternoon.",
          choices: ["sleeps", "sofa", "cat"],
          answer: "sleeps",
        },
      ],
    },
  ],
};

export const allQuestionsA1Topic7 = lessonA1Topic7.exercises.flatMap((ex) =>
  ex.questions.map((q) => ({
    ...q,
    exerciseLabel: ex.label,
    exerciseType: ex.type,
    exerciseIcon: ex.icon,
    exerciseId: ex.id,
  }))
);

// ─── A1 Topic 8 — Possessives ─────────────────────────────────────────────────

export const lessonA1Topic8 = {
  id: "a1-possessives",
  level: "A1",
  title: "Possessives",
  subtitle: "Show who owns something!",
  character: "Biscuit",
  characterEmoji: "🐕",
  studentName: "Mia",
  story:
    "Biscuit and his friends are tidying up the classroom today! There are lots of things everywhere. Help Biscuit figure out who owns what!",
  rule:
    "Possessives tell us who something belongs to. **My** bag — mine. **Your** pencil — yours. **His** book — a boy's. **Her** coat — a girl's. **Its** tail — an animal's. **Their** lunch — theirs.",
  tier: "Little Learners",
  cardDescription: "My, your, his, her — show who owns something",
  accent: "green",
  feedback: {
    correct: (answer) => `Yes! "${answer}" is right! Great job! ✅`,
    wrong: (answer) =>
      `Almost! The answer is "${answer}". Think about WHO the thing belongs to! 💡`,
  },
  scoreMessages: {
    perfect: { emoji: "🌟", text: "WOW! Perfect score! Biscuit is so proud of you! You finished all A1 lessons!" },
    good:    { emoji: "🐕", text: "Great work! Keep practicing — you're almost there!" },
    tryAgain:{ emoji: "📚", text: "Good try! Let's practice again. Every mistake helps you learn!" },
  },
  examples: [
    { sentence: "Biscuit wags **HIS** tail happily.",               note: "Biscuit = male dog → his" },
    { sentence: "Mia finds **HER** red coat on the chair.",         note: "Mia = girl → her" },
    { sentence: "The children put **THEIR** bags by the door.",     note: "more than one → their" },
  ],
  exercises: [
    {
      id: 1,
      label: "Exercise 1",
      type: "Multiple Choice",
      icon: "🎯",
      questions: [
        {
          id: 1,
          prompt: "Tom is looking for ___ pencil case.",
          choices: ["her", "their", "his"],
          answer: "his",
        },
        {
          id: 2,
          prompt: "Mia found ___ favourite book under the desk!",
          choices: ["her", "his", "our"],
          answer: "her",
        },
        {
          id: 3,
          prompt: "The dog wags ___ tail when it is happy.",
          choices: ["her", "its", "their"],
          answer: "its",
        },
      ],
    },
    {
      id: 2,
      label: "Exercise 2",
      type: "Find the Mistake",
      icon: "🔍",
      questions: [
        {
          id: 4,
          prompt: "Sara left her bag at home. ___ handle is broken.",
          choices: ["Her", "Its", "His"],
          answer: "Its",
        },
        {
          id: 5,
          prompt: "Tom and Sara share their books. ___ books are very heavy!",
          choices: ["His", "Their", "Our"],
          answer: "Their",
        },
        {
          id: 6,
          prompt: "I love ___ new school bag!",
          choices: ["their", "my", "our"],
          answer: "my",
        },
      ],
    },
    {
      id: 3,
      label: "Exercise 3",
      type: "Fill in the Blank",
      icon: "✏️",
      questions: [
        {
          id: 7,
          prompt: "This is Mia's coat. It is ___ coat.",
          choices: ["his", "her", "their"],
          answer: "her",
        },
        {
          id: 8,
          prompt: "This is Tom and Mia's classroom. It is ___ classroom.",
          choices: ["our", "his", "their"],
          answer: "their",
        },
        {
          id: 9,
          prompt: "The cat has a soft bed. ___ bed is by the window.",
          choices: ["His", "Its", "Their"],
          answer: "Its",
        },
      ],
    },
  ],
};

export const allQuestionsA1Topic8 = lessonA1Topic8.exercises.flatMap((ex) =>
  ex.questions.map((q) => ({
    ...q,
    exerciseLabel: ex.label,
    exerciseType: ex.type,
    exerciseIcon: ex.icon,
    exerciseId: ex.id,
  }))
);
