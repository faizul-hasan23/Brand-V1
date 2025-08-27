import { StyleSheet } from "react-native";

export const SepratorStyles = StyleSheet.create({
  container: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    paddingVertical: 25,
    paddingHorizontal: 25,
  },
  line: {
    height: 1,
    flex: 1,
    marginHorizontal: 8,
  },
  centerContent: {
    flexDirection: "column",
    alignItems: "center",
    gap: 6,
  },
  icon: {
    marginHorizontal: 6,
  },
  text: {
    color: "#FFFFFF60",
    fontSize: 12,
    letterSpacing: 3,
    fontWeight: "500",
    textTransform: "uppercase",
    textAlign: "center",
  },
});
