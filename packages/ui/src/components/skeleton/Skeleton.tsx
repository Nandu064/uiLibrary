import React from "react";
import { cn } from "@harish-ui/utils";

export type SkeletonVariant = "text" | "circular" | "rectangular" | "rounded";

export interface SkeletonProps extends React.HTMLAttributes<HTMLSpanElement> {
  variant?: SkeletonVariant;
  width?: number | string;
  height?: number | string;
}

export const Skeleton = React.forwardRef<HTMLSpanElement, SkeletonProps>(
  ({ className, variant = "rounded", width, height, style, ...props }, ref) => {
    return (
      <span
        ref={ref}
        className={cn("ui-skeleton", className)}
        data-variant={variant}
        aria-hidden="true"
        style={{
          width: width !== undefined ? (typeof width === "number" ? `${width}px` : width) : undefined,
          height: height !== undefined ? (typeof height === "number" ? `${height}px` : height) : undefined,
          ...style,
        }}
        {...props}
      />
    );
  }
);

Skeleton.displayName = "Skeleton";
