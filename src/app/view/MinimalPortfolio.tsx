"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import LoadingScreen from "@/components/Loading";
import NavigationArrows from "@/components/NavigationArrows";
import SectionCounter from "@/components/SectionCounter";
import DesktopNavigation from "@/components/DesktopNavigation";
import MobileMenu from "@/components/MobileMenu";
import MobileMenuButton from "@/components/MobileMenuButton";
import MainContent from "@/components/MainContent";
import { useActions } from "../hooks/useActions";
import LocaleSwitcher from "@/components/localeSwitcher";

export default function MinimalPortfolio() {
  const [isLoading, setIsLoading] = useState(true);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isMobile, setIsMobile] = useState(false);

  const {
    sections,
    setCurrentSection,
    setIsMobileMenuOpen,
    currentSection,
    isMobileMenuOpen,
    nextSection,
    prevSection,
    goToSection,
  } = useActions();

  useEffect(() => {
    const timer = setTimeout(() => setIsLoading(false), 2000);
    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };

    checkMobile();
    window.addEventListener("resize", checkMobile);

    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (!isMobile) {
        setMousePosition({ x: e.clientX, y: e.clientY });
      }
    };
    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, [isMobile]);

  if (isLoading) {
    return <LoadingScreen />;
  }

  return (
    <div className="min-h-screen bg-[#0a0a0a] text-white overflow-hidden relative">
      {!isMobile && (
        <motion.div
          className="fixed w-4 h-4 bg-white rounded-full pointer-events-none z-50 mix-blend-difference hidden md:block"
          animate={{
            x: mousePosition.x - 8,
            y: mousePosition.y - 8,
          }}
          transition={{ type: "spring", stiffness: 500, damping: 28 }}
        />
      )}
      <div className="absolute top-5 right-15 md:top-5 md:right-5  ">
        <LocaleSwitcher />
      </div>
      <MobileMenuButton
        isMobileMenuOpen={isMobileMenuOpen}
        setIsMobileMenuOpen={setIsMobileMenuOpen}
      />

      <MobileMenu
        isMobileMenuOpen={isMobileMenuOpen}
        currentSection={currentSection}
        sections={sections}
        goToSection={goToSection}
      />

      <DesktopNavigation
        currentSection={currentSection}
        sections={sections}
        setCurrentSection={setCurrentSection}
      />

      <SectionCounter currentSection={currentSection} sections={sections} />

      <NavigationArrows
        prevSection={prevSection}
        nextSection={nextSection}
        currentSection={currentSection}
      />

      <MainContent currentSection={currentSection} />
    </div>
  );
}
