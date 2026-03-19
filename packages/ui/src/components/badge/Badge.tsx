import React from "react";
import { cn } from "@harish-ui/utils";
import type { BadgeProps } from "./Badge.types";

export const Badge = React.forwardRef<HTMLSpanElement, BadgeProps>(
  ({ className, variant = "subtle", colorScheme = "neutral", size = "md", children, ...props }, ref) => (
    <span
      ref={ref}
      className={cn("ui-badge", className)}
      data-variant={variant}
      data-color={colorScheme}
      data-size={size}
      {...props}
    >
      {children}
    </span>
  )
);

Badge.displayName = "Badge";
