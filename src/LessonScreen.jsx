import { useState } from "react";

function renderBold(text) {
  return (
    <span
      dangerouslySetInnerHTML={{
        __html: text.replace(/\*\*(.*?)\*\*/g, "<strong>$1</strong>"),
      }}
    />
  );
}

export default function LessonScreen({ lesson, allQuestions, onFinish, onBack }) {
  const [step, setStep] = useState("intro"); // "intro" | "quiz"
  const [questionIndex, setQuestionIndex] = useState(0);
  const [selected, setSelected] = useState(null);
  const [results, setResults] = useState([]);
  const [showBurst, setShowBurst] = useState(false);
  const [showLeaveConfirm, setShowLeaveConfirm] = useState(false);

  const total = allQuestions.length;
  const current = allQuestions[questionIndex];
  const isCorrect = selected !== null && selected === current.answer;
  const isLast = questionIndex === total - 1;

  const progressPct = (questionIndex / total) * 100;

  function handleChoice(choice) {
    if (selected !== null) return;
    setSelected(choice);
    if (choice === current.answer) {
      setShowBurst(true);
      setTimeout(() => setShowBurst(false), 600);
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
    }
  }

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
              <span>{ex.label}: {ex.type}</span>
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
  const correctFeedback = lesson.feedback.correct(current.answer);
  const wrongFeedback = lesson.feedback.wrong(current.answer);

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
          <div
            className="progress-fill"
            style={{ width: `${progressPct}%` }}
          />
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
          <span className="exercise-type">{current.exerciseType}</span>
        </div>
      )}

      {/* Question card */}
      <div className={`question-card ${showBurst ? "burst" : ""}`}>
        <p className="prompt">{current.prompt}</p>

        <div className="choices-col">
          {current.choices.map((choice) => {
            let cls = "choice-btn";
            if (selected !== null) {
              if (choice === current.answer) cls += " correct";
              else if (choice === selected) cls += " wrong";
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
      {selected !== null && (
        <div className={`feedback-banner ${isCorrect ? "feedback-correct" : "feedback-wrong"}`}>
          <span className="feedback-emoji">{isCorrect ? "🎉" : "🤔"}</span>
          <p>{isCorrect ? correctFeedback : wrongFeedback}</p>
        </div>
      )}

      {/* Next button */}
      {selected !== null && (
        <button className={`btn-next ${isCorrect ? "btn-next-correct" : "btn-next-wrong"}`} onClick={handleNext}>
          {isLast ? "See My Results! 🏆" : "Next →"}
        </button>
      )}
    </div>
  );
}
