import React from "react";

interface CategoryTileProps {
  icon: React.ReactNode;
  name: string;
  spent: number;
  share: number;
  color: string;
  bg: string;
  over?: boolean;
}

const CategoryTile = ({
  icon,
  name,
  spent,
  share,
  color,
  bg,
}: CategoryTileProps) => {
  return (
    <div className="rounded-xl border border-[#E3E0D8] bg-white p-4 hover:border-[#D8D5CE] transition-colors">
      <div
        className="flex h-9 w-9 items-center justify-center rounded-lg mb-3"
        style={{ backgroundColor: bg, color }}
      >
        {icon}
      </div>
      <p className="text-[13.5px] font-medium">{name}</p>
      <p className="text-[16px] font-mono font-semibold mt-1">
        ${spent.toFixed(2)}
      </p>
      <div className="h-1.5 w-full rounded-full bg-[#F0EEE7] overflow-hidden mt-2.5">
        <div
          className="h-full rounded-full"
          style={{ width: `${share}%`, backgroundColor: color }}
        />
      </div>
      <p className="text-[11px] font-mono mt-1.5 text-[#9C9885]">
        {Math.round(share)}% of monthly spending
      </p>
    </div>
  );
};

export default CategoryTile;
