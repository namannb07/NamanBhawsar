import { motion, useScroll, useTransform } from "framer-motion";
import React, { useRef } from "react";
import { Syne } from "next/font/google";

const syne = Syne({ subsets: ["latin"] });

export default function Title({ children }: { children: React.ReactNode }) {
  const titleRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: titleRef,
  });

  const opacity = useTransform(scrollYProgress, [0, 1], [0.8, 0.6]);

  return (
    <motion.h1
      ref={titleRef}
      style={{ opacity }}
      className={`uppercase ${syne.className} text-6xl md:text-8xl xl:text-9xl font-extrabold tracking-tight`}
    >
      {children}
    </motion.h1>
  );
}
