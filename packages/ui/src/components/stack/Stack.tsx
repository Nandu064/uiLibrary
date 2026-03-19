import React from "react";
import { cn } from "@harish-ui/utils";

export type StackDirection = "row" | "column" | "row-reverse" | "column-reverse";
export type StackAlign = "start" | "center" | "end" | "stretch" | "baseline";
export type StackJustify = "start" | "center" | "end" | "between" | "around" | "evenly";
export type StackWrap = "wrap" | "nowrap" | "wrap-reverse";

export interface StackProps extends React.HTMLAttributes<HTMLDivElement> {
  direction?: StackDirection;
  gap?: number | string;
  align?: StackAlign;
  justify?: StackJustify;
  wrap?: StackWrap;
  as?: React.ElementType;
}

const justifyMap: Record<StackJustify, string> = {
  start: "flex-start",
  center: "center",
  end: "flex-end",
  between: "space-between",
  around: "space-around",
  evenly: "space-evenly",
};

const alignMap: Record<StackAlign, string> = {
  start: "flex-start",
  center: "center",
  end: "flex-end",
  stretch: "stretch",
  baseline: "baseline",
};

export const Stack = React.forwardRef<HTMLDivElement, StackProps>(
  (
    {
      className,
      direction = "column",
      gap,
      align,
      justify,
      wrap = "nowrap",
      as: As = "div",
      style,
      children,
      ...props
    },
    ref
  ) => (
    <As
      ref={ref}
      className={cn("ui-stack", className)}
      data-direction={direction}
      data-wrap={wrap}
      style={{
        gap: gap !== undefined ? (typeof gap === "number" ? `${gap * 4}px` : gap) : undefined,
        alignItems: align ? alignMap[align] : undefined,
        justifyContent: justify ? justifyMap[justify] : undefined,
        ...style,
      }}
      {...props}
    >
      {children}
    </As>
  )
);
Stack.displayName = "Stack";

/** Shorthand for horizontal Stack */
export const HStack = React.forwardRef<HTMLDivElement, Omit<StackProps, "direction">>(
  (props, ref) => <Stack ref={ref} direction="row" {...props} />
);
HStack.displayName = "HStack";

/** Shorthand for vertical Stack */
export const VStack = React.forwardRef<HTMLDivElement, Omit<StackProps, "direction">>(
  (props, ref) => <Stack ref={ref} direction="column" {...props} />
);
VStack.displayName = "VStack";
