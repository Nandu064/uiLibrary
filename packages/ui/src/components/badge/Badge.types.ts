import type React from "react";

export type BadgeVariant = "solid" | "subtle" | "outline";
export type BadgeColorScheme = "primary" | "success" | "warning" | "danger" | "neutral";
export type BadgeSize = "sm" | "md" | "lg";

export interface BadgeProps extends React.HTMLAttributes<HTMLSpanElement> {
  variant?: BadgeVariant;
  colorScheme?: BadgeColorScheme;
  size?: BadgeSize;
}
