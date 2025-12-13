"use client";

import { motion } from "framer-motion";
import { useState } from "react";
import ExportPDFButton from "./pdf/ExportPDFButton";
import { ThemeSwitcher } from "./ThemeSwitcher";
import { LanguageSelector } from "./LanguageSelector";
import { useTranslation } from "react-i18next";
import { translateArray } from "@/utils/i18nData";
import { InavLink, navLinks } from "@/data/navLinks";
import { profile } from "@/data/profile";
import NavTabsDrawer from "./NavTabsDrower";

export function Header() {
  const { t: tNavLinks } = useTranslation("navLinks");
  const navTabs: InavLink[] = translateArray(tNavLinks, navLinks, ["id", "labelKey", "hrefKey"]);
  const [drawerOpen, setDrawerOpen] = useState(false);

  return (
    <>
      <motion.header
        className="w-full sticky top-0 z-50 border-b border-white/20 dark:border-black/20 bg-white/70 dark:bg-black/30 backdrop-blur-md"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-3 flex items-center justify-between">
          <h1 className="text-xl sm:text-2xl md:text-3xl font-semibold">
            {profile.name}
          </h1>

          <nav className="hidden sm:flex gap-4 text-sm">
            {navTabs.map((link) => (
              <a
                key={link.id}
                href={link.hrefKey}
                className="hover:underline transition"
              >
                {link.labelKey}
              </a>
            ))}
          </nav>

          {/* Botones y drawer toggle */}
          <div className="flex items-center gap-4">
            <LanguageSelector />
            <ExportPDFButton />
            <ThemeSwitcher />

            {/* Botón drawer mobile */}
            <button className="sm:hidden" onClick={() => setDrawerOpen(true)}>
              ☰
            </button>
          </div>
        </div>
      </motion.header>
      <NavTabsDrawer
        navTabs={navTabs}
        isOpen={drawerOpen}
        onClose={() => setDrawerOpen(false)}
      />
    </>
  );
}
