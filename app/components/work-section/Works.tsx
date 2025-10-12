import React, { useEffect } from "react";
import FolioCard from "./FolioCard";
import Title from "../ui/Title";
import { useView } from "@/contexts/ViewContext";

// @ts-ignore
import "intersection-observer";
import { useInView } from "react-intersection-observer";
import Timeline from "./Timeline";

export default function Works() {
  const { setSectionInView } = useView();

  const works = [
    {
      title: "Reactelligence – AI-Powered Chemistry Lab",
      gitLink: "https://github.com/namannb07/Reactelligence",
      liveLink: "https://reactelligence.streamlit.app",
      about:
        "Reactelligence is an interactive AI-driven web application that empowers users to analyze molecules, predict chemical properties, and explore reactions. Built with Streamlit, RDKit, and ChemBERTa, it combines cheminformatics with deep learning to assist students, researchers, and chemists in understanding molecular behavior.",
      stack: ["Python", "Streamlit", "RDKit", "ChemBERTa","Pytorch","Pandas & NumPy","Plotly & Matplotlib","scikit-learn"],
      img: "/react.jpg",
    },
    {
      title: "Sign Language Recognition System (In Progress)",
      gitLink: "",
      liveLink: "",
      about:
        "Developing an AI-powered system to recognize and translate sign language gestures into text or speech. Aims to bridge the communication gap for hearing-impaired individuals using real-time hand gesture recognition through computer vision and machine learning.",
      stack: ["Python", "OpenCV", "tKinter", "CNN"],
      img: "/Sign.png",
    },
    {
      title: "StyleBuddy – AI-Powered Personal Style Assistant",
      gitLink: "https://github.com/namannb07/stylebuddy",
      liveLink: "https://stylebuddy.netlify.app",
      about:
        "StyleBuddy is a modern web application that provides AI-driven fashion guidance. Users can get instant feedback on outfits, personalized style recommendations, and hairstyle suggestions. Built with Next.js, Genkit, and Firebase, it showcases how AI enhances personal styling experiences.",
      stack: ["Next.js", "TypeScript", "Google Genkit", "Tailwind CSS", "shadcn/ui", "Radix UI", "Firebase"],
      img: "/stylebuddy.png",
    },
    {
      title: "CPU-J",
      gitLink: "https://github.com/namannb07/CPU-J",
      liveLink: "",
      about:
        "CPU-J is a JavaFX-based desktop application that mimics CPU-Z, providing detailed real-time system information such as CPU usage, memory stats, storage details, network info, sensors, and uptime. It uses the OSHI library to fetch hardware-level data and presents it through a clean, interactive GUI.",
      stack: ["JavaFX", "Java", "Maven", "OSHI-Operating System and Hardware Information"],
      img: "/cpu.jpg",
    },
     {
      title: "Student Performance Dashboard",
      gitLink: "https://github.com/namannb07/ssvm",
      liveLink: "",
      about:
        "Developed a dynamic dashboard system for tracking and visualizing student performance. Enabled real-time score updates for students and provided parents with easy access to their child’s academic progress, facilitating transparent evaluation and better academic support.",
      stack: ["HTML", "CSS", "Javascript", "Tailwindcss","Php","MySQL"],
      img: "/performance.png",
    },
    {
      title: "SSVM School Website",
      gitLink: "https://github.com/namannb07/ssvm",
      liveLink: "",
      about:
        "Created a fully functional and responsive website for my school upon request from a faculty member. Designed and developed the platform to showcase school information, events, and updates, improving the school’s online presence and accessibility.",
      stack: ["HTML", "CSS", "JavaScript", "Bootstrap","Php","MySQL"],
      img: "/ssvmweb.png",
    },
    {
      title: "muscle Monster Gym Website with Exercise Tracker",
      gitLink: "https://github.com/namannb07/MuscleMonster",
      liveLink: "",
      about:
        "Designed and developed a feature-rich website for a local gym, with a key focus on an interactive exercise tracker. Enabled users to log workouts, plan routines, and monitor progress, enhancing user engagement and fitness planning.",
      stack: ["HTML", "CSS", "JavaScript", "Php","MySQL"],
      img: "/exercisetracker.jpg",
    },
   
    // {
    //   title: "Yourtodo",
    //   gitLink: "https://github.com/adex-hub/Yourtodo",
    //   liveLink: "https://yourtodo-v1.vercel.app/",
    //   about:
    //     "This task management system lets you customize your name, add, delete, and edit tasks, and celebrates you when tasks are completed. It features built-in notifications and stores data in the browser, allowing you to resume tasks conveniently. Designed and developed by yours truly.",
    //   stack: ["react", "javascript", "figma", "sass"],
    //   img: "/todo.svg",
    // },
    
    {
      title: "SafaiSetu",
      gitLink: "https://github.com/namannb07/SafaiSetu",
      liveLink: "",
      about:
        "SafaiSetu is a JavaFX-based sanitation management app that connects to a MySQL database to help monitor complaints, cleanliness reports, garbage bins, and workers. Designed for smart cities, it streamlines urban cleanliness operations and promotes citizen participation.",
      stack: ["JavaFX", "Java", "JDBC", "Maven","MySQL"],
      img: "/Safai.jpg",
    },
    
  ];

  const { ref, inView } = useInView({
    threshold: 0.1,
    rootMargin: "-100px 0px",
  });

  useEffect(() => {
    if (inView) setSectionInView("work");
  }, [inView, setSectionInView]);

  return (
    <section
      className="flex flex-col gap-6 md:gap-10 pt-[110px]"
      ref={ref}
      id="work"
    >
      <Title>Projects</Title>
      {works.map((work, index) => (
        <FolioCard
          key={index}
          img={work.img}
          title={work.title}
          gitLink={work.gitLink}
          liveLink={work.liveLink}
          about={work.about}
          stack={work.stack}
        />
      ))}

      <Timeline />
    </section>
  );
}
