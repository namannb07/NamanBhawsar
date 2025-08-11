import { useView } from "@/contexts/ViewContext";
import { Icon } from "@iconify/react/dist/iconify.js";
// import Link from "next/link";
import { Link } from "react-scroll";
import React from "react";

const curYear = new Date().getFullYear();

export default function Footer() {
  const { setSectionInView } = useView();

  return (
    <section
      id="footer"
      className="my-6 sm:my-8 text-sm sm:text-base lg:text-lg flex md:justify-between justify-center text-text-secondary"
    >
      <p className="font-mono">
        <span className="text-xl sm:text-2xl">&copy;</span> {curYear} NAMAN BHAWSAR
      </p>
      <Link
        className="md:flex hidden items-center gap-1 leading-tight transition-all duration-300 hover:text-accent-cyan hover:drop-shadow-[0_0_5px_var(--color-accent-cyan)]"
        to="home"
        smooth={true}
        spy={true}
        duration={500}
        href="#home"
        data-blobity-offset-x="2"
        data-blobity-offset-y="0"
      >
        <Icon icon="mdi:arrow-top" className="text-2xl" />
        <p className="underline leading-tight">SCROLL TO TOP</p>
      </Link>
    </section>
  );
}
