import type { DocsMeta } from "../../internal-docs";
export const docsMeta: DocsMeta = {
  name: "RadioGroup",
  description: "A group of radio buttons where only one option can be selected at a time.",
  category: "Forms",
  status: "stable",
  props: [
    { name: "value", type: "string", default: "—", description: "Controlled selected value." },
    { name: "defaultValue", type: "string", default: '""', description: "Default selected value (uncontrolled)." },
    { name: "onChange", type: "(value: string) => void", default: "—", description: "Called when selection changes." },
    { name: "name", type: "string", default: "auto-generated", description: "HTML name attribute for radio inputs." },
    { name: "disabled", type: "boolean", default: "false", description: "Disables all radios." },
    { name: "size", type: '"sm" | "md" | "lg"', default: '"md"', description: "Size of the radio indicator." },
    { name: "direction", type: '"row" | "column"', default: '"column"', description: "Layout direction." },
  ],
  playgroundConfig: {
    controls: [
      { name: "defaultValue", type: "text", defaultValue: "option1" },
      { name: "size", type: "select", options: ["sm", "md", "lg"], defaultValue: "md" },
      { name: "direction", type: "select", options: ["row", "column"], defaultValue: "column" },
      { name: "disabled", type: "boolean", defaultValue: false },
    ],
  },
  accessibility: {
    keyboard: [
      "ArrowDown / ArrowRight — select next radio",
      "ArrowUp / ArrowLeft — select previous radio",
    ],
    notes: [
      "Radios share the same name attribute for browser-native grouping.",
      "role='radiogroup' on the wrapper.",
    ],
  },
};
