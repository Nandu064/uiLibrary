import { colors, radii, shadows, fontSizes, fontWeights, spacing, motion, zIndex } from "./primitives";

export const semanticLight: Record<string, string> = {
  // Backgrounds
  "--ui-bg": colors.neutral[0],
  "--ui-bg-subtle": colors.neutral[50],
  "--ui-bg-muted": colors.neutral[100],

  // Foregrounds
  "--ui-fg": colors.slate[900],
  "--ui-fg-subtle": colors.slate[600],
  "--ui-fg-muted": colors.slate[400],
  "--ui-fg-on-primary": colors.neutral[0],

  // Border
  "--ui-border": colors.slate[200],
  "--ui-border-strong": colors.slate[300],

  // Primary (brand blue)
  "--ui-primary": colors.blue[600],
  "--ui-primary-hover": colors.blue[700],
  "--ui-primary-active": colors.blue[800],
  "--ui-primary-subtle": colors.blue[50],
  "--ui-primary-muted": colors.blue[100],

  // Danger (red)
  "--ui-danger": colors.red[600],
  "--ui-danger-hover": colors.red[700],
  "--ui-danger-subtle": colors.red[50],
  "--ui-danger-muted": colors.red[100],

  // Success (green)
  "--ui-success": colors.green[600],
  "--ui-success-subtle": colors.green[50],
  "--ui-success-muted": colors.green[100],

  // Warning (yellow)
  "--ui-warning": colors.yellow[600],
  "--ui-warning-subtle": colors.yellow[50],
  "--ui-warning-muted": colors.yellow[100],

  // Overlay
  "--ui-overlay-bg": "rgba(0, 0, 0, 0.5)",

  // Focus ring
  "--ui-focus-ring": colors.blue[500],
  "--ui-focus-ring-offset": "2px",
  "--ui-focus-ring-width": "2px",

  // Radii
  "--ui-radius-sm": radii.sm,
  "--ui-radius-md": radii.md,
  "--ui-radius-lg": radii.lg,
  "--ui-radius-xl": radii.xl,
  "--ui-radius-full": radii.full,

  // Shadows
  "--ui-shadow-sm": shadows.sm,
  "--ui-shadow-md": shadows.md,
  "--ui-shadow-lg": shadows.lg,

  // Spacing (subset for component use)
  "--ui-space-1": spacing[1],
  "--ui-space-2": spacing[2],
  "--ui-space-3": spacing[3],
  "--ui-space-4": spacing[4],
  "--ui-space-5": spacing[5],
  "--ui-space-6": spacing[6],
  "--ui-space-8": spacing[8],

  // Typography
  "--ui-text-xs": fontSizes.xs,
  "--ui-text-sm": fontSizes.sm,
  "--ui-text-md": fontSizes.md,
  "--ui-text-lg": fontSizes.lg,
  "--ui-font-normal": fontWeights.normal,
  "--ui-font-medium": fontWeights.medium,
  "--ui-font-semibold": fontWeights.semibold,
  "--ui-font-bold": fontWeights.bold,

  // Motion
  "--ui-duration-fast": motion.duration.fast,
  "--ui-duration-normal": motion.duration.normal,
  "--ui-duration-slow": motion.duration.slow,
  "--ui-ease": motion.easing.easeInOut,

  // Z-index
  "--ui-z-modal": zIndex.modal,
  "--ui-z-tooltip": zIndex.tooltip,
  "--ui-z-toast": zIndex.toast,
  "--ui-z-dropdown": zIndex.dropdown,
};

export const semanticDark: Record<string, string> = {
  "--ui-bg": colors.neutral[950],
  "--ui-bg-subtle": colors.neutral[900],
  "--ui-bg-muted": colors.neutral[800],

  "--ui-fg": colors.neutral[50],
  "--ui-fg-subtle": colors.slate[400],
  "--ui-fg-muted": colors.slate[500],
  "--ui-fg-on-primary": colors.neutral[0],

  "--ui-border": colors.slate[700],
  "--ui-border-strong": colors.slate[600],

  "--ui-primary": colors.blue[400],
  "--ui-primary-hover": colors.blue[300],
  "--ui-primary-active": colors.blue[200],
  "--ui-primary-subtle": colors.blue[900],
  "--ui-primary-muted": colors.blue[800],

  "--ui-danger": colors.red[400],
  "--ui-danger-hover": colors.red[300],
  "--ui-danger-subtle": colors.red[900],
  "--ui-danger-muted": colors.red[800],

  "--ui-success": colors.green[400],
  "--ui-success-subtle": colors.green[900],
  "--ui-success-muted": colors.green[800],

  "--ui-warning": colors.yellow[400],
  "--ui-warning-subtle": colors.yellow[900],
  "--ui-warning-muted": colors.yellow[800],

  "--ui-overlay-bg": "rgba(0, 0, 0, 0.7)",

  "--ui-focus-ring": colors.blue[400],
  "--ui-focus-ring-offset": "2px",
  "--ui-focus-ring-width": "2px",
};
