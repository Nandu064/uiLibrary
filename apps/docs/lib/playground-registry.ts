import { componentRegistry } from "./component-registry";
import type { PlaygroundControl } from "@harish-ui/core/docs-meta";
import type React from "react";

type PlaygroundEntry = {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  component: React.ComponentType<any>;
  controls: PlaygroundControl[];
  defaultProps: Record<string, unknown>;
};

export const playgroundRegistry: Record<string, PlaygroundEntry> = Object.fromEntries(
  Object.entries(componentRegistry).map(([slug, { component, meta }]) => {
    const controls = meta.playgroundConfig.controls;
    const defaultProps = Object.fromEntries(controls.map((c) => [c.name, c.defaultValue]));
    return [slug, { component, controls, defaultProps }];
  })
);
