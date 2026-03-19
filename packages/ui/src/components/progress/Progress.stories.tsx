import type { Meta, StoryObj } from "@storybook/react";
import { Progress } from "./Progress";

const meta: Meta<typeof Progress> = {
  title: "Feedback/Progress",
  component: Progress,
  tags: ["autodocs"],
  parameters: { layout: "padded" },
  argTypes: {
    value: { control: { type: "range", min: 0, max: 100 } },
    size: { control: "select", options: ["xs", "sm", "md", "lg"] },
    color: { control: "select", options: ["primary", "success", "danger", "warning"] },
    striped: { control: "boolean" },
    animated: { control: "boolean" },
    showValue: { control: "boolean" },
  },
};

export default meta;
type Story = StoryObj<typeof Progress>;

export const Default: Story = { args: { value: 60, label: "Upload progress", showValue: true } };
export const Sizes: Story = {
  render: () => (
    <div style={{ display: "flex", flexDirection: "column", gap: 12, width: 400 }}>
      <Progress size="xs" value={40} />
      <Progress size="sm" value={55} />
      <Progress size="md" value={70} />
      <Progress size="lg" value={85} />
    </div>
  ),
};
export const Colors: Story = {
  render: () => (
    <div style={{ display: "flex", flexDirection: "column", gap: 12, width: 400 }}>
      <Progress color="primary" value={60} label="Primary" showValue />
      <Progress color="success" value={80} label="Success" showValue />
      <Progress color="warning" value={45} label="Warning" showValue />
      <Progress color="danger" value={25} label="Danger" showValue />
    </div>
  ),
};
export const Striped: Story = { args: { value: 65, striped: true, label: "Installing...", showValue: true } };
export const Animated: Story = { args: { value: 65, striped: true, animated: true, label: "Processing...", showValue: true } };
