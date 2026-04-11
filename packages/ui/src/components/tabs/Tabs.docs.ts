import type { DocsMeta } from "../../internal-docs";
export const docsMeta: DocsMeta = {
  name: "Tabs",
  description: "Organizes content into separate views, each accessible by clicking a tab label.",
  category: "Navigation",
  status: "stable",
  props: [
    { name: "defaultIndex", type: "number", default: "0", description: "Default active tab index (uncontrolled)." },
    { name: "index", type: "number", default: "—", description: "Controlled active tab index." },
    { name: "onChange", type: "(index: number) => void", default: "—", description: "Called when the active tab changes." },
    { name: "variant", type: '"line" | "enclosed" | "pills"', default: '"line"', description: "Visual style of the tab list." },
    { name: "size", type: '"sm" | "md" | "lg"', default: '"md"', description: "Tab size." },
  ],
  playgroundConfig: {
    controls: [
      { name: "variant", type: "select", options: ["line", "enclosed", "pills"], defaultValue: "line" },
      { name: "size", type: "select", options: ["sm", "md", "lg"], defaultValue: "md" },
    ],
  },
  accessibility: {
    keyboard: [
      "ArrowLeft / ArrowRight — move focus between tabs",
      "Home / End — jump to first / last tab",
      "Tab — move focus into the active panel",
    ],
    notes: [
      "Uses roving tabindex: only the active tab is in the tab order.",
      "TabList has role='tablist', Tab has role='tab', TabPanel has role='tabpanel'.",
    ],
  },
};
