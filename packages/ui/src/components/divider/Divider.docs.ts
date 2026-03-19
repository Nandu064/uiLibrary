import type { DocsMeta } from "../../internal-docs/types";

export const docsMeta: DocsMeta = {
  name: "Divider",
  description: "Visual separator between content sections. Supports horizontal, vertical, and labeled variants.",
  category: "Layout",
  status: "stable",
  props: [
    { name: "orientation", type: '"horizontal" | "vertical"', default: '"horizontal"', description: "Direction of the separator" },
    { name: "label", type: "string", default: "undefined", description: "Label text between the divider lines" },
  ],
  playgroundConfig: {
    controls: [
      { name: "orientation", type: "select", options: ["horizontal", "vertical"], defaultValue: "horizontal" },
      { name: "label", type: "text", defaultValue: "" },
    ],
  },
  accessibility: {
    keyboard: [],
    notes: ["Uses role='separator' and aria-orientation automatically"],
  },
};
