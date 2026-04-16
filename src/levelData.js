export const LEVEL_ORDER = ["A1", "A2", "B1", "B2"];

export const LEVELS = [
  {
    id:             "A1",
    level:          "A1",
    tier:           "Little Learners",
    ageBand:        "Ages 5–7",
    character:      "Biscuit",
    characterEmoji: "🐕",
    accent:         "green",
    cardDescription: "Simple present, nouns, articles, and more",
    topics: [
      { title: "Simple present tense (-s)",  desc: "Add -s to action words for one person or thing", lessonId: "a1-simple-present" },
      { title: "Nouns and plurals",           desc: "Name things around you and make them plural",    lessonId: null },
      { title: "Articles: a, an, the",        desc: "When to use a, an, and the before nouns",        lessonId: null },
      { title: "Subject pronouns",            desc: "I, you, he, she, it, we, they",                  lessonId: null },
      { title: "Verb to be: am, is, are",     desc: "Say who or what something is",                   lessonId: null },
      { title: "Basic adjectives",            desc: "Describe people, places, and things",            lessonId: null },
      { title: "Simple sentences",            desc: "Put words together to build a sentence",         lessonId: null },
      { title: "Possessives",                 desc: "My, your, his, her — show who owns something",   lessonId: null },
    ],
  },
  {
    id:             "A2",
    level:          "A2",
    tier:           "Kids",
    ageBand:        "Ages 7–9",
    character:      "Marco",
    characterEmoji: "🧪",
    accent:         "blue",
    cardDescription: "Past tense, questions, and more",
    topics: [
      { title: "Simple past tense (-ed)",     desc: "Talk about things that already happened",        lessonId: "a2-simple-past" },
      { title: "Irregular past verbs",        desc: "went, saw, ate — verbs with special forms",      lessonId: null },
      { title: "WH- questions",               desc: "Who, what, where, when, why, how",               lessonId: null },
      { title: "Comparatives",                desc: "bigger, faster — compare two things",            lessonId: null },
      { title: "Conjunctions",                desc: "Join ideas with and, but, so, because",          lessonId: null },
      { title: "Prepositions of place",       desc: "in, on, under, next to, between",               lessonId: null },
      { title: "Prepositions of time",        desc: "at, on, in — say when things happen",           lessonId: null },
      { title: "There is and there are",      desc: "Describe what exists in a place",               lessonId: null },
    ],
  },
  {
    id:             "B1",
    level:          "B1",
    tier:           "Kids",
    ageBand:        "Ages 9–11",
    character:      "Priya",
    characterEmoji: "🤖",
    accent:         "orange",
    cardDescription: "Modal verbs, tenses, and more",
    topics: [
      { title: "Modal verbs: can, should, must",       desc: "Helper words that change the meaning",         lessonId: "b1-modal-verbs" },
      { title: "Modal verbs: could, would, might",     desc: "Possibility, politeness, and imagining",       lessonId: null },
      { title: "Present continuous",                   desc: "What is happening right now?",                lessonId: null },
      { title: "Comparatives and superlatives",        desc: "bigger, biggest — compare two or more",       lessonId: null },
      { title: "Compound sentences",                   desc: "Link two ideas with connecting words",        lessonId: null },
      { title: "Future tense: will and going to",      desc: "Plans and predictions about the future",      lessonId: null },
      { title: "Present perfect",                      desc: "have/has + past participle",                  lessonId: null },
      { title: "Adverbs of frequency",                 desc: "always, often, sometimes, never",             lessonId: null },
    ],
  },
  {
    id:             "B2",
    level:          "B2",
    tier:           "Tweens",
    ageBand:        "Ages 11–13",
    character:      "Zara",
    characterEmoji: "🎬",
    accent:         "purple",
    cardDescription: "Clauses, conditionals, and more",
    topics: [
      { title: "Relative clauses",            desc: "who, which, that — add detail to a noun",       lessonId: "b2-relative-clauses" },
      { title: "Passive voice",               desc: "Shift focus from who acts to what happens",     lessonId: null },
      { title: "First conditional",           desc: "If it rains, we will stay inside",              lessonId: null },
      { title: "Second conditional",          desc: "If I had a dog, I would call it Biscuit",       lessonId: null },
      { title: "Reported speech",             desc: "She said that she was tired",                   lessonId: null },
      { title: "Past perfect",                desc: "had + past participle — before another event",  lessonId: null },
      { title: "Gerunds and infinitives",     desc: "enjoy reading vs. want to read",                lessonId: null },
      { title: "Linking words",               desc: "however, therefore, although, meanwhile",       lessonId: null },
    ],
  },
];

/** True if the student's level unlocks access to a given level card. */
export function isLevelAccessible(profileLevel, cardLevelId) {
  const profileIdx = LEVEL_ORDER.indexOf(profileLevel ?? "A1");
  const cardIdx    = LEVEL_ORDER.indexOf(cardLevelId);
  return profileIdx >= cardIdx;
}

/** Number of topics completed in a level (keyed by lessonId in completedTopics). */
export function countCompletedTopics(levelTopics, completedTopics = {}) {
  return levelTopics.filter(
    (t) => t.lessonId !== null && completedTopics[t.lessonId]
  ).length;
}
