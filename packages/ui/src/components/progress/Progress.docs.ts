import type { DocsMeta } from "../../internal-docs/types";

export const docsMeta: DocsMeta = {
  name: "Progress",
  description: "Displays the completion status of a task or operation as a horizontal bar.",
  category: "Feedback",
  status: "stable",
  props: [
    {
      name: "value",
      type: "number",
      default: "0",
      description: "Current progress value",
    },
    {
      name: "max",
      type: "number",
      default: "100",
      description: "Maximum value (100% point)",
    },
    {
      name: "size",
      type: '"xs" | "sm" | "md" | "lg"',
      default: '"md"',
      description: "Height of the progress track",
    },
    {
      name: "color",
      type: '"primary" | "success" | "danger" | "warning"',
      default: '"primary"',
      description: "Color of the filled portion",
    },
    {
      name: "label",
      type: "string",
      default: "undefined",
      description: "Descriptive label shown above the bar and used for aria-label",
    },
    {
      name: "showValue",
      type: "boolean",
      default: "false",
      description: "Renders the percentage value next to the label",
    },
    {
      name: "striped",
      type: "boolean",
      default: "false",
      description: "Adds diagonal stripe pattern to the fill",
    },
    {
      name: "animated",
      type: "boolean",
      default: "false",
      description: "Animates the stripe pattern (requires striped=true)",
    },
  ],
  playgroundConfig: {
    controls: [
      { name: "value", type: "text", defaultValue: "60" },
      {
        name: "size",
        type: "select",
        options: ["xs", "sm", "md", "lg"],
        defaultValue: "md",
      },
      {
        name: "color",
        type: "select",
        options: ["primary", "success", "danger", "warning"],
        defaultValue: "primary",
      },
      { name: "label", type: "text", defaultValue: "Uploading…" },
      { name: "showValue", type: "boolean", defaultValue: false },
      { name: "striped", type: "boolean", defaultValue: false },
      { name: "animated", type: "boolean", defaultValue: false },
    ],
  },
  accessibility: {
    keyboard: [],
    notes: [
      "Track has role='progressbar' with aria-valuenow, aria-valuemin, aria-valuemax",
      "Provide a label prop or aria-label so screen readers can announce progress meaningfully",
    ],
  },
};
