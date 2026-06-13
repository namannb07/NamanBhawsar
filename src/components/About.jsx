import React from 'react';
import { useInView } from 'react-intersection-observer';
import './About.css';

export default function About() {
  const { ref: titleRef, inView: titleInView } = useInView({ triggerOnce: true, threshold: 0.1 });
  const { ref: textRef, inView: textInView } = useInView({ triggerOnce: true, threshold: 0.1 });
  
  const skills = [
    { category: 'AI / Machine Learning', items: ['Deep Learning', 'Computer Vision', 'Object Detection', 'Multi-Object Tracking', 'OCR', 'Vision Transformers', 'CNN-based Models'] },
    { category: 'Frameworks & Deployment', items: ['PyTorch', 'FastAPI', 'Streamlit', 'NVIDIA Jetson', 'DeepStream SDK', 'TensorRT', 'CUDA', 'ONNX'] },
    { category: 'Industrial Automation', items: ['PLC Integration', 'Modbus TCP', 'Automated Sorting Systems'] },
    { category: 'Programming & Tools', items: ['Python', 'OpenCV', 'NumPy', 'Pandas', 'Git', 'Linux'] }
  ];

  return (
    <section id="about" className="about-section">
      <div className="container">
        <h2 ref={titleRef} className={`section-title drop-down-wrapper ${titleInView ? 'is-visible' : ''}`}>
          About <span className="text-gradient">Me</span>
        </h2>
        
        <div className="about-grid">
          <div ref={textRef} className={`about-text glass-panel p-6 reveal-wrapper ${textInView ? 'is-visible' : ''}`}>
            <p>
              Building intelligent vision systems where cutting-edge artificial intelligence meets industrial automation. My focus is on transforming complex visual data into robust, real-time automated solutions.
            </p>
            <br />
            <p>
              With a strong emphasis on edge deployment, I specialize in bridging the gap between advanced deep learning architectures—such as Vision Transformers and CNNs—and physical hardware. From optimizing models with TensorRT and DeepStream to seamless PLC integration, I architect end-to-end systems designed for high-performance, precision, and scalability.
            </p>
            
            <div className="about-social-links">
              <a href="https://github.com/naman" target="_blank" rel="noopener noreferrer" className="social-link">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4"/><path d="M9 18c-4.51 2-5-2-7-2"/></svg>
                <span>GitHub</span>
              </a>
              <a href="https://linkedin.com/in/naman" target="_blank" rel="noopener noreferrer" className="social-link">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/><rect width="4" height="12" x="2" y="9"/><circle cx="4" cy="4" r="2"/></svg>
                <span>LinkedIn</span>
              </a>
            </div>
          </div>
          
          <div className="skills-container">
            {skills.map((skillGroup, idx) => {
              const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.1 });
              return (
                <div key={idx} ref={ref} className={`skill-card glass-panel p-6 reveal-wrapper delay-${(idx+1)*100} ${inView ? 'is-visible' : ''}`}>
                  <h3 className="skill-category">{skillGroup.category}</h3>
                  <div className="skill-tags">
                    {skillGroup.items.map((item, i) => (
                      <span key={i} className="skill-tag">{item}</span>
                    ))}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
