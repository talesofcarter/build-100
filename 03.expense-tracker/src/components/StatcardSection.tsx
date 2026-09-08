import React from "react";
import StatCard from "./StatCard";
import { Receipt, PiggyBank, TrendingUp, Bell } from "lucide-react";

const StatcardSection = (): React.JSX.Element => {
  return (
    <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
      <StatCard
        label="Total spent"
        value="$2,143.67"
        delta="+12.4%"
        deltaTone="down"
        caption="vs. last month"
        icon={<Receipt size={16} />}
      />
      <StatCard
        label="Budget remaining"
        value="$1,056.33"
        delta="33%"
        deltaTone="neutral"
        caption="of monthly budget"
        icon={<PiggyBank size={16} />}
      />
      <StatCard
        label="Daily average"
        value="$71.46"
        delta="-4.2%"
        deltaTone="up"
        caption="vs. last month"
        icon={<TrendingUp size={16} />}
      />
      <StatCard
        label="Upcoming bills"
        value="$1,474.99"
        delta="3 due"
        deltaTone="neutral"
        caption="within 14 days"
        icon={<Bell size={16} />}
      />
    </div>
  );
};

export default StatcardSection;
