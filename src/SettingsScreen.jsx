import { useState } from "react";
import { getSoundEnabled, setSoundEnabled } from "./soundEffects";

export default function SettingsScreen({ onBack, onSignOut }) {
  const [soundOn, setSoundOn] = useState(getSoundEnabled);

  function toggleSound() {
    const next = !soundOn;
    setSoundOn(next);
    setSoundEnabled(next);
  }

  return (
    <div className="screen settings-screen">

      {/* Top bar */}
      <div className="settings-topbar">
        <button className="settings-back-btn" onClick={onBack} aria-label="Back">
          ← Back
        </button>
        <h1 className="settings-title">Settings</h1>
        <div className="settings-topbar-spacer" />
      </div>

      {/* Settings rows */}
      <div className="settings-list">

        <div className="settings-row">
          <div className="settings-row-info">
            <span className="settings-row-icon">🔊</span>
            <span className="settings-row-label">Sound effects</span>
          </div>
          <button
            className={`settings-toggle ${soundOn ? "toggle-on" : "toggle-off"}`}
            onClick={toggleSound}
            role="switch"
            aria-checked={soundOn}
            aria-label="Toggle sound effects"
          >
            <span className="toggle-thumb" />
          </button>
        </div>

      </div>

      {/* Sign out */}
      {onSignOut && (
        <div className="settings-signout-area">
          <button className="settings-signout-btn" onClick={onSignOut}>
            Sign out
          </button>
        </div>
      )}

      {/* Version */}
      <p className="settings-version">GrammarUp v1.0</p>

    </div>
  );
}
