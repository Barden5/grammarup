import { useState } from "react";
import HomeScreen from "./HomeScreen";
import LevelPage from "./LevelPage";
import LessonScreen from "./LessonScreen";
import ScoreScreen from "./ScoreScreen";
import PlacementTest from "./PlacementTest";
import ProfileSetup from "./ProfileSetup";
import ProfileScreen from "./ProfileScreen";
import FreePracticeLoader from "./FreePracticeLoader";
import { lesson as a1Lesson, allQuestions as a1Questions } from "./lesson";
import { lesson as a2Lesson, allQuestions as a2Questions } from "./lessonA2";
import { lesson as b1Lesson, allQuestions as b1Questions } from "./lessonB1";
import { lesson as b2Lesson, allQuestions as b2Questions } from "./lessonB2";
import {
  lessonA1Topic2, allQuestionsA1Topic2,
  lessonA1Topic3, allQuestionsA1Topic3,
  lessonA1Topic4, allQuestionsA1Topic4,
  lessonA1Topic5, allQuestionsA1Topic5,
  lessonA1Topic6, allQuestionsA1Topic6,
  lessonA1Topic7, allQuestionsA1Topic7,
  lessonA1Topic8, allQuestionsA1Topic8,
} from "./lessonsA1";
import "./App.css";

const PLACEMENT_KEY = "grammarup_placement_done";
const PROFILE_KEY   = "grammarup_profile";

const LESSONS_MAP = {
  "a1-simple-present":    { lesson: a1Lesson,       allQuestions: a1Questions },
  "a1-nouns-plurals":     { lesson: lessonA1Topic2,  allQuestions: allQuestionsA1Topic2 },
  "a1-articles":          { lesson: lessonA1Topic3,  allQuestions: allQuestionsA1Topic3 },
  "a1-subject-pronouns":  { lesson: lessonA1Topic4,  allQuestions: allQuestionsA1Topic4 },
  "a1-verb-to-be":        { lesson: lessonA1Topic5,  allQuestions: allQuestionsA1Topic5 },
  "a1-basic-adjectives":  { lesson: lessonA1Topic6,  allQuestions: allQuestionsA1Topic6 },
  "a1-simple-sentences":  { lesson: lessonA1Topic7,  allQuestions: allQuestionsA1Topic7 },
  "a1-possessives":       { lesson: lessonA1Topic8,  allQuestions: allQuestionsA1Topic8 },
  "a2-simple-past":       { lesson: a2Lesson,        allQuestions: a2Questions },
  "b1-modal-verbs":       { lesson: b1Lesson,        allQuestions: b1Questions },
  "b2-relative-clauses":  { lesson: b2Lesson,        allQuestions: b2Questions },
};

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

  const [results,           setResults]         = useState([]);
  const [activeLesson,      setActiveLesson]    = useState(null);
  const [selectedLevel,     setSelectedLevel]   = useState(null);
  const [fpLevel,           setFpLevel]         = useState(null);
  const [xp,               setXp]             = useState(() => loadProfile()?.xp ?? 0);
  const [streak]                               = useState(1);
  const [xpEarned,         setXpEarned]       = useState(0);
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
      setScreen("profile-setup");
    } else {
      saveProfile({ ...profile, level });
      setScreen("home");
    }
  }

  function handlePlacementQuit() {
    if (profile) setScreen("home");
    // First-time user: PlacementTest resets to intro internally
  }

  // ── Profile setup (first time) ────────────────────────────────────────────
  function handleProfileSetupComplete(data) {
    const newProfile = {
      ...data,
      level:            recommendedLevel ?? "A1",
      xp:               0,
      lessonsCompleted: 0,
      completedTopics:  {},
    };
    saveProfile(newProfile);
    setXp(0);
    setScreen("home");
  }

  // ── Profile edit ──────────────────────────────────────────────────────────
  function handleProfileEdit(updates) {
    saveProfile({ ...profile, ...updates });
  }

  // ── Placement retake ──────────────────────────────────────────────────────
  function handleRetakePlacement() {
    localStorage.removeItem(PLACEMENT_KEY);
    setScreen("placement");
  }

  // ── Level page navigation ─────────────────────────────────────────────────
  function handleLevelOpen(levelId) {
    setSelectedLevel(levelId);
    setScreen("level");
  }

  function handleLevelBack() {
    setSelectedLevel(null);
    setScreen("home");
  }

  // ── Free Practice flow ────────────────────────────────────────────────────
  function handleFreePracticeStart(levelId) {
    setFpLevel(levelId);
    setScreen("free-practice");
  }

  function handleFreePracticeReady(lessonData) {
    setFpLevel(null);
    handleStart(lessonData);
  }

  function handleFreePracticeBack() {
    setFpLevel(null);
    setScreen("level");
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
      const isFreePractice = activeLesson.lesson.isFreePractice;
      const completedTopics = isFreePractice
        ? (profile.completedTopics ?? {})
        : { ...(profile.completedTopics ?? {}), [activeLesson.lesson.id]: true };
      saveProfile({
        ...profile,
        xp:               newXp,
        lessonsCompleted: (profile.lessonsCompleted ?? 0) + 1,
        completedTopics,
      });
    }
    setScreen("score");
  }

  function handleRestart() {
    setResults([]);
    setActiveLesson(null);
    setSelectedLevel(null);
    setScreen("home");
  }

  function handleLessonBack() {
    setResults([]);
    setActiveLesson(null);
    setScreen("level"); // return to level page, not home
  }

  function handleNextLesson() {
    setResults([]);
    setActiveLesson(null);
    setScreen("level"); // selectedLevel stays set — lands on current level page
  }

  // ── Render ────────────────────────────────────────────────────────────────
  return (
    <div className="app">

      {screen === "placement" && (
        <PlacementTest onComplete={handlePlacementComplete} onQuit={handlePlacementQuit} />
      )}

      {screen === "profile-setup" && (
        <ProfileSetup
          recommendedLevel={recommendedLevel}
          onComplete={handleProfileSetupComplete}
        />
      )}

      {screen === "home" && (
        <HomeScreen
          xp={xp}
          streak={streak}
          onLevelOpen={handleLevelOpen}
          recommendedLevel={recommendedLevel}
          profile={profile}
          onProfileOpen={() => setScreen("profile")}
        />
      )}

      {screen === "level" && selectedLevel && (
        <LevelPage
          levelId={selectedLevel}
          lessonsMap={LESSONS_MAP}
          profile={profile}
          onStart={handleStart}
          onFreePractice={handleFreePracticeStart}
          onBack={handleLevelBack}
        />
      )}

      {screen === "free-practice" && fpLevel && (
        <FreePracticeLoader
          levelId={fpLevel}
          onLessonReady={handleFreePracticeReady}
          onBack={handleFreePracticeBack}
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
          onBack={handleLessonBack}
        />
      )}

      {screen === "score" && activeLesson && (
        <ScoreScreen
          results={results}
          lesson={activeLesson.lesson}
          allQuestions={activeLesson.allQuestions}
          xpEarned={xpEarned}
          onRestart={handleRestart}
          onNextLesson={handleNextLesson}
        />
      )}

    </div>
  );
}
