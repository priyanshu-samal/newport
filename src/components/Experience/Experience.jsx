
import React from 'react';
import './Experience.scss';

const experiences = [
  {
    id: 1,
    date: '2024 – 2025',
    title: 'Freelancing',
    organization: 'Self-Employed',
    location: '',
    description: 'Built MVPs and SaaS apps for clients, from simple landing pages to full-scale products.',
    stack: ['Next.js', 'React', 'Tailwind CSS', 'TypeScript', 'Firebase', 'PostgreSQL'],
    logo: 'https://via.placeholder.com/40/0000FF/FFFFFF?text=F', // Placeholder for Freelancing
  },
  {
    id: 2,
    date: '2023',
    title: 'Backend Intern',
    organization: 'CodeAte with ACC',
    location: '',
    description: 'Implemented authentication (bcrypt, 2FA, RBAC) and built backend features in Node.js.',
    stack: ['Node.js', 'Express', 'MongoDB'],
    logo: 'https://via.placeholder.com/40/FF0000/FFFFFF?text=CA', // Placeholder for CodeAte
  },
];

const Experience = () => {
  return (
    <section id="experience" className="experience-section">
      <h2>My Experience</h2>
      <div className="timeline">
        {experiences.map((exp) => (
          <div className="timeline-item" key={exp.id}>
            <div className="timeline-logo">
              <img src={exp.logo} alt={exp.organization} />
            </div>
            <div className="timeline-card">
              <p className="experience-date">{exp.date}</p>
              <h3>{exp.title}</h3>
              <p className="experience-org-loc">{exp.organization} {exp.location && `| ${exp.location}`}</p>
              <p className="experience-description">{exp.description}</p>
              <div className="tech-stack">
                {exp.stack.map((tech, index) => (
                  <span key={index} className="tech-badge">{tech}</span>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Experience;
