import React from 'react';
import './Skills.scss';

const skills = {
  "Languages": ["C", "JavaScript (ES6+)", "TypeScript", "HTML5", "CSS3"],
  "Frontend": ["React.js", "React Native", "Next.js", "Vite", "Tailwind CSS", "ShadCN UI"],
  "Backend": ["Node.js", "Express.js", "REST APIs"],
  "Data & Auth": ["Supabase", "PostgreSQL", "Firebase", "Drizzle ORM", "Clerk (Auth)"],
  "Developer Tools": ["Git", "GitHub", "Gemini AI (Google’s LLM)"]
};

const Skills = () => {
  return (
    <section className="skills-section">
      <h2 className="skills-title">My Skills</h2>
      <div className="skills-container">
        {Object.entries(skills).map(([category, skillsList]) => (
          <div className="skill-category" key={category}>
            <h3 className="category-title">{category}</h3>
            <div className="skills-list">
              {skillsList.map(skill => (
                <div className="skill-item" key={skill}>{skill}</div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Skills;
