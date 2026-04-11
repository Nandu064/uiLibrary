import { describe, it, expect, vi } from "vitest";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { Textarea } from "./Textarea";

describe("Textarea", () => {
  it("renders textarea element", () => {
    render(<Textarea />);
    expect(screen.getByRole("textbox")).toBeInTheDocument();
  });

  it("renders label when label prop provided", () => {
    render(<Textarea label="Description" />);
    expect(screen.getByText("Description")).toBeInTheDocument();
  });

  it("label is associated with textarea via htmlFor", () => {
    render(<Textarea label="Description" />);
    const textarea = screen.getByRole("textbox");
    const label = screen.getByText("Description").closest("label");
    expect(label).toHaveAttribute("for", textarea.id);
  });

  it("renders helperText text", () => {
    render(<Textarea helperText="Enter a description" />);
    expect(screen.getByText("Enter a description")).toBeInTheDocument();
  });

  it("renders errorMessage text", () => {
    render(<Textarea errorMessage="This field is required" />);
    expect(screen.getByText("This field is required")).toBeInTheDocument();
  });

  it("aria-invalid when isInvalid=true", () => {
    render(<Textarea isInvalid />);
    expect(screen.getByRole("textbox")).toHaveAttribute("aria-invalid", "true");
  });

  it("aria-required when isRequired=true", () => {
    render(<Textarea isRequired />);
    expect(screen.getByRole("textbox")).toHaveAttribute("aria-required", "true");
  });

  it("showCount=true + maxLength=100 renders '0/100' text initially", () => {
    render(<Textarea showCount maxLength={100} />);
    expect(screen.getByText("0/100")).toBeInTheDocument();
  });

  it("typing in textarea updates character count", async () => {
    const user = userEvent.setup();
    render(<Textarea showCount maxLength={100} />);
    await user.type(screen.getByRole("textbox"), "hello");
    expect(screen.getByText("5/100")).toBeInTheDocument();
  });

  it("data-resize attribute is NOT used — resize is applied as inline style", () => {
    render(<Textarea resize="none" />);
    const textarea = screen.getByRole("textbox");
    // resize is applied via inline style, not data-resize
    expect(textarea).toHaveStyle({ resize: "none" });
  });
});
