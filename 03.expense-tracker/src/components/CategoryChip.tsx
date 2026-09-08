import React from "react";

interface CategoryChipProps {
  icon: React.ReactNode;
  label: string;
  color: string;
  bg: string;
  active?: boolean;
}

const CategoryChip = ({
  icon,
  label,
  color,
  bg,
  active,
}: CategoryChipProps) => {
  return (
    <button
      className={`flex flex-col items-center justify-center gap-1.5 rounded-xl border px-2 py-2.5 transition-colors ${
        active
          ? "border-transparent ring-2"
          : "border-[#E3E0D8] bg-white hover:border-[#D8D5CE]"
      }`}
      style={
        active
          ? { backgroundColor: bg, boxShadow: `0 0 0 2px ${color}` }
          : undefined
      }
    >
      <span
        className="flex h-7 w-7 items-center justify-center rounded-lg"
        style={{ backgroundColor: active ? "white" : bg, color }}
      >
        {icon}
      </span>
      <span
        className="text-[10.5px] font-medium leading-none"
        style={{ color: active ? color : "#4A4740" }}
      >
        {label}
      </span>
    </button>
  );
};

export default CategoryChip;
