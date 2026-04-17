export const lesson = {
  id: "b2-relative-clauses",
  level: "B2",
  title: "Relative Clauses",
  subtitle: "Who, which, that — add information about a noun!",
  character: "Zara",
  characterEmoji: "🎬",
  story:
    "Zara has one month to produce a short documentary about her neighborhood for the city's Young Voices Film Festival. She's interviewing residents, filming locations, and putting together a script — all while keeping up with school. Follow Zara through the project!",
  rule:
    "Use **who**, **which**, and **that** to add information about a noun. Use **who** for people, **which** for things, and **that** for either in less formal contexts. The relative clause always comes directly after the noun it describes.",
  examples: [
    { sentence: 'The resident **who** grew up here shared her story.', note: "who → for people" },
    { sentence: 'The building, **which** was built in 1923, is being torn down.', note: "which → for things (formal)" },
    { sentence: 'The interview **that** she recorded lasted forty minutes.', note: "that → either (everyday speech)" },
  ],
  tier: "Tweens",
  cardDescription: "Relative clauses and more",
  accent: "purple",
  feedback: {
    correct: (answer) => `Correct. "${answer}" is the right relative pronoun here. ✅`,
    wrong: (answer) =>
      `The answer is "${answer}". Check what noun the clause is describing — a person or a thing? That's the key. 💡`,
  },
  scoreMessages: {
    perfect: {
      emoji: "🎬",
      text: "9 out of 9. Relative clauses are genuinely tricky — this score means you've got a strong handle on them. Zara would approve.",
    },
    good: {
      emoji: "🌟",
      text: "Solid. You've got the core rule down. The ones you missed are worth a second look — the details matter at B2. Keep pushing.",
    },
    tryAgain: {
      emoji: "📚",
      text: "This is a complex structure — it takes time to internalize. Go back to the explanation, focus on the who/which/that distinction, and try again.",
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
          prompt: "\"The resident ___ grew up in this neighborhood agreed to share her story.\" (person)",
          choices: ["which", "who", "that it"],
          answer: "who",
        },
        {
          id: 2,
          prompt: "\"The old library building, ___ was built in 1923, is being torn down next year.\" (thing, formal)",
          choices: ["who", "that", "which"],
          answer: "which",
        },
        {
          id: 3,
          prompt: "\"The interview ___ Zara recorded last Friday lasted forty minutes.\" (everyday speech)",
          choices: ["that", "who", "whose"],
          answer: "that",
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
          prompt: "\"The photographer ___ took the festival photos offered to help Zara.\"",
          wrongSentence: "The photographer which took the festival photos offered to help Zara.",
          wrongWord: "which",
          choices: ["which", "who", "that"],
          answer: "who",
        },
        {
          id: 5,
          prompt: "\"The camera, ___ the school lent to Zara, stopped working on day two.\"",
          wrongSentence: "The camera, who the school lent to Zara, stopped working on day two.",
          wrongWord: "who",
          choices: ["who", "which", "that"],
          answer: "which",
        },
        {
          id: 6,
          prompt: "\"The moment ___ Zara pressed record, everything went wrong.\"",
          wrongSentence: "The moment which Zara pressed record, everything went wrong.",
          wrongWord: "which",
          choices: ["which", "that", "when"],
          answer: "when",
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
          prompt: "\"She thanked the teacher ___ had supported the project from the beginning.\"",
          choices: ["which", "who", "that she"],
          answer: "who",
        },
        {
          id: 8,
          prompt: "\"The festival, ___ takes place every spring, attracts students from across the city.\"",
          choices: ["that", "which", "who"],
          answer: "which",
        },
        {
          id: 9,
          prompt: "\"The final shot ___ Zara chose shows the whole street lit up at night.\"",
          choices: ["which", "who", "that"],
          answer: "that",
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
