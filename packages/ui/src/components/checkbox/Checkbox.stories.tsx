import type { Meta, StoryObj } from "@storybook/react";
import { Checkbox } from "./Checkbox";

const meta: Meta<typeof Checkbox> = {
  title: "Forms/Checkbox",
  component: Checkbox,
  tags: ["autodocs"],
  parameters: { layout: "centered" },
};

export default meta;
type Story = StoryObj<typeof Checkbox>;

export const Default: Story = { args: { label: "Accept terms and conditions" } };
export const Checked: Story = { args: { label: "Checked by default", defaultChecked: true } };
export const Indeterminate: Story = { args: { label: "Indeterminate state", indeterminate: true } };
export const Disabled: Story = { args: { label: "Disabled checkbox", disabled: true } };
export const DisabledChecked: Story = { args: { label: "Disabled and checked", disabled: true, defaultChecked: true } };

export const Group: Story = {
  render: () => (
    <div style={{ display: "flex", flexDirection: "column", gap: 10 }}>
      <Checkbox label="Email notifications" defaultChecked />
      <Checkbox label="SMS notifications" />
      <Checkbox label="Push notifications" defaultChecked />
      <Checkbox label="Marketing emails" disabled />
    </div>
  ),
};
