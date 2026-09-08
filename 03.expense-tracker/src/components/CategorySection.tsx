import React from "react";

import CategoryBreakdown from "./CategoryBreakdown";
import UpcomingBills from "./UpcomingBills";

const CategorySection = (): React.JSX.Element => {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
      <CategoryBreakdown />
      <UpcomingBills />
    </div>
  );
};

export default CategorySection;
