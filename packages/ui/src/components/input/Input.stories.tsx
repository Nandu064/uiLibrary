import type { Meta, StoryObj } from "@storybook/react";
import { Input } from "./Input";

const meta: Meta<typeof Input> = {
  title: "Forms/Input",
  component: Input,
  tags: ["autodocs"],
  parameters: { layout: "padded" },
};

export default meta;
type Story = StoryObj<typeof Input>;

export const Default: Story = {
  args: {
    label: "Email address",
    placeholder: "you@example.com",
    type: "email",
  },
};

export const WithHelperText: Story = {
  args: {
    label: "Username",
    helperText: "Must be 3–20 characters",
    placeholder: "username",
  },
};

export const WithError: Story = {
  args: {
    label: "Email",
    errorMessage: "Please enter a valid email address",
    isInvalid: true,
    defaultValue: "not-an-email",
  },
};

export const Required: Story = {
  args: {
    label: "Full name",
    isRequired: true,
    placeholder: "Jane Doe",
  },
};

export const Disabled: Story = {
  args: {
    label: "Locked field",
    disabled: true,
    defaultValue: "read only value",
  },
};

export const Sizes: Story = {
  render: () => (
    <div style={{ display: "flex", flexDirection: "column", gap: "16px", maxWidth: 400 }}>
      <Input size="sm" label="Small" placeholder="Small input" />
      <Input size="md" label="Medium" placeholder="Medium input" />
      <Input size="lg" label="Large" placeholder="Large input" />
    </div>
  ),
};

export const WithAddon: Story = {
  args: {
    label: "Website",
    leftAddon: "https://",
    placeholder: "example.com",
  },
};
