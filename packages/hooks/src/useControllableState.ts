"use client";

import { useState, useCallback, useRef } from "react";

type UseControllableStateParams<T> = {
  prop?: T;
  defaultProp?: T;
  onChange?: (value: T) => void;
};

/**
 * Manages state that can be either controlled (prop-driven) or uncontrolled (internal state).
 * Mirrors the behavior of native HTML form elements.
 */
export function useControllableState<T>({
  prop,
  defaultProp,
  onChange = () => undefined,
}: UseControllableStateParams<T>): [T | undefined, (value: T) => void] {
  const [uncontrolledProp, setUncontrolledProp] = useState<T | undefined>(defaultProp);
  const isControlled = prop !== undefined;
  const value = isControlled ? prop : uncontrolledProp;
  const handleChangeRef = useRef(onChange);
  handleChangeRef.current = onChange;

  const setValue = useCallback(
    (nextValue: T) => {
      if (!isControlled) {
        setUncontrolledProp(nextValue);
      }
      handleChangeRef.current(nextValue);
    },
    [isControlled]
  );

  return [value, setValue];
}
