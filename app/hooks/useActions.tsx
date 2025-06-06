import { useState } from "react";

export const useActions = () => {
  const [currentSection, setCurrentSection] = useState(0);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  
  const sections = [
    { id: "intro", title: "Intro" },
    { id: "about", title: "About" },
    { id: "work", title: "Work" },
    { id: "contact", title: "Contact" },
  ];

  const nextSection = () => {
    setCurrentSection((prev) => (prev + 1) % sections.length);
    setIsMobileMenuOpen(false);
  };

  const prevSection = () => {
    setCurrentSection((prev) => (prev - 1 + sections.length) % sections.length);
    setIsMobileMenuOpen(false);
  };

  const goToSection = (index: number) => {
    setCurrentSection(index);
    setIsMobileMenuOpen(false);
  };

  return {
    sections,
    prevSection,
    nextSection,
    goToSection,
    currentSection,
    setCurrentSection,
    isMobileMenuOpen,
    setIsMobileMenuOpen,
  };
};
