// ─── B2 Topic 2 — Passive voice ───────────────────────────────────────────────

export const lessonB2Topic2 = {
  id: "b2-2",
  level: "B2",
  title: "Passive Voice",
  subtitle: "Focus on what happened, not who did it!",
  character: "Zara",
  characterEmoji: "🎬",
  story:
    "Zara is writing her documentary script. She wants to focus on events and things rather than who did them — the passive voice is perfect for this!",
  rule:
    "In an **active** sentence the subject does the action: The director filmed the scene. In a **passive** sentence the action is done TO the subject: The scene **WAS FILMED** by the director. We form the passive with **to be** + past participle. Present passive: **is/are** + past participle. Past passive: **was/were** + past participle. We use **BY** to say who did the action — but we can leave it out if it is not important.",
  examples: [
    { sentence: "The documentary **WAS FILMED** over four weeks.",             note: "past passive = was/were + past participle" },
    { sentence: "The interviews **ARE EDITED** by Zara every evening.",        note: "present passive = is/are + past participle" },
    { sentence: "The award **WAS GIVEN** to the best student film.",            note: "past passive — no by needed" },
  ],
  feedback: {
    correct: (answer) => `Correct. "${answer}" is right — good use of passive voice. ✅`,
    wrong:   (answer) => `The answer is "${answer}". Passive = to be + past participle. Present: is/are. Past: was/were. 💡`,
  },
  scoreMessages: {
    perfect:  { emoji: "🎬", text: "9 out of 9. You have a strong grasp of passive voice. Zara would approve." },
    good:     { emoji: "🎬", text: "Solid. The core structure is there. Review the ones you missed." },
    tryAgain: { emoji: "🎬", text: "This structure takes time. Go back to the explanation and try again." },
  },
  exercises: [
    {
      id: 1,
      label: "Exercise 1",
      type: "Multiple Choice",
      icon: "🎯",
      storyPrompt: "Zara is writing passive voice descriptions for her documentary script. Pick the right word!",
      questions: [
        {
          id: 1,
          prompt: "The documentary ___ by Zara and her team.",
          choices: ["filmed", "was filmed", "is film"],
          answer: "was filmed",
          hint: "Past passive = was/were + past participle. was filmed!",
        },
        {
          id: 2,
          prompt: "The interviews ___ every evening after school.",
          choices: ["are edited", "edited", "is edit"],
          answer: "are edited",
          hint: "Present passive = is/are + past participle. are edited!",
        },
        {
          id: 3,
          prompt: "The award ___ to the best student film last year.",
          choices: ["given", "was given", "is give"],
          answer: "was given",
          hint: "Past passive = was/were + past participle. was given!",
        },
      ],
    },
    {
      id: 2,
      label: "Exercise 2",
      type: "Find the Mistake",
      icon: "🔍",
      storyPrompt: "Some passive voice sentences in Zara's script have mistakes. Find and fix the mistake!",
      questions: [
        {
          id: 4,
          prompt: "The script was ___ by Zara in one weekend.",
          wrongSentence: "The script was write by Zara in one weekend.",
          wrongWord: "write",
          choices: ["write", "written", "wrote"],
          answer: "written",
          hint: "Passive needs the PAST PARTICIPLE — write → written! was written — not was write!",
        },
        {
          id: 5,
          prompt: "The cameras ___ checked before every shoot.",
          wrongSentence: "The cameras is checked before every shoot.",
          wrongWord: "is",
          choices: ["is", "are", "was"],
          answer: "are",
          hint: "Cameras is plural — use ARE! The cameras are checked!",
        },
        {
          id: 6,
          prompt: "The film ___ shown at the festival last month.",
          wrongSentence: "The film were shown at the festival last month.",
          wrongWord: "were",
          choices: ["were", "was", "is"],
          answer: "was",
          hint: "The film is singular — use WAS! The film was shown!",
        },
      ],
    },
    {
      id: 3,
      label: "Exercise 3",
      type: "Fill in the Blank",
      icon: "✏️",
      storyPrompt: "Zara is finishing her passive voice descriptions for the film notes. Fill in the blank!",
      questions: [
        {
          id: 7,
          prompt: "All the interviews ___ on Zara's laptop.",
          choices: ["was stored", "stored", "are stored"],
          answer: "are stored",
          hint: "Present passive — plural subject. Use ARE STORED!",
        },
        {
          id: 8,
          prompt: "The documentary ___ to the festival committee last week.",
          choices: ["was sent", "sent", "is sent"],
          answer: "was sent",
          hint: "Past passive — singular subject. Use WAS SENT!",
        },
        {
          id: 9,
          prompt: "The final edit ___ by the whole team together.",
          choices: ["were approved", "was approved", "approved"],
          answer: "was approved",
          hint: "Past passive — singular subject. Use WAS APPROVED!",
        },
      ],
    },
  ],
};

export const allQuestionsB2Topic2 = lessonB2Topic2.exercises.flatMap((ex) =>
  ex.questions.map((q) => ({
    ...q,
    exerciseLabel:       ex.label,
    exerciseType:        ex.type,
    exerciseIcon:        ex.icon,
    exerciseId:          ex.id,
    exerciseStoryPrompt: ex.storyPrompt,
  }))
);

// ─── B2 Topic 3 — First conditional ──────────────────────────────────────────

export const lessonB2Topic3 = {
  id: "b2-3",
  level: "B2",
  title: "First Conditional",
  subtitle: "Real possibilities with if and will!",
  character: "Zara",
  characterEmoji: "🎬",
  story:
    "Zara is planning the final stages of her documentary. She is thinking about what will happen depending on different situations.",
  rule:
    "We use the **first conditional** for **REAL and POSSIBLE** situations in the future. Structure: **IF + present simple, WILL + base verb**. If it rains tomorrow, we will film inside. The IF clause describes the condition. The WILL clause describes the result. The IF clause can come first or second — when it comes second we do not use a comma: We will film inside if it rains. Both parts can also use negative forms: If she does not finish on time, the film will not be ready.",
  examples: [
    { sentence: "If Zara finishes editing tonight, the film **WILL BE** ready by Friday.",    note: "if + present simple, will + base verb" },
    { sentence: "The documentary **WILL WIN** an award if the judges see it.",                note: "if clause can come second" },
    { sentence: "If the interview does not go well, Zara **WILL FILM** it again.",            note: "negative forms are fine" },
  ],
  feedback: {
    correct: (answer) => `Correct. "${answer}" is right. Good first conditional structure. ✅`,
    wrong:   (answer) => `The answer is "${answer}". If + present simple, will + base verb. Never use will in the if clause! 💡`,
  },
  scoreMessages: {
    perfect:  { emoji: "🎬", text: "9 out of 9. First conditional is clearly no problem for you." },
    good:     { emoji: "🎬", text: "Solid. You have the structure. Check the ones you missed." },
    tryAgain: { emoji: "🎬", text: "Go back to the structure: if + present simple, will + verb. Try again." },
  },
  exercises: [
    {
      id: 1,
      label: "Exercise 1",
      type: "Multiple Choice",
      icon: "🎯",
      storyPrompt: "Zara is thinking about what will happen in the final stages of her documentary. Pick the right word!",
      questions: [
        {
          id: 1,
          prompt: "If Zara submits the film today, she ___ the deadline.",
          choices: ["meets", "will meet", "would meet"],
          answer: "will meet",
          hint: "First conditional = if + present simple, WILL + verb. will meet!",
        },
        {
          id: 2,
          prompt: "The judges ___ the film if it is too long.",
          choices: ["won't watch", "didn't watch", "wouldn't watch"],
          answer: "won't watch",
          hint: "First conditional negative result = won't + verb. won't watch!",
        },
        {
          id: 3,
          prompt: "If the weather is good tomorrow, they ___ the outdoor scenes.",
          choices: ["would film", "filmed", "will film"],
          answer: "will film",
          hint: "Real future possibility = will + verb. will film!",
        },
      ],
    },
    {
      id: 2,
      label: "Exercise 2",
      type: "Find the Mistake",
      icon: "🔍",
      storyPrompt: "Zara found some first conditional errors in her planning notes. Find and fix the mistake!",
      questions: [
        {
          id: 4,
          prompt: "If Zara ___ on time, the team will celebrate.",
          wrongSentence: "If Zara will finish on time, the team will celebrate.",
          wrongWord: "will finish",
          choices: ["will finish", "finishes", "finished"],
          answer: "finishes",
          hint: "In the IF clause use present simple — not will! If Zara finishes — not if Zara will finish!",
        },
        {
          id: 5,
          prompt: "The documentary will ___ the award if it is good enough.",
          wrongSentence: "The documentary will wins the award if it is good enough.",
          wrongWord: "wins",
          choices: ["wins", "win", "winning"],
          answer: "win",
          hint: "After will use the base verb — no -s! will win — not will wins!",
        },
        {
          id: 6,
          prompt: "If the battery dies, Zara ___ use the spare.",
          wrongSentence: "If the battery dies, Zara would use the spare.",
          wrongWord: "would",
          choices: ["would", "will", "might"],
          answer: "will",
          hint: "First conditional uses WILL not WOULD for the result!",
        },
      ],
    },
    {
      id: 3,
      label: "Exercise 3",
      type: "Fill in the Blank",
      icon: "✏️",
      storyPrompt: "Zara is writing her final first conditional plans for the documentary. Fill in the blank!",
      questions: [
        {
          id: 7,
          prompt: "If the interview goes well, Zara ___ it in the final cut.",
          choices: ["would include", "will include", "includes"],
          answer: "will include",
          hint: "Real future possibility — use WILL!",
        },
        {
          id: 8,
          prompt: "The film ___ make sense if Zara does not add narration.",
          choices: ["won't", "didn't", "wouldn't"],
          answer: "won't",
          hint: "Negative first conditional result — use WON'T!",
        },
        {
          id: 9,
          prompt: "If ___ tonight, they will cancel the outdoor shoot.",
          choices: ["it rains", "it will rain", "it rained"],
          answer: "it rains",
          hint: "IF clause uses present simple — not will or past!",
        },
      ],
    },
  ],
};

export const allQuestionsB2Topic3 = lessonB2Topic3.exercises.flatMap((ex) =>
  ex.questions.map((q) => ({
    ...q,
    exerciseLabel:       ex.label,
    exerciseType:        ex.type,
    exerciseIcon:        ex.icon,
    exerciseId:          ex.id,
    exerciseStoryPrompt: ex.storyPrompt,
  }))
);

// ─── B2 Topic 4 — Second conditional ─────────────────────────────────────────

export const lessonB2Topic4 = {
  id: "b2-4",
  level: "B2",
  title: "Second Conditional",
  subtitle: "Hypothetical situations with if and would!",
  character: "Zara",
  characterEmoji: "🎬",
  story:
    "Zara is daydreaming about what she would do if things were different. The second conditional is perfect for imagining hypothetical situations!",
  rule:
    "We use the **second conditional** for **HYPOTHETICAL or UNLIKELY** situations — things that are not true now or are imaginary. Structure: **IF + past simple, WOULD + base verb**. If I had more time, I would make a longer documentary. The situation is NOT real — Zara does not have more time. For the verb to be we always use **WERE** in formal writing: If I were a professional director, I would make films for a living. Note: First = real possibility. Second = hypothetical or unlikely.",
  examples: [
    { sentence: "If Zara **HAD** a professional camera, she **WOULD** make a feature film.", note: "if + past simple, would + base verb" },
    { sentence: "She **WOULD** enter more competitions if she **WEREN'T** so busy.",          note: "were not was in second conditional" },
    { sentence: "If I **WERE** in your position, I **WOULD** ask for more help.",             note: "were not was with to be" },
  ],
  feedback: {
    correct: (answer) => `Correct. "${answer}" is right. Good second conditional structure. ✅`,
    wrong:   (answer) => `The answer is "${answer}". If + past simple, would + base verb. Use were not was with to be. 💡`,
  },
  scoreMessages: {
    perfect:  { emoji: "🎬", text: "9 out of 9. Second conditional mastered. Zara would be impressed." },
    good:     { emoji: "🎬", text: "Solid. The structure is clear — check the ones you missed." },
    tryAgain: { emoji: "🎬", text: "If + past simple, would + verb. Were not was. Try again." },
  },
  exercises: [
    {
      id: 1,
      label: "Exercise 1",
      type: "Multiple Choice",
      icon: "🎯",
      storyPrompt: "Zara is daydreaming about what she would do if things were different. Pick the right word!",
      questions: [
        {
          id: 1,
          prompt: "If Zara ___ more time, she would add more interviews.",
          choices: ["has", "had", "would have"],
          answer: "had",
          hint: "Second conditional IF clause = past simple. had — not has!",
        },
        {
          id: 2,
          prompt: "She ___ enter the national competition if she were older.",
          choices: ["will", "would", "could will"],
          answer: "would",
          hint: "Second conditional result = would + base verb. would enter!",
        },
        {
          id: 3,
          prompt: "If I ___ you, I would ask the teacher for feedback.",
          choices: ["am", "was", "were"],
          answer: "were",
          hint: "With to be in second conditional use WERE — not was!",
        },
      ],
    },
    {
      id: 2,
      label: "Exercise 2",
      type: "Find the Mistake",
      icon: "🔍",
      storyPrompt: "Zara found some second conditional errors in her script notes. Find and fix the mistake!",
      questions: [
        {
          id: 4,
          prompt: "If Zara ___ a bigger budget, she would hire a professional editor.",
          wrongSentence: "If Zara would have a bigger budget, she would hire a professional editor.",
          wrongWord: "would have",
          choices: ["would have", "had", "has"],
          answer: "had",
          hint: "IF clause uses past simple — not would! If Zara had — not if Zara would have!",
        },
        {
          id: 5,
          prompt: "She would ___ a longer film if she had more footage.",
          wrongSentence: "She would makes a longer film if she had more footage.",
          wrongWord: "makes",
          choices: ["makes", "make", "making"],
          answer: "make",
          hint: "After would use the base verb — no -s! would make — not would makes!",
        },
        {
          id: 6,
          prompt: "If I ___ a famous director, I would travel the world.",
          wrongSentence: "If I was a famous director, I would travel the world.",
          wrongWord: "was",
          choices: ["was", "were", "am"],
          answer: "were",
          hint: "In second conditional use WERE not WAS with to be!",
        },
      ],
    },
    {
      id: 3,
      label: "Exercise 3",
      type: "Fill in the Blank",
      icon: "✏️",
      storyPrompt: "Zara is imagining how things could be different for her documentary. Fill in the blank!",
      questions: [
        {
          id: 7,
          prompt: "If Zara ___ a professional studio, the quality would be amazing.",
          choices: ["has", "had", "would have"],
          answer: "had",
          hint: "IF clause = past simple. had!",
        },
        {
          id: 8,
          prompt: "The documentary ___ win every award if it were perfect.",
          choices: ["will", "would", "could will"],
          answer: "would",
          hint: "Second conditional result = would + base verb!",
        },
        {
          id: 9,
          prompt: "If I ___ Zara, I would be very proud of this work.",
          choices: ["am", "was", "were"],
          answer: "were",
          hint: "Use WERE with to be in second conditional!",
        },
      ],
    },
  ],
};

export const allQuestionsB2Topic4 = lessonB2Topic4.exercises.flatMap((ex) =>
  ex.questions.map((q) => ({
    ...q,
    exerciseLabel:       ex.label,
    exerciseType:        ex.type,
    exerciseIcon:        ex.icon,
    exerciseId:          ex.id,
    exerciseStoryPrompt: ex.storyPrompt,
  }))
);

// ─── B2 Topic 5 — Third conditional ──────────────────────────────────────────

export const lessonB2Topic5 = {
  id: "b2-5",
  level: "B2",
  title: "Third Conditional",
  subtitle: "Imagining different past outcomes!",
  character: "Zara",
  characterEmoji: "🎬",
  story:
    "The film festival is over. Zara is reflecting on what she could have done differently. The third conditional helps her think about past situations that cannot be changed.",
  rule:
    "We use the **third conditional** to talk about **IMAGINARY PAST** situations — things that did NOT happen and cannot be changed now. Structure: **IF + past perfect (had + past participle), WOULD HAVE + past participle**. If Zara had started earlier, she would have had more time. The situation is impossible to change — it is in the past. Compare: First = real future. Second = hypothetical present. Third = impossible past.",
  examples: [
    { sentence: "If Zara **HAD SUBMITTED** the film earlier, she **WOULD HAVE WON** first prize.",     note: "if + past perfect, would have + past participle" },
    { sentence: "She **WOULD HAVE MADE** a longer documentary if she **HAD HAD** more footage.",        note: "both parts use perfect forms" },
    { sentence: "If the camera **HAD NOT BROKEN**, the final scene **WOULD HAVE BEEN** perfect.",       note: "negative third conditional" },
  ],
  feedback: {
    correct: (answer) => `Correct. "${answer}" is right. Third conditional is genuinely complex — well done. ✅`,
    wrong:   (answer) => `The answer is "${answer}". If + had + past participle, would have + past participle. Both parts need perfect forms. 💡`,
  },
  scoreMessages: {
    perfect:  { emoji: "🎬", text: "9 out of 9. Third conditional is one of the hardest structures in English. This score is impressive." },
    good:     { emoji: "🎬", text: "Solid. This is complex grammar — the ones you got right show real understanding." },
    tryAgain: { emoji: "🎬", text: "This takes time. If + past perfect, would have + past participle. Try again." },
  },
  exercises: [
    {
      id: 1,
      label: "Exercise 1",
      type: "Multiple Choice",
      icon: "🎯",
      storyPrompt: "The festival is over. Zara is reflecting on what she could have done differently. Pick the right word!",
      questions: [
        {
          id: 1,
          prompt: "If Zara ___ more time, she would have added more scenes.",
          choices: ["had had", "has had", "would have had"],
          answer: "had had",
          hint: "Third conditional IF clause = past perfect. had had — not has had!",
        },
        {
          id: 2,
          prompt: "The documentary ___ first prize if the judges had seen it.",
          choices: ["would win", "will have won", "would have won"],
          answer: "would have won",
          hint: "Third conditional result = would have + past participle. would have won!",
        },
        {
          id: 3,
          prompt: "If the battery ___ died, the final interview would have been perfect.",
          choices: ["hadn't", "didn't", "wouldn't have"],
          answer: "hadn't",
          hint: "Negative third conditional IF clause = hadn't + past participle. hadn't died!",
        },
      ],
    },
    {
      id: 2,
      label: "Exercise 2",
      type: "Find the Mistake",
      icon: "🔍",
      storyPrompt: "Zara found some third conditional errors in her reflection notes. Find and fix the mistake!",
      questions: [
        {
          id: 4,
          prompt: "If Zara had practiced more, she ___ the award.",
          wrongSentence: "If Zara had practiced more, she would win the award.",
          wrongWord: "would win",
          choices: ["would win", "would have won", "will have won"],
          answer: "would have won",
          hint: "Third conditional result = would HAVE + past participle — not just would + verb!",
        },
        {
          id: 5,
          prompt: "If she ___ earlier, she would have finished on time.",
          wrongSentence: "If she has started earlier, she would have finished on time.",
          wrongWord: "has started",
          choices: ["has started", "had started", "was starting"],
          answer: "had started",
          hint: "IF clause needs past perfect — had started, not has started!",
        },
        {
          id: 6,
          prompt: "The film would have been better if Zara ___ more time.",
          wrongSentence: "The film would have been better if Zara would have had more time.",
          wrongWord: "would have had",
          choices: ["would have had", "had had", "has had"],
          answer: "had had",
          hint: "IF clause uses past perfect — had had, not would have had!",
        },
      ],
    },
    {
      id: 3,
      label: "Exercise 3",
      type: "Fill in the Blank",
      icon: "✏️",
      storyPrompt: "Zara is writing her post-festival reflection on how things could have gone differently. Fill in the blank!",
      questions: [
        {
          id: 7,
          prompt: "If the judges ___ the full documentary, Zara would have won.",
          choices: ["had seen", "have seen", "would have seen"],
          answer: "had seen",
          hint: "IF clause = past perfect. had seen!",
        },
        {
          id: 8,
          prompt: "Zara ___ more confident if she had practised her speech.",
          choices: ["would be", "would have been", "will have been"],
          answer: "would have been",
          hint: "Third conditional result = would have + past participle. would have been!",
        },
        {
          id: 9,
          prompt: "The outdoor scenes ___ better if it hadn't rained.",
          choices: ["would be", "will have been", "would have been"],
          answer: "would have been",
          hint: "Third conditional result = would have + past participle!",
        },
      ],
    },
  ],
};

export const allQuestionsB2Topic5 = lessonB2Topic5.exercises.flatMap((ex) =>
  ex.questions.map((q) => ({
    ...q,
    exerciseLabel:       ex.label,
    exerciseType:        ex.type,
    exerciseIcon:        ex.icon,
    exerciseId:          ex.id,
    exerciseStoryPrompt: ex.storyPrompt,
  }))
);

// ─── B2 Topic 6 — Wish sentences ─────────────────────────────────────────────

export const lessonB2Topic6 = {
  id: "b2-6",
  level: "B2",
  title: "Wish Sentences",
  subtitle: "Express regrets and wishes about reality!",
  character: "Zara",
  characterEmoji: "🎬",
  story:
    "Zara is reflecting on her documentary experience. She has some regrets and some wishes about how things could be different.",
  rule:
    "We use **WISH** to express regrets or desires about things that are not true. **WISH + past simple** = wish about the present: I wish I had more time. (I do not have more time now.) **WISH + past perfect** = wish about the past — a regret: I wish I had started earlier. (I did not start earlier — I cannot change it.) **WISH + would** = wish for something to change in the future: I wish the judges would watch the full film. Note: We use **WERE** not WAS after wish: I wish I were taller.",
  examples: [
    { sentence: "Zara **WISHES** she **HAD** a bigger budget right now.",                      note: "wish + past simple = present wish" },
    { sentence: "She **WISHES** she **HAD STARTED** filming earlier — it is too late now.",    note: "wish + past perfect = past regret" },
    { sentence: "I **WISH** the weather **WOULD** improve so we could film outside.",           note: "wish + would = future wish" },
  ],
  feedback: {
    correct: (answer) => `Correct. "${answer}" is right. Good use of wish. ✅`,
    wrong:   (answer) => `The answer is "${answer}". Present wish = past simple. Past wish = past perfect. Future wish = would. Always use were not was. 💡`,
  },
  scoreMessages: {
    perfect:  { emoji: "🎬", text: "9 out of 9. Wish sentences are subtle — this score shows real precision." },
    good:     { emoji: "🎬", text: "Solid. The distinctions between present, past, and future wishes are clear." },
    tryAgain: { emoji: "🎬", text: "Wish + past simple for now. Wish + past perfect for regrets. Wish + would for future. Try again." },
  },
  exercises: [
    {
      id: 1,
      label: "Exercise 1",
      type: "Multiple Choice",
      icon: "🎯",
      storyPrompt: "Zara is reflecting on her documentary experience and making wishes. Pick the right word!",
      questions: [
        {
          id: 1,
          prompt: "Zara wishes she ___ more time to edit the documentary.",
          choices: ["has", "had", "would have"],
          answer: "had",
          hint: "Wish about the present = wish + past simple. had — not has!",
        },
        {
          id: 2,
          prompt: "She wishes she ___ submitted the film to more festivals.",
          choices: ["had", "would have", "has"],
          answer: "had",
          hint: "Wish about the past = wish + past perfect. had submitted!",
        },
        {
          id: 3,
          prompt: "I wish the judges ___ give more detailed feedback.",
          choices: ["would", "will", "had"],
          answer: "would",
          hint: "Wish for future change = wish + would. would give!",
        },
      ],
    },
    {
      id: 2,
      label: "Exercise 2",
      type: "Find the Mistake",
      icon: "🔍",
      storyPrompt: "Zara found wish sentence errors in her journal. Find and fix the mistake!",
      questions: [
        {
          id: 4,
          prompt: "Zara wishes she ___ a professional camera.",
          wrongSentence: "Zara wishes she has a professional camera.",
          wrongWord: "has",
          choices: ["has", "had", "would have"],
          answer: "had",
          hint: "Wish about the present = past simple. She wishes she had — not she wishes she has!",
        },
        {
          id: 5,
          prompt: "She wishes she ___ filming earlier.",
          wrongSentence: "She wishes she started filming earlier.",
          wrongWord: "started",
          choices: ["started", "had started", "has started"],
          answer: "had started",
          hint: "Wish about the past = past perfect. she wishes she had started — not just started!",
        },
        {
          id: 6,
          prompt: "I wish I ___ a professional filmmaker.",
          wrongSentence: "I wish I was a professional filmmaker.",
          wrongWord: "was",
          choices: ["was", "were", "am"],
          answer: "were",
          hint: "After wish use WERE not WAS with to be!",
        },
      ],
    },
    {
      id: 3,
      label: "Exercise 3",
      type: "Fill in the Blank",
      icon: "✏️",
      storyPrompt: "Zara is writing her final wishes and regrets in her director's journal. Fill in the blank!",
      questions: [
        {
          id: 7,
          prompt: "Zara wishes she ___ the interview differently.",
          choices: ["had handled", "handled", "has handled"],
          answer: "had handled",
          hint: "Regret about the past = wish + past perfect. had handled!",
        },
        {
          id: 8,
          prompt: "She wishes she ___ more confident during the presentation.",
          choices: ["is", "was", "were"],
          answer: "were",
          hint: "Wish about the present + to be = wish + were. were — not was!",
        },
        {
          id: 9,
          prompt: "I wish the festival ___ give student filmmakers more support.",
          choices: ["had", "will", "would"],
          answer: "would",
          hint: "Wish for future change = wish + would!",
        },
      ],
    },
  ],
};

export const allQuestionsB2Topic6 = lessonB2Topic6.exercises.flatMap((ex) =>
  ex.questions.map((q) => ({
    ...q,
    exerciseLabel:       ex.label,
    exerciseType:        ex.type,
    exerciseIcon:        ex.icon,
    exerciseId:          ex.id,
    exerciseStoryPrompt: ex.storyPrompt,
  }))
);

// ─── B2 Topic 7 — Reported speech ────────────────────────────────────────────

export const lessonB2Topic7 = {
  id: "b2-7",
  level: "B2",
  title: "Reported Speech",
  subtitle: "Say what someone else said!",
  character: "Zara",
  characterEmoji: "🎬",
  story:
    "Zara is writing up her documentary notes. She needs to report what people said to her during the interviews without quoting them directly.",
  rule:
    "**Reported speech** (also called indirect speech) is how we say what someone else said. We change the tense back one step — this is called **backshift**. Present simple → **past simple**: He said he LIKED the film. Present continuous → **past continuous**: She said she WAS WORKING on it. Will → **would**: He said he WOULD help. Can → **could**: She said she COULD do it. We also change pronouns: I → he/she. We remove quotation marks and use **said that**.",
  examples: [
    { sentence: "The judge said the documentary **WAS** very impressive.",          note: "is → was (backshift)" },
    { sentence: "Zara's teacher said she **HAD WORKED** incredibly hard.",           note: "past simple → past perfect" },
    { sentence: "The interviewee said he **WOULD WATCH** the final film.",            note: "will → would (backshift)" },
  ],
  feedback: {
    correct: (answer) => `Correct. "${answer}" is right. Good reported speech. ✅`,
    wrong:   (answer) => `The answer is "${answer}". Remember the tense shift: present → past, will → would, can → could. 💡`,
  },
  scoreMessages: {
    perfect:  { emoji: "🎬", text: "9 out of 9. Reported speech is tricky — this score is impressive." },
    good:     { emoji: "🎬", text: "Solid. The tense shifts are mostly clear. Check the ones you missed." },
    tryAgain: { emoji: "🎬", text: "Tense shift back one step. Present → past. Will → would. Can → could. Try again." },
  },
  exercises: [
    {
      id: 1,
      label: "Exercise 1",
      type: "Multiple Choice",
      icon: "🎯",
      storyPrompt: "Zara is writing up her interview notes in reported speech. Pick the right word!",
      questions: [
        {
          id: 1,
          prompt: "Direct: 'I like your documentary.' — Reported: He said he ___ my documentary.",
          choices: ["likes", "liked", "would like"],
          answer: "liked",
          hint: "Present simple → past simple in reported speech. liked!",
        },
        {
          id: 2,
          prompt: "Direct: 'I will come to the festival.' — Reported: She said she ___ to the festival.",
          choices: ["will come", "would come", "comes"],
          answer: "would come",
          hint: "Will → would in reported speech. would come!",
        },
        {
          id: 3,
          prompt: "Direct: 'I can help with the editing.' — Reported: He said he ___ with the editing.",
          choices: ["can help", "could help", "will help"],
          answer: "could help",
          hint: "Can → could in reported speech. could help!",
        },
      ],
    },
    {
      id: 2,
      label: "Exercise 2",
      type: "Find the Mistake",
      icon: "🔍",
      storyPrompt: "Zara found reported speech errors in her documentary notes. Find and fix the mistake!",
      questions: [
        {
          id: 4,
          prompt: "The judge said that the film ___ very original.",
          wrongSentence: "The judge said that the film is very original.",
          wrongWord: "is",
          choices: ["is", "was", "will be"],
          answer: "was",
          hint: "In reported speech present simple becomes past simple. was — not is!",
        },
        {
          id: 5,
          prompt: "Zara's friend said she ___ watch the documentary.",
          wrongSentence: "Zara's friend said she will watch the documentary.",
          wrongWord: "will",
          choices: ["will", "would", "could"],
          answer: "would",
          hint: "In reported speech will becomes would. would — not will!",
        },
        {
          id: 6,
          prompt: "The teacher said Zara ___ incredibly hard.",
          wrongSentence: "The teacher said Zara works incredibly hard.",
          wrongWord: "works",
          choices: ["works", "worked", "is working"],
          answer: "worked",
          hint: "In reported speech present simple becomes past simple. worked — not works!",
        },
      ],
    },
    {
      id: 3,
      label: "Exercise 3",
      type: "Fill in the Blank",
      icon: "✏️",
      storyPrompt: "Zara is finishing her documentary report using reported speech. Fill in the blank!",
      questions: [
        {
          id: 7,
          prompt: "The interviewee said he ___ the neighbourhood for thirty years.",
          choices: ["knows", "known", "had known"],
          answer: "had known",
          hint: "Past simple in direct speech → past perfect in reported speech. had known!",
        },
        {
          id: 8,
          prompt: "Zara's teacher said the documentary ___ her very proud.",
          choices: ["makes", "made", "had made"],
          answer: "made",
          hint: "Present simple → past simple in reported speech. made!",
        },
        {
          id: 9,
          prompt: "The judge said Zara ___ a great future in filmmaking.",
          choices: ["has", "had", "would have"],
          answer: "had",
          hint: "Present simple → past simple in reported speech. had!",
        },
      ],
    },
  ],
};

export const allQuestionsB2Topic7 = lessonB2Topic7.exercises.flatMap((ex) =>
  ex.questions.map((q) => ({
    ...q,
    exerciseLabel:       ex.label,
    exerciseType:        ex.type,
    exerciseIcon:        ex.icon,
    exerciseId:          ex.id,
    exerciseStoryPrompt: ex.storyPrompt,
  }))
);

// ─── B2 Topic 8 — Past perfect ────────────────────────────────────────────────

export const lessonB2Topic8 = {
  id: "b2-8",
  level: "B2",
  title: "Past Perfect",
  subtitle: "Talk about what had happened before another past event!",
  character: "Zara",
  characterEmoji: "🎬",
  story:
    "Zara is editing her documentary and writing voice-over narration. She needs to describe events that happened before other past events.",
  rule:
    "We use the **past perfect** to talk about an action that happened **BEFORE** another action in the past. Structure: **HAD + past participle**. By the time the festival started, Zara HAD ALREADY finished editing. The past perfect makes the sequence of events clear — which thing happened first. We often use it with: **by the time**, **already**, **after**, **before**, **when**, **because**.",
  examples: [
    { sentence: "By the time the judges arrived, Zara **HAD SET UP** all the equipment.",    note: "had + past participle = the earlier action" },
    { sentence: "She submitted the film after she **HAD EDITED** it three times.",            note: "editing happened before submitting" },
    { sentence: "Zara realised she **HAD FORGOTTEN** to add subtitles.",                      note: "forgetting happened before realising" },
  ],
  feedback: {
    correct: (answer) => `Correct. "${answer}" is right. Good use of past perfect. ✅`,
    wrong:   (answer) => `The answer is "${answer}". Past perfect = had + past participle. Use it for the action that happened first. 💡`,
  },
  scoreMessages: {
    perfect:  { emoji: "🎬", text: "9 out of 9. Past perfect shows real grammatical sophistication." },
    good:     { emoji: "🎬", text: "Solid. The sequence of events is clear in most answers." },
    tryAgain: { emoji: "🎬", text: "Had + past participle for the action that happened first. Try again." },
  },
  exercises: [
    {
      id: 1,
      label: "Exercise 1",
      type: "Multiple Choice",
      icon: "🎯",
      storyPrompt: "Zara is narrating what had already happened before key moments in her documentary. Pick the right word!",
      questions: [
        {
          id: 1,
          prompt: "By the time Zara arrived, the ceremony ___.",
          choices: ["already started", "had already started", "has already started"],
          answer: "had already started",
          hint: "The ceremony started BEFORE Zara arrived. Use past perfect — had already started!",
        },
        {
          id: 2,
          prompt: "Zara submitted the film after she ___ it three times.",
          choices: ["edited", "has edited", "had edited"],
          answer: "had edited",
          hint: "Editing happened BEFORE submitting. Use past perfect — had edited!",
        },
        {
          id: 3,
          prompt: "She realised she ___ to charge the camera battery.",
          choices: ["forgot", "has forgotten", "had forgotten"],
          answer: "had forgotten",
          hint: "Forgetting happened BEFORE she realised. Use past perfect — had forgotten!",
        },
      ],
    },
    {
      id: 2,
      label: "Exercise 2",
      type: "Find the Mistake",
      icon: "🔍",
      storyPrompt: "Zara found past perfect errors in her voice-over script. Find and fix the mistake!",
      questions: [
        {
          id: 4,
          prompt: "By the time the judges saw the film, Zara ___.",
          wrongSentence: "By the time the judges saw the film, Zara already left.",
          wrongWord: "already left",
          choices: ["already left", "had already left", "has already left"],
          answer: "had already left",
          hint: "Leaving happened before the judges saw it. Use past perfect — had already left!",
        },
        {
          id: 5,
          prompt: "Zara felt proud because she ___ so hard.",
          wrongSentence: "Zara felt proud because she worked so hard.",
          wrongWord: "worked",
          choices: ["worked", "had worked", "was working"],
          answer: "had worked",
          hint: "The hard work happened before the feeling of pride. Use past perfect — had worked!",
        },
        {
          id: 6,
          prompt: "After Zara ___ editing, she watched the film back.",
          wrongSentence: "After Zara has finished editing, she watched the film back.",
          wrongWord: "has finished",
          choices: ["has finished", "had finished", "finished"],
          answer: "had finished",
          hint: "Finishing happened before watching — both in the past. Use past perfect — had finished!",
        },
      ],
    },
    {
      id: 3,
      label: "Exercise 3",
      type: "Fill in the Blank",
      icon: "✏️",
      storyPrompt: "Zara is writing the final narration for her documentary. Fill in the blank!",
      questions: [
        {
          id: 7,
          prompt: "Zara was exhausted because she ___ up all night editing.",
          choices: ["stayed", "has stayed", "had stayed"],
          answer: "had stayed",
          hint: "Staying up happened before feeling exhausted. Use past perfect — had stayed!",
        },
        {
          id: 8,
          prompt: "By the time the film festival began, Zara ___ her documentary four times.",
          choices: ["watched", "has watched", "had watched"],
          answer: "had watched",
          hint: "Watching happened before the festival began. Use past perfect — had watched!",
        },
        {
          id: 9,
          prompt: "She noticed that she ___ to include the credits.",
          choices: ["forgot", "has forgotten", "had forgotten"],
          answer: "had forgotten",
          hint: "Forgetting happened before noticing. Use past perfect — had forgotten!",
        },
      ],
    },
  ],
};

export const allQuestionsB2Topic8 = lessonB2Topic8.exercises.flatMap((ex) =>
  ex.questions.map((q) => ({
    ...q,
    exerciseLabel:       ex.label,
    exerciseType:        ex.type,
    exerciseIcon:        ex.icon,
    exerciseId:          ex.id,
    exerciseStoryPrompt: ex.storyPrompt,
  }))
);

// ─── B2 Topic 9 — Gerunds and infinitives ────────────────────────────────────

export const lessonB2Topic9 = {
  id: "b2-9",
  level: "B2",
  title: "Gerunds and Infinitives",
  subtitle: "When to use doing versus to do!",
  character: "Zara",
  characterEmoji: "🎬",
  story:
    "Zara is writing her director's notes for the documentary. She keeps having to decide whether to use doing or to do — gerunds versus infinitives!",
  rule:
    "A **GERUND** is a verb used as a noun — verb + ing: Filming is exciting. I enjoy editing. An **INFINITIVE** is to + base verb: I want to film. I decided to edit. Verbs that take gerunds: **enjoy, finish, avoid, consider, keep, suggest**. Verbs that take infinitives: **want, decide, hope, plan, agree, refuse, manage**. Some take both with different meanings: I stopped **filming**. (I was filming and stopped.) I stopped **to film**. (I stopped in order to film.)",
  examples: [
    { sentence: "Zara enjoys **INTERVIEWING** people for her documentary.",         note: "enjoy + gerund (-ing)" },
    { sentence: "She decided **TO SUBMIT** the film to three festivals.",             note: "decide + infinitive (to)" },
    { sentence: "Zara managed **TO FINISH** the editing before the deadline.",        note: "manage + infinitive (to)" },
  ],
  feedback: {
    correct: (answer) => `Correct. "${answer}" is right. Good gerund and infinitive use. ✅`,
    wrong:   (answer) => `The answer is "${answer}". Enjoy, finish, avoid, keep, consider = gerund (-ing). Want, decide, hope, plan, manage = infinitive (to). 💡`,
  },
  scoreMessages: {
    perfect:  { emoji: "🎬", text: "9 out of 9. Gerunds and infinitives sorted. Zara would approve." },
    good:     { emoji: "🎬", text: "Solid. Most verb patterns are clear — check the ones you missed." },
    tryAgain: { emoji: "🎬", text: "Learn which verbs take -ing and which take to. Try again." },
  },
  exercises: [
    {
      id: 1,
      label: "Exercise 1",
      type: "Multiple Choice",
      icon: "🎯",
      storyPrompt: "Zara is writing her director's notes and choosing between -ing and to. Pick the right word!",
      questions: [
        {
          id: 1,
          prompt: "Zara enjoys ___ interesting people for her films.",
          choices: ["to interview", "interviewing", "interview"],
          answer: "interviewing",
          hint: "Enjoy is always followed by a gerund — verb + ing. enjoys interviewing!",
        },
        {
          id: 2,
          prompt: "She decided ___ the documentary in black and white.",
          choices: ["filming", "film", "to film"],
          answer: "to film",
          hint: "Decide is always followed by an infinitive — to + verb. decided to film!",
        },
        {
          id: 3,
          prompt: "Zara managed ___ all the interviews in one day.",
          choices: ["completing", "complete", "to complete"],
          answer: "to complete",
          hint: "Manage is always followed by an infinitive — to + verb. managed to complete!",
        },
      ],
    },
    {
      id: 2,
      label: "Exercise 2",
      type: "Find the Mistake",
      icon: "🔍",
      storyPrompt: "Zara found gerund and infinitive errors in her script. Find and fix the mistake!",
      questions: [
        {
          id: 4,
          prompt: "Zara finished ___ the documentary late at night.",
          wrongSentence: "Zara finished to edit the documentary late at night.",
          wrongWord: "to edit",
          choices: ["to edit", "editing", "edit"],
          answer: "editing",
          hint: "Finish is followed by a gerund — verb + ing. finished editing — not finished to edit!",
        },
        {
          id: 5,
          prompt: "She wants ___ more local residents.",
          wrongSentence: "She wants interviewing more local residents.",
          wrongWord: "interviewing",
          choices: ["interviewing", "to interview", "interview"],
          answer: "to interview",
          hint: "Want is followed by an infinitive — to + verb. wants to interview — not wants interviewing!",
        },
        {
          id: 6,
          prompt: "Zara avoided ___ music that was copyrighted.",
          wrongSentence: "Zara avoided to use music that was copyrighted.",
          wrongWord: "to use",
          choices: ["to use", "using", "use"],
          answer: "using",
          hint: "Avoid is followed by a gerund — verb + ing. avoided using — not avoided to use!",
        },
      ],
    },
    {
      id: 3,
      label: "Exercise 3",
      type: "Fill in the Blank",
      icon: "✏️",
      storyPrompt: "Zara is polishing the last lines of her director's notes. Fill in the blank!",
      questions: [
        {
          id: 7,
          prompt: "Zara considered ___ the documentary to a television station.",
          choices: ["to send", "send", "sending"],
          answer: "sending",
          hint: "Consider is followed by a gerund — verb + ing. considered sending!",
        },
        {
          id: 8,
          prompt: "She hopes ___ the festival next year with a new film.",
          choices: ["entering", "enter", "to enter"],
          answer: "to enter",
          hint: "Hope is followed by an infinitive — to + verb. hopes to enter!",
        },
        {
          id: 9,
          prompt: "Zara kept ___ the same scene until it was perfect.",
          choices: ["to reshoot", "reshoot", "reshooting"],
          answer: "reshooting",
          hint: "Keep is followed by a gerund — verb + ing. kept reshooting!",
        },
      ],
    },
  ],
};

export const allQuestionsB2Topic9 = lessonB2Topic9.exercises.flatMap((ex) =>
  ex.questions.map((q) => ({
    ...q,
    exerciseLabel:       ex.label,
    exerciseType:        ex.type,
    exerciseIcon:        ex.icon,
    exerciseId:          ex.id,
    exerciseStoryPrompt: ex.storyPrompt,
  }))
);

// ─── B2 Topic 10 — Linking words ──────────────────────────────────────────────

export const lessonB2Topic10 = {
  id: "b2-10",
  level: "B2",
  title: "Linking Words",
  subtitle: "Connect ideas with nevertheless, furthermore, and more!",
  character: "Zara",
  characterEmoji: "🎬",
  story:
    "Zara is polishing her final documentary script. She wants her writing to flow professionally and connect ideas clearly using sophisticated linking words.",
  rule:
    "Linking words connect ideas and show the relationship between them. **ADDITION**: Furthermore, In addition, Moreover — add more information. **CONTRAST**: Nevertheless, However, On the other hand — show contrast. **CAUSE AND EFFECT**: As a result, Therefore, Consequently — show results. **CONCESSION**: Although, Even though, Despite — admit something surprising. These are more formal than and, but, so — they are used in writing and formal speech.",
  examples: [
    { sentence: "The equipment was old. **NEVERTHELESS**, Zara produced an outstanding film.", note: "contrast — unexpected result" },
    { sentence: "The documentary was well researched. **FURTHERMORE**, it was beautifully filmed.", note: "addition — more positive information" },
    { sentence: "Zara worked extremely hard. **AS A RESULT**, the film won first prize.",          note: "cause and effect — result" },
  ],
  feedback: {
    correct: (answer) => `Correct. "${answer}" is the right linking word here. ✅`,
    wrong:   (answer) => `The answer is "${answer}". Nevertheless = contrast. Furthermore = addition. As a result = cause and effect. Therefore = result. 💡`,
  },
  scoreMessages: {
    perfect:  { emoji: "🎬", text: "9 out of 9. Your writing would flow beautifully with these linking words." },
    good:     { emoji: "🎬", text: "Solid. The relationships between ideas are mostly clear." },
    tryAgain: { emoji: "🎬", text: "Contrast = nevertheless. Addition = furthermore. Result = as a result. Try again." },
  },
  exercises: [
    {
      id: 1,
      label: "Exercise 1",
      type: "Multiple Choice",
      icon: "🎯",
      storyPrompt: "Zara is connecting ideas in her final documentary script. Pick the right linking word!",
      questions: [
        {
          id: 1,
          prompt: "The budget was very small. ___ the documentary looked professional.",
          choices: ["Furthermore", "Nevertheless", "Therefore"],
          answer: "Nevertheless",
          hint: "Small budget BUT looked professional — this is a contrast. Use NEVERTHELESS!",
        },
        {
          id: 2,
          prompt: "Zara interviewed twelve residents. ___ she filmed six different locations.",
          choices: ["Nevertheless", "As a result", "Furthermore"],
          answer: "Furthermore",
          hint: "We are adding more information. Use FURTHERMORE!",
        },
        {
          id: 3,
          prompt: "Zara practised her presentation every day. ___ she felt confident on the day.",
          choices: ["Nevertheless", "Furthermore", "As a result"],
          answer: "As a result",
          hint: "Practising caused confidence — this is a result. Use AS A RESULT!",
        },
      ],
    },
    {
      id: 2,
      label: "Exercise 2",
      type: "Find the Mistake",
      icon: "🔍",
      storyPrompt: "Zara found linking word errors in her script draft. Find and fix the mistake!",
      questions: [
        {
          id: 4,
          prompt: "The film was long. ___ the audience stayed until the end.",
          wrongSentence: "The film was long. Furthermore, the audience stayed until the end.",
          wrongWord: "Furthermore",
          choices: ["Furthermore", "Nevertheless", "Therefore"],
          answer: "Nevertheless",
          hint: "Long film BUT audience stayed — contrast. Use NEVERTHELESS not FURTHERMORE!",
        },
        {
          id: 5,
          prompt: "Zara worked hard. ___ she won the award.",
          wrongSentence: "Zara worked hard. Nevertheless, she won the award.",
          wrongWord: "Nevertheless",
          choices: ["Nevertheless", "As a result", "Furthermore"],
          answer: "As a result",
          hint: "Working hard CAUSED the award — result. Use AS A RESULT not NEVERTHELESS!",
        },
        {
          id: 6,
          prompt: "The documentary was moving. ___ it was informative.",
          wrongSentence: "The documentary was moving. As a result, it was informative.",
          wrongWord: "As a result",
          choices: ["As a result", "Furthermore", "Nevertheless"],
          answer: "Furthermore",
          hint: "We are adding a second positive quality — addition. Use FURTHERMORE not AS A RESULT!",
        },
      ],
    },
    {
      id: 3,
      label: "Exercise 3",
      type: "Fill in the Blank",
      icon: "✏️",
      storyPrompt: "Zara is polishing the conclusion of her documentary script. Fill in the blank!",
      questions: [
        {
          id: 7,
          prompt: "The camera broke on day two. ___ Zara borrowed one from the school.",
          choices: ["Furthermore", "Nevertheless", "Therefore"],
          answer: "Nevertheless",
          hint: "Camera broke BUT she found a solution — contrast. Use NEVERTHELESS!",
        },
        {
          id: 8,
          prompt: "Zara researched the topic for weeks. ___ her knowledge was impressive.",
          choices: ["Nevertheless", "As a result", "Furthermore"],
          answer: "As a result",
          hint: "Research CAUSED impressive knowledge — result. Use AS A RESULT!",
        },
        {
          id: 9,
          prompt: "The documentary won best film. ___ it was screened at two other festivals.",
          choices: ["As a result", "Nevertheless", "Furthermore"],
          answer: "Furthermore",
          hint: "We are adding another achievement. Use FURTHERMORE!",
        },
      ],
    },
  ],
};

export const allQuestionsB2Topic10 = lessonB2Topic10.exercises.flatMap((ex) =>
  ex.questions.map((q) => ({
    ...q,
    exerciseLabel:       ex.label,
    exerciseType:        ex.type,
    exerciseIcon:        ex.icon,
    exerciseId:          ex.id,
    exerciseStoryPrompt: ex.storyPrompt,
  }))
);
