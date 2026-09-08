# 🔐 Password Generator

A clean, responsive password generator built with React, TypeScript, and Tailwind CSS. Generate strong, customizable passwords locally in your browser, track recent generations, and copy them to your clipboard in a click.

![Password Generator](https://img.shields.io/badge/React-TypeScript-blue) ![License](https://img.shields.io/badge/license-MIT-green)

## Features

- **Custom length**: choose a password length between 8 and 32 characters via an interactive slider.
- **Character type control**: generate passwords using letters only, numbers only, or a mix of both.
- **Optional symbols**: toggle special characters (`!@#$%^&*` etc.) on or off.
- **Live strength meter**: a real-time score (Weak → Very Strong) based on length and character variety.
- **Password history**: keeps track of your most recently generated passwords in the current session, with the ability to clear history.
- **Copy to clipboard**: one-click copy for both the current password and any entry in history, with toast notifications confirming success or failure.
- **Generated locally**: no network requests, no servers involved. Everything happens in your browser.

## Tech Stack

- [React](https://react.dev/) with functional components and hooks (`useState`, `useEffect`)
- [TypeScript](https://www.typescriptlang.org/) for type safety
- [Tailwind CSS](https://tailwindcss.com/) for styling
- [lucide-react](https://lucide.dev/) for icons

## Getting Started

### Prerequisites

- [Node.js](https://nodejs.org/) (v18 or later recommended)
- npm, yarn, or pnpm

### Installation

```bash
# Clone the repository
git clone <your-repo-url>
cd password-generator

# Install dependencies
pnpm install

# Start the development server
pnpm dev
```

Then open the app in your browser at the local address shown in your terminal (typically `http://localhost:5173` for Vite-based setups).

### Build for production

```bash
pnpm build
```

## Project Structure

```
src/
├── components/
│   ├── Navbar.tsx              # Top navigation bar
│   ├── Nav.tsx                 # Header / tagline
│   ├── PasswordDisplay.tsx     # Shows the generated password + strength meter + copy button
│   ├── ConfigurationPanel.tsx  # Wraps all generation controls
│   ├── LengthControl.tsx       # Password length slider
│   ├── TypeSelector.tsx        # Letters / Numbers / Both selector
│   ├── SymbolToggle.tsx        # Include-symbols switch
│   ├── GenerateButton.tsx      # Triggers password generation
│   ├── PasswordHistory.tsx     # List of recently generated passwords
│   └── Toast.tsx               # Toast notification component
├── types/
│   └── index.ts                # Shared TypeScript types (CharacterType, PasswordHistoryEntry, ToastState)
├── App.tsx                     # Owns all application state and core logic
└── main.tsx                    # App entry point
```

## How It Works

All application state (the current password, length, character type, symbol preference, strength score, history, and toast notifications) is owned by the top-level `App` component and passed down to child components as props — a pattern known as **lifting state up**. Child components are largely presentational: they render what they're given and call callback props (e.g. `onGenerate`, `onLengthChange`, `onCopy`) to report user actions back up to `App`, which owns the logic to respond to them.

Password strength is calculated using a simple point-based scoring system:

| Criteria                   | Points |
| -------------------------- | ------ |
| Length ≥ 8 characters      | +1     |
| Length ≥ 12 characters     | +1     |
| Contains lowercase letters | +1     |
| Contains uppercase letters | +1     |
| Contains numbers           | +1     |
| Contains symbols           | +1     |

**Score → Label:**

- 0–2 → Weak
- 3–4 → Moderate
- 5 → Strong
- 6 → Very Strong

## Privacy

This app generates passwords entirely client-side using `Math.random()` and never transmits any data over the network. Password history is kept only in memory for the current session and is cleared on page refresh.

## Roadmap / Ideas for Contributors

- [ ] Swap `Math.random()` for `crypto.getRandomValues()` for cryptographically secure generation
- [ ] Persist password history across sessions (e.g. `localStorage`, with appropriate security caveats)
- [ ] Add relative timestamps to history entries (e.g. "2m ago") that update live
- [ ] Add exclude-similar-characters option (e.g. `1`, `l`, `I`, `0`, `O`)
- [ ] Add copy-toast entry/exit animations
- [ ] Unit tests for password generation and strength scoring logic

## License

MIT
