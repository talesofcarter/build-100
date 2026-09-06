import React from "react";
import { RefreshCw } from "lucide-react";

export function GenerateButton(): React.JSX.Element {
  return (
    <button
      type="button"
      className="flex w-full items-center justify-center gap-2 rounded-xl bg-[#D97757] px-4 py-3.5 text-sm font-medium text-white shadow-[0_1px_2px_rgba(43,39,30,0.06),0_10px_20px_-10px_rgba(217,119,87,0.55)] transition-colors hover:bg-[#C2653F]"
    >
      <RefreshCw className="h-4 w-4" />
      Generate password
    </button>
  );
}
