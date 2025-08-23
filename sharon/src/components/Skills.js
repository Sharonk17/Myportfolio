// src/components/Skills.js
import React from 'react';
import './Skills.css';

function Skills() {
  return (
    <section id="skills" className="skills-section">
      <div className="skills-content" data-aos="fade-in">
        <h2>My Skills</h2>
        <p>Here are the core technologies and tools I work with:</p>
        <div className="skills-grid">
          <div className="skill">HTML</div>
          <div className="skill">CSS</div>
          <div className="skill">JavaScript</div>
          <div className="skill">React.js</div>
          <div className="skill">Python</div>
          <div className="skill">Full Stack Development</div>
          <div className="skill">Git & GitHub</div>
          <div className="skill">Responsive Design</div>
        </div>
      </div>
    </section>
  );
}

export default Skills;
