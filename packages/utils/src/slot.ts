import React from "react";
import { composeRefs } from "./compose";

interface SlotProps extends React.HTMLAttributes<HTMLElement> {
  children?: React.ReactNode;
}

/**
 * Merges its props onto the immediate child element.
 * Used to implement the `asChild` pattern without Radix UI.
 *
 * @example
 * <Slot className="my-class" onClick={handler}>
 *   <a href="/link">Click me</a>
 * </Slot>
 * // Renders: <a href="/link" class="my-class" onclick={handler}>Click me</a>
 */
export const Slot = React.forwardRef<HTMLElement, SlotProps>(
  ({ children, ...slotProps }, forwardedRef) => {
    // When children is an array (e.g. from conditional rendering producing false|null values),
    // find the single valid React element among them.
    const validChild = React.Children.toArray(children).find(React.isValidElement) as
      | React.ReactElement<Record<string, unknown>>
      | undefined;

    if (!validChild) {
      return React.createElement(React.Fragment, null, children);
    }

    const childProps = validChild.props as Record<string, unknown>;

    return React.cloneElement(validChild, {
      ...mergeProps(slotProps as Record<string, unknown>, childProps),
      ref: forwardedRef
        ? composeRefs(forwardedRef, (validChild as { ref?: React.Ref<HTMLElement> }).ref)
        : (validChild as { ref?: React.Ref<HTMLElement> }).ref,
    });
  }
);

Slot.displayName = "Slot";

function mergeProps(
  slotProps: Record<string, unknown>,
  childProps: Record<string, unknown>
): Record<string, unknown> {
  const merged: Record<string, unknown> = { ...childProps };

  for (const key in slotProps) {
    const slotValue = slotProps[key];
    const childValue = childProps[key];

    // Merge event handlers
    if (
      typeof slotValue === "function" &&
      typeof childValue === "function" &&
      key.startsWith("on")
    ) {
      merged[key] = (...args: unknown[]) => {
        (childValue as (...a: unknown[]) => void)(...args);
        (slotValue as (...a: unknown[]) => void)(...args);
      };
    }
    // Merge className
    else if (key === "className") {
      merged[key] = [slotValue, childValue].filter(Boolean).join(" ");
    }
    // Merge style
    else if (key === "style") {
      merged[key] = { ...(slotValue as object), ...(childValue as object) };
    }
    // Slot takes precedence for other props
    else {
      merged[key] = slotValue !== undefined ? slotValue : childValue;
    }
  }

  return merged;
}
