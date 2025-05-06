import React from 'react';
import AboutPic from '../assets/me.jpg';

const About = () => (
  <section id="about">
    <h2>About Me</h2>
    <div className="about-content">
      <img src={AboutPic} alt="Profile" className="about-img" />
      <div>
        <p>
        Hello! I'm a passionate Frontend Developer with a knack for creating visually appealing and highly interactive web applications. With expertise in modern JavaScript frameworks like React and Vue.js, I specialize in crafting responsive, user-friendly interfaces that enhance user experiences.
        My skill set includes HTML, CSS, JavaScript, and TypeScript, along with a strong understanding of UI/UX principles. I thrive on transforming complex designs into seamless, performant code, ensuring cross-browser compatibility and accessibility. Whether it's building dynamic single-page applications or optimizing web performance, I love tackling challenges that push the boundaries of frontend development.
        With a background in collaborating with cross-functional teams, I bring strong communication skills and a detail-oriented approach to every project. When I'm not coding, you can find me exploring the latest frontend trends, contributing to open-source projects, or sipping coffee while sketching new design ideas.

        </p>
      </div>
    </div>
  </section>
);

export default About;