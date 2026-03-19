import React from "react";
import { cn } from "@harish-ui/utils";
import { useId } from "@harish-ui/hooks";
import type { TextareaProps } from "./Textarea.types";

export const Textarea = React.forwardRef<HTMLTextAreaElement, TextareaProps>(
  (
    {
      className,
      label,
      helperText,
      errorMessage,
      isInvalid,
      isRequired,
      resize = "vertical",
      maxLength,
      showCount = false,
      id: externalId,
      value,
      defaultValue,
      onChange,
      ...props
    },
    ref
  ) => {
    const autoId = useId("textarea");
    const id = externalId ?? autoId;
    const errorId = `${id}-error`;
    const helperId = `${id}-helper`;
    const hasError = isInvalid || !!errorMessage;

    const [charCount, setCharCount] = React.useState(
      () => String(value ?? defaultValue ?? "").length
    );

    const handleChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
      setCharCount(e.target.value.length);
      onChange?.(e);
    };

    const nearLimit = maxLength ? charCount / maxLength > 0.8 : false;
    const atLimit = maxLength ? charCount >= maxLength : false;

    const describedBy = [errorMessage ? errorId : null, helperText ? helperId : null]
      .filter(Boolean)
      .join(" ") || undefined;

    return (
      <div className="ui-field">
        {label && (
          <label htmlFor={id} className="ui-label">
            {label}
            {isRequired && <span className="ui-label__required" aria-hidden="true">*</span>}
          </label>
        )}

        <textarea
          ref={ref}
          id={id}
          className={cn("ui-textarea", className)}
          style={{ resize }}
          aria-invalid={hasError || undefined}
          aria-required={isRequired || undefined}
          aria-describedby={describedBy}
          maxLength={maxLength}
          value={value}
          defaultValue={defaultValue}
          onChange={handleChange}
          {...props}
        />

        {(showCount && maxLength) && (
          <span
            className={cn(
              "ui-textarea-count",
              nearLimit && "ui-textarea-count--near-limit",
              atLimit && "ui-textarea-count--at-limit"
            )}
            aria-live="polite"
          >
            {charCount}/{maxLength}
          </span>
        )}

        {errorMessage && (
          <span id={errorId} className="ui-error-text" role="alert">{errorMessage}</span>
        )}
        {helperText && !errorMessage && (
          <span id={helperId} className="ui-helper-text">{helperText}</span>
        )}
      </div>
    );
  }
);

Textarea.displayName = "Textarea";
