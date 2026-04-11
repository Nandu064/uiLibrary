import { describe, it, expect } from "vitest";
import { render, screen } from "@testing-library/react";
import { Label } from "./Label";

describe("Label", () => {
  it("renders label text", () => {
    render(<Label>First name</Label>);
    expect(screen.getByText("First name")).toBeInTheDocument();
  });

  it("renders as a label element", () => {
    render(<Label>My label</Label>);
    // getByText returns the element, check its tag
    expect(screen.getByText("My label").tagName).toBe("LABEL");
  });

  it("has ui-label class", () => {
    render(<Label>Styled label</Label>);
    expect(screen.getByText("Styled label")).toHaveClass("ui-label");
  });

  it("shows asterisk marker when isRequired=true", () => {
    render(<Label isRequired>Password</Label>);
    // The asterisk span is aria-hidden so query by the container
    const labelEl = screen.getByText("Password").closest("label") ?? screen.getByText("Password");
    expect(labelEl).toHaveTextContent("*");
  });

  it("sets data-disabled when isDisabled=true", () => {
    render(<Label isDisabled>Disabled label</Label>);
    expect(screen.getByText("Disabled label")).toHaveAttribute("data-disabled");
  });

  it("forwards htmlFor to the label element", () => {
    render(<Label htmlFor="email-input">Email</Label>);
    const labelEl = screen.getByText("Email");
    expect(labelEl).toHaveAttribute("for", "email-input");
  });
});
