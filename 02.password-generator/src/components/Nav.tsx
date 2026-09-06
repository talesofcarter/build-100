import { KeyRound } from "lucide-react";

export function Nav() {
  return (
    <header className="mb-7">
      <div className="mb-1.5 flex items-center gap-2">
        <KeyRound className="h-4.5 w-4.5 text-[#D97757]" strokeWidth={2} />
        <h1 className="font-serif text-[1.7rem] tracking-tight text-[#2B271E]">
          Password Generator
        </h1>
      </div>
      <p className="text-[13.5px] leading-relaxed text-[#8A8272]">
        Create a password that's hard to guess and easy to keep safe.
      </p>
    </header>
  );
}
