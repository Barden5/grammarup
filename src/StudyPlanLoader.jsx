import { useEffect, useState } from "react";

const STUDY_PLAN_PARAMS = {
  A1: { level: "A1", grades: "K-2",  ageBand: "Little Learners", character: "Biscuit the Dog",                          characterEmoji: "🐕" },
  A2: { level: "A2", grades: "3-4",  ageBand: "Kids",            character: "Marco a 9-year-old who loves science",      characterEmoji: "🧪" },
  B1: { level: "B1", grades: "5-6",  ageBand: "Kids",            character: "Priya an 11-year-old on her school robotics team", characterEmoji: "🤖" },
  B2: { level: "B2", grades: "7-8",  ageBand: "Tweens",          character: "Zara a 13-year-old making a documentary",   characterEmoji: "🎬" },
};

async function callGeminiAPI(levelId, selectedTopics) {
  const p         = STUDY_PLAN_PARAMS[levelId];
  const topicList = selectedTopics.join(", ");
  const total     = selectedTopics.length * 3;
  const ex4line   = selectedTopics.length === 4
    ? ", exercise4 (array of 3 question objects)"
    : "";

  const prompt =
    `You are an expert ELL grammar curriculum designer for K-8 students. ` +
    `Generate a mixed grammar lesson for a student at ${p.level} CEFR level, grades ${p.grades}, age band ${p.ageBand}. ` +
    `The character is ${p.character}.\n` +
    `The student has chosen to focus on these specific topics: ${topicList}.\n` +
    `Create exactly 3 questions for each selected topic — ${total} questions total. ` +
    `Each group of 3 questions is one exercise covering that specific topic. ` +
    `Label each exercise with the topic name.\n` +
    `STRICT RULES — follow every one of these exactly:\n\n` +
    `Every question must have exactly ONE blank (___). Never use two or more blanks in the same question. Never.\n` +
    `All topics must be different from each other\n` +
    `Questions must feel connected to a story featuring ${p.character}\n` +
    `Write all instructions at the appropriate reading level for ELL students\n` +
    `Wrong answer options (distractors) must be plausible — not obviously silly\n` +
    `Never repeat the same question or sentence structure twice\n` +
    `CRITICAL: Only create exercises for the EXACT topics the student selected. Do not add any additional topics. If the student selected 2 topics create exactly 2 exercises. If they selected 3 topics create exactly 3 exercises. Never add extra topics.\n` +
    `IMPORTANT: Never use ambiguous subjects like 'my friend', 'a person', or 'someone' in questions about pronouns. Always use a name like Tom, Sara, or Mia, or a clearly gendered noun so the correct pronoun answer is unambiguous. Every question must have exactly ONE clearly correct answer.\n` +
    `IMPORTANT: Biscuit is a dog and should always be referred to using IT or ITS — never he, him, his, she, or her. Biscuit is always referred to as 'it' in all questions, hints, and feedback. For example: 'Biscuit wags ITS tail' not 'Biscuit wags his tail'.\n\n` +
    `Return ONLY a valid JSON object with no markdown, no backticks, no extra text. ` +
    `The JSON must have these exact keys: ` +
    `topic (string — write "My Study Plan: ${topicList}"), ` +
    `explanation (string — brief friendly intro to this personalised session), ` +
    `examples (array of 3 strings), ` +
    `exercise1 (array of 3 question objects), ` +
    `exercise2 (array of 3 question objects), ` +
    `exercise3 (array of 3 question objects)` +
    `${ex4line}. ` +
    `Each question object must have: prompt (string with exactly one blank ___), ` +
    `options (array of exactly 3 strings), answer (string), hint (string), ` +
    `feedbackCorrect (string), feedbackWrong (string), ` +
    `exerciseLabel (string — the exact topic name for this exercise).`;

  const apiKey = import.meta.env.VITE_GEMINI_API_KEY;
  const url    = `https://generativelanguage.googleapis.com/v1beta/models/gemini-2.5-flash:generateContent?key=${apiKey}`;

  let res;
  try {
    res = await fetch(url, {
      method:  "POST",
      headers: { "Content-Type": "application/json" },
      body:    JSON.stringify({ contents: [{ parts: [{ text: prompt }] }] }),
    });
  } catch (networkErr) {
    console.error("[StudyPlan] Network/fetch error:", networkErr);
    throw networkErr;
  }

  console.log("[StudyPlan] Response status:", res.status, res.statusText);

  if (!res.ok) {
    const errorBody = await res.text();
    console.error("[StudyPlan] API error body:", errorBody);
    const err    = new Error(`API error ${res.status}: ${errorBody}`);
    err.status   = res.status;
    throw err;
  }

  const data = await res.json();
  const raw  = data.candidates?.[0]?.content?.parts?.[0]?.text;
  if (!raw) {
    console.error("[StudyPlan] Empty response from API");
    throw new Error("Empty response from API");
  }

  const cleaned = raw
    .replace(/^```json\s*/i, "")
    .replace(/^```\s*/i, "")
    .replace(/\s*```\s*$/i, "")
    .trim();

  let parsed;
  try {
    parsed = JSON.parse(cleaned);
  } catch (parseErr) {
    console.error("[StudyPlan] JSON parse error:", parseErr.message, cleaned);
    throw parseErr;
  }

  return parsed;
}

function buildLessonData(levelId, selectedTopics, ai) {
  const p        = STUDY_PLAN_PARAMS[levelId];
  const exIcons  = ["🎯", "🔍", "✏️", "⭐"];
  const rawExs   = [ai.exercise1, ai.exercise2, ai.exercise3, ai.exercise4].filter(Boolean);

  const exercises = rawExs.map((qs, idx) => {
    const topicLabel = qs[0]?.exerciseLabel ?? selectedTopics[idx] ?? `Exercise ${idx + 1}`;
    return {
      id:    idx + 1,
      label: topicLabel,
      type:  "Multiple Choice",
      icon:  exIcons[idx],
      questions: qs.map((q, qi) => ({
        id:      idx * 3 + qi + 1,
        prompt:  q.prompt,
        choices: q.options,
        answer:  q.answer,
      })),
    };
  });

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
    id:             `study-plan-${levelId}-${Date.now()}`,
    level:          p.level,
    title:          ai.topic ?? "My Study Plan",
    subtitle:       "Study Plan · AI Generated",
    character:      p.character,
    characterEmoji: p.characterEmoji,
    isFreePractice: true,
    rule:           ai.explanation,
    feedback: {
      correct: (answer) => `Great job! "${answer}" is correct! ✅`,
      wrong:   (answer) => `Not quite. The correct answer is "${answer}". Keep going! 💡`,
    },
    scoreMessages: {
      perfect:  { emoji: "✨", text: "Perfect score! Your study plan really paid off!" },
      good:     { emoji: "🎉", text: "Great work! Keep practising these topics!" },
      tryAgain: { emoji: "📚", text: "Good effort! Try these topics again to get stronger." },
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

const MAX_503_RETRIES = 3;
const RETRY_DELAY_MS  = 10000;

export default function StudyPlanLoader({ levelId, selectedTopics, onLessonReady, onBack }) {
  const [status,       setStatus]       = useState("loading");
  const [retryMsg,     setRetryMsg]     = useState(null);
  const [triggerCount, setTriggerCount] = useState(0);

  useEffect(() => {
    let cancelled = false;
    setStatus("loading");
    setRetryMsg(null);

    async function run() {
      for (let attempt = 0; attempt <= MAX_503_RETRIES; attempt++) {
        if (cancelled) return;

        if (attempt > 0) {
          if (!cancelled) setRetryMsg(
            `Gemini is busy right now — retrying in 10 seconds… (attempt ${attempt} of ${MAX_503_RETRIES})`
          );
          await new Promise((resolve) => setTimeout(resolve, RETRY_DELAY_MS));
          if (cancelled) return;
          setRetryMsg(null);
        }

        try {
          const ai = await callGeminiAPI(levelId, selectedTopics);
          if (!cancelled) onLessonReady(buildLessonData(levelId, selectedTopics, ai));
          return;
        } catch (err) {
          console.error(`[StudyPlan] Attempt ${attempt + 1} failed:`, err);
          if (err.status === 503 && attempt < MAX_503_RETRIES) continue;
          if (!cancelled) setStatus("error");
          return;
        }
      }
    }

    run();
    return () => { cancelled = true; };
  }, [levelId, triggerCount]);

  if (status === "loading") {
    return (
      <div className="screen fp-loading-screen">
        <div className="fp-loading-inner">
          <div className="fp-spinner" />
          <p className="fp-loading-title">Building your personalised lesson…</p>
          <p className="fp-loading-sub">
            {retryMsg ?? "Your AI tutor is crafting a lesson just for you ✨"}
          </p>
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
        <button className="btn-primary" onClick={() => setTriggerCount((n) => n + 1)}>
          Retry
        </button>
        <button className="btn-home" onClick={onBack}>Back</button>
      </div>
    </div>
  );
}
