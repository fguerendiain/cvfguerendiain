"use client";

import { Mail, Github, Linkedin, Phone, MessageCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { profile } from "@/data/profile";
import { useTranslation } from "react-i18next";

export default function Contact() {
  const { t: tProfile } = useTranslation("profile");
  const { t: tGeneral } = useTranslation();

  const buttons = [
    {
      icon: <Mail size={18} />,
      label: "Email",
      href: `mailto:${profile.email}`,
    },
    {
      icon: <Phone size={18} />,
      label: "Teléfono",
      href: `tel:${profile.phone}`,
    },
    {
      icon: <MessageCircle size={18} />,
      label: "WhatsApp",
      href: `https://wa.me/${profile.phone}`,
    },
    {
      icon: <Linkedin size={18} />,
      label: "LinkedIn",
      href: profile.linkedin,
    },
    {
      icon: <Github size={18} />,
      label: "GitLab",
      href: profile.github,
    }
  ];

  return (
    <motion.section
      id="contact"
      className="py-20 text-center"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
    >
      <h3 className="text-2xl font-semibold mb-6">
        {tGeneral("contactTitle")}
      </h3>
      <p className="text-neutral-700 dark:text-neutral-400 max-w-xl mx-auto mb-8">
        {tProfile("contactMsg")}
      </p>

      <div className="flex flex-col sm:flex-row justify-center gap-6">
        {buttons.map((btn, index) => (
          <motion.div
            key={btn.label}
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: index * 0.1 }}
          >
            <Button
              variant="outline"
              asChild
              className="flex items-center gap-2 px-6 py-3 hover:scale-105 transition-transform"
            >
              <a
                href={btn.href}
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-600 hover:text-blue-800 transition-colors duration-100"
              >
                {btn.icon} {btn.label}
              </a>
            </Button>
          </motion.div>
        ))}
      </div>
    </motion.section>
  );
}
