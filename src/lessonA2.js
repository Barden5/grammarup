export const lesson = {
  id: "a2-simple-past",
  level: "A2",
  title: "Simple Past Tense",
  subtitle: "Add -ed to show something already happened!",
  character: "Marco",
  characterEmoji: "🧪",
  story:
    "Meet Marco! Marco is 9 years old. He is getting ready for the school science fair. Something went wrong with his experiment yesterday. Help Marco tell the story of what happened!",
  rule: "Most action words get **-ed** at the end to show something already happened.",
  examples: [
    { sentence: 'She **walked**.', note: "past → add -ed" },
    { sentence: 'He **mixed**.', note: "past → add -ed" },
    { sentence: 'It **spilled**.', note: "past → add -ed" },
  ],
  tier: "Kids",
  cardDescription: "Past tense and questions",
  accent: "blue",
  feedback: {
    correct: (answer) => `That's it! "${answer}" is correct! Nice work, Marco! ✅`,
    wrong: (answer) =>
      `Not quite. The answer is "${answer}". We add -ed to show something already happened. 💡`,
  },
  scoreMessages: {
    perfect: {
      emoji: "🌟",
      text: "Perfect score! You crushed it! Marco's science fair report is ready!",
    },
    good: {
      emoji: "🧪",
      text: "Really good work! Marco says thanks for the help. Keep practicing!",
    },
    tryAgain: {
      emoji: "📚",
      text: "Good effort! Let's try again. Every mistake helps you learn!",
    },
  },
  exercises: [
    {
      id: 1,
      label: "Exercise 1",
      type: "Multiple Choice",
      icon: "🎯",
      questions: [
        {
          id: 1,
          prompt: "Marco ___ his experiment at 9 o'clock.",
          choices: ["start", "started", "starting"],
          answer: "started",
        },
        {
          id: 2,
          prompt: "He ___ the wrong bottle by mistake.",
          choices: ["grabbing", "grabs", "grabbed"],
          answer: "grabbed",
        },
        {
          id: 3,
          prompt: "The foam ___ all over his notebook.",
          choices: ["spilled", "spill", "spilling"],
          answer: "spilled",
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
          prompt: "Marco ___ to the science table.",
          choices: ["walk", "walked", "walking"],
          answer: "walked",
        },
        {
          id: 5,
          prompt: "He ___ the red powder first.",
          choices: ["mix", "mixed", "mixing"],
          answer: "mixed",
        },
        {
          id: 6,
          prompt: "His partner ___ at the bubbles.",
          choices: ["point", "pointed", "pointing"],
          answer: "pointed",
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
          prompt: "Marco ___ his experiment three times.",
          choices: ["repeat", "repeated", "repeating"],
          answer: "repeated",
        },
        {
          id: 8,
          prompt: "He ___ his results on a big poster.",
          choices: ["record", "records", "recorded"],
          answer: "recorded",
        },
        {
          id: 9,
          prompt: "His teacher ___ at his experiment.",
          choices: ["look", "looked", "looking"],
          answer: "looked",
        },
      ],
    },
  ],
};

export const allQuestions = lesson.exercises.flatMap((ex) =>
  ex.questions.map((q) => ({
    ...q,
    exerciseLabel: ex.label,
    exerciseType: ex.type,
    exerciseIcon: ex.icon,
    exerciseId: ex.id,
  }))
);
