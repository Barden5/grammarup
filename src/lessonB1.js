export const lesson = {
  id: "b1-modal-verbs",
  level: "B1",
  title: "Modal Verbs",
  subtitle: "Can, should, must — helper words that change the meaning!",
  character: "Priya",
  characterEmoji: "🤖",
  story:
    "Priya has been waiting all year for this. The regional robotics competition is finally here. Her team has three days to fix their robot, practice, and compete. But things don't always go according to plan. Follow Priya through the competition!",
  rule:
    "A modal verb is a **helper word** that goes before an action word. **Can** means able to. **Should** means it's a good idea. **Must** means it's required — no choice!",
  examples: [
    { sentence: 'She **can** lift the block.', note: "able to do it" },
    { sentence: 'They **should** check the wheels.', note: "a good idea" },
    { sentence: 'All teams **must** register.', note: "required — no exceptions" },
  ],
  tier: "Kids",
  cardDescription: "Modal verbs and more",
  accent: "orange",
  feedback: {
    correct: (answer) => `Correct! "${answer}" fits here. Good thinking. ✅`,
    wrong: (answer) =>
      `Not quite. The answer is "${answer}". Think about the meaning — ability, advice, or a rule? 💡`,
  },
  scoreMessages: {
    perfect: {
      emoji: "🤖",
      text: "Perfect score. You really understand modal verbs. Priya's team is ready — and so are you.",
    },
    good: {
      emoji: "🌟",
      text: "Solid work. You've got the main idea down. Review the ones you missed and you'll have it.",
    },
    tryAgain: {
      emoji: "📚",
      text: "Keep going — this one takes practice. Re-read the explanation and try again. You'll get there.",
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
          prompt: "\"We ___ check the wheels before we go on stage.\" (good idea but not required)",
          choices: ["must", "should", "can"],
          answer: "should",
        },
        {
          id: 2,
          prompt: "\"Our robot ___ lift the block — I watched it do it in practice.\" (able to do it)",
          choices: ["must", "should", "can"],
          answer: "can",
        },
        {
          id: 3,
          prompt: "\"All teams ___ register before 8am or they are disqualified.\" (a rule, no exceptions)",
          choices: ["must", "can", "should"],
          answer: "must",
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
          prompt: "\"The robot should ___ the maze in under two minutes.\"",
          wrongSentence: "The robot should completes the maze in under two minutes.",
          wrongWord: "completes",
          choices: ["completes", "complete", "completed"],
          answer: "complete",
        },
        {
          id: 5,
          prompt: "\"All team members must ___ a badge at all times.\"",
          wrongSentence: "All team members must wears a badge at all times.",
          wrongWord: "wears",
          choices: ["wears", "wear", "wearing"],
          answer: "wear",
        },
        {
          id: 6,
          prompt: "\"Priya can ___ the new program in one hour.\"",
          wrongSentence: "Priya can coded the new program in one hour.",
          wrongWord: "coded",
          choices: ["coded", "codes", "code"],
          answer: "code",
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
          prompt: "\"We ___ stay calm, even if something goes wrong.\"",
          choices: ["should", "shoulded", "shoulding"],
          answer: "should",
        },
        {
          id: 8,
          prompt: "\"The remote control ___ reach the robot from 10 meters away.\"",
          choices: ["musts", "can", "cans"],
          answer: "can",
        },
        {
          id: 9,
          prompt: "\"Every team member ___ stand behind the line during the run.\"",
          choices: ["must", "musted", "musting"],
          answer: "must",
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
