import type { Meta, StoryObj } from "@storybook/react";
import { Label } from "./Label";

const meta: Meta<typeof Label> = { title: "Forms/Label", component: Label, tags: ["autodocs"] };
export default meta;
type Story = StoryObj<typeof Label>;

export const Default: Story = { args: { children: "Email address", htmlFor: "email" } };
export const Required: Story = { args: { children: "Password", isRequired: true, htmlFor: "pass" } };
export const Disabled: Story = { args: { children: "Locked field", isDisabled: true } };
