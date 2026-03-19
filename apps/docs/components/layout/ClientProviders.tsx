"use client";

import { ThemeProvider } from "@harish-ui/core";

export function ClientProviders({ children }: { children: React.ReactNode }) {
  return <ThemeProvider defaultTheme="system">{children}</ThemeProvider>;
}

import type React from "react";
