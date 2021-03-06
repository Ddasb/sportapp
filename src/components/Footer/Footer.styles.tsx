import { StyleSheet } from "react-native";

const FooterStyles = StyleSheet.create({
  footer: {
    height: 80,
    backgroundColor: "#ffffff",
    display: "flex",
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    borderTopWidth: 0.5,
    borderColor: "#000000"
  },
  footerSponsor: {
    width: "25%",
    height: 60,
    paddingHorizontal: 10
  }
});

export default FooterStyles;
