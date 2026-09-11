import React from "react";

interface StatCardProps {
  label: string;
  value: string;
  caption: string;
  icon: React.JSX.Element;
  prefix: string;
}

const StatCard = ({
  label,
  value,
  caption,
  icon,
  prefix = "$",
}: StatCardProps): React.JSX.Element => {
  return (
    <div className="rounded-xl border border-[#E3E0D8] bg-white px-4 py-4">
      <div className="flex items-center justify-between mb-2.5">
        <span className="text-[12px] font-medium text-[#8A8778]">{label}</span>
        <span className="text-[#9C9885]">{icon}</span>
      </div>
      <p className="text-[21px] font-mono font-semibold leading-none">
        {prefix}
        {value}
      </p>
      <p className="text-[11.5px] text-[#9C9885] mt-2.5">{caption}</p>
    </div>
  );
};

export default StatCard;
