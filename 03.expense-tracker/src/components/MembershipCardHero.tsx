import React from "react";

const MembershipCardHero = (): React.JSX.Element => {
  return (
    <div className="relative overflow-hidden rounded-2xl bg-linear-to-br from-[#0053E2] to-[#00308F] px-6 md:px-8 py-7 text-white">
      <div className="absolute -right-10 -top-16 h-56 w-56 rounded-full bg-white/5" />
      <div className="absolute -right-24 top-10 h-64 w-64 rounded-full bg-white/5" />

      <div className="relative flex flex-col md:flex-row md:items-end md:justify-between gap-6">
        <div>
          <p className="text-[12px] font-medium tracking-wide text-white/70">
            Discretionary budget &mdash; September 2026
          </p>
          <p className="mt-2 text-[38px] font-mono font-semibold leading-none">
            $2,143.67
          </p>
          <p className="mt-1.5 text-[13px] text-white/70">
            of $3,200.00 monthly budget
          </p>
        </div>

        <div className="w-full md:w-72">
          <div className="flex justify-between text-[12px] text-white/80 mb-1.5">
            <span>67% used</span>
            <span>22 days left</span>
          </div>
          <div className="h-2.5 w-full rounded-full bg-white/15 overflow-hidden">
            <div
              className="h-full rounded-full bg-[#FFC220]"
              style={{ width: "67%" }}
            />
          </div>
          <p className="mt-2 text-[12.5px] text-white/70">
            $1,056.33 remaining
          </p>
        </div>
      </div>

      {/* receipt-style perforation strip */}
      <div className="relative mt-6 pt-4 border-t border-dashed border-white/25 flex items-center justify-between text-[11.5px] font-mono text-white/60">
        <span>MEMBER SINCE JAN 2024</span>
        <span>CARD •••• 4521</span>
        <span>PLAN: DISCRETIONARY</span>
      </div>
    </div>
  );
};

export default MembershipCardHero;
