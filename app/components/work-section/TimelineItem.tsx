"use client";
import Image from "next/image";
import React from "react";

// @ts-ignore
import "intersection-observer";
import { useInView } from "react-intersection-observer";

export default function TimelineItem({
  companyImg,
  jobTitle,
  company,
  jobType,
  duration,
  stuffIDid,
}: {
  companyImg: string;
  jobTitle: string;
  company: string;
  jobType: string;
  duration:string;
  stuffIDid: string[];
}) {
  const { ref, inView } = useInView({
    threshold: 0.1,
    rootMargin: "-60px 0px",
    triggerOnce: true,
  });

  return (
    <div
      ref={ref}
      className={`relative duration-1000 ${
        inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-16"
      }`}
    >
      <div className="absolute -left-8 top-2">
        <div className="w-6 h-6 rounded-full bg-accent-cyan shadow-[0_0_10px_var(--color-accent-cyan)]"></div>
      </div>
      <div className="bg-primary/50 border border-accent-cyan/30 rounded-2xl p-4 sm:p-6">
        <div className="grid grid-cols-5 sm:flex items-start gap-4">
          <Image
            src={companyImg}
            width={70}
            height={70}
            alt="company-image"
            className="col-span-1 rounded-md"
          />

          {/* ALL THE TEXT*/}
          <div className="col-span-4">
            <div className="leading-tight">
              <h1 className="text-2xl sm:text-[2rem] font-bold font-mono text-accent-cyan">{jobTitle}</h1>
              <p className="text-base sm:text-lg font-bold my-2 sm:my-3 text-text-secondary">
                {company} | {jobType}
              </p>
            </div>
            <p className="text-base sm:text-lg text-text-secondary/70 my-3">{duration}</p>

            <ul className="flex flex-col gap-2 pl-4">
              {stuffIDid.map((stuff, index) => (
                <li key={index} className="relative before:content-['▸'] before:absolute before:left-[-1em] before:text-accent-cyan">
                  {stuff}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
