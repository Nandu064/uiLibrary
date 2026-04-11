import type { DocsMeta } from "../../internal-docs/types";

export const docsMeta: DocsMeta = {
  name: "Avatar",
  description: "Displays a profile image with initials fallback or placeholder icon. Supports grouping with AvatarGroup.",
  category: "Data Display",
  status: "stable",
  props: [
    { name: "src", type: "string", default: "—", description: "Image URL. Falls back to initials or icon if missing or broken.", required: false },
    { name: "alt", type: "string", default: "—", description: "Alt text for the image." },
    { name: "name", type: "string", default: "—", description: "Full name — generates initials (e.g. 'John Doe' → 'JD')." },
    { name: "size", type: '"xs" | "sm" | "md" | "lg" | "xl"', default: '"md"', description: "Avatar size." },
    { name: "variant", type: '"circle" | "square"', default: '"circle"', description: "Shape." },
    { name: "badge", type: "ReactNode", default: "—", description: "Small overlay element positioned at bottom-right." },
  ],
  playgroundConfig: {
    controls: [
      { name: "name", type: "text", defaultValue: "John Doe" },
      { name: "size", type: "select", options: ["xs", "sm", "md", "lg", "xl"], defaultValue: "md" },
      { name: "variant", type: "select", options: ["circle", "square"], defaultValue: "circle" },
    ],
  },
  accessibility: {
    keyboard: [],
    notes: [
      "Provide alt text when src is used.",
      "Initials are aria-hidden; wrap in element with aria-label for screen reader context.",
      "AvatarGroup overflow indicator has aria-label describing the hidden count.",
    ],
  },
};
