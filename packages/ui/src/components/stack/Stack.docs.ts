import type { DocsMeta } from "../../internal-docs/types";

export const docsMeta: DocsMeta = {
  name: "Stack",
  description: "Flex layout primitive for spacing children in a row or column. Includes HStack and VStack shorthands.",
  category: "Layout",
  status: "stable",
  props: [
    { name: "direction", type: '"row" | "column" | "row-reverse" | "column-reverse"', default: '"column"', description: "Flex direction" },
    { name: "gap", type: "number | string", default: "undefined", description: "Space between items (number = n*4px)" },
    { name: "align", type: '"start" | "center" | "end" | "stretch" | "baseline"', default: "undefined", description: "align-items" },
    { name: "justify", type: '"start" | "center" | "end" | "between" | "around" | "evenly"', default: "undefined", description: "justify-content" },
    { name: "wrap", type: '"wrap" | "nowrap" | "wrap-reverse"', default: '"nowrap"', description: "flex-wrap" },
    { name: "as", type: "ElementType", default: '"div"', description: "Underlying HTML element" },
  ],
  playgroundConfig: {
    controls: [
      { name: "direction", type: "select", options: ["row", "column"], defaultValue: "row" },
      { name: "gap", type: "number", defaultValue: 4 },
      { name: "align", type: "select", options: ["start", "center", "end", "stretch"], defaultValue: "center" },
      { name: "justify", type: "select", options: ["start", "center", "end", "between"], defaultValue: "start" },
    ],
  },
  accessibility: {
    keyboard: [],
    notes: ["Layout-only component with no semantic meaning — use 'as' prop for semantic elements"],
  },
};
