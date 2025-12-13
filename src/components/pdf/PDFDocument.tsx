import { profile } from "@/data/profile";
import { skills } from "@/data/skills";
import { experience, IExperience } from "@/data/experience";
import { ILanguage, language } from "@/data/language";
import { ISkills } from "@/data/skills";
import { useTranslation } from "react-i18next";
import { translateArray } from "@/utils/i18nData";
import { Page, Text, View, Document, Font, Image, Link } from "@react-pdf/renderer";
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
};

export function PDFDocument() {
  const { t: tProfile } = useTranslation("profile");
  const { t: tLanguages } = useTranslation("language");
  const { t: tExperience } = useTranslation("experience");
  const { t: tGeneral } = useTranslation();

  const langs: ILanguage[] = translateArray(tLanguages, language, [
    "nameKey",
    "levelKey",
    "extraKey",
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
          <View>
            <Text style={styles.headerName}>{profile.name}</Text>
            <Text style={styles.headerRole}>{profile.role}</Text>
          </View>
        </View>

        <View style={styles.columns}>
          {/* LEFT COLUMN */}
          <View style={styles.leftCol}>
            <View style={styles.section}>
              <Text style={styles.subtitle}>{tGeneral("contactTitle")}</Text>
              <Text>{profile.email}</Text>
              <Text>{formatPhoneNumber(profile.phone)}</Text>
              <Text>
                LinkedIn:{" "}
                <Link
                  src={profile.linkedin}
                  style={{ textDecoration: "none", color: "#2563eb" }}
                >
                  fguerendiain
                </Link>
              </Text>

              <Text style={{ marginTop: 4 }}>
                GitLab:{" "}
                <Link
                  src={profile.github}
                  style={{ textDecoration: "none", color: "#2563eb" }}
                >
                  fguerendiain33
                </Link>
              </Text>
            </View>

            <View style={styles.section}>
              <Text style={styles.subtitle}>{tGeneral("languajeTitle")}</Text>
              {langs.map((l) => (
                <Text key={l.id}>
                  {l.nameKey} – {l.levelKey}
                </Text>
              ))}
            </View>
          </View>

          {/* RIGHT COLUMN */}
          <View style={styles.rightCol}>
            <View style={styles.section}>
              <Text style={styles.subtitle}>{tGeneral("aboutTitle")}</Text>
              <Text>{tProfile("about")}</Text>
            </View>

            <View style={styles.section}>
              <Text style={styles.subtitle}>{tGeneral("skillsTitle")}</Text>

              {(Object.keys(skills) as SkillCategory[]).map((category) => (
                <View key={category} style={{ marginBottom: 10 }}>
                  <Text style={{ textAlign: "center", fontWeight: "bold", fontSize: 10 }}>
                    {tGeneral(categoryTitleMap[category])}
                  </Text>

                  <View style={{ flexDirection: "row", flexWrap: "wrap" }}>
                    {skills[category].map((skill) => (
                      <Text key={skill} style={styles.badge}>
                        {skill}
                      </Text>
                    ))}
                  </View>
                </View>
              ))}
            </View>
          </View>
        </View>
      </Page>

      {/* ================= PAGE 2 ================= */}
      <Page size="A4" style={styles.page}>
        <View style={styles.section}>
          <Text style={styles.subtitle}>{tGeneral("experienceTitle")}</Text>

          {exp.map((exp) => (
            <View key={exp.id} style={{ marginBottom: 8 }}>
              <Text style={styles.experienceRole}>
                {exp.roleKey} – {exp.companyKey}
              </Text>
              <Text style={styles.experiencePeriod}>{exp.periodKey}</Text>
              <Text>{exp.descriptionKey}</Text>
            </View>
          ))}
        </View>
      </Page>
    </Document>
  );
}
