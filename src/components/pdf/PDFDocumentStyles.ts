import { StyleSheet } from "@react-pdf/renderer";

export const styles = StyleSheet.create({
  page: {
    fontFamily: "Inter",
    padding: 30,
    fontSize: 10,
    lineHeight: 1.4,
    color: "#111",
  },

  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 20,
    backgroundColor: "#8ec5ff",
    padding: 8,
    borderRadius: 10
  },

  headerLeft: {
    flex: 1,
  },

  headerRight: {
    fontSize: 9,
    textAlign: "right",
    gap: 2,
  },

  headerName: {
    fontSize: 18,
    fontWeight: "bold",
    marginBottom: 4,
  },

  headerRole: {
    fontSize: 12,
    color: "#444",
  },

  link: {
    color: "#2563eb",
    textDecoration: "none",
  },

  section: {
    marginBottom: 18,
  },

  subtitle: {
    fontSize: 11,
    fontWeight: "bold",
    marginBottom: 6,
    borderBottom: "1 solid #ddd",
    paddingBottom: 2,
  },

  experienceItem: {
    marginBottom: 10,
  },

  experienceRole: {
    fontSize: 11,
    fontWeight: "bold",
  },

  experiencePeriod: {
    fontSize: 9,
    color: "#666",
    marginBottom: 2,
  },

  pageTitle: {
    fontSize: 13,
    fontWeight: "bold",
    textAlign: "center",
    marginBottom: 14,
  },

  skillGrid: {
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "center",
    gap: 10,
  },

  skillBox: {
    width: "30%",
    border: "1 solid #ddd",
    borderRadius: 6,
    padding: 8,
    backgroundColor: "#d0d4db"
  },

  skillBoxTitle: {
    fontSize: 10,
    fontWeight: "bold",
    textAlign: "center",
    marginBottom: 6,
  },

  badgeContainer: {
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "center",
  },

  badge: {
    backgroundColor: "#f2f2f2",
    paddingHorizontal: 5,
    paddingVertical: 2,
    borderRadius: 3,
    marginRight: 4,
    marginBottom: 4,
    fontSize: 9,
  },

  languagesBlock: {
    marginTop: 30,
    alignItems: "center",
  },

  languageItem: {
    fontSize: 10,
    marginBottom: 4,
  },

  grid: {
    flexDirection: "row",
    gap: 24,
  },

  gridCol: {
    width: "50%",
  },

  gridTitle: {
    fontSize: 10,
    fontWeight: "bold",
    marginBottom: 4,
  },

  skillGroup: {
    marginBottom: 10,
  },
});
