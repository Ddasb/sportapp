import { StyleSheet } from "react-native";

const ConnectAccountStyles = StyleSheet.create({
  root: {
    flex: 1,
    backgroundColor: "#FFFFFF"
  },
  content: {
    flex: 1,
    display: "flex",
    alignItems: "center",
    justifyContent: "center"
  },
  createButton: {
    borderColor: "#000000",
    borderWidth: 1,
    width: 250,
    height: 45,
    marginVertical: 10,
    display: "flex",
    justifyContent: "center",
    alignItems: "center"
  },
  createText: {
    color: "#000000",
    fontWeight: "bold",
    fontSize: 16
  },
  title: {
    fontWeight: "bold",
    marginBottom: 50
  },
  textInput: {
    width: 250,
    borderBottomWidth: 1,
    marginBottom: 10,
    paddingBottom: 5
  }
});

export default ConnectAccountStyles;
