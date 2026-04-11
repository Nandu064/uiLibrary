import React from "react";
import { cn } from "@harish-ui/utils";

export type ProgressSize = "xs" | "sm" | "md" | "lg";
export type ProgressColor = "primary" | "success" | "danger" | "warning";

export interface ProgressProps extends React.HTMLAttributes<HTMLDivElement> {
  value?: number;
  max?: number;
  size?: ProgressSize;
  color?: ProgressColor;
  label?: string;
  showValue?: boolean;
  striped?: boolean;
  animated?: boolean;
}

export const Progress = React.forwardRef<HTMLDivElement, ProgressProps>(
  (
    {
      className,
      value = 0,
      max = 100,
      size = "md",
      color = "primary",
      label,
      showValue = false,
      striped = false,
      animated = false,
      "aria-label": ariaLabel,
      "aria-labelledby": ariaLabelledby,
      ...props
    },
    ref
  ) => {
    const safeMax = max > 0 ? max : 100;
    const clampedValue = Math.min(Math.max(value, 0), safeMax);
    const percentage = Math.min(100, Math.max(0, (clampedValue / safeMax) * 100));

    return (
      <div
        ref={ref}
        className={cn("ui-progress", className)}
        data-color={color}
        data-striped={striped || undefined}
        data-animated={(striped && animated) || undefined}
        {...props}
      >
        {(label || showValue) && (
          <div className="ui-progress__label">
            {label && <span>{label}</span>}
            {showValue && <span>{Math.round(percentage)}%</span>}
          </div>
        )}
        <div
          className="ui-progress__track"
          data-size={size}
          role="progressbar"
          aria-valuenow={value}
          aria-valuemin={0}
          aria-valuemax={safeMax}
          aria-label={ariaLabel ?? label ?? "Progress"}
          aria-labelledby={ariaLabel ? undefined : ariaLabelledby}
        >
          <div
            className="ui-progress__fill"
            style={{ width: `${percentage}%` }}
          />
        </div>
      </div>
    );
  }
);

Progress.displayName = "Progress";
