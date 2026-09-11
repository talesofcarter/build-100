import React from "react";
import StatCard from "./StatCard";
import { Receipt, PiggyBank, TrendingUp, ListChecks } from "lucide-react";
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
  const total = Math.round(totals() * 100) / 100;
  const topCategoryLabel = topCategory(expenses);
  const topCategoryTotal = expenses
    .filter((e) => e.category === topCategoryLabel)
    .reduce((acc, e) => acc + Number(e.amount), 0);

  const today = new Date();
  const dailyAverage =
    expenses.length > 0 ? Math.round((total / today.getDate()) * 100) / 100 : 0;

  return (
    <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
      <StatCard
        label="Total spent"
        value={total.toFixed(2)}
        caption="this month"
        icon={<Receipt size={16} />}
        prefix={"$"}
      />
      <StatCard
        label="Top category"
        value={topCategoryTotal.toFixed(2)}
        caption={topCategoryLabel || "No spending yet"}
        icon={<PiggyBank size={16} />}
        prefix={"$"}
      />
      <StatCard
        label="Daily average"
        value={dailyAverage.toFixed(2)}
        caption="per day this month"
        icon={<TrendingUp size={16} />}
        prefix="$"
      />
      <StatCard
        label="Transactions"
        value={expenses.length.toString()}
        prefix=""
        caption="logged this month"
        icon={<ListChecks size={16} />}
      />
    </div>
  );
};

export default StatcardSection;
