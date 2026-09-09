import React from "react";
import CategoryTile from "./CategoryTile";
import {
  ShoppingCart,
  Fuel,
  UtensilsCrossed,
  Tv,
  Zap,
  ShoppingBag,
  Film,
  HeartPulse,
} from "lucide-react";

interface CategorySectionProps {
  getTotalsByCategory: (category: string) => number;
}

const CategoryBreakdown = ({
  getTotalsByCategory,
}: CategorySectionProps): React.JSX.Element => {
  return (
    <div className="lg:col-span-2">
      <div className="flex items-center justify-between mb-3.5">
        <h2 className="text-[15px] font-semibold">Spending by category</h2>
        <a href="#" className="text-[12.5px] font-medium text-[#0053E2]">
          View all
        </a>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
        <CategoryTile
          icon={<ShoppingCart size={17} />}
          name="Groceries"
          spent={getTotalsByCategory("Groceries")}
          budget={600}
          color="#0053E2"
          bg="#E8EFFD"
        />
        <CategoryTile
          icon={<Fuel size={17} />}
          name="Gas & Fuel"
          spent={getTotalsByCategory("Gas")}
          budget={220}
          color="#B4560A"
          bg="#FDF0E4"
        />
        <CategoryTile
          icon={<UtensilsCrossed size={17} />}
          name="Dining Out"
          spent={getTotalsByCategory("Dining")}
          budget={350}
          color="#E01A2B"
          bg="#FDE9EA"
          over
        />
        <CategoryTile
          icon={<Tv size={17} />}
          name="Subscriptions"
          spent={getTotalsByCategory("Subs")}
          budget={120}
          color="#6D3FC0"
          bg="#F0EAFB"
        />
        <CategoryTile
          icon={<Zap size={17} />}
          name="Utilities"
          spent={getTotalsByCategory("Utilities")}
          budget={280}
          color="#B58900"
          bg="#FBF3D9"
        />
        <CategoryTile
          icon={<ShoppingBag size={17} />}
          name="Shopping"
          spent={getTotalsByCategory("Shopping")}
          budget={400}
          color="#0F7B6C"
          bg="#E3F4F0"
        />
        <CategoryTile
          icon={<Film size={17} />}
          name="Entertainment"
          spent={getTotalsByCategory("Fun")}
          budget={150}
          color="#C23B7A"
          bg="#FBE7F0"
        />
        <CategoryTile
          icon={<HeartPulse size={17} />}
          name="Healthcare"
          spent={getTotalsByCategory("Health")}
          budget={200}
          color="#2B7A4B"
          bg="#E6F3EA"
        />
      </div>
    </div>
  );
};

export default CategoryBreakdown;
