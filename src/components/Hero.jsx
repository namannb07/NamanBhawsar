import React from 'react';
import { useInView } from 'react-intersection-observer';
import './Hero.css';

export default function Hero() {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <section id="home" className="hero-section">
      <div className="container hero-container" ref={ref}>
        <div className="hero-content">
          <h2 className={`hero-subtitle text-gradient drop-down-wrapper ${inView ? 'is-visible' : ''}`}>Hello, I'm</h2>
          <h1 className={`hero-title drop-down-wrapper delay-100 ${inView ? 'is-visible' : ''}`}>Naman Bhawsar</h1>
          <p className={`hero-description drop-down-wrapper delay-200 ${inView ? 'is-visible' : ''}`}>
            An AI Engineer and passionate developer specializing in industrial computer vision, object detection, and edge AI deployment.
          </p>
          <div className={`hero-cta drop-down-wrapper delay-300 ${inView ? 'is-visible' : ''}`}>
            <a href="#projects" className="btn btn-primary">View My Work</a>
            <a href="#contact" className="btn btn-secondary glass-panel">Contact Me</a>
          </div>
        </div>
      </div>
    </section>
  );
}
