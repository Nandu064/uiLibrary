import React from "react";
import { cn } from "@harish-ui/utils";
import type { AlertProps } from "./Alert.types";

const statusIcons: Record<string, React.ReactNode> = {
  info: (
    <svg width="16" height="16" viewBox="0 0 16 16" fill="currentColor" aria-hidden="true">
      <path d="M8 1a7 7 0 1 0 0 14A7 7 0 0 0 8 1zm0 3a1 1 0 1 1 0 2 1 1 0 0 1 0-2zm0 3.5c.4 0 .75.3.75.7v3.1a.75.75 0 0 1-1.5 0V8.2c0-.4.35-.7.75-.7z"/>
    </svg>
  ),
  success: (
    <svg width="16" height="16" viewBox="0 0 16 16" fill="currentColor" aria-hidden="true">
      <path d="M8 1a7 7 0 1 0 0 14A7 7 0 0 0 8 1zm3.03 5.03a.75.75 0 0 0-1.06-1.06L7 7.94 5.53 6.47a.75.75 0 0 0-1.06 1.06l2 2a.75.75 0 0 0 1.06 0l3.5-3.5z"/>
    </svg>
  ),
  warning: (
    <svg width="16" height="16" viewBox="0 0 16 16" fill="currentColor" aria-hidden="true">
      <path d="M8.982 1.566a1.13 1.13 0 0 0-1.96 0L.165 13.233c-.457.778.091 1.767.98 1.767h13.713c.889 0 1.438-.99.98-1.767L8.982 1.566zM8 5c.535 0 .954.462.9.995l-.35 3.507a.552.552 0 0 1-1.1 0L7.1 5.995A.905.905 0 0 1 8 5zm.002 6a1 1 0 1 1 0 2 1 1 0 0 1 0-2z"/>
    </svg>
  ),
  error: (
    <svg width="16" height="16" viewBox="0 0 16 16" fill="currentColor" aria-hidden="true">
      <path d="M8 1a7 7 0 1 0 0 14A7 7 0 0 0 8 1zm-.75 4a.75.75 0 0 1 1.5 0v3.5a.75.75 0 0 1-1.5 0V5zm.75 7a1 1 0 1 1 0-2 1 1 0 0 1 0 2z"/>
    </svg>
  ),
};

const CloseIcon = () => (
  <svg width="14" height="14" viewBox="0 0 14 14" fill="currentColor" aria-hidden="true">
    <path d="M1.41 0 0 1.41 5.59 7 0 12.59 1.41 14 7 8.41l5.59 5.59L14 12.59 8.41 7 14 1.41 12.59 0 7 5.59z"/>
  </svg>
);

export const Alert = React.forwardRef<HTMLDivElement, AlertProps>(
  (
    {
      className,
      status = "info",
      variant = "subtle",
      title,
      description,
      icon,
      dismissible = false,
      onClose,
      children,
      ...props
    },
    ref
  ) => {
    const [visible, setVisible] = React.useState(true);

    if (!visible) return null;

    const handleClose = () => {
      setVisible(false);
      onClose?.();
    };

    const showClose = dismissible || Boolean(onClose);
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

        {showClose && (
          <button
            type="button"
            className="ui-alert__close"
            onClick={handleClose}
            aria-label="Dismiss alert"
          >
            <CloseIcon />
          </button>
        )}
      </div>
    );
  }
);

Alert.displayName = "Alert";
