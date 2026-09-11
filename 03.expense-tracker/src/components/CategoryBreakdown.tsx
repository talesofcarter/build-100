import React from "react";
import CategoryTile from "./CategoryTile";
import { List } from "../utils/Categories";

interface CategorySectionProps {
  getTotalsByCategory: (category: string) => number;
}

const CategoryBreakdown = ({
  getTotalsByCategory,
}: CategorySectionProps): React.JSX.Element => {
  const totalsById = List.map((entry) => ({
    ...entry,
    spent: getTotalsByCategory(entry.id),
  }));

  const totals = totalsById.reduce((acc, expense) => acc + expense.spent, 0);

  return (
    <div className="lg:col-span-2">
      <div className="flex items-center justify-between mb-3.5">
        <h2 className="text-[15px] font-semibold">Spending by category</h2>
        <a href="#" className="text-[12.5px] font-medium text-[#0053E2]">
          View all
        </a>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
        {totalsById.map(({ id, label, icon: Icon, color, bg, spent }) => (
          <CategoryTile
            key={id}
            icon={<Icon size={17} />}
            name={label}
            spent={spent}
            share={totals > 0 ? (spent / totals) * 100 : 0}
            color={color}
            bg={bg}
          />
        ))}
      </div>
    </div>
  );
};

export default CategoryBreakdown;
