import { StyleSheet } from "react-native";

const CreateAccountStyles = StyleSheet.create({
  root: {
    flex: 1,
    backgroundColor: "#FFFFFF"
  },
  content: {
    flex: 1
  },
  createButton: {
    borderColor: "#000000",
    borderWidth: 1.5,
    width: 250,
    height: 45,
    marginVertical: 10,
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    marginLeft: "auto",
    marginRight: "auto",
    marginBottom: 20,
    marginTop: 20,
    borderRadius: 4
  },
  createText: {
    color: "#000000",
    fontWeight: "bold",
    fontSize: 16
  }
});

export default CreateAccountStyles;
