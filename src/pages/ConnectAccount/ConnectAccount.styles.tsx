import { StyleSheet } from "react-native";

const ConnectAccountStyles = StyleSheet.create({
  root: {
    flex: 1,
    backgroundColor: "#FFFFFF"
  },
  content: {
    flex: 1,
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center"
  },
  connectButton: {
    borderColor: "#000000",
    width: 250,
    height: 45,
    marginVertical: 10,
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    marginLeft: "auto",
    marginRight: "auto",
    borderWidth: 1.5,
    borderRadius: 4
  },
  connectText: {
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
    marginBottom: 10,
    paddingBottom: 5,
    backgroundColor: "#ffffff"
  }
});

export default ConnectAccountStyles;
