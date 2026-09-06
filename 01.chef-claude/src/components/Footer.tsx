import React from "react";
import { ChefHat } from "lucide-react";

const Footer = (): React.JSX.Element => {
  return (
    <footer className="border-t border-[#E4DFD3]">
      <div className="mx-auto flex max-w-3xl flex-col items-center gap-2 px-6 py-8 text-center">
        <ChefHat className="h-5 w-5 text-[#A69E8F]" strokeWidth={2} />
        <p className="text-sm text-[#A69E8F]">
          Chef Claude — cooked up with whatever you've got
        </p>
        <p className="text-xs text-[#C9C2B5]">© 2026 Chef Claude</p>
      </div>
    </footer>
  );
};

export default Footer;
