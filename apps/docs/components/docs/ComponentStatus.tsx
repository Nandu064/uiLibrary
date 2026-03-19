import { Badge } from "@harish-ui/core";
import type { ComponentStatus } from "@harish-ui/core";

const statusConfig: Record<ComponentStatus, { label: string; colorScheme: "success" | "warning" | "neutral" | "danger" }> = {
  stable: { label: "Stable", colorScheme: "success" },
  beta: { label: "Beta", colorScheme: "warning" },
  alpha: { label: "Alpha", colorScheme: "neutral" },
  deprecated: { label: "Deprecated", colorScheme: "danger" },
};

export function ComponentStatus({ status }: { status: ComponentStatus }) {
  const cfg = statusConfig[status];
  return (
    <Badge colorScheme={cfg.colorScheme} variant="subtle" size="sm">
      {cfg.label}
    </Badge>
  );
}
