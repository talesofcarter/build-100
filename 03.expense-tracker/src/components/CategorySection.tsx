import React from "react";
import CategoryBreakdown from "./CategoryBreakdown";
import UpcomingBills from "./UpcomingBills";

interface CategorySectionProps {
  getTotalsByCategory: (category: string) => number;
}

const CategorySection = ({
  getTotalsByCategory,
}: CategorySectionProps): React.JSX.Element => {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
      <CategoryBreakdown getTotalsByCategory={getTotalsByCategory} />
      <UpcomingBills />
    </div>
  );
};

export default CategorySection;
