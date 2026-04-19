import { useEffect } from "react";
import { playComplete, playXP } from "./soundEffects";

export default function ScoreScreen({ results, lesson, allQuestions, xpEarned, onRestart, onNextLesson }) {
  const total = results.length;
  const correct = results.filter(Boolean).length;
  const xp = xpEarned;

  const { perfect, good, tryAgain } = lesson.scoreMessages;
  let { emoji, text: message } =
    correct === 9 ? perfect : correct >= 6 ? good : tryAgain;

  const stars = correct === 9 ? 3 : correct >= 6 ? 2 : 1;

  useEffect(() => {
    playComplete();
    const t = setTimeout(playXP, 600);
    return () => clearTimeout(t);
  }, []);

  return (
    <div className="screen score-screen">
      <div className="score-emoji">{emoji}</div>

      <div className="stars-row">
        {[1, 2, 3].map((s) => (
          <span key={s} className={`star ${s <= stars ? "star-lit" : "star-dim"}`}>
            ★
          </span>
        ))}
      </div>

      <div className="score-bubble">
        <span className="score-num">{correct}</span>
        <span className="score-sep">/</span>
        <span className="score-total">{total}</span>
      </div>

      <div className="xp-badge">+{xp} XP earned!</div>

      <p className="score-message">{message}</p>

      <div className="result-grid">
        {results.map((ok, i) => (
          <div key={i} className={`result-tile ${ok ? "tile-correct" : "tile-wrong"}`}>
            <span className="tile-num">{i + 1}</span>
            <span className="tile-icon">{ok ? "✓" : "✗"}</span>
            <span className="tile-word">{allQuestions[i].answer}</span>
          </div>
        ))}
      </div>

      <button className="btn-primary" onClick={onNextLesson}>
        Next Lesson →
      </button>
      <button className="btn-home" onClick={onRestart}>
        Back to Home
      </button>
    </div>
  );
}
