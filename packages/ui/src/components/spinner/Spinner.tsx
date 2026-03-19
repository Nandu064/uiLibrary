import React from "react";
import { cn } from "@harish-ui/utils";

export type SpinnerSize = "xs" | "sm" | "md" | "lg" | "xl";

export interface SpinnerProps extends React.HTMLAttributes<HTMLSpanElement> {
  size?: SpinnerSize;
  /** Accessible label (always announced to screen readers) */
  label?: string;
  /** Show the label visually below the spinner */
  showLabel?: boolean;
  color?: string;
}

export const Spinner = React.forwardRef<HTMLSpanElement, SpinnerProps>(
  ({ className, size = "md", label = "Loading...", showLabel = false, color, style, ...props }, ref) => (
    <span
      ref={ref}
      className={cn("ui-spinner", className)}
      data-size={size}
      role="status"
      aria-label={!showLabel ? label : undefined}
      {...props}
    >
      <svg
        className="ui-spinner__svg"
        viewBox="0 0 24 24"
        fill="none"
        aria-hidden="true"
        style={{ color, ...style }}
      >
        <circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="2.5" strokeOpacity="0.25" />
        <path d="M12 2a10 10 0 0 1 10 10" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" />
      </svg>
      {showLabel ? (
        <span className="ui-spinner__label" aria-live="polite">{label}</span>
      ) : (
        <span className="ui-sr-only">{label}</span>
      )}
    </span>
  )
);

Spinner.displayName = "Spinner";
