import { getProfileColor } from "./profileData";
import { LEVELS, isLevelAccessible, countCompletedTopics } from "./levelData";

const ACCENT_HEADER = {
  green:  "lc-header-green",
  blue:   "lc-header-blue",
  orange: "lc-header-orange",
  purple: "lc-header-purple",
};

export default function HomeScreen({
  xp, streak, onLevelOpen,
  recommendedLevel, profile, onProfileOpen,
}) {
  const xpInLevel = xp % 100;
  const level     = Math.floor(xp / 100) + 1;
  const xpToNext  = 100 - xpInLevel;
  const pc        = profile ? getProfileColor(profile.color) : null;

  const completedTopics = profile?.completedTopics ?? {};
  const studentLevel    = profile?.level ?? "A1";

  return (
    <div className="screen home-screen">

      {/* ── Header ── */}
      {profile ? (
        <div className="home-header home-header-personal">
          <div className="home-greeting-row">
            <button
              className="home-avatar-btn"
              style={{ background: pc.light, border: `2.5px solid ${pc.hex}` }}
              onClick={onProfileOpen}
              aria-label="Open profile"
            >
              {profile.avatar}
            </button>
            <div className="home-greeting-info">
              <span className="home-hi">Hi {profile.name}!</span>
              <span className="home-level-tag">{profile.level}</span>
            </div>
          </div>
        </div>
      ) : (
        <div className="home-header">
          <div className="app-name">GrammarUp</div>
          <p className="app-tagline">Learn English grammar every day!</p>
        </div>
      )}

      {/* ── Stats row ── */}
      <div className="stats-row">
        <div className="xp-block">
          <div className="xp-label-row">
            <span className="xp-icon">⚡</span>
            <span className="xp-text">{xp} XP</span>
            <span className="xp-level-pill">Lv.{level}</span>
          </div>
          <div className="xp-track">
            <div
              className="xp-fill"
              style={{ width: xpInLevel === 0 && xp === 0 ? "0%" : `${Math.max(xpInLevel, 3)}%` }}
            />
          </div>
          <p className="xp-next">{xpToNext} XP to next level</p>
        </div>

        <div className="streak-block">
          <span className="streak-fire">🔥</span>
          <span className="streak-count">{streak}</span>
          <span className="streak-label">day{streak !== 1 ? "s" : ""}</span>
        </div>
      </div>

      {/* ── Level cards ── */}
      <div className="level-cards">
        {LEVELS.map((lvl) => {
          const isRec    = lvl.id === recommendedLevel;
          const locked   = !isLevelAccessible(studentLevel, lvl.id);
          const done     = countCompletedTopics(lvl.topics, completedTopics);

          return (
            <button
              key={lvl.id}
              className={[
                "level-card",
                "lc-tappable",
                isRec  ? "level-card-recommended" : "",
                locked ? "level-card-locked"      : "",
              ].filter(Boolean).join(" ")}
              onClick={() => !locked && onLevelOpen(lvl.id)}
              disabled={locked}
              aria-label={`${lvl.level} ${lvl.tier}${locked ? ", locked" : ""}`}
            >
              <div className={`lc-header ${ACCENT_HEADER[lvl.accent]}`}>
                <span className="lc-emoji">
                  {locked ? "🔒" : lvl.characterEmoji}
                </span>
                <div className="lc-header-text">
                  <div className="lc-badge-row">
                    <span className="lc-badge">{lvl.level}</span>
                    <span className="lc-tier">{lvl.tier}</span>
                  </div>
                  <div className="lc-title">{lvl.character}</div>
                </div>
              </div>

              <div className="lc-body">
                {isRec && (
                  <div className="lc-recommended-badge">⭐ Recommended for you</div>
                )}
                <p className="lc-desc">{lvl.cardDescription}</p>
                <div className="lc-progress-row">
                  <div className="lc-mini-track">
                    <div
                      className="lc-mini-fill"
                      style={{ width: `${(done / lvl.topics.length) * 100}%` }}
                    />
                  </div>
                  <span className="lc-mini-label">
                    {locked ? "Locked" : `${done}/${lvl.topics.length}`}
                  </span>
                </div>
              </div>
            </button>
          );
        })}
      </div>

    </div>
  );
}
