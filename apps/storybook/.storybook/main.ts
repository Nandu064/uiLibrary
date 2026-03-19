import type { StorybookConfig } from "@storybook/react-vite";
import { mergeConfig } from "vite";
import path from "path";

const config: StorybookConfig = {
  stories: [
    "../../packages/ui/src/**/*.stories.@(js|jsx|ts|tsx|mdx)",
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
    return mergeConfig(config, {
      resolve: {
        alias: {
          "@harish-ui/utils": path.resolve(__dirname, "../../../packages/utils/src/index.ts"),
          "@harish-ui/hooks": path.resolve(__dirname, "../../../packages/hooks/src/index.ts"),
          "@harish-ui/tokens": path.resolve(__dirname, "../../../packages/tokens/src/index.ts"),
        },
      },
    });
  },
};

export default config;
