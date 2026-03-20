import type { DocsMeta } from "../../internal-docs/types";

export const docsMeta: DocsMeta = {
  name: "Skeleton",
  description: "A placeholder preview shown while content is loading, reducing layout shift and perceived wait time.",
  category: "Feedback",
  status: "stable",
  props: [
    {
      name: "variant",
      type: '"text" | "circular" | "rectangular" | "rounded"',
      default: '"rounded"',
      description: "Shape of the skeleton placeholder",
    },
    {
      name: "width",
      type: "number | string",
      default: "undefined",
      description: "Explicit width (number = px, string = any CSS unit)",
    },
    {
      name: "height",
      type: "number | string",
      default: "undefined",
      description: "Explicit height (number = px, string = any CSS unit)",
    },
  ],
  playgroundConfig: {
    controls: [
      {
        name: "variant",
        type: "select",
        options: ["text", "circular", "rectangular", "rounded"],
        defaultValue: "rounded",
      },
      { name: "width", type: "text", defaultValue: "200" },
      { name: "height", type: "text", defaultValue: "20" },
    ],
  },
  accessibility: {
    keyboard: [],
    notes: [
      "Has aria-hidden='true' — screen readers skip over it",
      "Wrap multiple skeletons in a container with aria-label='Loading…' to give context",
    ],
  },
};
