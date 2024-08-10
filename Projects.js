import React from 'react';

const projects = [
  {
    title: 'Chandrayaan-3',
    description: 'Third lunar exploration mission by ISRO.',
    launchDate: 'August 2024',
  },
  {
    title: 'Gaganyaan',
    description: 'India\'s first crewed orbital spacecraft mission.',
    launchDate: 'December 2024',
  },
  // Add more projects as needed
];

const Projects = () => {
  return (
    <section className="projects">
      <h2>Upcoming Projects</h2>
      <div className="project-list">
        {projects.map((project, index) => (
          <div className="project-card" key={index}>
            <h3>{project.title}</h3>
            <p>{project.description}</p>
            <span>Launch Date: {project.launchDate}</span>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Projects;
