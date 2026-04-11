import { describe, it, expect } from "vitest";
import { render, screen } from "@testing-library/react";
import { Badge } from "./Badge";

describe("Badge", () => {
  it("renders children", () => {
    render(<Badge>New</Badge>);
    expect(screen.getByText("New")).toBeInTheDocument();
  });

  it("has ui-badge class", () => {
    render(<Badge>Label</Badge>);
    expect(screen.getByText("Label")).toHaveClass("ui-badge");
  });

  it("renders as a span element", () => {
    render(<Badge>Tag</Badge>);
    expect(screen.getByText("Tag").tagName).toBe("SPAN");
  });

  it("applies data-variant attribute", () => {
    render(<Badge variant="solid">Solid</Badge>);
    expect(screen.getByText("Solid")).toHaveAttribute("data-variant", "solid");
  });

  it("applies data-color attribute from colorScheme", () => {
    render(<Badge colorScheme="blue">Blue</Badge>);
    expect(screen.getByText("Blue")).toHaveAttribute("data-color", "blue");
  });

  it("applies data-size attribute", () => {
    render(<Badge size="lg">Large</Badge>);
    expect(screen.getByText("Large")).toHaveAttribute("data-size", "lg");
  });

  it("defaults to data-variant=subtle", () => {
    render(<Badge>Default</Badge>);
    expect(screen.getByText("Default")).toHaveAttribute("data-variant", "subtle");
  });

  it("defaults to data-color=neutral", () => {
    render(<Badge>Default</Badge>);
    expect(screen.getByText("Default")).toHaveAttribute("data-color", "neutral");
  });

  it("defaults to data-size=md", () => {
    render(<Badge>Default</Badge>);
    expect(screen.getByText("Default")).toHaveAttribute("data-size", "md");
  });
});
