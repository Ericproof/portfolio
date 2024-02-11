"use client";

import React from "react";
import { motion } from "framer-motion";
import SectionHeader from "./Section-header";

import { useSectionInView } from "@/lib/hooks";

export default function About() {
  const { ref } = useSectionInView("About", 0.8);

  return (
    <motion.section
      ref={ref}
      className="mb-28 max-w-[45rem] text-center leading-8 sm:mb-40 scroll-mt-28"
      initial={{ opacity: 0, y: 100 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.175 }}
      id="about"
    >
      <SectionHeader>About Me</SectionHeader>
      <p className="mb-3">
        <span className="font-medium">
          Creative and Innovative Software Engineer from UNSW with experience
          specialising
        </span>
        <span className="font-medium">
          in both front end and back end web application development. Proficient
          in JavaScript, React.js, Node.js, Restful API.
        </span>
        <span className="font-medium">
          Extensive experience on CI/CD, Azure. Working within an agile
          development and delivering projects on time.
        </span>
      </p>
    </motion.section>
  );
}
