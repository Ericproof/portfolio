"use client";
import React from "react";
import SectionHeader from "./Section-header";
import { experiencesData } from "@/lib/data";
import ExperienceCard from "@/components/ExperienceCard";
import { VerticalTimeline } from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";

import { useSectionInView } from "@/lib/hooks";

export default function Experience() {
  const { ref } = useSectionInView("Experience");
  //   console.log(experiencesData);
  return (
    <section ref={ref} id="experience">
      <SectionHeader>My Experience</SectionHeader>
      <VerticalTimeline lineColor="">
        {experiencesData.map((experienceItem, index) => (
          <React.Fragment key={index}>
            <ExperienceCard {...experienceItem} />
          </React.Fragment>
        ))}
      </VerticalTimeline>
    </section>
  );
}
