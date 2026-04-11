import type React from "react";
export type AvatarSize = "xs" | "sm" | "md" | "lg" | "xl";
export type AvatarVariant = "circle" | "square";

export interface AvatarProps extends React.HTMLAttributes<HTMLSpanElement> {
  src?: string;
  alt?: string;
  name?: string;
  size?: AvatarSize;
  variant?: AvatarVariant;
  badge?: React.ReactNode;
}

export interface AvatarGroupProps extends React.HTMLAttributes<HTMLDivElement> {
  max?: number;
  size?: AvatarSize;
  children: React.ReactNode;
}
