import React from "react";
import {
  Wallet,
  AlertTriangle,
  PiggyBank,
  Receipt,
  CheckCheck,
} from "lucide-react";

const notifications = [
  {
    id: 1,
    icon: AlertTriangle,
    iconBg: "bg-[#FADDE1]",
    iconColor: "text-[#AD1A72]",
    title: "You're close to your Shopping budget",
    detail: "$1,240 of $1,200 spent this month",
    time: "2h ago",
    unread: true,
  },
  {
    id: 2,
    icon: Wallet,
    iconBg: "bg-[#DBEDDB]",
    iconColor: "text-[#448361]",
    title: "Monthly salary deposited",
    detail: "$6,200.00 added to Direct Deposit",
    time: "5h ago",
    unread: true,
  },
  {
    id: 3,
    icon: Receipt,
    iconBg: "bg-[#DDEBF1]",
    iconColor: "text-[#337EA9]",
    title: "New transaction detected",
    detail: "Whole Foods Market · $84.32",
    time: "1d ago",
    unread: false,
  },
  {
    id: 4,
    icon: PiggyBank,
    iconBg: "bg-[#F0E4FA]",
    iconColor: "text-[#6940A5]",
    title: "Savings goal milestone reached",
    detail: "Japan trip is now 57% funded",
    time: "2d ago",
    unread: false,
  },
];

const NotificationBar = (): React.JSX.Element => {
  return (
    <div className="w-90 overflow-hidden rounded-xl border border-[#EDECEC] bg-white shadow-lg">
      {/* Header */}
      <div className="flex items-center justify-between border-b border-[#EDECEC] px-4 py-3">
        <p className="text-[15px] font-semibold text-[#37352F]">
          Notifications
        </p>
        <button className="flex items-center gap-1 text-xs font-medium text-[#0866FF] hover:underline">
          <CheckCheck className="h-3.5 w-3.5" strokeWidth={2.5} />
          Mark all as read
        </button>
      </div>

      {/* List */}
      <div className="max-h-100 divide-y divide-[#F1F1EF] overflow-y-auto">
        {notifications.map((n) => (
          <button
            key={n.id}
            className="flex w-full items-start gap-3 px-4 py-3 text-left hover:bg-[#FAFAF9]"
          >
            <span
              className={`flex h-8 w-8 shrink-0 items-center justify-center rounded-full ${n.iconBg}`}
            >
              <n.icon className={`h-4 w-4 ${n.iconColor}`} strokeWidth={2.25} />
            </span>

            <div className="min-w-0 flex-1">
              <p className="truncate text-sm text-[#37352F]">
                <span className={n.unread ? "font-semibold" : "font-medium"}>
                  {n.title}
                </span>
              </p>
              <p className="truncate text-xs text-[#9B9A97]">{n.detail}</p>
              <p className="mt-0.5 text-xs text-[#C9C8C5]">{n.time}</p>
            </div>

            {n.unread && (
              <span className="mt-1.5 h-2 w-2 shrink-0 rounded-full bg-[#0866FF]" />
            )}
          </button>
        ))}
      </div>

      {/* Footer */}
      <div className="border-t border-[#EDECEC] px-4 py-2.5 text-center">
        <button className="text-sm font-medium text-[#0866FF] hover:underline">
          See all notifications
        </button>
      </div>
    </div>
  );
};

export default NotificationBar;
