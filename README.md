# Harish UI

A production-grade React component library monorepo. TypeScript-first, CSS variable theming, RSC-compatible, fully accessible.

[![CI](https://github.com/harish/ui-library/actions/workflows/ci.yml/badge.svg)](https://github.com/harish/ui-library/actions/workflows/ci.yml)
[![npm](https://img.shields.io/npm/v/@harish-ui/core)](https://www.npmjs.com/package/@harish-ui/core)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)

---

## Packages

| Package | Description | Version |
|---|---|---|
| [`@harish-ui/core`](./packages/ui) | All UI components — the package consumers install | [![npm](https://img.shields.io/npm/v/@harish-ui/core)](https://www.npmjs.com/package/@harish-ui/core) |
| [`@harish-ui/tokens`](./packages/tokens) | Design tokens (colors, spacing, typography) | internal |
| [`@harish-ui/utils`](./packages/utils) | Shared utilities (`cn`, `composeRefs`, etc.) | internal |
| [`@harish-ui/hooks`](./packages/hooks) | Shared React hooks (`useControllableState`, `useFocusTrap`) | internal |

## Apps

| App | Description |
|---|---|
| [`apps/docs`](./apps/docs) | Documentation site — Next.js 15 App Router |
| [`apps/storybook`](./apps/storybook) | Component explorer — Storybook 8 + Vite |

---

## Getting started

### Prerequisites

- **Node.js** 20+
- **pnpm** 10+ — `npm install -g pnpm`

### Install dependencies

```bash
pnpm install
```

### Development

Run docs and component watch in parallel:

```bash
pnpm dev
```

| URL | App |
|---|---|
| `http://localhost:3000` | Documentation site |
| `http://localhost:6006` | Storybook |

Run only the docs:

```bash
pnpm --filter @harish-ui/docs dev
```

Run only Storybook:

```bash
pnpm --filter @harish-ui/storybook dev
```

Watch the component library for changes:

```bash
pnpm --filter @harish-ui/core dev
```

---

## Scripts

All scripts run across every package via Turborepo unless a filter is specified.

```bash
pnpm build          # Build all packages and apps
pnpm lint           # ESLint across all packages
pnpm typecheck      # TypeScript type checking
pnpm test           # Unit tests (Vitest)
```

---

## Project structure

```
ui-library/
├── apps/
│   ├── docs/                   # Next.js documentation site
│   └── storybook/              # Storybook component explorer
├── packages/
│   ├── ui/                     # @harish-ui/core — all components
│   │   └── src/
│   │       ├── components/     # One folder per component
│   │       ├── styles/         # CSS variable tokens (theme + reset)
│   │       ├── docs-meta.ts    # Server-safe metadata entry point
│   │       └── index.ts        # Main entry point ("use client")
│   ├── tokens/                 # @harish-ui/tokens — raw design tokens
│   ├── utils/                  # @harish-ui/utils — shared utilities
│   ├── hooks/                  # @harish-ui/hooks — shared hooks
│   ├── config-eslint/          # Shared ESLint flat config
│   ├── config-typescript/      # Shared tsconfig bases
│   └── config-tailwind/        # Shared Tailwind preset
├── .github/
│   └── workflows/
│       ├── ci.yml              # Lint → Typecheck → Test → Build
│       ├── release.yml         # Changesets publish to npm
│       └── deploy-storybook.yml
├── turbo.json
└── pnpm-workspace.yaml
```

---

## Adding a new component

1. Create the folder under `packages/ui/src/components/<name>/`

```
<Name>.tsx          # Component implementation
<Name>.styles.css   # Component-scoped CSS variables
<Name>.types.ts     # Props interface
<Name>.docs.ts      # Docs metadata (props table, playground config)
<Name>.stories.tsx  # Storybook stories
index.ts            # Re-exports
```

2. Export from `packages/ui/src/index.ts`
3. Export the docs object from `packages/ui/src/docs-meta.ts`
4. Register in `apps/docs/lib/meta-registry.ts` and `apps/docs/lib/component-registry.ts`
5. Add to the sidebar in `apps/docs/lib/nav.ts`

---

## CI / CD pipeline

```
push / PR to main
│
├── Lint          (ESLint across all packages)
├── Typecheck     (tsc --noEmit)
├── Unit Tests    (Vitest, 3 automatic retries on flaky failures)
│
└── Build packages  (only runs if all three above pass)
    ├── Build docs    (Next.js, depends on built packages)
    └── Build Storybook (depends on built packages)
```

Releases are handled by [Changesets](https://github.com/changesets/changesets). To cut a release:

```bash
pnpm changeset        # Describe what changed
pnpm changeset version # Bump versions
git push              # CI publishes to npm automatically
```

---

## Architecture decisions

### CSS Variables theming

Components use a three-layer token system:

```
primitive tokens        semantic tokens         component tokens
(raw values)        →   (role-based vars)   →   (per-component overrides)

--color-violet-600      --ui-primary            --btn-bg
#7c3aed             →   var(--ui-primary)    →   var(--btn-bg)
```

This means you can change the entire color scheme at runtime — no Sass, no rebuild, no class toggling.

### "use client" boundary

`@harish-ui/core` (the main entry) is a client bundle. A second entry point, `@harish-ui/core/docs-meta`, is server-safe and exports only plain data (no hooks, no components). Server components in the docs app import from `docs-meta` to avoid the RSC boundary error.

### asChild pattern

Every interactive component accepts an `asChild` prop. When true, the component renders as its child element instead of its default DOM tag, forwarding all props and styles. This avoids wrapper `<div>` nesting and lets you render a `<Button>` as an `<a>` or `<Link>` without any hacks.

---

## License

MIT — see [LICENSE](./LICENSE)
