import React from "react";

interface SymbolToggleProps {
  checked: boolean;
  onChangeSymbols: React.Dispatch<React.SetStateAction<boolean>>;
}

export function SymbolToggle({
  checked,
  onChangeSymbols,
}: SymbolToggleProps): React.JSX.Element {
  return (
    <div className="flex items-center justify-between gap-4 px-5 py-4">
      <div>
        <p className="text-sm text-[#2B271E]">Include symbols</p>
        <p className="text-xs text-[#8A8272]">
          Adds characters like # $ % and &
        </p>
      </div>
      <button
        onClick={() => onChangeSymbols(!checked)}
        type="button"
        role="switch"
        aria-checked={checked}
        className={`relative h-6 w-11 shrink-0 rounded-full transition-colors duration-200 ease-in-out ${
          checked ? "bg-[#D97757]" : "bg-[#E5E1D6]"
        }`}
      >
        <span
          className={`absolute left-0 top-0.5 h-5 w-5 rounded-full bg-white shadow-[0_1px_3px_rgba(43,39,30,0.25)] transition-transform duration-200 ease-in-out ${
            checked ? "translate-x-5.5" : "translate-x-0.5"
          }`}
        />
      </button>
    </div>
  );
}
