import type { Meta, StoryObj } from "@storybook/react";
import { Tabs, TabList, Tab, TabPanels, TabPanel } from "./Tabs";
import React from "react";

const meta: Meta<typeof Tabs> = {
  title: "Navigation/Tabs",
  component: Tabs,
  tags: ["autodocs"],
  parameters: { layout: "padded" },
};
export default meta;
type Story = StoryObj<typeof Tabs>;

const Demo = (props: React.ComponentProps<typeof Tabs>) => (
  <Tabs {...props}>
    <TabList>
      <Tab>Profile</Tab>
      <Tab>Settings</Tab>
      <Tab>Notifications</Tab>
    </TabList>
    <TabPanels>
      <TabPanel><p style={{ padding: "12px 0" }}>Profile content here.</p></TabPanel>
      <TabPanel><p style={{ padding: "12px 0" }}>Settings content here.</p></TabPanel>
      <TabPanel><p style={{ padding: "12px 0" }}>Notifications content here.</p></TabPanel>
    </TabPanels>
  </Tabs>
);

export const Line: Story = { render: (a) => <Demo {...a} />, args: { variant: "line" } };
export const Enclosed: Story = { render: (a) => <Demo {...a} />, args: { variant: "enclosed" } };
export const Pills: Story = { render: (a) => <Demo {...a} />, args: { variant: "pills" } };
