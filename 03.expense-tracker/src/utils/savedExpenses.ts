import type { FormDataType } from "../types";

export const KEY = "saved-expenses";

export const loadSavedExpenses = (): FormDataType[] => {
  try {
    const raw = localStorage.getItem(KEY);
    return raw ? (JSON.parse(raw) as FormDataType[]) : [];
  } catch {
    return [];
  }
};
