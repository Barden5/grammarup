import { useState } from "react";
import { PROFILE_COLORS, PROFILE_AVATARS, GRADES, getProfileColor } from "./profileData";

// ── STEP 1: Form ─────────────────────────────────────────────────────────────
function SetupForm({ onSubmit }) {
  const [name,   setName]   = useState("");
  const [grade,  setGrade]  = useState("");
  const [color,  setColor]  = useState("");
  const [avatar, setAvatar] = useState("");

  const canContinue = name.trim() && grade && color && avatar;

  return (
    <div className="screen ps-form-screen">

      <div className="ps-form-header">
        <div className="ps-header-emoji">✏️</div>
        <h1 className="ps-form-title">Tell us about you!</h1>
        <p className="ps-form-subtitle">Help us make GrammarUp just for you.</p>
      </div>

      {/* Name */}
      <div className="ps-section">
        <label className="ps-label">What's your name?</label>
        <input
          className="ps-input"
          type="text"
          placeholder="Type your first name…"
          value={name}
          onChange={(e) => setName(e.target.value)}
          maxLength={30}
          autoComplete="off"
        />
      </div>

      {/* Grade */}
      <div className="ps-section">
        <label className="ps-label">What grade are you in?</label>
        <div className="ps-select-wrap">
          <select
            className="ps-select"
            value={grade}
            onChange={(e) => setGrade(e.target.value)}
          >
            <option value="">Pick your grade…</option>
            {GRADES.map((g) => (
              <option key={g} value={g}>{g}</option>
            ))}
          </select>
          <span className="ps-select-arrow">▾</span>
        </div>
      </div>

      {/* Favorite color */}
      <div className="ps-section">
        <label className="ps-label">Pick your favorite color</label>
        <div className="ps-colors">
          {PROFILE_COLORS.map((c) => (
            <button
              key={c.id}
              className={`ps-color-circle${color === c.id ? " ps-color-selected" : ""}`}
              style={{ background: c.hex }}
              onClick={() => setColor(c.id)}
              aria-label={c.id}
            />
          ))}
        </div>
      </div>

      {/* Avatar */}
      <div className="ps-section">
        <label className="ps-label">Choose your character</label>
        <div className="ps-avatars">
          {PROFILE_AVATARS.map((a) => (
            <button
              key={a}
              className={`ps-avatar-btn${avatar === a ? " ps-avatar-selected" : ""}`}
              onClick={() => setAvatar(a)}
            >
              {a}
            </button>
          ))}
        </div>
      </div>

      <button
        className="btn-primary"
        onClick={() => onSubmit({ name: name.trim(), grade, color, avatar })}
        disabled={!canContinue}
        style={{ opacity: canContinue ? 1 : 0.4 }}
      >
        Continue →
      </button>

    </div>
  );
}

// ── STEP 2: Welcome ───────────────────────────────────────────────────────────
function WelcomeSplash({ name, avatar, color, level, onFinish }) {
  const pc = getProfileColor(color);
  return (
    <div className="screen ps-welcome-screen">

      <div
        className="ps-welcome-avatar"
        style={{ background: pc.light, border: `3px solid ${pc.hex}` }}
      >
        {avatar}
      </div>

      <div className="ps-welcome-text">
        <h1 className="ps-welcome-title">
          Welcome to GrammarUp,<br />{name}!
        </h1>
        <p className="ps-welcome-msg">
          You're starting at <strong>{level}</strong>. Let's do this!
        </p>
      </div>

      <button className="btn-primary" onClick={onFinish}>
        Let's go! 🚀
      </button>

    </div>
  );
}

// ── Root ──────────────────────────────────────────────────────────────────────
export default function ProfileSetup({ recommendedLevel, onComplete }) {
  const [step,    setStep]   = useState("form"); // "form" | "welcome"
  const [formData, setFormData] = useState(null);

  function handleFormSubmit(data) {
    setFormData(data);
    setStep("welcome");
  }

  if (step === "welcome" && formData) {
    return (
      <WelcomeSplash
        {...formData}
        level={recommendedLevel || "A1"}
        onFinish={() => onComplete(formData)}
      />
    );
  }

  return <SetupForm onSubmit={handleFormSubmit} />;
}
