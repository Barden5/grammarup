export default function SignInScreen({ onSignIn, loading }) {
  return (
    <div className="screen signin-screen">

      <div className="signin-logo-area">
        <div className="signin-emoji">🌟</div>
        <h1 className="signin-app-name">GrammarUp</h1>
        <p className="signin-tagline">Learn English grammar every day</p>
      </div>

      <div className="signin-card">
        <p className="signin-prompt">Sign in to save your progress and pick up where you left off.</p>
        <button
          className="signin-google-btn"
          onClick={onSignIn}
          disabled={loading}
        >
          <span className="signin-google-icon">
            <svg width="20" height="20" viewBox="0 0 48 48" fill="none">
              <path d="M47.5 24.6c0-1.6-.1-3.1-.4-4.6H24v8.7h13.2c-.6 3-2.3 5.5-4.9 7.2v6h7.9c4.6-4.3 7.3-10.6 7.3-17.3z" fill="#4285F4"/>
              <path d="M24 48c6.5 0 11.9-2.1 15.9-5.8l-7.9-6c-2.1 1.4-4.8 2.3-8 2.3-6.1 0-11.3-4.1-13.1-9.7H2.7v6.2C6.7 42.7 14.8 48 24 48z" fill="#34A853"/>
              <path d="M10.9 28.8A14.7 14.7 0 0 1 10.9 19.2v-6.2H2.7A23.9 23.9 0 0 0 .1 24c0 3.9.9 7.5 2.6 10.8l8.2-6z" fill="#FBBC05"/>
              <path d="M24 9.6c3.4 0 6.5 1.2 8.9 3.5l6.7-6.7C35.9 2.4 30.5 0 24 0 14.8 0 6.7 5.3 2.7 13.2l8.2 6C12.7 13.7 17.9 9.6 24 9.6z" fill="#EA4335"/>
            </svg>
          </span>
          {loading ? "Signing in…" : "Sign in with Google"}
        </button>
      </div>

    </div>
  );
}
