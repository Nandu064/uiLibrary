import { clsx, type ClassValue } from "clsx";

/**
 * Utility for composing class names. Merges clsx output without requiring
 * tailwind-merge — suitable for CSS-variable-based components.
 */
export function cn(...inputs: ClassValue[]): string {
  return clsx(inputs);
}
