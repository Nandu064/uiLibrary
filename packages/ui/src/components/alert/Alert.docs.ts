import type { DocsMeta } from "../../internal-docs/types";

export const docsMeta: DocsMeta = {
  name: "Alert",
  description: "Displays a short, important message in a way that attracts the user's attention.",
  category: "Feedback",
  status: "stable",
  props: [
    {
      name: "status",
      type: '"info" | "success" | "warning" | "error"',
      default: '"info"',
      description: "Semantic status that sets the color and default icon",
    },
    {
      name: "variant",
      type: '"subtle" | "solid" | "outline"',
      default: '"subtle"',
      description: "Visual style of the alert",
    },
    {
      name: "title",
      type: "string",
      default: "undefined",
      description: "Bold heading displayed at the top of the alert",
    },
    {
      name: "description",
      type: "string",
      default: "undefined",
      description: "Secondary text rendered below the title",
    },
    {
      name: "icon",
      type: "ReactNode",
      default: "undefined",
      description: "Custom icon; overrides the default status icon",
    },
    {
      name: "onClose",
      type: "() => void",
      default: "undefined",
      description: "When provided, renders a close button that calls this handler",
    },
  ],
  playgroundConfig: {
    controls: [
      {
        name: "status",
        type: "select",
        options: ["info", "success", "warning", "error"],
        defaultValue: "info",
      },
      {
        name: "variant",
        type: "select",
        options: ["subtle", "solid", "outline"],
        defaultValue: "subtle",
      },
      { name: "title", type: "text", defaultValue: "Heads up!" },
      { name: "description", type: "text", defaultValue: "Something you should know about." },
    ],
  },
  accessibility: {
    keyboard: ["Close button is reachable via Tab and activated with Space or Enter"],
    notes: [
      "Alert has role='alert' — screen readers announce it immediately",
      "Use status='error' for form validation messages",
    ],
  },
};
