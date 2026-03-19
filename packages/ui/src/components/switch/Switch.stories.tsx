import type { Meta, StoryObj } from "@storybook/react";
import { Switch } from "./Switch";

const meta: Meta<typeof Switch> = {
  title: "Forms/Switch",
  component: Switch,
  tags: ["autodocs"],
  parameters: { layout: "centered" },
  argTypes: {
    size: { control: "select", options: ["sm", "md", "lg"] },
    disabled: { control: "boolean" },
  },
};

export default meta;
type Story = StoryObj<typeof Switch>;

export const Default: Story = { args: { label: "Enable notifications" } };
export const Checked: Story = { args: { label: "Dark mode", defaultChecked: true } };
export const Disabled: Story = { args: { label: "Disabled", disabled: true } };

export const Sizes: Story = {
  render: () => (
    <div style={{ display: "flex", flexDirection: "column", gap: 16 }}>
      <Switch size="sm" label="Small" defaultChecked />
      <Switch size="md" label="Medium" defaultChecked />
      <Switch size="lg" label="Large" defaultChecked />
    </div>
  ),
};

export const Settings: Story = {
  render: () => (
    <div style={{ display: "flex", flexDirection: "column", gap: 16, width: 320 }}>
      {[
        { label: "Email notifications", defaultChecked: true },
        { label: "Push notifications", defaultChecked: false },
        { label: "Weekly digest", defaultChecked: true },
        { label: "Marketing emails", defaultChecked: false },
      ].map(({ label, defaultChecked }) => (
        <div key={label} style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
          <span style={{ fontSize: 14 }}>{label}</span>
          <Switch defaultChecked={defaultChecked} />
        </div>
      ))}
    </div>
  ),
};
