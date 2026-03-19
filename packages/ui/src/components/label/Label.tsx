import React from "react";
import { cn } from "@harish-ui/utils";

export interface LabelProps extends React.LabelHTMLAttributes<HTMLLabelElement> {
  isRequired?: boolean;
  isDisabled?: boolean;
}

export const Label = React.forwardRef<HTMLLabelElement, LabelProps>(
  ({ className, children, isRequired, isDisabled, ...props }, ref) => (
    <label
      ref={ref}
      className={cn("ui-label", isDisabled && "ui-label--disabled", className)}
      data-disabled={isDisabled || undefined}
      {...props}
    >
      {children}
      {isRequired && <span className="ui-label__required" aria-hidden="true"> *</span>}
    </label>
  )
);

Label.displayName = "Label";
