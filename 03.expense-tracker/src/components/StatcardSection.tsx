import React from "react";
import StatCard from "./StatCard";
import { Receipt, PiggyBank, TrendingUp, Bell } from "lucide-react";

interface StatsProps {
  totals: () => number;
}

const StatcardSection = ({ totals }: StatsProps): React.JSX.Element => {
  const expensesTotals = Math.round(totals() * 100) / 100;
  return (
    <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
      <StatCard
        label="Total spent"
        value={expensesTotals.toString()}
        delta="+12.4%"
        deltaTone="down"
        caption="vs. last month"
        icon={<Receipt size={16} />}
      />
      <StatCard
        label="Top Category"
        value="1,056.33"
        delta="33%"
        deltaTone="neutral"
        caption="Dining"
        icon={<PiggyBank size={16} />}
      />
      <StatCard
        label="Daily average"
        value={(expensesTotals / 30).toString()}
        delta="-4.2%"
        deltaTone="up"
        caption="vs. last month"
        icon={<TrendingUp size={16} />}
      />
      <StatCard
        label="Upcoming bills"
        value="1,474.99"
        delta="3 due"
        deltaTone="neutral"
        caption="within 14 days"
        icon={<Bell size={16} />}
      />
    </div>
  );
};

export default StatcardSection;
