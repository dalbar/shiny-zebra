# Repository Guidelines
This repository is intentionally bare; use these guidelines so every addition lands with structure, automation, and documentation.

## Project Structure & Module Organization
- Primary app lives in `app/`; the `@/*` alias resolves to `app/src/*` for shared modules and utilities.
- Keep routes within `app/src/app`, using route groups for features and co-locating components, styles, and tests near their route entry points.
- Place reusable UI primitives under `app/src/components/`, helpers under `app/src/lib/`, and static assets in `app/public/`.
- Treat `food-ful/` as a frozen demo reference until future notice—observe only, do not change.

## Build, Test, and Development Commands
- Run `cd app && pnpm install` once per clone; commit lockfile changes but never `node_modules/` or `.next/`.
- `pnpm dev` serves the app locally, `pnpm build` compiles production assets, `pnpm start` runs the output, and `pnpm lint` executes ESLint.
- Introduce new scripts sparingly; document them in `app/README.md` so tooling and onboarding stay aligned.

## Coding Style & Naming Conventions
- Author everything in TypeScript with 2-space indentation and a 100-character soft wrap; prefer named exports and deterministic import order.
- Components use `PascalCase`, hooks use `useSomething`, route files stick to `page.tsx`/`layout.tsx`, and shared modules adopt `kebab-case.ts`.
- Scope styling through CSS modules or local `styled` utilities; avoid widening `globals.css` beyond design tokens.

## Testing Guidelines
- Co-locate tests beside code as `*.test.tsx|ts`; once the stack lands, wire `pnpm test` to `vitest` and `@testing-library/react`.
- Cover every new route with at least one smoke test and document any temporary gaps in the PR description.
- Track coverage with `pnpm test -- --coverage` (add when available) and target ≥85% on new logic.

## Commit & Pull Request Guidelines
- Follow Conventional Commits (`feat:`, `fix:`, `chore:`) to keep history scriptable and changelog friendly.
- PRs must include a concise summary, linked issues, validation notes (`pnpm lint`, `pnpm build`), and visuals for UI changes.
- Keep diffs to reviewable chunks (<400 LOC); stage risky migrations behind flags and list follow-up tasks explicitly.

## Next.js Best Practices
- Default to Server Components and streaming layouts; promote Client Components only for interactive islands with `"use client"`.
- Centralize shared metadata in `app/src/app/layout.tsx`, use `generateMetadata` for route-specific SEO, and load fonts through a single `next/font` entry.
- Prefer route handlers (`app/src/app/api/*/route.ts`) for backend integration, use `next/navigation` hooks, and keep experimental flags disabled unless documented.
