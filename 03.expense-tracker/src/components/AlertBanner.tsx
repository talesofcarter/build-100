import React from "react";
import { AlertTriangle } from "lucide-react";

const AlertBanner = (): React.JSX.Element => {
  return (
    <div className="flex items-start gap-3 rounded-xl border border-[#F3D2B3] bg-[#FDF3E7] px-4 py-3">
      <AlertTriangle size={17} className="text-[#B4560A] mt-0.5 shrink-0" />
      <div className="flex-1 min-w-0">
        <p className="text-[13.5px] font-medium text-[#7A3D08]">
          Dining Out is over budget by $52.85
        </p>
        <p className="text-[12.5px] text-[#8A5A2A] mt-0.5">
          You've spent $402.85 of a $350.00 budget this month - 115% used.
        </p>
      </div>
      <button className="text-[12.5px] font-medium text-[#7A3D08] underline underline-offset-2 shrink-0 mt-0.5">
        Adjust budget
      </button>
    </div>
  );
};

export default AlertBanner;
