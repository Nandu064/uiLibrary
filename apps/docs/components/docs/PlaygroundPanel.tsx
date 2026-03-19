"use client";

import React, { useState } from "react";
import type { PlaygroundControl } from "@harish-ui/core/docs-meta";
import { Button } from "@harish-ui/core";

interface PlaygroundPanelProps {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  component: React.ComponentType<any>;
  controls: PlaygroundControl[];
  defaultProps: Record<string, unknown>;
}

export function PlaygroundPanel({ component: Component, controls, defaultProps }: PlaygroundPanelProps) {
  const [props, setProps] = useState<Record<string, unknown>>(defaultProps);
  const [copied, setCopied] = useState(false);

  const setProp = (name: string, value: unknown) => {
    setProps((prev) => ({ ...prev, [name]: value }));
  };

  const generatedCode = generateCode(Component.displayName ?? "Component", props);

  const handleCopy = async () => {
    await navigator.clipboard.writeText(generatedCode);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div
      style={{
        display: "grid",
        gridTemplateColumns: "240px 1fr",
        border: "1px solid var(--ui-border)",
        borderRadius: "var(--ui-radius-lg)",
        overflow: "hidden",
        minHeight: 300,
      }}
    >
      {/* Controls panel */}
      <div
        style={{
          borderRight: "1px solid var(--ui-border)",
          backgroundColor: "var(--ui-bg-subtle)",
          padding: 16,
          overflowY: "auto",
        }}
      >
        <p
          style={{
            fontSize: 11,
            fontWeight: 700,
            color: "var(--ui-fg-muted)",
            textTransform: "uppercase",
            letterSpacing: "0.08em",
            marginBottom: 16,
          }}
        >
          Controls
        </p>
        {controls.map((control) => (
          <ControlInput
            key={control.name}
            control={control}
            value={props[control.name]}
            onChange={(val) => setProp(control.name, val)}
          />
        ))}
        <Button
          variant="outline"
          size="sm"
          onClick={() => setProps(defaultProps)}
          style={{ marginTop: 16, width: "100%" }}
        >
          Reset
        </Button>
      </div>

      {/* Preview + Code */}
      <div style={{ display: "flex", flexDirection: "column" }}>
        {/* Live preview */}
        <div
          style={{
            flex: 1,
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            padding: 32,
            backgroundColor: "var(--ui-bg)",
            minHeight: 160,
          }}
        >
          <Component {...filterProps(props)} />
        </div>

        {/* Generated code */}
        <div
          style={{
            borderTop: "1px solid var(--ui-border)",
            position: "relative",
          }}
        >
          <div
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
              padding: "8px 16px",
              borderBottom: "1px solid var(--ui-border)",
              backgroundColor: "var(--ui-bg-muted)",
            }}
          >
            <span style={{ fontSize: 11, fontWeight: 600, color: "var(--ui-fg-muted)", textTransform: "uppercase", letterSpacing: "0.06em" }}>
              Generated code
            </span>
            <Button size="sm" variant="ghost" onClick={handleCopy} style={{ fontSize: 12 }}>
              {copied ? "Copied!" : "Copy"}
            </Button>
          </div>
          <pre
            style={{
              margin: 0,
              padding: "12px 16px",
              fontSize: 12,
              lineHeight: 1.6,
              overflowX: "auto",
              backgroundColor: "var(--ui-bg-subtle)",
              color: "var(--ui-fg)",
              maxHeight: 140,
            }}
          >
            <code>{generatedCode}</code>
          </pre>
        </div>
      </div>
    </div>
  );
}

// ─── Control Input ──────────────────────────────────────────────────────────

interface ControlInputProps {
  control: PlaygroundControl;
  value: unknown;
  onChange: (value: unknown) => void;
}

function ControlInput({ control, value, onChange }: ControlInputProps) {
  const labelStyle: React.CSSProperties = {
    display: "block",
    fontSize: 12,
    fontWeight: 600,
    color: "var(--ui-fg-subtle)",
    marginBottom: 4,
  };

  const inputStyle: React.CSSProperties = {
    width: "100%",
    padding: "5px 8px",
    fontSize: 12,
    borderRadius: "var(--ui-radius-sm)",
    border: "1px solid var(--ui-border-strong)",
    backgroundColor: "var(--ui-bg)",
    color: "var(--ui-fg)",
    outline: "none",
  };

  return (
    <div style={{ marginBottom: 12 }}>
      <label style={labelStyle}>{control.name}</label>

      {control.type === "select" && control.options && (
        <select
          value={String(value)}
          onChange={(e) => onChange(e.target.value)}
          style={inputStyle}
        >
          {control.options.map((opt) => (
            <option key={opt} value={opt}>{opt}</option>
          ))}
        </select>
      )}

      {control.type === "boolean" && (
        <div style={{ display: "flex", alignItems: "center", gap: 8 }}>
          <input
            type="checkbox"
            id={`ctrl-${control.name}`}
            checked={Boolean(value)}
            onChange={(e) => onChange(e.target.checked)}
            style={{ accentColor: "var(--ui-primary)", width: 16, height: 16, cursor: "pointer" }}
          />
          <label htmlFor={`ctrl-${control.name}`} style={{ fontSize: 12, color: "var(--ui-fg-subtle)", cursor: "pointer" }}>
            {Boolean(value) ? "true" : "false"}
          </label>
        </div>
      )}

      {control.type === "text" && (
        <input
          type="text"
          value={String(value ?? "")}
          onChange={(e) => onChange(e.target.value)}
          style={inputStyle}
        />
      )}

      {control.type === "number" && (
        <input
          type="number"
          value={Number(value)}
          onChange={(e) => onChange(Number(e.target.value))}
          style={inputStyle}
        />
      )}
    </div>
  );
}

// ─── Helpers ─────────────────────────────────────────────────────────────────

function filterProps(props: Record<string, unknown>): Record<string, unknown> {
  return Object.fromEntries(
    Object.entries(props).filter(([, v]) => v !== "" && v !== undefined)
  );
}

function generateCode(componentName: string, props: Record<string, unknown>): string {
  const filteredProps = filterProps(props);
  const { children, ...otherProps } = filteredProps;

  const propsString = Object.entries(otherProps)
    .map(([key, val]) => {
      if (typeof val === "boolean") return val ? key : `${key}={false}`;
      if (typeof val === "number") return `${key}={${val}}`;
      return `${key}="${val}"`;
    })
    .join("\n  ");

  const propsSection = propsString ? `\n  ${propsString}\n` : "";

  if (children !== undefined && children !== "") {
    return `<${componentName}${propsSection}>\n  ${children}\n</${componentName}>`;
  }
  return `<${componentName}${propsSection}/>`;
}
