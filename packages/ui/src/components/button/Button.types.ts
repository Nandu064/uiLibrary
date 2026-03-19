import type React from "react";

export type ButtonVariant = "solid" | "outline" | "ghost" | "link";
export type ButtonSize = "sm" | "md" | "lg";
export type ButtonColorScheme = "primary" | "danger" | "success";

export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  /** Visual style variant */
  variant?: ButtonVariant;
  /** Size of the button */
  size?: ButtonSize;
  /** Color scheme */
  colorScheme?: ButtonColorScheme;
  /** Shows loading spinner and disables interaction */
  loading?: boolean;
  /** Loading text (accessible label when loading) */
  loadingText?: string;
  /** Makes the button span full container width */
  fullWidth?: boolean;
  /** Render as the child element (composition pattern) */
  asChild?: boolean;
  /** Icon placed before button text */
  leftIcon?: React.ReactNode;
  /** Icon placed after button text */
  rightIcon?: React.ReactNode;
}
