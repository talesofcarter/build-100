import React from "react";

interface CategoryTileProps {
  icon: React.ReactNode;
  name: string;
  spent: number;
  budget: number;
  color: string;
  bg: string;
  over?: boolean;
}

const CategoryTile = ({
  icon,
  name,
  spent,
  budget,
  color,
  bg,
  over,
}: CategoryTileProps): React.JSX.Element => {
  const pct = Math.min(100, Math.round((spent / budget) * 100));
  const displayPct = Math.round((spent / budget) * 100);
  return (
    <div className="rounded-xl border border-[#E3E0D8] bg-white p-4 hover:border-[#D8D5CE] transition-colors">
      <div className="flex items-start justify-between mb-3">
        <div
          className="flex h-9 w-9 items-center justify-center rounded-lg"
          style={{ backgroundColor: bg, color }}
        >
          {icon}
        </div>
        {over && (
          <span className="inline-flex items-center rounded px-1.5 py-0.5 text-[10.5px] font-semibold text-[#E01A2B] bg-[#FDE9EA]">
            Over budget
          </span>
        )}
      </div>
      <p className="text-[13.5px] font-medium">{name}</p>
      <div className="flex items-baseline gap-1.5 mt-1">
        <span className="text-[16px] font-mono font-semibold">
          ${spent.toFixed(2)}
        </span>
        <span className="text-[12px] text-[#9C9885] font-mono">
          / ${budget.toFixed(2)}
        </span>
      </div>
      <div className="h-1.5 w-full rounded-full bg-[#F0EEE7] overflow-hidden mt-2.5">
        <div
          className="h-full rounded-full"
          style={{
            width: `${pct}%`,
            backgroundColor: over ? "#E01A2B" : color,
          }}
        />
      </div>
      <p
        className={`text-[11px] font-mono mt-1.5 ${over ? "text-[#E01A2B]" : "text-[#9C9885]"}`}
      >
        {displayPct}% used
      </p>
    </div>
  );
};

export default CategoryTile;
