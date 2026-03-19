export function isEnter(e: KeyboardEvent | React.KeyboardEvent): boolean {
  return e.key === "Enter";
}

export function isSpace(e: KeyboardEvent | React.KeyboardEvent): boolean {
  return e.key === " ";
}

export function isEscape(e: KeyboardEvent | React.KeyboardEvent): boolean {
  return e.key === "Escape";
}

export function isTab(e: KeyboardEvent | React.KeyboardEvent): boolean {
  return e.key === "Tab";
}

export function isShiftTab(e: KeyboardEvent | React.KeyboardEvent): boolean {
  return e.key === "Tab" && e.shiftKey;
}

export function isArrowUp(e: KeyboardEvent | React.KeyboardEvent): boolean {
  return e.key === "ArrowUp";
}

export function isArrowDown(e: KeyboardEvent | React.KeyboardEvent): boolean {
  return e.key === "ArrowDown";
}

export function isArrowLeft(e: KeyboardEvent | React.KeyboardEvent): boolean {
  return e.key === "ArrowLeft";
}

export function isArrowRight(e: KeyboardEvent | React.KeyboardEvent): boolean {
  return e.key === "ArrowRight";
}

export function isHome(e: KeyboardEvent | React.KeyboardEvent): boolean {
  return e.key === "Home";
}

export function isEnd(e: KeyboardEvent | React.KeyboardEvent): boolean {
  return e.key === "End";
}

// React must be importable by consumers; we only use it for the type
import type React from "react";
