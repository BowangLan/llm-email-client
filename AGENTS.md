# Repository Guidelines

## Project Structure & Module Organization
- `apps/` hosts runnable applications: `api` (Express), `storefront` (Next.js), `admin` (Vite), and `blog` (Remix).
- `packages/` contains shared tooling and libraries such as `@repo/ui`, `@repo/logger`, `@repo/eslint-config`, `@repo/jest-presets`, and `@repo/typescript-config`.
- Tests live alongside code in `src/__tests__/` folders or as `*.test.ts(x)` files.

## Build, Test, and Development Commands
- `bun install` installs dependencies for the workspace (Bun is the configured package manager).
- `bun run dev` runs all app/package dev servers via Turborepo.
- `bun run build` builds every app/package (uses `turbo run build`).
- `bun run test` runs test suites across the workspace.
- `bun run lint` runs linting for all packages.
- `bun run format` formats `*.ts`, `*.tsx`, and `*.md` files with Prettier.

## Coding Style & Naming Conventions
- TypeScript is used throughout; prefer explicit types for public APIs.
- Indentation follows Prettier defaults (2 spaces, no tabs).
- Use `kebab-case` for package and app folders (already established in `apps/` and `packages/`).
- ESLint rules come from `@repo/eslint-config`; keep fixes consistent with existing patterns.

## Testing Guidelines
- Jest is the test runner (see `@repo/jest-presets`), with tests located in `__tests__` folders or named `*.test.ts(x)`.
- Run a focused test by executing from its package, e.g. `bun run test` in `apps/api`.
- Keep tests deterministic and avoid external network calls unless explicitly mocked.

## Commit & Pull Request Guidelines
- Git history uses Conventional Commit-style subjects (e.g. `feat: add auth flow`, `fix: handle null user`).
- Keep commits scoped and descriptive; avoid large multi-feature commits.
- PRs should include a summary, testing notes, and screenshots for UI changes in `admin`, `storefront`, or `blog`.

## Security & Configuration Tips
- Node.js 18+ is required (`package.json` engines).
- Store secrets in per-app `.env*` files; Turborepo build inputs include these files.
