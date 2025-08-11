import React, { useEffect } from "react";
import Link from "next/link";
import { Icon } from "@iconify/react/dist/iconify.js";
import { useView } from "@/contexts/ViewContext";
import { useInView } from "react-intersection-observer";
import AnimatedBody from "../ui/AnimatedBody";
import AnimatedTitle from "../ui/AnimatedTitle";

export default function About() {
  const { setSectionInView } = useView();

  const { ref, inView } = useInView({
    threshold: 0.2,
    rootMargin: "-100px 0px",
  });

  useEffect(() => {
    if (inView) setSectionInView("about");
  }, [inView, setSectionInView]);

  return (
    <section ref={ref} className="pt-24 md:pt-[150px]" id="about">
      <AnimatedTitle
        wordSpace={"mr-[14px]"}
        charSpace={"mr-[0.001em]"}
        className={`uppercase font-mono antialiased text-4xl md:text-5xl xl:text-6xl font-bold text-accent-yellow`}
      >Somewhere, something incredible is waiting to be known
      </AnimatedTitle>
      <div className="grid grid-cols-1 lg:grid-cols-[8.5fr_3.5fr] gap-8 mt-6">
        <div className="grid grid-cols-1 antialiased gap-6 text-text-secondary text-xl md:text-2xl">
          <AnimatedBody className="leading-[34px] md:leading-[39px]">
            I am an MCA student at SGSITS with a passion for technology and innovation. I enjoy exploring new technologies and have experience in building projects like AI-powered surveillance tools, responsive websites, and Python-based applications. I am eager to learn, grow, and contribute to impactful tech solutions.
          </AnimatedBody>
        </div>
        <div className="font-mono bg-primary/70 border border-accent-magenta/30 rounded-lg p-4 shadow-[0_0_15px_var(--color-accent-magenta)]">
          <div className="grid grid-cols-1 gap-4">
            <div>
              <AnimatedTitle
                wordSpace={"mr-[0.5ch]"}
                charSpace={"mr-[0.001em]"}
                className="font-bold antialiased text-xl md:text-2xl mb-2 text-accent-magenta"
              >
                {'// Frontend Tools'}
              </AnimatedTitle>
              <AnimatedBody className="text-text-secondary/80 text-base md:text-xl leading-8">
                JavaScript(ES6+), HTML5, CSS3/SCSS/SASS, Tailwind CSS, Bootstrap.
              </AnimatedBody>
            </div>
            <div>
              <AnimatedTitle
                wordSpace={"mr-[0.5ch]"}
                charSpace={"mr-[0.001em]"}
                className="font-bold antialiased text-xl md:text-2xl mb-2 text-accent-magenta"
              >
                {'// Python'}
              </AnimatedTitle>
            </div>
            <div>
              <AnimatedTitle
                wordSpace={"mr-[0.5ch]"}
                charSpace={"mr-[0.001em]"}
                className="font-bold antialiased text-xl md:text-2xl mb-2 text-accent-magenta"
              >
                {'// Design Tools'}
              </AnimatedTitle>
              <AnimatedBody className="text-text-secondary/80 text-base md:text-xl leading-8">
                Figma, UI Design.
              </AnimatedBody>
            </div>
          </div>
        </div>
      </div>
      <div className="mt-10 sm:mt-20 lg:mt-10 mx-auto w-fit">
        <Link
          target="_blank"
          href="https://www.linkedin.com/in/naman-bhawsar-62285b33a/"
          className="flex items-center gap-2 bg-primary/50 border border-accent-yellow/50 rounded-lg px-6 py-4 text-accent-yellow shadow-[0_0_10px_var(--color-accent-yellow)] transition-all duration-300 hover:shadow-[0_0_20px_var(--color-accent-yellow)]"
        >
          Connect with me on LinkedIn<Icon icon="hugeicons:linkedin-02" />
        </Link>
      </div>
    </section>
  );
}
