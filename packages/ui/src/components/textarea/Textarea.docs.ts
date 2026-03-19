import type { DocsMeta } from "../../internal-docs/types";

export const docsMeta: DocsMeta = {
  name: "Textarea",
  description: "Multi-line text input. Supports labels, character counting, error states, and resize control.",
  category: "Forms",
  status: "stable",
  props: [
    { name: "label", type: "string", default: "undefined", description: "Visible label" },
    { name: "helperText", type: "string", default: "undefined", description: "Helper text below" },
    { name: "errorMessage", type: "string", default: "undefined", description: "Error message" },
    { name: "isInvalid", type: "boolean", default: "false", description: "Error state" },
    { name: "isRequired", type: "boolean", default: "false", description: "Required state" },
    { name: "resize", type: '"none" | "vertical" | "horizontal" | "both"', default: '"vertical"', description: "CSS resize property" },
    { name: "maxLength", type: "number", default: "undefined", description: "Max character count" },
    { name: "showCount", type: "boolean", default: "false", description: "Show character count" },
  ],
  playgroundConfig: {
    controls: [
      { name: "isInvalid", type: "boolean", defaultValue: false },
      { name: "isRequired", type: "boolean", defaultValue: false },
      { name: "resize", type: "select", options: ["none", "vertical", "horizontal", "both"], defaultValue: "vertical" },
      { name: "showCount", type: "boolean", defaultValue: false },
      { name: "label", type: "text", defaultValue: "Description" },
      { name: "placeholder", type: "text", defaultValue: "Enter description..." },
    ],
  },
  accessibility: {
    keyboard: ["Tab to focus", "Shift+Tab to move away"],
    notes: ["Associated with label via htmlFor/id", "Error uses role='alert'"],
  },
};
