import React from "react";
import { Copy, Trash2 } from "lucide-react";
import type { PasswordHistoryEntry } from "../types";

interface PasswordHistoryProps {
  entries: PasswordHistoryEntry[];
  clearHistory: () => void;
}

export function PasswordHistory({
  entries,
  clearHistory,
}: PasswordHistoryProps): React.JSX.Element {
  if (entries.length === 0) {
    return (
      <div className="py-4 text-center text-sm text-[#A39C8A]">
        No recent passwords
      </div>
    );
  }

  const slicedEntries = entries.slice(0, 10);

  return (
    <div>
      <div className="mb-2 flex items-center justify-between px-2">
        <h2 className="text-sm font-medium text-[#2B271E]">Recent</h2>
        <button
          onClick={clearHistory}
          type="button"
          className="flex items-center gap-1.5 rounded-md px-2 py-1 text-xs text-[#A39C8A] transition-colors hover:bg-[#EDEAE1] hover:text-[#D97757] focus:outline-none focus-visible:ring-2 focus-visible:ring-[#D97757]/50"
        >
          <Trash2 className="h-3.5 w-3.5" />
          Clear
        </button>
      </div>

      <ul className="flex flex-col">
        {slicedEntries.map((entry) => (
          <li
            key={entry.id}
            className="group flex items-center justify-between gap-4 rounded-lg px-3 py-2.5 transition-colors hover:bg-[#F5F3ED]"
          >
            <span className="truncate font-mono text-sm tracking-tight text-[#4A4436]">
              {entry.value}
            </span>
            <div className="flex shrink-0 items-center gap-2">
              <span className="text-xs text-[#A39C8A]">{entry.createdAt}</span>
              <button
                type="button"
                aria-label="Copy password"
                className="flex h-7 w-7 items-center justify-center rounded-md text-[#A39C8A] opacity-0 transition-all hover:bg-[#E5E1D6] hover:text-[#D97757] focus:opacity-100 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#D97757]/50 group-hover:opacity-100"
              >
                <Copy className="h-3.5 w-3.5" />
              </button>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}
