import React, { useState } from "react";
import { Navbar } from "./components/Navbar";
import { Header } from "./components/Nav";
import { PasswordDisplay } from "./components/PasswordDisplay";
import { ConfigurationPanel } from "./components/ConfigurationPanel";
import { PasswordHistory } from "./components/PasswordHistory";
import type { CharacterType, PasswordHistoryEntry } from "./types";

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
  const [includeSymbols, setIncludeSymbols] = useState<boolean>(false);
  const [passwordStrength, setPasswordStrength] = useState<number>(0);
  const [passwordStrengthLabel, setPasswordStrengthLabel] =
    useState<string>("");
  const [passwordHistory, setPassswordHistory] = useState<
    PasswordHistoryEntry[]
  >([]);

  const getPasswordStrength = (password: string): void => {
    const outcomes = {
      hasLowercase: false,
      hasUppercase: false,
      hasNumbers: false,
      hasSymbols: false,
    };

    const length = password.length;

    for (let i = 0; i < length; i++) {
      const character = password[i];

      if (charPool.lower.includes(character)) outcomes.hasLowercase = true;
      if (charPool.upper.includes(character)) outcomes.hasUppercase = true;
      if (charPool.numbers.includes(character)) outcomes.hasNumbers = true;
      if (charPool.symbols.includes(character)) outcomes.hasSymbols = true;
    }

    let score = 0;

    if (length >= 8) score++;
    if (length >= 12) score++;
    if (outcomes.hasLowercase) score++;
    if (outcomes.hasUppercase) score++;
    if (outcomes.hasNumbers) score++;
    if (outcomes.hasSymbols) score++;

    let label: string;
    if (score <= 2) {
      label = "Weak";
    } else if (score <= 4) {
      label = "Moderate";
    } else if (score === 5) {
      label = "Strong";
    } else {
      label = "Very Strong";
    }

    setPasswordStrength(score);
    setPasswordStrengthLabel(label);
  };

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
    getPasswordStrength(generatedPassword);

    const newEntry = {
      id: crypto.randomUUID(),
      value: generatedPassword,
      createdAt: new Date().toLocaleTimeString(),
    };

    setPassswordHistory((prev) => [newEntry, ...prev]);
  };

  const clearHistory = (): void => {
    setPassswordHistory([]);
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
              strengthScore={passwordStrength}
              strengthLabel={passwordStrengthLabel}
            />
            <ConfigurationPanel
              onGenerate={generateRandomPassword}
              length={passwordLength}
              onLengthChange={setPasswordLength}
              activeType={charType}
              onTypeChange={setCharType}
              symbolsOn={includeSymbols}
              onSymbolsChange={setIncludeSymbols}
            />
          </div>
          <div className="border-t border-[#EDEAE1] bg-[#FBFAF7] px-7 py-7 md:border-l md:border-t-0">
            <PasswordHistory
              entries={passwordHistory}
              clearHistory={clearHistory}
            />
          </div>
        </div>
      </div>
    </main>
  );
}

export default App;
