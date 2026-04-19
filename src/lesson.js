export const lesson = {
  id: "a1-simple-present",
  level: "A1",
  title: "Simple Present Tense",
  subtitle: "Add -s for one person or thing!",
  character: "Biscuit",
  characterEmoji: "🐕",
  studentName: "Mia",
  story:
    "This is Biscuit. Biscuit is a happy dog. Biscuit goes to school with Mia. Help Biscuit and Mia every day!",
  rule: "When talking about one person or animal, add **-s** to the action word.",
  tier: "Little Learners",
  cardDescription: "Simple present tense and more",
  accent: "green",
  feedback: {
    correct: (answer) => `Yes! "${answer}" is right! Add -s for one person or thing! ✅`,
    wrong: (answer) =>
      `Almost! Remember to add -s. The answer is "${answer}". 💡`,
  },
  scoreMessages: {
    perfect: {
      emoji: "🌟",
      text: "WOW! You are a star! Biscuit is so happy you helped!",
    },
    good: {
      emoji: "🐕",
      text: "Great work! Mia says thank you! Keep practicing!",
    },
    tryAgain: {
      emoji: "📚",
      text: "Good try! Read the hints and try again. Every mistake helps you learn!",
    },
  },
  examples: [
    { sentence: 'She **walks**.', note: "one person → add -s" },
    { sentence: 'He **eats**.', note: "one person → add -s" },
    { sentence: 'It **barks**.', note: "one animal → add -s" },
  ],
  exercises: [
    {
      id: 1,
      label: "Exercise 1",
      type: "Multiple Choice",
      icon: "🎯",
      storyPrompt: "Biscuit is watching Mia go through her school day. Pick the right word!",
      questions: [
        {
          id: 1,
          prompt: "Mia ___ her bag every day.",
          choices: ["pack", "packs", "packing"],
          answer: "packs",
        },
        {
          id: 2,
          prompt: "Her friend ___ next to her.",
          choices: ["sit", "sits", "sitting"],
          answer: "sits",
        },
        {
          id: 3,
          prompt: "The teacher ___ a story.",
          choices: ["tell", "tells", "telling"],
          answer: "tells",
        },
      ],
    },
    {
      id: 2,
      label: "Exercise 2",
      type: "Find the Mistake",
      icon: "🔍",
      storyPrompt: "Some of Biscuit's sentences have mistakes. Find and fix the mistake!",
      questions: [
        {
          id: 4,
          prompt: "The cat ___ on the chair.",
          wrongSentence: "The cat sleep on the chair.",
          wrongWord: "sleep",
          choices: ["sleep", "sleeps", "sleeping"],
          answer: "sleeps",
        },
        {
          id: 5,
          prompt: "Mia ___ a sandwich for lunch.",
          wrongSentence: "Mia eat a sandwich for lunch.",
          wrongWord: "eat",
          choices: ["eat", "eats", "eating"],
          answer: "eats",
        },
        {
          id: 6,
          prompt: "Her teacher ___ a book.",
          wrongSentence: "Her teacher read a book.",
          wrongWord: "read",
          choices: ["read", "reads", "readed"],
          answer: "reads",
        },
      ],
    },
    {
      id: 3,
      label: "Exercise 3",
      type: "Fill in the Blank",
      icon: "✏️",
      storyPrompt: "Biscuit wants to tell the whole story of Mia's day. Fill in the blank!",
      questions: [
        {
          id: 7,
          prompt: "Every day, the dog ___ its tail at Mia.",
          choices: ["wag", "wags", "waging"],
          answer: "wags",
        },
        {
          id: 8,
          prompt: "Mia's best friend ___ her hand in class.",
          choices: ["raise", "raises", "raising"],
          answer: "raises",
        },
        {
          id: 9,
          prompt: "The school bus ___ at 3 o'clock.",
          choices: ["stop", "stops", "stopping"],
          answer: "stops",
        },
      ],
    },
  ],
};

// Flat list of all questions with exercise metadata attached
export const allQuestions = lesson.exercises.flatMap((ex) =>
  ex.questions.map((q) => ({
    ...q,
    exerciseLabel:       ex.label,
    exerciseType:        ex.type,
    exerciseIcon:        ex.icon,
    exerciseId:          ex.id,
    exerciseStoryPrompt: ex.storyPrompt,
  }))
);
