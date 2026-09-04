import React from "react";
import { Plus } from "lucide-react";

interface InputSectionProps {
  ingredientInput: string;
  setIngredientInput: React.Dispatch<React.SetStateAction<string>>;
  handleSubmit: (e: React.FormEvent<HTMLFormElement>) => void;
}

const InputSection = ({
  ingredientInput,
  setIngredientInput,
  handleSubmit,
}: InputSectionProps): React.JSX.Element => {
  return (
    <section className="pt-14 pb-10">
      <h1 className="text-4xl font-extrabold leading-[1.1] tracking-tight sm:text-5xl">
        What's in your kitchen?
      </h1>
      <p className="mt-3 max-w-md text-[15px] leading-relaxed text-[#5B554C]">
        Add what you've got on hand. Chef Claude will turn it into something
        worth setting the table for.
      </p>

      <form onSubmit={handleSubmit} className="mt-7 flex gap-2.5">
        <input
          type="text"
          value={ingredientInput}
          onChange={(e) => setIngredientInput(e.target.value)}
          placeholder="e.g. cherry tomatoes"
          className="w-full rounded-lg border border-[#E4DFD3] bg-white px-4 py-3 text-[15px] placeholder:text-[#A69E8F] focus:border-[#D93A2B] focus:outline-none focus:ring-1 focus:ring-[#D93A2B]"
          required
        />
        <button
          type="submit"
          className="flex shrink-0 items-center gap-1.5 rounded-lg bg-[#D93A2B] px-5 py-3 text-[15px] font-semibold text-[#FAF6EF] transition-colors hover:bg-[#C22F21]"
        >
          <Plus className="h-4 w-4" strokeWidth={2.5} />
          Add Ingredient
        </button>
      </form>
    </section>
  );
};

export default InputSection;
