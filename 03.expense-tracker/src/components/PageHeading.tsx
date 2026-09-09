import React from "react";
import { Plus } from "lucide-react";

interface PageHeadingProps {
  onOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

const PageHeading = ({ onOpen }: PageHeadingProps): React.JSX.Element => {
  return (
    <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-4">
      <div>
        <h1 className="text-[26px] font-semibold tracking-[-0.01em] leading-tight">
          Good afternoon, Kelvin
        </h1>
        <p className="text-[13.5px] text-[#7A776D] mt-1">
          Here's where your money went this month.
        </p>
      </div>
      <button
        onClick={() => onOpen(true)}
        className="inline-flex items-center gap-1.5 rounded-lg bg-[#0053E2] px-4 py-2 text-[13.5px] font-semibold text-white hover:bg-[#0047C4] transition-colors self-start"
      >
        <Plus size={16} strokeWidth={2.5} />
        Add expense
      </button>
    </div>
  );
};

export default PageHeading;
