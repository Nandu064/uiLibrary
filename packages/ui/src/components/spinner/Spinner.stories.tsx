import type { Meta, StoryObj } from "@storybook/react";
import { Spinner } from "./Spinner";

const meta: Meta<typeof Spinner> = { title: "Feedback/Spinner", component: Spinner, tags: ["autodocs"], parameters: { layout: "centered" } };
export default meta;
type Story = StoryObj<typeof Spinner>;

export const Default: Story = {};
export const Sizes: Story = {
  render: () => (
    <div style={{ display: "flex", gap: 16, alignItems: "center" }}>
      {(["xs", "sm", "md", "lg", "xl"] as const).map(s => <Spinner key={s} size={s} />)}
    </div>
  ),
};
export const Colored: Story = { args: { color: "var(--ui-primary)", size: "lg" } };
