export type ComponentStatus = "stable" | "beta" | "alpha" | "deprecated";

export type PlaygroundControlType = "select" | "boolean" | "text" | "number" | "color";

export interface PlaygroundControl {
  name: string;
  type: PlaygroundControlType;
  options?: string[];
  defaultValue: string | boolean | number;
  description?: string;
}

export interface PropDefinition {
  name: string;
  type: string;
  default: string;
  description: string;
  required?: boolean;
}

export interface DocsMeta {
  name: string;
  description: string;
  category: string;
  status: ComponentStatus;
  props: PropDefinition[];
  playgroundConfig: {
    controls: PlaygroundControl[];
  };
  accessibility: {
    keyboard: string[];
    notes: string[];
  };
}
