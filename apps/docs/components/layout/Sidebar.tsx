"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { nav } from "@/lib/nav";

export function Sidebar() {
  const pathname = usePathname();

  return (
    <aside
      style={{
        width: "var(--docs-sidebar-width)",
        flexShrink: 0,
        borderRight: "1px solid var(--ui-border)",
        padding: "24px 16px",
        position: "sticky",
        top: "var(--docs-header-height)",
        height: "calc(100vh - var(--docs-header-height))",
        overflowY: "auto",
      }}
    >
      {nav.map((section) => (
        <div key={section.title} style={{ marginBottom: 24 }}>
          <p
            style={{
              fontSize: 11,
              fontWeight: 700,
              color: "var(--ui-fg-muted)",
              textTransform: "uppercase",
              letterSpacing: "0.08em",
              marginBottom: 4,
              padding: "0 8px",
            }}
          >
            {section.title}
          </p>
          {section.items?.map((item) => {
            const isActive = pathname === item.href;
            return (
              <Link
                key={item.href}
                href={item.href ?? "#"}
                style={{
                  display: "block",
                  padding: "6px 8px",
                  borderRadius: "var(--ui-radius-md)",
                  fontSize: 14,
                  fontWeight: isActive ? 600 : 400,
                  color: isActive ? "var(--ui-primary)" : "var(--ui-fg-subtle)",
                  textDecoration: "none",
                  backgroundColor: isActive ? "var(--ui-primary-subtle)" : "transparent",
                  marginBottom: 1,
                  transition: "background-color 100ms, color 100ms",
                }}
              >
                {item.title}
              </Link>
            );
          })}
        </div>
      ))}
    </aside>
  );
}
