import type { Expense } from "../types";

export const KEY = "saved-expenses";

export const loadSavedExpenses = (): Expense[] => {
  try {
    const raw = localStorage.getItem(KEY);
    return raw ? (JSON.parse(raw) as Expense[]) : [];
  } catch {
    return [];
  }
};
