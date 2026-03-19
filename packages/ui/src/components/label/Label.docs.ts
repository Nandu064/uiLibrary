import type { DocsMeta } from "../../internal-docs/types";

export const docsMeta: DocsMeta = {
  name: "Label",
  description: "Accessible form label with optional required indicator.",
  category: "Forms",
  status: "stable",
  props: [
    { name: "htmlFor", type: "string", default: "undefined", description: "ID of the form element to associate" },
    { name: "isRequired", type: "boolean", default: "false", description: "Shows a required asterisk" },
    { name: "isDisabled", type: "boolean", default: "false", description: "Dims the label to match disabled field" },
  ],
  playgroundConfig: {
    controls: [
      { name: "isRequired", type: "boolean", defaultValue: false },
      { name: "isDisabled", type: "boolean", defaultValue: false },
      { name: "children", type: "text", defaultValue: "Field label" },
    ],
  },
  accessibility: {
    keyboard: [],
    notes: ["Associate with input via htmlFor + id", "Click on label moves focus to the associated input"],
  },
};
