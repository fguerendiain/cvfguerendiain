"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown, ChevronUp } from "lucide-react";
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
    "summaryKey"
  ]);

  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggle = (index: number) => {
    setOpenIndex(prev => (prev === index ? null : index));
  };

  return (
    <section id="experience" className="py-16 px-4 sm:px-6 lg:px-8">
      <h3 className="text-2xl font-semibold mb-8">
        {tGeneral("experienceTitle")}
      </h3>

      <div className="space-y-6">
        {exp.map((item, index) => {
          const isOpen = openIndex === index;

          return (
            <motion.div
              key={`${item.roleKey}-${index}`}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.2, delay: index * 0.1 }}
              className="p-4 border rounded-lg shadow-sm transition-all duration-200 hover:shadow-md space-y-2"
            >
              {/* Header */}
              <h4 className="text-lg font-medium">
                {item.roleKey} –{" "}
                <span className="text-neutral-600">
                  {item.companyKey}
                </span>
              </h4>

              <p className="text-sm text-neutral-500">
                {item.periodKey}
              </p>

              {/* Content */}
              <AnimatePresence mode="wait">
                <motion.div
                  key={isOpen ? "description" : "summary"}
                  initial={{ opacity: 0, height: 0 }}
                  animate={{ opacity: 1, height: "auto" }}
                  exit={{ opacity: 0, height: 0 }}
                  transition={{ duration: 0.25 }}
                >
                  <p className="text-neutral-700 dark:text-neutral-400 whitespace-pre-line">
                    {isOpen ? item.descriptionKey : item.summaryKey}
                  </p>
                </motion.div>
              </AnimatePresence>

              <button
                onClick={() => toggle(index)}
                className="mx-auto flex items-center text-neutral-500 hover:text-neutral-800 hover:scale-110 transition mt-2"
              >
                <motion.span
                  animate={{ rotate: isOpen ? 180 : 0 }}
                  transition={{ duration: 0.2 }}
                >
                  <ChevronDown size={16} />
                </motion.span>
              </button>
            </motion.div>
          );
        })}
      </div>
    </section>
  );
}
