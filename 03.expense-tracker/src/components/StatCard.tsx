import React from "react";
import { ArrowDownRight, ArrowUpRight } from "lucide-react";

interface StatCardProps {
  label: string;
  value: string;
  delta: string;
  deltaTone: keyof ToneStylesType;
  caption: string;
  icon: React.ReactNode;
}

interface ToneStylesType {
  up: string;
  down: string;
  neutral: string;
}

const StatCard = ({
  label,
  value,
  delta,
  deltaTone,
  caption,
  icon,
}: StatCardProps): React.JSX.Element => {
  const toneStyles: ToneStylesType = {
    up: "text-[#1D7A4C] bg-[#E6F3EA]",
    down: "text-[#B4560A] bg-[#FDF0E4]",
    neutral: "text-[#4A4740] bg-[#F4F2EC]",
  };

  const Arrow =
    deltaTone === "up"
      ? ArrowDownRight
      : deltaTone === "down"
        ? ArrowUpRight
        : null;

  return (
    <div className="rounded-xl border border-[#E3E0D8] bg-white px-4 py-4">
      <div className="flex items-center justify-between mb-2.5">
        <span className="text-[12px] font-medium text-[#8A8778]">{label}</span>
        <span className="text-[#9C9885]">{icon}</span>
      </div>
      <p className="text-[21px] font-mono font-semibold leading-none">
        {value}
      </p>
      <div className="flex items-center gap-1.5 mt-2.5">
        <span
          className={`inline-flex items-center gap-0.5 rounded px-1.5 py-0.5 text-[11px] font-semibold ${toneStyles[deltaTone]}`}
        >
          {Arrow && <Arrow size={11} strokeWidth={2.5} />}
          {delta}
        </span>
        <span className="text-[11.5px] text-[#9C9885]">{caption}</span>
      </div>
    </div>
  );
};

export default StatCard;
