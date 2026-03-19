import { notFound } from "next/navigation";
import path from "path";
import fs from "fs/promises";

interface PageProps {
  params: Promise<{ slug?: string[] }>;
}

export default async function DocsPage({ params }: PageProps) {
  const { slug = ["getting-started", "introduction"] } = await params;
  const slugPath = slug.join("/");

  // Try to load MDX content
  const contentDir = path.join(process.cwd(), "content");
  const possiblePaths = [
    path.join(contentDir, `${slugPath}.mdx`),
    path.join(contentDir, `${slugPath}/index.mdx`),
  ];

  let found = false;
  for (const p of possiblePaths) {
    try {
      await fs.access(p);
      found = true;
      break;
    } catch {
      // continue
    }
  }

  if (!found) {
    // Show a placeholder for paths we haven't written yet
    return (
      <div>
        <h1 style={{ fontSize: "2rem", fontWeight: 800, marginBottom: 16 }}>
          {slug[slug.length - 1]
            ?.split("-")
            .map((w) => w[0]?.toUpperCase() + w.slice(1))
            .join(" ") ?? "Documentation"}
        </h1>
        <p style={{ color: "var(--ui-fg-subtle)" }}>
          This page is coming soon. Check back after the first stable release.
        </p>
      </div>
    );
  }

  notFound();
}
