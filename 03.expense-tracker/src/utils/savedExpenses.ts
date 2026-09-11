import type { Expense } from "../types";

export const EXPENSES_KEY = "saved-expenses";

export const loadSavedExpenses = (): Expense[] => {
  try {
    const raw = localStorage.getItem(EXPENSES_KEY);
    return raw ? (JSON.parse(raw) as Expense[]) : [];
  } catch {
    return [];
  }
};

export const clearSavedExpenses = () => {
  try {
    localStorage.setItem(EXPENSES_KEY, JSON.stringify([]));
  } catch (error) {
    console.error("Error:", error);
  }
};
