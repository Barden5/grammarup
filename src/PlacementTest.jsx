import { useState } from "react";
import {
  PLACEMENT_QUESTIONS,
  scoreToLevel,
  LEVEL_RESULTS,
  LEVELS,
} from "./placementData";

const TOTAL = PLACEMENT_QUESTIONS.length;

const ACCENT_HEADER = {
  green:  "lc-header-green",
  blue:   "lc-header-blue",
  orange: "lc-header-orange",
  purple: "lc-header-purple",
};

const ACCENT_BTN = {
  green:  "lc-btn-green",
  blue:   "lc-btn-blue",
  orange: "lc-btn-orange",
  purple: "lc-btn-purple",
};

// ── INTRO ────────────────────────────────────────────────────────────────────
function PlacementIntro({ onStart }) {
  return (
    <div className="screen pt-intro">
      <div className="pt-intro-emoji">🎯</div>

      <div className="pt-intro-text">
        <h1 className="pt-intro-title">Let's find your level!</h1>
        <p className="pt-intro-body">
          This isn't a test you can fail — promise. We just want to figure out
          the best place for you to start in GrammarUp. Answer each question as
          best you can. If you're not sure, take a guess — that's fine. It
          takes about 5 minutes. Ready? Let's go.
        </p>
      </div>

      <div className="pt-info-pills">
        <span className="pt-info-pill">📝 20 questions</span>
        <span className="pt-info-pill">⏱ ~5 minutes</span>
        <span className="pt-info-pill">😊 No stress</span>
      </div>

      <button className="btn-primary" onClick={onStart}>
        Start the test
      </button>
    </div>
  );
}

function shuffleArray(arr) {
  const a = [...arr];
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [a[i], a[j]] = [a[j], a[i]];
  }
  return a;
}

// ── QUIZ ─────────────────────────────────────────────────────────────────────
function PlacementQuiz({ onFinish }) {
  const [questionIndex, setQuestionIndex] = useState(0);
  const [selected, setSelected]           = useState(null);
  const [answers, setAnswers]             = useState([]);

  // Shuffle each question's choices once when the quiz mounts.
  // Answer comparison is text-based so correct-answer tracking still works.
  const [questions] = useState(() =>
    PLACEMENT_QUESTIONS.map((q) => ({ ...q, choices: shuffleArray(q.choices) }))
  );

  const current = questions[questionIndex];
  const isLast  = questionIndex === TOTAL - 1;
  const progressPct = (questionIndex / TOTAL) * 100;

  function handleSelect(choice) {
    if (selected !== null) return;
    setSelected(choice);
  }

  function handleNext() {
    const correct     = selected === current.answer;
    const newAnswers  = [...answers, correct];
    setAnswers(newAnswers);
    if (isLast) {
      onFinish(newAnswers);
    } else {
      setQuestionIndex(questionIndex + 1);
      setSelected(null);
    }
  }

  return (
    <div className="screen pt-quiz">
      {/* Progress — shows Q number only, no level labels */}
      <div className="progress-wrap">
        <div className="progress-bar">
          <div className="progress-fill" style={{ width: `${progressPct}%` }} />
        </div>
        <div className="progress-meta">
          <span className="progress-label">
            Question {questionIndex + 1} of {TOTAL}
          </span>
        </div>
      </div>

      {/* Question card — no correct/wrong feedback */}
      <div className="question-card">
        <p className="prompt">{current.prompt}</p>
        <div className="choices-col">
          {current.choices.map((choice) => (
            <button
              key={choice}
              className={`choice-btn${selected === choice ? " pt-selected" : ""}`}
              onClick={() => handleSelect(choice)}
            >
              {choice}
            </button>
          ))}
        </div>
      </div>

      {/* Next appears only after selection — no feedback banner */}
      {selected !== null && (
        <button className="btn-primary" onClick={handleNext}>
          {isLast ? "See My Results! 🏆" : "Next →"}
        </button>
      )}
    </div>
  );
}

// ── RESULTS ──────────────────────────────────────────────────────────────────
function PlacementResults({ answers, onComplete }) {
  const correct = answers.filter(Boolean).length;
  const level   = scoreToLevel(correct);
  const result  = LEVEL_RESULTS[level];

  return (
    <div className="screen pt-results">
      <div className="pt-result-emoji">{result.emoji}</div>

      {/* Colored level banner */}
      <div className={`pt-result-banner ${ACCENT_HEADER[result.accent]}`}>
        <span className="pt-result-level">{level}</span>
        <span className="pt-result-label">Your Grammar Level</span>
      </div>

      {/* Score */}
      <div className="pt-score-bubble">
        <span className="pt-score-num">{correct}</span>
        <span className="pt-score-sep">/</span>
        <span className="pt-score-total">{TOTAL}</span>
        <span className="pt-score-word">correct</span>
      </div>

      {/* Level progress track — shows where they landed */}
      <div className="pt-level-track">
        {LEVELS.map((l) => (
          <div
            key={l}
            className={`pt-level-pip ${l === level ? "pt-level-pip-active" : ""}`}
          >
            {l}
          </div>
        ))}
      </div>

      <p className="pt-result-message">{result.message}</p>

      <button
        className={`lc-btn ${ACCENT_BTN[result.accent]}`}
        onClick={() => onComplete(level)}
      >
        {result.button} 🚀
      </button>
    </div>
  );
}

// ── ROOT COMPONENT ────────────────────────────────────────────────────────────
export default function PlacementTest({ onComplete }) {
  const [step, setStep]       = useState("intro"); // "intro" | "quiz" | "results"
  const [answers, setAnswers] = useState([]);

  function handleQuizFinish(finalAnswers) {
    setAnswers(finalAnswers);
    setStep("results");
  }

  if (step === "intro")   return <PlacementIntro onStart={() => setStep("quiz")} />;
  if (step === "results") return <PlacementResults answers={answers} onComplete={onComplete} />;
  return <PlacementQuiz onFinish={handleQuizFinish} />;
}
