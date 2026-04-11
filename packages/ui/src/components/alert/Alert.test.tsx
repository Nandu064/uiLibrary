import { describe, it, expect, vi } from "vitest";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { Alert } from "./Alert";

describe("Alert", () => {
  it("renders with role=alert", () => {
    render(<Alert />);
    expect(screen.getByRole("alert")).toBeInTheDocument();
  });

  it("renders title", () => {
    render(<Alert title="Something went wrong" />);
    expect(screen.getByText("Something went wrong")).toBeInTheDocument();
  });

  it("renders description", () => {
    render(<Alert description="Please try again later." />);
    expect(screen.getByText("Please try again later.")).toBeInTheDocument();
  });

  it("renders children", () => {
    render(<Alert><span>Custom child</span></Alert>);
    expect(screen.getByText("Custom child")).toBeInTheDocument();
  });

  it("applies data-status attribute", () => {
    render(<Alert status="warning" />);
    expect(screen.getByRole("alert")).toHaveAttribute("data-status", "warning");
  });

  it("applies data-variant attribute", () => {
    render(<Alert variant="solid" />);
    expect(screen.getByRole("alert")).toHaveAttribute("data-variant", "solid");
  });

  it("does not show close button by default", () => {
    render(<Alert />);
    expect(screen.queryByRole("button", { name: "Dismiss alert" })).not.toBeInTheDocument();
  });

  it("shows close button when dismissible=true", () => {
    render(<Alert dismissible />);
    expect(screen.getByRole("button", { name: "Dismiss alert" })).toBeInTheDocument();
  });

  it("shows close button when onClose is provided", () => {
    render(<Alert onClose={vi.fn()} />);
    expect(screen.getByRole("button", { name: "Dismiss alert" })).toBeInTheDocument();
  });

  it("hides alert when close button is clicked", async () => {
    const user = userEvent.setup();
    render(<Alert dismissible title="Visible alert" />);
    expect(screen.getByRole("alert")).toBeInTheDocument();
    await user.click(screen.getByRole("button", { name: "Dismiss alert" }));
    expect(screen.queryByRole("alert")).not.toBeInTheDocument();
  });

  it("calls onClose callback when close button is clicked", async () => {
    const user = userEvent.setup();
    const onClose = vi.fn();
    render(<Alert onClose={onClose} />);
    await user.click(screen.getByRole("button", { name: "Dismiss alert" }));
    expect(onClose).toHaveBeenCalledOnce();
  });
});
