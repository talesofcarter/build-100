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

export const List = [
  {
    id: "Groceries",
    shortLabel: "Groceries",
    label: "Groceries",
    icon: ShoppingCart,
    color: "#0053E2",
    bg: "#E8EFFD",
  },
  {
    id: "Gas",
    shortLabel: "Gas",
    label: "Gas & Fuel",
    icon: Fuel,
    color: "#B4560A",
    bg: "#FDF0E4",
  },
  {
    id: "Dining",
    shortLabel: "Dining",
    label: "Dining Out",
    icon: UtensilsCrossed,
    color: "#E01A2B",
    bg: "#FDE9EA",
  },
  {
    id: "Subs",
    shortLabel: "Subs",
    label: "Subscriptions",
    icon: Tv,
    color: "#6D3FC0",
    bg: "#F0EAFB",
  },
  {
    id: "Utilities",
    shortLabel: "Utilities",
    label: "Utilities",
    icon: Zap,
    color: "#B58900",
    bg: "#FBF3D9",
  },
  {
    id: "Shopping",
    shortLabel: "Shopping",
    label: "Shopping",
    icon: ShoppingBag,
    color: "#0F7B6C",
    bg: "#E3F4F0",
  },
  {
    id: "Fun",
    shortLabel: "Fun",
    label: "Entertainment",
    icon: Film,
    color: "#C23B7A",
    bg: "#FBE7F0",
  },
  {
    id: "Health",
    shortLabel: "Health",
    label: "Healthcare",
    icon: HeartPulse,
    color: "#2B7A4B",
    bg: "#E6F3EA",
  },
];

export const getCategory = (id: string) =>
  List.find((c) => c.id === id) ?? null;
