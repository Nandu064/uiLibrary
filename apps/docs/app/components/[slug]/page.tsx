import { notFound } from "next/navigation";
import { metaRegistry, componentSlugs } from "@/lib/meta-registry";
import { PropsTable } from "@/components/docs/PropsTable";
import { ComponentStatus } from "@/components/docs/ComponentStatus";
import { CodeBlock } from "@/components/docs/CodeBlock";
import { ComponentPlayground } from "@/components/docs/ComponentPlayground";

interface PageProps {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return componentSlugs.map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: PageProps) {
  const { slug } = await params;
  const meta = metaRegistry[slug];
  if (!meta) return {};
  return {
    title: `${meta.name} Component`,
    description: meta.description,
  };
}

export default async function ComponentPage({ params }: PageProps) {
  const { slug } = await params;
  const meta = metaRegistry[slug];

  if (!meta) notFound();

  const importCode = `import { ${meta.name} } from "@harish-ui/core";
import "@harish-ui/core/styles.css";`;

  return (
    <article>
      {/* Header */}
      <div style={{ marginBottom: 32 }}>
        <div style={{ display: "flex", alignItems: "center", gap: 12, marginBottom: 12 }}>
          <h1 style={{ fontSize: "2rem", fontWeight: 800, margin: 0 }}>{meta.name}</h1>
          <ComponentStatus status={meta.status} />
        </div>
        <p style={{ fontSize: "1.125rem", color: "var(--ui-fg-subtle)", margin: 0, lineHeight: 1.6 }}>
          {meta.description}
        </p>
      </div>

      {/* Install */}
      <section style={{ marginBottom: 40 }}>
        <h2 style={{ fontSize: "1.25rem", fontWeight: 700, marginBottom: 8 }}>Import</h2>
        <CodeBlock code={importCode} language="ts" />
      </section>

      {/* Props Table */}
      <section style={{ marginBottom: 40 }}>
        <h2 style={{ fontSize: "1.25rem", fontWeight: 700, marginBottom: 8 }}>Props</h2>
        <PropsTable props={meta.props} />
      </section>

      {/* Playground — client component receives slug, loads its own registry */}
      <section style={{ marginBottom: 40 }}>
        <h2 style={{ fontSize: "1.25rem", fontWeight: 700, marginBottom: 8 }}>Playground</h2>
        <p style={{ color: "var(--ui-fg-subtle)", marginBottom: 16, fontSize: 14 }}>
          Adjust props using the controls panel to see the component update live.
        </p>
        <ComponentPlayground slug={slug} controls={meta.playgroundConfig.controls} />
      </section>

      {/* Accessibility */}
      <section style={{ marginBottom: 40 }}>
        <h2 style={{ fontSize: "1.25rem", fontWeight: 700, marginBottom: 8 }}>Accessibility</h2>
        {meta.accessibility.keyboard.length > 0 && (
          <>
            <h3 style={{ fontSize: "1rem", fontWeight: 600, marginBottom: 8, marginTop: 16 }}>Keyboard</h3>
            <ul style={{ paddingLeft: 20, color: "var(--ui-fg-subtle)" }}>
              {meta.accessibility.keyboard.map((note) => (
                <li key={note} style={{ marginBottom: 4, lineHeight: 1.6 }}>{note}</li>
              ))}
            </ul>
          </>
        )}
        {meta.accessibility.notes.length > 0 && (
          <>
            <h3 style={{ fontSize: "1rem", fontWeight: 600, marginBottom: 8, marginTop: 16 }}>Notes</h3>
            <ul style={{ paddingLeft: 20, color: "var(--ui-fg-subtle)" }}>
              {meta.accessibility.notes.map((note) => (
                <li key={note} style={{ marginBottom: 4, lineHeight: 1.6 }}>{note}</li>
              ))}
            </ul>
          </>
        )}
      </section>
    </article>
  );
}
