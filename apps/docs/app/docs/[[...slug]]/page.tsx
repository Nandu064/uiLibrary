import { notFound } from "next/navigation";

interface PageProps {
  params: Promise<{ slug?: string[] }>;
}

export async function generateStaticParams() {
  return [
    { slug: ["getting-started", "introduction"] },
    { slug: ["getting-started", "installation"] },
    { slug: ["getting-started", "quick-start"] },
    { slug: ["getting-started", "theming"] },
    { slug: ["getting-started", "dark-mode"] },
  ];
}

export async function generateMetadata({ params }: PageProps) {
  const { slug = ["getting-started", "introduction"] } = await params;
  const slugPath = slug.join("/");
  const titles: Record<string, string> = {
    "getting-started/introduction": "Introduction",
    "getting-started/installation": "Installation",
    "getting-started/quick-start": "Quick Start",
    "getting-started/theming": "Theming",
    "getting-started/dark-mode": "Dark Mode",
  };
  return { title: titles[slugPath] ?? "Documentation" };
}

import React from "react";

export default async function DocsPage({ params }: PageProps) {
  const { slug = ["getting-started", "introduction"] } = await params;
  const slugPath = slug.join("/");

  const pages: Record<string, React.ReactNode> = {
    "getting-started/introduction": <IntroductionPage />,
    "getting-started/installation": <InstallationPage />,
    "getting-started/quick-start": <QuickStartPage />,
    "getting-started/theming": <ThemingPage />,
    "getting-started/dark-mode": <DarkModePage />,
  };

  const content = pages[slugPath];
  if (!content) notFound();

  return <article style={{ maxWidth: 720 }}>{content}</article>;
}

// ─── Page Components ──────────────────────────────────────────────────────────

function H1({ children }: { children: React.ReactNode }) {
  return <h1 style={{ fontSize: "2rem", fontWeight: 800, marginBottom: 8, color: "var(--ui-fg)" }}>{children}</h1>;
}

function H2({ children }: { children: React.ReactNode }) {
  return <h2 style={{ fontSize: "1.25rem", fontWeight: 700, margin: "32px 0 12px", color: "var(--ui-fg)" }}>{children}</h2>;
}

function P({ children }: { children: React.ReactNode }) {
  return <p style={{ color: "var(--ui-fg-subtle)", lineHeight: 1.7, marginBottom: 16 }}>{children}</p>;
}

function Code({ children }: { children: React.ReactNode }) {
  return (
    <code style={{
      fontFamily: "monospace",
      fontSize: 13,
      background: "var(--ui-bg-muted)",
      border: "1px solid var(--ui-border)",
      borderRadius: 4,
      padding: "2px 6px",
    }}>
      {children}
    </code>
  );
}

function CodeBlock({ children }: { children: string }) {
  return (
    <pre style={{
      background: "var(--ui-bg-subtle)",
      border: "1px solid var(--ui-border)",
      borderRadius: 8,
      padding: "16px 20px",
      fontSize: 13,
      lineHeight: 1.6,
      overflowX: "auto",
      marginBottom: 20,
      color: "var(--ui-fg)",
    }}>
      <code>{children}</code>
    </pre>
  );
}

function Lead({ children }: { children: React.ReactNode }) {
  return <p style={{ fontSize: "1.125rem", color: "var(--ui-fg-subtle)", lineHeight: 1.7, marginBottom: 24 }}>{children}</p>;
}

function IntroductionPage() {
  return (
    <>
      <H1>Introduction</H1>
      <Lead>
        Harish UI is a production-ready React component library built with TypeScript, CSS variables,
        and full accessibility support. No runtime theme objects, no external dependencies beyond React.
      </Lead>

      <H2>Why Harish UI?</H2>
      <P>
        Most component libraries either lock you into their design system or require heavy configuration.
        Harish UI gives you a complete set of accessible, composable components that are customizable
        at every layer through CSS variables — with zero JavaScript for theming.
      </P>

      <H2>Key features</H2>
      <ul style={{ paddingLeft: 20, color: "var(--ui-fg-subtle)", lineHeight: 2, marginBottom: 20 }}>
        <li><strong style={{ color: "var(--ui-fg)" }}>TypeScript-first</strong> — every prop, variant, and event is fully typed</li>
        <li><strong style={{ color: "var(--ui-fg)" }}>CSS Variables theming</strong> — customize at global, component, or instance level</li>
        <li><strong style={{ color: "var(--ui-fg)" }}>Dark mode ready</strong> — one attribute switch, zero flash</li>
        <li><strong style={{ color: "var(--ui-fg)" }}>Accessible by default</strong> — ARIA roles, keyboard nav, focus management built in</li>
        <li><strong style={{ color: "var(--ui-fg)" }}>RSC compatible</strong> — proper "use client" boundaries for Next.js App Router</li>
        <li><strong style={{ color: "var(--ui-fg)" }}>asChild pattern</strong> — render any component as any element without losing props</li>
        <li><strong style={{ color: "var(--ui-fg)" }}>Tree-shakeable</strong> — ESM + CJS, import only what you use</li>
      </ul>

      <H2>Design philosophy</H2>
      <P>
        Components use a three-layer token system: <strong>primitive tokens</strong> (raw values) →{" "}
        <strong>semantic tokens</strong> (contextual CSS variables) → <strong>component tokens</strong>{" "}
        (per-component overrides). This means you can change the entire look of a Button by setting
        one CSS variable on a parent element.
      </P>
    </>
  );
}

function InstallationPage() {
  return (
    <>
      <H1>Installation</H1>
      <Lead>Get up and running in under a minute.</Lead>

      <H2>Install the package</H2>
      <CodeBlock>{`npm install @harish-ui/core
# or
pnpm add @harish-ui/core
# or
yarn add @harish-ui/core`}</CodeBlock>

      <H2>Import the styles</H2>
      <P>Add the stylesheet once at the root of your app:</P>
      <CodeBlock>{`import "@harish-ui/core/styles.css";`}</CodeBlock>

      <H2>Wrap with ThemeProvider</H2>
      <P>Wrap your app with <Code>ThemeProvider</Code> to enable theming and dark mode:</P>
      <CodeBlock>{`import { ThemeProvider } from "@harish-ui/core";

export default function App({ children }) {
  return (
    <ThemeProvider defaultTheme="system">
      {children}
    </ThemeProvider>
  );
}`}</CodeBlock>

      <H2>Use a component</H2>
      <CodeBlock>{`import { Button, Input, Card } from "@harish-ui/core";

export default function Page() {
  return (
    <Card>
      <Input label="Email" placeholder="you@example.com" />
      <Button>Subscribe</Button>
    </Card>
  );
}`}</CodeBlock>

      <H2>Next.js App Router</H2>
      <P>
        In Next.js, wrap your providers in a client component to avoid server component errors:
      </P>
      <CodeBlock>{`// app/providers.tsx
"use client";
import { ThemeProvider } from "@harish-ui/core";

export function Providers({ children }) {
  return <ThemeProvider defaultTheme="system">{children}</ThemeProvider>;
}

// app/layout.tsx
import { Providers } from "./providers";
import "@harish-ui/core/styles.css";

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body><Providers>{children}</Providers></body>
    </html>
  );
}`}</CodeBlock>
    </>
  );
}

function ThemingPage() {
  return (
    <>
      <H1>Theming</H1>
      <Lead>
        Harish UI is built on a three-layer CSS variable system. Customize at any layer
        without touching component source code.
      </Lead>

      <H2>Layer 1: Global semantic tokens</H2>
      <P>Override these in your CSS to retheme the entire library:</P>
      <CodeBlock>{`:root {
  --ui-primary: #7c3aed;          /* primary brand color */
  --ui-primary-hover: #6d28d9;
  --ui-radius-md: 12px;           /* rounder corners */
  --ui-font-sans: "Inter", sans-serif;
}`}</CodeBlock>

      <H2>Layer 2: Component tokens</H2>
      <P>Each component exposes its own tokens for targeted overrides:</P>
      <CodeBlock>{`/* Make all buttons square */
.ui-button {
  --btn-radius: 0;
}

/* Override just the primary button color */
.ui-button[data-variant="solid"][data-color="primary"] {
  --btn-bg: #059669;
  --btn-bg-hover: #047857;
}`}</CodeBlock>

      <H2>Layer 3: Instance overrides</H2>
      <P>Override at the element level using the <Code>style</Code> prop:</P>
      <CodeBlock>{`<Button style={{ "--btn-radius": "0px" } as React.CSSProperties}>
  Square button
</Button>`}</CodeBlock>

      <H2>Using ThemeProvider</H2>
      <CodeBlock>{`<ThemeProvider
  defaultTheme="system"  // "light" | "dark" | "system"
  onThemeChange={(theme) => console.log(theme)}
>
  <App />
</ThemeProvider>`}</CodeBlock>
    </>
  );
}

function QuickStartPage() {
  return (
    <>
      <H1>Quick Start</H1>
      <Lead>Build your first UI in 5 minutes.</Lead>

      <H2>1. Install</H2>
      <CodeBlock>{`npm install @harish-ui/core`}</CodeBlock>

      <H2>2. Add styles + provider</H2>
      <CodeBlock>{`// main.tsx or layout.tsx
import "@harish-ui/core/styles.css";
import { ThemeProvider } from "@harish-ui/core";

root.render(
  <ThemeProvider defaultTheme="system">
    <App />
  </ThemeProvider>
);`}</CodeBlock>

      <H2>3. Use components</H2>
      <CodeBlock>{`import { Button, Input, Card, CardBody, Alert } from "@harish-ui/core";

export function LoginForm() {
  return (
    <Card style={{ maxWidth: 400, margin: "0 auto" }}>
      <CardBody>
        <Alert status="info" title="Demo mode" description="Use any credentials." />
        <Input label="Email" type="email" placeholder="you@example.com" />
        <Input label="Password" type="password" />
        <Button fullWidth>Sign in</Button>
      </CardBody>
    </Card>
  );
}`}</CodeBlock>

      <H2>4. Customize with CSS variables</H2>
      <CodeBlock>{`/* Override the primary color globally */
:root {
  --ui-primary: #7c3aed;
  --ui-primary-hover: #6d28d9;
}

/* Or scope it to a section */
.my-section {
  --ui-radius-md: 0px; /* square corners */
}`}</CodeBlock>

      <H2>What's next?</H2>
      <ul style={{ paddingLeft: 20, color: "var(--ui-fg-subtle)", lineHeight: 2 }}>
        <li>Browse the <strong style={{ color: "var(--ui-fg)" }}>Components</strong> section in the sidebar</li>
        <li>Read the <strong style={{ color: "var(--ui-fg)" }}>Theming</strong> guide to customize tokens</li>
        <li>Try the live <strong style={{ color: "var(--ui-fg)" }}>Playground</strong> on each component page</li>
      </ul>
    </>
  );
}

function DarkModePage() {
  return (
    <>
      <H1>Dark Mode</H1>
      <Lead>
        Dark mode works by switching a <Code>data-theme</Code> attribute on the root element.
        No extra CSS, no flash of wrong theme.
      </Lead>

      <H2>How it works</H2>
      <P>
        The stylesheet includes both light and dark token sets. The <Code>ThemeProvider</Code> sets
        <Code> data-theme="dark"</Code> on <Code>document.documentElement</Code> when dark mode is active.
        All CSS variables update automatically.
      </P>

      <H2>Controlled theme</H2>
      <CodeBlock>{`import { ThemeProvider, useTheme } from "@harish-ui/core";

function ThemeToggle() {
  const { theme, setTheme } = useTheme();
  return (
    <button onClick={() => setTheme(theme === "dark" ? "light" : "dark")}>
      {theme === "dark" ? "Light mode" : "Dark mode"}
    </button>
  );
}

export function App() {
  return (
    <ThemeProvider defaultTheme="system">
      <ThemeToggle />
    </ThemeProvider>
  );
}`}</CodeBlock>

      <H2>System preference</H2>
      <P>
        Pass <Code>defaultTheme="system"</Code> to automatically follow the OS preference.
        The theme updates in real-time if the user changes their system preference.
      </P>

      <H2>Manual toggle via data attribute</H2>
      <P>You can also control the theme without ThemeProvider:</P>
      <CodeBlock>{`// Set dark mode
document.documentElement.setAttribute("data-theme", "dark");

// Set light mode
document.documentElement.setAttribute("data-theme", "light");`}</CodeBlock>
    </>
  );
}
