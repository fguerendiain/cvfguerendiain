import {
  Page,
  Text,
  View,
  Document,
  StyleSheet,
  Font,
} from "@react-pdf/renderer";

import { profile } from "@/data/profile";
import { skills } from "@/data/skills";
import { experience } from "@/data/experience";
import { useTranslation } from "react-i18next";
import { translateArray } from "@/utils/i18nData";

Font.register({
  family: "Inter",
  fonts: [
    {
      src: "/fonts/Inter-Regular.ttf",
      fontWeight: "normal",
    },
    {
      src: "/fonts/Inter-Bold.ttf",
      fontWeight: "bold",
    },
  ],
});

const styles = StyleSheet.create({
  page: {
    fontFamily: "Inter",
    padding: 25,
    fontSize: 10.5,
    lineHeight: 1.35,
    color: "#111",
  },
  section: { marginBottom: 10 },
  headerName: { fontSize: 18, fontWeight: "bold" },
  headerRole: { fontSize: 12, marginBottom: 6 },
  subtitle: {
    fontSize: 12,
    fontWeight: "bold",
    marginBottom: 6,
    marginTop: 4,
  },
  badge: {
    backgroundColor: "#e5e5e5",
    paddingHorizontal: 4,
    paddingVertical: 2,
    borderRadius: 4,
    marginRight: 4,
    marginBottom: 4,
  },
  experienceRole: { fontSize: 11, fontWeight: "bold" },
  experiencePeriod: { fontSize: 9, color: "#666" },
});

export function PDFDocument() {
  const { t } = useTranslation("experience");

  const exp = translateArray(t, experience, [
    "roleKey",
    "companyKey",
    "periodKey",
    "descriptionKey",
  ]);

  return (
    <Document>
      <Page size="A4" style={styles.page}>
        <View style={styles.section}>
          <Text style={styles.headerName}>{profile.name}</Text>
          <Text style={styles.headerRole}>{profile.role}</Text>
          <Text>{profile.location}</Text>
          <Text>{profile.email}</Text>
          <Text>{profile.github}</Text>
          <Text>{profile.linkedin}</Text>
        </View>

        <View style={styles.section}>
          <Text style={styles.subtitle}>Sobre mí</Text>
          <Text>{profile.about}</Text>
        </View>

        <View style={styles.section}>
          <Text style={styles.subtitle}>Skills</Text>

          {Object.entries(skills).map(([category, items]: any) => (
            <View key={category} style={{ marginBottom: 6 }}>
              <Text style={{ fontSize: 10, marginBottom: 2 }}>{category}</Text>

              <View style={{ flexDirection: "row", flexWrap: "wrap" }}>
                {items.map((skill: string) => (
                  <Text key={skill} style={styles.badge}>
                    {skill}
                  </Text>
                ))}
              </View>
            </View>
          ))}
        </View>

        <View style={styles.section}>
          <Text style={styles.subtitle}>Experiencia</Text>

          {exp.map((exp, i) => (
            <View key={i} style={{ marginBottom: 6 }}>
              <Text style={styles.experienceRole}>
                {exp.role} – {exp.company}
              </Text>
              <Text style={styles.experiencePeriod}>{exp.period}</Text>
              <Text>{exp.description}</Text>
            </View>
          ))}
        </View>
      </Page>
    </Document>
  );
}
