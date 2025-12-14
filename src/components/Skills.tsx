"use client";

import { Badge } from "@/components/ui/badge";
import { ISkills, skills } from "@/data/skills";
import { motion } from "framer-motion";
import { useTranslation } from "react-i18next";

export default function Skills() {
  const { t: tGeneral } = useTranslation();

  type SkillCategory = keyof ISkills;

  const mapCategoryType = (category: string) => category as SkillCategory  

  const categoryTitleMap: Record<SkillCategory, string> = {
    frontend: "skillsFrontEndTitle",
    backend: "skillsBackendTitle",
    mobile: "skillsMobileTitle",
    testing: "skillsTestingTitle",
    tools: "skillsToolsTitle",
    aiTools: "skillsAiToolsTitle",
    methodologies: "skillsMetodologiesTitle",
    softSkills: "skillsSoftSkillsTitle"
  };

  return (
    <section id="skills" className="py-16 px-4 sm:px-6 lg:px-8">
      <h3 className="text-2xl font-semibold mb-8">{tGeneral("skillsTitle")}</h3>

      <div className="space-y-10">
        {Object.entries(skills).map(([category, list]) => (
          <div key={category}>
            <h4 className="font-semibold text-lg mb-4 capitalize">
              {tGeneral(categoryTitleMap[mapCategoryType(category)])}
            </h4>
            <div className="flex flex-wrap gap-3">
              {list.map((skill: string, index: number) => (
                <motion.div
                  key={skill}
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.3, delay: index * 0.05 }}
                >
                  <Badge
                    variant="secondary"
                    className="transform transition duration-100 hover:scale-105"
                  >
                    {tGeneral(skill)}
                  </Badge>
                </motion.div>
              ))}
            </div>
          </div>
        ))
        }
      </div>
    </section>
  );
}
