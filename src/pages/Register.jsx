import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

function Register() {
  const navigate = useNavigate();

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [error, setError] = useState("");

  const handleRegister = (e) => {
    e.preventDefault();
    setError("");

    if (password !== confirmPassword) {
      setError("Passwords do not match.");
      return;
    }

    if (password.length < 6) {
      setError("Password must contain at least 6 characters.");
      return;
    }

    const user = {
      name,
      email,
      password,
    };

    localStorage.setItem(
      "intervuexUser",
      JSON.stringify(user)
    );

    navigate("/login");
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
            START YOUR JOURNEY
          </div>

          <h1>
            Build confidence.
            <br />
            Get interview ready.
          </h1>

          <p>
            Create your IntervueX account and start
            practicing interviews tailored to your goals.
          </p>

          <div className="brand-features">

            <div className="brand-feature">
              <span>✓</span>
              Practice at your own pace
            </div>

            <div className="brand-feature">
              <span>✓</span>
              Choose your interview difficulty
            </div>

            <div className="brand-feature">
              <span>✓</span>
              Review your performance
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

            <h2>Create your account</h2>

            <p>
              Start preparing for your next interview today.
            </p>

          </div>


          <form onSubmit={handleRegister}>

            <div className="modern-auth-group">

              <label>Full Name</label>

              <div className="auth-input-wrapper">
                <span>◯</span>

                <input
                  type="text"
                  placeholder="Enter your full name"
                  value={name}
                  onChange={(e) =>
                    setName(e.target.value)
                  }
                  required
                />
              </div>

            </div>


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

              <label>Password</label>

              <div className="auth-input-wrapper">
                <span>⌑</span>

                <input
                  type="password"
                  placeholder="Create a password"
                  value={password}
                  onChange={(e) =>
                    setPassword(e.target.value)
                  }
                  required
                />
              </div>

            </div>


            <div className="modern-auth-group">

              <label>Confirm Password</label>

              <div className="auth-input-wrapper">
                <span>⌑</span>

                <input
                  type="password"
                  placeholder="Confirm your password"
                  value={confirmPassword}
                  onChange={(e) =>
                    setConfirmPassword(e.target.value)
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
              Create Account
              <span>→</span>
            </button>

          </form>


          <p className="auth-switch">
            Already have an account?
            <Link to="/login">
              Sign in
            </Link>
          </p>

        </div>

      </div>

    </div>
  );
}

export default Register;