import React from "react";
import { KeyRound, Lock } from "lucide-react";

export function Navbar(): React.JSX.Element {
  return (
    <div className="flex items-center justify-between border-b border-[#EDEAE1] px-7 py-4">
      <div className="flex items-center gap-2">
        <KeyRound className="h-4.5 w-4.5 text-[#D97757]" strokeWidth={2} />
        <span className="text-lg tracking-tight text-[#2B271E]">
          Password Generator
        </span>
      </div>
      <div className="flex items-center gap-1.5 text-xs text-[#8A8272]">
        <Lock className="h-3.5 w-3.5" />
        Generated locally
      </div>
    </div>
  );
}
