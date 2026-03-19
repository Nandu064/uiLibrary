import type { DocsMeta } from "../../internal-docs/types";

export const docsMeta: DocsMeta = {
  name: "Badge",
  description: "Small label for status, category, or count display.",
  category: "Data Display",
  status: "stable",
  props: [
    { name: "variant", type: '"solid" | "subtle" | "outline"', default: '"subtle"', description: "Visual style" },
    { name: "colorScheme", type: '"primary" | "success" | "warning" | "danger" | "neutral"', default: '"neutral"', description: "Color palette" },
    { name: "size", type: '"sm" | "md" | "lg"', default: '"md"', description: "Size" },
  ],
  playgroundConfig: {
    controls: [
      { name: "variant", type: "select", options: ["solid", "subtle", "outline"], defaultValue: "subtle" },
      { name: "colorScheme", type: "select", options: ["primary", "success", "warning", "danger", "neutral"], defaultValue: "neutral" },
      { name: "size", type: "select", options: ["sm", "md", "lg"], defaultValue: "md" },
      { name: "children", type: "text", defaultValue: "Badge" },
    ],
  },
  accessibility: {
    keyboard: [],
    notes: ["Non-interactive — do not use as a button", "Use aria-label for color-only meaning"],
  },
};
