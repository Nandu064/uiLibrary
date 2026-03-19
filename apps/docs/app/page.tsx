import Link from "next/link";
import { Button, Badge, Card, CardBody, HStack, VStack } from "@harish-ui/core";

export default function HomePage() {
  return (
    <div>
      {/* Hero */}
      <section style={{ padding: "80px 0 60px", textAlign: "center" }}>
        <Badge colorScheme="primary" variant="subtle" style={{ marginBottom: 16 }}>
          v0.1.0 — Early access
        </Badge>
        <h1
          style={{
            fontSize: "3.5rem",
            fontWeight: 800,
            lineHeight: 1.1,
            letterSpacing: "-0.02em",
            color: "var(--ui-fg)",
            marginBottom: 20,
          }}
        >
          Harish UI
        </h1>
        <p
          style={{
            fontSize: "1.25rem",
            color: "var(--ui-fg-subtle)",
            maxWidth: 560,
            margin: "0 auto 36px",
            lineHeight: 1.6,
          }}
        >
          A professional React component library. TypeScript-first, accessible, CSS-variable themed,
          and production-ready.
        </p>
        <HStack gap={3} justify="center">
          <Button size="lg" asChild>
            <Link href="/docs/getting-started/introduction">Get started</Link>
          </Button>
          <Button size="lg" variant="outline" asChild>
            <Link href="/components/button">Browse components</Link>
          </Button>
        </HStack>
      </section>

      {/* Feature grid */}
      <section style={{ padding: "40px 0 60px" }}>
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(240px, 1fr))",
            gap: 16,
          }}
        >
          {features.map((f) => (
            <Card key={f.title} variant="outline" style={{ padding: 0 }}>
              <CardBody>
                <div style={{ fontSize: 28, marginBottom: 12 }}>{f.icon}</div>
                <strong style={{ display: "block", marginBottom: 6, color: "var(--ui-fg)" }}>
                  {f.title}
                </strong>
                <p style={{ margin: 0, color: "var(--ui-fg-subtle)", fontSize: 14, lineHeight: 1.6 }}>
                  {f.description}
                </p>
              </CardBody>
            </Card>
          ))}
        </div>
      </section>

      {/* Install snippet */}
      <section style={{ padding: "40px 0" }}>
        <Card variant="elevated" style={{ overflow: "hidden" }}>
          <CardBody>
            <h2 style={{ fontSize: "1.25rem", fontWeight: 700, marginBottom: 16 }}>
              Install in 30 seconds
            </h2>
            <VStack gap={4}>
              <pre style={{ margin: 0, fontSize: 13 }}>
                <code>npm install @harish-ui/core</code>
              </pre>
              <pre style={{ margin: 0, fontSize: 13 }}>
                <code>{`import { Button } from "@harish-ui/core";
import "@harish-ui/core/styles.css";

export default function App() {
  return <Button>Hello world</Button>;
}`}</code>
              </pre>
            </VStack>
          </CardBody>
        </Card>
      </section>
    </div>
  );
}

const features = [
  {
    icon: "⚡",
    title: "TypeScript-first",
    description: "Full type safety with exported types for every component and variant.",
  },
  {
    icon: "🎨",
    title: "CSS Variables theming",
    description: "One import, no config. Override tokens to match your brand instantly.",
  },
  {
    icon: "♿",
    title: "Accessible by design",
    description: "ARIA roles, keyboard navigation, and focus management built in from day one.",
  },
  {
    icon: "🌙",
    title: "Dark mode ready",
    description: "Switch themes with a single attribute. No extra CSS, no flash.",
  },
  {
    icon: "📦",
    title: "Tree-shakeable",
    description: "Import only what you use. ESM + CJS builds for any bundler.",
  },
  {
    icon: "🔀",
    title: "Composable",
    description: "asChild pattern lets you render any component as any HTML element.",
  },
];
