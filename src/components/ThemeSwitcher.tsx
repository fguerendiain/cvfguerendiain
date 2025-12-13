"use client";

import { useContext } from "react";
import { ThemeContext } from "../context/ThemeContext";
import { useTranslation } from "react-i18next";

export const ThemeSwitcher = () => {
  const { theme, toggleTheme } = useContext(ThemeContext);
  const { t: tGeneral } = useTranslation();
  
  return (
    <button 
      title={tGeneral('darkToLightTooltip')}
      onClick={toggleTheme}>
      {theme === "light" ? "🌙" : "☀️"}
    </button>
  );
};
