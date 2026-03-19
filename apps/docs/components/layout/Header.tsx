"use client";

import Link from "next/link";
import { useTheme } from "@harish-ui/core";
import { Button } from "@harish-ui/core";

export function Header() {
  const { resolvedTheme, setTheme } = useTheme();

  return (
    <header
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        right: 0,
        height: "var(--docs-header-height)",
        zIndex: 100,
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        padding: "0 24px",
        borderBottom: "1px solid var(--ui-border)",
        backgroundColor: "var(--ui-bg)",
        backdropFilter: "blur(8px)",
      }}
    >
      <div style={{ display: "flex", alignItems: "center", gap: 32 }}>
        <Link
          href="/"
          style={{
            fontSize: 18,
            fontWeight: 800,
            color: "var(--ui-fg)",
            textDecoration: "none",
            letterSpacing: "-0.02em",
          }}
        >
          Harish UI
        </Link>
        <nav style={{ display: "flex", gap: 4 }}>
          {[
            { href: "/docs/getting-started/introduction", label: "Docs" },
            { href: "/components/button", label: "Components" },
            { href: "/playground/button", label: "Playground" },
          ].map(({ href, label }) => (
            <Link
              key={href}
              href={href}
              style={{
                padding: "6px 12px",
                borderRadius: "var(--ui-radius-md)",
                fontSize: 14,
                fontWeight: 500,
                color: "var(--ui-fg-subtle)",
                textDecoration: "none",
              }}
            >
              {label}
            </Link>
          ))}
        </nav>
      </div>

      <div style={{ display: "flex", alignItems: "center", gap: 8 }}>
        <Button
          variant="ghost"
          size="sm"
          aria-label="Toggle dark mode"
          onClick={() => setTheme(resolvedTheme === "dark" ? "light" : "dark")}
        >
          {resolvedTheme === "dark" ? "☀️" : "🌙"}
        </Button>
        <Button variant="outline" size="sm" asChild>
          <a
            href="https://github.com/harish/ui-library"
            target="_blank"
            rel="noopener noreferrer"
          >
            GitHub
          </a>
        </Button>
        <Button size="sm" asChild>
          <a href="https://npmjs.com/package/@harish-ui/core" target="_blank" rel="noopener noreferrer">
            npm
          </a>
        </Button>
      </div>
    </header>
  );
}
