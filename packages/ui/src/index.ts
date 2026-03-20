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

export { Checkbox } from "./components/checkbox";
export type { CheckboxProps } from "./components/checkbox";

export { Switch } from "./components/switch";
export type { SwitchProps, SwitchSize } from "./components/switch";

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

export { Alert } from "./components/alert";
export type { AlertProps, AlertStatus, AlertVariant } from "./components/alert";

export { Progress } from "./components/progress";
export type { ProgressProps, ProgressSize, ProgressColor } from "./components/progress";

export { Skeleton } from "./components/skeleton";
export type { SkeletonProps, SkeletonVariant } from "./components/skeleton";

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
export { alertDocs } from "./components/alert";
export { checkboxDocs } from "./components/checkbox";
export { switchDocs } from "./components/switch";
export { progressDocs } from "./components/progress";
export { skeletonDocs } from "./components/skeleton";

// Types for docs system
export type { DocsMeta, PropDefinition, PlaygroundControl, ComponentStatus } from "./internal-docs";
