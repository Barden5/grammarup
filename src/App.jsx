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
  lessonA1Topic2,  allQuestionsA1Topic2,
  lessonA1Topic3,  allQuestionsA1Topic3,
  lessonA1Topic4,  allQuestionsA1Topic4,
  lessonA1Topic5,  allQuestionsA1Topic5,
  lessonA1Topic6,  allQuestionsA1Topic6,
  lessonA1Topic7,  allQuestionsA1Topic7,
  lessonA1Topic8,  allQuestionsA1Topic8,
  lessonA1Topic9,  allQuestionsA1Topic9,
  lessonA1Topic10, allQuestionsA1Topic10,
  lessonA1Topic11, allQuestionsA1Topic11,
  lessonA1Topic12, allQuestionsA1Topic12,
  lessonA1Topic13, allQuestionsA1Topic13,
} from "./lessonsA1";
import {
  lessonA2Topic2,  allQuestionsA2Topic2,
  lessonA2Topic3,  allQuestionsA2Topic3,
  lessonA2Topic4,  allQuestionsA2Topic4,
  lessonA2Topic5,  allQuestionsA2Topic5,
  lessonA2Topic6,  allQuestionsA2Topic6,
  lessonA2Topic7,  allQuestionsA2Topic7,
  lessonA2Topic8,  allQuestionsA2Topic8,
  lessonA2Topic9,  allQuestionsA2Topic9,
  lessonA2Topic10, allQuestionsA2Topic10,
} from "./lessonsA2";
import {
  lessonB1Topic2,  allQuestionsB1Topic2,
  lessonB1Topic3,  allQuestionsB1Topic3,
  lessonB1Topic4,  allQuestionsB1Topic4,
  lessonB1Topic5,  allQuestionsB1Topic5,
  lessonB1Topic6,  allQuestionsB1Topic6,
  lessonB1Topic7,  allQuestionsB1Topic7,
  lessonB1Topic8,  allQuestionsB1Topic8,
  lessonB1Topic9,  allQuestionsB1Topic9,
  lessonB1Topic10, allQuestionsB1Topic10,
} from "./lessonsB1";
import {
  lessonB2Topic2,  allQuestionsB2Topic2,
  lessonB2Topic3,  allQuestionsB2Topic3,
  lessonB2Topic4,  allQuestionsB2Topic4,
  lessonB2Topic5,  allQuestionsB2Topic5,
  lessonB2Topic6,  allQuestionsB2Topic6,
  lessonB2Topic7,  allQuestionsB2Topic7,
  lessonB2Topic8,  allQuestionsB2Topic8,
  lessonB2Topic9,  allQuestionsB2Topic9,
  lessonB2Topic10, allQuestionsB2Topic10,
} from "./lessonsB2";
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
  "a1-possessives":            { lesson: lessonA1Topic8,  allQuestions: allQuestionsA1Topic8 },
  "a1-9":  { lesson: lessonA1Topic9,  allQuestions: allQuestionsA1Topic9 },
  "a1-10": { lesson: lessonA1Topic10, allQuestions: allQuestionsA1Topic10 },
  "a1-11": { lesson: lessonA1Topic11, allQuestions: allQuestionsA1Topic11 },
  "a1-12": { lesson: lessonA1Topic12, allQuestions: allQuestionsA1Topic12 },
  "a1-13": { lesson: lessonA1Topic13, allQuestions: allQuestionsA1Topic13 },
  "a2-simple-past":       { lesson: a2Lesson,         allQuestions: a2Questions },
  "a2-2":  { lesson: lessonA2Topic2,  allQuestions: allQuestionsA2Topic2 },
  "a2-3":  { lesson: lessonA2Topic3,  allQuestions: allQuestionsA2Topic3 },
  "a2-4":  { lesson: lessonA2Topic4,  allQuestions: allQuestionsA2Topic4 },
  "a2-5":  { lesson: lessonA2Topic5,  allQuestions: allQuestionsA2Topic5 },
  "a2-6":  { lesson: lessonA2Topic6,  allQuestions: allQuestionsA2Topic6 },
  "a2-7":  { lesson: lessonA2Topic7,  allQuestions: allQuestionsA2Topic7 },
  "a2-8":  { lesson: lessonA2Topic8,  allQuestions: allQuestionsA2Topic8 },
  "a2-9":  { lesson: lessonA2Topic9,  allQuestions: allQuestionsA2Topic9 },
  "a2-10": { lesson: lessonA2Topic10, allQuestions: allQuestionsA2Topic10 },
  "b1-modal-verbs":       { lesson: b1Lesson,         allQuestions: b1Questions },
  "b1-2":  { lesson: lessonB1Topic2,  allQuestions: allQuestionsB1Topic2 },
  "b1-3":  { lesson: lessonB1Topic3,  allQuestions: allQuestionsB1Topic3 },
  "b1-4":  { lesson: lessonB1Topic4,  allQuestions: allQuestionsB1Topic4 },
  "b1-5":  { lesson: lessonB1Topic5,  allQuestions: allQuestionsB1Topic5 },
  "b1-6":  { lesson: lessonB1Topic6,  allQuestions: allQuestionsB1Topic6 },
  "b1-7":  { lesson: lessonB1Topic7,  allQuestions: allQuestionsB1Topic7 },
  "b1-8":  { lesson: lessonB1Topic8,  allQuestions: allQuestionsB1Topic8 },
  "b1-9":  { lesson: lessonB1Topic9,  allQuestions: allQuestionsB1Topic9 },
  "b1-10": { lesson: lessonB1Topic10, allQuestions: allQuestionsB1Topic10 },
  "b2-relative-clauses":  { lesson: b2Lesson,         allQuestions: b2Questions },
  "b2-2":  { lesson: lessonB2Topic2,  allQuestions: allQuestionsB2Topic2 },
  "b2-3":  { lesson: lessonB2Topic3,  allQuestions: allQuestionsB2Topic3 },
  "b2-4":  { lesson: lessonB2Topic4,  allQuestions: allQuestionsB2Topic4 },
  "b2-5":  { lesson: lessonB2Topic5,  allQuestions: allQuestionsB2Topic5 },
  "b2-6":  { lesson: lessonB2Topic6,  allQuestions: allQuestionsB2Topic6 },
  "b2-7":  { lesson: lessonB2Topic7,  allQuestions: allQuestionsB2Topic7 },
  "b2-8":  { lesson: lessonB2Topic8,  allQuestions: allQuestionsB2Topic8 },
  "b2-9":  { lesson: lessonB2Topic9,  allQuestions: allQuestionsB2Topic9 },
  "b2-10": { lesson: lessonB2Topic10, allQuestions: allQuestionsB2Topic10 },
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
