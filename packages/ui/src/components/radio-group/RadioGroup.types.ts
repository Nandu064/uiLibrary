import type React from "react";
export type RadioGroupSize = "sm" | "md" | "lg";
export type RadioGroupDirection = "row" | "column";
export interface RadioGroupProps extends Omit<React.HTMLAttributes<HTMLDivElement>, "onChange"> {
  value?: string;
  defaultValue?: string;
  onChange?: (value: string) => void;
  name?: string;
  disabled?: boolean;
  size?: RadioGroupSize;
  direction?: RadioGroupDirection;
  children: React.ReactNode;
}
export interface RadioProps extends Omit<React.InputHTMLAttributes<HTMLInputElement>, "size"> {
  value: string;
  label?: React.ReactNode;
  size?: RadioGroupSize;
}
