"use client";

import { motion } from "framer-motion";
import { useTranslation } from "react-i18next";

export default function AboutMe() {
  const { t: tGeneral } = useTranslation();
  const { t: tProfile } = useTranslation("profile");
  
  return (
    <motion.section
      id="about"
      className="py-16 px-4 sm:px-6 lg:px-8"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
    >
      <h3 className="text-2xl font-semibold mb-6">{tGeneral("aboutTitle")}</h3>
      <p className="text-neutral-700 leading-relaxed">{tProfile("about")}</p>
    </motion.section>
  );
}
