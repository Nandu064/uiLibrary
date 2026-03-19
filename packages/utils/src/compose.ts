type AnyFunction = (...args: never[]) => unknown;

/**
 * Composes multiple event handlers into one. Each handler is called in order.
 * If `preventDefault` is called, subsequent handlers are still invoked.
 */
export function composeEventHandlers<E>(
  ...handlers: Array<((event: E) => void) | undefined>
): (event: E) => void {
  return (event: E) => {
    handlers.forEach((handler) => {
      handler?.(event);
    });
  };
}

/**
 * Composes multiple functions into one. Each function is called with the same arguments.
 */
export function composeRefs<T>(
  ...refs: Array<React.Ref<T> | undefined>
): React.RefCallback<T> {
  return (node: T | null) => {
    refs.forEach((ref) => {
      if (typeof ref === "function") {
        ref(node);
      } else if (ref != null) {
        (ref as React.MutableRefObject<T | null>).current = node;
      }
    });
  };
}

export type { AnyFunction };

import type React from "react";
