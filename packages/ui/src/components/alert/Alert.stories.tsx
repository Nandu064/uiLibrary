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
    dismissible: { control: "boolean" },
  },
};

export default meta;
type Story = StoryObj<typeof Alert>;

export const Default: Story = {
  args: {
    title: "Info",
    description: "This is an informational alert.",
    status: "info",
    dismissible: true,
  },
};

export const Dismissible: Story = {
  args: {
    status: "warning",
    title: "Storage almost full",
    description: "You are using 90% of your storage. Upgrade your plan to get more space.",
    dismissible: true,
  },
};

export const AllStatuses: Story = {
  render: () => (
    <div style={{ display: "flex", flexDirection: "column", gap: 12 }}>
      <Alert status="info" title="Info" description="Your profile has been updated." dismissible />
      <Alert status="success" title="Success" description="Payment processed successfully." dismissible />
      <Alert status="warning" title="Warning" description="Your session expires in 5 minutes." dismissible />
      <Alert status="error" title="Error" description="Something went wrong. Please try again." dismissible />
    </div>
  ),
};

export const Variants: Story = {
  render: () => (
    <div style={{ display: "flex", flexDirection: "column", gap: 12 }}>
      <Alert status="info" variant="subtle" title="Subtle" description="Default subtle variant." dismissible />
      <Alert status="info" variant="outline" title="Outline" description="Outline border only." dismissible />
      <Alert status="info" variant="solid" title="Solid" description="Full background fill." dismissible />
    </div>
  ),
};

export const TitleOnly: Story = {
  args: { status: "success", title: "Changes saved successfully.", dismissible: true },
};

export const WithCallback: Story = {
  render: () => (
    <Alert
      status="error"
      title="Failed to save"
      description="Please check your connection and try again."
      onClose={() => console.log("Alert closed")}
    />
  ),
};
