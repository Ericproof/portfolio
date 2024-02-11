import { links, experiencesData } from "./data";

export type SectionName = (typeof links)[number]["name"];
export type ExperienceCardProps = (typeof experiencesData)[number];
