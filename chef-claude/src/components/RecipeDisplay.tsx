import React from "react";
import { Clock, Soup, Users } from "lucide-react";
import { TriangleAlert } from "lucide-react";
import type { Recipe } from "../types";

interface RecipeDisplayProps {
  recipe: Recipe | null;
  getRecipe: () => void;
  status: "idle" | "loading" | "error";
  errorMessage: string;
  recipeSectionRef: React.RefObject<HTMLElement | null>;
}

const RecipeDisplay = ({
  recipe,
  getRecipe,
  status,
  errorMessage,
  recipeSectionRef,
}: RecipeDisplayProps): React.JSX.Element => {
  return (
    <section ref={recipeSectionRef} className="scroll-mt-6 pb-16">
      {status === "error" ? (
        <div className="flex flex-col items-center gap-3 rounded-xl border border-[#F0D9D4] bg-[#FBF1EF] px-6 py-10 text-center">
          <TriangleAlert className="h-5 w-5 text-[#D93A2B]" strokeWidth={2} />
          <div>
            <p className="text-[15px] font-medium text-[#3A342C]">
              The recipe didn't come together
            </p>
            <p className="mx-auto mt-1 max-w-[38ch] text-sm leading-relaxed text-[#8A6A64]">
              {errorMessage}
            </p>
          </div>
          <button
            type="button"
            onClick={getRecipe}
            className="mt-1 text-sm font-semibold text-[#D93A2B] hover:underline"
          >
            Try again
          </button>
        </div>
      ) : recipe ? (
        <div className="overflow-hidden rounded-xl border border-[#E4DFD3] bg-white">
          <div className="border-l-4 border-[#E8A93B] p-7">
            <div className="mb-1 flex items-center gap-2 text-xs font-medium text-[#B98A1F]">
              <Soup className="h-3.5 w-3.5" strokeWidth={2.25} />
              Your recipe
            </div>
            <h3 className="text-2xl font-extrabold leading-tight tracking-tight">
              {recipe.title}
            </h3>
            <p className="mt-2 text-[15px] leading-relaxed text-[#5B554C]">
              {recipe.tagline}
            </p>

            <div className="mt-4 flex gap-5 text-sm text-[#5B554C]">
              <span className="flex items-center gap-1.5">
                <Clock className="h-4 w-4" strokeWidth={2} />
                {recipe.time}
              </span>
              <span className="flex items-center gap-1.5">
                <Users className="h-4 w-4" strokeWidth={2} />
                {recipe.servings}
              </span>
            </div>
          </div>

          <div className="grid gap-8 border-t border-[#F0ECE2] p-7 sm:grid-cols-[minmax(0,180px)_1fr]">
            <div>
              <h4 className="mb-3 text-sm font-semibold text-[#5B554C]">
                Ingredients
              </h4>
              <ul className="space-y-2 text-[14px] text-[#3A342C]">
                {recipe.ingredients.map((item, i) => (
                  <li key={`${item}-${i}`} className="flex items-start gap-2.5">
                    <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-[#D93A2B]" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h4 className="mb-3 text-sm font-semibold text-[#5B554C]">
                Method
              </h4>
              <ol className="space-y-4">
                {recipe.steps.map((step, i) => (
                  <li
                    key={i}
                    className="flex gap-3.5 text-[14px] leading-relaxed text-[#3A342C]"
                  >
                    <span className="flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-[#201C18] text-[11px] font-semibold text-[#FAF6EF]">
                      {i + 1}
                    </span>
                    {step}
                  </li>
                ))}
              </ol>
            </div>
          </div>
        </div>
      ) : (
        <div className="flex flex-col items-center gap-3 rounded-xl border border-dashed border-[#E4DFD3] px-6 py-12 text-center">
          <Soup className="h-5 w-5 text-[#C9C2B5]" strokeWidth={2} />
          <div>
            <p className="text-[15px] font-medium text-[#3A342C]">
              Nothing cooking yet
            </p>
            <p className="mx-auto mt-1 max-w-[34ch] text-sm leading-relaxed text-[#A69E8F]">
              Add at least 5 ingredients and hit "Get Recipe" to see what Chef
              Claude comes up with.
            </p>
          </div>
        </div>
      )}
    </section>
  );
};

export default RecipeDisplay;
