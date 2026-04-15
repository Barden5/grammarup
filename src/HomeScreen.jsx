import { getProfileColor } from "./profileData";

const ACCENT = {
  green:  { header: "lc-header-green",  btn: "lc-btn-green"  },
  blue:   { header: "lc-header-blue",   btn: "lc-btn-blue"   },
  orange: { header: "lc-header-orange", btn: "lc-btn-orange" },
  purple: { header: "lc-header-purple", btn: "lc-btn-purple" },
};

export default function HomeScreen({
  lessons, xp, streak, onStart,
  recommendedLevel, profile, onProfileOpen,
}) {
  const xpInLevel = xp % 100;
  const level     = Math.floor(xp / 100) + 1;
  const xpToNext  = 100 - xpInLevel;
  const pc        = profile ? getProfileColor(profile.color) : null;

  return (
    <div className="screen home-screen">

      {/* ── Header ── */}
      {profile ? (
        /* Personalized header */
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
        /* Default header (no profile yet) */
        <div className="home-header">
          <div className="app-name">GrammarUp</div>
          <p className="app-tagline">Learn English grammar every day!</p>
        </div>
      )}

      {/* ── Stats row: XP bar + streak ── */}
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
        {lessons.map(({ lesson, allQuestions }) => {
          const ac       = ACCENT[lesson.accent] ?? ACCENT.purple;
          const isRec    = lesson.level === recommendedLevel;
          return (
            <div
              key={lesson.id}
              className={`level-card${isRec ? " level-card-recommended" : ""}`}
            >
              <div className={`lc-header ${ac.header}`}>
                <span className="lc-emoji">{lesson.characterEmoji}</span>
                <div className="lc-header-text">
                  <div className="lc-badge-row">
                    <span className="lc-badge">{lesson.level}</span>
                    <span className="lc-tier">{lesson.tier}</span>
                  </div>
                  <div className="lc-title">{lesson.character}</div>
                </div>
              </div>
              <div className="lc-body">
                {isRec && (
                  <div className="lc-recommended-badge">⭐ Recommended for you</div>
                )}
                <p className="lc-desc">{lesson.cardDescription}</p>
                <button
                  className={`lc-btn ${ac.btn}`}
                  onClick={() => onStart({ lesson, allQuestions })}
                >
                  Start Lesson 🚀
                </button>
              </div>
            </div>
          );
        })}
      </div>

    </div>
  );
}
