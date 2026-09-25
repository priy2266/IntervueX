import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import questions from "../data/question.js";

function Interview() {
  const navigate = useNavigate();

  const config = JSON.parse(
    localStorage.getItem("intervuexInterview")
  );

  const interviewType = config?.interviewType || "Technical";
  const difficulty = config?.difficulty || "Medium";
  const totalQuestions = config?.length || 30;

  const questionPool =
    questions[interviewType]?.[difficulty] ||
    questions.Technical.Medium;

  // Create the required number of questions
  const interviewQuestions = Array.from(
    { length: totalQuestions },
    (_, index) => questionPool[index % questionPool.length]
  );

  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [answer, setAnswer] = useState("");
  const [answers, setAnswers] = useState([]);

  useEffect(() => {
    const initialAnswers = interviewQuestions.map((question) => ({
      question,
      answer: "",
      status: "unanswered",
    }));

    setAnswers(initialAnswers);
  }, []);

  useEffect(() => {
    if (answers.length > 0) {
      setAnswer(answers[currentQuestion]?.answer || "");
    }
  }, [currentQuestion, answers]);

  const saveAnswer = (status) => {
    setAnswers((previousAnswers) => {
      const updatedAnswers = [...previousAnswers];

      updatedAnswers[currentQuestion] = {
        ...updatedAnswers[currentQuestion],
        answer,
        status,
      };

      return updatedAnswers;
    });
  };

  const handleSubmit = () => {
    if (!answer.trim()) {
      return;
    }

    saveAnswer("answered");

    if (currentQuestion < totalQuestions - 1) {
      setCurrentQuestion(currentQuestion + 1);
    }
  };

  const handleSkip = () => {
    saveAnswer("skipped");

    if (currentQuestion < totalQuestions - 1) {
      setCurrentQuestion(currentQuestion + 1);
    }
  };

  const finishInterview = () => {
    const finalAnswers = [...answers];

    finalAnswers[currentQuestion] = {
      ...finalAnswers[currentQuestion],
      answer,
      status: answer.trim() ? "answered" : "skipped",
    };

    const correct = finalAnswers.filter(
      (item) =>
        item.status === "answered" &&
        item.answer.trim().length >= 20
    ).length;

    const wrong = finalAnswers.filter(
      (item) =>
        item.status === "answered" &&
        item.answer.trim().length < 20
    ).length;

    const skipped = finalAnswers.filter(
      (item) => item.status === "skipped"
    ).length;

    const score = Math.round(
      (correct / totalQuestions) * 100
    );

    const result = {
      score,
      correct,
      wrong,
      skipped,
      total: totalQuestions,
      interviewType,
      difficulty,
      date: new Date().toLocaleString(),
      answers: finalAnswers,
    };

    localStorage.setItem(
      "intervuexResult",
      JSON.stringify(result)
    );

    const history = JSON.parse(
      localStorage.getItem("intervuexHistory") || "[]"
    );

    history.push(result);

    localStorage.setItem(
      "intervuexHistory",
      JSON.stringify(history)
    );

    navigate("/result");
  };

  const progress = Math.round(
    ((currentQuestion + 1) / totalQuestions) * 100
  );

  return (
    <div className="interview-page">

      {/* Navbar */}
      <nav className="navbar">

        <div className="logo">
          Intervue<span>X</span>
        </div>

        <div className="interview-info">
          {interviewType} Interview • {difficulty}
        </div>

      </nav>

      <main className="interview-container">

        {/* Header */}
        <div className="interview-header">

          <div>
            <p className="question-count">
              Question {currentQuestion + 1} of{" "}
              {totalQuestions}
            </p>

            <h1>Interview Question</h1>
          </div>

          <div className="progress-percentage">
            {progress}%
          </div>

        </div>

        {/* Progress bar */}
        <div className="progress-bar">
          <div
            className="progress-fill"
            style={{ width: `${progress}%` }}
          />
        </div>

        {/* Question */}
        <section className="question-card">

          <div className="question-number">
            Q{currentQuestion + 1}
          </div>

          <h2>
            {interviewQuestions[currentQuestion]}
          </h2>

          <textarea
            value={answer}
            onChange={(e) => setAnswer(e.target.value)}
            placeholder="Type your answer here..."
            rows="8"
          />

          <div className="interview-actions">

            <button
              type="button"
              className="secondary-btn"
              onClick={handleSkip}
              disabled={currentQuestion === totalQuestions - 1}
            >
              Skip
            </button>

            {currentQuestion === totalQuestions - 1 ? (
              <button
                type="button"
                className="finish-btn"
                onClick={finishInterview}
              >
                Finish Interview
              </button>
            ) : (
              <button
                type="button"
                className="primary-btn"
                onClick={handleSubmit}
                disabled={!answer.trim()}
              >
                Submit & Next →
              </button>
            )}

          </div>

        </section>

        {/* Question navigation */}
        <section className="question-navigation">

          <h3>Questions</h3>

          <div className="question-buttons">

            {interviewQuestions.map((_, index) => {

              const item = answers[index];

              let className = "question-btn";

              if (index === currentQuestion) {
                className += " active";
              }

              if (item?.status === "answered") {
                className += " answered";
              }

              if (item?.status === "skipped") {
                className += " skipped";
              }

              return (
                <button
                  key={index}
                  type="button"
                  className={className}
                  onClick={() => setCurrentQuestion(index)}
                >
                  {index + 1}
                </button>
              );
            })}

          </div>

        </section>

      </main>

    </div>
  );
}

export default Interview;