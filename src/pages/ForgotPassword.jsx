import { useState } from "react";
import { Link } from "react-router-dom";

function ForgotPassword() {
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [error, setError] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    setMessage("");
    setError("");

    const savedUser = JSON.parse(
      localStorage.getItem("intervuexUser")
    );

    if (savedUser && savedUser.email === email) {
      setMessage(
        "Password reset instructions have been sent to your email."
      );
    } else {
      setError(
        "No account found with this email address."
      );
    }
  };

  return (
    <div className="auth-layout">

      {/* LEFT SIDE */}
      <div className="auth-brand-panel">

        <div className="auth-brand-logo">
          Intervue<span>X</span>
        </div>

        <div className="auth-brand-content">

          <div className="brand-badge">
            INTERVUEX
          </div>

          <h1>
            Keep learning.
            <br />
            Keep improving.
          </h1>

          <p>
            Your interview preparation journey
            continues with IntervueX.
          </p>

          <div className="brand-features">

            <div className="brand-feature">
              <span>✓</span>
              Personalized preparation
            </div>

            <div className="brand-feature">
              <span>✓</span>
              Practice technical interviews
            </div>

            <div className="brand-feature">
              <span>✓</span>
              Monitor your progress
            </div>

          </div>

        </div>

        <div className="auth-brand-footer">
          © 2026 IntervueX
        </div>

      </div>


      {/* RIGHT SIDE */}
      <div className="auth-form-panel">

        <div className="auth-form-container">

          <div className="mobile-auth-logo">
            Intervue<span>X</span>
          </div>

          <div className="back-login">
            <Link to="/login">
              ← Back to login
            </Link>
          </div>

          <div className="auth-heading">

            <div className="forgot-icon">
              ?
            </div>

            <h2>Forgot your password?</h2>

            <p>
              Enter your registered email address and
              we'll help you reset your password.
            </p>

          </div>


          <form onSubmit={handleSubmit}>

            <div className="modern-auth-group">

              <label>Email Address</label>

              <div className="auth-input-wrapper">
                <span>✉</span>

                <input
                  type="email"
                  placeholder="you@example.com"
                  value={email}
                  onChange={(e) =>
                    setEmail(e.target.value)
                  }
                  required
                />
              </div>

            </div>


            {message && (
              <div className="auth-success">
                {message}
              </div>
            )}


            {error && (
              <div className="auth-error">
                {error}
              </div>
            )}


            <button
              type="submit"
              className="auth-submit-btn"
            >
              Send Reset Instructions
              <span>→</span>
            </button>

          </form>


          <p className="auth-switch">
            Remember your password?
            <Link to="/login">
              Sign in
            </Link>
          </p>

        </div>

      </div>

    </div>
  );
}

export default ForgotPassword;