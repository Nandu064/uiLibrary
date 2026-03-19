export type AlertVariant = "subtle" | "solid" | "outline";
export type AlertStatus = "info" | "success" | "warning" | "error";

export interface AlertProps extends React.HTMLAttributes<HTMLDivElement> {
  status?: AlertStatus;
  variant?: AlertVariant;
  title?: string;
  description?: string;
  icon?: React.ReactNode;
  onClose?: () => void;
}
