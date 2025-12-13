"use client";

import { motion } from "framer-motion";
import { useTranslation } from "react-i18next";
import { projects } from "@/data/projects";
import { Gitlab, Globe } from "lucide-react";
import i18n from "@/lib/i18n";

export default function Projects() {
  const { t: tGeneral } = useTranslation();
  const { t: tProjects } = useTranslation("projects");

  return (
    <section id="projects" className="py-16 px-4 sm:px-6 lg:px-8">
      <h3 className="text-2xl font-semibold mb-8">
        {tGeneral("projectsTitle")}
      </h3>

      <div className="space-y-6">
        {projects.map((proj, index) => (
          <motion.div
            key={`${proj.key}-${i18n.language}`}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: index * 0.2 }}
            className="p-4 border rounded-lg shadow-sm transform transition duration-300 hover:shadow-md hover:scale-102 space-y-1"
          >
            <h4 className="text-lg font-medium">
              {tProjects(`items.${proj.key}.title`)}
            </h4>
            <p className="text-sm text-neutral-500">
              {tProjects(`items.${proj.key}.description`)}
            </p>

            {proj.link && (
              <button
                onClick={() => window.open(proj.link, "_blank")}
                className="inline-flex items-center gap-2 mt-2 px-3 py-1 border rounded-lg text-neutral-700 dark:text-neutral-300 hover:bg-gray-100 dark:hover:bg-neutral-800 transition"
                title={tGeneral('projectWebLinkMsg')}
              >
                <Globe className="w-4 h-4" />
              </button>
            )}

            {proj.linkGit && (
              <button
                onClick={() => window.open(proj.linkGit, "_blank")}
                className="inline-flex items-center gap-2 mt-2 px-3 py-1 border rounded-lg text-neutral-700 dark:text-neutral-300 hover:bg-gray-100 dark:hover:bg-neutral-800 transition"
                title={tGeneral('projectGitLinkMsg')}
              >
                <Gitlab className="w-4 h-4" />
              </button>
            )}
          </motion.div>
        ))}
      </div>
    </section>
  );
}
