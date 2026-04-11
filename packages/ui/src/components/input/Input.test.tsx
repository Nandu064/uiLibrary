import { describe, it, expect } from "vitest";
import { render, screen } from "@testing-library/react";
import { Input } from "./Input";

describe("Input", () => {
  it("renders an input element", () => {
    render(<Input />);
    expect(screen.getByRole("textbox")).toBeInTheDocument();
  });

  it("has ui-input class", () => {
    render(<Input />);
    expect(screen.getByRole("textbox")).toHaveClass("ui-input");
  });

  it("renders a label when label prop is provided", () => {
    render(<Input label="Email address" />);
    expect(screen.getByText("Email address")).toBeInTheDocument();
  });

  it("associates label with input via htmlFor", () => {
    render(<Input label="Username" />);
    expect(screen.getByLabelText("Username")).toBeInTheDocument();
  });

  it("renders helperText", () => {
    render(<Input helperText="Enter your email" />);
    expect(screen.getByText("Enter your email")).toBeInTheDocument();
  });

  it("renders errorMessage", () => {
    render(<Input errorMessage="This field is required" />);
    expect(screen.getByText("This field is required")).toBeInTheDocument();
  });

  it("errorMessage has role=alert", () => {
    render(<Input errorMessage="Invalid value" />);
    expect(screen.getByRole("alert")).toHaveTextContent("Invalid value");
  });

  it("sets aria-invalid when isInvalid=true", () => {
    render(<Input isInvalid />);
    expect(screen.getByRole("textbox")).toHaveAttribute("aria-invalid", "true");
  });

  it("sets aria-invalid when errorMessage is provided without isInvalid", () => {
    render(<Input errorMessage="Required" />);
    expect(screen.getByRole("textbox")).toHaveAttribute("aria-invalid", "true");
  });

  it("sets aria-required when isRequired=true", () => {
    render(<Input isRequired />);
    expect(screen.getByRole("textbox")).toHaveAttribute("aria-required", "true");
  });

  it("applies data-size attribute", () => {
    render(<Input size="lg" />);
    expect(screen.getByRole("textbox")).toHaveAttribute("data-size", "lg");
  });

  it("renders leftAddon text", () => {
    render(<Input leftAddon="https://" />);
    expect(screen.getByText("https://")).toBeInTheDocument();
  });

  it("renders rightAddon text", () => {
    render(<Input rightAddon=".com" />);
    expect(screen.getByText(".com")).toBeInTheDocument();
  });
});
