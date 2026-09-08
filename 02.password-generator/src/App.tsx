import React, { useState } from "react";
import { Navbar } from "./components/Navbar";
import { Header } from "./components/Nav";
import { PasswordDisplay } from "./components/PasswordDisplay";
import { ConfigurationPanel } from "./components/ConfigurationPanel";
import { PasswordHistory } from "./components/PasswordHistory";
import { strengthScore, strengthLabel } from "./data/data";
import { mockHistory } from "./data/data";
import type { CharacterType } from "./types";

const charPool = {
  lower: "abcdefghijklmnopqrstuvwxyz",
  upper: "ABCDEFGHIJKLMNOPQRSTUVWXYZ",
  numbers: "0123456789",
  symbols: "!@#$%^&*()_+-=[]{}|;:,.<>?",
};

function App(): React.JSX.Element {
  const [password, setPassword] = useState<string>("");
  const [passwordLength, setPasswordLength] = useState<number>(18);
  const [charType, setCharType] = useState<CharacterType>("letters");
  const [includeSymbols, setIncludeSymbols] = useState<boolean | null>(true);

  const generateRandomPassword = (): void => {
    let pool = "";

    if (charType === "numbers") {
      pool = charPool.numbers;
    } else if (charType === "letters") {
      pool = charPool.lower + charPool.upper;
    } else if (charType === "alphanumeric") {
      pool = charPool.lower + charPool.upper + charPool.numbers;
    }

    if (includeSymbols) {
      pool += charPool.symbols;
    }

    let generatedPassword = "";

    for (let i = 0; i < passwordLength; i++) {
      const randomIdx = Math.floor(Math.random() * pool.length);
      generatedPassword += pool[randomIdx];
    }

    setPassword(generatedPassword);
  };

  return (
    <main className="min-h-screen bg-[#FAF9F5] p-6">
      <div className="mx-auto max-w-5xl overflow-hidden rounded-2xl border border-[#E5E1D6] bg-white shadow-[0_1px_2px_rgba(43,39,30,0.04),0_24px_48px_-28px_rgba(43,39,30,0.2)]">
        <Navbar />
        <div className="grid grid-cols-1 md:grid-cols-[1.3fr_1fr]">
          <div className="px-8 py-7">
            <Header />
            <PasswordDisplay
              password={password}
              strengthScore={strengthScore}
              strengthLabel={strengthLabel}
            />
            <ConfigurationPanel
              onGenerate={generateRandomPassword}
              length={passwordLength}
              onLengthChange={setPasswordLength}
              activeType={charType}
              setCharType={setCharType}
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
