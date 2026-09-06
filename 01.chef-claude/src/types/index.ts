export interface Recipe {
  title: string;
  tagline: string;
  time: string;
  servings: string;
  ingredients: string[];
  steps: string[];
}

export type RecipeStatus = "idle" | "loading" | "error";

export interface SavedRecipe extends Recipe {
  id: string;
  savedAt: number;
}
