"use client";
import { Icon } from "@iconify/react/dist/iconify.js";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import Tag from "./Tag";

// @ts-ignore
import "intersection-observer";
import { useInView } from "react-intersection-observer";

export default function FolioCard({
  title,
  img,
  gitLink,
  liveLink,
  about,
  stack,
}: {
  img: string;
  title: string;
  gitLink?: string;
  liveLink: string;
  about: string;
  stack: string[];
}) {
  const { ref, inView } = useInView({
    threshold: 0.3,
    rootMargin: "-100px 0px",
    triggerOnce: true,
  });

  return (
    <div
      ref={ref}
      className={`w-full rounded-2xl std-backdrop-blur bg-primary/50 border border-accent-cyan/30 shadow-[0_0_15px_var(--color-accent-cyan)] grid grid-cols-1 items-start lg:grid-cols-12 xl:flex gap-5 xl:gap-10 p-6 duration-700 ${
        inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-12"
      }`}
    >
      <Image
        src={img}
        width={420}
        height={700}
        alt="work"
        className="rounded-lg w-full lg:col-span-5"
      />
      <div className="flex flex-col gap-4 lg:col-span-7">
        <div className="flex items-center justify-between">
          <h2 className="text-3xl sm:text-4xl xl:text-5xl font-bold font-mono text-accent-cyan">
            {title}
          </h2>
          <div className="flex gap-3 md:gap-4 text-2xl sm:text-3xl xl:text-4xl text-text-secondary">
            <Link
              href={liveLink}
              className="rounded-full bg-primary/50 p-3 transition-all duration-300 hover:text-accent-cyan hover:shadow-[0_0_10px_var(--color-accent-cyan)]"
              target="_blank"
              aria-label="View Github Repo"
              data-blobity-radius="34"
              data-blobity-magnetic="true"
            >
              <Icon icon="line-md:external-link-rounded" />
            </Link>
            <Link
              href={`${gitLink ? gitLink : "#"}`}
              className="rounded-full bg-primary/50 p-3 transition-all duration-300 hover:text-accent-cyan hover:shadow-[0_0_10px_var(--color-accent-cyan)]"
              target="_blank"
              aria-label="View Live Demo"
              data-blobity-radius="34"
              data-blobity-magnetic="true"
              {...(!gitLink && {
                "data-blobity-tooltip": "Privately owned by Offset",
              })}
            >
              <Icon
                icon="mingcute:github-line"
                className={`${!gitLink && "opacity-30"}`}
              />
            </Link>
          </div>
        </div>
        <p className="text-base text-text-secondary">{about}</p>
        <div className="flex gap-3 md:gap-4 flex-wrap">
          {stack.map((tech, index) => (
            <Tag key={index}>{tech}</Tag>
          ))}
        </div>
      </div>
    </div>
  );
}
