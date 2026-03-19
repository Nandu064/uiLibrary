// Theme
export { ThemeProvider, useTheme } from "./theme";

// Components — Actions
export { Button } from "./components/button";
export type { ButtonProps, ButtonVariant, ButtonSize, ButtonColorScheme } from "./components/button";

// Components — Forms
export { Input } from "./components/input";
export type { InputProps } from "./components/input";

export { Textarea } from "./components/textarea";
export type { TextareaProps } from "./components/textarea";

export { Label } from "./components/label";
export type { LabelProps } from "./components/label";

// Components — Data Display
export { Badge } from "./components/badge";
export type { BadgeProps, BadgeVariant, BadgeColorScheme, BadgeSize } from "./components/badge";

// Components — Layout
export { Card, CardHeader, CardBody, CardFooter } from "./components/card";
export type { CardProps, CardVariant } from "./components/card";

export { Stack, HStack, VStack } from "./components/stack";
export type { StackProps, StackDirection, StackAlign, StackJustify, StackWrap } from "./components/stack";

export { Divider } from "./components/divider";
export type { DividerProps } from "./components/divider";

// Components — Feedback
export { Spinner } from "./components/spinner";
export type { SpinnerProps, SpinnerSize } from "./components/spinner";

// Internal docs metadata (for docs site registry)
export { buttonDocs } from "./components/button";
export { inputDocs } from "./components/input";
export { textareaDocs } from "./components/textarea";
export { labelDocs } from "./components/label";
export { badgeDocs } from "./components/badge";
export { cardDocs } from "./components/card";
export { stackDocs } from "./components/stack";
export { dividerDocs } from "./components/divider";
export { spinnerDocs } from "./components/spinner";

// Types for docs system
export type { DocsMeta, PropDefinition, PlaygroundControl, ComponentStatus } from "./internal-docs";
