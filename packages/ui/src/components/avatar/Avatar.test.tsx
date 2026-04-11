import { describe, it, expect } from "vitest";
import { render, screen } from "@testing-library/react";
import { Avatar, AvatarGroup } from "./Avatar";

describe("Avatar", () => {
  it("renders initials from two-word name", () => {
    render(<Avatar name="John Doe" />);
    expect(screen.getByText("JD")).toBeInTheDocument();
  });
  it("renders single initial for single word name", () => {
    render(<Avatar name="John" />);
    expect(screen.getByText("J")).toBeInTheDocument();
  });
  it("renders img when src is provided", () => {
    render(<Avatar src="https://example.com/avatar.jpg" alt="User avatar" />);
    expect(screen.getByRole("img")).toHaveAttribute("src", "https://example.com/avatar.jpg");
  });
  it("applies data-size attribute", () => {
    const { container } = render(<Avatar name="AB" size="lg" />);
    expect(container.firstChild).toHaveAttribute("data-size", "lg");
  });
  it("applies data-variant attribute", () => {
    const { container } = render(<Avatar name="AB" variant="square" />);
    expect(container.firstChild).toHaveAttribute("data-variant", "square");
  });
  it("has ui-avatar class", () => {
    const { container } = render(<Avatar name="AB" />);
    expect(container.firstChild).toHaveClass("ui-avatar");
  });
});

describe("AvatarGroup", () => {
  it("renders all avatars when count within max", () => {
    render(
      <AvatarGroup max={5}>
        <Avatar name="Alice A" />
        <Avatar name="Bob B" />
      </AvatarGroup>
    );
    expect(screen.getByText("AA")).toBeInTheDocument();
    expect(screen.getByText("BB")).toBeInTheDocument();
  });
  it("shows +N overflow when count exceeds max", () => {
    render(
      <AvatarGroup max={2}>
        <Avatar name="Alice A" />
        <Avatar name="Bob B" />
        <Avatar name="Carol C" />
        <Avatar name="David D" />
      </AvatarGroup>
    );
    expect(screen.getByText("+2")).toBeInTheDocument();
  });
  it("has ui-avatar-group class", () => {
    const { container } = render(<AvatarGroup><Avatar name="A B" /></AvatarGroup>);
    expect(container.firstChild).toHaveClass("ui-avatar-group");
  });
});
