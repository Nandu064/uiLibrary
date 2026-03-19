import React from "react";
import { cn } from "@harish-ui/utils";
import { Slot } from "@harish-ui/utils";
import type { ButtonProps } from "./Button.types";

/**
 * Button component for triggering actions or navigation.
 *
 * @example
 * <Button variant="solid" size="md" onClick={handleSubmit}>
 *   Submit
 * </Button>
 */
export const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  (
    {
      className,
      variant = "solid",
      size = "md",
      colorScheme = "primary",
      loading = false,
      loadingText,
      fullWidth = false,
      asChild = false,
      leftIcon,
      rightIcon,
      disabled,
      children,
      ...props
    },
    ref
  ) => {
    const isDisabled = disabled || loading;
    const Comp = asChild ? Slot : "button";

    return (
      <Comp
        ref={ref as React.Ref<HTMLButtonElement>}
        className={cn("ui-button", className)}
        data-variant={variant}
        data-size={size}
        data-color={colorScheme}
        data-loading={loading || undefined}
        data-full-width={fullWidth || undefined}
        disabled={isDisabled}
        aria-disabled={isDisabled || undefined}
        aria-busy={loading || undefined}
        {...props}
      >
        {loading && (
          <svg
            className="ui-button__spinner"
            width="16"
            height="16"
            viewBox="0 0 24 24"
            fill="none"
            aria-hidden="true"
          >
            <circle
              cx="12"
              cy="12"
              r="10"
              stroke="currentColor"
              strokeWidth="2.5"
              strokeOpacity="0.25"
            />
            <path
              d="M12 2a10 10 0 0 1 10 10"
              stroke="currentColor"
              strokeWidth="2.5"
              strokeLinecap="round"
            />
          </svg>
        )}
        {!loading && leftIcon && (
          <span className="ui-button__icon" aria-hidden="true">
            {leftIcon}
          </span>
        )}
        {loading && loadingText ? loadingText : children}
        {!loading && rightIcon && (
          <span className="ui-button__icon" aria-hidden="true">
            {rightIcon}
          </span>
        )}
      </Comp>
    );
  }
);

Button.displayName = "Button";
