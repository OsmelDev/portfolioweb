import React from "react";
import { motion, AnimatePresence } from "framer-motion";

interface MobileMenuProps {
  isMobileMenuOpen: boolean;
  currentSection: number;
  sections: {
    id: string;
    title: string;
  }[];
  goToSection: (index: number) => void;
}

const MobileMenu = ({
  isMobileMenuOpen,
  currentSection,
  sections,
  goToSection,
}: MobileMenuProps) => {
  return (
    <AnimatePresence>
      {isMobileMenuOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="md:hidden fixed inset-0 bg-black/95 z-40 flex items-center justify-center"
        >
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 20 }}
            className="text-center space-y-8"
          >
            {sections.map((section, index) => (
              <button
                key={section.id}
                onClick={() => goToSection(index)}
                className={`block text-2xl font-mono transition-all duration-300 ${
                  currentSection === index ? "text-white" : "text-gray-500"
                }`}
              >
                {String(index + 1).padStart(2, "0")}. {section.title}
              </button>
            ))}
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default MobileMenu;
