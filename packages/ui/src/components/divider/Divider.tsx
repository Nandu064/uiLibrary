import React from "react";
import { cn } from "@harish-ui/utils";

export interface DividerProps extends React.HTMLAttributes<HTMLHRElement | HTMLDivElement> {
  orientation?: "horizontal" | "vertical";
  label?: string;
}

export const Divider = React.forwardRef<HTMLHRElement, DividerProps>(
  ({ className, orientation = "horizontal", label, ...props }, ref) => {
    if (label) {
      return (
        <div className={cn("ui-divider-label", className)} role="separator" aria-label={label}>
          <span className="ui-divider-label__line" aria-hidden="true" />
          <span className="ui-divider-label__text">{label}</span>
          <span className="ui-divider-label__line" aria-hidden="true" />
        </div>
      );
    }

    return (
      <hr
        ref={ref}
        className={cn("ui-divider", className)}
        data-orientation={orientation}
        role="separator"
        aria-orientation={orientation}
        {...(props as React.HTMLAttributes<HTMLHRElement>)}
      />
    );
  }
);

Divider.displayName = "Divider";
