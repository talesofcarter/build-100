import React from "react";
import { MoreHorizontal } from "lucide-react";

interface TxRowProps {
  date: string;
  merchant: string;
  category: string;
  catColor: string;
  payment: string;
  amount: string;
  last?: boolean;
}

const TxRow = ({
  date,
  merchant,
  category,
  catColor,
  payment,
  amount,
}: TxRowProps): React.JSX.Element => {
  return (
    <tr className="hover:bg-[#FAF9F5] transition-colors">
      <td className="px-5 py-3 text-[12.5px] font-mono text-[#8A8778] whitespace-nowrap">
        {date}
      </td>
      <td className="px-5 py-3 text-[13px] font-medium">{merchant}</td>
      <td className="px-5 py-3">
        <span
          className="inline-flex items-center gap-1.5 text-[12px] font-medium"
          style={{ color: catColor }}
        >
          <span
            className="h-1.5 w-1.5 rounded-full"
            style={{ backgroundColor: catColor }}
          />
          {category}
        </span>
      </td>
      <td className="px-5 py-3 text-[12.5px] font-mono text-[#8A8778] whitespace-nowrap">
        {payment}
      </td>
      <td className="px-5 py-3 text-[13.5px] font-mono font-semibold text-right whitespace-nowrap">
        ${amount}
      </td>
      <td className="px-5 py-3 text-right">
        <button className="text-[#B8B5A8] hover:text-[#4A4740]">
          <MoreHorizontal size={15} />
        </button>
      </td>
    </tr>
  );
};

export default TxRow;
