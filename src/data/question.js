const questions = {
  HR: {
    Easy: [
      "Tell me about yourself.",
      "Why do you want to join our company?",
      "What are your strengths?",
      "What is one weakness you are working on?",
      "Where do you see yourself in the next five years?"
    ],

    Medium: [
      "Tell me about a challenging situation you faced and how you handled it.",
      "Describe a time when you worked successfully in a team.",
      "How do you handle pressure and tight deadlines?",
      "Tell me about a mistake you made and what you learned from it.",
      "How do you prioritize multiple tasks?"
    ],

    Hard: [
      "Tell me about a situation where you disagreed with your team member. How did you resolve it?",
      "Describe a time when you had to make an important decision with limited information.",
      "How would you handle a conflict between two members of your team?",
      "Tell me about a failure that significantly changed your approach to work.",
      "Why should we hire you over other candidates?"
    ]
  },

  Technical: {
    Easy: [
      "What is the difference between HTML and CSS?",
      "What is JavaScript used for?",
      "What is a variable in programming?",
      "What is the difference between frontend and backend development?",
      "What is an API?"
    ],

    Medium: [
      "What is the difference between let, const, and var in JavaScript?",
      "Explain the concept of REST APIs.",
      "What is the difference between SQL and NoSQL databases?",
      "What is a React component?",
      "What is the purpose of Git and GitHub?"
    ],

    Hard: [
      "Explain how JWT authentication works in a web application.",
      "What is the difference between authentication and authorization?",
      "Explain the React Virtual DOM and how it improves performance.",
      "How would you design a scalable property booking application?",
      "How would you identify and improve a slow API in a production application?"
    ]
  }
};

export default questions;