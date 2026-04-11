import { describe, it, expect, vi } from "vitest";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { Tabs, TabList, Tab, TabPanels, TabPanel } from "./Tabs";

const Fixture = ({ onChange }: { onChange?: (i: number) => void }) => (
  <Tabs onChange={onChange}>
    <TabList>
      <Tab>One</Tab>
      <Tab>Two</Tab>
      <Tab>Three</Tab>
    </TabList>
    <TabPanels>
      <TabPanel>Panel One</TabPanel>
      <TabPanel>Panel Two</TabPanel>
      <TabPanel>Panel Three</TabPanel>
    </TabPanels>
  </Tabs>
);

describe("Tabs", () => {
  it("renders all tabs", () => {
    render(<Fixture />);
    expect(screen.getAllByRole("tab")).toHaveLength(3);
  });
  it("first tab is active by default", () => {
    render(<Fixture />);
    expect(screen.getAllByRole("tab")[0]).toHaveAttribute("aria-selected", "true");
  });
  it("first panel is visible", () => {
    render(<Fixture />);
    expect(screen.getByText("Panel One")).toBeVisible();
  });
  it("other panels are hidden", () => {
    render(<Fixture />);
    expect(screen.getByText("Panel Two").closest("[role='tabpanel']")).toHaveAttribute("hidden");
  });
  it("clicking second tab makes it active", async () => {
    const user = userEvent.setup();
    render(<Fixture />);
    await user.click(screen.getAllByRole("tab")[1]);
    expect(screen.getAllByRole("tab")[1]).toHaveAttribute("aria-selected", "true");
  });
  it("clicking second tab shows its panel", async () => {
    const user = userEvent.setup();
    render(<Fixture />);
    await user.click(screen.getAllByRole("tab")[1]);
    expect(screen.getByText("Panel Two")).toBeVisible();
  });
  it("calls onChange with tab index", async () => {
    const user = userEvent.setup();
    const onChange = vi.fn();
    render(<Fixture onChange={onChange} />);
    await user.click(screen.getAllByRole("tab")[2]);
    expect(onChange).toHaveBeenCalledWith(2);
  });
  it("tablist has role=tablist", () => {
    render(<Fixture />);
    expect(screen.getByRole("tablist")).toBeInTheDocument();
  });
  it("data-variant is applied to container", () => {
    const { container } = render(
      <Tabs variant="pills">
        <TabList><Tab>T</Tab></TabList>
        <TabPanels><TabPanel>P</TabPanel></TabPanels>
      </Tabs>
    );
    expect(container.firstChild).toHaveAttribute("data-variant", "pills");
  });
});
