# PlainScribe

Frontend app that turns dense legal documents into plain-language summaries.

Paste or upload a contract, policy, or filing and get a readable rewrite, with key terms and obligations called out. Summaries are an aid for understanding—not legal advice. Always check them against the source document.

## What it does

- Ingest legal text (paste or file upload, as the UI grows)
- Produce a plain-language summary
- Surface defined terms, parties, dates, and obligations when those outputs exist

The UI is still a shell (`src/App.jsx` is empty). Styling and the first shadcn component are in place so screens can be built on Tailwind and Base UI.

## AI capabilities

Intended behavior once a model is wired up:

- **Plain-language rewrite** of contracts, policies, and filings
- **Structured output** such as summary, parties, dates, risks, and obligations
- **Grounding** by quoting the passages that support each claim, when the source text is available

**Not in the repo yet:** there is no LLM SDK, API client, or `.env` for a provider. Calls will need a backend or a browser-safe proxy; do not put secrets in the frontend.

**Limits:** output is not legal advice. Models can miss or invent details if they cannot cite the source. Scanned PDFs need OCR before they can be summarized reliably.

## Tech stack

| Layer | Choice | Where it lives |
| --- | --- | --- |
| UI | React 19 (JavaScript / JSX, not TypeScript) | `src/` |
| Bundler | Vite 8 | `vite.config.js` |
| Styling | Tailwind CSS 4 via `@tailwindcss/vite` | `src/index.css`, Vite plugin |
| Components | shadcn (style `base-nova`, CSS variables, `neutral`) | `components.json`, `src/components/ui/` |
| Primitives | Base UI (`@base-ui/react`) | e.g. `src/components/ui/button.jsx` |
| Icons | Lucide | `lucide-react` |
| Font | Geist Variable | `@fontsource-variable/geist` |
| Class names | `cn` + `class-variance-authority` | `src/lib/utils.js` |
| Path alias | `@` → `src/` | `vite.config.js`, `jsconfig.json` |
| Lint / compiler | ESLint + React Compiler (Babel) | `eslint.config.js`, Vite Babel plugin |

Add more UI with the shadcn CLI, for example:

```bash
npx shadcn@latest add card
```

Components are JSX (`"tsx": false` in `components.json`) and land under `src/components/ui`.

## Installation

**Prerequisites:** Node.js 20.19+ or 22 (needed by Vite 8), npm.

```bash
cd PlainScribe
npm install
npm run dev
```

Vite serves the app at the URL it prints (usually `http://localhost:5173`).

| Script | Command |
| --- | --- |
| Dev server | `npm run dev` |
| Production build | `npm run build` |
| Preview build | `npm run preview` |
| Lint | `npm run lint` |

No environment file is required until you add a model provider. When you do, use a `.env` (or `.env.local`) and document the variables here—never commit API keys.

## Project layout

```
src/
  App.jsx                 # App root (currently empty)
  main.jsx                # React entry; imports index.css
  index.css               # Tailwind, shadcn theme, Geist
  components/ui/          # shadcn components (Button so far)
  lib/utils.js            # `cn` helper
components.json           # shadcn config
vite.config.js            # React, Tailwind, `@` alias, React Compiler
```

## Privacy and limitations

Until an API is added, no document text leaves the browser except what you send yourself. After a provider is connected, document content will go to that service according to its retention policy. Keep size limits and supported file types documented next to the upload UI.
