import React from "react";
import { X, Sparkles, CookingPot, Loader2 } from "lucide-react";

interface IngredientsListProps {
  ingredients: string[];
  removeIngredient: (ingredientToRemove: string) => void;
  getRecipe: () => void;
  status: "idle" | "loading" | "error";
}

const IngredientsList = ({
  ingredients,
  removeIngredient,
  getRecipe,
  status,
}: IngredientsListProps): React.JSX.Element => {
  const ingredientCount = ingredients.length;
  return (
    <section className="pb-10">
      <div className="rounded-xl border border-[#E4DFD3] bg-white/60 p-6">
        <div className="mb-4 flex items-center justify-between">
          <h2 className="text-sm font-semibold text-[#5B554C]">
            Your ingredients
          </h2>
          {ingredientCount > 0 && (
            <span className="text-sm text-[#A69E8F]">
              {ingredientCount} added
            </span>
          )}
        </div>

        {ingredientCount === 0 ? (
          <div className="flex flex-col items-center gap-3 py-8 text-center">
            <span className="flex h-11 w-11 items-center justify-center rounded-full bg-[#F5EFE3]">
              <CookingPot className="h-5 w-5 text-[#B98A1F]" strokeWidth={2} />
            </span>
            <div>
              <p className="text-[15px] font-medium text-[#3A342C]">
                The pot's empty for now
              </p>
              <p className="mx-auto mt-1 max-w-[26ch] text-sm leading-relaxed text-[#A69E8F]">
                Add an ingredient above to start building your recipe.
              </p>
            </div>
          </div>
        ) : (
          <ul className="space-y-2.5">
            {ingredients.map((ingredient, index) => (
              <li
                key={`${ingredient}-${index}`}
                className="flex items-center justify-between border-b border-[#F0ECE2] pb-2.5 last:border-b-0 last:pb-0"
              >
                <span className="flex items-center gap-3 text-[15px]">
                  <span className="h-1.5 w-1.5 shrink-0 rounded-full bg-[#D93A2B]" />
                  {ingredient}
                </span>
                <button
                  type="button"
                  onClick={() => removeIngredient(ingredient)}
                  aria-label={`Remove ${ingredient}`}
                >
                  <X
                    className="h-4 w-4 shrink-0 text-[#C9C2B5] transition-colors hover:text-[#D93A2B]"
                    strokeWidth={2}
                  />
                </button>
              </li>
            ))}
          </ul>
        )}
      </div>

      {/* Conditional: only renders once ingredientCount >= 5 */}
      {ingredientCount >= 5 && (
        <button
          type="button"
          onClick={getRecipe}
          disabled={status === "loading"}
          className="mt-5 flex w-full items-center justify-center gap-2 rounded-lg bg-[#201C18] px-5 py-3.5 text-[15px] font-semibold text-[#FAF6EF] transition-colors hover:bg-[#33291F] disabled:cursor-not-allowed disabled:opacity-60"
        >
          {status === "loading" ? (
            <>
              <Loader2
                className="h-4 w-4 animate-spin text-[#E8A93B]"
                strokeWidth={2.25}
              />
              Cooking up your recipe…
            </>
          ) : (
            <>
              <Sparkles className="h-4 w-4 text-[#E8A93B]" strokeWidth={2.25} />
              Get Recipe
            </>
          )}
        </button>
      )}
    </section>
  );
};

export default IngredientsList;
