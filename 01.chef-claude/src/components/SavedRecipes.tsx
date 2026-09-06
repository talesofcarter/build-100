import React from "react";
import { Bookmark, Soup, Clock, Users, Trash2 } from "lucide-react";
import type { SavedRecipe } from "../types";

interface SavedRecipesProps {
  savedRecipes: SavedRecipe[];
  handleSelectSavedRecipe: (saved: SavedRecipe) => void;
  handleDeleteSavedRecipe: (id: string) => void;
}

const SavedRecipes = ({
  savedRecipes,
  handleSelectSavedRecipe,
  handleDeleteSavedRecipe,
}: SavedRecipesProps): React.JSX.Element => {
  return (
    <section className="pb-16">
      <div className="mb-4 flex items-center gap-2">
        <Bookmark className="h-4 w-4 text-[#B98A1F]" strokeWidth={2.25} />
        <h2 className="text-sm font-semibold text-[#5B554C]">Saved recipes</h2>
        <span className="text-sm text-[#A69E8F]">{savedRecipes.length}</span>
      </div>

      <ul className="space-y-2.5">
        {savedRecipes.map((saved) => (
          <li key={saved.id}>
            <div className="flex items-center gap-3 rounded-xl border border-[#E4DFD3] bg-white/60 p-4 transition-colors hover:border-[#E8A93B]">
              <button
                type="button"
                onClick={() => handleSelectSavedRecipe(saved)}
                className="flex min-w-0 flex-1 items-center gap-3 text-left"
              >
                <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-[#F5EFE3]">
                  <Soup className="h-4 w-4 text-[#B98A1F]" strokeWidth={2} />
                </span>
                <span className="min-w-0">
                  <span className="block truncate text-[15px] font-medium text-[#3A342C]">
                    {saved.title}
                  </span>
                  <span className="flex items-center gap-3 text-xs text-[#A69E8F]">
                    <span className="flex items-center gap-1">
                      <Clock className="h-3 w-3" strokeWidth={2} />
                      {saved.time}
                    </span>
                    <span className="flex items-center gap-1">
                      <Users className="h-3 w-3" strokeWidth={2} />
                      {saved.servings}
                    </span>
                  </span>
                </span>
              </button>
              <button
                type="button"
                onClick={() => handleDeleteSavedRecipe(saved.id)}
                aria-label={`Delete ${saved.title}`}
                className="shrink-0 rounded-md p-1.5 text-[#C9C2B5] transition-colors hover:bg-[#FBF1EF] hover:text-[#D93A2B]"
              >
                <Trash2 className="h-4 w-4" strokeWidth={2} />
              </button>
            </div>
          </li>
        ))}
      </ul>
    </section>
  );
};

export default SavedRecipes;
