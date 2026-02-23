"use client";

import { motion } from "framer-motion";

interface MarqueeProps {
  text: string;
  className?: string;
  itemClassName?: string;
  repeat?: number;
  duration?: number;
}

export default function Marquee({
  text,
  className = "",
  itemClassName = "text-8xl font-bold uppercase opacity-80",
  repeat = 4,
  duration = 20
}: MarqueeProps) {
  return (
    <div className={`flex overflow-hidden whitespace-nowrap select-none ${className}`}>
      <motion.div
        className="flex shrink-0 gap-10 py-2 items-center pr-10"
        animate={{ x: "-100%" }}
        transition={{ repeat: Infinity, ease: "linear", duration: duration }}
      >
        {[...Array(repeat)].map((_, i) => (
           <span key={i} className={itemClassName}>{text}</span>
        ))}
      </motion.div>
      <motion.div
        className="flex shrink-0 gap-10 py-2 items-center pr-10"
        animate={{ x: "-100%" }}
        transition={{ repeat: Infinity, ease: "linear", duration: duration }}
        aria-hidden
      >
        {[...Array(repeat)].map((_, i) => (
           <span key={i} className={itemClassName}>{text}</span>
        ))}
      </motion.div>
    </div>
  );
}
