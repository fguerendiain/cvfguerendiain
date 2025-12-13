"use client";

import { profile } from "@/data/profile";
import { motion } from "framer-motion";
import { useTranslation } from "react-i18next";

export function Footer() {
  const { t: tProfile } = useTranslation('profile');  
  return (
    <motion.footer
      className="py-8 text-center text-neutral-500 text-sm px-4 sm:px-6 lg:px-8"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
    >
      <p>
        {new Date().getFullYear()} — {tProfile('footerCreditsMsg')}: {profile.name}.
      </p>
    </motion.footer>
  );
}
