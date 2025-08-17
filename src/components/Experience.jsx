import React from 'react';
import './Experience.scss';

const experiences = [
    {
    id: 1,
    type: 'freelance',
    logo: '/freelancing.jpg', // Using first letter as placeholder
    dates: '2024–2025',
    title: 'Freelancing',
    organization: '', // Organization not provided
    location: '', // Location not provided
    description: 'Built MVPs and SaaS apps for clients, from simple landing pages to full-scale products.',
    techStack: ['Next.js', 'React', 'Tailwind CSS', 'TypeScript', 'Firebase', 'PostgreSQL'],
  },
  {
    id: 2,
    type: 'work',
    logo: '/intern.jpg', // Using first letter as placeholder
    dates: '2023',
    title: 'Backend Intern',
    organization: 'CodeAte with ACC',
    location: '', // Location not provided, leaving empty
    description: 'Implemented authentication (bcrypt, 2FA, RBAC) and built backend features in Node.js.',
    techStack: ['Node.js', 'Express', 'MongoDB'],
  },

];

const Experience = () => {
  return (
    <section className="experience-section">
      <h2 className="experience-heading">My Experience</h2>
      <div className="timeline">
        {experiences.map((exp) => (
          <div key={exp.id} className="timeline-item">
            <div className="timeline-left">
              <div className="logo-circle">
                {exp.logo.length === 1 ? (
                  <span className="logo-text">{exp.logo}</span>
                ) : (
                  <img src={exp.logo} alt={exp.organization || exp.title} />
                )}
              </div>
            </div>
            <div className="timeline-right">
              <div className="experience-card">
                <p className="dates">{exp.dates}</p>
                <h3 className="title">{exp.title}</h3>
                <p className="organization-location">
                  {exp.organization}{exp.location && `, ${exp.location}`}
                </p>
                <p className="description">{exp.description}</p>
                <div className="tech-stack">
                  {exp.techStack.map((tech, index) => (
                    <span key={index} className="tech-badge">{tech}</span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Experience;