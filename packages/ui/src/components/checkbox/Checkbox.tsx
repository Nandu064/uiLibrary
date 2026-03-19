import React from "react";
import { cn } from "@harish-ui/utils";
import { useControllableState } from "@harish-ui/hooks";

export interface CheckboxProps extends Omit<React.InputHTMLAttributes<HTMLInputElement>, "onChange" | "size"> {
  label?: React.ReactNode;
  checked?: boolean;
  defaultChecked?: boolean;
  indeterminate?: boolean;
  onChange?: (checked: boolean) => void;
}

export const Checkbox = React.forwardRef<HTMLInputElement, CheckboxProps>(
  (
    {
      className,
      label,
      checked,
      defaultChecked = false,
      indeterminate = false,
      onChange,
      disabled,
      id,
      ...props
    },
    ref
  ) => {
    const [isChecked, setIsChecked] = useControllableState({
      prop: checked,
      defaultProp: defaultChecked,
      onChange,
    });

    const autoId = React.useId();
    const checkboxId = id ?? autoId;

    return (
      <label
        className={cn("ui-checkbox", className)}
        data-checked={isChecked || undefined}
        data-indeterminate={indeterminate || undefined}
        data-disabled={disabled || undefined}
        htmlFor={checkboxId}
      >
        <span className="ui-checkbox__control">
          <input
            ref={ref}
            id={checkboxId}
            type="checkbox"
            className="ui-checkbox__input"
            checked={isChecked}
            disabled={disabled}
            onChange={(e) => setIsChecked(e.target.checked)}
            aria-checked={indeterminate ? "mixed" : isChecked}
            {...props}
          />
          <svg
            className="ui-checkbox__indicator"
            viewBox="0 0 10 10"
            fill="none"
            aria-hidden="true"
          >
            {indeterminate ? (
              <path d="M2 5h6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
            ) : (
              <path d="M1.5 5l2.5 2.5 5-5" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
            )}
          </svg>
        </span>
        {label && <span className="ui-checkbox__label">{label}</span>}
      </label>
    );
  }
);

Checkbox.displayName = "Checkbox";
