// src/components/Projects.js
import React from 'react';
import './Projects.css';

function Projects() {
  return (
    <section id="projects" className="projects-section">
      <div className="projects-content" data-aos="fade-out">
        <h2>Projects & Freelance Work</h2>
        <p>
          I co-founded a freelance web design group called 
          <a href="https://asma2506.github.io/JustWeb/" target="_blank" rel="noopener noreferrer"> JustWeb</a>, 
          where we collaborate on client websites and creative digital solutions.
        </p>
        <p>
          Through JustWeb, we’ve worked on building modern, responsive websites for small businesses, 
          portfolios, and startups. We specialize in clean UI design, front-end development, and integrating 
          real-world functionality using <strong>HTML, CSS, JavaScript, React.js, and Python</strong>.
        </p>
        <p>
          As a freelance developer, I focus on delivering user-friendly and aesthetically pleasing 
          web experiences while continuously improving my skills.
        </p>
      </div>
    </section>
  );
}

export default Projects;
