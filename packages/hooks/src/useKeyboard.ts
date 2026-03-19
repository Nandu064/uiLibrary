"use client";

import { useCallback } from "react";
import type React from "react";

type KeyboardHandlerMap = Partial<Record<string, (e: React.KeyboardEvent) => void>>;

/**
 * Creates a keyboard event handler from a map of key → handler.
 *
 * @example
 * const onKeyDown = useKeyboard({
 *   ArrowUp: () => selectPrev(),
 *   ArrowDown: () => selectNext(),
 *   Escape: () => close(),
 * });
 */
export function useKeyboard(
  handlers: KeyboardHandlerMap
): (e: React.KeyboardEvent) => void {
  return useCallback(
    (e: React.KeyboardEvent) => {
      const handler = handlers[e.key];
      if (handler) {
        handler(e);
      }
    },
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [JSON.stringify(Object.keys(handlers))]
  );
}
