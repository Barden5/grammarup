import { useState } from "react";
import HomeScreen from "./HomeScreen";
import LessonScreen from "./LessonScreen";
import ScoreScreen from "./ScoreScreen";
import PlacementTest from "./PlacementTest";
import ProfileSetup from "./ProfileSetup";
import ProfileScreen from "./ProfileScreen";
import { lesson as a1Lesson, allQuestions as a1Questions } from "./lesson";
import { lesson as a2Lesson, allQuestions as a2Questions } from "./lessonA2";
import { lesson as b1Lesson, allQuestions as b1Questions } from "./lessonB1";
import { lesson as b2Lesson, allQuestions as b2Questions } from "./lessonB2";
import "./App.css";

const PLACEMENT_KEY = "grammarup_placement_done";
const PROFILE_KEY   = "grammarup_profile";

const LESSONS = [
  { lesson: a1Lesson, allQuestions: a1Questions },
  { lesson: a2Lesson, allQuestions: a2Questions },
  { lesson: b1Lesson, allQuestions: b1Questions },
  { lesson: b2Lesson, allQuestions: b2Questions },
];

function getXpEarned(results) {
  const correct = results.filter(Boolean).length;
  if (correct === 9) return 30;
  if (correct >= 6)  return 20;
  if (correct >= 4)  return 10;
  return 5;
}

function loadProfile() {
  try { return JSON.parse(localStorage.getItem(PROFILE_KEY)) ?? null; }
  catch { return null; }
}

export default function App() {
  const [profile, setProfile] = useState(loadProfile);

  const [screen, setScreen] = useState(() => {
    if (!localStorage.getItem(PLACEMENT_KEY)) return "placement";
    if (!loadProfile())                        return "profile-setup";
    return "home";
  });

  const [results,       setResults]       = useState([]);
  const [activeLesson,  setActiveLesson]  = useState(null);
  const [xp,            setXp]           = useState(() => loadProfile()?.xp ?? 0);
  const [streak]                          = useState(1);
  const [xpEarned,      setXpEarned]     = useState(0);
  const [recommendedLevel, setRecommendedLevel] = useState(() => loadProfile()?.level ?? null);

  // ── Persistence helper ────────────────────────────────────────────────────
  function saveProfile(data) {
    setProfile(data);
    localStorage.setItem(PROFILE_KEY, JSON.stringify(data));
  }

  // ── Placement ─────────────────────────────────────────────────────────────
  function handlePlacementComplete(level) {
    localStorage.setItem(PLACEMENT_KEY, "1");
    setRecommendedLevel(level);
    if (!profile) {
      // First time — go collect profile info
      setScreen("profile-setup");
    } else {
      // Retake — update level, skip setup
      saveProfile({ ...profile, level });
      setScreen("home");
    }
  }

  // ── Profile setup (first time) ────────────────────────────────────────────
  function handleProfileSetupComplete(data) {
    const newProfile = {
      ...data,
      level:            recommendedLevel ?? "A1",
      xp:               0,
      lessonsCompleted: 0,
    };
    saveProfile(newProfile);
    setXp(0);
    setScreen("home");
  }

  // ── Profile edit (anytime from profile screen) ────────────────────────────
  function handleProfileEdit(updates) {
    saveProfile({ ...profile, ...updates });
  }

  // ── Placement retake ──────────────────────────────────────────────────────
  function handleRetakePlacement() {
    localStorage.removeItem(PLACEMENT_KEY);
    setScreen("placement");
  }

  // ── Lesson flow ───────────────────────────────────────────────────────────
  function handleStart(lessonData) {
    setActiveLesson(lessonData);
    setScreen("lesson");
  }

  function handleFinish(newResults) {
    const earned = getXpEarned(newResults);
    const newXp  = xp + earned;
    setXp(newXp);
    setXpEarned(earned);
    setResults(newResults);
    if (profile) {
      saveProfile({
        ...profile,
        xp:               newXp,
        lessonsCompleted: (profile.lessonsCompleted ?? 0) + 1,
      });
    }
    setScreen("score");
  }

  function handleRestart() {
    setResults([]);
    setActiveLesson(null);
    setScreen("home");
  }

  // ── Render ────────────────────────────────────────────────────────────────
  return (
    <div className="app">

      {screen === "placement" && (
        <PlacementTest onComplete={handlePlacementComplete} />
      )}

      {screen === "profile-setup" && (
        <ProfileSetup
          recommendedLevel={recommendedLevel}
          onComplete={handleProfileSetupComplete}
        />
      )}

      {screen === "home" && (
        <HomeScreen
          lessons={LESSONS}
          xp={xp}
          streak={streak}
          onStart={handleStart}
          recommendedLevel={recommendedLevel}
          profile={profile}
          onProfileOpen={() => setScreen("profile")}
        />
      )}

      {screen === "profile" && profile && (
        <ProfileScreen
          profile={profile}
          xp={xp}
          onBack={() => setScreen("home")}
          onEdit={handleProfileEdit}
          onRetakePlacement={handleRetakePlacement}
        />
      )}

      {screen === "lesson" && activeLesson && (
        <LessonScreen
          lesson={activeLesson.lesson}
          allQuestions={activeLesson.allQuestions}
          onFinish={handleFinish}
        />
      )}

      {screen === "score" && activeLesson && (
        <ScoreScreen
          results={results}
          lesson={activeLesson.lesson}
          allQuestions={activeLesson.allQuestions}
          xpEarned={xpEarned}
          onRestart={handleRestart}
        />
      )}

    </div>
  );
}
