import React from "react";
import CategoryBreakdown from "./CategoryBreakdown";
import UpcomingBills from "./UpcomingBills";

interface CategorySectionProps {
  getTotalsByCategory: (category: string) => number;
  groupByMethod: Record<string, number>;
  groupByCategory: Record<string, number>;
}

const CategorySection = ({
  getTotalsByCategory,
  groupByMethod,
  groupByCategory,
}: CategorySectionProps): React.JSX.Element => {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
      <CategoryBreakdown getTotalsByCategory={getTotalsByCategory} />
      <UpcomingBills
        groupByMethod={groupByMethod}
        groupByCategory={groupByCategory}
      />
    </div>
  );
};

export default CategorySection;
