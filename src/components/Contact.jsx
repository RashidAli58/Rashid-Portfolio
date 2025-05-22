// src/components/Contact.jsx
import React from 'react';
import '../styles/Contact.css';

export default function Contact() {
  return (
    <section className="contact-section" id="contact">
      <h2 className="section-title">Get In Touch</h2>
      <p className="contact-description">
        Although I'm not currently looking for any new opportunities, my inbox is always open.
        Whether you have a question or just want to say hi, I'll try my best to get back to you!
        <br />
        <br />
        Email me at <a href="mailto:timbakerdev@gmail.com">Rashidalia771@gmail.com</a>
      </p>
      <form className="contact-form" onSubmit={(e) => e.preventDefault()}>
        <input type="text" placeholder="Name" required />
        <input type="email" placeholder="Email" required />
        <textarea rows="5" placeholder="Message" required></textarea>
        <button type="submit">Send Message</button>
      </form>
    </section>
  );
}
