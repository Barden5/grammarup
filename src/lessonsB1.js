// ─── B1 Topic 2 — Modal verbs: could, would, might ───────────────────────────

export const lessonB1Topic2 = {
  id: "b1-2",
  level: "B1",
  title: "Modal Verbs: Could, Would, Might",
  subtitle: "Express possibility and polite requests!",
  character: "Priya",
  characterEmoji: "🤖",
  story:
    "Priya's robotics team is brainstorming ideas for their next competition. Everyone has different suggestions and possibilities. Help Priya discuss what they could, would, and might do!",
  rule:
    "**COULD** = past ability or polite possibility: I could try a different approach. **WOULD** = hypothetical or polite requests: I would love to build that. Could you help me? **MIGHT** = something that is possible but not certain: It might work. We might win. Could = possible. Would = hypothetical or polite. Might = uncertain possibility.",
  examples: [
    { sentence: "Priya **COULD** redesign the wheels to make the robot faster.",      note: "could = polite possibility" },
    { sentence: "**WOULD** you be able to help us with the coding?",                  note: "would = polite request" },
    { sentence: "We **MIGHT** win if the robot completes all three challenges.",       note: "might = uncertain possibility" },
  ],
  feedback: {
    correct: (answer) => `Correct! "${answer}" fits here. Good thinking. ✅`,
    wrong:   (answer) => `Not quite. The answer is "${answer}". Could = possible or polite. Would = hypothetical or desire. Might = uncertain. 💡`,
  },
  scoreMessages: {
    perfect:  { emoji: "🏆", text: "Perfect score. You really understand modal verbs. Priya's team is impressed." },
    good:     { emoji: "🔧", text: "Solid work. You have got the main idea. Review the ones you missed." },
    tryAgain: { emoji: "💪", text: "Keep going — modals take practice. Re-read the explanation and try again." },
  },
  exercises: [
    {
      id: 1,
      label: "Exercise 1",
      type: "Multiple Choice",
      icon: "🎯",
      storyPrompt: "Priya's team is sharing ideas and possibilities for the competition. Pick the right modal verb!",
      questions: [
        {
          id: 1,
          prompt: "It ___ rain during the competition — we should have a backup plan.",
          choices: ["would", "could", "might"],
          answer: "might",
          hint: "We are not sure if it will rain. Use MIGHT for uncertain possibility!",
        },
        {
          id: 2,
          prompt: "___ you pass me the screwdriver please?",
          choices: ["Might", "Could", "Should"],
          answer: "Could",
          hint: "This is a polite request. Use COULD!",
        },
        {
          id: 3,
          prompt: "Priya ___ build a better robot if she had more time.",
          choices: ["might", "could", "would"],
          answer: "would",
          hint: "This is a hypothetical — if she had more time. Use WOULD!",
        },
      ],
    },
    {
      id: 2,
      label: "Exercise 2",
      type: "Find the Mistake",
      icon: "🔍",
      storyPrompt: "The team found some modal verb errors in their notes. Find and fix the mistake!",
      questions: [
        {
          id: 4,
          prompt: "It ___ be great fun — you should come to the competition!",
          wrongSentence: "It might be great fun — you should come to the competition!",
          wrongWord: "might",
          choices: ["might", "would", "could"],
          answer: "would",
          hint: "We are describing what it will be like — hypothetical. Use WOULD not MIGHT!",
        },
        {
          id: 5,
          prompt: "Priya ___ finish earlier if she started now.",
          wrongSentence: "Priya would finish earlier if she started now.",
          wrongWord: "would",
          choices: ["would", "could", "might"],
          answer: "could",
          hint: "This is about ability — she is able to finish. Use COULD not WOULD!",
        },
        {
          id: 6,
          prompt: "It ___ snow tomorrow — bring a coat just in case.",
          wrongSentence: "It would snow tomorrow — bring a coat just in case.",
          wrongWord: "would",
          choices: ["would", "could", "might"],
          answer: "might",
          hint: "We are not certain about the snow. Use MIGHT not WOULD!",
        },
      ],
    },
    {
      id: 3,
      label: "Exercise 3",
      type: "Fill in the Blank",
      icon: "✏️",
      storyPrompt: "Priya is writing up the team's plan of possibilities. Fill in the blank!",
      questions: [
        {
          id: 7,
          prompt: "Priya ___ win the competition if her robot works perfectly.",
          choices: ["might", "should", "would"],
          answer: "might",
          hint: "Not certain — possible but not sure. Use MIGHT!",
        },
        {
          id: 8,
          prompt: "___ you show me how the motor works?",
          choices: ["Might", "Would", "Could"],
          answer: "Could",
          hint: "This is a polite request. Use COULD!",
        },
        {
          id: 9,
          prompt: "I ___ love to join the robotics team next year!",
          choices: ["might", "could", "would"],
          answer: "would",
          hint: "This is a wish or desire. Use WOULD!",
        },
      ],
    },
  ],
};

export const allQuestionsB1Topic2 = lessonB1Topic2.exercises.flatMap((ex) =>
  ex.questions.map((q) => ({
    ...q,
    exerciseLabel:       ex.label,
    exerciseType:        ex.type,
    exerciseIcon:        ex.icon,
    exerciseId:          ex.id,
    exerciseStoryPrompt: ex.storyPrompt,
  }))
);

// ─── B1 Topic 3 — Superlatives ────────────────────────────────────────────────

export const lessonB1Topic3 = {
  id: "b1-3",
  level: "B1",
  title: "Superlatives",
  subtitle: "Say which is the biggest, best or most exciting!",
  character: "Priya",
  characterEmoji: "🤖",
  story:
    "It is competition day! Priya's team is comparing all the robots. Who built the biggest, fastest, most impressive robot of all?",
  rule:
    "We use **superlatives** to compare three or more things and say which is the most extreme. For short words add **-est**: big → **biggest**, fast → **fastest**, tall → **tallest**. For long words use **MOST**: **most** interesting, **most** difficult, **most** impressive. Always use **THE** before a superlative: THE biggest, THE most exciting.",
  examples: [
    { sentence: "Priya's robot is **THE FASTEST** in the competition.",      note: "short word → add -est" },
    { sentence: "That was **THE MOST DIFFICULT** challenge of the day.",      note: "long word → use most" },
    { sentence: "Our team built **THE BIGGEST** robot in the room.",          note: "short word → add -est" },
  ],
  feedback: {
    correct: (answer) => `Yes! "${answer}" is right! Great superlative! ✅`,
    wrong:   (answer) => `Almost! The answer is "${answer}". Short words add -est. Long words use most. Always use the! 💡`,
  },
  scoreMessages: {
    perfect:  { emoji: "🏆", text: "Perfect score! Priya's team is the best — and so are you!" },
    good:     { emoji: "🔧", text: "Solid work! Superlatives take practice. Keep going!" },
    tryAgain: { emoji: "💪", text: "Keep going! Short = -est. Long = most. Always use the. Try again!" },
  },
  exercises: [
    {
      id: 1,
      label: "Exercise 1",
      type: "Multiple Choice",
      icon: "🎯",
      storyPrompt: "It's competition day and Priya is comparing all the robots. Pick the right word!",
      questions: [
        {
          id: 1,
          prompt: "Priya's robot completed ___ course in the competition.",
          choices: ["the fastest", "the most fast", "the faster"],
          answer: "the fastest",
          hint: "Fast is a short word — add -est! the fastest!",
        },
        {
          id: 2,
          prompt: "This is ___ experiment we have ever done.",
          choices: ["the most exciting", "the excitingest", "the more exciting"],
          answer: "the most exciting",
          hint: "Exciting is a long word — use MOST! the most exciting!",
        },
        {
          id: 3,
          prompt: "That was ___ challenge of the whole competition.",
          choices: ["the difficulter", "the most difficult", "the difficultest"],
          answer: "the most difficult",
          hint: "Difficult is a long word — use MOST! the most difficult!",
        },
      ],
    },
    {
      id: 2,
      label: "Exercise 2",
      type: "Find the Mistake",
      icon: "🔍",
      storyPrompt: "Some superlative errors crept into the competition scoreboard. Find and fix the mistake!",
      questions: [
        {
          id: 4,
          prompt: "Priya's robot is ___ in the room.",
          wrongSentence: "Priya's robot is the most tall in the room.",
          wrongWord: "most tall",
          choices: ["most tall", "tallest", "taller"],
          answer: "tallest",
          hint: "Tall is a short word — add -est! the tallest — not the most tall!",
        },
        {
          id: 5,
          prompt: "That was ___ moment of the day.",
          wrongSentence: "That was the impressivest moment of the day.",
          wrongWord: "impressivest",
          choices: ["impressivest", "most impressive", "more impressive"],
          answer: "most impressive",
          hint: "Impressive is a long word — use MOST! the most impressive — not impressivest!",
        },
        {
          id: 6,
          prompt: "Our robot was ___ of all the robots.",
          wrongSentence: "Our robot was the faster of all the robots.",
          wrongWord: "faster",
          choices: ["faster", "fastest", "most fast"],
          answer: "fastest",
          hint: "We are comparing more than two — use the superlative! the fastest — not the faster!",
        },
      ],
    },
    {
      id: 3,
      label: "Exercise 3",
      type: "Fill in the Blank",
      icon: "✏️",
      storyPrompt: "Priya is finishing her competition results summary. Fill in the blank!",
      questions: [
        {
          id: 7,
          prompt: "Priya built ___ robot in the whole school.",
          choices: ["the most small", "the smallest", "the smaller"],
          answer: "the smallest",
          hint: "Small is a short word. Add -est! the smallest!",
        },
        {
          id: 8,
          prompt: "That was ___ day of Priya's life.",
          choices: ["the excitingest", "the most exciting", "the more exciting"],
          answer: "the most exciting",
          hint: "Exciting is a long word. Use MOST! the most exciting!",
        },
        {
          id: 9,
          prompt: "Priya's team scored ___ points of all the teams.",
          choices: ["the most", "the more", "the much"],
          answer: "the most",
          hint: "We use THE MOST with nouns like points!",
        },
      ],
    },
  ],
};

export const allQuestionsB1Topic3 = lessonB1Topic3.exercises.flatMap((ex) =>
  ex.questions.map((q) => ({
    ...q,
    exerciseLabel:       ex.label,
    exerciseType:        ex.type,
    exerciseIcon:        ex.icon,
    exerciseId:          ex.id,
    exerciseStoryPrompt: ex.storyPrompt,
  }))
);

// ─── B1 Topic 4 — Compound sentences ─────────────────────────────────────────

export const lessonB1Topic4 = {
  id: "b1-4",
  level: "B1",
  title: "Compound Sentences",
  subtitle: "Connect ideas with because, although, however!",
  character: "Priya",
  characterEmoji: "🤖",
  story:
    "Priya is writing a report about the robotics competition. She wants to connect her ideas clearly and make her writing more interesting.",
  rule:
    "A compound sentence joins two ideas using a conjunction. **BECAUSE** gives a reason: Priya won because her robot was fast. **ALTHOUGH** shows contrast between two ideas: Although it was difficult, Priya finished. **HOWEVER** also shows contrast but starts a new sentence: The robot was slow. However, it was very accurate. **SO** shows a result: The battery died so the robot stopped.",
  examples: [
    { sentence: "Priya practiced every day **BECAUSE** she wanted to win.",           note: "because = reason" },
    { sentence: "**ALTHOUGH** the challenge was hard, the team did not give up.",      note: "although = contrast in one sentence" },
    { sentence: "The robot lost power. **HOWEVER**, the team still finished the course.", note: "however = contrast between two sentences" },
  ],
  feedback: {
    correct: (answer) => `Correct! "${answer}" works here. Great sentence structure. ✅`,
    wrong:   (answer) => `Not quite. The answer is "${answer}". Because = reason. Although = contrast in one sentence. However = contrast in two sentences. 💡`,
  },
  scoreMessages: {
    perfect:  { emoji: "🏆", text: "Perfect score. Priya's report is going to be excellent!" },
    good:     { emoji: "🔧", text: "Solid work! Conjunctions make writing flow — keep practicing." },
    tryAgain: { emoji: "💪", text: "Keep going! Because, although, however — try again." },
  },
  exercises: [
    {
      id: 1,
      label: "Exercise 1",
      type: "Multiple Choice",
      icon: "🎯",
      storyPrompt: "Priya is writing her competition report using connecting words. Pick the right word!",
      questions: [
        {
          id: 1,
          prompt: "Priya was nervous ___ she had never competed before.",
          choices: ["although", "however", "because"],
          answer: "because",
          hint: "We are giving a reason why she was nervous. Use BECAUSE!",
        },
        {
          id: 2,
          prompt: "___ the robot was slow, it completed every challenge.",
          choices: ["Because", "Although", "However"],
          answer: "Although",
          hint: "We are showing a contrast — slow but completed. Use ALTHOUGH!",
        },
        {
          id: 3,
          prompt: "The first attempt failed. ___ the team did not give up.",
          choices: ["Although", "Because", "However"],
          answer: "However",
          hint: "We are showing contrast between two separate sentences. Use HOWEVER!",
        },
      ],
    },
    {
      id: 2,
      label: "Exercise 2",
      type: "Find the Mistake",
      icon: "🔍",
      storyPrompt: "Some connecting words in Priya's report are wrong. Find and fix the mistake!",
      questions: [
        {
          id: 4,
          prompt: "Priya won ___ she practiced every day.",
          wrongSentence: "Priya won although she practiced every day.",
          wrongWord: "although",
          choices: ["although", "because", "however"],
          answer: "because",
          hint: "Practicing every day is the REASON she won. Use BECAUSE not ALTHOUGH!",
        },
        {
          id: 5,
          prompt: "___ the robot was heavy, it moved quickly.",
          wrongSentence: "Because the robot was heavy, it moved quickly.",
          wrongWord: "Because",
          choices: ["Because", "Although", "However"],
          answer: "Although",
          hint: "Heavy and moving quickly is a contrast. Use ALTHOUGH not BECAUSE!",
        },
        {
          id: 6,
          prompt: "The battery ran out ___ the robot stopped.",
          wrongSentence: "The battery ran out but the robot kept going.",
          wrongWord: "but",
          choices: ["but", "so", "although"],
          answer: "so",
          hint: "Battery running out caused the robot to stop — that is a result. Use SO not BUT!",
        },
      ],
    },
    {
      id: 3,
      label: "Exercise 3",
      type: "Fill in the Blank",
      icon: "✏️",
      storyPrompt: "Priya is polishing the final paragraphs of her competition report. Fill in the blank!",
      questions: [
        {
          id: 7,
          prompt: "Priya stayed late ___ she wanted to perfect the code.",
          choices: ["although", "so", "because"],
          answer: "because",
          hint: "Wanting to perfect the code is the reason. Use BECAUSE!",
        },
        {
          id: 8,
          prompt: "___ it was raining, the outdoor test went ahead.",
          choices: ["However", "Although", "Because"],
          answer: "Although",
          hint: "Rain and going ahead is a contrast in one sentence. Use ALTHOUGH!",
        },
        {
          id: 9,
          prompt: "The robot was impressive. ___ it could not climb the ramp.",
          choices: ["Because", "Although", "However"],
          answer: "However",
          hint: "Two contrasting sentences. Use HOWEVER!",
        },
      ],
    },
  ],
};

export const allQuestionsB1Topic4 = lessonB1Topic4.exercises.flatMap((ex) =>
  ex.questions.map((q) => ({
    ...q,
    exerciseLabel:       ex.label,
    exerciseType:        ex.type,
    exerciseIcon:        ex.icon,
    exerciseId:          ex.id,
    exerciseStoryPrompt: ex.storyPrompt,
  }))
);

// ─── B1 Topic 5 — Present perfect ────────────────────────────────────────────

export const lessonB1Topic5 = {
  id: "b1-5",
  level: "B1",
  title: "Present Perfect",
  subtitle: "Connect the past to now with have and has!",
  character: "Priya",
  characterEmoji: "🤖",
  story:
    "The robotics competition is over! Priya and her team are talking about everything they have done and achieved.",
  rule:
    "We use the **present perfect** to talk about past experiences that connect to now. We use **HAVE** or **HAS** plus the past participle. I/You/We/They → **HAVE**: I have finished. He/She/It → **HAS**: She has won. Common past participles: go → gone, see → seen, do → done, win → won, finish → finished, build → built. We often use **EVER**, **NEVER**, **ALREADY**, and **YET** with the present perfect.",
  examples: [
    { sentence: "Priya **HAS WON** three competitions this year.",             note: "she/he/it → has" },
    { sentence: "We **HAVE NEVER** built a robot this complex before.",        note: "we → have + never" },
    { sentence: "**Have** you **EVER** competed in a national competition?",   note: "you → have + ever" },
  ],
  feedback: {
    correct: (answer) => `Correct! "${answer}" is right. Good use of present perfect. ✅`,
    wrong:   (answer) => `Not quite. The answer is "${answer}". I/you/we/they = have. He/she/it = has. 💡`,
  },
  scoreMessages: {
    perfect:  { emoji: "🏆", text: "Perfect score. You have mastered the present perfect!" },
    good:     { emoji: "🔧", text: "Solid work. Have vs has — keep practicing." },
    tryAgain: { emoji: "💪", text: "Keep going! I/you/we/they = have. He/she/it = has. Try again!" },
  },
  exercises: [
    {
      id: 1,
      label: "Exercise 1",
      type: "Multiple Choice",
      icon: "🎯",
      storyPrompt: "The competition is over! Priya and her team are reflecting on everything they have done. Pick the right word!",
      questions: [
        {
          id: 1,
          prompt: "Priya ___ never lost a robotics competition.",
          choices: ["have", "has", "had"],
          answer: "has",
          hint: "Priya is one person — he/she/it. Use HAS!",
        },
        {
          id: 2,
          prompt: "We ___ already finished building the robot.",
          choices: ["has", "had", "have"],
          answer: "have",
          hint: "We = I/you/we/they group. Use HAVE!",
        },
        {
          id: 3,
          prompt: "___ you ever competed in a national competition?",
          choices: ["Has", "Have", "Had"],
          answer: "Have",
          hint: "You = I/you/we/they group. Use HAVE!",
        },
      ],
    },
    {
      id: 2,
      label: "Exercise 2",
      type: "Find the Mistake",
      icon: "🔍",
      storyPrompt: "Some present perfect sentences in Priya's notes have mistakes. Find and fix the mistake!",
      questions: [
        {
          id: 4,
          prompt: "Priya ___ won first prize three times.",
          wrongSentence: "Priya have won first prize three times.",
          wrongWord: "have",
          choices: ["have", "has", "had"],
          answer: "has",
          hint: "Priya is one person — she. Use HAS not HAVE!",
        },
        {
          id: 5,
          prompt: "We ___ never seen a robot like this before.",
          wrongSentence: "We has never seen a robot like this before.",
          wrongWord: "has",
          choices: ["has", "have", "had"],
          answer: "have",
          hint: "We = I/you/we/they group. Use HAVE not HAS!",
        },
        {
          id: 6,
          prompt: "___ you ever built a robot from scratch?",
          wrongSentence: "Has you ever built a robot from scratch?",
          wrongWord: "Has",
          choices: ["Has", "Have", "Had"],
          answer: "Have",
          hint: "You = I/you/we/they group. Use HAVE not HAS!",
        },
      ],
    },
    {
      id: 3,
      label: "Exercise 3",
      type: "Fill in the Blank",
      icon: "✏️",
      storyPrompt: "Priya is writing her end-of-competition reflection. Fill in the blank!",
      questions: [
        {
          id: 7,
          prompt: "The team ___ already packed up all the equipment.",
          choices: ["have", "has", "had"],
          answer: "have",
          hint: "The team = they. Use HAVE!",
        },
        {
          id: 8,
          prompt: "Priya ___ decided to enter next year's competition too.",
          choices: ["have", "had", "has"],
          answer: "has",
          hint: "Priya = she. Use HAS!",
        },
        {
          id: 9,
          prompt: "I ___ never felt so proud of our work.",
          choices: ["has", "have", "had"],
          answer: "have",
          hint: "I = I/you/we/they group. Use HAVE!",
        },
      ],
    },
  ],
};

export const allQuestionsB1Topic5 = lessonB1Topic5.exercises.flatMap((ex) =>
  ex.questions.map((q) => ({
    ...q,
    exerciseLabel:       ex.label,
    exerciseType:        ex.type,
    exerciseIcon:        ex.icon,
    exerciseId:          ex.id,
    exerciseStoryPrompt: ex.storyPrompt,
  }))
);

// ─── B1 Topic 6 — Adverbs of frequency ───────────────────────────────────────

export const lessonB1Topic6 = {
  id: "b1-6",
  level: "B1",
  title: "Adverbs of Frequency",
  subtitle: "Say how often with always, usually, sometimes, never!",
  character: "Priya",
  characterEmoji: "🤖",
  story:
    "Priya is telling her new friend about her weekly routine. She uses adverbs of frequency to describe how often she does things.",
  rule:
    "Adverbs of frequency tell us **HOW OFTEN** something happens. **ALWAYS** = 100% of the time. **USUALLY** = most of the time. **OFTEN** = many times. **SOMETIMES** = some of the time. **RARELY** = not very often. **NEVER** = 0% of the time. They usually go **BEFORE** the main verb: I always eat breakfast. But **AFTER** the verb to be: She is always on time.",
  examples: [
    { sentence: "Priya **ALWAYS** arrives at robotics club early.",          note: "always = every time" },
    { sentence: "She **SOMETIMES** finds the coding difficult.",             note: "sometimes = some of the time" },
    { sentence: "The team **NEVER** gives up on a challenge.",               note: "never = not once" },
  ],
  feedback: {
    correct: (answer) => `Correct! "${answer}" works here. Good use of adverbs of frequency. ✅`,
    wrong:   (answer) => `Not quite. The answer is "${answer}". Always = every time. Never = no times. Usually = most times. Rarely = almost never. 💡`,
  },
  scoreMessages: {
    perfect:  { emoji: "🏆", text: "Perfect score! You always get it right!" },
    good:     { emoji: "🔧", text: "Solid work! Adverbs of frequency — keep practicing." },
    tryAgain: { emoji: "💪", text: "Keep going! Always, usually, sometimes, rarely, never — try again!" },
  },
  exercises: [
    {
      id: 1,
      label: "Exercise 1",
      type: "Multiple Choice",
      icon: "🎯",
      storyPrompt: "Priya is describing her weekly practice routine to a new friend. Pick the right word!",
      questions: [
        {
          id: 1,
          prompt: "Priya ___ practises her coding for one hour after school.",
          choices: ["never", "always", "rarely"],
          answer: "always",
          hint: "She does it every single day. Use ALWAYS!",
        },
        {
          id: 2,
          prompt: "The robot ___ works perfectly on the first try.",
          choices: ["always", "never", "usually"],
          answer: "never",
          hint: "It does not work on the first try — not even once. Use NEVER!",
        },
        {
          id: 3,
          prompt: "Priya ___ stays late to fix problems — maybe once or twice a month.",
          choices: ["often", "always", "rarely"],
          answer: "rarely",
          hint: "Only once or twice a month — not very often. Use RARELY!",
        },
      ],
    },
    {
      id: 2,
      label: "Exercise 2",
      type: "Find the Mistake",
      icon: "🔍",
      storyPrompt: "Some frequency sentences about Priya's routine have mistakes. Find and fix the mistake!",
      questions: [
        {
          id: 4,
          prompt: "Priya is ___ late for robotics club.",
          wrongSentence: "Priya is never always late for robotics club.",
          wrongWord: "never always",
          choices: ["never always", "never", "always never"],
          answer: "never",
          hint: "Never and always cannot go together — they are opposites! Use just NEVER!",
        },
        {
          id: 5,
          prompt: "She ___ breakfast before school.",
          wrongSentence: "She eats always breakfast before school.",
          wrongWord: "eats always",
          choices: ["eats always", "always eats", "is always eating"],
          answer: "always eats",
          hint: "Adverbs of frequency go BEFORE the main verb — always eats, not eats always!",
        },
        {
          id: 6,
          prompt: "The team ___ tired after competitions.",
          wrongSentence: "The team usually is tired after competitions.",
          wrongWord: "usually is",
          choices: ["usually is", "is usually", "is sometimes"],
          answer: "is usually",
          hint: "After the verb to be — the team IS usually, not the team usually IS!",
        },
      ],
    },
    {
      id: 3,
      label: "Exercise 3",
      type: "Fill in the Blank",
      icon: "✏️",
      storyPrompt: "Priya is describing her habits and routines in her competition diary. Fill in the blank!",
      questions: [
        {
          id: 7,
          prompt: "Priya ___ checks her robot before every competition.",
          choices: ["never", "always", "rarely"],
          answer: "always",
          hint: "She does this every single time. Use ALWAYS!",
        },
        {
          id: 8,
          prompt: "The competitions are ___ very exciting.",
          choices: ["never", "always", "rarely"],
          answer: "always",
          hint: "They are exciting every time. The verb is ARE so put always after it!",
        },
        {
          id: 9,
          prompt: "Priya ___ asks for help — she prefers to solve problems herself.",
          choices: ["always", "usually", "rarely"],
          answer: "rarely",
          hint: "She prefers to work alone — she almost never asks. Use RARELY!",
        },
      ],
    },
  ],
};

export const allQuestionsB1Topic6 = lessonB1Topic6.exercises.flatMap((ex) =>
  ex.questions.map((q) => ({
    ...q,
    exerciseLabel:       ex.label,
    exerciseType:        ex.type,
    exerciseIcon:        ex.icon,
    exerciseId:          ex.id,
    exerciseStoryPrompt: ex.storyPrompt,
  }))
);

// ─── B1 Topic 7 — Past continuous ────────────────────────────────────────────

export const lessonB1Topic7 = {
  id: "b1-7",
  level: "B1",
  title: "Past Continuous",
  subtitle: "Describe what was happening at a moment in the past!",
  character: "Priya",
  characterEmoji: "🤖",
  story:
    "Something went wrong during Priya's robotics competition! She is explaining what everyone was doing when it happened.",
  rule:
    "We use the **past continuous** to describe what was happening at a specific moment in the past. We use **WAS** or **WERE** plus the verb with **-ING**. I/He/She/It → **WAS**: She was coding. You/We/They → **WERE**: They were testing. We often use it with **WHEN** to show one action interrupted another: Priya WAS coding WHEN the robot stopped.",
  examples: [
    { sentence: "Priya **WAS CODING** the program when the power went out.",        note: "she → was + -ing" },
    { sentence: "The judges **WERE WATCHING** when the robot completed the course.", note: "they → were + -ing" },
    { sentence: "I **WAS CHECKING** the wires when I noticed the problem.",          note: "I → was + -ing" },
  ],
  feedback: {
    correct: (answer) => `Correct! "${answer}" is right. Great past continuous! ✅`,
    wrong:   (answer) => `Not quite. The answer is "${answer}". I/he/she/it = was. You/we/they = were. Always add -ing to the verb! 💡`,
  },
  scoreMessages: {
    perfect:  { emoji: "🏆", text: "Perfect score. You were paying attention!" },
    good:     { emoji: "🔧", text: "Solid work! Past continuous — keep practicing." },
    tryAgain: { emoji: "💪", text: "Keep going! Was or were, then verb + ing. Try again!" },
  },
  exercises: [
    {
      id: 1,
      label: "Exercise 1",
      type: "Multiple Choice",
      icon: "🎯",
      storyPrompt: "Something went wrong at the competition! Priya is explaining what everyone was doing. Pick the right word!",
      questions: [
        {
          id: 1,
          prompt: "Priya ___ testing the robot when the bell rang.",
          choices: ["were", "was", "is"],
          answer: "was",
          hint: "Priya is one person — he/she/it. Use WAS!",
        },
        {
          id: 2,
          prompt: "The judges ___ watching carefully when it happened.",
          choices: ["was", "is", "were"],
          answer: "were",
          hint: "The judges = they. Use WERE!",
        },
        {
          id: 3,
          prompt: "I ___ checking the battery when I noticed the problem.",
          choices: ["were", "am", "was"],
          answer: "was",
          hint: "I = use WAS in past continuous!",
        },
      ],
    },
    {
      id: 2,
      label: "Exercise 2",
      type: "Find the Mistake",
      icon: "🔍",
      storyPrompt: "Priya spotted some past continuous errors in her incident report. Find and fix the mistake!",
      questions: [
        {
          id: 4,
          prompt: "Priya ___ building the robot when her friend arrived.",
          wrongSentence: "Priya were building the robot when her friend arrived.",
          wrongWord: "were",
          choices: ["were", "was", "is"],
          answer: "was",
          hint: "Priya is one person — she. Use WAS not WERE!",
        },
        {
          id: 5,
          prompt: "They ___ practising when the competition started.",
          wrongSentence: "They was practising when the competition started.",
          wrongWord: "was",
          choices: ["was", "were", "is"],
          answer: "were",
          hint: "They = you/we/they group. Use WERE not WAS!",
        },
        {
          id: 6,
          prompt: "The robot was ___ across the floor when it stopped.",
          wrongSentence: "The robot was move across the floor when it stopped.",
          wrongWord: "move",
          choices: ["move", "moving", "moved"],
          answer: "moving",
          hint: "Past continuous needs -ING! was moving — not was move!",
        },
      ],
    },
    {
      id: 3,
      label: "Exercise 3",
      type: "Fill in the Blank",
      icon: "✏️",
      storyPrompt: "Priya is finishing her incident report about what happened. Fill in the blank!",
      questions: [
        {
          id: 7,
          prompt: "The team ___ celebrating when they heard the results.",
          choices: ["were", "was", "is"],
          answer: "were",
          hint: "The team = they. Use WERE!",
        },
        {
          id: 8,
          prompt: "Priya ___ presenting her robot when the judge asked a question.",
          choices: ["were", "is", "was"],
          answer: "was",
          hint: "Priya = she. Use WAS!",
        },
        {
          id: 9,
          prompt: "I ___ sitting next to Priya when it all happened.",
          choices: ["were", "am", "was"],
          answer: "was",
          hint: "I always uses WAS in past continuous!",
        },
      ],
    },
  ],
};

export const allQuestionsB1Topic7 = lessonB1Topic7.exercises.flatMap((ex) =>
  ex.questions.map((q) => ({
    ...q,
    exerciseLabel:       ex.label,
    exerciseType:        ex.type,
    exerciseIcon:        ex.icon,
    exerciseId:          ex.id,
    exerciseStoryPrompt: ex.storyPrompt,
  }))
);

// ─── B1 Topic 8 — Used to ─────────────────────────────────────────────────────

export const lessonB1Topic8 = {
  id: "b1-8",
  level: "B1",
  title: "Used To",
  subtitle: "Talk about past habits that have changed!",
  character: "Priya",
  characterEmoji: "🤖",
  story:
    "Priya is telling her new robotics teammates about how she got into science. Things are very different now from when she was younger!",
  rule:
    "We use **USED TO** to talk about past habits or situations that have changed — things that happened regularly in the past but do not happen now. I **USED TO** play football but now I prefer robotics. For negatives: I **DIDN'T USE TO** like science. For questions: **DID** you **USE TO** have a different hobby? Notice: after **did**, we use **USE TO** — not **used to**!",
  examples: [
    { sentence: "Priya **USED TO** be afraid of computers when she was little.", note: "past habit — no longer true" },
    { sentence: "She **DIDN'T USE TO** understand coding at all.",                note: "negative — didn't use to" },
    { sentence: "**DID** you **USE TO** play with building blocks as a child?",   note: "question — did you use to" },
  ],
  feedback: {
    correct: (answer) => `Correct! "${answer}" is right. Good use of used to! ✅`,
    wrong:   (answer) => `Not quite. The answer is "${answer}". Positive = used to. Negative = didn't use to. Question = did you use to? 💡`,
  },
  scoreMessages: {
    perfect:  { emoji: "🏆", text: "Perfect score. You used to find this hard — not anymore!" },
    good:     { emoji: "🔧", text: "Solid work! Used to takes practice. Keep going." },
    tryAgain: { emoji: "💪", text: "Keep going! Used to, didn't use to, did you use to. Try again!" },
  },
  exercises: [
    {
      id: 1,
      label: "Exercise 1",
      type: "Multiple Choice",
      icon: "🎯",
      storyPrompt: "Priya is telling her teammates how different things were when she was younger. Pick the right word!",
      questions: [
        {
          id: 1,
          prompt: "Priya ___ be scared of robots when she was young.",
          choices: ["use to", "used to", "uses to"],
          answer: "used to",
          hint: "Used to = past habit that has changed. Priya used to be scared — but not anymore!",
        },
        {
          id: 2,
          prompt: "She ___ understand coding when she first started.",
          choices: ["didn't used to", "didn't use to", "doesn't used to"],
          answer: "didn't use to",
          hint: "Negative of used to = didn't use to. After did, use USE TO not USED TO!",
        },
        {
          id: 3,
          prompt: "___ you use to have a different hobby before robotics?",
          choices: ["Did you used to", "Did you use to", "Used you to"],
          answer: "Did you use to",
          hint: "Question form = Did you use to. After did, use USE TO not USED TO!",
        },
      ],
    },
    {
      id: 2,
      label: "Exercise 2",
      type: "Find the Mistake",
      icon: "🔍",
      storyPrompt: "Priya found some used to mistakes in her school project. Find and fix the mistake!",
      questions: [
        {
          id: 4,
          prompt: "Priya ___ love painting when she was younger.",
          wrongSentence: "Priya use to love painting when she was younger.",
          wrongWord: "use to",
          choices: ["use to", "used to", "uses to"],
          answer: "used to",
          hint: "In positive sentences use USED TO not USE TO!",
        },
        {
          id: 5,
          prompt: "She didn't ___ enjoy science lessons.",
          wrongSentence: "She didn't used to enjoy science lessons.",
          wrongWord: "used to",
          choices: ["used to", "use to", "uses to"],
          answer: "use to",
          hint: "After didn't use USE TO not USED TO!",
        },
        {
          id: 6,
          prompt: "Did Priya ___ go to a different school?",
          wrongSentence: "Did Priya used to go to a different school?",
          wrongWord: "used to",
          choices: ["used to", "use to", "uses to"],
          answer: "use to",
          hint: "After did use USE TO not USED TO!",
        },
      ],
    },
    {
      id: 3,
      label: "Exercise 3",
      type: "Fill in the Blank",
      icon: "✏️",
      storyPrompt: "Priya is writing about how her interests have changed. Fill in the blank!",
      questions: [
        {
          id: 7,
          prompt: "Priya ___ spend all her time drawing — now she codes.",
          choices: ["use to", "uses to", "used to"],
          answer: "used to",
          hint: "Positive past habit — use USED TO!",
        },
        {
          id: 8,
          prompt: "She ___ like maths but now it is her favourite subject.",
          choices: ["didn't use to", "didn't used to", "doesn't use to"],
          answer: "didn't use to",
          hint: "Negative past habit — use DIDN'T USE TO!",
        },
        {
          id: 9,
          prompt: "___ Priya use to build things as a child?",
          choices: ["Did", "Used", "Does"],
          answer: "Did",
          hint: "Question form of used to starts with DID!",
        },
      ],
    },
  ],
};

export const allQuestionsB1Topic8 = lessonB1Topic8.exercises.flatMap((ex) =>
  ex.questions.map((q) => ({
    ...q,
    exerciseLabel:       ex.label,
    exerciseType:        ex.type,
    exerciseIcon:        ex.icon,
    exerciseId:          ex.id,
    exerciseStoryPrompt: ex.storyPrompt,
  }))
);

// ─── B1 Topic 9 — Infinitives of purpose ─────────────────────────────────────

export const lessonB1Topic9 = {
  id: "b1-9",
  level: "B1",
  title: "Infinitives of Purpose",
  subtitle: "Explain why you do something with to!",
  character: "Priya",
  characterEmoji: "🤖",
  story:
    "Priya is explaining all the reasons behind her decisions during the robotics competition. She uses infinitives of purpose to explain why she does things.",
  rule:
    "We use **TO** plus a verb to explain the **PURPOSE** or **REASON** for doing something. It answers the question **WHY**. Priya went to the lab **TO test** her robot. She stayed late **TO fix** the problem. TO always comes before the **base form** of the verb — never add -s, -ed, or -ing. We can also use **IN ORDER TO** for more formal situations: She practised **IN ORDER TO** improve her technique.",
  examples: [
    { sentence: "Priya stayed after school **TO** perfect her code.",           note: "to + base verb = reason" },
    { sentence: "She read the manual **IN ORDER TO** understand the motor.",    note: "in order to = more formal" },
    { sentence: "The team met early **TO** plan their strategy.",                note: "to + base verb = reason" },
  ],
  feedback: {
    correct: (answer) => `Correct! "${answer}" is right. Great use of infinitives of purpose! ✅`,
    wrong:   (answer) => `Not quite. The answer is "${answer}". Use TO plus the base verb to explain why. Never use for or add -ing! 💡`,
  },
  scoreMessages: {
    perfect:  { emoji: "🏆", text: "Perfect score. You clearly know TO use infinitives!" },
    good:     { emoji: "🔧", text: "Solid work! Infinitives of purpose — keep practicing." },
    tryAgain: { emoji: "💪", text: "Keep going! To + base verb = the reason why. Try again!" },
  },
  exercises: [
    {
      id: 1,
      label: "Exercise 1",
      type: "Multiple Choice",
      icon: "🎯",
      storyPrompt: "Priya is explaining the reasons behind her competition decisions. Pick the right word!",
      questions: [
        {
          id: 1,
          prompt: "Priya went to the lab ___ test the new motor.",
          choices: ["for testing", "to", "for to"],
          answer: "to",
          hint: "Use TO plus the verb to explain why. TO test — not FOR testing!",
        },
        {
          id: 2,
          prompt: "She brought a spare battery ___ avoid any power problems.",
          choices: ["to", "for", "in order for"],
          answer: "to",
          hint: "Why did she bring a spare battery? TO avoid problems. Use TO!",
        },
        {
          id: 3,
          prompt: "The team met early ___ discuss their strategy.",
          choices: ["for discuss", "to", "for discussing"],
          answer: "to",
          hint: "Why did they meet? TO discuss. Use TO plus the base verb!",
        },
      ],
    },
    {
      id: 2,
      label: "Exercise 2",
      type: "Find the Mistake",
      icon: "🔍",
      storyPrompt: "Priya found purpose errors in her notes. Find and fix the mistake!",
      questions: [
        {
          id: 4,
          prompt: "Priya stayed late ___ fix the robot.",
          wrongSentence: "Priya stayed late for fix the robot.",
          wrongWord: "for fix",
          choices: ["for fix", "to fix", "for fixing"],
          answer: "to fix",
          hint: "Use TO not FOR when explaining purpose! to fix — not for fix!",
        },
        {
          id: 5,
          prompt: "She read the manual to ___ the motor.",
          wrongSentence: "She read the manual to understanding the motor.",
          wrongWord: "understanding",
          choices: ["understanding", "understand", "understood"],
          answer: "understand",
          hint: "After TO use the base verb — no -ing! to understand — not to understanding!",
        },
        {
          id: 6,
          prompt: "The team practised every day to ___ the competition.",
          wrongSentence: "The team practised every day to winning the competition.",
          wrongWord: "winning",
          choices: ["winning", "win", "won"],
          answer: "win",
          hint: "After TO use the base verb — no -ing! to win — not to winning!",
        },
      ],
    },
    {
      id: 3,
      label: "Exercise 3",
      type: "Fill in the Blank",
      icon: "✏️",
      storyPrompt: "Priya is writing up why her team did each thing at the competition. Fill in the blank!",
      questions: [
        {
          id: 7,
          prompt: "Priya checked every wire ___ make sure nothing was loose.",
          choices: ["for making", "to", "for"],
          answer: "to",
          hint: "Why did she check? TO make sure. Use TO!",
        },
        {
          id: 8,
          prompt: "She entered the competition ___ challenge herself.",
          choices: ["to", "for challenge", "for to"],
          answer: "to",
          hint: "Why did she enter? TO challenge herself. Use TO!",
        },
        {
          id: 9,
          prompt: "The team worked together ___ finish before the deadline.",
          choices: ["for finishing", "to", "for"],
          answer: "to",
          hint: "Why did they work together? TO finish. Use TO plus the base verb!",
        },
      ],
    },
  ],
};

export const allQuestionsB1Topic9 = lessonB1Topic9.exercises.flatMap((ex) =>
  ex.questions.map((q) => ({
    ...q,
    exerciseLabel:       ex.label,
    exerciseType:        ex.type,
    exerciseIcon:        ex.icon,
    exerciseId:          ex.id,
    exerciseStoryPrompt: ex.storyPrompt,
  }))
);

// ─── B1 Topic 10 — Relative pronouns: who and which ──────────────────────────

export const lessonB1Topic10 = {
  id: "b1-10",
  level: "B1",
  title: "Relative Pronouns: Who and Which",
  subtitle: "Add information with who and which!",
  character: "Priya",
  characterEmoji: "🤖",
  story:
    "Priya is writing a magazine article about the robotics competition. She wants to add extra information about the people and things she mentions.",
  rule:
    "**Relative pronouns** add extra information about a noun. **WHO** = used for people: The engineer who designed the robot is only twelve. **WHICH** = used for things: The robot which won the prize was very fast. The relative clause comes directly after the noun it describes. This is an introduction — at B2 level you will learn more about when to use THAT and the difference between defining and non-defining clauses.",
  examples: [
    { sentence: "The student **WHO** won first prize is in Priya's team.",         note: "who = person" },
    { sentence: "The robot **WHICH** completed the maze in ten seconds won.",      note: "which = thing" },
    { sentence: "Priya thanked the teacher **WHO** had supported the project.",    note: "who = person" },
  ],
  feedback: {
    correct: (answer) => `Correct! "${answer}" is right. Good use of relative pronouns! ✅`,
    wrong:   (answer) => `Not quite. The answer is "${answer}". WHO = people. WHICH = things. 💡`,
  },
  scoreMessages: {
    perfect:  { emoji: "🏆", text: "Perfect score. Priya would be proud of you!" },
    good:     { emoji: "🔧", text: "Solid work! Who and which — keep practicing." },
    tryAgain: { emoji: "💪", text: "Keep going! Who for people, which for things. Try again!" },
  },
  exercises: [
    {
      id: 1,
      label: "Exercise 1",
      type: "Multiple Choice",
      icon: "🎯",
      storyPrompt: "Priya is writing a magazine article about the competition. Pick the right word!",
      questions: [
        {
          id: 1,
          prompt: "The judge ___ scored the robots was very experienced.",
          choices: ["which", "what", "who"],
          answer: "who",
          hint: "The judge is a person. Use WHO for people!",
        },
        {
          id: 2,
          prompt: "The motor ___ Priya chose was the most powerful one.",
          choices: ["who", "what", "which"],
          answer: "which",
          hint: "The motor is a thing. Use WHICH for things!",
        },
        {
          id: 3,
          prompt: "The student ___ built the fastest robot received a trophy.",
          choices: ["which", "what", "who"],
          answer: "who",
          hint: "The student is a person. Use WHO!",
        },
      ],
    },
    {
      id: 2,
      label: "Exercise 2",
      type: "Find the Mistake",
      icon: "🔍",
      storyPrompt: "Priya found some relative pronoun errors in her article draft. Find and fix the mistake!",
      questions: [
        {
          id: 4,
          prompt: "The engineer ___ designed the robot is twelve years old.",
          wrongSentence: "The engineer which designed the robot is twelve years old.",
          wrongWord: "which",
          choices: ["which", "who", "what"],
          answer: "who",
          hint: "The engineer is a person. Use WHO not WHICH!",
        },
        {
          id: 5,
          prompt: "The trophy ___ Priya received was gold.",
          wrongSentence: "The trophy who Priya received was gold.",
          wrongWord: "who",
          choices: ["who", "which", "what"],
          answer: "which",
          hint: "The trophy is a thing. Use WHICH not WHO!",
        },
        {
          id: 6,
          prompt: "The team ___ won practiced for six months.",
          wrongSentence: "The team which won practiced for six months.",
          wrongWord: "which",
          choices: ["which", "who", "what"],
          answer: "who",
          hint: "The team = people. Use WHO not WHICH!",
        },
      ],
    },
    {
      id: 3,
      label: "Exercise 3",
      type: "Fill in the Blank",
      icon: "✏️",
      storyPrompt: "Priya is finishing her magazine article with extra details. Fill in the blank!",
      questions: [
        {
          id: 7,
          prompt: "The teacher ___ helped Priya was very proud of her.",
          choices: ["which", "what", "who"],
          answer: "who",
          hint: "The teacher is a person. Use WHO!",
        },
        {
          id: 8,
          prompt: "The prize ___ Priya won was a trip to a science museum.",
          choices: ["who", "what", "which"],
          answer: "which",
          hint: "The prize is a thing. Use WHICH!",
        },
        {
          id: 9,
          prompt: "The student ___ came second also did an amazing job.",
          choices: ["which", "what", "who"],
          answer: "who",
          hint: "The student is a person. Use WHO!",
        },
      ],
    },
  ],
};

export const allQuestionsB1Topic10 = lessonB1Topic10.exercises.flatMap((ex) =>
  ex.questions.map((q) => ({
    ...q,
    exerciseLabel:       ex.label,
    exerciseType:        ex.type,
    exerciseIcon:        ex.icon,
    exerciseId:          ex.id,
    exerciseStoryPrompt: ex.storyPrompt,
  }))
);
