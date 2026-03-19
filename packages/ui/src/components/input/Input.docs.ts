import type { DocsMeta } from "../../internal-docs/types";

export const docsMeta: DocsMeta = {
  name: "Input",
  description: "Collects short text input from the user. Supports labels, helper text, and error states.",
  category: "Forms",
  status: "stable",
  props: [
    { name: "label", type: "string", default: "undefined", description: "Visible label text" },
    { name: "helperText", type: "string", default: "undefined", description: "Helper text below input" },
    { name: "errorMessage", type: "string", default: "undefined", description: "Error message (activates error state)" },
    { name: "size", type: '"sm" | "md" | "lg"', default: '"md"', description: "Size of the input" },
    { name: "isInvalid", type: "boolean", default: "false", description: "Marks the input as invalid" },
    { name: "isRequired", type: "boolean", default: "false", description: "Marks the input as required" },
    { name: "leftElement", type: "ReactNode", default: "undefined", description: "Element inside input on the left (e.g. icon)" },
    { name: "rightElement", type: "ReactNode", default: "undefined", description: "Element inside input on the right" },
    { name: "leftAddon", type: "ReactNode", default: "undefined", description: "Content attached outside left of input" },
    { name: "rightAddon", type: "ReactNode", default: "undefined", description: "Content attached outside right of input" },
    { name: "disabled", type: "boolean", default: "false", description: "Disables the input" },
    { name: "placeholder", type: "string", default: "undefined", description: "Placeholder text" },
  ],
  playgroundConfig: {
    controls: [
      { name: "size", type: "select", options: ["sm", "md", "lg"], defaultValue: "md" },
      { name: "isInvalid", type: "boolean", defaultValue: false },
      { name: "isRequired", type: "boolean", defaultValue: false },
      { name: "disabled", type: "boolean", defaultValue: false },
      { name: "label", type: "text", defaultValue: "Email address" },
      { name: "placeholder", type: "text", defaultValue: "you@example.com" },
      { name: "helperText", type: "text", defaultValue: "" },
      { name: "errorMessage", type: "text", defaultValue: "" },
    ],
  },
  accessibility: {
    keyboard: ["Tab focuses the input", "Shift+Tab moves focus away"],
    notes: [
      "Label is associated with input via htmlFor/id",
      "Error messages use role='alert' for screen readers",
      "Required fields announce required status",
    ],
  },
};
