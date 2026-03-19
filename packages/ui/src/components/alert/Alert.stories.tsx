import type { Meta, StoryObj } from "@storybook/react";
import { Alert } from "./Alert";

const meta: Meta<typeof Alert> = {
  title: "Feedback/Alert",
  component: Alert,
  tags: ["autodocs"],
  parameters: { layout: "padded" },
  argTypes: {
    status: { control: "select", options: ["info", "success", "warning", "error"] },
    variant: { control: "select", options: ["subtle", "solid", "outline"] },
    title: { control: "text" },
    description: { control: "text" },
  },
};

export default meta;
type Story = StoryObj<typeof Alert>;

export const Default: Story = {
  args: { title: "Info", description: "This is an informational alert.", status: "info" },
};

export const AllStatuses: Story = {
  render: () => (
    <div style={{ display: "flex", flexDirection: "column", gap: 12 }}>
      <Alert status="info" title="Info" description="Your profile has been updated." />
      <Alert status="success" title="Success" description="Payment processed successfully." />
      <Alert status="warning" title="Warning" description="Your session expires in 5 minutes." />
      <Alert status="error" title="Error" description="Something went wrong. Please try again." />
    </div>
  ),
};

export const Solid: Story = {
  render: () => (
    <div style={{ display: "flex", flexDirection: "column", gap: 12 }}>
      <Alert status="info" variant="solid" title="Info" description="Informational message." />
      <Alert status="success" variant="solid" title="Success" description="Action completed." />
      <Alert status="error" variant="solid" title="Error" description="Something went wrong." />
    </div>
  ),
};

export const Dismissible: Story = {
  render: () => (
    <Alert
      status="warning"
      title="Storage almost full"
      description="You are using 90% of your storage. Upgrade to get more."
      onClose={() => alert("closed")}
    />
  ),
};
