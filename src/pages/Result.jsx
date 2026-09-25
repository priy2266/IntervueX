import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

function Result() {
  const navigate = useNavigate();

  const [result, setResult] = useState(null);
  const [history, setHistory] = useState([]);

  useEffect(() => {
    const savedResult = JSON.parse(
      localStorage.getItem("intervuexResult")
    );

    const savedHistory = JSON.parse(
      localStorage.getItem("intervuexHistory") || "[]"
    );

    setResult(savedResult);
    setHistory(savedHistory.reverse());
  }, []);

  if (!result) {
    return (
      <div className="result-page">
        <div className="empty-result">
          <h1>No Interview Result</h1>

          <p>
            Complete an interview first to see your result.
          </p>

          <button
            className="primary-btn"
            onClick={() => navigate("/dashboard")}
          >
            Go to Dashboard
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="result-page">

      {/* Navbar */}
      <nav className="navbar">

        <div className="logo">
          Intervue<span>X</span>
        </div>

        <div className="nav-links">

          <button
            className="nav-btn"
            onClick={() => navigate("/dashboard")}
          >
            Dashboard
          </button>

          <button
            className="nav-btn"
            onClick={() => navigate("/result")}
          >
            Performance
          </button>

        </div>

      </nav>

      <main className="result-container">

        {/* Header */}
        <div className="result-header">

          <p>Interview Completed</p>

          <h1>Your Interview Result</h1>

          <span>
            {result.interviewType} • {result.difficulty}
          </span>

        </div>

        {/* Score */}
        <section className="score-card">

          <div className="score-circle">
            <strong>{result.score}%</strong>
            <span>Score</span>
          </div>

          <div className="score-details">

            <h2>Performance Summary</h2>

            <p>
              You completed {result.total} interview questions.
            </p>

            <div className="result-stats">

              <div className="stat-card correct">
                <strong>{result.correct}</strong>
                <span>Correct</span>
              </div>

              <div className="stat-card wrong">
                <strong>{result.wrong}</strong>
                <span>Wrong</span>
              </div>

              <div className="stat-card skipped">
                <strong>{result.skipped}</strong>
                <span>Skipped</span>
              </div>

            </div>

          </div>

        </section>

        {/* Question-wise answers */}
        <section className="result-section">

          <h2>Question-wise Answers</h2>

          <div className="answer-list">

            {result.answers.map((item, index) => (
              <div
                className="answer-result"
                key={index}
              >

                <div className="answer-heading">

                  <span>
                    Question {index + 1}
                  </span>

                  <span
                    className={`answer-status ${item.status}`}
                  >
                    {item.status === "answered"
                      ? "Answered"
                      : "Skipped"}
                  </span>

                </div>

                <h3>
                  {item.question}
                </h3>

                <p>
                  {item.answer
                    ? item.answer
                    : "No answer provided."}
                </p>

              </div>
            ))}

          </div>

        </section>

        {/* Performance History */}
        <section className="result-section">

          <h2>Performance History</h2>

          {history.length === 0 ? (
            <p>No previous interviews found.</p>
          ) : (
            <div className="history-list">

              {history.map((item, index) => (
                <div
                  className="history-card"
                  key={index}
                >

                  <div>
                    <strong>
                      {item.interviewType} Interview
                    </strong>

                    <span>
                      {item.difficulty}
                    </span>

                    <small>
                      {item.date}
                    </small>
                  </div>

                  <div className="history-score">
                    {item.score}%
                  </div>

                </div>
              ))}

            </div>
          )}

        </section>

        {/* Actions */}
        <div className="result-actions">

          <button
            className="secondary-btn"
            onClick={() => navigate("/dashboard")}
          >
            Back to Dashboard
          </button>

          <button
            className="primary-btn"
            onClick={() => navigate("/interview")}
          >
            Retake Interview
          </button>

        </div>

      </main>

    </div>
  );
}

export default Result;