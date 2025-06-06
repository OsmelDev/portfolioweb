import React from "react";
import { motion } from "framer-motion";

interface SectionCounterProps {
  currentSection: number;
  sections: {
    id: string;
    title: string;
  }[];
}

const SectionCounter = ({ currentSection, sections }: SectionCounterProps) => {
  return (
    <div className="fixed bottom-4 left-4 sm:bottom-8 sm:left-8 z-40">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.7 }}
        className="font-mono text-xs text-gray-500"
      >
        {String(currentSection + 1).padStart(2, "0")} /{" "}
        {String(sections.length).padStart(2, "0")}
      </motion.div>
    </div>
  );
};

export default SectionCounter;
