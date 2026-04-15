export const PLACEMENT_QUESTIONS = [
  {
    id: 1,
    prompt: "She ___ a dog.",
    choices: ["have", "has", "is have"],
    answer: "has",
  },
  {
    id: 2,
    prompt: "They ___ at school right now.",
    choices: ["is", "am", "are"],
    answer: "are",
  },
  {
    id: 3,
    prompt: "___ your name Tom?",
    choices: ["Is", "Are", "Do"],
    answer: "Is",
  },
  {
    id: 4,
    prompt: "I ___ like pizza.",
    choices: ["don't", "isn't", "not"],
    answer: "don't",
  },
  {
    id: 5,
    prompt: "There ___ two chairs in the room.",
    choices: ["is", "are", "be"],
    answer: "are",
  },
  {
    id: 6,
    prompt: "He ___ his homework before dinner yesterday.",
    choices: ["finish", "finishing", "finished"],
    answer: "finished",
  },
  {
    id: 7,
    prompt: "___ you ever been to another country?",
    choices: ["Did", "Have", "Do"],
    answer: "Have",
  },
  {
    id: 8,
    prompt: "She is ___ than her brother.",
    choices: ["tall", "more tall", "taller"],
    answer: "taller",
  },
  {
    id: 9,
    prompt: "We didn't ___ anything at the store.",
    choices: ["bought", "buy", "buying"],
    answer: "buy",
  },
  {
    id: 10,
    prompt: "I was watching TV ___ the phone rang.",
    choices: ["while", "during", "when it"],
    answer: "while",
  },
  {
    id: 11,
    prompt: "You ___ wear a seatbelt — it's the law.",
    choices: ["should", "must", "can"],
    answer: "must",
  },
  {
    id: 12,
    prompt: "If it rains tomorrow, we ___ stay inside.",
    choices: ["will", "would", "stayed"],
    answer: "will",
  },
  {
    id: 13,
    prompt: "She has lived here ___ she was five.",
    choices: ["for", "since", "during"],
    answer: "since",
  },
  {
    id: 14,
    prompt: "He finished the race, ___ he was tired.",
    choices: ["so", "because", "although"],
    answer: "although",
  },
  {
    id: 15,
    prompt: "By the time we arrived, the movie ___ already started.",
    choices: ["had", "has", "was"],
    answer: "had",
  },
  {
    id: 16,
    prompt: "The results were ___ last Monday.",
    choices: ["announce", "announced", "announcing"],
    answer: "announced",
  },
  {
    id: 17,
    prompt: "If I ___ more time, I would study abroad.",
    choices: ["have", "had", "would have"],
    answer: "had",
  },
  {
    id: 18,
    prompt: "The student ___ won the prize is in my class.",
    choices: ["which", "whom", "who"],
    answer: "who",
  },
  {
    id: 19,
    prompt: "She asked me where I ___ going that evening.",
    choices: ["am", "was", "were"],
    answer: "was",
  },
  {
    id: 20,
    prompt: "The girl ___ sits next to me is very kind.",
    choices: ["which", "who", "whose"],
    answer: "who",
  },
];

export function scoreToLevel(correct) {
  if (correct >= 16) return "B2";
  if (correct >= 11) return "B1";
  if (correct >= 6)  return "A2";
  return "A1";
}

export const LEVEL_RESULTS = {
  A1: {
    emoji: "🌱",
    message:
      "You're just getting started — and that's the best place to be. Your level is A1. This is where every great English learner begins. Take it one step at a time and you'll be surprised how fast things click.",
    button: "Start at A1",
    accent: "green",
  },
  A2: {
    emoji: "🚀",
    message:
      "You've got the basics — now let's build on them. Your level is A2. You already know some solid grammar rules. Now it's time to stretch a little further.",
    button: "Start at A2",
    accent: "blue",
  },
  B1: {
    emoji: "⚡",
    message:
      "Strong foundations. Ready for the next challenge. Your level is B1. You've got a real grip on how English grammar works. This is where it gets interesting.",
    button: "Start at B1",
    accent: "orange",
  },
  B2: {
    emoji: "🏆",
    message:
      "Impressive. You're operating at a high level. Your level is B2. Passive voice, relative clauses, reported speech — you're handling structures that most learners take years to master. Let's go.",
    button: "Start at B2",
    accent: "purple",
  },
};

// Level order for the progress track
export const LEVELS = ["A1", "A2", "B1", "B2"];
