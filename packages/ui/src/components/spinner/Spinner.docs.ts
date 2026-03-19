import type { DocsMeta } from "../../internal-docs/types";

export const docsMeta: DocsMeta = {
  name: "Spinner",
  description: "Indicates a loading or processing state.",
  category: "Feedback",
  status: "stable",
  props: [
    { name: "size", type: '"xs" | "sm" | "md" | "lg" | "xl"', default: '"md"', description: "Size of the spinner" },
    { name: "label", type: "string", default: '"Loading..."', description: "Accessible label for screen readers" },
    { name: "color", type: "string", default: "currentColor", description: "CSS color value" },
  ],
  playgroundConfig: {
    controls: [
      { name: "size", type: "select", options: ["xs", "sm", "md", "lg", "xl"], defaultValue: "md" },
      { name: "label", type: "text", defaultValue: "Loading..." },
    ],
  },
  accessibility: {
    keyboard: [],
    notes: ["role='status' announces loading to screen readers", "label provides accessible text"],
  },
};
