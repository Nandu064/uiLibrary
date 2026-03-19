"use client";

import { useState } from "react";
import { Button } from "@harish-ui/core";
import { CodeBlock } from "./CodeBlock";

interface PreviewBlockProps {
  title?: string;
  /** The live React example to render */
  preview: React.ReactNode;
  /** Raw source code string */
  source?: string;
}

export function PreviewBlock({ title, preview, source }: PreviewBlockProps) {
  const [tab, setTab] = useState<"preview" | "code">("preview");

  return (
    <div
      style={{
        border: "1px solid var(--ui-border)",
        borderRadius: "var(--ui-radius-lg)",
        overflow: "hidden",
        marginTop: 24,
      }}
    >
      {/* Tabs bar */}
      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          padding: "8px 16px",
          borderBottom: "1px solid var(--ui-border)",
          backgroundColor: "var(--ui-bg-muted)",
          gap: 8,
        }}
      >
        <div style={{ display: "flex", gap: 4 }}>
          {(["preview", "code"] as const).map((t) => (
            <Button
              key={t}
              size="sm"
              variant={tab === t ? "solid" : "ghost"}
              onClick={() => setTab(t)}
              style={{ textTransform: "capitalize", fontSize: 12 }}
            >
              {t}
            </Button>
          ))}
        </div>
        {title && (
          <span style={{ fontSize: 12, color: "var(--ui-fg-muted)" }}>{title}</span>
        )}
      </div>

      {/* Content */}
      {tab === "preview" ? (
        <div
          style={{
            padding: "40px 24px",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            backgroundColor: "var(--ui-bg)",
            minHeight: 120,
          }}
        >
          {preview}
        </div>
      ) : (
        source && (
          <div style={{ borderRadius: 0 }}>
            <CodeBlock code={source} />
          </div>
        )
      )}
    </div>
  );
}

import type React from "react";
