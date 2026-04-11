import { describe, it, expect } from "vitest";
import { render, screen } from "@testing-library/react";
import { Progress } from "./Progress";

describe("Progress", () => {
  it("renders with role='progressbar'", () => {
    render(<Progress value={50} />);
    expect(screen.getByRole("progressbar")).toBeInTheDocument();
  });

  it("aria-valuenow equals value prop", () => {
    render(<Progress value={42} />);
    expect(screen.getByRole("progressbar")).toHaveAttribute("aria-valuenow", "42");
  });

  it("has aria-valuemin=0 and aria-valuemax=100 by default", () => {
    render(<Progress value={50} />);
    const bar = screen.getByRole("progressbar");
    expect(bar).toHaveAttribute("aria-valuemin", "0");
    expect(bar).toHaveAttribute("aria-valuemax", "100");
  });

  it("negative value: aria-valuenow still reflects the raw value prop", () => {
    // The component passes value directly to aria-valuenow; clamping only affects the visual fill.
    render(<Progress value={-10} />);
    // aria-valuenow reflects the raw prop value
    expect(screen.getByRole("progressbar")).toHaveAttribute("aria-valuenow", "-10");
  });

  it("value > max: aria-valuenow still reflects the raw value prop", () => {
    render(<Progress value={150} max={100} />);
    expect(screen.getByRole("progressbar")).toHaveAttribute("aria-valuenow", "150");
  });

  it("label prop renders label text", () => {
    render(<Progress value={50} label="Upload progress" />);
    expect(screen.getByText("Upload progress")).toBeInTheDocument();
  });

  it("showValue=true renders percentage text", () => {
    render(<Progress value={50} showValue />);
    expect(screen.getByText("50%")).toBeInTheDocument();
  });

  it("data-size attribute applied to track", () => {
    render(<Progress value={50} size="lg" />);
    const track = screen.getByRole("progressbar");
    expect(track).toHaveAttribute("data-size", "lg");
  });

  it("data-color attribute applied to root", () => {
    render(<Progress value={50} color="success" />);
    // data-color is on the root div, not the progressbar
    const root = screen.getByRole("progressbar").closest(".ui-progress");
    expect(root).toHaveAttribute("data-color", "success");
  });
});
