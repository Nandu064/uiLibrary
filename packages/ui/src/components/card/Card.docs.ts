import type { DocsMeta } from "../../internal-docs/types";

export const docsMeta: DocsMeta = {
  name: "Card",
  description: "Container for grouping related content with optional header and footer slots.",
  category: "Layout",
  status: "stable",
  props: [
    { name: "variant", type: '"default" | "elevated" | "outline" | "ghost"', default: '"default"', description: "Visual style" },
  ],
  playgroundConfig: {
    controls: [
      { name: "variant", type: "select", options: ["default", "elevated", "outline", "ghost"], defaultValue: "default" },
    ],
  },
  accessibility: {
    keyboard: [],
    notes: ["Use role='article' or region for landmark semantics", "CardHeader, CardBody, CardFooter are compositional sub-components"],
  },
};
