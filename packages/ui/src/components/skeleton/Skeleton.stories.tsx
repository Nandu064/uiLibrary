import type { Meta, StoryObj } from "@storybook/react";
import { Skeleton } from "./Skeleton";

const meta: Meta<typeof Skeleton> = {
  title: "Feedback/Skeleton",
  component: Skeleton,
  tags: ["autodocs"],
  parameters: { layout: "padded" },
};

export default meta;
type Story = StoryObj<typeof Skeleton>;

export const Default: Story = { args: { width: 300, height: 20 } };

export const TextLines: Story = {
  render: () => (
    <div style={{ display: "flex", flexDirection: "column", gap: 8, width: 320 }}>
      <Skeleton variant="text" width="80%" height={20} />
      <Skeleton variant="text" width="100%" height={20} />
      <Skeleton variant="text" width="60%" height={20} />
    </div>
  ),
};

export const CardSkeleton: Story = {
  render: () => (
    <div style={{ display: "flex", gap: 12, width: 320 }}>
      <Skeleton variant="circular" width={48} height={48} />
      <div style={{ flex: 1, display: "flex", flexDirection: "column", gap: 8 }}>
        <Skeleton variant="text" width="70%" height={16} />
        <Skeleton variant="text" width="90%" height={16} />
        <Skeleton variant="text" width="50%" height={16} />
      </div>
    </div>
  ),
};

export const ImageSkeleton: Story = {
  render: () => (
    <div style={{ display: "flex", flexDirection: "column", gap: 12, width: 300 }}>
      <Skeleton variant="rectangular" width={300} height={180} />
      <Skeleton variant="text" width="80%" height={20} />
      <Skeleton variant="text" width="60%" height={16} />
    </div>
  ),
};
