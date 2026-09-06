import React from "react";
import type { CharacterType } from "../types";

interface TypeSelectorProps {
  activeValue: CharacterType;
}

const options: { value: CharacterType; label: string }[] = [
  { value: "letters", label: "Letters" },
  { value: "numbers", label: "Numbers" },
  { value: "alphanumeric", label: "Both" },
];

export function TypeSelector({
  activeValue,
}: TypeSelectorProps): React.JSX.Element {
  const activeIndex = options.findIndex(
    (option) => option.value === activeValue,
  );

  return (
    <div className="border-b border-[#EDEAE1] px-5 py-4">
      <span className="mb-3 block text-sm text-[#2B271E]">Character type</span>
      <div className="relative flex rounded-full bg-[#F5F2EB] p-1">
        <span
          className="absolute inset-y-1 rounded-full bg-white shadow-[0_1px_2px_rgba(43,39,30,0.08)]"
          style={{
            width: "calc(33.333% - 0.166rem)",
            left: `calc(${activeIndex} * 33.333% + 0.083rem)`,
          }}
        />
        {options.map((option) => (
          <button
            key={option.value}
            type="button"
            className={`relative z-10 flex-1 rounded-full py-1.5 text-sm font-medium ${
              option.value === activeValue ? "text-[#2B271E]" : "text-[#A39C8A]"
            }`}
          >
            {option.label}
          </button>
        ))}
      </div>
    </div>
  );
}
