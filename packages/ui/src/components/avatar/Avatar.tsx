"use client";
import React from "react";
import { cn } from "@harish-ui/utils";
import type { AvatarProps, AvatarGroupProps } from "./Avatar.types";

function getInitials(name: string): string {
  const trimmed = name.trim();
  if (!trimmed) return "";
  const parts = trimmed.split(/\s+/);
  const first = parts[0]?.charAt(0) ?? "";
  const last = parts[parts.length - 1]?.charAt(0) ?? "";
  return (first + (parts.length > 1 ? last : "")).toUpperCase();
}

const PersonIcon = () => (
  <svg className="ui-avatar__icon" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
    <path d="M12 12c2.7 0 4.8-2.1 4.8-4.8S14.7 2.4 12 2.4 7.2 4.5 7.2 7.2 9.3 12 12 12zm0 2.4c-3.2 0-9.6 1.6-9.6 4.8v2.4h19.2v-2.4c0-3.2-6.4-4.8-9.6-4.8z"/>
  </svg>
);

export const Avatar = React.forwardRef<HTMLSpanElement, AvatarProps>(
  ({ className, src, alt, name, size = "md", variant = "circle", badge, ...props }, ref) => {
    const [imgError, setImgError] = React.useState(false);
    const showImg = src && !imgError;
    const showInitials = !showImg && name;

    return (
      <span
        ref={ref}
        className={cn("ui-avatar", className)}
        data-size={size}
        data-variant={variant}
        {...props}
      >
        {showImg && (
          <img
            src={src}
            alt={alt ?? name ?? "Avatar"}
            onError={() => setImgError(true)}
          />
        )}
        {!showImg && showInitials && (
          <span className="ui-avatar__initials" aria-hidden="true">
            {getInitials(name)}
          </span>
        )}
        {!showImg && !showInitials && <PersonIcon />}
        {badge && <span className="ui-avatar__badge">{badge}</span>}
      </span>
    );
  }
);
Avatar.displayName = "Avatar";

export const AvatarGroup = React.forwardRef<HTMLDivElement, AvatarGroupProps>(
  ({ className, max, size, children, ...props }, ref) => {
    const childArray = React.Children.toArray(children);
    const visible = max !== undefined ? childArray.slice(0, max) : childArray;
    const overflow = max !== undefined ? childArray.length - max : 0;

    return (
      <div ref={ref} className={cn("ui-avatar-group", className)} {...props}>
        {visible.map((child, i) =>
          React.isValidElement(child)
            ? React.cloneElement(child as React.ReactElement<AvatarProps>, { size: size ?? (child.props as AvatarProps).size, key: i })
            : child
        )}
        {overflow > 0 && (
          <span className="ui-avatar ui-avatar--overflow" data-size={size ?? "md"} aria-label={`${overflow} more`}>
            +{overflow}
          </span>
        )}
      </div>
    );
  }
);
AvatarGroup.displayName = "AvatarGroup";
