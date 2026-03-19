/**
 * Concatenates all component CSS files + the global theme CSS into dist/styles.css
 */
import { readFileSync, writeFileSync, readdirSync, existsSync } from "fs";
import { join, dirname } from "path";
import { fileURLToPath } from "url";

const __dirname = dirname(fileURLToPath(import.meta.url));
const srcDir = join(__dirname, "../src");
const distDir = join(__dirname, "../dist");

// 1. Start with global styles (reset + CSS variables)
const parts = [];

const styleFiles = ["styles/reset.css", "styles/theme.css"];
for (const file of styleFiles) {
  const fullPath = join(srcDir, file);
  if (existsSync(fullPath)) {
    parts.push(`/* === ${file} === */\n${readFileSync(fullPath, "utf8")}`);
  }
}

// 2. Collect all component CSS files
function findCSSFiles(dir) {
  const files = [];
  for (const entry of readdirSync(dir, { withFileTypes: true })) {
    const fullPath = join(dir, entry.name);
    if (entry.isDirectory()) {
      files.push(...findCSSFiles(fullPath));
    } else if (entry.name.endsWith(".styles.css")) {
      files.push(fullPath);
    }
  }
  return files;
}

const componentDir = join(srcDir, "components");
if (existsSync(componentDir)) {
  const cssFiles = findCSSFiles(componentDir).sort();
  for (const file of cssFiles) {
    const name = file.split("/components/")[1]?.split("/")[0] ?? "unknown";
    parts.push(`/* === ${name} === */\n${readFileSync(file, "utf8")}`);
  }
}

// 3. Write combined output
writeFileSync(join(distDir, "styles.css"), parts.join("\n"), "utf8");
console.log(`✓ Built styles.css (${parts.length} sections)`);

// 4. Prepend "use client" directive to JS bundles (rollup strips it from banner)
const USE_CLIENT = '"use client";\n';
for (const jsFile of ["index.js", "index.mjs"]) {
  const filePath = join(distDir, jsFile);
  if (existsSync(filePath)) {
    const content = readFileSync(filePath, "utf8");
    if (!content.startsWith('"use client"')) {
      writeFileSync(filePath, USE_CLIENT + content, "utf8");
      console.log(`✓ Added "use client" to ${jsFile}`);
    }
  }
}
