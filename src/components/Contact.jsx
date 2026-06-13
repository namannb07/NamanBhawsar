import React from 'react';
import { useInView } from 'react-intersection-observer';
import './Contact.css';

export default function Contact() {
  const { ref: containerRef, inView: containerInView } = useInView({ triggerOnce: true, threshold: 0.1 });
  const { ref: footerRef, inView: footerInView } = useInView({ triggerOnce: true, threshold: 0.1 });

  return (
    <section id="contact" className="contact-section">
      <div className="container">
        <div ref={containerRef} className={`contact-container glass-panel scale-wrapper ${containerInView ? 'is-visible' : ''}`}>
          <div className="contact-info">
            <h2 className="section-title" style={{ textAlign: 'left', marginBottom: '1rem' }}>
              Got a project in <span className="text-gradient">mind?</span>
            </h2>
            <p className="contact-text">
              I'm currently open for new opportunities or projects.
              Whether you have a question or just want to say hi, I'll try my best to get back to you!
            </p>
            <div className="contact-links">
              <a href="mailto:namannb45@gmail.com" className="btn btn-primary">Say Hello</a>
              <a href="https://www.linkedin.com/in/naman-bhawsar-62285b33a/" target="_blank" rel="noreferrer" className="btn btn-secondary">LinkedIn</a>
            </div>
          </div>
        </div>
      </div>

      <footer ref={footerRef} className={`footer reveal-wrapper ${footerInView ? 'is-visible' : ''}`}>
        <p>&copy; {new Date().getFullYear()} Naman Bhawsar. All rights reserved.</p>
      </footer>
    </section>
  );
}
