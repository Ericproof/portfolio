"use client";

import React, { useEffect } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import Link from "next/link";
import { BsArrowRight, BsLinkedin } from "react-icons/bs";
import { HiDownload } from "react-icons/hi";
import { FaGithubSquare } from "react-icons/fa";

import { useSectionInView } from "@/lib/hooks";
import { useActiveSectionCtx } from "@/context/ActiveSectionContext";

export default function Introduction() {
  const { ref } = useSectionInView("Home", 0.5);

  const { setActiveSection, setTimeOfLastClick } = useActiveSectionCtx();

  return (
    <section
      ref={ref}
      id="home"
      className="mb-28 max-w-[50rem] text-center sm:mb-0 scroll-mt-[100rem]"
    >
      <div className="flex items-center justify-center">
        <div className="relative">
          <motion.div
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{
              type: "tween",
              during: 0.2,
            }}
          >
            <Image
              src="/my_photo.png"
              alt="Eric"
              width="192"
              height="192"
              quality="95"
              priority={true}
              className="h-24 w-24 rounded-full object-cover border-[0.35rem] border-white shadow-xl"
            />
          </motion.div>
        </div>
      </div>
      <motion.h1
        className="mb-10 mt-4 px-4 text-2xl font-medium !leading-[1.5] sm:text-4xl"
        initial={{ opacity: 0, y: 100 }}
        animate={{ opacity: 1, y: 0 }}
      >
        <span className="font-bold">Hello, I&#39;m Eric.</span> I&#39;m a{" "}
        <span className="font-bold">full-stack developer</span> with{" "}
        <span className="font-bold">1 year</span> of experience. I enjoy
        building <span className="italic">website</span>. My focus is{" "}
        <span className="underline">React</span>.
      </motion.h1>
      <motion.div
        initial={{ opacity: 0, y: 100 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{
          delay: 0.1,
        }}
        className="flex flex-col sm:flex-row items-center justify-center gap-3 px-4 text-lg font-medium"
      >
        <Link
          onClick={() => {
            setActiveSection("Contact");
            setTimeOfLastClick(Date.now());
          }}
          href="#contact"
          className="group bg-gray-900 rounded-full
           text-white px-7 py-3 flex items-center gap-2 outline-none focus:scale-110 hover:scale-105 hover:bg-gray-950 active:scale-105 transition"
        >
          Contact Me Here
          <BsArrowRight className="opacity-70 group-hover:translate-x-1" />
        </Link>
        <a
          className="group bg-white rounded-full
           px-7 py-3 flex items-center gap-2 outline-none focus:scale-110 hover:scale-105 active:scale-105 transition cursor-pointer borderBlack"
          href="/Eric Zhang resume v1.pdf"
          download
        >
          Download CV{" "}
          <HiDownload className="opacity-60 group-hover:translate-y-1" />
        </a>
        <a
          className="bg-white rounded-full
           p-4 py-3 text-gray-600 flex items-center gap-2 focus:scale-[1.15] hover:text-gray-950 hover:scale-[1.15] active:scale-105 transition cursor-pointer borderBlack"
          href="https://www.linkedin.com/in/eric-zhang1995/"
          target="_blank"
        >
          <BsLinkedin />
        </a>
        <a
          className="bg-white rounded-full
           p-4 py-3 text-gray-600 flex items-center gap-2 text-[1.35rem] focus:scale-[1.15] hover:text-gray-950 hover:scale-[1.15] active:scale-105 transition cursor-pointer borderBlack"
          href="https://github.com/Ericproof"
          target="_blank"
        >
          <FaGithubSquare />
        </a>
      </motion.div>
    </section>
  );
}
