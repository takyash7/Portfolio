import React from "react";

const projects = [
  {
    title: "IPL Score & Win Prediction App",
    tech: [
      "Python",
      "Scikit-learn",
      "Pandas",
      "Streamlit",
      "REST APIs"
    ],
    description: [
      "Developed a live data science app predicting IPL first-innings scores and match win probabilities.",
      "Integrated real-time score updates and upcoming match details using cricket APIs.",
      "Deployed on Streamlit Cloud with an interactive user interface."
    ]
  },

  {
    title: "Online Ticket Booking Website",
    tech: [
      "HTML",
      "CSS",
      "MySQL",
      "AWS"
    ],
    description: [
      "Built a full-stack ticket booking platform with user authentication and booking history.",
      "Implemented email confirmation and session management features.",
      "Deployed the application on AWS EC2 with MySQL backend integration."
    ]
  },

  {
    title: "QueryKart AI",
    tech: [
      "Python",
      "Streamlit",
      "LangChain",
      "Groq LLM",
      "MySQL",
      "SQLAlchemy"
    ],
    description: [
      "Developed an AI-powered retail database assistant that converts natural language into SQL queries.",
      "Integrated Groq Llama 3.3 70B with LangChain for AI-driven database analytics.",
      "Deployed using Streamlit Cloud and Railway MySQL with secure cloud database integration."
    ]
  }
];

const Projects = () => {
  return (
    <section id="projects" className="px-6 py-16 bg-gradient-to-b from-black via-gray-900 to-black text-white">
      <h2 className="text-4xl font-bold text-center text-cyan-400 mb-14">Projects</h2>
      <div className="max-w-6xl mx-auto grid gap-10 md:grid-cols-2">
        {projects.map((project, index) => (
          <div
            key={index}
            className="bg-gray-900 border border-cyan-500/20 rounded-xl p-6 shadow-lg hover:scale-105 transform transition duration-300"
          >
            <h3 className="text-2xl font-bold text-cyan-300 mb-2">{project.title}</h3>
            <p className="text-sm text-gray-400 mb-2 italic">{project.tech}</p>
            <p className="text-gray-300">{project.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Projects;
