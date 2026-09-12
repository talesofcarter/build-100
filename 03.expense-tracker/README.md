# Expense Tracker

# Ledger

A minimal, local first expense tracker built with React, Vite, and Tailwind CSS. No backend, no accounts. You enter your name once, and everything you log stays in your browser's local storage.

## Features

- **Name only sign in.** No password, no account creation. Your name personalizes the workspace and unlocks the app.
- **Add expenses** with amount, merchant, date, payment method, category, recurring flag, and optional notes.
- **Category breakdown** showing how spending is distributed, with each category's share of total spending shown as a simple bar, not a fabricated budget target.
- **Recent transactions table** sorted by most recent, with a running subtotal.
- **Summary card** showing your balance for the month, current date, days left in the month, and how long you have been using the app (member since), plus a daily average.
- **Upcoming bills list** for recurring items like rent or subscriptions.
- **Data persistence** through `localStorage`, so expenses and your session survive a page refresh.

## Tech stack

- **React** (function components, hooks)
- **Vite** as the build tool and dev server
- **Tailwind CSS** for styling
- **lucide-react** for icons
- **sonner** for toast notifications

## Getting started

```bash
pnpm install
pnpm run dev
```

Then open the local dev URL Vite prints in your terminal.

To create a production build:

```bash
pnpm run build
```

## Project structure

```
src/
  components/
    AddExpenseModal.tsx      Modal form for logging a new expense
    BillRow.tsx               Single row in the upcoming bills list
    CategoryBreakdown.tsx     Grid of per category spending tiles
    CategoryChip.tsx          Selectable category button used in the modal
    CategorySection.tsx       Lays out CategoryBreakdown + UpcomingBills side by side
    CategoryTile.tsx          Single category card with a spend share bar
    LoginPage.tsx             Name only sign in screen
    MembershipCardHero.tsx    The top summary card (balance, date, member since)
    PageHeading.tsx           Greeting and "Add expense" call to action
    RecentTransactions.tsx    Table of logged expenses
    Sidebar.tsx                Left navigation, workspace name, sign out
    StatCard.tsx               Single stat block
    StatcardSection.tsx       Row of stat cards (total, top category, etc.)
    Topbar.tsx                 Top bar with breadcrumb and search
    TxRow.tsx                  Single row in the transactions table
    UpcomingBills.tsx          List of recurring bills
  utils/
    auth.ts                   Name based session helpers (localStorage backed)
    categories.tsx             Single source of truth for category metadata
    savedExpenses.ts          Expense persistence helpers
  App.tsx                     Top level state and layout
  main.tsx                    App entry point
  index.css                  Tailwind entry point and base styles
```

## Notes on the data model

There is no server and no database. Two things live in `localStorage`:

- `ledger-user` and `ledger-member-since`, written by `utils/auth.ts` the first time someone signs in.
- `saved-expenses`, written by `utils/savedExpenses.ts` every time the expenses array changes.

Because everything is derived from the `expenses` array at render time (totals, top category, daily average, category shares), there is a single source of truth for spending data. Nothing is calculated twice in two different places and nothing is invented for display purposes.

## Toast notifications

`sonner` is included for lightweight toast feedback. Good places to wire it in as the app grows:

- Confirming an expense was saved after `handleFormSubmit`
- Warning the user when required fields are missing, instead of the form silently doing nothing
- Confirming sign in and sign out
- Warning if `localStorage` fails to write (private browsing, storage full)

## React and JavaScript concepts learned

This project touches a good spread of everyday React and JavaScript fundamentals. A quick reference for anyone reading the code:

**React**

- Function components and tsx
- `useState` for local component state (form data, modal visibility, the signed in user's name)
- `useEffect` for a side effect that runs when state changes (persisting `expenses` to `localStorage` whenever it updates)
- Controlled form inputs, where the input's value comes from state and every keystroke updates that state through `onChange`
- Lifting state up: `App.tsx` owns the expenses and form state, and passes both the data and the functions that update it down as props to children like `AddExpenseModal`
- Conditional rendering, both for whole screens (showing `LoginPage` instead of the dashboard when there is no signed in user) and for small UI details (an empty `RecentTransactions` table returning `null`)
- Composition over duplication: category icons, colors, and labels live in one array (`utils/categories.tsx`) and every component that needs them maps over it, instead of each component keeping its own copy
- Passing components as props implicitly through destructured icon references (`icon: Icon`) so a variable can be rendered as a tsx tag
- Prop drilling for a small app, and where that starts to suggest a custom hook (a `useExpenses` hook would be the next natural refactor)

**JavaScript**

- Array methods used together: `reduce` for totals, `filter` for per category totals, `map` for rendering lists, `sort` for ordering transactions by date
- Destructuring, both of objects (`const { amount, merchant } = formData`) and of arrays from `Object.entries`
- The spread operator for updating state immutably (`{ ...prev, [field]: value }`) instead of mutating existing objects
- Optional chaining (`?.`) and nullish coalescing style fallbacks when data might be missing, such as a category that no longer exists
- Template literals for building class names and formatted strings
- `Date` and `Intl` style locale formatting (`toLocaleDateString`) instead of manual string building
- `crypto.randomUUID()` for generating unique ids without a library
- Guard clauses (returning early from `handleFormSubmit` if required fields are missing) instead of nesting logic in an `if` block
- The difference between derived state and stored state: totals, averages, and top category are always calculated fresh from `expenses` rather than stored separately, which avoids values getting out of sync

## Known gaps and next steps

- Transactions cannot be edited or deleted yet, the button in the table row is not wired up.
- No search or filtering on the transactions table, despite the search field in the top bar.
- All data is local to one browser, there is no way to access it from another device.
- Consider extracting a `useExpenses` hook to move the state and calculations out of `App.tsx`.
