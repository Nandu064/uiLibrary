# @harish-ui/core

A professional React component library with TypeScript support, CSS variable theming, and full accessibility.

## Install

```bash
npm install @harish-ui/core
```

## Quick start

```tsx
// 1. Import styles once (app entry point or layout)
import "@harish-ui/core/styles.css";

// 2. Optionally wrap with ThemeProvider
import { ThemeProvider } from "@harish-ui/core";

export default function App({ children }) {
  return <ThemeProvider defaultTheme="system">{children}</ThemeProvider>;
}

// 3. Use components
import { Button, Input, Card, CardBody } from "@harish-ui/core";

export function LoginForm() {
  return (
    <Card>
      <CardBody>
        <Input label="Email" type="email" placeholder="you@example.com" />
        <Input label="Password" type="password" />
        <Button fullWidth>Sign in</Button>
      </CardBody>
    </Card>
  );
}
```

## Components

| Component | Description |
|---|---|
| `Button` | Actions and navigation |
| `Input` | Text input with label and validation |
| `Textarea` | Multi-line text input |
| `Label` | Accessible form label |
| `Badge` | Status and category labels |
| `Card` | Content container |
| `Stack` / `HStack` / `VStack` | Flex layout primitives |
| `Divider` | Visual separator |
| `Spinner` | Loading indicator |
| `ThemeProvider` | Theme management |

## Theming

Override CSS variables to match your brand:

```css
:root {
  --ui-primary: #7c3aed;
  --ui-radius-md: 4px;
}
```

## Dark mode

```tsx
import { useTheme } from "@harish-ui/core";

function ThemeToggle() {
  const { resolvedTheme, setTheme } = useTheme();
  return (
    <button onClick={() => setTheme(resolvedTheme === "dark" ? "light" : "dark")}>
      Toggle theme
    </button>
  );
}
```

## Links

- [Documentation](https://harish-ui.dev)
- [GitHub](https://github.com/harish/ui-library)
- [Storybook](https://harish.github.io/ui-library)

## License

MIT
