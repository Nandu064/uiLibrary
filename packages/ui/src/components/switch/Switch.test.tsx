import { describe, it, expect, vi } from "vitest";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { Switch } from "./Switch";

describe("Switch", () => {
  it("renders label text", () => {
    render(<Switch label="Enable notifications" />);
    expect(screen.getByText("Enable notifications")).toBeInTheDocument();
  });

  it("has role='switch' on the input element", () => {
    render(<Switch label="Toggle" />);
    expect(screen.getByRole("switch")).toBeInTheDocument();
  });

  it("aria-checked='false' by default", () => {
    render(<Switch label="Toggle" />);
    expect(screen.getByRole("switch")).toHaveAttribute("aria-checked", "false");
  });

  it("aria-checked='true' when defaultChecked=true", () => {
    render(<Switch label="Toggle" defaultChecked />);
    expect(screen.getByRole("switch")).toHaveAttribute("aria-checked", "true");
  });

  it("clicking switch calls onChange with true", async () => {
    const user = userEvent.setup();
    const onChange = vi.fn();
    render(<Switch label="Toggle" onChange={onChange} />);
    await user.click(screen.getByRole("switch"));
    expect(onChange).toHaveBeenCalledWith(true);
  });

  it("clicking switch when disabled does NOT call onChange", async () => {
    const user = userEvent.setup();
    const onChange = vi.fn();
    render(<Switch label="Toggle" disabled onChange={onChange} />);
    await user.click(screen.getByRole("switch"));
    expect(onChange).not.toHaveBeenCalled();
  });

  it("data-size attribute applied to root label", () => {
    const { container } = render(<Switch label="Toggle" size="lg" />);
    expect(container.firstChild).toHaveAttribute("data-size", "lg");
  });

  it("data-checked is set when controlled checked=true", () => {
    const { container } = render(
      <Switch label="Toggle" checked onChange={vi.fn()} />
    );
    expect(container.firstChild).toHaveAttribute("data-checked");
  });
});
