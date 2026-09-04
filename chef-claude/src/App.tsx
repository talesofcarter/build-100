import React, { useEffect, useState } from "react";
import Nav from "./components/Nav";
import InputSection from "./components/InputSection";
import IngredientsList from "./components/IngredientsList";
import RecipeDisplay from "./components/RecipeDisplay";
import Footer from "./components/Footer";
import { API_URL, MODEL_ID, SYSTEM_PROMPT } from "./lib/llm";
import type { Recipe, RecipeStatus } from "./types";

const HF_TOKEN = import.meta.env.VITE_HF_TOKEN as string | undefined;

function App(): React.JSX.Element {
  const [ingredients, setIngredients] = useState<string[]>([]);
  const [ingredientInput, setIngredientInput] = useState<string>("");
  const [recipe, setRecipe] = useState<Recipe | null>(null);
  const [status, setStatus] = useState<RecipeStatus>("idle");
  const [errorMessage, setErrorMessage] = useState("");

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>): void => {
    e.preventDefault();

    try {
      if (!ingredientInput) {
        return;
      }

      setIngredients((prev) => [...prev, ingredientInput]);
      setIngredientInput("");
    } catch (error) {
      console.error("Error:", error);
    }
  };

  const removeIngredient = (ingredientToRemove: string): void => {
    setIngredients((prev) =>
      prev.filter((ingred) => ingred !== ingredientToRemove),
    );
  };

  const handleGetRecipe = async () => {
    setStatus("loading");
    setErrorMessage("");

    try {
      if (!HF_TOKEN) {
        throw new Error(
          "Missing Hugging Face API token. Please set the VITE_HF_TOKEN environment variable.",
        );
      }

      const response = await fetch(API_URL, {
        method: "POST",
        headers: {
          Authorization: `Bearer ${HF_TOKEN}`,
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          model: MODEL_ID,
          messages: [
            { role: "system", content: SYSTEM_PROMPT },
            {
              role: "user",
              content: `Ingredients: ${ingredients.join(", ")}`,
            },
          ],
          temperature: 0.7,
        }),
      });

      if (!response.ok) {
        throw new Error(`Request failed (${response.status})`);
      }

      const data = await response.json();

      const raw: string = data?.choices?.[0]?.message?.content ?? "";

      const cleaned = raw.replace(/```json|```/g, "").trim();
      const parsed = JSON.parse(cleaned);

      const nextRecipe: Recipe = {
        title: parsed.title,
        tagline: parsed.tagline,
        time: parsed.time,
        servings: parsed.servings,
        ingredients: parsed.ingredients ?? [],
        steps: parsed.steps ?? [],
      };

      setRecipe(nextRecipe);
      setStatus("idle");
    } catch (error) {
      setStatus("error");
      setErrorMessage(
        error instanceof Error ? error.message : "An unknown error occurred.",
      );
    }
  };

  useEffect(() => {
    console.log(recipe);
  }, [ingredients]);

  return (
    <main>
      <Nav />
      <main className="mx-auto max-w-3xl px-6">
        <InputSection
          ingredientInput={ingredientInput}
          setIngredientInput={setIngredientInput}
          handleSubmit={handleSubmit}
        />
        <IngredientsList
          ingredients={ingredients}
          removeIngredient={removeIngredient}
          getRecipe={handleGetRecipe}
          status={status}
        />
        <RecipeDisplay
          recipe={recipe}
          getRecipe={handleGetRecipe}
          status={status}
          errorMessage={errorMessage}
        />
      </main>
      <Footer />
    </main>
  );
}

export default App;
