"use client";

import { useEffect } from "react";
import { I18nextProvider } from "react-i18next";
import i18n from "@/lib/i18n";

export function I18nProvider({ children }: { children: React.ReactNode }) {
  useEffect(() => {
    if (typeof window === "undefined") return;

    const saved = localStorage.getItem("lang");
    if (saved && saved !== i18n.language) {
      i18n.changeLanguage(saved).catch(() => {});
      return;
    }

    const navLang = navigator.language.slice(0, 2);
    if (navLang === "es" || navLang === "en") {
      if (navLang !== i18n.language) {
        i18n.changeLanguage(navLang).catch(() => {});
      }
    } else {
      if (i18n.language !== "en") i18n.changeLanguage("en").catch(() => {});
    }
  }, []);

  return <I18nextProvider i18n={i18n}>{children}</I18nextProvider>;
}
