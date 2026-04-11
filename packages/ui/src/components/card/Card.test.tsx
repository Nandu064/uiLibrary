import { describe, it, expect } from "vitest";
import { render, screen } from "@testing-library/react";
import { Card, CardHeader, CardBody, CardFooter } from "./Card";

describe("Card", () => {
  it("renders children", () => {
    render(<Card>Card content</Card>);
    expect(screen.getByText("Card content")).toBeInTheDocument();
  });

  it("has ui-card class", () => {
    const { container } = render(<Card>Content</Card>);
    expect(container.firstChild).toHaveClass("ui-card");
  });

  it("applies data-variant attribute", () => {
    const { container } = render(<Card variant="elevated">Elevated</Card>);
    expect(container.firstChild).toHaveAttribute("data-variant", "elevated");
  });

  it("defaults to data-variant=default", () => {
    const { container } = render(<Card>Default</Card>);
    expect(container.firstChild).toHaveAttribute("data-variant", "default");
  });
});

describe("CardHeader", () => {
  it("renders children", () => {
    render(<CardHeader>Header text</CardHeader>);
    expect(screen.getByText("Header text")).toBeInTheDocument();
  });

  it("has ui-card__header class", () => {
    const { container } = render(<CardHeader>Header</CardHeader>);
    expect(container.firstChild).toHaveClass("ui-card__header");
  });
});

describe("CardBody", () => {
  it("renders children", () => {
    render(<CardBody>Body text</CardBody>);
    expect(screen.getByText("Body text")).toBeInTheDocument();
  });

  it("has ui-card__body class", () => {
    const { container } = render(<CardBody>Body</CardBody>);
    expect(container.firstChild).toHaveClass("ui-card__body");
  });
});

describe("CardFooter", () => {
  it("renders children", () => {
    render(<CardFooter>Footer text</CardFooter>);
    expect(screen.getByText("Footer text")).toBeInTheDocument();
  });

  it("has ui-card__footer class", () => {
    const { container } = render(<CardFooter>Footer</CardFooter>);
    expect(container.firstChild).toHaveClass("ui-card__footer");
  });
});

describe("Card full composition", () => {
  it("renders header, body, and footer together", () => {
    render(
      <Card>
        <CardHeader>My Title</CardHeader>
        <CardBody>Main content here</CardBody>
        <CardFooter>Actions go here</CardFooter>
      </Card>
    );
    expect(screen.getByText("My Title")).toBeInTheDocument();
    expect(screen.getByText("Main content here")).toBeInTheDocument();
    expect(screen.getByText("Actions go here")).toBeInTheDocument();
  });
});
