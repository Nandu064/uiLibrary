"use client";
import React from "react";
import { cn } from "@harish-ui/utils";
import { useControllableState } from "@harish-ui/hooks";
import type { RadioGroupProps, RadioProps, RadioGroupSize } from "./RadioGroup.types";

interface RGContextValue { value: string | undefined; onChange: (v: string) => void; name: string; disabled: boolean; size: RadioGroupSize; }
const RGContext = React.createContext<RGContextValue | null>(null);
function useRGContext() {
  const ctx = React.useContext(RGContext);
  if (!ctx) throw new Error("Radio must be inside RadioGroup");
  return ctx;
}

export const RadioGroup = React.forwardRef<HTMLDivElement, RadioGroupProps>(
  ({ className, value, defaultValue = "", onChange, name, disabled = false, size = "md", direction = "column", children, ...props }, ref) => {
    const autoName = React.useId();
    const [selected, setSelected] = useControllableState({ prop: value, defaultProp: defaultValue, onChange });
    return (
      <RGContext.Provider value={{ value: selected, onChange: setSelected, name: name ?? autoName, disabled, size }}>
        <div ref={ref} role="radiogroup" className={cn("ui-radio-group", className)} data-direction={direction} data-size={size} {...props}>
          {children}
        </div>
      </RGContext.Provider>
    );
  }
);
RadioGroup.displayName = "RadioGroup";

export const Radio = React.forwardRef<HTMLInputElement, RadioProps>(
  ({ className, value, label, size: sizeProp, disabled: disabledProp, id, ...props }, ref) => {
    const ctx = useRGContext();
    const size = sizeProp ?? ctx.size;
    const disabled = disabledProp ?? ctx.disabled;
    const isChecked = ctx.value === value;
    const autoId = React.useId();
    const radioId = id ?? autoId;
    return (
      <label className={cn("ui-radio", className)} data-checked={isChecked || undefined} data-disabled={disabled || undefined} data-size={size} htmlFor={radioId}>
        <span className="ui-radio__control">
          <input ref={ref} id={radioId} type="radio" name={ctx.name} value={value} checked={isChecked} disabled={disabled} className="ui-radio__input" onChange={() => ctx.onChange(value)} {...props} />
          <span className="ui-radio__indicator" aria-hidden="true" />
        </span>
        {label && <span className="ui-radio__label">{label}</span>}
      </label>
    );
  }
);
Radio.displayName = "Radio";
