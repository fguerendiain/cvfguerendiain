"use client";

import { language } from "@/data/language";
import i18n from "@/lib/i18n";
import { translateArray } from "@/utils/i18nData";
import { motion } from "framer-motion";
import { useTranslation } from "react-i18next";

export default function Languages() {
  const { t: tLanguages } = useTranslation("language");
  const { t: tGeneral } = useTranslation();
  const langs = translateArray(tLanguages, language, ["nameKey", "levelKey", "extraKey"]);


  return (
    <section id='language' className="py-8 px-4 sm:px-6 lg:px-8">
      <h3 className="text-2xl font-semibold mb-6">{tGeneral('languajeTitle')}</h3>
      <div className="space-y-4">
        {langs.map((lang) => (
          <motion.div
            key={`${lang.name}-${i18n.language}`}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="flex items-center justify-between p-4 border rounded-lg shadow-sm hover:shadow-md transition"
          >
            <div>
              <p className="font-medium">{lang.name}</p>
              {lang.extra && <p className="text-sm text-neutral-500">{lang.extra}</p>}
            </div>
            <span className="text-sm font-semibold">{lang.level}</span>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
