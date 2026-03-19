import React from "react";
import { cn } from "@harish-ui/utils";
import { useControllableState } from "@harish-ui/hooks";

export type SwitchSize = "sm" | "md" | "lg";

export interface SwitchProps extends Omit<React.InputHTMLAttributes<HTMLInputElement>, "onChange" | "size"> {
  label?: React.ReactNode;
  checked?: boolean;
  defaultChecked?: boolean;
  onChange?: (checked: boolean) => void;
  size?: SwitchSize;
}

export const Switch = React.forwardRef<HTMLInputElement, SwitchProps>(
  (
    {
      className,
      label,
      checked,
      defaultChecked = false,
      onChange,
      disabled,
      size = "md",
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
    const switchId = id ?? autoId;

    return (
      <label
        className={cn("ui-switch", className)}
        data-checked={isChecked || undefined}
        data-disabled={disabled || undefined}
        data-size={size}
        htmlFor={switchId}
      >
        <span className="ui-switch__track">
          <input
            ref={ref}
            id={switchId}
            type="checkbox"
            role="switch"
            className="ui-switch__input"
            checked={isChecked}
            disabled={disabled}
            onChange={(e) => setIsChecked(e.target.checked)}
            aria-checked={isChecked}
            {...props}
          />
          <span className="ui-switch__thumb" aria-hidden="true" />
        </span>
        {label && <span className="ui-switch__label">{label}</span>}
      </label>
    );
  }
);

Switch.displayName = "Switch";
