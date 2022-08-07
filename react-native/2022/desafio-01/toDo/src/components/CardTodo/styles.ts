import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    width: "100%",
    padding: 12,
    flexDirection: "row",
    flexGrow: 1,
    justifyContent: "space-between",
    alignItems: "center",
    backgroundColor: "#262626",
    borderRadius: 8,
    marginTop: 8,
  },
  checkbox: {
    width: "85%",
  },
  text: {
    fontSize: 14,
    color: "#F2F2F2",
    paddingHorizontal: 8,
    textAlign: "left",
  },
  textCompleted: {
    fontSize: 14,
    color: "#808080",
    textAlign: "left",
    textDecorationLine: "line-through",
    paddingHorizontal: 8,
  },
  buttonRemove: {
    width: 24,
    height: 24,
    alignItems: "center",
    justifyContent: "center",
  },
});
