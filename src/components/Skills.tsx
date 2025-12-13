"use client";

import { Badge } from "@/components/ui/badge";
import { skills } from "@/data/skills";
import { motion } from "framer-motion";
import { useTranslation } from "react-i18next";

export default function Skills() {
  const { t: tGeneral } = useTranslation();
  return (
    <section id="skills" className="py-16 px-4 sm:px-6 lg:px-8">
      <h3 className="text-2xl font-semibold mb-8">{tGeneral('skillsTitle')}</h3>

      <div className="space-y-10">
        {Object.entries(skills).map(([category, list]) => (
          <div key={category}>
            <h4 className="font-semibold text-lg mb-4 capitalize">
              {category === "frontend"
                ? tGeneral('skillsFrontEndTitle')
                : category === "testing"
                ? tGeneral('skillsTestingTitle')
                : category === "tools"
                ? tGeneral('skillsToolsTitle')
                : tGeneral('skillsMetodologiesTitle')}
            </h4>

            <div className="flex flex-wrap gap-3">
              {list.map((skill, index) => (
                <motion.div
                  key={skill}
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.3, delay: index * 0.05 }}
                >
                  <Badge
                    variant="secondary"
                    className="transform transition duration-300 hover:scale-105"
                  >
                    {skill}
                  </Badge>
                </motion.div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
