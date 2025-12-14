"use client";

import { createContext, useEffect, useState } from "react";

interface ThemeContextType {
  theme: "light" | "dark";
  toggleTheme: () => void;
}

export const ThemeContext = createContext<ThemeContextType>({
  theme: "light",
  toggleTheme: () => {},
});

export const ThemeProvider = ({ children }: { children: React.ReactNode }) => {
  const getInitialTheme = (): "light" | "dark" => {
    try {
      if (window.matchMedia("(prefers-color-scheme: dark)").matches) return "dark";
      if (window.matchMedia("(prefers-color-scheme: light)").matches) return "light";

      const saved = localStorage.getItem("theme") as "light" | "dark" | null;
      if (saved) return saved;

      return "light";
    } catch {
      return "light";
    }
  };

  const [theme, setTheme] = useState<"light" | "dark">(getInitialTheme);

  useEffect(() => {
    document.documentElement.className = theme;
    try {
      localStorage.setItem("theme", theme);
    } catch {}
  }, [theme]);

  useEffect(() => {
    const mediaQuery = window.matchMedia("(prefers-color-scheme: dark)");
    const handler = (e: MediaQueryListEvent) => setTheme(e.matches ? "dark" : "light");
    mediaQuery.addEventListener("change", handler);
    return () => mediaQuery.removeEventListener("change", handler);
  }, []);

  const toggleTheme = () => setTheme((t) => (t === "light" ? "dark" : "light"));

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};
