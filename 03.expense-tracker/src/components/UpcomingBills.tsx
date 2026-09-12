import React from "react";
import BillRow from "./BillRow";
import { CreditCard, Inbox } from "lucide-react";

interface UpcomingBillsProps {
  groupByMethod: Record<string, number>;
  groupByCategory: Record<string, number>;
}

const UpcomingBills = ({
  groupByMethod,
  groupByCategory,
}: UpcomingBillsProps): React.JSX.Element => {
  const groupedMethodTotals = Object.entries(groupByMethod);
  const groupedCategoryTotals = Object.entries(groupByCategory);
  const sortedMethodEntries = [...groupedMethodTotals]
    .sort((a, b) => b[1] - a[1])
    .slice(0, 3);
  const sortedCategoryEntries = [...groupedCategoryTotals]
    .sort((a, b) => b[1] - a[1])
    .slice(0, 3);
  return (
    <div>
      <div className="flex items-center justify-between mb-3.5">
        <h2 className="text-[15px] font-semibold">Top Transactions</h2>
        <a href="#" className="text-[12.5px] font-medium text-[#0053E2]">
          Manage
        </a>
      </div>
      <div className="rounded-xl border border-[#E3E0D8] bg-white divide-y divide-[#EDEBE3]">
        {groupedCategoryTotals.length === 0 ? (
          <div className="flex flex-col items-center justify-center gap-2 py-6 text-center">
            <div className="flex h-9 w-9 items-center justify-center rounded bg-[#14171A]/10">
              <Inbox size={14} className="text-[#9C9885]" />
            </div>
            <span className="text-[12px] font-mono text-[#9C9885]">
              No transactions yet
            </span>
          </div>
        ) : (
          sortedCategoryEntries.map(([category, totals]) => (
            <BillRow
              key={category}
              name={category}
              amount={`$${totals.toFixed(2)}`}
            />
          ))
        )}
      </div>

      <div className="mt-4 rounded-xl border border-[#E3E0D8] bg-white p-4">
        <p className="text-[13px] font-medium mb-3">Payment methods</p>
        <div className="space-y-2.5">
          {groupedMethodTotals.length === 0 ? (
            <div className="flex flex-col items-center justify-center gap-2 py-6 text-center">
              <div className="flex h-9 w-9 items-center justify-center rounded bg-[#14171A]/10">
                <Inbox size={14} className="text-[#9C9885]" />
              </div>
              <span className="text-[12px] font-mono text-[#9C9885]">
                No transactions yet
              </span>
            </div>
          ) : (
            sortedMethodEntries.map(([paymentMethod, total]) => (
              <div className="flex items-center gap-2.5">
                <div className="flex h-7 w-9 items-center justify-center rounded bg-[#14171A]">
                  <CreditCard size={13} className="text-white" />
                </div>
                <span className="text-[12.5px] font-mono text-[#4A4740]">
                  {paymentMethod}
                </span>
                <span className="ml-auto text-[12px] font-mono text-[#9C9885]">
                  ${total.toFixed(2)}
                </span>
              </div>
            ))
          )}
        </div>
      </div>
    </div>
  );
};

export default UpcomingBills;
