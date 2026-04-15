import { useState } from "react";
import { PROFILE_COLORS, PROFILE_AVATARS, getProfileColor } from "./profileData";

// ── View mode ─────────────────────────────────────────────────────────────────
function ProfileView({ profile, xp, onBack, onEditStart, onRetake }) {
  const pc = getProfileColor(profile.color);

  return (
    <div className="screen pv-screen">

      {/* Top bar */}
      <div className="pv-topbar">
        <button className="pv-back-btn" onClick={onBack}>← Back</button>
        <button className="pv-edit-btn" onClick={onEditStart}>Edit</button>
      </div>

      {/* Avatar */}
      <div
        className="pv-avatar-circle"
        style={{ background: pc.light, border: `4px solid ${pc.hex}` }}
      >
        {profile.avatar}
      </div>

      <h2 className="pv-name">{profile.name}</h2>
      <p className="pv-grade">{profile.grade}</p>

      {/* Stats */}
      <div className="pv-stats-card">
        <div className="pv-stat">
          <span className="pv-stat-value">{profile.level}</span>
          <span className="pv-stat-label">Level</span>
        </div>
        <div className="pv-stat-divider" />
        <div className="pv-stat">
          <span className="pv-stat-value">{xp}</span>
          <span className="pv-stat-label">XP</span>
        </div>
        <div className="pv-stat-divider" />
        <div className="pv-stat">
          <span className="pv-stat-value">{profile.lessonsCompleted ?? 0}</span>
          <span className="pv-stat-label">Lessons</span>
        </div>
      </div>

      {/* Actions */}
      <div className="pv-actions">
        <button className="pv-retake-btn" onClick={onRetake}>
          🔄 Retake placement test
        </button>
      </div>

    </div>
  );
}

// ── Edit mode ─────────────────────────────────────────────────────────────────
function ProfileEdit({ profile, onSave, onCancel }) {
  const [name,   setName]   = useState(profile.name);
  const [color,  setColor]  = useState(profile.color);
  const [avatar, setAvatar] = useState(profile.avatar);

  const pc = getProfileColor(color);

  function handleSave() {
    if (!name.trim()) return;
    onSave({ name: name.trim(), color, avatar });
  }

  return (
    <div className="screen pv-screen">

      {/* Top bar */}
      <div className="pv-topbar">
        <button className="pv-back-btn" onClick={onCancel}>Cancel</button>
        <button className="pv-edit-btn pv-save-btn" onClick={handleSave}>Save</button>
      </div>

      {/* Live avatar preview */}
      <div
        className="pv-avatar-circle"
        style={{ background: pc.light, border: `4px solid ${pc.hex}` }}
      >
        {avatar}
      </div>

      {/* Name */}
      <div className="ps-section" style={{ width: "100%" }}>
        <label className="ps-label">Name</label>
        <input
          className="ps-input"
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
          maxLength={30}
          autoComplete="off"
        />
      </div>

      {/* Favorite color */}
      <div className="ps-section" style={{ width: "100%" }}>
        <label className="ps-label">Favorite color</label>
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
      <div className="ps-section" style={{ width: "100%" }}>
        <label className="ps-label">Your character</label>
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

    </div>
  );
}

// ── Root ──────────────────────────────────────────────────────────────────────
export default function ProfileScreen({ profile, xp, onBack, onEdit, onRetakePlacement }) {
  const [editing, setEditing] = useState(false);

  if (editing) {
    return (
      <ProfileEdit
        profile={profile}
        onSave={(updates) => { onEdit(updates); setEditing(false); }}
        onCancel={() => setEditing(false)}
      />
    );
  }

  return (
    <ProfileView
      profile={profile}
      xp={xp}
      onBack={onBack}
      onEditStart={() => setEditing(true)}
      onRetake={onRetakePlacement}
    />
  );
}
