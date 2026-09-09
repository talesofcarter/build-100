import React from "react";
import TxRow from "./TxRow";
import type { Expense } from "../types";

interface RecentTransactionsProps {
  expenses: Expense[];
  totals: () => number;
}

const labels = [
  { label: "Date" },
  { label: "Merchant" },
  { label: "Category" },
  { label: "Payment" },
  { label: "Amount" },
];

const RecentTransactions = ({
  expenses,
  totals,
}: RecentTransactionsProps): React.JSX.Element => {
  const expenseTotals = Math.round(totals() * 100) / 100;
  return (
    <div>
      <div className="flex items-center justify-between mb-3.5">
        <h2 className="text-[15px] font-semibold">Recent transactions</h2>
        <a href="#" className="text-[12.5px] font-medium text-[#0053E2]">
          View all
        </a>
      </div>

      <div className="rounded-xl border border-[#E3E0D8] bg-white overflow-hidden">
        <table className="w-full text-left border-collapse">
          <thead>
            <tr className="border-b border-[#E3E0D8] bg-[#F4F2EC]">
              {labels.map(({ label }) => {
                return (
                  <th
                    key={label}
                    className="px-5 py-2.5 text-[11.5px] font-medium text-[#8A8778]"
                  >
                    {label}
                  </th>
                );
              })}

              <th className="w-10"></th>
            </tr>
          </thead>
          <tbody className="divide-y divide-[#EDEBE3]">
            {expenses.map((expense) => {
              const parsed = new Date(expense.date).toLocaleDateString(
                "en-US",
                {
                  month: "short",
                  day: "numeric",
                },
              );

              let categoryColor: string = "";
              if (expense.category === "Groceries") {
                categoryColor = "#0053E2";
              } else if (expense.category === "Gas") {
                categoryColor = "#B4560A";
              } else if (expense.category === "Dining") {
                categoryColor = "#E01A2B";
              } else if (expense.category === "Subs") {
                categoryColor = "#6D3FC0";
              } else if (expense.category === "Utilities") {
                categoryColor = "#B58900";
              } else if (expense.category === "Shopping") {
                categoryColor = "#0F7B6C";
              } else if (expense.category === "Fun") {
                categoryColor = "#C23B7A";
              } else if (expense.category === "Health") {
                categoryColor = "#2B7A4B";
              }

              return (
                <TxRow
                  key={expense.id}
                  date={parsed}
                  merchant={expense.merchant}
                  category={expense.category}
                  catColor={categoryColor}
                  payment={expense.paymentMethod}
                  amount={expense.amount}
                />
              );
            })}
          </tbody>
        </table>

        <div className="flex items-center justify-between border-t border-dashed border-[#D8D5CE] px-5 py-3 bg-[#FBFAF7]">
          <span className="text-[11.5px] font-mono text-[#9C9885]">
            {expenses.length} transactions shown
          </span>
          <span className="text-[12.5px] font-mono font-semibold">
            Subtotal &nbsp; ${expenseTotals}
          </span>
        </div>
      </div>
    </div>
  );
};

export default RecentTransactions;
