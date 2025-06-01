"use client";
import { Syne } from "next/font/google";
import Title from "../ui/Title";
import TimelineItem from "./TimelineItem";

const syne = Syne({ subsets: ["latin"] });

const TimelineData = [
  {
    companyImg: "/sgsits.png",
    jobTitle: "Master of Computer Application (Pursuing)",
    company: "Shri G S Institute of Technology &  Science",
    jobType: "Post Graduation",
    duration: "Sept 2024 - Present",
    stuffIDid: [
      "8.64 CGPA (Current)",
    ],
  },
  {
    companyImg: "/ghsc.png",
    jobTitle: "Bachelor of Computer Application",
    company: "Govt Holkar Science College,Indore",
    jobType: "Graduation",
    duration: "Sept 2021 - Sept 2024",
    stuffIDid: [
      "8.02 CGPA",
    ],
  },
  {
    companyImg: "/gbhsc.png",
    jobTitle: "10+2",
    company: "Govt Boys HS School, Pipalrawan",
    jobType: "",
    duration: "July 2020 - May 2021",
    stuffIDid: [
      "92.8%",
    ],
  },
  {
    companyImg: "/ssvm.png",
    jobTitle: "10",
    company: "Saraswati Shishu Vidhya Mandir, Pipalrawan",
    jobType: "",
    duration: "July 2018 - May 2019",
    stuffIDid: [
      "91.8%",
    ],
  },
];

export default function Timeline() {
  return (
    <div className="mt-10 md:mt-[110px]">
      <Title>Education</Title>

      {/* THE THING, AFTER WHICH I WOULD DETERMINE THE HEIGHT */}
      <div className="flex mt-6 gap-4 pl-3">
        <div className="w-3 h-auto bg-linear-to-b from-white to-transparent" />

        <div className="flex flex-col gap-10">
          {TimelineData.map((item, index) => (
            <TimelineItem
              key={index}
              companyImg={item.companyImg}
              jobTitle={item.jobTitle}
              company={item.company}
              jobType={item.jobType}
              duration={item.duration}
              stuffIDid={item.stuffIDid}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
