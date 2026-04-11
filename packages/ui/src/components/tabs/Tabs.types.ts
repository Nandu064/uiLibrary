import type React from "react";
export type TabsVariant = "line" | "enclosed" | "pills";
export type TabsSize = "sm" | "md" | "lg";
export interface TabsProps extends Omit<React.HTMLAttributes<HTMLDivElement>, "onChange"> {
  defaultIndex?: number;
  index?: number;
  onChange?: (index: number) => void;
  variant?: TabsVariant;
  size?: TabsSize;
  children: React.ReactNode;
}
export interface TabListProps extends React.HTMLAttributes<HTMLDivElement> { children: React.ReactNode; }
export interface TabProps extends React.ButtonHTMLAttributes<HTMLButtonElement> { children: React.ReactNode; }
export interface TabPanelsProps extends React.HTMLAttributes<HTMLDivElement> { children: React.ReactNode; }
export interface TabPanelProps extends React.HTMLAttributes<HTMLDivElement> { children: React.ReactNode; }
