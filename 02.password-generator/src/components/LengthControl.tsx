import React from "react";

interface LengthControlProps {
  length: number;
  onLengthChange: React.Dispatch<React.SetStateAction<number>>;
  min?: number;
  max?: number;
}

export function LengthControl({
  length,
  onLengthChange,
  min = 8,
  max = 32,
}: LengthControlProps): React.JSX.Element {
  const percent = ((length - min) / (max - min)) * 100;

  return (
    <div className="border-b border-[#EDEAE1] px-5 py-4">
      <div className="mb-3 flex items-center justify-between">
        <span className="text-sm text-[#2B271E]">Length</span>
        <span className="rounded-md bg-[#F5F2EB] px-2 py-0.5 text-xs text-[#6B6355]">
          {length}
        </span>
      </div>
      <input
        type="range"
        min={min}
        max={max}
        onChange={(e) => onLengthChange(parseInt(e.target.value))}
        value={length}
        style={{
          background: `linear-gradient(to right, #D97757 ${percent}%, #EDEAE1 ${percent}%)`,
        }}
        className="h-0.75 w-full appearance-none rounded-full
          [&::-webkit-slider-thumb]:h-4 [&::-webkit-slider-thumb]:w-4 [&::-webkit-slider-thumb]:appearance-none
          [&::-webkit-slider-thumb]:rounded-full [&::-webkit-slider-thumb]:bg-white
          [&::-webkit-slider-thumb]:shadow-[0_0_0_1px_#E5E1D6,0_2px_4px_rgba(43,39,30,0.15)]
          [&::-moz-range-thumb]:h-4 [&::-moz-range-thumb]:w-4 [&::-moz-range-thumb]:appearance-none
          [&::-moz-range-thumb]:rounded-full [&::-moz-range-thumb]:border-0 [&::-moz-range-thumb]:bg-white
          [&::-moz-range-thumb]:shadow-[0_0_0_1px_#E5E1D6,0_2px_4px_rgba(43,39,30,0.15)]"
      />
    </div>
  );
}
