import React from "react";

const skills = {
  "Programming Languages": ["Python", "C", "C++"],

  "GenAI & LLMs": [
    "LangChain",
    "Prompt Engineering",
    "Few-Shot Learning",
    "Groq LLM",
    "Text-to-SQL Systems"
  ],

  "Machine Learning / Data Science": [
    "Scikit-learn",
    "Pandas",
    "NumPy",
    "Matplotlib",
    "Streamlit"
  ],

  "Web Development": [
    "HTML5",
    "CSS3"
  ],

  "Cloud & DevOps": [
    "AWS",
    "EC2",
    "S3",
    "Route 53",
    "SES",
    "Git",
    "GitHub"
  ],

  "Database": [
    "MySQL"
  ],

  "Tools & Frameworks": [
    "SQLAlchemy",
    "Tkinter",
    "Power BI"
  ],

  "Core Concepts": [
    "DSA",
    "OOPs",
    "REST APIs"
  ]
};

const Skills = () => {
  return (
    <section id="skills" className="min-h-screen px-8 py-16 bg-gray-900 text-white">
      <h2 className="text-4xl font-bold text-center text-cyan-400 mb-12">Skills</h2>
      <div className="max-w-5xl mx-auto grid sm:grid-cols-2 gap-10">
        {Object.entries(skills).map(([category, items], index) => (
          <div key={index} className="bg-gray-800 p-6 rounded-lg shadow-md hover:shadow-cyan-400/30 transition duration-300">
            <h3 className="text-xl font-semibold text-cyan-300 mb-2">{category}</h3>
            <ul className="list-disc ml-5 space-y-1 text-gray-300">
              {items.map((item, idx) => (
                <li key={idx}>{item}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Skills;