import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

function Login() {
  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const handleLogin = (e) => {
    e.preventDefault();
    setError("");

    const savedUser = JSON.parse(
      localStorage.getItem("intervuexUser")
    );

    if (!savedUser) {
      setError("No account found. Please create an account first.");
      return;
    }

    if (
      savedUser.email === email &&
      savedUser.password === password
    ) {
      navigate("/dashboard");
    } else {
      setError("Invalid email or password.");
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
            AI INTERVIEW PREPARATION
          </div>

          <h1>
            Prepare smarter.
            <br />
            Interview better.
          </h1>

          <p>
            Practice interviews, improve your answers,
            and build confidence for your next opportunity.
          </p>

          <div className="brand-features">

            <div className="brand-feature">
              <span>✓</span>
              Personalized interview practice
            </div>

            <div className="brand-feature">
              <span>✓</span>
              Technical & HR interviews
            </div>

            <div className="brand-feature">
              <span>✓</span>
              Track your performance
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

          <div className="auth-heading">

            <h2>Welcome back</h2>

            <p>
              Sign in to continue your interview preparation.
            </p>

          </div>


          <form onSubmit={handleLogin}>

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


            <div className="modern-auth-group">

              <div className="password-label-row">

                <label>Password</label>

                <Link to="/forgot-password">
                  Forgot password?
                </Link>

              </div>

              <div className="auth-input-wrapper">
                <span>⌑</span>

                <input
                  type="password"
                  placeholder="Enter your password"
                  value={password}
                  onChange={(e) =>
                    setPassword(e.target.value)
                  }
                  required
                />
              </div>

            </div>


            {error && (
              <div className="auth-error">
                {error}
              </div>
            )}


            <button
              type="submit"
              className="auth-submit-btn"
            >
              Sign In
              <span>→</span>
            </button>

          </form>


          <div className="auth-divider">
            <span>OR</span>
          </div>


          <p className="auth-switch">
            Don't have an account?
            <Link to="/register">
              Create an account
            </Link>
          </p>

        </div>

      </div>

    </div>
  );
}

export default Login;