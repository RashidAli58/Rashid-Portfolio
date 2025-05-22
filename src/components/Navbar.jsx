import React, { useState, useEffect } from 'react';
import { Link } from 'react-scroll';
import { FiMenu, FiX } from 'react-icons/fi';
import '../styles/Navbar.css';

const navLinks = [
  { id: 'hero', label: 'Home' },
  { id: 'about', label: 'About' },
  { id: 'projects', label: 'Projects' },
  { id: 'contact', label: 'Contact' },
];

export default function Navbar() {
  const [navOpen, setNavOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <nav className={`navbar ${scrolled ? 'navbar-scrolled' : ''}`}>
      <div className="navbar-logo"></div>
      <div className="navbar-links desktop-menu">
        {navLinks.map(({ id, label }) => (
          <Link
            key={id}
            activeClass="active"
            to={id}
            spy={true}
            smooth={true}
            offset={-70}
            duration={500}
          >
            {label}
          </Link>
        ))}
      </div>
      <div className="mobile-menu-icon" onClick={() => setNavOpen(!navOpen)}>
        {navOpen ? <FiX size={24} /> : <FiMenu size={24} />}
      </div>
      {navOpen && (
        <div className="mobile-menu">
          {navLinks.map(({ id, label }) => (
            <Link
              key={id}
              to={id}
              spy={true}
              smooth={true}
              offset={-70}
              duration={500}
              onClick={() => setNavOpen(false)}
            >
              {label}
            </Link>
          ))}
        </div>
      )}
    </nav>
  );
}
