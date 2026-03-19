import { defineConfig } from "tsup";

export default defineConfig([
  {
    entry: ["src/index.ts"],
    format: ["esm", "cjs"],
    dts: true,
    sourcemap: true,
    clean: true,
    splitting: false,
    external: ["react", "react-dom"],
    treeshake: true,
  },
  {
    entry: { "docs-meta": "src/docs-meta.ts" },
    format: ["esm", "cjs"],
    dts: true,
    sourcemap: false,
    splitting: false,
    external: ["react", "react-dom"],
    treeshake: true,
  },
]);
