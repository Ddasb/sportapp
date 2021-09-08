import { StyleSheet } from "react-native";
import {
  TemplateBackgroundColor,
  textAutoBackgroundColor
} from "../../constants";

const HomescreenStyles = StyleSheet.create({
  root: {
    flex: 1,
    backgroundColor: TemplateBackgroundColor
  },
  content: {
    flex: 1,
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center"
  },
  createButton: {
    borderColor: textAutoBackgroundColor,
    borderWidth: 1,
    width: 250,
    height: 45,
    display: "flex",
    justifyContent: "center",
    alignItems: "center"
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
    marginTop: 20,
    marginBottom: 20,
    display: "flex",
    justifyContent: "center",
    alignItems: "center"
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
  versionText: {
    color: textAutoBackgroundColor
  }
});

export default HomescreenStyles;
