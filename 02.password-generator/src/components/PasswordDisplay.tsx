import React from "react";
import { Copy } from "lucide-react";

interface PasswordDisplayProps {
  password: string;
  strengthScore: number; // 1 to 4, hardcoded from mock data
  strengthLabel: string;
}

export function PasswordDisplay({
  password,
  strengthScore,
  strengthLabel,
}: PasswordDisplayProps): React.JSX.Element {
  return (
    <div className="mb-6 rounded-2xl border border-[#EDEAE1] bg-white p-6 shadow-[0_1px_2px_rgba(43,39,30,0.04),0_10px_28px_-14px_rgba(43,39,30,0.22)]">
      <div className="flex items-start justify-between gap-4">
        <p className="break-all text-[1.4rem] leading-snug tracking-wide text-[#2B271E] sm:text-2xl">
          {password}
        </p>
        <button
          type="button"
          aria-label="Copy password"
          className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg text-[#A39C8A] transition-colors hover:bg-[#F5F2EB] hover:text-[#D97757]"
        >
          <Copy className="h-4 w-4" />
        </button>
      </div>

      <div className="mt-5 flex items-center gap-3">
        <div className="flex flex-1 gap-1">
          {[1, 2, 3, 4].map((segment) => (
            <span
              key={segment}
              className={`h-1 flex-1 rounded-full ${
                segment <= strengthScore ? "bg-[#D97757]" : "bg-[#EDEAE1]"
              }`}
            />
          ))}
        </div>
        <span className="text-xs font-medium text-[#D97757]">
          {strengthLabel}
        </span>
      </div>
    </div>
  );
}
