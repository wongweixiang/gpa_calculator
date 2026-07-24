import { useState } from "react";

export function useLocalStorage<T>(key: string, initialValue: T) {
  const [value, setValue] = useState<T>(() => {
    try {
      const stored = window.localStorage.getItem(key);
      return stored !== null ? (JSON.parse(stored) as T) : initialValue;
    } catch (error) {
      console.error(`Error reading localStorage key "${key}":`, error);
      return initialValue;
    }
  });

  function setStoredValue(newValue: T | ((prev: T) => T)) {
    try {
      setValue((prev) => {
        const resolved =
          typeof newValue === "function"
            ? (newValue as (prev: T) => T)(prev)
            : newValue;

        window.localStorage.setItem(key, JSON.stringify(resolved));
        return resolved;
      });
    } catch (error) {
      console.error(`Error writing localStorage key "${key}":`, error);
    }
  }

  return [value, setStoredValue] as const;
}
