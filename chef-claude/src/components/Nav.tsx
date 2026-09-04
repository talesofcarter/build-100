import React from "react";
import { ChefHat } from "lucide-react";

const Nav = (): React.JSX.Element => {
  return (
    <header className="border-b border-[#E4DFD3]">
      <div className="mx-auto flex max-w-3xl items-center gap-3 px-6 py-5">
        <span className="flex h-9 w-9 items-center justify-center rounded-full bg-[#D93A2B]">
          <ChefHat className="h-5 w-5 text-[#FAF6EF]" strokeWidth={2.25} />
        </span>
        <span className="text-lg font-extrabold tracking-tight">
          Chef Claude
        </span>
      </div>
    </header>
  );
};

export default Nav;
