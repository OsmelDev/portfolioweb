import { useTranslations } from "next-intl";
import { useState } from "react";

export const useActions = () => {
  const [currentSection, setCurrentSection] = useState(0);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const t = useTranslations("Sections");

  const sections = [
    { id: "intro", title: t("Intro") },
    { id: "about", title: t("About") },
    { id: "work", title: t("Work") },
    { id: "contact", title: t("Contact") },
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
