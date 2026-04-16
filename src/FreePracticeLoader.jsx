import { useEffect, useState } from "react";

const FREE_PRACTICE_PARAMS = {
  A1: {
    level:          "A1",
    grades:         "K-2",
    ageBand:        "Little Learners",
    character:      "Biscuit the Dog",
    characterEmoji: "🐕",
    topics:         "Simple present tense, Nouns and plurals, Articles a an the, Subject pronouns, Verb to be, Basic adjectives, Simple sentences, Possessives",
  },
  A2: {
    level:          "A2",
    grades:         "3-4",
    ageBand:        "Kids",
    character:      "Marco a 9-year-old who loves science",
    characterEmoji: "🧪",
    topics:         "Simple past tense, Irregular past verbs, WH questions, Comparatives, Conjunctions, Prepositions of place, Prepositions of time, There is and there are",
  },
  B1: {
    level:          "B1",
    grades:         "5-6",
    ageBand:        "Kids",
    character:      "Priya an 11-year-old on her school robotics team",
    characterEmoji: "🤖",
    topics:         "Modal verbs can should must, Modal verbs could would might, Present continuous, Comparatives and superlatives, Compound sentences, Future tense will and going to, Present perfect, Adverbs of frequency",
  },
  B2: {
    level:          "B2",
    grades:         "7-8",
    ageBand:        "Tweens",
    character:      "Zara a 13-year-old making a documentary",
    characterEmoji: "🎬",
    topics:         "Relative clauses, Passive voice, First conditional, Second conditional, Reported speech, Past perfect, Gerunds and infinitives, Linking words",
  },
};

async function callGeminiAPI(levelId) {
  const p = FREE_PRACTICE_PARAMS[levelId];
  const prompt =
    `You are an expert ELL grammar curriculum designer for K-8 students. ` +
    `Generate a complete grammar lesson for a student at ${p.level} CEFR level, ` +
    `grades ${p.grades}, age band ${p.ageBand}. ` +
    `The character for this lesson is ${p.character}. ` +
    `Randomly select one topic from this list: ${p.topics}. ` +
    `Write all instructions at the appropriate reading level for ELL students. ` +
    `Return ONLY a valid JSON object with no markdown, no backticks, no extra text. ` +
    `The JSON must have these exact keys: topic (string), explanation (string), ` +
    `examples (array of 3 strings), exercise1 (array of 3 objects), ` +
    `exercise2 (array of 3 objects), exercise3 (array of 3 objects). ` +
    `Each exercise object must have: prompt (string), options (array of 3 strings), ` +
    `answer (string), hint (string), feedbackCorrect (string), feedbackWrong (string).`;

  const apiKey = import.meta.env.VITE_GEMINI_API_KEY;
  console.log("[FreePractice] VITE_GEMINI_API_KEY:", apiKey ? `defined (starts with ${apiKey.slice(0, 8)}...)` : "undefined");

  const url =
    `https://generativelanguage.googleapis.com/v1beta/models/gemini-1.5-flash:generateContent?key=${apiKey}`;

  let res;
  try {
    res = await fetch(url, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ contents: [{ parts: [{ text: prompt }] }] }),
    });
  } catch (networkErr) {
    console.error("[FreePractice] Network/fetch error:", networkErr);
    throw networkErr;
  }

  console.log("[FreePractice] Response status:", res.status, res.statusText);

  if (!res.ok) {
    const errorBody = await res.text();
    console.error("[FreePractice] API error body:", errorBody);
    throw new Error(`API error ${res.status}: ${errorBody}`);
  }

  const data = await res.json();
  console.log("[FreePractice] Full API response:", JSON.stringify(data, null, 2));

  const raw = data.candidates?.[0]?.content?.parts?.[0]?.text;
  if (!raw) {
    console.error("[FreePractice] No text in response. candidates:", data.candidates);
    throw new Error("Empty response from API");
  }

  console.log("[FreePractice] Raw text from model:", raw);

  // Strip accidental markdown fences just in case
  const cleaned = raw
    .replace(/^```json\s*/i, "")
    .replace(/^```\s*/i, "")
    .replace(/\s*```\s*$/i, "")
    .trim();

  let parsed;
  try {
    parsed = JSON.parse(cleaned);
  } catch (parseErr) {
    console.error("[FreePractice] JSON parse error:", parseErr.message);
    console.error("[FreePractice] String that failed to parse:", cleaned);
    throw parseErr;
  }

  console.log("[FreePractice] Parsed lesson JSON:", parsed);
  return parsed;
}

function buildLessonData(levelId, ai) {
  const p = FREE_PRACTICE_PARAMS[levelId];

  const exMeta = [
    { id: 1, label: "Exercise 1", type: "Multiple Choice", icon: "🎯" },
    { id: 2, label: "Exercise 2", type: "Practice",        icon: "🔍" },
    { id: 3, label: "Exercise 3", type: "Challenge",       icon: "✏️" },
  ];

  const exercises = [ai.exercise1, ai.exercise2, ai.exercise3].map((qs, idx) => ({
    ...exMeta[idx],
    questions: qs.map((q, qi) => ({
      id:     idx * 3 + qi + 1,
      prompt: q.prompt,
      choices: q.options,
      answer:  q.answer,
    })),
  }));

  const allQuestions = exercises.flatMap((ex) =>
    ex.questions.map((q) => ({
      ...q,
      exerciseLabel: ex.label,
      exerciseType:  ex.type,
      exerciseIcon:  ex.icon,
      exerciseId:    ex.id,
    }))
  );

  const lesson = {
    id:             `free-practice-${levelId}-${Date.now()}`,
    level:          p.level,
    title:          ai.topic,
    subtitle:       "Free Practice · AI Generated",
    character:      p.character,
    characterEmoji: p.characterEmoji,
    isFreePractice: true,
    rule: ai.explanation,
    feedback: {
      correct: (answer) => `Great job! "${answer}" is correct! ✅`,
      wrong:   (answer) => `Not quite. The correct answer is "${answer}". Keep going! 💡`,
    },
    scoreMessages: {
      perfect:  { emoji: "🌟", text: "Perfect score! You're an amazing learner!" },
      good:     { emoji: "🎉", text: "Great work! Keep practicing to get even better!" },
      tryAgain: { emoji: "📚", text: "Good effort! Every practice makes you stronger." },
    },
    examples: ai.examples.map((ex) => {
      const sep = ex.indexOf(" — ");
      return sep !== -1
        ? { sentence: ex.slice(0, sep), note: ex.slice(sep + 3) }
        : { sentence: ex, note: "" };
    }),
    exercises,
  };

  return { lesson, allQuestions };
}

export default function FreePracticeLoader({ levelId, onLessonReady, onBack }) {
  const [status,  setStatus]  = useState("loading"); // "loading" | "error"
  const [attempt, setAttempt] = useState(0);

  useEffect(() => {
    let cancelled = false;
    setStatus("loading");

    callGeminiAPI(levelId)
      .then((ai) => {
        if (!cancelled) onLessonReady(buildLessonData(levelId, ai));
      })
      .catch((err) => {
        console.error("[FreePractice] Generation failed:", err);
        if (!cancelled) setStatus("error");
      });

    return () => { cancelled = true; };
  }, [levelId, attempt]); // re-runs on Retry (attempt increments)

  if (status === "loading") {
    return (
      <div className="screen fp-loading-screen">
        <div className="fp-loading-inner">
          <div className="fp-spinner" />
          <p className="fp-loading-title">Generating your lesson…</p>
          <p className="fp-loading-sub">Your AI tutor is preparing something special ✨</p>
        </div>
      </div>
    );
  }

  return (
    <div className="screen fp-error-screen">
      <div className="screen-topbar">
        <button className="back-btn" onClick={onBack} aria-label="Back">←</button>
      </div>
      <div className="fp-error-inner">
        <div className="fp-error-emoji">😕</div>
        <p className="fp-error-title">Oops!</p>
        <p className="fp-error-msg">
          We couldn't generate your lesson right now. Please try again.
        </p>
        <button className="btn-primary" onClick={() => setAttempt((n) => n + 1)}>
          Retry
        </button>
        <button className="btn-home" onClick={onBack}>Back</button>
      </div>
    </div>
  );
}
