import type { Meta, StoryObj } from "@storybook/react";
import { Badge } from "./Badge";

const meta: Meta<typeof Badge> = { title: "Data Display/Badge", component: Badge, tags: ["autodocs"] };
export default meta;
type Story = StoryObj<typeof Badge>;

export const Default: Story = { args: { children: "Badge" } };
export const Variants: Story = {
  render: () => (
    <div style={{ display: "flex", gap: 8 }}>
      <Badge variant="solid" colorScheme="primary">Solid</Badge>
      <Badge variant="subtle" colorScheme="primary">Subtle</Badge>
      <Badge variant="outline" colorScheme="primary">Outline</Badge>
    </div>
  ),
};
export const Colors: Story = {
  render: () => (
    <div style={{ display: "flex", gap: 8 }}>
      <Badge colorScheme="primary">Primary</Badge>
      <Badge colorScheme="success">Success</Badge>
      <Badge colorScheme="warning">Warning</Badge>
      <Badge colorScheme="danger">Danger</Badge>
      <Badge colorScheme="neutral">Neutral</Badge>
    </div>
  ),
};
