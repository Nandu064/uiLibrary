import type { StorybookConfig } from "@storybook/react-vite";
import { mergeConfig } from "vite";
import path from "path";

const config: StorybookConfig = {
  stories: [
    // Use an absolute path so Storybook finds stories in the monorepo on Vercel
    path.resolve(__dirname, "../../..", "packages/ui/src/**/*.stories.@(js|jsx|ts|tsx|mdx)"),
  ],
  addons: [
    "@storybook/addon-essentials",
    "@storybook/addon-interactions",
    "@storybook/addon-a11y",
  ],
  framework: {
    name: "@storybook/react-vite",
    options: {},
  },
  docs: {},
  viteFinal: async (config) => {
    const stripUseClient = () => ({
      name: "strip-use-client-directive",
      enforce: "pre" as const,
      transform(code: string, id: string) {
        if (!id.endsWith(".ts") && !id.endsWith(".tsx") && !id.endsWith(".js") && !id.endsWith(".jsx")) return;
        if (code.startsWith('"use client"') || code.startsWith("'use client'")) {
          return { code: code.replace(/^["']use client["'];?\s*/i, "") };
        }
        return null;
      },
    });

    return mergeConfig(config, {
      resolve: {
        alias: {
          "@harish-ui/utils": path.resolve(__dirname, "../../../packages/utils/src/index.ts"),
          "@harish-ui/hooks": path.resolve(__dirname, "../../../packages/hooks/src/index.ts"),
          "@harish-ui/tokens": path.resolve(__dirname, "../../../packages/tokens/src/index.ts"),
        },
      },
      build: {
        sourcemap: false, // avoid sourcemap lookup errors in Vercel logs
      },
      optimizeDeps: {
        esbuildOptions: {
          supported: {
            "use-client-directive": true, // silence esbuild directive warning
          },
        },
      },
      plugins: [stripUseClient()],
    });
  },
};

export default config;
