import React, { useState } from "react";

interface LoginProps {
  onLogin: (value: string) => void;
}

const LoginPage = ({ onLogin }: LoginProps) => {
  const [name, setName] = useState("");

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const trimmed = name.trim();
    if (!trimmed) return;
    onLogin(trimmed);
  };

  return (
    <div className="flex min-h-screen w-full items-center justify-center bg-[#F4F2EC] px-4 font-sans">
      <div className="w-full max-w-2xl rounded-[28px] border border-[#E3E0D8] bg-white px-5 py-7 sm:px-16 sm:py-8">
        <h1 className="mt-7 text-[30px] font-semibold tracking-[-0.015em] leading-tight text-[#14171A]">
          <span className="relative inline-block">
            <span className="absolute inset-x-0 bottom-0.5 h-3 bg-[#FFC220]/45 -z-10 rounded-sm" />
            Sign in to Ledger
          </span>
        </h1>
        <p className="mt-2.5 text-[14.5px] text-[#7A776D]">
          Enter your name to open your workspace.
        </p>

        <form onSubmit={handleSubmit} className="mt-10">
          <label className="block text-[12px] font-medium text-[#4A4740] mb-1.5">
            Your name
          </label>
          <input
            autoFocus
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder="Full name"
            className="w-full rounded-lg border border-[#E3E0D8] bg-white px-4 py-3 text-[14.5px] font-medium outline-none focus:border-[#0053E2] placeholder:text-[#B8B5A8] placeholder:font-normal transition-colors"
          />

          <div className="mt-8 flex items-center justify-between gap-4">
            <p className="text-[12.5px] text-[#9C9885] leading-snug">
              No password needed. Stored only on this device.
            </p>
            <button
              type="submit"
              disabled={!name.trim()}
              className="shrink-0 rounded-full bg-[#0053E2] px-7 py-2.5 text-[13.5px] font-semibold text-white hover:bg-[#0047C4] transition-colors disabled:opacity-35 disabled:cursor-not-allowed disabled:hover:bg-[#0053E2]"
            >
              Continue
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default LoginPage;
