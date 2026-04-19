const SOUNDS_KEY = "grammarup_sounds";

export function getSoundEnabled() {
  try {
    const val = localStorage.getItem(SOUNDS_KEY);
    return val === null ? true : val === "true";
  } catch {
    return true;
  }
}

export function setSoundEnabled(enabled) {
  try {
    localStorage.setItem(SOUNDS_KEY, String(enabled));
  } catch {}
}

function getCtx() {
  try {
    return new (window.AudioContext || window.webkitAudioContext)();
  } catch {
    return null;
  }
}

function playTone(ctx, freq, startTime, duration, type = "sine", gainVal = 0.3) {
  const osc  = ctx.createOscillator();
  const gain = ctx.createGain();
  osc.connect(gain);
  gain.connect(ctx.destination);
  osc.type = type;
  osc.frequency.setValueAtTime(freq, startTime);
  gain.gain.setValueAtTime(gainVal, startTime);
  gain.gain.exponentialRampToValueAtTime(0.001, startTime + duration);
  osc.start(startTime);
  osc.stop(startTime + duration);
}

// Correct answer — bright ascending two-note chime
export function playCorrect() {
  if (!getSoundEnabled()) return;
  const ctx  = getCtx();
  if (!ctx) return;
  const now  = ctx.currentTime;
  playTone(ctx, 523.25, now,        0.18, "sine", 0.28); // C5
  playTone(ctx, 783.99, now + 0.13, 0.22, "sine", 0.28); // G5
}

// Wrong answer — gentle low buzz
export function playWrong() {
  if (!getSoundEnabled()) return;
  const ctx = getCtx();
  if (!ctx) return;
  const now = ctx.currentTime;
  playTone(ctx, 180, now,        0.12, "sawtooth", 0.15);
  playTone(ctx, 160, now + 0.10, 0.18, "sawtooth", 0.10);
}

// Lesson complete — short celebratory fanfare (4-note ascending arpeggio)
export function playComplete() {
  if (!getSoundEnabled()) return;
  const ctx = getCtx();
  if (!ctx) return;
  const now   = ctx.currentTime;
  const notes = [523.25, 659.25, 783.99, 1046.5]; // C5 E5 G5 C6
  notes.forEach((freq, i) => {
    playTone(ctx, freq, now + i * 0.12, 0.22, "sine", 0.25);
  });
}

// XP earned — quick ascending sparkle (rapid 5-note flurry)
export function playXP() {
  if (!getSoundEnabled()) return;
  const ctx = getCtx();
  if (!ctx) return;
  const now   = ctx.currentTime;
  const notes = [659.25, 783.99, 880, 1046.5, 1318.5]; // E5 G5 A5 C6 E6
  notes.forEach((freq, i) => {
    playTone(ctx, freq, now + i * 0.07, 0.14, "sine", 0.18);
  });
}
