import React from "react";
import { Image, View } from "react-native";

import { TemplateArrayImagesSponsorPath } from "../../globalModifs";

import FooterStyles from "./Footer.styles";

const Footer = () => {
  return (
    <>
      {TemplateArrayImagesSponsorPath.length > 0 ? (
        <View style={FooterStyles.footer}>
          {TemplateArrayImagesSponsorPath.map((sponsor, index) => (
            <View style={FooterStyles.footerSponsor} key={index}>
              <Image
                source={sponsor}
                resizeMode="contain"
                style={{ height: "100%", width: "100%" }}
              />
            </View>
          ))}
        </View>
      ) : null}
    </>
  );
};

export default Footer;
