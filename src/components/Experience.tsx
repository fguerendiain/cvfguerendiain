"use client";

import { motion } from "framer-motion";
import { experience } from "@/data/experience";
import { useTranslation } from "react-i18next";
import { translateArray } from "@/utils/i18nData";

export default function Experience() {

  const { t: tExperience } = useTranslation("experience");
  const { t: tGeneral } = useTranslation();

  const exp = translateArray(tExperience, experience, [
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
            key={`${item.role}-${index}`}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: index * 0.2 }}
            className="p-4 border rounded-lg shadow-sm transform transition duration-300 hover:shadow-md hover:scale-102 space-y-1"
          >
            <h4 className="text-lg font-medium">
              {item.role} – <span className="text-neutral-600">{item.company}</span>
            </h4>
            <p className="text-sm text-neutral-500">{item.period}</p>
            <p className="text-neutral-700">{item.description}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
