import { useState } from "react";

const EXERCISE_TYPE_LABELS = {
  "Multiple Choice": "Pick the right word",
  "Find the Mistake": "Fix the mistake",
  "Fill in the Blank": "Fill in the blank",
};

function renderBold(text) {
  return (
    <span
      dangerouslySetInnerHTML={{
        __html: text.replace(/\*\*(.*?)\*\*/g, "<strong>$1</strong>"),
      }}
    />
  );
}

/**
 * Split a sentence at the first occurrence of wrongWord (whole-word match).
 * Returns [before, matchedWord, after].
 */
function splitAtWrongWord(sentence, wrongWord) {
  const escaped = wrongWord.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
  const regex = new RegExp(`\\b${escaped}\\b`);
  const match = regex.exec(sentence);
  if (match) {
    const idx = match.index;
    return [
      sentence.slice(0, idx),
      sentence.slice(idx, idx + match[0].length),
      sentence.slice(idx + match[0].length),
    ];
  }
  // Fallback for non-word tokens (e.g. "???")
  const idx = sentence.indexOf(wrongWord);
  if (idx !== -1) {
    return [
      sentence.slice(0, idx),
      wrongWord,
      sentence.slice(idx + wrongWord.length),
    ];
  }
  return [sentence, "", ""];
}

/** Renders the mistake sentence with wrong word in red or corrected word in green. */
function MistakeSentence({ sentence, wrongWord, answeredCorrectly, correctAnswer }) {
  const [before, highlighted, after] = splitAtWrongWord(sentence, wrongWord);
  return (
    <span>
      {before}
      {answeredCorrectly ? (
        <strong className="corrected-word">{correctAnswer}</strong>
      ) : (
        <strong className="mistake-word">{highlighted || wrongWord}</strong>
      )}
      {after}
    </span>
  );
}

export default function LessonScreen({ lesson, allQuestions, onFinish, onBack }) {
  const [step, setStep] = useState("intro"); // "intro" | "quiz"
  const [questionIndex, setQuestionIndex] = useState(0);
  const [selected, setSelected] = useState(null);      // correct choice locked in
  const [wrongChoice, setWrongChoice] = useState(null); // Ex2 wrong attempt (retryable)
  const [results, setResults] = useState([]);
  const [showBurst, setShowBurst] = useState(false);
  const [showLeaveConfirm, setShowLeaveConfirm] = useState(false);

  const total = allQuestions.length;
  const current = allQuestions[questionIndex];
  const isCorrect = selected !== null && selected === current.answer;
  const isLast = questionIndex === total - 1;
  const isExerciseTwo = Boolean(current.wrongSentence);

  const progressPct = (questionIndex / total) * 100;

  function handleChoice(choice) {
    if (selected !== null) return; // already locked in correctly

    if (isExerciseTwo) {
      if (choice === current.answer) {
        setWrongChoice(null);
        setSelected(choice);
        setShowBurst(true);
        setTimeout(() => setShowBurst(false), 600);
      } else {
        setWrongChoice(choice); // show hint, keep buttons active for retry
      }
    } else {
      setSelected(choice);
      if (choice === current.answer) {
        setShowBurst(true);
        setTimeout(() => setShowBurst(false), 600);
      }
    }
  }

  function handleNext() {
    const correct = selected === current.answer;
    const newResults = [...results, correct];
    if (isLast) {
      onFinish(newResults);
    } else {
      setResults(newResults);
      setQuestionIndex(questionIndex + 1);
      setSelected(null);
      setWrongChoice(null);
    }
  }

  const correctFeedback = lesson.feedback.correct(current.answer);
  const wrongFeedback = lesson.feedback.wrong(current.answer);

  const showFeedback = selected !== null || wrongChoice !== null;
  const feedbackIsCorrect = selected !== null && isCorrect;

  const leaveConfirmModal = showLeaveConfirm && (
    <div className="confirm-overlay">
      <div className="confirm-card">
        <p className="confirm-title">Leave this lesson?</p>
        <p className="confirm-message">Your progress will be lost.</p>
        <div className="confirm-buttons">
          <button className="confirm-btn-action" onClick={onBack}>Leave</button>
          <button className="confirm-btn-cancel" onClick={() => setShowLeaveConfirm(false)}>Cancel</button>
        </div>
      </div>
    </div>
  );

  // ── INTRO ──────────────────────────────────────────────────────────────────
  if (step === "intro") {
    return (
      <div className="screen lesson-screen">
        {leaveConfirmModal}
        <div className="screen-topbar">
          <button className="back-btn" onClick={() => setShowLeaveConfirm(true)}>←</button>
        </div>
        <div className="lesson-header">
          <span className="badge">{lesson.level}</span>
          <h1>{lesson.title}</h1>
          <p className="lesson-subtitle">{lesson.subtitle}</p>
        </div>

        <div className="rule-card">
          <div className="rule-icon">📖</div>
          <p className="rule-text">{renderBold(lesson.rule)}</p>
          <div className="examples">
            {lesson.examples.map((ex, i) => (
              <div key={i} className="example-row">
                <span className="example-sentence">{renderBold(ex.sentence)}</span>
                <span className="example-note"> — {ex.note}</span>
              </div>
            ))}
          </div>
        </div>

        <div className="exercise-preview">
          {lesson.exercises.map((ex) => (
            <div key={ex.id} className="exercise-chip">
              <span>{ex.icon}</span>
              <span>{ex.label}: {EXERCISE_TYPE_LABELS[ex.type] ?? ex.type}</span>
            </div>
          ))}
        </div>

        <button className="btn-primary" onClick={() => setStep("quiz")}>
          Let's Go! {lesson.characterEmoji}
        </button>
      </div>
    );
  }

  // ── QUIZ ───────────────────────────────────────────────────────────────────

  // Detect exercise boundary for a section label
  const showExerciseLabel =
    questionIndex === 0 ||
    allQuestions[questionIndex].exerciseId !== allQuestions[questionIndex - 1].exerciseId;

  return (
    <div className="screen lesson-screen">
      {leaveConfirmModal}
      <div className="screen-topbar">
        <button className="back-btn" onClick={() => setShowLeaveConfirm(true)}>←</button>
      </div>

      {/* Progress bar */}
      <div className="progress-wrap">
        <div className="progress-bar">
          <div className="progress-fill" style={{ width: `${progressPct}%` }} />
        </div>
        <div className="progress-meta">
          <span className="progress-label">{questionIndex + 1} / {total}</span>
          <span className="streak-label">🔥 {results.filter(Boolean).length} correct</span>
        </div>
      </div>

      {/* Exercise section header */}
      {showExerciseLabel && (
        <div className="exercise-header">
          <span className="exercise-icon">{current.exerciseIcon}</span>
          <span className="exercise-label">{current.exerciseLabel}</span>
          <span className="exercise-type">{EXERCISE_TYPE_LABELS[current.exerciseType] ?? current.exerciseType}</span>
        </div>
      )}

      {/* Story prompt */}
      {current.exerciseStoryPrompt && (
        <div className="story-prompt">{current.exerciseStoryPrompt}</div>
      )}

      {/* Question card */}
      <div className={`question-card ${showBurst ? "burst" : ""}`}>
        <p className="prompt">
          {isExerciseTwo ? (
            <MistakeSentence
              sentence={current.wrongSentence}
              wrongWord={current.wrongWord}
              answeredCorrectly={selected !== null}
              correctAnswer={current.answer}
            />
          ) : (
            current.prompt
          )}
        </p>

        <div className="choices-col">
          {current.choices.map((choice) => {
            let cls = "choice-btn";
            if (selected !== null) {
              // Locked in: show correct green, selected-wrong red
              if (choice === current.answer) cls += " correct";
              else if (choice === selected) cls += " wrong";
            } else if (isExerciseTwo && choice === wrongChoice) {
              // Ex2 wrong attempt: soft red, buttons still active
              cls += " wrong-attempt";
            }
            return (
              <button
                key={choice}
                className={cls}
                onClick={() => handleChoice(choice)}
              >
                {choice}
              </button>
            );
          })}
        </div>
      </div>

      {/* Feedback banner */}
      {showFeedback && (
        <div className={`feedback-banner ${feedbackIsCorrect ? "feedback-correct" : "feedback-wrong"}`}>
          <span className="feedback-emoji">{feedbackIsCorrect ? "🎉" : "🤔"}</span>
          <p>{feedbackIsCorrect ? correctFeedback : wrongFeedback}</p>
        </div>
      )}

      {/* Next button — only appears once answered correctly */}
      {selected !== null && (
        <button
          className={`btn-next ${isCorrect ? "btn-next-correct" : "btn-next-wrong"}`}
          onClick={handleNext}
        >
          {isLast ? "See My Results! 🏆" : "Next →"}
        </button>
      )}
    </div>
  );
}
