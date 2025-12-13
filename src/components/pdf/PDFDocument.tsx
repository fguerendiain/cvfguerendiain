import { profile } from "@/data/profile";
import { skills } from "@/data/skills";
import { experience, IExperience } from "@/data/experience";
import { ILanguage, language } from "@/data/language";
import { ISkills } from "@/data/skills";
import { useTranslation } from "react-i18next";
import { translateArray } from "@/utils/i18nData";
import { Page, Text, View, Document, Font, Link } from "@react-pdf/renderer";
import { styles } from "./PDFDocumentStyles";

Font.register({
  family: "Inter",
  fonts: [
    { src: "/fonts/Inter-Regular.ttf", fontWeight: "normal" },
    { src: "/fonts/Inter-Bold.ttf", fontWeight: "bold" },
  ],
});

type SkillCategory = keyof ISkills;

const categoryTitleMap: Record<SkillCategory, string> = {
  frontend: "skillsFrontEndTitle",
  backend: "skillsBackendTitle",
  mobile: "skillsMobileTitle",
  testing: "skillsTestingTitle",
  tools: "skillsToolsTitle",
  aiTools: "skillsAiToolsTitle",
  methodologies: "skillsMetodologiesTitle",
  softSkills: "skillsSoftSkillsTitle",
};

export function PDFDocument() {
  const { t: tProfile } = useTranslation("profile");
  const { t: tLanguages } = useTranslation("language");
  const { t: tExperience } = useTranslation("experience");
  const { t: tGeneral } = useTranslation();

  const langs: ILanguage[] = translateArray(tLanguages, language, [
    "nameKey",
    "levelKey",
  ]);

  const exp: IExperience[] = translateArray(tExperience, experience, [
    "roleKey",
    "companyKey",
    "periodKey",
    "descriptionKey",
  ]);

  const formatPhoneNumber = (phoneNumber: string) => {
    if (!phoneNumber) return "";
    const digits = phoneNumber.replace(/\D/g, "");
    if (digits.length < 13) return phoneNumber;
    const country = digits.slice(0, 2);
    const area = digits.slice(3, 5);
    const first = digits.slice(5, 9);
    const second = digits.slice(9, 13);
    return `(+${country}${area}) ${first}-${second}`;
  };

  return (
    <Document>
      {/* ================= PAGE 1 ================= */}
      <Page size="A4" style={styles.page}>
        {/* HEADER */}
        <View style={styles.header}>
          <View style={styles.headerLeft}>
            <Text style={styles.headerName}>{profile.name}</Text>
            <Text style={styles.headerRole}>{profile.role}</Text>
            <Text style={{marginTop: 10}}>
              <Link
                src={profile.webSite}
                style={{ textDecoration: "none", color: "#19429b" }}
              >
                {tGeneral('pdfGoToWebSite')}
              </Link>
            </Text>
          </View>

          <View style={styles.headerRight}>
            <Text>{profile.email}</Text>
            <Text>{formatPhoneNumber(profile.phone)}</Text>
            <Text>
              LinkedIn:
              <Link
                src={profile.linkedin}
                style={{ textDecoration: "none", color: "#19429b" }}
              >
                fguerendiain
              </Link>
            </Text>
            <Text>
              GitLab:
              <Link
                src={profile.github}
                style={{ textDecoration: "none", color: "#19429b" }}
              >
                fguerendiain33
              </Link>
            </Text>
          </View>
        </View>

        {/* ABOUT */}
        <View style={styles.section}>
          <Text style={styles.subtitle}>{tGeneral("aboutTitle")}</Text>
          <Text>{tProfile("about")}</Text>
        </View>

        {/* EXPERIENCE */}
        <View style={styles.section}>
          <Text style={styles.subtitle}>{tGeneral("experienceTitle")}</Text>

          {exp.slice(0, 4).map((item) => (
            <View key={item.id} style={styles.experienceItem}>
              <Text style={styles.experienceRole}>
                {item.roleKey} – {item.companyKey}
              </Text>
              <Text style={styles.experiencePeriod}>{item.periodKey}</Text>
              <Text>{item.descriptionKey}</Text>
            </View>
          ))}
        </View>
      </Page>

      {/* ================= PAGE 2 ================= */}
      <Page size="A4" style={styles.page}>
        {/* SKILLS */}
        <Text style={styles.pageTitle}>{tGeneral("skillsTitle")}</Text>

        <View style={styles.skillGrid}>
          {(Object.keys(skills) as SkillCategory[]).map((category) => (
            <View key={category} style={styles.skillBox}>
              <Text style={styles.skillBoxTitle}>
                {tGeneral(categoryTitleMap[category])}
              </Text>

              <View style={styles.badgeContainer}>
                {skills[category].map((skill) => (
                  <Text key={skill} style={styles.badge}>
                    {skill}
                  </Text>
                ))}
              </View>
            </View>
          ))}
        </View>

        {/* LANGUAGES */}
        <View style={styles.languagesBlock}>
          <Text style={styles.pageTitle}>{tGeneral("languajeTitle")}</Text>

          {langs.map((l) => (
            <Text key={l.id} style={styles.languageItem}>
              {l.nameKey} – {l.levelKey}
            </Text>
          ))}
        </View>
      </Page>
    </Document>
  );
}
