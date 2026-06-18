import React from 'react';
import { useInView } from 'react-intersection-observer';
import './Education.css';

export default function Education() {
  const { ref: titleRef, inView: titleInView } = useInView({ triggerOnce: true, threshold: 0.1 });

  const education = [
    {
      degree: "Master of Computer Application",
      school: "Shri G S Institute of Technology & Science",
      duration: "Sept 2024 - June 2026",
      score: "8.72 CGPA"
    },
    {
      degree: "Bachelor of Computer Application",
      school: "Govt Holkar Science College, Indore",
      duration: "Sept 2021 - Sept 2024",
      score: "8.02 CGPA"
    },
    {
      degree: "10+2",
      school: "Govt Boys HS School, Pipalrawan",
      duration: "July 2020 - May 2021",
      score: "92.8%"
    },
    {
      degree: "10th",
      school: "Saraswati Shishu Vidhya Mandir, Pipalrawan",
      duration: "July 2018 - May 2019",
      score: "91.8%"
    }
  ];

  return (
    <section id="education" className="education-section">
      <div className="container">
        <h2 ref={titleRef} className={`section-title drop-down-wrapper ${titleInView ? 'is-visible' : ''}`}>
          My <span className="text-gradient">Education</span>
        </h2>
        
        <div className="timeline">
          {education.map((item, idx) => {
            const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.1 });
            return (
              <div key={idx} ref={ref} className={`timeline-item glass-panel reveal-wrapper ${inView ? 'is-visible' : ''}`}>
                <div className={`timeline-dot scale-wrapper delay-200 ${inView ? 'is-visible' : ''}`}></div>
                <div className="timeline-content">
                  <h3 className="degree">{item.degree}</h3>
                  <h4 className="school text-gradient">{item.school}</h4>
                  <div className="timeline-meta">
                    <span className="duration">{item.duration}</span>
                    <span className="score">Score: {item.score}</span>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
