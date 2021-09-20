import { StyleSheet } from "react-native";
import {
  TemplateBackgroundColor,
  textAutoBackgroundColor
} from "../../globalModifs";

const HomescreenStyles = StyleSheet.create({
  root: {
    flex: 1,
    backgroundColor: TemplateBackgroundColor
  },
  content: {
    flex: 1,
    display: "flex",
    flexDirection: "column",
    alignItems: "center"
  },
  createButton: {
    borderColor: textAutoBackgroundColor,
    width: 250,
    height: 45,
    marginVertical: 10,
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    borderWidth: 1.5,
    borderRadius: 4
  },
  createText: {
    color: textAutoBackgroundColor,
    fontWeight: "bold",
    fontSize: 16
  },
  connectButton: {
    backgroundColor: textAutoBackgroundColor,
    width: 250,
    height: 45,
    marginVertical: 10,
    marginBottom: 20,
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 4
  },
  connectText: {
    color: TemplateBackgroundColor,
    fontWeight: "bold",
    fontSize: 16
  },
  forgotPassText: {
    color: textAutoBackgroundColor,
    fontSize: 16,
    marginBottom: 20,
    textDecorationLine: "underline"
  },
  homescreenText: {
    color: textAutoBackgroundColor
  },
  appLogo: {
    height: 200,
    width: 300,
    marginVertical: 35,
    resizeMode: "contain"
  }
});

export default HomescreenStyles;
