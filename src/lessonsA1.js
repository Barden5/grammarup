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
          wrongSentence: "Biscuit sees two ball on the grass.",
          wrongWord: "ball",
          choices: ["ball", "balls", "balled"],
          answer: "balls",
        },
        {
          id: 5,
          prompt: "Three ___ are running fast.",
          wrongSentence: "Three dog are running fast.",
          wrongWord: "dog",
          choices: ["dog", "dogs", "dogged"],
          answer: "dogs",
        },
        {
          id: 6,
          prompt: "Biscuit finds four ___ by the tree.",
          wrongSentence: "Biscuit finds four stick by the tree.",
          wrongWord: "stick",
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
          wrongSentence: "Mia eats a orange at the park.",
          wrongWord: "a",
          choices: ["a", "an", "the"],
          answer: "an",
        },
        {
          id: 5,
          prompt: "Biscuit finds ___ big bone!",
          wrongSentence: "Biscuit finds an big bone!",
          wrongWord: "an",
          choices: ["an", "a", "the"],
          answer: "a",
        },
        {
          id: 6,
          prompt: "___ shop on the corner is Mia's favourite.",
          wrongSentence: "A shop on the corner is Mia's favourite.",
          wrongWord: "A",
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
          wrongSentence: "Mia is kind. He helps everyone.",
          wrongWord: "He",
          choices: ["He", "She", "They"],
          answer: "She",
        },
        {
          id: 5,
          prompt: "The pencil is on the desk. ___ is yellow.",
          wrongSentence: "The pencil is on the desk. She is yellow.",
          wrongWord: "She",
          choices: ["She", "It", "He"],
          answer: "It",
        },
        {
          id: 6,
          prompt: "Tom and Sara are funny. ___ makes everyone laugh.",
          wrongSentence: "Tom and Sara are funny. He makes everyone laugh.",
          wrongWord: "He",
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
          wrongSentence: "I is so happy it is my birthday!",
          wrongWord: "is",
          choices: ["is", "am", "are"],
          answer: "am",
        },
        {
          id: 5,
          prompt: "The cake ___ very big and chocolate!",
          wrongSentence: "The cake are very big and chocolate!",
          wrongWord: "are",
          choices: ["are", "is", "am"],
          answer: "is",
        },
        {
          id: 6,
          prompt: "My friends ___ all coming to the party!",
          wrongSentence: "My friends is all coming to the party!",
          wrongWord: "is",
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
          wrongSentence: "The rabbit has long, happy ears.",
          wrongWord: "happy",
          choices: ["happy", "soft", "fluffy"],
          answer: "soft",
        },
        {
          id: 5,
          prompt: "The fish has beautiful, ___ scales.",
          wrongSentence: "The fish has beautiful, loud scales.",
          wrongWord: "loud",
          choices: ["loud", "shiny", "smooth"],
          answer: "shiny",
        },
        {
          id: 6,
          prompt: "The ___ elephant walked slowly.",
          wrongSentence: "The tiny elephant walked slowly.",
          wrongWord: "tiny",
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
          wrongSentence: "Biscuit ??? the park.",
          wrongWord: "???",
          choices: ["runs to", "the park", "playing"],
          answer: "runs to",
        },
        {
          id: 5,
          prompt: "___ eats a big sandwich.",
          wrongSentence: "??? eats a big sandwich.",
          wrongWord: "???",
          choices: ["Mia", "Eats", "Sandwich"],
          answer: "Mia",
        },
        {
          id: 6,
          prompt: "The bird ___ the tree.",
          wrongSentence: "The bird ??? the tree.",
          wrongWord: "???",
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
          wrongSentence: "Sara left her bag at home. Her handle is broken.",
          wrongWord: "Her",
          choices: ["Her", "Its", "His"],
          answer: "Its",
        },
        {
          id: 5,
          prompt: "Tom and Sara share their books. ___ books are very heavy!",
          wrongSentence: "Tom and Sara share their books. His books are very heavy!",
          wrongWord: "His",
          choices: ["His", "Their", "Our"],
          answer: "Their",
        },
        {
          id: 6,
          prompt: "I love ___ new school bag!",
          wrongSentence: "I love their new school bag!",
          wrongWord: "their",
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

// ─── A1 Topic 9 — Simple present: I, you, we, they ───────────────────────────

export const lessonA1Topic9 = {
  id: "a1-9",
  level: "A1",
  title: "Simple Present: I, You, We, They",
  subtitle: "No -s for I, you, we, and they!",
  character: "Biscuit",
  characterEmoji: "🐕",
  studentName: "Mia",
  story:
    "Biscuit is playing with Mia and her friends today! There are lots of people doing things together. Help Biscuit describe what everyone is doing!",
  rule:
    "We add **-s** to action words for he, she, it. But **I**, **you**, **we**, and **they** do NOT add -s! I **walk**. You **eat**. We **play**. They **run**.",
  tier: "Little Learners",
  cardDescription: "No -s for I, you, we and they",
  accent: "green",
  feedback: {
    correct: (answer) => `Yes! "${answer}" is right! I, we, they — no -s needed! ✅`,
    wrong: (answer) =>
      `Almost! The answer is "${answer}". I, you, we, they do NOT add -s! 💡`,
  },
  scoreMessages: {
    perfect: { emoji: "🌟", text: "WOW! Perfect score! Biscuit is so proud!" },
    good:    { emoji: "🐕", text: "Great work! Keep practicing — you are almost there!" },
    tryAgain:{ emoji: "📚", text: "Good try! Let's practice again. Every mistake helps you learn!" },
  },
  examples: [
    { sentence: "I **WALK** to school with Biscuit every morning.", note: "I → no -s" },
    { sentence: "We **PLAY** in the park after lunch.",              note: "we → no -s" },
    { sentence: "They **RUN** together on the big green field.",     note: "they → no -s" },
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
          prompt: "I ___ my hands before eating.",
          choices: ["washes", "wash", "washing"],
          answer: "wash",
        },
        {
          id: 2,
          prompt: "We ___ to school together every day.",
          choices: ["walks", "walking", "walk"],
          answer: "walk",
        },
        {
          id: 3,
          prompt: "They ___ in the garden after school.",
          choices: ["plays", "play", "playing"],
          answer: "play",
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
          prompt: "I ___ playing with Biscuit!",
          wrongSentence: "I loves playing with Biscuit!",
          wrongWord: "loves",
          choices: ["loves", "love", "loving"],
          answer: "love",
        },
        {
          id: 5,
          prompt: "We ___ lunch together every day.",
          wrongSentence: "We eats lunch together every day.",
          wrongWord: "eats",
          choices: ["eats", "eat", "eating"],
          answer: "eat",
        },
        {
          id: 6,
          prompt: "They ___ very fast at the park.",
          wrongSentence: "They runs very fast at the park.",
          wrongWord: "runs",
          choices: ["runs", "run", "running"],
          answer: "run",
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
          prompt: "You ___ so fast! I can hardly keep up!",
          choices: ["run", "runs", "running"],
          answer: "run",
        },
        {
          id: 8,
          prompt: "We ___ in the park every Saturday morning.",
          choices: ["meets", "meeting", "meet"],
          answer: "meet",
        },
        {
          id: 9,
          prompt: "They ___ their bags by the school gate.",
          choices: ["leaves", "leave", "leaving"],
          answer: "leave",
        },
      ],
    },
  ],
};

export const allQuestionsA1Topic9 = lessonA1Topic9.exercises.flatMap((ex) =>
  ex.questions.map((q) => ({
    ...q,
    exerciseLabel: ex.label,
    exerciseType: ex.type,
    exerciseIcon: ex.icon,
    exerciseId: ex.id,
  }))
);

// ─── A1 Topic 10 — Nouns and plurals: special plurals ────────────────────────

export const lessonA1Topic10 = {
  id: "a1-10",
  level: "A1",
  title: "Special Plurals",
  subtitle: "Words that change in a special way!",
  character: "Biscuit",
  characterEmoji: "🐕",
  studentName: "Mia",
  story:
    "Biscuit is at the library with Mia today! There are so many interesting things to see. But some words are a little tricky to make plural! Help Biscuit learn the special plural words!",
  rule:
    "Most nouns add **-s**. But some add **-es**: box → **boxes**, dish → **dishes**. And some change completely: child → **children**, mouse → **mice**, foot → **feet**. These are called **irregular plurals**!",
  tier: "Little Learners",
  cardDescription: "Words that change in a special way",
  accent: "green",
  feedback: {
    correct: (answer) => `Yes! "${answer}" is right! Some plurals are special — good memory! ✅`,
    wrong: (answer) =>
      `Almost! The answer is "${answer}". Some words change in a special way when there is more than one! 💡`,
  },
  scoreMessages: {
    perfect: { emoji: "🌟", text: "WOW! Perfect score! Biscuit is so proud! You are a plurals expert!" },
    good:    { emoji: "🐕", text: "Great work! Special plurals are tricky. Keep practicing!" },
    tryAgain:{ emoji: "📚", text: "Good try! Special plurals take time to learn. Let's practice again!" },
  },
  examples: [
    { sentence: "Mia puts the **BOOKS** in three big **BOXES**.", note: "box → boxes (add -es)" },
    { sentence: "The **CHILDREN** run to the library door.",       note: "child → children (special)" },
    { sentence: "Biscuit counts four **BUSES** on the street!",   note: "bus → buses (add -es)" },
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
          prompt: "Mia has three pencil ___ on her desk.",
          choices: ["boxs", "boxes", "boxies"],
          answer: "boxes",
        },
        {
          id: 2,
          prompt: "Two ___ are playing outside the library.",
          choices: ["childs", "childrens", "children"],
          answer: "children",
        },
        {
          id: 3,
          prompt: "Biscuit sees two ___ running by the door.",
          choices: ["mouses", "mice", "mices"],
          answer: "mice",
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
          prompt: "The librarian has two big ___ on her desk.",
          wrongSentence: "The librarian has two big dishs on her desk.",
          wrongWord: "dishs",
          choices: ["dishs", "dishes", "dishies"],
          answer: "dishes",
        },
        {
          id: 5,
          prompt: "Three ___ are reading quietly.",
          wrongSentence: "Three childs are reading quietly.",
          wrongWord: "childs",
          choices: ["childs", "childrens", "children"],
          answer: "children",
        },
        {
          id: 6,
          prompt: "Biscuit hurt both his ___ on the steps.",
          wrongSentence: "Biscuit hurt both his foots on the steps.",
          wrongWord: "foots",
          choices: ["foots", "feets", "feet"],
          answer: "feet",
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
          prompt: "The library has five ___ of books on the shelf.",
          choices: ["boxs", "boxes", "boxies"],
          answer: "boxes",
        },
        {
          id: 8,
          prompt: "Two ___ are sitting and reading quietly.",
          choices: ["childs", "childrens", "children"],
          answer: "children",
        },
        {
          id: 9,
          prompt: "Biscuit wipes his ___ at the door before going in.",
          choices: ["foots", "feets", "feet"],
          answer: "feet",
        },
      ],
    },
  ],
};

export const allQuestionsA1Topic10 = lessonA1Topic10.exercises.flatMap((ex) =>
  ex.questions.map((q) => ({
    ...q,
    exerciseLabel: ex.label,
    exerciseType: ex.type,
    exerciseIcon: ex.icon,
    exerciseId: ex.id,
  }))
);

// ─── A1 Topic 11 — Basic question formation ──────────────────────────────────

export const lessonA1Topic11 = {
  id: "a1-11",
  level: "A1",
  title: "Basic Question Formation",
  subtitle: "Ask questions with do, does, is and are!",
  character: "Biscuit",
  characterEmoji: "🐕",
  studentName: "Mia",
  story:
    "Biscuit is curious about everything today! He has lots of questions. Help Biscuit learn how to ask questions in English!",
  rule:
    "To ask a yes/no question, swap the verb and the subject. She **IS** happy → **IS** she happy? Use **DO** with I/you/we/they. Use **DOES** with he/she/it.",
  tier: "Little Learners",
  cardDescription: "Ask questions with do, does, is and are",
  accent: "green",
  feedback: {
    correct: (answer) => `Yes! "${answer}" is right! Great question! ✅`,
    wrong: (answer) =>
      `Almost! The answer is "${answer}". Is/Are for be verbs. Do for I/you/we/they. Does for he/she/it! 💡`,
  },
  scoreMessages: {
    perfect: { emoji: "🌟", text: "WOW! Perfect score! Biscuit is so proud! You ask amazing questions!" },
    good:    { emoji: "🐕", text: "Great work! Questions are tricky. Keep practicing!" },
    tryAgain:{ emoji: "📚", text: "Good try! Questions take practice. Let's try again together!" },
  },
  examples: [
    { sentence: "**IS** Biscuit a good dog? Yes he is!",         note: "swap is + subject for questions" },
    { sentence: "**DO** Mia and her friends walk to school?",    note: "do + I/you/we/they" },
    { sentence: "**DOES** the teacher have a big book?",         note: "does + he/she/it" },
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
          prompt: "___ she your best friend?",
          choices: ["Do", "Does", "Is"],
          answer: "Is",
        },
        {
          id: 2,
          prompt: "___ they play football after school?",
          choices: ["Is", "Do", "Does"],
          answer: "Do",
        },
        {
          id: 3,
          prompt: "___ the cat sleep on the sofa?",
          choices: ["Do", "Does", "Are"],
          answer: "Does",
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
          prompt: "___ she like ice cream?",
          wrongSentence: "Do she like ice cream?",
          wrongWord: "Do",
          choices: ["Do", "Does", "Is"],
          answer: "Does",
        },
        {
          id: 5,
          prompt: "___ they at the park today?",
          wrongSentence: "Is they at the park today?",
          wrongWord: "Is",
          choices: ["Is", "Are", "Do"],
          answer: "Are",
        },
        {
          id: 6,
          prompt: "___ you want to play?",
          wrongSentence: "Does you want to play?",
          wrongWord: "Does",
          choices: ["Does", "Do", "Is"],
          answer: "Do",
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
          prompt: "___ Biscuit your favourite dog?",
          choices: ["Do", "Is", "Does"],
          answer: "Is",
        },
        {
          id: 8,
          prompt: "___ we have school tomorrow?",
          choices: ["Does", "Is", "Do"],
          answer: "Do",
        },
        {
          id: 9,
          prompt: "___ the bus stop here?",
          choices: ["Do", "Are", "Does"],
          answer: "Does",
        },
      ],
    },
  ],
};

export const allQuestionsA1Topic11 = lessonA1Topic11.exercises.flatMap((ex) =>
  ex.questions.map((q) => ({
    ...q,
    exerciseLabel: ex.label,
    exerciseType: ex.type,
    exerciseIcon: ex.icon,
    exerciseId: ex.id,
  }))
);

// ─── A1 Topic 12 — Negative sentences ────────────────────────────────────────

export const lessonA1Topic12 = {
  id: "a1-12",
  level: "A1",
  title: "Negative Sentences",
  subtitle: "Say no with don't, doesn't, isn't and aren't!",
  character: "Biscuit",
  characterEmoji: "🐕",
  studentName: "Mia",
  story:
    "Biscuit is telling Mia what he does NOT like! Every dog has things they do not enjoy. Help Biscuit say no in the right way!",
  rule:
    "Add **don't** or **doesn't** before the action word to say something does NOT happen. **Don't** — I/you/we/they. **Doesn't** — he/she/it. For the verb to be use **isn't** (one thing) or **aren't** (more than one).",
  tier: "Little Learners",
  cardDescription: "Say no with don't, doesn't, isn't and aren't",
  accent: "green",
  feedback: {
    correct: (answer) => `Yes! "${answer}" is right! Great negative sentence! ✅`,
    wrong: (answer) =>
      `Almost! The answer is "${answer}". Don't = I/you/we/they. Doesn't = he/she/it. Aren't = more than one! 💡`,
  },
  scoreMessages: {
    perfect: { emoji: "🌟", text: "WOW! Perfect score! Biscuit is so proud! You are a negatives expert!" },
    good:    { emoji: "🐕", text: "Great work! Negatives are tricky. Keep practicing!" },
    tryAgain:{ emoji: "📚", text: "Good try! Let's practice again together. Every mistake helps you learn!" },
  },
  examples: [
    { sentence: "Biscuit **DOESN'T** like taking a bath!",          note: "he/she/it → doesn't" },
    { sentence: "Mia and her friends **DON'T** eat spinach.",       note: "I/you/we/they → don't" },
    { sentence: "The cats **AREN'T** playing nicely today.",        note: "more than one → aren't" },
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
          prompt: "I ___ like having a bath!",
          choices: ["doesn't", "don't", "isn't"],
          answer: "don't",
        },
        {
          id: 2,
          prompt: "She ___ walk to school — she takes the bus.",
          choices: ["don't", "aren't", "doesn't"],
          answer: "doesn't",
        },
        {
          id: 3,
          prompt: "The puppies ___ tired yet — they want to keep playing!",
          choices: ["isn't", "don't", "aren't"],
          answer: "aren't",
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
          prompt: "Biscuit ___ like loud noises.",
          wrongSentence: "Biscuit don't like loud noises.",
          wrongWord: "don't",
          choices: ["don't", "doesn't", "isn't"],
          answer: "doesn't",
        },
        {
          id: 5,
          prompt: "The cats ___ playing outside today.",
          wrongSentence: "The cats isn't playing outside today.",
          wrongWord: "isn't",
          choices: ["isn't", "aren't", "don't"],
          answer: "aren't",
        },
        {
          id: 6,
          prompt: "We ___ have school on Sunday.",
          wrongSentence: "We doesn't have school on Sunday.",
          wrongWord: "doesn't",
          choices: ["doesn't", "don't", "aren't"],
          answer: "don't",
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
          prompt: "I ___ like getting wet in the rain!",
          choices: ["doesn't", "don't", "aren't"],
          answer: "don't",
        },
        {
          id: 8,
          prompt: "Mia ___ eat broccoli — she finds it too bitter!",
          choices: ["don't", "aren't", "doesn't"],
          answer: "doesn't",
        },
        {
          id: 9,
          prompt: "The birds ___ singing today — it is too cold!",
          choices: ["isn't", "aren't", "doesn't"],
          answer: "aren't",
        },
      ],
    },
  ],
};

export const allQuestionsA1Topic12 = lessonA1Topic12.exercises.flatMap((ex) =>
  ex.questions.map((q) => ({
    ...q,
    exerciseLabel: ex.label,
    exerciseType: ex.type,
    exerciseIcon: ex.icon,
    exerciseId: ex.id,
  }))
);

// ─── A1 Topic 13 — Present continuous ────────────────────────────────────────

export const lessonA1Topic13 = {
  id: "a1-13",
  level: "A1",
  title: "Present Continuous",
  subtitle: "Talk about what is happening right now!",
  character: "Biscuit",
  characterEmoji: "🐕",
  studentName: "Mia",
  story:
    "Biscuit is looking out of the window right now! He can see lots of things happening outside. Help Biscuit describe what is happening at this very moment!",
  rule:
    "We use present continuous for something happening **RIGHT NOW**. Use **is** or **are** plus the action word with **-ing** at the end. She **IS running**. They **ARE playing**. I **AM watching**.",
  tier: "Little Learners",
  cardDescription: "Talk about what is happening right now",
  accent: "green",
  feedback: {
    correct: (answer) => `Yes! "${answer}" is right! That is happening right now! ✅`,
    wrong: (answer) =>
      `Almost! The answer is "${answer}". I = am. One thing = is. More than one = are! 💡`,
  },
  scoreMessages: {
    perfect: { emoji: "🌟", text: "WOW! Perfect score! Biscuit is so proud! You are a present continuous superstar!" },
    good:    { emoji: "🐕", text: "Great work! Keep practicing — you are almost there!" },
    tryAgain:{ emoji: "📚", text: "Good try! Let's practice again together. Every mistake helps you learn!" },
  },
  examples: [
    { sentence: "Biscuit **IS** looking out of the window.",          note: "one thing → is + -ing" },
    { sentence: "Mia and her friends **ARE** playing outside.",       note: "more than one → are + -ing" },
    { sentence: "I **AM** watching the birds in the garden!",         note: "I → am + -ing" },
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
          prompt: "The cat ___ sleeping on the warm roof.",
          choices: ["are", "am", "is"],
          answer: "is",
        },
        {
          id: 2,
          prompt: "The children ___ running in the garden.",
          choices: ["is", "are", "am"],
          answer: "are",
        },
        {
          id: 3,
          prompt: "I ___ watching the butterflies fly by.",
          choices: ["is", "are", "am"],
          answer: "am",
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
          prompt: "The birds ___ singing in the tree.",
          wrongSentence: "The birds is singing in the tree.",
          wrongWord: "is",
          choices: ["is", "are", "am"],
          answer: "are",
        },
        {
          id: 5,
          prompt: "Mia ___ jumping in the puddles.",
          wrongSentence: "Mia are jumping in the puddles.",
          wrongWord: "are",
          choices: ["are", "is", "am"],
          answer: "is",
        },
        {
          id: 6,
          prompt: "I ___ eating my lunch outside.",
          wrongSentence: "I is eating my lunch outside.",
          wrongWord: "is",
          choices: ["is", "am", "are"],
          answer: "am",
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
          prompt: "The dog next door ___ barking very loudly!",
          choices: ["am", "are", "is"],
          answer: "is",
        },
        {
          id: 8,
          prompt: "We ___ having so much fun in the garden!",
          choices: ["is", "am", "are"],
          answer: "are",
        },
        {
          id: 9,
          prompt: "I ___ writing about everything I see!",
          choices: ["is", "am", "are"],
          answer: "am",
        },
      ],
    },
  ],
};

export const allQuestionsA1Topic13 = lessonA1Topic13.exercises.flatMap((ex) =>
  ex.questions.map((q) => ({
    ...q,
    exerciseLabel: ex.label,
    exerciseType: ex.type,
    exerciseIcon: ex.icon,
    exerciseId: ex.id,
  }))
);
