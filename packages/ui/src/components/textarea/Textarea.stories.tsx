import type { Meta, StoryObj } from "@storybook/react";
import { Textarea } from "./Textarea";

const meta: Meta<typeof Textarea> = {
  title: "Forms/Textarea",
  component: Textarea,
  tags: ["autodocs"],
  parameters: { layout: "padded" },
};

export default meta;
type Story = StoryObj<typeof Textarea>;

export const Default: Story = { args: { label: "Description", placeholder: "Enter description..." } };
export const WithError: Story = { args: { label: "Bio", errorMessage: "Bio is required", isInvalid: true } };
export const WithCharCount: Story = { args: { label: "Message", maxLength: 200, showCount: true, placeholder: "Type your message..." } };
export const NoResize: Story = { args: { label: "Fixed", resize: "none", rows: 4 } };
