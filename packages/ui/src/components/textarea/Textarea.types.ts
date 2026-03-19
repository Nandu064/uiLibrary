import type React from "react";

export interface TextareaProps extends React.TextareaHTMLAttributes<HTMLTextAreaElement> {
  label?: string;
  helperText?: string;
  errorMessage?: string;
  isInvalid?: boolean;
  isRequired?: boolean;
  /** Controls the resize behavior */
  resize?: "none" | "vertical" | "horizontal" | "both";
  /** Shows current/max character count */
  maxLength?: number;
  showCount?: boolean;
}
