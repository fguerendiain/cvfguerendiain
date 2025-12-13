"use client";

import { motion } from "framer-motion";
import { experience, IExperience } from "@/data/experience";
import { useTranslation } from "react-i18next";
import { translateArray } from "@/utils/i18nData";

export default function Experience() {

  const { t: tExperience } = useTranslation("experience");
  const { t: tGeneral } = useTranslation();

  const exp: IExperience[] = translateArray(tExperience, experience, [
    "roleKey",
    "companyKey",
    "periodKey",
    "descriptionKey",
  ]);

  return (
    <section id="experience" className="py-16 px-4 sm:px-6 lg:px-8">
      <h3 className="text-2xl font-semibold mb-8">{tGeneral('experienceTitle')}</h3>

      <div className="space-y-6">
        {exp.map((item, index) => (
          <motion.div
            key={`${item.roleKey}-${index}`}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.2, delay: index * 0.1 }}
            className="p-4 border rounded-lg shadow-sm transform transition duration-100 hover:shadow-md hover:scale-102 space-y-1"
          >
            <h4 className="text-lg font-medium">
              {item.roleKey} – <span className="text-neutral-600">{item.companyKey}</span>
            </h4>
            <p className="text-sm text-neutral-500">{item.periodKey}</p>
            <p className="text-neutral-700 dark:text-neutral-400">{item.descriptionKey}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
