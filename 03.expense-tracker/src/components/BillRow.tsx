import React from "react";

interface BillRowProps {
  name: string;
  amount: string;
}

const BillRow = ({
  name,

  amount,
}: BillRowProps): React.JSX.Element => {
  return (
    <div className="flex items-center gap-3 px-4 py-3">
      <div className="flex-1 min-w-0">
        <p className="text-[13px] font-medium truncate">{name}</p>
      </div>
      <span className="text-[13px] font-mono font-semibold">{amount}</span>
    </div>
  );
};

export default BillRow;
