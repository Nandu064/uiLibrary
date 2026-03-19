"use client";

import {
  Button,
  Input,
  Textarea,
  Label,
  Badge,
  Card,
  Stack,
  Divider,
  Spinner,
} from "@harish-ui/core";
import type { PlaygroundControl } from "@harish-ui/core/docs-meta";
import { PlaygroundPanel } from "./PlaygroundPanel";
import type React from "react";

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const componentMap: Record<string, React.ComponentType<any>> = {
  button: Button,
  input: Input,
  textarea: Textarea,
  label: Label,
  badge: Badge,
  card: Card,
  stack: Stack,
  divider: Divider,
  spinner: Spinner,
};

interface ComponentPlaygroundProps {
  slug: string;
  controls: PlaygroundControl[];
}

export function ComponentPlayground({ slug, controls }: ComponentPlaygroundProps) {
  const Component = componentMap[slug];
  if (!Component) return null;

  const defaultProps = Object.fromEntries(controls.map((c) => [c.name, c.defaultValue]));

  return (
    <PlaygroundPanel
      component={Component}
      controls={controls}
      defaultProps={defaultProps}
    />
  );
}
