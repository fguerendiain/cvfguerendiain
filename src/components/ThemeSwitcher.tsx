"use client";

import { useContext, useState, useEffect } from "react";
import { ThemeContext } from "../context/ThemeContext";
import { useTranslation } from "react-i18next";

export const ThemeSwitcher = () => {
  const { theme, toggleTheme } = useContext(ThemeContext);
  const { t: tGeneral } = useTranslation();
  const [mounted, setMounted] = useState(false);

  useEffect(() => setMounted(true), []);

  if (!mounted) return null; // Evita hydration mismatch

  return (
    <button
      className="cursor-pointer p-2 rounded-md hover:bg-gray-300 text-gray-700 dark:text-gray-200 dark:hover:bg-gray-700"
      title={tGeneral("darkToLightTooltip")}
      onClick={toggleTheme}
    >
      {theme === "light" ? "🌙" : "☀️"}
    </button>
  );
};
