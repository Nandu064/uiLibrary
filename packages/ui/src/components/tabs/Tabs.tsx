"use client";
import React from "react";
import { cn } from "@harish-ui/utils";
import { useControllableState } from "@harish-ui/hooks";
import type { TabsProps, TabListProps, TabProps, TabPanelsProps, TabPanelProps } from "./Tabs.types";

interface TabsContextValue {
  activeIndex: number;
  setActiveIndex: (i: number) => void;
}
const TabsContext = React.createContext<TabsContextValue | null>(null);

function useTabsContext() {
  const ctx = React.useContext(TabsContext);
  if (!ctx) throw new Error("Tab components must be inside <Tabs>");
  return ctx;
}

export const Tabs = React.forwardRef<HTMLDivElement, TabsProps>(
  ({ className, defaultIndex = 0, index, onChange, variant = "line", size = "md", children, ...props }, ref) => {
    const [activeIndexRaw, setActiveIndex] = useControllableState<number>({
      prop: index,
      defaultProp: defaultIndex,
      onChange,
    });
    const activeIndex = activeIndexRaw ?? 0;
    return (
      <TabsContext.Provider value={{ activeIndex, setActiveIndex }}>
        <div ref={ref} className={cn("ui-tabs", className)} data-variant={variant} data-size={size} {...props}>
          {children}
        </div>
      </TabsContext.Provider>
    );
  }
);
Tabs.displayName = "Tabs";

export const TabList = React.forwardRef<HTMLDivElement, TabListProps>(
  ({ className, children, ...props }, ref) => (
    <div ref={ref} role="tablist" className={cn("ui-tab-list", className)} {...props}>
      {React.Children.map(children, (child, i) =>
        React.isValidElement(child)
          ? React.cloneElement(child as React.ReactElement<TabProps & { _index?: number }>, { _index: i })
          : child
      )}
    </div>
  )
);
TabList.displayName = "TabList";

export const Tab = React.forwardRef<HTMLButtonElement, TabProps & { _index?: number }>(
  ({ className, children, _index = 0, ...props }, ref) => {
    const { activeIndex, setActiveIndex } = useTabsContext();
    const isActive = activeIndex === _index;

    const handleKeyDown = (e: React.KeyboardEvent<HTMLButtonElement>) => {
      const tabs = Array.from(
        e.currentTarget.parentElement?.querySelectorAll<HTMLElement>('[role="tab"]') ?? []
      );
      if (tabs.length === 0) return;
      const curr = tabs.indexOf(e.currentTarget);
      if (e.key === "ArrowRight") { const n = (curr + 1) % tabs.length; tabs[n]?.focus(); setActiveIndex(n); e.preventDefault(); }
      else if (e.key === "ArrowLeft") { const n = (curr - 1 + tabs.length) % tabs.length; tabs[n]?.focus(); setActiveIndex(n); e.preventDefault(); }
      else if (e.key === "Home") { tabs[0]?.focus(); setActiveIndex(0); e.preventDefault(); }
      else if (e.key === "End") { const last = tabs.length - 1; tabs[last]?.focus(); setActiveIndex(last); e.preventDefault(); }
    };

    return (
      <button
        ref={ref}
        role="tab"
        type="button"
        className={cn("ui-tab", className)}
        aria-selected={isActive}
        data-active={isActive || undefined}
        tabIndex={isActive ? 0 : -1}
        onClick={() => setActiveIndex(_index)}
        onKeyDown={handleKeyDown}
        {...props}
      >
        {children}
      </button>
    );
  }
);
Tab.displayName = "Tab";

export const TabPanels = React.forwardRef<HTMLDivElement, TabPanelsProps>(
  ({ className, children, ...props }, ref) => (
    <div ref={ref} className={cn("ui-tab-panels", className)} {...props}>
      {React.Children.map(children, (child, i) =>
        React.isValidElement(child)
          ? React.cloneElement(child as React.ReactElement<{ _index?: number }>, { _index: i })
          : child
      )}
    </div>
  )
);
TabPanels.displayName = "TabPanels";

export const TabPanel = React.forwardRef<HTMLDivElement, TabPanelProps & { _index?: number }>(
  ({ className, children, _index = 0, ...props }, ref) => {
    const { activeIndex } = useTabsContext();
    const isActive = activeIndex === _index;
    return (
      <div ref={ref} role="tabpanel" className={cn("ui-tab-panel", className)} hidden={!isActive} tabIndex={isActive ? 0 : -1} {...props}>
        {children}
      </div>
    );
  }
);
TabPanel.displayName = "TabPanel";
