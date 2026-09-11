import React, { useState } from "react";
import {
  Wallet,
  Receipt,
  PieChart,
  ShieldCheck,
  type LucideIcon,
} from "lucide-react";

interface LoginPageProps {
  onLogin: (value: string) => void;
}

type ValueProps = {
  icon: LucideIcon;
  title: string;
  description: string;
};

const valueProps: ValueProps[] = [
  {
    icon: Receipt,
    title: "Log expenses in seconds",
    description: "Add a purchase, pick a category, done.",
  },
  {
    icon: PieChart,
    title: "See where money goes",
    description: "A clear breakdown by category, every month.",
  },
  {
    icon: ShieldCheck,
    title: "No accounts, no passwords",
    description: "Just your name. Your data stays on this device.",
  },
];

const LoginPage = ({ onLogin }: LoginPageProps): React.JSX.Element => {
  const [name, setName] = useState<string>("");

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!name.trim()) return;
    onLogin(name.trim());
  };

  return (
    <div className="flex min-h-screen w-full bg-[#FBFAF7] font-sans">
      <div className="hidden lg:flex lg:w-1/2 flex-col justify-between border-r border-[#E3E0D8] px-16 py-14">
        <div className="flex items-center gap-2.5">
          <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-[#0053E2] text-white">
            <Wallet size={16} strokeWidth={2.25} />
          </div>
          <span className="text-[14px] font-semibold tracking-[-0.01em]">
            Ledger
          </span>
        </div>

        <div className="max-w-md">
          <h1 className="text-[32px] font-semibold tracking-[-0.015em] leading-[1.15] text-[#14171A]">
            Track every dollar, minus the clutter.
          </h1>
          <p className="mt-3 text-[14.5px] text-[#7A776D] leading-relaxed">
            Ledger keeps your spending organized in one clean place, so you
            always know where you stand.
          </p>

          <div className="mt-10 space-y-6">
            {valueProps.map(({ icon: Icon, title, description }) => (
              <div key={title} className="flex items-start gap-3.5">
                <div className="flex h-8 w-8 items-center justify-center rounded-lg border border-[#E3E0D8] text-[#4A4740] shrink-0">
                  <Icon size={15} strokeWidth={1.75} />
                </div>
                <div>
                  <p className="text-[13.5px] font-medium text-[#14171A]">
                    {title}
                  </p>
                  <p className="text-[12.5px] text-[#9C9885] mt-0.5">
                    {description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        <p className="text-[11.5px] text-[#B8B5A8]">
          A simple expense tracker for personal use.
        </p>
      </div>

      <div className="flex flex-1 items-center justify-center px-6 py-14">
        <div className="w-full max-w-85">
          <div className="flex lg:hidden items-center gap-2.5 mb-10 justify-center">
            <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-[#0053E2] text-white">
              <Wallet size={16} strokeWidth={2.25} />
            </div>
            <span className="text-[14px] font-semibold tracking-[-0.01em]">
              Ledger
            </span>
          </div>

          <h2 className="text-[19px] font-semibold tracking-[-0.01em] text-[#14171A]">
            Welcome
          </h2>
          <p className="text-[13.5px] text-[#8A8778] mt-1.5 mb-8">
            Enter your name to open your workspace.
          </p>

          <form onSubmit={handleSubmit}>
            <label className="block text-[12px] font-medium text-[#4A4740] mb-1.5">
              Your name
            </label>
            <input
              autoFocus
              value={name}
              onChange={(e) => setName(e.target.value)}
              placeholder="Full name"
              className="w-full rounded-lg border border-[#E3E0D8] bg-white px-3.5 py-2.5 text-[13.5px] font-medium outline-none focus:border-[#0053E2] placeholder:text-[#B8B5A8] placeholder:font-normal transition-colors"
            />

            <button
              type="submit"
              disabled={!name.trim()}
              className="mt-4 w-full rounded-lg bg-[#0053E2] px-4 py-2.5 text-[13.5px] font-semibold text-white hover:bg-[#0047C4] transition-colors disabled:opacity-35 disabled:cursor-not-allowed disabled:hover:bg-[#0053E2]"
            >
              Continue
            </button>
          </form>

          <p className="text-[11.5px] text-[#B8B5A8] text-center mt-6 leading-relaxed">
            No password required. Your name is only used to personalize the
            workspace and is stored on this device.
          </p>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
