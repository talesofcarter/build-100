import React from "react";
import { ChevronRight, Search, Bell } from "lucide-react";

const Topbar = (): React.JSX.Element => {
  return (
    <header className="flex items-center gap-4 h-16 shrink-0 border-b border-[#E3E0D8] bg-[#FBFAF7]/95 backdrop-blur px-5 md:px-8 sticky top-0 z-10">
      <div className="flex items-center gap-1.5 text-[13.5px] text-[#8A8778]">
        <span>Personal workspace</span>
        <ChevronRight size={13} />
        <span className="text-[#14171A] font-medium">Dashboard</span>
      </div>

      <div className="flex-1" />

      <div className="hidden sm:flex items-center gap-2 rounded-lg border border-[#E3E0D8] bg-white px-3 py-1.5 w-64">
        <Search size={15} className="text-[#9C9885]" />
        <input
          readOnly
          placeholder="Search transactions..."
          className="flex-1 bg-transparent text-[13px] outline-none placeholder:text-[#9C9885]"
        />
      </div>

      <button className="relative flex h-8 w-8 items-center justify-center rounded-lg border border-[#E3E0D8] bg-white text-[#4A4740] hover:bg-[#F4F2EC] transition-colors">
        <Bell size={15} />
        <span className="absolute -top-1 -right-1 flex h-3.5 w-3.5 items-center justify-center rounded-full bg-[#E01A2B] text-[9px] font-bold text-white">
          3
        </span>
      </button>
    </header>
  );
};

export default Topbar;
