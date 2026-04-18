export const LEVEL_ORDER = ["A1", "A2", "B1", "B2"];

export const LEVELS = [
  {
    id:             "A1",
    level:          "A1",
    tier:           "Little Learners",
    ageBand:        "Ages 5–8",
    character:      "Biscuit",
    characterEmoji: "🐕",
    accent:         "green",
    cardDescription: "Present tense, nouns, articles, and more",
    topics: [
      { title: "Simple present tense — he, she, it",   desc: "Add -s to action words for one person or thing", lessonId: "a1-simple-present" },
      { title: "Simple present tense — I, you, we, they", desc: "No -s for I, you, we and they",           lessonId: "a1-9" },
      { title: "Nouns and plurals — adding -s",         desc: "Name things around you and make them plural",    lessonId: "a1-nouns-plurals" },
      { title: "Nouns and plurals — special plurals",   desc: "Words that change in a special way",             lessonId: "a1-10" },
      { title: "Articles: a, an, the",                  desc: "When to use a, an, and the before nouns",        lessonId: "a1-articles" },
      { title: "Subject pronouns",                      desc: "I, you, he, she, it, we, they",                  lessonId: "a1-subject-pronouns" },
      { title: "Verb to be: am, is, are",               desc: "Say who or what something is",                   lessonId: "a1-verb-to-be" },
      { title: "Basic adjectives",                      desc: "Describe people, places, and things",            lessonId: "a1-basic-adjectives" },
      { title: "Simple sentences",                      desc: "Put words together to build a sentence",         lessonId: "a1-simple-sentences" },
      { title: "Possessives",                           desc: "My, your, his, her — show who owns something",   lessonId: "a1-possessives" },
      { title: "Basic question formation",              desc: "Ask questions with do, does, is and are",        lessonId: "a1-11" },
      { title: "Negative sentences",                    desc: "Say no with don't, doesn't, isn't and aren't",  lessonId: "a1-12" },
      { title: "Present continuous",                    desc: "Talk about what is happening right now",         lessonId: "a1-13" },
    ],
  },
  {
    id:             "A2",
    level:          "A2",
    tier:           "Kids",
    ageBand:        "Ages 8–10",
    character:      "Marco",
    characterEmoji: "🧪",
    accent:         "blue",
    cardDescription: "Past tense, questions, future, and more",
    topics: [
      { title: "Simple past tense (-ed)",          desc: "Talk about things that already happened",             lessonId: "a2-simple-past" },
      { title: "Irregular past verbs",             desc: "Verbs that change completely in the past",            lessonId: "a2-2" },
      { title: "WH- questions",                    desc: "Ask who, what, where, when, why and how",             lessonId: "a2-3" },
      { title: "Comparatives",                     desc: "Compare two things with -er and more",               lessonId: "a2-4" },
      { title: "Conjunctions",                     desc: "Connect ideas with and, but, because, so, or",       lessonId: "a2-5" },
      { title: "Prepositions of place",            desc: "Say where things are with in, on, under, between",   lessonId: "a2-6" },
      { title: "Prepositions of time",             desc: "Say when things happen with at, on, in",             lessonId: "a2-7" },
      { title: "There is and there are",           desc: "Describe what exists in a place",                    lessonId: "a2-8" },
      { title: "Future tense — will and going to", desc: "Talk about plans and predictions",                   lessonId: "a2-9" },
      { title: "Can and can't",                    desc: "Say what you are able and not able to do",           lessonId: "a2-10" },
    ],
  },
  {
    id:             "B1",
    level:          "B1",
    tier:           "Kids",
    ageBand:        "Ages 10–12",
    character:      "Priya",
    characterEmoji: "🤖",
    accent:         "orange",
    cardDescription: "Modal verbs, perfect tense, and more",
    topics: [
      { title: "Modal verbs: can, should, must",       desc: "Helper words that change the meaning",                        lessonId: "b1-modal-verbs" },
      { title: "Modal verbs — could, would, might",    desc: "Express possibility and polite requests",                     lessonId: "b1-2" },
      { title: "Superlatives",                         desc: "Say which is the biggest, best or most exciting",             lessonId: "b1-3" },
      { title: "Compound sentences",                   desc: "Connect ideas with because, although, however",               lessonId: "b1-4" },
      { title: "Present perfect",                      desc: "Connect the past to now with have and has",                   lessonId: "b1-5" },
      { title: "Adverbs of frequency",                 desc: "Say how often with always, usually, sometimes, never",        lessonId: "b1-6" },
      { title: "Past continuous",                      desc: "Describe what was happening at a moment in the past",         lessonId: "b1-7" },
      { title: "Used to",                              desc: "Talk about past habits that have changed",                    lessonId: "b1-8" },
      { title: "Infinitives of purpose",               desc: "Explain why you do something with to",                        lessonId: "b1-9" },
      { title: "Relative pronouns — who and which",    desc: "Add information with who and which",                          lessonId: "b1-10" },
    ],
  },
  {
    id:             "B2",
    level:          "B2",
    tier:           "Tweens",
    ageBand:        "Ages 12–14",
    character:      "Zara",
    characterEmoji: "🎬",
    accent:         "purple",
    cardDescription: "Conditionals, passive voice, and more",
    topics: [
      { title: "Relative clauses",                    desc: "who, which, that — add detail to a noun",          lessonId: "b2-relative-clauses" },
      { title: "Passive voice",                       desc: "Focus on what happened, not who did it",           lessonId: "b2-2" },
      { title: "First conditional",                   desc: "Real possibilities with if and will",              lessonId: "b2-3" },
      { title: "Second conditional",                  desc: "Hypothetical situations with if and would",        lessonId: "b2-4" },
      { title: "Third conditional",                   desc: "Imagining different past outcomes",                lessonId: "b2-5" },
      { title: "Wish sentences",                      desc: "Express regrets and wishes about reality",         lessonId: "b2-6" },
      { title: "Reported speech",                     desc: "Say what someone else said",                       lessonId: "b2-7" },
      { title: "Past perfect",                        desc: "Talk about what had happened before another past event", lessonId: "b2-8" },
      { title: "Gerunds and infinitives",             desc: "When to use doing versus to do",                   lessonId: "b2-9" },
      { title: "Linking words",                       desc: "Connect ideas with nevertheless, furthermore, and more", lessonId: "b2-10" },
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
