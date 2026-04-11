import { describe, it, expect } from "vitest";
import { render, screen } from "@testing-library/react";
import { Skeleton } from "./Skeleton";

describe("Skeleton", () => {
  it("renders skeleton element", () => {
    const { container } = render(<Skeleton />);
    expect(container.querySelector(".ui-skeleton")).toBeInTheDocument();
  });

  it("has ui-skeleton class", () => {
    const { container } = render(<Skeleton />);
    expect(container.firstChild).toHaveClass("ui-skeleton");
  });

  it("data-variant attribute applied", () => {
    const { container } = render(<Skeleton variant="circular" />);
    expect(container.firstChild).toHaveAttribute("data-variant", "circular");
  });

  it("aria-hidden='true' on the element", () => {
    const { container } = render(<Skeleton />);
    expect(container.firstChild).toHaveAttribute("aria-hidden", "true");
  });

  it("width style applied when width prop is a string", () => {
    const { container } = render(<Skeleton width="200px" />);
    expect(container.firstChild).toHaveStyle({ width: "200px" });
  });

  it("height style applied when height prop is a string", () => {
    const { container } = render(<Skeleton height="20px" />);
    expect(container.firstChild).toHaveStyle({ height: "20px" });
  });
});
