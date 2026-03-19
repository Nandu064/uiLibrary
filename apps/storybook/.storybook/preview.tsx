import type { Preview, Decorator } from "@storybook/react";
import React from "react";
import { ThemeProvider } from "../../../packages/ui/src/theme/ThemeProvider";
import "../../../packages/ui/src/styles/reset.css";
import "../../../packages/ui/src/styles/theme.css";

// Import all component CSS files directly from source
import "../../../packages/ui/src/components/button/Button.styles.css";
import "../../../packages/ui/src/components/input/Input.styles.css";
import "../../../packages/ui/src/components/textarea/Textarea.styles.css";
import "../../../packages/ui/src/components/label/Label.styles.css";
import "../../../packages/ui/src/components/badge/Badge.styles.css";
import "../../../packages/ui/src/components/card/Card.styles.css";
import "../../../packages/ui/src/components/stack/Stack.styles.css";
import "../../../packages/ui/src/components/divider/Divider.styles.css";
import "../../../packages/ui/src/components/spinner/Spinner.styles.css";
import "../../../packages/ui/src/components/alert/Alert.styles.css";
import "../../../packages/ui/src/components/checkbox/Checkbox.styles.css";
import "../../../packages/ui/src/components/switch/Switch.styles.css";
import "../../../packages/ui/src/components/progress/Progress.styles.css";
import "../../../packages/ui/src/components/skeleton/Skeleton.styles.css";

const withTheme: Decorator = (Story, context) => {
  const theme = context.globals.theme ?? "light";
  return (
    <ThemeProvider theme={theme}>
      <div style={{ padding: "24px", fontFamily: "inherit" }}>
        <Story />
      </div>
    </ThemeProvider>
  );
};

const preview: Preview = {
  decorators: [withTheme],
  globalTypes: {
    theme: {
      name: "Theme",
      description: "Global theme",
      defaultValue: "light",
      toolbar: {
        icon: "circlehollow",
        items: [
          { value: "light", icon: "sun", title: "Light" },
          { value: "dark", icon: "moon", title: "Dark" },
        ],
        showName: true,
        dynamicTitle: true,
      },
    },
  },
  parameters: {
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
    layout: "padded",
  },
};

export default preview;
