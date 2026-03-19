import React from "react";
import { cn } from "@harish-ui/utils";
import type { AlertProps } from "./Alert.types";

const statusIcons: Record<string, string> = {
  info: "ℹ",
  success: "✓",
  warning: "⚠",
  error: "✕",
};

export const Alert = React.forwardRef<HTMLDivElement, AlertProps>(
  (
    {
      className,
      status = "info",
      variant = "subtle",
      title,
      description,
      icon,
      onClose,
      children,
      ...props
    },
    ref
  ) => {
    const defaultIcon = statusIcons[status];

    return (
      <div
        ref={ref}
        role="alert"
        className={cn("ui-alert", className)}
        data-status={status}
        data-variant={variant}
        {...props}
      >
        <span className="ui-alert__icon" aria-hidden="true">
          {icon ?? defaultIcon}
        </span>
        <div className="ui-alert__body">
          {title && <div className="ui-alert__title">{title}</div>}
          {description && <div className="ui-alert__description">{description}</div>}
          {children}
        </div>
        {onClose && (
          <button
            className="ui-alert__close"
            onClick={onClose}
            aria-label="Close alert"
            type="button"
          >
            ✕
          </button>
        )}
      </div>
    );
  }
);

Alert.displayName = "Alert";
