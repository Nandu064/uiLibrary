export type NavItem = {
  title: string;
  href?: string;
  items?: NavItem[];
};

export const nav: NavItem[] = [
  {
    title: "Getting Started",
    items: [
      { title: "Introduction", href: "/docs/getting-started/introduction" },
      { title: "Installation", href: "/docs/getting-started/installation" },
      { title: "Quick Start", href: "/docs/getting-started/quick-start" },
      { title: "Theming", href: "/docs/getting-started/theming" },
      { title: "Dark Mode", href: "/docs/getting-started/dark-mode" },
    ],
  },
  {
    title: "Components",
    items: [
      { title: "Button", href: "/components/button" },
      { title: "Input", href: "/components/input" },
      { title: "Textarea", href: "/components/textarea" },
      { title: "Label", href: "/components/label" },
      { title: "Checkbox", href: "/components/checkbox" },
      { title: "Switch", href: "/components/switch" },
      { title: "Badge", href: "/components/badge" },
      { title: "Card", href: "/components/card" },
      { title: "Stack", href: "/components/stack" },
      { title: "Divider", href: "/components/divider" },
      { title: "Alert", href: "/components/alert" },
      { title: "Progress", href: "/components/progress" },
      { title: "Skeleton", href: "/components/skeleton" },
      { title: "Spinner", href: "/components/spinner" },
    ],
  },
  {
    title: "Guides",
    items: [
      { title: "With React Hook Form", href: "/docs/guides/with-react-hook-form" },
      { title: "SSR / Next.js", href: "/docs/guides/ssr-nextjs" },
    ],
  },
];
