"use client";
import React, { useState, createContext, useContext } from "react";
import type { SectionName } from "@/lib/types";

type ActiveSectionContextPoviderProps = {
  children: React.ReactNode;
};
type ActiveSectionContextType = {
  activeSection: SectionName;
  setActiveSection: React.Dispatch<React.SetStateAction<SectionName>>;
  timeOfLastClick: number;
  setTimeOfLastClick: React.Dispatch<React.SetStateAction<number>>;
};
export const ActiveSectionContext =
  createContext<ActiveSectionContextType | null>(null);
export default function ActiveSectionContextPovider({
  children,
}: ActiveSectionContextPoviderProps) {
  const [activeSection, setActiveSection] = useState<SectionName>("Home"); //track link
  const [timeOfLastClick, setTimeOfLastClick] = useState(0); //keep to track the time of last click to disable the observer for 1s when user clicks on a link
  return (
    <ActiveSectionContext.Provider
      value={{
        activeSection,
        setActiveSection,
        timeOfLastClick,
        setTimeOfLastClick,
      }}
    >
      {children}
    </ActiveSectionContext.Provider>
  );
}
export function useActiveSectionCtx() {
  const ctx = useContext(ActiveSectionContext);
  if (ctx === null) {
    throw new Error(
      "useActiveSectionContext must be used within an ActiveSectionContextProvider"
    );
  }
  return ctx;
}
