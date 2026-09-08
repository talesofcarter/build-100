import React from "react";

interface BillRowProps {
  name: string;
  date: string;
  amount: string;
  tag: string;
}

const BillRow = ({
  name,
  date,
  amount,
  tag,
}: BillRowProps): React.JSX.Element => {
  return (
    <div className="flex items-center gap-3 px-4 py-3">
      <div className="flex-1 min-w-0">
        <p className="text-[13px] font-medium truncate">{name}</p>
        <p className="text-[11.5px] text-[#9C9885]">
          {tag} &middot; due {date}
        </p>
      </div>
      <span className="text-[13px] font-mono font-semibold">{amount}</span>
    </div>
  );
};

export default BillRow;
