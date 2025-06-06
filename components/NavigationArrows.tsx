import React from "react";
import { Button } from "./ui/button";
import { ArrowLeft, ArrowRight } from "lucide-react";

interface NavigationArrowsProps {
  prevSection: () => void;
  nextSection: () => void;
  currentSection: number;
}

const NavigationArrows = ({
  prevSection,
  nextSection,
  currentSection,
}: NavigationArrowsProps) => {
  console.log(currentSection);

  return (
    <div className="fixed bottom-4 right-4 sm:bottom-8 sm:right-8 z-40 flex gap-2 sm:gap-4">
      <Button
        variant="ghost"
        size="sm"
        onClick={prevSection}
        className="text-gray-500 hover:text-white transition-colors p-2"
        disabled={currentSection === 0 && true}
      >
        <ArrowLeft className="w-4 h-4" />
      </Button>
      <Button
        variant="ghost"
        size="sm"
        onClick={nextSection}
        className="text-gray-500 hover:text-white transition-colors p-2"
        disabled={currentSection === 3 && true}
      >
        <ArrowRight className="w-4 h-4" />
      </Button>
    </div>
  );
};

export default NavigationArrows;
