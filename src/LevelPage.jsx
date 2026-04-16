import { LEVELS, countCompletedTopics } from "./levelData";

const ACCENT_HEADER = {
  green:  "lc-header-green",
  blue:   "lc-header-blue",
  orange: "lc-header-orange",
  purple: "lc-header-purple",
};

export default function LevelPage({ levelId, lessonsMap, profile, onStart, onBack }) {
  const level          = LEVELS.find((l) => l.id === levelId);
  const completedTopics = profile?.completedTopics ?? {};
  const completedCount  = countCompletedTopics(level.topics, completedTopics);

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
          <span className="lp-count-num">{completedCount}/8</span>
          <span className="lp-count-label">done</span>
        </div>
      </div>

      {/* Topic list */}
      <div className="lp-topic-list">
        {level.topics.map((topic, i) => {
          const done       = topic.lessonId !== null && completedTopics[topic.lessonId] === true;
          const unlocked   = isTopicUnlocked(i);
          const hasLesson  = topic.lessonId !== null;
          const canStart   = unlocked && hasLesson && !done;

          let rowClass = "lp-topic-row";
          if (done)       rowClass += " lp-topic-done";
          else if (!unlocked) rowClass += " lp-topic-locked";
          else if (canStart)  rowClass += " lp-topic-available";

          return (
            <div
              key={i}
              className={rowClass}
              onClick={() => canStart && onStart(lessonsMap[topic.lessonId])}
              role={canStart ? "button" : undefined}
              tabIndex={canStart ? 0 : undefined}
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
                  <span className="lp-done-check" aria-label="Completed">✅</span>
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

    </div>
  );
}
