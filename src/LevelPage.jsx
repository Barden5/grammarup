import { LEVELS, countCompletedTopics, isLevelFullyComplete } from "./levelData";


const ACCENT_HEADER = {
  green:  "lc-header-green",
  blue:   "lc-header-blue",
  orange: "lc-header-orange",
  purple: "lc-header-purple",
};

export default function LevelPage({ levelId, lessonsMap, profile, onStart, onFreePractice, onStudyPlan, onBack }) {
  const level              = LEVELS.find((l) => l.id === levelId);
  const completedTopics    = profile?.completedTopics ?? {};
  const topicBestScores    = profile?.topicBestScores ?? {};
  const completedCount     = countCompletedTopics(level.topics, completedTopics);
  const allDone            = isLevelFullyComplete(levelId, completedTopics);
  const fpUnlocked         = allDone;
  const spUnlocked         = allDone;

  function isTopicUnlocked(index) {
    if (index === 0) return true;
    const prev = level.topics[index - 1];
    return prev.lessonId !== null && completedTopics[prev.lessonId] === true;
  }

  return (
    <div className="screen lp-screen">

      {/* Back arrow */}
      <div className="screen-topbar">
        <button className="back-btn" onClick={onBack} aria-label="Back to home">←</button>
      </div>

      {/* Colored header band */}
      <div className={`lp-header ${ACCENT_HEADER[level.accent]}`}>
        <span className="lp-header-emoji">{level.characterEmoji}</span>
        <div className="lp-header-text">
          <div className="lc-badge-row">
            <span className="lc-badge">{level.level}</span>
            <span className="lc-tier">{level.tier} · {level.ageBand}</span>
          </div>
          <div className="lc-title">{level.character}</div>
        </div>
        <div className="lp-header-count">
          <span className="lp-count-num">{completedCount}/{level.topics.length}</span>
        </div>
      </div>

      {/* Topic list */}
      <div className="lp-topic-list">
        {level.topics.map((topic, i) => {

          const done       = topic.lessonId !== null && completedTopics[topic.lessonId] === true;
          const unlocked   = isTopicUnlocked(i);
          const hasLesson  = topic.lessonId !== null;
          const canStart   = unlocked && hasLesson && !done;
          const canReplay  = done && hasLesson;
          const tappable   = canStart || canReplay;

          let rowClass = "lp-topic-row";
          if (done)       rowClass += " lp-topic-done";
          else if (!unlocked) rowClass += " lp-topic-locked";
          else if (canStart)  rowClass += " lp-topic-available";

          return (
            <div
              key={i}
              className={rowClass}
              onClick={() => tappable && onStart(lessonsMap[topic.lessonId])}
              role={tappable ? "button" : undefined}
              tabIndex={tappable ? 0 : undefined}
            >
              {/* Number badge */}
              <div className={`lp-badge ${done ? "lp-badge-done" : !unlocked ? "lp-badge-locked" : "lp-badge-open"}`}>
                {done ? "✓" : i + 1}
              </div>

              {/* Text */}
              <div className="lp-topic-text">
                <span className="lp-topic-title">{topic.title}</span>
                <span className="lp-topic-desc">
                  {!unlocked && !done
                    ? "Complete the previous topic to unlock"
                    : !hasLesson && unlocked
                    ? "Coming soon"
                    : topic.desc}
                </span>
              </div>

              {/* Right side */}
              <div className="lp-topic-right">
                {done ? (
                  <div className="lp-done-right">
                    {topic.lessonId in topicBestScores && (() => {
                      const best = topicBestScores[topic.lessonId];
                      const scoreClass = best === 9
                        ? "lp-best-score lp-best-score-perfect"
                        : best >= 6
                        ? "lp-best-score"
                        : "lp-best-score lp-best-score-low";
                      return (
                        <span className={scoreClass}>
                          {best}/9{best === 9 ? " ★" : ""}
                        </span>
                      );
                    })()}
                    <span className="lp-replay-badge" aria-label="Replay">
                      <span className="lp-replay-icon">↺</span>
                      <span className="lp-replay-text">Replay</span>
                    </span>
                  </div>
                ) : !unlocked ? (
                  <span className="lp-lock" aria-label="Locked">🔒</span>
                ) : canStart ? (
                  <span className="lp-start-arrow">›</span>
                ) : (
                  <span className="lp-soon-tag">Soon</span>
                )}
              </div>
            </div>
          );
        })}
      </div>

      {/* Free Practice card */}
      <div
        className={`fp-card ${fpUnlocked ? "fp-card-unlocked" : "fp-card-locked"}`}
        onClick={() => fpUnlocked && onFreePractice(levelId)}
        role={fpUnlocked ? "button" : undefined}
        tabIndex={fpUnlocked ? 0 : undefined}
      >
        <div className="fp-card-icon">{fpUnlocked ? "✨" : "🔒"}</div>
        <div className="fp-card-text">
          <span className="fp-card-title">Free Practice</span>
          <span className="fp-card-desc">
            {fpUnlocked
              ? "AI-generated lessons just for you!"
              : "Complete all topics to unlock"}
          </span>
        </div>
        {fpUnlocked && <div className="fp-card-arrow">›</div>}
      </div>

      {/* My Study Plan card */}
      <div
        className={`sp-lp-card ${spUnlocked ? "sp-lp-card-unlocked" : "sp-lp-card-locked"}`}
        onClick={() => spUnlocked && onStudyPlan(levelId)}
        role={spUnlocked ? "button" : undefined}
        tabIndex={spUnlocked ? 0 : undefined}
      >
        <div className="sp-lp-card-icon">{spUnlocked ? "🎯" : "🔒"}</div>
        <div className="sp-lp-card-text">
          <span className="sp-lp-card-title">My Study Plan</span>
          <span className="sp-lp-card-desc">
            {spUnlocked
              ? "Choose your topics. AI builds your lesson."
              : "Complete all topics to unlock"}
          </span>
        </div>
        {spUnlocked && <div className="sp-lp-card-arrow">›</div>}
      </div>

    </div>
  );
}
