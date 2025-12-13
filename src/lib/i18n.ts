"use client";

import i18n from "i18next";
import { initReactI18next } from "react-i18next";

import commonEs from "@/locales/es/commonEs.json";
import commonEn from "@/locales/en/commonEn.json";
import experienceEs from "@/locales/es/experience.json";
import experienceEn from "@/locales/en/experience.json";
import navLinksEs from "@/locales/es/navLinks.json";
import navLinksEn from "@/locales/en/navLinks.json";
import profileEs from "@/locales/es/profile.json";
import profileEn from "@/locales/en/profile.json";
import projectsEs from "@/locales/es/projects.json";
import projectsEn from "@/locales/en/projects.json";
import languageEs from "@/locales/es/language.json";
import languageEn from "@/locales/en/language.json";


const resources = {
  es: {
    translation: { ...commonEs },
    experience: experienceEs,
    navLinks: navLinksEs,  
    profile: profileEs,
    projects: projectsEs,
    language: languageEs
  },
  en: {
    translation: { ...commonEn },
    experience: experienceEn,
    navLinks: navLinksEn,
    profile: profileEn,
    projects: projectsEn,
    language: languageEn    
  },
};

if (!i18n.isInitialized) {
  i18n.use(initReactI18next).init({
    resources,
    lng: "es",
    fallbackLng: "es",
    interpolation: { escapeValue: false },
  });
}

export default i18n;
