import type { DocsMeta } from "../../internal-docs/types";

export const docsMeta: DocsMeta = {
  name: "Checkbox",
  description: "A control that allows the user to toggle between checked, unchecked, and indeterminate states.",
  category: "Forms",
  status: "stable",
  props: [
    {
      name: "label",
      type: "ReactNode",
      default: "undefined",
      description: "Text label rendered next to the checkbox",
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
      description: "Initial checked state for uncontrolled usage",
    },
    {
      name: "indeterminate",
      type: "boolean",
      default: "false",
      description: "Shows a dash indicator representing a mixed / partial selection",
    },
    {
      name: "onChange",
      type: "(checked: boolean) => void",
      default: "undefined",
      description: "Called with the new boolean value when the checkbox changes",
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
      { name: "label", type: "text", defaultValue: "Accept terms and conditions" },
      { name: "defaultChecked", type: "boolean", defaultValue: false },
      { name: "indeterminate", type: "boolean", defaultValue: false },
      { name: "disabled", type: "boolean", defaultValue: false },
    ],
  },
  accessibility: {
    keyboard: [
      "Space toggles the checked state",
      "Tab moves focus to the checkbox",
    ],
    notes: [
      "Indeterminate state sets aria-checked='mixed'",
      "Always pair the checkbox with a visible label or aria-label",
    ],
  },
};
