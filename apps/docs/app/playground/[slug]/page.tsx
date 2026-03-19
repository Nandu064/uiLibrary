import { notFound } from "next/navigation";
import { componentRegistry, componentSlugs } from "@/lib/component-registry";
import { playgroundRegistry } from "@/lib/playground-registry";
import { PlaygroundPanel } from "@/components/docs/PlaygroundPanel";

interface PageProps {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return componentSlugs.map((slug) => ({ slug }));
}

export default async function PlaygroundPage({ params }: PageProps) {
  const { slug } = await params;
  const entry = componentRegistry[slug];
  const playground = playgroundRegistry[slug];

  if (!entry || !playground) notFound();

  return (
    <div>
      <div style={{ marginBottom: 24 }}>
        <h1 style={{ fontSize: "1.5rem", fontWeight: 700, margin: "0 0 8px" }}>
          {entry.meta.name} Playground
        </h1>
        <p style={{ color: "var(--ui-fg-subtle)", margin: 0, fontSize: 14 }}>
          {entry.meta.description}
        </p>
      </div>
      <PlaygroundPanel
        component={playground.component}
        controls={playground.controls}
        defaultProps={playground.defaultProps}
      />
    </div>
  );
}
