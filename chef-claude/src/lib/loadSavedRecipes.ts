import type { SavedRecipe } from "../types";

export const STORAGE_KEY = "chef-claude:saved-recipes";

const loadSavedRecipes = (): SavedRecipe[] => {
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    return raw ? (JSON.parse(raw) as SavedRecipe[]) : [];
  } catch {
    return [];
  }
};

export default loadSavedRecipes;
