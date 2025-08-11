"use client";
import { useView } from "@/contexts/ViewContext";
import { Icon } from "@iconify/react/dist/iconify.js";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import MobileMenu from "./MobileMenu";
import { AnimatePresence, motion } from "framer-motion";

export default function Header() {
  const { sectionInView } = useView();
  const [menuOpen, setMenuOpen] = useState<boolean>(false);

  return (
    <>
      <div className="fixed max-w-[90%] xl:max-w-[1223px] w-full z-10 select-none">
        <div className="flex justify-between items-center px-6 py-4 rounded-2xl bg-primary/50 mt-4 sm:mt-8 std-backdrop-blur border border-accent-cyan/20">
          <Image
            src="/logo.svg"
            width={32}
            height={36}
            alt="logo"
            className="select-none"
          />
          <Icon
            onClick={() => setMenuOpen(!menuOpen)}
            className="cursor-pointer flex sm:hidden text-2xl"
            icon={`${menuOpen ? "gg:close" : "lucide:menu"}`}
          />

          <ul className="hidden sm:flex gap-8 lg:gap-12 text-text-secondary">
            <Link
              href="#home"
              className={`transition-all duration-300 ${
                sectionInView === "home" && "text-accent-cyan drop-shadow-[0_0_5px_var(--color-accent-cyan)]"
              } `}
            >
              Home
            </Link>
            <Link
              href="#work"
              className={`transition-all duration-300 ${
                sectionInView === "work" && "text-accent-cyan drop-shadow-[0_0_5px_var(--color-accent-cyan)]"
              } `}
            >
              Project
            </Link>
            <Link
              href="#about"
              className={`transition-all duration-300 ${
                sectionInView === "about" && "text-accent-cyan drop-shadow-[0_0_5px_var(--color-accent-cyan)]"
              } `}
            >
              About
            </Link>
            <Link
              href="#contact"
              className={`transition-all duration-300 ${
                sectionInView === "contact" && "text-accent-cyan drop-shadow-[0_0_5px_var(--color-accent-cyan)]"
              } `}
            >
              Contact
            </Link>
          </ul>
          <div className="gap-5 text-xl hidden sm:flex text-text-secondary">
            <Link target="_blank" href="https://www.linkedin.com/in/naman-bhawsar-62285b33a/" className="transition-all duration-300 hover:text-accent-cyan hover:drop-shadow-[0_0_5px_var(--color-accent-cyan)]">
              <Icon icon="hugeicons:linkedin-01" />
            </Link>
            <Link target="_blank" href="https://github.com/namannb07" className="transition-all duration-300 hover:text-accent-cyan hover:drop-shadow-[0_0_5px_var(--color-accent-cyan)]">
              <Icon icon="hugeicons:github" />
            </Link>
          </div>
        </div>
      </div>

      <AnimatePresence>
        {menuOpen && <MobileMenu onMenuOpen={setMenuOpen} />}
      </AnimatePresence>
    </>
  );
}
