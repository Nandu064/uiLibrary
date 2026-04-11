import { describe, it, expect } from "vitest";
import { render, screen } from "@testing-library/react";
import { Spinner } from "./Spinner";

describe("Spinner", () => {
  it("renders with role='status'", () => {
    render(<Spinner />);
    expect(screen.getByRole("status")).toBeInTheDocument();
  });

  it("default aria-label is 'Loading...'", () => {
    render(<Spinner />);
    expect(screen.getByRole("status")).toHaveAttribute("aria-label", "Loading...");
  });

  it("custom label prop updates aria-label", () => {
    render(<Spinner label="Please wait" />);
    expect(screen.getByRole("status")).toHaveAttribute("aria-label", "Please wait");
  });

  it("data-size attribute applied", () => {
    render(<Spinner size="lg" />);
    expect(screen.getByRole("status")).toHaveAttribute("data-size", "lg");
  });

  it("showLabel=true renders visible label text in .ui-spinner__label span", () => {
    render(<Spinner label="Loading..." showLabel />);
    const labelSpan = document.querySelector(".ui-spinner__label");
    expect(labelSpan).toBeInTheDocument();
    expect(labelSpan).toHaveTextContent("Loading...");
  });

  it("without showLabel, label is in sr-only span and there is no .ui-spinner__label", () => {
    render(<Spinner label="Loading..." />);
    // The visible label span should NOT be rendered
    expect(document.querySelector(".ui-spinner__label")).not.toBeInTheDocument();
    // The sr-only span still contains the text
    const srOnly = document.querySelector(".ui-sr-only");
    expect(srOnly).toBeInTheDocument();
    expect(srOnly).toHaveTextContent("Loading...");
  });
});
