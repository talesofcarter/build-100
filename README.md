# 100 Days of Building — Without AI-Generated Code

100 days of building without AI-generated code. A collection of 100 mini projects built independently. AI is used exclusively for trivial tasks such as boilerplate, README files, syntax references, and expediting the development process.

## Table of Contents

- [About](#about)
- [Rules](#rules)
- [Progress](#progress)
- [Projects](#projects)
  - [Day 001 - Chef Claude](#day-001--chef-claude)
  - [Day 002 - Password Generator](--password-generator)
- [Tech Stack](#tech-stack)
- [Running a Project Locally](#running-a-project-locally)

## About

This repo is a personal challenge: one small project a day, for 100 days, with the actual building — logic, architecture, problem-solving — done by hand. The goal is reps, not output. AI has a narrow, clearly-scoped role here (see [Rules](#rules)) so the skill being built is mine, not a model's.

Each project lives in its own folder, is small enough to finish in a day, and ships in a working state — rough edges included.

## Rules

- **No AI-generated application logic.** Every feature, function, and line of business logic is written by hand.
- **AI is allowed for:**
  - Boilerplate (config files, project scaffolding)
  - README files
  - Syntax references / "how do I do X in language Y" lookups
  - Speeding up mechanical, non-creative parts of the workflow
- **AI is not allowed for:** designing solutions, writing algorithms, generating components, or solving the actual problem a project is built around.
- Each project is built independently — no copy-pasting solutions between days.

## Progress

| Status         | Count   |
| -------------- | ------- |
| ✅ Completed   | 1 / 100 |
| 🚧 In progress | 1       |
| ⏳ Remaining   | 99      |

## Projects

### Day 001 — Chef Claude

An AI recipe generator. You add ingredients you have on hand, and once you've added at least five, a **Get Recipe** button sends the list to an LLM (via the Hugging Face Router API) and renders back a full recipe — title, tagline, time, servings, ingredients, and method. Generated recipes are saved to `localStorage` and browsable in a **Saved recipes** section.

- **Folder:** [`/chef-claude`](./chef-claude)
- **Stack:** React, TypeScript, Tailwind CSS, Lucide React, Hugging Face Router API
- **AI's role:** UI scaffolding, boilerplate, and this README. Ingredient logic, state management, and the fetch/parse integration were written independently.

> More projects will be added here as each day is completed.

## Tech Stack

Stack varies by project and is listed in each project's own section above and its individual folder. Common tools across the challenge:

- React / TypeScript for frontend-heavy days
- Tailwind CSS for styling
- Vanilla JS / HTML / CSS for lighter days
- Node.js & Python for anything backend

## Running a Project Locally

Each project is self-contained in its own folder. To run one:

```bash
cd <project-folder>
pnpm install
pnpm run dev
```

Check the individual project's folder for any additional setup (e.g. environment variables) if it isn't covered by the steps above.
