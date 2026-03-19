import type { Meta, StoryObj } from "@storybook/react";
import { Divider } from "./Divider";

const meta: Meta<typeof Divider> = { title: "Layout/Divider", component: Divider, tags: ["autodocs"] };
export default meta;
type Story = StoryObj<typeof Divider>;

export const Horizontal: Story = {
  render: () => (
    <div style={{ padding: 20 }}>
      <p>Content above</p>
      <Divider />
      <p>Content below</p>
    </div>
  ),
};
export const WithLabel: Story = {
  render: () => (
    <div style={{ padding: 20, maxWidth: 400 }}>
      <p>Section one</p>
      <Divider label="Or continue with" />
      <p>Section two</p>
    </div>
  ),
};
export const Vertical: Story = {
  render: () => (
    <div style={{ display: "flex", height: 60, padding: 20, alignItems: "center", gap: 16 }}>
      <span>Left</span>
      <Divider orientation="vertical" />
      <span>Right</span>
    </div>
  ),
};
