import React, { SetStateAction } from "react";
import { motion } from "framer-motion";

interface DesktopNavigationProps {
  currentSection: number;
  sections: {
    id: string;
    title: string;
  }[];
  setCurrentSection: (value: SetStateAction<number>) => void;
}

const DesktopNavigation = ({
  currentSection,
  sections,
  setCurrentSection,
}: DesktopNavigationProps) => {
  return (
    <nav className="hidden md:block fixed top-4 sm:top-8 left-4 sm:left-8 z-40">
      <motion.div
        initial={{ opacity: 0, x: -20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ delay: 0.5 }}
        className="flex flex-col gap-2 sm:gap-4"
      >
        {sections.map((section, index) => (
          <button
            key={section.id}
            onClick={() => setCurrentSection(index)}
            className={`text-left text-xs sm:text-sm font-mono transition-all duration-300 ${
              currentSection === index
                ? "text-white"
                : "text-gray-500 hover:text-gray-300"
            }`}
          >
            {String(index + 1).padStart(2, "0")}. {section.title}
          </button>
        ))}
      </motion.div>
    </nav>
  );
};

export default DesktopNavigation;
