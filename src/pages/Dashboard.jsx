import { useState } from "react";
import { useNavigate } from "react-router-dom";

function Dashboard() {
  const navigate = useNavigate();

  const savedUser = JSON.parse(
    localStorage.getItem("intervuexUser")
  );

  const [education, setEducation] = useState("");
  const [experience, setExperience] = useState("");
  const [targetRole, setTargetRole] = useState("");
  const [skills, setSkills] = useState("");
  const [resume, setResume] = useState(null);

  const [interviewType, setInterviewType] = useState("Technical");
  const [difficulty, setDifficulty] = useState("Medium");
  const [length, setLength] = useState("30");

  const handleStartInterview = (e) => {
    e.preventDefault();

    const profile = {
      education,
      experience,
      targetRole,
      skills,
      resumeName: resume ? resume.name : "",
    };

    const interviewConfig = {
      interviewType,
      difficulty,
      length: Number(length),
    };

    localStorage.setItem(
      "intervuexProfile",
      JSON.stringify(profile)
    );

    localStorage.setItem(
      "intervuexInterview",
      JSON.stringify(interviewConfig)
    );

    navigate("/interview");
  };

  const handleLogout = () => {
    localStorage.removeItem("intervuexUser");
    navigate("/login");
  };

  return (
    <div className="dashboard-page">

      {/* ================= NAVBAR ================= */}

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
            onClick={() => navigate("/interview")}
          >
            Interview
          </button>

          <button
            className="nav-btn"
            onClick={() => navigate("/result")}
          >
            Performance
          </button>

          <button
            className="nav-btn"
            onClick={() => {}}
          >
            Settings
          </button>

          <button
            className="logout-btn"
            onClick={handleLogout}
          >
            Logout
          </button>

        </div>

      </nav>


      {/* ================= DASHBOARD ================= */}

      <main className="dashboard-container">

        {/* Header */}

        <div className="dashboard-header">

          <p
            style={{
              color: "#635bff",
              fontWeight: "700",
              fontSize: "13px",
              marginBottom: "8px",
            }}
          >
            AI INTERVIEW PREPARATION
          </p>

          <h1>
            Welcome back,{" "}
            {savedUser?.name || "Candidate"} 👋
          </h1>

          <p>
            Set up your profile and customize your interview.
          </p>

        </div>


        <form
          className="dashboard-form"
          onSubmit={handleStartInterview}
        >

          {/* ================= CANDIDATE INFORMATION ================= */}

          <section className="form-section">

            <h2>
              Candidate Information
            </h2>

            <div className="form-grid">

              <div className="form-group">

                <label>
                  Education
                </label>

                <input
                  type="text"
                  placeholder="e.g. B.Tech Computer Science"
                  value={education}
                  onChange={(e) =>
                    setEducation(e.target.value)
                  }
                  required
                />

              </div>


              <div className="form-group">

                <label>
                  Experience
                </label>

                <input
                  type="text"
                  placeholder="e.g. Fresher / 1 year"
                  value={experience}
                  onChange={(e) =>
                    setExperience(e.target.value)
                  }
                  required
                />

              </div>


              <div className="form-group">

                <label>
                  Target Role
                </label>

                <input
                  type="text"
                  placeholder="e.g. Software Developer"
                  value={targetRole}
                  onChange={(e) =>
                    setTargetRole(e.target.value)
                  }
                  required
                />

              </div>


              <div className="form-group">

                <label>
                  Skills
                </label>

                <input
                  type="text"
                  placeholder="e.g. React, JavaScript, Java"
                  value={skills}
                  onChange={(e) =>
                    setSkills(e.target.value)
                  }
                  required
                />

              </div>

            </div>

          </section>


          {/* ================= RESUME ================= */}

          <section className="form-section">

            <h2>
              Resume
            </h2>

            <div className="resume-upload-box">

              <div className="resume-icon">
                📄
              </div>

              <div className="resume-content">

                <strong>
                  Upload your resume
                </strong>

                <p>
                  PDF, DOC or DOCX • Maximum 5MB
                </p>

              </div>

              <label className="upload-btn">

                Choose File

                <input
                  type="file"
                  accept=".pdf,.doc,.docx"
                  onChange={(e) =>
                    setResume(e.target.files[0])
                  }
                />

              </label>

            </div>

            {resume && (
              <p className="file-name">
                ✓ {resume.name}
              </p>
            )}

          </section>


          {/* ================= INTERVIEW TYPE ================= */}

          <section className="form-section">

            <h2>
              Interview Type
            </h2>

            <div className="option-grid">

              <button
                type="button"
                className={
                  interviewType === "HR"
                    ? "option-card selected"
                    : "option-card"
                }
                onClick={() =>
                  setInterviewType("HR")
                }
              >

                <span className="option-icon">
                  👥
                </span>

                <strong>
                  HR Interview
                </strong>

                <small>
                  Behavioral, communication and personality
                  questions
                </small>

              </button>


              <button
                type="button"
                className={
                  interviewType === "Technical"
                    ? "option-card selected"
                    : "option-card"
                }
                onClick={() =>
                  setInterviewType("Technical")
                }
              >

                <span className="option-icon">
                  💻
                </span>

                <strong>
                  Technical Interview
                </strong>

                <small>
                  Technical and role-specific questions
                </small>

              </button>

            </div>

          </section>


          {/* ================= DIFFICULTY ================= */}

          <section className="form-section">

            <h2>
              Difficulty Level
            </h2>

            <div className="option-grid three">

              <button
                type="button"
                className={
                  difficulty === "Easy"
                    ? "option-card selected"
                    : "option-card"
                }
                onClick={() =>
                  setDifficulty("Easy")
                }
              >

                <strong>
                  Easy
                </strong>

                <small>
                  Basic interview questions
                </small>

              </button>


              <button
                type="button"
                className={
                  difficulty === "Medium"
                    ? "option-card selected"
                    : "option-card"
                }
                onClick={() =>
                  setDifficulty("Medium")
                }
              >

                <strong>
                  Medium
                </strong>

                <small>
                  Moderate level questions
                </small>

              </button>


              <button
                type="button"
                className={
                  difficulty === "Hard"
                    ? "option-card selected"
                    : "option-card"
                }
                onClick={() =>
                  setDifficulty("Hard")
                }
              >

                <strong>
                  Hard
                </strong>

                <small>
                  Advanced interview questions
                </small>

              </button>

            </div>

          </section>


          {/* ================= INTERVIEW LENGTH ================= */}

          <section className="form-section">

            <h2>
              Interview Length
            </h2>

            <div className="option-grid three">

              <button
                type="button"
                className={
                  length === "30"
                    ? "option-card selected"
                    : "option-card"
                }
                onClick={() =>
                  setLength("30")
                }
              >

                <strong>
                  30
                </strong>

                <small>
                  Questions
                </small>

              </button>


              <button
                type="button"
                className={
                  length === "50"
                    ? "option-card selected"
                    : "option-card"
                }
                onClick={() =>
                  setLength("50")
                }
              >

                <strong>
                  50
                </strong>

                <small>
                  Questions
                </small>

              </button>


              <button
                type="button"
                className={
                  length === "100"
                    ? "option-card selected"
                    : "option-card"
                }
                onClick={() =>
                  setLength("100")
                }
              >

                <strong>
                  100
                </strong>

                <small>
                  Questions
                </small>

              </button>

            </div>

          </section>


          {/* ================= START BUTTON ================= */}

          <button
            type="submit"
            className="start-interview-btn"
          >
            Start Your Interview
            <span style={{ marginLeft: "8px" }}>
              →
            </span>
          </button>

        </form>

      </main>

    </div>
  );
}

export default Dashboard;