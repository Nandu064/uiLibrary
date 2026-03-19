import type React from "react";

export interface InputProps extends Omit<React.InputHTMLAttributes<HTMLInputElement>, "size"> {
  /** Label text (renders a visible label above the input) */
  label?: string;
  /** Helper text shown below the input */
  helperText?: string;
  /** Error message (replaces helperText, applies error styling) */
  errorMessage?: string;
  /** Size of the input */
  size?: "sm" | "md" | "lg";
  /** Makes the field show error state */
  isInvalid?: boolean;
  /** Makes the field required (shows indicator) */
  isRequired?: boolean;
  /** Renders a readonly, visually styled element before input */
  leftAddon?: React.ReactNode;
  /** Renders a readonly, visually styled element after input */
  rightAddon?: React.ReactNode;
  /** Element rendered inside the input on the left */
  leftElement?: React.ReactNode;
  /** Element rendered inside the input on the right */
  rightElement?: React.ReactNode;
}
