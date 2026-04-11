export type AlertVariant = "subtle" | "solid" | "outline";
export type AlertStatus = "info" | "success" | "warning" | "error";

export interface AlertProps extends React.HTMLAttributes<HTMLDivElement> {
  status?: AlertStatus;
  variant?: AlertVariant;
  title?: string;
  description?: string;
  icon?: React.ReactNode;
  /** Show built-in close button that dismisses the alert automatically */
  dismissible?: boolean;
  /** Called when the alert is closed (works with both dismissible and manual onClose) */
  onClose?: () => void;
}
