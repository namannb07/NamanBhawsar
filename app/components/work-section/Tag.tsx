import React from "react";

export default function Tag({ children }: { children: React.ReactNode }) {
  return (
    <p className="uppercase whitespace-nowrap bg-accent-magenta/20 text-accent-magenta border border-accent-magenta/50 px-2 py-[6px] md:py-[6px] md:px-3 rounded-md font-medium md:font-bold text-base lg:text-lg">
      {children}
    </p>
  );
}
