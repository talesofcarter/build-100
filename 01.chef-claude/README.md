# Chef Claude - Inspired by Scrimba's Captone Project

Chef Claude is an AI recipe generator. You tell it what's in your kitchen, and it turns that list into a full recipe — title, tagline, timing, servings, ingredients, and method — using an LLM behind the scenes.

## How it works

1. **Add ingredients.** Type an ingredient into the input and either press **Enter** or click **Add Ingredient**. Each one is added to a running list, and you can remove any of them with the `×` next to it.
2. **Get Recipe appears at 5.** Once you've added at least 5 ingredients, a **Get Recipe** button appears below the list. This is a simple conditional render (`ingredients.length >= 5`) — nothing shows up before that threshold.
3. **The ingredient list is sent to an LLM.** Clicking **Get Recipe** sends your full ingredient list to a Hugging Face-hosted model via a single `fetch` call — no backend involved. The button shows a loading state ("Cooking up your recipe…") while the request is in flight.
4. **The response is parsed into a recipe.** The model is instructed (via a system prompt) to reply with strict JSON matching the app's `Recipe` shape: `title`, `tagline`, `time`, `servings`, `ingredients[]`, and `steps[]`. The response is cleaned of any stray markdown fences and parsed with `JSON.parse`.
5. **The page scrolls to the result.** As soon as a recipe successfully loads, the page smooth-scrolls down to the recipe card so you don't have to go looking for it.
6. **The recipe is saved automatically.** Every successful recipe is written to `localStorage` and appears in a **Saved recipes** section further down the page. Click any saved recipe to load it back into the main recipe card (with the same scroll-into-view behavior), or delete it with the trash icon.
7. **Errors are handled gracefully.** If the request fails or the response can't be parsed, an error card appears in place of the recipe with a **Try again** button — your ingredient list and any previously saved recipes are untouched.

## Tech stack

- **React + TypeScript** — component and state logic
- **Tailwind CSS** — styling
- **Lucide React** — icons
- **Hugging Face Router API** — LLM inference (`openai/gpt-oss-120b:together` via `https://router.huggingface.co/v1/chat/completions`)
- **`localStorage`** — persisting generated recipes across sessions, no database needed

## Setup

1. Install dependencies as usual for your React + Vite + TypeScript + Tailwind project.
2. Create a `.env` file at the project root with your Hugging Face token:
   ```
   VITE_HF_TOKEN=hf_your_token_here
   ```
   > This is a purely frontend integration — the token ships inside the client bundle. That's fine for personal or demo use, but for anything public-facing, proxy the request through a small server/serverless function that holds the token instead.
3. Run the dev server and open the app. Everything else — adding ingredients, calling the model, saving recipes — works entirely client-side.

## Data model

```ts
interface Recipe {
  title: string;
  tagline: string;
  time: string;
  servings: string;
  ingredients: string[];
  steps: string[];
}

interface SavedRecipe extends Recipe {
  id: string;       // generated with crypto.randomUUID()
  savedAt: number;  // Date.now() timestamp
}
```

Saved recipes live under the `chef-claude:saved-recipes` key in `localStorage`, as a JSON array of `SavedRecipe`.

## Credits

Built as a personal take on [Scrimba's](https://scrimba.com/) React capstone project, reimagined with a real LLM integration and a from-scratch UI design.