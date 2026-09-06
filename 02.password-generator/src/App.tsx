import React from "react";
import { Navbar } from "./components/Navbar";
import { Header } from "./components/Nav";
import { PasswordDisplay } from "./components/PasswordDisplay";
import { ConfigurationPanel } from "./components/ConfigurationPanel";
import { PasswordHistory } from "./components/PasswordHistory";
import type { PasswordHistoryEntry } from "./types";

const mockPassword = "xK9$mPz2#vLwQr8";
const strengthScore = 4;
const strengthLabel = "Very strong";

const mockHistory: PasswordHistoryEntry[] = [
  { id: "1", value: "aB3!kLm9pQr2xY7", createdAt: "2m ago" },
  { id: "2", value: "T7#nWq4$eRt8uIo1", createdAt: "1h ago" },
  { id: "3", value: "zX2@bN5vC8mK1jH", createdAt: "Yesterday" },
  { id: "4", value: "Qw8&rT3vNm6Xk1Ld", createdAt: "2 days ago" },
  { id: "5", value: "Hj4#Bp7Ln2Wq9Zc", createdAt: "3 days ago" },
];

function App(): React.JSX.Element {
  return (
    <main className="min-h-screen bg-[#FAF9F5] p-6">
      <div className="mx-auto max-w-5xl overflow-hidden rounded-2xl border border-[#E5E1D6] bg-white shadow-[0_1px_2px_rgba(43,39,30,0.04),0_24px_48px_-28px_rgba(43,39,30,0.2)]">
        <Navbar />
        <div className="grid grid-cols-1 md:grid-cols-[1.3fr_1fr]">
          <div className="px-8 py-7">
            <Header />
            <PasswordDisplay
              password={mockPassword}
              strengthScore={strengthScore}
              strengthLabel={strengthLabel}
            />
            <ConfigurationPanel
              length={18}
              activeType="alphanumeric"
              symbolsOn={true}
            />
          </div>
          <div className="border-t border-[#EDEAE1] bg-[#FBFAF7] px-7 py-7 md:border-l md:border-t-0">
            <PasswordHistory entries={mockHistory} />
          </div>
        </div>
      </div>
    </main>
  );
}

export default App;
