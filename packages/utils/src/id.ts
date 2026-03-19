let counter = 0;

/**
 * Generates a stable unique ID. Use React.useId() in components when possible.
 * This is for non-hook contexts.
 */
export function generateId(prefix = "ui"): string {
  return `${prefix}-${++counter}`;
}

/**
 * Resets the counter (for testing purposes only).
 */
export function _resetIdCounter(): void {
  counter = 0;
}
