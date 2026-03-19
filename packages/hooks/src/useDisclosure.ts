"use client";

import { useControllableState } from "./useControllableState";

type UseDisclosureParams = {
  defaultOpen?: boolean;
  open?: boolean;
  onOpenChange?: (open: boolean) => void;
};

type UseDisclosureReturn = {
  isOpen: boolean;
  open: () => void;
  close: () => void;
  toggle: () => void;
  onOpenChange: (open: boolean) => void;
};

/**
 * Manages open/closed state for overlays, drawers, modals, dropdowns, etc.
 * Supports both controlled and uncontrolled usage.
 */
export function useDisclosure({
  defaultOpen = false,
  open: controlledOpen,
  onOpenChange,
}: UseDisclosureParams = {}): UseDisclosureReturn {
  const [isOpen = false, setIsOpen] = useControllableState({
    prop: controlledOpen,
    defaultProp: defaultOpen,
    onChange: onOpenChange,
  });

  return {
    isOpen,
    open: () => setIsOpen(true),
    close: () => setIsOpen(false),
    toggle: () => setIsOpen(!isOpen),
    onOpenChange: setIsOpen,
  };
}
