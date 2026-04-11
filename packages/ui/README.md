# @harish-ui/core

A production-grade React component library. TypeScript-first, CSS variable theming, accessible by default, and compatible with React Server Components.

[![npm](https://img.shields.io/npm/v/@harish-ui/core)](https://www.npmjs.com/package/@harish-ui/core)
[![npm bundle size](https://img.shields.io/bundlephobia/minzip/@harish-ui/core)](https://bundlephobia.com/package/@harish-ui/core)
[![Storybook](https://img.shields.io/badge/Storybook-live-blue)](https://ui-library-storybook-5luo.vercel.app)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)

---

## Why this library?

Most UI libraries give you a fixed design system. This one gives you a **themeable primitive layer** — components built on CSS variables that you can override at any level: globally, per page, per component instance, or at runtime. No Sass. No rebuild. No plugin configuration.

| Feature | Details |
|---|---|
| **TypeScript-first** | Every prop, variant, and event is typed from the source. No `any`. |
| **CSS Variables theming** | Change brand colors, radii, and spacing at runtime. |
| **Dark mode** | One `data-theme` attribute flip — zero flash, zero extra CSS. |
| **RSC compatible** | Proper `"use client"` boundary. Safe to use in Next.js App Router. |
| **asChild pattern** | Render any component as any element without losing props or styles. |
| **Accessible** | ARIA roles, keyboard navigation, and focus management built into every component. |
| **Tree-shakeable** | ESM + CJS dual build. Pay only for what you import. |

---

## Installation

```bash
npm install @harish-ui/core
# or
pnpm add @harish-ui/core
# or
yarn add @harish-ui/core
```

**Peer dependencies** — make sure you have these installed:

```bash
npm install react react-dom
```

Requires **React 18 or 19**.

---

## Setup

### 1. Import the stylesheet

Add this once at your app's entry point. In Next.js, put it in `app/layout.tsx`:

```tsx
import "@harish-ui/core/styles.css";
```

### 2. Wrap with ThemeProvider (optional but recommended)

```tsx
// app/layout.tsx
import "@harish-ui/core/styles.css";
import { ThemeProvider } from "@harish-ui/core";

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
        <ThemeProvider defaultTheme="system">
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
```

`defaultTheme` accepts `"light"`, `"dark"`, or `"system"` (follows OS preference automatically).

---

## Quick example

```tsx
import { Button, Input, Card, CardBody, CardHeader } from "@harish-ui/core";

export function LoginForm() {
  return (
    <Card>
      <CardHeader>
        <h2>Sign in</h2>
      </CardHeader>
      <CardBody>
        <Input label="Email" type="email" placeholder="you@example.com" />
        <Input label="Password" type="password" />
        <Button fullWidth>Continue</Button>
        <Button variant="ghost" fullWidth>Create account</Button>
      </CardBody>
    </Card>
  );
}
```

---

## Components

### Forms

| Component | Description |
|---|---|
| `Button` | Primary action element. Variants: `solid`, `outline`, `ghost`, `link`. Sizes: `xs` `sm` `md` `lg`. |
| `Input` | Text input with built-in label, helper text, and error state. |
| `Textarea` | Multi-line text input with the same API as Input. |
| `Label` | Accessible form label with required indicator support. |
| `Checkbox` | Toggle with controlled, uncontrolled, and indeterminate states. |
| `Switch` | Binary toggle. Sizes: `sm`, `md`, `lg`. |

### Feedback

| Component | Description |
|---|---|
| `Alert` | Status messages. Variants: `subtle`, `solid`, `outline`. Statuses: `info`, `success`, `warning`, `error`. Built-in `dismissible` prop. |
| `Spinner` | Loading indicator with accessible label. Sizes: `xs` → `xl`. |
| `Progress` | Progress bar with animated and striped variants. |
| `Skeleton` | Loading placeholder. Variants: `text`, `circular`, `rectangular`. |

### Layout

| Component | Description |
|---|---|
| `Card` / `CardHeader` / `CardBody` / `CardFooter` | Content container with composable sections. |
| `Stack` / `HStack` / `VStack` | Flexbox layout primitives with gap and alignment props. |
| `Divider` | Horizontal or vertical visual separator. |

### Data

| Component | Description |
|---|---|
| `Badge` | Compact status and category label. Variants: `solid`, `subtle`, `outline`. |

### Theme

| Component / Hook | Description |
|---|---|
| `ThemeProvider` | Manages `light` / `dark` / `system` theme via `data-theme` attribute. |
| `useTheme` | Returns `{ theme, resolvedTheme, setTheme }`. |

---

## Theming

All visual properties are exposed as CSS variables. Override them globally in your stylesheet:

```css
:root {
  /* Brand color */
  --ui-primary: #7c3aed;
  --ui-primary-hover: #6d28d9;
  --ui-primary-active: #5b21b6;

  /* Neutral palette */
  --ui-bg: #ffffff;
  --ui-bg-subtle: #f9fafb;
  --ui-fg: #111827;
  --ui-fg-subtle: #6b7280;

  /* Shape */
  --ui-radius-sm: 4px;
  --ui-radius-md: 8px;
  --ui-radius-lg: 12px;
  --ui-radius-full: 9999px;

  /* Typography */
  --ui-font-sans: "Inter", system-ui, sans-serif;
}
```

### Scope overrides to a section

```css
.my-section {
  --ui-radius-md: 0px; /* square corners in this section only */
}
```

### Override a single instance

```tsx
<Button style={{ "--btn-bg": "#e11d48" } as React.CSSProperties}>
  Danger action
</Button>
```

---

## Dark mode

```tsx
import { useTheme } from "@harish-ui/core";

function ThemeToggle() {
  const { resolvedTheme, setTheme } = useTheme();

  return (
    <button onClick={() => setTheme(resolvedTheme === "dark" ? "light" : "dark")}>
      {resolvedTheme === "dark" ? "Light mode" : "Dark mode"}
    </button>
  );
}
```

No provider? Toggle directly with a DOM attribute:

```js
document.documentElement.setAttribute("data-theme", "dark");
```

---

## asChild pattern

The `asChild` prop renders a component as its child element, forwarding all props and styles. Use it to render a `Button` as a Next.js `Link` without losing any button behavior:

```tsx
import Link from "next/link";
import { Button } from "@harish-ui/core";

<Button asChild variant="outline">
  <Link href="/dashboard">Go to dashboard</Link>
</Button>
// Renders as <a href="/dashboard"> with full button styling and keyboard behavior
```

---

## Alert — dismissible

```tsx
import { Alert } from "@harish-ui/core";

// Self-dismissing with no external state needed
<Alert
  status="success"
  title="Saved"
  description="Your changes have been saved."
  dismissible
/>

// With a callback when dismissed
<Alert
  status="warning"
  title="Storage almost full"
  description="Upgrade your plan to get more space."
  onClose={() => analytics.track("alert_dismissed")}
/>
```

---

## Checkbox — controlled and uncontrolled

```tsx
import { Checkbox } from "@harish-ui/core";

// Uncontrolled
<Checkbox label="Accept terms and conditions" defaultChecked />

// Controlled
const [agreed, setAgreed] = React.useState(false);
<Checkbox label="I agree" checked={agreed} onChange={setAgreed} />

// Indeterminate (partial selection state)
<Checkbox label="Select all" indeterminate />
```

---

## Next.js App Router

The main entry (`@harish-ui/core`) is a client bundle. Use it freely inside Server Components — Next.js handles the boundary automatically.

For Server Component metadata access (e.g. static generation, docs pages), use the server-safe entry point:

```tsx
// Server component — no "use client" restriction
import { buttonDocs } from "@harish-ui/core/docs-meta";

export async function generateStaticParams() {
  return Object.keys(docsRegistry).map((slug) => ({ slug }));
}
```

---

## TypeScript

All props are exported as named types:

```tsx
import type { ButtonProps, AlertProps, CheckboxProps, SwitchProps } from "@harish-ui/core";

function MyButton(props: ButtonProps) {
  return <Button {...props} />;
}
```

---

## Browser support

Targets all browsers that support CSS custom properties — Chrome 49+, Firefox 31+, Safari 9.1+, Edge 16+. IE is not supported.

---

## Links

- [Documentation](https://harish-ui.dev)
- [Storybook](https://harish.github.io/ui-library)
- [GitHub](https://github.com/harish/ui-library)
- [Changelog](https://github.com/harish/ui-library/releases)
- [npm](https://www.npmjs.com/package/@harish-ui/core)

---

## License

MIT
