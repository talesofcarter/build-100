import React from "react";
import { Copy, Trash2 } from "lucide-react";
import type { PasswordHistoryEntry } from "../types";

interface PasswordHistoryProps {
  entries: PasswordHistoryEntry[];
}

export function PasswordHistory({
  entries,
}: PasswordHistoryProps): React.JSX.Element {
  return (
    <div>
      <div className="mb-3 flex items-center justify-between">
        <h2 className="text-sm text-[#2B271E]">Recent</h2>
        <button
          type="button"
          className="flex items-center gap-1 text-xs text-[#A39C8A] transition-colors hover:text-[#D97757]"
        >
          <Trash2 className="h-3 w-3" />
          Clear
        </button>
      </div>

      <ul className="divide-y divide-[#EDEAE1]">
        {entries.map((entry) => (
          <li
            key={entry.id}
            className="group flex items-center justify-between gap-3 py-2.5"
          >
            <span className="truncate text-sm text-[#4A4436]">
              {entry.value}
            </span>
            <div className="flex shrink-0 items-center gap-3">
              <span className="text-xs text-[#B4AD98]">{entry.createdAt}</span>
              <button
                type="button"
                aria-label="Copy password"
                className="flex h-6 w-6 items-center justify-center rounded-md text-[#A39C8A] opacity-0 transition-opacity hover:text-[#D97757] group-hover:opacity-100"
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
