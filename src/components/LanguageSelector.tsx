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
    const storedLang = localStorage.getItem("lang") as "es" | "en" | null;
    if (storedLang && storedLang !== lang) {
      setLang(storedLang);
      i18n.changeLanguage(storedLang);
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
        className="p-1 rounded border hover:bg-gray-200 dark:hover:bg-gray-700 flex items-center"
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
