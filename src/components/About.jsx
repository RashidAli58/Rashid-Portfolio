import React from 'react';
import '../styles/About.css';
import { FaMapMarkerAlt, FaUser, FaGlobe, FaBook, FaCalendarAlt, FaStar, FaBuilding, FaStarHalfAlt, FaSmile, FaCalendarCheck, FaFlask } from 'react-icons/fa';
import aboutimg from './aboutimg.jpeg';

const About = () => {
  return (
    <section className="about-section" id="about">
      <div className="about-container">
        <div className="about-text">
          <h2><span>About</span> Me</h2>
          <p className="small-text">
            My name is Rashid. I completed my BCSC from Government College FSD.<br />
            My secondary education was from Shahkot Allied School.<br />
            Currently working in Stack Hunts as a React Developer.<br />
            In 2023, I completed Web & Mobile App Development and Graphic Design from Career Institute, Millat Road, FSD.
          </p>
          <div className="info-grid">
            <div><FaMapMarkerAlt /> <strong>Location:</strong> Faisalabad</div>
            <div><FaCalendarAlt /> <strong>Age:</strong> 22</div>
            <div><FaGlobe /> <strong>Nationality:</strong> Pakistani</div>
            <div><FaStar /> <strong>Interests:</strong> Coding, Cricket, Learning</div>
            <div><FaBook /> <strong>Study:</strong> Govt College, FSD</div>
            <div><FaBuilding /> <strong>Employment:</strong> Stack Hunts</div>
          </div>
        </div>
        <div className="about-image">
          <img src={aboutimg} alt="Profile" />
        </div>
      </div>

      {/* Stats Section */}
      <div className="stats-section">
        <h2><span>Stats</span></h2>
        <div className="stats-grid">
          <div className="stat-card"><FaStarHalfAlt /> <p>Github stars</p><h3>1563</h3></div>
          <div className="stat-card"><FaSmile /> <p>Happy clients</p><h3>3</h3></div>
          <div className="stat-card"><FaCalendarCheck /> <p>Years of experience</p><h3>4</h3></div>
          <div className="stat-card"><FaFlask /> <p>OSS Projects</p><h3>5</h3></div>
        </div>
      </div>

      {/* Tech Stack */}
      <div className="tech-stack">
        <h2><span>Core</span> tech stack</h2>
        <div className="stack-columns">
       
  {/* Frontend */}
  <div className="stack-column">
    <h3>Frontend</h3>
    {['React', 'TypeScript', 'GraphQL', 'Vue'].map((tech, index) => (
      <div className="skill-row" key={index}>
        <span>{tech}</span>
        <div className="bars">
          {[...Array(10)].map((___, i) => (
            <div key={i} className={`bar ${i < (tech === 'Vue' ? 5 : tech === 'GraphQL' ? 6 : tech === 'TypeScript' ? 7 : 8) ? 'filled' : ''}`} />
          ))}
        </div>
      </div>
    ))}
  </div>

  {/* Backend */}
  <div className="stack-column">
    <h3>Backend</h3>
    {['Node.js', 'Rust', 'Go', 'Python'].map((tech, index) => (
      <div className="skill-row" key={index}>
        <span>{tech}</span>
        <div className="bars">
          {[...Array(10)].map((___, i) => (
            <div key={i} className={`bar ${i < (tech === 'Rust' ? 6 : tech === 'Go' ? 5 : tech === 'Python' ? 6 : 8) ? 'filled' : ''}`} />
          ))}
        </div>
      </div>
    ))}
  </div>

  {/* Mobile */}
  <div className="stack-column">
    <h3>Mobile</h3>
    {['React Native', 'Java', 'Flutter'].map((tech, index) => (
      <div className="skill-row" key={index}>
        <span>{tech}</span>
        <div className="bars">
          {[...Array(10)].map((___, i) => (
            <div key={i} className={`bar ${i < (tech === 'Java' ? 6 : tech === 'Flutter' ? 5 : 7) ? 'filled' : ''}`} />
          ))}
        </div>
      </div>
    ))}
  </div>

  {/* Security */}
  <div className="stack-column">
    <h3>Security</h3>
    {['Application security', 'Network security', 'Data compliance'].map((tech, index) => (
      <div className="skill-row" key={index}>
        <span>{tech}</span>
        <div className="bars">
          {[...Array(10)].map((________, i) => (
            <div key={i} className={`bar ${i < (tech === 'Network security' ? 5 : 6) ? 'filled' : ''}`} />
          ))}
        </div>
      </div>
    ))}
  </div>
</div>

      </div>
    </section>
  );
};

export default About;
