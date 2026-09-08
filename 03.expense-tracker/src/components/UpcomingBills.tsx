import React from "react";
import BillRow from "./BillRow";
import { CreditCard } from "lucide-react";

const UpcomingBills = (): React.JSX.Element => {
  return (
    <div>
      <div className="flex items-center justify-between mb-3.5">
        <h2 className="text-[15px] font-semibold">Upcoming bills</h2>
        <a href="#" className="text-[12.5px] font-medium text-[#0053E2]">
          Manage
        </a>
      </div>
      <div className="rounded-xl border border-[#E3E0D8] bg-white divide-y divide-[#EDEBE3]">
        <BillRow name="Rent" date="Sep 15" amount="$1,250.00" tag="Housing" />
        <BillRow
          name="Car insurance"
          date="Sep 18"
          amount="$145.00"
          tag="Insurance"
        />
        <BillRow
          name="Internet"
          date="Sep 20"
          amount="$79.99"
          tag="Utilities"
        />
      </div>

      <div className="mt-4 rounded-xl border border-[#E3E0D8] bg-white p-4">
        <p className="text-[13px] font-medium mb-3">Payment methods</p>
        <div className="space-y-2.5">
          <div className="flex items-center gap-2.5">
            <div className="flex h-7 w-9 items-center justify-center rounded bg-[#14171A]">
              <CreditCard size={13} className="text-white" />
            </div>
            <span className="text-[12.5px] font-mono text-[#4A4740]">
              Debit •••• 4521
            </span>
            <span className="ml-auto text-[12px] font-mono text-[#9C9885]">
              $1,041.20
            </span>
          </div>
          <div className="flex items-center gap-2.5">
            <div className="flex h-7 w-9 items-center justify-center rounded bg-[#0053E2]">
              <CreditCard size={13} className="text-white" />
            </div>
            <span className="text-[12.5px] font-mono text-[#4A4740]">
              Credit •••• 8890
            </span>
            <span className="ml-auto text-[12px] font-mono text-[#9C9885]">
              $782.47
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UpcomingBills;
