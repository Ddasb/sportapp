import { StyleSheet } from "react-native";

const CreateAccountHeaderStyles = StyleSheet.create({
  headerAccount: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    height: 60,
    borderBottomWidth: 1
  },
  smallView: {
    width: "25%"
  },
  content: {
    width: "50%",
    display: "flex",
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center"
  },
  logoHeader: {
    height: 50,
    width: "100%",
    resizeMode: "contain"
  }
});

export default CreateAccountHeaderStyles;
