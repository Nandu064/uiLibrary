import type { Meta, StoryObj } from "@storybook/react";
import { Avatar, AvatarGroup } from "./Avatar";

const meta: Meta<typeof Avatar> = {
  title: "Data Display/Avatar",
  component: Avatar,
  tags: ["autodocs"],
  parameters: { layout: "centered" },
  argTypes: {
    size: { control: "select", options: ["xs", "sm", "md", "lg", "xl"] },
    variant: { control: "select", options: ["circle", "square"] },
  },
};
export default meta;
type Story = StoryObj<typeof Avatar>;

export const WithInitials: Story = { args: { name: "John Doe" } };
export const WithImage: Story = { args: { src: "https://i.pravatar.cc/150?img=3", alt: "User avatar", name: "Jane" } };
export const AllSizes: Story = {
  render: () => (
    <div style={{ display: "flex", gap: 12, alignItems: "center" }}>
      {(["xs", "sm", "md", "lg", "xl"] as const).map(size => (
        <Avatar key={size} name="John Doe" size={size} />
      ))}
    </div>
  ),
};
export const Square: Story = { args: { name: "JS", variant: "square", size: "lg" } };
export const Placeholder: Story = { args: { size: "md" } };
export const Group: Story = {
  render: () => (
    <AvatarGroup max={3}>
      <Avatar name="Alice A" />
      <Avatar name="Bob B" />
      <Avatar name="Carol C" />
      <Avatar name="David D" />
      <Avatar name="Eve E" />
    </AvatarGroup>
  ),
};
export const WithBadge: Story = {
  args: {
    name: "John Doe",
    size: "lg",
    badge: <span style={{ width: 10, height: 10, borderRadius: "50%", background: "#22c55e", border: "2px solid white", display: "block" }} />,
  },
};
