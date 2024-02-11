import { useActiveSectionCtx } from "@/context/ActiveSectionContext";
import { useEffect } from "react";
import { useInView } from "react-intersection-observer";
import type { SectionName } from "@/lib/types";

// type useSectionInViewProps = { sectionName: sectionName };

export function useSectionInView(sectionName: SectionName, threshold = 0.75) {
  const {
    activeSection,
    setActiveSection,
    timeOfLastClick,
    setTimeOfLastClick,
  } = useActiveSectionCtx();
  const { ref, inView } = useInView({ threshold });
  //ture/false
  //before rendering
  useEffect(() => {
    if (Date.now() - timeOfLastClick > 1000 && inView) {
      setActiveSection(sectionName);
    }
  }, [inView, setActiveSection, sectionName, timeOfLastClick]);
  return { ref };
}
