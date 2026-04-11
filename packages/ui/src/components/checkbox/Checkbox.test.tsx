import { describe, it, expect, vi } from "vitest";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { Checkbox } from "./Checkbox";

describe("Checkbox", () => {
  it("renders label text", () => {
    render(<Checkbox label="Accept terms" />);
    expect(screen.getByText("Accept terms")).toBeInTheDocument();
  });

  it("renders a checkbox input", () => {
    render(<Checkbox label="Check me" />);
    expect(screen.getByRole("checkbox")).toBeInTheDocument();
  });

  it("is unchecked by default", () => {
    render(<Checkbox label="Unchecked" />);
    expect(screen.getByRole("checkbox")).not.toBeChecked();
  });

  it("is checked when defaultChecked=true", () => {
    render(<Checkbox label="Pre-checked" defaultChecked />);
    expect(screen.getByRole("checkbox")).toBeChecked();
  });

  it("calls onChange with true when clicked (uncontrolled)", async () => {
    const user = userEvent.setup();
    const onChange = vi.fn();
    render(<Checkbox label="Click me" onChange={onChange} />);
    await user.click(screen.getByRole("checkbox"));
    expect(onChange).toHaveBeenCalledWith(true);
  });

  it("does not call onChange when disabled", async () => {
    const user = userEvent.setup();
    const onChange = vi.fn();
    render(<Checkbox label="Disabled" disabled onChange={onChange} />);
    await user.click(screen.getByRole("checkbox"));
    expect(onChange).not.toHaveBeenCalled();
  });

  it("sets aria-checked=mixed when indeterminate", () => {
    render(<Checkbox label="Indeterminate" indeterminate />);
    expect(screen.getByRole("checkbox")).toHaveAttribute("aria-checked", "mixed");
  });

  it("sets data-disabled when disabled", () => {
    render(<Checkbox label="Disabled" disabled />);
    // data-disabled is on the wrapping label element
    const checkbox = screen.getByRole("checkbox");
    expect(checkbox.closest("label")).toHaveAttribute("data-disabled");
  });

  it("sets data-checked on wrapper when controlled checked=true", () => {
    render(<Checkbox label="Controlled" checked onChange={vi.fn()} />);
    const checkbox = screen.getByRole("checkbox");
    expect(checkbox.closest("label")).toHaveAttribute("data-checked");
  });
});
