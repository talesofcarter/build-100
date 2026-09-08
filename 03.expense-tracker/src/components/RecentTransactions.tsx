import React from "react";
import TxRow from "./TxRow";

const RecentTransactions = (): React.JSX.Element => {
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
              <th className="px-5 py-2.5 text-[11.5px] font-medium text-[#8A8778]">
                Date
              </th>
              <th className="px-5 py-2.5 text-[11.5px] font-medium text-[#8A8778]">
                Merchant
              </th>
              <th className="px-5 py-2.5 text-[11.5px] font-medium text-[#8A8778]">
                Category
              </th>
              <th className="px-5 py-2.5 text-[11.5px] font-medium text-[#8A8778]">
                Payment
              </th>
              <th className="px-5 py-2.5 text-[11.5px] font-medium text-[#8A8778] text-right">
                Amount
              </th>
              <th className="w-10"></th>
            </tr>
          </thead>
          <tbody className="divide-y divide-[#EDEBE3]">
            <TxRow
              date="Sep 8"
              merchant="Trader Joe's"
              category="Groceries"
              catColor="#0053E2"
              payment="Debit •4521"
              amount="64.23"
            />
            <TxRow
              date="Sep 7"
              merchant="Shell Gas Station"
              category="Gas & Fuel"
              catColor="#B4560A"
              payment="Credit •8890"
              amount="42.10"
            />
            <TxRow
              date="Sep 7"
              merchant="Netflix"
              category="Subscriptions"
              catColor="#6D3FC0"
              payment="Credit •8890"
              amount="15.49"
            />
            <TxRow
              date="Sep 6"
              merchant="Chipotle Mexican Grill"
              category="Dining Out"
              catColor="#E01A2B"
              payment="Debit •4521"
              amount="13.87"
            />
            <TxRow
              date="Sep 5"
              merchant="Costco Wholesale"
              category="Groceries"
              catColor="#0053E2"
              payment="Debit •4521"
              amount="187.34"
            />
            <TxRow
              date="Sep 4"
              merchant="Amazon"
              category="Shopping"
              catColor="#0F7B6C"
              payment="Credit •8890"
              amount="56.20"
            />
            <TxRow
              date="Sep 3"
              merchant="PG&E Electric"
              category="Utilities"
              catColor="#B58900"
              payment="Autopay"
              amount="118.60"
            />
            <TxRow
              date="Sep 2"
              merchant="AMC Theatres"
              category="Entertainment"
              catColor="#C23B7A"
              payment="Credit •8890"
              amount="32.00"
            />
            <TxRow
              date="Sep 1"
              merchant="Spotify"
              category="Subscriptions"
              catColor="#6D3FC0"
              payment="Credit •8890"
              amount="11.99"
              last
            />
          </tbody>
        </table>

        <div className="flex items-center justify-between border-t border-dashed border-[#D8D5CE] px-5 py-3 bg-[#FBFAF7]">
          <span className="text-[11.5px] font-mono text-[#9C9885]">
            9 transactions shown
          </span>
          <span className="text-[12.5px] font-mono font-semibold">
            Subtotal &nbsp; $541.82
          </span>
        </div>
      </div>
    </div>
  );
};

export default RecentTransactions;
