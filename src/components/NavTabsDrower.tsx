"use client";

import { InavLink } from "@/data/navLinks";
import { motion } from "framer-motion";

interface NavTabsDrawerProps {
  navTabs: InavLink[];
  isOpen: boolean;
  onClose: () => void;
}

export default function NavTabsDrawer({ navTabs, isOpen, onClose }: NavTabsDrawerProps) {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex">
      <div
        className="fixed inset-0 bg-black/50 dark:bg-black/70"
        onClick={onClose}
      />
      <motion.div
        initial={{ x: "100%" }}
        animate={{ x: 0 }}
        exit={{ x: "100%" }}
        className="ml-auto w-64 h-full bg-white dark:bg-neutral-900 shadow-lg z-50 p-6 flex flex-col"
      >
        <button
          className="self-end mb-4 p-1 rounded border hover:bg-gray-200 dark:hover:bg-gray-700"
          onClick={onClose}
        >
          X
        </button>

        <nav className="flex flex-col gap-4">
          {navTabs.map((link) => (
            <a
              key={link.id}
              href={link.hrefKey}
              className="hover:underline transition text-black dark:text-white"
              onClick={onClose}
            >
              {link.labelKey}
            </a>
          ))}
        </nav>
      </motion.div>
    </div>
  );
}
