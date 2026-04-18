export default function SplashScreen({ onGetStarted }) {
  return (
    <div className="screen splash-screen">

      {/* Logo block */}
      <div className="splash-logo-area">
        <div className="splash-emoji">🌟</div>
        <h1 className="splash-app-name">GrammarUp</h1>
        <p className="splash-tagline">Learn English grammar every day</p>
      </div>

      {/* Description */}
      <div className="splash-desc-block">
        <p className="splash-desc">
          GrammarUp helps K-8 students master English grammar step by step.
          Perfect for English language learners of all levels.
        </p>
      </div>

      {/* Feature badges */}
      <div className="splash-badges">
        <span className="splash-badge">📚 43 grammar lessons</span>
        <span className="splash-badge">🏆 4 levels: A1 to B2</span>
        <span className="splash-badge">✨ AI-powered practice</span>
      </div>

      {/* CTA */}
      <button className="btn-primary splash-cta" onClick={onGetStarted}>
        Get started
      </button>

    </div>
  );
}
