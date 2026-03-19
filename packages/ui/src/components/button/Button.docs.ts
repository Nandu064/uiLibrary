import type { DocsMeta } from "../../internal-docs/types";

export const docsMeta: DocsMeta = {
  name: "Button",
  description: "Used to trigger an action or event, such as submitting a form or navigating.",
  category: "Actions",
  status: "stable",
  props: [
    {
      name: "variant",
      type: '"solid" | "outline" | "ghost" | "link"',
      default: '"solid"',
      description: "Visual style of the button",
    },
    {
      name: "size",
      type: '"sm" | "md" | "lg"',
      default: '"md"',
      description: "Size of the button",
    },
    {
      name: "colorScheme",
      type: '"primary" | "danger" | "success"',
      default: '"primary"',
      description: "Color palette applied to the button",
    },
    {
      name: "loading",
      type: "boolean",
      default: "false",
      description: "Shows a spinner and disables the button",
    },
    {
      name: "loadingText",
      type: "string",
      default: "undefined",
      description: "Text shown while loading (replaces children)",
    },
    {
      name: "fullWidth",
      type: "boolean",
      default: "false",
      description: "Expands the button to fill its container",
    },
    {
      name: "asChild",
      type: "boolean",
      default: "false",
      description: "Merges props onto child element (Slot pattern)",
    },
    {
      name: "leftIcon",
      type: "ReactNode",
      default: "undefined",
      description: "Icon displayed before button label",
    },
    {
      name: "rightIcon",
      type: "ReactNode",
      default: "undefined",
      description: "Icon displayed after button label",
    },
    {
      name: "disabled",
      type: "boolean",
      default: "false",
      description: "Disables the button",
    },
  ],
  playgroundConfig: {
    controls: [
      {
        name: "variant",
        type: "select",
        options: ["solid", "outline", "ghost", "link"],
        defaultValue: "solid",
      },
      {
        name: "size",
        type: "select",
        options: ["sm", "md", "lg"],
        defaultValue: "md",
      },
      {
        name: "colorScheme",
        type: "select",
        options: ["primary", "danger"],
        defaultValue: "primary",
      },
      { name: "disabled", type: "boolean", defaultValue: false },
      { name: "loading", type: "boolean", defaultValue: false },
      { name: "fullWidth", type: "boolean", defaultValue: false },
      { name: "children", type: "text", defaultValue: "Click me" },
    ],
  },
  accessibility: {
    keyboard: [
      "Space or Enter activates the button",
      "Tab moves focus to the button",
      "Shift+Tab moves focus away",
    ],
    notes: [
      "Use aria-label when the button contains only an icon",
      "loading state sets aria-busy='true'",
      "Disabled buttons are not reachable via keyboard",
    ],
  },
};
