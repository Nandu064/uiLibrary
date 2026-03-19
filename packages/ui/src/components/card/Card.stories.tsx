import type { Meta, StoryObj } from "@storybook/react";
import { Card, CardHeader, CardBody, CardFooter } from "./Card";
import { Button } from "../button/Button";

const meta: Meta<typeof Card> = { title: "Layout/Card", component: Card, tags: ["autodocs"] };
export default meta;
type Story = StoryObj<typeof Card>;

export const Default: Story = {
  render: () => (
    <Card style={{ maxWidth: 380 }}>
      <CardHeader><strong>Card Title</strong></CardHeader>
      <CardBody><p style={{ margin: 0 }}>Card content goes here. Add any components or text.</p></CardBody>
      <CardFooter style={{ display: "flex", justifyContent: "flex-end", gap: 8 }}>
        <Button variant="ghost" size="sm">Cancel</Button>
        <Button size="sm">Confirm</Button>
      </CardFooter>
    </Card>
  ),
};

export const Variants: Story = {
  render: () => (
    <div style={{ display: "flex", gap: 16, flexWrap: "wrap" }}>
      {(["default", "elevated", "outline", "ghost"] as const).map((v) => (
        <Card key={v} variant={v} style={{ width: 200 }}>
          <CardBody><strong>{v}</strong><p style={{ margin: "4px 0 0" }}>Content</p></CardBody>
        </Card>
      ))}
    </div>
  ),
};
