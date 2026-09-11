import React from "react";
import {
  Wallet,
  ChevronDown,
  Plus,
  Home,
  Receipt,
  PiggyBank,
  BarChart3,
  Tag,
  Settings,
  type LucideIcon,
  LogOut,
} from "lucide-react";
import { getInitials } from "../utils/auth";

interface NavItemsType {
  id: number;
  link: string;
  icon: LucideIcon;
  label: string;
}

interface SidebarProps {
  onOpen: React.Dispatch<React.SetStateAction<boolean>>;
  userName: string;
  onLogout: () => void;
}

const navItems: NavItemsType[] = [
  {
    id: 1,
    link: "#",
    icon: Receipt,
    label: "Transactions",
  },
  {
    id: 2,
    link: "#",
    icon: PiggyBank,
    label: "Budgets",
  },
  {
    id: 3,
    link: "#",
    icon: Tag,
    label: "Categories",
  },
];

const Sidebar = ({
  onOpen,
  userName,
  onLogout,
}: SidebarProps): React.JSX.Element => {
  return (
    <aside className="hidden md:flex md:w-64 shrink-0 flex-col border-r border-[#E3E0D8] bg-[#F4F2EC]">
      {/* Workspace switcher */}
      <div className="flex items-center gap-2.5 px-4 h-16 border-b border-[#E3E0D8]">
        <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-[#0053E2] text-white">
          <Wallet size={17} strokeWidth={2.25} />
        </div>
        <div className="flex-1 min-w-0">
          <p className="text-[13.5px] font-semibold leading-tight truncate">
            {userName}'s Finances
          </p>
          <p className="text-[11.5px] text-[#7A776D] leading-tight">
            Personal workspace
          </p>
        </div>
        <ChevronDown size={15} className="text-[#8A8778]" />
      </div>

      {/* Add expense CTA */}
      <div className="px-3 pt-4">
        <button
          onClick={() => onOpen(true)}
          className="w-full flex items-center justify-center gap-1.5 rounded-lg bg-[#FFC220] px-3 py-2 text-[13.5px] font-semibold text-[#14171A] hover:bg-[#F5B700] transition-colors"
        >
          <Plus size={16} strokeWidth={2.5} />
          Add expense
        </button>
      </div>

      {/* Nav */}
      <nav className="flex-1 px-3 py-5 space-y-5 overflow-y-auto">
        <div>
          <p className="px-2.5 pb-1.5 text-[11.5px] font-medium text-[#9C9885]">
            Overview
          </p>
          <a
            href="#"
            className="flex items-center gap-2.5 rounded-md bg-white px-2.5 py-1.5 text-[13.5px] font-medium text-[#14171A] border border-[#E3E0D8] shadow-[0_1px_2px_rgba(20,23,26,0.04)]"
          >
            <Home size={16} strokeWidth={2} className="text-[#0053E2]" />
            Dashboard
          </a>
        </div>

        <div>
          <p className="px-2.5 pb-1.5 text-[11.5px] font-medium text-[#9C9885]">
            Money
          </p>
          <div className="space-y-0.5">
            {navItems.map(({ id, link, icon, label }) => {
              const Icon = icon;
              return (
                <a
                  key={id}
                  href={link}
                  className="flex items-center gap-2.5 rounded-md px-2.5 py-1.5 text-[13.5px] text-[#4A4740] hover:bg-white/70 transition-colors"
                >
                  <Icon size={16} strokeWidth={2} className="text-[#8A8778]" />
                  {label}
                </a>
              );
            })}
          </div>
        </div>

        <div>
          <p className="px-2.5 pb-1.5 text-[11.5px] font-medium text-[#9C9885]">
            Insights
          </p>
          <a
            href="#"
            className="flex items-center gap-2.5 rounded-md px-2.5 py-1.5 text-[13.5px] text-[#4A4740] hover:bg-white/70 transition-colors"
          >
            <BarChart3 size={16} strokeWidth={2} className="text-[#8A8778]" />
            Reports
          </a>
        </div>
      </nav>

      {/* Bottom profile */}
      <div className="border-t border-[#E3E0D8] p-3">
        <a
          href="#"
          className="flex items-center gap-2.5 rounded-md px-2.5 py-1.5 text-[13.5px] text-[#4A4740] hover:bg-white/70 transition-colors mb-1"
        >
          <Settings size={16} strokeWidth={2} className="text-[#8A8778]" />
          Settings
        </a>
        <div className="flex items-center gap-2.5 px-2.5 py-1.5">
          <div className="flex h-7 w-7 items-center justify-center rounded-full bg-[#0053E2] text-[11.5px] font-semibold text-white">
            {getInitials(userName)}
          </div>
          <div className="min-w-0 flex-1">
            <p className="text-[12.5px] font-medium leading-tight truncate">
              {userName}
            </p>
          </div>
          <button
            onClick={onLogout}
            title="Sign out"
            className="text-[#9C9885] hover:text-[#4A4740] shrink-0"
          >
            <LogOut size={14} />
          </button>
        </div>
      </div>
    </aside>
  );
};

export default Sidebar;
