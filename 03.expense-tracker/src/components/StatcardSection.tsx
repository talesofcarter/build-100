import React from "react";
import StatCard from "./StatCard";
import { Receipt, PiggyBank, TrendingUp, Bell } from "lucide-react";
import type { Expense } from "../types";

interface StatsProps {
  totals: () => number;
  expenses: Expense[];
  topCategory: (expenses: Expense[]) => string;
}

const StatcardSection = ({
  totals,
  expenses,
  topCategory,
}: StatsProps): React.JSX.Element => {
  const expensesTotals = Math.round(totals() * 100) / 100;
  const topCategoryLabel = topCategory(expenses);
  console.log(topCategoryLabel);

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
        caption={topCategoryLabel}
        icon={<PiggyBank size={16} />}
      />
      <StatCard
        label="Daily average"
        value={(Math.round((expensesTotals / 30) * 100) / 100).toString()}
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
