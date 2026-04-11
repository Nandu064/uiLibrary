import { describe, it, expect } from "vitest";
import { render, screen } from "@testing-library/react";
import { Stack, HStack, VStack } from "./Stack";

describe("Stack", () => {
  it("renders children", () => {
    render(<Stack><span>Child</span></Stack>);
    expect(screen.getByText("Child")).toBeInTheDocument();
  });

  it("has ui-stack class", () => {
    const { container } = render(<Stack />);
    expect(container.firstChild).toHaveClass("ui-stack");
  });

  it("HStack has data-direction='row'", () => {
    const { container } = render(<HStack />);
    expect(container.firstChild).toHaveAttribute("data-direction", "row");
  });

  it("VStack has data-direction='column'", () => {
    const { container } = render(<VStack />);
    expect(container.firstChild).toHaveAttribute("data-direction", "column");
  });

  it("renders custom 'as' element: as='ul' renders a <ul>", () => {
    const { container } = render(<Stack as="ul"><li>Item</li></Stack>);
    expect(container.querySelector("ul")).toBeInTheDocument();
    expect(container.querySelector("div")).not.toBeInTheDocument();
  });
});
