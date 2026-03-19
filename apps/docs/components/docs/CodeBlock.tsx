"use client";

import { useState } from "react";
import { Button } from "@harish-ui/core";

interface CodeBlockProps {
  code: string;
  language?: string;
  filename?: string;
}

export function CodeBlock({ code, language = "tsx", filename }: CodeBlockProps) {
  const [copied, setCopied] = useState(false);

  const handleCopy = async () => {
    await navigator.clipboard.writeText(code);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div
      style={{
        position: "relative",
        borderRadius: "var(--ui-radius-lg)",
        border: "1px solid var(--ui-border)",
        overflow: "hidden",
        marginTop: 12,
      }}
    >
      {filename && (
        <div
          style={{
            padding: "8px 16px",
            borderBottom: "1px solid var(--ui-border)",
            backgroundColor: "var(--ui-bg-muted)",
            fontSize: 12,
            color: "var(--ui-fg-subtle)",
            fontFamily: "monospace",
          }}
        >
          {filename}
        </div>
      )}
      <div style={{ position: "relative" }}>
        <pre
          style={{
            margin: 0,
            padding: "20px 20px",
            overflowX: "auto",
            backgroundColor: "var(--ui-bg-subtle)",
            fontSize: 13,
            lineHeight: 1.7,
            borderRadius: 0,
            border: "none",
          }}
        >
          <code className={`language-${language}`}>{code}</code>
        </pre>
        <Button
          size="sm"
          variant="ghost"
          onClick={handleCopy}
          style={{
            position: "absolute",
            top: 8,
            right: 8,
            fontSize: 12,
          }}
          aria-label="Copy code"
        >
          {copied ? "Copied!" : "Copy"}
        </Button>
      </div>
    </div>
  );
}
