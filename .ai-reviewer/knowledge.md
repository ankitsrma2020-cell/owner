# owner reviewer notes

## Architecture

This is a minimal single-page React 19 application built with Vite and TypeScript. `src/main.tsx` bootstraps `App` under `StrictMode`; `src/App.tsx` contains the complete page structure, UI data, icons, and contact-form state. Styling is split between `src/index.css` and `src/App.css`, with Vite configuration in `vite.config.ts` and type-aware ESLint configured in `eslint.config.js`.

## Conventions

- Use TypeScript React components in `src/*.tsx`; the project is ESM (`package.json` sets `"type": "module"`).
- Keep the application entrypoint conventional: `src/main.tsx` imports global styles, uses `createRoot`, and renders `<App />` inside `<StrictMode>`.
- Use function components and hooks. `App` uses `useState`, and the submit handler is typed with `FormEvent<HTMLFormElement>` (`src/App.tsx`).
- Prefer explicit unions and typed records for constrained UI values. `IconName` limits valid icons, while `paths: Record<IconName, string>` maps each icon to its SVG path (`src/App.tsx`).
- Store repeated presentation content as data and render it with `.map()`. The `features` tuple array is rendered into `.feature-card` articles, keyed by the feature title (`src/App.tsx`).
- Use semantic HTML and hash navigation for this landing page: `<header>`, `<nav>`, `<main>`, `<section>`, `<form>`, and `<footer>` are used in `src/App.tsx`; section IDs (`home`, `about`, `features`, `contact`) are navigation targets.
- Follow the existing compact, single-quote style with no semicolons, as shown throughout `src/App.tsx`, `src/main.tsx`, and the config files.
- Run the repository scripts rather than introducing alternate tooling: `npm run dev`, `npm run build`, `npm run lint`, and `npm run preview` (`package.json`).
- ESLint applies to TypeScript files and enables recommended JavaScript, TypeScript, React Hooks, and React Refresh rules (`eslint.config.js`); `dist` is intentionally ignored.

## Intentional non-standard choices

- `App.tsx` is intentionally a fairly large single-page component rather than a collection of feature files; the page is currently a small static template.
- The contact form only performs browser validation and local UI state: `handleSubmit` calls `preventDefault()` and sets `formSent`, with no API or persistence (`src/App.tsx`).
- Icons are implemented as inline SVG path data through the local `Icon` component instead of a third-party icon dependency (`src/App.tsx`).

## Watch out for

- Do not claim a message was delivered or add backend expectations without implementing submission transport; the current success message is only local feedback (`src/App.tsx`).
- Preserve the `IconName` union and update both it and `paths` when adding icons; invalid names should be compile-time errors.
- Preserve unique section IDs and matching hash links; these are the page’s navigation mechanism.
- Avoid removing `required`, input types, or the `checkValidity()` flow unless equivalent validation is retained.
- New effects or hook usage must satisfy the configured React Hooks ESLint rules; the build also runs `tsc -b` before Vite (`package.json`).