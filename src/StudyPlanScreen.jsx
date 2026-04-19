import { useState } from "react";
import { getUnlockedStudyPlanLevels } from "./levelData";

export default function StudyPlanScreen({ profile, onBack, onGenerate }) {
  const completedTopics   = profile?.completedTopics ?? {};
  const unlockedLevels    = getUnlockedStudyPlanLevels(completedTopics);

  const [selectedLevelId, setSelectedLevelId] = useState(
    unlockedLevels[0]?.id ?? null
  );
  const [selectedTopics, setSelectedTopics] = useState([]);

  const currentLevel = unlockedLevels.find((l) => l.id === selectedLevelId);

  // When switching level tabs, clear topic selection
  function handleLevelSwitch(id) {
    setSelectedLevelId(id);
    setSelectedTopics([]);
  }

  function toggleTopic(title) {
    setSelectedTopics((prev) => {
      if (prev.includes(title)) return prev.filter((t) => t !== title);
      if (prev.length >= 4) return prev; // already at max
      return [...prev, title];
    });
  }

  const count    = selectedTopics.length;
  const canStart = count >= 2 && count <= 4;

  return (
    <div className="screen sp-screen">

      {/* Top bar */}
      <div className="sp-topbar">
        <button className="sp-back-btn" onClick={onBack} aria-label="Back">← Back</button>
        <h1 className="sp-title">My Study Plan</h1>
        <div className="sp-topbar-spacer" />
      </div>

      <p className="sp-subtitle">
        Pick 2 to 4 topics you want to practise. We'll build a lesson just for you.
      </p>

      {/* Level tabs — only shown if more than one level unlocked */}
      {unlockedLevels.length > 1 && (
        <div className="sp-level-tabs">
          {unlockedLevels.map((lvl) => (
            <button
              key={lvl.id}
              className={`sp-level-tab ${selectedLevelId === lvl.id ? "sp-level-tab-active" : ""}`}
              onClick={() => handleLevelSwitch(lvl.id)}
            >
              {lvl.characterEmoji} {lvl.level}
            </button>
          ))}
        </div>
      )}

      {/* Topic cards */}
      {currentLevel && (
        <div className="sp-topics-grid">
          {currentLevel.topics.map((topic) => {
            const active = selectedTopics.includes(topic.title);
            const disabled = !active && count >= 4;
            return (
              <button
                key={topic.lessonId}
                className={[
                  "sp-topic-card",
                  active    ? "sp-topic-active"    : "",
                  disabled  ? "sp-topic-disabled"  : "",
                ].filter(Boolean).join(" ")}
                onClick={() => !disabled && toggleTopic(topic.title)}
                aria-pressed={active}
              >
                {active && <span className="sp-topic-check">✓</span>}
                <span className="sp-topic-title">{topic.title}</span>
                <span className="sp-topic-desc">{topic.desc}</span>
              </button>
            );
          })}
        </div>
      )}

      {/* Counter + generate */}
      <div className="sp-footer">
        <p className="sp-counter">
          {count === 0
            ? "Select 2 to 4 topics to begin"
            : count === 1
            ? "1 of 4 selected — pick at least one more"
            : `${count} of 4 selected`}
        </p>
        <button
          className="btn-primary sp-generate-btn"
          disabled={!canStart}
          style={{ opacity: canStart ? 1 : 0.4 }}
          onClick={() => onGenerate(selectedLevelId, selectedTopics)}
        >
          ✨ Generate my lesson
        </button>
      </div>

    </div>
  );
}
