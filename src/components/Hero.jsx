import React from 'react';
import '../styles/Hero.css';
import heroimg from './heroimg.webp'; 
import { FiDownload } from 'react-icons/fi';
import { Typewriter } from 'react-simple-typewriter';
import { FaFacebook, FaInstagram, FaLinkedin, FaXTwitter } from 'react-icons/fa6'; 




export default function Hero() {
  return (
    <section id="hero" className="hero-section">
      <div className="divmainh">
     <div className="heroleft">
      <h1 className="hero-name">Rashid Ali</h1>
     
          <div className="hero-image">
        <img src={heroimg} alt="Profile" />
      </div>
      </div>
      <div className="heroright">
<div className="div-self">
<p className="typewriter-text">
  <code className="code-wrapper">
    {'<code>'}{' '}
    <span className="typed-text">
      <Typewriter
        words={[
          'Build automation tool',
          'Build iOS and Android application',
          'Build application tool',
        ]}
        loop={0}
        cursor
        cursorStyle="|"
        typeSpeed={70}
        deleteSpeed={50}
        delaySpeed={1000}
      />
    </span>{' '}
    {'</code>'}
  </code>
</p>

<h1 className="hero-name">
  Rashid 
  <span className="social-icons">
    <a href="https://facebook.com" target="_blank" rel="noopener noreferrer"><FaFacebook /></a>
    <a href="https://instagram.com" target="_blank" rel="noopener noreferrer"><FaInstagram /></a>
    <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer"><FaLinkedin /></a>
    <a href="https://x.com" target="_blank" rel="noopener noreferrer"><FaXTwitter /></a>
  </span>
</h1>

  
  <p> I'm a Victoria based Full Stack Software developer, currently working at Stack Hunts helping build a modern, mobile-first, domain registrar and site builder. 
    In my free time time, you can catch me training in Muay Thai, plucking my banjo, or exploring beautiful Vancouver Island.
    <button className='btn1'>
        <FiDownload style={{ color: 'white', marginRight: '8px' }} />
      Resume 

    </button>
    <button className='btn2'>Contact</button>

  </p>
</div>

      </div>


      </div>
    </section>
  );
}
