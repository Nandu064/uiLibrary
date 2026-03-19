"use client";

import { useEffect, RefObject } from "react";
import { trapFocus, getFocusableElements } from "@harish-ui/utils";

/**
 * Traps keyboard focus within the referenced container when `active` is true.
 * On activation, moves focus to the first focusable element inside.
 */
export function useFocusTrap(ref: RefObject<HTMLElement | null>, active: boolean): void {
  useEffect(() => {
    if (!active || !ref.current) return;

    const container = ref.current;
    const previouslyFocused = document.activeElement as HTMLElement | null;

    // Move focus inside on open
    const focusable = getFocusableElements(container);
    focusable[0]?.focus();

    const cleanup = trapFocus(container);

    return () => {
      cleanup();
      // Restore focus on close
      previouslyFocused?.focus();
    };
  }, [active, ref]);
}
