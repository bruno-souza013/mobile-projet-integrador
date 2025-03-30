import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#1b1b1b",
    padding: 20,
    alignItems: "center",
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    color: "#fff",
    marginBottom: 20,
  },
  recordButton: {
    width: 80,
    height: 80,
    borderRadius: 40,
    backgroundColor: "#FF0000",
    justifyContent: "center",
    alignItems: "center",
    marginBottom: 30,
  },
  recording: {
    backgroundColor: "#FF6347",
  },
  recordButtonText: {
    color: "#fff",
    fontWeight: "bold",
  },
  audioItem: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    backgroundColor: "#333",
    padding: 10,
    borderRadius: 5,
    marginBottom: 10,
    width: "100%",
  },
  audioText: {
    color: "#fff",
    fontSize: 16,
  },
  playButton: {
    backgroundColor: "#007BFF",
    paddingVertical: 5,
    paddingHorizontal: 10,
    borderRadius: 5,
  },
  playButtonText: {
    color: "#fff",
    fontSize: 14,
  },
  emptyText: {
    color: "#aaa",
    fontSize: 16,
    marginTop: 20,
  },
});

export default styles;