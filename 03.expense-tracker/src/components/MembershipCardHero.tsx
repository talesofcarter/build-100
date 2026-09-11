import React from "react";

interface MembershipCardProps {
  totals: () => number;
  transactionCount: number;
  memberSince: string;
}

const MembershipCardHero = ({
  totals,
  transactionCount,
  memberSince,
}: MembershipCardProps): React.JSX.Element => {
  const total = Math.round(totals() * 100) / 100;

  const today = new Date();

  const currentDate = today.toLocaleDateString("en-US", {
    month: "short",
    day: "numeric",
  });

  const daysRemaining =
    new Date(today.getFullYear(), today.getMonth() + 1, 0).getDate() -
    today.getDate();

  const memberSinceLabel = new Date(memberSince)
    .toLocaleDateString("en-US", { month: "short", year: "numeric" })
    .toUpperCase();

  const dailyAverage =
    transactionCount > 0
      ? Math.round((total / today.getDate()) * 100) / 100
      : 0;

  return (
    <div className="relative overflow-hidden rounded-2xl bg-linear-to-br from-[#0053E2] to-[#00308F] px-6 md:px-8 py-7 text-white">
      <div className="absolute -right-10 -top-16 h-56 w-56 rounded-full bg-white/5" />
      <div className="absolute -right-24 top-10 h-64 w-64 rounded-full bg-white/5" />

      <div className="relative flex flex-col md:flex-row md:items-end md:justify-between gap-6">
        <div>
          <p className="text-[12px] font-medium tracking-wide text-white/70">
            Balance
          </p>
          <p className="mt-2 text-[38px] font-mono font-semibold leading-none">
            ${total}
          </p>
          <p className="mt-1.5 text-[13px] text-white/70">
            {transactionCount}{" "}
            {transactionCount === 1 ? "transaction" : "transactions"} logged
          </p>
        </div>

        <div className="grid grid-cols-2 gap-8 text-right">
          <div>
            <p className="text-[11px] font-medium tracking-wide text-white/60">
              Current date
            </p>
            <p className="mt-1 text-[15px] font-mono font-semibold">
              {currentDate}
            </p>
          </div>
          <div>
            <p className="text-[11px] font-medium tracking-wide text-white/60">
              Days left
            </p>
            <p className="mt-1 text-[15px] font-mono font-semibold">
              {daysRemaining}
            </p>
          </div>
        </div>
      </div>

      {/* receipt-style perforation strip */}
      <div className="relative mt-6 pt-4 border-t border-dashed border-white/25 flex items-center justify-between text-[11.5px] font-mono text-white/60">
        <span>MEMBER SINCE {memberSinceLabel}</span>
        <span>AVG/DAY ${dailyAverage.toFixed(2)}</span>
      </div>
    </div>
  );
};

export default MembershipCardHero;
