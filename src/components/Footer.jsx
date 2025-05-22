import React from 'react';
import '../styles/Footer.css';

export default function Footer() {
  return (
    <footer className="footer">
      <p>
        © {new Date().getFullYear()} Tim Baker. Designed & Built by Tim Baker.
      </p>
    </footer>
  );
}
