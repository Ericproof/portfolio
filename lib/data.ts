import React from "react";
import { CgWorkAlt } from "react-icons/cg";
import { LuGraduationCap } from "react-icons/lu";
import EvenProImg from "@/public/1.png";

import RealEstateImg from "@/public/2.png";

export const links = [
  {
    name: "Home",
    hash: "#home",
  },
  {
    name: "About",
    hash: "#about",
  },
  {
    name: "Skills",
    hash: "#skills",
  },
  {
    name: "Experience",
    hash: "#experience",
  },
  {
    name: "Projects",
    hash: "#projects",
  },

  {
    name: "Contact",
    hash: "#contact",
  },
] as const;

export const experiencesData = [
  {
    title: "Software Developer Intern",
    location: "Perth, WA",
    description:
      "I built the CRM system, my stack includes Angular, Sass, HTML, Material UI, Azure",

    icon: React.createElement(CgWorkAlt),
    date: "Dec 2022 - Feb 2023",
  },
  {
    title: "Master of information technology",
    location: "Sydeny, NSW",
    description: "I studyed in computer science and data engineering at UNSW",
    icon: React.createElement(LuGraduationCap),
    date: "2018 - 2021",
  },
  {
    title: "Frontend Developer",
    location: "China",
    description:
      "I developed an information management system. My stack includes Vue, MySQL, ElementUI.",
    icon: React.createElement(CgWorkAlt),
    date: "2017 - 2018",
  },
  {
    title: "Bachelor of Engineering",
    location: "China",
    description: "I studyed in electronic engineering.",
    icon: React.createElement(LuGraduationCap),
    date: "2013 - 2017",
  },
] as const;

export const projectsData = [
  {
    title: "Real Estate Market",
    description: "a real estate mobile application using React",
    tags: ["React", "Redux", "Firebase"],
    imageUrl: RealEstateImg,
  },
  {
    title: "Even Pro",
    description:
      "Developed a ticket shopping website with a Vue.js frontend and Python Flask backend",
    tags: ["Vue.js", "Python", "Flask", "Jira"],
    imageUrl: EvenProImg,
  },
] as const;

export const skillsData = [
  "HTML",
  "CSS",
  "JavaScript",
  "TypeScript",
  "React",
  "Next.js",
  "Node.js",
  "Git",
  "Angular.js",
  "Vue.js",
  "Tailwind",
  "MongoDB",
  "Redux",
  "Express",
  "PostgreSQL",
  "Python",
  "Flask",
  "Framer Motion",
] as const;
