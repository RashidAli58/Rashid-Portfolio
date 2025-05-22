// src/components/Projects.jsx
import React from "react";
import "../styles/Projects.css";

export default function Projects() {
  return (
    <section id="projects" className="projects-section">
      <div className="projects-container">
        {/* === Education Section === */}
        <div className="project-card education">
          <h2 className="section-title">
            <span>Edu</span>cation
          </h2>
          <div className="project-header">
            <span className="badge">2023 - 2019</span>
            <span className="org">Govt College University of Faislabad</span>
          </div>
          <h3 className="project-title">Bachelor of Computer Science</h3>
          <p className="project-desc">
            Under the recommendation and Guidance of the Head Coach of the UVIC
            soccer team, I transferred to the Govt College  University Faisalabad. Here I
            took my Bachelors of Computer Science with a Software Engineering
            Specialty and achieved a much more thorough education in the
            underlying theory, concepts, and science behind more complex
            programming. It was here that I discovered my passion for scalable
            application programming (web and mobile), the security behind
            computer and application systems, and found that I have a knack for
            understanding complex algorithms.
          </p>
        </div>

        {/* === Experience Section === */}
        <div className="project-card experience">
          <h2 className="section-title">
            <span>Ex</span>perience
          </h2>
          <div className="project-header">
            <span className="badge">2024 - Present</span>
            <span className="org">MERN  Stack</span>
          </div>
          <h3 className="project-title">React Developer</h3>
          <p className="project-desc">
            I am currently working as a Software Engineer at Instant Domains,
            Inc. We are a Y-Combinator backed startup building a modern,
            mobile-first domain registrar and site builder. Here I'm responsible
            for building the core technologies and features to allow our users
            to find and buy a domain, launch a fully configured site, and begin
            collecting revenue with less effort than creating a social media
            profile.
          </p>
          <p className="tech">
            <strong>Frontend:</strong> React/Typescript + Next.js,
            GraphQL/Relay, TailwindCss
            <br />
            <strong>Backend:</strong> Node.js, Mongodb, Async-GraphQL
          </p>
        </div>
      </div>
    </section>
  );
}
