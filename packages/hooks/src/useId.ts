"use client";

import { useId as useReactId } from "react";

/**
 * Returns a stable unique ID, optionally prefixed.
 * Wraps React 18's useId for consistent SSR-safe IDs.
 */
export function useId(prefix?: string): string {
  const id = useReactId();
  return prefix ? `${prefix}-${id}` : id;
}
