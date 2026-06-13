import React from 'react';
import { useInView } from 'react-intersection-observer';
import './Projects.css';

export default function Projects() {
  const { ref: titleRef, inView: titleInView } = useInView({ triggerOnce: true, threshold: 0.1 });

  const projects = [
    {
      title: "Reactelligence – AI Chemistry Lab",
      liveLink: "https://reactelligence.streamlit.app",
      gitLink: "https://github.com/namannb07/Reactelligence",
      about: "Interactive AI-driven web application to analyze molecules, predict chemical properties, and explore reactions. Built with Streamlit, RDKit, and ChemBERTa.",
      stack: ["Python", "Streamlit", "RDKit", "ChemBERTa", "Pytorch"]
    },
    {
      title: "StyleBuddy – AI Style Assistant",
      liveLink: "https://stylebuddy.netlify.app",
      gitLink: "https://github.com/namannb07/stylebuddy",
      about: "Modern web application providing AI-driven fashion guidance, outfit feedback, and style recommendations.",
      stack: ["Next.js", "TypeScript", "Google Genkit", "Tailwind CSS", "Firebase"]
    },
    {
      title: "Sign Language Recognition System",
      liveLink: "",
      gitLink: "",
      about: "AI-powered system to recognize and translate sign language gestures into text/speech using real-time hand gesture recognition.",
      stack: ["Python", "OpenCV", "tKinter", "CNN"]
    },
    {
      title: "CPU-J",
      liveLink: "",
      gitLink: "https://github.com/namannb07/CPU-J",
      about: "JavaFX-based desktop application that mimics CPU-Z, providing detailed real-time system information.",
      stack: ["JavaFX", "Java", "OSHI"]
    },
    {
      title: "Student Performance Dashboard",
      liveLink: "",
      gitLink: "https://github.com/namannb07/ssvm",
      about: "Dynamic dashboard for tracking student performance and providing real-time score updates to parents.",
      stack: ["HTML", "CSS", "Javascript", "Php", "MySQL"]
    },
    {
      title: "SafaiSetu",
      liveLink: "",
      gitLink: "https://github.com/namannb07/SafaiSetu",
      about: "Sanitation management app designed for smart cities to streamline urban cleanliness operations.",
      stack: ["JavaFX", "Java", "JDBC", "MySQL"]
    }
  ];

  return (
    <section id="projects" className="projects-section">
      <div className="container">
        <h2 ref={titleRef} className={`section-title drop-down-wrapper ${titleInView ? 'is-visible' : ''}`}>
          Featured <span className="text-gradient">Projects</span>
        </h2>
        
        <div className="projects-grid">
          {projects.map((project, idx) => {
            const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.1 });
            return (
              <div key={idx} ref={ref} className={`project-card glass-panel reveal-wrapper ${inView ? 'is-visible' : ''}`}>
                <div className="project-content p-6">
                  <h3 className="project-title">{project.title}</h3>
                  <p className="project-about">{project.about}</p>
                  <div className="project-stack">
                    {project.stack.map((tech, i) => (
                      <span key={i} className="tech-tag">{tech}</span>
                    ))}
                  </div>
                  <div className="project-links">
                    {project.gitLink && (
                      <a href={project.gitLink} target="_blank" rel="noreferrer" className="btn btn-secondary btn-sm">GitHub</a>
                    )}
                    {project.liveLink && (
                      <a href={project.liveLink} target="_blank" rel="noreferrer" className="btn btn-primary btn-sm">Live Demo</a>
                    )}
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
