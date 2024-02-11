import React from "react";
import { VerticalTimelineElement } from "react-vertical-timeline-component";

import type { ExperienceCardProps } from "@/lib/types";
export default function ExperienceCard({
  title,
  location,
  description,
  icon,
  date,
}: ExperienceCardProps) {
  return (
    <VerticalTimelineElement
      visible={true}
      contentStyle={{
        background: "#f3f4f6",
        boxShadow: "none",
        border: "1px solid rgba(0,0,0,0.05)",
        textAlign: "left",
        padding: "1.3rem 2rem",
      }}
      contentArrowStyle={{
        borderRight: "0.4rem solid #9ca3af",
      }}
      icon={icon}
      iconStyle={{
        background: "white",
        fontSize: "1.5rem",
      }}
      date={date}
    >
      <h3 className="font-semibold capitalize">{title}</h3>
      <p className="font-normal !mt-0">{location}</p>
      <p className="font-normal !mt-0 text-gray-700">{description}</p>
    </VerticalTimelineElement>
  );
}
