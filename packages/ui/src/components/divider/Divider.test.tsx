import { describe, it, expect } from "vitest";
import { render, screen } from "@testing-library/react";
import { Divider } from "./Divider";

describe("Divider", () => {
  it("has role=separator", () => {
    render(<Divider />);
    expect(screen.getByRole("separator")).toBeInTheDocument();
  });

  it("is horizontal by default (aria-orientation=horizontal)", () => {
    render(<Divider />);
    expect(screen.getByRole("separator")).toHaveAttribute("aria-orientation", "horizontal");
  });

  it("has ui-divider class by default", () => {
    render(<Divider />);
    expect(screen.getByRole("separator")).toHaveClass("ui-divider");
  });

  it("sets aria-orientation=vertical when orientation=vertical", () => {
    render(<Divider orientation="vertical" />);
    expect(screen.getByRole("separator")).toHaveAttribute("aria-orientation", "vertical");
  });

  it("renders label text when label prop is provided", () => {
    render(<Divider label="OR" />);
    expect(screen.getByText("OR")).toBeInTheDocument();
  });

  it("uses aria-label on separator when label is provided", () => {
    render(<Divider label="Section" />);
    expect(screen.getByRole("separator")).toHaveAttribute("aria-label", "Section");
  });

  it("renders with ui-divider-label class when label is provided", () => {
    render(<Divider label="Label" />);
    expect(screen.getByRole("separator")).toHaveClass("ui-divider-label");
  });
});
