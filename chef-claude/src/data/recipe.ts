interface MockRecipeType {
  title: string;
  tagline: string;
  time: string;
  servings: string;
  ingredients: string[];
  steps: string[];
}

export const mockIngredients: string[] = [
  "Chicken breast",
  "Garlic cloves",
  "Fresh basil",
  "Cherry tomatoes",
  "Olive oil",
  "Parmesan",
];

export const mockRecipe: MockRecipeType = {
  title: "Garlic Basil Chicken with Blistered Tomatoes",
  tagline:
    "A weeknight skillet dinner where the garlic does most of the talking and the basil gets the last word.",
  time: "35 min",
  servings: "2 servings",
  ingredients: [
    "2 chicken breasts, sliced thin",
    "4 garlic cloves, minced",
    "1 cup cherry tomatoes, halved",
    "2 tbsp olive oil",
    "A handful of fresh basil, torn",
    "1/4 cup shaved parmesan",
  ],
  steps: [
    "Season the chicken generously with salt and pepper, then sear in olive oil over medium-high heat until golden, about 4 minutes per side. Set aside.",
    "In the same pan, add the garlic and cook until fragrant, about 30 seconds — don't let it brown.",
    "Add the cherry tomatoes and cook until they blister and release their juices, roughly 5 minutes.",
    "Return the chicken to the pan, spoon the tomatoes over the top, and simmer together for 2 minutes.",
    "Finish with torn basil and shaved parmesan. Serve straight from the skillet.",
  ],
};
