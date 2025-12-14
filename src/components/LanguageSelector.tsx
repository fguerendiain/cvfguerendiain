"use client";

import { useState, useEffect, useRef } from "react";
import i18n from "i18next";
import ReactCountryFlag from "react-country-flag";

const languages = [
  { code: "es", label: "Español", countryCode: "AR" },
  { code: "en", label: "English", countryCode: "US" },
];

export const LanguageSelector = () => {
  const [lang, setLang] = useState<"es" | "en">(i18n.language as "es" | "en");
  const [open, setOpen] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

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

  const changeLang = (lng: "es" | "en") => {
    i18n.changeLanguage(lng);
    localStorage.setItem("lang", lng);
    setLang(lng);
    setOpen(false);
  };

  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (ref.current && !ref.current.contains(e.target as Node)) {
        setOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <div className="relative" ref={ref}>
      <button
        onClick={() => setOpen(!open)}
        className="cursor-pointer p-2 rounded-md hover:bg-gray-300 text-gray-700 dark:text-gray-200 dark:hover:bg-gray-700"
      >
        <ReactCountryFlag
          countryCode={languages.find((l) => l.code === lang)?.countryCode || "AR"}
          svg
          style={{ width: "24px", height: "16px" }}
          title={lang}
        />
      </button>

      {open && (
        <div className="absolute right-0 mt-1 w-32 bg-white dark:bg-black border border-gray-300 dark:border-gray-700 rounded shadow-md z-50">
          {languages.map((l) => (
            <button
              key={l.code}
              onClick={() => changeLang(l.code as "es" | "en")}
              className="w-full p-1 flex items-center gap-2 hover:bg-gray-200 dark:hover:bg-gray-700"
            >
              <ReactCountryFlag
                countryCode={l.countryCode}
                svg
                style={{ width: "24px", height: "16px" }}
                title={l.label}
              />
              <span className="text-sm">{l.label}</span>
            </button>
          ))}
        </div>
      )}
    </div>
  );
};
