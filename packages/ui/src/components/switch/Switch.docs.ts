import type { DocsMeta } from "../../internal-docs/types";

export const docsMeta: DocsMeta = {
  name: "Switch",
  description: "A toggle control for binary on/off settings, rendered as a sliding thumb inside a track.",
  category: "Forms",
  status: "stable",
  props: [
    {
      name: "label",
      type: "ReactNode",
      default: "undefined",
      description: "Text label rendered next to the switch",
    },
    {
      name: "checked",
      type: "boolean",
      default: "undefined",
      description: "Controlled checked state",
    },
    {
      name: "defaultChecked",
      type: "boolean",
      default: "false",
      description: "Initial state for uncontrolled usage",
    },
    {
      name: "onChange",
      type: "(checked: boolean) => void",
      default: "undefined",
      description: "Called with the new boolean value when toggled",
    },
    {
      name: "size",
      type: '"sm" | "md" | "lg"',
      default: '"md"',
      description: "Controls the physical size of the track and thumb",
    },
    {
      name: "disabled",
      type: "boolean",
      default: "false",
      description: "Prevents interaction and applies disabled styling",
    },
  ],
  playgroundConfig: {
    controls: [
      { name: "label", type: "text", defaultValue: "Enable notifications" },
      {
        name: "size",
        type: "select",
        options: ["sm", "md", "lg"],
        defaultValue: "md",
      },
      { name: "defaultChecked", type: "boolean", defaultValue: false },
      { name: "disabled", type: "boolean", defaultValue: false },
    ],
  },
  accessibility: {
    keyboard: [
      "Space toggles the switch",
      "Tab moves focus to the switch",
    ],
    notes: [
      "Uses role='switch' with aria-checked for proper semantics",
      "Always provide a visible label or aria-label",
    ],
  },
};
