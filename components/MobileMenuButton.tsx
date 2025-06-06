import React, { SetStateAction } from "react";
import { Button } from "./ui/button";
import { Menu, X } from "lucide-react";

interface MobileMenuButtonProps {
  isMobileMenuOpen: boolean;
  setIsMobileMenuOpen: (value: SetStateAction<boolean>) => void;
}

const MobileMenuButton = ({
  isMobileMenuOpen,
  setIsMobileMenuOpen,
}: MobileMenuButtonProps) => {
  return (
    <div className="md:hidden fixed top-4 right-4 z-50">
      <Button
        variant="ghost"
        size="sm"
        onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        className="text-white hover:text-gray-300"
      >
        {isMobileMenuOpen ? (
          <X className="w-5 h-5" />
        ) : (
          <Menu className="w-5 h-5" />
        )}
      </Button>
    </div>
  );
};

export default MobileMenuButton;
