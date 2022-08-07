import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#1A1A1A",
  },
  main: {
    flex: 1,
    padding: 24,
  },
  header: {
    width: "100%",
    height: 175,
    backgroundColor: "#0D0D0D",
    alignItems: "center",
    justifyContent: "center",
  },
  input: {
    flex: 1,
    height: 52,
    backgroundColor: "#262626",
    borderRadius: 5,
    color: "#F2F2F2",
    padding: 16,
    fontSize: 16,
    marginRight: 4,
  },
  button: {
    width: 52,
    height: 52,
    borderRadius: 6,
    backgroundColor: "#1E6F9F",
    alignItems: "center",
    justifyContent: "center",
  },
  form: {
    width: "100%",
    flexDirection: "row",
    marginTop: -45,
    marginBottom: 42,
  },
  headerList: {
    width: "100%",
    flexDirection: "row",
    justifyContent: "space-between",
    borderBottomColor: "#333333",
    borderBottomWidth: 2,
    paddingBottom: 20,
  },
  headerListRow: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
  },
  viewCount: {
    marginLeft: 8,
    backgroundColor: "#333333",
    paddingHorizontal: 8,
    paddingVertical: 5,
    borderRadius: 99999,
  },
  textCount: {
    color: "#D9D9D9",
    fontSize: 14,
    fontWeight: "bold",
  },
  textCreated: {
    fontSize: 14,
    color: "#4EA8DE",
    fontWeight: "bold",
  },
  textCompleted: {
    fontSize: 14,
    color: "#8284FA",
    fontWeight: "bold",
  },
  containerListEmpty: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    marginTop: 40,
  },
  listEmptyTextBold: {
    color: "#808080",
    fontSize: 14,
    textAlign: "center",
    marginTop: 16,
    fontWeight: "bold",
  },
  listEmptyText: {
    color: "#808080",
    fontSize: 14,
    textAlign: "center",
  },
});
