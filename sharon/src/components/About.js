// src/components/About.js
import React from 'react';
import './About.css';
import meImage from '../assets/profile.jpg'; // Adjust path to match your structure

function About() {
  return (
    <section id="about" className="about-section">
      <div className="about-content" data-aos="fade-in">
        <div className="about-text">
          <h2>About Me</h2>
         <p>
            My name is <strong>Sharon Gifty. K</strong>, a final-year B.Tech student in 
            <strong> Computer Science and Business Systems</strong>. I'm also a freelance web designer, 
            currently working with friends under the name <strong><a href="https://asma2506.github.io/JustWeb/" target="_blank" rel="noopener noreferrer"> JustWeb</a>.</strong>
          </p>
          <p>
            I’ve completed a Full Stack Development course and am well-versed in technologies like 
            <strong> React.js, JavaScript, HTML, CSS, and Python</strong>. I'm passionate about building 
            clean and interactive web applications and am currently <strong>open to work and learn from forward-thinking companies</strong>.
          </p>
        </div>
        <div className="about-image">
          <img src={meImage} alt="Me" />
        </div>
      </div>
    </section>
  );
}

export default About;
