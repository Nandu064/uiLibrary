import type { Meta, StoryObj } from "@storybook/react";
import { Stack, HStack, VStack } from "./Stack";
import { Button } from "../button/Button";
import { Badge } from "../badge/Badge";

const meta: Meta<typeof Stack> = { title: "Layout/Stack", component: Stack, tags: ["autodocs"] };
export default meta;
type Story = StoryObj<typeof Stack>;

export const Horizontal: Story = {
  render: () => (
    <HStack gap={3} align="center">
      <Button size="sm">First</Button>
      <Button size="sm" variant="outline">Second</Button>
      <Badge colorScheme="primary">New</Badge>
    </HStack>
  ),
};
export const Vertical: Story = {
  render: () => (
    <VStack gap={2} style={{ maxWidth: 300 }}>
      <Button>First</Button>
      <Button variant="outline">Second</Button>
      <Button variant="ghost">Third</Button>
    </VStack>
  ),
};
