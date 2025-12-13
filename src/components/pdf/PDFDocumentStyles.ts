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
    alignItems: "center",
    marginBottom: 30,
  },

  headerName: { fontSize: 18, fontWeight: "bold", marginBottom: 10 },
  headerRole: { fontSize: 12, color: "#444" },

  columns: {
    flexDirection: "row",
    gap: 16,
  },

  leftCol: { width: "30%" },
  rightCol: { width: "70%" },

  section: { marginBottom: 20 },

  subtitle: {
    fontSize: 11,
    fontWeight: "bold",
    marginBottom: 4,
    borderBottom: "1 solid #ddd",
    paddingBottom: 2,
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

  experienceRole: { fontSize: 11, fontWeight: "bold" },
  experiencePeriod: { fontSize: 9, color: "#666" },
});
