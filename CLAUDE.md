# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Commands

- `npm run dev` — Start development server (port 3000)
- `npm run build` — Production build
- `npm run start` — Start production server
- `npm run lint` — Run ESLint (flat config, ESLint v9)

No test framework is configured yet.

## Architecture

Next.js 16 app using the **App Router** (`src/app/`). React 19 with the experimental React Compiler enabled (`next.config.ts`).

- **Styling**: Tailwind CSS v4 with `@import "tailwindcss"` syntax in `globals.css`. Theme uses CSS custom properties (`--color-background`, `--color-foreground`). Dark mode via `prefers-color-scheme`.
- **Fonts**: Geist Sans and Geist Mono loaded via `next/font/google` in `layout.tsx`, applied through CSS variables `--font-sans` and `--font-mono`.
- **Path alias**: `@/*` maps to `./src/*` (configured in `tsconfig.json`).
- **TypeScript**: Strict mode enabled, target ES2017, bundler module resolution.
