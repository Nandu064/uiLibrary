import React from "react";
import { cn } from "@harish-ui/utils";
import { useId } from "@harish-ui/hooks";
import type { InputProps } from "./Input.types";

/**
 * Text input with optional label, helper/error text, and icon slots.
 *
 * @example
 * <Input label="Email" type="email" placeholder="you@example.com" />
 */
export const Input = React.forwardRef<HTMLInputElement, InputProps>(
  (
    {
      className,
      label,
      helperText,
      errorMessage,
      size = "md",
      isInvalid,
      isRequired,
      leftAddon,
      rightAddon,
      leftElement,
      rightElement,
      id: externalId,
      "aria-describedby": externalDescribedBy,
      ...props
    },
    ref
  ) => {
    const autoId = useId("input");
    const id = externalId ?? autoId;
    const helperId = `${id}-helper`;
    const errorId = `${id}-error`;
    const hasError = isInvalid || !!errorMessage;

    const describedByComputed =
      [errorMessage ? errorId : null, helperText ? helperId : null].filter(Boolean).join(" ") ||
      undefined;
    const describedBy = externalDescribedBy ?? describedByComputed;

    const inputEl = (
      <input
        ref={ref}
        id={id}
        className={cn(
          "ui-input",
          leftElement && "ui-input--has-left",
          rightElement && "ui-input--has-right",
          className
        )}
        data-size={size}
        aria-invalid={hasError || undefined}
        aria-required={isRequired || undefined}
        aria-describedby={describedBy}
        {...props}
      />
    );

    return (
      <div className="ui-field">
        {label && (
          <label htmlFor={id} className="ui-label">
            {label}
            {isRequired && (
              <span className="ui-label__required" aria-hidden="true">
                *
              </span>
            )}
          </label>
        )}

        <div
          className={cn(
            "ui-input-wrapper",
            leftAddon && "ui-input-wrapper--has-left-addon",
            rightAddon && "ui-input-wrapper--has-right-addon"
          )}
        >
          {leftAddon && <span className="ui-input-addon ui-input-addon--left">{leftAddon}</span>}

          {leftElement && (
            <span className="ui-input-element ui-input-element--left" aria-hidden="true">
              {leftElement}
            </span>
          )}

          {inputEl}

          {rightElement && (
            <span className="ui-input-element ui-input-element--right" aria-hidden="true">
              {rightElement}
            </span>
          )}

          {rightAddon && <span className="ui-input-addon ui-input-addon--right">{rightAddon}</span>}
        </div>

        {errorMessage && (
          <span id={errorId} className="ui-error-text" role="alert">
            {errorMessage}
          </span>
        )}
        {helperText && !errorMessage && (
          <span id={helperId} className="ui-helper-text">
            {helperText}
          </span>
        )}
      </div>
    );
  }
);

Input.displayName = "Input";
