import React from "react";
import { AnimatePresence } from "framer-motion";
import IntroSection from "@/app/sections/Intro";
import AboutSection from "@/app/sections/About";
import WorkSection from "@/app/sections/Work";
import ContactSection from "@/app/sections/Contact";

interface MainContentProps {
  currentSection: number;
}

const MainContent = ({ currentSection }: MainContentProps) => {
  return (
    <main className="h-screen flex items-center justify-center px-4 sm:px-8">
      <AnimatePresence mode="wait">
        {currentSection === 0 && <IntroSection key="intro" />}
        {currentSection === 1 && <AboutSection key="about" />}
        {currentSection === 2 && <WorkSection key="work" />}
        {currentSection === 3 && <ContactSection key="contact" />}
      </AnimatePresence>
    </main>
  );
};

export default MainContent;
